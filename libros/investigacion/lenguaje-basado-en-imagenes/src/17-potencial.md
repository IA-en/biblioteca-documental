# 16. Potencial de la imagen: definición, cálculo y retorno

El potencial debe distinguir las diferencias que la representación conserva. Una suma de puntos oscuros no cumple esta función: dos dibujos pueden contener igual cantidad de puntos y distribuirlos de otra manera. La posición forma parte del dato. Este capítulo define una proyección reversible del dominio digital de la imagen y la relaciona con la recta Atlas.

## Fórmulas de referencia y convenio visual

Las <a href="https://doi.org/10.21428/39829d0b.dcb48723" target="_blank" rel="noopener noreferrer">Reglas y condiciones de las Matemáticas del Potencial</a>, apartado 13.1, y <a href="https://doi.org/10.21428/39829d0b.5e15cabb" target="_blank" rel="noopener noreferrer">Orientación universal y geográfica</a>, apartados 6 y 8.9, establecen las condiciones de una proyección efectiva. Las magnitudes fundamentales son:

**P = μ − λ; I = μ + λ.**

Los polos μ y λ son no negativos y deben compartir dominio, escala y orientación. En una base igualada s, la individuación mediante un diferencial δ adopta μ = s + δ/2 y λ = s − δ/2. Entonces P = δ e I = 2s. El apartado 8.10 presenta controles con diferenciales sintéticos dados; no son una extracción de valores a partir de píxeles.

Para las imágenes se constituye aquí el convenio **SVIMG02**. Esta denominación identifica una regla exacta de representación. Las fórmulas polares y la transformación Atlas proceden de las publicaciones citadas; la selección y ordenación de las muestras digitales que se especifican a continuación son el convenio de esta aplicación visual. No se identifican con una medición de energía, edad o masa.

## Qué información entra

El objeto del cálculo es una imagen normalizada: anchura, altura y muestras ordenadas por filas, de izquierda a derecha y de arriba abajo. Cada píxel contiene rojo, verde, azul y canal alfa, que expresa la opacidad (RGBA, por su denominación inglesa), con ocho bits por componente. Los valores son digitales; la calibración física y la información contextual disponible se declaran en el registro.

Se conservan las cuatro componentes, incluso bajo transparencia. No se recorta la imagen, no se resume mediante un histograma y no se reordenan sus píxeles. Una entrada de profundidad superior a ocho bits por componente exige otro perfil que conserve esa precisión; no se reduce silenciosamente. La descodificación del archivo precede al cálculo. Dos archivos comprimidos de manera distinta pueden representar las mismas muestras y obtener el mismo potencial de imagen; la identidad de archivo se comprueba por separado.

Las muestras se acompañan de una terminación de dieciséis octetos: los primeros ocho contienen, en decimal, 83, 86, 73, 77, 71, 48, 50 y 0, que identifican el perfil; los otros ocho expresan anchura y altura, cuatro por magnitud, con el octeto más significativo primero. Así, dos matrices con igual secuencia de colores y distinta forma no quedan confundidas. El perfil fija también el orden y la profundidad de las componentes. No supone que los valores digitales sean medidas radiométricas calibradas.

La secuencia completa tiene m bits y representa un entero C, con 0 ≤ C < 2ᵐ. El orden de los bits hace que cualquier diferencia conservada cambie C. Los ceros iniciales se mantienen mediante la longitud m.

## Polos posicionales y potencial exacto

Se anteponen dos bits iguales a uno a esa secuencia. Su longitud total es N = m + 2. Se definen:

**μ = 3·2ᵐ + C**

**λ = 2ᵐ − 1 − C**

**P = 2ᵐ⁺¹ + 2C + 1**

**I = 2ᵐ⁺² − 1.**

Ambos polos son no negativos. El segundo es el complemento del primero dentro de las N posiciones. El potencial es un entero impar positivo y tiene exactamente N bits. La construcción conserva las muestras completas; no es una huella abreviada ni un número de inscripción del suceso.

### Ejemplo reducido

Considérense dos secuencias de dos bits, únicamente para mostrar la aritmética; las imágenes completas incorporan además sus dimensiones y el perfil.

