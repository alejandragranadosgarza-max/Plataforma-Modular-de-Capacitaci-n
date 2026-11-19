// ==========================================
// MÓDULO 3: LABORATORIO DE NARRATIVAS (CASCADA / SRS)
// Archivo: narrative_eval_lab.js
// ==========================================

var narrativeCount = 0;

function addNarrativeForm() {
    narrativeCount++;
    var container = document.getElementById('narratives-container');
    if (!container) return;

    var reqId = "REQ-" + String(narrativeCount).padStart(2, '0');
    var cardId = 'nar-card-' + narrativeCount;
    
    var html = '<div class="card" id="' + cardId + '" style="border-left-color: #005691; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s;">';
    html += '<div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:15px;">';
    html += '<h4 style="margin:0; color:#005691;">📋 Requerimiento Funcional #' + narrativeCount + '</h4>';
    html += '<button type="button" class="btn-outline" style="color:#dc3545; border-color:#dc3545; padding:4px 8px; font-size:0.8rem;" onclick="removeNarrativeCard(\'' + cardId + '\')">🗑️ Eliminar</button>';
    html += '</div>';

    // Fila 1: ID y Nombre
    html += '<div style="display:flex; gap:15px; margin-bottom:15px;">';
    html += '<div style="flex:1;"><label style="font-weight:bold; font-size:0.9rem;">Núm. Req (ID):</label><input type="text" id="nar-reqid-' + narrativeCount + '" value="' + reqId + '" readonly style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; background:#f8f9fa;"></div>';
    html += '<div style="flex:3;"><label style="font-weight:bold; font-size:0.9rem;">Nombre de Requerimiento:</label><input type="text" id="nar-name-' + narrativeCount + '" placeholder="Propuesta de título editable..." style="width:100%; padding:8px; border:1px solid #d8b4e2; border-radius:4px;"></div>';
    html += '</div>';

    // Fila 2: Trazabilidad Múltiple (Objetivos Comerciales con Checkboxes)
    html += '<div style="margin-bottom:15px;">';
    html += '<label style="font-weight:bold; font-size:0.9rem; color:#d92027;">🎯 Objetivos Comerciales (Trazabilidad Múltiple):</label>';
    html += '<div id="obj-container-' + narrativeCount + '" style="border: 1px solid #ccc; padding: 10px; border-radius: 4px; max-height: 150px; overflow-y: auto; background: #fff; font-size: 0.85rem;">';
    
    // Inyectar checkboxes dinámicamente si loadedBusinessObjectives existe y tiene datos
    if (typeof window.loadedBusinessObjectives !== 'undefined' && window.loadedBusinessObjectives.length > 0) {
        window.loadedBusinessObjectives.forEach(function(obj) {
            html += '<label style="display: block; margin-bottom: 5px; cursor: pointer;">';
            html += '<input type="checkbox" name="obj-nar-' + narrativeCount + '" value="' + obj.id + '" style="margin-right: 8px;">';
            html += '<b>' + obj.id + ':</b> ' + obj.description;
            html += '</label>';
        });
    } else {
        html += '<span style="color: #888;"><i>No hay objetivos detectados. Asegúrate de cargar el archivo base en el Paso 1.</i></span>';
    }
    
    html += '</div></div>';

    // Fila 3: Narrativa Formal (El "Qué") - Bloqueo de resize horizontal
    html += '<div style="margin-bottom:15px;">';
    html += '<label style="font-weight:bold; font-size:0.9rem;">📖 Narrativa Formal (Requisito Inicial):</label>';
    html += '<textarea id="nar-desc-' + narrativeCount + '" rows="3" placeholder="El sistema deberá..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; resize: vertical;"></textarea>';
    html += '</div>';

    // Fila 4: Reglas / Entradas y Salidas
    html += '<div style="margin-bottom:15px;">';
    html += '<label style="font-weight:bold; font-size:0.9rem;">⚙️ Reglas de Negocio / Entradas y Salidas:</label>';
    html += '<textarea id="nar-io-' + narrativeCount + '" rows="3" placeholder="Entradas: [Datos]\\nReglas: [Lógica]\\nSalidas: [Resultado esperado]" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; resize: vertical;"></textarea>';
    html += '</div>';

    // Fila 5: Criterios de Aceptación (QA)
    html += '<div style="margin-bottom:15px;">';
    html += '<label style="font-weight:bold; font-size:0.9rem;">✅ Criterios de Aceptación (Validación QA):</label>';
    html += '<textarea id="nar-ac-' + narrativeCount + '" rows="3" placeholder="1. Verificar que...\\n2. Probar con escenario negativo..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; resize: vertical;"></textarea>';
    html += '</div>';

    html += '</div>'; // Fin Card
    
    // Inyectar el nuevo requerimiento al INICIO del contenedor
    container.insertAdjacentHTML('afterbegin', html);
}

