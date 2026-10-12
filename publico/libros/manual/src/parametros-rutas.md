# Parámetros, recorridos y evidencia: requisitos de integración

**Complemento documental · 12 de octubre de 2026 · Conceptos de diseño y requisitos de integración.**

Este capítulo explica qué debe poder representar y preservar el Lenguaje de Computación SV al relacionarse con Universos, fuentes documentales y valoraciones. No define sintaxis nueva ni acredita que esas funciones estén implementadas. El desarrollo conceptual se consulta en [Dominios y universos](../../universos/parametros-rutas.html).

## Separar identidad, relación y valoración

El parámetro de conocimiento define una unidad de conceptos o datos generales. El parámetro singular de decisión recibe una valoración concreta conforme a su contrato. Se propone además valorar con 0, 1 o U la pertenencia de un parámetro de conocimiento a una ruta determinada.

El Lenguaje deberá conservar la diferencia entre **contenido de conocimiento**, **valoración de pertenencia** y **valoración decisional**. La terna compartida no convierte las dos valoraciones en intercambiables. La relación de pertenencia necesita identificar parámetro, ruta, versiones, condiciones y contexto; no constituye un valor permanente del conocimiento.

Ejemplo: una unidad explica la procedencia de los datos. Puede pertenecer a una ruta de comprobación y, al mismo tiempo, la procedencia del dato de un caso concreto seguir indeterminada. Un resultado favorable de pertenencia no resuelve esa segunda cuestión. La leyenda exacta de 0, 1 y U debe acompañar a cada proposición; no se deduce del nombre abreviado de un campo.

![Conocimiento, pertenencia y valoración del caso](imagenes/parametros-rutas.svg)

El diagrama representa distinciones necesarias. No es una célula, una ruta profesional constituida ni una prueba ejecutada.

## Constitución y representación celular

La atomicidad se justifica antes de asignar una representación matricial. Las consecuencias candidatas permiten comprobar la separación de unidades; las consecuencias operacionales y rutas se constituyen después de los parámetros y su propiedad. El orden de esta comprobación se explica en la [metodología de los Universos](../../universos/metodologia.html).

La familia matemática de células, las dimensiones admitidas por una versión y la dimensión fija de una instancia son conceptos distintos. No se añaden posiciones para ajustar un inventario a una figura. U no sustituye una posición sin parámetro, un error de transmisión ni una definición inexistente.

La propuesta de pertenencia deja pendiente su representación técnica concreta. Debe demostrarse si los contratos vigentes permiten conservarla como relación y valoración diferenciadas o si existe una pérdida que requiera una modificación competente. Cualquier modificación de la representación intermedia o de la semántica exige una decisión expresa y versionada de la autoridad competente.

## Dependencias y ejecución

La definición de una ruta debe conservar estructura, dirección, condiciones, obligatoriedad y efecto de sus dependencias. Una secuencia de sucesos no sustituye esa estructura. Pertenencia, activación y obligatoriedad deben poder distinguirse.

La IA no constituye la ruta ni modifica sus reglas durante una actuación. El ejecutor verifica lo autorizado y registra su aplicación. La ausencia o indeterminación de una dependencia obligatoria no permite omitirla; se aplica el bloqueo, abstención o revisión previstos.

Una ruta pendiente de definición debe aparecer con ese estado documental. No se devuelve una terna ficticia para aparentar una evaluación. La prioridad de documentos o Universos tampoco determina por sí sola criticidad, posición celular o resultado.

### Ejemplo de comprobación de dependencias

Considérese la ruta A → B → C → D → E, con todos sus elementos obligatorios y cada uno dependiente del anterior. Si sólo constan cumplidos A y B, el ejecutor debe exigir la evidencia de C antes de admitir D. La presencia de D y E en una respuesta no acredita el cumplimiento de C.

![Ruta declarada y recorrido registrado](imagenes/rutas-criticas.svg)

