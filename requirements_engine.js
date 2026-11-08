// ==========================================
// MÓDULO UNIFICADO: INGENIERÍA DE REQUERIMIENTOS
// Archivo: requirements_engine.js
// ==========================================

var extractedDocumentText = "";
var activeMethodology = "";
var lastInteractedFormIndex = 1;
window.loadedBusinessObjectives = [];

// 1. CONTROL DE ACCESO
window.addEventListener('DOMContentLoaded', function() {
    var reqModuleBtn = document.getElementById('btn-mod-req');
    if (reqModuleBtn) {
        reqModuleBtn.addEventListener('click', function(e) {
            if (window.innerWidth < 1024) {
                e.preventDefault();
                alert("🖥️ El Laboratorio requiere un espacio de trabajo amplio. Por favor, accede desde un equipo de escritorio.");
                switchMainTab('tab-training', document.querySelector('nav button'));
            }
        });
    }
});

// 2. LECTURA DE ARCHIVOS (PASO 1)
function handleContextUpload(event) {
    var file = event.target.files[0];
    if (!file) return;

    var fileName = file.name.toLowerCase();
    if (fileName.endsWith('.docx')) {
        if (typeof mammoth === 'undefined') {
            alert("⚠️ La librería Mammoth.js no está disponible.");
            return;
        }
        var reader = new FileReader();
        reader.onload = function(loadEvent) {
            mammoth.convertToHtml({ arrayBuffer: loadEvent.target.result })
                .then(function(result) {
                    extractedDocumentText = result.value;
                    parseBusinessObjectivesFromHTML(extractedDocumentText);
                    alert("✅ Documento procesado. Elige la metodología para iniciar.");
                    enableMethodologySelection();
                }).catch(function(err) {
                    console.error(err);
                    alert("⚠️ Error al leer el archivo Word.");
                });
        };
        reader.readAsArrayBuffer(file);
    } 
    else if (fileName.endsWith('.txt') || fileName.endsWith('.csv') || fileName.endsWith('.json')) {
        var txtReader = new FileReader();
        txtReader.onload = function(e) {
            extractedDocumentText = "<pre style='white-space: pre-wrap;'>" + escapeQuotes(e.target.result) + "</pre>";
            parseBusinessObjectivesFromHTML(extractedDocumentText);
            alert("✅ Archivo de texto procesado. Elige la metodología para iniciar.");
            enableMethodologySelection();
        };
        txtReader.readAsText(file);
    } else {
        alert("⚠️ Por favor, sube un archivo válido (.docx, .txt, .json, .csv).");
    }
}

function parseBusinessObjectivesFromHTML(htmlContent) {
    window.loadedBusinessObjectives = [];
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    var rows = tempDiv.querySelectorAll('tr');
    for (var i = 1; i < rows.length; i++) {
        var cols = rows[i].querySelectorAll('td');
        if (cols.length >= 3) {
            var id = cols[0].innerText.trim();
            var desc = cols[2].innerText.trim();
            if (id.match(/^OBJ/i) || (id.length > 0 && id.length <= 15)) {
                window.loadedBusinessObjectives.push({ id: id, description: desc });
            }
        }
    }
}

function enableMethodologySelection() {
    var agilBtn = document.querySelector('button[onclick*="agile"]');
    var srsBtn = document.querySelector('button[onclick*="waterfall"]');
    if (agilBtn) agilBtn.disabled = false;
    if (srsBtn) srsBtn.disabled = false;
}

// 3. TRANSICIÓN Y CACHÉ (PASO 2)
function selectMethodology(type) {
    var isManualMode = false;
    
    // Validar si hay documento cargado
    var docText = typeof extractedDocumentText !== 'undefined' ? extractedDocumentText : "";
    if (!docText || docText.trim() === "") {
        var proceed = confirm("⚠️ No has cargado un Documento de Contexto en el Paso 1.\n\n¿Deseas continuar al área de trabajo para capturar desde cero o importar un JSON?");
        if (!proceed) return;
        isManualMode = true; 
    }

    if (typeof activeMethodology !== 'undefined') {
        activeMethodology = type;
    }

    // 1. Ocultar los pasos de carga (Paso 1 y 2)
    var setupContainer = document.getElementById('setup-container');
    if (setupContainer) setupContainer.style.display = 'none';

    // 2. Mostrar el espacio de trabajo dinámico
    var unifiedWorkspace = document.getElementById('unified-workspace');
    if (unifiedWorkspace) unifiedWorkspace.style.display = 'block';

    // 3. Disparar la generación de la interfaz según la metodología elegida
    if (type === 'agile' && typeof initAgileWorkspace === 'function') {
        initAgileWorkspace();
    } else if (type === 'waterfall' && typeof initWaterfallWorkspace === 'function') {
        initWaterfallWorkspace();
    }
}

