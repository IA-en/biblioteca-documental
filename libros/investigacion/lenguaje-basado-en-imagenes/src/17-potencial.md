# 16. Potencial de la imagen: definición, cálculo y retorno

El potencial debe distinguir las diferencias que la representación conserva. Una suma de puntos oscuros no cumple esta función: dos dibujos pueden contener igual cantidad de puntos y distribuirlos de otra manera. La posición forma parte del dato. Este capítulo define una proyección reversible del dominio digital de la imagen y la relaciona con la recta Atlas.

## Fórmulas de referencia

Las <a href="https://doi.org/10.21428/39829d0b.dcb48723" target="_blank" rel="noopener noreferrer">Reglas y condiciones de las Matemáticas del Potencial</a>, apartado 13.1, y <a href="https://doi.org/10.21428/39829d0b.5e15cabb" target="_blank" rel="noopener noreferrer">Orientación universal y geográfica</a>, apartados 6 y 8.9, establecen las condiciones de una proyección efectiva. Las magnitudes fundamentales son:

**P = μ − λ; I = μ + λ.**

Los polos μ y λ son no negativos y deben compartir dominio, escala y orientación. En una base igualada s, la individuación mediante un diferencial δ adopta μ = s + δ/2 y λ = s − δ/2. Entonces P = δ e I = 2s. El apartado 8.10 presenta controles con diferenciales sintéticos dados; no son una extracción de valores a partir de píxeles.

## Qué hace la recta Atlas

La **recta Atlas** sitúa una magnitud previamente definida en una escala acotada y conserva su orden. Para utilizarla deben declararse el dominio, la magnitud de entrada, su normalización y los parámetros de la escala. La función no determina por sí sola qué contiene una imagen: proyecta el dato que recibe. Su formulación se desarrolla en <a href="https://www.itvia.online/pub/orientacion-universal-y-geografica-potencial-del-suceso-e-interfaz-de-dominio-desde-el-universo-y-los-seres-biologicos-humanoide-sv/release/1#proyeccin-sobre-escala-acotada" target="_blank" rel="noopener noreferrer">Orientación universal y geográfica, apartado 6.4</a>.

En la aplicación etaria de esa publicación, Aᵢ es la edad física admisible del observable, AΩobs es el valor de referencia y FΩ es el intervalo declarado para normalizar. Se calcula primero Eᵢ = AΩobs − Aᵢ y después xᵢ = Eᵢ/FΩ, dentro del intervalo admitido 0 ≤ xᵢ ≤ 1. Las tres magnitudes etarias deben expresarse en unidades compatibles. La edad es una herramienta del dominio; no introduce tiempo como primitiva del Sistema Vectorial.

Para una entrada normalizada x, la transformación es:

**Sη(x) = ln(1 + x/η) / ln(1 + 1/η); s = Q·Sη(x).**

Aquí ln es el logaritmo natural; η > 0 regula la sensibilidad y Q > 0 fija el rango de representación. La función cumple Sη(0) = 0 y Sη(1) = 1. Su derivada, **S′η(x) = 1/[(η + x)·ln(1 + 1/η)]**, es positiva: aumentar la entrada aumenta su proyección. La sensibilidad es mayor cerca de cero. Para comparar resultados deben mantenerse η y Q, además de la definición del dato de entrada.

### Posición de régimen y diferencial singular

La publicación sitúa inicialmente ambos polos en s:

**μ⁰ = λ⁰ = s; P⁰ = 0; I⁰ = 2s.**

Esta igualdad polar constituye la Línea Umbral. El superíndice 0 identifica el régimen inicial, no una potencia aritmética. La coordenada s describe ese régimen, pero no es su diferencia polar: aunque s sea positiva, P⁰ sigue siendo cero. La distinción se explica en <a href="https://www.itvia.online/pub/orientacion-universal-y-geografica-potencial-del-suceso-e-interfaz-de-dominio-desde-el-universo-y-los-seres-biologicos-humanoide-sv/release/1#lnea-umbral-sv-recta-atlas-y-distribucin-de-observables-por-potencial" target="_blank" rel="noopener noreferrer">el apartado 6.5</a>.

Cuando una magnitud singular declarada proporciona δ, se obtiene:

**μ = s + δ/2; λ = s − δ/2; P = δ; I = 2s.**

