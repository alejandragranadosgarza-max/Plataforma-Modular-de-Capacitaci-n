// ==========================================
// MÓDULO 2: LABORATORIO DE NARRATIVAS (CASCADA / SRS)
// Archivo: narrative_eval_lab.js
// ==========================================

var narrativeCount = 0;

function addNarrativeForm() {
    narrativeCount++;
    var container = document.getElementById('narratives-container');
    if (!container) return;

    var reqId = "REQ-" + String(narrativeCount).padStart(2, '0');
    var cardId = 'nar-card-' + narrativeCount;
    var hasLoadedObjectives = (typeof window.loadedBusinessObjectives !== 'undefined' && window.loadedBusinessObjectives.length > 0);

    var html = '<div class="card" id="' + cardId + '" style="border-left-color: #005691; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s;">';
    html += '<div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:15px;">';
    html += '<h4 style="margin:0; color:#005691;">📋 Requerimiento Funcional #' + narrativeCount + '</h4>';
    html += '<button type="button" class="btn-outline" style="color:#dc3545; border-color:#dc3545; padding:4px 8px; font-size:0.8rem;" onclick="removeNarrativeCard(\'' + cardId + '\')">🗑️ Eliminar</button>';
    html += '</div>';

    // 1. Situación actual (Contexto)
    html += '<div style="margin-bottom:15px;">';
    html += '<label style="font-weight:bold; font-size:0.9rem;">🌐 Situación actual (Contexto):</label>';
    html += '<textarea id="nar-context-' + narrativeCount + '" rows="2" placeholder="Describe el contexto, problemática o situación actual que origina este requerimiento..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; resize: vertical;"></textarea>';
    html += '</div>';

    // 2 y 3. Número de Requerimiento (REQ-XX) y Nombre del requerimiento
    html += '<div style="display:flex; gap:15px; margin-bottom:15px;">';
    html += '<div style="flex:1;"><label style="font-weight:bold; font-size:0.9rem;">Número de Requerimiento:</label><input type="text" id="nar-reqid-' + narrativeCount + '" value="' + reqId + '" readonly style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; background:#f8f9fa; font-weight:bold;"></div>';
    html += '<div style="flex:3;"><label style="font-weight:bold; font-size:0.9rem;">Nombre del requerimiento:</label><input type="text" id="nar-name-' + narrativeCount + '" placeholder="Propuesta de título editable..." style="width:100%; padding:8px; border:1px solid #d8b4e2; border-radius:4px;"></div>';
    html += '</div>';

    // 4. Objetivos Comerciales (Checkboxes si hay archivo con objetivos; captura manual si no)
    html += '<div style="margin-bottom:15px;">';
    html += '<label style="font-weight:bold; font-size:0.9rem; color:#d92027;">🎯 Objetivos Comerciales:</label>';
    if (hasLoadedObjectives) {
        html += '<div id="obj-container-' + narrativeCount + '" style="border: 1px solid #ccc; padding: 10px; border-radius: 4px; max-height: 150px; overflow-y: auto; background: #fff; font-size: 0.85rem;">';
        window.loadedBusinessObjectives.forEach(function(obj, idx) {
            html += '<label style="display: block; margin-bottom: 5px; cursor: pointer;">';
            html += '<input type="checkbox" id="obj-cb-' + narrativeCount + '-' + idx + '" name="obj-nar-' + narrativeCount + '" value="' + obj.id + '" style="margin-right: 8px;">';
            html += '<b>' + obj.id + ':</b> ' + obj.description;
            html += '</label>';
        });
        html += '</div>';
    } else {
        html += '<textarea id="nar-obj-manual-' + narrativeCount + '" rows="2" placeholder="Captura el o los objetivos comerciales a los que responde este requerimiento..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; resize: vertical;"></textarea>';
    }
    html += '</div>';

    // 5. Requisito inicial
    html += '<div style="margin-bottom:15px;">';
    html += '<label style="font-weight:bold; font-size:0.9rem;">📖 Requisito inicial:</label>';
    html += '<textarea id="nar-desc-' + narrativeCount + '" rows="3" placeholder="El sistema deberá..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; resize: vertical;"></textarea>';
    html += '</div>';

    // 6. Entradas
    html += '<div style="margin-bottom:15px;">';
    html += '<label style="font-weight:bold; font-size:0.9rem;">📥 Entradas:</label>';
    html += '<textarea id="nar-inputs-' + narrativeCount + '" rows="3" placeholder="Define los datos, parámetros, eventos o precondiciones de entrada..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; resize: vertical;"></textarea>';
    html += '</div>';

    // 7. Salidas
    html += '<div style="margin-bottom:15px;">';
    html += '<label style="font-weight:bold; font-size:0.9rem;">📤 Salidas:</label>';
    html += '<textarea id="nar-outputs-' + narrativeCount + '" rows="3" placeholder="Define los resultados esperados, mensajes, reportes o cambios de estado..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; resize: vertical;"></textarea>';
    html += '</div>';

    // 8. Criterios de aceptación
    html += '<div style="margin-bottom:15px;">';
    html += '<label style="font-weight:bold; font-size:0.9rem;">✅ Criterios de aceptación:</label>';
    html += '<textarea id="nar-ac-' + narrativeCount + '" rows="3" placeholder="1. Verificar que...\n2. Probar con escenario negativo..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; resize: vertical;"></textarea>';
    html += '</div>';

    html += '</div>'; // Fin Card

    // Inyectar el nuevo requerimiento al INICIO del contenedor
    container.insertAdjacentHTML('afterbegin', html);

    // Apuntar el menú flotante automáticamente a la tarjeta recién creada
    if (typeof window.lastInteractedFormIndex !== 'undefined') {
        window.lastInteractedFormIndex = narrativeCount;
    }
}