// 4. GENERADORES DE LABORATORIOS
function initAgileWorkspace() {
    var wContainer = document.getElementById('workspace-container');
    if (!wContainer) return;
    
    var btnStyle = 'background:#f8f9fa; border:1px solid #ddd; padding:8px 15px; border-radius:4px; cursor:pointer; color:#333; font-weight:bold; box-shadow: 0 2px 4px rgba(0,0,0,0.05);';
    var html = '<div id="atdd-lab">';
    html += '<div style="margin-bottom: 20px; display: flex; gap: 10px; background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0; align-items: center;">';
    html += '<button type="button" class="btn" onclick="addStoryForm()">➕ Agregar Historia</button>';
    html += '<button type="button" class="btn btn-accent" onclick="validateAllStories()">🔍 Validar INVEST</button>';
    html += '<div style="width: 1px; height: 30px; background: #cbd5e1; margin: 0 5px;"></div>';
    html += '<button type="button" style="' + btnStyle + '" onclick="exportToExcelCSV()">📊 Excel / Jira (CSV)</button>';
    html += '<button type="button" style="' + btnStyle + '" onclick="exportAtddProjectJSON()">📤 Guardar respaldo (Json)</button>';
    html += '<label style="' + btnStyle + ' background:#fff3cd; color:#856404; border-color:#ffeeba;">📥 Cargar proyecto <input type="file" accept=".json" style="display: none;" onchange="importAtddProjectJSON(event)"></label>';
    html += '</div>';
    html += '<h3 style="color: #28a745; margin-top: 0;">🚀 Construcción de Historias (ATDD)</h3>';
    html += '<div id="stories-container"></div></div>'; 
    wContainer.innerHTML = html;
    
    setTimeout(function() {
        if (typeof addStoryForm === 'function' && document.getElementById('stories-container').children.length === 0) {
            addStoryForm();
        }
    }, 100);
}

function initWaterfallWorkspace() {
    var wContainer = document.getElementById('workspace-container');
    if (!wContainer) return;
    
    var btnStyle = 'background:#f8f9fa; border:1px solid #ddd; padding:8px 15px; border-radius:4px; cursor:pointer; color:#333; font-weight:bold; box-shadow: 0 2px 4px rgba(0,0,0,0.05);';
    var html = '<div id="narrative-lab">';
    html += '<div style="margin-bottom: 20px; display: flex; gap: 10px; background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0; align-items: center;">';
    html += '<button type="button" class="btn" onclick="addNarrativeForm()">➕ Agregar Requerimiento</button>';
    html += '<button type="button" class="btn btn-accent" onclick="validateAllNarratives()">🔍 Dictaminar (SRS)</button>';
    html += '<div style="width: 1px; height: 30px; background: #cbd5e1; margin: 0 5px;"></div>';
    html += '<button type="button" style="' + btnStyle + '" onclick="exportProjectFoldersAndFiles()">📁 Exportar Script/Docx</button>';
    html += '<button type="button" style="' + btnStyle + '" onclick="exportNarrativeProjectJSON()">📤 Guardar respaldo (Json)</button>';
    html += '<label style="' + btnStyle + ' background:#fff3cd; color:#856404; border-color:#ffeeba;">📥 Cargar proyecto <input type="file" accept=".json" style="display: none;" onchange="importNarrativeProjectJSON(event)"></label>';
    html += '</div>';
    html += '<h3 style="color: #005691; margin-top: 0;">🏛️ Construcción de Narrativas (SRS)</h3>';
    html += '<div id="nar-output" style="display:none; margin-bottom:20px; border:1px solid #ccc; padding:15px; border-radius:6px; background:#f9f9f9; max-height:300px; overflow-y:auto;"></div>';
    html += '<div id="narratives-container"></div></div>';
    wContainer.innerHTML = html;
    
    setTimeout(function() {
        if (typeof addNarrativeForm === 'function' && document.getElementById('narratives-container').children.length === 0) {
            addNarrativeForm();
        }
    }, 100);
}