function removeNarrativeCard(cardId) {
    var card = document.getElementById(cardId);
    if (card) {
        if(confirm("¿Seguro que deseas eliminar este requerimiento?")) {
            card.remove();
        }
    }
}

// -----------------------------------------------------
// MOTOR DE DICTAMEN (VALIDACIÓN SRS) - RELAJADO
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
        
        var reqId = document.getElementById('nar-reqid-' + i).value;
        var name = document.getElementById('nar-name-' + i).value;
        var desc = document.getElementById('nar-desc-' + i).value;
        var io = document.getElementById('nar-io-' + i).value;
        var ac = document.getElementById('nar-ac-' + i).value;
        
        // Extraer checkboxes seleccionados (ahora se permite 1 a N)
        var objCheckboxes = document.querySelectorAll('input[name="obj-nar-' + i + '"]:checked');
        var selectedObjs = [];
        objCheckboxes.forEach(function(cb) {
            selectedObjs.push(cb.value);
        });
        
        var errors = [];
        card.style.borderLeftColor = '#28a745'; // Asume éxito inicial
        card.style.background = '#fff';

        // 1. Validar Título
        if (!name || name.trim() === "") errors.push("Falta el Nombre del Requerimiento.");
        
        // 2. Validar Trazabilidad de Objetivos (Debe tener al menos 1 seleccionado)
        if (selectedObjs.length === 0) {
            errors.push("No se ha trazado a ningún Objetivo Comercial.");
        }
        
        // 3. Validar Narrativa (Relajada: Mínimo 3 palabras)
        var descErr = checkFieldCompleteness(desc, "Narrativa Formal", ambiguousWords, 3);
        if (descErr) errors.push(descErr);
        
        // 4. Validar Reglas / E-S (Relajada: Mínimo 3 palabras)
        var ioErr = checkFieldCompleteness(io, "Reglas de Negocio / Entradas y Salidas", ambiguousWords, 3);
        if (ioErr) errors.push(ioErr);
        
        // 5. Validar Criterios de Aceptación (Relajada: Mínimo 3 palabras)
        var acErr = checkFieldCompleteness(ac, "Criterios de Aceptación QA", ambiguousWords, 3);
        if (acErr) errors.push(acErr);

        if (errors.length > 0) {
            totalErrors++;
            card.style.borderLeftColor = '#dc3545';
            card.style.background = '#fff5f5';
            // Inyectamos el evento onclick apuntando al cardId correcto
            reportHtml += '<li style="margin-bottom:8px; cursor:pointer;" onclick="window.scrollToNarrative(\'' + card.id + '\')"><strong style="color:#dc3545;">' + reqId + ' (' + (name ? name : 'Sin título') + ') - RECHAZADO (Clic para ir):</strong><ul style="color:#555; font-size:0.9rem;">';
            for (var e = 0; e < errors.length; e++) {
                reportHtml += '<li>' + errors[e] + '</li>';
            }
            reportHtml += '</ul></li>';
        } else {
            reportHtml += '<li style="margin-bottom:8px;"><strong style="color:#28a745;">' + reqId + ' (' + name + ') - APROBADO ✅</strong> (Trazado a: ' + selectedObjs.join(', ') + ')</li>';
        }
    }
    
    reportHtml += '</ul>';
    
    if (totalErrors === 0) {
        reportHtml += '<div style="margin-top:15px; padding:10px; background:#d4edda; color:#155724; border-radius:4px; font-weight:bold;">✅ ¡Felicidades! Todos los requerimientos del SRS cumplen con la calidad formal y trazabilidad 1:N. Listos para exportar.</div>';
    }
    
    out.innerHTML = reportHtml;
    out.style.display = 'block';
    
    out.scrollIntoView({behavior: 'smooth', block: 'start'});
}

