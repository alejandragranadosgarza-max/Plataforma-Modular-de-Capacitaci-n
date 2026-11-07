var storyCounter = 0;

window.addEventListener('DOMContentLoaded', (event) => {
    var container = document.getElementById('stories-container');
    if (container && container.children.length === 0) {
        addStoryForm();
    }
});

function addStoryForm(epicVal = '', nameVal = '', featureVal = '', posVal = '', negVal = '', nfVal = '') {
    storyCounter++;
    var container = document.getElementById('stories-container');
    var storyId = 'story-card-' + storyCounter;

    var cardDiv = document.createElement('div');
    cardDiv.className = 'card story-set';
    cardDiv.id = storyId;
    cardDiv.style.borderLeft = '5px solid #d92027';
    cardDiv.style.background = '#fdfefe';

    cardDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <h4 style="margin: 0; color: #005691;">📖 Historia de Usuario #${storyCounter}</h4>
            <div>
                <button type="button" class="btn-outline" onclick="toggleStoryForm('${storyId}', this)" style="padding: 3px 8px; font-size: 0.8rem;">👁️ Ocultar</button>
                <button type="button" class="btn-accent" onclick="removeStoryForm('${storyId}')" style="padding: 3px 8px; font-size: 0.8rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">🗑️ Eliminar</button>
            </div>
        </div>
        <div class="story-body">
            <label>Épica:</label>
            <input type="text" class="hu-epic" placeholder="Ej. Módulo de Pagos y Carrito" value="${escapeHTML(epicVal)}">

            <label>Nombre de la Historia de Usuario:</label>
            <input type="text" class="hu-name" placeholder="Ej. Aplicar Código de Descuento" value="${escapeHTML(nameVal)}">

            <label>Historia de Usuario (Formato INVEST / 3 C):</label>
            <textarea class="hu-feature" rows="3" placeholder="Ej. Como usuario comprador, quiero aplicar un código de descuento..., para obtener una rebaja...">${escapeHTML(featureVal)}</textarea>

            <label>Criterios de Aceptación - Caso POSITIVO (Ordenado):</label>
            <textarea class="hu-pos" rows="2" placeholder="Ej. Dado que tengo un carrito..., cuando ..., entonces ...">${escapeHTML(posVal)}</textarea>

            <label>Criterios de Aceptación - Caso NEGATIVO (Ordenado):</label>
            <textarea class="hu-neg" rows="2" placeholder="Ej. Dado que tengo un carrito..., cuando ..., entonces ...">${escapeHTML(negVal)}</textarea>

            <label>Criterios de Aceptación - Requisito NO FUNCIONAL (Ordenado):</label>
            <textarea class="hu-nf" rows="2" placeholder="Ej. El tiempo de respuesta no debe superar los 500ms...">${escapeHTML(nfVal)}</textarea>
        </div>
    `;

    container.appendChild(cardDiv);
}

function toggleStoryForm(storyId, btn) {
    var card = document.getElementById(storyId);
    var body = card.querySelector('.story-body');
    if (body.style.display === 'none') {
        body.style.display = 'block';
        btn.innerText = '👁️ Ocultar';
    } else {
        body.style.display = 'none';
        btn.innerText = '📂 Mostrar';
    }
}

function removeStoryForm(storyId) {
    var card = document.getElementById(storyId);
    if (card) {
        card.remove();
    }
}

// VALIDACIÓN EXPERTA INVEST / 3C POR HISTORIA
function validateAllStories() {
    var project = document.getElementById('atdd-project').value.trim();
    var cards = document.querySelectorAll('.story-set');
    var outBox = document.getElementById('atdd-output');

    if (!project) {
        alert("Por favor ingresa el Nombre del Proyecto Global.");
        return;
    }
    if (cards.length === 0) {
        alert("Debes agregar al menos una Historia de Usuario para validar.");
        return;
    }

    var validationLog = "";
    var ambiguousWords = ["rápido", "rapido", "correctamente", "fácil", "facil", "intuitivo", "bien", "óptimo", "optimizado", "seguro"];

    cards.forEach((card, index) => {
        var num = index + 1;
        var epic = card.querySelector('.hu-epic').value.trim();
        var huName = card.querySelector('.hu-name').value.trim();
        var feature = card.querySelector('.hu-feature').value.trim();
        var pos = card.querySelector('.hu-pos').value.trim();
        var neg = card.querySelector('.hu-neg').value.trim();
        var nf = card.querySelector('.hu-nf').value.trim();

        var specificErrors = [];

        if (!epic) specificErrors.push("Falta definir la Épica.");
        if (!huName) specificErrors.push("Falta asignar un Nombre a la Historia de Usuario.");
        if (!feature) specificErrors.push("Falta redactar la Historia de Usuario (Formato INVEST/3C).");

        if (!pos) specificErrors.push("No cuenta con criterio de aceptación positivo.");
        if (!neg) specificErrors.push("No cuenta con criterio de aceptación negativo.");
        if (!nf) specificErrors.push("No cuenta con requisito no funcional.");

        var fullText = (feature + " " + pos + " " + neg + " " + nf).toLowerCase();
        var foundAmbig = [];
        ambiguousWords.forEach(word => {
            if (fullText.indexOf(word) !== -1) foundAmbig.push(word);
        });

        if (foundAmbig.length > 0) {
            specificErrors.push(`La historia no puede ser probada objetivamente (contiene ambigüedades subjetivas: <em>${foundAmbig.join(", ")}</em>).`);
        }

        if (specificErrors.length > 0) {
            var storyId = card.id; // Captura el ID exacto de la historia
            validationLog += `<div onclick="window.scrollToStory('${storyId}')" title="Clic para ir a esta historia" style="margin-bottom: 10px; color: #721c24; background: #f8d7da; padding: 10px; border-radius: 6px; border-left: 5px solid #dc3545; cursor: pointer; transition: transform 0.2s;">
                <strong>❌ Historia #${num} (${huName || 'Sin Nombre'}): NO CUMPLE</strong>
                <ul style="margin: 5px 0 0 20px; padding: 0;">` + specificErrors.map(e => `<li>${e}</li>`).join('') + `</ul>
                <small style="display:block; margin-top:8px; color:#a71d2a; font-weight:bold;">🖱️ Haz clic aquí para ir a la historia y corregirla.</small>
            </div>`;
        } else {
            validationLog += `<div style="margin-bottom: 10px; color: #155724; background: #d4edda; padding: 10px; border-radius: 6px; border-left: 5px solid #28a745;">
                <strong>✅ Historia #${num} (${huName}): CUMPLE LAS REGLAS</strong><br><small>Alineada con el estándar INVEST, 3C y criterios comprobables.</small>
            </div>`;
        }
    });

    outBox.style.display = 'block';
    outBox.innerHTML = `
        <h4 style="color:#005691; margin-top:0;">🔍 Reporte de Diagnóstico INVEST y Criterios por Historia</h4>
        <p><strong>Proyecto:</strong> ${escapeHTML(project)} | <strong>Total Evaluadas:</strong> ${cards.length}</p>
        <hr style="border:0; border-top:1px solid #ccc; margin:10px 0;">
        ${validationLog}
    `;
}

// EXPORTAR CSV UNIVERSAL (COMPATIBLE CON EXCEL Y ASISTENTE DE IMPORTACIÓN MASIVA DE JIRA)
function exportToExcelCSV() {
    var projectInput = document.getElementById('atdd-project').value.trim();
    var cards = document.querySelectorAll('.story-set');

    if (!projectInput) {
        alert("Por favor ingresa el Nombre del Proyecto Global para exportar.");
        return;
    }
    if (cards.length === 0) {
        alert("No hay historias de usuario para exportar.");
        return;
    }

    var sheetName = projectInput.replace(/[\/\\\?\*:\[\]]/g, "_").substring(0, 31);
    var csvRows = [];

    // Cabeceras oficiales reconocidas por el Asistente de Importación de Jira (External System Import)
    csvRows.push([
        "Summary",                  
        "Issue Type",               
        "Epic Name",                
        "Description",              
        "Environment"               
    ]);

    cards.forEach((card) => {
        var epic = card.querySelector('.hu-epic').value.trim() || "General";
        var huName = card.querySelector('.hu-name').value.trim() || "Historia de Usuario";
        var feature = card.querySelector('.hu-feature').value.trim() || "";
        var pos = card.querySelector('.hu-pos').value.trim() || "";
        var neg = card.querySelector('.hu-neg').value.trim() || "";
        var nf = card.querySelector('.hu-nf').value.trim() || "";

        var fullDescription = `*HISTORIA DE USUARIO (INVEST/3C):*\n${feature}\n\n*CRITERIO POSITIVO:*\n${pos}\n\n*CRITERIO NEGATIVO:*\n${neg}\n\n*REQUISITO NO FUNCIONAL:*\n${nf}`;

        var cleanSummary = huName.replace(/"/g, '""');
        var cleanEpic = epic.replace(/"/g, '""');
        var cleanDesc = fullDescription.replace(/"/g, '""');
        var cleanProj = projectInput.replace(/"/g, '""');

        csvRows.push([
            `"${cleanSummary}"`,
            `"Story"`,
            `"${cleanEpic}"`,
            `"${cleanDesc}"`,
            `"${cleanProj}"`
        ]);
    });

    var csvContent = csvRows.map(e => e.join(";")).join("\n");
    var blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${sheetName}_Jira_Excel_Universal.csv`;
    link.click();
}

