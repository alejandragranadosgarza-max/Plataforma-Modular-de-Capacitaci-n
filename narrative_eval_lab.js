// ==========================================
// MÓDULO 3: EVALUACIÓN Y GESTIÓN DE NARRATIVAS (CASCADA / SRS)
// Archivo: narrative_eval_lab.js (Completo)
// ==========================================

var narrativeCounter = 0;
var businessObjectivesCatalog = [];

// Inicializar el primer formulario automáticamente al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('narratives-container');
    if (container && container.children.length === 0) {
        addNarrativeForm();
    }
});

// --- 1. CARGA DE PLANTILLA CORPORATIVA WORD (.DOCX / .DOC) Y OTROS FORMATOS ---
function loadWordTemplate(event) {
    var file = event.target.files[0];
    if (!file) return;

    var fileName = file.name.toLowerCase();

    // Si el usuario sube TXT, CSV, XML o JSON en el mismo selector, lo procesamos también
    if (fileName.endsWith('.txt') || fileName.endsWith('.csv') || fileName.endsWith('.xml') || fileName.endsWith('.json')) {
        loadBusinessObjectives(event);
        return;
    }

    if (fileName.endsWith('.doc') && !fileName.endsWith('.docx')) {
        alert("⚠️ Has seleccionado un archivo formato .doc antiguo (binario). Por favor, ábrelo en Word y guárdalo como 'Documento de Word (.docx)' para poder extraer sus tablas y objetivos automáticamente en el navegador.");
        return;
    }

    if (typeof mammoth === 'undefined') {
        alert("⚠️ La librería Mammoth.js no está disponible. Verifica tu conexión a internet.");
        return;
    }

    var reader = new FileReader();
    reader.onload = function(loadEvent) {
        var arrayBuffer = loadEvent.target.result;
        mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
            .then(function(result) {
                parseWordHtmlToObjectives(result.value);
                populateAllObjectiveSelects();
                alert("✅ ¡Plantilla Word procesada con éxito! Se cargaron " + businessObjectivesCatalog.length + " objetivos/necesidades en el catálogo de trazabilidad.");
            })
            .catch(function(error) {
                console.error("Error al leer archivo Word:", error);
                alert("⚠️ No se pudo leer el archivo .docx. Verifica que no esté dañado o protegido con contraseña.");
            });
    };
    reader.readAsArrayBuffer(file);
}

function parseWordHtmlToObjectives(htmlStr) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlStr;
    businessObjectivesCatalog = [];

    // 1. Buscar en tablas del documento Word
    var tables = tempDiv.querySelectorAll('table');
    if (tables.length > 0) {
        for (var t = 0; t < tables.length; t++) {
            var rows = tables[t].querySelectorAll('tr');
            for (var i = 0; i < rows.length; i++) {
                var cols = rows[i].querySelectorAll('td, th');
                if (cols.length >= 2) {
                    var col0 = cols[0].textContent.trim();
                    var col1 = cols[1].textContent.trim();
                    // Ignorar encabezados típicos de tabla
                    if (col0.toLowerCase() === 'id' || col0.toLowerCase() === 'clave' || col0.toLowerCase().indexOf('objetivo') !== -1 && i === 0) {
                        continue;
                    }
                    if (col0 || col1) {
                        businessObjectivesCatalog.push({
                            id: col0 || ("OBJ-0" + (businessObjectivesCatalog.length + 1)),
                            desc: col1 || col0
                        });
                    }
                }
            }
        }
    }

    // 2. Si no había tablas con datos, extraer párrafos o listas relevantes
    if (businessObjectivesCatalog.length === 0) {
        var elements = tempDiv.querySelectorAll('p, li');
        for (var j = 0; j < elements.length; j++) {
            var txt = elements[j].textContent.trim();
            if (txt.length > 8) {
                var parts = txt.split(/[:\-–]/);
                if (parts.length >= 2 && parts[0].trim().length <= 15) {
                    businessObjectivesCatalog.push({
                        id: parts[0].trim(),
                        desc: parts.slice(1).join(' ').trim()
                    });
                } else {
                    businessObjectivesCatalog.push({
                        id: "OBJ-0" + (businessObjectivesCatalog.length + 1),
                        desc: txt.substring(0, 120)
                    });
                }
            }
        }
    }
}