// -----------------------------------------------------
// FUNCIÓN RELAJADA PARA INYECCIÓN QUIRÚRGICA
// -----------------------------------------------------
function checkFieldCompleteness(text, fieldName, ambiguousWords, minWords) {
    if (!text || text.trim() === "") return "El campo '" + fieldName + "' está vacío.";
    var words = text.trim().split(/\s+/);
    // Hemos bajado el rigor: si inyectas una regla clave de 3 palabras, ya es válida.
    if (words.length < minWords) return "El campo '" + fieldName + "' es muy corto (Mín. " + minWords + " palabras necesarias).";
    
    var lowerText = text.toLowerCase();
    var foundAmbiguities = [];
    for (var i = 0; i < ambiguousWords.length; i++) {
        if (lowerText.includes(ambiguousWords[i])) {
            foundAmbiguities.push('"' + ambiguousWords[i] + '"');
        }
    }
    if (foundAmbiguities.length > 0) {
        return "El campo '" + fieldName + "' contiene lenguaje ambiguo: " + foundAmbiguities.join(", ") + ". Debes ser específico y cuantificable.";
    }
    return null;
}

function scrollToCard(cardId) {
    var card = document.getElementById(cardId);
    if (card) {
        card.scrollIntoView({behavior: 'smooth', block: 'center'});
        var originalBg = card.style.backgroundColor;
        card.style.transition = 'background-color 0.5s';
        card.style.backgroundColor = '#fff3cd'; // Highlight amarillo temporal
        setTimeout(function() {
            card.style.backgroundColor = originalBg;
        }, 1500);
    }
}
// =========================================================================
// FUNCIONALIDAD DE BOTONES: EXPORTAR DOCX/SCRIPT, GUARDAR Y CARGAR JSON (SRS)
// =========================================================================

// Utilidad interna para recolectar todos los campos de cada tarjeta SRS
function collectNarrativeCardsData() {
    var container = document.getElementById('narratives-container');
    if (!container) return [];
    var cards = container.querySelectorAll('.card');
    var data = [];

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var fields = {};
        var inputs = card.querySelectorAll('input, textarea, select');

        for (var j = 0; j < inputs.length; j++) {
            var el = inputs[j];
            if (!el.id) continue;
            // Guardamos el prefijo sin el número de fila al final (ej. "nar-name-1" -> "nar-name")
            var prefix = el.id.replace(/-\d+$/, '');
            if (el.type === 'checkbox') {
                if (!fields._checkboxes) fields._checkboxes = [];
                if (el.checked) fields._checkboxes.push(el.value || el.id);
            } else {
                fields[prefix] = el.value;
            }
        }
        data.push(fields);
    }
    return data;
}

