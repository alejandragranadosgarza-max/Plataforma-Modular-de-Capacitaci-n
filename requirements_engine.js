// ==========================================
// MÓDULO UNIFICADO: INGENIERÍA DE REQUERIMIENTOS
// Archivo: requirements_engine.js
// Propósito: Pantalla dividida, visor de Word y transferencia de texto.
// ==========================================

var extractedDocumentText = "";
var activeMethodology = "";
var lastInteractedFormIndex = 1; // Para saber a qué formulario enviar el texto

// 1. Guardián de Resolución (Solo Desktop)
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

// 2. Manejador de Carga de Documento
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
                    alert("✅ Documento Word procesado. Elige la metodología para iniciar.");
                    enableMethodologySelection();
                })
                .catch(function(error) {
                    console.error("Error Word:", error);
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
        alert("⚠️ Formato no soportado (.docx, .txt, .csv, .json).");
    }
}

function enableMethodologySelection() {
    var cards = document.querySelectorAll('#tab-req-engineering .card > div:nth-child(2) > div');
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = '1';
        cards[i].style.pointerEvents = 'auto';
    }
}

// 3. Selección de Metodología e Inyección de Formularios Reales
function selectMethodology(type) {
    if (!extractedDocumentText) {
        alert("⚠️ Carga primero el Documento de Contexto.");
        return;
    }

    activeMethodology = type;
    var workspace = document.getElementById('unified-workspace');
    
    // Estilos dinámicos para arreglar las tablas apretadas del Word
    var tableStyles = '<style>#document-content table { width: 100%; border-collapse: collapse; margin-bottom: 10px; } #document-content td, #document-content th { border: 1px solid #ccc; padding: 6px; word-break: break-word; }</style>';
    
    var html = tableStyles + '<div style="display: flex; gap: 20px; align-items: flex-start;">';
    
    // Panel Izquierdo: Visor
    html += '<div id="document-viewer" style="flex: 1; max-width: 45%; max-height: 80vh; overflow-y: auto; background: #fff; padding: 20px; border: 1px solid #ccc; border-radius: 8px; box-shadow: inset 0 2px 5px rgba(0,0,0,0.05); font-family: serif; line-height: 1.6;">';
    html += '<h3 style="margin-top: 0; color: #5b21b6; border-bottom: 2px solid #5b21b6; padding-bottom: 5px;">📄 Documento de Referencia</h3>';
    html += '<div id="document-content" style="position: relative;">' + extractedDocumentText + '</div>';
    html += '</div>';

    // Panel Derecho: Integración con tus scripts actuales
    html += '<div id="form-builder" style="flex: 1; max-width: 55%; max-height: 80vh; overflow-y: auto; padding-right: 10px;">';
    
    if (type === 'agile') {
        html += '<h3 style="color: #28a745; margin-top: 0;">🚀 Construcción de Historias (ATDD)</h3>';
        html += '<div id="stories-container"></div>'; // Contenedor que usa atdd_lab.js
        html += '<div style="margin-top: 15px; display: flex; gap: 10px;">';
        html += '<button type="button" class="btn" onclick="addStoryForm()">➕ Agregar Historia</button>';
        html += '<button type="button" class="btn btn-accent" onclick="validateAllStories()">🔍 Validar INVEST</button>';
        html += '</div>';
    } else if (type === 'waterfall') {
        html += '<h3 style="color: #005691; margin-top: 0;">🏛️ Construcción de Narrativas (SRS)</h3>';
        html += '<div id="narratives-container"></div>'; // Contenedor que usa narrative_eval_lab.js
        html += '<div style="margin-top: 15px; display: flex; gap: 10px;">';
        html += '<button type="button" class="btn" onclick="addNarrativeForm()">➕ Agregar Requerimiento</button>';
        html += '<button type="button" class="btn btn-accent" onclick="validateAllNarratives()">🔍 Validar SRS</button>';
        html += '</div>';
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

    // Generar el primer formulario automáticamente
    if (type === 'agile' && typeof addStoryForm === 'function') addStoryForm();
    if (type === 'waterfall' && typeof addNarrativeForm === 'function') addNarrativeForm();

    setupTextSelectionObserver();
    trackLastActiveForm();
}

// 4. Rastreo del formulario activo
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

// 5. Menú Flotante Inteligente
function setupTextSelectionObserver() {
    var docContent = document.getElementById('document-content');
    var floatMenu = document.getElementById('floating-menu');
    
    if (!docContent || !floatMenu) return;

    docContent.addEventListener('mouseup', function(e) {
        var selection = window.getSelection();
        var selectedText = selection.toString().trim();

        if (selectedText.length > 0) {
            var rect = selection.getRangeAt(0).getBoundingClientRect();
            var top = rect.bottom + window.scrollY + 5;
            var left = rect.left + window.scrollX;

            floatMenu.style.top = top + 'px';
            floatMenu.style.left = left + 'px';
            
            // [Código anterior: cálculo de posición y encabezado del menú]
            
            var menuHtml = '<div style="font-size:0.75rem; color:#aaa; padding:2px 5px; border-bottom:1px solid #555;">Enviar a Fila #' + lastInteractedFormIndex + '</div>';
            
            if (activeMethodology === 'agile') {
                // CAMPOS METODOLOGÍA ÁGIL (INVEST / ATDD)
                menuHtml += '<button onclick="sendTextToField(\'st-epic\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Épica</button>';
                menuHtml += '<button onclick="sendTextToField(\'st-name\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Nombre de la Historia</button>';
                menuHtml += '<button onclick="sendTextToField(\'st-desc\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Narrativa (INVEST)</button>';
                menuHtml += '<button onclick="sendTextToField(\'st-criteria\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Criterios de Aceptación (BDD)</button>';
            } else {
                // CAMPOS METODOLOGÍA CASCADA (SRS TRADICIONAL)
                menuHtml += '<button onclick="sendTextToField(\'nar-obj\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Objetivo Comercial</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-reqid\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Núm. Req (ID)</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-name\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Nombre de Requerimiento</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-desc\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Narrativa Formal</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-io\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Entradas/Reglas/Salidas</button>';
                menuHtml += '<button onclick="sendTextToField(\'nar-ac\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ Criterios QA (Verificación)</button>';
            }
            
            floatMenu.innerHTML = menuHtml;
            floatMenu.style.display = 'flex';
        } else {
            floatMenu.style.display = 'none';
        }
    });