// Soporte retrocompatible para archivos TXT, CSV, XML o JSON
function loadBusinessObjectives(event) {
    var file = event.target.files[0];
    if (!file) return;

    var fileName = file.name.toLowerCase();
    if (fileName.endsWith('.docx') || fileName.endsWith('.doc')) {
        loadWordTemplate(event);
        return;
    }

    var reader = new FileReader();
    reader.onload = function(e) {
        var content = e.target.result;
        businessObjectivesCatalog = [];

        try {
            if (fileName.endsWith('.json')) {
                var data = JSON.parse(content);
                var arr = Array.isArray(data) ? data : (data.objectives || []);
                for (var i = 0; i < arr.length; i++) {
                    businessObjectivesCatalog.push({
                        id: arr[i].id || arr[i].clave || ("OBJ-0" + (i + 1)),
                        desc: arr[i].description || arr[i].desc || arr[i].nombre || ""
                    });
                }
            } else if (fileName.endsWith('.xml')) {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(content, "text/xml");
                var nodes = xmlDoc.getElementsByTagName("objetivo");
                if (nodes.length === 0) nodes = xmlDoc.getElementsByTagName("objective");
                for (var j = 0; j < nodes.length; j++) {
                    businessObjectivesCatalog.push({
                        id: nodes[j].getAttribute("id") || ("OBJ-0" + (j + 1)),
                        desc: nodes[j].textContent.trim()
                    });
                }
            } else {
                var lines = content.split(/\r?\n/);
                for (var k = 0; k < lines.length; k++) {
                    var line = lines[k].trim();
                    if (!line) continue;
                    var parts = line.split(/[,;|:\t]/);
                    if (parts.length >= 2) {
                        businessObjectivesCatalog.push({
                            id: parts[0].trim(),
                            desc: parts.slice(1).join(' ').trim()
                        });
                    } else {
                        businessObjectivesCatalog.push({
                            id: "OBJ-0" + (businessObjectivesCatalog.length + 1),
                            desc: line
                        });
                    }
                }
            }
            populateAllObjectiveSelects();
            alert("✅ Catálogo cargado: " + businessObjectivesCatalog.length + " objetivos comerciales disponibles.");
        } catch (err) {
            console.error(err);
            alert("⚠️ Error al procesar el archivo de catálogo.");
        }
    };
    reader.readAsText(file, "UTF-8");
}

function buildObjectiveOptionsHtml(selectedValue) {
    var html = '<option value="">-- Seleccione Objetivo Comercial --</option>';
    for (var i = 0; i < businessObjectivesCatalog.length; i++) {
        var obj = businessObjectivesCatalog[i];
        var val = obj.id + " - " + obj.desc;
        var isSel = (selectedValue && (selectedValue === val || selectedValue === obj.id)) ? ' selected' : '';
        html += '<option value="' + escapeHtmlAttr(val) + '"' + isSel + '>' + escapeHtmlAttr(obj.id + ": " + obj.desc) + '</option>';
    }
    return html;
}

function populateAllObjectiveSelects() {
    var selects = document.querySelectorAll('.nar-obj-select');
    for (var i = 0; i < selects.length; i++) {
        var currentVal = selects[i].value;
        selects[i].innerHTML = buildObjectiveOptionsHtml(currentVal);
    }
}

