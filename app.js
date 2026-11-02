// ==========================================
// LÓGICA CENTRAL DE LOS CUESTIONARIOS (MULTI-MÓDULO)
// Soporta: Testing, BA, Tech, Scrum, UX y Acceso Admin
// ==========================================
var activeQueue = [];
var currentIndex = 0;
var currentQuestion = null;
var questionStats = {};
var roundNumber = 1;
var wrongQueue = [];
var activeQuizType = 'testing'; // 'testing', 'ba', 'tech', 'scrum', 'ux'
var answeredCurrent = false;

// --- CAMBIO DE MÓDULO PRINCIPAL Y SUBMÓDULOS ---
function switchMainTab(tabId, btn) {
    var esAdmin = (sessionStorage.getItem("admin_auth") === "true" || localStorage.getItem("admin_auth") === "true");
    if ((tabId === 'tab-lab' || tabId === 'tab-narrative') && !esAdmin) {
        alert("Acceso restringido. Debes iniciar sesión como administradora.");
        return;
    }

    var mods = document.querySelectorAll('.container > .module');
    for (var i = 0; i < mods.length; i++) {
        mods[i].classList.remove('active');
    }
    var btns = document.querySelectorAll('nav button');
    for (var j = 0; j < btns.length; j++) {
        btns[j].classList.remove('active');
    }
    
    var targetMod = document.getElementById(tabId);
    if (targetMod) targetMod.classList.add('active');
    if (btn) btn.classList.add('active');
}

function switchCapSubModule(subId) {
    var subs = document.querySelectorAll('.cap-submodule');
    for (var i = 0; i < subs.length; i++) {
        subs[i].style.display = 'none';
    }
    var targetSub = document.getElementById(subId);
    if (targetSub) targetSub.style.display = 'block';
    
    var act = document.getElementById('quiz-active');
    var sum = document.getElementById('quiz-summary');
    if (act) act.style.display = 'none';
    if (sum) sum.style.display = 'none';
    
    if (subId === 'sub-testing') {
        var s1 = document.getElementById('quiz-setup');
        if (s1) s1.style.display = 'block';
        updateSelectionCounter('testing');
    } else if (subId === 'sub-ba') {
        var s2 = document.getElementById('ba-quiz-setup');
        if (s2) s2.style.display = 'block';
        updateSelectionCounter('ba');
    } else if (subId === 'sub-tech') {
        var s3 = document.getElementById('tech-quiz-setup');
        if (s3) s3.style.display = 'block';
        updateSelectionCounter('tech');
    } else if (subId === 'sub-scrum') {
        var s4 = document.getElementById('scrum-quiz-setup');
        if (s4) s4.style.display = 'block';
        updateSelectionCounter('scrum');
    } else if (subId === 'sub-ux') {
        var s5 = document.getElementById('ux-quiz-setup');
        if (s5) s5.style.display = 'block';
        updateSelectionCounter('ux');
    }

    if (typeof updateAllChapterCounts === 'function') {
        updateAllChapterCounts();
    }
}

// --- CONTROL DE SELECCIÓN GENERAL (GENÉRICO PARA LOS 5 SUBMÓDULOS) ---
function toggleAllChapters(state, prefix) {
    var targetPrefix = prefix || 'testing';
    var cbs = document.querySelectorAll('.' + targetPrefix + '-chap-cb');
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = state;
        var card = cbs[i].closest('.chapter-card');
        if (card) {
            if (state) card.classList.remove('unchecked');
            else card.classList.add('unchecked');
        }
    }
    updateSelectionCounter(targetPrefix);
}

function updateSelectionCounter(prefix) {
    var targetPrefix = prefix || 'testing';
    var cbs = document.querySelectorAll('.' + targetPrefix + '-chap-cb');
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
    var badge = document.getElementById(targetPrefix + '-sel-counter');
    var errBox = document.getElementById(targetPrefix + '-setup-error');
    if (badge) {
        badge.innerText = count + " de " + total + " seleccionados";
        badge.style.background = (count > 0) ? "#28a745" : "#dc3545";
    }
    if (errBox && count > 0) {
        errBox.style.display = 'none';
    }
}

// --- INICIO DE CUESTIONARIOS POR MÓDULO ---

// 1. MÓDULO TESTING (ISTQB v4.0)
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

    var pool = (typeof testingQuestions !== 'undefined') ? testingQuestions : ((typeof questions !== 'undefined') ? questions : []);
    runQuizPool(pool, selectedChapters);
}

// 2. MÓDULO BUSINESS ANALYSIS (BABOK v3)
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

