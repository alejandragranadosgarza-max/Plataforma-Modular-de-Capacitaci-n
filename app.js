// ==========================================
// ESTADO GLOBAL DE LA APLICACIÓN Y CUESTIONARIOS
// ==========================================
var currentQuestionsList = [];
var currentQuestionIndex = 0;
var currentQuestion = null;
var answeredCurrent = false;
var questionStats = {}; 
var activeQuizMode = 'testing'; // 'testing', 'ba', o 'tech'

// --- FUNCIONES DE NAVEGACIÓN Y MENÚ ---
function showModule(modId, btn) {
    var mods = document.querySelectorAll('.module');
    for (var i = 0; i < mods.length; i++) {
        mods[i].classList.remove('active');
    }
    var btns = document.querySelectorAll('nav button');
    for (var j = 0; j < btns.length; j++) {
        btns[j].classList.remove('active');
    }
    document.getElementById(modId).classList.add('active');
    if (btn) btn.classList.add('active');
}

function switchCapSubModule(subId) {
    var subs = document.querySelectorAll('.cap-submodule');
    for (var i = 0; i < subs.length; i++) {
        subs[i].style.display = 'none';
    }
    document.getElementById(subId).style.display = 'block';

    var act = document.getElementById('quiz-active');
    var sum = document.getElementById('quiz-summary');
    if (act) act.style.display = 'none';
    if (sum) sum.style.display = 'none';

    if (subId === 'sub-testing') {
        var setup = document.getElementById('quiz-setup');
        if (setup) setup.style.display = 'block';
        updateSelectionCounter();
    } else if (subId === 'sub-ba') {
        var baSetup = document.getElementById('ba-quiz-setup');
        if (baSetup) baSetup.style.display = 'block';
        updateBaSelectionCounter();
    } else if (subId === 'sub-tech') {
        var techSetup = document.getElementById('tech-quiz-setup');
        if (techSetup) techSetup.style.display = 'block';
        updateTechSelectionCounter();
    }
}

// --- CONTROL DE SELECCIÓN: TESTING (ISTQB) ---
function toggleAllChapters(state) {
    var cbs = document.querySelectorAll('.chap-cb');
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = state;
        var card = cbs[i].closest('.chapter-card');
        if (card) {
            if (state) card.classList.remove('unchecked');
            else card.classList.add('unchecked');
        }
    }
    updateSelectionCounter();
}

function updateSelectionCounter() {
    var cbs = document.querySelectorAll('.chap-cb');
    var count = 0;
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].checked) count++;
        var card = cbs[i].closest('.chapter-card');
        if (card) {
            if (cbs[i].checked) card.classList.remove('unchecked');
            else card.classList.add('unchecked');
        }
    }
    var badge = document.getElementById('sel-counter');
    var errBox = document.getElementById('setup-error');
    if (badge) {
        badge.innerText = count + " de 6 capítulos seleccionados";
        badge.style.background = (count > 0) ? "#28a745" : "#dc3545";
    }
    if (errBox && count > 0) errBox.style.display = 'none';
}

function startQuizFromSetup() {
    var cbs = document.querySelectorAll('.chap-cb');
    var selectedChapters = [];
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].checked) selectedChapters.push(parseInt(cbs[i].value, 10));
    }

    var errBox = document.getElementById('setup-error');
    if (selectedChapters.length === 0) {
        if (errBox) errBox.style.display = 'block';
        return;
    }
    if (errBox) errBox.style.display = 'none';

    activeQuizMode = 'testing';
    var pool = (typeof testingQuestions !== 'undefined') ? testingQuestions : [];
    
    currentQuestionsList = [];
    for (var j = 0; j < pool.length; j++) {
        if (selectedChapters.indexOf(pool[j].chapter) !== -1) {
            currentQuestionsList.push(pool[j]);
        }
    }

    if (currentQuestionsList.length === 0) {
        alert("No hay preguntas disponibles para los capítulos seleccionados.");
        return;
    }

    // Barajar con Fisher-Yates
    for (var i = currentQuestionsList.length - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        var temp = currentQuestionsList[i];
        currentQuestionsList[i] = currentQuestionsList[r];
        currentQuestionsList[r] = temp;
    }

    initQuizSession();
}

// --- CONTROL DE SELECCIÓN: BUSINESS ANALYSIS (BABOK v3) ---
function toggleAllBaChapters(state) {
    var cbs = document.querySelectorAll('.ba-chap-cb');
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = state;
        var card = cbs[i].closest('.chapter-card');
        if (card) {
            if (state) card.classList.remove('unchecked');
            else card.classList.add('unchecked');
        }
    }
    updateBaSelectionCounter();
}

