// ==========================================
// MÓDULO UNIFICADO: INGENIERÍA DE REQUERIMIENTOS
// Archivo: requirements_engine.js
// Propósito: Control de acceso por dispositivo, extracción de documentos
// y gestión de la pantalla dividida interactiva (Ágil vs Cascada).
// ==========================================

var extractedDocumentText = "";
var activeMethodology = "";

// 1. Guardián de Resolución (Solo Desktop)
window.addEventListener('DOMContentLoaded', function() {
    var reqModuleBtn = document.getElementById('btn-mod-req');
    if (reqModuleBtn) {
        reqModuleBtn.addEventListener('click', function(e) {
            if (window.innerWidth < 1024) {
                e.preventDefault(); // Evita que se abra la pestaña
                alert("🖥️ El Laboratorio de Ingeniería de Requerimientos requiere un espacio de trabajo amplio para el análisis de documentos en pantalla dividida. Por favor, accede desde un equipo de escritorio o expande la ventana de tu navegador.");
                // Opcional: Redirigir de vuelta al módulo 1
                switchMainTab('tab-training', document.querySelector('nav button'));
            }
        });
    }
});

// 2. Manejador de Carga de Documento de Contexto
function handleContextUpload(event) {
    var file = event.target.files[0];
    if (!file) return;

    var fileName = file.name.toLowerCase();
    
    // Si es Word (.docx)
    if (fileName.endsWith('.docx')) {
        if (typeof mammoth === 'undefined') {
            alert("⚠️ La librería Mammoth.js no está disponible. Verifica tu conexión a internet.");
            return;
        }
        var reader = new FileReader();
        reader.onload = function(loadEvent) {
            var arrayBuffer = loadEvent.target.result;
            // Mammoth convierte el Word a HTML respetando listas, párrafos y tablas básicas
            mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
                .then(function(result) {
                    extractedDocumentText = result.value;
                    alert("✅ Documento Word procesado con éxito. Por favor, elige la metodología de desarrollo (Ágil o Cascada) para iniciar el análisis.");
                    enableMethodologySelection();
                })
                .catch(function(error) {
                    console.error("Error al leer archivo Word:", error);
                    alert("⚠️ No se pudo leer el archivo .docx. Verifica que no esté dañado.");
                });
        };
        reader.readAsArrayBuffer(file);
    } 
    // Si es Texto plano o CSV/JSON (Lectura simple)
    else if (fileName.endsWith('.txt') || fileName.endsWith('.csv') || fileName.endsWith('.json')) {
        var textReader = new FileReader();
        textReader.onload = function(e) {
            // Convertimos el texto plano a un formato HTML básico para que sea seleccionable
            var rawText = e.target.result;
            extractedDocumentText = "<p>" + rawText.replace(/\n/g, "<br>") + "</p>";
            alert("✅ Documento de texto procesado con éxito. Por favor, elige la metodología de desarrollo.");
            enableMethodologySelection();
        };
        textReader.readAsText(file, "UTF-8");
    } else {
        alert("⚠️ Formato no soportado. Por favor sube un archivo .docx, .txt, .csv o .json.");
    }
}

// Habilita visualmente los botones de metodología tras subir un archivo
function enableMethodologySelection() {
    var cards = document.querySelectorAll('#tab-req-engineering .card > div:nth-child(2) > div');
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = '1';
        cards[i].style.pointerEvents = 'auto';
    }
}

