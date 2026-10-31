var scrumQuestions = [
    // ==========================================
    // ROL: DUEÑO DE PRODUCTO (PRODUCT OWNER)
    // ==========================================
    {
        id: 101,
        chapter: 1,
        question: "Según el marco de trabajo Scrum, ¿quién es el único responsable de gestionar la Lista de Producto (Product Backlog)?",
        options: [
            "El Scrum Master",
            "El Dueño de Producto (Product Owner)",
            "El Equipo de Desarrollo en conjunto con los interesados",
            "Un comité de gestión de proyectos"
        ],
        answer: 1,
        explanation: "El Dueño de Producto es la única persona responsable de gestionar la Lista de Producto, lo que incluye expresar claramente sus elementos y ordenarlos para alcanzar los objetivos[cite: 13]."
    },
    {
        id: 102,
        chapter: 1,
        question: "¿Qué rol tiene la autoridad exclusiva para cancelar un Sprint antes de que llegue a su fin?",
        options: [
            "El equipo de desarrollo si la carga de trabajo es excesiva",
            "El Scrum Master por motivos de incumplimiento de reglas",
            "El Dueño de Producto, aunque puede hacerlo bajo la influencia de los interesados, el equipo o el Scrum Master",
            "La organización o alta gerencia de forma directa"
        ],
        answer: 2,
        explanation: "Solo el Dueño de Producto tiene la autoridad para cancelar el Sprint, usualmente si el Objetivo del Sprint queda obsoleto debido a cambios en el mercado o la dirección[cite: 17]."
    },

    // ==========================================
    // ROL: EQUIPO DE DESARROLLO (DEVELOPMENT TEAM)
    // ==========================================
    {
        id: 201,
        chapter: 2,
        question: "De acuerdo con Scrum, ¿cuál es el tamaño óptimo para el Equipo de Desarrollo para asegurar la agilidad y evitar una complejidad excesiva?",
        options: [
            "De 3 a 9 miembros",
            "Exactamente de 5 a 7 miembros obligatorios",
            "Menos de 3 miembros para agilizar decisiones",
            "Más de 10 miembros para abarcar más habilidades"
        ],
        answer: 0,
        explanation: "El tamaño óptimo es lo suficientemente pequeño como para permanecer ágil (más de 3 reduce interacciones) y lo suficientemente grande como para completar trabajo significativo (menos de 9 para no requerir demasiada coordinación)[cite: 14]."
    },
    {
        id: 202,
        chapter: 2,
        question: "¿Cómo reconoce Scrum las jerarquías o títulos internos dentro del Equipo de Desarrollo (por ejemplo, probadores, analistas o líderes técnicos)?",
        options: [
            "Reconoce sub-equipos especializados por dominios de calidad",
            "No reconoce títulos ni sub-equipos; todos son simplemente Desarrolladores",
            "Permite asignar un líder técnico encargado de dar órdenes",
            "Depende exclusivamente de las convenciones de la organización"
        ],
        answer: 1,
        explanation: "Scrum no reconoce títulos para los miembros de un Equipo de Desarrollo ni sub-equipos especializados (como pruebas o análisis de negocio); todos son Desarrolladores sin excepciones[cite: 14]."
    },

    // ==========================================
    // ROL: SCRUM MASTER
    // ==========================================
    {
        id: 301,
        chapter: 3,
        question: "¿Cuál es la postura principal del Scrum Master con respecto al Equipo Scrum?",
        options: [
            "Es un jefe de proyecto tradicional encargado de asignar tareas y evaluar rendimiento",
            "Es un líder que está al servicio del Equipo Scrum",
            "Es el responsable absoluto de que el producto final no tenga errores técnicos",
            "Es un facilitador externo que solo interviene en las reuniones de planificación"
        ],
        answer: 1,
        explanation: "El Scrum Master es un líder al servicio del Equipo Scrum, encargado de asegurar que Scrum se entienda y se adopte ajustándose a su teoría, prácticas y reglas[cite: 15]."
    },

    // ==========================================
    // EVENTOS Y ARTEFACTOS GENERALES
    // ==========================================
    {
        id: 401,
        chapter: 4,
        question: "Durante el Scrum Diario (Daily Scrum), ¿quiénes son las únicas personas que tienen permitido participar de forma directa?",
        options: [
            "Todo el Equipo Scrum incluyendo al Dueño de Producto",
            "Los miembros del Equipo de Desarrollo",
            "El Scrum Master y los interesados clave",
            "Cualquier empleado de la organización invitado por la gerencia"
        ],
        answer: 1,
        explanation: "El Scrum Master se asegura de que se cumpla la regla de que solo los miembros del Equipo de Desarrollo participan en el Scrum Diario para sincronizar actividades[cite: 19]."
    }
];