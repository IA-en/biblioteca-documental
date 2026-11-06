# 18. Organización de sucesos, matrices y tensores

Un mismo conjunto de sucesos puede disponer de varias representaciones para consulta y cálculo. Su identidad, constitución, orden y significado deben permanecer vinculados en todas ellas. Una tabla, una matriz y un tensor son formas de organizar datos; ninguna sustituye por sí sola la constitución de la célula.

## Registro persistente y vistas derivadas

El registro persistente conserva los datos mediante transacciones. La obra adopta la adición de nuevas inscripciones y rechaza la sustitución de identidades ya conservadas. Esta obligación pertenece al procedimiento del Sistema Vectorial (SV): la tecnología de almacenamiento admite otras operaciones y no impone por sí sola esa política. La [relación de instrumentos](herramientas.md) identifica la realización y su documentación oficial.

Cada suceso conserva el vínculo con sus células, su imagen, su expresión semántica y su registro de potencial. Los archivos de valores separados por comas (CSV) facilitan la consulta tabular. Los subconjuntos se definen mediante criterios explícitos y mantienen las identidades de los registros originales.

| Representación | Organización | Condición de conservación |
|---|---|---|
| Base de datos | Sucesos, células y registros de potencial vinculados | Identidades persistentes y transacciones sin sustitución. |
| Tabla de sucesos | Una fila por suceso | Imagen, constitución, orden y composición localizables. |
| Tabla de células | Una fila por célula de una composición | Morfología y valores ordenados de P1 a Pn. |
| Matriz por morfología | Una fila por célula con el mismo número de posiciones | No añade posiciones a las células. |
| Conjunto de morfologías distintas | Filas de longitudes distintas o representación rectangular con máscara | Las ausencias de posición no son valores U. |
| Tensor de procesamiento | Dimensiones y orden de almacenamiento declarados | Reconstrucción exacta de los vectores mediante máscaras e índices. |

## El conjunto de once sucesos

El caso conserva once sucesos y setenta y cuatro células: cincuenta de morfología (9,3) y veinticuatro de morfología (16,4). Las matrices homogéneas correspondientes tienen dimensiones 50 × 9 y 24 × 16. Esas dimensiones describen conjuntos de células; no constituyen células nuevas de 450 o 384 parámetros.

La composición completa contiene 834 posiciones, de las cuales 832 son informativas conforme a la longitud conservada de cada *frame*. Las dos posiciones de reserva original permanecen diferenciadas del relleno externo que pueda necesitar una representación rectangular.

La distinción de máscaras evita confundir ambas clases de reserva, pero no legitima las dos posiciones internas. Su conformidad sigue pendiente en los términos del [capítulo 8](07-economia.md). Las magnitudes de este apartado describen fielmente el prototipo conservado.

Una vista rectangular del conjunto puede adoptar las dimensiones 11 × 16 × 16: sucesos, máximo de células por suceso y máximo de posiciones por célula. Esa disposición contiene 2816 lugares de almacenamiento, pero sólo 834 corresponden a posiciones celulares existentes. Una máscara identifica esas posiciones; otra distingue las 832 posiciones informativas. Los otros 1982 lugares son relleno externo y carecen de significado celular.

## Codificación para cálculo

La terna conserva los símbolos 0, 1 y U. Para almacenarlos en octetos pueden declararse las etiquetas 0, 1 y 2, respectivamente. La etiqueta 2 representa U en ese formato; no redefine la terna ni convierte la indeterminación en una cantidad sobre la que puedan aplicarse operaciones sin constitución previa.

También puede emplearse una representación indicadora de tres componentes: una sola componente activa para cada símbolo y ninguna para el relleno. La máscara debe acompañar siempre a la información. Un cero utilizado para rellenar almacenamiento no puede confundirse con el valor 0 de una posición constituida.

