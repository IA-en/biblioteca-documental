# **11.** Hardware de aceleración tensorial {#hardware-de-aceleración-tensorial}

**Dispositivos, plataformas y condiciones de ejecución · 16 de octubre de 2026.**

Este capítulo describe el soporte físico sobre el que pueden ejecutarse las operaciones dirigidas por el [Selector del Árbitro - Director CPU/GPU/TPU/NPU](selector-arbitro-director.md). La organización distingue fabricante, dispositivo y plataforma de ejecución: Kaggle y Google Cloud proporcionan entornos de ejecución, mientras que el trabajo lo realizan procesadores concretos. En los equipos completos se identifica también al fabricante de sus procesadores.

La capacidad del SV se documenta por dispositivo y configuración comprobados. Los resultados de un procesador concreto se circunscriben a su arquitectura, operaciones y condiciones de ejecución; no se atribuyen al conjunto de productos de su fabricante.

## **11.1.** Clases de dispositivos {#clases-de-dispositivos}

| Clase | Función y condición de uso |
| --- | --- |
| CPU | Procesamiento de propósito general. Puede realizar el cálculo completo y también el control, la preparación y la recuperación de una ejecución acelerada. |
| GPU | Procesamiento paralelo, útil para operaciones compatibles con su arquitectura, memoria y soporte de ejecución. Su ventaja debe medirse para la carga concreta. |
| TPU | Acelerador tensorial de Google. Requiere operaciones y una representación ejecutable compatibles con el dispositivo y su entorno. |
| NPU | Denominación de procesadores especializados en operaciones de redes neuronales. No identifica una arquitectura única ni garantiza compatibilidad entre fabricantes. |

La utilización de un acelerador requiere identificar su modelo exacto, comprobar su exposición al sistema y las operaciones compatibles, y observar su participación efectiva en el cálculo.

## **11.2.** Dispositivos observados en los ensayos {#dispositivos-observados-en-los-ensayos}

| Fabricante y dispositivo | Plataforma | Alcance comprobado |
| --- | --- | --- |
| [NVIDIA Tesla T4](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/bb73fcb65e3d6d5f292569c00c1ee1af857fe557/docs/hardware-de-aceleracion-tensorial/nvidia/tesla-t4/readme.md) | Kaggle | Cálculo del modelo Qwen3-8B mediante SV-Aprender. El entorno ofrecía dos GPU; el ensayo utilizó una para el cálculo. |
| [Intel Xeon; variante comercial no determinada](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/bb73fcb65e3d6d5f292569c00c1ee1af857fe557/docs/hardware-de-aceleracion-tensorial/intel/xeon-kaggle-20261014/readme.md) | Kaggle | Ejecución CPU y contraste del mismo modelo; cuatro procesadores lógicos visibles. |
| [Google TPU v5e](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/bb73fcb65e3d6d5f292569c00c1ee1af857fe557/docs/hardware-de-aceleracion-tensorial/google/tpu-v5e/readme.md) | Google Cloud | Traducción con Helsinki-NLP/opus-mt-en-es en una configuración de un chip. |
| [AMD EPYC 7B13](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/bb73fcb65e3d6d5f292569c00c1ee1af857fe557/docs/hardware-de-aceleracion-tensorial/amd/epyc-7b13/readme.md) | Google Cloud | Control y contraste CPU del traductor; veinticuatro procesadores lógicos visibles y cuatro hilos de cálculo configurados. |
| [AMD Instinct MI300X VF](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/4776bcdd5b9fed0e1cd4fd274b3e410fc4a1088b/docs/hardware-de-aceleracion-tensorial/amd/instinct-mi300x-vf/readme.md) | AMD Developer Cloud | Reconocimiento HIP/PCI y ejecución de productos matriciales Rust en una GPU virtualizada, arquitectura gfx942. |
| [Intel Xeon Platinum 8568Y+](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/4776bcdd5b9fed0e1cd4fd274b3e410fc4a1088b/docs/hardware-de-aceleracion-tensorial/intel/xeon-platinum-8568y-plus/readme.md) | AMD Developer Cloud | Control y contraste CPU del mismo ensayo; veinte procesadores lógicos disponibles. |
| [Samsung Galaxy S25 Ultra, SM-S938B](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/64486cd28394f066e550d50b13be2326ade48d2d/docs/hardware-de-aceleracion-tensorial/samsung/galaxy-s25-ultra-sm-s938b/readme.md) | Samsung Remote Test Lab; Android 16 | CPU Qualcomm SM8750 y GPU Adreno 830 reconocidas; cálculo CPU exacto y rechazo de destinos no habilitados. NNAPI no expuso una NPU; no se ejecutó cálculo GPU/NPU. |

El [catálogo por fabricantes](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/tree/64486cd28394f066e550d50b13be2326ade48d2d/docs/hardware-de-aceleracion-tensorial) conserva las especificaciones, las fuentes y las condiciones de cada prueba. Las fichas relacionan cada resultado con el dispositivo que lo produjo. Las fichas CPU y acelerador de una misma plataforma describen el mismo experimento y no deben contabilizarse como pruebas independientes.

## **11.3.** Realización en Rust y soporte del dispositivo {#realización-en-rust-y-soporte-del-dispositivo}

El lenguaje de la aplicación y el soporte de ejecución del fabricante deben identificarse por separado. En la prueba NVIDIA, SV-Aprender realiza en Rust el control y la generación de instrucciones PTX para las operaciones utilizadas. El recorrido comprobado utiliza la interfaz CUDA Driver y el controlador NVIDIA; no utiliza cuBLAS ni un motor de cálculo del modelo en CUDA C++. Por tanto, la prueba no demuestra independencia de CUDA ni que el controlador del dispositivo esté escrito en Rust.

En la prueba Google, la realización del traductor y su control están en Rust; la ejecución TPU se apoya en StableHLO, PJRT y la biblioteca del fabricante, libtpu. La evidencia debe describir esa dependencia, sin atribuir a Rust la implementación de todo el soporte físico.

En la prueba MI300X, el producto matricial se define en Rust/CubeCL y se compila mediante LLVM AMDGPU. HIP proporciona carga, transferencias y ejecución; LLVM/LLD y sus adaptaciones nativas siguen siendo dependencias externas. El ensayo no utiliza rocBLAS ni hipBLAS.

## **11.4.** Condiciones de comparación {#condiciones-de-comparación}

Una comparación reproducible identifica operación, datos, modelo y revisión, representación numérica, dimensiones, memoria, dispositivo, adaptador, versiones y límites temporales de la medición. Debe distinguir calentamiento y calibración de las solicitudes posteriores, así como actividad propia y utilización agregada.

La equivalencia del resultado y el rendimiento se comprueban por separado. Las diferencias numéricas requieren tolerancias justificadas para la operación; la aceleración no autoriza a alterar estados, umbrales ni reglas de evaluación. Los ejemplos de [selección por tiempo total](selector-arbitro-director.md#ejemplos-comprobados) muestran por qué un cálculo más rápido no garantiza un recorrido completo más rápido.

La medición distingue el tiempo del dispositivo, el de la operación con transferencias y el recorrido desde la petición hasta la entrega. La recuperación del resultado debe observarse por separado: una demora en esa fase no identifica por sí sola su causa en la biblioteca, el controlador o el entorno. La calibración tampoco garantiza la latencia de cada petición. Las mediciones y el análisis de cada configuración se conservan en su ficha experimental.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