// EXPORTAR PARA JIRA (Formato de texto plano estructurado)
function exportToJiraTXT() {
    var project = document.getElementById('atdd-project').value.trim();
    var cards = document.querySelectorAll('.story-set');

    if (!project) {
        alert("Por favor ingresa el Nombre del Proyecto Global para exportar.");
        return;
    }
    if (cards.length === 0) {
        alert("No hay historias de usuario para exportar.");
        return;
    }

    var exportText = `PROYECTO: ${project}\n`;
    exportText += `====================================================\n\n`;

    cards.forEach((card, index) => {
        var num = index + 1;
        var epic = card.querySelector('.hu-epic').value.trim() || "General";
        var huName = card.querySelector('.hu-name').value.trim() || `Historia_${num}`;
        var feature = card.querySelector('.hu-feature').value.trim() || "N/A";
        var pos = card.querySelector('.hu-pos').value.trim() || "N/A";
        var neg = card.querySelector('.hu-neg').value.trim() || "N/A";
        var nf = card.querySelector('.hu-nf').value.trim() || "N/A";

        exportText += `[HISTORIA #${num}]\n`;
        exportText += `ÉPICA: ${epic}\n`;
        exportText += `NOMBRE: ${huName}\n`;
        exportText += `HISTORIA DE USUARIO (INVEST/3C):\n${feature}\n\n`;
        exportText += `CRITERIO POSITIVO:\n${pos}\n\n`;
        exportText += `CRITERIO NEGATIVO:\n${neg}\n\n`;
        exportText += `REQUISITO NO FUNCIONAL:\n${nf}\n`;
        exportText += `----------------------------------------------------\n\n`;
    });

    var blob = new Blob([exportText], { type: 'text/plain;charset=utf-8' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${project.replace(/[^a-zA-Z0-9]/g, '_')}_Jira_Format.txt`;
    link.click();
}

// IMPORTAR / CARGAR ARCHIVO
function handleFileImport(event) {
    var file = event.target.files[0];
    if (!file) return;

    var reader = new FileReader();
    reader.onload = function(e) {
        var content = e.target.result;
        
        document.getElementById('stories-container').innerHTML = "";
        storyCounter = 0;

        parseImportedText(content);
        event.target.value = '';
    };
    reader.readAsText(file);
}

function parseImportedText(text) {
    var lines = text.split(/\r?\n/);
    var currentEpic = "";
    var currentName = "";
    var currentFeature = "";
    var currentPos = "";
    var currentNeg = "";
    var currentNf = "";
    var state = "";
    var foundStoriesCount = 0;

    lines.forEach(line => {
        var trimmed = line.trim();
        if (trimmed.startsWith("PROYECTO:")) {
            var currentProject = trimmed.replace("PROYECTO:", "").trim();
            document.getElementById('atdd-project').value = currentProject;
        } else if (trimmed.startsWith("ÉPICA:")) {
            currentEpic = trimmed.replace("ÉPICA:", "").trim();
        } else if (trimmed.startsWith("NOMBRE:")) {
            currentName = trimmed.replace("NOMBRE:", "").trim();
        } else if (trimmed.startsWith("HISTORIA DE USUARIO")) {
            state = "FEATURE";
            currentFeature = "";
        } else if (trimmed.startsWith("CRITERIO POSITIVO:")) {
            state = "POS";
            currentPos = "";
        } else if (trimmed.startsWith("CRITERIO NEGATIVO:")) {
            state = "NEG";
            currentNeg = "";
        } else if (trimmed.startsWith("REQUISITO NO FUNCIONAL:")) {
            state = "NF";
            currentNf = "";
        } else if (trimmed.startsWith("----------------------------------------------------") || trimmed.startsWith("[HISTORIA #")) {
            if (currentName || currentFeature) {
                addStoryForm(currentEpic, currentName, currentFeature, currentPos, currentNeg, currentNf);
                foundStoriesCount++;
                currentEpic = ""; currentName = ""; currentFeature = ""; currentPos = ""; currentNeg = ""; currentNf = "";
            }
            state = "";
        } else {
            if (state === "FEATURE") currentFeature += (currentFeature ? "\n" : "") + line;
            else if (state === "POS") currentPos += (currentPos ? "\n" : "") + line;
            else if (state === "NEG") currentNeg += (currentNeg ? "\n" : "") + line;
            else if (state === "NF") currentNf += (currentNf ? "\n" : "") + line;
        }
    });

    if (currentName || currentFeature) {
        addStoryForm(currentEpic, currentName, currentFeature, currentPos, currentNeg, currentNf);
        foundStoriesCount++;
    }

    if (foundStoriesCount > 0) {
        alert(`¡Se importaron exitosamente ${foundStoriesCount} historia(s) de usuario desde el archivo!`);
    } else {
        alert("No se pudieron reconocer historias estructuradas en el archivo.");
    }
}

function escapeXML(str) {
    if (!str) return '';
    return str.toString().replace(/[&<>'"']/g, function (match) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&apos;'
        }[match];
    });
}

function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, function(t) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[t] || t;
    });
}

window.scrollToStory = function(cardId) {
    var card = document.getElementById(cardId);
    if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        var originalBg = card.style.backgroundColor || '#fdfefe';
        card.style.transition = 'background-color 0.5s ease';
        card.style.backgroundColor = '#fff3cd'; // Destello amarillo
        setTimeout(() => {
            card.style.backgroundColor = originalBg;
        }, 1500);
    }
// ==========================================
// EXPORTAR E IMPORTAR PROYECTO ATDD (JSON)
// ==========================================

function exportAtddProjectJSON() {
    // Si no existe un campo de proyecto global en ATDD, asignamos un nombre genérico
    var projectName = "Proyecto_ATDD";
    var cards = document.querySelectorAll('.story-set');

    if (cards.length === 0) {
        alert("⚠️ No hay historias de usuario para exportar.");
        return;
    }

    var projectData = {
        projectName: projectName,
        exportDate: new Date().toISOString(),
        stories: []
    };

    cards.forEach(function(card) {
        var idSuffix = card.id.split('-').pop();
        
        // Se buscan las clases estándar de ATDD para recolectar los datos
        var epic = card.querySelector('.hu-epic') ? card.querySelector('.hu-epic').value.trim() : "";
        var name = card.querySelector('.hu-name') ? card.querySelector('.hu-name').value.trim() : "";
        var feature = card.querySelector('.hu-feature') ? card.querySelector('.hu-feature').value.trim() : "";
        var pos = card.querySelector('.hu-pos') ? card.querySelector('.hu-pos').value.trim() : "";
        var neg = card.querySelector('.hu-neg') ? card.querySelector('.hu-neg').value.trim() : "";
        var nf = card.querySelector('.hu-nf') ? card.querySelector('.hu-nf').value.trim() : "";

        // Si los campos se llaman de otra forma en tu versión, usamos los IDs generados
        if (!epic && document.getElementById('st-epic-' + idSuffix)) epic = document.getElementById('st-epic-' + idSuffix).value.trim();
        if (!name && document.getElementById('st-name-' + idSuffix)) name = document.getElementById('st-name-' + idSuffix).value.trim();
        if (!feature && document.getElementById('st-desc-' + idSuffix)) feature = document.getElementById('st-desc-' + idSuffix).value.trim();
        if (!pos && document.getElementById('st-criteria-' + idSuffix)) pos = document.getElementById('st-criteria-' + idSuffix).value.trim();

        projectData.stories.push({
            epic: epic,
            name: name,
            feature: feature,
            pos: pos,
            neg: neg,
            nf: nf
        });
    });

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(projectData, null, 4));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", projectData.projectName + ".json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importAtddProjectJSON(event) {
    var file = event.target.files[0];
    if (!file) return;

    var reader = new FileReader();
    reader.onload = function(e) {
        try {
            var data = JSON.parse(e.target.result);
            if (!data.stories || !Array.isArray(data.stories)) throw new Error("Formato inválido.");

            var container = document.getElementById('stories-container');
            if (container) container.innerHTML = "";
            
            if (typeof storyCount !== 'undefined') storyCount = 0; 

            data.stories.forEach(function(story) {
                // Genera la tarjeta usando tu función existente
                if(typeof addStoryForm === 'function') {
                    addStoryForm();
                } else {
                    console.error("No se encontró la función addStoryForm()");
                    return;
                }
                
                var currentId = (typeof storyCount !== 'undefined') ? storyCount : document.querySelectorAll('.story-set').length;
                
                // Intenta llenar los campos por ID (como los mapeamos en requirements_engine)
                var epicEl = document.getElementById('st-epic-' + currentId);
                var nameEl = document.getElementById('st-name-' + currentId);
                var descEl = document.getElementById('st-desc-' + currentId);
                var posEl = document.getElementById('st-criteria-' + currentId); 
                
                if(epicEl) epicEl.value = story.epic || "";
                if(nameEl) nameEl.value = story.name || "";
                if(descEl) descEl.value = story.feature || "";
                if(posEl) posEl.value = story.pos || "";
                
                // Si la estructura DOM usa las clases hu-epic, hu-name, etc.
                var lastCard = container.lastElementChild;
                if(lastCard) {
                    var inEpic = lastCard.querySelector('.hu-epic');
                    var inName = lastCard.querySelector('.hu-name');
                    var inFeat = lastCard.querySelector('.hu-feature');
                    var inPos = lastCard.querySelector('.hu-pos');
                    var inNeg = lastCard.querySelector('.hu-neg');
                    var inNf = lastCard.querySelector('.hu-nf');
                    
                    if(inEpic && !inEpic.value) inEpic.value = story.epic || "";
                    if(inName && !inName.value) inName.value = story.name || "";
                    if(inFeat && !inFeat.value) inFeat.value = story.feature || "";
                    if(inPos && !inPos.value) inPos.value = story.pos || "";
                    if(inNeg && !inNeg.value) inNeg.value = story.neg || "";
                    if(inNf && !inNf.value) inNf.value = story.nf || "";
                }
            });

            alert("✅ Proyecto importado exitosamente con " + data.stories.length + " historia(s).");
        } catch (error) {
            alert("⚠️ Error al importar: " + error.message);
        }
        event.target.value = ""; 
    };
    reader.readAsText(file);
}
};