// Alias por compatibilidad
function startBaQuiz() {
    startBaQuizFromSetup();
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

// Alias por compatibilidad
function startTechQuiz() {
    startTechQuizFromSetup();
}

// 4. MÓDULO SCRUM (GUÍA OFICIAL)
function startScrumQuizFromSetup() {
    activeQuizType = 'scrum';
    var cbs = document.querySelectorAll('.scrum-chap-cb');
    var selectedChapters = [];
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].checked) {
            selectedChapters.push(parseInt(cbs[i].value, 10));
        }
    }
    
    var errBox = document.getElementById('scrum-setup-error');
    if (selectedChapters.length === 0) {
        if (errBox) errBox.style.display = 'block';
        return;
    }
    if (errBox) errBox.style.display = 'none';

    var pool = (typeof scrumQuestions !== 'undefined') ? scrumQuestions : [];
    runQuizPool(pool, selectedChapters);
}

// 5. MÓDULO UX/UI
function startUxQuizFromSetup() {
    activeQuizType = 'ux';
    var cbs = document.querySelectorAll('.ux-chap-cb');
    var selectedChapters = [];
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].checked) {
            selectedChapters.push(parseInt(cbs[i].value, 10));
        }
    }
    
    var errBox = document.getElementById('ux-setup-error');
    if (selectedChapters.length === 0) {
        if (errBox) errBox.style.display = 'block';
        return;
    }
    if (errBox) errBox.style.display = 'none';

    var pool = (typeof questions_ux !== 'undefined') ? questions_ux : ((typeof uxQuestions !== 'undefined') ? uxQuestions : []);
    runQuizPool(pool, selectedChapters);
}

// --- FILTRADO Y EJECUCIÓN CENTRALIZADA (ACUMULA EL 100% DE LAS PREGUNTAS) ---
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

    // Barajar el 100% de las preguntas con Fisher-Yates
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
    
    var setups = document.querySelectorAll('.cap-submodule');
    for (var i = 0; i < setups.length; i++) {
        setups[i].style.display = 'none';
    }
    
    var sum = document.getElementById('quiz-summary');
    if (sum) sum.style.display = 'none';
    
    var act = document.getElementById('quiz-active');
    if (act) act.style.display = 'block';
    
    refreshScoreboard();
    renderCurrentQuestion();
}

function returnToSetup() {
    var act = document.getElementById('quiz-active');
    var sum = document.getElementById('quiz-summary');
    if (act) act.style.display = 'none';
    if (sum) sum.style.display = 'none';
    
    var subs = document.querySelectorAll('.cap-submodule');
    for (var i = 0; i < subs.length; i++) {
        subs[i].style.display = 'none';
    }

    if (activeQuizType === 'testing') {
        document.getElementById('sub-testing').style.display = 'block';
        updateSelectionCounter('testing');
    } else if (activeQuizType === 'ba') {
        document.getElementById('sub-ba').style.display = 'block';
        updateSelectionCounter('ba');
    } else if (activeQuizType === 'tech') {
        document.getElementById('sub-tech').style.display = 'block';
        updateSelectionCounter('tech');
    } else if (activeQuizType === 'scrum') {
        document.getElementById('sub-scrum').style.display = 'block';
        updateSelectionCounter('scrum');
    } else if (activeQuizType === 'ux') {
        document.getElementById('sub-ux').style.display = 'block';
        updateSelectionCounter('ux');
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
            // Solo cuenta en Pendientes si tuvo intentos fallidos y aún no se ha resuelto
            if (st.attempts > 0 && !st.solved) {
                cw++;
            }
        }
    }
    if (document.getElementById('stat-1st')) document.getElementById('stat-1st').innerText = c1;
    if (document.getElementById('stat-2nd')) document.getElementById('stat-2nd').innerText = c2;
    if (document.getElementById('stat-more')) document.getElementById('stat-more').innerText = cm;
    if (document.getElementById('stat-wrong')) document.getElementById('stat-wrong').innerText = cw;
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
    
    if (fb) {
        fb.style.display = 'none';
        fb.innerHTML = '';
    }
    if (btnNext) btnNext.style.display = 'none';

    var chapTitle = currentQuestion.chapterTitle || (activeQuizType === 'ux' ? ("UX - Cap. " + currentQuestion.chapter) : ("Scrum - Área / Rol " + currentQuestion.chapter));
    var qText = currentQuestion.q || currentQuestion.question || currentQuestion.pregunta || "";
    var rawOptions = currentQuestion.options || currentQuestion.opciones || [];
    var explanationText = currentQuestion.explanation || currentQuestion.explicacion || "";
    var correctIdx = (currentQuestion.correct !== undefined) ? currentQuestion.correct : (currentQuestion.answer !== undefined ? currentQuestion.answer : currentQuestion.correcta);

    var html = '<span class="badge-cap">' + chapTitle + '</span>';
    html += '<h3 style="margin-top:10px;">' + qText + '</h3>';

    var indexedOptions = [];
    for (var i = 0; i < rawOptions.length; i++) {
        indexedOptions.push({ text: rawOptions[i], originalIndex: i });
    }
    for (var i = indexedOptions.length - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        var temp = indexedOptions[i];
        indexedOptions[i] = indexedOptions[r];
        indexedOptions[r] = temp;
    }

    currentQuestion._currentShuffledOptions = indexedOptions;
    currentQuestion._resolvedCorrectIndex = correctIdx;
    currentQuestion._resolvedExplanation = explanationText;

    for (var j = 0; j < indexedOptions.length; j++) {
        html += '<button type="button" class="option" onclick="checkAnswer(' + j + ')" id="opt-' + j + '">' + indexedOptions[j].text + '</button>';
    }

    if (box) box.innerHTML = html;
    
    var indicatorText = "Ronda " + roundNumber;
    if (activeQuizType === 'scrum') indicatorText = "Cuestionario Scrum (Guía Oficial)";
    else if (activeQuizType === 'ux') indicatorText = "Cuestionario UX/UI";

    var indEl = document.getElementById('round-indicator');
    if (indEl) {
        indEl.innerText = indicatorText + " - Pregunta " + (currentIndex + 1) + " de " + activeQueue.length;
    }
}

