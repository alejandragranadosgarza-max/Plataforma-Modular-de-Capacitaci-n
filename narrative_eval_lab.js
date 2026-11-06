// ==========================================
// MÓDULO 3: EVALUACIÓN Y GESTIÓN DE NARRATIVAS (CASCADA / SRS)
// Archivo: narrative_eval_lab.js (Integración Fase 2 - Checkboxes 1:N, Insert Top, Scope Creep)
// ==========================================

var narrativeCount = 0;

// Inicializar el primer formulario automáticamente al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('narratives-container');
    if (container && container.children.length === 0) {
        addNarrativeForm();
    }
});

// --- 1. GENERACIÓN DEL FORMULARIO DINÁMICO ---
function addNarrativeForm(prefillData) {
    narrativeCount++;
    var container = document.getElementById('narratives-container');
    if (!container) return;
    
    var cardId = 'nar-card-' + narrativeCount;
    
    var reqIdText = (prefillData && prefillData.reqId) ? prefillData.reqId : ('REQ-' + (narrativeCount < 10 ? '0' + narrativeCount : narrativeCount));
    var reqName = (prefillData && prefillData.reqName) ? prefillData.reqName : "";
    var reqPrio = (prefillData && prefillData.priority) ? prefillData.priority : "";
    var descVal = (prefillData && prefillData.narrative) ? prefillData.narrative : "";
    var ioVal = (prefillData && prefillData.io) ? prefillData.io : "";
    var acVal = (prefillData && prefillData.criteria) ? prefillData.criteria : "";
    var selectedObjs = (prefillData && prefillData.objectives) ? prefillData.objectives : []; 
    
    var html = '<div class="card narrative-item-card" id="' + cardId + '" style="margin-bottom:20px; border-left: 4px solid #005691; padding: 20px;">';
    html += '<div style="display:flex; justify-content:space-between; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:15px;">';
    html += '<h4 style="color:#005691; margin:0;">📋 Requerimiento Funcional #' + narrativeCount + '</h4>';
    html += '<button type="button" class="btn-outline" style="color:#dc3545; border-color:#dc3545; padding:2px 8px;" onclick="document.getElementById(\'' + cardId + '\').remove()">🗑️ Eliminar</button>';
    html += '</div>';
    
    // Fila 1: ID, Nombre y Prioridad
    html += '<div style="display:flex; gap:15px; margin-bottom:15px; flex-wrap:wrap;">';
    html += '<div style="flex:1; min-width:100px;"><label style="font-weight:bold;">Núm. Req (ID):</label><input type="text" id="nar-reqid-' + narrativeCount + '" value="' + escapeHtmlAttr(reqIdText) + '" readonly style="background:#f1f3f5; width:100%;"></div>';
    html += '<div style="flex:3; min-width:200px;"><label style="font-weight:bold;">Nombre de Requerimiento:</label><input type="text" id="nar-name-' + narrativeCount + '" value="' + escapeHtmlAttr(reqName) + '" placeholder="Propuesta de título editable..." style="width:100%;"></div>';
    
    // Selector de Prioridad (Funcional, pero oculto de la vista para limpieza)
    var sel1 = reqPrio === "1" ? "selected" : "";
    var sel2 = reqPrio === "2" ? "selected" : "";
    var sel3 = reqPrio === "3" ? "selected" : "";
    html += '<div style="display:none;"><select id="nar-prio-' + narrativeCount + '"><option value="">-- Nivel --</option><option value="1" ' + sel1 + '>Alta (1)</option><option value="2" ' + sel2 + '>Media (2)</option><option value="3" ' + sel3 + '>Baja (3)</option></select></div>';
    html += '</div>';

    // Fila 2: Objetivos Comerciales 1:N (Checkboxes)
    html += '<div style="margin-bottom:15px;">';
    html += '<label style="font-weight:bold; color:#5b21b6;">🎯 Objetivos Comerciales (Trazabilidad Múltiple):</label>';
    html += '<div id="nar-obj-container-' + narrativeCount + '" style="max-height:120px; overflow-y:auto; border:1px solid #ced4da; padding:12px; border-radius:6px; background:#fafafa;">';
    
    // Sincronización Directa con window.loadedBusinessObjectives 
    var activeCatalog = (typeof window.loadedBusinessObjectives !== 'undefined') ? window.loadedBusinessObjectives : [];
    
    if (activeCatalog.length > 0) {
        for(var i = 0; i < activeCatalog.length; i++) {
            var obj = activeCatalog[i];
            var objId = obj.id || obj.clave;
            var objDesc = obj.description || obj.desc || "";
            var isChecked = selectedObjs.includes(objId) ? "checked" : "";
            html += '<label style="display:block; margin-bottom:6px; font-weight:normal; cursor:pointer;"><input type="checkbox" class="nar-obj-chk-' + narrativeCount + '" value="' + escapeHtmlAttr(objId) + '" ' + isChecked + '> <b>' + escapeHtmlText(objId) + ':</b> ' + escapeHtmlText(objDesc) + '</label>';
        }
    } else {
        html += '<small style="color:#6c757d;">⚠️ No hay objetivos detectados. Asegúrate de cargar el archivo base (.docx) en el Paso 1 para habilitar la trazabilidad.</small>';
    }
    html += '</div></div>';

    // Fila 3: Narrativa Principal y Control de Cambios (Scope Creep)
    html += '<div style="margin-bottom:15px;">';
    html += '<div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:5px;">';
    html += '<label style="font-weight:bold; margin:0;">Narrativa Formal (Descripción inicial):</label>';
    html += '<button type="button" class="btn-outline" style="font-size:0.75rem; padding:3px 8px;" onclick="habilitarCambioAlcance(' + narrativeCount + ')">🔄 Registrar Cambio de Alcance</button>';
    html += '</div>';
    html += '<textarea id="nar-desc-' + narrativeCount + '" placeholder="El sistema debe permitir..." style="resize:vertical; min-height:80px; width:100%;" ondblclick="this.style.height=\'80px\'" title="Doble clic en la esquina para restaurar el tamaño">' + escapeHtmlText(descVal) + '</textarea>';
    html += '</div>';

    // Contenedor Oculto para Scope Creep
    html += '<div id="nar-change-container-' + narrativeCount + '" style="display:none; margin-bottom:15px; padding:15px; background:#fff3cd; border:1px dashed #ffc107; border-radius:6px;">';
    html += '<label style="font-weight:bold; color:#856404; display:block; margin-bottom:5px;">⚠️ Nuevo Alcance Solicitado (Scope Creep Tracker):</label>';
    html += '<textarea id="nar-newdesc-' + narrativeCount + '" placeholder="Escribe la nueva definición. El sistema validará el impacto del cambio..." style="resize:vertical; min-height:80px; width:100%; border-color:#ffc107;" ondblclick="this.style.height=\'80px\'" onchange="validarScopeCreep(' + narrativeCount + ')"></textarea>';
    html += '</div>';

    // Fila 4: Reglas y Verificación
    html += '<div style="margin-bottom:15px;">';
    html += '<label style="font-weight:bold;">Entradas, Reglas de Negocio y Salidas:</label>';
    html += '<textarea id="nar-io-' + narrativeCount + '" style="resize:vertical; min-height:60px; width:100%;" ondblclick="this.style.height=\'60px\'">' + escapeHtmlText(ioVal) + '</textarea>';
    html += '</div>';

    html += '<div style="margin-bottom:10px;">';
    html += '<label style="font-weight:bold;">Criterios QA (Verificación y Aceptación):</label>';
    html += '<textarea id="nar-ac-' + narrativeCount + '" style="resize:vertical; min-height:60px; width:100%;" ondblclick="this.style.height=\'60px\'">' + escapeHtmlText(acVal) + '</textarea>';
    html += '</div>';

    html += '</div>'; 
    
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    // MEJORA: Inserta el formulario al inicio (hasta arriba de la lista)
    container.prepend(tempDiv.firstChild);
}