La condición **|δ| ≤ 2s** conserva ambos polos no negativos. El diferencial cambia su distribución y mantiene la intensidad. La escala utiliza unidades internas de potencial Atlas, cuya notación u_AT(η,Q) identifica sensibilidad y rango; no son unidades del Sistema Internacional (SI). En estas expresiones, s, δ, μ y λ designan los coeficientes numéricos en la unidad declarada. Con la unidad explícita, las magnitudes son P = (μ − λ)·u_AT e I = (μ + λ)·u_AT. Véase <a href="https://www.itvia.online/pub/orientacion-universal-y-geografica-potencial-del-suceso-e-interfaz-de-dominio-desde-el-universo-y-los-seres-biologicos-humanoide-sv/release/1#unidades-de-potencial-atlas-y-nomenclatura-de-rutas" target="_blank" rel="noopener noreferrer">el apartado 6.8, unidades de potencial Atlas</a>.

### Ejemplo de la proyección y del cálculo polar

Con η = 1/10 y Q = 64, la función toma la forma s = 64·ln(1 + 10x)/ln(11):

| Entrada x | Sustitución | Coordenada s | Potencial inicial P⁰ | Intensidad inicial I⁰ |
|---|---|---:|---:|---:|
| 0 | 64·ln(1)/ln(11) | 0 | 0 | 0 |
| 1/2 | 64·ln(6)/ln(11) | ≈ 47,822191 | 0 | ≈ 95,644382 |
| 1 | 64·ln(11)/ln(11) | 64 | 0 | 128 |

Para mostrar la segunda operación, considérese un control aritmético con s = 64 y un coeficiente diferencial de entrada δ = 2. Entonces μ = 64 + 2/2 = 65 y λ = 64 − 2/2 = 63; por tanto, **P = (65 − 63)·u_AT = 2·u_AT** e **I = (65 + 63)·u_AT = 128·u_AT**. El valor 2 es un dato sintético del ejemplo, no una magnitud medida en una fotografía. En una aplicación debe proceder de la regla de dominio declarada.

<details>
<summary>Más información: las referencias etarias y la escala acotada</summary>

La <a href="https://doi.org/10.21428/39829d0b.7b4fc2e6" target="_blank" rel="noopener noreferrer">Trilogía Exocósmica, Parte III (λ)</a>, <a href="https://www.itvia.online/pub/nasa-redondea-el-sistema-vectorial-sv-formaliza--trilogia-exocosmica-parte-iii-lambda-humanoide/release/2#a2-escala-del-universo-psilon-atlas-y-sus-observables" target="_blank" rel="noopener noreferrer">anexo A.2</a>, utiliza AΩobs = 13.800.000.000 años julianos y FΩ = 27.600.000.000 años julianos. Son referencias de normalización. Los valores etarios y sus coordenadas acotadas expresan magnitudes diferentes.

Para el control Aᵢ = 0, la sustitución da **x = (13.800.000.000 − 0)/27.600.000.000 = 1/2**. Con η = 0,1 y Q = 64 resulta **s = 64·ln(6)/ln(11) ≈ 47,822191**, P⁰ = 0 e I⁰ ≈ 95,644382·u_AT. El rango Q = 64 no implica que la base s sea 64 en todos los casos. Con estas referencias, las edades físicas entre cero y AΩobs ocupan 0 ≤ x ≤ 1/2; el extremo formal x = 1 de la tabla de la función no se atribuye a una edad física de ese intervalo.

Una fecha de origen documentada puede aportar Aᵢ respecto de una referencia de evaluación declarada. Esta operación sitúa un régimen etario; el diferencial singular exige, además, la regla que lo obtiene de los datos. Si la fecha no se conoce, no se deduce de los colores ni se sustituye por un cero. La fecha del archivo, la captura y el origen del objeto se registran según su significado y procedencia.

</details>

## Aplicación al dominio de la imagen

Para las imágenes se constituye aquí el **convenio de representación posicional de imágenes del Sistema Vectorial, versión 02 (SVIMG02)**. El identificador reúne SV, por Sistema Vectorial; IMG, como abreviación de imagen; y 02, como indicación de versión. Identifica la regla exacta de representación definida en este capítulo. Las fórmulas polares y la transformación Atlas proceden de las publicaciones citadas; la selección y ordenación de las muestras digitales que se especifican a continuación son el convenio de esta aplicación visual. No se identifican con una medición de energía, edad o masa.

## Imagen y objetos representados

Una fotografía de un televisor TCL 43T69C permite calcular el potencial de su representación digital. El potencial de una unidad física del televisor utiliza los datos de su estado y la regla declarada para ese dominio. El modelo comercial identifica una clase de producto; no acredita el estado de un aparato concreto. Una pantalla sin imagen tampoco demuestra, por sí sola, que su sistema operativo esté alterado.

