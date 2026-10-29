var techQuestions = [
    // --- CATEGORÍA 1: Arquitectura y Redes (40 preguntas) ---
    {
        id: 801, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Cuál es una característica fundamental de una arquitectura de microservicios frente a una monolítica?",
        options: [
            "Los servicios están desacoplados, se despliegan de forma independiente y se comunican mediante APIs o colas de mensajes.",
            "Todo el código fuente reside en un único repositorio masivo y se compila en un solo binario.",
            "No permite el uso de bases de datos relacionales bajo ninguna circunstancia.",
            "Elimina por completo la necesidad de realizar pruebas de integración y contratos de API."
        ],
        correct: 0,
        explanation: "Los microservicios desacoplan la aplicación en componentes autónomos desplegables de forma independiente.",
        pageRef: "Arquitectura de Software y Sistemas Distribuidos",
        summary: ["Microservicios: Desacoplamiento, despliegue independiente y comunicación por APIs."]
    },
    {
        id: 802, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "En el diseño de APIs RESTful, ¿qué significa que una operación sea 'idempotente'?",
        options: [
            "Que realizar múltiples solicitudes idénticas produce el mismo efecto secundario en el servidor que realizar una sola.",
            "Que la API requiere autenticación obligatoria mediante tokens JWT cifrados en SHA-256.",
            "Que el servidor responde exclusivamente en formatos binarios como Protocol Buffers.",
            "Que la API no genera ningún tipo de registro de auditoría en el backend."
        ],
        correct: 0,
        explanation: "La idempotencia garantiza que reintentar una petición fallida no altere indebidamente el estado del servidor.",
        pageRef: "Estándares Web y Protocolos HTTP",
        summary: ["Idempotencia HTTP: Peticiones repetidas con idéntico resultado de estado en servidor."]
    },
    {
        id: 803, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué función cumple un API Gateway en una arquitectura moderna?",
        options: [
            "Actúa como punto de entrada único para enrutar peticiones, manejar autenticación, límite de tasa (rate limiting) y balanceo de carga.",
            "Almacena permanentemente los datos históricos de los clientes en discos magnéticos de respaldo.",
            "Sustituye la necesidad de utilizar bases de datos relacionales.",
            "Compila código fuente de JavaScript directamente a lenguaje de máquina."
        ],
        correct: 0,
        explanation: "El API Gateway centraliza preocupaciones transversales como seguridad, enrutamiento y control de tráfico.",
        pageRef: "Patrones de Diseño de Microservicios",
        summary: ["API Gateway: Punto de entrada único, seguridad y enrutamiento."]
    },
    {
        id: 804, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué diferencia principal existe entre los protocolos HTTP y HTTPS?",
        options: [
            "HTTPS cifra las comunicaciones utilizando capas de seguridad TLS/SSL, mientras que HTTP transmite en texto plano.",
            "HTTP es exclusivo para aplicaciones móviles e HTTPS solo para navegadores de escritorio.",
            "HTTPS no requiere direcciones IP para establecer conexiones en red.",
            "No hay diferencia técnica; HTTPS es solo un nombre comercial."
        ],
        correct: 0,
        explanation: "HTTPS añade cifrado criptográfico para proteger la confidencialidad e integridad de los datos en tránsito.",
        pageRef: "Seguridad en Redes y Protocolos Web",
        summary: ["HTTPS: HTTP + Cifrado TLS/SSL para seguridad en tránsito."]
    },
    {
        id: 805, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué representa el código de estado HTTP 500 en una respuesta de servidor?",
        options: [
            "Un error interno del servidor (Internal Server Error), indicando que el servidor encontró una condición inesperada.",
            "Que la página solicitada fue encontrada y cargada con éxito.",
            "Que el cliente no está autorizado para ver el recurso (No autorizado).",
            "Que el recurso solicitado ha sido movido permanentemente a otra URL."
        ],
        correct: 0,
        explanation: "Los códigos 5xx indican errores del lado del servidor al procesar la solicitud.",
        pageRef: "Códigos de Estado HTTP",
        summary: ["HTTP 500: Error interno del servidor en el procesamiento."]
    },
    {
        id: 806, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Para qué se utiliza el protocolo WebSocket en aplicaciones web?",
        options: [
            "Para establecer una comunicación bidireccional en tiempo real y persistente sobre una única conexión TCP.",
            "Para transferir archivos comprimidos pesados mediante FTP seguro.",
            "Para realizar consultas directas a bases de datos relacionales desde el navegador.",
            "Para bloquear ataques de denegación de servicio (DDoS)."
        ],
        correct: 0,
        explanation: "WebSocket permite la comunicación full-duplex en tiempo real entre cliente y servidor.",
        pageRef: "Protocolos de Comunicación en Tiempo Real",
        summary: ["WebSocket: Comunicación bidireccional y persistente en tiempo real."]
    },
    {
        id: 807, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué es un balanceador de carga (Load Balancer)?",
        options: [
            "Un componente que distribuye el tráfico de red entrante entre múltiples servidores backend para garantizar alta disponibilidad y rendimiento.",
            "Una herramienta para medir el peso en megabytes de los paquetes de datos.",
            "Un mecanismo de compresión de imágenes para optimizar la velocidad de carga web.",
            "Un sistema de respaldo automático de bases de datos."
        ],
        correct: 0,
        explanation: "Evita la saturación de un solo nodo distribuyendo equitativamente las peticiones de los usuarios.",
        pageRef: "Infraestructura y Escalabilidad",
        summary: ["Load Balancer: Distribución de tráfico para alta disponibilidad."]
    },
    {
        id: 808, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué es CORS (Cross-Origin Resource Sharing) en el desarrollo web?",
        options: [
            "Un mecanismo de seguridad basado en cabeceras HTTP que permite o restringe recursos web solicitados desde un dominio distinto.",
            "Un lenguaje de programación orientado a objetos para servidores backend.",
            "Un estándar de codificación de caracteres para soportar acentos y eñes.",
            "Una técnica de compresión para archivos CSS y JavaScript."
        ],
        correct: 0,
        explanation: "CORS protege a las aplicaciones web controlando qué dominios externos tienen permiso para consumir sus recursos mediante APIs.",
        pageRef: "Seguridad Web y Políticas de Origen",
        summary: ["CORS: Control de acceso a recursos entre diferentes dominios web."]
    },
    {
        id: 809, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué ventaja principal ofrece una base de datos NoSQL frente a una relacional (SQL) para ciertos escenarios?",
        options: [
            "Flexibilidad en el esquema de datos (estructuras semi-estructuradas o JSON) y alta escalabilidad horizontal.",
            "Garantía estricta de transacciones ACID complejas en múltiples tablas relacionadas.",
            "Eliminación total de la necesidad de servidores de base de datos.",
            "Reducción automática del tamaño del disco duro."
        ],
        correct: 0,
        explanation: "Las bases de datos NoSQL destacan en la gestión de datos dinámicos y escalado horizontal masivo.",
        pageRef: "Modelos de Almacenamiento de Datos",
        summary: ["NoSQL: Esquema flexible y alta escalabilidad horizontal."]
    },
    {
        id: 810, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué es el almacenamiento en caché (Caching) en arquitectura de software?",
        options: [
            "Guardar copias temporales de datos de acceso frecuente en una capa de almacenamiento rápido (como Redis o Memcached) para reducir latencia.",
            "Borrar archivos temporales del sistema operativo para liberar espacio.",
            "Cifrar contraseñas de usuario antes de almacenarlas en tablas SQL.",
            "Bloquear el acceso a páginas web no deseadas."
        ],
        correct: 0,
        explanation: "La caché minimiza la carga en bases de datos y acelera los tiempos de respuesta al usuario.",
        pageRef: "Optimización de Rendimiento",
        summary: ["Caché: Almacenamiento temporal rápido para reducir latencia."]
    },
    // Preguntas 811 a 820 (Ampliación Cat. 1)
    {
        id: 811, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué función cumple el protocolo DNS (Domain Name System) en internet?",
        options: ["Traduce nombres de dominio legibles por humanos (ej. google.com) a direcciones IP numéricas.", "Cifra los correos electrónicos corporativos.", "Asigna direcciones IP locales automáticamente a las computadoras.", "Bloquea ataques maliciosos en la capa de red."], correct: 0, explanation: "El DNS actúa como la libreta de direcciones de internet.", pageRef: "Protocolos de Red y DNS", summary: ["DNS: Traducción de dominios a direcciones IP."] },
    {
        id: 812, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué describe el modelo OSI en redes de computadoras?",
        options: ["Un marco conceptual de 7 capas para estandarizar la comunicación entre sistemas de red.", "Un lenguaje de programación orientado a objetos.", "Una base de datos relacional distribuida.", "Un método de pruebas automatizadas."], correct: 0, explanation: "El modelo OSI divide la comunicación de red en 7 capas abstractas.", pageRef: "Fundamentos de Redes OSI", summary: ["Modelo OSI: Estándar de 7 capas para la comunicación en red."] },
    {
        id: 813, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Cuál es la principal diferencia entre los protocolos TCP y UDP?",
        options: ["TCP está orientado a conexión y garantiza la entrega ordenada de paquetes; UDP es sin conexión y más rápido pero sin garantías de entrega.", "TCP no requiere direcciones IP y UDP sí.", "UDP cifra obligatoriamente todos los datos y TCP no.", "No hay diferencia en velocidad ni seguridad."], correct: 0, explanation: "TCP prioriza la confiabilidad; UDP prioriza la velocidad y el streaming en tiempo real.", pageRef: "Protocolos de Transporte TCP/UDP", summary: ["TCP (confiable/ordenado) vs UDP (rápido/sin conexión)."] },
    {
        id: 814, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué representa el código de estado HTTP 401 (Unauthorized)?",
        options: ["Que la petición requiere autenticación de usuario válida que no ha sido proporcionada.", "Que el servidor se quedó sin memoria RAM.", "Que el recurso solicitado fue eliminado permanentemente.", "Que la página cargó con éxito."], correct: 0, explanation: "El código 401 indica falta de credenciales de autenticación.", pageRef: "Códigos de Estado HTTP", summary: ["HTTP 401: Falta de autenticación válida."] },
    {
        id: 815, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué representa el código de estado HTTP 403 (Forbidden)?",
        options: ["Que el servidor entendió la solicitud pero se niega a autorizarla, aun con autenticación.", "Que el servidor falló internamente.", "Que la URL solicitada no existe.", "Que la conexión de red se interrumpió."], correct: 0, explanation: "El código 403 deniega el acceso al recurso por falta de permisos específicos.", pageRef: "Códigos de Estado HTTP", summary: ["HTTP 403: Acceso prohibido por falta de permisos."] },
    {
        id: 816, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué es un Proxy Inverso (Reverse Proxy)?",
        options: ["Un servidor que se ubica frente a los servidores backend, interceptando peticiones de clientes y distribuyéndolas.", "Un programa malicioso que roba contraseñas en navegadores.", "Una base de datos de respaldo en la nube.", "Un cable de red de fibra óptica."], correct: 0, explanation: "El proxy inverso protege y gestiona el tráfico hacia los servidores internos (ej. Nginx, HAProxy).", pageRef: "Arquitectura de Servidores Web", summary: ["Proxy inverso: Intercepta y distribuye tráfico hacia los backends."] },
    {
        id: 817, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué es la escalabilidad horizontal (Scale Out)?",
        options: ["Añadir más máquinas o nodos al sistema para distribuir la carga de trabajo.", "Aumentar la capacidad de memoria RAM o CPU de un solo servidor existente.", "Reducir el tamaño del código fuente de la aplicación.", "Eliminar bases de datos obsoletas."], correct: 0, explanation: "Escalar horizontalmente significa sumar más servidores; escalar verticalmente es potenciar uno solo.", pageRef: "Arquitectura y Escalabilidad", summary: ["Escalabilidad horizontal: Añadir más nodos o servidores al sistema."] },
    {
        id: 818, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué es la escalabilidad vertical (Scale Up)?",
        options: ["Incrementar los recursos de hardware (CPU, RAM, disco) de un servidor existente.", "Agregar múltiples servidores nuevos a la red.", "Descomponer una aplicación en microservicios.", "Migrar datos a la nube pública."], correct: 0, explanation: "Scale Up potencia un único nodo con mejores componentes.", pageRef: "Infraestructura de Servidores", summary: ["Escalabilidad vertical: Aumentar hardware de un servidor existente."] },
    {
        id: 819, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Qué es un certificado SSL/TLS en la arquitectura web?",
        options: ["Un archivo digital que vincula una clave criptográfica a la identidad de un sitio web, habilitando HTTPS.", "Una licencia comercial para comprar software de Microsoft.", "Un registro contable de impuestos de dominio.", "Una contraseña de administrador de base de datos."], correct: 0, explanation: "Los certificados SSL/TLS garantizan la autenticidad del sitio y el cifrado de datos.", pageRef: "Seguridad Criptográfica Web", summary: ["SSL/TLS: Certificado digital para autenticidad y cifrado HTTPS."] },
    {
        id: 820, chapter: 1, chapterTitle: "Cat. 1: Arquitectura y Redes",
        q: "¿Cuál es la función principal de una Red de Distribución de Contenidos (CDN)?",
        options: ["Almacenar en caché contenido estático en servidores geográficamente cercanos al usuario para reducir latencia.", "Proteger bases de datos contra ataques de inyección SQL.", "Compilar código fuente en lenguajes nativos.", "Gestionar la nómina de los empleados."], correct: 0, explanation: "Las CDN aceleran la entrega de activos estáticos distribuyéndolos globalmente.", pageRef: "Infraestructura de Redes Globales", summary: ["CDN: Servidores perimetrales distribuidos para reducir latencia."] },

    // --- CATEGORÍA 2: SQL (Básico a Avanzado) (40 preguntas) ---
    {
        id: 821, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Cuál es la diferencia principal entre INNER JOIN y LEFT JOIN en SQL?",
        options: [
            "INNER JOIN devuelve solo coincidencias en ambas tablas; LEFT JOIN devuelve todos los registros de la izquierda y las coincidencias de la derecha (o NULL).",
            "LEFT JOIN ordena tablas de manera ascendente de forma automática.",
            "INNER JOIN requiere obligatoriamente tres bases de datos en paralelo.",
            "No existe diferencia operativa; ambos comandos optimizan índices de forma idéntica."
        ],
        correct: 0,
        explanation: "INNER JOIN filtra la intersección estricta, mientras que LEFT JOIN preserva todo el conjunto de la tabla izquierda.",
        pageRef: "Bases de Datos Relacionales y SQL",
        summary: ["JOINs: INNER (intersección) vs LEFT (izquierda completa + nulos)."]
    },
    {
        id: 822, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "En consultas SQL, ¿para qué se utiliza la cláusula HAVING en lugar de WHERE?",
        options: [
            "Para filtrar resultados agrupados (agregaciones como COUNT, SUM) después de aplicar GROUP BY.",
            "Para renombrar columnas temporales antes de realizar inserciones.",
            "Para ordenar alfabéticamente los registros de una tabla maestra.",
            "Para crear índices de búsqueda de texto completo."
        ],
        correct: 0,
        explanation: "WHERE filtra filas individuales antes de agrupar; HAVING filtra los grupos agregados tras el GROUP BY.",
        pageRef: "SQL Avanzado y Funciones de Agregación",
        summary: ["HAVING: Filtra filas agregadas post-GROUP BY."]
    },
    {
        id: 823, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Qué función cumple el operador GROUP BY en SQL?",
        options: [
            "Agrupa filas que comparten valores en columnas específicas para calcular totales o promedios con funciones de agregación.",
            "Fusiona dos tablas completamente diferentes en una sola sin importar sus claves.",
            "Elimina registros duplicados de una tabla física de manera permanente.",
            "Ordena los resultados de la consulta de Z a A."
        ],
        correct: 0,
        explanation: "GROUP BY organiza el conjunto de resultados en grupos para aplicar funciones como SUM, COUNT o AVG.",
        pageRef: "Agregación de Datos en SQL",
        summary: ["GROUP BY: Agrupa filas para funciones de agregación."]
    },
    {
        id: 824, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Qué es una Clave Foránea (Foreign Key) en bases de datos relacionales?",
        options: [
            "Un campo (o conjunto de campos) en una tabla que establece un vínculo y garantiza la integridad referencial con la Clave Primaria de otra tabla.",
            "Una contraseña maestra para acceder al servidor de base de datos desde internet.",
            "Un archivo externo que contiene respaldos cifrados.",
            "Una consulta SQL que se ejecuta automáticamente al apagar el servidor."
        ],
        correct: 0,
        explanation: "La clave foránea asegura que las relaciones entre tablas mantengan consistencia e integridad referencial.",
        pageRef: "Integridad Referencial en SQL",
        summary: ["Foreign Key: Vínculo que garantiza integridad referencial entre tablas."]
    },
    {
        id: 825, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Para qué sirve el operador DISTINCT en una sentencia SELECT?",
        options: [
            "Para eliminar filas duplicadas del conjunto de resultados devuelto por la consulta.",
            "Para ordenar los datos en orden estrictamente decreciente.",
            "Para realizar operaciones matemáticas complejas entre columnas.",
            "Para buscar patrones de texto parciales utilizando comodines."
        ],
        correct: 0,
        explanation: "DISTINCT filtra el resultado para mostrar únicamente valores únicos, descartando duplicados.",
        pageRef: "Proyección y Filtrado de Datos",
        summary: ["DISTINCT: Elimina duplicados en el resultado de la consulta."]
    },
    {
        id: 826, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "En SQL avanzado, ¿qué es una Subconsulta (Subquery o Nested Query)?",
        options: [
            "Una consulta SQL anidada dentro de otra consulta principal (en el SELECT, WHERE o FROM) para resolver criterios complejos.",
            "Un error de sintaxis que bloquea la ejecución del motor de base de datos.",
            "Una tabla temporal que se borra automáticamente cada hora.",
            "Un procedimiento almacenado sin parámetros de entrada."
        ],
        correct: 0,
        explanation: "Las subconsultas permiten realizar operaciones en etapas donde el resultado de una consulta interna alimenta a la externa.",
        pageRef: "Consultas Anidadas y Subqueries",
        summary: ["Subquery: Consulta anidada para resolver condiciones complejas."]
    },
    {
        id: 827, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Qué propósito tienen los Índices (Indexes) en una base de datos?",
        options: [
            "Acelerar drásticamente la velocidad de recuperación de datos en las consultas SELECT, a costa de un mayor espacio en disco y menor velocidad en escrituras.",
            "Cifrar la información confidencial de las tablas contra ataques externos.",
            "Organizar físicamente los cables de red conectados al servidor.",
            "Generar reportes automáticos de errores de sintaxis."
        ],
        correct: 0,
        explanation: "Los índices actúan como el índice de un libro, permitiendo al motor encontrar filas sin recorrer toda la tabla.",
        pageRef: "Optimización y Rendimiento de Bases de Datos",
        summary: ["Índices: Aceleran lecturas SELECT optimizando la búsqueda de filas."]
    },
    {
        id: 828, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Qué función cumple el comando UPDATE en SQL?",
        options: [
            "Modificar o actualizar los valores existentes en uno o más registros de una tabla.",
            "Borrar por completo una tabla de la base de datos.",
            "Insertar nuevas filas de datos en una estructura vacía.",
            "Crear una nueva base de datos desde cero."
        ],
        correct: 0,
        explanation: "UPDATE permite alterar datos ya almacenados cumpliendo las condiciones del WHERE.",
        pageRef: "Manipulación de Datos (DML)",
        summary: ["UPDATE: Modifica registros existentes en las tablas."]
    },
    {
        id: 829, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "En SQL avanzado, ¿qué son las Funciones de Ventana (Window Functions) como ROW_NUMBER() o RANK()?",
        options: [
            "Funciones que realizan cálculos analíticos sobre un conjunto de filas relacionadas, manteniendo el detalle individual de cada registro.",
            "Herramientas gráficas para visualizar bases de datos en formato de ventanas flotantes.",
            "Comandos para abrir múltiples conexiones de red simultáneas.",
            "Procedimientos para reiniciar el servidor de base de datos de forma remota."
        ],
        correct: 0,
        explanation: "Permiten calcular rankings o acumulados por particiones sin agrupar ni colapsar las filas originales.",
        pageRef: "SQL Analítico Avanzado",
        summary: ["Window Functions: Cálculos analíticos sin colapsar filas individuales."]
    },
    {
        id: 830, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Cuál es la diferencia entre los comandos DELETE y TRUNCATE en SQL?",
        options: [
            "DELETE elimina filas una por una permitiendo usar WHERE y disparando triggers; TRUNCATE vacía la tabla completa rápidamente sin registrar fila por fila.",
            "TRUNCATE es más lento que DELETE en todos los escenarios posibles.",
            "DELETE borra la estructura de la tabla y TRUNCATE solo los datos.",
            "No hay diferencia; son sinónimos exactos."
        ],
        correct: 0,
        explanation: "TRUNCATE es una operación DDL de borrado masivo rápido, mientras DDL/DML DELETE permite filtrado detallado.",
        pageRef: "Gestión de Transacciones y Borrado",
        summary: ["DELETE (permite WHERE/triggers) vs TRUNCATE (borrado masivo rápido)."]
    },
    // Preguntas 831 a 840 (Ampliación Cat. 2)
    {
        id: 831, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Qué es una Clave Primaria (Primary Key) en SQL?",
        options: ["Un campo o combinación de campos que identifica de forma única cada fila en una tabla, sin admitir nulos.", "Una contraseña para cifrar la base de datos.", "Un índice temporal para búsquedas web.", "Una clave foránea de otra tabla."], correct: 0, explanation: "La Primary Key garantiza unicidad e impide valores nulos en los registros.", pageRef: "Restricciones SQL", summary: ["Primary Key: Identificador único y no nulo de cada fila en una tabla."] },
    {
        id: 832, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Qué función cumple la cláusula ORDER BY en SQL?",
        options: ["Ordenar el conjunto de resultados de una consulta de forma ascendente (ASC) o descendente (DESC).", "Agrupar filas por categorías.", "Filtrar registros por fecha.", "Eliminar duplicados."], correct: 0, explanation: "ORDER BY organiza la presentación de las filas devueltas.", pageRef: "Consultas SQL Básicas", summary: ["ORDER BY: Ordena resultados ascendente o descendentemente."] },
    {
        id: 833, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Para qué sirve el operador LIKE junto con el comodín '%' en SQL?",
        options: ["Para buscar patrones de texto específicos (ej. nombres que empiecen o terminen con ciertos caracteres).", "Para sumar valores numéricos.", "Para unir dos tablas.", "Para contar registros totales."], correct: 0, explanation: "LIKE permite búsquedas parciales de cadenas de texto usando comodines como '%'.", pageRef: "Filtrado de Texto SQL", summary: ["LIKE con '%': Búsqueda de patrones en cadenas de texto."] },
    {
        id: 834, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Qué es una Vista (View) en bases de datos relacionales?",
        options: ["Una consulta SQL almacenada en la base de datos que se comporta como una tabla virtual.", "Una ventana gráfica de usuario en escritorio.", "Un archivo PDF con respaldos de datos.", "Un procedimiento de respaldo de red."], correct: 0, explanation: "Las vistas encapsulan consultas complejas reutilizables sin duplicar datos físicos.", pageRef: "Vistas y Objetos SQL", summary: ["Vista (View): Tabla virtual basada en el resultado de una consulta SQL almacenada."] },
    {
        id: 835, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Qué son las transacciones ACID en bases de datos relacionales?",
        options: ["Propiedades (Atomicidad, Consistencia, Aislamiento y Durabilidad) que garantizan transacciones de datos fiables.", "Algoritmos de compresión de imágenes.", "Protocolos de seguridad para redes Wi-Fi.", "Funciones de análisis estadístico."], correct: 0, explanation: "ACID asegura la integridad absoluta ante fallos del sistema durante operaciones críticas.", pageRef: "Transacciones y Concurrencia", summary: ["ACID: Atomicidad, Consistencia, Aislamiento y Durabilidad en transacciones."] },
    {
        id: 836, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Qué función cumple el operador UNION en SQL?",
        options: ["Combina los conjuntos de resultados de dos o más sentencias SELECT eliminando duplicados por defecto.", "Fusiona dos tablas físicas permanentemente en el disco duro.", "Multiplica valores numéricos de dos columnas.", "Elimina registros huérfanos."], correct: 0, explanation: "UNION une filas de múltiples consultas con idéntica estructura de columnas.", pageRef: "Operadores de Conjuntos SQL", summary: ["UNION: Combina resultados de consultas eliminando duplicados."] },
    {
        id: 837, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Qué es un Procedimiento Almacenado (Stored Procedure)?",
        options: ["Un bloque de código SQL compilado y almacenado en el servidor de base de datos que se puede ejecutar con parámetros.", "Una tabla temporal de respaldo.", "Un script de automatización en Selenium.", "Una regla de validación de interfaz."], correct: 0, explanation: "Los procedimientos almacenados centralizan lógica de negocio reutilizable en el motor de BD.", pageRef: "Programación en Bases de Datos", summary: ["Stored Procedure: Código SQL compilado ejecutable en el servidor."] },
    {
        id: 838, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Qué es un Trigger (Disparador) en bases de datos?",
        options: ["Un procedimiento almacenado que se ejecuta automáticamente en respuesta a un evento específico (INSERT, UPDATE, DELETE) en una tabla.", "Un botón en la interfaz gráfica de usuario.", "Un comando de Git para subir cambios.", "Una prueba automatizada de API."], correct: 0, explanation: "Los triggers automatizan auditorías, validaciones o integridad reactiva ante cambios.", pageRef: "Triggers y Eventos de BD", summary: ["Trigger: Procedimiento automático ejecutado ante eventos DML."] },
    {
        id: 839, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Cuál es la diferencia entre COUNT(*), COUNT(columna) y COUNT(DISTINCT columna)?",
        options: ["COUNT(*) cuenta todas las filas; COUNT(columna) cuenta filas sin nulos en esa columna; COUNT(DISTINCT) cuenta valores únicos no nulos.", "Todas devuelven exactamente el mismo número sin importar los nulos.", "COUNT(*) solo cuenta filas pares.", "COUNT(columna) borra los registros nulos."], correct: 0, explanation: "Las funciones de conteo difieren en cómo manejan los valores NULL y los duplicados.", pageRef: "Funciones de Agregación", summary: ["Conteo SQL: Manejo diferenciado de filas, nulos y valores únicos."] },
    {
        id: 840, chapter: 2, chapterTitle: "Cat. 2: SQL (Básico a Avanzado)",
        q: "¿Para qué se utiliza la sentencia CASE en SQL?",
        options: ["Para implementar lógica condicional (tipo if-else) dentro de una consulta SQL.", "Para borrar bases de datos masivamente.", "Para crear índices automáticos de búsqueda.", "Para conectar servidores remotos."], correct: 0, explanation: "CASE permite evaluar condiciones y retornar valores dinámicos en consultas.", pageRef: "Lógica Condicional SQL", summary: ["CASE: Implementa lógica condicional dentro de sentencias SQL."] },

    // --- CATEGORÍA 3: Jira y Confluence (40 preguntas) ---
    {
        id: 841, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "En la gestión de proyectos con Jira, ¿qué representa una 'Epic' (Épica)?",
        options: [
            "Un gran cuerpo de trabajo que se desglosa en múltiples historias de usuario o tareas, abarcando varios sprints.",
            "Un error crítico de producción que bloquea la facturación.",
            "Un informe financiero trimestral en Confluence.",
            "Una prueba unitaria ejecutada en pipelines de CI/CD."
        ],
        correct: 0,
        explanation: "Una épica agrupa requerimientos grandes y complejos para ser entregados de forma incremental.",
        pageRef: "Gestión Agile con Jira Software",
        summary: ["Épica (Epic): Contenedor de requerimientos grandes desglosables en historias."]
    },
    {
        id: 842, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "¿Qué es el lenguaje JQL (Jira Query Language) y para qué se usa?",
        options: [
            "Un lenguaje estructurado para realizar búsquedas avanzadas y crear filtros personalizados en Jira basados en campos y valores.",
            "Un lenguaje de programación backend para crear complementos en Java para Atlassian.",
            "Un protocolo de red para conectar Jira con servidores externos.",
            "Un sistema de diseño visual para prototipos de interfaz."
        ],
        correct: 0,
        explanation: "JQL permite a los usuarios crear consultas precisas para tableros, reportes y filtros avanzados.",
        pageRef: "Jira Documentation - JQL",
        summary: ["JQL: Lenguaje de consultas avanzadas para filtrar incidencias en Jira."]
    },
    {
        id: 843, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "En Confluence, ¿cuál es la ventaja principal de integrarlo estrechamente con Jira?",
        options: [
            "Permite documentar la arquitectura, especificaciones y actas vinculándolas directamente con las incidencias y épicas de Jira.",
            "Acelera la velocidad del procesador físico del servidor de base de datos.",
            "Automatiza la escritura de código de producción en los repositorios de Git.",
            "Reemplaza la necesidad de realizar reuniones de planificación."
        ],
        correct: 0,
        explanation: "Confluence actúa como la base de conocimiento colaborativa conectada a los entregables de Jira.",
        pageRef: "Atlassian Ecosystem Integration",
        summary: ["Confluence + Jira: Documentación colaborativa vinculada a tareas."]
    },
    {
        id: 844, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "En un tablero Scrum de Jira, ¿qué indica la columna 'Done' (Hecho)?",
        options: [
            "Que las historias de usuario o tareas han cumplido satisfactoriamente con la Definición de Hecho (DoD) acordada por el equipo.",
            "Que el proyecto completo ha sido finalizado y entregado al cliente final.",
            "Que el código fuente ha sido eliminado del repositorio por seguridad.",
            "Que la incidencia ha sido rechazada por el Product Owner."
        ],
        correct: 0,
        explanation: "'Done' refleja los elementos que completaron todo el flujo y cumplen los criterios de calidad (DoD).",
        pageRef: "Marcos Ágiles y Tableros Jira",
        summary: ["Done: Elementos completados conforme a la Definición de Hecho."]
    },
    {
        id: 845, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "¿Qué representa el 'Story Point' (Punto de Historia) en la estimación ágil dentro de Jira?",
        options: [
            "Una métrica relativa que mide el esfuerzo, complejidad, riesgo e incertidumbre necesarios para completar una historia de usuario.",
            "El número exacto de horas cronológicas que tardará un desarrollador junior en programar.",
            "El costo monetario en dólares de cada tarea asignada en el sprint.",
            "La cantidad de líneas de código escritas por día."
        ],
        correct: 0,
        explanation: "Los Story Points estiman esfuerzo relativo y complejidad, no tiempo absoluto en horas.",
        pageRef: "Estimación Ágil y Planificación en Jira",
        summary: ["Story Points: Medida relativa de esfuerzo, complejidad y riesgo."]
    },
    {
        id: 846, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "¿Qué función cumple el 'Product Backlog' en Jira?",
        options: [
            "Una lista priorizada y dinámica de todos los requisitos, mejoras y correcciones pendientes para el producto, gestionada por el Product Owner.",
            "Un archivo comprimido con los respaldos de la base de datos de producción.",
            "Un registro de asistencia de las reuniones diarias del equipo.",
            "Una lista de errores cerrados que ya no se pueden reabrir."
        ],
        correct: 0,
        explanation: "El Product Backlog es la fuente única de requisitos priorizados para el desarrollo del producto.",
        pageRef: "Gestión de Backlog en Jira",
        summary: ["Product Backlog: Lista priorizada de requerimientos del producto."]
    },
    {
        id: 847, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "En Jira, ¿qué diferencia existe entre un proyecto gestionado por el equipo (Team-managed) y gestionado por la empresa (Company-managed)?",
        options: [
            "Los de equipo otorgan autonomía total a los miembros para configurar su tablero; los de empresa siguen flujos y esquemas globales administrados centralmente.",
            "Los de equipo solo funcionan en dispositivos móviles y los de empresa en servidores mainframe.",
            "No hay diferencia técnica; es solo un cambio de idioma en la interfaz.",
            "Los proyectos de empresa no permiten crear historias de usuario."
        ],
        correct: 0,
        explanation: "Team-managed ofrece agilidad y control local para equipos independientes; Company-managed estandariza procesos a escala corporativa.",
        pageRef: "Administración de Proyectos en Jira",
        summary: ["Team-managed (autonomía local) vs Company-managed (estándar corporativo)."]
    },
    {
        id: 848, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "¿Para qué sirve un 'Sprint Burn-down Chart' en los reportes de Jira?",
        options: [
            "Para visualizar la cantidad de trabajo restante en el sprint frente al tiempo disponible, ayudando a predecir si se completará el objetivo.",
            "Para medir la temperatura de los servidores durante pruebas de estrés.",
            "Para calcular el salario mensual de los integrantes del equipo de desarrollo.",
            "Para auditar el consumo eléctrico de las computadoras."
        ],
        correct: 0,
        explanation: "El Burndown Chart grafica el avance diario del equipo en relación con el trabajo pendiente del sprint.",
        pageRef: "Métricas y Reportes Ágiles en Jira",
        summary: ["Burn-down Chart: Mide el trabajo restante vs tiempo en el sprint."]
    },
    {
        id: 849, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "En Confluence, ¿qué utilidad tienen las 'Templates' (Plantillas de página)?",
        options: [
            "Estandarizar formatos recurrentes como especificaciones de requisitos, notas de reuniones o post-mortems para mantener coherencia documental.",
            "Ejecutar pruebas automáticas de regresión visual en la interfaz gráfica.",
            "Generar diseños gráficos vectoriales en formato SVG.",
            "Traducir páginas web a otros idiomas automáticamente."
        ],
        correct: 0,
        explanation: "Las plantillas aceleran la creación de documentación estructurada bajo estándares definidos por la organización.",
        pageRef: "Gestión Documental en Confluence",
        summary: ["Plantillas Confluence: Estandarizan la documentación y actas recurrentes."]
    },
    {
        id: 850, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "En Jira, ¿qué define el flujo de trabajo (Workflow) de una incidencia?",
        options: [
            "La secuencia de estados por los que pasa una incidencia (ej. To Do -> In Progress -> In Review -> Done) y las reglas para transicionar entre ellos.",
            "El organigrama jerárquico de la dirección general de la empresa.",
            "El horario laboral permitido para los desarrolladores en la oficina.",
            "La velocidad de bajada de la red de internet corporativa."
        ],
        correct: 0,
        explanation: "El workflow modela el ciclo de vida operativo de las tareas desde su creación hasta su cierre.",
        pageRef: "Configuración de Workflows en Jira",
        summary: ["Workflow: Estados y reglas de transición del ciclo de vida de incidencias."]
    },
    // Preguntas 851 a 860 (Ampliación Cat. 3)
    {
        id: 851, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "¿Qué es un componente (Component) en un proyecto de Jira?",
        options: ["Una subsección o módulo dentro de un proyecto (ej. UI, Base de datos, API) para agrupar y clasificar incidencias.", "Un servidor físico en la nube de Atlassian.", "Un contrato legal de servicios.", "Una plantilla de Confluence."], correct: 0, explanation: "Los componentes ayudan a clasificar tareas por áreas funcionales del sistema.", pageRef: "Administración de Proyectos Jira", summary: ["Componentes Jira: Subsecciones modulares para clasificar incidencias."] },
    {
        id: 852, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "¿Qué función cumple el 'Sprint Backlog' en Scrum gestionado mediante Jira?",
        options: ["El conjunto de elementos seleccionados del Product Backlog para ser implementados durante el sprint actual.", "La lista de errores históricos cerrados hace años.", "El presupuesto financiero de la empresa.", "El directorio de empleados corporativos."], correct: 0, explanation: "El Sprint Backlog es el plan detallado del equipo para el incremento actual.", pageRef: "Scrum Guide y Jira Boards", summary: ["Sprint Backlog: Elementos seleccionados para entregar en el sprint actual."] },
    {
        id: 853, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "En Jira, ¿qué permite un tablero Kanban frente a uno Scrum?",
        options: ["Flujo de trabajo continuo enfocado en WIP (Work in Progress) sin ciclos fijos de sprints obligatorios.", "Creación exclusiva de épicas financieras.", "Bloqueo automático de tareas completadas.", "Sustitución de bases de datos relacionales."], correct: 0, explanation: "Kanban optimiza el flujo continuo limitando el trabajo en curso (WIP).", pageRef: "Marcos Ágiles Kanban", summary: ["Kanban: Flujo continuo sin sprints y límites de trabajo en curso (WIP)."] },
    {
        id: 854, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "¿Qué es una 'Release' o Versión en Jira?",
        options: ["Un hito para agrupar incidencias completadas que serán desplegadas juntas en un paquete de software.", "Una reunión diaria de 15 minutos.", "Un tipo de diagrama de red.", "Una plantilla de texto plano."], correct: 0, explanation: "Las versiones permiten planificar y hacer seguimiento de entregas a producción.", pageRef: "Gestión de Versiones Jira", summary: ["Release en Jira: Hito para empaquetar y rastrear entregas de software."] },
    {
        id: 855, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "¿Qué utilidad tiene la función de 'Watchers' (Observadores) en una incidencia de Jira?",
        options: ["Permitir que usuarios interesados reciban notificaciones automáticas ante cualquier actualización o cambio en la incidencia.", "Bloquear el acceso a editores no autorizados.", "Eliminar la tarea automáticamente tras un día.", "Asignar la tarea a múltiples desarrolladores a la vez."], correct: 0, explanation: "Los observadores se mantienen informados del progreso sin ser los ejecutores directos.", pageRef: "Notificaciones y Colaboración en Jira", summary: ["Watchers: Observadores que reciben alertas ante actualizaciones de incidencias."] },
    {
        id: 856, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "En Confluence, ¿cómo funcionan las Macros (como el reporte de estado de Jira o tablas de contenido)?",
        options: ["Elementos dinámicos incrustados en páginas que muestran información en tiempo real desde Jira u otras fuentes.", "Macros de código malicioso en macros de VBA.", "Herramientas para formatear discos duros.", "Programas de edición de video."], correct: 0, explanation: "Las macros enriquecen las páginas de Confluence con datos interactivos y dinámicos.", pageRef: "Macros y Extensiones en Confluence", summary: ["Macros en Confluence: Componentes dinámicos que muestran datos en tiempo real."] },
    {
        id: 857, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "¿Qué es un 'Sub-task' (Subtarea) en Jira?",
        options: ["Una división más pequeña de una Historia de usuario o Tarea que permite delegar partes específicas del trabajo técnico.", "Una épica de nivel superior corporativo.", "Un reporte financiero trimestral.", "Un error crítico de producción."], correct: 0, explanation: "Las subtareas desglosan los trabajos técnicos necesarios para completar una historia principal.", pageRef: "Jerarquía de Incidencias Jira", summary: ["Sub-task: División técnica menor dentro de una historia de usuario."] },
    {
        id: 858, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "¿Qué propósito tiene el campo 'Reporter' (Informador) en una incidencia de Jira?",
        options: ["Indicar la persona que creó o reportó inicialmente la incidencia en el sistema.", "Ser el desarrollador encargado de escribir todo el código fuente.", "Pagar la factura mensual de licencias de Atlassian.", "Aprobar el presupuesto financiero anual."], correct: 0, explanation: "El informador es quien originó el reporte, a diferencia del 'Assignee' que es quien lo ejecuta.", pageRef: "Campos de Incidencias Jira", summary: ["Reporter: Usuario que crea o reporta inicialmente la incidencia."] },
    {
        id: 859, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "En Jira, ¿para qué sirve configurar 'Priorities' (Prioridades) en las incidencias?",
        options: ["Para determinar la urgencia con la que el equipo debe atender un error o requerimiento frente a otros.", "Para cambiar el color de fondo de la pantalla del monitor.", "Para calcular el salario de los analistas de negocio.", "Para bloquear la conexión de red."], correct: 0, explanation: "Las prioridades ordenan qué elementos deben resolverse antes según impacto comercial.", pageRef: "Configuración de Prioridades Jira", summary: ["Prioridades en Jira: Ordenan la urgencia de atención de requerimientos o bugs."] },
    {
        id: 860, chapter: 3, chapterTitle: "Cat. 3: Jira y Confluence",
        q: "¿Qué ventaja ofrece el control de permisos por esquemas (Permission Schemes) en Jira?",
        options: ["Restringir o permitir qué roles de usuario pueden ver, crear, editar o eliminar incidencias según políticas de seguridad.", "Acelerar la velocidad del microprocesador del servidor.", "Automatizar la compilación de aplicaciones móviles.", "Traducir textos a otros idiomas."], correct: 0, explanation: "Los esquemas de permisos garantizan la gobernanza y seguridad de la información corporativa.", pageRef: "Seguridad y Permisos en Jira", summary: ["Permission Schemes: Control centralizado de accesos y permisos por roles."] },

    // --- CATEGORÍA 4: IA, Selenium y DevOps (40 preguntas) ---
    {
        id: 861, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "En automatización con Selenium WebDriver, ¿por qué se desaconseja el uso excesivo de esperas estáticas (Thread.sleep)?",
        options: [
            "Porque detienen la ejecución por un tiempo fijo innecesario, haciendo las pruebas lentas y propensas a falsos fallos por latencia.",
            "Porque impiden que el navegador abra pestañas en modo incógnito.",
            "Porque Selenium elimina automáticamente esas líneas en compilación.",
            "Porque obligan a reescribir todo el script en lenguaje Python."
        ],
        correct: 0,
        explanation: "Las esperas estáticas penalizan el rendimiento y la estabilidad; se deben emplear esperas explícitas (Explicit Waits).",
        pageRef: "Automatización QA con Selenium WebDriver",
        summary: ["Selenium: Evitar Thread.sleep; usar esperas explícitas para mayor estabilidad."]
    },
    {
        id: 862, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "¿Qué rol cumple la Integración Continua (CI) en un pipeline de DevOps?",
        options: [
            "Automatizar la compilación y ejecución de pruebas cada vez que los desarrolladores integran código al repositorio central.",
            "Realizar auditorías contables físicas de los servidores en el centro de datos.",
            "Garantizar que los analistas de negocio escriban código de producción.",
            "Sustituir por completo las pruebas de aceptación de usuario (UAT)."
        ],
        correct: 0,
        explanation: "La CI detecta conflictos y errores de integración de forma temprana mediante compilación y testeo automático.",
        pageRef: "Ingeniería DevOps y Pipelines CI/CD",
        summary: ["CI (Integración Continua): Validación y pruebas automáticas ante cada commit."]
    },
    {
        id: 863, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "¿Cómo se aplican actualmente las técnicas de Inteligencia Artificial (IA) en las pruebas de software (AI Testing)?",
        options: [
            "En la auto-corrección (self-healing) de localizadores frágiles en pruebas UI, generación de casos de prueba y detección visual de anomalías.",
            "En la eliminación total de la necesidad de programar lógica de negocio.",
            "En la escritura de contratos legales de propiedad intelectual.",
            "En la sustitución de bases de datos relacionales por hojas de cálculo."
        ],
        correct: 0,
        explanation: "La IA apoya en pruebas visuales, auto-reparación de selectores y generación predictiva de escenarios.",
        pageRef: "Tendencias de QA e Inteligencia Artificial",
        summary: ["IA en QA: Self-healing de selectores, pruebas visuales y generación de casos."]
    },
    {
        id: 864, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "En contenedores con Docker (DevOps), ¿qué ventaja principal aportan frente a máquinas virtuales tradicionales?",
        options: [
            "Comparten el kernel del sistema operativo host, haciéndolos ligeros, rápidos de arrancar y eficientes en recursos.",
            "Requieren obligatoriamente un procesador cuántico para poder ejecutarse.",
            "Impiden que se ejecuten pruebas automatizadas de regresión.",
            "Sustituyen la necesidad de utilizar control de versiones como Git."
        ],
        correct: 0,
        explanation: "Los contenedores virtualizan a nivel de sistema operativo (compartiendo kernel), logrando agilidad y portabilidad.",
        pageRef: "Contenedores, Docker y Orquestación",
        summary: ["Docker: Agilidad, ligereza y portabilidad al compartir el kernel del host."]
    },
    {
        id: 865, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "En Selenium WebDriver, ¿qué diferencia existe entre findElement() y findElements()?",
        options: [
            "findElement devuelve el primer elemento coincidente o lanza NoSuchElementException; findElements devuelve una lista (vacía si no hay coincidencias).",
            "findElement is para Java y findElements solo para Python.",
            "No hay diferencia; ambos métodos devuelven exactamente el mismo tipo de objeto.",
            "findElement ejecuta pruebas de rendimiento y findElements pruebas funcionales."
        ],
        correct: 0,
        explanation: "findElement falla si no halla el elemento; findElements retorna una lista vacía de forma segura.",
        pageRef: "Selenium WebDriver API Reference",
        summary: ["findElement (lanza excepción si falla) vs findElements (retorna lista vacía)."]
    },
    {
        id: 866, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "¿Qué es el despliegue continuo (Continuous Deployment - CD) en DevOps?",
        options: [
            "Una práctica donde cada cambio que pasa las pruebas automatizadas se despliega automáticamente a producción sin intervención humana.",
            "Un proceso manual que requiere la aprobación de la junta directiva cada mes.",
            "Una técnica para apagar servidores durante la noche.",
            "Un sistema para realizar copias de seguridad en cinta magnética."
        ],
        correct: 0,
        explanation: "El CD automatiza todo el pipeline hasta llevar el código validado directamente a los usuarios en producción.",
        pageRef: "Pipelines de Entrega y Despliegue Continuo",
        summary: ["Continuous Deployment: Despliegue automático a producción tras pasar pruebas."]
    },
    {
        id: 867, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "¿Qué papel juega el Page Object Model (POM) en la automatización de pruebas con Selenium?",
        options: [
            "Es un patrón de diseño que crea un repositorio de objetos para los elementos de la interfaz, separando la lógica de prueba de la estructura UI.",
            "Es un modelo matemático para calcular el tiempo de renderizado de páginas HTML.",
            "Es una base de datos para almacenar los reportes de ejecución de pruebas.",
            "Es un protocolo de red para conectar navegadores remotos."
        ],
        correct: 0,
        explanation: "POM mejora el mantenimiento del código al encapsular los elementos de las páginas web en clases dedicadas.",
        pageRef: "Patrones de Diseño en Automatización QA",
        summary: ["Page Object Model: Patrón para separar lógica de pruebas y elementos UI."]
    },
    {
        id: 868, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "¿Qué utilidad tienen las herramientas de análisis estático de código (SAST) en un entorno DevOps?",
        options: [
            "Inspeccionar el código fuente en busca de vulnerabilidades de seguridad, olores de código y fallas sintácticas sin ejecutar la aplicación.",
            "Medir el rendimiento de la batería en dispositivos móviles.",
            "Generar documentación visual en formato PDF de los diagramas de base de datos.",
            "Simular la carga de 10,000 usuarios concurrentes en la API."
        ],
        correct: 0,
        explanation: "SAST permite encontrar vulnerabilidades y malas prácticas en etapas tempranas del ciclo de desarrollo.",
        pageRef: "Seguridad y Calidad de Código (DevSecOps)",
        summary: ["SAST: Análisis estático de seguridad y calidad sin ejecutar el software."]
    },
    {
        id: 869, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "¿Cómo benefician los modelos de lenguaje de gran escala (LLM e IA generativa) a los analistas de negocio y testers?",
        options: [
            "Asistiendo en la redacción estructurada de historias de usuario, derivación de criterios de aceptación BDD y generación inicial de código de prueba.",
            "Sustituyendo por completo la necesidad de interactuar con los stakeholders.",
            "Eliminando la necesidad de realizar validaciones de negocio.",
            "Generando presupuestos financieros corporativos automáticos."
        ],
        correct: 0,
        explanation: "La IA generativa actúa como copiloto para acelerar la documentación y el diseño de pruebas preliminares.",
        pageRef: "Inteligencia Artificial Aplicada a QA y BA",
        summary: ["IA Generativa: Asistencia en historias, BDD y generación de scripts."]
    },
    {
        id: 870, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "En el control de versiones con Git (DevOps), ¿qué diferencia existe entre git pull y git fetch?",
        options: [
            "git fetch descarga los cambios remotos al repositorio local sin fusionarlos; git pull descarga los cambios y los fusiona inmediatamente (fetch + merge).",
            "git pull borra el repositorio local y git fetch lo reinstala.",
            "No hay diferencia operativa entre ambos comandos.",
            "git fetch solo funciona en sistemas operativos Linux."
        ],
        correct: 0,
        explanation: "Fetch revisa actualizaciones de forma segura sin alterar tu rama de trabajo actual; Pull actualiza directamente.",
        pageRef: "Control de Versiones Git y Colaboración",
        summary: ["git fetch (descarga sin fusionar) vs git pull (descarga y fusiona)."]
    },
    // Preguntas 871 a 890 (Ampliación Cat. 4)
    {
        id: 871, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "¿Qué es Kubernetes en el ecosistema DevOps?",
        options: ["Una plataforma de código abierto para automatizar el despliegue, escalado y gestión de contenedores.", "Un editor de texto avanzado para programar en Java.", "Un protocolo de red para correos electrónicos.", "Una herramienta de diseño gráfico vectorial."], correct: 0, explanation: "Kubernetes orquesta contenedores a escala en clústeres de servidores.", pageRef: "Orquestación de Contenedores", summary: ["Kubernetes: Orquestador de contenedores para despliegue y escalado automático."] },
    {
        id: 872, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "En Selenium WebDriver, ¿para qué se utiliza la clase Actions?",
        options: ["Para simular eventos complejos del mouse y teclado (como drag-and-drop, doble clic o pulsación de teclas).", "Para cerrar las pestañas del navegador.", "Para compilar archivos ejecutables.", "Para calcular la raíz cuadrada de un número."], correct: 0, explanation: "La clase Actions permite interacciones avanzadas de usuario difíciles con métodos básicos.", pageRef: "Selenium Advanced Interactions", summary: ["Clase Actions: Simulación de eventos complejos de mouse y teclado."] },
    {
        id: 873, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "¿Qué es la infraestructura como código (IaC - Infrastructure as Code)?",
        options: ["Gestionar y aprovisionar centros de datos mediante archivos de definición legibles por código (ej. Terraform, Ansible).", "Escribir código fuente dentro de servidores físicos.", "Comprar hardware de servidores en tiendas físicas.", "Crear respaldos en papel de los datos."], correct: 0, explanation: "IaC automatiza la creación de infraestructura usando versionado de código.", pageRef: "DevOps Best Practices", summary: ["IaC: Aprovisionamiento de infraestructura mediante código y versionado."] },
    {
        id: 874, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "¿Cuál es la ventaja de usar locators basados en XPath relativo frente a XPath absoluto en Selenium?",
        options: ["Los relativos son más robustos ante cambios menores en la estructura jerárquica del DOM de la página.", "Los absolutos son más rápidos de ejecutar.", "Los absolutos nunca fallan sin importar las actualizaciones.", "No hay ninguna diferencia técnica."], correct: 0, explanation: "El XPath absoluto se rompe fácilmente si cambia un nodo padre; el relativo busca por atributos estables.", pageRef: "Selenium Locators Strategies", summary: ["XPath relativo: Mayor robustez y resistencia ante cambios estructurales del DOM."] },
    {
        id: 875, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "¿Qué rol cumple una herramienta de gestión de secretos (como HashiCorp Vault) en DevOps?",
        options: ["Almacenar y cifrar de forma segura credenciales, tokens y claves API evitando exponerlos en el código fuente.", "Comprimir imágenes para acelerar la web.", "Generar reportes gráficos de ventas.", "Gestionar la asistencia de empleados."], correct: 0, explanation: "Vault previene la filtración de credenciales sensibles en repositorios Git públicos.", pageRef: "DevSecOps y Seguridad", summary: ["Gestión de secretos: Almacenamiento cifrado y seguro de credenciales y tokens."] },
    {
        id: 876, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "¿Cómo evalúa el análisis dinámico de seguridad (DAST) a una aplicación?",
        options: ["Simulando ataques externos sobre la aplicación en ejecución (en caliente) para descubrir vulnerabilidades.", "Revisando el código fuente sin compilar.", "Leyendo manuales en papel.", "Calculando la velocidad de los discos duros."], correct: 0, explanation: "DAST ataca la aplicación en ejecución simulando hackers maliciosos.", pageRef: "Seguridad Aplicada DAST", summary: ["DAST: Evaluación de vulnerabilidades atacando la aplicación en ejecución."] },
    {
        id: 877, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "En Git, ¿qué acción realiza el comando git branch?",
        options: ["Lista, crea o elimina ramas de trabajo independientes en el repositorio.", "Sube los cambios al servidor remoto de GitHub.", "Borra permanentemente el disco duro del servidor.", "Fusiona dos ramas de forma automática."], correct: 0, explanation: "git branch gestiona las ramificaciones para trabajar en paralelo sin afectar la rama principal.", pageRef: "Control de Versiones Git", summary: ["git branch: Gestión y creación de ramas de desarrollo paralelas."] },
    {
        id: 878, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "¿Qué función cumple el comando git commit?",
        options: ["Registra y guarda una instantánea (snapshot) de los cambios preparados en el repositorio local.", "Descarga actualizaciones del servidor remoto.", "Clona un repositorio completo en la computadora.", "Elimina el historial de commits anteriores."], correct: 0, explanation: "Commit sella los cambios locales en el historial del repositorio.", pageRef: "Git Version Control", summary: ["git commit: Guarda instantáneas de los cambios locales en el historial."] },
    {
        id: 879, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "En automatización de pruebas, ¿qué es un entorno 'Headless' para navegadores como Chrome o Firefox?",
        options: ["Ejecutar el navegador en segundo plano sin interfaz gráfica de usuario visible, ideal para servidores CI/CD.", "Un navegador que requiere un monitor de alta definición.", "Una extensión para bloquear anuncios publicitarios.", "Un modo de navegación exclusivo para desarrolladores senior."], correct: 0, explanation: "Headless ahorra recursos de renderizado visual al correr tests de forma desatendida.", pageRef: "Automatización de Pruebas Web", summary: ["Headless browser: Ejecución de pruebas sin interfaz gráfica en servidores CI/CD."] },
    {
        id: 880, chapter: 4, chapterTitle: "Cat. 4: IA, Selenium y DevOps",
        q: "¿Qué es la observabilidad (Observability) en arquitecturas modernas de software?",
        options: ["La capacidad de inferir el estado interno de un sistema a partir de sus salidas externas (métricas, logs y trazas/traces).", "Mirar la pantalla del monitor durante 8 horas seguidas.", "Comprar cámaras de vigilancia para la oficina.", "Instalar antivirus en las computadoras."], correct: 0, explanation: "La observabilidad combina métricas, registros y trazas distribuidas para diagnosticar sistemas complejos.", pageRef: "Monitoreo y Observabilidad", summary: ["Observabilidad: Diagnóstico del estado interno mediante métricas, logs y trazas."] }
];