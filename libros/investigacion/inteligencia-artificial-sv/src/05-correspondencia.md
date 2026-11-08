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

De ellos se obtienen <strong class="math notranslate" translate="no">P = μ − λ = 2ᵐ⁺¹ + 2C + 1</strong> e <strong class="math notranslate" translate="no">I = μ + λ = 2ᵐ⁺² − 1</strong>. La longitud y la constitución hacen posible recuperar C. Por ejemplo, en un control aritmético reducido con m=3 y C=5, μ=29, λ=2, P=27 e I=31; el retorno C=(27−16−1)/2 devuelve 5. Este control no representa por sí solo una imagen válida del convenio completo, que exige los datos de identificación, las dimensiones y las muestras.

La proyección del tratado utiliza N=m+2, q=P/2ᴺ y <strong class="math notranslate" translate="no">δ=64·ln(1+10q)/ln(11)</strong>. En el régimen s=64, <strong class="math notranslate" translate="no">μ<sub>Atlas</sub>=64+δ/2</strong> y <strong class="math notranslate" translate="no">λ<sub>Atlas</sub>=64−δ/2</strong>. Por tanto, la diferencia polar es δ y la intensidad es 128. El [capítulo de potencial del tratado](https://documentos-sv.itvia.online/investigacion/lenguaje-basado-en-imagenes/17-potencial.html) desarrolla la normalización, los cálculos completos y el retorno, con fuentes de la [colección de Matemáticas del Potencial](bibliografia.md#potencial).

Dos valores que coincidan al redondearse no quedan identificados por esa cifra. El registro conserva la representación exacta y la precisión de consulta. El potencial digital tampoco constituye por sí solo una distancia semántica: dos imágenes conceptualmente próximas pueden tener codificaciones muy diferentes. Las comparaciones de significado requieren las relaciones visuales constituidas.

## Imagen, individuo y repetición

El potencial de una imagen que contiene dos aves se calcula sobre esa representación digital. El potencial de cada ave requiere la regla y los datos del dominio correspondiente. Recortar un ave produce otra imagen; calcular su potencial no equivale automáticamente a medir el potencial biológico del individuo. Las referencias entre dominios conservan esa distinción.

Una nueva captura se incorpora como otro registro. Si dos archivos contienen exactamente la misma representación normalizada, el convenio digital produce el mismo valor; no se altera artificialmente el cálculo para fabricar una diferencia. La identidad de las apariciones y sus contextos permite distinguir los registros. Una captura finita no demuestra igualdad física absoluta entre acontecimientos. Las variaciones físicas que el instrumento no registra no pueden reconstruirse por mera exigencia de unicidad.

El [estudio de ciclos y cambio factual](bibliografia.md#ciclos) permite distinguir repetición de configuración e identidad del acontecimiento. La conservación por adición, sin sustitución, mantiene los antecedentes y sus diferencias documentadas.

## Registro verificable del razonamiento

Cada respuesta debe conservar la secuencia efectiva que la produjo: entradas y versiones, reglas aplicadas, parámetros examinados, estados celulares intermedios y sus polígonos, cálculos con sus operandos y precisión, relaciones de dependencia, resultado y fundamento de una eventual abstención. Las aproximaciones de presentación mantienen acceso al valor exacto o a su expresión recuperable. La explicación verbal acompaña a esa secuencia, pero no la sustituye.

La posibilidad de consultar los cálculos no obliga a la persona a rehacerlos para utilizar la representación visual. Sí exige que un examen posterior pueda reconstruirlos y repetir las operaciones bajo las mismas condiciones. Cuando falte un tramo del recorrido, no puede declararse auditabilidad de extremo a extremo. Los resultados del [capítulo 10](10-ensayos.md) delimitan las operaciones efectivamente comprobadas y las capacidades pendientes.

## Qué significa la reversibilidad

La biyección exacta pertenece a las representaciones canónicas con su constitución. La recuperación de una fotografía desde una descripción abreviada puede admitir varias realizaciones visuales; su fidelidad semántica no prueba identidad de píxeles. Para recuperar un objeto exacto debe conservarse la información que lo individualiza, directamente o mediante una referencia inequívoca al registro.

Una paráfrasis conserva relaciones, no necesariamente todos los detalles de captura. Por ello, la cadena de texto sólo permite un retorno único al registro cuando incluye o mantiene su vinculación inequívoca. Esta condición impide confundir conservación del significado, identificación documental y reconstrucción exacta.


## Paridad celular y composición global

La analogía funcional con la percepción humana distingue la representación accesible de los procesos que la producen. La persona interpreta el polígono sin necesidad de rehacer cada cálculo; el sistema conserva el recorrido hacia parámetros, operaciones y evidencias cuando se requiere justificar una conclusión. Este principio de diseño no afirma equivalencia biológica. La expresión verbal u otras interfaces amplían el acceso y mantienen su vínculo con la misma representación constituida.

El polígono es la expresión visual constitutiva del estado matemático y permite inspeccionar sus parámetros y evidencias. La persona experta en un dominio y el agente artificial especializado pueden consultar la misma representación sin confundirse entre sí. El agente opera con las formas matemática y visual; la persona experta dispone de una lectura interactiva para localizar, por ejemplo, una U y examinar su fundamento. La convención cromática vigente asigna rojo a 0, verde a 1 y azul a U; los rótulos y radios conservan la lectura sin depender exclusivamente del color. Cada selección debe mantener el vínculo con el parámetro y la revisión correspondientes. El [fundamento del tratado](https://documentos-sv.itvia.online/investigacion/lenguaje-basado-en-imagenes/02-fundamento.html) desarrolla esta función y distingue la constitución celular de su composición global.

La célula y el polígono canónico forman siempre un par biyectivo: <strong><span class="math notranslate" translate="no">Frame_C = (frmat, frvis)</span></strong>. La constitución, el orden, la instancia y la revisión son los mismos en las dos representaciones. Los radios 1, 2 y 3 corresponden respectivamente a 0, 1 y U. El [manual, apartados 15.5–15.6](https://documentos-sv.itvia.online/dominios/lenguaje-de-computacion/manual/parametros-rutas#correspondencia-visual), establece esta paridad.

El tratado distingue el *frame* local, referido a ese par celular, y el *frame* global, referido a su composición identificada. Una composición conserva cada par y las relaciones entre miembros; no crea por agregación una célula de otra dimensión. Una única célula puede constituir toda la representación de una escena dentro del perfil admitido.

La sucesión exige activaciones y dependencias documentadas. No se deduce del orden de almacenamiento ni del número de consultas efectuadas. La [Trayectoria Poligonal de Activación](https://doi.org/10.21428/39829d0b.2b3c9808), definida en la parte IV de su publicación, representa observables sobre activaciones; no es el polígono de una célula. La repetición de un observable no demuestra identidad de estado ni de suceso. La recuperación de un conjunto desde sus miembros exige conservar agrupación, relaciones, contexto y correspondencias de activación.

La formalización de estos requisitos no acredita su realización íntegra en todos los antecedentes. El [capítulo 10](10-ensayos.md) distingue las instancias registradas, las realizaciones instrumentales y sus límites.

<!-- © 2026 Juan Antonio Lloret Egea. CC BY-NC-ND 4.0. Publicación de arquitectura: https://doi.org/10.21428/39829d0b.0481eae3. Artículo fundacional del LBI: https://doi.org/10.21428/39829d0b.8b9c0155. -->
