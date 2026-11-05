# Diccionario de la Inteligencia Artificial (IA)

**Enciclopedia temática del Sistema Vectorial SV · Volumen II · Primera edición, 25 de octubre de 2026.**

Este volumen explica los conceptos empleados para evaluar, autorizar y gobernar el uso de modelos de IA en el SV. Delimita el significado de cada término y su relación con los libros competentes. No constituye una autorización de uso ni convierte una capacidad descrita en una capacidad acreditada.

Las definiciones propias del SV se identifican como tales. Las siglas y equivalencias inglesas facilitan la consulta; su presencia no sustituye la explicación en español. Las denominaciones de una convocatoria se conservan con su alcance original y no se generalizan a personas ni a capacidades no examinadas.

## Consulta temática

| Materia | Términos relacionados |
| --- | --- |
| Conocimiento y organización | [Agente Especializado](#agente), [biblioteca de dominio](#biblioteca), [dominio](#dominio), [rutas críticas](#ruta-critica), [Universo](#universo). |
| Modelo y uso | [Modelo de IA](#modelo), [modo predominante](#modo), [grados de libertad](#grados), [predominancia](#predominancia), [nodo](#nodo). |
| Examen y decisión | [Evaluación](#evaluacion), [clasificación](#clasificacion), [dictamen](#dictamen), [autorización](#autorizacion), [recomendación](#recomendacion). |
| Funcionamiento y protección | [Aislamiento](#aislamiento), [IA gobernada](#gobernada), [inferencia](#inferencia), [producción](#produccion), [seudo-producción](#seudoproduccion). |
| Uso y evidencia | [Conexión](#conexion), [consulta](#consulta), [evidencia](#evidencia), [sesión](#sesion), [token](#token). |
| Biblioteca y procedimientos | [Dinámica forense](#dinamica-forense), [procedimiento Pasivo y procedimiento Activo](#procedimientos), [protocolo acelerado](#protocolo-acelerado). |
| Evaluación y enfrentamiento | [Evaluación individual](#evaluacion-individual), [perfiles del enfrentamiento](#perfiles-enfrentamiento), [torneo](#torneo), [selección del defensor](#seleccion-defensor). |
| Supervisión y auditoría | [Cobertura de observación](#cobertura-observacion), [expediente de supervisión](#expediente-supervision), [procedencia de la evidencia](#procedencia-evidencia). |
| Propuestas y desarrollo | [Anteproyecto](#anteproyecto), [memoria descriptiva](#memoria-descriptiva), [memoria de actividades](#memoria-actividades). |

## Términos

Las entradas están ordenadas alfabéticamente. Las remisiones enlazan explicaciones complementarias, sin sustituir los contratos de los libros.

### Agente Especializado del SV {#agente}

Construcción definida íntegramente mediante la DSL del Lenguaje de Computación del SV, con alcance, función, versiones, fuentes y condiciones de ejecución identificados. Puede comprender dominios completos, subdominios o conjuntos de Universos.

**Distinción:** no es sinónimo del modelo de IA empleado. La selección del modelo no modifica la semántica ni concede facultades sobre el núcleo. Una consulta no debe recorrer todo el dominio si su objeto no lo requiere, pero tampoco puede omitir dependencias obligatorias. Véase [Alcance de un Agente Especializado](https://documentos-sv.itvia.online/dominios/universos/conceptos.html#alcance-de-un-agente-especializado).


La preparación material anterior al núcleo se estudia en las [instrucciones preliminares pre-núcleo](https://documentos-sv.itvia.online/enciclopedia/lenguaje.html#pre-nucleo). Es una condición del entorno por desarrollar y comprobar, no una nueva facultad del modelo ni una excepción a la definición del Agente Especializado mediante la DSL.

**Para continuar la lectura:** [Dominio](https://documentos-sv.itvia.online/enciclopedia/ia.html#dominio) · [DSL · Lenguaje específico de dominio](https://documentos-sv.itvia.online/enciclopedia/lenguaje.html#dsl). Relacionar el alcance del agente con su construcción formal. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Aislamiento de la IA {#aislamiento}

Separación material de las facultades del modelo respecto de los recursos y operaciones que no le están autorizados. En el SV debe impedir que la IA, incluida la que desempeñe el Perfil defensor (PD), alcance directamente el núcleo, modifique el sistema, conceda permisos o acceda a credenciales.

**Límite:** una instrucción dirigida al modelo no basta para demostrar ese aislamiento. Deben existir controles externos y evidencia de su resistencia a entradas maliciosas y accesos alternativos. La exigencia permanece en seudo-producción y en los tres nodos. Véase [Consulta sin autoridad sobre el sistema](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/autoridad.html#consulta-sin-autoridad-sobre-el-sistema).

**Para continuar la lectura:** [Tubería de IA](https://documentos-sv.itvia.online/enciclopedia/lenguaje.html#tuberia) · [Núcleo del Lenguaje SV](https://documentos-sv.itvia.online/enciclopedia/lenguaje.html#nucleo). Examinar el recorrido controlado y la protección que debe mantener. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Anteproyecto {#anteproyecto}

Propuesta documentada que identifica una necesidad, delimita el objeto de estudio y compara alternativas, dependencias y condiciones de comprobación.

**Distinción:** su publicación no constituye un dominio, ni acredita una capacidad ni autoriza una operación. En el SV remite a los pilares y a las definiciones competentes, sin introducir nuevas reglas del núcleo.

**Para continuar la lectura:** [Memoria descriptiva](#memoria-descriptiva) · [Objeto y método de las memorias descriptivas](https://documentos-sv.itvia.online/anteproyectos-memorias-descriptivas/metodo.html). Relacionar la propuesta con la explicación de su alcance y con sus condiciones de desarrollo.

### Autorización de uso {#autorizacion}

Decisión de una función competente que permite un uso delimitado bajo condiciones expresas. Identifica, según corresponda, institución, persona, dominio, nodo, modelo, configuración, finalidad, vigencia y límites.

**Distinción:** autenticación, evaluación favorable, recomendación y autorización son actos diferentes. Una cuenta admitida no adquiere automáticamente todos los usos. Véase [Facultades, autorización y producción](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/autoridad.html).

**Para continuar la lectura:** [Evaluación de un modelo de IA](https://documentos-sv.itvia.online/enciclopedia/ia.html#evaluacion) · [Sesión de uso](https://documentos-sv.itvia.online/enciclopedia/ia.html#sesion). Distinguir la evidencia disponible de las condiciones concedidas para utilizarla. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Biblioteca documental de dominio {#biblioteca}

Conjunto de fuentes identificadas y organizado para los fines y condiciones del dominio. Su uso exige comprobar las versiones, la pertinencia, los derechos y la disponibilidad efectiva del contenido requerido.

**Distinción:** un catálogo, una referencia bibliográfica o un DOI no acreditan por sí solos que el modelo haya recibido el documento completo. Véase [Documentos y condiciones de entrega](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/documentos.html).

**Para continuar la lectura:** [Dominio](https://documentos-sv.itvia.online/enciclopedia/ia.html#dominio) · [Universo del SV](https://documentos-sv.itvia.online/enciclopedia/ia.html#universo). Situar las fuentes dentro del ámbito y las operaciones que sustentan. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Clasificación comparativa de modelos {#clasificacion}

Ordenación de resultados conforme a un criterio fijado para una edición y unas condiciones comparables. Conserva categorías, empates, mediciones ausentes y límites de interpretación.

**En el SV:** elegir un modelo como referencia visual no lo convierte en ganador. La predominancia de uso tampoco añade puntos ni modifica el orden recibido. Los criterios particulares de una convocatoria no se presentan como una regla universal. Véase [Comparación y lectura de resultados](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/comparacion.html).

**Para continuar la lectura:** [Evaluación de un modelo de IA](https://documentos-sv.itvia.online/enciclopedia/ia.html#evaluacion) · [Predominancia en un dominio](https://documentos-sv.itvia.online/enciclopedia/ia.html#predominancia). Separar el puesto obtenido en una evaluación de la función asignada en un dominio. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Cobertura de observación {#cobertura-observacion}

Conjunto de recursos, fuentes, sucesos, magnitudes y periodos para los que existe observación efectivamente comprobada, con sus condiciones de adquisición y sus límites. La instalación de un recolector no prueba que haya observado todos los procesos o que estuviera activo en un momento anterior.

**Distinción:** falta de registros, pérdida de observación y ausencia de actividad son hechos diferentes. La cobertura parcial no se transforma en protección completa ni recibe por sí sola una valoración de la terna. Véase [Adquisición común y contrato de evidencia](https://github.com/juantoniolloretegea/SVperitus-dataset/blob/main/agentes/ciberseguridad-inteligente/SUPERVISION-Y-AUDITORIA-DE-SISTEMAS.md#adquisición-común-y-contrato-de-evidencia). Equivalente inglés: *observation coverage*.

### Conexión con un proveedor o modelo {#conexion}

Recorrido técnico identificado para acceder a las funciones permitidas de un proveedor o a una instancia de modelo. Debe distinguir el mecanismo de autenticación, el catálogo disponible y las operaciones realmente habilitadas.

**Distinción:** comprobar autenticación o consultar un catálogo no acredita una inferencia ni autoriza enviar contenido. Una suscripción y una API son mecanismos diferentes; ninguna elimina por sí misma la transmisión de la consulta a un modelo remoto. Véase [Preparación del acceso y límites individuales](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/autoridad.html#preparación-del-acceso-y-límites-individuales).

**Para continuar la lectura:** [Modelo de inteligencia artificial](https://documentos-sv.itvia.online/enciclopedia/ia.html#modelo) · [Nodo de uso del modelo](https://documentos-sv.itvia.online/enciclopedia/ia.html#nodo). Identificar el modelo concreto y el recorrido de acceso utilizado. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Consulta al modelo {#consulta}

Solicitud delimitada que se presenta a un modelo para obtener una respuesta bajo condiciones identificadas. Su finalidad, fuentes, autorización, consumo y resultado deben conservar la relación que permita examinarlos.

**Distinción:** abrir una página o cargar un visor no equivale a iniciar una consulta. Una respuesta tampoco constituye por sí sola una decisión determinista del SV ni una autorización profesional. Véase [Estado de seudo-producción](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/autoridad.html#estado-de-seudo-producción).

**Para continuar la lectura:** [Sesión de uso](https://documentos-sv.itvia.online/enciclopedia/ia.html#sesion) · [Inferencia del modelo](https://documentos-sv.itvia.online/enciclopedia/ia.html#inferencia). Distinguir el contexto de uso de la operación realizada por el modelo. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Dictamen de evaluación {#dictamen}

Resultado interpretado conforme a la cuestión, al contrato y a la regla de evaluación aplicables. En los exámenes descritos del SV se distingue 0 — Apto, 1 — No apto y U — Indeterminado.

**Límite:** las incidencias técnicas conservan causa propia y no se convierten automáticamente en dictamen. La aptitud acreditada para un examen no demuestra competencia universal ni autoriza producción. Véase [Corrección y criterio de aptitud](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/correccion.html).

**Para continuar la lectura:** [Evaluación de un modelo de IA](https://documentos-sv.itvia.online/enciclopedia/ia.html#evaluacion) · [Diagnóstico técnico](https://documentos-sv.itvia.online/enciclopedia/lenguaje.html#diagnostico). Precisar el alcance de la conclusión y diferenciarla de una incidencia técnica. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Dinámica forense del ensayo {#dinamica-forense}

Análisis fundamentado en la biblioteca admitida y en las evidencias del caso, con procedencia verificable y sin navegación autónoma. Es una dinámica de trabajo del ensayo; no un cuarto modo del modelo ni una declaración de validez pericial o judicial.

**Distinción:** la restricción de navegación no elimina el conocimiento adquirido durante el entrenamiento. La fundamentación debe comprobarse con los documentos efectivamente disponibles. Véase [Biblioteca y dinámica forense](https://github.com/juantoniolloretegea/SV-motor/blob/main/laboratorio/ensayo-ia-y-observabilidad/biblioteca-y-procedimientos.md#biblioteca-y-dinámica-forense).

**Para continuar la lectura:** [Biblioteca de dominio](#biblioteca) · [Procedimientos de obtención de información](#procedimientos).

### Dominio {#dominio}

Ámbito de conocimiento organizado para una finalidad y unas operaciones delimitadas. En el SV su constitución exige identificar los Universos, las fuentes, las relaciones y los límites pertinentes.

**Distinción:** la denominación de una especialidad no acredita que exista un agente activo ni que todo su conocimiento esté formalizado. Un dominio clínico y otro de ciberseguridad conservan sus propias reglas, aunque se utilicen en la misma institución. Véase [Definiciones y relaciones](https://documentos-sv.itvia.online/dominios/universos/conceptos.html).

**Para continuar la lectura:** [Universo del SV](https://documentos-sv.itvia.online/enciclopedia/ia.html#universo) · [Agente Especializado del SV](https://documentos-sv.itvia.online/enciclopedia/ia.html#agente). Examinar las operaciones constituidas y el alcance que puede reunir un agente. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Evaluación de un modelo de IA {#evaluacion}

Examen de capacidades o resultados mediante una edición, un protocolo, fuentes, criterios y condiciones identificados. Permite emitir conclusiones dentro del alcance de la evidencia obtenida.

**Distinción:** una prueba de comprensión documental no acredita por sí sola competencia clínica, control de un servidor o funcionamiento íntegro del SV. Los antecedentes conservan las condiciones con las que se evaluaron. Véase [Finalidad y alcance de la evaluación](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/finalidad.html).

**Para continuar la lectura:** [Evidencia de evaluación](https://documentos-sv.itvia.online/enciclopedia/ia.html#evidencia) · [Autorización de uso](https://documentos-sv.itvia.online/enciclopedia/ia.html#autorizacion). Seguir el fundamento del examen y distinguirlo de la decisión de uso. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Evaluación individual {#evaluacion-individual}

Examen de un candidato conforme a la célula, los parámetros, las criticidades y las condiciones de una edición identificada. Conserva el dictamen y las evidencias del propio candidato.

**Distinción:** vencer en un torneo no completa las posiciones pendientes ni transfiere la actuación del oponente al vector individual. Las [reglas de corrección](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/correccion.html#aplicación-a-la-evaluación-individual-de-hcc1) y las [reglas de comparación](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/comparacion.html#evaluación-individual-torneo-y-selección-del-defensor) explican su relación.

**Para continuar la lectura:** [Dictamen](#dictamen) · [Torneo de ciberseguridad](#torneo).

### Evidencia de evaluación {#evidencia}

Contenido o registro identificable que permite examinar una afirmación dentro de un alcance declarado. Incluye, cuando corresponda, fuentes, entradas, respuestas, criterios de corrección, mediciones y condiciones de obtención.

**Límite:** una afirmación sin comprobación no se convierte en evidencia por registrarla. La integridad de un archivo y la validez científica de su contenido son cuestiones distintas. Véase [Comparación y lectura de resultados](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/comparacion.html).

**Para continuar la lectura:** [Comprobación](https://documentos-sv.itvia.online/enciclopedia/lenguaje.html#comprobacion) · [Huella de contenido · SHA-256](https://documentos-sv.itvia.online/enciclopedia/lenguaje.html#huella). Separar comprobación pertinente e identidad de los documentos. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Expediente de supervisión o auditoría {#expediente-supervision}

Registro estable que relaciona finalidad, recursos, autorización, actuaciones y evidencias de una supervisión, una auditoría preventiva o una respuesta a incidentes. Distingue el ámbito propio de la instalación del ámbito externo expresamente autorizado; ninguno se confunde con el dominio de conocimiento del agente.

**Distinción:** abrir una página o identificar una dirección alcanzable no autoriza intervenir. El expediente conserva la identidad de la instalación, su titular y responsable, quién autorizó, alcance, vigencia, condiciones de interrupción y procedencia de los resultados. Véase [Expediente y trazabilidad](https://github.com/juantoniolloretegea/SVperitus-dataset/blob/main/agentes/ciberseguridad-inteligente/SUPERVISION-Y-AUDITORIA-DE-SISTEMAS.md#expediente-y-trazabilidad). Equivalente inglés: *monitoring or audit case record*.

### Grados de libertad del modelo {#grados}

Denominación organizativa del SV que relaciona el modo predominante de un uso con la asignación del modelo a dominios y funciones. Permite describir predominancias y relaciones secundarias sin reducir un modelo a una única especialidad.

**Distinción:** aquí no designa grados de libertad estadísticos ni físicos. Un modelo puede ser predominante en varios dominios; varios modelos pueden coexistir como predominantes si sus funciones están delimitadas. La declaración no concede autonomía adicional. Véase [Modos y grados de libertad](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/autoridad.html).

**Para continuar la lectura:** [Modo predominante del modelo](https://documentos-sv.itvia.online/enciclopedia/ia.html#modo) · [Predominancia en un dominio](https://documentos-sv.itvia.online/enciclopedia/ia.html#predominancia). Comprender las dos relaciones organizativas que describe esta denominación. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### IA gobernada {#gobernada}

Expresión que identifica un uso de IA sometido a reglas externas, responsabilidades, permisos, límites y comprobaciones. En el SV, el modelo no determina por sí mismo las condiciones de su actuación ni la validez de sus resultados.

**Distinción:** gobernar el uso de un modelo no vuelve determinista su generación de texto. Las propiedades del recorrido del SV y las de la inferencia deben acreditarse separadamente. Véase [Agentes Especializados y frontera](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/autoridad.html#agentes-especializados-y-frontera).

**Para continuar la lectura:** [Árbitro–Director](https://documentos-sv.itvia.online/enciclopedia/lenguaje.html#director) · [Aislamiento de la IA](https://documentos-sv.itvia.online/enciclopedia/ia.html#aislamiento). Relacionar responsabilidades externas y separación de facultades. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Inferencia del modelo {#inferencia}

Operación mediante la cual un modelo obtiene una salida a partir de una entrada y de su configuración. En este diccionario se distingue de la evaluación científica de esa salida y de la decisión institucional sobre su uso.

**Límite:** una respuesta generada no acredita por sí misma corrección, exhaustividad o determinismo. Debe conservarse la identidad del modelo y la configuración relevante. Véase [Finalidad y alcance](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/finalidad.html).

**Para continuar la lectura:** [Modelo de inteligencia artificial](https://documentos-sv.itvia.online/enciclopedia/ia.html#modelo) · [Evidencia de evaluación](https://documentos-sv.itvia.online/enciclopedia/ia.html#evidencia). Identificar la operación generativa y la comprobación posterior de su salida. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Memoria de actividades {#memoria-actividades}

Relación de actuaciones concretas, su estado, sus condiciones de realización y las evidencias que sustentan sus resultados. Complementa al anteproyecto y a la memoria descriptiva sin convertir cada tarea parcial en una propuesta independiente.

**Distinción:** «Por hacer», «Haciendo» y «Hecho» son estados de seguimiento documental; no corresponden a los valores de la terna (0, 1, U), ni acreditan por sí solos una capacidad operativa. La memoria puede enlazar sucesos y Tiques Técnicos existentes, conservando su autoridad y sus permisos, sin duplicar ni modificar sus registros.

**Para continuar la lectura:** [Memoria de actividades y seguimiento](https://documentos-sv.itvia.online/anteproyectos-memorias-descriptivas/memoria-actividades.html) · [Anteproyecto](#anteproyecto) · [Memoria descriptiva](#memoria-descriptiva).

### Memoria descriptiva {#memoria-descriptiva}

Documento que expone qué se propone o realiza, por qué, con qué elementos se relaciona y qué condiciones permiten desarrollarlo y comprobarlo. Cuando describe una realización, identifica las evidencias que sustentan ese estado.

**En el SV:** el libro [Anteproyectos y memorias descriptivas del Sistema Vectorial SV](https://documentos-sv.itvia.online/anteproyectos-memorias-descriptivas/index.html) reúne propuestas transversales. Su primera memoria estudia la supervisión y una célula de intrusión, el equilibrio entre observación y recursos y la posible aportación de herramientas auxiliares de imágenes. La dimensión de la célula y la selección de herramientas permanecen abiertas.

**Para continuar la lectura:** [Anteproyecto](#anteproyecto) · [Cobertura de observación](#cobertura-observacion). Distinguir una solución propuesta del alcance efectivamente comprobado.

### Modelo de inteligencia artificial {#modelo}

Sistema computacional identificado por su versión y configuración, utilizado para producir salidas a partir de entradas. Sus capacidades se examinan mediante evidencia pertinente al uso previsto.

**Distinción:** el nombre comercial no sustituye la versión ni la conexión utilizada. Modelo, proveedor, Agente Especializado y autorización institucional son identidades diferentes. Véase [Validación, autorización y puesta en Producción](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/index.html).

**Para continuar la lectura:** [Agente Especializado del SV](https://documentos-sv.itvia.online/enciclopedia/ia.html#agente) · [Conexión con un proveedor o modelo](https://documentos-sv.itvia.online/enciclopedia/ia.html#conexion). Distinguir la identidad del modelo, la construcción del agente y su acceso. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Modo predominante del modelo {#modo}

Declaración del objetivo principal de un uso identificado del modelo, sin excluir otras capacidades. El SV distingue **Sin modo como objetivo**, **No actuación o neutral** y **Actuación o activo**.

El modo neutral orienta al experto mediante consejo, evaluación o revisión, sujeto a su aprobación. El activo contempla actuaciones dentro de capacidades expresamente configuradas y autorizadas. «Sin modo como objetivo» conserva los usos o exámenes que no fijaron ese objetivo.

**Distinción:** no es una propiedad inmutable del modelo ni una licencia para actuar. El examen conserva la declaración con la que se preparó. Véase [Facultades, autorización y producción](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/autoridad.html).

**Para continuar la lectura:** [Grados de libertad del modelo](https://documentos-sv.itvia.online/enciclopedia/ia.html#grados) · [Seudo-producción](https://documentos-sv.itvia.online/enciclopedia/ia.html#seudoproduccion). Relacionar el objetivo del uso con su asignación y distinguirlo del estado de funcionamiento. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Nodo de uso del modelo {#nodo}

Categoría que identifica el recorrido de acceso y ejecución considerado por el SV: **nodo 1**, modelo bajo control propio; **nodo 2**, acceso mediante plataforma intermedia; **nodo 3**, acceso a un proveedor externo. La configuración concreta debe identificar recursos, conexión y responsabilidades.

**Límite:** describir un nodo no autoriza su utilización. Ninguno permite acceso directo de la IA al núcleo. El control propio puede evitar un coste de proveedor, pero no elimina el consumo de capacidad ni la necesidad de cuotas. Véase [Presupuesto y capacidad por nodo](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/autoridad.html).

**Para continuar la lectura:** [Conexión con un proveedor o modelo](https://documentos-sv.itvia.online/enciclopedia/ia.html#conexion) · [Aislamiento de la IA](https://documentos-sv.itvia.online/enciclopedia/ia.html#aislamiento). Identificar el recorrido de acceso sin suponer una excepción a la protección del núcleo. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Perfil atacante (PA) y Perfil defensor (PD) {#perfiles-enfrentamiento}

Funciones de los participantes de un enfrentamiento autorizado. El Perfil atacante (PA) procura alcanzar el objetivo ofensivo; el Perfil defensor (PD), impedirlo y satisfacer el objetivo defensivo. Ambos conservan libertad táctica dentro del entorno, los recursos, los permisos, el presupuesto y el plazo del ensayo.

**Distinción:** estos perfiles no son funciones administrativas de personas, no autorizan intervenir en infraestructura ajena y no atribuyen autoridad sobre el núcleo. Tampoco limitan la capacidad defensiva a una respuesta prefijada. Las [reglas y registros del enfrentamiento](https://sv.itvia.online/benchmark?convocatoria=eet-cyb16-practica-20261027&recurso=practica-reglas-enfrentamientos) fijan su alcance particular.

**Para continuar la lectura:** [Torneo](#torneo) · [Autorización](#autorizacion).

### Predominancia en un dominio {#predominancia}

Relación de asignación por la que un modelo desempeña una función principal en un dominio y uso identificados. Puede coexistir con relaciones secundarias o con otras predominancias expresamente delimitadas.

**Distinción:** no equivale a superioridad universal ni a un puesto de clasificación. Su fundamento debe relacionar función, capacidades evaluadas, límites y evidencia. La mera proximidad temática no justifica otra asignación. Véase [Comparación por modos y predominancias](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/comparacion.html#comparación-por-modos-y-predominancias).

**Para continuar la lectura:** [Grados de libertad del modelo](https://documentos-sv.itvia.online/enciclopedia/ia.html#grados) · [Clasificación comparativa de modelos](https://documentos-sv.itvia.online/enciclopedia/ia.html#clasificacion). Relacionar la función asignada con la evidencia, sin confundirla con el orden de clasificación. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Procedencia de la evidencia {#procedencia-evidencia}

Información que permite identificar la fuente de una evidencia, su adquisición, las transformaciones realizadas y su relación con los originales conservados. Una medida obtenida directamente y un registro aportado por un tercero mantienen procedencias distintas, aunque describan el mismo recurso.

**Distinción:** una huella permite cotejar integridad respecto de una referencia; no acredita por sí sola autenticidad, cobertura histórica ni validez pericial. Véase [Expediente y trazabilidad](https://github.com/juantoniolloretegea/SVperitus-dataset/blob/main/agentes/ciberseguridad-inteligente/SUPERVISION-Y-AUDITORIA-DE-SISTEMAS.md#expediente-y-trazabilidad). Equivalente inglés: *evidence provenance*.

### Procedimientos de obtención de información {#procedimientos}

El procedimiento Pasivo (P1) utiliza biblioteca y evidencias previamente admitidas, sin navegación ni herramientas de Internet. El transporte mediante una interfaz de programación de aplicaciones (API) sólo se permite si está autorizado. El procedimiento Activo (P2) realiza una investigación específica bajo la autorización del experto competente y mediante el recorrido controlado.

**Distinción:** no son los modos del modelo. Una actuación en modo Actuación o activo puede utilizar una biblioteca pasiva; el modo no concede navegación. Volver de una investigación tampoco incorpora automáticamente sus hallazgos al conocimiento admitido. La definición común se conserva en [Biblioteca y procedimientos](https://github.com/juantoniolloretegea/SV-motor/blob/main/laboratorio/ensayo-ia-y-observabilidad/biblioteca-y-procedimientos.md#procedimientos-de-obtención-de-información).

**Para continuar la lectura:** [Dinámica forense](#dinamica-forense) · [Protocolo acelerado](#protocolo-acelerado).

### Producción {#produccion}

Estado de uso que requiere recibir las condiciones técnicas, científicas, organizativas y de autorización aplicables a la instalación y a la operación. No se obtiene cambiando una etiqueta de presentación.

**En el SV:** la protección del núcleo, la biblioteca y las relaciones constituidas, la trazabilidad y el recorrido determinista exigible conservan sus contratos. Una prueba parcial o una figura visible no acreditan el conjunto. Véase [Facultades, autorización y producción](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/autoridad.html).

**Para continuar la lectura:** [Autorización de uso](https://documentos-sv.itvia.online/enciclopedia/ia.html#autorizacion) · [Seudo-producción](https://documentos-sv.itvia.online/enciclopedia/ia.html#seudoproduccion). Comparar las condiciones de uso exigidas con las excepciones declaradas del ensayo. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Protocolo de Emergencia o Acelerado {#protocolo-acelerado}

Variante autorizada de la investigación que permite al experto competente modificar plazos y límites configurables previamente aprobados, con justificación, vigencia y registro de los valores anteriores y nuevos.

**Distinción:** no suspende aislamiento, autorización, integridad ni protección del núcleo. Reducir una ventana de cuarentena no sustituye las comprobaciones necesarias. La [definición común y sus fuentes](https://github.com/juantoniolloretegea/SV-motor/blob/main/laboratorio/ensayo-ia-y-observabilidad/biblioteca-y-procedimientos.md#protocolos-ordinario-y-acelerado) conservan los requisitos; un ejemplo con tiempo lógico no acredita una espera física real.

**Para continuar la lectura:** [Procedimientos de información](#procedimientos) · [Evidencia de evaluación](#evidencia).

### Recomendación de un modelo {#recomendacion}

Conclusión fundada en resultados comparables y en un criterio declarado, limitada a su finalidad y condiciones. Debe explicar las reservas y, cuando corresponda, la imposibilidad de identificar una recomendación inequívoca.

**Distinción:** no sustituye la selección responsable de una institución ni la autorización de una operación. Las mediciones ausentes no se reemplazan por cero. Véase [Selección, clasificación e independencia](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/comparacion.html).

**Para continuar la lectura:** [Clasificación comparativa de modelos](https://documentos-sv.itvia.online/enciclopedia/ia.html#clasificacion) · [Autorización de uso](https://documentos-sv.itvia.online/enciclopedia/ia.html#autorizacion). Examinar la conclusión comparativa y la decisión institucional que sigue siendo necesaria. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Ruta crítica del SV · Rutas críticas {#ruta-critica}

Recorrido de conocimiento cuyas dependencias y elementos obligatorios han sido establecidos por la autoridad competente del dominio para una finalidad delimitada. Relaciona los parámetros con el conocimiento requerido, los Universos y sus fuentes. La criticidad se justifica por la consecuencia de omitir un elemento necesario o incumplir una dependencia; no se atribuye por el aspecto del diagrama ni por una preferencia del modelo.

**Distinción:** la ruta requerida y el recorrido efectivamente realizado son objetos diferentes. Una representación gráfica no demuestra que se hayan leído los documentos ni respetado sus dependencias. Para comprobarlo se necesitan las ediciones, los pasajes y las evidencias de acceso o entrega que correspondan. Tampoco debe confundirse con la ruta de mayor duración de la planificación temporal: en el SV la obligación procede de la constitución del dominio y de la finalidad declarada.

**Ejemplo delimitado:** si el dominio establece que A, B y C son necesarios y que B requiere A y C requiere B, el recorrido admisible es A → B → C. Omitir B o adelantar C incumple esas condiciones. Otras relaciones pueden permitir varios recorridos; su admisibilidad debe justificarse con las reglas que efectivamente se hayan constituido.

**Alcance:** una ruta todavía no constituida permanece pendiente de constitución; no se le asigna por ese motivo un valor de la terna. Relacionar procesos observados para estudiar una anomalía tampoco convierte automáticamente su secuencia en una ruta crítica ni acredita una amenaza.

**Fuente competente:** [Dominios y universos · Parámetros de conocimiento y rutas críticas](https://documentos-sv.itvia.online/dominios/universos/parametros-rutas.html). Este capítulo desarrolla la distinción entre conocimiento, decisión singular y propuesta de valoración, así como las condiciones de constitución y comprobación.

**Para continuar la lectura:** [Biblioteca documental de dominio](#biblioteca) · [Dominio](#dominio) · [Universo del SV](#universo) · [Explorar relaciones y recorridos](recorridos.md#del-conocimiento-al-agente).

### Selección del defensor {#seleccion-defensor}

Procedimiento específico para determinar el modelo que actuará como referencia defensora en una convocatoria posterior, con identidades, condiciones comparables y acta de sucesión.

**Distinción:** no equivale a ganar el torneo ni a una autorización institucional de producción. En la selección prevista en HCC1 se invierten los perfiles: el defensor vigente actúa como atacante frente a cada aspirante, que actúa como defensor. La falta de resolución mantiene provisionalmente al defensor vigente; no se inventa un vencedor ni se enfrenta un modelo consigo mismo. Las [reglas comunes](https://sv.itvia.online/benchmark?convocatoria=eet-cyb16-practica-20261027&recurso=practica-reglas-enfrentamientos) identifican los criterios recibidos y los pendientes.

**Para continuar la lectura:** [Torneo](#torneo) · [Evaluación individual](#evaluacion-individual).

### Seudo-producción {#seudoproduccion}

Estado de ensayo u observabilidad en laboratorio de una configuración de uso del SV. Puede presentar externamente la interacción con agentes sin acreditar las condiciones de producción.

El protocolo puede permitir Internet, prescindir de una biblioteca cerrada constituida y ofrecer respuestas sin un recorrido determinista acreditado. Estas excepciones se declaran antes de la consulta y acompañan los resultados. **El aislamiento de la IA y la protección del núcleo permanecen obligatorios.**

**Distinción:** es un estado de funcionamiento, no uno de los tres modos del modelo ni una autorización abreviada. Véase [Estado de seudo-producción](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/autoridad.html).

**Para continuar la lectura:** [Producción](https://documentos-sv.itvia.online/enciclopedia/ia.html#produccion) · [Aislamiento de la IA](https://documentos-sv.itvia.online/enciclopedia/ia.html#aislamiento). Distinguir los requisitos no acreditados de las protecciones que permanecen obligatorias. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Sesión de uso {#sesion}

Contexto identificado de acceso y actividad bajo una autorización. Debe relacionar persona, modalidad, dominio, nodo, modelo, periodo y límites pertinentes.

**Distinción:** la sesión de identificación no prueba una consulta al modelo. Enviar una invitación tampoco demuestra uso efectivo. Los accesos ordinario e invitado mantienen autorizaciones separadas, sin cambio automático al agotar una cuota. Véase [Acceso ordinario y acceso invitado](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/autoridad.html).

**Para continuar la lectura:** [Autorización de uso](https://documentos-sv.itvia.online/enciclopedia/ia.html#autorizacion) · [Consulta al modelo](https://documentos-sv.itvia.online/enciclopedia/ia.html#consulta). Relacionar las condiciones concedidas con la actividad efectivamente realizada. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Token · Unidad de procesamiento del modelo {#token}

Unidad empleada por un modelo o servicio para representar o contabilizar parte de su entrada o salida. Su delimitación depende del sistema utilizado; no equivale de forma fija a una palabra ni a un carácter.

**Límite:** los tokens de proveedores diferentes no son unidades lingüísticas idénticas. Tampoco se convierten automáticamente en tiempo, consultas, créditos o moneda. La contabilidad exige fuente, tarifa, categorías y periodo identificados. Véase [Comparación y lectura de resultados](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/comparacion.html).

**Para continuar la lectura:** [Consulta al modelo](https://documentos-sv.itvia.online/enciclopedia/ia.html#consulta) · [Evidencia de evaluación](https://documentos-sv.itvia.online/enciclopedia/ia.html#evidencia). Situar el recuento dentro de una actividad y una fuente identificadas. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

### Torneo de ciberseguridad {#torneo}

Conjunto de enfrentamientos identificados, con objetivos, condiciones comparables, registros por participante y una clasificación propia del desenlace. Se distingue de la evaluación individual de aptitud y de la selección del siguiente defensor.

**En HCC1:** la participación puede ser provisional, pero un título requiere aptitud individual completa. Alcanzar el plazo sin vencedor produce U cuando el encuentro ha sido válido conforme a su contrato; una incidencia del transporte o del observador se conserva aparte. Un encuentro pendiente no recibe U. Véase [Evaluación individual, torneo y selección del defensor](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/comparacion.html#evaluación-individual-torneo-y-selección-del-defensor).

**Para continuar la lectura:** [Perfil atacante y Perfil defensor](#perfiles-enfrentamiento) · [Selección del defensor](#seleccion-defensor).

### Universo del SV {#universo}

Unidad constituida para una operación delimitada dentro de un dominio, con finalidad, fuentes, relaciones, exclusiones y resultado previsto según su marco específico. En el marco de Inmunología es unidad de evaluación y autorización de la operación clínica definida.

**Distinción:** no es una carpeta temática ni se define trasladando automáticamente condiciones de otro dominio. La entrada remite a la definición documental recibida y no introduce una formulación matemática nueva. Véase [Dominio y Universo](https://documentos-sv.itvia.online/dominios/universos/conceptos.html#dominio-y-universo).

**Para continuar la lectura:** [Dominio](https://documentos-sv.itvia.online/enciclopedia/ia.html#dominio) · [Agente Especializado del SV](https://documentos-sv.itvia.online/enciclopedia/ia.html#agente). Relacionar una operación delimitada con el dominio y el alcance del agente. [Explorar otros recorridos](https://documentos-sv.itvia.online/enciclopedia/recorridos.html).

## Publicaciones

Los enlaces se abren en una pestaña nueva. Las referencias externas aportan contexto; no certifican el SV ni sustituyen las reglas de sus exámenes. Los DOI sólo se incorporan cuando están identificados en la publicación correspondiente.

| Ref. | Publicación y enlace | Identificación y relación |
| --- | --- | --- |
| IA-01 | [Validación, autorización y puesta en Producción de modelos de Inteligencia Artificial](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/index.html) | Edición consultada el 25/10/2026. Sin DOI identificado. Evaluación, modos, predominancias y condiciones de uso. |
| IA-02 | [Dominios y universos del Sistema Vectorial SV - Definiciones y parámetros · V.03](https://documentos-sv.itvia.online/dominios/universos/index.html) | Sin DOI identificado. Constitución de dominios, Universos y alcance de agentes. |
| IA-03 | [Reglas, usos y descripciones documentales de documentos para el conocimiento de la IA · V.08](https://documentos-sv.itvia.online/documentacion/reglas-usos-descripciones-documentales/index.html) | Sin DOI identificado. Fuentes, representaciones, permisos y entrega documental. |
| IA-04 | [Artificial Intelligence Risk Management Framework (AI RMF 1.0)](https://doi.org/10.6028/NIST.AI.100-1) | NIST AI 100-1, 2023. DOI: 10.6028/NIST.AI.100-1. Marco voluntario de gestión de riesgos; referencia contextual para responsabilidades y evaluación, sin equivalencia con una certificación. |
| IA-05 | [Anteproyectos y memorias descriptivas del Sistema Vectorial SV](https://documentos-sv.itvia.online/anteproyectos-memorias-descriptivas/index.html) | Primera edición, 03/11/2026. Sin DOI asignado. Necesidades, alternativas y condiciones de desarrollo; no acredita capacidades por su publicación. |

## Casos de uso o ejemplos específicos

### Dos funciones principales en una misma institución

En un hospital, una vinculación puede reservar el consejo inmunológico a un modelo y la protección técnica a otro. Ambos pueden desempeñar funciones principales delimitadas. Compartir la institución no convierte la aptitud clínica en aptitud de ciberseguridad, ni permite intercambiar documentos o permisos entre consultas. Intervienen [dominio](#dominio), [predominancia](#predominancia) y [autorización](#autorizacion).

### Comparar sin modificar la clasificación

Una persona fija un modelo como referencia y compara otros con él. La interfaz puede disponerlos en columnas o en filas sucesivas, pero conserva los puestos, categorías, edición y criterio de la evaluación. Si no existe evaluación de un uso determinado, la declaración de predominancia no proporciona el resultado que falta. Intervienen [clasificación](#clasificacion), [evaluación](#evaluacion) y [evidencia](#evidencia).

### Distinguir demostración, sesión y consulta

Una cuenta invitada accede a una página de preparación. La identificación y la carga del visor quedan comprobadas, pero todavía no se ha enviado una consulta. Si se habilita un ensayo de seudo-producción, sus excepciones documentales y sus límites deben explicarse antes del uso. La IA continúa sin autoridad sobre el núcleo. Este ejemplo no activa un modelo ni acredita un consejo profesional.

### Interpretar un consumo incompleto

Una respuesta tiene un recuento conocido de tokens, pero su cargo final aún no está confirmado. El registro conserva ambas circunstancias; no atribuye coste cero ni convierte tokens en euros sin tarifa y alcance documentados. La autorización de una consulta y su conciliación económica son comprobaciones diferentes.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).


