var scrumQuestions = [
    // =========================================================================
    // CAP. 1: DUEÑO DE PRODUCTO (PRODUCT OWNER)
    // =========================================================================
    {
        id: 101,
        chapter: 1,
        question: "Según el marco de trabajo Scrum, ¿quién es el único responsable de gestionar la Lista de Producto (Product Backlog)?",
        pregunta: "Según el marco de trabajo Scrum, ¿quién es el único responsable de gestionar la Lista de Producto (Product Backlog)?",
        options: ["El Scrum Master", "El Dueño de Producto (Product Owner)", "El Equipo de Desarrollo en conjunto con los interesados", "Un comité de gestión de proyectos"],
        opciones: ["El Scrum Master", "El Dueño de Producto (Product Owner)", "El Equipo de Desarrollo en conjunto con los interesados", "Un comité de gestión de proyectos"],
        answer: 1,
        correcta: 1,
        explanation: "El Dueño de Producto es la única persona responsable de gestionar la Lista de Producto, lo que incluye expresar claramente sus elementos y ordenarlos[cite: 8].",
        explicacion: "El Dueño de Producto es la única persona responsable de gestionar la Lista de Producto, lo que incluye expresar claramente sus elementos y ordenarlos[cite: 8]."
    },
    {
        id: 102,
        chapter: 1,
        question: "¿Qué rol tiene la autoridad exclusiva para cancelar un Sprint antes de que llegue a su fin?",
        pregunta: "¿Qué rol tiene la autoridad exclusiva para cancelar un Sprint antes de que llegue a su fin?",
        options: ["El equipo de desarrollo si la carga de trabajo es excesiva", "El Scrum Master por motivos de incumplimiento de reglas", "El Dueño de Producto, aunque puede bajo la influencia de los interesados, el equipo o el Scrum Master", "La organización o alta gerencia de forma directa"],
        opciones: ["El equipo de desarrollo si la carga de trabajo es excesiva", "El Scrum Master por motivos de incumplimiento de reglas", "El Dueño de Producto, aunque puede bajo la influencia de los interesados, el equipo o el Scrum Master", "La organización o alta gerencia de forma directa"],
        answer: 2,
        correcta: 2,
        explanation: "Solo el Dueño de Producto tiene la autoridad para cancelar el Sprint, usualmente si el Objetivo del Sprint queda obsoleto[cite: 11].",
        explicacion: "Solo el Dueño de Producto tiene la autoridad para cancelar el Sprint, usualmente si el Objetivo del Sprint queda obsoleto[cite: 11]."
    },
    {
        id: 103,
        chapter: 1,
        question: "¿Puede el Dueño de Producto ser un comité o estar representado por múltiples personas?",
        pregunta: "¿Puede el Dueño de Producto ser un comité o estar representado por múltiples personas?",
        options: ["Sí, se recomienda un comité de gerentes para equilibrar prioridades", "No, el Dueño de Producto es una única persona, no un comité", "Sí, siempre y cuando sea aprobado formalmente por el Scrum Master", "No importa el número de personas, siempre que compartan el mismo correo"],
        opciones: ["Sí, se recomienda un comité de gerentes para equilibrar prioridades", "No, el Dueño de Producto es una única persona, no un comité", "Sí, siempre y cuando sea aprobado formalmente por el Scrum Master", "No importa el número de personas, siempre que compartan el mismo correo"],
        answer: 1,
        correcta: 1,
        explanation: "El Dueño de Producto es una única persona, no un comité. Los cambios en la prioridad deben pasar exclusivamente a través de él[cite: 8].",
        explicacion: "El Dueño de Producto es una única persona, no un comité. Los cambios en la prioridad deben pasar exclusivamente a través de él[cite: 8]."
    },
    {
        id: 104,
        chapter: 1,
        question: "¿Qué sucede si alguien externo a la organización o un gerente le pide al Equipo de Desarrollo que trabaje en base a requerimientos distintos?",
        pregunta: "¿Qué sucede si alguien externo a la organización o un gerente le pide al Equipo de Desarrollo que trabaje en base a requerimientos distintos?",
        options: ["El equipo debe obedecer si proviene de la alta gerencia", "El equipo debe consultar al Scrum Master para evaluar costos", "Nadie tiene permitido pedir al equipo que trabaje con base en requerimientos diferentes a los priorizados por el Dueño de Producto", "Se puede aceptar si el Sprint está en su primera mitad"],
        opciones: ["El equipo debe obedecer si proviene de la alta gerencia", "El equipo debe consultar al Scrum Master para evaluar costos", "Nadie tiene permitido pedir al equipo que trabaje con base en requerimientos diferentes a los priorizados por el Dueño de Producto", "Se puede aceptar si el Sprint está en su primera mitad"],
        answer: 2,
        correcta: 2,
        explanation: "Toda la organización debe respetar las decisiones del Dueño de Producto; nadie más puede dictar requerimientos al Equipo de Desarrollo[cite: 8].",
        explicacion: "Toda la organización debe respetar las decisiones del Dueño de Producto; nadie más puede dictar requerimientos al Equipo de Desarrollo[cite: 8]."
    },
    {
        id: 105,
        chapter: 1,
        question: "¿Qué porcentaje aproximado de la capacidad del equipo consume el refinamiento (refinement) de la Lista de Producto?",
        pregunta: "¿Qué porcentaje aproximado de la capacidad del equipo consume el refinamiento (refinement) de la Lista de Producto?",
        options: ["No más del 10% de la capacidad del Equipo de Desarrollo", "Exactamente el 50% del tiempo del Sprint", "No consume capacidad, se hace fuera del horario laboral", "Entre un 30% y un 40%"],
        opciones: ["No más del 10% de la capacidad del Equipo de Desarrollo", "Exactamente el 50% del tiempo del Sprint", "No consume capacidad, se hace fuera del horario laboral", "Entre un 30% y un 40%"],
        answer: 0,
        correcta: 0,
        explanation: "El refinamiento de la Lista de Producto es un proceso continuo que usualmente consume no más del 10% de la capacidad del Equipo de Desarrollo[cite: 16].",
        explicacion: "El refinamiento de la Lista de Producto es un proceso continuo que usualmente consume no más del 10% de la capacidad del Equipo de Desarrollo[cite: 16]."
    },
    {
        id: 106,
        chapter: 1,
        question: "¿Cómo deben estar ordenados los elementos de la Lista de Producto que se abordarán en el próximo Sprint?",
        pregunta: "¿Cómo deben estar ordenados los elementos de la Lista de Producto que se abordarán en el próximo Sprint?",
        options: ["De forma aleatoria para fomentar la creatividad", "Con mayor granularidad y claridad (preparados o accionables)", "Por orden alfabético de sus títulos técnicos", "Únicamente según el costo monetario estimado"],
        opciones: ["De forma aleatoria para fomentar la creatividad", "Con mayor granularidad y claridad (preparados o accionables)", "Por orden alfabético de sus títulos técnicos", "Únicamente según el costo monetario estimado"],
        answer: 1,
        correcta: 1,
        explanation: "Los elementos de la Lista de Producto de los que se ocupará el equipo en el siguiente Sprint tienen mayor granularidad y son considerados 'preparados' o 'accionables'[cite: 16].",
        explicacion: "Los elementos de la Lista de Producto de los que se ocupará el equipo en el siguiente Sprint tienen mayor granularidad y son considerados 'preparados' o 'accionables'[cite: 16]."
    },
    {
        id: 107,
        chapter: 1,
        question: "¿Quién es el responsable último de hacer el seguimiento del trabajo restante total para alcanzar el objetivo del producto?",
        pregunta: "¿Quién es el responsable último de hacer el seguimiento del trabajo restante total para alcanzar el objetivo del producto?",
        options: ["El Scrum Master", "Los auditores externos de calidad", "El Dueño de Producto", "El jefe de operaciones"],
        opciones: ["El Scrum Master", "Los auditores externos de calidad", "El Dueño de Producto", "El jefe de operaciones"],
        answer: 2,
        correcta: 2,
        explanation: "El Dueño de Producto hace seguimiento de este trabajo restante total al menos en cada Revisión de Sprint para evaluar el progreso[cite: 16].",
        explicacion: "El Dueño de Producto hace seguimiento de este trabajo restante total al menos en cada Revisión de Sprint para evaluar el progreso[cite: 16]."
    },
    {
        id: 108,
        chapter: 1,
        question: "Si el Dueño de Producto desea delegar parte de la elaboración o redacción de los elementos de la Lista de Producto:",
        pregunta: "Si el Dueño de Producto desea delegar parte de la elaboración o redacción de los elementos de la Lista de Producto:",
        options: ["Está prohibido por la Guía de Scrum", "Puede delegarlo en el Equipo de Desarrollo, pero sigue siendo el responsable final", "Debe transferir la titularidad legal del rol al Scrum Master", "Requiere una votación unánime de los interesados"],
        opciones: ["Está prohibido por la Guía de Scrum", "Puede delegarlo en el Equipo de Desarrollo, pero sigue siendo el responsable final", "Debe transferir la titularidad legal del rol al Scrum Master", "Requiere una votación unánime de los interesados"],
        answer: 1,
        correcta: 1,
        explanation: "El Dueño de Producto podría hacer el trabajo o delegarlo en el Equipo de Desarrollo, pero en ambos casos sigue siendo el responsable de dicho trabajo[cite: 8].",
        explicacion: "El Dueño de Producto podría hacer el trabajo o delegarlo en el Equipo de Desarrollo, pero en ambos casos sigue siendo el responsable de dicho trabajo[cite: 8]."
    },
    {
        id: 109,
        chapter: 1,
        question: "¿Qué atributos caracterizan comúnmente a los elementos de la Lista de Producto?",
        pregunta: "¿Qué atributos caracterizan comúnmente a los elementos de la Lista de Producto?",
        options: ["Descripción, ordenación, estimación y valor", "Fecha de inicio, código de empleado y centro de costos", "Sprint de diseño, pruebas unitarias y acta constitutiva", "Estado de aprobación gerencial y diagrama de Gantt"],
        opciones: ["Descripción, ordenación, estimación y valor", "Fecha de inicio, código de empleado y centro de costos", "Sprint de diseño, pruebas unitarias y acta constitutiva", "Estado de aprobación gerencial y diagrama de Gantt"],
        answer: 0,
        correcta: 0,
        explanation: "La Lista de Producto enumera características y mejoras cuyos elementos tienen como atributos la descripción, la ordenación, la estimación y el valor[cite: 15].",
        explicacion: "La Lista de Producto enumera características y mejoras cuyos elementos tienen como atributos la descripción, la ordenación, la estimación y el valor[cite: 15]."
    },
    {
        id: 110,
        chapter: 1,
        question: "Cuando un producto es utilizado y el mercado evoluciona, ¿quién actualiza la Lista de Producto?",
        pregunta: "Cuando un producto es utilizado y el mercado evoluciona, ¿quién actualiza la Lista de Producto?",
        options: ["Se congela mediante un contrato estricto de alcance", "Se convierte en un artefacto dinámico y vivo que evoluciona constantemente", "Se archiva al finalizar el primer incremento", "Es reemplazada por diagramas de flujo tradicionales"],
        opciones: ["Se congela mediante un contrato estricto de alcance", "Se convierte en un artefacto dinámico y vivo que evoluciona constantemente", "Se archiva al finalizar el primer incremento", "Es reemplazada por diagramas de flujo tradicionales"],
        answer: 1,
        correcta: 1,
        explanation: "La Lista de Producto nunca está completa; evoluciona a medida que el producto y el entorno lo hacen, cambiando constantemente[cite: 15].",
        explicacion: "La Lista de Producto nunca está completa; evoluciona a medida que el producto y el entorno lo hacen, cambiando constantemente[cite: 15]."
    },

    // =========================================================================
    // CAP. 2: EQUIPO DE DESARROLLO (DEVELOPMENT TEAM)
    // =========================================================================
    {
        id: 201,
        chapter: 2,
        question: "De acuerdo con Scrum, ¿cuál es el tamaño óptimo para el Equipo de Desarrollo para asegurar la agilidad?",
        pregunta: "De acuerdo con Scrum, ¿cuál es el tamaño óptimo para el Equipo de Desarrollo para asegurar la agilidad?",
        options: ["De 3 a 9 miembros", "Exactamente de 5 a 7 miembros obligatorios", "Menos de 3 miembros para agilizar decisiones", "Más de 10 miembros para abarcar más habilidades"],
        opciones: ["De 3 a 9 miembros", "Exactamente de 5 a 7 miembros obligatorios", "Menos de 3 miembros para agilizar decisiones", "Más de 10 miembros para abarcar más habilidades"],
        answer: 0,
        correcta: 0,
        explanation: "El tamaño óptimo es lo suficientemente pequeño como para permanecer ágil y lo suficientemente grande como para completar trabajo significativo (3 a 9 miembros)[cite: 9].",
        explicacion: "El tamaño óptimo es lo suficientemente pequeño como para permanecer ágil y lo suficientemente grande como para completar trabajo significativo (3 a 9 miembros)[cite: 9]."
    },
    {
        id: 202,
        chapter: 2,
        question: "¿Cómo reconoce Scrum las jerarquías o títulos internos dentro del Equipo de Desarrollo (ej. probadores, analistas)?",
        pregunta: "¿Cómo reconoce Scrum las jerarquías o títulos internos dentro del Equipo de Desarrollo (ej. probadores, analistas)?",
        options: ["Reconoce sub-equipos especializados por dominios de calidad", "No reconoce títulos ni sub-equipos; todos son simplemente Desarrolladores", "Permite asignar un líder técnico encargado de dar órdenes", "Depende exclusivamente de las convenciones de la organización"],
        opciones: ["Reconoce sub-equipos especializados por dominios de calidad", "No reconoce títulos ni sub-equipos; todos son simplemente Desarrolladores", "Permite asignar un líder técnico encargado de dar órdenes", "Depende exclusivamente de las convenciones de la organización"],
        answer: 1,
        correcta: 1,
        explanation: "Scrum no reconoce títulos para los miembros de un Equipo de Desarrollo ni sub-equipos; todos son Desarrolladores sin excepciones[cite: 9].",
        explicacion: "Scrum no reconoce títulos para los miembros de un Equipo de Desarrollo ni sub-equipos; todos son Desarrolladores sin excepciones[cite: 9]."
    },
    {
        id: 203,
        chapter: 2,
        question: "¿Quién tiene la autoridad para indicar al Equipo de Desarrollo cómo convertir elementos de la Lista de Producto en Incrementos?",
        pregunta: "¿Quién tiene la autoridad para indicar al Equipo de Desarrollo cómo convertir elementos de la Lista de Producto en Incrementos?",
        options: ["El Scrum Master", "El Dueño de Producto", "Nadie, los equipos son autoorganizados", "El arquitecto de software de la empresa"],
        opciones: ["El Scrum Master", "El Dueño de Producto", "Nadie, los equipos son autoorganizados", "El arquitecto de software de la empresa"],
        answer: 2,
        correcta: 2,
        explanation: "Los Equipos de Desarrollo son autoorganizados. Nadie (ni siquiera el Scrum Master) indica al equipo cómo realizar el trabajo técnico[cite: 9].",
        explicacion: "Los Equipos de Desarrollo son autoorganizados. Nadie (ni siquiera el Scrum Master) indica al equipo cómo realizar el trabajo técnico[cite: 9]."
    },
    {
        id: 204,
        chapter: 2,
        question: "¿Qué ocurre si un Equipo de Desarrollo tiene menos de tres miembros?",
        pregunta: "¿Qué ocurre si un Equipo de Desarrollo tiene menos de tres miembros?",
        options: ["Mejora radicalmente la velocidad de entrega", "Reduce la interacción y resulta en ganancias de productividad más pequeñas, además de limitaciones de habilidades", "Es el tamaño ideal recomendado para startups", "No está permitido bajo ninguna circunstancia contractual"],
        opciones: ["Mejora radicalmente la velocidad de entrega", "Reduce la interacción y resulta en ganancias de productividad más pequeñas, además de limitaciones de habilidades", "Es el tamaño ideal recomendado para startups", "No está permitido bajo ninguna circunstancia contractual"],
        answer: 1,
        correcta: 1,
        explanation: "Tener menos de tres miembros reduce la interacción y puede limitar las habilidades necesarias para entregar un incremento listo para producción[cite: 9].",
        explicacion: "Tener menos de tres miembros reduce la interacción y puede limitar las habilidades necesarias para entregar un incremento listo para producción[cite: 9]."
    },
    {
        id: 205,
        chapter: 2,
        question: "¿Quiénes participan exclusivamente en la creación del Incremento de producto dentro de un Sprint?",
        pregunta: "¿Quiénes participan exclusivamente en la creación del Incremento de producto dentro de un Sprint?",
        options: ["Los miembros del Equipo de Desarrollo", "Los auditores de calidad y el Dueño de Producto", "El Scrum Master junto con la gerencia", "Los analistas de negocio externos"],
        opciones: ["Los miembros del Equipo de Desarrollo", "Los auditores de calidad y el Dueño de Producto", "El Scrum Master junto con la gerencia", "Los analistas de negocio externos"],
        answer: 0,
        correcta: 0,
        explanation: "Solo los miembros del Equipo de Desarrollo participan en la creación del Incremento de producto en cada Sprint[cite: 9].",
        explicacion: "Solo los miembros del Equipo de Desarrollo participan en la creación del Incremento de producto en cada Sprint[cite: 9]."
    },
    {
        id: 206,
        chapter: 2,
        question: "¿Cuál es la característica principal de un equipo multifuncional en Scrum?",
        pregunta: "¿Cuál es la característica principal de un equipo multifuncional en Scrum?",
        options: ["Tiene todas las competencias necesarias para llevar a cabo el trabajo sin depender de personas ajenas al equipo", "Cada miembro domina una sola tecnología de forma aislada", "Rotan de rol gerencial cada semana obligatoriamente", "Trabajan bajo la supervisión directa de un director de proyectos"],
        opciones: ["Tiene todas las competencias necesarias para llevar a cabo el trabajo sin depender de personas ajenas al equipo", "Cada miembro domina una sola tecnología de forma aislada", "Rotan de rol gerencial cada semana obligatoriamente", "Trabajan bajo la supervisión directa de un director de proyectos"],
        answer: 0,
        correcta: 0,
        explanation: "Los equipos multifuncionales tienen todas las competencias necesarias para llevar a cabo el trabajo sin depender de otras personas ajenas al equipo[cite: 8].",
        explicacion: "Los equipos multifuncionales tienen todas las competencias necesarias para llevar a cabo el trabajo sin depender de otras personas ajenas al equipo[cite: 8]."
    },
    {
        id: 207,
        chapter: 2,
        question: "¿Qué sucede si el Equipo de Desarrollo cuenta con más de nueve integrantes?",
        pregunta: "¿Qué sucede si el Equipo de Desarrollo cuenta con más de nueve integrantes?",
        options: ["Requiere demasiada coordinación y genera una complejidad difícil de gestionar empíricamente", "Es altamente recomendable para corporativos globales", "Permite eliminar por completo la figura del Scrum Master", "Garantiza entregas libres de errores técnicos"],
        opciones: ["Requiere demasiada coordinación y genera una complejidad difícil de gestionar empíricamente", "Es altamente recomendable para corporativos globales", "Permite eliminar por completo la figura del Scrum Master", "Garantiza entregas libres de errores técnicos"],
        answer: 0,
        correcta: 0,
        explanation: "Tener más de nueve miembros en el equipo requiere demasiada coordinación y genera complejidad inmanejable mediante el proceso empírico[cite: 9].",
        explicacion: "Tener más de nueve miembros en el equipo requiere demasiada coordinación y genera complejidad inmanejable mediante el proceso empírico[cite: 9]."
    },
    {
        id: 208,
        chapter: 2,
        question: "Los roles de Dueño de Producto y Scrum Master, ¿cuentan para calcular el tamaño óptimo del Equipo de Desarrollo?",
        pregunta: "Los roles de Dueño de Producto y Scrum Master, ¿cuentan para calcular el tamaño óptimo del Equipo de Desarrollo?",
        options: ["Sí, siempre se deben sumar obligatoriamente", "No cuentan a menos que también estén contribuyendo a trabajar en la Lista de Pendientes del Sprint", "Cuentan únicamente si son contratados externos", "Depende de la votación interna del equipo"],
        opciones: ["Sí, siempre se deben sumar obligatoriamente", "No cuentan a menos que también estén contribuyendo a trabajar en la Lista de Pendientes del Sprint", "Cuentan únicamente si son contratados externos", "Depende de la votación interna del equipo"],
        answer: 1,
        correcta: 1,
        explanation: "Los roles de Dueño de Producto y Scrum Master no cuentan en el cálculo del tamaño del equipo a menos que también estén contribuyendo a trabajar en el Sprint Backlog[cite: 9].",
        explicacion: "Los roles de Dueño de Producto y Scrum Master no cuentan en el cálculo del tamaño del equipo a menos que también estén contribuyendo a trabajar en el Sprint Backlog[cite: 9]."
    },

    // =========================================================================
    // CAP. 3: SCRUM MASTER
    // =========================================================================
    {
        id: 301,
        chapter: 3,
        question: "¿Cuál es la postura principal del Scrum Master con respecto al Equipo Scrum?",
        pregunta: "¿Cuál es la postura principal del Scrum Master con respecto al Equipo Scrum?",
        options: ["Es un jefe de proyecto tradicional encargado de asignar tareas y evaluar rendimiento", "Es un líder que está al servicio del Equipo Scrum", "Es el responsable absoluto de que el producto final no tenga errores técnicos", "Es un facilitador externo que solo interviene en las reuniones de planificación"],
        opciones: ["Es un jefe de proyecto tradicional encargado de asignar tareas y evaluar rendimiento", "Es un líder que está al servicio del Equipo Scrum", "Es el responsable absoluto de que el producto final no tenga errores técnicos", "Es un facilitador externo que solo interviene en las reuniones de planificación"],
        answer: 1,
        correcta: 1,
        explanation: "El Scrum Master es un líder al servicio del Equipo Scrum, asegurando que se entienda y se adopte la teoría, prácticas y reglas de Scrum[cite: 10].",
        explicacion: "El Scrum Master es un líder al servicio del Equipo Scrum, asegurando que se entienda y se adopte la teoría, prácticas y reglas de Scrum[cite: 10]."
    },
    {
        id: 302,
        chapter: 3,
        question: "¿Cuál de las siguientes opciones describe una responsabilidad del Scrum Master hacia la Organización?",
        pregunta: "¿Cuál de las siguientes opciones describe una responsabilidad del Scrum Master hacia la Organización?",
        options: ["Definir el presupuesto anual de marketing del producto", "Liderar y guiar a la organización en la adopción de Scrum", "Programar las características técnicas más complejas del sistema", "Evaluar el desempeño salarial de cada desarrollador"],
        opciones: ["Definir el presupuesto anual de marketing del producto", "Liderar y guiar a la organización en la adopción de Scrum", "Programar las características técnicas más complejas del sistema", "Evaluar el desempeño salarial de cada desarrollador"],
        answer: 1,
        correcta: 1,
        explanation: "El Scrum Master da servicio a la organización liderando y planificando las implementaciones de Scrum y ayudando a entender el desarrollo empírico[cite: 10].",
        explicacion: "El Scrum Master da servicio a la organización liderando y planificando las implementaciones de Scrum y ayudando a entender el desarrollo empírico[cite: 10]."
    },
    {
        id: 303,
        chapter: 3,
        question: "Durante la Retrospectiva de Sprint, ¿qué rol desempeña el Scrum Master?",
        pregunta: "Durante la Retrospectiva de Sprint, ¿qué rol desempeña el Scrum Master?",
        options: ["Participa en la reunión como un miembro del equipo", "Actúa como auditor externo midiendo el tiempo de cada palabra", "Se ausenta para permitir la libre crítica sin sesgos jerárquicos", "Dirige el orden del día de forma impositiva"],
        opciones: ["Participa en la reunión como un miembro del equipo", "Actúa como auditor externo midiendo el tiempo de cada palabra", "Se ausenta para permitir la libre crítica sin sesgos jerárquicos", "Dirige el orden del día de forma impositiva"],
        answer: 0,
        correcta: 0,
        explanation: "El Scrum Master participa en la Retrospectiva de Sprint como un miembro más del equipo, ya que la responsabilidad del proceso recae sobre él[cite: 17].",
        explicacion: "El Scrum Master participa en la Retrospectiva de Sprint como un miembro más del equipo, ya que la responsabilidad del proceso recae sobre él[cite: 17]."
    },
    {
        id: 304,
        chapter: 3,
        question: "¿De qué manera asiste el Scrum Master al Dueño de Producto?",
        pregunta: "¿De qué manera asiste el Scrum Master al Dueño de Producto?",
        options: ["Escribiendo y firmando los contratos comerciales con clientes", "Encontrando técnicas para gestionar la Lista de Producto de manera efectiva", "Asignando calificaciones de desempeño a los desarrolladores", "Definiendo de forma arbitraria la arquitectura de software"],
        opciones: ["Escribiendo y firmando los contratos comerciales con clientes", "Encontrando técnicas para gestionar la Lista de Producto de manera efectiva", "Asignando calificaciones de desempeño a los desarrolladores", "Definiendo de forma arbitraria la arquitectura de software"],
        answer: 1,
        correcta: 1,
        explanation: "El Scrum Master da servicio al Dueño de Producto ayudándole a encontrar técnicas para gestionar la Lista de Producto de manera efectiva[cite: 10].",
        explicacion: "El Scrum Master da servicio al Dueño de Producto ayudándole a encontrar técnicas para gestionar la Lista de Producto de manera efectiva[cite: 10]."
    },
    {
        id: 305,
        chapter: 3,
        question: "¿Cómo ayuda el Scrum Master al Equipo de Desarrollo en su entorno operativo?",
        pregunta: "¿Cómo ayuda el Scrum Master al Equipo de Desarrollo en su entorno operativo?",
        options: ["Eliminando impedimentos para el progreso del equipo de desarrollo", "Diseñando los diagramas de base de datos de cada historia", "Imponiendo herramientas comerciales de cobro de licencias", "Negociando los salarios individuales del personal técnico"],
        opciones: ["Eliminando impedimentos para el progreso del equipo de desarrollo", "Diseñando los diagramas de base de datos de cada historia", "Imponiendo herramientas comerciales de cobro de licencias", "Negociando los salarios individuales del personal técnico"],
        answer: 0,
        correcta: 0,
        explanation: "Una de las funciones principales del Scrum Master hacia el equipo es eliminar impedimentos para su progreso constante[cite: 10].",
        explicacion: "Una de las funciones principales del Scrum Master hacia el equipo es eliminar impedimentos para su progreso constante[cite: 10]."
    },

    // =========================================================================
    // CAP. 4: EVENTOS Y ARTEFACTOS
    // =========================================================================
    {
        id: 401,
        chapter: 4,
        question: "Durante el Scrum Diario (Daily Scrum), ¿quiénes son las únicas personas que tienen permitido participar de forma directa?",
        pregunta: "Durante el Scrum Diario (Daily Scrum), ¿quiénes son las únicas personas que tienen permitido participar de forma directa?",
        options: ["Todo el Equipo Scrum incluyendo al Dueño de Producto", "Los miembros del Equipo de Desarrollo", "El Scrum Master y los interesados clave", "Cualquier empleado de la organización invitado por la gerencia"],
        opciones: ["Todo el Equipo Scrum incluyendo al Dueño de Producto", "Los miembros del Equipo de Desarrollo", "El Scrum Master y los interesados clave", "Cualquier empleado de la organización invitado por la gerencia"],
        answer: 1,
        correcta: 1,
        explanation: "El Scrum Master se asegura de que se cumpla la regla de que solo los miembros del Equipo de Desarrollo participan en el Scrum Diario[cite: 14].",
        explicacion: "El Scrum Master se asegura de que se cumpla la regla de que solo los miembros del Equipo de Desarrollo participan en el Scrum Diario[cite: 14]."
    },
    {
        id: 402,
        chapter: 4,
        question: "¿Cuál es el límite de tiempo (time-box) establecido para el Scrum Diario?",
        pregunta: "¿Cuál es el límite de tiempo (time-box) establecido para el Scrum Diario?",
        options: ["Exactamente 30 minutos", "Un máximo de 15 minutos", "Lo que el equipo requiera para destrabar impedimentos", "45 minutos por cada semana de Sprint"],
        opciones: ["Exactamente 30 minutos", "Un máximo de 15 minutos", "Lo que el equipo requiera para destrabar impedimentos", "45 minutos por cada semana de Sprint"],
        answer: 1,
        correcta: 1,
        explanation: "El Scrum Diario es un evento con un bloque de tiempo de 15 minutos para que el Equipo de Desarrollo sincronice sus actividades[cite: 14].",
        explicacion: "El Scrum Diario es un evento con un bloque de tiempo de 15 minutos para que el Equipo de Desarrollo sincronice sus actividades[cite: 14]."
    },
    {
        id: 403,
        chapter: 4,
        question: "¿Qué define el estado de un Incremento cuando se describe como 'Terminado' (Done)?",
        pregunta: "¿Qué define el estado de un Incremento cuando se describe como 'Terminado' (Done)?",
        options: ["Que cumple con la Definición de 'Terminado' del Equipo Scrum y está en condiciones de ser utilizado", "Que fue aprobado por la gerencia general de la empresa", "Que superó las pruebas unitarias locales del desarrollador principal", "Que se encuentra alojado en un servidor de pruebas temporal"],
        opciones: ["Que cumple con la Definición de 'Terminado' del Equipo Scrum y está en condiciones de ser utilizado", "Que fue aprobado por la gerencia general de la empresa", "Que superó las pruebas unitarias locales del desarrollador principal", "Que se encuentra alojado en un servidor de pruebas temporal"],
        answer: 0,
        correcta: 0,
        explanation: "Cuando un incremento se describe como 'Terminado', significa que está en condiciones de ser utilizado y cumple con la Definición de 'Terminado'[cite: 18].",
        explicacion: "Cuando un incremento se describe como 'Terminado', significa que está en condiciones de ser utilizado y cumple con la Definición de 'Terminado'[cite: 18]."
    },
    {
        id: 404,
        chapter: 4,
        question: "¿Cuál es el propósito principal de la Revisión del Sprint (Sprint Review)?",
        pregunta: "¿Cuál es el propósito principal de la Revisión del Sprint (Sprint Review)?",
        options: ["Evaluar el desempeño individual de los desarrolladores del equipo", "Inspeccionar el Incremento con los interesados y adaptar la Lista de Producto si fuese necesario", "Firmar contratos de pago con los clientes finales", "Planificar las tareas técnicas detalladas de las primeras 24 horas"],
        opciones: ["Evaluar el desempeño individual de los desarrolladores del equipo", "Inspeccionar el Incremento con los interesados y adaptar la Lista de Producto si fuese necesario", "Firmar contratos de pago con los clientes finales", "Planificar las tareas técnicas detalladas de las primeras 24 horas"],
        answer: 1,
        correcta: 1,
        explanation: "La Revisión de Sprint se lleva a cabo para inspeccionar el incremento y colaborar con los interesados sobre qué hacer a continuación[cite: 15].",
        explicacion: "La Revisión de Sprint se lleva a cabo para inspeccionar el incremento y colaborar con los interesados sobre qué hacer a continuación[cite: 15]."
    },
    {
        id: 405,
        chapter: 4,
        question: "¿Cuál es la duración máxima permitida para la Reunión de Planificación del Sprint en un ciclo de un mes?",
        pregunta: "¿Cuál es la duración máxima permitida para la Reunión de Planificación del Sprint en un ciclo de un mes?",
        options: ["Hasta 8 horas", "Exactamente 2 horas", "Un máximo de 3 días laborables", "15 minutos diarios"],
        opciones: ["Hasta 8 horas", "Exactamente 2 horas", "Un máximo de 3 días laborables", "15 minutos diarios"],
        answer: 0,
        correcta: 0,
        explanation: "La Reunión de Planificación de Sprint tiene un máximo de duración de ocho horas para un Sprint de un mes (proporcionalmente menos si es más corto)[cite: 12].",
        explicacion: "La Reunión de Planificación de Sprint tiene un máximo de duración de ocho horas para un Sprint de un mes (proporcionalmente menos si es más corto)[cite: 12]."
    }
];
