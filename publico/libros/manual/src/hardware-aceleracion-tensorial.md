# Hardware de aceleración tensorial

**Dispositivos, plataformas y condiciones de ejecución · 15 de octubre de 2026.**

Este capítulo describe el soporte físico sobre el que pueden ejecutarse las operaciones dirigidas por el [Selector del Árbitro - Director CPU/GPU/TPU/NPU](selector-arbitro-director.md). La organización distingue fabricante, dispositivo y plataforma de acceso: Kaggle y Google Cloud proporcionan entornos de ejecución, mientras que el trabajo lo realizan procesadores concretos.

La capacidad del SV se documenta por dispositivo y configuración comprobados. Una prueba con una NVIDIA Tesla T4 no acredita todas las GPU NVIDIA; una CPU AMD utilizada en Google Cloud tampoco demuestra compatibilidad con una GPU o una NPU AMD.

## Clases de dispositivos

| Clase | Función y condición de uso |
| --- | --- |
| CPU | Procesamiento de propósito general. Puede realizar el cálculo completo y también el control, la preparación y la recuperación de una ejecución acelerada. |
| GPU | Procesamiento paralelo, útil para operaciones compatibles con su arquitectura, memoria y soporte de ejecución. Su ventaja debe medirse para la carga concreta. |
| TPU | Acelerador tensorial de Google. Requiere operaciones y una representación ejecutable compatibles con el dispositivo y su entorno. |
| NPU | Denominación de procesadores especializados en operaciones de redes neuronales. No identifica una arquitectura única ni garantiza compatibilidad entre fabricantes. |

La denominación comercial del servidor no acredita la presencia o el acceso a una NPU. Deben comprobarse el modelo exacto, la exposición del dispositivo al sistema, las operaciones disponibles y la posibilidad de observar su utilización. Lo mismo se aplica a un acelerador anunciado pero no asignado a una instancia.

## Dispositivos observados en los ensayos

| Fabricante y dispositivo | Plataforma | Alcance comprobado |
| --- | --- | --- |
| [NVIDIA Tesla T4](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/808fc275f1ae05cf75f7f19520e145962e4c3c08/docs/hardware-de-aceleracion-tensorial/nvidia/tesla-t4/readme.md) | Kaggle | Cálculo del modelo Qwen3-8B mediante SV-Aprender. El entorno ofrecía dos GPU; el ensayo utilizó una para el cálculo. |
| [Intel Xeon; variante comercial no determinada](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/808fc275f1ae05cf75f7f19520e145962e4c3c08/docs/hardware-de-aceleracion-tensorial/intel/xeon-kaggle-20261014/readme.md) | Kaggle | Ejecución CPU y contraste del mismo modelo; cuatro procesadores lógicos visibles. |
| [Google TPU v5e](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/808fc275f1ae05cf75f7f19520e145962e4c3c08/docs/hardware-de-aceleracion-tensorial/google/tpu-v5e/readme.md) | Google Cloud | Traducción con Helsinki-NLP/opus-mt-en-es en una configuración de un chip. |
| [AMD EPYC 7B13](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/808fc275f1ae05cf75f7f19520e145962e4c3c08/docs/hardware-de-aceleracion-tensorial/amd/epyc-7b13/readme.md) | Google Cloud | Control y contraste CPU del traductor; veinticuatro procesadores lógicos visibles y cuatro hilos de cálculo configurados. |

El [catálogo por fabricantes](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/tree/808fc275f1ae05cf75f7f19520e145962e4c3c08/docs/hardware-de-aceleracion-tensorial) conserva las especificaciones, las fuentes y las condiciones de cada prueba. Incluye apartados de AMD, Google, NVIDIA, Intel y Qualcomm. Los apartados preparatorios no equivalen a dispositivos ensayados. A la fecha de esta edición no se acredita aquí una ejecución del Selector en GPU AMD ni en NPU.

## Realización en Rust y soporte del dispositivo

El lenguaje de la aplicación y el soporte de ejecución del fabricante deben identificarse por separado. En la prueba NVIDIA, SV-Aprender realiza en Rust el control y la generación de instrucciones PTX para las operaciones utilizadas. El recorrido comprobado utiliza la interfaz CUDA Driver y el controlador NVIDIA; no utiliza cuBLAS ni un motor de cálculo del modelo en CUDA C++. Por tanto, la prueba no demuestra independencia de CUDA ni que el controlador del dispositivo esté escrito en Rust.

En la prueba Google, la realización del traductor y su control están en Rust; la ejecución TPU se apoya en StableHLO, PJRT y la biblioteca del fabricante, libtpu. La evidencia debe describir esa dependencia, sin atribuir a Rust la implementación de todo el soporte físico.

## Condiciones de comparación

Una comparación reproducible identifica operación, datos, modelo y revisión, representación numérica, dimensiones, memoria, dispositivo, adaptador, versiones y límites temporales de la medición. Debe distinguir calentamiento y calibración de las solicitudes posteriores, así como actividad propia y utilización agregada.

La equivalencia del resultado y el rendimiento se comprueban por separado. Las diferencias numéricas requieren tolerancias justificadas para la operación; la aceleración no autoriza a alterar estados, umbrales ni reglas de evaluación. Los ejemplos de [selección por tiempo total](selector-arbitro-director.md#ejemplos-comprobados) muestran por qué un cálculo más rápido no garantiza un recorrido completo más rápido.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