Los tensores así preparados pueden servir como entrada para una unidad de procesamiento gráfico (GPU), una unidad de procesamiento tensorial (TPU) u otro dispositivo compatible. Preparar esa entrada no acredita todavía su ejecución, su rendimiento ni la validez semántica de cualquier operación que se aplique sobre ella. La selección del dispositivo dependerá de una tarea matemática definida y comprobable.

## Recuperación y control

La comprobación exige recuperar desde cada representación las identidades, las morfologías y los vectores originales. Se verifican además la persistencia tras cerrar y abrir la base de datos, el rechazo de identidades repetidas y la conservación atómica de un lote: si una inscripción es incompatible, no puede quedar registrada sólo una parte del lote.

La igualdad de contenido no impide registrar un nuevo suceso con identidad propia. El potencial numérico tampoco se utiliza como criterio exclusivo para fusionar registros. Cada imagen nueva requiere un cálculo completo y una comprobación de retorno antes de declarar completada su vinculación.

La organización facilita el aprovechamiento matemático, sin anticipar propiedades algebraicas todavía no constituidas. Una matriz de etiquetas ternarias no adquiere automáticamente estructura de cuerpo o espacio vectorial por almacenarse como tensor.

## Integridad de las representaciones

La equivalencia entre dos tablas exige igual cantidad de filas, identidades, orden, morfologías, longitudes y símbolos. Comparar únicamente las filas coincidentes puede ocultar truncamientos o adiciones. La recuperación desde la base persistente se contrasta con todos los registros esperados, después de cerrarla y volver a abrirla.

El conjunto ampliado reúne 101 sucesos y 694 células de representación, con 7 950 posiciones: 5 406 valores 0, 2 529 valores 1 y 15 valores U. Hay 460 células (9,3), 232 células (16,4) y dos células (49,7). De las posiciones conservadas, 7 924 son informativas y 26 corresponden a reservas históricas declaradas. Las once células de evaluación, con 106 posiciones, pertenecen a una tabla distinta.

La ampliación incorpora los potenciales de las cuatro imágenes fuente y de los 101 glifos canónicos. Cada cálculo queda unido a su recurso y a los sucesos correspondientes. El original de cada revisión se conserva; actualizar la vista vigente no sustituye la evidencia anterior. El capítulo de correspondencias permite consultar las composiciones publicadas.

## Ejecución local y aprovechamiento de arquitecturas existentes

La representación finita del caso, su recuperación y su organización persistente se han comprobado en un ordenador local. El procedimiento explícito no exige, por definición, entrenar un modelo general ni disponer de un centro de datos. Esta viabilidad corresponde al tamaño y las operaciones examinados; no establece requisitos universales de memoria, latencia o capacidad para fotografías arbitrarias. La ampliación deberá medir esas magnitudes y documentar las características del equipo.

La organización matricial y tensorial permite estudiar tareas por lotes en una unidad de procesamiento gráfico (GPU) o una unidad de procesamiento tensorial (TPU), siempre que sus operaciones y tipos de datos sean compatibles. La <a href="https://docs.nvidia.com/cuda/cuda-programming-guide/01-introduction/programming-model.html" target="_blank" rel="noopener noreferrer">documentación del modelo de programación de NVIDIA</a> describe el procesamiento paralelo; la <a href="https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm" target="_blank" rel="noopener noreferrer">documentación de la arquitectura tensorial de Google</a> expone sus unidades de cálculo matricial. Estos antecedentes justifican una posibilidad de adaptación, no una integración ni una aceleración ya medidas.

Cada adaptación deberá conservar las máscaras, las identidades, el orden y el significado de la terna. El resultado deberá cotejarse con una realización de referencia. La elección de dispositivo depende de la operación y del volumen: preparar tensores no obliga a utilizar un acelerador ni convierte las etiquetas de los estados en cantidades algebraicas.



<!-- Autoría: © 2026 Juan Antonio Lloret Egea. CC BY-NC-ND 4.0. https://doi.org/10.21428/39829d0b.8b9c0155. -->