function updateBaSelectionCounter() {
    var cbs = document.querySelectorAll('.ba-chap-cb');
    var count = 0;
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].checked) count++;
        var card = cbs[i].closest('.chapter-card');
        if (card) {
            if (cbs[i].checked) card.classList.remove('unchecked');
            else card.classList.add('unchecked');
        }
    }
    var badge = document.getElementById('ba-sel-counter');
    var errBox = document.getElementById('ba-setup-error');
    if (badge) {
        badge.innerText = count + " de 6 áreas seleccionadas";
        badge.style.background = (count > 0) ? "#28a745" : "#dc3545";
    }
    if (errBox && count > 0) errBox.style.display = 'none';
}

function startBaQuiz() {
    var cbs = document.querySelectorAll('.ba-chap-cb');
    var selectedChapters = [];
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].checked) selectedChapters.push(parseInt(cbs[i].value, 10));
    }

    var errBox = document.getElementById('ba-setup-error');
    if (selectedChapters.length === 0) {
        if (errBox) errBox.style.display = 'block';
        return;
    }
    if (errBox) errBox.style.display = 'none';

    activeQuizMode = 'ba';
    var pool = (typeof baQuestions !== 'undefined') ? baQuestions : [];
    
    currentQuestionsList = [];
    for (var j = 0; j < pool.length; j++) {
        if (selectedChapters.indexOf(pool[j].chapter) !== -1) {
            currentQuestionsList.push(pool[j]);
        }
    }

    if (currentQuestionsList.length === 0) {
        alert("No hay preguntas disponibles para las áreas seleccionadas de BABOK.");
        return;
    }

    for (var i = currentQuestionsList.length - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        var temp = currentQuestionsList[i];
        currentQuestionsList[i] = currentQuestionsList[r];
        currentQuestionsList[r] = temp;
    }

    initQuizSession();
}

// --- CONTROL DE SELECCIÓN: CONCEPTOS TÉCNICOS ---
function toggleAllTechChapters(state) {
    var cbs = document.querySelectorAll('.tech-chap-cb');
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = state;
        var card = cbs[i].closest('.chapter-card');
        if (card) {
            if (state) card.classList.remove('unchecked');
            else card.classList.add('unchecked');
        }
    }
    updateTechSelectionCounter();
}

function updateTechSelectionCounter() {
    var cbs = document.querySelectorAll('.tech-chap-cb');
    var count = 0;
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].checked) count++;
        var card = cbs[i].closest('.chapter-card');
        if (card) {
            if (cbs[i].checked) card.classList.remove('unchecked');
            else card.classList.add('unchecked');
        }
    }
    var badge = document.getElementById('tech-sel-counter');
    var errBox = document.getElementById('tech-setup-error');
    if (badge) {
        badge.innerText = count + " de 4 categorías seleccionadas";
        badge.style.background = (count > 0) ? "#28a745" : "#dc3545";
    }
    if (errBox && count > 0) errBox.style.display = 'none';
}

function startTechQuiz() {
    var cbs = document.querySelectorAll('.tech-chap-cb');
    var selectedChapters = [];
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].checked) selectedChapters.push(parseInt(cbs[i].value, 10));
    }

    var errBox = document.getElementById('tech-setup-error');
    if (selectedChapters.length === 0) {
        if (errBox) errBox.style.display = 'block';
        return;
    }
    if (errBox) errBox.style.display = 'none';

    activeQuizMode = 'tech';
    var pool = (typeof techQuestions !== 'undefined') ? techQuestions : [];
    
    currentQuestionsList = [];
    for (var j = 0; j < pool.length; j++) {
        if (selectedChapters.indexOf(pool[j].chapter) !== -1) {
            currentQuestionsList.push(pool[j]);
        }
    }

    if (currentQuestionsList.length === 0) {
        alert("No hay preguntas técnicas disponibles para las categorías seleccionadas.");
        return;
    }

    for (var i = currentQuestionsList.length - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        var temp = currentQuestionsList[i];
        currentQuestionsList[i] = currentQuestionsList[r];
        currentQuestionsList[r] = temp;
    }

    initQuizSession();
}

