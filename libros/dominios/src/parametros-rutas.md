# Parámetros, rutas y evidencia

## Una unidad de significado; funciones diferentes

Un parámetro es una unidad delimitada de significado. La analogía con un átomo ayuda a comprender su separación respecto de otras unidades, pero su atomicidad debe justificarse por definición, función y alcance. Compartir un nombre o una forma de representación no convierte dos objetos en la misma cosa.

El **parámetro de conocimiento** conserva un concepto o una cápsula de información general dentro de un Universo. El **parámetro singular de decisión** formula una cuestión que recibe una valoración concreta, 0, 1 o U, conforme a sus condiciones y evidencia. El conocimiento general no recibe automáticamente el valor de un caso.

Existe además una propuesta distinta: valorar con la terna la **pertenencia de un parámetro de conocimiento a una ruta**. El valor describiría esa relación concreta. No sería una calificación de verdad del conocimiento ni el resultado del consejo profesional. Se trata de un concepto de diseño cuyo contrato de evaluación debe desarrollarse antes de su ejecución.

| Objeto | Pregunta que permite responder | Lo que no debe inferirse |
| --- | --- | --- |
| Unidad de conocimiento | ¿Qué concepto está definido, con qué fuentes y límites? | Que tiene un resultado clínico o técnico propio. |
| Pertenencia a una ruta | ¿Este parámetro pertenece a esta ruta, en estas condiciones? | Que su contenido sea verdadero o que el caso esté resuelto. |
| Cuestión singular de decisión | ¿Qué resultado admite esta cuestión del caso conforme a su contrato? | Que ese resultado sea aplicable a otros casos o rutas. |

Las valoraciones necesitan su pregunta completa, identidad, versión y contexto. Mostrar sólo «0», «1» o «U» impediría saber qué se está afirmando.

## Ejemplo sin contenido clínico ni de ciberseguridad

La unidad K explica cómo interpretar la procedencia de un dato. La ruta R exige comprobar esa procedencia antes de concluir. Se propone evaluar «K pertenece a R bajo las condiciones C» con la siguiente convención ilustrativa: 0, pertenencia conforme; 1, pertenencia no conforme; U, información insuficiente para resolverla. Esa correspondencia necesitaría aprobación en la definición de la ruta; no se convierte aquí en una regla universal del SV.

Supóngase que la pertenencia de K a R está acreditada, pero el dato del caso carece de evidencia suficiente de procedencia. La pertenencia puede recibir 0 y la cuestión singular «¿queda acreditada la procedencia del dato?» permanecer en U. No hay contradicción: son preguntas distintas.

![Relación entre conocimiento, pertenencia y decisión](imagenes/parametros-rutas.svg)

El esquema muestra dependencias conceptuales, no una ruta profesional constituida ni una función ya disponible. Las flechas indican aportación de fundamento; no copian valores.

## Pertenencia no equivale a posibilidad de omisión

Pertenecer a una ruta, estar activado en un contexto y ser obligatorio son propiedades diferentes. La definición competente debe establecer sus relaciones. Un parámetro ajeno a una ruta puede ser necesario en otra que también resulte aplicable.

Si permanece indeterminada una dependencia obligatoria, no se permite omitirla por conveniencia. Se conserva el bloqueo, la abstención o la revisión que prescriba la regla. Tampoco se considera prescindible un elemento cuya criticidad todavía no se haya determinado.

Una ruta en estudio se identifica como **no definida** o **pendiente de constitución**. Ese estado no es el valor U de una evaluación concreta: no debe aparentarse que se ha ejecutado una regla que aún no existe.

### Ejemplo: cinco elementos y una ruta crítica

Sean A, B, C, D y E cinco elementos de conocimiento delimitados. Cada uno puede representar un Universo completo o una parte identificada de éste; la leyenda de la ruta debe declarar el alcance de cada elemento y sus documentos y parámetros asociados.

En este ejemplo se establecen dos reglas: los cinco elementos son obligatorios y cada uno requiere el cumplimiento del anterior. La ruta crítica es **A → B → C → D → E**. Es la única secuencia que satisface ambas reglas; su unicidad procede de estas condiciones expresas, no de una propiedad general de cualquier conjunto de cinco elementos.

