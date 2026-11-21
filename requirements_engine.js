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
                if (typeof switchMainTab === 'function') switchMainTab('tab-training', document.querySelector('nav button'));
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
            extractedDocumentText = "<pre style='white-space: pre-wrap; font-family: inherit;'>" + escapeQuotes(e.target.result) + "</pre>";
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
    
    var docText = typeof extractedDocumentText !== 'undefined' ? extractedDocumentText : "";
    if (!docText || docText.trim() === "") {
        var proceed = confirm("⚠️ No has cargado un Documento de Contexto en el Paso 1.\n\n¿Deseas continuar al área de trabajo para capturar desde cero o importar un JSON?");
        if (!proceed) return;
        isManualMode = true; 
        extractedDocumentText = "<p><i>Modo de captura manual o importación (JSON) activo.</i></p>";
    }

    var containerATDD = document.getElementById('stories-container');
    var containerSRS = document.getElementById('narratives-container');
    var hasUnsavedATDD = containerATDD && containerATDD.children.length > 0;
    var hasUnsavedSRS = containerSRS && containerSRS.children.length > 0;

    if (hasUnsavedATDD || hasUnsavedSRS) {
        var keepCache = confirm("Detectamos requerimientos previos en el área de trabajo.\n\n¿Quieres CONSERVARLOS en pantalla? (Aceptar).\nPara BORRARLOS y empezar en blanco (Cancelar).");
        if (!keepCache) {
            if (containerATDD) containerATDD.innerHTML = '';
            if (containerSRS) containerSRS.innerHTML = '';
            if (typeof storyCount !== 'undefined') storyCount = 0;
            if (typeof narrativeCount !== 'undefined') narrativeCount = 0;
        }
    }

    if (typeof activeMethodology !== 'undefined') {
        activeMethodology = type;
    }

    var leftPanel = document.getElementById('left-panel');
    var rightPanel = document.getElementById('right-panel');
    var unifiedWorkspace = document.getElementById('unified-workspace');

    if (unifiedWorkspace) unifiedWorkspace.style.display = 'block'; 

    var setupContainer = document.getElementById('setup-container');
    if (setupContainer) setupContainer.style.display = 'none';

    // AJUSTE DE PROPORCIONES Y ALINEACIÓN
    if (isManualMode) {
        if (leftPanel) leftPanel.style.display = 'none';
        if (rightPanel) {
            rightPanel.style.display = 'block';
            rightPanel.style.flex = '1';
            rightPanel.style.width = '100%';
        }
    } else {
        if (leftPanel) {
            leftPanel.style.display = 'block';
            leftPanel.style.flex = '1'; 
            leftPanel.style.maxWidth = '50%'; 
            leftPanel.style.marginTop = '0';
        }
        if (rightPanel) {
            rightPanel.style.display = 'block';
            rightPanel.style.flex = '1'; 
            rightPanel.style.marginTop = '0';
        }
        var flexContainer = rightPanel ? rightPanel.parentElement : null;
        if (flexContainer) {
            flexContainer.style.alignItems = 'flex-start';
        }
    }

    // INYECCIÓN DE ESTILOS UX, BANNER FIJO Y CONTROL DE TABLAS
    var docContent = document.getElementById('doc-content');
    if (docContent) {
        var styleHTML = '<style>' +
            '#doc-content { font-size: 0.85rem; line-height: 1.6; color: #333; margin-top: 0; padding-top: 0; }' +
            '#doc-content table { width: 100% !important; border-collapse: collapse; margin-bottom: 20px; }' +
            '#doc-content th, #doc-content td { border: 1px solid #ccc; padding: 8px; vertical-align: top; }' +
            '#doc-content img { max-width: 100%; height: auto; }' +
            '#floating-menu { z-index: 10000; }' +
            '</style>';
            
        var bannerHTML = '<div style="background-color: #e0f2fe; color: #0369a1; padding: 12px; border-radius: 6px; margin-bottom: 20px; border: 1px solid #bae6fd; position: sticky; top: 0; z-index: 10; font-size: 0.85rem;">' +
            '<strong style="display: block; margin-bottom: 5px;">💡 Instrucciones de Mapeo:</strong>' +
            '1. Selecciona cualquier fragmento de texto (sin incluir títulos grandes).<br>' +
            '2. Aparecerá un menú flotante oscuro.<br>' +
            '3. Haz clic en el botón deseado para enviar el texto automáticamente al formulario de la derecha.' +
            '</div>';

        docContent.innerHTML = styleHTML + bannerHTML + extractedDocumentText;
    }

    if (type === 'agile' && typeof initAgileWorkspace === 'function') {
        initAgileWorkspace();
    } else if (type === 'waterfall' && typeof initWaterfallWorkspace === 'function') {
        initWaterfallWorkspace();
    }

    if (!isManualMode) {
        enableTextSelectionBinding();
    }
}

