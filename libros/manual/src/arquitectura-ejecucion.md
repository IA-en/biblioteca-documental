# Arquitectura y entornos de ejecución

El Lenguaje SV mantiene sus reglas en Rust. Los entornos nativo y WebAssembly ofrecen vías de acceso a las funciones de una distribución; la interfaz utilizada no determina una semántica diferente. El gobierno de una operación y la elección de sus recursos se describen mediante contratos propios del Árbitro - Director, el Selector y el Explorador Tensorial.

## Del archivo SVP a su representación

Un archivo SVP se interpreta conforme a su perfil lingüístico y a la versión de la gramática. El análisis y las comprobaciones producen una representación estructurada o un diagnóstico. La admisión del archivo acredita ese recorrido; la ejecución posterior de sus operaciones depende de las capacidades implementadas y recibidas para la versión correspondiente.

| Componente Rust | Función |
| --- | --- |
| `sv_core` | Análisis del lenguaje, comprobaciones y representación estructurada, con los contratos implementados en esa revisión. |
| `sv_native` | Acceso nativo al comprobador y presentación de sus resultados. |
| `sv_wasm` | Acceso a las funciones del lenguaje expuestas al entorno WebAssembly. |

La [organización de los componentes Rust](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ed93885589015d567905d1c880d8097869310085/rust/Cargo.toml) permite localizar su implementación. El capítulo de [desarrollo y validación del núcleo](desarrollo-validacion-nucleo.md) precisa el alcance de las capacidades y sus comprobaciones.

## Ejecución nativa, navegador y WASI

| Entorno | Función en el Lenguaje SV | Condición de uso |
| --- | --- | --- |
| Nativo | Ejecutar los programas Rust y los comprobadores compilados para el sistema de destino. | Distribución compatible con el sistema operativo, las bibliotecas y los recursos disponibles. |
| Navegador con WebAssembly | Utilizar las funciones Rust expuestas por el adaptador del Playground. | Versión identificada del módulo y de su interfaz; JavaScript transporta entradas y presenta resultados. |
| WebAssembly con WASI | Comprobar la ejecución fuera del navegador y su paridad con el destino nativo. | Entorno compatible con las interfaces requeridas y capacidades concedidas de forma explícita. |

Linux es uno de los sistemas utilizados para compilar y comprobar el lenguaje. El sistema operativo, la arquitectura y las herramientas forman parte de la identificación del entorno; su nombre por sí solo no acredita compatibilidad con todos los destinos.

[WebAssembly](https://webassembly.org/) es un formato de instrucciones que permite distribuir módulos compilados. [WASI](https://wasi.dev/) define interfaces para su relación con el entorno. [Wasmtime](https://docs.wasmtime.dev/) es un entorno de ejecución que puede utilizarse en equipos locales y servidores, como programa autónomo o como biblioteca. Una ejecución nativa no necesita Wasmtime por el hecho de realizarse en un PC.

El Lenguaje SV utiliza WASI y Wasmtime en comprobaciones documentadas del núcleo, incluidas las [pruebas de recepción integrada](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/733202084d21f5bffbd082498a4599bad309fc04/docs/calidad/tuberias-ia/recepcion-integrada-2026-10-19/RESULTADOS.json). Su alcance es distinto del de un motor de inferencia: comprobar el núcleo con WebAssembly no acredita que un modelo de IA pueda ejecutarse en ese entorno.

## Gobierno de la ejecución y recursos

| Componente | Responsabilidad | Resultado esperado |
| --- | --- | --- |
| [Árbitro - Director](arbitro-director.md) | Comprobar las condiciones de la operación, sus permisos, entradas y límites; gobernar su recorrido. | Decisión trazable de admisión, ejecución y recepción, dentro del alcance implementado. |
| [Selector CPU/GPU/TPU/NPU](selector-arbitro-director.md) | Elegir un destino compatible y autorizado según la carga y las medidas disponibles. | Selección fundamentada o ausencia explícita de destino admisible. |
| [Explorador Tensorial](explorador-tensorial-sv.md) | Identificar recursos y capacidades observables para informar al Selector. | Inventario con procedencia, disponibilidad y límites de observación. |
| Adaptador de ejecución | Realizar la operación en el destino elegido y devolver sus resultados y medidas. | Evidencia del dispositivo efectivamente utilizado. |

El Director gobierna la operación; el Selector consulta las capacidades que aporta el Explorador antes de elegir el destino. La disponibilidad de un acelerador no le concede prioridad automática. El capítulo de [hardware de aceleración tensorial](hardware-aceleracion-tensorial.md) presenta las realizaciones comprobadas y sus condiciones.

## Fronteras y observación

La interfaz visual transporta datos y presenta resultados. No modifica las reglas del núcleo, la terna, los permisos ni los dictámenes. Los contratos de frontera deben validar los datos antes de incorporarlos al recorrido que les corresponda. La construcción de un módulo WebAssembly no sustituye esas comprobaciones.

La [observabilidad](observabilidad.md) relaciona actuaciones y medidas en los puntos instrumentados. Cuando el cálculo pertenece a un servicio externo, la observación queda limitada al recorrido controlado por el SV y a los datos que proporciona ese servicio. El Director no selecciona el hardware interno de un proveedor externo.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