// --- 2. AGREGAR, OCULTAR Y ELIMINAR FORMULARIOS DE REQUERIMIENTOS FUNCIONALES ---
function addNarrativeForm(prefillData) {
    var container = document.getElementById('narratives-container');
    if (!container) return;

    narrativeCounter++;
    var idx = narrativeCounter;
    var reqDefaultId = (prefillData && prefillData.reqId) ? prefillData.reqId : ("REQ-0" + idx);
    var reqName = (prefillData && prefillData.reqName) ? prefillData.reqName : "";
    var objVal = (prefillData && prefillData.objective) ? prefillData.objective : "";
    var descVal = (prefillData && prefillData.narrative) ? prefillData.narrative : "";
    var ioVal = (prefillData && prefillData.io) ? prefillData.io : "";
    var acVal = (prefillData && prefillData.criteria) ? prefillData.criteria : "";

    var card = document.createElement('div');
    card.className = 'card narrative-item-card';
    card.id = 'nar-card-' + idx;
    card.style.marginBottom = '20px';
    card.style.borderLeft = '5px solid #7c3aed';
    card.style.padding = '20px';

    var html = '' +
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; flex-wrap:wrap; gap:10px;">' +
            '<h3 style="margin:0; color:#5b21b6; font-size:1.05rem;">📋 Requerimiento Funcional #' + idx + '</h3>' +
            '<div style="display:flex; gap:8px;">' +
                '<button type="button" class="btn-outline" id="btn-toggle-nar-' + idx + '" onclick="toggleNarrativeBody(' + idx + ')">👁️ Ocultar</button>' +
                '<button type="button" class="btn" style="background:#dc3545; color:white; padding:6px 12px;" onclick="removeNarrativeForm(' + idx + ')">🗑️ Eliminar</button>' +
            '</div>' +
        '</div>' +
        '<div id="nar-body-' + idx + '">' +
            '<div style="display:grid; grid-template-columns: 2fr 1fr 1.5fr; gap:12px; margin-bottom:15px;">' +
                '<div>' +
                    '<label style="display:block; font-weight:bold; margin-bottom:5px; font-size:0.9rem;">Clave de Objetivo Comercial:</label>' +
                    '<select id="nar-obj-' + idx + '" class="nar-obj-select" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;">' +
                        buildObjectiveOptionsHtml(objVal) +
                    '</select>' +
                '</div>' +
                '<div>' +
                    '<label style="display:block; font-weight:bold; margin-bottom:5px; font-size:0.9rem;">Núm. Req:</label>' +
                    '<input type="text" id="nar-reqid-' + idx + '" value="' + escapeHtmlAttr(reqDefaultId) + '" placeholder="Ej. REQ-01" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;">' +
                '</div>' +
                '<div>' +
                    '<label style="display:block; font-weight:bold; margin-bottom:5px; font-size:0.9rem;">Nombre de Requerimiento:</label>' +
                    '<input type="text" id="nar-name-' + idx + '" value="' + escapeHtmlAttr(reqName) + '" placeholder="Ej. Cálculo Fiscal" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;">' +
                '</div>' +
            '</div>' +
            '<div style="margin-bottom:15px;">' +
                '<label style="display:block; font-weight:bold; margin-bottom:5px; font-size:0.9rem;">Narrativa (Descripción formal sin ambigüedades):</label>' +
                '<textarea id="nar-desc-' + idx + '" rows="3" placeholder="El sistema debe procesar..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;">' + escapeHtmlText(descVal) + '</textarea>' +
            '</div>' +
            '<div style="margin-bottom:15px;">' +
                '<label style="display:block; font-weight:bold; margin-bottom:5px; font-size:0.9rem;">Datos de Entrada, Reglas de Negocio y Salidas Esperadas:</label>' +
                '<textarea id="nar-io-' + idx + '" rows="3" placeholder="Entradas: RFC, Monto... | Regla: Aplicar tasa 16%... | Salida: Recibo PDF..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;">' + escapeHtmlText(ioVal) + '</textarea>' +
            '</div>' +
            '<div>' +
                '<label style="display:block; font-weight:bold; margin-bottom:5px; font-size:0.9rem;">Criterios de Aceptación / Verificación para QA y Desarrollo:</label>' +
                '<textarea id="nar-ac-' + idx + '" rows="3" placeholder="1. Validar cálculo exacto a 2 decimales...\n2. Mostrar mensaje de error E-04 si el campo está vacío..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;">' + escapeHtmlText(acVal) + '</textarea>' +
            '</div>' +
        '</div>';

    card.innerHTML = html;
    container.appendChild(card);
}

function toggleNarrativeBody(idx) {
    var body = document.getElementById('nar-body-' + idx);
    var btn = document.getElementById('btn-toggle-nar-' + idx);
    if (!body) return;
    if (body.style.display === 'none') {
        body.style.display = 'block';
        if (btn) btn.innerText = '👁️ Ocultar';
    } else {
        body.style.display = 'none';
        if (btn) btn.innerText = '👁️ Mostrar';
    }
}

