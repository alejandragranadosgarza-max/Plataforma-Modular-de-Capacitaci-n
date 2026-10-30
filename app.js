// ==========================================
// LÓGICA CENTRAL DE LOS CUESTIONARIOS (MULTI-MÓDULO)
// ==========================================
var activeQueue = [];
var currentIndex = 0;
var currentQuestion = null;
var questionStats = {};
var roundNumber = 1;
var wrongQueue = [];
var activeQuizType = 'testing'; // 'testing', 'ba', 'tech'
var answeredCurrent = false;

// --- CONTROL DE SELECCIÓN GENERAL (GENÉRICO) ---
function toggleAllChapters(state, prefix) {
    var cbs = document.querySelectorAll('.' + prefix + '-chap-cb');
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = state;
        var card = cbs[i].closest('.chapter-card');
        if (card) {
            if (state) card.classList.remove('unchecked');
            else card.classList.add('unchecked');
        }
    }
    updateSelectionCounter(prefix);
}

function updateSelectionCounter(prefix) {
    var cbs = document.querySelectorAll('.' + prefix + '-chap-cb');
    var count = 0;
    var total = cbs.length;
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].checked) count++;
        var card = cbs[i].closest('.chapter-card');
        if (card) {
            if (cbs[i].checked) card.classList.remove('unchecked');
            else card.classList.add('unchecked');
        }
    }
    var badge = document.getElementById(prefix + '-sel-counter');
    var errBox = document.getElementById(prefix + '-setup-error');
    if (badge) {
        badge.innerText = count + " de " + total + " seleccionados";
        badge.style.background = (count > 0) ? "#28a745" : "#dc3545";
    }
    if (errBox && count > 0) errBox.style.display = 'none';
}

// --- INICIO DE CUESTIONARIOS POR MÓDULO ---

// 1. MÓDULO TESTING
function startQuizFromSetup() {
    activeQuizType = 'testing';
    var cbs = document.querySelectorAll('.testing-chap-cb');
    var selectedChapters = [];
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].checked) {
            selectedChapters.push(parseInt(cbs[i].value, 10));
        }
    }
    
    var errBox = document.getElementById('testing-setup-error');
    if (selectedChapters.length === 0) {
        if (errBox) errBox.style.display = 'block';
        return;
    }
    if (errBox) errBox.style.display = 'none';

    var pool = (typeof testingQuestions !== 'undefined') ? testingQuestions : [];
    runQuizPool(pool, selectedChapters);
}

// 2. MÓDULO BUSINESS ANALYSIS (BABOK)
function startBaQuizFromSetup() {
    activeQuizType = 'ba';
    var cbs = document.querySelectorAll('.ba-chap-cb');
    var selectedChapters = [];
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].checked) {
            selectedChapters.push(parseInt(cbs[i].value, 10));
        }
    }
    
    var errBox = document.getElementById('ba-setup-error');
    if (selectedChapters.length === 0) {
        if (errBox) errBox.style.display = 'block';
        return;
    }
    if (errBox) errBox.style.display = 'none';

    var pool = (typeof baQuestions !== 'undefined') ? baQuestions : [];
    runQuizPool(pool, selectedChapters);
}

// 3. MÓDULO CONCEPTOS TÉCNICOS
function startTechQuizFromSetup() {
    activeQuizType = 'tech';
    var cbs = document.querySelectorAll('.tech-chap-cb');
    var selectedChapters = [];
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].checked) {
            selectedChapters.push(parseInt(cbs[i].value, 10));
        }
    }
    
    var errBox = document.getElementById('tech-setup-error');
    if (selectedChapters.length === 0) {
        if (errBox) errBox.style.display = 'block';
        return;
    }
    if (errBox) errBox.style.display = 'none';

    var pool = (typeof techQuestions !== 'undefined') ? techQuestions : [];
    runQuizPool(pool, selectedChapters);
}

// --- FILTRADO Y EJECUCIÓN CENTRALIZADA ---
function runQuizPool(pool, selectedChapters) {
    var tempPool = [];
    for (var j = 0; j < pool.length; j++) {
        var q = pool[j];
        var chapNum = (q.chapter !== undefined && q.chapter !== null) ? parseInt(q.chapter, 10) : Math.floor(q.id / 100);
        if (selectedChapters.indexOf(chapNum) !== -1) {
            tempPool.push(q);
        }
    }

    if (tempPool.length === 0) {
        alert("No hay preguntas disponibles para los capítulos seleccionados.");
        return;
    }

    // Barajar con Fisher-Yates
    for (var i = tempPool.length - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        var temp = tempPool[i];
        tempPool[i] = tempPool[r];
        tempPool[r] = temp;
    }

    activeQueue = tempPool; 
    initQuizSession();
}