| Secuencia | m | C | μ | λ | P | I |
|---|---:|---:|---:|---:|---:|---:|
| 01 | 2 | 1 | 13 | 2 | 11 | 15 |
| 10 | 2 | 2 | 14 | 1 | 13 | 15 |

Las dos secuencias tienen un cero y un uno. Un conteo no las distinguiría. El potencial posicional produce 11 y 13 porque conserva el orden. Para recuperar la primera, se obtiene N = 4 de la longitud binaria de 11, m = 2 y C = (11 − 8 − 1)/2 = 1. Expresado con dos bits, C devuelve 01.

### Por qué no se confunden dos representaciones distintas

Para una longitud m fija, P aumenta en dos cuando C aumenta en uno; por tanto, valores distintos de C producen potenciales distintos. Para longitudes diferentes, P tiene una longitud binaria N diferente. Los intervalos correspondientes no se solapan. La inversa es:

**N = longitud binaria de P; m = N − 2; C = (P − 2ᵐ⁺¹ − 1)/2.**

La secuencia recuperada se interpreta con exactamente m bits. Se comprueban perfil, dimensiones y cantidad de muestras. Una secuencia que no cumple esas condiciones queda fuera del dominio admitido. Estas igualdades demuestran inyectividad sobre las representaciones digitales constituidas; no afirman que una captura finita contenga todos los detalles del mundo físico.

## Proyección en la recta Atlas

Se normaliza el entero exacto mediante **q = P/2ᴺ**, de modo que 1/2 < q < 1. Como P es impar, la fracción está reducida y conserva tanto el numerador como la longitud. No se utiliza un número decimal redondeado como entrada de esta definición.

La transformación logarítmica de la recta Atlas se expresa como:

**Sη(q) = ln(1 + q/η) / ln(1 + 1/η).**

Para este convenio se fijan η = 1/10 y una escala de 64 unidades Atlas. La base polar común es s = 64. La proyección efectiva es:

**δ = ΦAtlas(imagen) = 64·ln(1 + 10q)/ln(11).**

**μAtlas = 64 + δ/2; λAtlas = 64 − δ/2; PAtlas = δ; IAtlas = 128.**

La transformación es estrictamente creciente: su derivada es positiva para q ≥ 0 y η > 0. Por ello, no elimina ninguna distinción del racional exacto q. El diferencial queda entre cero y 64; ambos polos Atlas permanecen no negativos. La elección de escala es común a todas las imágenes de este convenio y no depende de reconocer un perro, un televisor o una persona. El dominio del cálculo es la imagen.

Para el ejemplo 01, q = 11/16 y δ = 64·ln(63/8)/ln(11). Para 10, q = 13/16 y δ = 64·ln(73/8)/ln(11). Se conservan esas expresiones exactas, además de las aproximaciones que se necesiten para leer una tabla.

El retorno matemático recupera q mediante **q = (exp(δ·ln(11)/64) − 1)/10**. Su fracción reducida determina P y N. La realización conserva directamente el numerador entero y su longitud como representación exacta de δ, evitando pretender que una aproximación decimal pueda recuperar millones de muestras.

## Cuatro imágenes calculadas

Las cuatro imágenes son sintéticas de apariencia fotográfica. El capítulo de [correspondencias](23-correspondencias.md) las muestra y enlaza con los datos del cálculo. Los siguientes valores se presentan con doce decimales para consulta; la intensidad es exactamente 128 en los cuatro casos.

| Imagen | Resolución | PAtlas aproximado | μAtlas aproximado | λAtlas aproximado |
|---|---:|---:|---:|---:|
| 1. Manzana y recipiente | 1254 × 1254 | 61.605970658723 | 94.802985329362 | 33.197014670638 |
| 2. Libro y mochila | 1254 × 1254 | 57.086992578431 | 92.543496289216 | 35.456503710784 |
| 3. Jardinería | 1254 × 1254 | 53.818723459128 | 90.909361729564 | 37.090638270436 |
| 4. Televisor | 1774 × 887 | 63.904678214892 | 95.952339107446 | 32.047660892554 |

Las tres primeras representaciones tienen N = 50 320 642 bits; la cuarta, N = 50 353 346. El entero exacto se conserva comprimido sin pérdida. Su tamaño evidencia que una inversión exacta no hace desaparecer la información de la imagen. Una representación semántica económica puede omitir detalles no críticos, pero entonces responde a otro compromiso de reconstrucción.

