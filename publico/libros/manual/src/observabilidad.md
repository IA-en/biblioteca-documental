# Observabilidad y medidas

La observabilidad permite relacionar una actuación con sus tiempos, resultados y recursos medidos. Su utilidad depende de identificar qué componente produce cada dato, en qué intervalo se obtiene y qué parte del recorrido cubre.

## Trazas, recursos y consumo

| Registro | Qué describe | Límite de interpretación |
| --- | --- | --- |
| Trazas de operaciones | Relación entre petición, acceso documental, transporte y respuesta en los puntos instrumentados. | Una traza no demuestra por sí sola que el contenido sea correcto. |
| Mediciones de recursos | Memoria, actividad del proceso y conexiones observables durante un intervalo. | El muestreo puede omitir cambios entre observaciones; la ausencia de una medida no equivale a consumo cero. |
| Registros de uso | Tokens y demás datos de consumo comunicados por el servicio, con su procedencia. | Las categorías pueden solaparse o tener definiciones distintas entre proveedores; no se suman sin comprobar su significado. |

Los tres registros se complementan. Para interpretar un resultado se conservan la identidad de la actuación, la versión del componente, las unidades, el intervalo y las incidencias. Una interrupción, una medida parcial o una pérdida de registro deben quedar visibles.

## Instrumentación con OpenTelemetry Rust

[OpenTelemetry Rust](https://github.com/open-telemetry/opentelemetry-rust) proporciona la API y el SDK utilizados en los componentes instrumentados. La [aplicación de conversación nativa](https://github.com/juantoniolloretegea/SV-motor/blob/0d01e72302e9006eb747c4a1fe7da8c7a4822156/laboratorio/ensayo-ia-y-observabilidad/conversacion-nativa/src/telemetry.rs) conserva sus trazas mediante un exportador local acotado. La [documentación de OpenTelemetry para Rust](https://opentelemetry.io/docs/languages/rust/) explica sus interfaces.

La instrumentación relaciona operaciones mediante identificadores de traza, tiempos y resultados. Pertenece a los componentes asociados que la incorporan; no constituye una dependencia del núcleo del lenguaje ni se activa automáticamente en toda instalación. Los destinos de conservación o exportación forman parte de la configuración y de sus permisos.

## Alcance de la observación

La cobertura depende de los componentes y puntos de medida activos. En una API externa, el SV observa su propio recorrido y la información que devuelve el proveedor. Esas medidas no permiten inspeccionar el razonamiento interno del modelo ni acreditar una observación íntegra de su infraestructura.

El [Explorador Tensorial](explorador-tensorial-sv.md) identifica recursos y capacidades. El [Selector](selector-arbitro-director.md) utiliza la información pertinente para elegir el destino. Las medidas de ejecución permiten contrastar después la elección con el dispositivo realmente empleado. Descubrir un dispositivo y medir una operación ejecutada en él son comprobaciones diferentes.

## Lectura de los resultados

Los tiempos deben indicar su origen y el tramo medido: preparación, transferencia, cálculo o recorrido completo. La comparación de rendimientos requiere condiciones equivalentes y la misma definición de las medidas. El capítulo de [hardware](hardware-aceleracion-tensorial.md) concreta estos límites en las realizaciones disponibles.

Las trazas y los registros no cambian el significado de los resultados del SV. Una incidencia técnica no se convierte en un valor de la terna. La corrección semántica se contrasta mediante la especificación y las pruebas de [conformidad](conformidad-diagnosticos.md); la reproducibilidad de las comprobaciones se trata en [herramientas de desarrollo](herramientas-desarrollo-comprobacion.md).

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