// --- 2. AUDITORÍA DE SCOPE CREEP ---
function habilitarCambioAlcance(id) {
    var originalTextarea = document.getElementById('nar-desc-' + id);
    if(!originalTextarea.value.trim()) {
        alert("No hay una narrativa original redactada para someter a cambio.");
        return;
    }
    
    originalTextarea.readOnly = true;
    originalTextarea.style.background = '#e9ecef';
    originalTextarea.style.color = '#6c757d';
    
    var changeContainer = document.getElementById('nar-change-container-' + id);
    changeContainer.style.display = 'block';
    
    document.getElementById('nar-newdesc-' + id).focus();
}

function validarScopeCreep(id) {
    var original = document.getElementById('nar-desc-' + id).value.trim();
    var nuevo = document.getElementById('nar-newdesc-' + id).value.trim();
    
    if(!nuevo) return;

    var originalWords = original.split(/\s+/).length;
    var nuevoWords = nuevo.split(/\s+/).length;
    
    if (nuevoWords > originalWords * 1.5 || nuevoWords < originalWords * 0.5) {
        alert("¡Ah caray! Esto es un riesgo porque me pedías una bicicleta y ahora quieres un coche último modelo 🚲 ➡️ 🚗.\n\nEl volumen y la estructura del nuevo alcance difieren drásticamente de la línea base. Esto impacta severamente la planificación del Sprint/Proyecto.");
    }
}