function checkAnswer(shuffledIdx) {
    if (answeredCurrent) return;
    
    var qSt = questionStats[currentQuestion.id];
    qSt.attempts++;

    var chosen = currentQuestion._currentShuffledOptions[shuffledIdx];
    var isCorrect = (chosen.originalIndex === currentQuestion._resolvedCorrectIndex);

    var fb = document.getElementById('quiz-feedback');
    if (fb) fb.style.display = 'block';

    if (isCorrect) {
        answeredCurrent = true;
        if (!qSt.solved) {
            qSt.solved = true;
            qSt.solvedOn = qSt.attempts;
        }

        // Bloquear y atenuar todas las opciones al acertar
        var allOpts = document.querySelectorAll('.option');
        for (var i = 0; i < allOpts.length; i++) {
            allOpts[i].disabled = true;
            allOpts[i].style.cursor = 'not-allowed';
            var optObj = currentQuestion._currentShuffledOptions[i];
            if (optObj.originalIndex === currentQuestion._resolvedCorrectIndex) {
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
            fb.innerHTML = '<strong>✅ ¡Correcto!</strong> ' + currentQuestion._resolvedExplanation;
        }
        var btnNext = document.getElementById('btn-next');
        if (btnNext) btnNext.style.display = 'inline-block';
    } else {
        // Bloquear y atenuar únicamente la opción errónea seleccionada
        var btnChosen = document.getElementById('opt-' + shuffledIdx);
        if (btnChosen) {
            btnChosen.disabled = true;
            btnChosen.style.opacity = '0.5';
            btnChosen.style.background = '#f8d7da';
            btnChosen.style.borderColor = '#dc3545';
            btnChosen.style.cursor = 'not-allowed';
        }

        var refText = currentQuestion.pageRef || (activeQuizType === 'ux' ? "Fundamentos de UX/UI" : "Guía de Referencia Oficial");
        var sumText = currentQuestion.summary ? currentQuestion.summary.join(' ') : currentQuestion._resolvedExplanation;

        if (fb) {
            fb.style.background = '#f8d7da';
            fb.style.color = '#721c24';
            fb.innerHTML = '<strong>❌ Incorrecto (Intento #' + qSt.attempts + ').</strong> Puedes intentar con otra opción o avanzar.<div class="study-box"><b>Referencia:</b> ' + refText + '<br><b>Resumen:</b> ' + sumText + '</div>';
        }
        var btnNext = document.getElementById('btn-next');
        if (btnNext) btnNext.style.display = 'inline-block';
    }

    refreshScoreboard();
}

function nextQuestion() {
    currentIndex++;
    renderCurrentQuestion();
}

function showRoundSummary() {
    var act = document.getElementById('quiz-active');
    if (act) act.style.display = 'none';
    var sumCard = document.getElementById('quiz-summary');
    if (sumCard) sumCard.style.display = 'block';

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
        if (textEl) textEl.innerHTML = "🎉 <b>¡Excelente trabajo!</b> Has respondido correctamente todas las preguntas de la ronda.";
        if (detailsEl) detailsEl.innerHTML = "Dominio completo de los conceptos evaluados en esta sesión.";
        if (btnRetry) btnRetry.style.display = 'none';
    } else {
        if (textEl) textEl.innerHTML = "⚠️ Has completado la ronda con <b>" + wrongQueue.length + " preguntas pendientes</b> por dominar.";
        if (detailsEl) detailsEl.innerHTML = "Puedes repasar únicamente los reactivos en los que tuviste errores para reforzar tu aprendizaje.";
        if (btnRetry) btnRetry.style.display = 'inline-block';
    }
}

