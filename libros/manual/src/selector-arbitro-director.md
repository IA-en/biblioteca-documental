# **9.** Selector del Árbitro - Director CPU/GPU/TPU/NPU {#selector-del-árbitro---director-cpugputpunpu}

**Componente subordinado al Árbitro - Director · 15 de octubre de 2026.**

El Selector del Árbitro - Director CPU/GPU/TPU/NPU determina el dispositivo admisible para una operación concreta. Recibe una descripción de la carga, los recursos observados y la política aplicable; devuelve una elección fundamentada o el motivo por el que no existe un destino admisible. Su realización de selección está escrita en Rust.

El [Árbitro - Director](arbitro-director.md) conserva el gobierno de la actuación. El Selector no cambia el modelo, la finalidad, las fuentes ni las reglas de evaluación. Su biblioteca de selección utiliza información suministrada y requiere un adaptador que realice la operación y permita comprobarla. La observación automática se desarrolla en el [Explorador Tensorial del SV](explorador-tensorial-sv.md), subordinado al Selector. Ninguno de estos hechos sustituye la reserva del recurso ni la comprobación del cálculo efectivo.

## **9.1.** Condiciones de selección {#condiciones-de-selección}

La petición identifica la operación, su revisión, el perfil de cálculo, las dimensiones relevantes y las necesidades de memoria, incluido el margen exigido. Cada recurso identifica el dispositivo, el adaptador y su versión, las capacidades comprobadas, la disponibilidad, la memoria utilizable y el momento de observación.

El Selector descarta los destinos que incumplen las condiciones. Entre las causas se encuentran la falta de autorización, la incompatibilidad con la carga exacta, la indisponibilidad, una observación demasiado antigua, la memoria desconocida o insuficiente y la cobertura parcial de las operaciones requeridas. La presencia física de un acelerador no demuestra que pueda ejecutar el trabajo.

Cuando todos los candidatos admisibles disponen de estimaciones comparables del tiempo total y la política permite compararlas, se elige la menor. Los empates se resuelven de forma determinista mediante las preferencias declaradas y la identidad del destino. Si faltan estimaciones, la realización disponible puede aplicar el orden de preferencias previsto; esa elección debe quedar identificada como tal y no acredita el mejor rendimiento.

La comparación comprende el recorrido completo: preparación, transferencia, cálculo, sincronización y recuperación. La GPU, la TPU o la NPU no reciben prioridad automática por pertenecer a una clase de aceleradores.

## **9.2.** De la decisión a la comprobación {#de-la-decisión-a-la-comprobación}

Antes de ejecutar debe confirmarse que siguen vigentes las condiciones que sustentaron la elección. La ejecución debe conservar la identidad de la petición y registrar el dispositivo realmente utilizado. Una sustitución o distribución parcial del trabajo requiere una condición explícita; no puede introducirse como una desviación silenciosa.

La telemetría debe distinguir:

1. La decisión y los candidatos admitidos o descartados.
2. El tiempo de preparación y el tiempo de cálculo, con sus límites de medición.
3. Las transferencias y esperas que forman parte del recorrido.
4. La actividad de CPU y del acelerador atribuible al proceso observado.
5. La correspondencia del resultado con la ejecución de referencia.

La utilización agregada de un dispositivo no basta para atribuirle una operación concreta. Se necesitan evidencias asociadas a la petición o al proceso, junto con el contraste numérico y funcional que corresponda.

## **9.3.** Ejemplos comprobados {#ejemplos-comprobados}

Las pruebas siguientes corresponden a cargas y configuraciones determinadas. Permiten explicar el criterio de selección; no establecen una preferencia permanente entre CPU y aceleradores.

| Prueba | Resultado observado | Consecuencia para la selección |
| --- | --- | --- |
| Qwen3-8B, cuantización Q4_K_M en GGUF, mediante SV-Aprender en Kaggle | Mediana de generación de 16 tokens: 11,835012 s en CPU y 1,907238 s en una NVIDIA Tesla T4. Las dos decisiones automáticas del ensayo eligieron GPU. | La GPU resultó favorable para la carga medida. La igualdad de los tokens obtenidos no constituye una evaluación general de las respuestas del modelo. |
| Helsinki-NLP/opus-mt-en-es en Google Cloud, caso NCI_4-0 | Medianas del tiempo de generación: 281,263 ms en CPU y 106,164 ms en TPU. Medianas del recorrido completo: 327,797 ms en CPU y 1.238,158 ms en TPU. | El cálculo fue más rápido en TPU, pero la CPU obtuvo menor tiempo completo. Las decisiones automáticas del ensayo eligieron CPU. |

La ejecución gobernada de Qwen comprendió ocho solicitudes —tres en CPU y cinco en GPU—, además de seis generaciones de calibración. Sus tiempos corresponden a generaciones con los pesos ya preparados e incluyen observación y conservación; la preparación inicial se midió aparte. La serie final del traductor comprendió veintidós traducciones —doce en CPU y diez en TPU— y comprobaciones de rechazo por indisponibilidad declarada. Los informes conservan el detalle de las medidas y sus condiciones.

## **9.4.** Alcance de la realización {#alcance-de-la-realización}

La evidencia experimental citada corresponde a dos configuraciones: CPU Intel Xeon con GPU NVIDIA Tesla T4, y CPU AMD EPYC 7B13 con TPU Google v5e. Sus resultados se circunscriben a las cargas, operaciones y condiciones descritas; no se extrapolan a otros dispositivos.

El objeto de estas pruebas es la elección del dispositivo y su correspondencia con la ejecución física. La evaluación de la calidad científica de las respuestas del modelo constituye una cuestión distinta. La correspondencia entre células, representación tensorial y significado se desarrolla en [Parámetros, recorridos y evidencia](parametros-rutas.md#representación-tensorial-y-ejecución-acelerada).

## **9.5.** Referencias {#referencias}

- [Descripción y realización del Selector](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/bb73fcb65e3d6d5f292569c00c1ee1af857fe557/docs/hardware-de-aceleracion-tensorial/selector-arbitro-director-cpu-gpu-tpu-npu/readme.md).
- [Ensayo Qwen3-8B en Kaggle](https://github.com/juantoniolloretegea/SV-motor/blob/32239f974af3a6367efd75d36ba984a6c2fc747e/laboratorio/ensayo-ia-y-observabilidad/modelos-de-ia/qwen/qwen3-8b-cuantizacion-q4_k_m-gguf/sv-contraste-qwen-cpu-gpu-rust-20261014.md).
- [Ensayo del traductor Helsinki-NLP/opus-mt-en-es](https://github.com/juantoniolloretegea/SV-motor/blob/32239f974af3a6367efd75d36ba984a6c2fc747e/laboratorio/ensayo-ia-y-observabilidad/modelos-de-ia/helsinki-nlp/opus-mt-en-es.md).
- [Hardware de aceleración tensorial](hardware-aceleracion-tensorial.md).

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