![Ruta crítica declarada, variaciones y recorrido registrado](imagenes/rutas-criticas.svg)

| Recorrido propuesto | Comprobación frente a las reglas del ejemplo |
|---|---|
| A → B → C → D → E | Conserva los cinco elementos y respeta todas las dependencias. |
| A → B → D → E | Omite C, que es obligatorio. |
| A → C → B → D → E | Contiene todos los elementos, pero sitúa C antes de su requisito B. |
| A → B → C → E → D | Adelanta E respecto de su requisito D. |

Cinco elementos distintos admiten 5! = 120 permutaciones si no se fija ninguna posición. Si A debe ser el inicio y E el final, quedan 3! = 6 órdenes de los tres elementos intermedios. Esas posibilidades combinatorias no son autorizaciones: las dependencias del ejemplo sólo admiten una. Los recorridos que omiten elementos son variaciones adicionales y también deben confrontarse con las obligaciones declaradas.

**Ruta exigida y recorrido acreditado son objetos distintos.** Si únicamente constan cumplidos A y B, dibujar la ruta completa no permite dar por cumplido C. El acceso al siguiente paso dependiente debe conservar la condición pendiente y su evidencia. Esto tampoco impide consultar otras fuentes ya autorizadas que no dependan de ese paso.

Al seleccionar un elemento, la visualización deberá mostrar su Universo, los parámetros implicados, la edición documental, las páginas o pasajes utilizados, las condiciones de acceso y la evidencia de la actuación. Una figura no sustituye esos registros. Las flechas expresan dependencias de conocimiento; no duraciones ni costes. Los estados de seguimiento de este ejemplo no son valores de la terna decisional.

El diseño no atribuye todavía consecuencias profesionales concretas a una omisión ni establece el algoritmo que constituirá las rutas. Esa definición requiere reglas, fuentes y validación propias del dominio. La representación permite explicar y comprobar una ruta una vez constituida; no la inventa.


### Analogía: la coordinación de una escala aeroportuaria