// --- 3. FUNCIONES AUXILIARES PARA DETECCIÓN DE INCOMPLETITUD Y DUPLICIDAD ---
function normalizeTextForCompare(str) {
    if (!str) return "";
    return str.toLowerCase()
        .replace(/[áäâà]/g, "a")
        .replace(/[éëêè]/g, "e")
        .replace(/[íïîì]/g, "i")
        .replace(/[óöôò]/g, "o")
        .replace(/[úüûù]/g, "u")
        .replace(/[^a-z0-9ñ\s]/g, " ")
        .replace(/\s+/g, " ").trim();
}

function calculateTextSimilarity(str1, str2) {
    var n1 = normalizeTextForCompare(str1);
    var n2 = normalizeTextForCompare(str2);
    if (!n1 || !n2) return 0;
    if (n1 === n2) return 1;

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
    for (var k2 in set2) { unionKeys[k2] = true; }

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
        problems.push("El campo <b>" + fieldLabel + "</b> es demasiado breve o incompleto (contiene " + words.length + " palabras; se requieren al menos " + minWords + ").");
    }

    if (/[,;:\-\/\\]$/.test(trimmed) || /\.\.\.$/.test(trimmed) || /…$/.test(trimmed)) {
        problems.push("<b>Texto inconcluso en " + fieldLabel + ":</b> Termina en puntuación abierta o puntos suspensivos.");
    }

    var placeholderRegex = /\b(tbd|pendiente|por definir|por confirmar|completar|falta|todo|to-do|xxx+|zzz+)\b|\?\?\?/i;
    var matchPlaceholder = trimmed.match(placeholderRegex);
    if (matchPlaceholder) {
        problems.push("<b>Información pendiente en " + fieldLabel + ":</b> Contiene el marcador temporal <b>\"" + escapeHtmlText(matchPlaceholder[0]) + "\"</b>.");
    }

    return problems;
}