// 5. MENÚ FLOTANTE
function enableTextSelectionBinding() {
    var docPanel = document.getElementById('doc-content');
    if (!docPanel) return;

    var floatMenu = document.getElementById('floating-menu');
    if (!floatMenu) {
        floatMenu = document.createElement('div');
        floatMenu.id = 'floating-menu';
        floatMenu.style.position = 'absolute';
        floatMenu.style.display = 'none';
        floatMenu.style.background = '#333';
        floatMenu.style.border = '1px solid #222';
        floatMenu.style.borderRadius = '6px';
        floatMenu.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
        floatMenu.style.zIndex = '9999';
        floatMenu.style.flexDirection = 'column';
        floatMenu.style.minWidth = '180px';
        document.body.appendChild(floatMenu);
    }

    docPanel.addEventListener('mouseup', function(e) {
        var selection = window.getSelection();
        var selectedText = selection.toString().trim();
        var isHeader = false;
        var parent = selection.anchorNode ? selection.anchorNode.parentElement : null;
        if (parent && ['h1','h2','h3','h4','h5','h6'].includes(parent.tagName.toLowerCase())) isHeader = true;

        if (selectedText.length > 2 && !isHeader) {
            var rect = selection.getRangeAt(0).getBoundingClientRect();
            floatMenu.style.top = (rect.bottom + window.scrollY + 5) + 'px';
            floatMenu.style.left = (rect.left + window.scrollX) + 'px';
            
            var menuHtml = '<div style="font-size:0.75rem; color:#aaa; padding:5px 8px; border-bottom:1px solid #555; text-align:center;">Fila #' + lastInteractedFormIndex + '</div>';
            var btnSt = 'background:none; border:none; color:white; cursor:pointer; text-align:left; padding:8px; border-bottom:1px solid #444; width:100%;';
            
            if (activeMethodology === 'agile') {
                menuHtml += '<button onclick="sendTextToField(\'st-epic\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+'">➡️ Épica</button>';
                menuHtml += '<button onclick="sendTextToField(\'st-name\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+'">➡️ Nombre</button>';
                menuHtml += '<button onclick="sendTextToField(\'st-desc\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+'">➡️ Narrativa</button>';
                menuHtml += '<button onclick="sendTextToField(\'st-criteria\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+' border:none;">➡️ Criterios</button>';
            } else {
                menuHtml += '<button onclick="sendTextToField(\'nar-name\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+'">➡️ Nombre</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-desc\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+'">➡️ Narrativa</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-io\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+'">➡️ Entradas/Salidas</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-ac\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+' border:none;">➡️ Criterios QA</button>';
            }
            floatMenu.innerHTML = menuHtml;
            floatMenu.style.display = 'flex';
        } else {
            floatMenu.style.display = 'none';
        }
    });

    document.addEventListener('mousedown', function(e) {
        if (floatMenu && !floatMenu.contains(e.target) && e.target.id !== 'doc-content') {
            floatMenu.style.display = 'none';
        }
    });

    document.getElementById('workspace-container').addEventListener('click', function(e) {
        var card = e.target.closest('.card');
        if (card) {
            var idParts = card.id.split('-');
            var idx = idParts[idParts.length - 1];
            if (!isNaN(idx)) {
                lastInteractedFormIndex = idx;
                document.querySelectorAll('.card').forEach(c => c.style.borderLeftColor = '#ccc');
                card.style.borderLeftColor = (activeMethodology === 'agile') ? '#28a745' : '#005691';
            }
        }
    });
}

function sendTextToField(fieldPrefix, text) {
    var targetId = fieldPrefix + '-' + lastInteractedFormIndex;
    var inputEl = document.getElementById(targetId);
    
    if (inputEl) {
        inputEl.value = inputEl.value ? inputEl.value + ' \n' + text : text;
        var originalBg = inputEl.style.backgroundColor;
        inputEl.style.transition = 'background-color 0.3s';
        inputEl.style.backgroundColor = '#d4edda';
        setTimeout(() => inputEl.style.backgroundColor = originalBg || '', 800);
    } else {
        alert("⚠️ No se encontró el campo destino (Fila #" + lastInteractedFormIndex + ").");
    }
    document.getElementById('floating-menu').style.display = 'none';
    window.getSelection().removeAllRanges();
}

function escapeQuotes(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/\n/g, ' ');
}
