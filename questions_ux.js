// ==========================================
// CAPÍTULOS DE UX Y DISEÑO DE INTERACCIONES (IDs 701-780)
// ==========================================
const questions_ux = [
    // ==========================================
    // CAPÍTULO 1: Fundamentos de UX e Investigación (IDs 701-720)
    // ==========================================
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
            "Validar si la idea principal de la solución resuena con los usuarios antes de invertir tiempo y dinero en construirla.",
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
        explanation: "Cruzar fuentes de información reduce sesgos y confirma si los patrones observados son reales.",
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
    },

    // ==========================================
    // CAPÍTULO 2: Arquitectura de Información e Interacción (IDs 721-740)
    // ==========================================
    {
        id: 721, chapter: 2, chapterTitle: "Cap. 2: Arquitectura e Interacción",
        q: "¿Qué propósito fundamental cumple la Arquitectura de Información (AI) en un producto digital?",
        options: [
            "Estructurar, organizar y etiquetar el contenido de manera lógica y comprensible para que los usuarios encuentren la información sin esfuerzo.",
            "Diseñar los colores corporativos y la paleta cromática de la aplicación.",
            "Configurar los certificados de seguridad SSL en los servidores web.",
            "Escribir las consultas SQL para optimizar las tablas relacionales del backend."
        ],
        correct: 0,
        explanation: "Una buena arquitectura de información actúa como el esqueleto invisible que facilita la navegación intuitiva.",
        pageRef: "Information Architecture, Cap. 2, Sec. 2.1",
        summary: ["Arquitectura de Información: Estructura y organiza contenidos para garantizar navegación intuitiva."]
    },
    {
        id: 722, chapter: 2, chapterTitle: "Cap. 2: Arquitectura e Interacción",
        q: "¿Qué es una prueba de clasificación de tarjetas (Card Sorting) en arquitectura de información?",
        options: [
            "Una técnica donde los usuarios agrupan conceptos de contenido según su propio criterio mental, ayudando a diseñar la estructura de menús y categorías.",
            "Un juego de mesa corporativo para evaluar el desempeño de los desarrolladores junior.",
            "Un método automatizado para ordenar archivos en el disco duro del servidor.",
            "Una auditoría de seguridad para detectar tarjetas de crédito clonadas."
        ],
        correct: 0,
        explanation: "El Card Sorting revela el modelo mental del usuario para construir jerarquías acordes a su intuición.",
        pageRef: "Information Architecture, Cap. 2, Sec. 2.2",
        summary: ["Card Sorting: Revela el modelo mental del usuario para estructurar menús y categorías de forma natural."]
    },
    {
        id: 723, chapter: 2, chapterTitle: "Cap. 2: Arquitectura e Interacción",
        q: "¿Cuál es la diferencia entre un Card Sorting Abierto y uno Cerrado?",
        options: [
            "En el abierto los usuarios crean sus propias categorías; en el cerrado deben clasificar los elementos dentro de categorías predefinidas.",
            "El abierto se hace en papel y el cerrado exclusivamente mediante inteligencia artificial.",
            "El abierto es para desarrolladores y el cerrado para el director general.",
            "No hay diferencias metodológicas en los resultados."
        ],
        correct: 0,
        explanation: "El abierto descubre nuevas etiquetas conceptuales; el cerrado evalúa si una estructura existente funciona.",
        pageRef: "Information Architecture, Cap. 2, Sec. 2.2",
        summary: ["Card Sorting Abierto (Usuarios crean categorías) vs Cerrado (Categorías predefinidas)."]
    },
    {
        id: 724, chapter: 2, chapterTitle: "Cap. 2: Arquitectura e Interacción",
        q: "¿Qué es un Diagrama de Flujo de Usuario (User Flow) y para qué sirve?",
        options: [
            "Una representación paso a paso del camino que sigue un usuario para completar una tarea específica dentro del producto.",
            "Un diagrama eléctrico de los componentes internos de un teléfono móvil.",
            "Un organigrama jerárquico de los empleados del departamento de recursos humanos.",
            "Un esquema de red que muestra la conexión entre routers y conmutadores."
        ],
        correct: 0,
        explanation: "Permite visualizar posibles callejones sin salida, pasos redundantes y optimizar la eficiencia del recorrido.",
        pageRef: "Interaction Design, Cap. 2, Sec. 2.3",
        summary: ["User Flow: Muestra el recorrido paso a paso del usuario para detectar fricciones y optimizar tareas."]
    },
    {
        id: 725, chapter: 2, chapterTitle: "Cap. 2: Arquitectura e Interacción",
        q: "¿Qué principio de diseño establece la 'Ley de Hick' (Hick's Law)?",
        options: [
            "El tiempo que tardan las personas en tomar una decisión aumenta logarítmicamente con el número y la complejidad de las opciones.",
            "Los usuarios prefieren páginas web con más de cincuenta colores diferentes.",
            "Las aplicaciones móviles deben consumir la menor cantidad de batería posible.",
            "Los elementos visuales más grandes siempre se interpretan como errores."
        ],
        correct: 0,
        explanation: "Reducir opciones y desglosar procesos complejos (como formularios largos en pasos) acelera la toma de decisiones.",
        pageRef: "UX Laws, Cap. 2, Sec. 2.4",
        summary: ["Ley de Hick: A mayor cantidad de opciones, mayor tiempo de decisión para el usuario."]
    },
    {
        id: 726, chapter: 2, chapterTitle: "Cap. 2: Arquitectura e Interacción",
        q: "¿En qué consiste la 'Ley de Fitts' (Fitts's Law) aplicada al diseño de interfaces interactivas?",
        options: [
            "El tiempo necesario para alcanzar un objetivo en pantalla depende de la distancia hacia él y de su tamaño (los objetivos grandes y cercanos son más fáciles de pulsar).",
            "Los usuarios siempre leen el texto de arriba a izquierda en forma de Z.",
            "Las interfaces oscuras consumen menos recursos gráficos en tarjetas de video.",
            "Los formularios complejos deben tener campos obligatorios sin marcar."
        ],
        correct: 0,
        explanation: "Explica por qué los botones principales de acción (como 'Comprar ahora') deben ser grandes y ubicarse en zonas accesibles.",
        pageRef: "UX Laws, Cap. 2, Sec. 2.4",
        summary: ["Ley de Fitts: Objetivos grandes y cercanos reducen el tiempo y esfuerzo físico de interacción."]
    },
    {
        id: 727, chapter: 2, chapterTitle: "Cap. 2: Arquitectura e Interacción",
        q: "¿Qué describe la 'Ley de Miller' sobre la memoria de trabajo humana en el diseño de interfaces?",
        options: [
            "El ser humano promedio puede retener solo alrededor de 7 (más o menos 2) elementos en su memoria de corto plazo.",
            "Las personas olvidan el 90% de la información después de cinco minutos de lectura.",
            "Los menús de navegación no deben superar nunca los dos niveles de profundidad.",
            "Los textos en pantalla deben escribirse obligatoriamente en tamaño 16 píxeles."
        ],
        correct: 0,
        explanation: "Agrupar la información (chunking) ayuda a no saturar la capacidad cognitiva del usuario.",
        pageRef: "UX Laws, Cap. 2, Sec. 2.4",
        summary: ["Ley de Miller: La memoria a corto plazo retiene aprox. 7±2 elementos; agrupar información es vital."]
    },
    {
        id: 728, chapter: 2, chapterTitle: "Cap. 2: Arquitectura e Interacción",
        q: "¿Qué es un 'Árbol de Decisión de Navegación' (Site Map) y cuál es su utilidad?",
        options: [
            "Un mapa jerárquico estructural que muestra todas las páginas o pantallas de un sitio web y cómo se conectan entre sí.",
            "Un árbol genealógico de los fundadores de la empresa tecnológica.",
            "Un algoritmo matemático para ordenar bases de datos en servidores distribuidos.",
            "Un registro de los errores de compilación encontrados en GitHub."
        ],
        correct: 0,
        explanation: "Permite al equipo visualizar la macroestructura del producto antes de diseñar pantallas individuales.",
        pageRef: "Information Architecture, Cap. 2, Sec. 2.1",
        summary: ["Site Map: Mapa jerárquico que visualiza la estructura global y conexiones entre pantallas."]
    },
    {
        id: 729, chapter: 2, chapterTitle: "Cap. 2: Arquitectura e Interacción",
        q: "¿Qué papel juega el 'Modelo Mental' del usuario en el diseño de interacción?",
        options: [
            "Es la expectativa preconcebida que tiene el usuario sobre cómo funciona un sistema basándose en sus experiencias previas.",
            "Es un examen médico obligatorio para certificar diseñadores de interfaz.",
            "Es un script de inteligencia artificial para predecir clics en botones secundarios.",
            "Es el manual técnico de programación escrito por los desarrolladores."
        ],
        correct: 0,
        explanation: "Si el diseño coincide con el modelo mental del usuario, la interfaz se vuelve intuitiva de inmediato.",
        pageRef: "Interaction Design, Cap. 2, Sec. 2.5",
        summary: ["Modelo mental: Expectativas previas del usuario; alinearse con él genera interfaces intuitivas."]
    },
    {
        id: 730, chapter: 2, chapterTitle: "Cap. 2: Arquitectura e Interacción",
        q: "¿Qué objetivo persigue la técnica de 'Pruebas de Árbol' (Tree Testing) en arquitectura de información?",
        options: [
            "Evaluar la findability (encontrabilidad) de los contenidos en una jerarquía de menús textuales sin la influencia del diseño visual.",
            "Medir la resistencia de los servidores web ante ataques de denegación de servicio.",
            "Validar la calidad de la madera utilizada para fabricar escritorios de oficina.",
            "Calcular la velocidad de renderizado de animaciones 3D en navegadores móviles."
        ],
        correct: 0,
        explanation: "Permite probar si los usuarios encuentran información en la jerarquía de categorías antes de invertir en diseño visual.",
        pageRef: "Information Architecture, Cap. 2, Sec. 2.2",
        summary: ["Tree Testing: Evalúa la encontrabilidad de contenidos en jerarquías textuales puras sin sesgo visual."]
    },

    // ==========================================
    // CAPÍTULO 3: Prototipado y Diseño de UI (IDs 741-760)
    // ==========================================
    {
        id: 741, chapter: 3, chapterTitle: "Cap. 3: Prototipado y UI",
        q: "¿Cuál es la diferencia principal entre un prototipo de baja fidelidad (Low-Fi) y uno de alta fidelidad (Hi-Fi)?",
        options: [
            "Low-Fi son bocetos simples en papel o wireframes esquemáticos para validar conceptos rápidos; Hi-Fi son prototipos detallados visualmente e interactivos cercanos al producto final.",
            "Low-Fi requiere programación avanzada en Java y Hi-Fi se diseña con lápiz y papel.",
            "No hay diferencia; ambos términos se usan como sinónimos exactos en agilidad.",
            "Low-Fi es solo para directivos y Hi-Fi es para el equipo de soporte técnico."
        ],
        correct: 0,
        explanation: "Los prototipos Low-Fi ahorran tiempo en etapas tempranas; los Hi-Fi validan aspectos estéticos y microinteracciones.",
        pageRef: "Prototyping, Cap. 3, Sec. 3.1",
        summary: ["Low-Fi (Bocetos rápidos y estructurales) vs Hi-Fi (Prototipos visuales interactivos de alta fidelidad)."]
    },
    {
        id: 742, chapter: 3, chapterTitle: "Cap. 3: Prototipado y UI",
        q: "¿Qué es un Wireframe en el diseño de interfaces de usuario?",
        options: [
            "Un esquema estructural en blanco y negro que define la distribución de contenidos, jerarquía visual y funcionalidad sin entrar en detalles estéticos.",
            "Un cable de cobre blindado utilizado para conectar servidores en centros de datos.",
            "Un lenguaje de programación orientado a objetos para aplicaciones móviles.",
            "Un informe contable de los gastos de diseño gráfico trimestral."
        ],
        correct: 0,
        explanation: "Los wireframes actúan como el plano arquitectónico de una pantalla antes de aplicar colores y tipografías.",
        pageRef: "Prototyping, Cap. 3, Sec. 3.2",
        summary: ["Wireframe: Esquema estructural en blanco y negro que define jerarquía y distribución de elementos."]
    },
    {
        id: 743, chapter: 3, chapterTitle: "Cap. 3: Prototipado y UI",
        q: "¿Qué es un Sistema de Diseño (Design System) y qué beneficios aporta a un equipo de desarrollo?",
        options: [
            "Una colección centralizada de componentes reutilizables, guías de estilo, patrones y reglas de código que aseguran la coherencia visual y aceleran el desarrollo.",
            "Un sistema operativo privativo para computadoras portátiles de la compañía.",
            "Una base de datos relacional para almacenar contraseñas de usuarios encriptadas.",
            "Un conjunto de normas legales para registrar patentes de software ante el gobierno."
        ],
        correct: 0,
        explanation: "Evita reinventar componentes, unifica criterios entre diseño y desarrollo (frontend) y mantiene consistencia.",
        pageRef: "Design Systems, Cap. 3, Sec. 3.3",
        summary: ["Design System: Repositorio centralizado de componentes y guías para asegurar consistencia y velocidad."]
    },
    {
        id: 744, chapter: 3, chapterTitle: "Cap. 3: Prototipado y UI",
        q: "¿Por qué es crucial mantener una correcta 'Jerarquía Visual' en el diseño de pantallas?",
        options: [
            "Para guiar la atención del usuario de forma natural hacia los elementos más importantes y facilitar la lectura escaneable.",
            "Para obligar a que los usuarios compren productos más caros sin darse cuenta.",
            "Para cumplir con las normas de seguridad de redes en la nube.",
            "Para aumentar el consumo de memoria RAM del navegador web."
        ],
        correct: 0,
        explanation: "La jerarquía visual mediante tamaño, contraste y peso tipográfico comunica qué es prioritario de un vistazo.",
        pageRef: "UI Design, Cap. 3, Sec. 3.4",
        summary: ["Jerarquía visual: Guía la atención del usuario priorizando elementos clave mediante contraste y tamaño."]
    },
    {
        id: 745, chapter: 3, chapterTitle: "Cap. 3: Prototipado y UI",
        q: "¿Qué relación existe entre el diseño de UI y la accesibilidad web (normas WCAG)?",
        options: [
            "La UI debe cumplir estándares de accesibilidad (como contraste de color adecuado y soporte para lectores de pantalla) para que personas con discapacidades puedan usarla.",
            "La accesibilidad es opcional y solo aplica para sitios web gubernamentales.",
            "El diseño de UI y la accesibilidad son disciplinas completamente independientes que nunca se cruzan.",
            "La accesibilidad se encarga exclusivamente de configurar routers Wi-Fi."
        ],
        correct: 0,
        explanation: "Diseñar accesiblemente ensancha el mercado y garantiza equidad en el acceso a la tecnología.",
        pageRef: "Accessibility, Cap. 3, Sec. 3.5",
        summary: ["Accesibilidad (WCAG): Garantiza que interfaces sean utilizables por personas con diversas discapacidades."]
    },
    {
        id: 746, chapter: 3, chapterTitle: "Cap. 3: Prototipado y UI",
        q: "¿Qué es el 'Contraste de Color' y por qué es un requisito crítico en UI y accesibilidad?",
        options: [
            "La diferencia de luminosidad entre el texto y su fondo; un contraste insuficiente impide que personas con discapacidad visual lean el contenido.",
            "La combinación de colores llamativos para que la aplicación parezca más moderna en redes sociales.",
            "La cantidad de colores oscuros permitidos en el modo nocturno de una tablet.",
            "Un indicador de rendimiento del procesador gráfico."
        ],
        correct: 0,
        explanation: "Las pautas WCAG exigen ratios mínimos de contraste (ej. 4.5:1 para texto normal) para garantizar legibilidad.",
        pageRef: "UI Design, Cap. 3, Sec. 3.5",
        summary: ["Contraste de color: Ratios mínimos de luminosidad entre texto y fondo para garantizar legibilidad visual."]
    },
    {
        id: 747, chapter: 3, chapterTitle: "Cap. 3: Prototipado y UI",
        q: "¿Qué son los 'Affordance' (Asequibilidad o Indicios de Uso) en el diseño de interfaces?",
        options: [
            "Las propiedades visuales de un objeto que sugieren intuitivamente cómo debe interactuarse con él (ej. un botón con relieve tridimensional que invita a ser pulsado).",
            "El costo económico necesario para comprar las licencias del software de diseño.",
            "La velocidad de carga de las imágenes en formato PNG y SVG.",
            "El espacio libre alrededor de los párrafos de texto."
        ],
        correct: 0,
        explanation: "Una buena asequibilidad elimina la necesidad de explicar cómo funciona un elemento interactivo.",
        pageRef: "Interaction Design, Cap. 3, Sec. 3.6",
        summary: ["Affordance: Pistas visuales intuitivas que indican cómo interactuar con un elemento en pantalla."]
    },
    {
        id: 748, chapter: 3, chapterTitle: "Cap. 3: Prototipado y UI",
        q: "¿Qué rol cumplen los 'Espacios en Blanco' (Whitespace / Negative Space) en el diseño visual?",
        options: [
            "Mejorar la legibilidad, reducir la carga cognitiva y dar respiro visual separando grupos de información.",
            "Desperdiciar espacio valioso que podría usarse para colocar más banners publicitarios.",
            "Aumentar el tiempo de compilación del código HTML y CSS.",
            "Ocultar errores de alineación en los wireframes."
        ],
        correct: 0,
        explanation: "El espacio en blanco es una herramienta de diseño activa que otorga elegancia y claridad.",
        pageRef: "UI Design, Cap. 3, Sec. 3.4",
        summary: ["Whitespace: Espacio negativo que reduce fatiga visual y jerarquiza los bloques de contenido."]
    },
    {
        id: 749, chapter: 3, chapterTitle: "Cap. 3: Prototipado y UI",
        q: "¿Qué es un 'Patrón de Interacción' (Design Pattern) en la creación de interfaces?",
        options: [
            "Una solución reutilizable y probada para problemas comunes de diseño de interfaz (ej. menús de hamburguesa, carruseles, acordeones).",
            "Un error repetitivo en el código fuente del sistema frontend.",
            "Un algoritmo matemático para cifrar contraseñas de usuario.",
            "Un protocolo de red para transmitir paquetes de datos."
        ],
        correct: 0,
        explanation: "Usar patrones conocidos aprovecha los modelos mentales previos del usuario sin requerir curva de aprendizaje.",
        pageRef: "UI Design, Cap. 3, Sec. 3.7",
        summary: ["Design Patterns: Soluciones estandarizadas y probadas para resolver problemas recurrentes de interfaz."]
    },
    {
        id: 750, chapter: 3, chapterTitle: "Cap. 3: Prototipado y UI",
        q: "¿Cuál es el propósito de realizar pruebas de prototipo interactivo (Click-Through Prototyping) antes de codificar?",
        options: [
            "Simular la experiencia real de navegación para detectar problemas de usabilidad y flujo antes de invertir en desarrollo de software.",
            "Calcular el impuesto sobre la renta del equipo de diseño.",
            "Obligar a que los desarrolladores aprendan a usar herramientas vectoriales.",
            "Sustituir por completo las pruebas unitarias en el backend."
        ],
        correct: 0,
        explanation: "Detectar fallas de navegación en prototipos es cien veces más económico que corregirlas en código ya programado.",
        pageRef: "Prototyping, Cap. 3, Sec. 3.1",
        summary: ["Prototipado interactivo: Simula la experiencia real para validar flujos y detectar fricciones antes de programar."]
    },

    // ==========================================
    // CAPÍTULO 4: Pruebas de Usabilidad y Métricas (IDs 761-780)
    // ==========================================
    {
        id: 761, chapter: 4, chapterTitle: "Cap. 4: Usabilidad y Métricas",
        q: "¿Qué evalúan fundamentalmente las Pruebas de Usabilidad (Usability Testing)?",
        options: [
            "Qué tan fácil, intuitiva y eficiente es una interfaz para que los usuarios alcancen sus objetivos sin frustración.",
            "La capacidad de los servidores para soportar millones de transacciones simultáneas.",
            "La seguridad de los datos ante ataques de inyección SQL.",
            "La correcta compilación del código fuente en entornos de producción."
        ],
        correct: 0,
        explanation: "Miden la interacción real observando a usuarios representativos intentando completar tareas específicas.",
        pageRef: "Usability Testing, Cap. 4, Sec. 4.1",
        summary: ["Pruebas de usabilidad: Evalúan eficiencia, efectividad y satisfacción del usuario en tareas reales."]
    },
    {
        id: 762, chapter: 4, chapterTitle: "Cap. 4: Usabilidad y Métricas",
        q: "¿Qué mide la métrica de 'Tasa de Éxito de la Tarea' (Task Success Rate) en una prueba de usabilidad?",
        options: [
            "El porcentaje de usuarios que logran completar con éxito una tarea asignada sin ayuda del moderador.",
            "La cantidad de dinero ahorrada al contratar menos diseñadores gráficos.",
            "El porcentaje de respuestas correctas en un examen de opción múltiple.",
            "La velocidad de descarga de archivos PDF en la plataforma."
        ],
        correct: 0,
        explanation: "Es una métrica cuantitativa fundamental: si la tasa de éxito es baja, el diseño tiene fallas graves de claridad.",
        pageRef: "UX Metrics, Cap. 4, Sec. 4.2",
        summary: ["Task Success Rate: Porcentaje de usuarios que completan con éxito la tarea asignada."]
    },
    {
        id: 763, chapter: 4, chapterTitle: "Cap. 4: Usabilidad y Métricas",
        q: "¿Qué evalúa el cuestionario estandarizado SUS (System Usability Scale)?",
        options: [
            "La percepción subjetiva del usuario sobre la facilidad de uso global de un sistema mediante un cuestionario rápido de 10 ítems.",
            "La velocidad de los microprocesadores en dispositivos móviles.",
            "El nivel de satisfacción salarial de los analistas de calidad.",
            "La cantidad de errores sintácticos en hojas de estilo CSS."
        ],
        correct: 0,
        explanation: "El SUS es un estándar de la industria ágil y confiable para obtener una puntuación numérica de usabilidad (de 0 a 100).",
        pageRef: "UX Metrics, Cap. 4, Sec. 4.3",
        summary: ["SUS (System Usability Scale): Cuestionario estandarizado de 10 ítems para medir la percepción de usabilidad."]
    },
    {
        id: 764, chapter: 4, chapterTitle: "Cap. 4: Usabilidad y Métricas",
        q: "¿Qué significa el concepto de 'Tiempo en la Tarea' (Time-on-Task) en analítica y pruebas de usabilidad?",
        options: [
            "El tiempo exacto que tarda un usuario en completar una tarea de principio a fin (a menor tiempo, por lo general, mayor eficiencia e intuición).",
            "El horario laboral en el que los empleados deben asistir a la oficina.",
            "El tiempo que permanece encendida una computadora sin ventilación.",
            "El retraso en la entrega de historias de usuario dentro del sprint de Scrum."
        ],
        correct: 0,
        explanation: "Tiempos excesivos en tareas sencillas indican problemas graves en la claridad de los flujos o textos.",
        pageRef: "UX Metrics, Cap. 4, Sec. 4.2",
        summary: ["Time-on-Task: Duración del proceso para completar una tarea; refleja la eficiencia de la interfaz."]
    },
    {
        id: 765, chapter: 4, chapterTitle: "Cap. 4: Usabilidad y Métricas",
        q: "¿Cuál es la regla de oro sobre cuántos usuarios evaluar en una prueba cualitativa de usabilidad según Jakob Nielsen?",
        options: [
            "Con 5 usuarios se descubren aproximadamente el 85% de los problemas de usabilidad; evaluar más aporta rendimientos decrecientes.",
            "Se necesitan obligatoriamente 500 usuarios para obtener cualquier conclusión válida.",
            "Basta con evaluar a una sola persona del departamento de sistemas.",
            "Las pruebas de usabilidad con humanos ya no son necesarias gracias a la inteligencia artificial."
        ],
        correct: 0,
        explanation: "Permite encontrar la mayoría de los errores críticos rápidamente y sin gastar presupuestos masivos.",
        pageRef: "Usability Testing, Cap. 4, Sec. 4.4",
        summary: ["Regla de los 5 usuarios (Nielsen): Con 5 participantes cualitativos se detecta hasta el 85% de las fallas."]
    },
    {
        id: 766, chapter: 4, chapterTitle: "Cap. 4: Usabilidad y Métricas",
        q: "¿Qué son los 'Mapas de Calor' (Heatmaps) y qué métricas visuales aportan en analítica web?",
        options: [
            "Representaciones visuales que muestran dónde hacen clic, se desplazan (scroll) o miran los usuarios en una pantalla mediante gradientes de color.",
            "Mapas meteorológicos utilizados para planificar eventos corporativos al aire libre.",
            "Gráficos de temperatura interna de los servidores en la granja de datos.",
            "Registros de transacciones financieras realizadas con tarjetas de crédito."
        ],
        correct: 0,
        explanation: "Ayudan a detectar si los usuarios ignoran llamadas a la acción importantes o si se distraen con elementos decorativos.",
        pageRef: "UX Analytics, Cap. 4, Sec. 4.5",
        summary: ["Heatmaps: Visualizan zonas de mayor atención, clics y desplazamiento (scroll) en las pantallas."]
    },
    {
        id: 767, chapter: 4, chapterTitle: "Cap. 4: Usabilidad y Métricas",
        q: "¿Qué mide la 'Tasa de Abandono' (Drop-off / Churn Rate) en un embudo de conversión (Conversion Funnel)?",
        options: [
            "El porcentaje de usuarios que abandonan un proceso de varios pasos (ej. un formulario de registro o pago) antes de completarlo.",
            "La cantidad de empleados que renuncian a la empresa cada mes.",
            "El porcentaje de software desinstalado en computadoras portátiles.",
            "La cantidad de llamadas telefónicas perdidas en el departamento de soporte."
        ],
        correct: 0,
        explanation: "Identificar en qué paso exacto se van los usuarios permite corregir fricciones y aumentar conversiones de negocio.",
        pageRef: "UX Analytics, Cap. 4, Sec. 4.5",
        summary: ["Tasa de abandono: Porcentaje de usuarios que interrumpen un proceso en un paso específico del embudo."]
    },
    {
        id: 768, chapter: 4, chapterTitle: "Cap. 4: Usabilidad y Métricas",
        q: "¿Qué diferencia existe entre un test de usabilidad moderado (moderated) y uno no moderado (unmoderated)?",
        options: [
            "En el moderado hay un investigador presente guiando y haciendo preguntas en tiempo real; en el no moderado el usuario realiza las tareas de forma autónoma mediante software automatizado.",
            "El moderado se hace en papel y el no moderado en computadoras cuánticas.",
            "El moderado es exclusivo para directivos y el no moderado para clientes VIP.",
            "No existe diferencia metodológica en la recopilación de datos."
        ],
        correct: 0,
        explanation: "Los tests moderados permiten profundizar en emociones y bloqueos; los no moderados escalan rápido y con menor costo.",
        pageRef: "Usability Testing, Cap. 4, Sec. 4.1",
        summary: ["Tests moderados (Con investigador guía) vs No moderados (Autónomos mediante plataformas automatizadas)."]
    },
    {
        id: 769, chapter: 4, chapterTitle: "Cap. 4: Usabilidad y Métricas",
        q: "¿Qué mide la métrica CES (Customer Effort Score) en la experiencia de usuario?",
        options: [
            "El esfuerzo que tuvo que realizar el cliente para resolver un problema o completar una tarea con la empresa.",
            "La cantidad de energía eléctrica consumida por la aplicación móvil al ejecutarse en segundo plano.",
            "El peso en kilobytes de los archivos adjuntos en el soporte técnico.",
            "La velocidad de tecleo de los operadores de centro de llamadas."
        ],
        correct: 0,
        explanation: "Un menor esfuerzo del usuario correlaciona directamente con una alta lealtad y retención hacia el producto.",
        pageRef: "UX Metrics, Cap. 4, Sec. 4.3",
        summary: ["CES (Customer Effort Score): Mide el grado de fricción y esfuerzo percibido por el usuario para resolver su trámite."]
    },
    {
        id: 770, chapter: 4, chapterTitle: "Cap. 4: Usabilidad y Métricas",
        q: "En conclusión integradora, ¿por qué las pruebas de usabilidad y métricas de UX son indispensables antes del lanzamiento oficial?",
        options: [
            "Porque garantizan que el producto no solo funcione técnicamente sin bugs, sino que sea verdaderamente útil, disfrutable y rentable para el negocio y el usuario.",
            "Porque eliminan por completo la necesidad de contratar ingenieros de pruebas (testers) backend.",
            "Porque evitan que la empresa pague impuestos comerciales gubernamentales.",
            "Porque reducen el tamaño del código fuente a cero líneas."
        ],
        correct: 0,
        explanation: "Un software funcional pero inusable está condenado al fracaso comercial; la usabilidad sella el puente entre código y valor humano.",
        pageRef: "UX Testing, Cap. 4, Sec. 4.6",
        summary: ["Usabilidad como garantía de éxito: Fusiona el funcionamiento técnico con el valor humano y la rentabilidad de negocio."]
    }
];