// Utilidad interna para disparar descargas limpias
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
function exportProjectFoldersAndFiles() {
    var items = collectNarrativeCardsData();
    if (items.length === 0) {
        alert("⚠️ No hay requerimientos capturados para exportar.");
        return;
    }

    var dateStr = new Date().toISOString().slice(0, 10);

    // --- A) Generación de Documento Word (.doc compatible con MS Word) ---
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

    // --- B) Generación de Script de Carpetas para Windows (.bat) ---
    var batLines = [
        '@echo off',
        'chcp 65001 > nul',
        'echo Creando estructura de carpetas del proyecto SRS...',
        'mkdir "Proyecto_SRS_' + dateStr + '" 2>nul',
        'cd "Proyecto_SRS_' + dateStr + '"'
    ];

    for (var i = 0; i < items.length; i++) {
        var f = items[i];
        var reqId = (f['nar-id'] || ('REQ-0' + (i + 1))).trim();
        var reqName = (f['nar-name'] || 'Sin_Nombre').trim();
        var reqPrio = f['nar-prio'] || 'No especificada';
        var reqDesc = (f['nar-desc'] || 'No especificada').replace(/\n/g, '<br>');
        var reqIO = (f['nar-io'] || 'No especificadas').replace(/\n/g, '<br>');
        var reqAC = (f['nar-ac'] || 'No especificados').replace(/\n/g, '<br>');
        var reqObjs = (f._checkboxes && f._checkboxes.length > 0) ? f._checkboxes.join(', ') : 'No vinculados';

        docHtml += '<h2>' + reqId + ' - ' + reqName + '</h2>';
        docHtml += '<table>';
        docHtml += '<tr><th>ID / Prioridad</th><td>' + reqId + ' | Prioridad: ' + reqPrio + '</td></tr>';
        docHtml += '<tr><th>Objetivos Comerciales</th><td>' + reqObjs + '</td></tr>';
        docHtml += '<tr><th>Narrativa Formal</th><td>' + reqDesc + '</td></tr>';
        docHtml += '<tr><th>Entradas / Reglas / Salidas</th><td>' + reqIO + '</td></tr>';
        docHtml += '<tr><th>Criterios de Aceptación (QA)</th><td>' + reqAC + '</td></tr>';
        docHtml += '</table>';

        // Sanitizar nombre de carpeta para Windows
        var safeFolder = (reqId + '_' + reqName)
            .replace(/[\\/:*?"<>|]/g, '')
            .replace(/\s+/g, '_')
            .substring(0, 50);

        batLines.push('mkdir "' + safeFolder + '" 2>nul');
        batLines.push('mkdir "' + safeFolder + '\\01_Documentacion" 2>nul');
        batLines.push('mkdir "' + safeFolder + '\\02_Evidencias_QA" 2>nul');
    }

    docHtml += '</body></html>';
    batLines.push('echo Estructura creada exitosamente.');
    batLines.push('pause');

    // Descargar primero el Word y 600ms después el Script para evitar bloqueos del navegador
    triggerFileDownload('\ufeff' + docHtml, 'Especificacion_SRS_' + dateStr + '.doc', 'application/msword;charset=utf-8');
    setTimeout(function() {
        triggerFileDownload(batLines.join('\r\n'), 'Crear_Carpetas_SRS_' + dateStr + '.bat', 'text/plain;charset=utf-8');
    }, 600);
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

            // Limpiar área actual antes de restaurar
            container.innerHTML = '';
            if (typeof narrativeCount !== 'undefined') narrativeCount = 0;

            for (var i = 0; i < list.length; i++) {
                if (typeof addNarrativeForm === 'function') {
                    addNarrativeForm();
                }

                var cards = container.querySelectorAll('.card');
                var currentCard = cards[cards.length - 1];
                if (!currentCard) continue;

                var savedFields = list[i];
                var inputs = currentCard.querySelectorAll('input, textarea, select');

                for (var j = 0; j < inputs.length; j++) {
                    var el = inputs[j];
                    if (!el.id) continue;
                    var prefix = el.id.replace(/-\d+$/, '');

                    if (el.type === 'checkbox') {
                        if (savedFields._checkboxes && savedFields._checkboxes.indexOf(el.value || el.id) !== -1) {
                            el.checked = true;
                        }
                    } else if (savedFields[prefix] !== undefined) {
                        el.value = savedFields[prefix];
                    }
                }
            }

            alert("✅ Proyecto cargado con éxito (" + list.length + " requerimiento(s) restaurado(s)).");
        } catch (err) {
            console.error(err);
            alert("⚠️ Error al leer el archivo JSON. Verifica que sea un respaldo válido.");
        } finally {
            // Permitir volver a cargar el mismo archivo si el usuario lo necesita
            event.target.value = '';
        }
    };
    reader.readAsText(file, 'UTF-8');
}