function startRetryWrongRound() {
    if (wrongQueue.length === 0) return;
    activeQueue = wrongQueue;
    roundNumber++;
    currentIndex = 0;
    
    var sumCard = document.getElementById('quiz-summary');
    if (sumCard) sumCard.style.display = 'none';
    var act = document.getElementById('quiz-active');
    if (act) act.style.display = 'block';
    
    for (var k = 0; k < activeQueue.length; k++) {
        if (questionStats[activeQueue[k].id]) {
            questionStats[activeQueue[k].id].attempts = 0;
            questionStats[activeQueue[k].id].solved = false;
        }
    }
    refreshScoreboard();
    renderCurrentQuestion();
}

// ==========================================
// CARGA DE PLANTILLA CORPORATIVA WORD (MÓDULO 3)
// ==========================================
var loadedBusinessObjectives = [];

function loadWordTemplate(event) {
    var file = event.target.files[0];
    if (!file) return;

    var fileName = file.name.toLowerCase();

    if (fileName.endsWith('.doc') && !fileName.endsWith('.docx')) {
        alert("⚠️ Has seleccionado un archivo formato .doc antiguo. Te sugerimos guardarlo como .docx (Word moderno) para asegurar una lectura óptima de tablas y estructuras.");
        return;
    }

    if (typeof mammoth === 'undefined') {
        alert("⚠️ La librería Mammoth.js no se ha cargado aún.");
        return;
    }

    var reader = new FileReader();
    reader.onload = function(loadEvent) {
        var arrayBuffer = loadEvent.target.result;
        mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
            .then(function(result) {
                parseWordHtmlContent(result.value);
                alert("¡Plantilla de Word procesada con éxito! Se cargaron " + loadedBusinessObjectives.length + " elementos.");
            })
            .catch(function(error) {
                console.error("Error al procesar el archivo Word:", error);
                alert("⚠️ Error al leer el documento. Verifica que sea un archivo .docx válido.");
            });
    };
    reader.readAsArrayBuffer(file);
}

function parseWordHtmlContent(htmlStr) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlStr;

    var tables = tempDiv.querySelectorAll('table');
    loadedBusinessObjectives = [];

    if (tables.length > 0) {
        var rows = tables[0].querySelectorAll('tr');
        for (var i = 1; i < rows.length; i++) {
            var cols = rows[i].querySelectorAll('td');
            if (cols.length >= 2) {
                loadedBusinessObjectives.push({
                    id: cols[0].textContent.trim() || ("OBJ-" + i),
                    description: cols[1].textContent.trim()
                });
            }
        }
    } else {
        var paragraphs = tempDiv.querySelectorAll('p');
        for (var idx = 0; idx < paragraphs.length; idx++) {
            var text = paragraphs[idx].textContent.trim();
            if (text.length > 0) {
                loadedBusinessObjectives.push({
                    id: "OBJ-" + (idx + 1),
                    description: text
                });
            }
        }
    }

    var selects = document.querySelectorAll('.obj-catalog-select, select[id^="nar-obj"]');
    for (var s = 0; s < selects.length; s++) {
        var select = selects[s];
        var currentVal = select.value;
        select.innerHTML = '<option value="">-- Seleccione Objetivo Comercial --</option>';
        for (var k = 0; k < loadedBusinessObjectives.length; k++) {
            var obj = loadedBusinessObjectives[k];
            var opt = document.createElement('option');
            opt.value = obj.id;
            opt.textContent = obj.id + ": " + obj.description;
            select.appendChild(opt);
        }
        if (currentVal) select.value = currentVal;
    }
}

// ==========================================
// CONTROL DE ACCESO ADMIN
// ==========================================
function verificarAccesoAdmin(event) {
    if (event) {
        event.preventDefault();
    }
    
    var password = prompt("Ingresa la contraseña de administrador:");
    var passwordReal = "HolaAGG"; 
    
    if (password === passwordReal) {
        sessionStorage.setItem("admin_auth", "true");
        localStorage.setItem("admin_auth", "true");
        aplicarSeguridadModulos();
        alert("¡Acceso concedido! Módulos 2 y 3 desbloqueados.");
    } else if (password !== null) {
        alert("Contraseña incorrecta.");
    }
}

function aplicarSeguridadModulos() {
    var esAdmin = (sessionStorage.getItem("admin_auth") === "true" || localStorage.getItem("admin_auth") === "true");
    if (esAdmin) {
        var btn2 = document.getElementById("btn-mod-2");
        var btn3 = document.getElementById("btn-mod-3");
        if (btn2) btn2.style.display = "inline-block";
        if (btn3) btn3.style.display = "inline-block";
    }
}

window.addEventListener('DOMContentLoaded', function() {
    aplicarSeguridadModulos();
    if (typeof updateAllChapterCounts === 'function') {
        updateAllChapterCounts();
    }
});