function removeNarrativeCard(cardId) {
    var card = document.getElementById(cardId);
    if (card) {
        if (confirm("¿Seguro que deseas eliminar este requerimiento?")) {
            card.remove();
        }
    }
}

// -----------------------------------------------------
// MOTOR DE DICTAMEN (VALIDACIÓN SRS)
// -----------------------------------------------------
// -----------------------------------------------------
// MOTOR DE DICTAMEN (VALIDACIÓN SRS) CON RESALTADO DE PALABRAS
// -----------------------------------------------------
function validateAllNarratives() {
    var out = document.getElementById('nar-output');
    if (!out) return;

    var container = document.getElementById('narratives-container');
    var cards = container.querySelectorAll('.card');

    if (cards.length === 0) {
        out.style.display = 'block';
        out.innerHTML = '<span style="color:#d92027; font-weight:bold;">⚠️ No hay requerimientos para dictaminar. Agrega al menos uno.</span>';
        return;
    }

    var reportHtml = '<h4 style="margin-top:0;">📋 Reporte de Trazabilidad SRS</h4><ul style="padding-left:20px; line-height:1.6;">';
    var totalErrors = 0;

    var ambiguousWords = ["rápido", "fácil", "optimizar", "eficiente", "usuario amigable", "normalmente", "a veces", "adecuado", "robusto", "apropiado", "mínimo"];

    for (var i = 1; i <= narrativeCount; i++) {
        var card = document.getElementById('nar-card-' + i);
        if (!card) continue;

        var context = document.getElementById('nar-context-' + i).value;
        var reqId = document.getElementById('nar-reqid-' + i).value;
        var name = document.getElementById('nar-name-' + i).value;
        var desc = document.getElementById('nar-desc-' + i).value;
        var inputsVal = document.getElementById('nar-inputs-' + i).value;
        var outputsVal = document.getElementById('nar-outputs-' + i).value;
        var ac = document.getElementById('nar-ac-' + i).value;

        var manualObjEl = document.getElementById('nar-obj-manual-' + i);
        var objSummary = "";
        var errors = [];

        card.style.borderLeftColor = '#28a745';
        card.style.background = '#fff';

        // 1. Validar Situación actual (Contexto)
        var ctxErr = checkFieldCompleteness(context, "Situación actual (Contexto)", ambiguousWords, 3, 'nar-context-' + i);
        if (ctxErr) errors.push(ctxErr);

        // 2. Validar Nombre del requerimiento
        if (!name || name.trim() === "") errors.push("Falta el Nombre del requerimiento.");

        // 3. Validar Objetivos Comerciales (Checkboxes o Captura manual)
        if (manualObjEl) {
            var manualObjVal = manualObjEl.value.trim();
            if (!manualObjVal) {
                errors.push("Falta capturar los Objetivos Comerciales.");
            } else {
                objSummary = manualObjVal;
            }
        } else {
            var objCheckboxes = document.querySelectorAll('input[name="obj-nar-' + i + '"]:checked');
            var selectedObjs = [];
            objCheckboxes.forEach(function(cb) {
                selectedObjs.push(cb.value);
            });
            if (selectedObjs.length === 0) {
                errors.push("No se ha trazado a ningún Objetivo Comercial.");
            } else {
                objSummary = selectedObjs.join(', ');
            }
        }

        // 4. Validar Requisito inicial
        var descErr = checkFieldCompleteness(desc, "Requisito inicial", ambiguousWords, 3, 'nar-desc-' + i);
        if (descErr) errors.push(descErr);

        // 5. Validar Entradas
        var inErr = checkFieldCompleteness(inputsVal, "Entradas", ambiguousWords, 3, 'nar-inputs-' + i);
        if (inErr) errors.push(inErr);

        // 6. Validar Salidas
        var outErr = checkFieldCompleteness(outputsVal, "Salidas", ambiguousWords, 3, 'nar-outputs-' + i);
        if (outErr) errors.push(outErr);

        // 7. Validar Criterios de aceptación
        var acErr = checkFieldCompleteness(ac, "Criterios de aceptación", ambiguousWords, 3, 'nar-ac-' + i);
        if (acErr) errors.push(acErr);

        if (errors.length > 0) {
            totalErrors++;
            card.style.borderLeftColor = '#dc3545';
            card.style.background = '#fff5f5';
            reportHtml += '<li style="margin-bottom:8px; cursor:pointer;" onclick="window.scrollToNarrative(\'' + card.id + '\')"><strong style="color:#dc3545;">' + reqId + ' (' + (name ? name : 'Sin título') + ') - RECHAZADO (Clic para ir):</strong><ul style="color:#555; font-size:0.9rem;">';
            for (var e = 0; e < errors.length; e++) {
                reportHtml += '<li style="margin-bottom:4px;">' + errors[e] + '</li>';
            }
            reportHtml += '</ul></li>';
        } else {
            reportHtml += '<li style="margin-bottom:8px;"><strong style="color:#28a745;">' + reqId + ' (' + name + ') - APROBADO ✅</strong> (Objetivos: ' + objSummary + ')</li>';
        }
    }

    reportHtml += '</ul>';

    if (totalErrors === 0) {
        reportHtml += '<div style="margin-top:15px; padding:10px; background:#d4edda; color:#155724; border-radius:4px; font-weight:bold;">✅ ¡Felicidades! Todos los requerimientos del SRS cumplen con la calidad formal y trazabilidad. Listos para exportar.</div>';
    }

    out.innerHTML = reportHtml;
    out.style.display = 'block';
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function escapeHtmlReport(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function checkFieldCompleteness(text, fieldName, ambiguousWords, minWords, fieldId) {
    if (!text || text.trim() === "") return "El campo '" + fieldName + "' está vacío.";
    var words = text.trim().split(/\s+/);
    if (words.length < minWords) return "El campo '" + fieldName + "' es muy corto (Mín. " + minWords + " palabras necesarias).";

    var foundSnippets = [];

    for (var i = 0; i < ambiguousWords.length; i++) {
        var escapedWord = ambiguousWords[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Detecta inicio de palabra (evita falsos positivos como "inadecuado") e incluye plurales/variantes
        var regex = new RegExp('(^|[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ])(' + escapedWord + '[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]*)', 'gi');
        var match;

        while ((match = regex.exec(text)) !== null) {
            var startIdx = match.index + match[1].length;
            var matchedWord = match[2];
            var endIdx = startIdx + matchedWord.length;

            var snippetStart = Math.max(0, startIdx - 18);
            var snippetEnd = Math.min(text.length, endIdx + 18);
            var before = (snippetStart > 0 ? '…' : '') + escapeHtmlReport(text.substring(snippetStart, startIdx));
            var after = escapeHtmlReport(text.substring(endIdx, snippetEnd)) + (snippetEnd < text.length ? '…' : '');

            var chip = '<span onclick="event.stopPropagation(); window.highlightWordInField(\'' + fieldId + '\', ' + startIdx + ', ' + endIdx + ')" ' +
                'title="Clic para seleccionar esta palabra en el campo" ' +
                'style="display:inline-block; background:#fff; border:1px solid #f5c2c7; border-radius:4px; padding:1px 6px; margin:2px 4px 2px 0; cursor:pointer; font-size:0.85rem;">' +
                before + '<mark style="background:#ffe066; color:#000; font-weight:bold; padding:0 2px; border-radius:2px;">' + escapeHtmlReport(matchedWord) + '</mark>' + after +
                '</span>';

            foundSnippets.push(chip);
        }
    }

    if (foundSnippets.length > 0) {
        return "El campo <b>'" + fieldName + "'</b> contiene lenguaje ambiguo (haz clic en la palabra para ir directo a ella):<div style='margin-top:4px;'>" + foundSnippets.join(' ') + "</div>";
    }
    return null;
}

window.highlightWordInField = function(fieldId, startIdx, endIdx) {
    var field = document.getElementById(fieldId);
    if (!field) return;

    field.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(function() {
        field.focus();
        if (typeof field.setSelectionRange === 'function') {
            field.setSelectionRange(startIdx, endIdx);
        }
        var originalBg = field.style.backgroundColor || '';
        field.style.transition = 'background-color 0.4s';
        field.style.backgroundColor = '#fff3cd';
        setTimeout(function() {
            field.style.backgroundColor = originalBg;
        }, 1200);
    }, 350);
};

function scrollToCard(cardId) {
    var card = document.getElementById(cardId);
    if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        var originalBg = card.style.backgroundColor;
        card.style.transition = 'background-color 0.5s';
        card.style.backgroundColor = '#fff3cd';
        setTimeout(function() {
            card.style.backgroundColor = originalBg;
        }, 1500);
    }
}

// =========================================================================
// FUNCIONALIDAD DE BOTONES: EXPORTAR DOCX/SCRIPT, GUARDAR Y CARGAR JSON (SRS)
// =========================================================================

function collectNarrativeCardsData() {
    var container = document.getElementById('narratives-container');
    if (!container) return [];
    var cards = Array.from(container.querySelectorAll('.card')).reverse(); // Orden cronológico (REQ-01, REQ-02...)
    var data = [];

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var fields = {};
        var inputs = card.querySelectorAll('input, textarea, select');

        for (var j = 0; j < inputs.length; j++) {
            var el = inputs[j];
            if (el.type === 'checkbox') {
                if (!fields._checkboxes) fields._checkboxes = [];
                if (el.checked) fields._checkboxes.push(el.value);
                continue;
            }
            if (!el.id) continue;
            var prefix = el.id.replace(/-\d+$/, '');
            fields[prefix] = el.value;
        }
        data.push(fields);
    }
    return data;
}

function triggerFileDownload(content, filename, mimeType) {
    var blob = new Blob([content], { type: mimeType });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function() { URL.revokeObjectURL(url); }, 1000);
}

