var testingQuestions = [
    // ==========================================
    // CAPÍTULO 1: Fundamentos de la Prueba (30 preguntas K1/K2)
    // ==========================================
    {
        id: 101, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "Según la sección 1.2.3, ¿cuál es la relación conceptual exacta entre error humano, defecto y falla?",
        options: [
            "Las fallas producen errores humanos y causas raíz directamente en el código fuente.",
            "Un error humano introduce un defecto, el cual puede manifestarse como una falla si se ejecuta el software.",
            "Error, defecto y falla son términos sinónimos intercambiables en la gestión de calidad.",
            "Un defecto estructural siempre causa una falla catastrófica sin necesidad de ser ejecutado."
        ],
        correct: 1,
        explanation: "El error humano introduce un defecto (bug) estático en el código o documento, y si ese defecto se ejecuta, puede provocar una falla observable en el comportamiento del sistema.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.2.3",
        summary: ["Error humano ➔ Introduce Defecto ➔ Se ejecuta ➔ Provoca Falla."]
    },
    {
        id: 102, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué establece el principio de prueba denominado 'Falacia de la ausencia de defectos'?",
        options: [
            "Corregir todos los bugs reportados garantiza automáticamente el éxito comercial y la satisfacción del cliente.",
            "Un sistema libre de defectos detectados puede seguir siendo inutilizable si no satisface las necesidades del usuario.",
            "Los defectos nunca se agrupan en módulos específicos del software.",
            "Las pruebas exhaustivas son posibles si se cuenta con suficientes recursos automatizados."
        ],
        correct: 1,
        explanation: "La falacia de la ausencia de defectos advierte que encontrar y corregir defectos no sirve de nada si el sistema construido no cumple con las expectativas reales del negocio.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.3",
        summary: ["Falacia de ausencia de defectos: Un software sin bugs puede fracasar si no satisface expectativas."]
    },
    {
        id: 103, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cuál es el beneficio principal de introducir la independencia de las pruebas en un proyecto?",
        options: [
            "Reducir la comunicación entre los equipos de desarrollo y negocio para acelerar la entrega.",
            "Detectar diferentes tipos de defectos gracias a una perspectiva objetiva y libre del sesgo de confirmación.",
            "Evitar por completo la necesidad de realizar pruebas unitarias automatizadas.",
            "Eliminar la necesidad de redactar reportes de incidentes formales."
        ],
        correct: 1,
        explanation: "Los evaluadores independientes aportan una visión imparcial, lo que ayuda a mitigar el sesgo de confirmación inherente a los desarrolladores.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5.3",
        summary: ["Independencia de pruebas: Mitiga el sesgo de confirmación y aporta objetividad."]
    },
    {
        id: 104, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cuál es un objetivo típico de las actividades de prueba en el ciclo de vida del software?",
        options: [
            "Demostrar formalmente que el software está 100% libre de errores antes de salir a producción.",
            "Evaluar productos de trabajo (requisitos, diseño, código) para detectar defectos y reducir el riesgo de fallas.",
            "Asignar responsabilidades legales a los desarrolladores cuando el software falle.",
            "Sustituir por completo las revisiones estáticas de documentación."
        ],
        correct: 1,
        explanation: "Las pruebas buscan evaluar la calidad y encontrar defectos de forma preventiva para mitigar riesgos operativos.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1.1",
        summary: ["Objetivo de la prueba: Evaluar calidad, encontrar defectos y reducir riesgos."]
    },
    {
        id: 105, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cómo se diferencian conceptualmente las pruebas (testing) de la depuración (debugging)?",
        options: [
            "Las pruebas revelan fallas causadas por defectos; la depuración localiza, analiza y repara la causa raíz de dichos defectos.",
            "Las pruebas se realizan exclusivamente en producción y la depuración en entornos de desarrollo.",
            "La depuración es una actividad ejecutada únicamente por los analistas de negocio.",
            "No existe diferencia conceptual; ambos términos son sinónimos técnicos."
        ],
        correct: 0,
        explanation: "Las pruebas muestran las fallas de comportamiento; la depuración es el proceso de ingeniería de software para corregir el código fuente.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1.2",
        summary: ["Pruebas muestran fallas ➔ Depuración repara la causa raíz."]
    },
    {
        id: 106, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "En el contexto de los principios de prueba, ¿qué postula el principio 'Los defectos se agrupan' (Clustering)?",
        options: [
            "Que la gran mayoría de los defectos detectados se concentran en un número reducido de módulos del sistema (Principio de Pareto).",
            "Que todos los componentes de software tienen exactamente la misma densidad de errores.",
            "Que los defectos tienden a desaparecer solos si se dejan sin corregir durante varias semanas.",
            "Que los errores humanos ocurren únicamente en la fase de codificación y nunca en el análisis."
        ],
        correct: 0,
        explanation: "Aplicando el principio de Pareto, un pequeño porcentaje de módulos suele concentrar la mayor cantidad de fallas.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.3",
        summary: ["Agrupamiento de defectos: Principio de Pareto aplicado a módulos complejos."]
    },
    {
        id: 107, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Por qué el principio de prueba 'Las pruebas exhaustivas son imposibles' es una realidad en la ingeniería de software?",
        options: [
            "Porque probar todas las combinaciones de entradas y precondiciones requiere un esfuerzo y tiempo inviables, excepto para programas muy pequeños.",
            "Porque las herramientas de automatización moderna bloquean la ejecución masiva de casos de prueba.",
            "Porque los lenguajes de programación actuales prohíben la ejecución de más de 100 pruebas diarias.",
            "Porque las normas ISO impiden realizar más de tres pruebas por módulo."
        ],
        correct: 0,
        explanation: "La combinatoria de datos y estados hace que probar todo sea inalcanzable, exigiendo priorización basada en riesgos.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.3",
        summary: ["Pruebas exhaustivas imposibles: Requiere priorización por análisis de riesgos."]
    },
    {
        id: 108, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué comprende el concepto de 'Testware' dentro de los productos de trabajo de prueba?",
        options: [
            "Los artefactos producidos durante el proceso de prueba para apoyar el diseño, ejecución y evaluación (planes, casos, scripts, datos).",
            "El hardware de servidores físicos dedicado exclusivamente a hospedar bases de datos.",
            "Los manuales comerciales impresos para los usuarios finales del sistema.",
            "El presupuesto financiero anual aprobado por la dirección ejecutiva."
        ],
        correct: 0,
        explanation: "El testware engloba todo el conjunto de productos de trabajo creados para respaldar la actividad de testing.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.4.3",
        summary: ["Testware: Planes, casos de prueba, scripts de automatización y datos."]
    },
    {
        id: 109, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿En qué consiste el enfoque de 'Equipo Completo' (Whole Team Approach) en proyectos ágiles?",
        options: [
            "En que cualquier miembro del equipo con las habilidades adecuadas puede realizar tareas de prueba, y todos comparten la responsabilidad de la calidad.",
            "En que los evaluadores trabajan aislados del resto del equipo hasta la fase final de entrega.",
            "En que los desarrolladores tienen prohibido ejecutar pruebas unitarias.",
            "En que el cliente final asume la responsabilidad total de encontrar los bugs."
        ],
        correct: 0,
        explanation: "El enfoque de equipo completo fomenta la colaboración interdisciplinaria y la corresponsabilidad en la calidad del producto.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5.2",
        summary: ["Equipo completo: Corresponsabilidad y colaboración estrecha por la calidad."]
    },
    {
        id: 110, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué combinación de habilidades y mentalidad caracteriza a un evaluador (tester) profesional?",
        options: [
            "Pensamiento crítico, curiosidad profesional, atención rigurosa al detalle y excelentes habilidades de comunicación de riesgos.",
            "Habilidad exclusiva para escribir código en lenguajes de bajo nivel como ensamblador.",
            "Conocimiento profundo de contabilidad fiscal y auditoría financiera.",
            "Experiencia en diseño de redes de telecomunicaciones por satélite."
        ],
        correct: 0,
        explanation: "Un buen tester combina rigor analítico, escepticismo constructivo y empatía comunicativa para reportar riesgos.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5.1",
        summary: ["Habilidades del tester: Pensamiento crítico, curiosidad y comunicación de riesgos."]
    },
    {
        id: 111, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cuál es el propósito fundamental de la trazabilidad entre los requisitos de usuario y los casos de prueba?",
        options: [
            "Permitir evaluar el impacto de los cambios y comprobar que todos los requisitos han sido cubiertos por las pruebas.",
            "Sustituir la necesidad de ejecutar pruebas de regresión en entornos de desarrollo.",
            "Garantizar que los desarrolladores no modifiquen el código sin autorización de gerencia.",
            "Calcular el tiempo exacto que tarda un tester en redactar un caso de prueba."
        ],
        correct: 0,
        explanation: "La trazabilidad asegura la cobertura de los requisitos y facilita el análisis de impacto ante modificaciones.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.4",
        summary: ["Trazabilidad: Cobertura de requisitos y análisis de impacto."]
    },
    {
        id: 112, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Por qué el principio de prueba 'Las pruebas son contextuales' es crucial para un equipo de calidad?",
        options: [
            "Porque las pruebas deben diseñarse y ejecutarse de manera diferente dependiendo de la naturaleza del dominio, riesgos y tipo de aplicación (ej. bancaria vs. videojuegos).",
            "Porque las pruebas cambian de idioma automáticamente según el país donde se despliegue el software.",
            "Porque los casos de prueba no pueden reutilizarse bajo ninguna circunstancia en otros proyectos.",
            "Porque obliga a que las pruebas se realicen únicamente en fines de semana."
        ],
        correct: 0,
        explanation: "Un sistema crítico médico requiere un rigor de pruebas infinitamente mayor que una aplicación de entretenimiento informal.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.3",
        summary: ["Pruebas contextuales: El enfoque y rigor varían según el dominio y criticidad del sistema."]
    },
    {
        id: 113, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué diferencia existe entre un producto de trabajo de prueba estático y uno dinámico?",
        options: [
            "Los estáticos se evalúan sin ejecutar código (revisiones/documentos); los dinámicos requieren la ejecución del software en un entorno.",
            "Los estáticos se usan en cascada y los dinámicos en ágil exclusivamente.",
            "Los estáticos son creados por gerentes y los dinámicos por pasantes.",
            "No hay diferencia; ambos términos significan lo mismo en la norma."
        ],
        correct: 0,
        explanation: "La prueba estática analiza artefactos de manera pasiva; la dinámica interactúa ejecutando el programa.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1.2",
        summary: ["Estáticas (sin ejecución) vs Dinámicas (con ejecución de software)."]
    },
    {
        id: 114, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cuál es la principal razón por la cual un desarrollador no debería probar su propio código exclusivamente?",
        options: [
            "Por el sesgo psicológico y de confirmación, ya que es más difícil que detecte sus propios errores de lógica o suposiciones erróneas.",
            "Porque las normas ISO prohíben legalmente que los creadores ejecuten pruebas unitarias.",
            "Porque los desarrolladores cobran tarifas más altas por hora al hacer testing.",
            "Porque el entorno de desarrollo bloquea la ejecución de pruebas funcionales."
        ],
        correct: 0,
        explanation: "El autor de un código tiende a dar por sentado que funciona como él pensó, pasando por alto casos límite.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5.3",
        summary: ["Sesgo de confirmación del autor: Dificultad para hallar errores propios."]
    },
    {
        id: 115, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué papel juega la retroalimentación (feedback) temprana en el proceso de pruebas?",
        options: [
            "Permite corregir malentendidos de requisitos y defectos antes de que se propaguen, reduciendo costos.",
            "Retrasa la entrega del software y aumenta los costos administrativos.",
            "Sirve únicamente para evaluar el rendimiento individual de los programadores.",
            "Sustituye la necesidad de realizar pruebas de aceptación de usuario."
        ],
        correct: 0,
        explanation: "El feedback temprano en fases de requisitos y diseño previene errores costosos en etapas avanzadas.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1.1",
        summary: ["Feedback temprano: Prevención oportuna y reducción de costos."]
    },
    {
        id: 116, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué establece el principio de prueba 'La paradoja del pesticida'?",
        options: [
            "Si se repiten exactamente los mismos casos de prueba una y otra vez, con el tiempo esos tests dejarán de encontrar nuevos defectos.",
            "Los pesticidas de software eliminan los bugs automáticamente si se ejecutan diariamente.",
            "Los casos de prueba automatizados mejoran su efectividad de forma exponencial con los años sin mantenimiento.",
            "Los errores humanos disminuyen a cero si se aplica el mismo guion de pruebas."
        ],
        correct: 0,
        explanation: "Las aplicaciones evolucionan y el sistema se vuelve inmune a las mismas pruebas repetitivas, exigiendo revisión y actualización de casos.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.3",
        summary: ["Paradoja del pesticida: Las pruebas repetitivas pierden eficacia; requieren actualización constante."]
    },
    {
        id: 117, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "En el contexto de la calidad del software, ¿cómo se define la 'Calidad' (Quality)?",
        options: [
            "El grado en que un componente, sistema o proceso satisface las necesidades especificadas y/o las expectativas de sus usuarios y clientes.",
            "La cantidad de líneas de código fuente escritas sin errores de compilación.",
            "El cumplimiento estricto del presupuesto financiero asignado por la gerencia.",
            "La velocidad de procesamiento del microprocesador principal del servidor."
        ],
        correct: 0,
        explanation: "La calidad abarca tanto la conformidad con los requisitos (requisitos especificados) como la satisfacción de expectativas.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1.1",
        summary: ["Calidad: Conformidad con requisitos y satisfacción de expectativas del cliente."]
    },
    {
        id: 118, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué implica la realización de pruebas de aceptación desde la perspectiva del negocio?",
        options: [
            "Establecer la confianza en que el sistema cumple con los criterios de aceptación y es apto para su uso operativo.",
            "Comprobar que las librerías de terceros estén actualizadas en los repositorios de Git.",
            "Verificar el cifrado de contraseñas mediante algoritmos hash de bajo nivel.",
            "Asegurar que los servidores físicos cumplan con las normas de temperatura ambiental."
        ],
        correct: 0,
        explanation: "Las pruebas de aceptación buscan dar confianza al negocio de que el software funciona como se espera en su entorno operativo real.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1.1",
        summary: ["Pruebas de aceptación: Establecen confianza y aptitud operativa para el negocio."]
    },
    {
        id: 119, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué actividades componen el proceso general de pruebas según el estándar ISTQB?",
        options: [
            "Planificación, seguimiento y control, análisis, diseño, implementación, ejecución y evaluación de la salida.",
            "Codificación, compilación, depuración y despliegue a producción.",
            "Auditoría fiscal, cálculo de nómina y contratación de personal.",
            "Diseño gráfico de logotipos y maquetación de redes sociales."
        ],
        correct: 0,
        explanation: "El proceso de pruebas es un ciclo estructurado que abarca desde la planificación hasta la evaluación de resultados.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.4.1",
        summary: ["Proceso de pruebas: Planificación, análisis, diseño, implementación, ejecución y evaluación."]
    },
    {
        id: 120, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cuál es el propósito del informe de conclusión de pruebas (Test Summary Report)?",
        options: [
            "Resumir las actividades y resultados ejecutados, evaluando si se cumplieron los objetivos y criterios de salida previstos.",
            "Facturar los servicios prestados por la consultora externa al cliente final.",
            "Evaluar el desempeño individual y el salario de cada desarrollador.",
            "Borrar permanentemente el testware obsoleto de los servidores."
        ],
        correct: 0,
        explanation: "El informe de conclusión provee a los stakeholders una visión consolidada del estado de calidad y riesgos remanentes.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.4.3",
        summary: ["Informe de conclusión: Resumen ejecutivo del estado de calidad, cobertura y riesgos."]
    },
    {
        id: 121, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Por qué es importante la colaboración estrecha entre probadores y analistas de negocio desde las fases iniciales?",
        options: [
            "Para aclarar ambigüedades en los requisitos, facilitando la derivación de casos de prueba precisos y evitando defectos de diseño.",
            "Para obligar a los analistas de negocio a aprender lenguajes de programación orientados a objetos.",
            "Para que los probadores redacten los contratos legales de compraventa de software.",
            "Para eliminar por completo la necesidad de realizar reuniones de seguimiento."
        ],
        correct: 0,
        explanation: "Aclarar requisitos tempranamente previene malentendidos y alinea los criterios de aceptación de negocio.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5.2",
        summary: ["Colaboración temprana: Clarifica requisitos y previene defectos de interpretación."]
    },
    {
        id: 122, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué rol desempeña la gestión de configuración en las actividades de prueba?",
        options: [
            "Asegurar la identificación, control y trazabilidad de las versiones del software, entorno y testware utilizado.",
            "Configurar físicamente los routers y switches de la red corporativa.",
            "Establecer las políticas de contraseñas seguras para los usuarios finales.",
            "Actualizar el sistema operativo de las computadoras personales."
        ],
        correct: 0,
        explanation: "Garantiza que se pruebe exactamente la versión correcta de código vinculada a su respectivo script de prueba.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.4.3",
        summary: ["Gestión de configuración: Controla versiones y trazabilidad de testware y código."]
    },
    {
        id: 123, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué implica el escepticismo profesional en la mentalidad de un evaluador de calidad?",
        options: [
            "Cuestionar constructivamente los supuestos, verificar rigurosamente los resultados y no dar por sentado que el software funciona sin evidencia.",
            "Desconfiar sistemáticamente de todos los compañeros de trabajo y rechazar cualquier código.",
            "Asumir que el sistema siempre tendrá fallas críticas imposibles de resolver.",
            "Evitar reportar defectos menores para no retrasar el cronograma del sprint."
        ],
        correct: 0,
        explanation: "El escepticismo constructivo impulsa a comprobar los hechos mediante evidencias objetivas de prueba.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5.1",
        summary: ["Escepticismo profesional: Verificación rigurosa basada en evidencias objetivas."]
    },
    {
        id: 124, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cuál es la diferencia principal entre verificar un requisito y validar un requisito?",
        options: [
            "Verificar comprueba si el sistema cumple con la especificación (el qué); validar comprueba si el sistema satisface las necesidades reales de uso del cliente.",
            "Verificar se hace en producción y validar en entornos de desarrollo.",
            "Verificar es una tarea de negocio y validar es una tarea exclusiva de programación.",
            "No hay diferencia operativa; ambos términos son sinónimos exactos."
        ],
        correct: 0,
        explanation: "Verificación = ¿Construimos el producto correctamente? Validación = ¿Construimos el producto correcto?",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1.1",
        summary: ["Verificación (cumplimiento de especificación) vs Validación (satisfacción de necesidades de uso)."]
    },
    {
        id: 125, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué factores determinan el alcance y la profundidad del esfuerzo de pruebas en un proyecto?",
        options: [
            "Los riesgos del proyecto y del producto, el presupuesto, el tiempo disponible, la complejidad técnica y los requisitos normativos.",
            "La cantidad de computadoras portátiles disponibles en la oficina.",
            "El color corporativo elegido para la interfaz de usuario.",
            "El número de directores ejecutivos que tenga la empresa."
        ],
        correct: 0,
        explanation: "El análisis de riesgos y las restricciones de recursos guían el alcance y priorización de las pruebas.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.3",
        summary: ["Alcance de pruebas: Gobernado por riesgos, presupuesto, plazos y normativas."]
    },
    {
        id: 126, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Por qué es fundamental documentar los resultados reales obtenidos durante la ejecución de las pruebas?",
        options: [
            "Para proporcionar evidencia objetiva del estado de calidad, facilitar la depuración y permitir la reproducibilidad de incidentes.",
            "Para cumplir con un requisito burocrático sin utilidad práctica real.",
            "Para justificar el despido de los desarrolladores cuando ocurra una falla.",
            "Para generar gráficos decorativos en los informes gerenciales trimestrales."
        ],
        correct: 0,
        explanation: "Los registros de prueba ofrecen evidencias claras que sustentan los reportes de defectos y auditorías.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.4.3",
        summary: ["Resultados documentados: Evidencia objetiva para diagnóstico y auditoría."]
    },
    {
        id: 127, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué papel desempeñan los criterios de salida (Exit Criteria / Definition of Done) en el proceso de pruebas?",
        options: [
            "Definir las condiciones que deben cumplirse para declarar formalmente finalizada una actividad o nivel de prueba.",
            "Establecer la hora en que los evaluadores pueden retirarse de la oficina por la tarde.",
            "Indicar el momento en que se debe apagar físicamente el servidor principal.",
            "Garantizar que el presupuesto del proyecto se reduzca a cero."
        ],
        correct: 0,
        explanation: "Los criterios de salida determinan cuándo se concluyen las pruebas (ej. cobertura alcanzada, sin bugs críticos abiertos).",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.4.2",
        summary: ["Criterios de salida: Condiciones que regulan la finalización formal de las pruebas."]
    },
    {
        id: 128, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué significa que una prueba sea 'efectiva' en el contexto de control de calidad?",
        options: [
            "Que logra su objetivo principal, es decir, descubrir defectos o verificar correctamente el cumplimiento de los requisitos.",
            "Que se ejecuta en menos de un segundo utilizando procesadores cuánticos.",
            "Que no requiere la intervención de ningún ser humano durante su ejecución.",
            "Que su costo de desarrollo es exactamente igual a cero."
        ],
        correct: 0,
        explanation: "La efectividad mide la capacidad de la prueba para cumplir su propósito primordial (hallar fallas y verificar calidad).",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1.1",
        summary: ["Efectividad de la prueba: Capacidad de alcanzar el objetivo de descubrir defectos y verificar calidad."]
    },
    {
        id: 129, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué implica la 'eficiencia' en las actividades de prueba?",
        options: [
            "Optimizar el uso de recursos (tiempo, esfuerzo y dinero) para obtener los mejores resultados posibles de calidad.",
            "Ejecutar un billón de casos de prueba aleatorios sin importar el consumo eléctrico.",
            "Reducir la cantidad de código fuente de la aplicación a su mínima expresión.",
            "Eliminar todas las reuniones de coordinación entre equipos."
        ],
        correct: 0,
        explanation: "La eficiencia busca el máximo rendimiento y cobertura con la menor inversión de recursos.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1.1",
        summary: ["Eficiencia en pruebas: Lograr máxima calidad optimizando tiempo, esfuerzo y recursos."]
    },
    {
        id: 130, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "En síntesis, ¿por qué es indispensable integrar el testing desde las primeras etapas del desarrollo de software?",
        options: [
            "Porque previene la introducción de defectos en cascada, reduce costos exponenciales de corrección y asegura la alineación con el negocio.",
            "Porque las leyes internacionales exigen que las pruebas duren más tiempo que la programación.",
            "Porque los desarrolladores se niegan a escribir código sin la supervisión constante de QA.",
            "Porque acelera la obsolescencia tecnológica de los sistemas legados."
        ],
        correct: 0,
        explanation: "La integración temprana (Shift-Left) es el pilar moderno para mitigar riesgos económicos y técnicos en los proyectos.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1.1",
        summary: ["Integración temprana: Mitigación de riesgos, prevención de defectos y ahorro exponencial."]
    },

    // ==========================================
    // CAPÍTULO 2: Pruebas a lo largo del SDLC (30 preguntas K1/K2)
    // ==========================================
    {
        id: 201, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "En relación con los niveles de prueba (Sección 2.2.1), ¿cuál es el enfoque principal de las pruebas de integración de componentes?",
        options: [
            "Evaluar el código fuente aislado sin considerar bases de datos o servicios externos.",
            "Probar las interfaces y las interacciones entre los componentes de software integrados.",
            "Validar que el sistema completo cumpla con los requisitos operativos del cliente final en producción.",
            "Verificar únicamente la conformidad de los contratos legales firmados con el proveedor."
        ],
        correct: 1,
        explanation: "Las pruebas de integración de componentes se centran en verificar que los módulos o componentes que se comunican entre sí funcionen correctamente en conjunto.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.1",
        summary: ["Pruebas de integración de componentes: Evalúan interfaces e interacciones entre módulos."]
    },
    {
        id: 202, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué evalúan fundamentalmente las pruebas de aceptación del usuario (UAT) en el nivel de aceptación (Sección 2.2.1)?",
        options: [
            "La cobertura de ramas lógicas del compilador y la complejidad ciclomática del código.",
            "La idoneidad del sistema para su uso por parte de los usuarios de negocio o clientes, validando que cumpla con los requisitos operativos.",
            "La velocidad de transferencia de paquetes de red mediante protocolos TCP/IP de bajo nivel.",
            "La resistencia de los servidores físicos ante fallas eléctricas imprevistas."
        ],
        correct: 1,
        explanation: "Las UAT son ejecutadas por los usuarios de negocio o clientes para establecer la confianza y verificar que el software es apto para su operación real.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.1",
        summary: ["UAT (Aceptación de Usuario): Valida aptitud de uso y cumplimiento con los requerimientos del negocio."]
    },
    {
        id: 203, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cuál es el propósito operativo de las pruebas de regresión en cualquier nivel de prueba (Sección 2.2.3)?",
        options: [
            "Demostrar que el software nunca volverá a fallar bajo ninguna circunstancia futura.",
            "Verificar que los cambios realizados (correcciones de bugs o nuevas funcionalidades) no hayan introducido fallas en partes no modificadas del sistema.",
            "Sustituir por completo la necesidad de ejecutar pruebas de confirmación.",
            "Validar exclusivamente los requerimientos no funcionales de seguridad y cifrado."
        ],
        correct: 1,
        explanation: "Las pruebas de regresión buscan detectar efectos secundarios imprevistos derivados de cambios recientes en el código.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.3",
        summary: ["Pruebas de regresión: Detectan efectos colaterales en partes estables tras modificaciones."]
    },
    {
        id: 204, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿En qué consiste el enfoque de desarrollo guiado por pruebas de aceptación (ATDD) mencionado en el capítulo 2 y 4?",
        options: [
            "En escribir los casos de prueba de aceptación antes de implementar el código de negocio, basándose en los criterios de aceptación acordados.",
            "En automatizar pruebas al final del proyecto sin involucrar a los analistas de negocio.",
            "En delegar la creación de requerimientos exclusivamente al equipo de soporte técnico.",
            "En prohibir la ejecución de pruebas unitarias hasta que el despliegue a producción finalice."
        ],
        correct: 0,
        explanation: "ATDD alinea a negocio, desarrollo y pruebas definiendo los criterios de aceptación ejecutables antes de programar.",
        pageRef: "ISTQB v4.0, Cap. 2 / Cap. 4, Sec. 4.5",
        summary: ["ATDD: Definición de criterios y pruebas de aceptación antes de la codificación."]
    },
    {
        id: 205, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué caracteriza a los ciclos de vida del desarrollo de software iterativos e incrementales (como Scrum o Kanban) frente a los secuenciales tradicionales?",
        options: [
            "Impiden realizar cualquier tipo de prueba hasta que el proyecto entero esté terminado.",
            "Entregan incrementos de producto utilizables en ciclos cortos, permitiendo retroalimentación temprana y pruebas continuas.",
            "Eliminan la necesidad de contar con criterios de entrada y salida formales.",
            "Requieren que los analistas de calidad trabajen aislados del resto del equipo de desarrollo."
        ],
        correct: 1,
        explanation: "Los modelos ágiles iterativos facilitan el feedback constante y el desplazamiento hacia la izquierda (shift-left) natural de las pruebas.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.2",
        summary: ["SDLC Ágil: Iterativo e incremental; retroalimentación temprana y entregas continuas."]
    },
    {
        id: 206, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cuál de los siguientes es un activador (trigger) típico que da inicio a las pruebas de mantenimiento (Sección 2.3)?",
        options: [
            "La planificación inicial del proyecto antes de escribir cualquier línea de requerimiento.",
            "Modificaciones correctivas o evolutivas, migración de plataforma o la retirada (decommissioning) de un sistema.",
            "La contratación de nuevos integrantes para el equipo de gestión de calidad.",
            "La realización de una auditoría financiera externa anual."
        ],
        correct: 1,
        explanation: "El mantenimiento del software se activa cuando se modifica, se migra a otro entorno o se planifica su baja definitiva.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.3",
        summary: ["Pruebas de mantenimiento: Activadas por cambios evolutivos, correcciones, migraciones o retirada."]
    },
    {
        id: 207, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué objetivo persiguen las pruebas de integración de sistemas (System Integration Testing)?",
        options: [
            "Probar las interfaces entre los componentes de un mismo módulo local.",
            "Verificar las interacciones y el intercambio de datos entre diferentes sistemas, paquetes de software o servicios externos.",
            "Sustituir las pruebas de aceptación del usuario en entornos de desarrollo.",
            "Evaluar la sintaxis de los scripts individuales creados por los desarrolladores junior."
        ],
        correct: 1,
        explanation: "La integración de sistemas valida que sistemas independientes cooperen e intercambien información correctamente.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.1",
        summary: ["Integración de sistemas: Valida la interoperabilidad entre diferentes sistemas o servicios."]
    },
    {
        id: 208, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Por qué se consideran fundamentales las pruebas tempranas (Early Testing) en el ciclo de vida del software?",
        options: [
            "Porque reducen drásticamente el costo y el esfuerzo de corregir defectos antes de que estos se propaguen a fases posteriores.",
            "Porque permiten cerrar el proyecto de desarrollo en la mitad del tiempo estimado.",
            "Porque eliminan por completo la necesidad de redactar casos de prueba formales.",
            "Porque garantizan que los desarrolladores no cometan errores de sintaxis."
        ],
        correct: 0,
        explanation: "Encontrar y reparar un defecto en la fase de requisitos es significativamente más económico que hacerlo en pruebas de sistema o producción.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.5",
        summary: ["Pruebas tempranas (Shift-Left): Previenen propagación de defectos y reducen costos."]
    },
    {
        id: 209, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué papel juega la retroalimentación (feedback) en los ciclos de vida ágiles?",
        options: [
            "Es irrelevante, ya que el plan inicial debe cumplirse sin modificaciones bajo ninguna circunstancia.",
            "Permite adaptar el producto de manera oportuna, mejorar los procesos mediante retrospectivas y asegurar la alineación con las necesidades del cliente.",
            "Sirve únicamente para evaluar el desempeño individual de los desarrolladores.",
            "Retrasa las entregas y encarece los costos operativos del proyecto."
        ],
        correct: 1,
        explanation: "La retroalimentación continua es el núcleo de la agilidad para corregir el rumbo y garantizar calidad adaptativa.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.6",
        summary: ["Retroalimentación: Impulsa la adaptación oportuna y la mejora continua en ágil."]
    },
    {
        id: 210, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "En el contexto de la colaboración entre desarrolladores y evaluadores, ¿cuál es una práctica recomendada en el modelo V o en SDLC híbridos?",
        options: [
            "Trabajar de forma completamente aislada para evitar conflictos de criterios.",
            "Planificar las actividades de prueba en paralelo con las fases de desarrollo correspondientes (ej. pruebas de sistema planificadas durante el diseño del sistema).",
            "Esperar a que el software esté completamente desplegado en producción para diseñar los casos de prueba.",
            "Dejar que el cliente final escriba todo el código de automatización."
        ],
        correct: 1,
        explanation: "La planificación y diseño de pruebas en paralelo con el desarrollo asegura que las bases de prueba estén listas oportunamente.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.1",
        summary: ["Pruebas en paralelo al desarrollo: Asegura preparación oportuna de casos y testware."]
    },
    {
        id: 211, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cuál es el objetivo principal de las pruebas alfa y beta dentro de las pruebas de aceptación?",
        options: [
            "Evaluar el software en entornos reales o simulados por usuarios potenciales antes de su lanzamiento comercial masivo.",
            "Comprobar la sintaxis de las sentencias del compilador en las computadoras de los desarrolladores.",
            "Sustituir por completo la ejecución de pruebas unitarias y de integración.",
            "Garantizar que el código fuente no exceda las 10,000 líneas de longitud."
        ],
        correct: 0,
        explanation: "Las pruebas alfa (en sitio del desarrollador) y beta (en sitio del cliente/usuario) buscan obtener retroalimentación operativa real.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.1",
        summary: ["Pruebas Alfa y Beta: Validación operativa con usuarios reales antes de la liberación."]
    },
    {
        id: 212, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué evalúan las pruebas de cumplimiento (Compliance Testing) dentro de las pruebas no funcionales?",
        options: [
            "Si el sistema cumple con las leyes, normativas, estándares de la industria o políticas contractuales aplicables.",
            "Si el servidor web es capaz de soportar 50,000 usuarios concurrentes sin retrasos.",
            "Si la interfaz gráfica es atractiva visualmente para los compradores en línea.",
            "Si los desarrolladores cumplieron con el horario laboral de la oficina."
        ],
        correct: 0,
        explanation: "El cumplimiento normativo y legal se valida mediante pruebas de conformidad o compliance.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.2",
        summary: ["Compliance testing: Valida adherencia a leyes, regulaciones y estándares."]
    },
    {
        id: 213, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué caracteriza a un modelo de ciclo de vida secuencial (ej. Modelo en Cascada) frente a uno iterativo?",
        options: [
            "Las fases del proyecto se ejecutan de manera consecutiva y sin solapamiento, concluyendo una antes de iniciar la siguiente.",
            "Permite entregar software funcional cada dos semanas con retroalimentación constante.",
            "Elimina la necesidad de redactar planes de prueba formales.",
            "Permite modificar los requisitos principales en cualquier momento sin costo."
        ],
        correct: 0,
        explanation: "Los modelos secuenciales exigen completar cada fase (requisitos, diseño, código, pruebas) de forma estricta antes de avanzar.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.1",
        summary: ["Modelos secuenciales: Fases estrictas y consecutivas sin solapamiento."]
    },
    {
        id: 214, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "En las pruebas de aceptación contractual y reglamentaria, ¿quién suele validar el cumplimiento del sistema?",
        options: [
            "Usuarios de usuario final, clientes, reguladores o auditores legales según corresponda.",
            "Exclusivamente los programadores junior del equipo backend.",
            "Los proveedores de hardware de red.",
            "El personal de limpieza de la compañía."
        ],
        correct: 0,
        explanation: "La aceptación reglamentaria la realizan entidades reguladoras o auditores para asegurar apego a leyes vigentes.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.1",
        summary: ["Aceptación contractual y reglamentaria: Validada por clientes, reguladores o auditores."]
    },
    {
        id: 215, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué rol desempeñan los dobles de prueba (test doubles, como stubs y mocks) en las pruebas de componentes?",
        options: [
            "Simular el comportamiento de componentes dependientes ausentes o aún no desarrollados para aislar la unidad evaluada.",
            "Reemplazar por completo la necesidad de escribir código de producción en el sistema.",
            "Aumentar el consumo de memoria RAM para medir la estabilidad del sistema operativo.",
            "Sustituir las bases de datos de producción por hojas de cálculo estáticas."
        ],
        correct: 0,
        explanation: "Los stubs y mocks permiten aislar el componente bajo prueba simulando respuestas de servicios o bases de datos externas.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.1",
        summary: ["Test doubles (stubs/mocks): Simulan dependencias externas para aislar pruebas unitarias."]
    },
    {
        id: 216, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cuál es el propósito principal de las pruebas de recuperación (Recovery Testing) en el nivel de sistema?",
        options: [
            "Verificar la capacidad del sistema para recuperarse de fallas de hardware, cortes de red o caídas de bases de datos.",
            "Recuperar contraseñas perdidas de los usuarios administradores mediante fuerza bruta.",
            "Restaurar archivos eliminados accidentalmente de la papelera de reciclaje de Windows.",
            "Acelerar la velocidad de arranque de las computadoras portátiles."
        ],
        correct: 0,
        explanation: "Valida la resiliencia del sistema ante fallos imprevistos y su capacidad de reinicio seguro.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.2",
        summary: ["Pruebas de recuperación: Evalúan la resiliencia y recuperación ante fallas del sistema."]
    },
    {
        id: 217, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué evalúan las pruebas de estrés (Stress Testing) dentro de las pruebas de rendimiento?",
        options: [
            "El comportamiento del sistema cuando se le somete a cargas que superan los límites operativos previstos o capacidad máxima.",
            "El nivel de ansiedad y estrés laboral del equipo de desarrollo durante los cierres de sprint.",
            "La resistencia física de los cables de fibra óptica ante tirones mecánicos.",
            "La capacidad de los analistas de calidad para resolver conflictos bajo presión."
        ],
        correct: 0,
        explanation: "El estrés testing lleva al límite la infraestructura para observar cómo colapsa y si se degrada de forma controlada.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.2",
        summary: ["Pruebas de estrés: Evalúan límites máximos de carga y puntos de ruptura del sistema."]
    },
    {
        id: 218, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué diferencia existe entre las pruebas de caja negra y las pruebas de caja blanca en relación con el SDLC?",
        options: [
            "Las de caja negra se basan en especificaciones externas sin ver el código; las de caja blanca se basan en la estructura interna del código fuente.",
            "Las de caja negra se ejecutan de noche y las de caja blanca de día.",
            "Las de caja negra solo aplican en metodologías ágiles y las de caja blanca en cascada.",
            "No existe diferencia; ambas analizan los diagramas de arquitectura de red."
        ],
        correct: 0,
        explanation: "Caja negra = Basadas en especificaciones (requisitos). Caja blanca = Basadas en la estructura de código.",
        pageRef: "ISTQB v4.0, Cap. 2 / Cap. 4",
        summary: ["Caja negra (especificaciones) vs Caja blanca (estructura interna de código)."]
    },
    {
        id: 219, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Por qué se realizan pruebas de migración cuando una empresa decide cambiar de plataforma tecnológica?",
        options: [
            "Para garantizar que los datos existentes se transfieran de forma íntegra, segura y sin pérdida o corrupción hacia el nuevo sistema.",
            "Para obligar a los clientes a comprar nuevas licencias de software cada año.",
            "Para comprobar la velocidad del internet inalámbrico de la oficina.",
            "Para reducir el número de empleados en el departamento de contabilidad."
        ],
        correct: 0,
        explanation: "Las migraciones exigen verificar que la estructura de datos e integridad se preserve al cambiar de entorno.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.3",
        summary: ["Pruebas de migración: Validan la integridad y correcta transferencia de datos a nuevas plataformas."]
    },
    {
        id: 220, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué rol cumplen los analistas de calidad (testers) en las revisiones de requisitos durante las fases tempranas del SDLC?",
        options: [
            "Analizar la testabilidad de los requisitos, detectando ambigüedades, contradicciones o requerimientos imposibles de probar.",
            "Escribir los contratos legales de compraventa de licencias con los proveedores.",
            "Decidir qué framework de desarrollo en JavaScript debe utilizar el equipo de ingeniería.",
            "Programar los servidores web en el centro de datos físico."
        ],
        correct: 0,
        explanation: "Un requisito ambiguo no se puede probar; el tester revisa la testabilidad desde el inicio.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.5",
        summary: ["Revisión temprana de requisitos: Evaluación de testabilidad y detección de ambigüedades."]
    },
    {
        id: 221, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué son las pruebas de seguridad (Security Testing) y qué buscan proteger?",
        options: [
            "Evaluar la vulnerabilidad del sistema ante ataques maliciosos, garantizando confidencialidad, integridad, autenticidad y disponibilidad de los datos.",
            "Garantizar que las puertas de la oficina tengan cerraduras mecánicas con llave.",
            "Impidiendo que los usuarios utilicen contraseñas numéricas sencillas.",
            "Realizar copias de seguridad de los discos duros en cintas magnéticas."
        ],
        correct: 0,
        explanation: "Protegen la información contra accesos no autorizados y brechas de seguridad informática.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.2",
        summary: ["Pruebas de seguridad: Evalúan vulnerabilidades y protegen la tríada de la información."]
    },
    {
        id: 222, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué evalúan las pruebas de usabilidad (Usability Testing) en el nivel de sistema o aceptación?",
        options: [
            "La facilidad de aprendizaje, eficiencia de uso, operabilidad, atractivo y accesibilidad del sistema para los usuarios.",
            "La cantidad de memoria RAM consumida por el compilador de Java.",
            "La velocidad de transferencia de paquetes en redes de fibra óptica.",
            "La resistencia de los equipos ante caídas desde escritorios."
        ],
        correct: 0,
        explanation: "Miden la experiencia del usuario final y qué tan intuitivo y accesible es el software.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.2",
        summary: ["Pruebas de usabilidad: Validan la experiencia, accesibilidad y facilidad de uso para el usuario."]
    },
    {
        id: 223, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cuál es el objetivo de las pruebas de portabilidad (Portability Testing)?",
        options: [
            "Verificar si el software puede trasladarse con éxito de un entorno operativo, hardware o sistema operativo a otro.",
            "Comprobar si una computadora portátil puede transportarse fácilmente en una mochila.",
            "Medir el peso en kilogramos de los servidores instalados en el rack.",
            "Asegurar que las aplicaciones móviles funcionen sin batería."
        ],
        correct: 0,
        explanation: "Valida la capacidad del software para ejecutarse en diferentes plataformas (ej. Windows a Linux, o iOS a Android).",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.2",
        summary: ["Pruebas de portabilidad: Validan la capacidad de adaptación del software a distintos entornos."]
    },
    {
        id: 224, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "En un modelo V de desarrollo de software, ¿con qué fase del ciclo de vida se corresponden directamente las pruebas de sistema?",
        options: [
            "Con la fase de diseño del sistema (System Design).",
            "Con la fase de codificación unitaria en lenguaje C++.",
            "Con la fase de captura de contratos comerciales iniciales.",
            "Con la fase de retirada y destrucción de equipos."
        ],
        correct: 0,
        explanation: "En el Modelo V, cada nivel de prueba tiene su fase de diseño correspondiente (Sistema ➔ Diseño de Sistema).",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.1",
        summary: ["Modelo V: Alineación estricta entre niveles de prueba y sus respectivas fases de diseño."]
    },
    {
        id: 225, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué objetivo persiguen las pruebas de integración entre servicios web (API Integration Testing)?",
        options: [
            "Validar que los contratos de API (solicitudes HTTP, formatos JSON/XML y códigos de respuesta) funcionen correctamente entre clientes y servidores.",
            "Comprobar que el diseño gráfico de los botones tenga los colores correctos.",
            "Sustituir la necesidad de escribir pruebas unitarias de componentes.",
            "Medir la velocidad de impresión de documentos en formato PDF."
        ],
        correct: 0,
        explanation: "Asegura la interoperabilidad y cumplimiento de contratos entre los microservicios y clientes.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.1",
        summary: ["Integración de APIs: Valida contratos, formatos de intercambio y respuestas entre servicios."]
    },
    {
        id: 226, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué implica realizar pruebas de mantenimiento de tipo 'preventivo' tras una actualización?",
        options: [
            "Verificar que el sistema mantenga su estabilidad y no haya sufrido degradación tras aplicar parches de seguridad rutinarios.",
            "Esperar a que el software colapse en producción para recién empezar a investigar.",
            "Despedir al personal técnico para prevenir futuros errores humanos.",
            "Eliminar todas las bases de datos históricas para liberar espacio."
        ],
        correct: 0,
        explanation: "El mantenimiento preventivo asegura la salud operativa del sistema ante actualizaciones rutinarias de parches.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.3",
        summary: ["Mantenimiento preventivo: Validación de estabilidad ante parches y actualizaciones rutinarias."]
    },
    {
        id: 227, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Por qué se consideran críticas las pruebas en marcos ágiles iterativos e incrementales?",
        options: [
            "Porque los ciclos de entrega cortos exigen una automatización robusta y pruebas continuas de regresión para asegurar entregas seguras.",
            "Porque impiden que el equipo de desarrollo realice reuniones de planificación.",
            "Porque eliminan por completo la necesidad de contar con criterios de aceptación.",
            "Porque obligan a que el cliente espere un año completo para ver resultados."
        ],
        correct: 0,
        explanation: "La alta velocidad ágil requiere pruebas continuas automatizadas para evitar romper funcionalidades existentes.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.2",
        summary: ["Pruebas en ágil: Exigen automatización y regresión continua ante ciclos cortos de entrega."]
    },
    {
        id: 228, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué evalúan las pruebas de robustez dentro de las características de fiabilidad (Reliability)?",
        options: [
            "La capacidad del sistema para funcionar correctamente en presencia de entradas inválidas o condiciones ambientales estresantes.",
            "La dureza física de la carcasa de plástico de las computadoras.",
            "La velocidad de escritura en discos duros de estado sólido.",
            "La cantidad de contratos firmados por el departamento legal."
        ],
        correct: 0,
        explanation: "La robustez mide la tolerancia del software ante datos erróneos o situaciones adversas sin colapsar.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.2",
        summary: ["Pruebas de robustez: Evalúan la tolerancia y resistencia ante entradas inválidas o fallas."]
    },
    {
        id: 229, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cuál es el propósito de realizar una prueba piloto antes de adoptar un nuevo nivel o metodología de prueba?",
        options: [
            "Evaluar la viabilidad, adaptación y eficiencia del proceso en un entorno real reducido antes de implementarlo a escala corporativa.",
            "Obligar a los empleados a trabajar horas extra sin remuneración.",
            "Comprar licencias de software costosas sin consultar al directorio.",
            "Eliminar la necesidad de documentar los procedimientos técnicos."
        ],
        correct: 0,
        explanation: "El piloto permite medir riesgos, fricciones operativas y ajustar la estrategia antes del despliegue masivo.",
        pageRef: "ISTQB v4.0, Cap. 2 / Cap. 6",
        summary: ["Prueba piloto: Evaluación controlada a pequeña escala para validar viabilidad operativa."]
    },
    {
        id: 230, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "En conclusión, ¿cómo impacta la elección correcta del SDLC y sus niveles de prueba en la calidad final del software?",
        options: [
            "Permite alinear el esfuerzo de mitigación de riesgos con la complejidad del producto, optimizando la detección temprana de defectos.",
            "Garantiza que el software se desarrolle en exactamente tres días calendario.",
            "Elimina por completo la necesidad de involucrar a los usuarios de negocio.",
            "Reduce la complejidad técnica del código fuente a cero."
        ],
        correct: 0,
        explanation: "Seleccionar el ciclo de vida y niveles adecuados asegura un control de calidad estructurado y adaptado al contexto.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1",
        summary: ["SDLC y Niveles de Prueba: Alineación estratégica para optimizar la detección temprana y mitigación de riesgos."]
    },

    // ==========================================
    // CAPÍTULO 3: Pruebas Estáticas (30 preguntas K1/K2)
    // ==========================================
    {
        id: 301, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "Según la sección 3.1.2, ¿cuál es uno de los principales beneficios económicos y operativos de detectar defectos mediante pruebas estáticas?",
        options: [
            "Evitar que los defectos se propaguen a fases posteriores del SDLC, reduciendo drásticamente el costo total de corrección.",
            "Eliminar por completo la necesidad de realizar pruebas dinámicas en cualquier entorno.",
            "Reducir la necesidad de documentar los requisitos del cliente al inicio del proyecto.",
            "Permitir que los desarrolladores automaticen pruebas unitarias sin escribir código de prueba."
        ],
        correct: 0,
        explanation: "La detección temprana mediante revisiones y análisis estático previene que los defectos se propaguen al código y a fases avanzadas, donde su reparación es mucho más costosa.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.2",
        summary: ["Pruebas estáticas: Detección temprana que previene propagación de defectos y reduce costos."]
    },
    {
        id: 302, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "En el contexto de la gestión de revisiones (Sección 3.2.3), ¿cuál es la responsabilidad principal del rol de 'Autor'?",
        options: [
            "Crear y corregir el producto de trabajo sujeto a revisión.",
            "Liderar la logística de las reuniones y moderar las discusiones grupales.",
            "Registrar formalmente todas las anomalías e incidencias detectadas durante la sesión.",
            "Auditar de forma externa el cumplimiento de los contratos legales del proyecto."
        ],
        correct: 0,
        explanation: "El autor es el creador o responsable del documento o código que se está revisando, y posteriormente se encarga de aplicar las correcciones necesarias.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.3",
        summary: ["Autor: Responsable de crear y corregir el producto de trabajo objeto de revisión."]
    },
    {
        id: 303, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué diferencia principal existe entre una 'Revisión Informal' y una 'Inspección' (Sección 3.2.4)?",
        options: [
            "La revisión informal no tiene un proceso formal ni requiere actas; la inspección es la forma más formal y estructurada, guiada por métricas y un rol de moderador entrenado.",
            "La revisión informal requiere la presencia de un auditor legal externo obligatoriamente.",
            "La inspección se realiza de forma anónima sin que el autor participe en ninguna fase.",
            "No hay diferencia técnica; ambos términos se usan indistintamente en la norma."
        ],
        correct: 0,
        explanation: "Las revisiones informales son rápidas y sin procesos estrictos, mientras que las inspecciones son formales, rigurosas y se basan en métricas.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.4",
        summary: ["Revisión informal (sin proceso estricto) vs Inspección (máxima formalidad y rigor métrico)."]
    },
    {
        id: 304, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "Durante la etapa de 'Preparación Individual' dentro de una revisión formal (Sección 3.2.2), ¿qué actividad realizan los revisores?",
        options: [
            "Examinar el producto de trabajo de manera individual para detectar anomalías, registrar comentarios y preparar puntos de discusión.",
            "Reunirse en pleno con el cliente para renegociar el presupuesto del contrato.",
            "Compilar y desplegar el software en el servidor de producción.",
            "Ejecutar casos de prueba automatizados utilizando Selenium WebDriver."
        ],
        correct: 0,
        explanation: "La preparación es el estudio personal previo que hace cada revisor sobre el documento para familiarizarse con él y hallar defectos antes de la reunión grupal.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Preparación individual: Análisis personal del artefacto para hallar anomalías previas a la reunión."]
    },
    {
        id: 305, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué factor humano o cultural es considerado crítico para garantizar el éxito de las revisiones de código y documentos (Sección 3.2.5)?",
        options: [
            "Fomentar una cultura de seguridad psicológica orientada al producto, donde se critique el artefacto y no al autor (enfoque sin culpas).",
            "Imponer sanciones económicas a los autores cuyos documentos presenten más de cinco defectos.",
            "Mantener el anonimato absoluto de todos los participantes para evitar responsabilidades.",
            "Excluir a los desarrolladores experimentados para acelerar las sesiones."
        ],
        correct: 0,
        explanation: "Las revisiones deben centrarse en encontrar fallas en el producto de trabajo en un ambiente de confianza, evitando un clima punitivo o de culpas.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.5",
        summary: ["Cultura sin culpas: Énfasis en criticar el artefacto y no a la persona para fomentar transparencia."]
    },
    {
        id: 306, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué tipo de defectos pueden descubrir las herramientas de análisis estático basadas en la estructura del código que las pruebas dinámicas podrían pasar por alto?",
        options: [
            "Variables no inicializadas, código inalcanzable (código muerto), violaciones de estándares de sintaxis y dependencias circulares.",
            "Fallos de conexión intermitente debidos a la latencia de la red de internet en producción.",
            "Problemas de usabilidad visual en pantallas táctiles de dispositivos móviles.",
            "Errores de lógica de negocio vinculados exclusivamente a la fecha y hora del sistema operativo."
        ],
        correct: 0,
        explanation: "El análisis estático examina el código a nivel estructural sin ejecutarlo, detectando fallas sintácticas y de diseño interna de forma directa.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.3",
        summary: ["Herramientas de análisis estático: Detectan código muerto, variables huérfanas y violaciones de estilo."]
    },
    {
        id: 307, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "En el proceso de revisión formal (Sección 3.2.2), ¿en qué consiste la fase de 'Seguimiento' (Follow-up)?",
        options: [
            "Verificar que las correcciones realizadas por el autor sean efectivas y que los defectos reportados hayan sido debidamente cerrados.",
            "Enviar la factura de cobro a los proveedores externos del software.",
            "Planificar las vacaciones del equipo de control de calidad tras el lanzamiento.",
            "Borrar todos los registros de incidentes para liberar espacio en el servidor de Jira."
        ],
        correct: 0,
        explanation: "El seguimiento asegura que las acciones correctivas aplicadas cumplan con los estándares y resuelvan los bugs detectados.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Seguimiento (Follow-up): Comprobación de que las correcciones del autor sean efectivas."]
    },
    {
        id: 308, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Cuál es el propósito principal de una 'Revisión Técnica' (Technical Review) según la sección 3.2.4?",
        options: [
            "Evaluar un producto de trabajo técnico por parte de pares competentes, buscando consenso técnico y toma de decisiones sobre alternativas.",
            "Cumplir estrictamente con normas legales y auditorías financieras corporativas.",
            "Recopilar métricas estadísticas avanzadas para la dirección ejecutiva.",
            "Reducir el personal técnico mediante la evaluación de desempeño individual."
        ],
        correct: 0,
        explanation: "Las revisiones técnicas se enfocan en examinar soluciones técnicas con expertos pares para lograr consenso y validar la calidad del diseño o código.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.4",
        summary: ["Revisión técnica: Evaluación entre pares expertos para toma de decisiones y consenso técnico."]
    },
    {
        id: 309, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Por qué se considera que las pruebas estáticas apoyan de manera directa el cumplimiento del principio de pruebas 'Las pruebas tempranas ahorran tiempo y dinero'?",
        options: [
            "Porque permiten hallar y corregir defectos en la fase de requisitos y diseño antes de que el código sea escrito o compilado.",
            "Porque reducen el consumo de energía eléctrica de las computadoras personales.",
            "Porque eliminan la necesidad de programar lógica automatizada en los sprints.",
            "Porque permiten vender el software a menor precio en el mercado."
        ],
        correct: 0,
        explanation: "Corregir un error de interpretación en la fase estática de requerimientos evita gastar recursos programando y probando un código incorrecto.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.2",
        summary: ["Pruebas estáticas tempranas: Previenen costos exponenciales de corrección en fases tardías."]
    },
    {
        id: 310, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "En una revisión formal, ¿cuál es el rol principal del 'Moderador' (o Líder de revisión) durante la reunión de revisión?",
        options: [
            "Facilitar la reunión, mantener el foco en los objetivos, asegurar una atmósfera constructiva y gestionar el tiempo.",
            "Imponer sus propias opiniones técnicas sin permitir debate entre los participantes.",
            "Escribir todo el código de corrección durante la misma sesión grupal.",
            "Evaluar el salario de los revisores según la cantidad de defectos que encuentren."
        ],
        correct: 0,
        explanation: "El moderador asegura que la reunión sea productiva, ordenada y respetuosa, guiando al equipo hacia la resolución de defectos.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.3",
        summary: ["Moderador: Facilita la reunión, controla el tiempo y mantiene el foco constructivo."]
    },
    {
        id: 311, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué diferencia existe entre un 'Walkthrough' (Recorrido) y una Inspección formal?",
        options: [
            "El walkthrough es liderado por el autor con fines de aprendizaje, explicación y hallazgo de defectos opcional; la inspección es dirigida por un moderador entrenado con rigor métrico.",
            "El walkthrough requiere actas notariales obligatorias y la inspección es completamente anónima.",
            "No hay ninguna diferencia técnica; son sinónimos exactos en el estándar.",
            "El walkthrough se aplica solo a bases de datos y la inspección a interfaces móviles."
        ],
        correct: 0,
        explanation: "El walkthrough está guiado por el autor para explicar el documento y obtener realimentación o formación.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.4",
        summary: ["Walkthrough: Liderado por el autor para explicación, formación y realimentación informal."]
    },
    {
        id: 312, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué métricas se suelen recopilar durante las revisiones formales para evaluar su eficacia (Sección 3.2.2)?",
        options: [
            "Densidad de defectos encontrados, tiempo invertido en preparación y revisión, y porcentaje de defectos corregidos.",
            "El consumo de electricidad de la sala de juntas durante la reunión.",
            "El número de líneas de código añadidas por semana en Git.",
            "La velocidad de descarga de la red de internet corporativa."
        ],
        correct: 0,
        explanation: "Medir el esfuerzo invertido y los defectos hallados ayuda a optimizar las revisiones futuras.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Métricas de revisión: Densidad de defectos hallados y esfuerzo de preparación/revisión."]
    },
    {
        id: 313, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué rol cumple el 'Escriba' (Recorder / Scribe) en una reunión de revisión formal?",
        options: [
            "Documentar cada defecto detectado, las decisiones tomadas y los elementos pendientes de acción durante la sesión grupal.",
            "Redactar el código fuente de producción en lenguaje Java.",
            "Dirigir la discusión técnica y debatir sobre las soluciones de arquitectura.",
            "Firmar los contratos legales de adquisición de licencias de software."
        ],
        correct: 0,
        explanation: "El escriba registra fielmente los hallazgos y acuerdos alcanzados por el equipo de revisores.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.3",
        summary: ["Escriba: Registra con precisión los defectos y decisiones tomadas en la reunión."]
    },
    {
        id: 314, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Por qué se considera que las revisiones estáticas son complementarias a las pruebas dinámicas?",
        options: [
            "Porque detectan fallas directamente en la fuente (requisitos, diseño) que las pruebas dinámicas no pueden alcanzar o que costarían mucho más reparar después.",
            "Porque sustituyen por completo la necesidad de contratar personal de QA junior.",
            "Porque se ejecutan simultáneamente en el mismo compilador binario.",
            "Porque impiden que los usuarios finales reporten errores en producción."
        ],
        correct: 0,
        explanation: "Estáticas y dinámicas se apoyan mutuamente: unas previenen en origen y otras validan el comportamiento operativo.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1",
        summary: ["Complementariedad: Estáticas previenen defectos en origen y dinámicas validan comportamiento."]
    },
    {
        id: 315, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué es el 'Análisis Estático Basado en Herramientas' (Tool-based Static Analysis)?",
        options: [
            "El examen automatizado del código fuente o modelos mediante herramientas especializadas para encontrar vulnerabilidades y violaciones de reglas.",
            "La compilación manual de programas ejecutables en sistemas operativos Linux.",
            "La ejecución de pruebas de carga mediante la simulación de miles de usuarios concurrentes.",
            "La creación de diagramas UML dibujados a mano en pizarras acrílicas."
        ],
        correct: 0,
        explanation: "Herramientas SAST escanean el código estático buscando patrones de riesgo y olores de código de forma automatizada.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.3",
        summary: ["Análisis estático automatizado: Escaneo por herramientas para hallar vulnerabilidades y olores de código."]
    },
    {
        id: 316, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué objetivos persigue una lista de comprobación (Checklist) en el contexto de las revisiones estáticas?",
        options: [
            "Guiar a los revisores para que examinen aspectos críticos específicos y comunes que suelen pasarse por alto.",
            "Calcular el salario mensual de los autores de los documentos.",
            "Comprobar la velocidad de procesamiento de los servidores web.",
            "Sustituir la lectura completa del documento sujeto a revisión."
        ],
        correct: 0,
        explanation: "Las listas de comprobación estandarizan el foco de los revisores en categorías de errores frecuentes.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Listas de comprobación: Guías estructuradas para enfocar la revisión en errores comunes."]
    },
    {
        id: 317, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué ocurre si un producto de trabajo revisado presenta una cantidad masiva de defectos durante la preparación individual?",
        options: [
            "Se puede cancelar la reunión de revisión (rework previo), devolviendo el artefacto al autor para su depuración antes de gastar tiempo grupal.",
            "Se despide inmediatamente a todo el equipo de ingeniería de software.",
            "Se aprueba automáticamente el documento para no retrasar el cronograma.",
            "Se obliga a los revisores a corregir el código por su cuenta."
        ],
        correct: 0,
        explanation: "Si la calidad inicial es pésima, suspender la reunión ahorra horas hombre y fuerza al autor a corregir los fundamentos.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Calidad deficiente inicial: Criterio para detener la revisión y exigir corrección previa del autor."]
    },
    {
        id: 318, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Cuál es el beneficio de evaluar estáticamente los diagramas de arquitectura antes de programar?",
        options: [
            "Detectar fallas de diseño, cuellos de botella estructurales y vulnerabilidades de seguridad antes de invertir en codificación.",
            "Asegurar que los servidores físicos consuman menos energía eléctrica.",
            "Impidiendo que los analistas de negocio escriban historias de usuario.",
            "Garantizar que la aplicación funcione sin conexión a internet."
        ],
        correct: 0,
        explanation: "Corregir la arquitectura en papel es infinitamente más barato que reestructurar código en producción.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.2",
        summary: ["Evaluación estática de arquitectura: Detección temprana de fallas de diseño estructural."]
    },
    {
        id: 319, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué se entiende por 'Olor de Código' (Code Smell) detectado mediante análisis estático?",
        options: [
            "Un indicador en el código fuente que sugiere una debilidad estructural o violación de diseño que puede dificultar el mantenimiento.",
            "Un virus informático que emite alertas sonoras en los altavoces de la computadora.",
            "Un error de sintaxis grave que impide que el compilador genere el archivo binario.",
            "Un exceso de comentarios explicativos escritos en idioma inglés."
        ],
        correct: 0,
        explanation: "Los code smells no son bugs estrictamente, pero indican malas prácticas de diseño que acumulan deuda técnica.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.3",
        summary: ["Code Smells: Indicadores de debilidad estructural y mala mantenibilidad del código."]
    },
    {
        id: 320, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué rol desempeña el 'Gestor' (Management) en el establecimiento de un programa exitoso de revisiones estáticas?",
        options: [
            "Apoyar formalmente el proceso asignando tiempo en los cronogramas para la preparación y fomentando una cultura sin culpas.",
            "Participar como escriba en todas las inspecciones técnicas de código.",
            "Imponer multas económicas a los desarrolladores por cada línea de código defectuosa.",
            "Sustituir las revisiones técnicas por reuniones gerenciales diarias."
        ],
        correct: 0,
        explanation: "El respaldo gerencial es clave al proteger el tiempo necesario de preparación para que las revisiones funcionen.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.5",
        summary: ["Apoyo gerencial: Asignación de tiempo en cronogramas y fomento de cultura sin culpas."]
    },
    {
        id: 321, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Por qué es fundamental que los defectos hallados en revisiones estáticas se registren formalmente?",
        options: [
            "Para asegurar su seguimiento, corrección y recopilación de métricas que permitan mejorar el proceso de desarrollo.",
            "Para utilizarlos como evidencia en juicios laborales contra los programadores.",
            "Para enviarlos como spam publicitario a los clientes de la competencia.",
            "Para liberar espacio de almacenamiento en los discos duros locales."
        ],
        correct: 0,
        explanation: "Registrar los hallazgos permite medir la eficacia de las revisiones y asegurar que ningún bug quede sin reparar.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Registro formal de defectos estáticos: Garantiza trazabilidad, reparación y mejora de procesos."]
    },
    {
        id: 322, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué relación existe entre las pruebas estáticas y la mantenibilidad (Maintainability) del software?",
        options: [
            "Las pruebas estáticas identifican complejidad innecesaria, código muerto y acoplamiento excesivo, mejorando directamente la mantenibilidad.",
            "La reducen al máximo obligando a reescribir toda la aplicación cada semana.",
            "No tienen relación; la mantenibilidad solo se evalúa mediante pruebas de carga.",
            "Aumentan el tamaño de los archivos binarios compilados."
        ],
        correct: 0,
        explanation: "Mantener un código limpio y sin olores facilita futuras modificaciones evolutivas.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1",
        summary: ["Pruebas estáticas y mantenibilidad: Detectan complejidad y deuda técnica para facilitar cambios."]
    },
    {
        id: 323, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué ventaja aporta el uso de estándares de codificación (Coding Standards) evaluados estáticamente?",
        options: [
            "Uniformidad en el estilo de programación, facilitando que cualquier miembro del equipo lea, mantenga y entienda el código fuente.",
            "Garantía absoluta de que el software no tendrá errores lógicos de negocio.",
            "Eliminación total de la necesidad de realizar pruebas unitarias en los pipelines.",
            "Reducción del tiempo de compilación a cero segundos."
        ],
        correct: 0,
        explanation: "Los estándares de código aseguran que todo el equipo escriba bajo las mismas directrices de legibilidad.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.3",
        summary: ["Estándares de codificación: Aportan uniformidad, legibilidad y facilidad de mantenimiento."]
    },
    {
        id: 324, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué ocurre durante la fase de 'Inicio' (Initiation) en un proceso formal de revisión?",
        options: [
            "Se distribuye el material, se asegura que los revisores entiendan el documento y se responden dudas iniciales de alcance.",
            "Se contrata al personal externo que auditará el proyecto.",
            "Se despliega la aplicación directamente en los servidores de producción.",
            "Se redacta el informe final de cierre y facturación."
        ],
        correct: 0,
        explanation: "El inicio alinea a los participantes y entrega los artefactos listos para su estudio.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Fase de inicio en revisiones: Distribución de material y alineación inicial de participantes."]
    },
    {
        id: 325, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Cuál es el riesgo de no realizar revisiones estáticas en proyectos con alta complejidad técnica?",
        options: [
            "Que los defectos estructurales y conceptuales se descubran tardíamente en pruebas dinámicas o producción, encareciendo su solución.",
            "Que los equipos de desarrollo terminen sus tareas demasiado temprano.",
            "Que las computadoras del personal sufran daños físicos por sobrecalentamiento.",
            "Que el cliente pague el doble de dinero por el software."
        ],
        correct: 0,
        explanation: "Omitir revisiones estáticas traslada los errores al código, donde su costo de reparación se dispara exponencialmente.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.2",
        summary: ["Omitir revisiones estáticas: Traslada errores complejos a fases tardías con costos exponenciales."]
    },
    {
        id: 326, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué criterios determinan qué tipo de revisión (informal, walkthrough, técnica o inspección) se debe aplicar a un artefacto?",
        options: [
            "El nivel de formalidad requerido, la madurez del documento, los riesgos asociados y las regulaciones aplicables.",
            "El presupuesto disponible para comprar café durante las juntas.",
            "La cantidad de letras que contenga el título del documento.",
            "La preferencia personal del programador junior asignado."
        ],
        correct: 0,
        explanation: "El contexto, la criticidad y el riesgo dictan el grado de rigor y formalidad necesario en la revisión.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.4",
        summary: ["Tipo de revisión: Seleccionada en función del nivel de formalidad, riesgo y criticidad."]
    },
    {
        id: 327, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué papel juega la retroalimentación de los revisores en la mejora de las habilidades de los autores?",
        options: [
            "Funciona como una oportunidad de aprendizaje técnico y profesional, evitando que el autor cometa los mismos errores en futuros diseños.",
            "Busca castigar públicamente al autor para humillarlo frente al equipo.",
            "No tiene ningún impacto en el crecimiento profesional del equipo.",
            "Obliga al autor a renunciar a su puesto de trabajo."
        ],
        correct: 0,
        explanation: "En una cultura sin culpas, las revisiones son talleres de aprendizaje continuo para todo el equipo.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.5",
        summary: ["Revisiones como aprendizaje: Oportunidad de mejora continua y crecimiento técnico sin culpas."]
    },
    {
        id: 328, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué es una dependencia circular (Circular Dependency) detectada mediante análisis estático?",
        options: [
            "Una situación donde dos o más módulos dependen mutuamente el uno del otro para compilar o funcionar, acoplando fuertemente el diseño.",
            "Un error de red donde los paquetes de internet viajan en círculos infinitos.",
            "Una base de datos relacional sin claves primarias ni secundarias.",
            "Un bucle infinito programado intencionalmente en lenguaje JavaScript."
        ],
        correct: 0,
        explanation: "Las dependencias circulares rompen el desacoplamiento modular y dificultan enormemente las pruebas unitarias.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.3",
        summary: ["Dependencia circular: Acoplamiento indeseado entre módulos detectado estáticamente."]
    },
    {
        id: 329, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué diferencia fundamental existe entre el objetivo de una prueba dinámica y una prueba estática respecto a los bugs?",
        options: [
            "La estática busca el defecto latente en el artefacto; la dinámica busca la falla observable manifestada al correr el software.",
            "La estática encuentra bugs en servidores y la dinámica en computadoras portátiles.",
            "La estática es ejecutada por clientes y la dinámica por auditores legales.",
            "No hay diferencia; ambos métodos detectan exactamente el mismo síntoma."
        ],
        correct: 0,
        explanation: "La estática halla la causa (defecto); la dinámica halla el efecto (falla).",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1",
        summary: ["Estática halla el defecto raíz vs Dinámica halla la falla operativa observable."]
    },
    {
        id: 330, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "En conclusión, ¿por qué las pruebas estáticas son indispensables en una estrategia integral de calidad ISTQB?",
        options: [
            "Porque atacan los defectos en su origen (documentos y código) antes de la ejecución, garantizando eficiencia, prevención y ahorro masivo.",
            "Porque permiten terminar el proyecto sin necesidad de contratar personal de testing dinámico.",
            "Porque eliminan por completo la necesidad de utilizar metodologías ágiles en la empresa.",
            "Porque reducen el tamaño de los discos duros de los servidores principales."
        ],
        correct: 0,
        explanation: "Las pruebas estáticas son el primer escudo de defensa en la ingeniería de calidad moderna.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1",
        summary: ["Pruebas estáticas: Primer escudo de defensa, prevención temprana y máxima eficiencia."]
    },

    // ==========================================
    // CAPÍTULO 4: Análisis y Diseño de Pruebas (30 preguntas K1/K2/K3)
    // ==========================================
    {
        id: 401, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "En las técnicas de Caja Negra basadas en especificaciones (Sección 4.2.1), ¿cómo se definen las 'particiones de equivalencia'?",
        options: [
            "Dividir los datos de entrada en subconjuntos (particiones) de los cuales se espera que todos los miembros procesen el mismo comportamiento.",
            "Seleccionar estrictamente los números primos comprendidos entre cero y un millón.",
            "Probar cada línea de código fuente utilizando analizadores sintácticos de sintaxis binaria.",
            "Eliminar todas las entradas válidas para concentrarse únicamente en datos corruptos."
        ],
        correct: 0,
        explanation: "La partición de equivalencia agrupa los datos de entrada en clases donde se asume que si un valor de la partición funciona, todos los demás lo harán de la misma manera.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.1",
        summary: ["Partición de equivalencia: Agrupa entradas en clases equivalentes para reducir casos de prueba."]
    },
    {
        id: 402, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Cuál es la diferencia fundamental entre el Análisis de Valores Límite (BVA) y la Partición de Equivalencia (Sección 4.2.2)?",
        options: [
            "El BVA se centra específicamente en probar los valores en los bordes o fronteras de las particiones, donde son más comunes los errores de programación.",
            "El BVA requiere la ejecución de código fuente en servidores dedicados y la partición de equivalencia no.",
            "No existe diferencia; ambas técnicas son exactamente iguales en su metodología de cálculo.",
            "El BVA se utiliza exclusivamente para pruebas de rendimiento y carga."
        ],
        correct: 0,
        explanation: "Mientras que la partición de equivalencia selecciona cualquier valor representativo de una clase, el BVA apunta directamente a los límites exactos (fronteras superiores e inferiores).",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.2",
        summary: ["Análisis de Valores Límite (BVA): Se enfoca en los bordes o fronteras de las particiones."]
    },
    {
        id: 403, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué evalúa una Tabla de Decisiones (Decision Table Testing) según la sección 4.2.3?",
        options: [
            "Combinaciones complejas de entradas (causas) que conducen a diferentes conjuntos de salidas (efectos) o acciones de negocio.",
            "La velocidad de transferencia de paquetes de red mediante protocolos TCP/IP.",
            "El consumo de memoria RAM de la aplicación durante picos de transacciones concurrentes.",
            "La jerarquía de permisos de los usuarios en la base de datos relacional."
        ],
        correct: 0,
        explanation: "Las tablas de decisiones son excelentes para modelar sistemas lógicos donde el comportamiento depende de combinaciones complejas de múltiples condiciones de entrada.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.3",
        summary: ["Tabla de decisiones: Evalúa combinaciones complejas de entradas y sus acciones resultantes."]
    },
    {
        id: 404, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿En qué tipo de sistemas o componentes resulta más útil aplicar la técnica de Transición de Estado (State Transition Testing, Sección 4.2.4)?",
        options: [
            "Sistemas cuyo comportamiento depende no solo de las entradas actuales, sino también de su historial o estado previo (ej. carritos de compra, cajeros automáticos).",
            "Bases de datos que almacenan exclusivamente archivos planos sin relaciones.",
            "Scripts de automatización que no interactúan con interfaces de usuario.",
            "Sistemas operativos diseñados para arquitecturas de hardware de 8 bits."
        ],
        correct: 0,
        explanation: "La transición de estado modela cómo un sistema cambia de un estado a otro en respuesta a eventos, ideal para flujos secuenciales complejos.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.4",
        summary: ["Transición de estado: Ideal para sistemas donde el comportamiento depende del estado actual e historial."]
    },
    {
        id: 405, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué propósito persigue la técnica de 'Pruebas de Casos de Uso' (Use Case Testing, Sección 4.2.5)?",
        options: [
            "Diseñar casos de prueba que ejerciten los flujos de negocio (camino básico y caminos alternativos/de excepción) de interacción entre actores y el sistema.",
            "Validar exclusivamente la sintaxis de las líneas individuales de código fuente en C++.",
            "Medir el ancho de banda consumido por las peticiones HTTP concurrentes.",
            "Comprobar el cumplimiento de las normas de seguridad física en el centro de datos."
        ],
        correct: 0,
        explanation: "Los casos de uso modelan las interacciones de los usuarios con el sistema, permitiendo diseñar pruebas basadas en escenarios reales de negocio.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.5",
        summary: ["Casos de uso: Diseñan pruebas basadas en flujos de interacción reales entre actor y sistema."]
    },
    {
        id: 406, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Cuál es la característica principal de las técnicas de prueba basadas en la experiencia (Experience-based techniques, Sección 4.4)?",
        options: [
            "Se basan en la intuición, experiencia, conocimientos y habilidades de los evaluadores, a menudo útiles cuando la especificación es escasa.",
            "Requieren obligatoriamente la aplicación de modelos matemáticos formales de cobertura de código.",
            "Están totalmente automatizadas mediante herramientas de inteligencia artificial de caja blanca.",
            "Solo pueden ser ejecutadas por auditores externos certificados por normativas ISO."
        ],
        correct: 0,
        explanation: "Las técnicas basadas en la experiencia (como adivinación de errores o pruebas exploratorias) aprovechan el talento y pericia humana cuando la documentación formal es deficiente.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.4",
        summary: ["Técnicas basadas en la experiencia: Aprovechan intuición y pericia ante especificaciones escasas."]
    },
    {
        id: 407, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿En qué consiste la técnica de 'Adivinación de Errores' (Error Guessing, Sección 4.4.2)?",
        options: [
            "Un enfoque donde el evaluador utiliza su conocimiento sobre errores pasados, fallas comunes y trampas de programación para anticipar dónde podrían ocurrir defectos.",
            "Un método estadístico para adivinar el costo financiero exacto de un proyecto de software.",
            "Una herramienta de software que genera contraseñas seguras de manera aleatoria.",
            "Un proceso de auditoría legal para contratos de desarrollo tercerizado."
        ],
        correct: 0,
        explanation: "La adivinación de errores depende de la agudeza mental del tester para prever dónde suelen cometer errores los desarrolladores (ej. división por cero, campos nulos).",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.4.2",
        summary: ["Adivinación de errores: Anticipación de defectos basada en fallas históricas y experiencia."]
    },
    {
        id: 408, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué define a las 'Pruebas Exploratorias' (Exploratory Testing, Sección 4.4.3)?",
        options: [
            "El diseño, ejecución, registro y evaluación simultánea de las pruebas, aprendiendo de la aplicación sobre la marcha para guiar los siguientes pasos.",
            "La ejecución ciega de un guion de pruebas estricto redactado hace seis meses sin modificar nada.",
            "Una prueba masiva de rendimiento realizada únicamente mediante scripts desatendidos.",
            "La revisión estática de manuales de usuario en formato PDF."
        ],
        correct: 0,
        explanation: "En las pruebas exploratorias el tester diseña y ejecuta pruebas de forma simultánea, adaptando su estrategia según lo que va descubriendo en la aplicación.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.4.3",
        summary: ["Pruebas exploratorias: Diseño y ejecución simultánea con aprendizaje activo sobre la marcha."]
    },
    {
        id: 409, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué son las 'Pruebas basadas en listas de comprobación' (Checklist-based testing, Sección 4.4.4)?",
        options: [
            "Un enfoque donde el evaluador diseña y ejecuta pruebas basándose en un listado de elementos, condiciones o reglas que deben verificarse.",
            "Una lista de compras de hardware necesarias para instalar un servidor web.",
            "Un registro contable de las horas trabajadas por los analistas de calidad.",
            "Un conjunto de plantillas legales para firmar acuerdos de confidencialidad."
        ],
        correct: 0,
        explanation: "Las listas de comprobación estandarizan verificaciones recurrentes asegurando que no se pasen por alto aspectos importantes del sistema.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.4.4",
        summary: ["Pruebas basadas en listas de comprobación: Verificación estructurada mediante elementos clave predefinidos."]
    },
    {
        id: 410, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "En el contexto de la colaboración de equipo en el diseño de pruebas (Sección 4.5), ¿qué rol cumple la especificación por ejemplo (Specification by Example)?",
        options: [
            "Utilizar ejemplos concretos y reales para ilustrar los requisitos y comportamientos esperados, facilitando el entendimiento común entre negocio y tecnología.",
            "Desarrollar ejemplos de código en lenguaje ensamblador para optimizar compiladores.",
            "Ilustrar contratos legales mediante gráficos artísticos en Confluence.",
            "Sustituir por completo la necesidad de escribir código de producción."
        ],
        correct: 0,
        explanation: "La especificación por ejemplo utiliza casos concretos del mundo real para clarificar requerimientos ambiguos y unificar criterios.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.5.2",
        summary: ["Especificación por ejemplo: Uso de casos concretos y reales para clarificar requerimientos."]
    },
    {
        id: 411, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué mide la Cobertura de Sentencias (Statement Coverage) en las técnicas de Caja Blanca (Sección 4.3.1)?",
        options: [
            "El porcentaje de sentencias ejecutables de código fuente que han sido recorridas por al menos un caso de prueba.",
            "La cantidad de líneas de comentarios escritas en inglés dentro del repositorio.",
            "El número de pantallas desplegadas en la interfaz gráfica del usuario.",
            "El tiempo en segundos que tarda el compilador en generar el archivo binario."
        ],
        correct: 0,
        explanation: "Mide qué proporción de líneas de código ejecutables fueron alcanzadas durante las pruebas.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.3.1",
        summary: ["Cobertura de sentencias: Porcentaje de líneas de código ejecutables recorridas por las pruebas."]
    },
    {
        id: 412, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué evalúa la Cobertura de Ramas (Branch Coverage) en la estructura de control de código (Sección 4.3.2)?",
        options: [
            "El porcentaje de resultados de ramas de decisión (verdadero y falso) que han sido ejecutados por las pruebas.",
            "La cantidad de sucursales bancarias conectadas a la red corporativa.",
            "El número de ramas (branches) creadas en el sistema de control de versiones Git.",
            "La velocidad de transmisión de paquetes de red en servidores distribuidos."
        ],
        correct: 0,
        explanation: "La cobertura de ramas es más rigurosa que la de sentencias, exigiendo probar ambos caminos lógicos (true/false) de cada condición.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.3.2",
        summary: ["Cobertura de ramas: Porcentaje de resultados de decisión (verdadero/falso) ejecutados."]
    },
    {
        id: 413, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Por qué se considera que las técnicas basadas en caja blanca son complementarias a las de caja negra?",
        options: [
            "Porque las de caja negra validan las funciones externas frente a requisitos y las de caja blanca aseguran la calidad de la estructura y caminos lógicos internos del código.",
            "Porque las de caja negra se ejecutan de día y las de caja blanca de noche.",
            "Porque no existe ninguna relación técnica entre ambas metodologías de prueba.",
            "Porque las de caja blanca eliminan por completo la necesidad de analistas de negocio."
        ],
        correct: 0,
        explanation: "Caja negra evalúa el comportamiento externo y caja blanca examina la cobertura interna del código fuente.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.3",
        summary: ["Complementariedad: Caja negra valida requisitos externos vs Caja blanca verifica estructura interna."]
    },
    {
        id: 414, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "En una tabla de decisiones, ¿qué representa una 'regla de negocio' (Decision Table Column)?",
        options: [
            "Una combinación específica de condiciones de entrada (causas) junto con su respectiva acción resultante (efecto).",
            "Un contrato legal firmado entre la empresa y sus proveedores externos.",
            "Una línea de código en lenguaje Java que lanza una excepción de sintaxis.",
            "Un registro contable de las horas trabajadas por los desarrolladores."
        ],
        correct: 0,
        explanation: "Cada columna de la tabla de decisiones modela un escenario lógico distinto combinando entradas y salidas.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.3",
        summary: ["Regla de tabla de decisiones: Combinación única de condiciones de entrada y su acción resultante."]
    },
    {
        id: 415, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Cuál es el objetivo de utilizar pares de valores límite (BVA) en el extremo superior e inferior de una partición numérica?",
        options: [
            "Detectar errores de programación comunes donde los desarrolladores confunden operadores de comparación (ej. usar < en lugar de <=).",
            "Aumentar artificialmente el número de casos de prueba para cumplir con cuotas corporativas.",
            "Verificar la velocidad de procesamiento de los microprocesadores del servidor.",
            "Comprobar el consumo de energía eléctrica de la pantalla del usuario."
        ],
        correct: 0,
        explanation: "Los errores en las fronteras son los más frecuentes en la codificación de condiciones numéricas.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.2",
        summary: ["BVA en fronteras: Detecta fallas derivadas de errores en operadores de comparación."]
    },
    {
        id: 416, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué es una 'Carta de Prueba' (Test Charter) en las pruebas exploratorias estructuradas (Session-based Testing)?",
        options: [
            "Un documento que define el objetivo, alcance, áreas a investigar y enfoque de una sesión de prueba exploratoria cronometrada.",
            "Un contrato de seguro de responsabilidad civil para ingenieros de software.",
            "Un mapa geográfico de la red de servidores distribuidos en la nube.",
            "Una lista de asistencia para las reuniones diarias de seguimiento (Standup)."
        ],
        correct: 0,
        explanation: "La carta de prueba guía y enfoca al tester durante la exploración libre para mantener la trazabilidad.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.4.2",
        summary: ["Carta de prueba: Guía y objetivo estructurado para sesiones de pruebas exploratorias."]
    },
    {
        id: 417, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué representa el flujo básico (Basic Flow) en un diagrama de casos de uso o especificación de usuario?",
        options: [
            "El camino principal, óptimo y sin excepciones que sigue el sistema para cumplir con éxito el objetivo del actor.",
            "El peor escenario de error donde la base de datos se corrompe por completo.",
            "Las líneas de código fuente escritas por los desarrolladores junior.",
            "El proceso de facturación contable al final de cada trimestre."
        ],
        correct: 0,
        explanation: "El flujo básico describe la ejecución ideal del escenario de negocio sin tropiezos ni desvíos.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.5",
        summary: ["Flujo básico: Camino principal y exitoso de interacción entre el actor y el sistema."]
    },
    {
        id: 418, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué representan los flujos alternativos o de excepción (Exception Flows) en las pruebas de casos de uso?",
        options: [
            "Los caminos secundarios o de error que toma el sistema cuando ocurren condiciones imprevistas o validaciones fallidas.",
            "Los menús de navegación secundarios en la barra superior de la interfaz web.",
            "Las copias de seguridad nocturnas realizadas en servidores de respaldo.",
            "Los cambios de horario laboral del personal de la compañía."
        ],
        correct: 0,
        explanation: "Los flujos de excepción validan cómo reacciona el software ante errores, datos inválidos o interrupciones.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.5",
        summary: ["Flujos de excepción: Caminos alternativos que validan la gestión de errores y validaciones fallidas."]
    },
    {
        id: 419, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Cuál es la ventaja de utilizar particiones de equivalencia en lugar de probar todos los números posibles?",
        options: [
            "Reduce drásticamente el número de casos de prueba necesarios sin perder la eficacia en la detección de defectos.",
            "Permite eliminar por completo la necesidad de escribir código de automatización.",
            "Garantiza que el software funcione sin ningún tipo de error en producción.",
            "Aumenta la velocidad de ejecución de las consultas SQL en la base de datos."
        ],
        correct: 0,
        explanation: "Las particiones agrupan valores representativos, evitando la redundancia de probar cada número individual.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.1",
        summary: ["Partición de equivalencia: Optimiza y reduce la cantidad de pruebas agrupando datos representativos."]
    },
    {
        id: 420, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué es un diagrama de transición de estados (State Transition Diagram)?",
        options: [
            "Una representación gráfica que muestra los estados posibles en los que puede encontrarse un sistema, los eventos que provocan cambios y las acciones resultantes.",
            "Un organigrama jerárquico de la dirección general de la empresa.",
            "Un plano eléctrico de la instalación de corriente alterna en la oficina.",
            "Un gráfico de barras que mide el presupuesto financiero mensual."
        ],
        correct: 0,
        explanation: "Mapea visualmente cómo evoluciona el sistema entre diferentes estados operativos ante diversos estímulos.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.4",
        summary: ["Diagrama de transición de estados: Modela estados, eventos y reglas de cambio en el sistema."]
    },
    {
        id: 421, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué implica la cobertura de pares de valores (Pairwise Testing) en técnicas basadas en entradas múltiples?",
        options: [
            "Probar todas las combinaciones posibles entre cada par de parámetros de entrada, logrando alta efectividad con menor cantidad de tests.",
            "Probar únicamente dos casos de prueba por cada módulo del sistema.",
            "Vincular dos bases de datos relacionales mediante claves foráneas duplicadas.",
            "Asignar dos desarrolladores para que escriban la misma línea de código."
        ],
        correct: 0,
        explanation: "El combinatorial testing por pares reduce drásticamente las matrices masivas de pruebas combinatorias.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2",
        summary: ["Pairwise testing: Combinatoria eficiente basada en probar todas las parejas de entradas."]
    },
    {
        id: 422, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Por qué se considera que las historias de usuario bajo el estándar INVEST deben ser 'Comprobables' (Testable)?",
        options: [
            "Porque deben contar con criterios de aceptación claros y objetivos que permitan verificar sin ambigüedades si se han implementado correctamente.",
            "Porque pueden ser ejecutadas directamente por los servidores web sin intervención humana.",
            "Porque su código fuente no debe superar las 50 líneas de longitud en Git.",
            "Porque garantizan que el proyecto no tendrá ningún tipo de retraso en el cronograma."
        ],
        correct: 0,
        explanation: "Una historia comprobable evita términos subjetivos y facilita la redacción de casos de prueba precisos.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.5.1",
        summary: ["Historias comprobables (INVEST): Poseen criterios objetivos para verificar su éxito."]
    },
    {
        id: 423, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué rol desempeñan los criterios de aceptación en la metodología ATDD (Acceptance Test-Driven Development)?",
        options: [
            "Actuar como la especificación ejecutable acordada conjuntamente por negocio, desarrollo y pruebas antes de codificar.",
            "Servir como factura de cobro enviada a los clientes al finalizar el proyecto.",
            "Evaluar el desempeño individual y el salario de los analistas de calidad.",
            "Sustituir por completo la necesidad de escribir documentación de arquitectura."
        ],
        correct: 0,
        explanation: "En ATDD, los criterios de aceptación se convierten en pruebas automatizadas que guían el desarrollo.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.5.3",
        summary: ["Criterios de aceptación en ATDD: Especificaciones ejecutables acordadas antes de programar."]
    },
    {
        id: 424, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué es una prueba negativa (Negative Testing) en el diseño de casos de prueba?",
        options: [
            "Pruebas diseñadas para mostrar que el sistema maneja correctamente entradas inválidas, excepciones o condiciones anómalas sin colapsar.",
            "Pruebas donde el evaluador se encuentra de mal humor al momento de ejecutarlas.",
            "Pruebas que se realizan exclusivamente en entornos oscuros o sin conexión a internet.",
            "Pruebas que buscan borrar permanentemente la base de datos de producción."
        ],
        correct: 0,
        explanation: "Las pruebas negativas validan la robustez ante datos incorrectos o intentos de fallo deliberados.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2",
        summary: ["Pruebas negativas: Validan la robustez y el manejo correcto de entradas o estados inválidos."]
    },
    {
        id: 425, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué es una prueba positiva (Positive Testing) en el diseño de casos de prueba?",
        options: [
            "Pruebas diseñadas para verificar que el sistema funciona y procesa correctamente las entradas válidas esperadas.",
            "Pruebas donde el equipo mantiene una actitud optimista durante todo el sprint.",
            "Pruebas que garantizan que el software generará ganancias financieras inmediatas.",
            "Pruebas que no reportan ningún tipo de defecto bajo ninguna circunstancia."
        ],
        correct: 0,
        explanation: "Verifican el camino feliz (happy path) donde el usuario ingresa datos correctos válidos.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2",
        summary: ["Pruebas positivas: Verifican el funcionamiento correcto con entradas válidas (camino feliz)."]
    },
    {
        id: 426, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Cuál es el propósito de realizar una revisión de la base de pruebas (Test Basis Evaluation)?",
        options: [
            "Identificar inconsistencias, ambigüedades y lagunas en los documentos de requisitos antes de proceder a diseñar los casos de prueba.",
            "Comprobar el estado físico de los discos duros que almacenan la base de datos SQL.",
            "Calcular el costo monetario de las licencias de software utilizadas en el proyecto.",
            "Borrar los registros de prueba antiguos para liberar espacio en el servidor."
        ],
        correct: 0,
        explanation: "Evaluar la base de pruebas previene diseñar tests sobre especificaciones defectuosas.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.1",
        summary: ["Evaluación de la base de pruebas: Detección temprana de fallas en los requisitos de entrada."]
    },
    {
        id: 427, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué criterios guían la selección de una técnica de prueba específica (caja negra vs caja blanca vs experiencia)?",
        options: [
            "El tipo de sistema, complejidad del código, requisitos normativos, experiencia del equipo, riesgos y disponibilidad de especificaciones.",
            "La cantidad de botones que tenga la interfaz gráfica principal.",
            "El color de la paleta visual elegida por el diseñador UX.",
            "El horario de trabajo asignado al equipo de desarrollo."
        ],
        correct: 0,
        explanation: "Ninguna técnica es universal; la elección depende del contexto, riesgos y objetivos de calidad.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.1",
        summary: ["Selección de técnicas de prueba: Gobernada por el contexto, riesgos, normativa y complejidad."]
    },
    {
        id: 428, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué implica la cobertura de decisiones (Decision Coverage) frente a la cobertura de sentencias?",
        options: [
            "Que exige probar tanto los resultados verdaderos como falsos de cada decisión lógica, siendo más estricta que la cobertura de sentencias.",
            "Que solo evalúa las decisiones tomadas por los gerentes del proyecto.",
            "Que no requiere ejecutar ninguna línea de código fuente.",
            "Que es idéntica en rigor a la partición de equivalencia."
        ],
        correct: 0,
        explanation: "La cobertura de decisiones garantiza que cada punto de decisión haya tomado ambas salidas (true y false).",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.3.2",
        summary: ["Cobertura de decisiones: Exige probar todas las salidas (true/false) de las sentencias de control."]
    },
    {
        id: 429, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Por qué las palabras ambiguas (ej. 'rápido', 'intuitivo', 'correctamente') invalidan la comprobabilidad de un criterio de aceptación?",
        options: [
            "Porque son subjetivas y no definen métricas objetivas o umbrales medibles, impidiendo determinar de forma unívoca si la prueba pasó o falló.",
            "Porque los compiladores de programación eliminan automáticamente dichas palabras en compilación.",
            "Porque están prohibidas por las leyes internacionales de propiedad intelectual.",
            "Porque obligan a que el software se ejecute en dispositivos móviles obsoletos."
        ],
        correct: 0,
        explanation: "La ambigüedad destruye la verificabilidad objetiva; se deben usar métricas (ej. 'menor a 500ms').",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.5",
        summary: ["Ambigüedad en criterios: Subjetividad que impide la verificación objetiva (exige métricas medibles)."]
    },
    {
        id: 430, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "En conclusión, ¿cómo estructuran las técnicas de análisis y diseño el trabajo del evaluador profesional?",
        options: [
            "Proporcionando métodos sistemáticos y fundamentados para derivar casos de prueba rigurosos, maximizando la cobertura y mitigación de riesgos con base científica.",
            "Convirtiendo al evaluador en un programador de sistemas operativos de bajo nivel.",
            "Eliminando la necesidad de pensar críticamente durante la ejecución.",
            "Reduciendo el proceso de pruebas a una actividad puramente improvisada."
        ],
        correct: 0,
        explanation: "Las técnicas formales otorgan rigor científico e ingenieril a la profesión de testing.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.1",
        summary: ["Técnicas de análisis y diseño: Métodos sistemáticos y científicos para maximizar rigor y cobertura."]
    },

    // ==========================================
    // CAPÍTULO 5: Gestión de las Actividades de Prueba (30 preguntas K1/K2)
    // ==========================================
    {
        id: 511, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "Según la sección 5.1.1, ¿cuál es el propósito principal del 'Plan de Pruebas' (Test Plan) en un proyecto de software?",
        options: [
            "Definir el alcance, los enfoques, los recursos y el cronograma de las actividades de prueba para garantizar la alineación con los objetivos del proyecto.",
            "Sustituir por completo las reuniones de seguimiento diario (Standup) del equipo de desarrollo.",
            "Establecer las sanciones salariales para los desarrolladores que introduzcan más de tres bugs.",
            "Garantizar que el sistema no contenga ningún tipo de defecto al momento de salir a producción."
        ],
        correct: 0,
        explanation: "El plan de pruebas detalla cómo, cuándo y con qué recursos se llevarán a cabo las actividades de control y aseguramiento de la calidad.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1.1",
        summary: ["Plan de Pruebas: Define alcance, enfoque, recursos, cronograma y riesgos de calidad."]
    },
    {
        id: 512, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "En el contexto de la gestión de riesgos (Sección 5.2), ¿cómo se define un 'riesgo de producto'?",
        options: [
            "Un riesgo relacionado con la calidad, arquitectura, rendimiento o características de funcionamiento del software bajo prueba.",
            "Un riesgo financiero derivado de la quiebra imprevista de los proveedores de servicios en la nube.",
            "Una huelga del personal administrativo de la empresa contratante.",
            "Un aumento en los impuestos gubernamentales aplicados al software comercial."
        ],
        correct: 0,
        explanation: "Un riesgo de producto afecta directamente las características de calidad del sistema (ej. bajo rendimiento, fallas de seguridad, usabilidad deficiente).",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.2.1",
        summary: ["Riesgo de producto: Afecta atributos de calidad del software (rendimiento, seguridad, fiabilidad)."]
    },
    {
        id: 513, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Cuál es la diferencia conceptual entre un 'riesgo de proyecto' y un 'riesgo de producto' (Sección 5.2.1)?",
        options: [
            "El riesgo de proyecto afecta la capacidad de entregar el proyecto a tiempo o dentro del presupuesto; el riesgo de producto afecta la calidad del software entregado.",
            "El riesgo de proyecto solo ocurre en fases de mantenimiento y el de producto en fase de requisitos.",
            "No existe diferencia; ambos términos se refieren exactamente al mismo concepto de gestión.",
            "El riesgo de producto es gestionado exclusivamente por el departamento legal de la compañía."
        ],
        correct: 0,
        explanation: "Los riesgos de proyecto amenazan el calendario y los recursos (gestión); los riesgos de producto amenazan la calidad técnica del sistema.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.2.1",
        summary: ["Riesgo de proyecto (cronograma/presupuesto) vs Riesgo de producto (calidad/rendimiento técnico)."]
    },
    {
        id: 514, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "En la gestión de incidentes (Sección 5.5), ¿qué información fundamental debe contener un 'informe de defecto' bien estructurado?",
        options: [
            "Una descripción clara, pasos para reproducir la falla, resultados esperados vs. obtenidos, severidad, prioridad y evidencias (logs o capturas).",
            "Opiniones personales sobre el desempeño del desarrollador que escribió el código.",
            "Un análisis financiero detallado del costo de la licencia de Jira utilizada.",
            "La biografía profesional del analista de calidad que descubrió el error."
        ],
        correct: 0,
        explanation: "Un reporte de incidente efectivo debe ser reproducible, claro y objetivo para facilitar el análisis de causa raíz y corrección.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.5",
        summary: ["Informe de defecto: Debe incluir pasos de reproducción, evidencias y comparación esperado/obtenido."]
    },
    {
        id: 515, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué diferencia existe entre la 'Severidad' (Severity) y la 'Prioridad' (Priority) de un defecto (Sección 5.5)?",
        options: [
            "La severidad mide el impacto técnico del defecto en el sistema; la prioridad determina el orden en que el equipo debe corregirlo según el negocio.",
            "La severidad la define el cliente y la prioridad la decide exclusivamente el compilador de código.",
            "Son sinónimos exactos que miden el tiempo transcurrido desde la creación del ticket.",
            "La prioridad mide el tamaño físico del archivo de código afectado."
        ],
        correct: 0,
        explanation: "Un bug puede tener alta severidad técnica (ej. rompe una función secundaria rara vez usada) pero baja prioridad de negocio frente a un cambio urgente.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.5",
        summary: ["Severidad (impacto técnico) vs Prioridad (urgencia de negocio para su corrección)."]
    },
    {
        id: 516, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿En qué consiste la técnica de análisis y mitigación de riesgos de prueba (Sección 5.2.2)?",
        options: [
            "Identificar los riesgos potenciales, evaluar su probabilidad e impacto, y definir estrategias de mitigación o planes de contingencia centrando las pruebas donde el riesgo es mayor.",
            "Ignorar todos los problemas técnicos hasta que el cliente los descubra en producción.",
            "Contratar un seguro de responsabilidad civil para cubrir errores de programación.",
            "Aumentar el presupuesto del proyecto en un 500% de manera arbitraria."
        ],
        correct: 0,
        explanation: "Las pruebas basadas en riesgos priorizan el esfuerzo de testing en las áreas más críticas y con mayor probabilidad de fallo.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.2.2",
        summary: ["Mitigación de riesgos: Prioriza y enfoca las pruebas en las áreas de mayor impacto y probabilidad."]
    },
    {
        id: 517, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "Según la sección 5.3, ¿cuál es el objetivo principal de los 'Informes de Prueba' (Test Progress and Completion Reports)?",
        options: [
            "Comunicar el estado actual de las actividades de prueba a los interesados (stakeholders), evaluando si se cumplen los criterios de salida para decidir la liberación.",
            "Sustituir los contratos legales firmados con los clientes corporativos.",
            "Evaluar el rendimiento individual de cada probador para aplicar amonestaciones laborales.",
            "Generar código fuente ejecutable para corregir bugs de manera automática."
        ],
        correct: 0,
        explanation: "Los informes de prueba proporcionan transparencia sobre el avance, los riesgos remanentes y la calidad alcanzada.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.3",
        summary: ["Informes de prueba: Comunican el progreso, riesgos y estado de calidad para la toma de decisiones."]
    },
    {
        id: 518, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "En la planificación de pruebas (Sección 5.1), ¿qué representan los 'Criterios de Entrada' (Entry Criteria)?",
        options: [
            "Las condiciones previas obligatorias que deben cumplirse antes de iniciar una actividad de prueba (ej. entorno disponible, pruebas unitarias pasadas).",
            "La hora exacta en que los analistas deben ingresar a la oficina por la mañana.",
            "El número mínimo de tazas de café requeridas durante el sprint.",
            "Los requisitos legales para registrar una empresa de software."
        ],
        correct: 0,
        explanation: "Los criterios de entrada evitan iniciar fases de prueba en condiciones caóticas o con artefactos incompletos.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1.3",
        summary: ["Criterios de entrada: Condiciones previas requeridas para arrancar formalmente las pruebas."]
    },
    {
        id: 519, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué función cumple el seguimiento del control de versiones y configuración (Configuration Management, Sección 5.4) en las pruebas?",
        options: [
            "Garantizar la trazabilidad y unicidad del testware, código fuente y entornos, asegurando que se pruebe exactamente la versión correcta.",
            "Evitar que los desarrolladores utilicen herramientas de control de código como Git.",
            "Eliminar la necesidad de realizar respaldos de bases de datos.",
            "Sustituir por completo la gestión de incidencias en Jira."
        ],
        correct: 0,
        explanation: "La gestión de configuración asegura que versiones de código, scripts de prueba y documentación estén alineados y controlados.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.4",
        summary: ["Gestión de configuración: Asegura trazabilidad y control de versiones entre código y testware."]
    },
    {
        id: 520, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "En el contexto de la gestión de incidencias, ¿qué sucede cuando un defecto reportado se marca como 'Rechazado' o 'Invalid'?",
        options: [
            "Que el equipo determina que no constituye un defecto real (ej. comportamiento esperado por diseño o error de interpretación del usuario).",
            "Que el sistema se autodestruye para proteger la base de datos.",
            "Que el desarrollador es despedido inmediatamente de la compañía.",
            "Que la historia de usuario se borra del Product Backlog de forma permanente."
        ],
        correct: 0,
        explanation: "Un reporte rechazado indica que tras el análisis no se considera un bug válido conforme a las especificaciones o requerimientos.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.5",
        summary: ["Defecto rechazado/invalid: El equipo determina que no es un bug real o es comportamiento esperado."]
    },
    {
        id: 521, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué son los 'Cuadrantes de Prueba' (Test Quadrants) popularizados en metodologías ágiles (Sección 5.1.7)?",
        options: [
            "Un modelo que agrupa los tipos de prueba según su orientación (tecnología o negocio) y su propósito (apoyar al equipo o criticar el producto).",
            "Las cuatro esquinas físicas de la oficina donde se sientan los analistas de calidad.",
            "Un conjunto de bases de datos relacionales organizadas en clústeres geográficos.",
            "Los cuatro puntos cardinales utilizados para calibrar servidores GPS."
        ],
        correct: 0,
        explanation: "Ayudan a equilibrar pruebas unitarias, funcionales, exploratorias y de aceptación en equipos ágiles.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1.7",
        summary: ["Cuadrantes de prueba: Modelo ágil que clasifica tests por orientación y propósito."]
    },
    {
        id: 522, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué representa la 'Pirámide de Pruebas' (Test Pyramid) en la estrategia de automatización (Sección 5.1.6)?",
        options: [
            "Una distribución que recomienda una base sólida de pruebas unitarias rápidas y numerosas, con menos pruebas de integración y pocas pruebas de interfaz de usuario (UI).",
            "Una estructura arquitectónica de piedra utilizada para almacenar servidores en Egipto.",
            "Una jerarquía salarial basada en la cantidad de código automatizado escrito.",
            "Un diagrama de flujo contable para calcular los costos de licencias."
        ],
        correct: 0,
        explanation: "Ilustra que las pruebas unitarias deben ser la mayoría por velocidad y bajo costo, dejando las UI al mínimo necesario.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1.6",
        summary: ["Pirámide de pruebas: Distribución óptima con base masiva de tests unitarios rápidos y pocas UI."]
    },
    {
        id: 523, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Cómo se gestiona el riesgo cuando un riesgo identificado se materializa y se convierte en un problema real?",
        options: [
            "Ejecutando el plan de contingencia (contingency plan) previamente definido durante la fase de análisis de riesgos.",
            "Ignorando el problema hasta que el cliente decida cancelar el contrato comercial.",
            "Despidiendo inmediatamente al director general de la empresa.",
            "Cambiando el nombre del proyecto en Jira para ocultar la incidencia."
        ],
        correct: 0,
        explanation: "Los planes de contingencia son las respuestas preparadas de antemano por si el riesgo ocurre.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.2.2",
        summary: ["Plan de contingencia: Respuesta planificada activada cuando un riesgo se materializa."]
    },
    {
        id: 524, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué métrica se utiliza comúnmente para medir la densidad de defectos (Defect Density)?",
        options: [
            "El número de defectos encontrados en un componente dividido por su tamaño (ej. KLOC - miles de líneas de código o tamaño funcional).",
            "El peso físico en gramos de los discos duros que almacenan el código fuente.",
            "La cantidad de tazas de café consumidas por los desarrolladores durante el mes.",
            "El número de reuniones de seguimiento realizadas en el sprint."
        ],
        correct: 0,
        explanation: "La densidad de defectos ayuda a identificar módulos propensos a errores y calidad relativa.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.3",
        summary: ["Densidad de defectos: Métrica de calidad que relaciona cantidad de bugs con tamaño del módulo."]
    },
    {
        id: 525, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué es una estimación de pruebas basada en métricas (Metrics-based Estimation)?",
        options: [
            "Calcular el esfuerzo y tiempo requerido basándose en datos históricos de proyectos anteriores similares.",
            "Adivinar al azar los plazos para complacer a los gerentes de ventas.",
            "Medir la velocidad de tecleo de los evaluadores mediante cronómetros.",
            "Contar la cantidad de letras que tiene el documento de requisitos."
        ],
        correct: 0,
        explanation: "Se apoya en estadísticas reales de rendimiento y velocidad de proyectos pasados.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1.4",
        summary: ["Estimación basada en métricas: Cálculo de plazos apoyado en datos históricos reales."]
    },
    {
        id: 526, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué es una estimación de pruebas basada en expertos (Expert-based Estimation)?",
        options: [
            "Confiar en la experiencia, intuición y criterio de especialistas o líderes técnicos para calcular el esfuerzo necesario.",
            "Consultar a una inteligencia artificial generativa sin experiencia en desarrollo.",
            "Preguntar a clientes que nunca han visto el sistema informático.",
            "Sortear las tareas entre los pasantes recién contratados."
        ],
        correct: 0,
        explanation: "Utiliza el juicio experto (ej. Planning Poker o Delphi) cuando faltan datos históricos detallados.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1.4",
        summary: ["Estimación basada en expertos: Cálculo de esfuerzo guiado por el juicio y experiencia de especialistas."]
    },
    {
        id: 527, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Cuál es el propósito del monitoreo y control de pruebas (Test Monitoring and Control)?",
        options: [
            "Comparar el progreso real frente al plan de pruebas establecido, tomando acciones correctivas cuando existan desviaciones.",
            "Imponer castigos corporativos a los analistas que encuentren más de diez bugs al día.",
            "Ocultar los retrasos del cronograma para evitar llamadas de atención de la gerencia.",
            "Sustituir por completo las actividades de ejecución de casos de prueba."
        ],
        correct: 0,
        explanation: "El control implica realinear el proyecto tomando medidas correctivas ante desvíos detectados.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.3",
        summary: ["Monitoreo y control: Seguimiento del avance real vs planificado y aplicación de correcciones."]
    },
    {
        id: 528, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué implica la reutilización de testware en proyectos iterativos o similares?",
        options: [
            "Aprovechar planes, scripts, datos y casos de prueba previamente creados para reducir el esfuerzo en futuros ciclos de prueba.",
            "Borrar todos los archivos de prueba anteriores para empezar siempre desde cero.",
            "Vender los casos de prueba a competidores de la industria comercial.",
            "Impedir que se realicen modificaciones en los scripts automatizados."
        ],
        correct: 0,
        explanation: "La reutilización optimiza costos y agiliza la cobertura en productos con bases similares.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.4",
        summary: ["Reutilización de testware: Aprovechamiento de artefactos previos para optimizar esfuerzos futuros."]
    },
    {
        id: 529, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué es una auditoría de calidad de pruebas (Test Audit)?",
        options: [
            "Una evaluación independiente realizada por personal externo para verificar si el proceso de pruebas cumple con los estándares definidos.",
            "Un conteo físico de las computadoras portátiles en la oficina.",
            "Una revisión fiscal de las facturas de la empresa.",
            "Una prueba de estrés realizada a los servidores de correo electrónico."
        ],
        correct: 0,
        explanation: "Garantiza la conformidad de los procesos de calidad frente a normas o directrices corporativas.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.3",
        summary: ["Auditoría de pruebas: Evaluación independiente de la conformidad de los procesos de calidad."]
    },
    {
        id: 530, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "En conclusión, ¿por qué la gestión eficaz de las actividades de prueba es vital para el éxito del proyecto?",
        options: [
            "Porque optimiza la asignación de recursos, mitiga riesgos críticos, garantiza la transparencia de calidad y asegura entregas bajo control.",
            "Porque elimina la necesidad de contar con desarrolladores en la organización.",
            "Porque reduce la complejidad matemática de los algoritmos de software.",
            "Porque garantiza que el presupuesto gerencial se gaste en su totalidad."
        ],
        correct: 0,
        explanation: "Una buena gestión de pruebas equilibra calidad, tiempo, presupuesto y mitigación de riesgos.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1",
        summary: ["Gestión eficaz de pruebas: Equilibrio óptimo de recursos, mitigación de riesgos y éxito en entregas."]
    },

    // ==========================================
    // CAPÍTULO 6: Herramientas de Prueba (30 preguntas K1/K2)
    // ==========================================
    {
        id: 611, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "Según la sección 6.1, ¿cuál es el propósito principal de las 'Herramientas de gestión de pruebas' (Test Management Tools)?",
        options: [
            "Facilitar la gestión y el seguimiento de requisitos, planes de prueba, casos de prueba, ejecuciones e informes de incidentes.",
            "Compilar y empaquetar código fuente en binarios ejecutables para servidores de producción.",
            "Generar datos de prueba sintéticos mediante algoritmos de inteligencia artificial de caja blanca.",
            "Simular la carga concurrente de millones de usuarios en una API RESTful."
        ],
        correct: 0,
        explanation: "Las herramientas de gestión de pruebas centralizan la información del testware y permiten la trazabilidad entre requisitos, casos de prueba y defectos.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Herramientas de gestión: Centralizan requisitos, casos de prueba, ejecución e informes de incidentes."]
    },
    {
        id: 612, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué tipo de herramientas de prueba automatizadas se utilizan para evaluar el rendimiento, los tiempos de respuesta y el uso de recursos bajo carga (Sección 6.1)?",
        options: [
            "Herramientas de pruebas de rendimiento y carga (Performance testing tools).",
            "Herramientas de análisis estático de código fuente (SAST).",
            "Herramientas de diseño guiado por comportamiento (BDD).",
            "Herramientas de gestión de configuración y control de versiones."
        ],
        correct: 0,
        explanation: "Las herramientas de rendimiento simulan múltiples usuarios virtuales para medir el comportamiento del sistema bajo estrés o carga operativa.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Herramientas de rendimiento: Simulan carga y estrés para medir tiempos de respuesta."]
    },
    {
        id: 613, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "En relación con los riesgos potenciales de la automatización de pruebas (Sección 6.2), ¿cuál de los siguientes se considera un peligro crítico?",
        options: [
            "Crear expectativas poco realistas sobre la herramienta (ej. creer que automatizar reemplaza por completo el pensamiento humano o las pruebas manuales).",
            "Aumentar en exceso la velocidad de ejecución de las pruebas unitarias en los pipelines de CI/CD.",
            "Reducir drásticamente la cantidad de reportes de errores en producción.",
            "Mejorar la consistencia y repetibilidad de las regresiones."
        ],
        correct: 0,
        explanation: "Uno de los riesgos principales es sobreestimar los beneficios de las herramientas o descuidar que la automatización requiere mantenimiento y juicio crítico.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.2",
        summary: ["Riesgos de herramientas: Expectativas poco realistas y suponer que sustituyen el juicio humano."]
    },
    {
        id: 614, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué beneficios directos se obtienen al introducir herramientas de automatización para la ejecución de pruebas de regresión (Sección 6.1)?",
        options: [
            "Mayor repetibilidad, consistencia en la ejecución, reducción de errores humanos en tareas repetitivas y ahorro de tiempo a largo plazo.",
            "Eliminación absoluta de la necesidad de diseñar nuevos casos de prueba.",
            "Garantía total de que el software nunca tendrá bugs lógicos complejos.",
            "Reducción del costo inicial de adquisición de licencias a cero."
        ],
        correct: 0,
        explanation: "La automatización destaca en tareas repetitivas y de regresión, ejecutándolas con idéntica precisión y mayor rapidez.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Beneficios de la automatización: Repetibilidad, consistencia y eficiencia en regresiones."]
    },
    {
        id: 615, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "Según la sección 6.3, ¿qué factores clave se deben evaluar al realizar un 'Piloto de Herramientas' antes de su adopción definitiva?",
        options: [
            "Probar la herramienta en un proyecto real de tamaño reducido para medir su adaptabilidad, facilidad de uso, curva de aprendizaje y retorno de inversión (ROI).",
            "Comprar todas las licencias corporativas disponibles sin consultar al equipo técnico.",
            "Despedir al personal de pruebas manuales para obligar el uso exclusivo de la herramienta.",
            "Modificar el sistema operativo de todos los servidores de producción de la empresa."
        ],
        correct: 0,
        explanation: "Un piloto permite validar si la herramienta se ajusta a los procesos de la organización y si aporta el valor esperado antes de una compra masiva.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["Piloto de herramientas: Evaluación controlada en un proyecto real para medir viabilidad y ROI."]
    },
    {
        id: 616, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué función desempeñan las herramientas de 'Análisis Estático' (Static Analysis Tools) dentro del ecosistema de herramientas de prueba (Sección 6.1)?",
        options: [
            "Analizar el código fuente o la documentación en busca de defectos, vulnerabilidades y desviaciones de estándares sin ejecutar el programa.",
            "Ejecutar pruebas unitarias concurrentes en múltiples navegadores web.",
            "Medir el consumo de CPU y memoria RAM en servidores en la nube.",
            "Gestionar el backlog de historias de usuario en tableros Scrum."
        ],
        correct: 0,
        explanation: "Las herramientas estáticas examinan la estructura interna del código de forma automatizada previniendo fallas antes de la compilación.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Herramientas de análisis estático: Inspeccionan código sin ejecutarlo en busca de fallas y vulnerabilidades."]
    },
    {
        id: 617, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Por qué es importante considerar el mantenimiento de los scripts de prueba automatizados (Test Maintenance) al seleccionar una herramienta (Sección 6.2)?",
        options: [
            "Porque los cambios frecuentes en la interfaz de usuario o en los requisitos pueden romper los scripts, exigiendo esfuerzo y costos continuos de actualización.",
            "Porque los scripts de prueba caducan legalmente después de 30 días de su creación.",
            "Porque las herramientas de automatización prohíben modificar el código fuente del sistema.",
            "Porque el mantenimiento lo realizan exclusivamente auditores externos."
        ],
        correct: 0,
        explanation: "Los scripts automatizados son código de software y requieren mantenimiento constante cada vez que la aplicación evoluciona.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.2",
        summary: ["Mantenimiento de scripts: Costo asociado a la actualización de pruebas ante cambios en el sistema."]
    },
    {
        id: 618, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "En el contexto de la selección de herramientas (Sección 6.3), ¿qué rol juega la evaluación de la interoperabilidad con otras herramientas del pipeline?",
        options: [
            "Asegurar que la herramienta pueda integrarse fluidamente con sistemas de control de versiones, CI/CD y gestión de incidencias (ej. Jira, Jenkins, Git).",
            "Garantizar que la herramienta funcione sin conexión a internet de manera perpetua.",
            "Impidiendo que los desarrolladores utilicen editores de texto avanzados.",
            "Reduciendo el tamaño de los discos duros requeridos."
        ],
        correct: 0,
        explanation: "La integración fluida con el ecosistema tecnológico existente (CI/CD, repositorios, gestores) es vital para una automatización exitosa.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["Interoperabilidad: Capacidad de integración con CI/CD, control de versiones y Jira."]
    },
    {
        id: 619, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué objetivo persiguen las herramientas de cobertura de código (Code Coverage Tools) en el nivel de componentes?",
        options: [
            "Medir qué porcentaje del código fuente (sentencias, decisiones o ramas) ha sido ejercitado por el conjunto de pruebas ejecutadas.",
            "Calcular el salario mensual de los programadores según las líneas escritas.",
            "Comprobar la velocidad de carga de las páginas web en dispositivos móviles.",
            "Sustituir la necesidad de redactar casos de prueba funcionales."
        ],
        correct: 0,
        explanation: "La cobertura de código indica qué partes del programa han sido probadas y ayuda a identificar áreas sin verificar.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Cobertura de código: Mide el porcentaje de código ejecutado por las pruebas (sentencias/ramas)."]
    },
    {
        id: 620, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "Según la sección 6.3, ¿cuál es un indicador clave de éxito (KPI) al evaluar el Retorno de Inversión (ROI) de una herramienta de automatización?",
        options: [
            "La reducción del tiempo total de prueba en ciclos de regresión y el ahorro de esfuerzo acumulado frente a la ejecución manual repetitiva.",
            "La cantidad de tazas de café consumidas por el equipo de automatización.",
            "El número de servidores físicos apagados en el centro de datos.",
            "La eliminación total de los analistas de calidad en la empresa."
        ],
        correct: 0,
        explanation: "El ROI se demuestra cuando el ahorro de tiempo y la eficiencia en las regresiones superan el costo de inversión inicial y mantenimiento de la herramienta.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["ROI de herramientas: Medido en ahorro de tiempo y eficiencia en ciclos de regresión frente a lo manual."]
    },
    {
        id: 621, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué son las herramientas de virtualización de servicios (Service Virtualization Tools)?",
        options: [
            "Herramientas que simulan el comportamiento de componentes o servicios dependientes ausentes (ej. APIs externas de pago) para permitir pruebas tempranas.",
            "Sistemas operativos virtuales que se ejecutan en servidores de computación cuántica.",
            "Aplicaciones móviles para visualizar gráficos en realidad aumentada.",
            "Bases de datos relacionales sin almacenamiento físico en disco."
        ],
        correct: 0,
        explanation: "Permiten probar sistemas antes de que los servicios de terceros estén listos o disponibles.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Virtualización de servicios: Simulación de componentes o APIs externas ausentes para pruebas tempranas."]
    },
    {
        id: 622, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué rol cumplen las herramientas de monitorización y despliegue (Continuous Delivery Tools) en los pipelines de DevOps?",
        options: [
            "Automatizar la promoción de compilaciones a través de entornos (desarrollo, QA, producción) y supervisar la salud operativa.",
            "Despedir automáticamente a los desarrolladores cuando un script de prueba falla.",
            "Imprimir informes físicos en papel cada hora para la gerencia.",
            "Sustituir la necesidad de utilizar control de versiones en Git."
        ],
        correct: 0,
        explanation: "Automatizan el flujo de entrega y alertan sobre anomalías operativas en tiempo real.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Herramientas de entrega continua: Automatizan despliegues en entornos y monitorización operativa."]
    },
    {
        id: 623, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué factores influyen en los costos totales al adquirir una herramienta de automatización comercial (COTS)?",
        options: [
            "Costo de licencias, soporte técnico, capacitación del personal, infraestructura de hardware y mantenimiento continuo de scripts.",
            "Únicamente el precio impreso en la caja del software.",
            "El costo de la energía eléctrica consumida por la pantalla.",
            "El salario de los consultores legales externos."
        ],
        correct: 0,
        explanation: "El costo total de propiedad (TCO) incluye licencias, soporte, formación y mantenimiento a largo plazo.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["Costo total de propiedad (TCO): Incluye licencias, soporte, formación y mantenimiento."]
    },
    {
        id: 624, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Por qué es riesgoso depender de una herramienta de automatización propietaria sin estándares abiertos?",
        options: [
            "Porque genera dependencia del proveedor (vendor lock-in), dificultando la migración futura y encareciendo las renovaciones de licencias.",
            "Porque las herramientas propietarias prohíben el uso de computadoras portátiles.",
            "Porque obligan a escribir código en lenguaje ensamblador.",
            "Porque reducen la velocidad de internet de la oficina."
        ],
        correct: 0,
        explanation: "El vendor lock-in ata a la organización a los precios y condiciones de un único proveedor de software.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.2",
        summary: ["Vendor lock-in: Riesgo de dependencia exclusiva de un proveedor propietario."]
    },
    {
        id: 625, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué objetivos persiguen las herramientas de análisis de cobertura de requisitos (Requirements Coverage Tools)?",
        options: [
            "Vincular y medir qué requisitos han sido cubiertos y verificados por los casos de prueba implementados.",
            "Calcular el impuesto sobre la renta de los empleados.",
            "Monitorear la temperatura ambiental del centro de datos.",
            "Generar diseños gráficos vectoriales en formato SVG."
        ],
        correct: 0,
        explanation: "Muestran de forma transparente qué requerimientos siguen sin pruebas asociadas.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Cobertura de requisitos: Miden qué requerimientos de negocio cuentan con respaldo de pruebas."]
    },
    {
        id: 626, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué características debe tener un buen plan de implantación (Rollout Plan) para introducir una nueva herramienta?",
        options: [
            "Capacitación gradual del personal, definición de métricas de éxito, soporte técnico interno y despliegue por fases.",
            "Obligar a todo el personal a dominar la herramienta en 24 horas sin capacitación previa.",
            "Comprar licencias para todos los empleados sin importar si la van a usar.",
            "Eliminar todos los procesos manuales el primer día sin pruebas piloto."
        ],
        correct: 0,
        explanation: "Una implantación gradual y estructurada asegura la adopción exitosa por parte del equipo.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["Plan de implantación: Adopción gradual, formación, métricas y despliegue por fases."]
    },
    {
        id: 627, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué tipo de herramientas apoyan la ejecución de pruebas de aceptación basadas en comportamiento (BDD - Behavior-Driven Development)?",
        options: [
            "Herramientas como Cucumber o SpecFlow que interpretan especificaciones escritas en lenguaje natural estructurado (Given/When/Then).",
            "Compiladores de lenguaje C++ para sistemas embebidos de 8 bits.",
            "Editores de texto plano sin soporte para compilación.",
            "Sistemas de respaldo de bases de datos relacionales en cinta magnética."
        ],
        correct: 0,
        explanation: "Permiten que negocio y tecnología colaboren usando especificaciones ejecutables en lenguaje natural.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Herramientas BDD (Cucumber/SpecFlow): Interpretan lenguaje natural estructurado como código ejecutable."]
    },
     {
        id: 628, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Cuál es el riesgo de automatizar pruebas sobre una aplicación inestable o con requisitos en constante cambio?",
        options: [
            "Se genera una enorme pérdida de tiempo y recursos debido a la constante ruptura y mantenimiento correctivo de los scripts automatizados.",
            "El compilador borra automáticamente el repositorio de Git por seguridad.",
            "Los servidores de producción multiplican su velocidad de procesamiento.",
            "Se eliminan por completo los defectos lógicos del negocio."
        ],
        correct: 0,
        explanation: "Automatizar sobre caos inestable destruye el ROI; la estabilidad debe preceder a la automatización masiva.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.2",
        summary: ["Automatizar sobre inestabilidad: Destruye el ROI por el alto costo de mantenimiento de scripts."]
    },
    {
        id: 629, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué objetivo persiguen las herramientas de gestión de datos de prueba (Test Data Management Tools)?",
        options: [
            "Generar, enmascarar, extraer o limpiar volúmenes de datos sintéticos o seguros para alimentar los entornos de prueba.",
            "Borrar permanentemente todas las bases de datos de la compañía cada medianoche.",
            "Cifrar contraseñas de correo electrónico mediante algoritmos obsoletos.",
            "Imprimir directorios telefónicos en formato de papel continuo."
        ],
        correct: 0,
        explanation: "Aseguran la disponibilidad de datos limpios, sintéticos y respetuosos de la privacidad (GDPR).",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Gestión de datos de prueba: Generación, enmascaramiento y suministro seguro de datos."]
    },
    {
        id: 630, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "En conclusión, ¿cómo impacta la selección e implementación adecuada de herramientas en la madurez de calidad de una organización?",
        options: [
            "Multiplica la eficiencia operativa, reduce tareas repetitivas, potencia la cobertura y consolida la trazabilidad en todo el ciclo de vida del software.",
            "Sustituir por completo la necesidad de contar con evaluadores humanos capacitados.",
            "Garantiza que el software nunca jamás experimentará fallas en producción.",
            "Reduce la complejidad de los contratos legales comerciales a cero."
        ],
        correct: 0,
        explanation: "Las herramientas son potentes aceleradores de procesos cuando se implementan con estrategia y criterio experto.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Herramientas de prueba: Aceleradores estratégicos que potencian la eficiencia, cobertura y trazabilidad."]
    }
];