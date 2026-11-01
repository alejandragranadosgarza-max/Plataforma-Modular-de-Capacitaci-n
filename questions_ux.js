// ==========================================
// CAPÍTULO 1: Fundamentos de UX e Investigación (IDs 701-720)
// ==========================================
const questions_ux = [
    {
        id: 701, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Cuál es la diferencia fundamental entre el diseño de Experiencia de Usuario (UX) y el diseño de Interfaz de Usuario (UI)?",
        options: [
            "UX se enfoca en la experiencia holística, la estrategia y cómo se siente el usuario al resolver un problema; UI se enfoca en la apariencia visual, los elementos gráficos y la interacción estética.",
            "UX es una tarea que realizan exclusivamente los desarrolladores backend; UI es tarea de los analistas de negocio.",
            "No existe diferencia; son sinónimos exactos que describen la programación de páginas web.",
            "UX se encarga de auditar bases de datos relacionales y UI de configurar redes en la nube."
        ],
        correct: 0,
        explanation: "UX abarca todo el viaje del usuario, su utilidad y facilidad de uso; UI es la capa visual tangible con la que interactúa (colores, tipografía, botones).",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.1",
        summary: ["UX (Experiencia holística y utilidad) vs UI (Apariencia visual y elementos gráficos de interacción)."]
    },
    {
        id: 702, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Qué objetivo principal persigue la investigación de usuarios (User Research) en las etapas tempranas de un producto?",
        options: [
            "Comprender las necesidades, comportamientos, dolores y motivaciones reales de los usuarios para evitar diseñar basándose en suposiciones.",
            "Reducir los costos de las licencias de software comercial privativo.",
            "Obligar a que los clientes firmen contratos legales de confidencialidad antes de usar la app.",
            "Sustituir por completo la necesidad de redactar historias de usuario en Scrum."
        ],
        correct: 0,
        explanation: "Investigar antes de diseñar evita construir soluciones para problemas que los usuarios no tienen.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.2",
        summary: ["User Research: Comprende dolores y motivaciones reales para erradicar suposiciones en el diseño."]
    },
    {
        id: 703, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Qué es una 'Persona' (User Persona) en el contexto del diseño centrado en el usuario?",
        options: [
            "Una representación arquetípica basada en datos reales de investigación que ayuda a guiar las decisiones de diseño pensando en un usuario específico.",
            "Un usuario real ficticio que trabaja como empleado interno en el departamento de contabilidad.",
            "El nombre comercial registrado de la aplicación móvil ante las autoridades fiscales.",
            "Un script automatizado para pruebas de carga en servidores web."
        ],
        correct: 0,
        explanation: "Las Personas humanizan los datos de investigación y alinean al equipo sobre a quién están sirviendo.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.3",
        summary: ["User Persona: Representación arquetípica basada en datos de investigación para alinear decisiones de diseño."]
    },
    {
        id: 704, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Cuál es la principal ventaja de realizar entrevistas con usuarios en lugar de depender únicamente de encuestas cuantitativas?",
        options: [
            "Permiten profundizar en el 'por qué' detrás de las conductas del usuario, detectando emociones, matices y problemas ocultos mediante preguntas abiertas.",
            "Son herramientas automáticas que no requieren la presencia de un investigador humano.",
            "Garantizan que el 100% de la población mundial responda en menos de cinco minutos.",
            "Eliminan la necesidad de analizar datos estadísticos en el proyecto."
        ],
        correct: 0,
        explanation: "Las entrevistas cualitativas descubren motivaciones profundas que los números fríos de una encuesta no revelan.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.4",
        summary: ["Entrevistas cualitativas: Descubren el 'por qué', emociones y matices ocultos mediante diálogo abierto."]
    },
    {
        id: 705, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Qué representa un Mapa de Empatía (Empathy Map) dentro del proceso de investigación cualitativa?",
        options: [
            "Una herramienta visual que divide lo que el usuario dice, piensa, hace y siente para sintetizar su estado emocional y mental.",
            "Un plano arquitectónico de redes para conectar servidores en la nube.",
            "Un registro contable de los ingresos financieros obtenidos por ventas de la app.",
            "Un diagrama de flujo de código fuente en Java."
        ],
        correct: 0,
        explanation: "Ayuda al equipo a ponerse en los zapatos del usuario categorizando sus expresiones y comportamientos observados.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.5",
        summary: ["Mapa de empatía: Síntesis visual de lo que el usuario dice, piensa, hace y siente."]
    },
    {
        id: 706, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Qué diferencia existe entre la investigación de usuarios de tipo cualitativa y la cuantitativa?",
        options: [
            "La cualitativa responde al 'por qué' y explora motivaciones (muestras pequeñas); la cuantitativa responde al 'qué' y 'cuánto' mediante métricas y datos estadísticos (muestras grandes).",
            "La cualitativa la realizan los desarrolladores y la cuantitativa los clientes finales.",
            "No hay diferencia; ambas miden exactamente lo mismo con idénticos métodos.",
            "La cuantitativa se usa en papel y la cualitativa exclusivamente en servidores virtuales."
        ],
        correct: 0,
        explanation: "Se complementan: la cuantitativa te dice el tamaño del fenómeno y la cualitativa te explica su naturaleza.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.2",
        summary: ["Cualitativa (Explora motivaciones y 'por qué') vs Cuantitativa (Mide tendencias, 'qué' y 'cuánto')."]
    },
    {
        id: 707, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Qué es un Mapa del Viaje del Usuario (Customer Journey Map)?",
        options: [
            "Una representación visual cronológica de todas las etapas, interacciones, puntos de contacto y emociones que experimenta un usuario al intentar lograr una meta.",
            "Un mapa geográfico físico impreso para localizar las oficinas de la empresa.",
            "Un diagrama de clases orientado a objetos para programar bases de datos.",
            "Un registro de los errores detectados por el equipo de pruebas estáticas."
        ],
        correct: 0,
        explanation: "Permite identificar fricciones, puntos de dolor y oportunidades de mejora a lo largo de la experiencia integral.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.6",
        summary: ["Customer Journey Map: Línea de tiempo visual de interacciones, puntos de contacto y emociones del usuario."]
    },
    {
        id: 708, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Qué riesgo se asume al realizar investigación de usuarios utilizando muestras sesgadas o amigos/familiares como participantes?",
        options: [
            "Obtener opiniones complacientes que no reflejan el comportamiento del mercado real, llevando a decisiones de diseño equivocadas.",
            "Aumentar la velocidad de compilación de código fuente en el repositorio.",
            "Garantizar que el producto sea un éxito rotundo en ventas globales.",
            "Reducir el costo de las licencias de software comercial a cero."
        ],
        correct: 0,
        explanation: "Los conocidos suelen mentir por amabilidad o no representan al segmento objetivo, sesgando los hallazgos.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.4",
        summary: ["Riesgo de muestras sesgadas (amigos/familiares): Opiniones complacientes que distorsionan la realidad del mercado."]
    },
    {
        id: 709, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Cuál es el propósito de realizar pruebas de concepto (Concept Testing) antes de iniciar el desarrollo técnico?",
        options: [
            "Validar si la idea principal de la solución resuelta resuena con los usuarios antes de invertir tiempo y dinero en construirla.",
            "Obligar a que los desarrolladores escriban código en lenguajes de bajo nivel.",
            "Sustituir por completo la ejecución de pruebas de aceptación del usuario en producción.",
            "Calcular el impuesto sobre la renta de la empresa contratante."
        ],
        correct: 0,
        explanation: "Ahorra miles de dólares validando la viabilidad comercial y de valor antes de programar una sola línea.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.7",
        summary: ["Pruebas de concepto: Validan el valor de la idea antes de invertir en desarrollo técnico."]
    },
    {
        id: 710, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Qué rol juega la observación contextual (Contextual Inquiry) en la investigación de usuarios?",
        options: [
            "Observar a los usuarios en su entorno natural mientras realizan sus tareas cotidianas para detectar necesidades que ellos mismos no verbalizan.",
            "Encerrar a los usuarios en un laboratorio estéril bajo un interrogatorio de ocho horas.",
            "Revisar el tráfico de red de los servidores desde la oficina central.",
            "Sustituir la necesidad de interactuar con seres humanos reales."
        ],
        correct: 0,
        explanation: "Ver al usuario en su hábitat real revela fricciones ocultas que las entrevistas en salas de juntas omiten.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.4",
        summary: ["Observación contextual: Observación en el entorno natural para descubrir necesidades no verbalizadas."]
    },
    {
        id: 711, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Qué implica la triangulación de datos en la investigación de UX?",
        options: [
            "Combinar múltiples métodos de investigación (ej. entrevistas, encuestas y métricas de uso) para validar hallazgos de forma más sólida y objetiva.",
            "Triplicar el presupuesto financiero asignado al departamento de diseño gráfico.",
            "Dibujar triángulos equiláteros en los wireframes de las pantallas móviles.",
            "Sustituir al equipo de analistas de calidad por herramientas de inteligencia artificial."
        ],
        correct: 0,
        explanation: "Cruz fuentes de información reduce sesgos y confirma si los patrones observados son reales.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.8",
        summary: ["Triangulación de datos: Cruce de múltiples métodos de investigación para contrastar y validar hallazgos."]
    },
    {
        id: 712, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Qué es un 'Pain Point' (Punto de Dolor) en el contexto del análisis de experiencia de usuario?",
        options: [
            "Una frustración, obstáculo o fricción específica que experimenta el usuario al intentar cumplir una tarea.",
            "Un error de sintaxis en el compilador de Java dentro del backend.",
            "Un dolor físico en la espalda provocado por malas sillas de oficina.",
            "Un impuesto gubernamental aplicado a las transacciones de comercio electrónico."
        ],
        correct: 0,
        explanation: "Identificar y resolver pain points es el motor principal para crear productos valiosos que enamoren al usuario.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.3",
        summary: ["Pain Points (Puntos de dolor): Fricciones u obstáculos específicos que frustran al usuario en su tarea."]
    },
    {
        id: 713, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Cómo se relaciona la investigación de usuarios (UX Research) con el trabajo diario de un Product Owner (PO)?",
        options: [
            "Los insights de la investigación alimentan y priorizan el Product Backlog, asegurando que las historias de usuario resuelvan problemas reales.",
            "El PO utiliza la investigación para dictar órdenes estrictas a los programadores sin consultar datos.",
            "No existe relación; el PO solo gestiona presupuestos contables de la empresa.",
            "La investigación sustituye por completo la necesidad de interactuar con los stakeholders de negocio."
        ],
        correct: 0,
        explanation: "El PO usa la investigación como brújula estratégica para decidir qué construir y qué valor priorizar.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.1",
        summary: ["UX Research y Product Owner: Los hallazgos alimentan el Backlog y aseguran construir con enfoque de valor real."]
    },
    {
        id: 714, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Qué es la 'Fatiga de Encuestas' y cómo afecta la calidad de los datos cuantitativos de UX?",
        options: [
            "El cansancio o desinterés de los usuarios al responder cuestionarios largos, lo que genera respuestas automatizadas y datos poco fiables.",
            "Una enfermedad física provocada por mirar pantallas brillantes durante la noche.",
            "Un error de red en los servidores que bloquea la carga de formularios web.",
            "La obligación legal de responder encuestas gubernamentales anuales."
        ],
        correct: 0,
        explanation: "Las encuestas deben ser breves y directas para evitar respuestas al azar que distorsionen la analítica.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.4",
        summary: ["Fatiga de encuestas: Desinterés del usuario que genera respuestas automáticas y datos poco fiables."]
    },
    {
        id: 715, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Qué papel desempeñan los 'Criterios de Selección' (Screening Criteria) al reclutar participantes para un estudio?",
        options: [
            "Asegurar que las personas reclutadas pertenezcan estrictamente al segmento de usuario objetivo y posean las características conductuales requeridas.",
            "Filtrar el código fuente para eliminar virus informáticos en los equipos de prueba.",
            "Seleccionar al personal de la empresa que tenga mejor sueldo para que pruebe la app.",
            "Impidiendo que los usuarios reales participen en entrevistas cualitativas."
        ],
        correct: 0,
        explanation: "Un buen screener evita que personas incorrectas contaminen la investigación con perfiles erróneos.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.4",
        summary: ["Screening criteria: Filtros de reclutamiento para asegurar participantes que pertenezcan al segmento objetivo."]
    },
    {
        id: 716, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Qué ventaja metodológica aporta el enfoque 'Mobile-First' en el diseño de productos digitales modernos?",
        options: [
            "Obligar al equipo a priorizar el contenido esencial y las funciones críticas debido a la limitación de espacio en pantallas pequeñas.",
            "Prohibir el uso de computadoras de escritorio en todas las oficinas corporativas.",
            "Aumentar la velocidad de transferencia de datos en redes de fibra óptica fija.",
            "Sustituir por completo la necesidad de realizar pruebas de rendimiento en servidores."
        ],
        correct: 0,
        explanation: "Diseñar primero para móvil fuerza la simplicidad y la jerarquía de información indispensable.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.9",
        summary: ["Enfoque Mobile-First: Prioriza contenido esencial y funciones críticas ante la limitación de pantallas pequeñas."]
    },
    {
        id: 717, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Qué diferencia existe entre un requisito de negocio y una necesidad de usuario (User Need)?",
        options: [
            "El requisito de negocio busca cumplir metas comerciales u operativas de la empresa; la necesidad de usuario busca resolver un problema humano fundamental.",
            "Son exactamente lo mismo y se redactan con las mismas palabras en el backlog.",
            "El requisito de negocio lo define el cliente final y la necesidad de usuario los programadores.",
            "La necesidad de usuario solo existe en aplicaciones de entretenimiento y los negocios en banca."
        ],
        correct: 0,
        explanation: "El éxito de un producto radica en encontrar el punto de equilibrio donde el negocio gana y el usuario resuelve su necesidad.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.1",
        summary: ["Requisito de negocio (Metas comerciales) vs Necesidad de usuario (Resolución de problemas humanos)."]
    },
    {
        id: 718, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Qué objetivo persigue la creación de un 'Inventario de Contenido' en la fase inicial de UX?",
        options: [
            "Listar y auditar todos los activos de información existentes para entender qué se tiene, qué falta y cómo se debe estructurar.",
            "Calcular el impuesto fiscal trimestral sobre las ventas de la compañía.",
            "Medir la velocidad de tecleo de los redactores de contenido técnico.",
            "Sustituir la necesidad de realizar entrevistas cualitativas con usuarios."
        ],
        correct: 0,
        explanation: "Inventariar evita duplicidad de información y desorden en la arquitectura preliminar.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.10",
        summary: ["Inventario de contenido: Auditoría inicial de activos informativos para estructurar y ordenar el producto."]
    },
    {
        id: 719, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "¿Por qué se considera un error común en UX diseñar basándose en los gustos personales del equipo o los directivos?",
        options: [
            "Porque el equipo y los directivos rara vez representan al usuario final real, lo que genera productos desconectados de las necesidades del mercado.",
            "Porque los directivos tienen prohibido opinar sobre el diseño visual de la interfaz.",
            "Porque la ley prohíbe que los empleados utilicen las aplicaciones que desarrollan.",
            "Porque aumenta la velocidad de compilación de código fuente en Git."
        ],
        correct: 0,
        explanation: "El sesgo de 'tú no eres tu usuario' es una de las trampas más peligrosas en la gestión de producto.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.2",
        summary: ["Sesgo de 'tú no eres tu usuario': Diseñar por gustos personales del equipo genera productos desconectados del mercado."]
    },
    {
        id: 720, chapter: 1, chapterTitle: "Cap. 1: UX & Research",
        q: "En conclusión integradora, ¿cómo transforma la investigación de usuarios la labor de un analista o PO en un equipo ágil?",
        options: [
            "Aportando evidencia objetiva y empática que orienta la toma de decisiones, minimizando el riesgo de construir funcionalidades que nadie usará.",
            "Convirtiendo al analista en un diseñador gráfico experto en herramientas vectoriales.",
            "Eliminando por completo la necesidad de negociar alcances con los stakeholders.",
            "Reduciendo el proceso de desarrollo a una simple tarea administrativa de archivo."
        ],
        correct: 0,
        explanation: "La investigación mitiga el riesgo de negocio basando el desarrollo en certezas humanas y no en conjeturas.",
        pageRef: "UX Fundamentals, Cap. 1, Sec. 1.1",
        summary: ["User Research como brújula: Aporta evidencia empática para minimizar el riesgo de construir funciones inútiles."]
    }
];