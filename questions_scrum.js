var scrumQuestions = [
    // ==========================================
    // CAP. 1: DUEÑO DE PRODUCTO (PRODUCT OWNER)
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
        explanation: "El Dueño de Producto es la única persona responsable de gestionar la Lista de Producto, lo que incluye expresar claramente sus elementos y ordenarlos para alcanzar los objetivos."
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
        explanation: "Solo el Dueño de Producto tiene la autoridad para cancelar el Sprint, usualmente si el Objetivo del Sprint queda obsoleto debido a cambios en el mercado o la dirección[cite: 11]."
    },
    {
        id: 103,
        chapter: 1,
        question: "¿Puede el Dueño de Producto ser un comité o estar representado por múltiples personas?",
        options: [
            "Sí, se recomienda un comité de gerentes para equilibrar prioridades",
            "No, el Dueño de Producto es una única persona, no un comité[cite: 8]",
            "Sí, siempre y cuando sea aprobado formalmente por el Scrum Master",
            "No importa el número de personas, siempre que compartan el mismo correo"
        ],
        answer: 1,
        explanation: "El Dueño de Producto es una única persona, no un comité. Puede representar los deseos de un comité, pero los cambios en la prioridad deben pasar exclusivamente a través de él[cite: 8]."
    },
    {
        id: 104,
        chapter: 1,
        question: "¿Qué sucede si alguien externo a la organización o un gerente le pide al Equipo de Desarrollo que trabaje en base a requerimientos distintos?",
        options: [
            "El equipo debe obedecer si proviene de la alta gerencia",
            "El equipo debe consultar al Scrum Master para evaluar costos",
            "Nadie tiene permitido pedir al equipo que trabaje con base en requerimientos diferentes a los priorizados por el Dueño de Producto[cite: 8]",
            "Se puede aceptar si el Sprint está en su primera mitad"
        ],
        answer: 2,
        explanation: "Toda la organización debe respetar las decisiones del Dueño de Producto reflejadas en la Lista de Producto; nadie más puede dictar requerimientos al Equipo de Desarrollo[cite: 8]."
    },
    {
        id: 105,
        chapter: 1,
        question: "¿Qué porcentaje aproximado de la capacidad del equipo consume el refinamiento (refinement) de la Lista de Producto?",
        options: [
            "No más del 10% de la capacidad del Equipo de Desarrollo[cite: 16]",
            "Exactamente el 50% del tiempo del Sprint",
            "No consume capacidad, se hace fuera del horario laboral",
            "Entre un 30% y un 40%"
        ],
        answer: 0,
        explanation: "El refinamiento de la Lista de Producto es un proceso continuo que usualmente consume no más del 10% de la capacidad del Equipo de Desarrollo[cite: 16]."
    },

    // ==========================================
    // CAP. 2: EQUIPO DE DESARROLLO (DEVELOPMENT TEAM)
    // ==========================================
    {
        id: 201,
        chapter: 2,
        question: "De acuerdo con Scrum, ¿cuál es el tamaño óptimo para el Equipo de Desarrollo para asegurar la agilidad y evitar una complejidad excesiva?",
        options: [
            "De 3 a 9 miembros[cite: 9]",
            "Exactamente de 5 a 7 miembros obligatorios",
            "Menos de 3 miembros para agilizar decisiones",
            "Más de 10 miembros para abarcar más habilidades"
        ],
        answer: 0,
        explanation: "El tamaño óptimo es lo suficientemente pequeño como para permanecer ágil (menos de 9 para no requerir demasiada coordinación) y lo suficientemente grande como para completar trabajo significativo (al menos 3)[cite: 9]."
    },
    {
        id: 202,
        chapter: 2,
        question: "¿Cómo reconoce Scrum las jerarquías o títulos internos dentro del Equipo de Desarrollo (por ejemplo, probadores, analistas o líderes técnicos)?",
        options: [
            "Reconoce sub-equipos especializados por dominios de calidad",
            "No reconoce títulos ni sub-equipos; todos son simplemente Desarrolladores[cite: 9]",
            "Permite asignar un líder técnico encargado de dar órdenes",
            "Depende exclusivamente de las convenciones de la organización"
        ],
        answer: 1,
        explanation: "Scrum no reconoce títulos para los miembros de un Equipo de Desarrollo ni sub-equipos especializados (como pruebas o análisis de negocio); todos son Desarrolladores[cite: 9]."
    },
    {
        id: 203,
        chapter: 2,
        question: "¿Quién tiene la autoridad para indicar al Equipo de Desarrollo cómo convertir elementos de la Lista de Producto en Incrementos?",
        options: [
            "El Scrum Master",
            "El Dueño de Producto",
            "Nadie, los equipos son autoorganizados[cite: 9]",
            "El arquitecto de software de la empresa"
        ],
        answer: 2,
        explanation: "Los Equipos de Desarrollo son autoorganizados. Nadie (ni siquiera el Scrum Master) indica al equipo cómo realizar el trabajo para convertir elementos en Incrementos[cite: 9]."
    },
    {
        id: 204,
        chapter: 2,
        question: "¿Qué ocurre si un Equipo de Desarrollo tiene menos de tres miembros?",
        options: [
            "Mejora radicalmente la velocidad de entrega",
            "Reduce la interacción y resulta en ganancias de productividad más pequeñas, además de limitaciones de habilidades[cite: 9]",
            "Es el tamaño ideal recomendado para startups",
            "No está permitido bajo ninguna circunstancia contractual"
        ],
        answer: 1,
        explanation: "Tener menos de tres miembros reduce la interacción y puede limitar las habilidades necesarias para entregar un incremento listo para producción[cite: 9]."
    },

    // ==========================================
    // CAP. 3: SCRUM MASTER
    // ==========================================
    {
        id: 301,
        chapter: 3,
        question: "¿Cuál es la postura principal del Scrum Master con respecto al Equipo Scrum?",
        options: [
            "Es un jefe de proyecto tradicional encargado de asignar tareas y evaluar rendimiento",
            "Es un líder que está al servicio del Equipo Scrum[cite: 10]",
            "Es el responsable absoluto de que el producto final no tenga errores técnicos",
            "Es un facilitador externo que solo interviene en las reuniones de planificación"
        ],
        answer: 1,
        explanation: "El Scrum Master es un líder al servicio del Equipo Scrum, encargado de asegurar que Scrum se entienda y se adopte ajustándose a su teoría, prácticas y reglas[cite: 10]."
    },
    {
        id: 302,
        chapter: 3,
        question: "¿Cuál de las siguientes opciones describe una responsabilidad del Scrum Master hacia la Organización?",
        options: [
            "Definir el presupuesto anual de marketing del producto",
            "Liderar y guiar a la organización en la adopción de Scrum[cite: 10]",
            "Programar las características técnicas más complejas del sistema",
            "Evaluar el desempeño salarial de cada desarrollador"
        ],
        answer: 1,
        explanation: "El Scrum Master da servicio a la organización liderando y planificando las implementaciones de Scrum, ayudando a entender el desarrollo empírico[cite: 10]."
    },
    {
        id: 303,
        chapter: 3,
        question: "Durante la Retrospectiva de Sprint, ¿qué rol desempeña el Scrum Master?",
        options: [
            "Participa en la reunión como un miembro del equipo[cite: 17]",
            "Actúa como auditor externo midiendo el tiempo de cada palabra",
            "Se ausenta para permitir la libre crítica sin sesgos jerárquicos",
            "Dirige el orden del día de forma impositiva"
        ],
        answer: 0,
        explanation: "El Scrum Master participa en la Retrospectiva de Sprint como un miembro más del equipo, ya que la responsabilidad del proceso Scrum recae sobre él[cite: 17]."
    },

    // ==========================================
    // CAP. 4: EVENTOS Y ARTEFACTOS
    // ==========================================
    {
        id: 401,
        chapter: 4,
        question: "Durante el Scrum Diario (Daily Scrum), ¿quiénes son las únicas personas que tienen permitido participar de forma directa?",
        options: [
            "Todo el Equipo Scrum incluyendo al Dueño de Producto",
            "Los miembros del Equipo de Desarrollo[cite: 14]",
            "El Scrum Master y los interesados clave",
            "Cualquier empleado de la organización invitado por la gerencia"
        ],
        answer: 1,
        explanation: "El Scrum Master se asegura de que se cumpla la regla de que solo los miembros del Equipo de Desarrollo participan en el Scrum Diario[cite: 14]."
    },
    {
        id: 402,
        chapter: 4,
        question: "¿Cuál es el límite de tiempo (time-box) establecido para el Scrum Diario?",
        options: [
            "Exactamente 30 minutos",
            "Un máximo de 15 minutos[cite: 14]",
            "Lo que el equipo requiera para destrabar impedimentos",
            "45 minutos por cada semana de Sprint"
        ],
        answer: 1,
        explanation: "El Scrum Diario es un evento con un bloque de tiempo de 15 minutos para que el Equipo de Desarrollo sincronice sus actividades[cite: 14]."
    },
    {
        id: 403,
        chapter: 4,
        question: "¿Qué define el estado de un Incremento cuando se describe como 'Terminado' (Done)?",
        options: [
            "Que cumple con la Definición de 'Terminado' del Equipo Scrum y está en condiciones de ser utilizado[cite: 18]",
            "Que fue aprobado por la gerencia general de la empresa",
            "Que superó las pruebas unitarias locales del desarrollador principal",
            "Que se encuentra alojado en un servidor de pruebas temporal"
        ],
        answer: 0,
        explanation: "Cuando un incremento se describe como 'Terminado', significa que está en condiciones de ser utilizado y cumple con la Definición de 'Terminado' acordada[cite: 18]."
    },
    {
        id: 404,
        chapter: 4,
        question: "¿Cuál es el propósito principal de la Revisión del Sprint (Sprint Review)?",
        options: [
            "Evaluar el desempeño individual de los desarrolladores del equipo",
            "Inspeccionar el Incremento con los interesados y adaptar la Lista de Producto si fuese necesario[cite: 15]",
            "Firmar contratos de pago con los clientes finales",
            "Planificar las tareas técnicas detalladas de las primeras 24 horas"
        ],
        answer: 1,
        explanation: "La Revisión de Sprint se lleva a cabo al final del Sprint para inspeccionar el incremento y colaborar con los interesados sobre qué hacer a continuación para optimizar el valor[cite: 15]."
    }
];