// --- CONTROL GENERAL DE SESIÓN ---
function initQuizSession() {
    questionStats = {};
    for (var k = 0; k < activeQueue.length; k++) {
        questionStats[activeQueue[k].id] = { attempts: 0, solved: false, solvedOn: 0 };
    }

    roundNumber = 1;
    currentIndex = 0;
    
    // Ocultar todas las configuraciones y mostrar zona activa
    var setups = document.querySelectorAll('.cap-submodule');
    for (var i = 0; i < setups.length; i++) {
        setups[i].style.display = 'none';
    }
    
    var sum = document.getElementById('quiz-summary');
    if(sum) sum.style.display = 'none';
    
    document.getElementById('quiz-active').style.display = 'block';
    
    refreshScoreboard();
    renderCurrentQuestion();
}

function returnToSetup() {
    document.getElementById('quiz-active').style.display = 'none';
    document.getElementById('quiz-summary').style.display = 'none';
    
    // Mostrar la sub-sección activa correspondiente
    if (activeQuizType === 'testing') {
        document.getElementById('sub-testing').style.display = 'block';
        updateSelectionCounter('testing');
    } else if (activeQuizType === 'ba') {
        document.getElementById('sub-ba').style.display = 'block';
        updateSelectionCounter('ba');
    } else if (activeQuizType === 'tech') {
        document.getElementById('sub-tech').style.display = 'block';
        updateSelectionCounter('tech');
    }
}

function refreshScoreboard() {
    var c1 = 0, c2 = 0, cm = 0, cw = 0;
    var keys = Object.keys(questionStats);
    for (var i = 0; i < keys.length; i++) {
        var st = questionStats[keys[i]];
        if (st.solved) {
            if (st.solvedOn === 1) c1++;
            else if (st.solvedOn === 2) c2++;
            else cm++;
        } else {
            if (st.attempts > 0 && !st.solved) {
                cw++;
            }
        }
    }
    if(document.getElementById('stat-1st')) document.getElementById('stat-1st').innerText = c1;
    if(document.getElementById('stat-2nd')) document.getElementById('stat-2nd').innerText = c2;
    if(document.getElementById('stat-more')) document.getElementById('stat-more').innerText = cm;
    if(document.getElementById('stat-wrong')) document.getElementById('stat-wrong').innerText = cw;
}

function renderCurrentQuestion() {
    if (currentIndex >= activeQueue.length) {
        showRoundSummary();
        return;
    }

    currentQuestion = activeQueue[currentIndex];
    answeredCurrent = false;
    var box = document.getElementById('question-box');
    var fb = document.getElementById('quiz-feedback');
    var btnNext = document.getElementById('btn-next');
    
    fb.style.display = 'none';
    fb.innerHTML = '';
    btnNext.style.display = 'none';

    var html = '<span class="badge-cap">' + currentQuestion.chapterTitle + '</span>';
    html += '<h3 style="margin-top:10px;">' + currentQuestion.q + '</h3>';

    var indexedOptions = [];
    for (var i = 0; i < currentQuestion.options.length; i++) {
        indexedOptions.push({ text: currentQuestion.options[i], originalIndex: i });
    }
    for (var i = indexedOptions.length - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        var temp = indexedOptions[i];
        indexedOptions[i] = indexedOptions[r];
        indexedOptions[r] = temp;
    }

    currentQuestion._currentShuffledOptions = indexedOptions;

    for (var j = 0; j < indexedOptions.length; j++) {
        html += '<button type="button" class="option" onclick="checkAnswer(' + j + ')" id="opt-' + j + '">' + indexedOptions[j].text + '</button>';
    }

    box.innerHTML = html;
    document.getElementById('round-indicator').innerText = "Ronda " + roundNumber + " - Pregunta " + (currentIndex + 1) + " de " + activeQueue.length;
}

function checkAnswer(shuffledIdx) {
    if (answeredCurrent) return;
    
    var qSt = questionStats[currentQuestion.id];
    qSt.attempts++;

    var chosen = currentQuestion._currentShuffledOptions[shuffledIdx];
    var isCorrect = (chosen.originalIndex === currentQuestion.correct);

    var fb = document.getElementById('quiz-feedback');
    fb.style.display = 'block';

    if (isCorrect) {
        answeredCurrent = true;
        if (!qSt.solved) {
            qSt.solved = true;
            qSt.solvedOn = qSt.attempts;
        }

        var allOpts = document.querySelectorAll('.option');
        for (var i = 0; i < allOpts.length; i++) {
            allOpts[i].disabled = true;
            allOpts[i].style.cursor = 'not-allowed';
            var optObj = currentQuestion._currentShuffledOptions[i];
            if (optObj.originalIndex === currentQuestion.correct) {
                allOpts[i].style.opacity = '1';
                allOpts[i].style.background = '#d4edda';
                allOpts[i].style.borderColor = '#28a745';
            } else {
                allOpts[i].style.opacity = '0.5';
                allOpts[i].style.background = '#e2e3e5';
                allOpts[i].style.borderColor = '#6c757d';
            }
        }

        fb.style.background = '#d4edda';
        fb.style.color = '#155724';
        fb.innerHTML = '<strong>✅ ¡Correcto!</strong> ' + currentQuestion.explanation;
        document.getElementById('btn-next').style.display = 'inline-block';
    } else {
        var btnChosen = document.getElementById('opt-' + shuffledIdx);
        if (btnChosen) {
            btnChosen.disabled = true;
            btnChosen.style.opacity = '0.5';
            btnChosen.style.background = '#f8d7da';
            btnChosen.style.borderColor = '#dc3545';
            btnChosen.style.cursor = 'not-allowed';
        }

        fb.style.background = '#f8d7da';
        fb.style.color = '#721c24';
        fb.innerHTML = '<strong>❌ Incorrecto (Intento #' + qSt.attempts + ').</strong> Puedes intentar con otra opción o avanzar.<div class="study-box"><b>Referencia:</b> ' + currentQuestion.pageRef + '<br><b>Resumen:</b> ' + currentQuestion.summary.join(' ') + '</div>';
        
        document.getElementById('btn-next').style.display = 'inline-block';
    }

    refreshScoreboard();
}

