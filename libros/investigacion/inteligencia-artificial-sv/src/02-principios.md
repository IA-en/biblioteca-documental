# 2. Principios obligatorios y fundamento documental

La arquitectura adopta los [fundamentos algebraico-semánticos](bibliografia.md#fundamentos) y la [cadena de representación del tratado](https://documentos-sv.itvia.online/investigacion/lenguaje-basado-en-imagenes/03-recorrido.html). No basta con conservar el dibujo final: deben conservarse las reglas que dan significado a sus posiciones y a sus relaciones.

## Terna y célula

La terna **(0,1,U)** constituye el repertorio de estados. Su interpretación depende de la cuestión constituida. En una evaluación de fidelidad, 0 expresa acierto, 1 error y U indeterminación. En una representación descriptiva, el significado se fija por el dominio y por la regla de observación correspondiente. El valor U no equivale a una probabilidad intermedia ni a una ausencia de estructura.

Cada célula tiene n=b² posiciones, con base entera b≥3: (9,3), (16,4), (25,5), entre otras morfologías admitidas. Cada posición tiene una cuestión o función constituida y un único valor de la terna. La composición de varias células debe conservar su orden y la interpretación del conjunto. La existencia de una matriz de datos no convierte automáticamente la terna en un cuerpo numérico ni acredita una estructura de espacio vectorial.

La economía exige escoger la menor representación que satisfaga las condiciones declaradas de adecuación. No autoriza el relleno de posiciones, la eliminación de relaciones críticas ni la identificación de acontecimientos distintos. El tratado conserva composiciones históricas con reservas explícitamente señaladas; esas reservas impiden admitirlas como células plenamente conformes de esta arquitectura mientras no se constituya y compruebe una representación adecuada. Los antecedentes se mantienen con su significado original. Véanse la [economía celular](https://documentos-sv.itvia.online/investigacion/lenguaje-basado-en-imagenes/07-economia.html) y la [especificación de paridad entre célula e imagen](bibliografia.md#paridad).

## Razonamiento visual y trazabilidad

Las operaciones deben recibir y producir estados visuales que intervengan efectivamente en la determinación de la respuesta. Asociar una ilustración a una conclusión verbal ya generada no satisface esta condición. Cada transición debe identificar sus premisas, su regla y el resultado, con las células y potenciales correspondientes.

El repertorio visual no depende de que el usuario memorice definiciones en español. Sus relaciones deben distinguirse mediante composición, posición, ámbito y signos contrastados. La documentación científica puede explicar esas convenciones, pero la prueba de comprensión debe examinar los glifos sin proporcionar la frase que se pretende recuperar.

## Determinismo y suficiencia documental

Una operación determinista produce el mismo resultado cuando recibe los mismos datos, la misma constitución y la misma versión de reglas. Ello permite repetir el cálculo; no garantiza por sí solo que la constitución sea correcta o que las premisas sean verdaderas. La correspondencia con la evidencia requiere una comprobación propia.

El sistema no debe sustituir una premisa desconocida por una conjetura verosímil. Una regla sólo puede aplicarse si sus condiciones están satisfechas y su ámbito coincide con el de los datos. Las reglas probabilísticas, los mecanismos de decisión opacos y la predicción verbal quedan excluidos de la arquitectura propia. Los modelos externos utilizados como participantes en pruebas del tratado no forman parte de este mecanismo de razonamiento.

## Conservación y pérdida

El retorno exacto de una representación canónica y la reconstrucción de una escena con pérdida son propiedades diferentes. En el primer caso se comprueba la identidad de la representación codificada. En el segundo se comprueba que la pérdida conserva el núcleo y todos los parámetros críticos.

La regla agregada es T(n)=⌊7n/9⌋. Su aplicación requiere una célula completa de evaluación. Primero se comprueba si los errores alcanzan el umbral; después, si lo alcanzan los aciertos; los demás casos son indeterminados. Además, un error crítico determina No apto y una indeterminación crítica impide Apto. Ocho aciertos y un error crítico en una célula (9,3) no constituyen una reconstrucción admisible. Véanse los [fundamentos, apartados 5.2–5.3](bibliografia.md#fundamentos), y el [desarrollo con ejemplos](https://documentos-sv.itvia.online/investigacion/lenguaje-basado-en-imagenes/14-evaluacion.html).

Estas obligaciones son acumulativas. No se admite compensar la falta de una célula, de un potencial o de una premisa con la calidad aparente de la imagen o de la respuesta.


<!-- © 2026 Juan Antonio Lloret Egea. CC BY-NC-ND 4.0. Publicación de arquitectura: https://doi.org/10.21428/39829d0b.0481eae3. Artículo fundacional del LBI: https://doi.org/10.21428/39829d0b.8b9c0155. -->