Se calcularon también los potenciales de los 101 glifos canónicos asociados a los sucesos registrados. En las 105 entradas se recuperó la totalidad de las muestras y se comprobó la compresión reversible del entero. La demostración algebraica anterior delimita la propiedad general; estas comprobaciones acreditan su realización en el conjunto examinado.

## Precisión, contexto y singularidad

La singularidad del suceso comprende configuración, entorno y entorno envolvente. La igualdad completa se considera un caso ideal: parecer igual no demuestra ser el mismo suceso físico. La observación finita declara resolución, calibración y contexto; no presume haber captado diferencias inferiores a sus capacidades.

Una coincidencia debida a las limitaciones de captura no autoriza a fusionar inscripciones. Cada nueva activación conserva su identidad y sus relaciones de procedencia. Si dos entradas normalizadas contienen exactamente las mismas muestras y dimensiones, este potencial de representación coincide: el cálculo no inventa una diferencia ausente de su entrada. Cuando la imagen sí conserva una diferencia, la representación exacta la mantiene. El contexto registrado acompaña al potencial; no se afirma que el escalar calculado sobre los píxeles contenga un entorno que no fue observado.

Las diferencias exactas pueden ser mucho menores que las visibles en una tabla decimal. Se conserva el entero completo, la fórmula y su constitución. Añadir cifras ficticias a un decimal o introducir el ordinal S1, S2… en la magnitud no sustituiría la medición visual. El identificador mantiene la referencia documental; no se utiliza como dato de los polos.

El <a href="https://doi.org/10.21428/39829d0b.2b3c9808" target="_blank" rel="noopener noreferrer">Conjunto matemático unificado del cambio factual</a>, apartado 12.3, distingue repetición del polígono y nueva activación en el Ciclo de Suceso. La <a href="https://doi.org/10.21428/39829d0b.8ea18396" target="_blank" rel="noopener noreferrer">Dinámica del Suceso</a>, edición 3, exige horizontes, soporte y reevaluación para la admisibilidad. La sucesión de inscripciones no introduce tiempo como primitiva. Véase también <a href="https://doi.org/10.21428/39829d0b.755ad0eb" target="_blank" rel="noopener noreferrer">Medición, reconstrucción e incertidumbre estructural</a>, edición 2, para distinguir lo observado, lo reconstruido y lo residual.

## Comparación y límites de interpretación

El potencial posicional permite identificar y recuperar la representación digital. Su proximidad numérica no mide por sí sola semejanza semántica: cambiar un píxel temprano tiene un peso posicional distinto de cambiar uno tardío. Para comparar significados se utilizan relaciones constituidas y parámetros críticos. Una métrica perceptiva o semántica adicional requerirá definición y contraste propios.

En cualquier función local de potencial, un conjunto equipotencial reúne elementos con igual valor de esa función. Una función inyectiva sobre imágenes constituidas no puede formar conjuntos de ese tipo con dos imágenes distintas. Pueden estudiarse agrupaciones mediante otro observable local declarado, manteniendo la identidad exacta. Una superficie equipotencial exige además una estructura geométrica y regularidad apropiadas; una lista finita de valores no constituye por sí sola una superficie. <a href="https://doi.org/10.21428/39829d0b.f0cbabc2" target="_blank" rel="noopener noreferrer">Potencial de un suceso</a> distingue magnitud, dominio y comparación.

En un recorrido de valores comparables, la suma de diferencias consecutivas es la diferencia entre extremos. El recorrido absoluto suma sus magnitudes y puede ser mayor. Para 0, 2, 0, la diferencia neta es cero y el recorrido absoluto es cuatro. Ese retorno numérico no borra las inscripciones intermedias ni demuestra repetición física exacta.

Cada nueva imagen se incorpora con su potencial exacto, perfil, procedencia, resolución, calibración, contexto y resultado de retorno. Si falta uno de esos datos, el registro conserva la incidencia y no declara completada la correspondencia.


<!-- Autoría: © 2026 Juan Antonio Lloret Egea. CC BY-NC-ND 4.0. https://doi.org/10.21428/39829d0b.8b9c0155. -->