Análogamente, una imagen de dos aves tiene un potencial de representación. Cada recorte normalizado puede recibir el suyo. El potencial del estado de cada ave corresponde a otro dominio y requiere observaciones vinculadas inequívocamente con el individuo. El registro relaciona esos resultados con sus respectivas fuentes, unidades, reglas y sucesos; esa asociación no convierte un potencial de píxeles en una medida biológica ni establece por sí sola una función inversa entre ambos dominios.

La secuencia de cálculo es **datos → regla → polos → potencial → correspondencias**. En un ejemplo sintético se declaran las magnitudes iniciales y su relación con la escena antes de calcular. En un ejemplo empírico se conserva la procedencia de las observaciones. Una imagen en papel puede digitalizarse y recibir un potencial de representación bajo el perfil declarado, aunque se desconozca la fecha de su creación; esa digitalización no determina la edad del soporte ni la de sus objetos.

<details>
<summary>Más información: el televisor y los halcones documentados</summary>

El <a href="https://www.itvia.online/matematicas-del-potencial#anexo-imagen-objetos-potencial" target="_blank" rel="noopener noreferrer">anexo de ejemplos de la colección Matemáticas del Potencial</a> desarrolla el caso del TCL 43T69C y una lámina comparativa de halcones peregrinos identificados mediante las anillas D/35 y N/46. La fuente de las aves reúne dos capturas: su composición no acredita una fotografía simultánea. La anilla permite asociar datos con un individuo, pero no sustituye la función que calcula sus polos. Las descripciones de plumaje o tamaño relativo necesitan magnitudes y una regla efectiva antes de producir un resultado numérico.

La relación entre especie, estado e individuo se expone en <a href="https://doi.org/10.21428/39829d0b.5e15cabb" target="_blank" rel="noopener noreferrer">Orientación universal y geográfica</a>, apartados 8.8–8.10. Sus controles sintéticos no son mediciones de los halcones documentados. Las <a href="https://doi.org/10.21428/39829d0b.dcb48723" target="_blank" rel="noopener noreferrer">Reglas y condiciones de las Matemáticas del Potencial</a>, apartados 3, 4 y 13.1, delimitan las especializaciones y sus correspondencias. El anexo fija el procedimiento de los ejemplos; no presenta potenciales individuales ya calculados para esos halcones ni para una unidad física del televisor.

</details>

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

Se aplica la misma transformación logarítmica descrita en <a href="https://www.itvia.online/pub/orientacion-universal-y-geografica-potencial-del-suceso-e-interfaz-de-dominio-desde-el-universo-y-los-seres-biologicos-humanoide-sv/release/1#proyeccin-sobre-escala-acotada" target="_blank" rel="noopener noreferrer">el apartado 6.4 de Orientación</a>, ahora al racional digital q:

**Sη(q) = ln(1 + q/η) / ln(1 + 1/η).**

En la formulación etaria, Q·Sη(x) determina la base s del régimen inicial. En el convenio visual SVIMG02, la entrada q representa las muestras digitales y Q·Sη(q) determina el diferencial δ sobre una base común fijada en s = 64. Esta asignación es la regla de esta aplicación: no convierte los píxeles en edades ni atribuye a los objetos representados el potencial de la imagen que los contiene.

Se fijan η = 1/10 y Q = 64 para todas las imágenes del convenio. La proyección efectiva es:

**δ = ΦAtlas(imagen) = 64·ln(1 + 10q)/ln(11).**

**μAtlas = 64 + δ/2; λAtlas = 64 − δ/2; PAtlas = δ; IAtlas = 128.**

La transformación es estrictamente creciente: su derivada es positiva para q ≥ 0 y η > 0. Por ello, no elimina ninguna distinción del racional exacto q. El diferencial queda entre cero y 64; ambos polos Atlas permanecen no negativos. La elección de escala es común a todas las imágenes de este convenio y no depende de reconocer un perro, un televisor o una persona. El dominio del cálculo es la imagen.

Para el ejemplo 01, q = 11/16 y δ = 64·ln(63/8)/ln(11). Para 10, q = 13/16 y δ = 64·ln(73/8)/ln(11). Se conservan esas expresiones exactas, además de las aproximaciones que se necesiten para leer una tabla.

### Diferencia respecto de la calibración etaria

En el ejemplo digital 01, **q = 11/16 = 0,6875** procede de los bits y de su longitud. En el ejemplo etario anterior, **x = 1/2** procede de una edad y de dos referencias expresadas en años. La función logarítmica puede aplicarse a ambas entradas, pero sus resultados conservan el significado de su respectivo dominio. La coordenada etaria determina s; este convenio digital determina δ y fija s = 64. Son asignaciones declaradas diferentes, compatibles con las mismas identidades P = μ − λ e I = μ + λ.

