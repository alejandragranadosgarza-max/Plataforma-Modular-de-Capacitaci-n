// ==========================================
// MÓDULO 3: EVALUACIÓN Y GESTIÓN DE NARRATIVAS (CASCADA / SRS)
// Archivo: narrative_eval_lab.js (Completo con filtros y UX de salto mediante 'onclick')
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

    var tables = tempDiv.querySelectorAll('table');
    if (tables.length > 0) {
        for (var t = 0; t < tables.length; t++) {
            var rows = tables[t].querySelectorAll('tr');
            for (var i = 0; i < rows.length; i++) {
                var cols = rows[i].querySelectorAll('td, th');
                if (cols.length >= 2) {
                    var col0 = cols[0].textContent.trim();
                    var col1 = cols[1].textContent.trim();
                    if (col0.toLowerCase() === 'id' || col0.toLowerCase() === 'clave' || (col0.toLowerCase().indexOf('objetivo') !== -1 && i === 0)) {
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

// --- 3. FUNCIONES AUXILIARES PARA DETECCIÓN DE INCOMPLETITUD Y DUPLICIDAD ---
function normalizeTextForCompare(str) {
    if (!str) return "";
    return str
        .toLowerCase()
        .replace(/[áäâà]/g, "a")
        .replace(/[éëêè]/g, "e")
        .replace(/[íïîì]/g, "i")
        .replace(/[óöôò]/g, "o")
        .replace(/[úüûù]/g, "u")
        .replace(/[^a-z0-9ñ\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function calculateTextSimilarity(str1, str2) {
    var n1 = normalizeTextForCompare(str1);
    var n2 = normalizeTextForCompare(str2);
    if (!n1 || !n2) return 0;
    if (n1 === n2) return 1;

    if ((n1.length > 25 && n2.indexOf(n1) !== -1) || (n2.length > 25 && n1.indexOf(n2) !== -1)) {
        var minLen = Math.min(n1.length, n2.length);
        var maxLen = Math.max(n1.length, n2.length);
        if (minLen / maxLen >= 0.75) return 0.9;
    }

    var words1 = n1.split(" ").filter(function(w) { return w.length > 2; });
    var words2 = n2.split(" ").filter(function(w) { return w.length > 2; });
    if (words1.length === 0 || words2.length === 0) return 0;

    var set1 = {};
    var set2 = {};
    for (var i = 0; i < words1.length; i++) set1[words1[i]] = true;
    for (var j = 0; j < words2.length; j++) set2[words2[j]] = true;

    var intersection = 0;
    var unionKeys = {};
    for (var k1 in set1) {
        unionKeys[k1] = true;
        if (set2[k1]) intersection++;
    }
    for (var k2 in set2) {
        unionKeys[k2] = true;
    }

    var unionCount = Object.keys(unionKeys).length;
    return unionCount === 0 ? 0 : (intersection / unionCount);
}

function checkFieldCompleteness(text, fieldLabel, minWords) {
    var problems = [];
    var trimmed = (text || "").trim();

    if (!trimmed) {
        problems.push("El campo <b>" + fieldLabel + "</b> está vacío.");
        return problems;
    }

    var words = trimmed.split(/\s+/).filter(function(w) { return w.length > 0; });
    if (words.length < minWords) {
        problems.push("El campo <b>" + fieldLabel + "</b> es demasiado breve o incompleto (contiene " + words.length + " palabras; se requieren al menos " + minWords + " palabras para una especificación formal).");
    }

    if (/[,;:\-\/\\]$/.test(trimmed) || /\.\.\.$/.test(trimmed) || /…$/.test(trimmed)) {
        problems.push("<b>Texto inconcluso en " + fieldLabel + ":</b> Termina en puntuación abierta o puntos suspensivos (<code>" + escapeHtmlText(trimmed.slice(-12)) + "</code>), lo que indica una idea sin terminar.");
    }

    var cleanedEnd = trimmed.replace(/[.!?]+$/, "").trim();
    var lastWordMatch = cleanedEnd.match(/([a-záéíóúüñA-ZÁÉÍÓÚÜÑ]+)$/);
    if (lastWordMatch) {
        var lastWord = lastWordMatch[1].toLowerCase();
        var danglingConnectors = [
            "a", "al", "ante", "bajo", "con", "contra", "de", "del", "desde", "durante",
            "en", "entre", "hacia", "hasta", "mediante", "para", "por", "segun", "según",
            "sin", "sobre", "tras", "y", "e", "o", "u", "ni", "pero", "aunque", "sino",
            "porque", "pues", "como", "cuando", "donde", "dónde", "si", "que", "qué",
            "cual", "cuál", "cuales", "cuáles", "cuyo", "cuya", "el", "la", "los", "las",
            "un", "una", "unos", "unas", "su", "sus", "mi", "tu", "es", "son", "sea",
            "sean", "debe", "deben", "puede", "pueden", "permite", "permitir", "mostrar", "validar"
        ];
        if (danglingConnectors.indexOf(lastWord) !== -1) {
            problems.push("<b>Oración trunca en " + fieldLabel + ":</b> El texto parece haberse quedado a medias porque termina con la palabra conectora o verbo incompleto <b>\"" + escapeHtmlText(lastWordMatch[1]) + "\"</b>.");
        }
    }

    var placeholderRegex = /\b(tbd|pendiente|por definir|por confirmar|completar|falta|todo|to-do|xxx+|zzz+)\b|\?\?\?/i;
    var matchPlaceholder = trimmed.match(placeholderRegex);
    if (matchPlaceholder) {
        problems.push("<b>Información pendiente en " + fieldLabel + ":</b> Contiene el marcador temporal <b>\"" + escapeHtmlText(matchPlaceholder[0]) + "\"</b>.Toda especificación SRS debe estar cerrada antes de desarrollo.");
    }

    var openParens = (trimmed.match(/\(/g) || []).length;
    var closeParens = (trimmed.match(/\)/g) || []).length;
    if (openParens !== closeParens) {
        problems.push("<b>Texto incompleto en " + fieldLabel + ":</b> Hay paréntesis abiertos que no fueron cerrados.");
    }

    return problems;
}

// --- 4. RECOLECCIÓN Y VALIDACIÓN DE NARRATIVAS (ESTÁNDAR SRS / CASCADA) ---
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
            index: cardId,
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
        var reqLabel = (it.reqId || ('Req #' + it.index)) + ' - ' + (it.reqName || 'Sin nombre');
        var cardId = 'nar-card-' + it.index; 

        // A. Validación de Trazabilidad e Identificación
        if (!it.objective && businessObjectivesCatalog.length > 0) {
            issues.push("Falta vincular la <b>Clave de Objetivo Comercial</b> (Trazabilidad de negocio).");
        }
        if (!it.reqId || !it.reqName) {
            issues.push("Falta el identificador (<b>Núm. Req</b>) o el <b>Nombre del Requerimiento</b>.");
        }

        // B. Validación de Completitud y Textos Inconclusos
        var narrativeIssues = checkFieldCompleteness(it.narrative, "Narrativa", 8);
        var ioIssues = checkFieldCompleteness(it.io, "Datos de Entrada, Reglas y Salidas", 6);
        var criteriaIssues = checkFieldCompleteness(it.criteria, "Criterios de Aceptación / Verificación QA", 6);
        issues = issues.concat(narrativeIssues, ioIssues, criteriaIssues);

        // Validación de palabras de relleno (Fluff Words)
        var combinedText = (it.narrative + " " + it.io + " " + it.criteria).toLowerCase();
        var fluffWords = ["básicamente", "en general", "como es sabido", "para fines prácticos", "es importante que", "cosas", "detalles"];
        var foundFluff = [];
        for (var f = 0; f < fluffWords.length; f++) {
            var regexFluff = new RegExp("\\b" + fluffWords[f] + "\\b", "i");
            if (regexFluff.test(combinedText)) {
                foundFluff.push(fluffWords[f]);
            }
        }
        if (foundFluff.length > 0) {
            issues.push("<b>Información irrelevante detectada:</b> Elimina frases de relleno (<b>" + foundFluff.join(", ") + "</b>) que no aportan valor técnico a la especificación.");
        }

        // C. Validación de Duplicidad Interna (Similitud Estricta >= 0.75)
        var simNarIo = calculateTextSimilarity(it.narrative, it.io);
        var simNarAc = calculateTextSimilarity(it.narrative, it.criteria);
        var simIoAc = calculateTextSimilarity(it.io, it.criteria);

        if (simNarIo >= 0.75) {
            issues.push("<b>Ideas repetitivas:</b> El texto de <i>Narrativa</i> y el de <i>Datos de Entrada, Reglas y Salidas</i> son demasiado similares. Aporta detalles técnicos, no un resumen.");
        }
        if (simNarAc >= 0.75) {
            issues.push("<b>Ideas repetitivas:</b> Estás reciclando la misma redacción entre <i>Narrativa</i> y <i>Criterios de Aceptación</i>. Los criterios deben ser reglas verificables.");
        }
        if (simIoAc >= 0.75) {
            issues.push("<b>Ideas repetitivas:</b> El texto de <i>Datos de Entrada, Reglas y Salidas</i> y el de <i>Criterios de Aceptación</i> están duplicados o son casi idénticos.");
        }

        // Validar que el campo de Entradas/Reglas/Salidas no tenga solo una parte
        if (it.io.trim().length >= 15) {
            var ioLower = it.io.toLowerCase();
            var hasInputRef = /(entrada|input|campo|dato|captura|recibe|parámetro|parametro)/i.test(ioLower);
            var hasRuleRef = /(regla|cálculo|calculo|valida|condición|condicion|fórmula|formula|proceso|si\s|aplicar)/i.test(ioLower);
            var hasOutputRef = /(salida|output|resultado|muestra|genera|retorna|respuesta|mensaje|archivo|reporte)/i.test(ioLower);
            var ioPartsCount = (hasInputRef ? 1 : 0) + (hasRuleRef ? 1 : 0) + (hasOutputRef ? 1 : 0);
            if (ioPartsCount < 2) {
                issues.push("<b>Especificación incompleta en Datos de Entrada, Reglas y Salidas:</b> Asegúrate de detallar tanto las <i>Entradas</i> como las <i>Reglas de Negocio</i> y las <i>Salidas Esperadas</i>.");
            }
        }

        // D. Validación de Duplicidad Cruzada (contra otros requerimientos del mismo proyecto)
        for (var j = 0; j < items.length; j++) {
            if (i === j) continue;
            var other = items[j];
            var otherLabel = other.reqId || ("Requerimiento #" + other.index);

            if (it.reqId && other.reqId && normalizeTextForCompare(it.reqId) === normalizeTextForCompare(other.reqId)) {
                issues.push("<b>Clave duplicada:</b> El número de requerimiento <b>" + escapeHtmlText(it.reqId) + "</b> está repetido en el Requerimiento #" + other.index + ".");
            }
            if (it.reqName && other.reqName && normalizeTextForCompare(it.reqName) === normalizeTextForCompare(other.reqName)) {
                issues.push("<b>Nombre duplicado:</b> El nombre <b>\"" + escapeHtmlText(it.reqName) + "\"</b> ya se está utilizando en <b>" + escapeHtmlText(otherLabel) + "</b>.");
            }
            if (it.narrative.length >= 15 && calculateTextSimilarity(it.narrative, other.narrative) >= 0.85) {
                issues.push("<b>Narrativa duplicada entre requerimientos:</b> La descripción de la <i>Narrativa</i> es idéntica o muy similar a la de <b>" + escapeHtmlText(otherLabel) + "</b>.");
            }
            if (it.io.length >= 15 && calculateTextSimilarity(it.io, other.io) >= 0.85) {
                issues.push("<b>Entradas/Reglas/Salidas duplicadas entre requerimientos:</b> El contenido de este campo repite la información de <b>" + escapeHtmlText(otherLabel) + "</b>.");
            }
            if (it.criteria.length >= 15 && calculateTextSimilarity(it.criteria, other.criteria) >= 0.85) {
                issues.push("<b>Criterios de Aceptación duplicados entre requerimientos:</b> Los criterios de verificación son idénticos o casi idénticos a los de <b>" + escapeHtmlText(otherLabel) + "</b>.");
            }
        }

        // E. Validación de Palabras Ambiguas
        var foundAmbiguous = [];
        for (var w = 0; w < ambiguousWords.length; w++) {
            var regex = new RegExp("(?:^|\\s|[.,;:])" + ambiguousWords[w] + "(?:$|\\s|[.,;:])", "i");
            if (regex.test(combinedText)) {
                foundAmbiguous.push(ambiguousWords[w]);
            }
        }
        if (foundAmbiguous.length > 0) {
            issues.push("<b>Ambigüedad detectada:</b> Contiene términos subjetivos no verificables (<b>" + foundAmbiguous.join(", ") + "</b>). Sustitúyelos por métricas exactas.");
        }

        // Renderizado del dictamen interactivo por requerimiento (Modificado a 'onclick')
        if (issues.length === 0) {
            html += '<div style="background:#d4edda; border-left:5px solid #28a745; padding:12px; margin-bottom:10px; border-radius:4px;">' +
                '<b>✅ ' + escapeHtmlText(reqLabel) + ':</b> Cumple con el estándar SRS (Completo, Trazable, Sin Duplicidad y Sin Ambigüedades).' +
                '</div>';
        } else {
            html += `<div onclick="scrollToNarrative('${cardId}')" title="Clic para ir a este requerimiento" style="margin-bottom: 8px; color: #721c24; background: #f8d7da; padding: 10px; border-radius: 4px; cursor: pointer; border-left: 5px solid #dc3545; transition: transform 0.2s;">
                <strong>❌ ${escapeHtmlText(reqLabel)}:</strong> Requiere ajustes (${issues.length} hallazgos)
                <ul style="margin: 4px 0 0 20px; padding: 0;">` + issues.map(e => `<li style="margin-bottom:4px;">${e}</li>`).join('') + `</ul>
                <small style="display:block; margin-top:8px; color:#a71d2a; font-weight:bold;">🖱️ Haz clic aquí para ir al requerimiento y corregirlo.</small>
            </div>`;
        }
    }

    outBox.innerHTML = html;
}

// --- UX FUNCIONAL: SCROLL Y RESALTADO ---
function scrollToNarrative(cardId) {
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
}

// --- 5. EXPORTAR SCRIPT WINDOWS Y DOCUMENTO WORD / JSON ---
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