La comprobación debe contrastar la regla declarada con las actuaciones registradas y conservar las omisiones detectadas. Los estados de seguimiento no sustituyen la valoración ternaria de una cuestión. El [desarrollo del ejemplo y sus analogías de planificación](../../universos/parametros-rutas.html#ejemplo-cinco-elementos-y-una-ruta-crítica) se encuentra en el libro de Dominios.

## De la fuente al resultado comprobable

La evidencia de una actuación debe enlazar:

1. La fuente y su selección exacta, con versión, huella y representación.
2. El Universo, los parámetros y las relaciones vigentes para esa actuación.
3. La ruta, sus condiciones, las reglas aplicadas y las entradas admitidas.
4. Cada valoración con su pregunta, clase, contexto y fundamento.
5. El contenido efectivamente suministrado, el destinatario y la respuesta recibida.
6. La comprobación de soporte y la decisión posterior del experto.

Preparación, envío, consulta observable, cita y contraste son hechos diferentes. Deben conservarse incluso cuando una etapa falla o no llega a realizarse. La evidencia no certifica procesos cognitivos internos del modelo.

Los nodos 1, 2 y 3 y la frontera de comunicación deben preservar las mismas identidades, alcance autorizado y distinciones semánticas. Una adaptación que no pueda conservarlas debe declarar la incompatibilidad; no omitirlas ni reconstruirlas por inferencia. El acceso por Internet a un servicio no concede permiso de búsqueda documental abierta.

El Calificador de actividades documentales asigna las categorías de actividad mediante reglas deterministas en Rust. La custodia debe permitir reconstrucción por documento, Universo, parámetro y actuación, bajo los permisos correspondientes. Una actualización añade una nueva revisión; no reescribe la evidencia anterior.

## Correspondencia visual

El mapa de composición muestra relaciones entre objetos. El recorrido registrado muestra hechos de una actuación. El frame decisional muestra posiciones y valores de una instancia. Egui deberá presentarlos de manera enlazada, conservando esas diferencias y su correspondencia con las evidencias.

Al seleccionar una posición, el experto debe poder acceder a la pregunta evaluada, su valor, las reglas aplicadas y los documentos o pasajes que lo sustentan. La presentación no debe generar relaciones, ocultar U críticas ni sustituir la evidencia por una explicación plausible.

### Correspondencia entre Universo y ejecución

La representación computable debe identificar qué parámetros ocupan cada posición celular y qué reglas relacionan las células. Su organización en matrices o tensores conserva esas identidades. Un cambio de almacenamiento no autoriza a alterar el orden semántico ni a fusionar instancias.

![Correspondencia entre Universo, células y operaciones](imagenes/universo-celulas-tensores.svg)

La prioridad documental determina precedencia entre fuentes; no determina una posición celular. Una referencia compartida conserva su origen sin duplicar automáticamente el estado. Estas restricciones deben mantenerse en todas las transformaciones de representación.

## Representación tensorial y ejecución acelerada

El contrato de paridad vincula el estado matemático y su representación visual mediante **Frame_C = (frmat, frvis)**. Ambos deben conservar instancia, constitución y revisión. La imagen puede materializarse bajo demanda; una figura de un estado anterior no representa el estado vigente.

Una célula exacta es un vector plano de estados de {0, 1, U}, ordenado y posicional. Su fundamento es un producto cartesiano finito, no un espacio vectorial sobre un cuerpo. Una representación tensorial computacional puede servir para organizar lotes de instancias compatibles. No concede por sí misma operaciones de suma, promedio o composición semántica.

Ejemplo de organización: un eje identifica la instancia celular y otro la posición. Cada elemento debe seguir vinculado a su parámetro y cada instancia a su frame. Agrupar datos para calcular no cambia la dimensión de la célula ni convierte varias células en una sola. La codificación de U debe conservarse exactamente.

### Condiciones de una operación matricial

El [ejemplo de SV(9,3)](../../universos/parametros-rutas.html#ejemplo-los-19683-estados-de-sv93) distingue los 19.683 estados posibles de las nueve posiciones de cada estado y muestra cómo contar 0, 1 y U mediante matrices indicadoras. Su realización debe conservar el vector ordenado, la identidad de cada instancia y el significado de los indicadores. El resultado del recuento no permite reconstruir el orden original.

Cada operación necesita una especificación de entradas, representación, cálculo y significado de salida. Debe comprobarse que su resultado coincide con la operación de referencia, incluidos los rechazos y los casos indeterminados. U conserva su condición semántica y no se convierte en cero ni en un promedio numérico.

Rust puede dirigir cómputo GPU mediante interfaces específicas, como documenta [wgpu](https://wgpu.rs/doc/wgpu/struct.ComputePipeline.html). Este ejemplo acredita una posibilidad técnica, no una selección ni integración en el SV. GPU y TPU requieren soportes y operaciones adecuados a cada dispositivo; su rendimiento no se deduce del formato tensorial.

El diseño exige una realización de referencia, equivalencia de resultados y rechazos, conservación de identidad y versiones, y medición completa de preparación, transferencia, cálculo y recuperación. La [aritmética en coma flotante](https://docs.nvidia.com/cuda/floating-point/index.html) requiere especial atención al orden de las operaciones. La ejecución acelerada no puede alterar estados ternarios, umbrales o decisiones mediante aproximaciones inadvertidas.

Los tensores internos de un LLM son parte de su propio funcionamiento. Un vector del SV escrito en una petición no constituye evidencia de que el modelo haya ejecutado su contrato en GPU o TPU. Deben registrarse la operación concreta del SV, la entrada efectiva del modelo y la comprobación del resultado. El rendimiento y la fidelidad de ese recorrido son cuestiones que deben medirse separadamente.

## Condiciones para declarar una capacidad disponible

Una capacidad debe contar con una definición compatible con los contratos vigentes, una realización en Rust y evidencia de comprobación. Los cambios de significado o de representación formal requieren aprobación expresa y una versión identificada.

Los requisitos de este capítulo exigen comprobar, al menos, la distinción entre valoraciones de pertenencia y decisión; la propiedad única; la correspondencia de las selecciones documentales; las dependencias obligatorias; y la coincidencia entre estado y representación gráfica. Se presentan como condiciones de verificación, no como resultados ya obtenidos.

## Referencias

- [Pilares y restricciones del Lenguaje](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/f10aac725676997adc3840a1bd1a41e1579589ea/docs/calidad/PILARES_Y_RESTRICCIONES_DE_DISENO_DEL_LENGUAJE_DE_COMPUTACION_SV_2026_09_05.md).
- [Célula, imagen y agentes](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/f10aac725676997adc3840a1bd1a41e1579589ea/docs/calidad/tuberias-ia/paridad-imagen-celula-matematica/CELULA_IMAGEN_Y_AGENTES_EN_EL_SV_P1_P3_BIS_2026_09_13_V2.md).
- [Rutas, conocimiento, frame y trazabilidad](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/f10aac725676997adc3840a1bd1a41e1579589ea/docs/calidad/tuberias-ia/frame-significado-humano-trazabilidad-y-fidelidad/ACTA_EVALUACION_Y_RECEPCION_DOCUMENTAL_RUTAS_CONOCIMIENTO_SV_2026_09_14.md).
- [Especificación de necesidades del sistema conjunto](https://github.com/juantoniolloretegea/SV-motor/blob/8d3aeda0bf8b7ba71fdde9af4f973b5b41a21638/laboratorio/sistema-conjunto-lenguaje-computacion-ia-gobernada/NECESIDADES-PARAMETROS-RUTAS-Y-TRAZABILIDAD.md).

La especificación documenta requisitos y una propuesta en evaluación. No sustituye el pliego, la gramática, la representación intermedia ni las recepciones competentes del Lenguaje.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