function removeNarrativeForm(idx) {
    var card = document.getElementById('nar-card-' + idx);
    if (card) {
        card.remove();
    }
}

// --- 3. RECOLECCIÓN Y VALIDACIÓN DE NARRATIVAS (ESTÁNDAR SRS / CASCADA) ---
function collectAllNarratives() {
    var cards = document.querySelectorAll('.narrative-item-card');
    var list = [];
    for (var i = 0; i < cards.length; i++) {
        var cardId = cards[i].id.replace('nar-card-', '');
        var objEl = document.getElementById('nar-obj-' + cardId);
        var reqIdEl = document.getElementById('nar-reqid-' + cardId);
        var nameEl = document.getElementById('nar-name-' + cardId);
        var descEl = document.getElementById('nar-desc-' + cardId);
        var ioEl = document.getElementById('nar-io-' + cardId);
        var acEl = document.getElementById('nar-ac-' + cardId);

        list.push({
            index: i + 1,
            objective: objEl ? objEl.value.trim() : "",
            reqId: reqIdEl ? reqIdEl.value.trim() : "",
            reqName: nameEl ? nameEl.value.trim() : "",
            narrative: descEl ? descEl.value.trim() : "",
            io: ioEl ? ioEl.value.trim() : "",
            criteria: acEl ? acEl.value.trim() : ""
        });
    }
    return list;
}

function validateAllNarratives() {
    var outBox = document.getElementById('nar-output');
    if (!outBox) return;
    outBox.style.display = 'block';

    var project = document.getElementById('nar-project') ? document.getElementById('nar-project').value.trim() : "";
    var items = collectAllNarratives();

    if (items.length === 0) {
        outBox.innerHTML = '<p style="color:#dc3545; font-weight:bold;">⚠️ No hay requerimientos registrados. Haz clic en "➕ Agregar Requerimiento Funcional".</p>';
        return;
    }

    var ambiguousWords = ["rápido", "rapido", "fácil", "facil", "intuitivo", "amigable", "etc", "etc.", "algunos", "varios", "normalmente", "adecuado", "óptimo", "optimo", "eficiente"];
    var html = '<h3>📊 Dictamen de Calidad de Especificaciones (SRS / Cascada)</h3>';
    if (!project) {
        html += '<p style="color:#d97706;">⚠️ <b>Nota:</b> Te sugerimos definir el <b>Nombre del Proyecto</b> en la parte superior.</p>';
    } else {
        html += '<p><b>Proyecto:</b> ' + escapeHtmlText(project) + '</p>';
    }

    for (var i = 0; i < items.length; i++) {
        var it = items[i];
        var issues = [];

        if (!it.objective && businessObjectivesCatalog.length > 0) {
            issues.push("Falta vincular la Clave de Objetivo Comercial (Trazabilidad de negocio).");
        }
        if (!it.reqId || !it.reqName) {
            issues.push("Falta el identificador (Núm. Req) o el Nombre del Requerimiento.");
        }
        if (it.narrative.length < 20) {
            issues.push("La narrativa es demasiado breve o incompleta para una especificación formal.");
        }
        if (it.io.length < 10) {
            issues.push("Falta especificar claramente los Datos de Entrada, Reglas de Negocio o Salidas.");
        }
        if (it.criteria.length < 10) {
            issues.push("Falta definir los Criterios de Aceptación / Verificación para QA.");
        }

        var combinedText = (it.narrative + " " + it.io + " " + it.criteria).toLowerCase();
        var foundAmbiguous = [];
        for (var w = 0; w < ambiguousWords.length; w++) {
            var regex = new RegExp("\\b" + ambiguousWords[w] + "\\b", "i");
            if (regex.test(combinedText)) {
                foundAmbiguous.push(ambiguousWords[w]);
            }
        }
        if (foundAmbiguous.length > 0) {
            issues.push("Contiene términos ambiguos no verificables (" + foundAmbiguous.join(", ") + "). Sustitúyelos por métricas exactas.");
        }

        if (issues.length === 0) {
            html += '<div style="background:#d4edda; border-left:5px solid #28a745; padding:12px; margin-bottom:10px; border-radius:4px;">' +
                '<b>✅ ' + escapeHtmlText(it.reqId || ('Req #' + it.index)) + ' - ' + escapeHtmlText(it.reqName || 'Sin nombre') + ':</b> Cumple con el estándar SRS (Completo, Trazable y Sin Ambigüedades).' +
                '</div>';
        } else {
            html += '<div style="background:#f8d7da; border-left:5px solid #dc3545; padding:12px; margin-bottom:10px; border-radius:4px;">' +
                '<b>❌ ' + escapeHtmlText(it.reqId || ('Req #' + it.index)) + ' - ' + escapeHtmlText(it.reqName || 'Sin nombre') + ':</b> Requiere ajustes:<ul>';
            for (var k = 0; k < issues.length; k++) {
                html += '<li>' + issues[k] + '</li>';
            }
            html += '</ul></div>';
        }
    }

    outBox.innerHTML = html;
}