// ESTILOS COMPARTIDOS PARA LA BARRA COMPACTA DE ÍCONOS Y TOOLTIPS
function getIconToolbarStyles() {
    return '<style>' +
        '.req-toolbar { margin-top: 0; margin-bottom: 16px; display: flex; gap: 8px; background: #fff; padding: 8px 12px; border-radius: 8px; border: 1px solid #e2e8f0; align-items: center; justify-content: flex-start; flex-wrap: nowrap; position: sticky; top: 0; z-index: 20; box-shadow: 0 2px 6px rgba(0,0,0,0.06); }' +
        '.req-icon-btn { position: relative; display: inline-flex !important; align-items: center; justify-content: center; width: 38px; height: 38px; padding: 0 !important; margin: 0 !important; border-radius: 6px; font-size: 1.15rem; line-height: 1; cursor: pointer; transition: transform 0.15s, background-color 0.15s; box-sizing: border-box; }' +
        '.req-icon-btn:hover { transform: translateY(-1px); }' +
        '.req-icon-sec { background: #f8f9fa; border: 1px solid #d1d5db; color: #333; }' +
        '.req-icon-sec:hover { background: #e2e8f0; }' +
        '.req-icon-load { background: #fff3cd; border: 1px solid #ffeeba; color: #856404; }' +
        '.req-icon-load:hover { background: #ffe69c; }' +
        '.req-divider { width: 1px; height: 26px; background: #cbd5e1; margin: 0 4px; flex-shrink: 0; }' +
        '.req-icon-btn::after { content: attr(data-tooltip); position: absolute; top: calc(100% + 7px); left: 0; background: #1f2937; color: #fff; font-size: 0.75rem; font-weight: 600; padding: 5px 9px; border-radius: 5px; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity 0.15s ease; z-index: 9999; box-shadow: 0 3px 8px rgba(0,0,0,0.2); }' +
        '.req-icon-btn:hover::after { opacity: 1; }' +
        '</style>';
}

// 4. GENERADORES DE LABORATORIOS
function initAgileWorkspace() {
    var wContainer = document.getElementById('workspace-container'); 
    if (!wContainer) return;
    
    var html = getIconToolbarStyles();
    html += '<div id="atdd-lab">';
    html += '<div class="req-toolbar">';
    html += '<button type="button" class="btn req-icon-btn" data-tooltip="Agregar Historia" aria-label="Agregar Historia" onclick="addStoryForm()">➕</button>';
    html += '<button type="button" class="btn btn-accent req-icon-btn" data-tooltip="Validar INVEST" aria-label="Validar INVEST" onclick="validateAllStories()">🔍</button>';
    html += '<div class="req-divider"></div>';
    html += '<button type="button" class="req-icon-btn req-icon-sec" data-tooltip="Excel / Jira (CSV)" aria-label="Excel / Jira (CSV)" onclick="exportToExcelCSV()">📊</button>';
    html += '<button type="button" class="req-icon-btn req-icon-sec" data-tooltip="Guardar respaldo (JSON)" aria-label="Guardar respaldo (JSON)" onclick="exportAtddProjectJSON()">📤</button>';
    html += '<label class="req-icon-btn req-icon-load" data-tooltip="Cargar proyecto (JSON)" aria-label="Cargar proyecto (JSON)">📥<input type="file" accept=".json" style="display: none;" onchange="importAtddProjectJSON(event)"></label>';
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
    
    var html = getIconToolbarStyles();
    html += '<div id="narrative-lab">';
    html += '<div class="req-toolbar">';
    html += '<button type="button" class="btn req-icon-btn" data-tooltip="Agregar Requerimiento" aria-label="Agregar Requerimiento" onclick="addNarrativeForm()">➕</button>';
    html += '<button type="button" class="btn btn-accent req-icon-btn" data-tooltip="Dictaminar (SRS)" aria-label="Dictaminar (SRS)" onclick="validateAllNarratives()">🔍</button>';
    html += '<div class="req-divider"></div>';
    html += '<button type="button" class="req-icon-btn req-icon-sec" data-tooltip="Exportar Script/Docx" aria-label="Exportar Script/Docx" onclick="exportProjectFoldersAndFiles()">📁</button>';
    html += '<button type="button" class="req-icon-btn req-icon-sec" data-tooltip="Guardar respaldo (JSON)" aria-label="Guardar respaldo (JSON)" onclick="exportNarrativeProjectJSON()">📤</button>';
    html += '<label class="req-icon-btn req-icon-load" data-tooltip="Cargar proyecto (JSON)" aria-label="Cargar proyecto (JSON)">📥<input type="file" accept=".json" style="display: none;" onchange="importNarrativeProjectJSON(event)"></label>';
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
                menuHtml += '<button onclick="sendTextToField(\'nar-context\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+'">➡️ Situación actual</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-name\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+'">➡️ Nombre del req.</button>';
                if (document.getElementById('nar-obj-manual-' + lastInteractedFormIndex)) {
                    menuHtml += '<button onclick="sendTextToField(\'nar-obj-manual\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+'">➡️ Objetivos Comerciales</button>';
                }
                menuHtml += '<button onclick="sendTextToField(\'nar-desc\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+'">➡️ Requisito inicial</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-inputs\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+'">➡️ Entradas</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-outputs\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+'">➡️ Salidas</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-ac\', \'' + escapeQuotes(selectedText) + '\')" style="'+btnSt+' border:none;">➡️ Criterios de aceptación</button>';
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

// --- UX FUNCIONAL: SCROLL Y RESALTADO PARA CAJAS ROJAS ---
window.scrollToNarrative = function(cardId) {
    var card = document.getElementById(cardId);
    if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        var originalBg = card.style.backgroundColor || '#fff';
        card.style.transition = 'background-color 0.5s ease';
        card.style.backgroundColor = '#fff3cd';
        setTimeout(() => {
            card.style.backgroundColor = originalBg;
        }, 1500);
    }
};
