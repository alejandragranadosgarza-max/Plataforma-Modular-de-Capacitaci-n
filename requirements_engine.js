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
                .catch(function(error) {
                    alert("⚠️ No se pudo leer el archivo .docx.");
                });
        };
        reader.readAsArrayBuffer(file);
    } else if (fileName.endsWith('.txt') || fileName.endsWith('.csv') || fileName.endsWith('.json')) {
        var textReader = new FileReader();
        textReader.onload = function(e) {
            var rawText = e.target.result;
            extractedDocumentText = "<p>" + rawText.replace(/\n/g, "<br>") + "</p>";
            alert("✅ Documento de texto procesado. Elige la metodología.");
            enableMethodologySelection();
        };
        textReader.readAsText(file, "UTF-8");
    } else {
        alert("⚠️ Formato no soportado. Usa .docx, .txt, .csv, o .json.");
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
    var cards = document.querySelectorAll('#tab-req-engineering .card > div:nth-child(2) > div');
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = '1';
        cards[i].style.pointerEvents = 'auto';
    }
}

function selectMethodology(type) {
    if (!extractedDocumentText) {
        alert("⚠️ Carga primero el Documento de Contexto.");
        return;
    }

    activeMethodology = type;
    var workspace = document.getElementById('unified-workspace');
    
    var docStyles = '<style>';
    docStyles += '#document-content { font-size: 0.9rem; line-height: 1.5; color: #333; padding-right: 10px; }';
    docStyles += '#document-content table { width: 100% !important; border-collapse: collapse; margin-bottom: 15px; table-layout: fixed; }';
    docStyles += '#document-content td, #document-content th { border: 1px solid #ccc; padding: 6px; word-wrap: break-word; overflow-wrap: break-word; font-size: 0.85rem; }';
    docStyles += '#document-content h1, #document-content h2, #document-content h3 { font-size: 1.1rem; color: #005691; margin-top: 15px; margin-bottom: 10px; }';
    docStyles += '</style>';
    
    var html = docStyles + '<div style="display: flex; gap: 20px; align-items: flex-start;">';
    
    html += '<div id="document-viewer" style="flex: 1; max-width: 45%; max-height: 80vh; overflow-y: auto; background: #fff; padding: 20px; border: 1px solid #ccc; border-radius: 8px; box-shadow: inset 0 2px 5px rgba(0,0,0,0.05); font-family: Arial, sans-serif;">';
    html += '<div style="background: #e8f4fd; border-left: 4px solid #005691; padding: 12px; margin-bottom: 15px; font-size: 0.85rem; color: #004085;">';
    html += '<b>💡 ¿Cómo extraer información?</b><br>';
    html += '1. Subraya con tu ratón el texto o frase clave que necesitas de este documento.<br>';
    html += '2. Aparecerá un menú flotante automáticamente.<br>';
    html += '3. Selecciona el campo al que deseas enviarlo (Nombre, Narrativa, etc.). ¡No es necesario seleccionar párrafos enteros!';
    html += '</div>';
    html += '<h3 style="margin-top: 0; color: #5b21b6; border-bottom: 2px solid #5b21b6; padding-bottom: 5px; font-size: 1.1rem;">📄 Documento de Referencia</h3>';
    html += '<div id="document-content" style="position: relative;">' + extractedDocumentText + '</div>';
    html += '</div>';

    html += '<div id="form-builder" style="flex: 1; max-width: 55%; max-height: 80vh; overflow-y: auto; padding-right: 10px;">';
    
    // Contenedor unificado para la botonera (sin wrap para evitar apilamiento)
    var toolbarStyle = 'margin-bottom: 15px; display: flex; gap: 12px; align-items: center; background: #f8f9fa; padding: 12px 15px; border-radius: 8px; border: 1px solid #ddd; position: sticky; top: 0; z-index: 100; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); overflow-x: auto;';
    var btnStyle = 'font-size: 1.3rem; padding: 8px 16px; border-radius: 6px; display: flex; align-items: center; justify-content: center;';

    if (type === 'agile') {
        html += '<div style="' + toolbarStyle + '">';
        html += '<button type="button" class="btn" title="Agregar una nueva Historia de Usuario" onclick="addStoryForm()" style="' + btnStyle + '">➕</button>';
        html += '<button type="button" class="btn btn-accent" title="Validar historias contra el estándar INVEST" onclick="validateAllStories()" style="' + btnStyle + '">🔍</button>';
        html += '<div style="width: 2px; height: 30px; background: #ccc; margin: 0 5px;"></div>'; // Separador visual
        html += '<button type="button" class="btn" title="Exportar Historias en formato CSV para Excel o Jira" style="background: #28a745; color: white; ' + btnStyle + '" onclick="exportToExcelCSV()">📊</button>';
        html += '<button type="button" class="btn" title="Guardar una copia de respaldo del proyecto (JSON)" style="background: #17a2b8; color: white; ' + btnStyle + '" onclick="exportAtddProjectJSON()">📤</button>';
        html += '<label class="btn" title="Cargar un proyecto previamente guardado (JSON)" style="background: #ffc107; color: #212529; cursor: pointer; margin: 0; font-weight: bold; ' + btnStyle + '">📥<input type="file" accept=".json" style="display: none;" onchange="importAtddProjectJSON(event)"></label>';
        html += '</div>';
        
        html += '<h3 style="color: #28a745; margin-top: 0;">🚀 Construcción de Historias (ATDD)</h3>';
        html += '<div id="stories-container"></div>'; 
    } else if (type === 'waterfall') {
        html += '<div style="' + toolbarStyle + '">';
        html += '<button type="button" class="btn" title="Agregar un nuevo Requerimiento Funcional" onclick="addNarrativeForm()" style="' + btnStyle + '">➕</button>';
        html += '<button type="button" class="btn btn-accent" title="Validar requerimientos contra el estándar SRS" onclick="validateAllNarratives()" style="' + btnStyle + '">🔍</button>';
        html += '<div style="width: 2px; height: 30px; background: #ccc; margin: 0 5px;"></div>'; // Separador visual
        html += '<button type="button" class="btn" title="Exportar Script Windows y Documento Word" style="background: #28a745; color: white; ' + btnStyle + '" onclick="exportProjectFoldersAndFiles()">📁</button>';
        html += '<button type="button" class="btn" title="Guardar una copia de respaldo del proyecto (JSON)" style="background: #17a2b8; color: white; ' + btnStyle + '" onclick="exportNarrativeProjectJSON()">📤</button>';
        html += '<label class="btn" title="Cargar un proyecto previamente guardado (JSON)" style="background: #ffc107; color: #212529; cursor: pointer; margin: 0; font-weight: bold; ' + btnStyle + '">📥<input type="file" accept=".json" style="display: none;" onchange="importNarrativeProjectJSON(event)"></label>';
        html += '</div>';
        
        html += '<h3 style="color: #005691; margin-top: 0;">🏛️ Construcción de Narrativas (SRS)</h3>';
        html += '<div id="narratives-container"></div>'; 
    }
    
    html += '<div id="atdd-output" class="card" style="display:none; margin-top:15px;"></div>';
    html += '<div id="nar-output" class="card" style="display:none; margin-top:15px;"></div>';
    html += '</div></div>';

    html += '<div id="floating-menu" style="display: none; position: absolute; background: #333; color: white; padding: 5px; border-radius: 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); z-index: 1000; flex-direction: column; gap: 5px;"></div>';

    workspace.innerHTML = html;
    workspace.style.display = 'block';

    var step2 = document.querySelector('#tab-req-engineering .card > div:nth-child(2)');
    if(step2) step2.style.display = 'none';
    var step1 = document.querySelector('#tab-req-engineering .card > div:nth-child(1)');
    if(step1) step1.style.display = 'none';

    setTimeout(function() {
        if (type === 'agile' && typeof addStoryForm === 'function') addStoryForm();
        if (type === 'waterfall' && typeof addNarrativeForm === 'function') addNarrativeForm();
    }, 100);

    setupTextSelectionObserver();
    trackLastActiveForm();
}

