var narrativeCounter = 0;
var globalBusinessObjectives = [];

window.addEventListener('DOMContentLoaded', (event) => {
    var container = document.getElementById('narratives-container');
    if (container && container.children.length === 0) {
        addNarrativeForm();
    }
});

// --- CARGADOR DE OBJETIVOS COMERCIALES (TXT, CSV, XML, JSON) ---
function loadBusinessObjectives(event) {
    var file = event.target.files[0];
    if (!file) return;

    var fileName = file.name.toLowerCase();

    if (fileName.endsWith('.doc') || fileName.endsWith('.docx') || fileName.endsWith('.pdf')) {
        alert("⚠️ Los archivos Word y PDF son binarios. Por favor utiliza un archivo de texto plano (.txt), .csv, .xml o .json para el catálogo.");
        event.target.value = "";
        return;
    }

    var reader = new FileReader();
    reader.onload = function(e) {
        var content = e.target.result;
        globalBusinessObjectives = [];

        try {
            if (fileName.endsWith('.json')) {
                var data = JSON.parse(content);
                if (Array.isArray(data)) {
                    globalBusinessObjectives = data.map(item => ({
                        key: item.key || item.clave || 'OBJ-00',
                        name: item.name || item.nombre || 'Objetivo sin nombre'
                    }));
                }
            } else if (fileName.endsWith('.csv')) {
                var lines = content.split('\n');
                lines.forEach(line => {
                    var parts = line.split(',');
                    if (parts.length >= 2) {
                        globalBusinessObjectives.push({
                            key: parts[0].trim(),
                            name: parts[1].trim()
                        });
                    }
                });
            } else if (fileName.endsWith('.xml')) {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(content, "text/xml");
                var objs = xmlDoc.getElementsByTagName("objective") || xmlDoc.getElementsByTagName("objetivo");
                for (var i = 0; i < objs.length; i++) {
                    var k = objs[i].getAttribute("key") || objs[i].getAttribute("clave") || "OBJ-00";
                    var n = objs[i].textContent || "Objetivo";
                    globalBusinessObjectives.push({ key: k.trim(), name: n.trim() });
                }
            } else {
                var lines = content.split('\n');
                lines.forEach(line => {
                    var cleanLine = line.trim();
                    if (cleanLine.length > 0) {
                        if (cleanLine.includes('-')) {
                            var parts = cleanLine.split('-');
                            globalBusinessObjectives.push({
                                key: parts[0].trim(),
                                name: parts.slice(1).join('-').trim()
                            });
                        } else {
                            globalBusinessObjectives.push({
                                key: "OBJ-" + (globalBusinessObjectives.length + 1),
                                name: cleanLine
                            });
                        }
                    }
                });
            }

            if (globalBusinessObjectives.length === 0) {
                alert("⚠️ No se pudieron extraer objetivos comerciales válidos del archivo.");
                return;
            }

            updateAllObjectiveDropdowns();
            alert("✅ ¡Se cargaron " + globalBusinessObjectives.length + " objetivos comerciales correctamente!");

        } catch (err) {
            alert("⚠️ Error al procesar el archivo de objetivos comerciales.");
            console.error(err);
        }
        event.target.value = "";
    };

    reader.readAsText(file);
}

function updateAllObjectiveDropdowns() {
    var selects = document.querySelectorAll('.nar-obj-select');
    selects.forEach(select => {
        var currentVal = select.value;
        select.innerHTML = '<option value="">-- Seleccione Objetivo Comercial --</option>';
        globalBusinessObjectives.forEach(obj => {
            var opt = document.createElement('option');
            opt.value = obj.key + " - " + obj.name;
            opt.textContent = "[" + obj.key + "] " + obj.name;
            if (opt.value === currentVal) opt.selected = true;
            select.appendChild(opt);
        });
    });
}