// --- 4. RECOLECCIÓN Y VALIDACIÓN DE NARRATIVAS (ESTÁNDAR SRS / CASCADA) ---
function collectAllNarratives() {
    var cards = document.querySelectorAll('.narrative-item-card');
    var list = [];
    
    for (var i = 0; i < cards.length; i++) {
        var idSuffix = cards[i].id.split('-').pop(); 
        
        var reqIdEl = document.getElementById('nar-reqid-' + idSuffix);
        var nameEl = document.getElementById('nar-name-' + idSuffix);
        var prioEl = document.getElementById('nar-prio-' + idSuffix);
        var descEl = document.getElementById('nar-desc-' + idSuffix);
        var ioEl = document.getElementById('nar-io-' + idSuffix);
        var acEl = document.getElementById('nar-ac-' + idSuffix);
        
        var objCheckboxes = document.querySelectorAll('.nar-obj-chk-' + idSuffix + ':checked');
        var selectedObjs = [];
        for (var c = 0; c < objCheckboxes.length; c++) {
            selectedObjs.push(objCheckboxes[c].value);
        }

        list.push({
            index: idSuffix, 
            objectives: selectedObjs,
            priority: prioEl ? prioEl.value : "",
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

    var items = collectAllNarratives();

    if (items.length === 0) {
        outBox.innerHTML = '<p style="color:#dc3545; font-weight:bold;">⚠️ No hay requerimientos registrados. Haz clic en "➕ Agregar Requerimiento".</p>';
        return;
    }

    var ambiguousWords = ["rápido", "rapido", "fácil", "facil", "intuitivo", "amigable", "etc", "etc.", "algunos", "varios", "normalmente", "adecuado", "óptimo", "optimo", "eficiente"];
    var html = '<h3>📊 Dictamen de Calidad de Especificaciones (SRS / Cascada)</h3>';

    for (var i = 0; i < items.length; i++) {
        var it = items[i];
        var issues = [];
        var reqLabel = (it.reqId || ('Req #' + it.index)) + ' - ' + (it.reqName || 'Sin nombre');
        var cardId = 'nar-card-' + it.index; 

        // Validación
        if (!it.objectives || it.objectives.length === 0) issues.push("Falta marcar al menos un <b>Objetivo Comercial</b> (Trazabilidad 1:N).");
        if (!it.reqId || !it.reqName) issues.push("Falta el identificador (<b>Núm. Req</b>) o el <b>Nombre del Requerimiento</b>.");

        var narrativeIssues = checkFieldCompleteness(it.narrative, "Narrativa", 8);
        var ioIssues = checkFieldCompleteness(it.io, "Datos de Entrada, Reglas y Salidas", 6);
        var criteriaIssues = checkFieldCompleteness(it.criteria, "Criterios QA", 6);
        issues = issues.concat(narrativeIssues, ioIssues, criteriaIssues);

        var combinedText = (it.narrative + " " + it.io + " " + it.criteria).toLowerCase();
        var fluffWords = ["básicamente", "en general", "como es sabido", "para fines prácticos", "es importante que", "cosas", "detalles"];
        var foundFluff = fluffWords.filter(f => new RegExp("\\b" + f + "\\b", "i").test(combinedText));
        if (foundFluff.length > 0) issues.push("<b>Información irrelevante detectada:</b> Elimina frases de relleno (<b>" + foundFluff.join(", ") + "</b>).");

        var simNarIo = calculateTextSimilarity(it.narrative, it.io);
        var simNarAc = calculateTextSimilarity(it.narrative, it.criteria);
        if (simNarIo >= 0.75) issues.push("<b>Ideas repetitivas:</b> <i>Narrativa</i> y <i>Entradas/Reglas</i> son muy similares.");
        if (simNarAc >= 0.75) issues.push("<b>Ideas repetitivas:</b> <i>Narrativa</i> y <i>Criterios QA</i> reciclan el mismo texto.");

        var foundAmbiguous = ambiguousWords.filter(w => new RegExp("(?:^|\\s|[.,;:])" + w + "(?:$|\\s|[.,;:])", "i").test(combinedText));
        if (foundAmbiguous.length > 0) issues.push("<b>Ambigüedad detectada:</b> Términos subjetivos (<b>" + foundAmbiguous.join(", ") + "</b>).");

        // Render
        if (issues.length === 0) {
            html += '<div style="background:#d4edda; border-left:5px solid #28a745; padding:12px; margin-bottom:10px; border-radius:4px;"><b>✅ ' + escapeHtmlText(reqLabel) + ':</b> Cumple con el estándar SRS.</div>';
        } else {
            html += `<div ondblclick="scrollToNarrative('${cardId}')" title="Doble clic para ir a este requerimiento" style="margin-bottom: 8px; color: #721c24; background: #f8d7da; padding: 10px; border-radius: 4px; cursor: pointer; border-left: 5px solid #dc3545;">
                <strong>❌ ${escapeHtmlText(reqLabel)}:</strong> Requiere ajustes (${issues.length} hallazgos)
                <ul style="margin: 4px 0 0 20px; padding: 0;">` + issues.map(e => `<li style="margin-bottom:4px;">${e}</li>`).join('') + `</ul>
                <small style="display:block; margin-top:8px; color:#a71d2a; font-weight:bold;">🖱️ Haz doble clic aquí para saltar al requerimiento.</small>
            </div>`;
        }
    }

    outBox.innerHTML = html;
}

function scrollToNarrative(cardId) {
    var card = document.getElementById(cardId);
    if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        var originalBg = card.style.backgroundColor || '#fff';
        card.style.transition = 'background-color 0.5s ease';
        card.style.backgroundColor = '#fff3cd'; 
        setTimeout(() => { card.style.backgroundColor = originalBg; }, 1500);
    }
}

function escapeHtmlAttr(str) {
    return str ? String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";
}
function escapeHtmlText(str) {
    return str ? String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";
}
