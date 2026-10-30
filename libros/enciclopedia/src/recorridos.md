# Explorar relaciones y recorridos

No necesita leer un volumen completo ni seguir un orden único. Elija una pregunta, despliegue sus relaciones y continúe por el concepto que necesite. Cada término conserva su definición, sus distinciones y sus fuentes. Las propuestas son remisiones editoriales explicadas; no dependen de un perfil personal ni constituyen recomendaciones de modelos de IA.

- [Conocimiento y agente](#del-conocimiento-al-agente)
- [Escritura y significado](#escritura-y-significado)
- [Evaluación y autorización](#evaluar-y-autorizar)
- [Protección del núcleo](#proteccion-del-nucleo)
- [Uso y evidencia](#uso-y-evidencia)

Los diagramas representan **relaciones para la lectura**. Sus conexiones no declaran un orden obligatorio de ejecución, una habilitación operativa ni una nueva relación matemática del SV. Puede recorrerlos en ambos sentidos y regresar mediante el navegador.

## Del conocimiento al agente

¿Cómo se relacionan un ámbito de conocimiento, sus Universos y un Agente Especializado? Despliegue cada concepto para reconocer la relación; siga su enlace cuando necesite la definición completa.

### Dominio

Delimita el ámbito de conocimiento, finalidad y operaciones. [Leer la definición de dominio](ia.html#dominio).

*Relación: comprende operaciones delimitadas.*

### Universo

Su constitución identifica finalidad, fuentes, relaciones y límites. [Leer la definición de Universo](ia.html#universo).

*Relación: contribuye a precisar el alcance.*

### Agente Especializado

Puede reunir dominios completos, subdominios o conjuntos de Universos; su construcción se expresa en la DSL. [Leer la definición de agente](ia.html#agente) y [consultar DSL](lenguaje.html#dsl).

**Para distinguir:** el [modelo de IA](ia.md#modelo) utilizado no es el agente. La [biblioteca de dominio](ia.md#biblioteca) aporta fuentes bajo condiciones identificadas; no es una autorización de consulta.

**En un caso:** [dos funciones principales en una misma institución](ia.md#dos-funciones-principales-en-una-misma-institución). **Fuente del recorrido:** [Dominios y universos · Definiciones y relaciones](https://documentos-sv.itvia.online/dominios/universos/conceptos.html).

## Escritura y significado

¿Por qué un texto admitido no equivale a una operación ejecutada?

### Gramática · forma

Determina las construcciones que pueden escribirse. [Consultar gramática](lenguaje.html#gramatica).

*Relación: se distingue de.*

### Semántica · significado

Precisa el significado de las construcciones y operaciones. [Consultar semántica](lenguaje.html#semantica).

*Relación: debe respetarse en.*

### IR · representación

Conserva objetos, operaciones y relaciones sometidos a reglas de bienformación. [Consultar representación intermedia](lenguaje.html#ir).

**Para continuar:** [archivo SVP](lenguaje.md#archivo-svp), [admisión técnica](lenguaje.md#admision) y [contrato de una operación](lenguaje.md#contrato). La ejecución requiere además condiciones y evidencia propias.

**En un caso:** [interpretar un archivo sin atribuirle una ejecución](lenguaje.md#interpretar-un-archivo-sin-atribuirle-una-ejecución). **Fuente del recorrido:** [Conformidad y diagnósticos](https://documentos-sv.itvia.online/dominios/lenguaje-de-computacion/manual/conformidad-diagnosticos.html).

## Evaluar y autorizar

¿Qué relación existe entre evaluar un modelo, compararlo y asignarle una función?

### Evaluación

Examina capacidades bajo condiciones identificadas. [Consultar evaluación](ia.html#evaluacion).

*Relación: fundamenta, con un criterio declarado.*

### Clasificación

Ordena resultados comparables sin ampliar su alcance. [Consultar clasificación](ia.html#clasificacion).

*Relación: no sustituye.*

### Autorización

La institución delimita el uso permitido y sus condiciones. [Consultar autorización](ia.html#autorizacion).

### Distinguir evaluación individual, torneo y selección del defensor

La [evaluación individual](ia.md#evaluacion-individual) conserva la aptitud del candidato. El [torneo de ciberseguridad](ia.md#torneo) conserva el desenlace entre participantes y una clasificación propia. La [selección del defensor](ia.md#seleccion-defensor) determina, cuando se resuelve, la referencia de una convocatoria posterior. Ninguno de estos resultados sustituye la autorización institucional de uso.

En el Hackathon Combinado de Ciberseguridad · 1.ª edición. España (HCC1, España), la participación provisional no concede un título; la aptitud individual completa sigue siendo necesaria. Las reglas particulares se consultan en la convocatoria y no se trasladan retrospectivamente a otros exámenes.

La [dinámica forense](ia.md#dinamica-forense), los [procedimientos de información](ia.md#procedimientos) y el [protocolo acelerado](ia.md#protocolo-acelerado) explican cómo se dispone del conocimiento. Son relaciones diferentes del modo del modelo y de la función ofensiva o defensiva.

### Comparar tres conceptos próximos: modo, predominancia y estado

- **[Modo predominante](ia.html#modo)**: Objetivo principal de un uso identificado del modelo.

- **[Predominancia en un dominio](ia.html#predominancia)**: Función principal asignada en un ámbito y uso delimitados; no equivale a un puesto de clasificación.

- **[Seudo-producción](ia.html#seudoproduccion)**: Estado de ensayo con excepciones expresas; conserva el aislamiento y la protección del núcleo.

**En un caso:** [comparar sin modificar la clasificación](ia.md#comparar-sin-modificar-la-clasificación). **Fuente del recorrido:** [Comparación y lectura de resultados](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/comparacion.html).

## Protección del núcleo {#proteccion-del-nucleo}

¿Qué impide que una aportación de IA se convierta en una orden dirigida al SV?

[Modelo de IA](ia.html#modelo) · sus aportaciones son datos no fiables.

### Tubería y admisión controladas

Se examinan los contratos y condiciones de los datos recibidos. La recepción no concede facultades de actuación. [Tubería de IA](lenguaje.html#tuberia) · [Admisión técnica](lenguaje.html#admision).

**Sin acceso directo ni autoridad de modificación**
Esta protección permanece en todos los nodos y también en seudo-producción.

[Núcleo del Lenguaje SV](lenguaje.html#nucleo) · sus contratos e invariantes no pueden ser alterados por el modelo.

**Para continuar:** [aislamiento](ia.md#aislamiento), [invariante](lenguaje.md#invariante) y [nodo](ia.md#nodo). El diagrama explica una obligación arquitectónica; no acredita por sí solo su integración material.

**En un caso:** [rechazar una instrucción ajena al contrato](lenguaje.md#rechazar-una-instrucción-ajena-al-contrato). **Fuente del recorrido:** [Agentes Especializados y frontera](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/autoridad.html#agentes-especializados-y-frontera).

## Uso y evidencia

¿Qué se ha utilizado realmente y qué permiten afirmar los registros?

### Seguir una consulta: autorización, sesión, inferencia y evidencia

- [Autorización](ia.html#autorizacion): determina condiciones y límites.

- [Sesión](ia.html#sesion): identifica el contexto de acceso y actividad.

- [Consulta](ia.html#consulta) e [inferencia](ia.html#inferencia): distinguen la solicitud y la operación del modelo.

- [Evidencia](ia.html#evidencia) y [trazabilidad](lenguaje.html#trazabilidad): fundamentan y permiten reconstruir lo que se declara comprobado.

Acceder a una página no demuestra que se haya enviado una consulta. Un recuento de [tokens](ia.html#token) tampoco acredita un coste monetario definitivo.

**En dos casos:** [distinguir demostración, sesión y consulta](ia.md#distinguir-demostración-sesión-y-consulta) e [interpretar un consumo incompleto](ia.md#interpretar-un-consumo-incompleto). **Fuentes del recorrido:** [Facultades, autorización y producción](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/autoridad.html) y [Observabilidad y medidas](https://documentos-sv.itvia.online/dominios/lenguaje-de-computacion/manual/observabilidad.html).

## Elegir otra continuación

Puede regresar al [mapa de preguntas](#explorar-relaciones-y-recorridos), buscar un término en toda la enciclopedia o consultar los índices temáticos del [volumen I](lenguaje.md#consulta-temática) y del [volumen II](ia.md#consulta-temática). Cada entrada propone dos continuaciones y explica su relación. Las publicaciones de ambos volúmenes permiten profundizar en las fuentes.

El [volumen III](fisica-quimica-matematica.md) continúa anunciado. No se le atribuyen relaciones científicas, definiciones ni ejemplos pendientes de elaboración y revisión.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
