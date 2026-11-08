// ==========================================
// MÓDULO UNIFICADO: INGENIERÍA DE REQUERIMIENTOS
// Archivo: requirements_engine.js
// ==========================================

var extractedDocumentText = "";
var activeMethodology = "";
var lastInteractedFormIndex = 1;

window.loadedBusinessObjectives = [];

window.addEventListener('DOMContentLoaded', function() {
    var reqModuleBtn = document.getElementById('btn-mod-req');
    if (reqModuleBtn) {
        reqModuleBtn.addEventListener('click', function(e) {
            if (window.innerWidth < 1024) {
                e.preventDefault();
                alert("🖥️ El Laboratorio de Ingeniería de Requerimientos requiere un espacio de trabajo amplio. Por favor, accede desde un equipo de escritorio.");
                switchMainTab('tab-training', document.querySelector('nav button'));
            }
        });
    }
});

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
            var arrayBuffer = loadEvent.target.result;
            mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
                .then(function(result) {
                    extractedDocumentText = result.value;
                    parseBusinessObjectivesFromHTML(extractedDocumentText);
                    alert("✅ Documento procesado. Elige la metodología para iniciar.");
                    enableMethodologySelection();
                })
                .catch(function(err) {
                    console.error(err);
                    alert("⚠️ Error al leer el archivo Word.");
                });
        };
        reader.readAsArrayBuffer(file);
    } 
    else if (fileName.endsWith('.txt') || fileName.endsWith('.csv') || fileName.endsWith('.json')) {
        var txtReader = new FileReader();
        txtReader.onload = function(e) {
            var rawText = e.target.result;
            extractedDocumentText = "<pre style='white-space: pre-wrap; font-family: inherit;'>" + escapeQuotes(rawText) + "</pre>";
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
    var agilBtn = document.querySelector('button[onclick="selectMethodology(\'agile\')"]');
    var srsBtn = document.querySelector('button[onclick="selectMethodology(\'waterfall\')"]');
    if (agilBtn) agilBtn.disabled = false;
    if (srsBtn) srsBtn.disabled = false;
}

function selectMethodology(type) {
    var isManualMode = false;
    
    // REGLA 1: Avanzar sin archivo base
    if (!extractedDocumentText) {
        var proceed = confirm("⚠️ No has cargado un Documento de Contexto en el Paso 1.\n\n¿Deseas continuar de todos modos al área de trabajo para importar un proyecto (JSON) o capturar desde cero?");
        if (!proceed) return;
        
        extractedDocumentText = "<p><i>Modo de captura manual o importación (JSON) activo.</i></p>";
        isManualMode = true; 
    }

    // REGLA 2: Caché Inteligente (Protección contra pérdida de datos)
    var containerATDD = document.getElementById('stories-container');
    var containerSRS = document.getElementById('narratives-container');
    var hasUnsavedATDD = containerATDD && containerATDD.children.length > 0;
    var hasUnsavedSRS = containerSRS && containerSRS.children.length > 0;

    if (hasUnsavedATDD || hasUnsavedSRS) {
        var keepCache = confirm("Detectamos requerimientos previos en el área de trabajo (posiblemente sin exportar o recién importados).\n\n¿Quieres CONSERVARLOS en pantalla? (Haz clic en 'Aceptar').\nPara BORRARLOS y empezar un lienzo en blanco, haz clic en 'Cancelar'.");
        
        if (!keepCache) {
            if (containerATDD) containerATDD.innerHTML = '';
            if (containerSRS) containerSRS.innerHTML = '';
            if (typeof storyCount !== 'undefined') storyCount = 0;
            if (typeof narrativeCount !== 'undefined') narrativeCount = 0;
        }
    } else {
        if (containerATDD) containerATDD.innerHTML = '';
        if (containerSRS) containerSRS.innerHTML = '';
        if (typeof storyCount !== 'undefined') storyCount = 0;
        if (typeof narrativeCount !== 'undefined') narrativeCount = 0;
    }

    activeMethodology = type;

    // --- TRANSICIÓN DE PANTALLA ---
    var welcomeMod = document.getElementById('tab-welcome');
    var targetMod = document.getElementById('tab-lab');
    if (welcomeMod) welcomeMod.classList.remove('active');
    if (targetMod) targetMod.classList.add('active');

    // Ocultar los pasos de carga de archivo
    var setupContainer = document.getElementById('setup-container');
    if (setupContainer) setupContainer.style.display = 'none';

    // Controlar la visibilidad de los paneles (Izquierdo y Derecho)
    var leftPanel = document.getElementById('left-panel');
    var rightPanel = document.getElementById('right-panel');

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
            leftPanel.style.maxWidth = '40%';
        }
        if (rightPanel) {
            rightPanel.style.display = 'block';
            rightPanel.style.flex = '2';
        }
    }

    var docContentPanel = document.getElementById('doc-content');
    if (docContentPanel) {
        docContentPanel.innerHTML = extractedDocumentText;
    }

    if (type === 'agile') {
        initAgileWorkspace();
    } else if (type === 'waterfall') {
        initWaterfallWorkspace();
    }

    if (!isManualMode) {
        enableTextSelectionBinding();
    }

    // Activar el botón de la barra de navegación
    var btnMods = document.querySelectorAll('nav button');
    for(var b=0; b < btnMods.length; b++) {
        btnMods[b].classList.remove('active');
        if(btnMods[b].innerText.includes("Ingeniería de Requerimientos") || btnMods[b].id === "btn-mod-req") {
            btnMods[b].classList.add('active');
        }
    }
}