Si se interpretara indebidamente q = 11/16 como aquella x etaria, se obtendría **Aᵢ = 13.800.000.000 − 27.600.000.000·11/16 = −5.175.000.000 años**. Esa cifra queda fuera del intervalo físico del ejemplo y no es la edad de la imagen. La fecha documentada puede añadirse como dato y alimentar una calibración etaria separada; no cambia retrospectivamente el potencial digital ni se obtiene de él. La compatibilidad entre aplicaciones exige conservar estas definiciones, no identificar sus variables por compartir una fórmula.

El retorno matemático recupera q mediante **q = (exp(δ·ln(11)/64) − 1)/10**. Su fracción reducida determina P y N. La realización conserva directamente el numerador entero y su longitud como representación exacta de δ, evitando pretender que una aproximación decimal pueda recuperar millones de muestras.

## Cuatro imágenes calculadas

Las cuatro imágenes son sintéticas de apariencia fotográfica. El capítulo de [correspondencias](23-correspondencias.md) las muestra y enlaza con los datos del cálculo. Los siguientes valores se presentan con doce decimales para consulta; la intensidad es exactamente 128 en los cuatro casos.

| Imagen | Resolución | PAtlas aproximado | μAtlas aproximado | λAtlas aproximado |
|---|---:|---:|---:|---:|
| 1. Manzana y recipiente | 1254 × 1254 | 61.605970658723 | 94.802985329362 | 33.197014670638 |
| 2. Libro y mochila | 1254 × 1254 | 57.086992578431 | 92.543496289216 | 35.456503710784 |
| 3. Jardinería | 1254 × 1254 | 53.818723459128 | 90.909361729564 | 37.090638270436 |
| 4. Televisor | 1774 × 887 | 63.904678214892 | 95.952339107446 | 32.047660892554 |

Las tres primeras representaciones tienen N = 50 320 642 bits; la cuarta, N = 50 353 346. El entero exacto se ofrece en texto sin compresión y se conserva también en formato binario comprimido sin pérdida. Su tamaño evidencia que una inversión exacta no hace desaparecer la información de la imagen. Una representación semántica económica puede omitir detalles no críticos, pero entonces responde a otro compromiso de reconstrucción.

Se calcularon también los potenciales de los 101 glifos canónicos asociados a los sucesos registrados. En las 105 entradas se recuperó la totalidad de las muestras y se comprobó la compresión reversible del entero. La demostración algebraica anterior delimita la propiedad general; estas comprobaciones acreditan su realización en el conjunto examinado.

## Cálculo desarrollado de Imagen1

Imagen1 representa una manzana verde en un recipiente transparente. El significado de la escena no interviene en esta operación: la entrada son sus muestras digitales ordenadas. Las operaciones siguientes reproducen el valor de la primera fila de la tabla.

### Paso 1. Determinar la longitud

La imagen mide 1254 × 1254 píxeles:

**1254 × 1254 = 1 572 516 píxeles.**

**1 572 516 × 4 = 6 290 064 componentes de ocho bits.**

Al añadir los dieciséis octetos de perfil y dimensiones, la longitud es L = 6 290 080 octetos. Por tanto:

**m = 6 290 080 × 8 = 50 320 640 bits; N = m + 2 = 50 320 642 bits.**

### Paso 2. Constituir el entero a partir de las muestras

Los dos primeros píxeles del archivo normalizado son (207, 174, 140, 255) y (211, 174, 138, 255). Para una secuencia de octetos x₁,…,xL, se comienza con C₀ = 0 y se repite Cⱼ = 256·Cⱼ₋₁ + xⱼ. Los primeros pasos son:

| Paso | Sustitución | Resultado |
|---|---|---:|
| 1 | 256 × 0 + 207 | 207 |
| 2 | 256 × 207 + 174 | 53 166 |
| 3 | 256 × 53 166 + 140 | 13 610 636 |
| 4 | 256 × 13 610 636 + 255 | 3 484 323 071 |

Tras las ocho primeras componentes se obtiene A = 14 965 053 642 194 717 439. La misma operación continúa con todas las muestras. La terminación es 83, 86, 73, 77, 71, 48, 50, 0, 0, 0, 4, 230, 0, 0, 4, 230; en ella, 4 × 256 + 230 = 1254 expresa cada dimensión. El entero C queda determinado por los 6 290 080 octetos completos.