function trackLastActiveForm() {
    var builder = document.getElementById('form-builder');
    if (!builder) return;
    builder.addEventListener('focusin', function(e) {
        var card = e.target.closest('.card');
        if (card) {
            var match = card.id.match(/\d+$/);
            if (match) lastInteractedFormIndex = parseInt(match[0], 10);
        }
    });
}

function setupTextSelectionObserver() {
    var docContent = document.getElementById('document-content');
    var floatMenu = document.getElementById('floating-menu');
    
    if (!docContent || !floatMenu) return;

    docContent.addEventListener('mouseup', function(e) {
        var selection = window.getSelection();
        var selectedText = selection.toString().trim();

        var anchorNode = selection.anchorNode;
        if (anchorNode && anchorNode.parentElement) {
            var parentTag = anchorNode.parentElement.tagName.toLowerCase();
            if (['h1', 'h2', 'h3', 'h4'].includes(parentTag)) {
                floatMenu.style.display = 'none';
                return;
            }
        }

        if (selectedText.length > 0) {
            var rect = selection.getRangeAt(0).getBoundingClientRect();
            var top = rect.bottom + window.scrollY + 5;
            var left = rect.left + window.scrollX;

            floatMenu.style.top = top + 'px';
            floatMenu.style.left = left + 'px';
            
            var menuHtml = '<div style="font-size:0.75rem; color:#aaa; padding:2px 5px; border-bottom:1px solid #555;">Enviar a Fila #' + lastInteractedFormIndex + '</div>';
            
            if (activeMethodology === 'agile') {
                menuHtml += '<button onclick="sendTextToField(\'st-epic\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Épica</button>';
                menuHtml += '<button onclick="sendTextToField(\'st-name\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Nombre de la Historia</button>';
                menuHtml += '<button onclick="sendTextToField(\'st-desc\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Narrativa (INVEST)</button>';
                menuHtml += '<button onclick="sendTextToField(\'st-criteria\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Criterios de Aceptación (BDD)</button>';
            } else {
                menuHtml += '<button onclick="sendTextToField(\'nar-name\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Nombre de Requerimiento</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-desc\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Narrativa Formal</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-io\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Entradas/Reglas/Salidas</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-ac\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Criterios QA (Verificación)</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-prio\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:#777; cursor:pointer; text-align:left; padding:5px; font-size: 0.8rem;">➡️ Prioridad (1, 2, 3)</button>';
            }
            
            floatMenu.innerHTML = menuHtml;
            floatMenu.style.display = 'flex';
        } else {
            floatMenu.style.display = 'none';
        }
    });

    document.addEventListener('mousedown', function(e) {
        if (floatMenu.style.display === 'flex' && !floatMenu.contains(e.target) && !docContent.contains(e.target)) {
            floatMenu.style.display = 'none';
            window.getSelection().removeAllRanges();
        }
    });
}

function escapeQuotes(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/\n/g, "\\n");
}

function sendTextToField(fieldPrefix, text) {
    var targetId = fieldPrefix + '-' + lastInteractedFormIndex;
    var inputEl = document.getElementById(targetId);
    
    if (inputEl) {
        if (inputEl.tagName.toLowerCase() === 'select') {
            var options = inputEl.options;
            var searchTxt = text.toString().toLowerCase().trim();
            for (var i = 0; i < options.length; i++) {
                if (options[i].value.toLowerCase() === searchTxt || options[i].text.toLowerCase().includes(searchTxt)) {
                    inputEl.selectedIndex = i;
                    break;
                }
            }
        } else {
            inputEl.value = inputEl.value ? inputEl.value + ' \n' + text : text;
        }
        
        var originalBg = inputEl.style.backgroundColor;
        inputEl.style.transition = 'background-color 0.3s';
        inputEl.style.backgroundColor = '#d4edda';
        setTimeout(() => inputEl.style.backgroundColor = originalBg || '', 800);
        
    } else {
        alert("⚠️ No se encontró el campo destino.");
    }
    
    document.getElementById('floating-menu').style.display = 'none';
    window.getSelection().removeAllRanges();
}