// 1. BOTÓN 📁: Exportar Documento Word (.doc) y Script de Carpetas (.bat)
// 1. BOTÓN 📄: Exportar Documento Word (.doc)
function exportProjectFoldersAndFiles() {
    var items = collectNarrativeCardsData();
    if (items.length === 0) {
        alert("⚠️ No hay requerimientos capturados para exportar.");
        return;
    }

    var dateStr = new Date().toISOString().slice(0, 10);

    var docHtml = '<html xmlns:o="urn:schemas-microsoft-com:office:office" ' +
        'xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">' +
        '<head><meta charset="utf-8"><title>Especificación SRS</title>' +
        '<style>body{font-family:Arial,sans-serif;font-size:11pt;color:#222;}' +
        'h1{color:#005691;border-bottom:2px solid #005691;padding-bottom:6px;}' +
        'h2{color:#5b21b6;margin-top:20px;}' +
        'table{width:100%;border-collapse:collapse;margin-bottom:16px;}' +
        'th,td{border:1px solid #bbb;padding:8px;text-align:left;vertical-align:top;}' +
        'th{background:#f1f5f9;width:28%;}</style></head><body>';

    docHtml += '<h1>Especificación de Requerimientos de Software (SRS)</h1>';
    docHtml += '<p><b>Fecha de generación:</b> ' + dateStr + ' | <b>Total de requerimientos:</b> ' + items.length + '</p>';

    for (var i = 0; i < items.length; i++) {
        var f = items[i];
        var reqContext = (f['nar-context'] || 'No especificada').replace(/\n/g, '<br>');
        var reqId = (f['nar-reqid'] || ('REQ-' + String(i + 1).padStart(2, '0'))).trim();
        var reqName = (f['nar-name'] || 'Sin_Nombre').trim();
        var reqDesc = (f['nar-desc'] || 'No especificado').replace(/\n/g, '<br>');
        var reqInputs = (f['nar-inputs'] || 'No especificadas').replace(/\n/g, '<br>');
        var reqOutputs = (f['nar-outputs'] || 'No especificadas').replace(/\n/g, '<br>');
        var reqAC = (f['nar-ac'] || 'No especificados').replace(/\n/g, '<br>');

        var reqObjs = 'No vinculados';
        if (f._checkboxes && f._checkboxes.length > 0) {
            reqObjs = f._checkboxes.join(', ');
        } else if (f['nar-obj-manual'] && f['nar-obj-manual'].trim() !== '') {
            reqObjs = f['nar-obj-manual'].replace(/\n/g, '<br>');
        }

        docHtml += '<h2>' + reqId + ' - ' + reqName + '</h2>';
        docHtml += '<table>';
        docHtml += '<tr><th>Situación actual (Contexto)</th><td>' + reqContext + '</td></tr>';
        docHtml += '<tr><th>Número de Requerimiento</th><td>' + reqId + '</td></tr>';
        docHtml += '<tr><th>Nombre del requerimiento</th><td>' + reqName + '</td></tr>';
        docHtml += '<tr><th>Objetivos Comerciales</th><td>' + reqObjs + '</td></tr>';
        docHtml += '<tr><th>Requisito inicial</th><td>' + reqDesc + '</td></tr>';
        docHtml += '<tr><th>Entradas</th><td>' + reqInputs + '</td></tr>';
        docHtml += '<tr><th>Salidas</th><td>' + reqOutputs + '</td></tr>';
        docHtml += '<tr><th>Criterios de aceptación</th><td>' + reqAC + '</td></tr>';
        docHtml += '</table>';
    }

    docHtml += '</body></html>';

    triggerFileDownload('\ufeff' + docHtml, 'Especificacion_SRS_' + dateStr + '.doc', 'application/msword;charset=utf-8');
}

