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

    {
        id: 131, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "Desde la perspectiva de la teoría de la información, ¿qué revela la ejecución de una prueba de software que resulta exitosa al no encontrar defectos?",
        options: [
            "Reduce la incertidumbre sobre el comportamiento del sistema bajo las condiciones probadas, aunque no garantiza ausencia absoluta de bugs.",
            "Demuestra con certeza matemática que el programa está 100% libre de fallas en todos los entornos posibles.",
            "Indica que el caso de prueba estaba mal diseñado y debe ser descartado inmediatamente.",
            "Obliga a suspender las pruebas dinámicas del proyecto de forma permanente."
        ],
        correct: 0,
        explanation: "Las pruebas reducen el riesgo y la incertidumbre, pero debido a la imposibilidad de pruebas exhaustivas, nunca garantizan perfección absoluta.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.3",
        summary: ["Pruebas exitosas: Reducen la incertidumbre y el riesgo, mas no garantizan ausencia total de defectos."]
    },
    {
        id: 132, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cómo influye el principio de prueba 'Las pruebas son contextuales' en la selección de métricas de calidad?",
        options: [
            "Las métricas deben adaptarse al dominio específico de la aplicación (ej. seguridad en banca vs. velocidad en videojuegos).",
            "Todas las aplicaciones del mundo deben utilizar exactamente el mismo conjunto de cinco métricas estandarizadas.",
            "Las métricas financieras corporativas sustituyen por completo a las métricas técnicas de defectos.",
            "Las métricas de prueba solo pueden aplicarse en la fase de mantenimiento del software."
        ],
        correct: 0,
        explanation: "El contexto del negocio y los riesgos dictan qué indicadores son verdaderamente relevantes para evaluar el éxito.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.3",
        summary: ["Métricas contextuales: Se adaptan al dominio y criticidad del sistema evaluado."]
    },
    {
        id: 133, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué impacto tiene la falta de independencia en las pruebas sobre la detección de defectos sutiles de lógica?",
        options: [
            "Tiende a enmascarar los errores debido a que el autor comparte las mismas suposiciones erróneas que tuvo al escribir el código.",
            "Mejora radicalmente la velocidad de compilación y ejecución de los scripts en el entorno local.",
            "Garantiza que todos los defectos de integración sean resueltos en menos de una hora.",
            "Elimina por completo la necesidad de redactar reportes de incidentes."
        ],
        correct: 0,
        explanation: "La ausencia de independencia ciega al equipo ante fallas lógicas complejas por el sesgo compartido.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5.3",
        summary: ["Falta de independencia: Propicia el enmascaramiento de errores por sesgo conceptual compartido."]
    },
    {
        id: 134, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cuál es el propósito de establecer una 'Línea Base' (Baseline) en los productos de trabajo de prueba?",
        options: [
            "Fijar formalmente una versión aprobada de un artefacto que servirá como punto de referencia para cambios futuros controlados.",
            "Eliminar todas las copias de seguridad de la base de datos para liberar espacio en disco.",
            "Establecer el salario mínimo del personal de ingeniería de calidad.",
            "Congelar el cronograma del proyecto impidiendo cualquier modificación de requisitos."
        ],
        correct: 0,
        explanation: "Una línea base permite controlar cambios posteriores mediante trazabilidad y gestión de configuración.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.4.3",
        summary: ["Línea base (Baseline): Versión oficial aprobada que sirve de referencia para cambios controlados."]
    },
    {
        id: 135, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué implica la corresponsabilidad de la calidad en el enfoque de 'Equipo Completo' (Whole Team Approach)?",
        options: [
            "Que tanto desarrolladores, evaluadores como expertos de negocio asumen un compromiso activo con la excelencia del producto.",
            "Que los analistas de calidad asumen la obligación de programar toda la lógica de backend.",
            "Que el cliente final se encarga de ejecutar todas las pruebas unitarias y de integración.",
            "Que la gerencia financiera asume la responsabilidad de firmar los reportes de bugs."
        ],
        correct: 0,
        explanation: "La calidad no es propiedad de un solo departamento, sino un valor compartido por todo el equipo multidisciplinario.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5.2",
        summary: ["Corresponsabilidad: La calidad es un compromiso activo de todo el equipo multidisciplinario."]
    },
    {
        id: 136, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Por qué el análisis de riesgos es el núcleo para priorizar los casos de prueba cuando las pruebas exhaustivas son imposibles?",
        options: [
            "Porque permite enfocar el esfuerzo limitado de tiempo y recursos en las funciones más críticas y propensas a fallas graves.",
            "Porque garantiza que el 100% de las líneas de código alcancen cobertura de ramas.",
            "Porque elimina la necesidad de contar con un entorno de pruebas independiente.",
            "Porque reduce la cantidad de código fuente de la aplicación a cero."
        ],
        correct: 0,
        explanation: "Dado que no se puede probar todo, el riesgo ayuda a decidir inteligentemente dónde invertir el esfuerzo de prueba.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.3",
        summary: ["Priorización por riesgos: Optimiza el esfuerzo de prueba frente a limitaciones de tiempo y recursos."]
    },
    {
        id: 137, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué diferencia existe entre un defecto latente y una falla manifiesta?",
        options: [
            "El defecto latente está oculto en el código sin haberse ejecutado; la falla es la desviación observable del comportamiento del sistema en ejecución.",
            "El defecto latente ocurre en producción y la falla únicamente en entornos de desarrollo local.",
            "No hay diferencia; ambos términos describen exactamente el mismo fenómeno físico.",
            "El defecto latente lo genera el cliente y la falla el director de proyectos."
        ],
        correct: 0,
        explanation: "Un bug descansa latente hasta que una condición de ejecución lo activa y provoca una falla visible.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.2.3",
        summary: ["Defecto latente (oculto en código) vs Falla manifiesta (comportamiento observable al ejecutar)."]
    },
    {
        id: 138, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué papel juega la retroalimentación de las pruebas en la mejora de los procesos de desarrollo?",
        options: [
            "Permite identificar la causa raíz de los defectos recurrentes para ajustar los procesos y evitar que vuelvan a introducirse en el futuro.",
            "Sirve únicamente para sancionar económicamente a los programadores novatos.",
            "Retrasa las entregas comerciales y aumenta la burocracia documental del equipo.",
            "Sustituye por completo la necesidad de realizar revisiones de código estáticas."
        ],
        correct: 0,
        explanation: "Aprender de los errores encontrados mejora el proceso de ingeniería de software a lo largo del tiempo.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1.1",
        summary: ["Feedback para mejora de procesos: Identificación de causas raíz para prevenir futuros defectos."]
    },
    {
        id: 139, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cómo afecta la complejidad técnica de un sistema a la densidad esperada de errores humanos?",
        options: [
            "A mayor complejidad arquitectónica e interconexión, mayor es la probabilidad de introducir errores humanos y defectos difíciles de rastrear.",
            "La complejidad técnica reduce a cero la aparición de bugs gracias a la optimización de sintaxis.",
            "No existe correlación entre la complejidad de un sistema y la cantidad de fallas latentes.",
            "Los sistemas complejos eliminan la necesidad de realizar pruebas de integración."
        ],
        correct: 0,
        explanation: "Los sistemas altamente complejos superan la capacidad cognitiva lineal, incrementando el riesgo de errores.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.2.3",
        summary: ["Complejidad técnica: Incrementa proporcionalmente el riesgo de introducción de errores humanos."]
    },
    {
        id: 140, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cuál es el objetivo de mantener una trazabilidad bidireccional entre la base de pruebas y los casos de prueba?",
        options: [
            "Permitir verificar qué pruebas respaldan cada requisito y evaluar qué requisitos se ven afectados si un caso de prueba falla.",
            "Calcular de forma automática las horas extras trabajadas por los analistas.",
            "Sustituir la necesidad de utilizar herramientas de gestión de incidencias como Jira.",
            "Garantizar que el código fuente no supere un límite estricto de archivos."
        ],
        correct: 0,
        explanation: "La trazabilidad bidireccional conecta causa y efecto entre requisitos y resultados de prueba.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.4",
        summary: ["Trazabilidad bidireccional: Conecta requisitos con pruebas para análisis de impacto y cobertura."]
    },
    {
        id: 141, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué distingue a un analista de calidad con mentalidad orientada a la prevención frente a uno enfocado únicamente en la detección?",
        options: [
            "El enfocado en prevención revisa requisitos tempranamente para evitar que los bugs nazcan; el de detección se limita a ejecutar tests sobre código ya escrito.",
            "El de prevención no ejecuta pruebas dinámicas y el de detección no lee documentos.",
            "No hay diferencia operativa; ambas mentalidades son idénticas en la práctica ágil.",
            "El enfocado en prevención trabaja exclusivamente desde su casa los fines de semana."
        ],
        correct: 0,
        explanation: "La mentalidad preventiva (Shift-Left) actúa en las fases iniciales del SDLC para anticiparse a los errores.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5.1",
        summary: ["Mentalidad preventiva (Shift-Left): Actuación temprana en requisitos para evitar la creación de defectos."]
    },
    {
        id: 142, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Por qué el principio de prueba 'Las pruebas son contextuales' implica que no existe una única estrategia universal de testing?",
        options: [
            "Porque una estrategia diseñada para un software de dispositivos médicos no sirve para un portal de comercio minorista informal.",
            "Porque los lenguajes de programación cambian de sintaxis según el continente.",
            "Porque las herramientas de automatización bloquean la reutilización de scripts entre proyectos.",
            "Porque los clientes de diferentes industrias exigen siempre contratos en papel."
        ],
        correct: 0,
        explanation: "El nivel de riesgo y regulación dicta estrategias de prueba radicalmente diferentes según el sector.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.3",
        summary: ["Estrategias contextuales: Exigen adaptar el enfoque de pruebas a la industria, riesgos y regulaciones."]
    },
    {
        id: 143, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué función cumple el análisis de impacto dentro de las actividades de mantenimiento y control de calidad?",
        options: [
            "Determinar qué áreas del sistema y qué casos de prueba existentes se verán afectados por una modificación de código.",
            "Calcular el impacto financiero de las multas impuestas por el gobierno.",
            "Medir el impacto físico de la caída de un servidor sobre el suelo de la oficina.",
            "Establecer el impacto salarial de los despidos en el departamento técnico."
        ],
        correct: 0,
        explanation: "El análisis de impacto guía qué pruebas de regresión se deben ejecutar tras un cambio en el software.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.4",
        summary: ["Análisis de impacto: Determina el alcance de las pruebas de regresión ante modificaciones de código."]
    },
    {
        id: 144, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cómo contribuye la empatía comunicativa del evaluador a una mejor resolución de conflictos con los desarrolladores?",
        options: [
            "Presentando los reportes de defectos de manera objetiva, profesional y constructiva, enfocados en el riesgo y no en señalar culpables.",
            "Exigiendo disculpas públicas a los programadores cada vez que se detecta un bug crítico.",
            "Ocultando los defectos menores para evitar discusiones acaloradas en el equipo.",
            "Dejando que los desarrolladores descubran los errores por su cuenta sin notificarles."
        ],
        correct: 0,
        explanation: "Una comunicación empática y basada en evidencias técnicas fomenta la colaboración y reduce la defensividad.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5.1",
        summary: ["Comunicación empática: Reportes objetivos y constructivos que reducen la defensividad del desarrollador."]
    },
    {
        id: 145, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué implica que un producto de trabajo de prueba posea un alto nivel de legibilidad y estructura?",
        options: [
            "Que cualquier otro miembro del equipo (o auditor) puede comprender fácilmente los objetivos, pasos y expectativas del caso de prueba.",
            "Que el documento fue escrito utilizando un procesador de textos de pago costoso.",
            "Que el archivo contiene más de 500 páginas de especificaciones técnicas densas.",
            "Que está redactado en un código cifrado que solo los expertos senior entienden."
        ],
        correct: 0,
        explanation: "La claridad en el testware es vital para la repetibilidad y el traspaso de conocimiento en el equipo.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.4.3",
        summary: ["Testware legible: Facilita la comprensión, repetibilidad y transferencia de conocimiento."]
    },
    {
        id: 146, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Por qué la automatización masiva de pruebas sin una estrategia previa suele fracasar según los principios de prueba?",
        options: [
            "Porque la paradoja del pesticida y la falacia de ausencia de defectos demuestran que automatizar tests malos no garantiza la satisfacción del cliente.",
            "Porque las herramientas de automatización prohíben la ejecución de scripts en días hábiles.",
            "Porque los lenguajes de programación modernos bloquean la automatización de interfaces.",
            "Porque el costo de la energía eléctrica supera el valor del software automatizado."
        ],
        correct: 0,
        explanation: "Automatizar un proceso caótico o un caso de prueba inútil solo acelera el caos, sin aportar calidad real.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.3",
        summary: ["Automatización sin estrategia: Acelera el caos y contradice la falacia de ausencia de defectos."]
    },
    {
        id: 147, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué rol desempeña la retroalimentación del usuario final en la validación de la calidad percibida?",
        options: [
            "Permite contrastar las suposiciones teóricas del equipo de ingeniería con el uso real y las expectativas del mercado.",
            "Sustituye por completo la necesidad de ejecutar pruebas unitarias automatizadas.",
            "Sirve únicamente para calcular los impuestos de venta del producto comercial.",
            "Obliga a que el código fuente se reescriba desde cero cada trimestre."
        ],
        correct: 0,
        explanation: "El feedback real de producción valida si el sistema realmente satisface las necesidades del negocio.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1.1",
        summary: ["Feedback de usuarios: Contrasta la ingeniería teórica con la realidad de uso en el mercado."]
    },
    {
        id: 148, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cómo se relaciona la densidad de errores humanos con la fatiga y el agotamiento en largas jornadas de pruebas manuales?",
        options: [
            "La fatiga cognitiva incrementa exponencialmente la probabilidad de que el evaluador pase por alto defectos sutiles o cometa errores de registro.",
            "El agotamiento físico duplica la velocidad de ejecución y precisión de los casos de prueba.",
            "La fatiga no tiene ningún impacto sobre la agudeza mental de los analistas de calidad.",
            "El cansancio extremo convierte automáticamente las pruebas manuales en automatizadas."
        ],
        correct: 0,
        explanation: "Las tareas repetitivas y monótonas prolongadas provocan fatiga, reduciendo la efectividad del tester humano.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5.1",
        summary: ["Fatiga cognitiva: Incrementa el riesgo de pasar por alto defectos durante pruebas manuales prolongadas."]
    },
    {
        id: 149, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cuál es el beneficio de contar con un glosario unificado de términos de calidad (como el estándar ISTQB) en una organización?",
        options: [
            "Evitar malentendidos conceptuales entre desarrolladores, evaluadores, directivos y clientes al hablar de calidad y defectos.",
            "Imponer un idioma extranjero obligatorio para todos los empleados de la compañía.",
            "Reducir el tamaño de los manuales de usuario impresos.",
            "Garantizar que el software compile más rápido en los servidores."
        ],
        correct: 0,
        explanation: "Un lenguaje estándar unifica criterios y previene confusiones semánticas críticas en ingeniería.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1",
        summary: ["Glosario unificado: Previene malentendidos semánticos entre negocio, desarrollo y calidad."]
    },
    {
        id: 150, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "En síntesis global, ¿por qué el capítulo 1 de ISTQB establece que las pruebas son una profesión basada en la disciplina y la ingeniería?",
        options: [
            "Porque exigen métodos estructurados, pensamiento analítico, gestión rigurosa de riesgos y un enfoque sistemático para mitigar fallas tecnológicas.",
            "Porque requiere portar uniformes formales y credenciales de certificación obligatorias por la ley penal.",
            "Porque prohíbe el uso de la creatividad y la intuición humana en cualquier circunstancia.",
            "Porque reduce el proceso de desarrollo a una simple tarea administrativa de oficina."
        ],
        correct: 0,
        explanation: "El testing moderno es una disciplina de ingeniería rigurosa orientada a la gestión de riesgos y calidad.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5",
        summary: ["Testing como ingeniería: Disciplina estructurada y sistemática enfocada en la mitigación de riesgos."]
    },
    {
        id: 151, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué evalúa un analista de calidad al comprobar la 'adecuación funcional' (Functional Suitability) como parte de los fundamentos de calidad?",
        options: [
            "Si el sistema proporciona funciones que satisfacen las declaraciones y necesidades implícitas cuando se usa bajo condiciones específicas.",
            "Si la carcasa del equipo resiste impactos mecánicos severos.",
            "Si el consumo eléctrico del procesador cumple con normativas ecológicas.",
            "Si la velocidad de impresión de documentos PDF es instantánea."
        ],
        correct: 0,
        explanation: "La adecuación funcional mide si el software hace lo que se supone que debe hacer según los requisitos.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1.1",
        summary: ["Adecuación funcional: Mide si el sistema provee las funciones que satisfacen las necesidades especificadas."]
    },
    {
        id: 152, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué implica la independencia de pruebas a nivel organizacional en contraposición a la independencia a nivel de equipo de proyecto?",
        options: [
            "Involucrar evaluadores externos a la empresa o de un departamento de QA corporativo completamente ajeno al negocio de desarrollo.",
            "Que los desarrolladores prueben su propio código usando una computadora portátil diferente.",
            "Que el cliente final ejecute las pruebas desde su domicilio particular.",
            "Que los servidores de prueba se alojen en un país extranjero."
        ],
        correct: 0,
        explanation: "La máxima independencia organizacional reduce drásticamente los sesgos gerenciales y de desarrollo.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5.3",
        summary: ["Independencia organizacional: Evaluadores totalmente externos al equipo de desarrollo y gestión."]
    },
    {
        id: 153, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Por qué se considera que la falta absoluta de independencia en las pruebas puede ser peligrosa para productos críticos de aviación o salud?",
        options: [
            "Porque los creadores tienden a justificar lógicas complejas y pasar por alto fallas de seguridad que podrían costar vidas humanas.",
            "Porque las leyes internacionales prohíben que los programadores escriban más de diez líneas de código diario.",
            "Porque el software se negaría a compilar si no interviene un auditor externo.",
            "Porque incrementa el costo de las licencias de compilación en un 500%."
        ],
        correct: 0,
        explanation: "En sistemas críticos (Safety-critical), el sesgo de confirmación del autor puede derivar en fallas fatales.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5.3",
        summary: ["Riesgo de falta de independencia: En sistemas críticos, el sesgo del autor puede provocar fallas fatales."]
    },
    {
        id: 154, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué relación existe entre los costos de corrección de defectos y el momento en que estos son descubiertos?",
        options: [
            "Relación exponencial: cuanto más tarde se descubre un defecto en el ciclo de vida, exponencialmente más costosa es su reparación.",
            "Relación lineal inversa: los defectos descubiertos en producción son los más baratos de corregir.",
            "No existe relación económica entre el momento del hallazgo y el costo de reparación.",
            "Los defectos descubiertos en la fase de requisitos cuestan más que los detectados en producción."
        ],
        correct: 0,
        explanation: "Un bug hallado en requisitos se corrige modificando texto; en producción exige parches, despliegues y daña la reputación.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1.1",
        summary: ["Costo exponencial de corrección: Hallar defectos tarde en el SDLC encarece drásticamente su reparación."]
    },
    {
        id: 155, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué rol juega la documentación de los casos de prueba en la transferencia de proyectos entre diferentes equipos?",
        options: [
            "Asegura la continuidad operativa y el conocimiento técnico acumulado, evitando depender exclusivamente de la memoria de los evaluadores.",
            "Sirve únicamente para cumplir con cuotas de almacenamiento en la nube.",
            "Impide que nuevos empleados se incorporen al equipo de desarrollo.",
            "Sustituye por completo la necesidad de ejecutar pruebas de aceptación."
        ],
        correct: 0,
        explanation: "El testware documentado es un activo de conocimiento corporativo invaluable ante la rotación de personal.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.4.3",
        summary: ["Testware como activo: Garantiza continuidad operativa y transferencia de conocimiento ante rotación."]
    },
    {
        id: 156, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué implica la 'ilusión de calidad' generada por el cumplimiento ciego de métricas cuantitativas superficiales?",
        options: [
            "Creer que el software es excelente solo porque se completaron un millón de casos de prueba automatizados, ignorando si el negocio está satisfecho.",
            "Asumir que el sistema es defectuoso porque faltaba una taza de café en la oficina.",
            "Pensar que los desarrolladores son infalibles por escribir código en pantallas oscuras.",
            "Garantizar que el rendimiento del servidor superará cualquier expectativa."
        ],
        correct: 0,
        explanation: "Las métricas cuantitativas sin análisis cualitativo pueden engañar a la dirección sobre el verdadero estado de salud del software.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.3",
        summary: ["Ilusión de calidad: Confundir cumplimiento cuantitativo de tests con verdadera satisfacción del negocio."]
    },
    {
        id: 157, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Cómo apoya la mentalidad analítica del evaluador en la identificación de riesgos ocultos no documentados?",
        options: [
            "Permitiéndole inferir escenarios límite, dependencias implícitas y fallas sistémicas que los analistas omitieron al redactar los requisitos.",
            "Adivinando contraseñas de servidores mediante ataques de fuerza bruta en producción.",
            "Reduciendo el número de historias de usuario en el Product Backlog.",
            "Obligando a los clientes a firmar contratos de confidencialidad adicionales."
        ],
        correct: 0,
        explanation: "Un buen tester va más allá de lo escrito, anticipando escenarios y dependencias no especificadas.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.5.1",
        summary: ["Mentalidad analítica: Capacidad de inferir escenarios límite y dependencias implícitas no documentadas."]
    },
    {
        id: 158, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Por qué se afirma que las pruebas no pueden demostrar la ausencia de defectos bajo ninguna circunstancia?",
        options: [
            "Porque incluso si miles de pruebas pasan sin error, siempre existen combinaciones de entradas no probadas y estados complejos latentes.",
            "Porque las herramientas de automatización borran los registros de errores al finalizar el día.",
            "Porque los programadores introducen nuevos bugs a propósito todas las noches.",
            "Porque la norma ISO prohíbe declarar un software como perfecto."
        ],
        correct: 0,
        explanation: "Principio fundamental ISTQB: Probar muestra la presencia de defectos, pero nunca su ausencia total.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.3",
        summary: ["Imposibilidad de demostrar ausencia de defectos: Siempre existen combinaciones operativas no evaluadas."]
    },
    {
        id: 159, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "¿Qué función cumple la revisión de los criterios de salida antes de liberar un incremento a producción?",
        options: [
            "Validar mediante evidencias objetivas si el nivel de riesgo residual y la cobertura alcanzada justifican la puesta en marcha.",
            "Asegurar que todos los empleados de la compañía tengan vacaciones pagadas.",
            "Comprobar que el presupuesto del próximo año fiscal sea exactamente igual a cero.",
            "Garantizar que el código fuente esté escrito exclusivamente en lenguaje C."
        ],
        correct: 0,
        explanation: "Los criterios de salida son la compuerta de calidad (quality gate) final que autoriza una liberación segura.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.4.2",
        summary: ["Criterios de salida como Quality Gate: Compuerta de calidad final para autorizar liberaciones seguras."]
    },
    {
        id: 160, chapter: 1, chapterTitle: "Cap. 1: Fundamentos",
        q: "En conclusión integradora, ¿cómo transforma la aplicación rigurosa de los fundamentos ISTQB la cultura de una organización de software?",
        options: [
            "Evolucionándola desde un enfoque reactivo de 'encontrar culpas en producción' hacia una cultura proactiva de 'prevención y calidad integrada'.",
            "Convirtiendo a los ingenieros de calidad en contadores fiscales corporativos.",
            "Eliminando por completo la necesidad de interactuar con los clientes y usuarios finales.",
            "Aumentando los tiempos de entrega de software en un plazo de cinco años."
        ],
        correct: 0,
        explanation: "El verdadero valor del marco ISTQB es transformar el control de calidad en un motor estratégico de prevención y valor de negocio.",
        pageRef: "ISTQB v4.0, Cap. 1, Sec. 1.1",
        summary: ["Transformación cultural ISTQB: Evolución desde un enfoque reactivo hacia una cultura proactiva de prevención."]
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
    // CAPÍTULO 2: Pruebas a lo largo del SDLC - Extensión Bloque 2 (IDs 231-260)
    // ==========================================
    {
        id: 231, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cómo se diferencia el Desarrollo Guiado por Pruebas (TDD - Test-Driven Development) del enfoque de prueba tradicional?",
        options: [
            "En TDD, las pruebas unitarias se escriben antes de implementar el código de producción, guiando el diseño técnico.",
            "En TDD, las pruebas se ejecutan únicamente cuando el proyecto ha finalizado su ciclo comercial.",
            "En TDD, los evaluadores independientes escriben todo el código fuente del sistema.",
            "No existe diferencia operativa; ambos métodos escriben el código antes de la prueba."
        ],
        correct: 0,
        explanation: "TDD invierte el orden convencional: primero se escribe el test (que falla), luego el código mínimo para pasarlo, y finalmente se refactoriza.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.2",
        summary: ["TDD (Test-Driven Development): Escritura previa de pruebas unitarias para guiar el diseño y código."]
    },
    {
        id: 232, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cuál es el enfoque central del Desarrollo Guiado por Comportamiento (BDD - Behavior-Driven Development)?",
        options: [
            "Fomentar la colaboración entre negocio, desarrollo y calidad mediante especificaciones ejecutables en lenguaje natural estructurado.",
            "Automatizar pruebas de hardware de bajo nivel en servidores físicos de red.",
            "Sustituir por completo la necesidad de realizar pruebas unitarias en los componentes backend.",
            "Calcular el rendimiento de las bases de datos relacionales bajo cargas masivas."
        ],
        correct: 0,
        explanation: "BDD utiliza un lenguaje común (como Gherkin: Given/When/Then) para unificar la comprensión de los requerimientos de comportamiento.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.2",
        summary: ["BDD (Behavior-Driven Development): Colaboración interdisciplinaria basada en lenguaje natural estructurado."]
    },
    {
        id: 233, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué implica la práctica de 'Shift-Left' en el contexto de los niveles de prueba y el SDLC?",
        options: [
            "Desplazar las actividades de prueba hacia las fases más tempranas del ciclo de vida (requisitos y diseño) en lugar de dejarlas al final.",
            "Mover todos los servidores de producción hacia el lado izquierdo de la red corporativa.",
            "Retrasar la ejecución de pruebas unitarias hasta la fase de mantenimiento correctivo.",
            "Eliminar las pruebas de aceptación para acelerar los despliegues."
        ],
        correct: 0,
        explanation: "Shift-Left promueve la prevención y detección temprana de defectos desde la concepción del requisito.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.5",
        summary: ["Shift-Left: Desplazamiento de las actividades de calidad hacia las fases iniciales del SDLC."]
    },
    {
        id: 234, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cuál es la diferencia fundamental entre una prueba de confirmación (re-testing) y una prueba de regresión?",
        options: [
            "La prueba de confirmación verifica que un defecto específico haya sido corregido; la prueba de regresión verifica que no se hayan introducido efectos colaterales en otras partes.",
            "La prueba de confirmación se realiza en producción y la regresión en desarrollo.",
            "Son sinónimos exactos que describen la ejecución de scripts automatizados nocturnos.",
            "La prueba de confirmación la ejecutan los clientes y la regresión los desarrolladores."
        ],
        correct: 0,
        explanation: "Re-testing comprueba el arreglo del bug reportado; regresión evalúa la estabilidad general tras cambios.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.3",
        summary: ["Prueba de confirmación (verifica arreglo específico) vs Prueba de regresión (verifica estabilidad general)."]
    },
    {
        id: 235, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué objetivo persigue la realización de pruebas de mantenimiento de tipo 'migración'?",
        options: [
            "Asegurar que el software y los datos operen correctamente tras trasladarse de un entorno tecnológico a otro (ej. de servidor local a la nube).",
            "Cambiar el color de la interfaz gráfica corporativa cada temporada.",
            "Actualizar los manuales impresos para los usuarios finales.",
            "Sustituir al personal del departamento de soporte técnico."
        ],
        correct: 0,
        explanation: "Las pruebas de migración validan la integridad operativa y de datos ante traslados de plataforma.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.3",
        summary: ["Pruebas de migración de mantenimiento: Validan integridad y funcionamiento tras traslados de entorno."]
    },
    {
        id: 236, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cómo impacta la adopción de metodologías DevOps en la integración de las pruebas dentro del SDLC?",
        options: [
            "Integra las pruebas de manera continua en los pipelines de CI/CD, permitiendo validaciones automatizadas en cada cambio de código.",
            "Elimina la necesidad de contar con criterios de salida o criterios de aceptación formales.",
            "Obliga a que todas las pruebas se ejecuten de forma manual exclusivamente los fines de semana.",
            "Prohíbe la comunicación entre los equipos de desarrollo y operaciones."
        ],
        correct: 0,
        explanation: "DevOps y Continuous Testing automatizan validaciones constantes en cada etapa del despliegue.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.2",
        summary: ["DevOps y Testing Continuo: Automatización e integración de validaciones en pipelines de CI/CD."]
    },
    {
        id: 237, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué evalúan las pruebas de interoperabilidad dentro de los atributos no funcionales del nivel de integración de sistemas?",
        options: [
            "La capacidad del sistema para interactuar y comunicarse correctamente con uno o más componentes o sistemas especificados.",
            "La velocidad de procesamiento del teclado físico conectado a la computadora.",
            "La resistencia de los servidores ante cortes eléctricos de alta tensión.",
            "La facilidad con que los usuarios aprenden a usar los menús visuales."
        ],
        correct: 0,
        explanation: "Mide la correcta comunicación e intercambio de datos entre sistemas independientes.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.2",
        summary: ["Pruebas de interoperabilidad: Validan la capacidad de intercambio y comunicación entre sistemas."]
    },
    {
        id: 238, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cuál es el propósito de realizar pruebas de integración de componentes utilizando enfoques incrementales (como ascendente o descendente)?",
        options: [
            "Detectar fallas en las interfaces de manera estructurada conforme se van uniendo los módulos, facilitando el aislamiento de errores.",
            "Evitar por completo la escritura de código fuente en los componentes principales.",
            "Garantizar que el sistema completo funcione sin necesidad de pruebas unitarias previas.",
            "Reducir el presupuesto financiero asignado al departamento de calidad."
        ],
        correct: 0,
        explanation: "La integración incremental (bottom-up / top-down) aísla mejor los defectos de interfaz que un big-bang.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.1",
        summary: ["Integración incremental: Facilita el aislamiento de errores de interfaz al unir módulos progresivamente."]
    },
    {
        id: 239, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué caracteriza a un enfoque de integración 'Big-Bang' en las pruebas de integración?",
        options: [
            "Se integran todos los componentes o sistemas simultáneamente al final, dificultando enormemente la localización de la causa raíz de las fallas.",
            "Se ejecutan pruebas unitarias automatizadas cada milisegundo en la nube.",
            "Se despliega el software directamente en producción sin pasar por entornos de QA.",
            "Se contratan auditores externos para revisar contratos comerciales."
        ],
        correct: 0,
        explanation: "Big-bang junta todo de golpe; si falla, es muy difícil saber qué componente provocó el problema.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.1",
        summary: ["Integración Big-Bang: Unión simultánea de todo el software; dificulta la localización de causa raíz."]
    },
    {
        id: 240, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué papel desempeñan las pruebas de carga (Load Testing) en la evaluación de sistemas distribuidos?",
        options: [
            "Evaluar el comportamiento del sistema bajo volúmenes de transacciones esperados o pico, midiendo tiempos de respuesta y rendimiento.",
            "Comprobar el peso físico en toneladas de los racks de servidores instalados en el centro de datos.",
            "Verificar la correcta ortografía en los manuales de usuario multilingües.",
            "Asegurar que las contraseñas de los usuarios estén cifradas mediante hashes seguros."
        ],
        correct: 0,
        explanation: "Miden la capacidad del sistema para operar eficientemente bajo los niveles de carga previstos por el negocio.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.2",
        summary: ["Pruebas de carga: Evalúan tiempos de respuesta y rendimiento bajo volúmenes esperados o pico."]
    },
    {
        id: 241, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Por qué se consideran esenciales las pruebas de aceptación operativa (Operational Acceptance Testing - OAT)?",
        options: [
            "Porque validan que el sistema sea apto para ser operado y mantenido por el personal de operaciones en un entorno real o simulado.",
            "Porque permiten evaluar la velocidad de renderizado de gráficos 3D en videojuegos.",
            "Porque sustituyen la necesidad de ejecutar pruebas de seguridad informática.",
            "Porque calculan la rentabilidad fiscal trimestral de la empresa."
        ],
        correct: 0,
        explanation: "OAT verifica copias de seguridad, recuperabilidad, mantenibilidad y preparación operativa antes de liberar.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.1",
        summary: ["OAT (Aceptación Operativa): Valida aptitud de mantenimiento, respaldos y preparación para soporte."]
    },
    {
        id: 242, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué relación existe entre los niveles de prueba y los objetos de prueba (Test Objects)?",
        options: [
            "Cada nivel de prueba tiene objetos de prueba específicos (ej. unidades en pruebas unitarias, sistemas completos en pruebas de sistema).",
            "Todos los niveles de prueba evalúan exactamente el mismo archivo binario sin importar su estado.",
            "Los objetos de prueba solo existen en la fase de mantenimiento correctivo.",
            "El objeto de prueba es siempre un contrato legal firmado por la gerencia."
        ],
        correct: 0,
        explanation: "Los objetos de prueba evolucionan en complejidad desde líneas de código aisladas hasta sistemas integrados.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2",
        summary: ["Objetos de prueba por nivel: Varían desde componentes aislados hasta sistemas integrados complejos."]
    },
    {
        id: 243, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué ocurre cuando se planifican pruebas de mantenimiento de tipo 'corrector' (maintenance corrective testing)?",
        options: [
            "Se ejecutan pruebas de confirmación y regresión para validar que los parches de emergencia solucionaron el bug sin dañar otras funciones.",
            "Se rediseña por completo la interfaz gráfica de usuario desde cero.",
            "Se contrata a un nuevo equipo de analistas de negocio para redefinir el producto.",
            "Se suspenden todas las actividades de desarrollo de forma indefinida."
        ],
        correct: 0,
        explanation: "El mantenimiento corrector atiende fallas en producción, exigiendo validar el arreglo y la regresión circundante.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.3",
        summary: ["Mantenimiento corrector: Exige pruebas de confirmación del parche y regresión de seguridad."]
    },
    {
        id: 244, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cómo contribuye la colaboración temprana en los cuadrantes de prueba ágiles a la mitigación de riesgos?",
        options: [
            "Ayudando a equilibrar pruebas orientadas a la tecnología y al negocio, tanto de soporte al equipo como de crítica del producto.",
            "Impidiendo que los desarrolladores escriban código sin la supervisión de un auditor externo.",
            "Reduciendo el número de historias de usuario en el Product Backlog a cero.",
            "Garantizando que el presupuesto financiero nunca sufra desviaciones."
        ],
        correct: 0,
        explanation: "Los cuadrantes de prueba guían al equipo ágil para cubrir automatización, aceptación y exploración integral.",
        pageRef: "ISTQB v4.0, Cap. 2 / Cap. 5",
        summary: ["Cuadrantes de prueba en ágil: Equilibran cobertura tecnológica y de negocio para mitigar riesgos."]
    },
    {
        id: 245, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué objetivo persigue el análisis de testabilidad (Testability Analysis) aplicado en las primeras fases del SDLC?",
        options: [
            "Evaluar qué tan fácil o difícil es diseñar y ejecutar pruebas sobre los requisitos o la arquitectura propuesta.",
            "Medir la velocidad de tecleo de los evaluadores manuales.",
            "Calcular el costo comercial de las licencias de software privativo.",
            "Garantizar que el sistema operativo de los servidores nunca requiera actualizaciones."
        ],
        correct: 0,
        explanation: "Analizar la testabilidad desde el diseño asegura que el software pueda ser probado eficientemente después.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.5",
        summary: ["Análisis de testabilidad: Evalúa anticipadamente la facilidad para probar requisitos y arquitectura."]
    },
    {
        id: 246, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Por qué los modelos de desarrollo híbridos (combinando fases en cascada y prácticas ágiles) requieren una estrategia de pruebas adaptativa?",
        options: [
            "Porque deben equilibrar la planificación estructurada de entregas masivas con la flexibilidad de ciclos iterativos cortos.",
            "Porque prohíben el uso de herramientas de automatización de pruebas unitarias.",
            "Porque eliminan por completo la necesidad de contar con criterios de salida.",
            "Porque obligan a que el cliente final escriba todo el código fuente."
        ],
        correct: 0,
        explanation: "Los modelos híbridos exigen conciliar controles formales con agilidad en la ejecución de pruebas.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1",
        summary: ["Estrategias híbridas de prueba: Concilian controles formales de planificación con agilidad iterativa."]
    },
    {
        id: 247, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué papel juegan los stubs (tapones) y drivers (conductores) en las pruebas de integración bottom-up?",
        options: [
            "Los drivers simulan los módulos superiores que llaman a los componentes evaluados; los stubs simulan los inferiores ausentes (en top-down).",
            "Sirven para conectar físicamente los cables de red de los equipos de oficina.",
            "Sustituyen la necesidad de utilizar bases de datos relacionales en producción.",
            "Calculan el salario mensual de los analistas de calidad."
        ],
        correct: 0,
        explanation: "Drivers controlan y llaman al módulo ascendente; stubs simulan respuestas de módulos descendentes faltantes.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.1",
        summary: ["Drivers y Stubs: Elementos simuladores de soporte para pruebas de integración estructuradas."]
    },
    {
        id: 248, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué evalúan las pruebas de resiliencia dentro de los atributos avanzados de fiabilidad del software?",
        options: [
            "La capacidad de un sistema para mantenerse operativo o recuperarse rápidamente tras sufrir interrupciones o fallas imprevistas.",
            "La resistencia de los escritorios de oficina ante golpes mecánicos.",
            "La velocidad de carga de archivos multimedia en redes móviles 5G.",
            "La capacidad de almacenamiento de los discos duros antiguos."
        ],
        correct: 0,
        explanation: "Miden la tolerancia a fallos y la solidez arquitectónica ante imprevistos operativos.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.2",
        summary: ["Pruebas de resiliencia: Evalúan la tolerancia a fallas y la recuperación ante interrupciones."]
    },
    {
        id: 249, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cómo impacta la ejecución de pruebas de aceptación en la reducción del riesgo comercial al lanzar un producto?",
        options: [
            "Validando con los usuarios y stakeholders reales que el software satisface las expectativas operativas y del negocio antes de la distribución masiva.",
            "Eliminando la necesidad de corregir bugs en los niveles de pruebas unitarias.",
            "Garantizando que el código fuente no tenga comentarios en español.",
            "Reduciendo los costos de mantenimiento de hardware en los servidores."
        ],
        correct: 0,
        explanation: "La aceptación comercial mitiga el riesgo de rechazo en el mercado asegurando la validación directa con el cliente.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.1",
        summary: ["Pruebas de aceptación comercial: Mitigan el riesgo de rechazo validando con usuarios reales antes del lanzamiento."]
    },
    {
        id: 250, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "En conclusión integradora, ¿por qué la selección del nivel y tipo de prueba debe alinearse con el SDLC elegido?",
        options: [
            "Porque optimiza la detección de defectos en el momento oportuno, garantizando que cada artefacto sea evaluado con el rigor adecuado a su madurez.",
            "Porque las leyes de desarrollo de software prohíben mezclar metodologías ágiles con modelos en V.",
            "Porque elimina por completo la necesidad de planificar cronogramas de proyecto.",
            "Porque reduce la complejidad lógica de los algoritmos a cero."
        ],
        correct: 0,
        explanation: "La alineación SDLC y niveles de prueba asegura eficiencia, cobertura y control de riesgos coordinado.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1",
        summary: ["Alineación SDLC y Niveles de Prueba: Optimiza la detección oportuna de defectos según la madurez del artefacto."]
    },
    {
        id: 251, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué son las pruebas de humo (Smoke Testing) dentro de los ciclos de despliegue continuo?",
        options: [
            "Una subconjunto rápido de pruebas ejecutadas para verificar las funcionalidades críticas tras una nueva compilación antes de pruebas profundas.",
            "Pruebas de resistencia al fuego realizadas sobre el hardware de los servidores.",
            "Pruebas manuales informales que duran exactamente tres semanas por sprint.",
            "Un método de análisis estático para detectar código quemado o obsoleto."
        ],
        correct: 0,
        explanation: "La prueba de humo valida rápidamente si la compilación es lo suficientemente estable como para iniciar pruebas rigurosas.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.3",
        summary: ["Pruebas de humo (Smoke Testing): Validación rápida de estabilidad crítica tras una compilación."]
    },
    {
        id: 252, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cuál es el propósito de las pruebas de cordura (Sanity Testing) tras una corrección puntual de bug?",
        options: [
            "Verificar de manera rápida y superficial que el defecto corregido ya no se manifiesta y que la función afectada opera lógicamente.",
            "Evaluar el estado de salud mental de los programadores tras una noche de trabajo.",
            "Sustituir por completo la ejecución de pruebas de regresión masivas.",
            "Comprobar el cifrado de contraseñas bancarias en la base de datos."
        ],
        correct: 0,
        explanation: "Sanity testing es un subconjunto enfocado y rápido para comprobar un arreglo específico sin agotar recursos.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.3",
        summary: ["Pruebas de cordura (Sanity Testing): Verificación rápida y enfocada de un arreglo específico de bug."]
    },
    {
        id: 253, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cómo interactúan las pruebas de seguridad con el ciclo de vida de desarrollo seguro (S-SDLC)?",
        options: [
            "Integrando revisiones y escaneos de vulnerabilidades de manera continua en cada fase (requisitos, diseño, código, despliegue).",
            "Realizando pruebas de penetración únicamente un día antes de que el proyecto sea cancelado.",
            "Dejando que los usuarios finales detecten brechas de seguridad en producción.",
            "Prohibiendo el uso de conexiones cifradas en las APIs del sistema."
        ],
        correct: 0,
        explanation: "Un SDLC seguro (S-SDLC) incrusta la seguridad en cada eslabón del desarrollo.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.2",
        summary: ["S-SDLC y pruebas de seguridad: Integración continua de escaneos de vulnerabilidades en todo el ciclo."]
    },
    {
        id: 254, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué objetivo persiguen las pruebas de localización (Localization Testing) en aplicaciones globales?",
        options: [
            "Verificar que el software se adapte correctamente a los idiomas, formatos de fecha, moneda y normas culturales de mercados específicos.",
            "Comprobar las coordenadas GPS de la oficina central de desarrollo mediante satélites.",
            "Asegurar que los servidores físicos se encuentren ubicados en el mismo país del cliente.",
            "Traducir automáticamente el código fuente de Java a Python."
        ],
        correct: 0,
        explanation: "Validan la correcta adaptación lingüística y cultural para distintas regiones geográficas.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.2",
        summary: ["Pruebas de localización: Validan la correcta adaptación cultural, lingüística y de formatos regionales."]
    },
    {
        id: 255, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué evalúan las pruebas de accesibilidad (Accessibility Testing) en interfaces digitales?",
        options: [
            "Si el sistema puede ser utilizado por personas con diversas discapacidades (visuales, auditivas, motoras o cognitivas) cumpliendo estándares como WCAG.",
            "Si el edificio de oficinas cuenta con rampas para sillas de ruedas en la entrada principal.",
            "Si la aplicación móvil requiere conexión de internet de alta velocidad obligatoria.",
            "Si las contraseñas de acceso superan los 12 caracteres alfanuméricos."
        ],
        correct: 0,
        explanation: "Aseguran la inclusión digital facilitando el acceso a usuarios con necesidades especiales.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.2.2",
        summary: ["Pruebas de accesibilidad: Validan la inclusión y uso del software por personas con discapacidades (WCAG)."]
    },
    {
        id: 256, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Por qué se consideran críticas las pruebas en entornos virtuales o contenerizados (Docker/Kubernetes)?",
        options: [
            "Porque garantizan que el comportamiento del software sea idéntico y predecible al aislar las dependencias operativas del sistema base.",
            "Porque eliminan por completo la necesidad de escribir código de automatización.",
            "Porque reducen el tamaño de los discos duros locales a cero gigabytes.",
            "Porque prohíben la ejecución de pruebas de rendimiento."
        ],
        correct: 0,
        explanation: "Los contenedores estandarizan el entorno, previniendo el clásico problema de 'en mi máquina sí funciona'.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1",
        summary: ["Pruebas en contenedores: Estandarizan entornos de ejecución y evitan discrepancias operativas."]
    },
    {
        id: 257, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué implica la revisión de los criterios de entrada al pasar de pruebas unitarias a pruebas de integración?",
        options: [
            "Comprobar que todas las unidades hayan superado sus pruebas de componentes y que los stubs/drivers estén listos antes de integrar.",
            "Asegurar que el personal de limpieza haya terminado sus labores en la sala de servidores.",
            "Verificar que el presupuesto financiero anual se encuentre completamente agotado.",
            "Garantizar que el cliente final haya pagado la totalidad del contrato comercial."
        ],
        correct: 0,
        explanation: "Los criterios de entrada al nivel de integración exigen unidades estables probadas previamente.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.3",
        summary: ["Criterios de entrada a integración: Exigen unidades estables superadas y dependencias simuladas listas."]
    },
    {
        id: 258, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Cuál es el beneficio de involucrar a los analistas de calidad desde la fase de análisis de negocio en un SDLC ágil?",
        options: [
            "Detectar contradicciones de requisitos de forma inmediata, facilitando la creación oportuna de criterios de aceptación claros.",
            "Permitir que los evaluadores escriban todo el código fuente del backlog.",
            "Sustituir por completo las reuniones de planificación de sprint.",
            "Reducir el salario de los desarrolladores principales."
        ],
        correct: 0,
        explanation: "La participación temprana del tester en refinamientos previene defectos de lógica y ambigüedades comerciales.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1.5",
        summary: ["Participación temprana del tester: Previene ambigüedades comerciales y facilita criterios claros."]
    },
    {
        id: 259, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "¿Qué papel juega la auditoría de procesos en los niveles de prueba corporativos?",
        options: [
            "Verificar de manera independiente que los procedimientos de prueba cumplan con los estándares de calidad definidos por la organización o normativas externas.",
            "Imponer sanciones económicas a los evaluadores que encuentren demasiados bugs.",
            "Sustituir la ejecución de casos de prueba funcionales en los pipelines.",
            "Calcular la nómina mensual de los ingenieros de software."
        ],
        correct: 0,
        explanation: "Las auditorías aseguran la conformidad metodológica frente a estándares de calidad establecidos.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.3",
        summary: ["Auditoría de procesos de prueba: Verifica la conformidad metodológica frente a estándares corporativos."]
    },
    {
        id: 260, chapter: 2, chapterTitle: "Cap. 2: SDLC",
        q: "En conclusión global sobre el ciclo de vida, ¿cómo contribuye una estrategia de pruebas estructurada a lo largo de todo el SDLC?",
        options: [
            "Asegurando la mitigación sistemática de riesgos técnicos y de negocio en cada etapa, maximizando la calidad y minimizando sorpresas en producción.",
            "Garantizando que el software se desarrolle en exactamente diez días calendario sin errores.",
            "Eliminando la necesidad de contar con usuarios reales durante las pruebas de aceptación.",
            "Reduciendo la complejidad del código fuente a cero líneas."
        ],
        correct: 0,
        explanation: "Una estrategia integral a lo largo del SDLC garantiza control, visibilidad y calidad predecible de punta a punta.",
        pageRef: "ISTQB v4.0, Cap. 2, Sec. 2.1",
        summary: ["Estrategia integral en el SDLC: Mitigación sistemática de riesgos de punta a punta para garantizar calidad predecible."]
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
    // CAPÍTULO 3: Pruebas Estáticas - Extensión Bloque 2 (IDs 331-360)
    // ==========================================
    {
        id: 331, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué impacto tiene la realización de revisiones estáticas de código en la deuda técnica acumulada de un proyecto?",
        options: [
            "Ayuda a identificar y erradicar tempranamente olores de código y malas prácticas, frenando el crecimiento de la deuda técnica.",
            "Incrementa de manera exponencial los costos de mantenimiento a largo plazo.",
            "Sustituye por completo la necesidad de ejecutar pruebas de rendimiento y carga en producción.",
            "Obliga a los desarrolladores a reescribir toda la arquitectura del sistema cada semana."
        ],
        correct: 0,
        explanation: "Las revisiones estáticas limpian el código antes de que se convierta en una carga de mantenimiento onerosa (deuda técnica).",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.2",
        summary: ["Revisiones estáticas y deuda técnica: Identifican malas prácticas anticipadamente para frenar la acumulación de deuda."]
    },
    {
        id: 332, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Cómo se benefician los analistas de calidad al participar en revisiones estáticas de especificaciones y diagramas UML?",
        options: [
            "Comprenden a profundidad el funcionamiento previsto del sistema y detectan lagunas lógicas antes de que se conviertan en código defectuoso.",
            "Adquieren la obligación legal de programar las bases de datos relacionales del proyecto.",
            "Pueden omitir por completo la redacción de casos de prueba dinámicos posteriores.",
            "Reducen la velocidad de ejecución de los pipelines de integración continua."
        ],
        correct: 0,
        explanation: "Participar en estáticas otorga al tester un dominio temprano del negocio y previene fallas de diseño.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.1",
        summary: ["Participación en estáticas para QA: Otorga dominio temprano y previene la propagación de fallas de diseño."]
    },
    {
        id: 333, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué caracteriza a una revisión formal frente a una sesión informal de código entre programadores?",
        options: [
            "La formalidad de sus fases estructuradas (inicio, preparación, reunión, retrabajo y seguimiento) y el registro estricto de métricas e incidencias.",
            "La ausencia total de reglas y la prohibición de registrar defectos encontrados.",
            "Que se realiza de forma obligatoria únicamente después de que el software ha sido lanzado a producción.",
            "Que solo puede ser conducida por auditores externos sin relación con el equipo técnico."
        ],
        correct: 0,
        explanation: "Las revisiones formales siguen un proceso riguroso y documentado de cinco pasos definidos por la norma.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Revisiones formales: Caracterizadas por fases estructuradas y registro estricto de métricas e incidencias."]
    },
    {
        id: 334, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Por qué el análisis estático automatizado (SAST) no puede sustituir por completo a las revisiones basadas en humanos?",
        options: [
            "Porque las herramientas detectan patrones sintácticos o estructurales, pero carecen de intuición humana para evaluar la lógica de negocio y la experiencia de usuario.",
            "Porque las herramientas de análisis estático están prohibidas en la industria del software corporativo.",
            "Porque la compilación de código estático requiere la presencia física de los autores.",
            "Porque las computadoras no pueden procesar más de una línea de código por hora."
        ],
        correct: 0,
        explanation: "Las herramientas escanean reglas y patrones, pero los humanos evalúan el sentido de negocio y la sutileza lógica.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.3",
        summary: ["Limitación de SAST: Las herramientas detectan patrones, mas carecen de intuición para la lógica de negocio."]
    },
    {
        id: 335, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué objetivo persigue la medición del 'Esfuerzo de Preparación' en un programa de revisiones estáticas?",
        options: [
            "Evaluar el tiempo que invierten los revisores analizando individualmente el documento antes de la junta grupal.",
            "Calcular el costo financiero de las licencias de software privativo de gestión.",
            "Medir la velocidad de tecleo de los autores al escribir documentación técnica.",
            "Establecer la cantidad de horas extras obligatorias para los fines de semana."
        ],
        correct: 0,
        explanation: "Controlar el esfuerzo de preparación permite medir la eficiencia y el compromiso del equipo con el análisis previo.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Esfuerzo de preparación: Mide el tiempo invertido en análisis individual previo a la junta de revisión."]
    },
    {
        id: 336, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué impacto tiene la definición clara de los criterios de entrada y salida en una revisión formal?",
        options: [
            "Garantiza que no se inicien revisiones con artefactos incompletos y que no se den por concluidas sin verificar las correcciones.",
            "Obliga a que las reuniones duren exactamente ocho horas continuas.",
            "Elimina la necesidad de contar con un moderador entrenado en la sesión.",
            "Permite que los desarrolladores corrijan código sin la supervisión del equipo."
        ],
        correct: 0,
        explanation: "Los criterios de entrada y salida regulan el inicio y cierre formal de las revisiones con calidad garantizada.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Criterios de entrada y salida en revisiones: Regulan el inicio y cierre formal de los artefactos evaluados."]
    },
    {
        id: 337, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Cómo contribuye el uso de listas de comprobación (Checklists) a la objetividad de las revisiones estáticas?",
        options: [
            "Asegurando que los revisores evalúen sistemáticamente categorías clave de defectos en lugar de revisar de forma superficial o desorganizada.",
            "Sustituyendo por completo la necesidad de leer el contenido del documento objeto de revisión.",
            "Calculando de manera automática el puntaje de rendimiento salarial del autor.",
            "Impidiendo que los participantes debatan sobre alternativas de diseño técnico."
        ],
        correct: 0,
        explanation: "Las checklists estandarizan el foco analítico sobre áreas propensas a errores comunes.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Checklists en revisiones: Estandarizan el foco analítico en áreas propensas a errores comunes."]
    },
    {
        id: 338, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué ocurre cuando se detectan defectos masivos de sintaxis o formato durante la preparación individual de una revisión?",
        options: [
            "Se activa un retrabajo previo o se suspende la reunión para obligar al autor a corregir los aspectos básicos antes de wastear tiempo grupal.",
            "Se aprueba automáticamente el documento para cumplir con el cronograma del sprint.",
            "Se despide al autor del producto de trabajo de forma inmediata.",
            "Se multiplican las tareas de automatización en el servidor de integración."
        ],
        correct: 0,
        explanation: "Detener revisiones con mala calidad inicial protege las horas de trabajo del equipo de revisores.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Defectos masivos previos: Criterio para detener la revisión y exigir limpieza básica previa del autor."]
    },
    {
        id: 339, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Cuál es la función del moderador al lidiar con discusiones improductivas o debates de ego durante una revisión técnica?",
        options: [
            "Intervenir de forma neutral para reorientar el foco de la sesión hacia el análisis técnico objetivo y la detección de defectos.",
            "Apoyar a una de las partes para ganar la discusión y humillar al contrario.",
            "Cancelar la reunión y sancionar económicamente a los asistentes.",
            "Abandonar la sala de juntas para dejar que el equipo resuelva el conflicto a golpes."
        ],
        correct: 0,
        explanation: "El moderador neutral protege la sesión de egos y discusiones alejadas del propósito de calidad.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.3",
        summary: ["Moderador ante debates de ego: Intervención neutral para reorientar la sesión hacia el análisis técnico."]
    },
    {
        id: 340, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué representa la densidad de defectos estáticos en los informes métricos gerenciales?",
        options: [
            "La cantidad de anomalías encontradas por unidad de medida (ej. por página de requisito o por KLOC de código), indicando la calidad preliminar.",
            "El peso físico en megabytes de los informes impresos en papel.",
            "El número de tazas de café consumidas por el autor durante la codificación.",
            "La velocidad de transferencia de internet en el centro de datos."
        ],
        correct: 0,
        explanation: "Mide cuántos errores albergaba el artefacto antes de pasar a pruebas dinámicas.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Densidad de defectos estáticos: Indicador preliminar de la calidad del artefacto antes de pruebas dinámicas."]
    },
    {
        id: 341, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Por qué se considera que las pruebas estáticas son altamente efectivas para detectar fallas de consistencia lógica en los requisitos?",
        options: [
            "Porque permiten contrastar diferentes secciones del documento o historias de usuario para hallar contradicciones directas antes de programar.",
            "Porque ejecutan scripts de prueba automatizados contra bases de datos en la nube.",
            "Porque fuerzan al compilador a arrojar errores de sintaxis en lenguaje C.",
            "Porque eliminan por completo la necesidad de contar con analistas de negocio."
        ],
        correct: 0,
        explanation: "Leer críticamente los requisitos estáticamente revela contradicciones que la ejecución dinámica no previene a tiempo.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.1",
        summary: ["Consistencia lógica en requisitos: Las estáticas contrastan secciones para hallar contradicciones antes de programar."]
    },
    {
        id: 342, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué rol desempeña el autor del documento durante la reunión grupal de una inspección formal?",
        options: [
            "Aclarar dudas sobre el contenido del artefacto y escuchar los hallazgos de los revisores sin adoptar una postura defensiva.",
            "Liderar la moderación y cronometrar el tiempo de intervención de los demás.",
            "Registrar formalmente cada uno de los tickets en la herramienta Jira.",
            "Dictar las soluciones de código exactas que los revisores deben memorizar."
        ],
        correct: 0,
        explanation: "El autor aclara el contexto, pero no debe defenderse agresivamente de las observaciones de los revisores.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.3",
        summary: ["Rol del autor en inspección: Aclarar dudas de contexto y escuchar hallazgos sin actitud defensiva."]
    },
    {
        id: 343, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué es el análisis de flujo de datos (Data Flow Analysis) en el contexto de herramientas de análisis estático?",
        options: [
            "Una técnica estática que rastrea cómo se definen, utilizan y destruyen las variables a lo largo del código para hallar anomalías.",
            "Un diagrama de redes para medir el tráfico de internet en los servidores web.",
            "Un reporte contable de los ingresos financieros obtenidos por ventas de software.",
            "Una prueba de carga para evaluar el almacenamiento masivo en discos."
        ],
        correct: 0,
        explanation: "El análisis de flujo de datos detecta variables usadas sin inicializar o definidas y nunca usadas (código muerto).",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.3",
        summary: ["Análisis de flujo de datos (estático): Rastrilla el ciclo de vida de variables (definición, uso, destrucción)."]
    },
    {
        id: 344, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Cómo impacta la aplicación de revisiones estáticas en la reducción de costos en proyectos con normativas estrictas (ej. aeroespacial o médico)?",
        options: [
            "Es un requisito mandatorio de cumplimiento normativo que previene fallas catastróficas cuyo costo de corrección en etapas tardías sería astronómico.",
            "Incrementa los costos operativos sin aportar ninguna ventaja de calidad real.",
            "Sustituye por completo la necesidad de realizar auditorías legales externas.",
            "Permite omitir la fase de requisitos para empezar a programar de inmediato."
        ],
        correct: 0,
        explanation: "En sistemas safety-critical, las revisiones estáticas son obligatorias para certificar la calidad y seguridad del diseño.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.2",
        summary: ["Revisiones estáticas en sistemas críticos: Mandato normativo para certificar seguridad y prevenir fallas fatales."]
    },
    {
        id: 345, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué ventaja aporta el análisis estático automatizado en los flujos de integración continua (CI/CD)?",
        options: [
            "Bloquear automáticamente la compilación o el despliegue si el código viola los estándares de estilo o introduce vulnerabilidades de seguridad.",
            "Permitir que los evaluadores manuales descansen durante todo el sprint.",
            "Aumentar la velocidad de renderizado de las interfaces gráficas en dispositivos móviles.",
            "Reducir la cantidad de pruebas de aceptación del usuario a cero."
        ],
        correct: 0,
        explanation: "Integrar SAST en el pipeline actúa como un guardián automático que frena código de baja calidad antes de integrarse.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.3",
        summary: ["SAST en CI/CD: Guardián automático que bloquea compilaciones ante violaciones de estilo o vulnerabilidades."]
    },
    {
        id: 346, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué se busca evaluar al revisar estáticamente los planes de prueba y la estrategia de calidad antes de iniciar la ejecución?",
        options: [
            "La viabilidad, suficiencia y coherencia del enfoque de prueba frente a los riesgos identificados del proyecto.",
            "La velocidad de procesamiento de los microprocesadores del servidor principal.",
            "El número de líneas de código fuente escritas por los desarrolladores junior.",
            "La conformidad de los contratos fiscales de la empresa contratante."
        ],
        correct: 0,
        explanation: "Revisar los planes de prueba estáticamente asegura que la estrategia sea sólida antes de gastar recursos ejecutando tests.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.1",
        summary: ["Revisión estática del plan de pruebas: Valida la viabilidad y suficiencia de la estrategia frente a riesgos."]
    },
    {
        id: 347, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Por qué el anonimato de los autores en las revisiones estáticas suele ser contraproducente en la cultura ágil?",
        options: [
            "Porque la cultura ágil fomenta la colaboración abierta, la confianza y la responsabilidad compartida sin miedos punitivos.",
            "Porque las herramientas de control de versiones prohíben ocultar el nombre del autor en Git.",
            "Porque el anonimato incrementa la velocidad de ejecución de las pruebas unitarias.",
            "Porque los clientes exigen conocer el nombre del programador de cada línea de código."
        ],
        correct: 0,
        explanation: "El anonimato denota un clima de desconfianza o castigo; el entorno sano promueve transparencia y autoría responsable.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.5",
        summary: ["Anonimato contraproducente: Refleja un clima de castigo; la agilidad promueve confianza y autoría responsable."]
    },
    {
        id: 348, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué función cumple el seguimiento posterior (Follow-up) en la prevención de la falsificación de correcciones?",
        options: [
            "Asegurar que el autor realmente modificó el código o documento conforme al acuerdo y no marcó el defecto como resuelto sin haberlo corregido.",
            "Verificar que el autor haya pagado la multa económica impuesta por la gerencia.",
            "Comprobar que el servidor web mantenga una velocidad de respuesta óptima.",
            "Garantizar que no existan copias de respaldo de la base de datos."
        ],
        correct: 0,
        explanation: "El follow-up valida con evidencia objetiva que la acción correctiva acordada se implementó correctamente.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Follow-up y evidencia: Valida objetivamente que la acción correctiva acordada se haya implementado de verdad."]
    },
    {
        id: 349, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Cómo influye la capacitación y entrenamiento de los revisores en el éxito general de las revisiones formales?",
        options: [
            "Incrementa significativamente la cantidad y calidad de los defectos detectados durante la fase de preparación individual.",
            "Reduce la velocidad de lectura de los documentos técnicos a cero palabras por minuto.",
            "Obliga a que todos los participantes se conviertan en programadores senior de Java.",
            "Elimina por completo la necesidad de contar con un moderador en las reuniones."
        ],
        correct: 0,
        explanation: "Revisores capacitados y entrenados en técnicas de detección encuentran más y mejores defectos.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.5",
        summary: ["Capacitación de revisores: Incrementa significativamente la cantidad y calidad de defectos detectados."]
    },
    {
        id: 350, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "En conclusión integradora, ¿cómo se posicionan las pruebas estáticas dentro de una estrategia integral de ingeniería de calidad?",
        options: [
            "Como el cimiento preventivo y de bajo costo que protege al software desde su concepción, complementando la validación operativa dinámica.",
            "Como una actividad opcional y secundaria que puede omitirse si el equipo tiene prisa por entregar.",
            "Como un método exclusivo para auditar contratos comerciales sin relación con el código.",
            "Como un sustituto definitivo de todas las pruebas de aceptación del usuario."
        ],
        correct: 0,
        explanation: "Las pruebas estáticas son el cimiento preventivo indispensable que sustenta cualquier proyecto de calidad de software exitoso.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1",
        summary: ["Pruebas estáticas como cimiento: Protección preventiva de bajo costo que sustenta la calidad de punta a punta."]
    },
    {
        id: 351, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué evalúa el análisis estático basado en métricas de complejidad ciclomática?",
        options: [
            "El número de caminos lógicos independientes a través del código fuente, ayudando a identificar estructuras excesivamente complejas y difíciles de probar.",
            "La cantidad de memoria RAM consumida por el navegador web del usuario final.",
            "La velocidad de transmisión de paquetes en redes de fibra óptica.",
            "El número de pantallas desplegadas en la interfaz gráfica móvil."
        ],
        correct: 0,
        explanation: "La complejidad ciclomática mide la complejidad estructural del código para advertir sobre módulos difíciles de mantener y probar.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.3",
        summary: ["Complejidad ciclomática (análisis estático): Mide caminos lógicos independientes para advertir sobre módulos complejos."]
    },
    {
        id: 352, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué implica la revisión estática de los estándares de accesibilidad en las fases de diseño y maquetación?",
        options: [
            "Comprobar mediante planos y prototipos visuales si la estructura cumple con directrices de contraste, navegación por teclado y etiquetas para lectores de pantalla.",
            "Verificar la resistencia física de los monitores ante caídas accidentales.",
            "Asegurar que los servidores de bases de datos se encuentren en ubicaciones frías.",
            "Garantizar que el software compile sin errores en lenguajes de bajo nivel."
        ],
        correct: 0,
        explanation: "Revisar accesibilidad estáticamente previene rediseños costosos en las pantallas finales.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.1",
        summary: ["Revisión estática de accesibilidad: Evaluación anticipada de contraste, navegación y compatibilidad en prototipos."]
    },
    {
        id: 353, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Cuál es el beneficio de registrar los defectos estáticos clasificados por tipo (ej. lógica, interfaz, requisitos)?",
        options: [
            "Permite identificar patrones recurrentes de error en el equipo para enfocar capacitaciones preventivas específicas.",
            "Facilita la aplicación de sanciones económicas individuales a los desarrolladores con más errores.",
            "Sustituye la necesidad de utilizar herramientas de gestión de incidencias en la nube.",
            "Reduce el tamaño de los archivos binarios compilados en el repositorio."
        ],
        correct: 0,
        explanation: "Categorizar tipos de defectos estáticos retroalimenta la mejora continua de ingeniería.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Clasificación de defectos estáticos: Identifica patrones de error recurrentes para enfocar capacitaciones."]
    },
    {
        id: 354, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué riesgo operativo se mitiga al revisar estáticamente los contratos de interfaces con servicios de terceros (API Contracts)?",
        options: [
            "Evitar sorpresas de incompatibilidad en los tipos de datos o formatos de intercambio (JSON/XML) antes de iniciar la programación de integraciones.",
            "Garantizar que los proveedores externos paguen sus impuestos puntualmente.",
            "Impidiendo que los clientes utilicen la aplicación en días festivos.",
            "Asegurando que el equipo de soporte técnico no reciba llamadas nocturnas."
        ],
        correct: 0,
        explanation: "Validar estáticamente los contratos de API previene fallas de integración temprana.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.1",
        summary: ["Revisión estática de contratos API: Mitiga riesgos de incompatibilidad en formatos de datos antes de programar."]
    },
    {
        id: 355, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué relación existe entre las pruebas estáticas y la seguridad informática defensiva (Secure Coding)?",
        options: [
            "El análisis estático escanea patrones de código vulnerables (ej. inyección SQL, desbordamientos de búfer) para corregirlos antes de la compilación.",
            "Las pruebas estáticas sustituyen por completo las pruebas de penetración (pentesting) en producción.",
            "No existe relación; la seguridad solo se audita mediante pruebas dinámicas.",
            "Obligan a que las contraseñas de los usuarios sean públicas."
        ],
        correct: 0,
        explanation: "SAST es la herramienta principal de codificación segura para detectar fallas de vulnerabilidad en el código fuente estático.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.3",
        summary: ["Pruebas estáticas y Secure Coding (SAST): Detección anticipada de vulnerabilidades y fallas de inyección en código."]
    },
    {
        id: 356, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué criterio define la efectividad general de un programa de revisiones estáticas en una empresa?",
        options: [
            "La proporción de defectos detectados y prevenidos en fase estática frente a los que logran filtrarse hacia las pruebas dinámicas.",
            "La cantidad de reuniones formales realizadas sin importar si se hallaron bugs.",
            "El número de páginas de documentación técnica generadas al año.",
            "La reducción del salario del personal de desarrollo de software."
        ],
        correct: 0,
        explanation: "Una alta efectividad estática reduce drásticamente el flujo de bugs hacia pruebas dinámicas y producción.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.2",
        summary: ["Efectividad de revisiones estáticas: Medida por la alta proporción de defectos atrapados antes de llegar a pruebas dinámicas."]
    },
    {
        id: 357, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Por qué se considera que las revisiones informales son útiles a pesar de carecer de la rigurosidad de una inspección?",
        options: [
            "Porque aportan agilidad y velocidad para validar código o notas rápidas entre pares sin la carga burocrática de un proceso formal.",
            "Porque sustituyen con total garantía a las auditorías legales externas más complejas.",
            "Porque obligan a la presencia obligatoria de un moderador certificado en cada sesión.",
            "Porque generan actas notariales con validez jurídica internacional."
        ],
        correct: 0,
        explanation: "Las revisiones informales son ágiles y perfectas para consultas rápidas entre compañeros de equipo.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.4",
        summary: ["Revisiones informales: Aportan agilidad y velocidad para validaciones rápidas entre pares sin burocracia."]
    },
    {
        id: 358, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué implica la revisión estática de la trazabilidad entre los requisitos de usuario y los modelos de diseño?",
        options: [
            "Comprobar que cada requisito declarado tenga un correlato directo en los diagramas de diseño y arquitectura, evitando elementos huérfanos.",
            "Asegurar que los diseñadores gráficos utilicen paletas de colores corporativas.",
            "Calcular de forma automática las horas extras trabajadas por los analistas.",
            "Garantizar que el sistema operativo de los servidores nunca se apague."
        ],
        correct: 0,
        explanation: "Verifica que el diseño responda fielmente a lo solicitado y que no existan componentes sin justificación de negocio.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1.1",
        summary: ["Revisión estática de trazabilidad: Valida que los diseños correspondan fielmente a los requisitos sin elementos huérfanos."]
    },
    {
        id: 359, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "¿Qué rol juega la retroalimentación constructiva en las revisiones técnicas para evitar la rotación de personal técnico?",
        options: [
            "Crea un ambiente de trabajo colaborativo y de apoyo mutuo que reduce la frustración y la rotación laboral por climas laborales tóxicos.",
            "Obliga a los ingenieros a trabajar turnos nocturnos obligatorios sin paga extra.",
            "Sustituye los incentivos económicos anuales por aplausos virtuales.",
            "Incrementa la presión gerencial sobre los plazos de entrega del sprint."
        ],
        correct: 0,
        explanation: "Un clima sin culpas y constructivo retiene al talento técnico al promover el bienestar y el aprendizaje.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.2.5",
        summary: ["Retroalimentación constructiva y retención: Promueve un clima de apoyo mutuo que reduce la rotación de talento técnico."]
    },
    {
        id: 360, chapter: 3, chapterTitle: "Cap. 3: Estáticas",
        q: "En conclusión final, ¿cómo transforman las pruebas estáticas el enfoque analítico de la calidad en ingeniería de software?",
        options: [
            "Convirtiendo la calidad en una responsabilidad transversal y preventiva donde cada artefacto intermedio es auditado y mejorado continuamente.",
            "Reduciendo el proceso de desarrollo a una simple tarea administrativa de archivo documental.",
            "Eliminando la necesidad de ejecutar pruebas dinámicas en entornos reales.",
            "Garantizando que el código fuente sea escrito exclusivamente por herramientas de inteligencia artificial."
        ],
        correct: 0,
        explanation: "Las pruebas estáticas consagran la calidad como un hábito preventivo en cada eslabón documental y técnico del proyecto.",
        pageRef: "ISTQB v4.0, Cap. 3, Sec. 3.1",
        summary: ["Transformación analítica con estáticas: Consagra la calidad como un hábito transversal y preventivo en todo el ciclo técnico."]
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
    // CAPÍTULO 4: Análisis y Diseño de Pruebas - Extensión Bloque 2 (IDs 431-460)
    // ==========================================
    {
        id: 431, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué ventaja metodológica aporta el uso de tablas de decisiones simplificadas en sistemas con múltiples condiciones de entrada binarias?",
        options: [
            "Reduce el número total de reglas redundantes o lógicamente imposibles, optimizando el conjunto de casos de prueba derivados.",
            "Permite eliminar por completo la necesidad de ejecutar pruebas de rendimiento y carga en producción.",
            "Obliga a que el código fuente se escriba exclusivamente en lenguaje Python.",
            "Sustituye la necesidad de contar con criterios de aceptación en historias de usuario."
        ],
        correct: 0,
        explanation: "La simplificación de tablas de decisiones elimina combinaciones huérfanas o redundantes, volviendo las pruebas más eficientes.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.3",
        summary: ["Tablas de decisiones simplificadas: Eliminan redundancias lógicas para optimizar la cantidad de casos de prueba."]
    },
    {
        id: 432, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué evalúa la técnica de cobertura de pares de valores (Pairwise Testing) frente al análisis de combinaciones exhaustivas?",
        options: [
            "Garantiza que todas las parejas posibles de parámetros de entrada hayan sido combinadas al menos una vez, logrando alta efectividad con una fracción mínima de tests.",
            "Exige probar todas las combinaciones factoriales posibles sin importar cuántos millones de casos resulten.",
            "Se utiliza exclusivamente para verificar la sintaxis de las bases de datos relacionales en SQL.",
            "Requiere la ejecución desatendida de scripts en servidores de computación cuántica."
        ],
        correct: 0,
        explanation: "Pairwise se basa en la premisa empírica de que la gran mayoría de defectos se deben a interacciones entre pares de parámetros.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2",
        summary: ["Pairwise testing: Eficiencia combinatoria basada en probar todas las parejas posibles de parámetros de entrada."]
    },
    {
        id: 433, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Cómo contribuye el uso de modelos de transición de estado a la detección de transiciones inválidas no especificadas?",
        options: [
            "Permite identificar eventos que no deberían provocar un cambio de estado, diseñando pruebas negativas explícitas para prohibirlos.",
            "Facilita la compilación automática de aplicaciones en contenedores Docker.",
            "Calcula el costo financiero de las licencias de software comercial.",
            "Sustituye por completo la necesidad de realizar pruebas exploratorias en la interfaz."
        ],
        correct: 0,
        explanation: "Mapear todos los estados posibles revela transiciones prohibidas que los programadores podrían descuidar bloquear.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.4",
        summary: ["Transiciones de estado e inválidas: Revelan estímulos no permitidos para diseñar pruebas negativas de bloqueo."]
    },
    {
        id: 434, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué implica la aplicación de la partición de equivalencia en sistemas que manejan rangos continuos de fechas o valores monetarios?",
        options: [
            "Identificar clases válidas (dentro del rango permitido) y clases inválidas (por debajo del mínimo y por encima del máximo) para seleccionar valores representativos.",
            "Probar cada número entero existente entre cero y el infinito absoluto.",
            "Eliminar la validación de montos monetarios en las pasarelas de pago.",
            "Asegurar que las fechas del sistema coincidan con el huso horario de Greenwich."
        ],
        correct: 0,
        explanation: "Divide el dominio numérico o temporal en particiones lógicas válidas e inválidas para acotar los tests.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.1",
        summary: ["Partición de equivalencia en rangos: Identifica clases válidas e inválidas temporales o monetarias."]
    },
    {
        id: 435, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Por qué el Análisis de Valores Límite (BVA) de 3 valores por frontera es más riguroso que el de 2 valores?",
        options: [
            "Porque prueba el límite exacto, el valor inmediatamente inferior y el inmediatamente superior, detectando con mayor precisión errores de operador relacional.",
            "Porque duplica el consumo de memoria RAM en el servidor de pruebas.",
            "Porque requiere la presencia de un auditor legal externo en la sesión.",
            "Porque elimina la necesidad de redactar historias de usuario en Scrum."
        ],
        correct: 0,
        explanation: "El BVA de 3 valores evalúa (límite - 1, límite, límite + 1), capturando fallas típicas en fronteras estrictas.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.2",
        summary: ["BVA de 3 valores: Evalúa el límite exacto, valor inferior y superior para capturar fallas de frontera."]
    },
    {
        id: 436, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué rol desempeña la intuición experimentada del evaluador en la técnica de adivinación de errores (Error Guessing)?",
        options: [
            "Permite anticipar casos límite y debilidades típicas de codificación basándose en el historial de fallas y heurísticas personales.",
            "Sustituye la necesidad de aplicar cualquier modelo formal de caja negra.",
            "Garantiza que el software alcance el 100% de cobertura de ramas de código automáticamente.",
            "Obliga a que el equipo de desarrollo utilice lenguajes de programación orientados a objetos."
        ],
        correct: 0,
        explanation: "La adivinación de errores aprovecha la agudeza mental del tester experto para complementar las técnicas formales.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.4.2",
        summary: ["Error guessing y heurísticas: Complementan las técnicas formales aprovechando la agudeza e historial del tester."]
    },
    {
        id: 437, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué ventaja aporta el uso de sesiones cronometradas con cartas de prueba (Session-based Testing) en las pruebas exploratorias?",
        options: [
            "Aporta estructura, métricas de cobertura y trazabilidad a una actividad que por naturaleza es creativa y libre.",
            "Impone un límite rígido que prohíbe al evaluador encontrar defectos complejos.",
            "Convierte las pruebas exploratorias en un guion estricto e inmodificable de pasos.",
            "Sustituye por completo la necesidad de utilizar herramientas de gestión de incidentes."
        ],
        correct: 0,
        explanation: "Las cartas de prueba y los bloques de tiempo (sessions) aportan rigor gerencial a la exploración libre.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.4.3",
        summary: ["Session-based testing: Aporta rigor gerencial, métricas y trazabilidad a las pruebas exploratorias."]
    },
    {
        id: 438, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Cómo se relacionan los casos de uso (Use Cases) con la derivación de escenarios de prueba de integración del sistema?",
        options: [
            "Los flujos descritos en los casos de uso permiten diseñar pruebas end-to-end que recorren múltiples módulos e interfaces integradas.",
            "Sirven exclusivamente para redactar contratos de compraventa comerciales.",
            "Impiden la ejecución de pruebas unitarias automatizadas en los repositorios de Git.",
            "Calculan el costo monetario de las licencias de software privativo."
        ],
        correct: 0,
        explanation: "Los casos de uso modelan transacciones completas que cruzan todo el sistema, ideales para pruebas end-to-end.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.5",
        summary: ["Casos de uso y pruebas end-to-end: Derivan escenarios que cruzan múltiples módulos e interfaces."]
    },
    {
        id: 439, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué métrica evalúa el porcentaje de decisiones lógicas de código recorridas durante las pruebas de caja blanca?",
        options: [
            "Cobertura de decisiones (Decision Coverage).",
            "Densidad de defectos estáticos.",
            "Complejidad ciclomática de la base de datos.",
            "Frecuencia de despliegue continuo en CI/CD."
        ],
        correct: 0,
        explanation: "La cobertura de decisiones mide si los resultados booleanos (true/false) de las estructuras de control fueron ejecutados.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.3.2",
        summary: ["Cobertura de decisiones: Mide el porcentaje de resultados booleanos de código ejecutados por los tests."]
    },
    {
        id: 440, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Por qué es importante verificar la condición y cobertura de múltiples condiciones (Multiple Condition Coverage)?",
        options: [
            "Porque evalúa todas las combinaciones posibles de resultados dentro de una sentencia de decisión compleja, ofreciendo el máximo rigor en caja blanca.",
            "Porque es un requisito estético obligatorio para los diagramas de arquitectura de red.",
            "Porque reduce el tiempo de compilación del código fuente a cero segundos.",
            "Porque sustituye por completo la necesidad de realizar pruebas de aceptación de usuario."
        ],
        correct: 0,
        explanation: "La cobertura de múltiples condiciones es extremadamente rigurosa al probar todas las tablas de verdad internas de las decisiones.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.3.3",
        summary: ["Multiple condition coverage: Máximo rigor en caja blanca evaluando todas las combinaciones de tablas de verdad."]
    },
    {
        id: 441, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué impacto tiene la ambigüedad en los criterios de aceptación al momento de aplicar técnicas de caja negra?",
        options: [
            "Dificulta severamente la identificación de particiones de equivalencia y valores límite precisos debido a la falta de parámetros objetivos.",
            "Facilita la automatización inmediata de los scripts mediante inteligencia artificial.",
            "Garantiza que el software funcione sin ningún tipo de error en producción.",
            "Elimina la necesidad de contar con analistas de calidad en el equipo de trabajo."
        ],
        correct: 0,
        explanation: "Sin criterios claros y medibles, es matemáticamente imposible calcular particiones o fronteras exactas.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.1",
        summary: ["Ambigüedad en criterios y caja negra: Impide calcular particiones o fronteras precisas por falta de objetividad."]
    },
    {
        id: 442, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Cuál es el propósito de utilizar heurísticas de prueba en el diseño exploratorio?",
        options: [
            "Proveer reglas prácticas o atajos mentales probados que guían al tester hacia áreas propensas a fallas ocultas.",
            "Calcular la nómina fiscal mensual de la empresa contratante.",
            "Sustituir por completo la ejecución de pruebas de carga y rendimiento.",
            "Impidiendo que los desarrolladores modifiquen el código fuente sin autorización."
        ],
        correct: 0,
        explanation: "Las heurísticas son guías empíricas basadas en experiencia que potencian la exploración analítica.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.4.2",
        summary: ["Heurísticas en pruebas exploratorias: Reglas prácticas empíricas que guían la búsqueda de fallas ocultas."]
    },
    {
        id: 443, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué representa una prueba basada en flujos de datos (Data Flow Testing) en la estructura interna del código?",
        options: [
            "Verificar los caminos de ejecución entre la definición de una variable y su posterior utilización o destrucción.",
            "Medir el ancho de banda de red consumido por las peticiones HTTP concurrentes.",
            "Comprobar el diseño visual de los botones en pantallas táctiles móviles.",
            "Validar el cumplimiento de las normas de seguridad física en el datacenter."
        ],
        correct: 0,
        explanation: "Analiza el ciclo de vida de las variables a lo largo de las estructuras lógicas de control.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.3.4",
        summary: ["Data flow testing: Verifica los caminos lógicos entre la definición de variables y su uso o destrucción."]
    },
    {
        id: 444, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Cómo apoya la especificación por ejemplo (Specification by Example) a la prevención de defectos de interpretación?",
        options: [
            "Estableciendo escenarios concretos con datos reales de entrada y salida que eliminan la vaguedad conceptual del requisito.",
            "Obligando a que los analistas de negocio aprendan lenguajes de programación orientados a objetos.",
            "Sustituyendo la necesidad de redactar planes de prueba formales en el proyecto.",
            "Garantizando que el presupuesto financiero nunca sufra desviaciones."
        ],
        correct: 0,
        explanation: "Los ejemplos concretos con datos reales zanjan cualquier duda interpretativa entre negocio y calidad.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.5.2",
        summary: ["Specification by example: Emplea datos reales concretos para erradicar la vaguedad interpretativa."]
    },
    {
        id: 445, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué criterio define la suficiencia de un conjunto de casos de prueba derivados mediante partición de equivalencia?",
        options: [
            "Haber seleccionado al menos un valor representativo por cada partición válida e inválida identificada.",
            "Haber probado todos los números enteros posibles existentes en el universo.",
            "Haber ejecutado los tests únicamente en fines de semana.",
            "Haber alcanzado el 100% de cobertura de código en lenguajes de bajo nivel."
        ],
        correct: 0,
        explanation: "La cobertura mínima de partición se logra probando al menos un elemento por cada clase equivalente.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.1",
        summary: ["Suficiencia en partición de equivalencia: Probada al incluir al menos un valor representativo por clase válida e inválida."]
    },
    {
        id: 446, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Por qué el análisis de valores límite es especialmente eficaz para encontrar defectos en sistemas financieros?",
        options: [
            "Porque los errores de cálculo de tasas, comisiones y límites de crédito suelen concentrarse en las fronteras exactas de las reglas de negocio.",
            "Porque permite calcular los impuestos corporativos de manera automática.",
            "Porque elimina la necesidad de cifrar las contraseñas de los usuarios en la base de datos.",
            "Porque reduce el tiempo de compilación del software a cero."
        ],
        correct: 0,
        explanation: "Los sistemas financieros manejan umbrales estrictos donde un error en el operador relacional (< vs <=) cuesta dinero real.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.2",
        summary: ["BVA en sistemas financieros: Atrapa errores en umbrales estrictos de tasas, comisiones y límites de crédito."]
    },
    {
        id: 447, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué ventaja metodológica aporta el uso combinado de técnicas de caja negra y basadas en la experiencia?",
        options: [
            "Maximiza la cobertura formal de especificaciones mientras aprovecha la creatividad y heurísticas del tester para hallar fallas imprevistas.",
            "Duplica innecesariamente el esfuerzo operativo sin aportar valor analítico.",
            "Obliga a que las pruebas manuales se vuelvan obsoletas de inmediato.",
            "Sustituye la necesidad de contar con criterios de salida en los informes."
        ],
        correct: 0,
        explanation: "Combinar rigor sistemático de caja negra con agilidad exploratoria y experiencia logra una estrategia robusta.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.1",
        summary: ["Combinación caja negra y experiencia: Fusiona rigor sistemático con agilidad exploratoria heurística."]
    },
    {
        id: 448, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué representa una transición inválida en un diagrama de estados?",
        options: [
            "Un estímulo o evento que el sistema recibe estando en un estado determinado donde dicha acción no está permitida por diseño.",
            "Un error de sintaxis en el compilador de Java.",
            "Una prueba de rendimiento ejecutada con usuarios virtuales concurrentes.",
            "Un respaldo de base de datos realizado fuera de horario."
        ],
        correct: 0,
        explanation: "Identificar transiciones prohibidas permite verificar que el sistema rechace comandos ilegales de forma segura.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.4",
        summary: ["Transición inválida de estados: Estímulo no permitido en un estado dado que el sistema debe rechazar."]
    },
    {
        id: 449, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Cómo apoya la trazabilidad en la fase de diseño de pruebas a la medición de la cobertura de requisitos?",
        options: [
            "Permitiendo comprobar de forma inequívoca qué casos de prueba específicos evalúan cada requisito de usuario plasmado en el backlog.",
            "Calculando el salario mensual de los analistas de calidad.",
            "Sustituyendo la necesidad de utilizar herramientas de gestión de incidentes.",
            "Garantizando que el código fuente esté escrito exclusivamente en un solo archivo."
        ],
        correct: 0,
        explanation: "La matriz de trazabilidad vincula directamente requisitos con los tests diseñados para cubrirlos.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.1",
        summary: ["Trazabilidad en diseño de pruebas: Vincula requisitos con casos de prueba para medir cobertura exacta."]
    },
    {
        id: 450, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "En conclusión integradora, ¿cómo transforma la aplicación de técnicas de análisis y diseño la labor del evaluador de calidad?",
        options: [
            "Elevándola desde una ejecución empírica e improvisada hacia una disciplina de ingeniería rigurosa, sistemática y basada en modelos científicos de cobertura.",
            "Convirtiendo al analista en un programador de sistemas operativos de bajo nivel.",
            "Eliminando por completo la necesidad de pensar de forma crítica.",
            "Reduciendo el proceso de pruebas a una simple tarea administrativa de oficina."
        ],
        correct: 0,
        explanation: "Las técnicas formales otorgan solidez científica y metodológica a la profesión de testing.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.1",
        summary: ["Transformación analítica ISTQB: Eleva el testing desde la improvisación hacia una disciplina de ingeniería rigurosa."]
    },
    {
        id: 451, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué evalúa la cobertura de modificación de condición/decisión (Modified Condition/Decision Coverage - MC/DC)?",
        options: [
            "Un criterio estricto de caja blanca que exige que cada condición dentro de una decisión haya demostrado poder afectar de forma independiente el resultado de dicha decisión.",
            "La cantidad de veces que se modifica el código fuente en el repositorio de Git durante el sprint.",
            "El número de pantallas rediseñadas por el equipo de experiencia de usuario (UX).",
            "La velocidad de transferencia de datos en redes de área local."
        ],
        correct: 0,
        explanation: "MC/DC es un estándar crítico de alta exigencia (usado en aviación) para asegurar que ninguna condición sea redundante.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.3.3",
        summary: ["MC/DC (Box-white avanzado): Criterio estricto de aviación que exige demostrar impacto independiente por condición."]
    },
    {
        id: 452, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Por qué el criterio INVEST para historias de usuario fomenta un mejor diseño de pruebas?",
        options: [
            "Porque asegura que las historias sean independientes, negociables, valiosas, estimables, pequeñas y comprobables, facilitando la creación directa de tests.",
            "Porque obliga a que el código se escriba utilizando compiladores de lenguaje C.",
            "Porque elimina la necesidad de contar con criterios de aceptación en negocio.",
            "Porque garantiza que el proyecto finalice exactamente en la fecha prevista."
        ],
        correct: 0,
        explanation: "Historias bien acotadas bajo INVEST simplifican la derivación lógica de casos de prueba.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.5.1",
        summary: ["INVEST en historias de usuario: Acotación ideal (independientes, comprobables) que facilita derivar tests."]
    },
    {
        id: 453, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué ventaja aporta el uso de matrices de cobertura en la priorización de ejecuciones de prueba ante escasez de tiempo?",
        options: [
            "Identificar qué pruebas cubren los requisitos de mayor riesgo o criticidad de negocio para ejecutarlas primero.",
            "Calcular el costo financiero de las licencias de software comercial.",
            "Ocultar los defectos encontrados para evitar llamadas de atención gerenciales.",
            "Sustituir por completo la necesidad de reportar incidentes en Jira."
        ],
        correct: 0,
        explanation: "Las matrices de cobertura guían la priorización inteligente basada en riesgos y criticidad.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.1",
        summary: ["Matrices de cobertura y priorización: Guían la ejecución enfocándose en requisitos de mayor riesgo o criticidad."]
    },
    {
        id: 454, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué se busca lograr al diseñar pruebas basadas en escenarios de negocio cruzados (End-to-End)?",
        options: [
            "Validar que el flujo completo de datos opere correctamente a través de múltiples subsistemas independientes sin pérdida de integridad.",
            "Comprobar el diseño visual de los botones en una sola pantalla estática.",
            "Medir el consumo de energía eléctrica de la pantalla del usuario final.",
            "Asegurar que los desarrolladores cumplan con el horario laboral de la oficina."
        ],
        correct: 0,
        explanation: "Las pruebas E2E validan la interoperabilidad y transacciones completas cruzando la arquitectura global.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.5",
        summary: ["Escenarios End-to-End: Validar transacciones completas cruzando múltiples subsistemas sin pérdida de integridad."]
    },
    {
        id: 455, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué papel juega el análisis de valores límite en la detección de desbordamientos numéricos (Overflow)?",
        options: [
            "Permite probar los valores extremos máximos permitidos por el tipo de datos, anticipando fallas de almacenamiento o cálculo.",
            "Sirve para calcular el impuesto sobre la renta de los empleados corporativos.",
            "Comprueba la resistencia física de los cables de red ante tirones mecánicos.",
            "Garantiza que el software funcione sin conexión a internet en dispositivos móviles."
        ],
        correct: 0,
        explanation: "Probar los límites superiores de tipos de datos previene desbordamientos catastróficos en producción.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.2",
        summary: ["BVA y desbordamientos (Overflow): Evalúa umbrales superiores máximos para anticipar fallas de tipo de datos."]
    },
    {
        id: 456, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué es una tabla de decisión incompleta y cuál es su riesgo principal en el diseño de pruebas?",
        options: [
            "Una tabla donde faltan combinaciones de condiciones por definir, lo que puede provocar comportamientos no especificados en el software.",
            "Una tabla financiera con errores de cálculo contable fiscal.",
            "Un diagrama de arquitectura de red sin conexiones de fibra óptica.",
            "Un guion de pruebas manuales ejecutado exclusivamente por usuarios novatos."
        ],
        correct: 0,
        explanation: "Dejar combinaciones sin definir (condiciones 'don't care' mal manejadas) genera lagunas de comportamiento en producción.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.3",
        summary: ["Tabla de decisión incompleta: Riesgo de dejar combinaciones sin definir, generando comportamientos imprevisibles."]
    },
    {
        id: 457, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Cómo apoya la técnica de partición de equivalencia en la reducción del esfuerzo de pruebas automatizadas?",
        options: [
            "Evitando automatizar cientos de valores redundantes de una misma clase, enfocando la automatización en representantes clave.",
            "Eliminando la necesidad de escribir scripts de código en lenguajes como Java o Python.",
            "Garantizando que las pruebas se ejecuten de manera instantánea sin usar procesadores.",
            "Sustituyendo por completo la infraestructura de servidores en la nube."
        ],
        correct: 0,
        explanation: "Seleccionar un representante por partición evita saturar los pipelines con tests redundantes.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.2.1",
        summary: ["Partición en automatización: Evita saturar pipelines con tests redundantes seleccionando representantes clave."]
    },
    {
        id: 458, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué criterio define la elección de una prueba exploratoria frente a una técnica formal basada en especificaciones?",
        options: [
            "La escasez de documentación formal combinada con la urgencia de evaluar rápidamente la aplicación ante un riesgo inminente.",
            "La prohibición absoluta de utilizar especificaciones en la industria del software.",
            "El deseo de los desarrolladores de no escribir código de producción.",
            "La disponibilidad de presupuestos ilimitados para auditorías externas."
        ],
        correct: 0,
        explanation: "Cuando falta especificación o hay apremio de tiempo, la exploración experta es la mejor opción.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.4.3",
        summary: ["Selección de pruebas exploratorias: Indicadas ante escasez de especificaciones y apremio urgente de tiempo."]
    },
    {
        id: 459, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "¿Qué rol desempeña la retroalimentación de los defectos encontrados mediante técnicas formales en la mejora del diseño de futuros tests?",
        options: [
            "Permite refinar las heurísticas, ajustar las particiones y actualizar las listas de comprobación para evitar futuros huecos de cobertura.",
            "Sirve exclusivamente para sancionar económicamente a los ingenieros de calidad.",
            "Obliga a que el proyecto reinicie su ciclo de vida desde la fase de análisis de negocio.",
            "Elimina la necesidad de registrar incidentes en herramientas de seguimiento."
        ],
        correct: 0,
        explanation: "Aprender de los bugs hallados retroalimenta la ingeniería de pruebas para hacerla más incisiva.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.1",
        summary: ["Feedback de defectos en diseño de tests: Retroalimenta heurísticas y actualiza checklists para cerrar huecos."]
    },
    {
        id: 460, chapter: 4, chapterTitle: "Cap. 4: Análisis y Diseño",
        q: "En conclusión integradora, ¿por qué el capítulo 4 de ISTQB es considerado el núcleo técnico de la profesión de testing?",
        options: [
            "Porque provee el arsenal metodológico y científico (caja negra, blanca y experiencia) para diseñar casos de prueba rigurosos, medibles y de alta efectividad.",
            "Porque enseña a programar sistemas operativos de bajo nivel en lenguaje ensamblador.",
            "Porque elimina la necesidad de interactuar con clientes o directivos corporativos.",
            "Porque reduce el proceso de desarrollo a una simple tarea administrativa de archivo."
        ],
        correct: 0,
        explanation: "El diseño técnico de pruebas mediante técnicas formales define la esencia científica de la analítica de calidad.",
        pageRef: "ISTQB v4.0, Cap. 4, Sec. 4.1",
        summary: ["Capítulo 4 como núcleo técnico ISTQB: Proveedor del arsenal metodológico y científico para diseñar tests rigurosos."]
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

    {
        id: 531, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué impacto tiene la definición de criterios de salida (Exit Criteria) claros en la toma de decisiones gerenciales sobre la liberación de un producto?",
        options: [
            "Proporcionan una base objetiva y basada en evidencias para decidir si el software está listo para producción o si se deben mantener las pruebas.",
            "Obligan a que el presupuesto financiero del proyecto se reduzca a cero de manera inmediata.",
            "Sustituyen por completo la necesidad de contar con analistas de calidad en el equipo técnico.",
            "Permiten que los desarrolladores aprueben su propio código sin supervisión."
        ],
        correct: 0,
        explanation: "Los criterios de salida sirven como compuerta de calidad (quality gate) objetiva para la gerencia ante una liberación.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1.3",
        summary: ["Criterios de salida y gerencia: Proveen una base objetiva basada en evidencias para autorizar o frenar liberaciones."]
    },
    {
        id: 532, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Cómo apoya la gestión de riesgos de prueba en la optimización del presupuesto y el cronograma del proyecto?",
        options: [
            "Enfocando el esfuerzo de prueba y los recursos financieros en los componentes que representan mayor probabilidad e impacto de falla.",
            "Eliminando la necesidad de redactar planes de prueba formales para ahorrar tiempo.",
            "Obligando a que las pruebas se ejecuten exclusivamente durante los fines de semana.",
            "Reduciendo la complejidad técnica del código fuente a cero líneas."
        ],
        correct: 0,
        explanation: "Priorizar por riesgos evita desperdiciar presupuesto probando áreas irrelevantes o estables.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.2.2",
        summary: ["Gestión de riesgos y presupuesto: Optimiza recursos enfocando las pruebas donde el impacto y probabilidad de falla son mayores."]
    },
    {
        id: 533, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué rol desempeña la estimación basada en el juicio de expertos (Expert-based Estimation) cuando un proyecto es completamente innovador?",
        options: [
            "Aprovecha la experiencia acumulada de especialistas para calcular plazos cuando no se cuenta con datos históricos de proyectos previos similares.",
            "Garantiza con certeza matemática absoluta que el cronograma se cumplirá al milisegundo.",
            "Sustituye la necesidad de utilizar metodologías ágiles en la organización.",
            "Obliga a que el cliente pague tarifas dobles por los servicios de consultoría."
        ],
        correct: 0,
        explanation: "Ante la ausencia de métricas históricas en tecnologías nuevas, la pericia experta (ej. Delphi o Planning Poker) guía la estimación.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1.4",
        summary: ["Estimación experta en innovación: Guía los plazos mediante la pericia acumulada ante ausencia de datos históricos."]
    },
    {
        id: 534, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué métrica evalúa el cociente entre los defectos detectados en pruebas y los que se filtraron hacia el entorno de producción (Defect Leakage)?",
        options: [
            "La eficiencia de la detección de defectos (Defect Removal Efficiency - DRE), midiendo la eficacia del equipo para atrapar bugs antes de que lleguen a los usuarios.",
            "El peso físico en gigabytes de los reportes generados en Jira.",
            "La velocidad de tecleo de los analistas de calidad manuales.",
            "El número de líneas de código escritas por semana en el repositorio Git."
        ],
        correct: 0,
        explanation: "El DRE evalúa qué tan efectivo fue el proceso de QA al retener defectos antes de la liberación operativa.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.3",
        summary: ["Defect Removal Efficiency (DRE): Mide la eficacia del equipo reteniendo defectos antes de que lleguen a producción."]
    },
    {
        id: 535, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué impacto tiene un informe de defectos ambiguo o mal documentado en la velocidad de resolución del equipo de desarrollo?",
        options: [
            "Retrasa significativamente la corrección, genera fricción interpersonal y obliga a realizar múltiples iteraciones de aclaración.",
            "Acelera de forma instantánea la compilación del código fuente en Java.",
            "Elimina por completo la necesidad de ejecutar pruebas de regresión.",
            "Garantiza que el bug sea solucionado en menos de cinco minutos."
        ],
        correct: 0,
        explanation: "Un reporte deficiente sin pasos de reproducción ni evidencias desperdicia horas hombre en idas y venidas.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.5",
        summary: ["Reporte de defecto ambiguo: Retrasa la corrección, genera fricción y desperdicia valiosas horas hombre."]
    },
    {
        id: 536, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Cuál es el propósito de realizar un análisis de causa raíz (Root Cause Analysis - RCA) sobre los defectos críticos detectados?",
        options: [
            "Identificar el origen sistémico del error para aplicar medidas correctivas que prevengan la aparición de defectos similares en el futuro.",
            "Buscar un culpable individual en el equipo de desarrollo para amonestarlo públicamente.",
            "Sustituir la necesidad de redactar casos de prueba en las siguientes iteraciones.",
            "Aumentar el tamaño de los archivos binarios compilados en el repositorio."
        ],
        correct: 0,
        explanation: "El RCA busca sanar el proceso de ingeniería en su origen y no limitarse a poner parches superficiales.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.5",
        summary: ["Análisis de causa raíz (RCA): Identifica el origen sistémico del error para aplicar medidas preventivas duraderas."]
    },
    {
        id: 537, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué implica la gestión de la configuración (Configuration Management) aplicada específicamente al testware?",
        options: [
            "Controlar las versiones de los planes, casos de prueba, scripts automatizados y datos para garantizar que se ejecute siempre la versión correcta y trazable.",
            "Configurar físicamente los routers y switches de red en la oficina principal.",
            "Establecer contraseñas alfanuméricas complejas para las cuentas de correo corporativo.",
            "Borrar el testware obsoleto de manera irreversible cada medianoche."
        ],
        correct: 0,
        explanation: "Mantener versionado y bajo control el testware evita confusiones al ejecutar pruebas sobre versiones obsoletas de código.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.4",
        summary: ["Gestión de configuración en testware: Controla versiones de planes, scripts y datos para asegurar trazabilidad."]
    },
    {
        id: 538, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Cómo apoya la monitorización continua del progreso de pruebas en la identificación oportuna de cuellos de botella en el cronograma?",
        options: [
            "Permitiendo visualizar desvíos entre los casos planificados y los ejecutados, facilitando la redistribución de esfuerzos antes de que sea tarde.",
            "Obligando a los desarrolladores a trabajar turnos nocturnos obligatorios sin paga extra.",
            "Sustituyendo la necesidad de realizar reuniones de retrospectiva al final del sprint.",
            "Garantizando que el presupuesto financiero se incremente de forma automática."
        ],
        correct: 0,
        explanation: "Monitorear el avance real frente al plan previene sorpresas de última hora ante retrasos del cronograma.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.3",
        summary: ["Monitoreo del progreso: Visualiza desvíos frente al plan para redistribuir esfuerzos a tiempo."]
    },
    {
        id: 539, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué papel juega el análisis de riesgos de producto al momento de definir la estrategia de automatización de pruebas?",
        options: [
            "Ayuda a decidir qué componentes críticos y repetitivos deben automatizarse primero para maximizar el retorno de inversión (ROI).",
            "Determina el color de la interfaz gráfica y la paleta visual del software.",
            "Obliga a que todas las pruebas manuales sean eliminadas de la empresa el primer día.",
            "Calcula el impuesto sobre la renta de los ingenieros de calidad."
        ],
        correct: 0,
        explanation: "Automatizar lo que representa mayor riesgo y repetibilidad maximiza la eficiencia del presupuesto.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.2",
        summary: ["Riesgos de producto y automatización: Guía la selección de componentes críticos y repetitivos para maximizar el ROI."]
    },
    {
        id: 540, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué diferencia metodológica existe entre un plan de contingencia y una estrategia de mitigación de riesgos?",
        options: [
            "La mitigación se aplica antes de que ocurra el riesgo para reducir su probabilidad o impacto; el plan de contingencia se ejecuta una vez que el riesgo ya se ha materializado.",
            "La mitigación la ejecuta el cliente y el plan de contingencia el compilador de código.",
            "Son sinónimos exactos que describen la misma acción preventiva.",
            "El plan de contingencia se escribe al inicio y la mitigación al finalizar el proyecto."
        ],
        correct: 0,
        explanation: "Mitigar previene el golpe; la contingencia es el plan de emergencia a activar si el golpe ocurre de todas formas.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.2.2",
        summary: ["Mitigación (acción previa preventiva) vs Plan de contingencia (respuesta de emergencia post-materialización)."]
    },
    {
        id: 541, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué objetivo persigue la revisión independiente del plan de pruebas por parte de expertos externos o pares?",
        options: [
            "Validar la viabilidad, exhaustividad y realismo de la planificación, detectando puntos ciegos o recursos subestimados.",
            "Imponer sanciones económicas a los analistas de calidad por retrasos pasados.",
            "Sustituir por completo la ejecución de pruebas dinámicas en los entornos de QA.",
            "Garantizar que el software compile más rápido en los servidores en la nube."
        ],
        correct: 0,
        explanation: "Una mirada externa detecta sesgos y omisiones en la estrategia de planificación inicial.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1.1",
        summary: ["Revisión independiente del plan de pruebas: Detecta puntos ciegos y recursos subestimados mediante ojos expertos."]
    },
    {
        id: 542, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Cómo influye la cultura colaborativa de un equipo ágil en el ciclo de vida del reporte y resolución de defectos?",
        options: [
            "Los defectos se discuten y resuelven de manera fluida y directa (ej. en canales de chat o cara a cara), reduciendo la burocracia de tickets lentos.",
            "Los tickets de error deben pasar por doce niveles de aprobación gerencial antes de ser vistos.",
            "Se prohíbe terminantemente reportar errores menores para no entorpecer el sprint.",
            "Los desarrolladores tienen prohibido interactuar con los analistas de calidad."
        ],
        correct: 0,
        explanation: "La agilidad premia la comunicación directa y rápida frente a la burocracia excesiva en la gestión de bugs.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.5",
        summary: ["Cultura ágil y gestión de defectos: Favorece la comunicación directa y cara a cara para reducir burocracia de tickets."]
    },
    {
        id: 543, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué representa el estado 'De-ferred' (Diferido) en el ciclo de vida de un defecto reportado?",
        options: [
            "Que el defecto es válido pero su corrección se posterga para una versión o sprint posterior debido a limitaciones de negocio o prioridad.",
            "Que el defecto fue borrado permanentemente de la base de datos de Jira.",
            "Que el desarrollador ya corrigió el código y se encuentra listo para pruebas de confirmación.",
            "Que el sistema se encuentra completamente colapsado en producción."
        ],
        correct: 0,
        explanation: "Diferir un bug significa aceptarlo como real, pero posponer su arreglo por decisión de negocio.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.5",
        summary: ["Defecto diferido (Deferred): Bug válido aceptado cuya corrección se pospone para un ciclo posterior por decisión de negocio."]
    },
    {
        id: 544, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Por qué es crucial medir el esfuerzo real invertido frente al estimado durante las actividades de prueba?",
        options: [
            "Para calibrar la precisión de las estimaciones futuras y mejorar la capacidad de planificación del equipo de calidad.",
            "Para justificar el despido masivo de los analistas de pruebas menos veloces.",
            "Para incrementar artificialmente el presupuesto financiero asignado al siguiente año fiscal.",
            "Para eliminar la necesidad de redactar informes ejecutivos mensuales."
        ],
        correct: 0,
        explanation: "Comparar estimación vs realidad retroalimenta la precisión de la planificación venidera.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1.4",
        summary: ["Comparativa estimado vs real: Retroalimenta la precisión de futuras estimaciones y mejora la planificación."]
    },
    {
        id: 545, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué papel desempeñan las métricas de densidad de pruebas (Test Density Metrics) en la evaluación de la cobertura?",
        options: [
            "Relacionar la cantidad de casos de prueba ejecutados frente al tamaño del objeto evaluado, ayudando a medir la suficiencia del esfuerzo.",
            "Medir el peso físico en kilogramos de los servidores principales de la empresa.",
            "Calcular el impuesto sobre la renta aplicable a las licencias de software comercial.",
            "Garantizar que el código fuente no tenga comentarios explicativos."
        ],
        correct: 0,
        explanation: "La densidad de pruebas mide si se dedicaron suficientes casos de prueba en proporción al tamaño del módulo.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.3",
        summary: ["Densidad de pruebas: Relaciona la cantidad de tests ejecutados con el tamaño del objeto para medir suficiencia."]
    },
    {
        id: 546, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué implica la gestión de dependencias externas en la planificación de las actividades de prueba?",
        options: [
            "Identificar anticipadamente si las pruebas dependen de servicios de terceros, hardware específico o datos externos que podrían retrasar el avance.",
            "Asegurar que los empleados de la compañía no utilicen redes sociales en la oficina.",
            "Garantizar que el compilador de Java funcione sin conexión a internet.",
            "Eliminar por completo la necesidad de contar con un entorno de pruebas independiente."
        ],
        correct: 0,
        explanation: "Las dependencias externas son cuellos de botella comunes que deben planificarse y mitigarse a tiempo.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1.1",
        summary: ["Gestión de dependencias externas: Anticipa bloqueos por servicios de terceros, hardware o datos para evitar retrasos."]
    },
    {
        id: 547, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Cuál es el beneficio de mantener una política estricta de control de cambios en la base de pruebas (requisitos)?",
        options: [
            "Evitar el crecimiento descontrolado del alcance (Scope Creep) y asegurar que los casos de prueba se adapten de forma controlada.",
            "Impidiendo que los analistas de negocio modifiquen historias de usuario en los sprints ágiles.",
            "Garantizar que el proyecto finalice exactamente en la mitad del tiempo previsto.",
            "Reducir el tamaño de los repositorios de código en Git a cero archivos."
        ],
        correct: 0,
        explanation: "Controlar los cambios en los requisitos previene sorpresas de alcance desmedido y asegura alineación de tests.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.4",
        summary: ["Control de cambios en base de pruebas: Previene el crecimiento descontrolado del alcance (Scope Creep)."]
    },
    {
        id: 548, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué representa el estado 'Closed' (Cerrado) en el ciclo de vida de un defecto tras recibir una corrección?",
        options: [
            "Que las pruebas de confirmación (re-testing) han verificado exitosamente que el defecto fue solucionado y el incidente se da por concluido.",
            "Que el defecto fue rechazado por el equipo de desarrollo por falta de evidencias.",
            "Que el ticket fue enviado por error al departamento de recursos humanos.",
            "Que el sistema se encuentra completamente inoperativo en producción."
        ],
        correct: 0,
        explanation: "Un ticket se cierra formalmente cuando el re-testing comprueba que el arreglo es exitoso.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.5",
        summary: ["Defecto cerrado (Closed): Estado alcanzado tras verificar exitosamente mediante re-testing que el bug fue solucionado."]
    },
    {
        id: 549, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Cómo apoya la transparencia en los informes de estado de prueba a la confianza de la alta dirección en el equipo de QA?",
        options: [
            "Mostrando con franqueza tanto los logros de cobertura como los riesgos y bloqueos remanentes, sin ocultar información crítica.",
            "Ocultando los errores graves para hacer creer que el proyecto avanza sin problemas.",
            "Informando únicamente sobre la cantidad de tazas de café consumidas en el sprint.",
            "Garantizando que el presupuesto financiero se gaste en su totalidad cada mes."
        ],
        correct: 0,
        explanation: "La honestidad radical sobre los riesgos y el estado real construye una relación de confianza sólida con los directivos.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.3",
        summary: ["Transparencia en informes: Muestra franqueza sobre logros, riesgos y bloqueos para construir confianza directiva."]
    },
    {
        id: 550, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "En conclusión integradora, ¿por qué el capítulo 5 de ISTQB es fundamental para la estabilidad operativa de los proyectos de software?",
        options: [
            "Porque provee el marco directivo y metodológico para planificar, estimar, gestionar riesgos, controlar avances y manejar incidentes con rigor.",
            "Porque enseña a programar algoritmos complejos de inteligencia artificial en Java.",
            "Porque elimina la necesidad de contar con evaluadores técnicos especializados.",
            "Porque reduce el proceso de desarrollo a una simple tarea administrativa de archivo."
        ],
        correct: 0,
        explanation: "La gestión eficaz es el pegamento organizativo que mantiene unidas la calidad, el tiempo y los recursos.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1",
        summary: ["Capítulo 5 como marco directivo ISTQB: Provee las bases metodológicas para planificar, estimar y controlar riesgos."]
    },
    {
        id: 551, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué implica la estimación de pruebas basada en puntos de uso o tamaño funcional (Function Point Analysis)?",
        options: [
            "Calcular el volumen de esfuerzo requerido basándose en la cuantificación estandarizada de las funciones lógicas entregadas al usuario.",
            "Contar la cantidad de letras que tiene el contrato comercial firmado con el cliente.",
            "Medir la velocidad de tecleo de los analistas de calidad mediante cronómetros.",
            "Estimar al azar los plazos del proyecto para complacer a la gerencia de ventas."
        ],
        correct: 0,
        explanation: "Los puntos de función miden el tamaño funcional del software para derivar estimaciones de esfuerzo objetivas.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1.4",
        summary: ["Estimación por puntos de función: Calcula el esfuerzo basándose en la cuantificación estandarizada de funciones lógicas."]
    },
    {
        id: 552, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Cuál es el riesgo de no definir claramente los roles y responsabilidades (ej. RACI) dentro del equipo de pruebas?",
        options: [
            "Confusión operativa, duplicidad de esfuerzos, omisión de tareas críticas y falta de rendición de cuentas.",
            "Aumento automático de la velocidad de compilación en los servidores de integración.",
            "Garantía absoluta de que el software no contendrá defectos lógicos.",
            "Reducción del costo de las licencias de software comercial a cero."
        ],
        correct: 0,
        explanation: "Sin claridad de roles, nadie sabe quién debe ejecutar, aprobar o reportar, generando caos operativo.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1.1",
        summary: ["Falta de definición de roles: Genera confusión operativa, duplicidad de esfuerzos y omisión de tareas críticas."]
    },
    {
        id: 553, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué papel juega la retroalimentación de las métricas de defectos en la planificación de los siguientes Sprints en ágil?",
        options: [
            "Permiten ajustar la capacidad del equipo, detectar fragilidad en módulos y planificar tareas de refactorización o pruebas adicionales.",
            "Sirven únicamente para sancionar públicamente a los desarrolladores con menor rendimiento.",
            "Sustituyen por completo la necesidad de realizar reuniones de planificación.",
            "Obligan a que el cliente pague multas económicas por cada error detectado."
        ],
        correct: 0,
        explanation: "Las métricas de fallas guían la adaptación táctica del equipo iterativo sprint a sprint.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.3",
        summary: ["Métricas de defectos en ágil: Guían la adaptación táctica, ajustes de capacidad y planificación de refactorización."]
    },
    {
        id: 554, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Cómo apoya la gestión de incidentes en la construcción de una base de conocimiento histórico corporativo?",
        options: [
            "Almacenando el historial de fallas, causas raíz y soluciones aplicadas, sirviendo de referencia para prevenir errores similares en el futuro.",
            "Sirviendo como archivo publicitario para los competidores de la industria comercial.",
            "Ocultando los errores técnicos para proteger la reputación de la empresa ante juicios.",
            "Eliminando la necesidad de documentar manuales de usuario para los clientes."
        ],
        correct: 0,
        explanation: "Un repositorio de incidentes bien gestionado es una memoria técnica corporativa invaluable.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.5",
        summary: ["Gestión de incidentes como memoria técnica: Almacena historial de fallas y causas raíz para prevenir errores futuros."]
    },
    {
        id: 555, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué implica establecer un umbral de aceptación de defectos (Defect Acceptance Threshold) en los criterios de salida?",
        options: [
            "Definir una cantidad máxima permitida de defectos menores o cosméticos abiertos que no bloquean la liberación del producto.",
            "Exigir que el sistema tenga exactamente cero líneas de código con comentarios.",
            "Obligar a que todos los desarrolladores renuncien si ocurre un bug en producción.",
            "Prohibir el registro de nuevos incidentes en las herramientas de seguimiento."
        ],
        correct: 0,
        explanation: "Permite liberar productos comercialmente viables tolerando un número acotado de incidencias de baja severidad.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1.3",
        summary: ["Umbral de aceptación de defectos: Define un límite tolerable de bugs menores no bloqueantes para autorizar liberaciones."]
    },
    {
        id: 556, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Por qué el análisis de riesgos de prueba debe ser un proceso iterativo a lo largo de todo el ciclo de vida?",
        options: [
            "Porque los riesgos cambian, surgen nuevos componentes y el contexto del proyecto evoluciona constantemente, exigiendo reevaluación continua.",
            "Porque las reglas de ISTQB prohíben realizar análisis de riesgos más de una vez al año.",
            "Porque el cronograma del proyecto se detiene automáticamente durante las evaluaciones.",
            "Porque los desarrolladores modifican los riesgos de manera aleatoria en Git."
        ],
        correct: 0,
        explanation: "Los riesgos no son estáticos; varían conforme el software se construye y el mercado se transforma.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.2.2",
        summary: ["Análisis de riesgos iterativo: Exige reevaluación continua ante la aparición de nuevos componentes y cambios de contexto."]
    },
    {
        id: 557, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué función cumple el responsable de pruebas (Test Manager) al negociar los plazos con la alta dirección?",
        options: [
            "Defender la calidad y los criterios de salida basados en riesgos frente a presiones de plazos irrealistas, aportando datos objetivos.",
            "Aceptar cualquier fecha de entrega impuesta sin importar el riesgo técnico de colapso.",
            "Renunciar a su puesto de trabajo ante la primera discrepancia de cronograma.",
            "Ocultar los informes de avance reales para complacer a los directivos."
        ],
        correct: 0,
        explanation: "El Test Manager aporta objetividad técnica y basada en riesgos para proteger la calidad ante presiones comerciales.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1",
        summary: ["Negociación de plazos por el Test Manager: Protege la calidad aportando datos objetivos basados en riesgos ante presiones."]
    },
    {
        id: 558, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué implica la trazabilidad de los incidentes hacia los casos de prueba y requisitos originales?",
        options: [
            "Permitir conocer exactamente qué prueba falló y qué requisito de negocio quedó comprometido por un defecto específico.",
            "Calcular de forma automática las horas extras trabajadas por los analistas.",
            "Sustituir la necesidad de utilizar herramientas de gestión de configuración.",
            "Garantizar que el software compile sin errores en lenguajes de bajo nivel."
        ],
        correct: 0,
        explanation: "Conecta el bug observado directamente con la prueba que lo descubrió y el requisito afectado.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.5",
        summary: ["Trazabilidad de incidentes: Conecta el bug con la prueba ejecutada y el requisito de negocio comprometido."]
    },
    {
        id: 559, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "¿Qué relación existe entre la gestión de configuración y la reproducibilidad de los defectos reportados?",
        options: [
            "Una gestión de configuración estricta asegura que se conozca la versión exacta de código y testware, facilitando reproducir fielmente el bug.",
            "No existe relación; la reproducibilidad depende exclusivamente del clima de la oficina.",
            "La gestión de configuración impide que los errores se puedan reproducir en entornos de QA.",
            "Obliga a que los desarrolladores eliminen los registros de logs del servidor."
        ],
        correct: 0,
        explanation: "Saber exactamente qué versión se probó es requisito indispensable para que el desarrollador replique el fallo.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.4",
        summary: ["Gestión de configuración y reproducibilidad: Garantiza conocer la versión exacta de código y testware para replicar bugs."]
    },
    {
        id: 560, chapter: 5, chapterTitle: "Cap. 5: Gestión",
        q: "En conclusión integradora, ¿por qué la gestión eficaz de las actividades de prueba es el pilar que sostiene la madurez de calidad organizacional?",
        options: [
            "Porque unifica la estrategia, los recursos, la mitigación de riesgos y el control de incidentes bajo un enfoque de ingeniería predecible y orientado al valor.",
            "Porque elimina la necesidad de contar con desarrolladores o analistas técnicos especializados.",
            "Porque garantiza que el presupuesto corporativo se gaste sin control ni auditoría.",
            "Porque reduce la complejidad del código fuente a cero líneas de programación."
        ],
        correct: 0,
        explanation: "La gestión madura equilibra los pilares humanos, técnicos y metodológicos para entregar valor seguro.",
        pageRef: "ISTQB v4.0, Cap. 5, Sec. 5.1",
        summary: ["Gestión eficaz como pilar de madurez: Unifica estrategia, recursos y control de riesgos bajo un enfoque predecible."]
    },

    // ==========================================
    // CAPÍTULO 6: Herramientas de Prueba (30 preguntas K1/K2)
    // ==========================================
    // ==========================================
    // CAPÍTULO 6: Herramientas de Prueba (IDs 601-630)
    // ==========================================
    {
        id: 601, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 602, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 603, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 604, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 605, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 606, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 607, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 608, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 609, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 610, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 611, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 612, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 613, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 614, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 615, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 616, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 617, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 618, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 619, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
        id: 620, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
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
    },
    {
        id: 621, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "Según la sección 6.1, ¿cuál es el beneficio principal de estructurar un framework de pruebas automatizadas guiado por datos (Data-Driven Testing)?",
        options: [
            "Separar la lógica de los scripts de prueba de los datos de entrada, permitiendo ejecutar el mismo caso con múltiples conjuntos de datos.",
            "Eliminar por completo la necesidad de utilizar bases de datos relacionales en la empresa.",
            "Garantizar que el software compile más rápido en los servidores de producción.",
            "Sustituir la necesidad de contar con criterios de aceptación en historias de usuario."
        ],
        correct: 0,
        explanation: "El enfoque data-driven desacopla los datos de prueba del código del script, maximizando la reutilización y cobertura.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Data-driven testing: Desacopla la lógica de prueba de los datos para maximizar reutilización y cobertura con múltiples entradas."]
    },
    {
        id: 622, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué caracteriza a un framework de pruebas basado en palabras clave (Keyword-Driven Testing)?",
        options: [
            "Utilizar tablas con palabras clave comprensibles por analistas de negocio para definir acciones de prueba sin requerir conocimientos profundos de programación.",
            "Escribir todo el código fuente de los scripts utilizando comandos en lenguaje ensamblador de bajo nivel.",
            "Impidiendo que los evaluadores manuales ejecuten casos de prueba en la interfaz gráfica.",
            "Sustituir la gestión de incidentes en Jira por hojas de cálculo estáticas."
        ],
        correct: 0,
        explanation: "Permite que perfiles funcionales colaboren en la automatización utilizando acciones tabuladas y reutilizables.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Keyword-driven testing: Facilita la colaboración de perfiles funcionales mediante tablas de acciones tabuladas y reutilizables."]
    },
    {
        id: 623, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "En el contexto de la evaluación de herramientas (Sección 6.3), ¿qué ventaja diferencial ofrecen las herramientas de código abierto (Open Source) frente a las comerciales (COTS)?",
        options: [
            "Ausencia de costos iniciales de licencia por usuario, flexibilidad de personalización del código y una amplia comunidad de soporte activo.",
            "Garantía absoluta de soporte técnico telefónico prioritario 24/7 por parte de una empresa multinacional.",
            "Prohibición de modificar el código fuente interno de los frameworks de prueba.",
            "Obligación de pagar tarifas anuales obligatorias basadas en el tamaño de la organización."
        ],
        correct: 0,
        explanation: "Las herramientas open source destacan por su flexibilidad y bajo costo inicial de adopción corporativa.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["Herramientas Open Source: Sin costos de licencia inicial, alta flexibilidad de personalización y comunidad de soporte activa."]
    },
    {
        id: 624, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué función cumple un 'Oráculo de Pruebas' (Test Oracle) automatizado dentro de un script de ejecución?",
        options: [
            "Determinar de forma objetiva si una prueba pasó o falló comparando el resultado obtenido por el software frente al resultado esperado.",
            "Adivinar el futuro financiero del proyecto de software mediante algoritmos predictivos.",
            "Calcular el salario mensual de los ingenieros de automatización en la empresa.",
            "Sustituir la necesidad de documentar los requisitos en la base de pruebas."
        ],
        correct: 0,
        explanation: "El oráculo automatizado valida matemáticamente o lógicamente si el comportamiento del sistema es correcto.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Test Oracle automatizado: Mecanismo objetivo que compara el resultado real del sistema frente al resultado esperado."]
    },
    {
        id: 625, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué riesgos implica la adopción apresurada de una herramienta de automatización sin un plan piloto previo (Sección 6.3)?",
        options: [
            "Incurrir en altos costos de inversión estéril, frustración del equipo, incompatibilidad técnica y abandono definitivo de la herramienta.",
            "Aumentar la velocidad de compilación de código fuente en un 500% de manera automática.",
            "Eliminar por completo la necesidad de contar con analistas de calidad expertos.",
            "Garantizar que el software no contenga ningún tipo de defecto en producción."
        ],
        correct: 0,
        explanation: "Saltarse el piloto expone a la organización a comprar software costoso que no se adapta a sus flujos de trabajo.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["Riesgo de omitir piloto: Inversión estéril, frustración del equipo, incompatibilidad técnica y abandono de la herramienta."]
    },
    {
        id: 626, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué diferencia existe entre las herramientas de análisis dinámico y las herramientas de análisis estático de código?",
        options: [
            "El análisis dinámico requiere la ejecución del programa para observar su comportamiento en memoria; el análisis estático examina el código sin ejecutarlo.",
            "El análisis dinámico solo se usa en hojas de cálculo y el estático en bases de datos relacionales.",
            "No hay diferencia técnica; ambos términos describen exactamente el mismo proceso de compilación.",
            "El análisis dinámico lo ejecutan auditores externos y el estático los clientes finales."
        ],
        correct: 0,
        explanation: "Estático = Sin ejecución (SAST). Dinámico = Con ejecución en tiempo de desarrollo/prueba (ej. detectores de fugas de memoria).",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Análisis dinámico (requiere ejecución y monitoreo en memoria) vs Análisis estático (examina código sin ejecutarlo)."]
    },
    {
        id: 627, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Cómo modelan las cargas de trabajo las herramientas de pruebas de rendimiento (Performance Tools)?",
        options: [
            "Simulando transacciones concurrentes de múltiples usuarios virtuales con perfiles de comportamiento y tiempos de espera configurables.",
            "Imprimiendo documentos en formato físico de papel continuo mediante impresoras de oficina.",
            "Contando la cantidad de líneas de código fuente escritas por semana en Git.",
            "Sustituir la necesidad de redactar historias de usuario en tableros Scrum."
        ],
        correct: 0,
        explanation: "Los usuarios virtuales (VUs) imitan patrones de tráfico real para medir el comportamiento del sistema bajo estrés.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Modelado de carga en rendimiento: Simulación de usuarios virtuales con perfiles de tráfico y tiempos configurables."]
    },
    {
        id: 628, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué propósito persiguen las herramientas de Pruebas de Seguridad Dinámicas (DAST - Dynamic Application Security Testing)?",
        options: [
            "Inspeccionar una aplicación en ejecución simulando ataques externos (ej. inyecciones, ataques de fuerza bruta) para hallar vulnerabilidades operativas.",
            "Revisar el código fuente sin compilar buscando variables no inicializadas.",
            "Gestionar las licencias de software comercial en servidores locales.",
            "Calcular el impuesto sobre la renta de los empleados de ingeniería."
        ],
        correct: 0,
        explanation: "DAST ataca la aplicación desde fuera en tiempo de ejecución, a diferencia de SAST que lee el código estático.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["DAST (Security Testing dinámico): Simula ataques externos sobre la aplicación en ejecución para hallar vulnerabilidades."]
    },
    {
        id: 629, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Cómo apoyan las herramientas de control de versiones y gestión de configuración a la integridad de los scripts automatizados?",
        options: [
            "Permitiendo el control de cambios, la colaboración simultánea de múltiples ingenieros y la reversión de modificaciones defectuosas.",
            "Obligando a que los scripts se escriban de forma anónima sin historial de cambios.",
            "Sustituir la necesidad de ejecutar pruebas de regresión en los pipelines de CI/CD.",
            "Calculando el rendimiento de los procesadores en los servidores de la nube."
        ],
        correct: 0,
        explanation: "Git y plataformas afines son vitales para mantener la trazabilidad y salud del código de automatización.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Control de versiones en automatización: Permite control de cambios, colaboración simultánea y reversión de fallas."]
    },
    {
        id: 630, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué rol desempeñan las herramientas de contenedorización (ej. Docker) en la estandarización de los entornos de prueba?",
        options: [
            "Aislar la aplicación y sus dependencias en un contenedor ligero, garantizando que las pruebas se ejecuten en un entorno idéntico en cualquier máquina.",
            "Impidiendo que los desarrolladores utilicen editores de código avanzados en sus computadoras.",
            "Sustituir por completo la necesidad de escribir casos de prueba funcionales.",
            "Reduciendo el tamaño de las bases de datos de producción a cero megabytes."
        ],
        correct: 0,
        explanation: "Los contenedores eliminan el problema de discrepancias operativas entre entornos locales y de CI/CD.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Contenedores en entornos de prueba (Docker): Aislan dependencias para garantizar ejecución en entornos idénticos."]
    },
    {
        id: 631, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué factores organizacionales se deben analizar antes de adquirir herramientas comerciales costosas (COTS)?",
        options: [
            "La madurez actual de los procesos de prueba, la capacidad técnica del personal para operarlas y el retorno de inversión proyectado.",
            "El color corporativo de la interfaz gráfica del panel de control de la herramienta.",
            "La cantidad de gerentes ejecutivos que posea la compañía contratante.",
            "La velocidad de conexión a internet de los teléfonos móviles del personal."
        ],
        correct: 0,
        explanation: "Comprar software costoso sin tener procesos maduros ni personal capacitado suele terminar en un fracaso rotundo.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["Factores organizacionales de compra (COTS): Madurez de procesos, capacidad técnica del personal y ROI proyectado."]
    },
    {
        id: 632, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué implica el mantenimiento preventivo de los scripts automatizados ante actualizaciones de la interfaz de usuario (UI)?",
        options: [
            "Actualizar selectores, localizadores (XPaths/IDs) o rutas de elementos en el código de prueba para evitar falsos positivos por cambios visuales.",
            "Borrar todos los casos de prueba y reescribirlos desde cero cada semana.",
            "Despedir al equipo de automatización ante cualquier cambio en el diseño web.",
            "Sustituir las pruebas automatizadas por revisiones estáticas en papel."
        ],
        correct: 0,
        explanation: "Los cambios de UI rompen localizadores; mantenerlos actualizados evita que los tests fallen falsamente.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.2",
        summary: ["Mantenimiento preventivo de scripts UI: Actualización de selectores y localizadores para prevenir falsos positivos."]
    },
    {
        id: 633, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Cuál es el propósito de integrar analizadores estáticos de código en las políticas de Pull Request de un repositorio?",
        options: [
            "Ejecutar revisiones automáticas que bloquean la integración de código si se detectan vulnerabilidades o violaciones graves de estilo.",
            "Obligar a los evaluadores a ejecutar pruebas manuales durante las madrugadas.",
            "Sustituir la necesidad de contar con un equipo de desarrollo en la empresa.",
            "Garantizar que el presupuesto financiero anual se incremente automáticamente."
        ],
        correct: 0,
        explanation: "Funcionan como un portero automático de calidad que impide que código subestándar entre al tronco principal.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Analizadores estáticos en Pull Requests: Guardias automáticos que bloquean código subestándar antes de fusionarse."]
    },
    {
        id: 634, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué ventajas aportan las herramientas de generación de datos sintéticos (Synthetic Data Generation)?",
        options: [
            "Crear volúmenes masivos de datos limpios y personalizados sin comprometer información sensible de clientes reales o infringir normativas de privacidad (GDPR).",
            "Robar bases de datos corporativas de la competencia de manera automatizada.",
            "Sustituir la necesidad de ejecutar pruebas unitarias en los componentes backend.",
            "Garantizar que el software compile más rápido en los servidores de la nube."
        ],
        correct: 0,
        explanation: "Evitan el uso de datos reales de producción cumpliendo leyes de protección de datos personales.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Generación de datos sintéticos: Crea volúmenes masivos seguros sin comprometer datos reales ni infringir GDPR."]
    },
    {
        id: 635, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué riesgo se asume al confiar ciegamente en los resultados de una herramienta de automatización sin verificar los logs detallados?",
        options: [
            "Pasar por alto fallas reales enmascaradas por falsos positivos o interpretar erróneamente un fallo de infraestructura como si fuera un bug de software.",
            "Aumentar la velocidad de compilación de código fuente en Java.",
            "Eliminar la necesidad de reportar incidentes en herramientas como Jira.",
            "Garantizar que el sistema operativo de los servidores nunca sufra interrupciones."
        ],
        correct: 0,
        explanation: "Un test puede fallar por caída de red y no por un bug; el análisis de logs es insustituible.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.2",
        summary: ["Riesgo de ciega confianza automatizada: Interpretar erróneamente fallas de red como bugs o pasar por alto errores reales."]
    },
    {
        id: 636, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Cuál es el objetivo principal de las herramientas de seguimiento de defectos (Defect Tracking Tools) integradas con QA?",
        options: [
            "Centralizar el ciclo de vida completo de las incidencias, desde su reporte inicial, análisis, corrección y verificación hasta su cierre definitivo.",
            "Calcular el impuesto sobre la renta de los ingenieros de calidad corporativos.",
            "Impidiendo que los desarrolladores modifiquen el código fuente en los sprints.",
            "Sustituir la necesidad de redactar planes de prueba formales."
        ],
        correct: 0,
        explanation: "Centralizan la trazabilidad y el estado operativo de cada bug detectado.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Defect tracking tools: Centralizan la trazabilidad del ciclo de vida de los incidentes desde el reporte hasta el cierre."]
    },
    {
        id: 637, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué implica la métrica de 'Tasa de Éxito de Automatización' (Automation Success Rate)?",
        options: [
            "El porcentaje de ejecuciones de pruebas automatizadas que finalizan correctamente sin errores de script, falsos positivos o bloqueos de entorno.",
            "La cantidad de tazas de café consumidas por el equipo de automatización al mes.",
            "El número de líneas de código escritas por semana en el repositorio Git.",
            "La velocidad de transferencia de internet en el centro de datos principal."
        ],
        correct: 0,
        explanation: "Mide la fiabilidad y estabilidad de los scripts automatizados en los pipelines de CI/CD.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["Automation Success Rate: Mide la fiabilidad y estabilidad de los scripts en los pipelines descartando falsos positivos."]
    },
    {
        id: 638, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Cómo contribuyen las herramientas de gestión de requisitos (Requirements Management Tools) a la calidad del testing?",
        options: [
            "Manteniendo la trazabilidad bidireccional entre las necesidades de negocio y los casos de prueba diseñados para validarlas.",
            "Calculando el rendimiento de los procesadores en los servidores de la nube.",
            "Sustituir por completo la ejecución de pruebas exploratorias en la interfaz.",
            "Obligando a que los analistas de calidad escriban código en lenguajes de bajo nivel."
        ],
        correct: 0,
        explanation: "Aseguran que ningún requisito quede huérfano sin cobertura de prueba asociada.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Requirements management tools: Mantienen la trazabilidad bidireccional entre necesidades de negocio y casos de prueba."]
    },
    {
        id: 639, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Por qué se considera que las herramientas de IA generativa y copilotos de código representan un cambio de paradigma en el testing moderno?",
        options: [
            "Porque aceleran la creación masiva de datos sintéticos, stubs, scripts de prueba y análisis preliminar de riesgos mediante lenguaje natural.",
            "Porque eliminan por completo la necesidad de contar con inteligencia humana en la ingeniería.",
            "Porque garantizan que el software se compile de forma instantánea sin procesadores físicos.",
            "Porque prohíben el uso de metodologías ágiles en las empresas tecnológicas."
        ],
        correct: 0,
        explanation: "La IA generativa actúa como un acelerador analítico y creativo masivo para perfiles funcionales y técnicos.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["IA generativa en testing: Acelerador analítico y creativo masivo para crear datos, stubs y scripts con lenguaje natural."]
    },
    {
        id: 640, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "En conclusión integradora, ¿cómo transforma la selección e implementación estratégica de herramientas la madurez de calidad en una organización?",
        options: [
            "Multiplicando la eficiencia operativa, automatizando tareas repetitivas de regresión, blindando la trazabilidad y elevando la velocidad de entrega segura.",
            "Reduciendo el proceso de desarrollo a una simple tarea administrativa de archivo documental.",
            "Eliminando la necesidad de contar con evaluadores humanos capacitados y con pensamiento crítico.",
            "Garantizando que el presupuesto financiero se gaste sin control ni auditoría."
        ],
        correct: 0,
        explanation: "Las herramientas son habilitadores estratégicos que potencian el talento humano, jamás sustitutos de su juicio crítico.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Madurez por herramientas estratégicas: Multiplican la eficiencia, blindan trazabilidad y elevan la velocidad de entrega segura."]
    },
    {
        id: 641, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué son las herramientas de monitorización de errores en tiempo real (Error Tracking Tools, ej. Sentry)?",
        options: [
            "Herramientas integradas en producción que capturan y reportan excepciones, fallas y crashes de aplicaciones de usuario en vivo.",
            "Sistemas mecánicos para apagar servidores de red ante sobrecalentamiento físico.",
            "Aplicaciones móviles para medir la velocidad de conexión Wi-Fi doméstica.",
            "Registros contables fiscales para auditar facturas de consultoría."
        ],
        correct: 0,
        explanation: "Capturan las excepciones que ocurren en producción permitiendo diagnosticar el error rápidamente.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Error tracking tools (Sentry): Capturan y reportan excepciones y fallas en vivo desde los entornos de producción."]
    },
    {
        id: 642, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué papel desempeñan las herramientas de emulación de redes (Network Emulation Tools) en las pruebas móviles?",
        options: [
            "Simular condiciones adversas de conectividad (ej. redes 3G lentas, alta latencia, pérdida de paquetes o desconexión total).",
            "Fabricar antenas de telefonía celular con componentes de hardware físico.",
            "Aumentar la velocidad de descarga de la fibra óptica de la oficina principal.",
            "Sustituir la necesidad de ejecutar pruebas funcionales de interfaz."
        ],
        correct: 0,
        explanation: "Permiten validar cómo se comporta la aplicación móvil ante problemas reales de red del usuario.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Emulación de redes móviles: Simula condiciones adversas de conectividad, latencia y pérdida de paquetes."]
    },
    {
        id: 643, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Cuál es el riesgo de no auditar periódicamente los scripts de prueba automatizados obsoletos?",
        options: [
            "Acumular 'deuda de pruebas' con scripts muertos que ya no evalúan funciones vigentes, generando falsas sensaciones de cobertura.",
            "Aumentar la velocidad de compilación de código fuente en Java.",
            "Garantizar que el software compile sin errores en lenguajes de bajo nivel.",
            "Reducir el costo de las licencias de software comercial a cero."
        ],
        correct: 0,
        explanation: "Los tests automatizados huérfanos o desactualizados mienten sobre el estado real de calidad del sistema.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.2",
        summary: ["Riesgo de scripts obsoletos: Acumula deuda de pruebas con tests muertos que generan falsas sensaciones de cobertura."]
    },
    {
        id: 644, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué implica la interoperabilidad entre herramientas de testing y tableros de gestión ágil (ej. Jira / Xray)?",
        options: [
            "Vincular de forma transparente la ejecución de casos de prueba directamente con las historias de usuario y Sprints en curso.",
            "Obligar a que los desarrolladores escriban código en hojas de cálculo estáticas.",
            "Sustituir por completo la necesidad de contar con control de versiones en Git.",
            "Garantizar que el cronograma del proyecto nunca sufra modificaciones."
        ],
        correct: 0,
        explanation: "Permite ver en tiempo real el estado de calidad de cada historia de usuario dentro del tablero ágil.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Interoperabilidad QA y tableros ágiles: Vincula ejecuciones de prueba directamente con historias de usuario y Sprints."]
    },
    {
        id: 645, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué papel juega la capacitación continua del equipo en el éxito a largo plazo de un proyecto de automatización?",
        options: [
            "Garantizar que los analistas y desarrolladores actualicen sus competencias frente a la evolución constante de los frameworks de prueba.",
            "Obligar a todo el personal a trabajar turnos nocturnos obligatorios sin remuneración.",
            "Sustituir la necesidad de contar con directores de proyectos en la empresa.",
            "Reducir el presupuesto financiero asignado a infraestructura de servidores."
        ],
        correct: 0,
        explanation: "La tecnología evoluciona rápido; un equipo capacitado previene la obsolescencia de los scripts automatizados.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["Capacitación continua en automatización: Previene la obsolescencia técnica y mantiene vigente el framework."]
    },
    {
        id: 646, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué evalúan las herramientas de análisis de accesibilidad automatizada (Automated Accessibility Scanners)?",
        options: [
            "Si las páginas web cumplen con estándares normativos como WCAG (contraste, etiquetas alt, estructura de encabezados).",
            "Si el edificio corporativo cuenta con ascensores para personas con movilidad reducida.",
            "Si la velocidad de procesamiento de los microprocesadores del servidor cumple expectativas.",
            "Si las contraseñas de los usuarios superan los 8 caracteres alfanuméricos."
        ],
        correct: 0,
        explanation: "Escanean el código HTML y DOM en búsqueda de violaciones de accesibilidad digital de forma automatizada.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Scanners de accesibilidad automatizada: Escanean código HTML/DOM buscando violaciones de normas WCAG."]
    },
    {
        id: 647, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Por qué el soporte de la comunidad y la documentación oficial son factores críticos al seleccionar una herramienta open source?",
        options: [
            "Porque garantizan que ante fallos técnicos o dudas complejas existan recursos públicos, foros y parches disponibles para resolverlos.",
            "Porque obligan al proveedor comercial a pagar multas económicas si la herramienta falla.",
            "Porque eliminan la necesidad de escribir código en lenguajes orientados a objetos.",
            "Porque garantizan que el software funcione sin conexión a internet de manera perpetua."
        ],
        correct: 0,
        explanation: "Una comunidad activa previene que un proyecto open source quede huérfano o sin solución ante bugs del framework.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["Soporte comunitario open source: Garantiza recursos públicos y foros activos para resolver bloqueos técnicos."]
    },
    {
        id: 648, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué es una prueba de mutación (Mutation Testing Tools) en el nivel de componentes avanzados?",
        options: [
            "Una herramienta que introduce pequeños cambios deliberados (mutaciones) en el código fuente para comprobar si las pruebas existentes detectan el cambio.",
            "Un sistema para mutar la apariencia visual de la interfaz según las preferencias del usuario.",
            "Una aplicación para clonar discos duros físicos en servidores remotos.",
            "Un método contable para modificar facturas fiscales de la empresa."
        ],
        correct: 0,
        explanation: "Las pruebas de mutación evalúan la calidad de los propios casos de prueba midiendo si 'matan' el código mutado.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Mutation testing tools: Evalúan la calidad de los tests introduciendo cambios deliberados en el código fuente."]
    },
    {
        id: 649, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué criterio define la madurez en la adopción de herramientas de prueba dentro de una organización?",
        options: [
            "La integración armónica de las herramientas en los procesos de negocio, respaldada por métricas de valor y mejora continua.",
            "La cantidad de dinero gastado en la compra de licencias comerciales privativas más caras del mercado.",
            "El número de servidores físicos instalados en la oficina central de la compañía.",
            "La prohibición absoluta de realizar pruebas manuales exploratorias."
        ],
        correct: 0,
        explanation: "La verdadera madurez no se mide por tener muchas herramientas, sino por cómo se integran y aportan valor real.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["Madurez en adopción de herramientas: Se mide por su integración armónica en los procesos y aporte de valor real."]
    },
    {
        id: 650, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "En conclusión integradora, ¿por qué el capítulo 6 de ISTQB es clave para entender la automatización moderna y el soporte de herramientas?",
        options: [
            "Porque desmitifica la automatización, estableciendo un marco estratégico, de riesgos y de selección fundamentada para potenciar la calidad con tecnología.",
            "Porque enseña a reparar tarjetas madre de computadoras portátiles en hardware de bajo nivel.",
            "Porque elimina por completo la necesidad de contar con analistas humanos en los equipos de desarrollo.",
            "Porque reduce el proceso de desarrollo a una simple tarea administrativa de archivo documental."
        ],
        correct: 0,
        explanation: "El capítulo 6 provee la brújula estratégica para elegir, pilotar y mantener herramientas de prueba con éxito y visión de negocio.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Capítulo 6 como brújula de herramientas: Provee un marco estratégico y de riesgos para seleccionar y potenciar la calidad con tecnología."]
    },
    {
        id: 651, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué rol cumple la automatización de pruebas en el acortamiento de los ciclos de retroalimentación en DevOps?",
        options: [
            "Ejecutar pruebas unitarias, de integración y regresión de forma inmediata tras cada commit, alertando de fallas en segundos.",
            "Obligar a los evaluadores manuales a trabajar turnos nocturnos obligatorios.",
            "Sustituir por completo la necesidad de contar con directores de proyectos.",
            "Garantizar que el presupuesto financiero anual se incremente automáticamente."
        ],
        correct: 0,
        explanation: "La automatización en DevOps acorta el feedback loop para que los devs corrijan errores de inmediato.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Automatización y feedback en DevOps: Ejecuta tests instantáneamente tras cada commit para acortar el ciclo de retroalimentación."]
    },
    {
        id: 652, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué implica la reutilización de scripts automatizados entre diferentes líneas de producto?",
        options: [
            "Diseñar frameworks modulares y desacoplados que permitan aplicar pruebas comunes en plataformas o aplicaciones hermanas.",
            "Copiar y pegar código desordenadamente sin importar que falle la compilación.",
            "Prohibir que los scripts sufran modificaciones bajo ninguna circunstancia.",
            "Sustituir por completo la ejecución de pruebas manuales exploratorias."
        ],
        correct: 0,
        explanation: "Los frameworks modulares permiten aprovechar código de prueba en múltiples productos similares.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Reutilización de scripts entre productos: Diseños modulares que permiten aplicar pruebas comunes en plataformas hermanas."]
    },
    {
        id: 653, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Cuál es el riesgo de automatizar casos de prueba que cambian de requerimiento constantemente?",
        options: [
            "Un costo de mantenimiento insostenible que supera con creces el beneficio de la automatización (falla en el ROI).",
            "Aumentar la velocidad de compilación de código fuente en Java.",
            "Garantizar que el software compile sin errores en lenguajes de bajo nivel.",
            "Reducir el costo de las licencias de software comercial a cero."
        ],
        correct: 0,
        explanation: "Si una función es inestable, automatizarla obliga a reescribir los tests constantemente, destruyendo el ROI.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.2",
        summary: ["Riesgo de automatizar requerimientos volátiles: Costo de mantenimiento insostenible que destruye el ROI."]
    },
    {
        id: 654, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué valor aportan los reportes gráficos automatizados de cobertura y ejecución en las herramientas de gestión?",
        options: [
            "Facilitar la toma de decisiones ejecutivas en tiempo real mediante tableros visuales claros sobre el estado del proyecto.",
            "Imprimir carteles publicitarios decorativos para las paredes de la oficina.",
            "Sustituir la necesidad de contar con analistas de negocio en el equipo ágil.",
            "Calcular el impuesto sobre la renta de los ingenieros de calidad."
        ],
        correct: 0,
        explanation: "Los dashboards visuales comunican métricas de calidad complejas de forma rápida y comprensible para directivos.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Reportes gráficos automatizados (Dashboards): Facilitan la toma de decisiones ejecutivas mediante tableros visuales claros."]
    },
    {
        id: 655, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué implica la integración de herramientas de análisis estático con los IDEs (Entornos de Desarrollo Integrados) de los ingenieros?",
        options: [
            "Proveer retroalimentación instantánea al programador (en tiempo de tecleo) sobre errores o vulnerabilidades antes de que envíe el código al repositorio.",
            "Impidiendo que los desarrolladores utilicen control de versiones en Git.",
            "Obligar a que el sistema operativo de las computadoras se reinicie cada hora.",
            "Sustituir la necesidad de ejecutar pruebas de aceptación del usuario."
        ],
        correct: 0,
        explanation: "Detectar errores en el IDE mientras se escribe código es la forma más temprana (shift-left) de prevención estática.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Análisis estático en IDEs: Proveen feedback instantáneo al programador mientras escribe código para máxima prevención."]
    },
    {
        id: 656, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué criterio define la selección exitosa de un framework de automatización para aplicaciones web?",
        options: [
            "La compatibilidad con navegadores modernos, facilidad para localizar elementos DOM, soporte de lenguaje y comunidad activa.",
            "El precio de venta en caja física de la herramienta en tiendas departamentales.",
            "La obligación de utilizar sistemas operativos obsoletos de 16 bits.",
            "La prohibición absoluta de ejecutar pruebas de forma desatendida."
        ],
        correct: 0,
        explanation: "Un buen framework web equilibra selectores robustos, soporte multiplataforma y facilidad de mantenimiento.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["Selección de framework web: Evalúa compatibilidad de navegadores, robustez de selectores y soporte activo."]
    },
    {
        id: 657, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué rol desempeña la gestión de licencias en la planificación financiera al adoptar herramientas comerciales (COTS)?",
        options: [
            "Asegurar la previsión presupuestaria a corto y largo plazo ante costos por usuario concurrente, soporte y renovaciones anuales.",
            "Garantizar que las licencias nunca expiren sin importar el contrato comercial.",
            "Sustituir por completo la necesidad de contar con planes de prueba formales.",
            "Reducir el tamaño de los repositorios de código en Git a cero archivos."
        ],
        correct: 0,
        explanation: "Controlar el modelo de licenciamiento comercial evita sorpresas financieras por crecimiento de usuarios.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["Gestión de licencias COTS: Previsión financiera ante costos por usuario concurrente, soporte y renovaciones."]
    },
    {
        id: 658, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Cómo apoya la automatización de pruebas de carga en la prevención de caídas del sistema en eventos masivos de tráfico (ej. Black Friday)?",
        options: [
            "Identificando y corrigiendo cuellos de botella de base de datos y memoria antes de que el evento real sature la infraestructura.",
            "Multiplicando el ancho de banda físico de los proveedores de internet por arte de magia.",
            "Eliminando la necesidad de contar con servidores en la nube.",
            "Garantizando que los clientes compren productos sin necesidad de pagar."
        ],
        correct: 0,
        explanation: "Simular picos masivos de tráfico permite dimensionar y optimizar la infraestructura preventivamente.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Pruebas de carga para eventos masivos: Identifican cuellos de botella preventivamente antes de saturaciones reales."]
    },
    {
        id: 659, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "¿Qué implica la evaluación de riesgos tecnológicos al momento de migrar de un framework de automatización a otro?",
        options: [
            "Pesar la posible pérdida temporal de velocidad de regresión, la curva de aprendizaje del equipo y el costo de reescribir scripts.",
            "Asumir que la migración se completará sola de manera instantánea sin esfuerzo.",
            "Despedir a todo el personal de ingeniería de calidad de la compañía.",
            "Sustituir la gestión de incidentes por hojas de cálculo estáticas."
        ],
        correct: 0,
        explanation: "Migrar frameworks conlleva riesgos operativos transitorios que deben gestionarse con prudencia.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.3",
        summary: ["Riesgos tecnológicos en migración de frameworks: Pesa la pérdida temporal de velocidad y el costo de reescribir scripts."]
    },
    {
        id: 660, chapter: 6, chapterTitle: "Cap. 6: Herramientas",
        q: "En conclusión integradora final, ¿cómo se consolida el valor de un profesional de calidad que domina tanto los fundamentos ISTQB como el uso estratégico de herramientas e IA?",
        options: [
            "Convirtiéndose en un referente estratégico capaz de orquestar calidad de punta a punta, uniendo visión de negocio, rigor analítico y aceleración tecnológica.",
            "Reduciendo su rol a una tarea puramente mecánica de ejecución de clics manuales.",
            "Aislando su trabajo del resto de los equipos de desarrollo y negocio.",
            "Limitando su conocimiento exclusivamente a la sintaxis de un solo lenguaje de programación."
        ],
        correct: 0,
        explanation: "Dominar ISTQB, estrategia, herramientas e IA posiciona al analista de calidad como un líder técnico indispensable en la era moderna.",
        pageRef: "ISTQB v4.0, Cap. 6, Sec. 6.1",
        summary: ["Consolidación del profesional de QA moderno: Orquestador estratégico que une visión de negocio, rigor ISTQB y aceleración tecnológica."]
    }
];