### Paso 3. Obtener los polos y el potencial exacto

Al sustituir m y C:

**μ = 3·2⁵⁰³²⁰⁶⁴⁰ + C; λ = 2⁵⁰³²⁰⁶⁴⁰ − 1 − C.**

**P = μ − λ = 2⁵⁰³²⁰⁶⁴¹ + 2C + 1; I = 2⁵⁰³²⁰⁶⁴² − 1.**

El <a href="calculos/Imagen1-exacto.txt" target="_blank" rel="noopener noreferrer">entero P completo en texto</a> contiene todos sus dígitos, expresados en base 16. Las letras A a F representan los valores de diez a quince; cada dígito corresponde a cuatro bits. Se trata del mismo entero exacto, escrito en otra base, sin compresión ni omisión. Los saltos de línea sólo facilitan su lectura. Su extensión es consecuencia de conservar todas las muestras.

### Paso 4. Normalizar y acotar la aproximación

La definición exacta es q = P/2⁵⁰³²⁰⁶⁴². Para comprobar la cifra abreviada puede emplearse el entero A de los ocho primeros octetos:

**q₀ = 1/2 + A/2⁶⁵ = 33 411 797 715 904 269 055 / 36 893 488 147 419 103 232.**

Su desarrollo decimal exacto es:

**q₀ = 0,90562859175574058481837484702037244232997181825339794158935546875.**

Para justificar la aproximación, se escribe C = A·2ᵐ⁻⁶⁴ + R, con 0 ≤ R < 2ᵐ⁻⁶⁴. La fórmula de P da q = 1/2 + A/2⁶⁵ + R/2ᵐ⁺¹ + 2⁻ᴺ. De ahí se obtiene **0 < q − q₀ < 2⁻⁶⁵**, aproximadamente 2,71·10⁻²⁰. El cálculo exacto conserva R; únicamente la lectura abreviada utiliza esta cota.

### Paso 5. Aplicar la transformación Atlas

Con η = 1/10 y escala 64:

| Operación | Sustitución o resultado aproximado |
|---|---|
| Valor normalizado | q ≈ 0,9056285917557406 |
| Argumento del logaritmo | 1 + 10q ≈ 10,056285917557407 |
| Logaritmo del numerador | ln(1 + 10q) ≈ 2,308197903417302 |
| Logaritmo del denominador | ln(11) ≈ 2,397895272798371 |
| Potencial Atlas | 64 × 2,308197903417302 / 2,397895272798371 ≈ **61,605970658723** |

La derivada de la transformación es 640 / [(1 + 10q)·ln(11)], menor que 45 en el intervalo considerado. La diferencia debida a sustituir q por q₀ es, por tanto, menor que 45·2⁻⁶⁵, aproximadamente 1,22·10⁻¹⁸. Esta cota se refiere a la truncación de las muestras iniciales; la evaluación decimal introduce además su propio redondeo. Las aproximaciones no sustituyen la expresión exacta ni permiten por sí solas reconstruir la imagen.

### Paso 6. Calcular los polos Atlas y verificar el retorno

**μAtlas = 64 + δ/2 ≈ 94,802985329362.**

**λAtlas = 64 − δ/2 ≈ 33,197014670638.**

**PAtlas = δ ≈ 61,605970658723; IAtlas = 128.**

Las identidades se cumplen antes del redondeo; restar cifras ya redondeadas puede alterar la última cifra mostrada. Para el retorno se recupera N mediante la longitud binaria del entero P, se obtiene m = N − 2 y se aplica C = (P − 2ᵐ⁺¹ − 1)/2. La secuencia de m bits devuelve el perfil, las dimensiones y todas las componentes. En Imagen1 se verificó su igualdad con las muestras originales.

### Desarrollo de cada imagen y cada glifo

El mismo procedimiento se aplica sin cambiar escala ni criterio. Los desarrollos de <a href="calculos/Imagen1.html" target="_blank" rel="noopener noreferrer">Imagen1</a>, <a href="calculos/Imagen2.html" target="_blank" rel="noopener noreferrer">Imagen2</a>, <a href="calculos/Imagen3.html" target="_blank" rel="noopener noreferrer">Imagen3</a> e <a href="calculos/Imagen4.html" target="_blank" rel="noopener noreferrer">Imagen4</a> contienen sus propias muestras y sustituciones. La <a href="calculos/visor.html" target="_blank" rel="noopener noreferrer">tabla visible de los diecinueve recursos publicados</a> permite abrir también el desarrollo de cada uno de los quince glifos.

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