// 2. BOTÓN 📤: Guardar Respaldo del Proyecto (JSON)
function exportNarrativeProjectJSON() {
    var items = collectNarrativeCardsData();
    if (items.length === 0) {
        alert("⚠️ No hay requerimientos en pantalla para respaldar.");
        return;
    }

    var payload = {
        methodology: 'waterfall',
        savedAt: new Date().toISOString(),
        narratives: items
    };

    var dateStr = new Date().toISOString().slice(0, 10);
    var jsonStr = JSON.stringify(payload, null, 2);
    triggerFileDownload(jsonStr, 'Respaldo_SRS_' + dateStr + '.json', 'application/json;charset=utf-8');
}

// 3. BOTÓN 📥: Cargar Proyecto desde Respaldo (JSON)
function importNarrativeProjectJSON(event) {
    var file = event.target.files[0];
    if (!file) return;

    var reader = new FileReader();
    reader.onload = function(e) {
        try {
            var parsed = JSON.parse(e.target.result);
            var list = Array.isArray(parsed) ? parsed : (parsed.narratives || []);

            if (!list || list.length === 0) {
                alert("⚠️ El archivo JSON no contiene requerimientos válidos.");
                return;
            }

            var container = document.getElementById('narratives-container');
            if (!container) return;

            container.innerHTML = '';
            narrativeCount = 0;

            for (var i = 0; i < list.length; i++) {
                addNarrativeForm();

                // La tarjeta recién agregada siempre tiene el ID con el narrativeCount actual
                var currentCard = document.getElementById('nar-card-' + narrativeCount);
                if (!currentCard) continue;

                var savedFields = list[i];
                var inputs = currentCard.querySelectorAll('input, textarea, select');

                for (var j = 0; j < inputs.length; j++) {
                    var el = inputs[j];
                    if (el.type === 'checkbox') {
                        if (savedFields._checkboxes && savedFields._checkboxes.indexOf(el.value) !== -1) {
                            el.checked = true;
                        }
                        continue;
                    }
                    if (!el.id) continue;
                    var prefix = el.id.replace(/-\d+$/, '');

                    if (savedFields[prefix] !== undefined) {
                        el.value = savedFields[prefix];
                    } else if (prefix === 'nar-obj-manual' && savedFields._checkboxes && savedFields._checkboxes.length > 0) {
                        // Respaldo: si se importó sin archivo origen pero el JSON traía checkboxes
                        el.value = savedFields._checkboxes.join(', ');
                    }
                }
            }

            alert("✅ Proyecto cargado con éxito (" + list.length + " requerimiento(s) restaurado(s)).");
        } catch (err) {
            console.error(err);
            alert("⚠️ Error al leer el archivo JSON. Verifica que sea un respaldo válido.");
        } finally {
            event.target.value = '';
        }
    };
    reader.readAsText(file, 'UTF-8');
}