// --- 4. EXPORTAR SCRIPT WINDOWS Y DOCUMENTO WORD / JSON ---
function exportProjectFoldersAndFiles() {
    var project = (document.getElementById('nar-project') ? document.getElementById('nar-project').value.trim() : "") || "Proyecto_SRS";
    var safeProj = project.replace(/[^a-zA-Z0-9_-]/g, "_");
    var items = collectAllNarratives();

    if (items.length === 0) {
        alert("⚠️ Agrega al menos un requerimiento funcional antes de exportar.");
        return;
    }

    var docContent = "====================================================\r\n";
    docContent += "ESPECIFICACIÓN DE REQUERIMIENTOS DE SOFTWARE (SRS)\r\n";
    docContent += "PROYECTO: " + project + "\r\n";
    docContent += "====================================================\r\n\r\n";

    for (var i = 0; i < items.length; i++) {
        var it = items[i];
        docContent += "----------------------------------------------------\r\n";
        docContent += "REQUERIMIENTO: " + (it.reqId || ("REQ-0" + it.index)) + " - " + (it.reqName || "Sin título") + "\r\n";
        docContent += "OBJETIVO COMERCIAL: " + (it.objective || "No especificado") + "\r\n";
        docContent += "----------------------------------------------------\r\n";
        docContent += "1. NARRATIVA FORMAL:\r\n" + (it.narrative || "N/A") + "\r\n\r\n";
        docContent += "2. ENTRADAS, REGLAS Y SALIDAS:\r\n" + (it.io || "N/A") + "\r\n\r\n";
        docContent += "3. CRITERIOS DE VERIFICACIÓN QA:\r\n" + (it.criteria || "N/A") + "\r\n\r\n";
    }

    var blob = new Blob([docContent], { type: "application/msword;charset=utf-8" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "SRS_" + safeProj + ".doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportProjectJSON() {
    var project = (document.getElementById('nar-project') ? document.getElementById('nar-project').value.trim() : "") || "Proyecto_SRS";
    var data = {
        project: project,
        objectivesCatalog: businessObjectivesCatalog,
        requirements: collectAllNarratives()
    };
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = project.replace(/[^a-zA-Z0-9_-]/g, "_") + "_SRS.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function importProjectJSON(event) {
    var file = event.target.files[0];
    if (!file) return;

    var reader = new FileReader();
    reader.onload = function(e) {
        try {
            var data = JSON.parse(e.target.result);
            if (data.project && document.getElementById('nar-project')) {
                document.getElementById('nar-project').value = data.project;
            }
            if (Array.isArray(data.objectivesCatalog)) {
                businessObjectivesCatalog = data.objectivesCatalog;
            }
            var container = document.getElementById('narratives-container');
            if (container) container.innerHTML = '';
            narrativeCounter = 0;

            var reqs = data.requirements || [];
            for (var i = 0; i < reqs.length; i++) {
                addNarrativeForm(reqs[i]);
            }
            if (reqs.length === 0) {
                addNarrativeForm();
            }
            alert("✅ Proyecto importado correctamente.");
        } catch (err) {
            console.error(err);
            alert("⚠️ El archivo JSON seleccionado no tiene un formato válido.");
        }
    };
    reader.readAsText(file, "UTF-8");
}

// --- UTILIDADES DE ESCAPE SEGURO ---
function escapeHtmlAttr(str) {
    if (!str) return "";
    return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeHtmlText(str) {
    if (!str) return "";
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
