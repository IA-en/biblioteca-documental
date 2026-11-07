# 5. Identidad del suceso, célula y potencial

El registro de un suceso debe permitir recorrer la cadena completa sin sustituir identidades ni confundir dominios. S1, S2 y las denominaciones sucesivas pueden utilizarse como referencias legibles dentro de una colección identificada. La clave completa distingue también la colección; dos denominaciones S1 pertenecientes a conjuntos diferentes no identifican por ello el mismo suceso.

## Qué conserva un registro

| Componente | Información que debe poder recuperarse |
|---|---|
| Imagen | Fuente o composición sintética, representación canónica, dimensiones y condiciones conocidas de captura. |
| Glifo | Composición visual, repertorio, relaciones, ámbitos y versión de constitución. |
| Texto | Expresión de referencia o respuesta producida, idioma y correspondencia comprobada con las relaciones. |
| Células | Morfologías, número de células, posiciones ordenadas y valores de la terna. |
| Potencial | Convenio, entradas, valor exacto o expresión exacta recuperable, proyección y precisión de presentación. |
| Suceso y procedencia | Identidad, antecedentes, regla aplicada y fuentes de evidencia. |

El texto de referencia y una respuesta producida por un observador tienen funciones distintas y se conservan separados. Su equivalencia semántica debe examinarse; no se presupone por compartir el mismo registro.

## Potencial de la representación digital

El tratado define el **convenio de representación posicional de imágenes del Sistema Vectorial, versión 02 (SVIMG02)**. Conserva dimensiones y muestras digitales ordenadas. Si C es el entero correspondiente al contenido de m bits, sus polos se constituyen como:

<strong class="math notranslate" translate="no">μ = 3·2ᵐ + C</strong>, <strong class="math notranslate" translate="no">λ = 2ᵐ − 1 − C</strong>.

De ellos se obtienen <strong class="math notranslate" translate="no">P = μ − λ = 2ᵐ⁺¹ + 2C + 1</strong> e <strong class="math notranslate" translate="no">I = μ + λ = 2ᵐ⁺² − 1</strong>. La longitud y la constitución hacen posible recuperar C. Por ejemplo, en un control aritmético reducido con m=3 y C=5, μ=29, λ=2, P=27 e I=31; el retorno C=(27−16−1)/2 devuelve 5. Este control no representa por sí solo una imagen válida del convenio completo, que exige cabecera y muestras.

La proyección del tratado utiliza N=m+2, q=P/2ᴺ y <strong class="math notranslate" translate="no">δ=64·ln(1+10q)/ln(11)</strong>. En el régimen s=64, <strong class="math notranslate" translate="no">μ<sub>Atlas</sub>=64+δ/2</strong> y <strong class="math notranslate" translate="no">λ<sub>Atlas</sub>=64−δ/2</strong>. Por tanto, la diferencia polar es δ y la intensidad es 128. El [capítulo de potencial del tratado](https://documentos-sv.itvia.online/investigacion/lenguaje-basado-en-imagenes/17-potencial.html) desarrolla la normalización, los cálculos completos y el retorno, con fuentes de la [colección de Matemáticas del Potencial](bibliografia.md#potencial).

Dos valores que coincidan al redondearse no quedan identificados por esa cifra. El registro conserva la representación exacta y la precisión de consulta. El potencial digital tampoco constituye por sí solo una distancia semántica: dos imágenes conceptualmente próximas pueden tener codificaciones muy diferentes. Las comparaciones de significado requieren las relaciones visuales constituidas.

## Imagen, individuo y repetición

El potencial de una imagen que contiene dos aves se calcula sobre esa representación digital. El potencial de cada ave requiere la regla y los datos del dominio correspondiente. Recortar un ave produce otra imagen; calcular su potencial no equivale automáticamente a medir el potencial biológico del individuo. Las referencias entre dominios conservan esa distinción.

Una nueva captura se incorpora como otro registro. Si dos archivos contienen exactamente la misma representación normalizada, el convenio digital produce el mismo valor; no se altera artificialmente el cálculo para fabricar una diferencia. La identidad de las apariciones y sus contextos permite distinguir los registros. Una captura finita no demuestra igualdad física absoluta entre acontecimientos. Las variaciones físicas que el instrumento no registra no pueden reconstruirse por mera exigencia de unicidad.

El [estudio de ciclos y cambio factual](bibliografia.md#ciclos) permite distinguir repetición de configuración e identidad del acontecimiento. La conservación por adición, sin sustitución, mantiene los antecedentes y sus diferencias documentadas.

## Qué significa la reversibilidad

La biyección exacta pertenece a las representaciones canónicas con su constitución. La recuperación de una fotografía desde una descripción abreviada puede admitir varias realizaciones visuales; su fidelidad semántica no prueba identidad de píxeles. Para recuperar un objeto exacto debe conservarse la información que lo individualiza, directamente o mediante una referencia inequívoca al registro.

Una paráfrasis conserva relaciones, no necesariamente todos los detalles de captura. Por ello, la cadena de texto sólo permite un retorno único al registro cuando incluye o mantiene su vinculación inequívoca. Esta condición impide confundir conservación del significado, identificación documental y reconstrucción exacta.


<!-- © 2026 Juan Antonio Lloret Egea. CC BY-NC-ND 4.0. Artículo fundacional del LBI: https://doi.org/10.21428/39829d0b.8b9c0155. -->