function nextQuestion() {
    currentIndex++;
    renderCurrentQuestion();
}

function showRoundSummary() {
    document.getElementById('quiz-active').style.display = 'none';
    var sumCard = document.getElementById('quiz-summary');
    sumCard.style.display = 'block';

    wrongQueue = [];
    var keys = Object.keys(questionStats);
    for (var i = 0; i < keys.length; i++) {
        var qId = keys[i];
        if (!questionStats[qId].solved) {
            for (var j = 0; j < activeQueue.length; j++) {
                if (activeQueue[j].id == qId) {
                    wrongQueue.push(activeQueue[j]);
                    break;
                }
            }
        }
    }

    var textEl = document.getElementById('summary-text');
    var detailsEl = document.getElementById('summary-details');
    var btnRetry = document.getElementById('btn-retry-wrong');

    if (wrongQueue.length === 0) {
        textEl.innerHTML = "🎉 <b>¡Excelente trabajo!</b> Has respondido correctamente todas las preguntas de la ronda.";
        detailsEl.innerHTML = "Dominio completo de los conceptos evaluados en esta sesión.";
        if(btnRetry) btnRetry.style.display = 'none';
    } else {
        textEl.innerHTML = "⚠️ Has completado la ronda con <b>" + wrongQueue.length + " preguntas pendientes</b> por dominar.";
        detailsEl.innerHTML = "Puedes repasar únicamente los reactivos en los que tuviste errores para reforzar tu aprendizaje.";
        if(btnRetry) btnRetry.style.display = 'inline-block';
    }
}

// --- (Funciones anteriores de tu app.js se mantienen intactas hasta aquí) ---

function startRetryWrongRound() {
    if (wrongQueue.length === 0) return;
    activeQueue = wrongQueue;
    roundNumber++;
    currentIndex = 0;
    
    document.getElementById('quiz-summary').style.display = 'none';
    document.getElementById('quiz-active').style.display = 'block';
    
    for (var k = 0; k < activeQueue.length; k++) {
        if (questionStats[activeQueue[k].id]) {
            questionStats[activeQueue[k].id].attempts = 0;
            questionStats[activeQueue[k].id].solved = false;
        }
    }
   
    refreshScoreboard();
    renderCurrentQuestion();
} // <--- AQUÍ CIERRA CORRECTAMENTE startRetryWrongRound()


// ==========================================
// CONTROL DE ACCESO ADMIN (AHORA SÍ EN EL NIVEL GLOBAL)
// ==========================================
function verificarAccesoAdmin(event) {
    if (event) {
        event.preventDefault();
    }
    
    var password = prompt("Ingresa la contraseña de administrador:");
    
    // AQUÍ ESCRIBES DIRECTAMENTE TU CONTRASEÑA ENTRE COMILLAS
    var passwordReal = "HolaAGG"; 
    
    if (password === passwordReal) {
        // En lugar de localStorage:
        sessionStorage.setItem("admin_auth", "true");
        aplicarSeguridadModulos();
        alert("¡Acceso concedido! Módulos 2 y 3 desbloqueados.");
    } else if (password !== null) {
        alert("Contraseña incorrecta.");
    }
}
function aplicarSeguridadModulos() {
    var esAdmin = sessionStorage.getItem("admin_auth");
    if (esAdmin === "true") {
        var btn2 = document.getElementById("btn-mod-2");
        var btn3 = document.getElementById("btn-mod-3");
        if (btn2) btn2.style.display = "inline-block";
        if (btn3) btn3.style.display = "inline-block";
    }
}

// Ejecutar al cargar la página para recordar la sesión activa
window.addEventListener('DOMContentLoaded', (event) => {
    aplicarSeguridadModulos();
});