function initAgileWorkspace() {
    var wContainer = document.getElementById('workspace-container');
    if (!wContainer) return;
    
    var html = '<div id="atdd-lab">';
    var btnStyle = 'background:#f8f9fa; border:1px solid #ddd; padding:8px 15px; border-radius:4px; cursor:pointer; color:#333; font-weight:bold; transition:all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.05);';
    
    html += '<div style="margin-bottom: 20px; display: flex; gap: 10px; background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0; align-items: center; justify-content: flex-start; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">';
    html += '<button type="button" class="btn" onclick="addStoryForm()">➕ Agregar Historia</button>';
    html += '<button type="button" class="btn btn-accent" onclick="validateAllStories()">🔍 Validar INVEST</button>';
    html += '<div style="width: 1px; height: 30px; background: #cbd5e1; margin: 0 5px;"></div>';
    html += '<button type="button" style="' + btnStyle + '" onmouseover="this.style.background=\'#e2e8f0\'" onmouseout="this.style.background=\'#f8f9fa\'" onclick="exportToExcelCSV()">📊 Excel / Jira (CSV)</button>';
    html += '<button type="button" style="' + btnStyle + '" onmouseover="this.style.background=\'#e2e8f0\'" onmouseout="this.style.background=\'#f8f9fa\'" onclick="exportAtddProjectJSON()">📤 Guardar respaldo (Json)</button>';
    html += '<label style="' + btnStyle + ' background:#fff3cd; color:#856404; border-color:#ffeeba;">📥 Cargar un proyecto <input type="file" accept=".json" style="display: none;" onchange="importAtddProjectJSON(event)"></label>';
    html += '</div>';
    
    html += '<h3 style="color: #28a745; margin-top: 0;">🚀 Construcción de Historias (ATDD)</h3>';
    html += '<div id="stories-container"></div>'; 
    html += '</div>';
    
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
    
    var html = '<div id="narrative-lab">';
    var btnStyle = 'background:#f8f9fa; border:1px solid #ddd; padding:8px 15px; border-radius:4px; cursor:pointer; color:#333; font-weight:bold; transition:all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.05);';

    html += '<div style="margin-bottom: 20px; display: flex; gap: 10px; background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0; align-items: center; justify-content: flex-start; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">';
    html += '<button type="button" class="btn" onclick="addNarrativeForm()">➕ Agregar Requerimiento</button>';
    html += '<button type="button" class="btn btn-accent" onclick="validateAllNarratives()">🔍 Dictaminar (SRS)</button>';
    html += '<div style="width: 1px; height: 30px; background: #cbd5e1; margin: 0 5px;"></div>';
    html += '<button type="button" style="' + btnStyle + '" onmouseover="this.style.background=\'#e2e8f0\'" onmouseout="this.style.background=\'#f8f9fa\'" onclick="exportProjectFoldersAndFiles()">📁 Exportar Script/Docx</button>';
    html += '<button type="button" style="' + btnStyle + '" onmouseover="this.style.background=\'#e2e8f0\'" onmouseout="this.style.background=\'#f8f9fa\'" onclick="exportNarrativeProjectJSON()">📤 Guardar respaldo (Json)</button>';
    html += '<label style="' + btnStyle + ' background:#fff3cd; color:#856404; border-color:#ffeeba;">📥 Cargar un proyecto <input type="file" accept=".json" style="display: none;" onchange="importNarrativeProjectJSON(event)"></label>';
    html += '</div>';

    html += '<h3 style="color: #005691; margin-top: 0;">🏛️ Construcción de Narrativas (SRS)</h3>';
    
    html += '<div id="nar-output" style="display:none; margin-bottom:20px; border:1px solid #ccc; padding:15px; border-radius:6px; background:#f9f9f9; max-height:300px; overflow-y:auto;"></div>';
    html += '<div id="narratives-container"></div>';
    html += '</div>';
    
    wContainer.innerHTML = html;
    
    setTimeout(function() {
        if (typeof addNarrativeForm === 'function' && document.getElementById('narratives-container').children.length === 0) {
            addNarrativeForm();
        }
    }, 100);
}

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
        floatMenu.style.overflow = 'hidden';
        document.body.appendChild(floatMenu);
    }

    docPanel.addEventListener('mouseup', function(e) {
        var selection = window.getSelection();
        var selectedText = selection.toString().trim();
        
        var isHeader = false;
        var parent = selection.anchorNode ? selection.anchorNode.parentElement : null;
        if (parent) {
            var tag = parent.tagName.toLowerCase();
            if (['h1','h2','h3','h4','h5','h6'].includes(tag)) {
                isHeader = true;
            }
        }

        if (selectedText.length > 2 && !isHeader) {
            var range = selection.getRangeAt(0);
            var rect = range.getBoundingClientRect();
            
            floatMenu.style.top = (rect.bottom + window.scrollY + 5) + 'px';
            floatMenu.style.left = (rect.left + window.scrollX) + 'px';
            
            var menuHtml = '<div style="font-size:0.75rem; color:#aaa; padding:5px 8px; border-bottom:1px solid #555; background:#222; text-align:center;">Enviar a Fila #' + lastInteractedFormIndex + '</div>';
            
            if (activeMethodology === 'agile') {
                menuHtml += '<button onclick="sendTextToField(\'st-epic\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:8px; border-bottom:1px solid #444; width:100%; transition:background 0.2s;" onmouseover="this.style.background=\'#444\'" onmouseout="this.style.background=\'none\'">➡️ Épica</button>';
                menuHtml += '<button onclick="sendTextToField(\'st-name\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:8px; border-bottom:1px solid #444; width:100%; transition:background 0.2s;" onmouseover="this.style.background=\'#444\'" onmouseout="this.style.background=\'none\'">➡️ Nombre Historia</button>';
                menuHtml += '<button onclick="sendTextToField(\'st-desc\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:8px; border-bottom:1px solid #444; width:100%; transition:background 0.2s;" onmouseover="this.style.background=\'#444\'" onmouseout="this.style.background=\'none\'">➡️ Narrativa</button>';
                menuHtml += '<button onclick="sendTextToField(\'st-criteria\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:8px; width:100%; transition:background 0.2s;" onmouseover="this.style.background=\'#444\'" onmouseout="this.style.background=\'none\'">➡️ Criterios BDD</button>';
            } else {
                menuHtml += '<button onclick="sendTextToField(\'nar-prio\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:8px; border-bottom:1px solid #444; width:100%; transition:background 0.2s;" onmouseover="this.style.background=\'#444\'" onmouseout="this.style.background=\'none\'">➡️ Prioridad (1,2,3)</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-name\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:8px; border-bottom:1px solid #444; width:100%; transition:background 0.2s;" onmouseover="this.style.background=\'#444\'" onmouseout="this.style.background=\'none\'">➡️ Nombre Requerimiento</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-desc\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:8px; border-bottom:1px solid #444; width:100%; transition:background 0.2s;" onmouseover="this.style.background=\'#444\'" onmouseout="this.style.background=\'none\'">➡️ Narrativa Formal</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-io\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:8px; border-bottom:1px solid #444; width:100%; transition:background 0.2s;" onmouseover="this.style.background=\'#444\'" onmouseout="this.style.background=\'none\'">➡️ Entradas/Reglas/Salidas</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-ac\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:8px; width:100%; transition:background 0.2s;" onmouseover="this.style.background=\'#444\'" onmouseout="this.style.background=\'none\'">➡️ Criterios QA</button>';
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
                if (activeMethodology === 'agile') {
                    card.style.borderLeftColor = '#28a745';
                } else {
                    card.style.borderLeftColor = '#005691';
                }
            }
        }
    });
}

