// --- 5. EXPORTAR SCRIPT WINDOWS Y DOCUMENTO WORD / JSON ---
function exportProjectFoldersAndFiles() {
    var project = (document.getElementById('nar-project') ? document.getElementById('nar-project').value.trim() : "") || "Proyecto_SRS";
    var safeProj = project.replace(/[^a-zA-Z0-9_-]/g, "_");
    var items = collectAllNarratives();

    if (items.length === 0) {
        alert("⚠️ Agrega al menos un requerimiento funcional antes de exportar.");
        return;
    }

    // 1. Simulación de Documento Word (TXT)
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

    // 2. Simulación de Script BAT (Carpetas)
    var scriptContent = "@echo off\n";
    scriptContent += "echo Generando Estructura de Directorios SRS para " + project + "...\n";
    scriptContent += "mkdir \"Documentacion_SRS\"\n";
    scriptContent += "mkdir \"Evidencias_QA\"\n";
    items.forEach(function(req) {
        var cleanId = req.reqId.replace(/[^a-zA-Z0-9_-]/g, "_") || "REQ";
        scriptContent += "mkdir \"Documentacion_SRS\\" + cleanId + "\"\n";
    });
    scriptContent += "echo Estructura creada con exito.\n";
    scriptContent += "pause\n";

    var scriptBlob = new Blob([scriptContent], { type: 'text/plain;charset=utf-8' });
    var scriptLink = document.createElement('a');
    scriptLink.href = window.URL.createObjectURL(scriptBlob);
    scriptLink.download = "Estructura_Carpetas_SRS_" + safeProj + ".bat";
    document.body.appendChild(scriptLink);
    scriptLink.click();
    scriptLink.remove();
}

// CAMBIO DE NOMBRE: De exportProjectJSON a exportNarrativeProjectJSON
function exportNarrativeProjectJSON() {
    var project = (document.getElementById('nar-project') ? document.getElementById('nar-project').value.trim() : "") || "Proyecto_SRS";
    var data = {
        project: project,
        objectivesCatalog: (typeof window.loadedBusinessObjectives !== 'undefined') ? window.loadedBusinessObjectives : [],
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

// CAMBIO DE NOMBRE: De importProjectJSON a importNarrativeProjectJSON
function importNarrativeProjectJSON(event) {
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
                window.loadedBusinessObjectives = data.objectivesCatalog;
            }
            var container = document.getElementById('narratives-container');
            if (container) container.innerHTML = '';
            
            // Reiniciar contador
            if (typeof narrativeCount !== 'undefined') {
                narrativeCount = 0;
            } else if (typeof narrativeCounter !== 'undefined') {
                narrativeCounter = 0;
            }

            var reqs = data.requirements || [];
            for (var i = reqs.length - 1; i >= 0; i--) { // En reversa para mantener el orden (prepend)
                addNarrativeForm(reqs[i]);
            }
            if (reqs.length === 0) {
                addNarrativeForm();
            }
            alert("✅ Proyecto SRS importado correctamente (" + reqs.length + " requerimientos).");
        } catch (err) {
            console.error(err);
            alert("⚠️ El archivo JSON seleccionado no tiene un formato válido para SRS.");
        }
        event.target.value = ""; // Resetear input
    };
    reader.readAsText(file, "UTF-8");
}