// 3. Selección de Metodología y Configuración de Pantalla Dividida
function selectMethodology(type) {
    if (!extractedDocumentText) {
        alert("⚠️ Por favor, carga primero el Documento de Contexto (Paso 1) antes de seleccionar la metodología.");
        return;
    }

    activeMethodology = type;
    var workspace = document.getElementById('unified-workspace');
    
    // Construir la estructura de la pantalla dividida
    var html = '<div style="display: flex; gap: 20px; align-items: flex-start;">';
    
    // Panel Izquierdo: El Visor del Documento
    html += '<div id="document-viewer" style="flex: 1; max-width: 45%; max-height: 80vh; overflow-y: auto; background: #fff; padding: 20px; border: 1px solid #ccc; border-radius: 8px; box-shadow: inset 0 2px 5px rgba(0,0,0,0.05); font-family: serif; line-height: 1.6;">';
    html += '<h3 style="margin-top: 0; color: #5b21b6; border-bottom: 2px solid #5b21b6; padding-bottom: 5px;">📄 Documento de Referencia</h3>';
    html += '<div id="document-content" style="position: relative;">' + extractedDocumentText + '</div>';
    html += '</div>';

    // Panel Derecho: Formularios según la metodología
    html += '<div id="form-builder" style="flex: 1; max-width: 55%;">';
    
    if (type === 'agile') {
        html += '<h3 style="color: #28a745; margin-top: 0;">🚀 Construcción de Historias de Usuario (ATDD)</h3>';
        html += '<p style="font-size: 0.9rem; color: #555;">Sombrea el texto en el documento de la izquierda y envíalo a los campos correspondientes.</p>';
        // Aquí insertaremos la lógica del formulario Ágil (INVEST) en la siguiente iteración
        html += '<div id="agile-container" class="card" style="border-left: 5px solid #28a745;"><i>Formulario Ágil en construcción...</i></div>';
    } else if (type === 'waterfall') {
        html += '<h3 style="color: #005691; margin-top: 0;">🏛️ Construcción de Narrativas Formales (SRS)</h3>';
        html += '<p style="font-size: 0.9rem; color: #555;">Sombrea el texto en el documento de la izquierda y envíalo a los campos correspondientes.</p>';
        // Aquí insertaremos la lógica del formulario Cascada (SRS) en la siguiente iteración
        html += '<div id="waterfall-container" class="card" style="border-left: 5px solid #005691;"><i>Formulario Cascada en construcción...</i></div>';
    }
    
    html += '</div>'; // Fin Panel Derecho
    html += '</div>'; // Fin Flex Container

    // Añadir el menú flotante invisible que se usará para el envío de texto
    html += '<div id="floating-menu" style="display: none; position: absolute; background: #333; color: white; padding: 5px; border-radius: 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); z-index: 1000; flex-direction: column; gap: 5px;"></div>';

    workspace.innerHTML = html;
    workspace.style.display = 'block';

    // Ocultar las tarjetas de selección para dar espacio al área de trabajo
    var step2 = document.querySelector('#tab-req-engineering .card > div:nth-child(2)');
    if(step2) step2.style.display = 'none';
    var step1 = document.querySelector('#tab-req-engineering .card > div:nth-child(1)');
    if(step1) step1.style.display = 'none';

    // Inicializar el evento de selección de texto
    setupTextSelectionObserver();
}

// 4. Lógica de Selección de Texto (Menú Flotante)
function setupTextSelectionObserver() {
    var docContent = document.getElementById('document-content');
    var floatMenu = document.getElementById('floating-menu');
    
    if (!docContent || !floatMenu) return;

    docContent.addEventListener('mouseup', function(e) {
        var selection = window.getSelection();
        var selectedText = selection.toString().trim();

        if (selectedText.length > 0) {
            // Obtener coordenadas para mostrar el menú cerca del ratón
            var rect = selection.getRangeAt(0).getBoundingClientRect();
            // Ajustar posición considerando el scroll
            var top = rect.bottom + window.scrollY + 5;
            var left = rect.left + window.scrollX;

            floatMenu.style.top = top + 'px';
            floatMenu.style.left = left + 'px';
            
            // Construir los botones del menú según la metodología
            var menuHtml = '';
            if (activeMethodology === 'agile') {
                menuHtml += '<button onclick="sendTextToField(\'historia\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ A Historia (Narrativa)</button>';
                menuHtml += '<button onclick="sendTextToField(\'criterios\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ A Criterios de Aceptación</button>';
            } else {
                menuHtml += '<button onclick="sendTextToField(\'narrativa\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ A Narrativa (SRS)</button>';
                menuHtml += '<button onclick="sendTextToField(\'reglas\', \'' + escapeQuotes(selectedText) + '\')" style="background:none; border:none; color:white; cursor:pointer; text-align:left; padding:5px;">➡️ A Reglas de Negocio</button>';
            }
            
            floatMenu.innerHTML = menuHtml;
            floatMenu.style.display = 'flex';
        } else {
            floatMenu.style.display = 'none';
        }
    });

    // Ocultar el menú si hace clic en cualquier otro lado
    document.addEventListener('mousedown', function(e) {
        if (floatMenu.style.display === 'flex' && !floatMenu.contains(e.target) && !docContent.contains(e.target)) {
            floatMenu.style.display = 'none';
            window.getSelection().removeAllRanges();
        }
    });
}

function escapeQuotes(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function sendTextToField(fieldTarget, text) {
    alert("Texto capturado para: " + fieldTarget + "\n\n(En la siguiente iteración, esto se pegará automáticamente en la caja correspondiente del panel derecho).");
    document.getElementById('floating-menu').style.display = 'none';
    window.getSelection().removeAllRanges();
}