function sendTextToField(fieldPrefix, text) {
    var targetId = fieldPrefix + '-' + lastInteractedFormIndex;
    var inputEl = document.getElementById(targetId);
    
    if (inputEl) {
        if (inputEl.tagName.toLowerCase() === 'select') {
            var options = inputEl.options;
            var found = false;
            var searchTxt = text.toLowerCase().trim();
            
            for (var i = 0; i < options.length; i++) {
                var optVal = options[i].value.toLowerCase();
                var optText = options[i].text.toLowerCase();
                
                if (optText.includes(searchTxt) || optVal.includes(searchTxt) || searchTxt.includes(optVal.split(' - ')[0])) {
                    inputEl.selectedIndex = i;
                    found = true;
                    break;
                }
            }
            if (!found) alert("⚠️ El texto seleccionado ('" + text + "') no coincide con ninguna clave o descripción del catálogo.");
        } else {
            inputEl.value = inputEl.value ? inputEl.value + ' \n' + text : text;
        }
        
        var originalBg = inputEl.style.backgroundColor;
        inputEl.style.transition = 'background-color 0.3s';
        inputEl.style.backgroundColor = '#d4edda';
        setTimeout(() => inputEl.style.backgroundColor = originalBg || '', 800);
        
    } else {
        alert("⚠️ No se encontró el campo destino (Fila #" + lastInteractedFormIndex + ").");
    }
    
    var floatMenu = document.getElementById('floating-menu');
    if (floatMenu) floatMenu.style.display = 'none';
    window.getSelection().removeAllRanges();
}

function escapeQuotes(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/\n/g, ' ');
}