function addNarrativeForm(objVal = '', reqNumVal = '', reqNameVal = '', narrVal = '', inVal = '', outVal = '', rulesVal = '', critVal = '') {
    // 1. Asegurar que el contador de narrativas exista
    if (typeof narrativeCounter === 'undefined') {
        window.narrativeCounter = 0;
    }
    narrativeCounter++;

    // 2. Buscar el contenedor en el HTML de forma segura
    var container = document.getElementById('narratives-container');
    if (!container) {
        alert("Error crítico: No se encontró el contenedor 'narratives-container' en el HTML.");
        return;
    }

    var narrativeId = 'narrative-card-' + narrativeCounter;

    var cardDiv = document.createElement('div');
    cardDiv.className = 'card narrative-set';
    cardDiv.id = narrativeId;
    cardDiv.style.marginBottom = '20px';

    // 3. Validar que el catálogo global exista para evitar errores de forEach
    var optionsHTML = '<option value="">-- Seleccione Objetivo Comercial --</option>';
    if (typeof globalBusinessObjectives !== 'undefined' && Array.isArray(globalBusinessObjectives)) {
        globalBusinessObjectives.forEach(obj => {
            var valStr = obj.key + " - " + obj.name;
            var selected = (valStr === objVal) ? 'selected' : '';
            optionsHTML += `<option value="${escapeHTML(valStr)}" ${selected}>[${escapeHTML(obj.key)}] ${escapeHTML(obj.name)}</option>`;
        });
    }

    cardDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h4 style="margin: 0; color: var(--primary-purple, #6b21a8);">📋 Requerimiento Funcional #${narrativeCounter}</h4>
            <div>
                <button type="button" class="btn-outline" onclick="toggleNarrativeForm('${narrativeId}', this)" style="padding: 4px 10px; font-size: 0.8rem;">👁️ Ocultar</button>
                <button type="button" class="btn-accent" onclick="removeNarrativeForm('${narrativeId}')" style="padding: 4px 10px; font-size: 0.8rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">🗑️ Eliminar</button>
            </div>
        </div>
        <div class="narrative-body" style="display: flex; flex-direction: column; gap: 12px;">
            
            <div style="display: flex; gap: 12px; width: 100%;">
                <div style="width: 45%;">
                    <label style="display: block; margin-bottom: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><b>Clave de Objetivo Comercial:</b></label>
                    <select class="nar-obj-select" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: #fff; height: 38px; box-sizing: border-box;">
                        ${optionsHTML}
                    </select>
                </div>
                <div style="width: 20%;">
                    <label style="display: block; margin-bottom: 5px; white-space: nowrap;"><b>Núm. Req:</b></label>
                    <input type="text" class="nar-num" placeholder="Ej. REQ-01" value="${escapeHTML(reqNumVal)}" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; height: 38px;">
                </div>
                <div style="width: 35%;">
                    <label style="display: block; margin-bottom: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><b>Nombre de Requerimiento:</b></label>
                    <input type="text" class="nar-req-name" placeholder="Ej. Cálculo Fiscal" value="${escapeHTML(reqNameVal)}" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; height: 38px;">
                </div>
            </div>

            <div>
                <label style="display: block; margin-bottom: 5px;"><b>Narrativa (Descripción formal sin ambigüedades):</b></label>
                <textarea class="nar-text" rows="3" placeholder="Ej. El sistema calculará el impuesto basándose en la tabla fiscal vigente..." style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">${escapeHTML(narrVal)}</textarea>
            </div>

            <div>
                <label style="display: block; margin-bottom: 5px;"><b>Entradas (Datos requeridos para el proceso):</b></label>
                <textarea class="nar-in" rows="2" placeholder="Ej. ID de cliente, Monto bruto, Código postal" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">${escapeHTML(inVal)}</textarea>
            </div>

            <div>
                <label style="display: block; margin-bottom: 5px;"><b>Salidas (Resultados esperados / Datos generados):</b></label>
                <textarea class="nar-out" rows="2" placeholder="Ej. Factura PDF generada, Registro en tabla de auditoría" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">${escapeHTML(outVal)}</textarea>
            </div>

            <div>
                <label style="display: block; margin-bottom: 5px;"><b>Reglas (Negocio, Requerimientos No Funcionales, Seguridad u otras consideraciones):</b></label>
                <textarea class="nar-rules" rows="2" placeholder="Ej. El tiempo de respuesta no debe superar 2 segundos; acceso exclusivo para roles ADMIN." style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">${escapeHTML(rulesVal)}</textarea>
            </div>

            <div>
                <label style="display: block; margin-bottom: 5px;"><b>Criterios de Aceptación (Desarrollo y QA):</b></label>
                <textarea class="nar-crit" rows="2" placeholder="Ej. El cálculo debe ser exacto a dos decimales y probado con casos límite." style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">${escapeHTML(critVal)}</textarea>
            </div>
        </div>
    `;

    container.appendChild(cardDiv);
}

function toggleNarrativeForm(narrativeId, btn) {
    var card = document.getElementById(narrativeId);
    var body = card.querySelector('.narrative-body');
    if (body.style.display === 'none') {
        body.style.display = 'block';
        btn.innerText = '👁️ Ocultar';
    } else {
        body.style.display = 'none';
        btn.innerText = '📂 Mostrar';
    }
}

function removeNarrativeForm(narrativeId) {
    var card = document.getElementById(narrativeId);
    if (card) {
        card.remove();
    }
}

// VALIDACIÓN ESTRICTA
function validateAllNarratives() {
    var cards = document.querySelectorAll('.narrative-set');
    var outputDiv = document.getElementById('nar-output');
    
    if (cards.length === 0) {
        alert("⚠️ No hay requerimientos funcionales agregados para validar.");
        return;
    }

    var htmlReport = "<h3>📊 Informe de Validación Estática y Calidad de Narrativas (SRS)</h3>";
    var hayErroresTotales = false;

    cards.forEach((card, index) => {
        var reqNum = card.querySelector('.nar-num').value || `REQ-0${index + 1}`;
        var reqName = card.querySelector('.nar-req-name').value || 'Sin Nombre';
        var narrText = card.querySelector('.nar-text').value;
        var rulesText = card.querySelector('.nar-rules').value;
        var critText = card.querySelector('.nar-crit').value;
        var inText = card.querySelector('.nar-in').value;
        var outText = card.querySelector('.nar-out').value;

        // Ejecutar validaciones estructurales y de ambigüedad
        var alertasCalidad = validarAmbiguedadesYCalidad(narrText, rulesText, critText);
        
        // Validar campos vacíos obligatorios
        var camposVacios = [];
        if (!narrText.trim()) camposVacios.push("Narrativa");
        if (!inText.trim()) camposVacios.push("Entradas");
        if (!outText.trim()) camposVacios.push("Salidas");
        if (!critText.trim()) camposVacios.push("Criterios de Aceptación");

        htmlReport += `<div style="border-left: 4px solid #6b21a8; padding: 10px; margin-bottom: 15px; background: #faf5ff;">`;
        htmlReport += `<h4>${reqNum}: ${escapeHTML(reqName)}</h4>`;

        if (camposVacios.length > 0) {
            hayErroresTotales = true;
            htmlReport += `<p style="color: #dc3545;">❌ <b>Campos obligatorios vacíos:</b> ${camposVacios.join(', ')}</p>`;
        }

        if (alertasCalidad.length > 0) {
            htmlReport += `<ul style="margin: 5px 0 0 20px; color: #b45309;">`;
            alertasCalidad.forEach(alerta => {
                htmlReport += `<li>${alerta}</li>`;
            });
            htmlReport += `</ul>`;
        } else if (camposVacios.length === 0) {
            htmlReport += `<p style="color: #155724;">✅ <b>Sin ambigüedades detectadas:</b> El requerimiento cumple con los criterios de especificación formal.</p>`;
        }

        htmlReport += `</div>`;
    });

    outputDiv.innerHTML = htmlReport;
    outputDiv.style.display = 'block';
}

// --- EXPORTAR PROYECTO A JSON ---
function exportProjectJSON() {
    var project = document.getElementById('nar-project').value.trim();
    var cards = document.querySelectorAll('.narrative-set');

    if (!project) {
        alert("Por favor ingresa el Nombre del Proyecto antes de exportar en JSON.");
        return;
    }
    if (cards.length === 0) {
        alert("No hay requerimientos para exportar.");
        return;
    }

    var projectData = {
        projectName: project,
        businessObjectives: globalBusinessObjectives,
        requirements: []
    };

    cards.forEach((card) => {
        var objVal = card.querySelector('.nar-obj-select').value.trim();
        var reqNum = card.querySelector('.nar-num').value.trim();
        var reqName = card.querySelector('.nar-req-name').value.trim();
        var narr = card.querySelector('.nar-text').value.trim();
        var inputs = card.querySelector('.nar-in').value.trim();
        var outputs = card.querySelector('.nar-out').value.trim();
        var rules = card.querySelector('.nar-rules').value.trim();
        var criteria = card.querySelector('.nar-crit').value.trim();

        projectData.requirements.push({
            objective: objVal,
            reqNum: reqNum,
            reqName: reqName,
            narrative: narr,
            inputs: inputs,
            outputs: outputs,
            rules: rules,
            criteria: criteria
        });
    });

    var jsonStr = JSON.stringify(projectData, null, 4);
    var blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
    var url = window.URL.createObjectURL(blob);
    var downloadAnchor = document.createElement('a');
    downloadAnchor.href = url;
    downloadAnchor.download = `Proyecto_${project.replace(/[^a-zA-Z0-9_-]/g, "_")}.json`;
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    window.URL.revokeObjectURL(url);
}

// --- IMPORTAR PROYECTO DESDE JSON ---
function importProjectJSON(event) {
    var file = event.target.files[0];
    if (!file) return;

    var reader = new FileReader();
    reader.onload = function(e) {
        try {
            var content = e.target.result;
            var data = JSON.parse(content);

            if (!data.projectName || !Array.isArray(data.requirements)) {
                alert("⚠️ El archivo JSON no tiene un formato válido.");
                return;
            }

            document.getElementById('nar-project').value = data.projectName;
            globalBusinessObjectives = data.businessObjectives || [];

            var container = document.getElementById('narratives-container');
            container.innerHTML = "";
            narrativeCounter = 0;

            data.requirements.forEach(req => {
                addNarrativeForm(
                    req.objective || '',
                    req.reqNum || '',
                    req.reqName || '',
                    req.narrative || '',
                    req.inputs || '',
                    req.outputs || '',
                    req.rules || '',
                    req.criteria || ''
                );
            });

            var outBox = document.getElementById('nar-output');
            if (outBox) outBox.style.display = 'none';

            alert("✅ ¡Proyecto '" + data.projectName + "' importado con éxito!");
        } catch (err) {
            alert("⚠️ Error al leer el archivo JSON.");
            console.error(err);
        }
        event.target.value = "";
    };
    reader.readAsText(file);
}

// GENERAR SCRIPT DE WINDOWS (.BAT) Y SRS CONSOLIDADO CON TRAZABILIDAD
function exportProjectFoldersAndFiles() {
    var project = document.getElementById('nar-project').value.trim();
    var cards = document.querySelectorAll('.narrative-set');

    if (!project) {
        alert("Por favor ingresa el Nombre del Proyecto para exportar.");
        return;
    }
    if (cards.length === 0) {
        alert("No hay requerimientos para exportar.");
        return;
    }

    var safeProjectName = project.replace(/[^a-zA-Z0-9_-]/g, "_");
    var safeWordFilename = `SRS_${safeProjectName}_Requerimientos.doc`;
    
    var batContent = `@echo off\r\n`;
    batContent += `chcp 65001 > nul\r\n`;
    batContent += `echo Configurando carpetas y organizando documento SRS para: ${project}...\r\n\r\n`;
    
    batContent += `cd /d "%USERPROFILE%\\Documents"\r\n`;
    batContent += `if not exist "Proyectos" mkdir "Proyectos"\r\n`;
    batContent += `cd Proyectos\r\n`;
    batContent += `if not exist "${safeProjectName}" mkdir "${safeProjectName}"\r\n`;
    batContent += `cd "${safeProjectName}"\r\n`;
    
    batContent += `mkdir "Requerimientos_Funcionales"\r\n`;

    var wordContent = `ESPECIFICACIÓN DE REQUERIMIENTOS DE SOFTWARE (SRS)\n`;
    wordContent += `PROYECTO: ${project}\n`;
    wordContent += `====================================================================\n\n`;

    cards.forEach((card, index) => {
        var num = index + 1;
        var objVal = card.querySelector('.nar-obj-select').value.trim() || "N/A";
        var reqNum = card.querySelector('.nar-num').value.trim() || `REQ_${num}`;
        var reqName = card.querySelector('.nar-req-name').value.trim() || `Requerimiento_${num}`;
        var narr = card.querySelector('.nar-text').value.trim() || "N/A";
        var rules = card.querySelector('.nar-rules').value.trim() || "N/A";
        
        var rawInputs = card.querySelector('.nar-in').value.trim() || "N/A";
        var rawOutputs = card.querySelector('.nar-out').value.trim() || "N/A";
        
        var inputList = rawInputs.split(/\n|,/).map(i => i.trim()).filter(i => i.length > 0);
        var outputList = rawOutputs.split(/\n|,/).map(o => o.trim()).filter(o => o.length > 0);

        var structuredIO = "";
        var maxLen = Math.max(inputList.length, outputList.length, 1);
        for (var i = 0; i < maxLen; i++) {
            var entry = inputList[i] ? `Entrada ${i+1}: ${inputList[i]}` : `Entrada ${i+1}: N/A`;
            var salida = outputList[i] ? `Salida ${i+1}: ${outputList[i]}` : (outputList[0] ? `Salida 1 (o n): ${outputList[0]}` : `Salida: N/A`);
            structuredIO += `   [ ${entry} ]  --->  [ ${salida} ]\n`;
        }

        var criteria = card.querySelector('.nar-crit').value.trim() || "N/A";
        var safeReqName = reqNum.replace(/[^a-zA-Z0-9_-]/g, "_");

        batContent += `cd Requerimientos_Funcionales\r\n`;
        batContent += `if not exist "${safeReqName}" mkdir "${safeReqName}"\r\n`;
        batContent += `cd "${safeReqName}"\r\n`;
        batContent += `echo REQUERIMIENTO: ${reqNum} - ${reqName} > ficha_requerimiento.txt\r\n`;
        batContent += `echo OBJETIVO COMERCIAL: ${objVal} >> ficha_requerimiento.txt\r\n`;
        batContent += `echo ---------------------------------------- >> ficha_requerimiento.txt\r\n`;
        batContent += `echo NARRATIVA: ${narr} >> ficha_requerimiento.txt\r\n`;
        batContent += `echo REGLAS: ${rules} >> ficha_requerimiento.txt\r\n`;
        batContent += `echo CRITERIOS: ${criteria} >> ficha_requerimiento.txt\r\n`;
        batContent += `cd ..\r\ncd ..\r\n`;

        wordContent += `--------------------------------------------------------------------\n`;
        wordContent += `REQUERIMIENTO #${num}: ${reqNum} - ${reqName}\n`;
        wordContent += `--------------------------------------------------------------------\n`;
        wordContent += `* OBJETIVO COMERCIAL (TRAZABILIDAD): ${objVal}\n\n`;
        wordContent += `1. NARRATIVA:\n${narr}\n\n`;
        wordContent += `2. MAPEO DE ENTRADAS Y SALIDAS (CASO DE USO):\n${structuredIO}\n`;
        wordContent += `3. REGLAS (Negocio / Seguridad / NFR):\n${rules}\n\n`;
        wordContent += `4. CRITERIOS DE ACEPTACIÓN (Desarrollo y QA):\n${criteria}\n\n\n`;
    });

    batContent += `if exist "%USERPROFILE%\\Downloads\\${safeWordFilename}" move /y "%USERPROFILE%\\Downloads\\${safeWordFilename}" "." > nul\r\n`;
    batContent += `echo.\r\n`;
    batContent += `echo ¡Estructura y documento SRS consolidado organizados con éxito en Documentos\\Proyectos\\${safeProjectName}!\r\n`;
    batContent += `pause\r\n`;

    var batBlob = new Blob([batContent], { type: 'text/plain;charset=utf-8' });
    var batLink = document.createElement('a');
    batLink.href = window.URL.createObjectURL(batBlob);
    batLink.download = `Crear_Carpetas_${safeProjectName}.bat`;
    batLink.click();

    setTimeout(() => {
        var wordBlob = new Blob(["\uFEFF" + wordContent], { type: 'application/msword;charset=utf-8' });
        var wordLink = document.createElement('a');
        wordLink.href = window.URL.createObjectURL(wordBlob);
        wordLink.download = safeWordFilename;
        wordLink.click();
    }, 400);
}

function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, function(t) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[t] || t;
    });
}
