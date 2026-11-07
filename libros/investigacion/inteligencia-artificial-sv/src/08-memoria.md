# 8. Memoria, aprendizaje y realización computacional

La memoria conserva representaciones y operaciones con su procedencia. El aprendizaje se investiga como incorporación y organización de conocimiento explícito, con comprobaciones de adecuación y referencias a los antecedentes. No se identifica con el ajuste opaco de pesos ni con la selección probabilística de una respuesta.

## Incorporación de conocimiento

Una observación nueva puede añadir una instancia de una relación conocida. Una relación nueva requiere una constitución que precise su representación, sus condiciones de observación y sus posibilidades de contraste. Incorporar una instancia no autoriza a generalizarla a todos los objetos semejantes.

Si una regla se amplía, la ampliación conserva versión, alcance y evidencia. Las respuestas anteriores permanecen vinculadas a las reglas con las que se produjeron. Una corrección añade un nuevo registro y explica su relación con el anterior; no altera silenciosamente la historia conservada. El [aprendizaje trazable](bibliografia.md#aprendizaje) proporciona el fundamento de esta organización.

## Recuperación por relaciones

El sistema puede recuperar estados por sus referencias, participantes, relaciones y dependencias constituidas. Una coincidencia visual o numérica no basta para identificar causalidad ni equivalencia de significado. El potencial exacto permite recuperar la representación digital bajo su convenio; las relaciones semánticas requieren sus propios criterios de comparación.

Una consulta sobre reparación debe distinguir una reparación necesaria de una ejecutada. Una consulta sobre individuos debe conservar la identidad del individuo, no sustituirla por la similitud de su apariencia. Cada recuperación debe justificar la condición que la hizo pertinente.

## Tablas, matrices y tensores

Los registros pueden organizarse en tablas, conjuntos de células, matrices y tensores. El orden de las dimensiones debe permitir recuperar qué posición corresponde a cada suceso, célula y parámetro. La representación numérica interna de un símbolo no cambia su interpretación ternaria. Los campos descriptivos que acompañan a la célula no se presentan como posiciones nuevas de su vector.

Estas organizaciones permiten utilizar arquitecturas de cálculo existentes cuando las operaciones preserven el resultado exigido. Una unidad de procesamiento gráfico (GPU) o una unidad de procesamiento tensorial (TPU) no aporta por sí misma una semántica válida. La ejecución acelerada debe conservar precisión, orden lógico y condiciones de retorno; su equivalencia con el cálculo de referencia tiene que comprobarse.

La arquitectura no exige conceptualmente un centro de datos: las operaciones finitas pueden estudiarse en un ordenador local. La viabilidad de cada implementación depende del tamaño de las imágenes, el coste de los valores exactos y el número de estados conservados. Una imagen de alta resolución puede producir una codificación exacta extensa; una cifra decimal breve no elimina esa información. El rendimiento debe medirse antes de prometer una capacidad concreta.

## Realización y comprobación

Los componentes propios se desarrollan exclusivamente en Rust. Deben mantener responsabilidades delimitadas, reglas explícitas, tratamiento de errores y comprobaciones que detecten alteraciones del significado o del retorno. El análisis con Clippy forma parte de la verificación del código. Una revisión de seguridad examina además las entradas no confiables y la separación entre datos, instrucciones y permisos de actuación.

Las herramientas de interfaz, persistencia y cálculo son instrumentos de realización; no sustituyen los fundamentos. Se relacionan después de la bibliografía, en el [apéndice de instrumentos](instrumentos.md). La disponibilidad de una biblioteca de aprendizaje automático no autoriza a introducir un mecanismo probabilístico en la arquitectura.

## Descripción y actuación

Una imagen puede describir una acción sin ordenarla. Una pregunta puede referirse a una reparación sin autorizar su ejecución. La eventual relación con el Lenguaje de Computación del Sistema Vectorial debe conservar esa distinción, además de la correspondencia entre glifos y operaciones formales.

El [capítulo de programación visual del tratado](https://documentos-sv.itvia.online/investigacion/lenguaje-basado-en-imagenes/20-programacion.html) define las obligaciones de esa relación. La admisión de una representación o la compilación de un programa no acreditan que una actuación esté autorizada ni que sus premisas sean verdaderas.


<!-- © 2026 Juan Antonio Lloret Egea. CC BY-NC-ND 4.0. Artículo fundacional del LBI: https://doi.org/10.21428/39829d0b.8b9c0155. -->