En la gestión aeroportuaria, la preparación de una salida reúne actividades dependientes, algunas simultáneas. EUROCONTROL describe el seguimiento de la escala y la preparación de la salida mediante hitos que permiten actualizar previsiones y avisos. Esta referencia aporta una analogía de coordinación y seguimiento; no prescribe las rutas del SV. [EUROCONTROL: especificación A-CDM, edición 1.0](https://www.eurocontrol.int/publication/eurocontrol-specification-airport-collaborative-decision-making-cdm).

Supóngase la siguiente planificación simplificada. Las actividades y sus duraciones son **hipotéticas**; agrupan operaciones únicamente para explicar el diagrama y no representan un procedimiento de aeropuerto.

| Elemento | Bloque del ejemplo | Duración supuesta | Requisito previo |
|---|---|---|---|
| A | Coordinación inicial de la escala | 5 minutos | Inicio |
| B | Preparación de cabina | 12 minutos | A terminado |
| C | Preparación de equipaje | 7 minutos | A terminado |
| D | Comprobación conjunta de ambos bloques | 4 minutos | B y C terminados |
| E | Cierre del proceso considerado | 3 minutos | D terminado |

![Dependencias y ruta crítica temporal en una hipótesis aeroportuaria](imagenes/aeropuerto-dependencias.svg)

B y C pueden desarrollarse simultáneamente. Bajo estas hipótesis, la duración resulta **5 + máximo(12, 7) + 4 + 3 = 24 minutos**. La ruta A → B → D → E fija la terminación y es la única ruta crítica temporal de este ejemplo. La secuencia A → C → D → E suma 19 minutos: C dispone de cinco minutos de margen, pero **continúa siendo obligatoria**. Elegir la secuencia más corta y prescindir de B incumpliría el requisito de D. Una demora de tres minutos en B llevaría la terminación a 27 minutos; si el coste adicional supuesto fuera de 100 unidades monetarias por minuto de demora final, añadiría 300 unidades. Son cifras didácticas, no estimaciones de un aeropuerto.

Microsoft Project representa este tipo de dependencias y distingue las tareas con margen de las que condicionan la fecha de terminación. Ese significado temporal explica la analogía y debe conservarse al citar la aplicación. [Microsoft: administración de la ruta crítica](https://support.microsoft.com/es-es/project/manage-your-project-s-critical-path).

En el SV se conserva la idea de **dependencias explícitas, condiciones de avance y seguimiento comprobable**, mientras que la criticidad se fundamenta en el conocimiento requerido y las consecuencias de omitirlo. Un parámetro no se vuelve prescindible porque su consulta sea breve ni porque ocupe pocos documentos. Del mismo modo, una dependencia no desaparece por pertenecer a un Universo compartido. El cálculo temporal anterior no es el algoritmo de rutas del SV; permite comprender gráficamente por qué cada obligación debe estar definida y acreditada.


### Analogía: un reparto con nueve destinos

Un repartidor debe atender nueve destinos. Omitir uno incumple el encargo aunque reduzca el tiempo o el combustible. Visitar los nueve, por otra parte, no determina automáticamente el orden: hacen falta distancias, tiempos de viaje, consumo, punto de partida y llegada, y las restricciones que correspondan. Esta clase de problema se estudia en planificación de recorridos; una formulación básica es el problema del viajante, documentado en [Google OR-Tools](https://developers.google.com/optimization/routing/tsp).

![Cobertura de nueve destinos y criterios necesarios para organizar el recorrido](imagenes/reparto-nueve-destinos.svg)

La secuencia **1 → 4 → 2 → 8 → 5 → 7 → 3 → 9 → 6** del diagrama sólo ilustra cobertura completa. No se afirma que ahorre más combustible ni tiempo: no se han proporcionado datos que permitan calcularlo. Ambos criterios pueden favorecer recorridos diferentes y necesitan una regla de comparación declarada. Con nueve destinos distintos hay 9! = 362.880 órdenes posibles antes de imponer restricciones o identificar recorridos equivalentes.

El ejemplo explica por qué la planificación no debe confiarse a una secuencia aparentemente razonable. En el SV, una propuesta debe someterse a comprobaciones de cobertura, dependencias, permisos y evidencia. Una respuesta convincente de un LLM no acredita por sí misma que se haya consumido todo el conocimiento exigido. Se conserva exclusivamente la denominación **ruta crítica** para el concepto del SV; las analogías logísticas no fijan su algoritmo ni convierten el número de destinos en una dimensión celular.


### Matrices, restricciones y aceleración

La investigación operativa ofrece antecedentes útiles. Un problema de transporte puede expresar cantidades mediante una matriz X y costes unitarios mediante otra matriz C; el coste total se escribe como la suma de Cᵢⱼ·Xᵢⱼ, sometida a restricciones de oferta, demanda y capacidad. Su formulación lineal admite métodos como el símplex. Ordenar visitas añade restricciones diferentes: una asignación de cantidades no constituye por sí sola un recorrido que visite todos los destinos. Véanse los ejemplos oficiales de [flujo de coste mínimo](https://developers.google.com/optimization/flow/mincostflow) y [programación lineal](https://developers.google.com/optimization/lp/lp_example).

El objetivo de diseño del SV es llevar las operaciones computables a representaciones vectoriales, matriciales y tensoriales que permitan aprovechar la aceleración disponible, bajo control de Rust. Cada matriz debe declarar qué significan sus filas, columnas, valores y operaciones. **La forma numérica conserva el significado; no lo sustituye.** Las restricciones, autorizaciones y evidencias deben acompañar la representación.

Una representación tensorial puede facilitar cálculos en paralelo; no convierte automáticamente la búsqueda de una ruta en una multiplicación de matrices ni elimina su dificultad combinatoria. La elección del algoritmo, su equivalencia con las reglas del SV y su rendimiento completo requieren comprobación. El rendimiento debe medirse para cada realización y carga de trabajo. Emplear Rust, GPU o tensores no demuestra por sí solo una mejora de velocidad.


## Propiedad y composición

Cada parámetro tiene un único Universo propietario y puede relacionarse con otros Universos mediante referencias identificadas. Una transferencia exige designar al nuevo propietario; no puede dejar el parámetro huérfano. Un Universo constituido conserva parámetros asignados. La compartición no transmite valores de un caso, permisos documentales ni conclusiones.

La propiedad de un documento y la de un parámetro se registran separadamente. La conversión de un PDF en Markdown no cambia por sí sola su propiedad, relaciones o prioridades, ni constituye nuevos parámetros. La fuente, su selección y la correspondencia entre representaciones siguen siendo necesarias.

La dimensión de una célula y la posición de cada parámetro obedecen a los pilares del SV y a la versión admitida. El inventario de un Universo no se divide ni se completa automáticamente para obtener una figura. El mapa de relaciones y el polígono decisional representan objetos diferentes.

Una clasificación como CIE-11 puede identificar el problema de referencia. La correspondencia con parámetros y rutas exige constitución propia; el código de una enfermedad no determina por sí solo un diagnóstico ni un consejo.

### Realización celular de un Universo

El Universo constituido debe disponer de una realización computable mediante células SV. La cadena de diseño relaciona **Universo y parámetros → células constituidas → organización matricial → representación tensorial → operaciones autorizadas**. Cada transformación conserva las identidades y el significado; no convierte esos niveles en objetos semánticamente intercambiables.

La correspondencia entre parámetros y posiciones, las dimensiones y las relaciones celulares deben constituirse expresamente. La presencia de un concepto de conocimiento no autoriza a asignarle automáticamente 0, 1 o U para completar un estado. Su estructura y su eventual valoración conservan contratos diferenciados. Las referencias compartidas tampoco duplican por sí mismas un estado.

![Del Universo a la ejecución tensorial](imagenes/universo-celulas-tensores.svg)

La organización de cálculo preserva cada célula y su vínculo con el frame. Cambiar la disposición de almacenamiento no permite reordenar posiciones, fusionar instancias ni transformar la prioridad documental en orden celular. Esta es la condición para estudiar la aceleración conservando el objeto del SV.

## Del vector al frame y al cálculo por lotes

La célula SV conserva un vector plano, ordenado y posicional. Su representación visual está vinculada al mismo estado mediante el par conceptual **Frame_C = (frmat, frvis)**: componente matemática y componente visual bajo un contrato común. La correspondencia exige la misma instancia, constitución y versión. Puede producirse la imagen cuando se consulte sin mantener permanentemente todos sus píxeles en memoria.

Los parámetros aportan significado a las posiciones. Atomizar conocimiento no genera por sí solo un vector de valores: hacen falta una constitución y, cuando corresponda, una valoración definida. El vector exacto del SV es un conjunto ordenado de estados ternarios, no un espacio vectorial que admita cualquier operación algebraica.

Como concepto de diseño, una representación tensorial computacional puede organizar varias instancias compatibles para operar sobre ellas conjuntamente. Un eje puede identificar la instancia y otro la posición. Cada instancia conserva su identidad y su frame; reunirlas para calcular no las fusiona en una nueva célula ni cambia el significado de sus valores.

### Ejemplo: los 19.683 estados de SV(9,3)

SV(9,3) admite **3⁹ = 19.683 vectores de estado posibles**, cada uno de nueve posiciones. Una enumeración completa podría ocupar una tabla de 19.683 filas y nueve columnas. La tabla representa el espacio de estados; no convierte la célula en una matriz de 3 × 3 ni cambia su dimensión. Tampoco es necesario materializar todos los estados para evaluar uno. Para dimensiones mayores, el crecimiento de 3ⁿ exige justificar el almacenamiento y los recursos.

Un ejemplo de representación tensorial auxiliar consiste en separar tres indicadores: presencia de 0, presencia de 1 y presencia de U. Para cada instancia y posición, exactamente uno de los tres indicadores vale uno. **Ese uno es una marca de presencia, no el estado semántico 1 del SV.**

En un lote de m células compatibles de n posiciones, esos indicadores pueden organizarse en tres matrices de m × n. Multiplicar cada matriz por una columna de n unos permite contar, por instancia, N₀, N₁ y Nᵤ. Es una operación matricial con significado explícito: cuenta estados; no multiplica decisiones ni promedia U. Debe conservarse el vector original porque los recuentos no preservan el orden de las posiciones.


Por ejemplo, el estado ordenado (0, 0, U, 1, 0, U, 0, 1, 0) produce N₀ = 5, N₁ = 2 y Nᵤ = 2. La suma es nueve. El cálculo conserva U como categoría y no como cero, valor medio o ausencia. Otro orden con esos mismos recuentos seguiría siendo otro vector: por eso deben conservarse las posiciones y su frame.

La terminología general de vectores, matrices, tensores y producto matricial se apoya en Goodfellow, Bengio y Courville, *Deep Learning* (MIT Press, 2016), [capítulo 2, apartados 2.1 y 2.2](https://www.deeplearningbook.org/contents/linear_algebra.html). El ejemplo de indicadores es una aplicación explicativa propia; esa bibliografía no define ni valida la semántica del SV.

La evaluación posterior aplica exclusivamente la regla constituida. Cualquier otra multiplicación, relación entre matrices o composición de células necesita justificar entradas, operación y significado de la salida. Codificar U mediante un número no autoriza a tratarla como una magnitud ordinaria.

La aceleración con GPU, TPU u otros dispositivos necesita una realización específica y comprobaciones de equivalencia y rendimiento. Rust debe preservar los contratos y controlar esa ejecución. El uso de aceleradores por un LLM no demuestra que ejecute directamente las operaciones del SV: debe comprobarse qué recibe, qué realiza y qué devuelve. El [manual](../lenguaje-de-computacion/manual/parametros-rutas.html) precisa esta distinción.

## Qué debe poder consultar el experto

La visualización prevista debe permitir seleccionar un elemento y seguir sus antecedentes y consecuencias, desde una visión general hasta el pasaje documental exacto. Distinguirá:

1. **Composición:** fuentes, partes seleccionadas, Universos, parámetros y relaciones.
2. **Rutas declaradas:** dependencias, condiciones y obligatoriedad; criticidad sólo cuando esté definida.
3. **Actuación registrada:** qué se suministró, qué consultas quedaron registradas, qué referencias utilizó la respuesta y qué se comprobó después.

El recorrido previsto y el registrado deben poder compararse. Las omisiones permanecen visibles con su causa y tratamiento. Las ayudas explicarán el significado y los límites de cada valor, sin depender exclusivamente de colores.

Microsoft Project ofrece una referencia útil de [selección y resaltado de relaciones](https://support.microsoft.com/es-es/project/highlight-how-tasks-link-to-other-tasks). Su [ruta crítica](https://support.microsoft.com/es-es/project/manage-your-project-s-critical-path) responde a la duración del proyecto. En el SV, la obligatoriedad debe justificarse por las consecuencias de omitir conocimiento, no por la longitud visual o temporal de un recorrido.

Las figuras representan las relaciones definidas en este capítulo. Sus rótulos distinguen los objetos, las valoraciones y las transformaciones; los ejemplos no constituyen reglas profesionales de decisión.

## Trazabilidad y límites de la explicación

Cada actuación necesita conservar documentos, versiones, huellas, fragmentos, autorizaciones, reglas, entradas, salidas y decisiones de revisión. Un documento puede haberse preparado sin haberse enviado; una cita del modelo puede existir sin haberse contrastado. Estas situaciones deben identificarse por separado.

La explicación de una IA no prueba por sí sola qué proceso interno siguió. El sistema debe ofrecer evidencia observable y permitir comprobar el soporte documental de sus afirmaciones. Una modificación o revocación posterior impide los usos nuevos afectados y conserva la posibilidad de reconstruir los anteriores.

Esta trazabilidad permite examinar actuaciones y responsabilidades. No equivale por sí sola a corrección científica, certificación ni exoneración jurídica. El experto debe poder distinguir la insuficiencia documental, la incertidumbre de una cuestión y un fallo técnico.

El encaje de estas necesidades en la ejecución se desarrolla en el [Lenguaje de Computación SV: fundamentos, arquitectura y referencia](../lenguaje-de-computacion/manual/parametros-rutas.html). La definición de rutas y su comprobación siguen siendo requisitos previos a su uso.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