// --- INICIALIZACIÓN Y MOTOR DE SESIÓN ---
function initQuizSession() {
    questionStats = {};
    for (var i = 0; i < currentQuestionsList.length; i++) {
        var q = currentQuestionsList[i];
        questionStats[q.id] = { attempts: 0, solved: false, solvedOn: 0 };
    }

    if (document.getElementById('quiz-setup')) document.getElementById('quiz-setup').style.display = 'none';
    if (document.getElementById('ba-quiz-setup')) document.getElementById('ba-quiz-setup').style.display = 'none';
    if (document.getElementById('tech-quiz-setup')) document.getElementById('tech-quiz-setup').style.display = 'none';
    if (document.getElementById('quiz-summary')) document.getElementById('quiz-summary').style.display = 'none';
    
    var act = document.getElementById('quiz-active');
    if (act) act.style.display = 'block';

    var ind = document.getElementById('round-indicator');
    if (ind) ind.innerText = "Ronda Principal (" + currentQuestionsList.length + " preguntas)";

    currentQuestionIndex = 0;
    loadQuestionToDom();
    refreshScoreboard();
}

function returnToSetup() {
    var act = document.getElementById('quiz-active');
    var sum = document.getElementById('quiz-summary');
    if (act) act.style.display = 'none';
    if (sum) sum.style.display = 'none';

    if (activeQuizMode === 'testing') {
        var setup = document.getElementById('quiz-setup');
        if (setup) setup.style.display = 'block';
        updateSelectionCounter();
    } else if (activeQuizMode === 'ba') {
        var baSetup = document.getElementById('ba-quiz-setup');
        if (baSetup) baSetup.style.display = 'block';
        updateBaSelectionCounter();
    } else if (activeQuizMode === 'tech') {
        var techSetup = document.getElementById('tech-quiz-setup');
        if (techSetup) techSetup.style.display = 'block';
        updateTechSelectionCounter();
    }
}

// --- RENDERIZADO DE PREGUNTAS Y BARAJADO ---
function loadQuestionToDom() {
    if (currentQuestionIndex >= currentQuestionsList.length) {
        showRoundSummary();
        return;
    }

    currentQuestion = currentQuestionsList[currentQuestionIndex];
    answeredCurrent = false;

    var box = document.getElementById('question-box');
    var fb = document.getElementById('quiz-feedback');
    var btnNext = document.getElementById('btn-next');
    
    if (fb) {
        fb.style.display = 'none';
        fb.innerHTML = '';
    }
    if (btnNext) btnNext.style.display = 'none';

    var shuffledOpts = [];
    for (var i = 0; i < currentQuestion.options.length; i++) {
        shuffledOpts.push({ text: currentQuestion.options[i], originalIndex: i });
    }
    for (var j = shuffledOpts.length - 1; j > 0; j--) {
        var k = Math.floor(Math.random() * (j + 1));
        var temp = shuffledOpts[j];
        shuffledOpts[j] = shuffledOpts[k];
        shuffledOpts[k] = temp;
    }
    currentQuestion._currentShuffledOptions = shuffledOpts;

    var html = '<span style="font-size:0.85rem; color:#666; font-weight:bold;">Pregunta ' + (currentQuestionIndex + 1) + ' de ' + currentQuestionsList.length + ' (' + currentQuestion.chapterTitle + ')</span>';
    html += '<h3 style="margin-top:5px;">' + currentQuestion.q + '</h3>';

    for (var m = 0; m < shuffledOpts.length; m++) {
        html += '<button type="button" class="option" id="opt-' + m + '" onclick="checkAnswer(' + m + ')">' + shuffledOpts[m].text + '</button>';
    }

    if (box) box.innerHTML = html;
}

// --- VALIDACIÓN DE RESPUESTAS Y BLOQUEO VISUAL EN GRIS ---
function checkAnswer(shuffledIdx) {
    if (answeredCurrent) return;
    
    var qSt = questionStats[currentQuestion.id];
    qSt.attempts++;

    var chosen = currentQuestion._currentShuffledOptions[shuffledIdx];
    var isCorrect = (chosen.originalIndex === currentQuestion.correct);

    var fb = document.getElementById('quiz-feedback');
    if (fb) fb.style.display = 'block';

    if (isCorrect) {
        answeredCurrent = true;
        if (!qSt.solved) {
            qSt.solved = true;
            qSt.solvedOn = qSt.attempts;
        }

        // Deshabilitar y atenuar en gris todos los botones inmediatamente al acertar
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

        if (fb) {
            fb.style.background = '#d4edda';
            fb.style.color = '#155724';
            fb.innerHTML = '<strong>✅ ¡Correcto!</strong> ' + currentQuestion.explanation;
        }
    } else {
        // Bloquear y atenuar en gris únicamente la opción incorrecta elegida
        var btnChosen = document.getElementById('opt-' + shuffledIdx);
        if (btnChosen) {
            btnChosen.disabled = true;
            btnChosen.style.opacity = '0.5';
            btnChosen.style.background = '#f8d7da';
            btnChosen.style.borderColor = '#dc3545';
            btnChosen.style.cursor = 'not-allowed';
        }

        if (fb) {
            fb.style.background = '#f8d7da';
            fb.style.color = '#721c24';
            fb.innerHTML = '<strong>❌ Incorrecto (Intento #' + qSt.attempts + ').</strong> Puedes intentar con otra opción o avanzar.<div class="study-box" style="margin-top:8px;"><b>Referencia:</b> ' + currentQuestion.pageRef + '<br><b>Resumen:</b> ' + currentQuestion.summary.join(' ') + '</div>';
        }
    }

    var btnNext = document.getElementById('btn-next');
    if (btnNext) btnNext.style.display = 'inline-block';

    refreshScoreboard();
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestionToDom();
}

// --- CONTROL DE CONTADORES MUTUAMENTE EXCLUYENTES ---
function refreshScoreboard() {
    var cFirst = 0, cSecond = 0, cMore = 0, cWrong = 0;
    
    for (var id in questionStats) {
        var st = questionStats[id];
        if (st.solved) {
            if (st.solvedOn === 1) cFirst++;
            else if (st.solvedOn === 2) cSecond++;
            else cMore++;
        } else {
            // ÚNICAMENTE cuenta como pendiente si NO está resuelta Y tiene al menos un intento fallido
            if (st.attempts > 0 && !st.solved) cWrong++;
        }
    }

    if (document.getElementById('stat-1st')) document.getElementById('stat-1st').innerText = cFirst;
    if (document.getElementById('stat-2nd')) document.getElementById('stat-2nd').innerText = cSecond;
    if (document.getElementById('stat-more')) document.getElementById('stat-more').innerText = cMore;
    if (document.getElementById('stat-wrong')) document.getElementById('stat-wrong').innerText = cWrong;
}

// --- RESUMEN DE FIN DE RONDA Y REPASO DE ERRÓNEAS ---
function showRoundSummary() {
    var act = document.getElementById('quiz-active');
    if (act) act.style.display = 'none';

    var sum = document.getElementById('quiz-summary');
    if (sum) sum.style.display = 'block';

    var total = currentQuestionsList.length;
    var solvedCount = 0;
    var wrongList = [];

    for (var i = 0; i < currentQuestionsList.length; i++) {
        var q = currentQuestionsList[i];
        var st = questionStats[q.id];
        if (st.solved) {
            solvedCount++;
        } else {
            wrongList.push(q);
        }
    }

    var txt = document.getElementById('summary-text');
    if (txt) {
        txt.innerHTML = "Has completado la ronda. Preguntas dominadas: <b>" + solvedCount + " de " + total + "</b>.";
    }

    var details = document.getElementById('summary-details');
    var btnRetry = document.getElementById('btn-retry-wrong');

    if (wrongList.length > 0) {
        if (btnRetry) btnRetry.style.display = 'inline-block';
        if (details) {
            var dHtml = "<h4>⚠️ Preguntas pendientes por dominar (" + wrongList.length + "):</h4><ul>";
            for (var j = 0; j < wrongList.length; j++) {
                dHtml += "<li>" + wrongList[j].q + "</li>";
            }
            dHtml += "</ul>";
            details.innerHTML = dHtml;
        }
    } else {
        if (btnRetry) btnRetry.style.display = 'none';
        if (details) {
            details.innerHTML = "🎉 <b>¡Excelente trabajo!</b> Has respondido correctamente todas las preguntas de la selección.";
        }
    }
}

function startRetryWrongRound() {
    var wrongPool = [];
    for (var i = 0; i < currentQuestionsList.length; i++) {
        var q = currentQuestionsList[i];
        if (!questionStats[q.id].solved) {
            wrongPool.push(q);
        }
    }

    if (wrongPool.length === 0) {
        alert("¡No hay preguntas pendientes por repasar!");
        return;
    }

    currentQuestionsList = wrongPool;
    var sum = document.getElementById('quiz-summary');
    if (sum) sum.style.display = 'none';

    var act = document.getElementById('quiz-active');
    if (act) act.style.display = 'block';

    var ind = document.getElementById('round-indicator');
    if (ind) ind.innerText = "🔄 Ronda de Repaso (Erróneas: " + currentQuestionsList.length + ")";

    currentQuestionIndex = 0;
    loadQuestionToDom();
    refreshScoreboard();
}
