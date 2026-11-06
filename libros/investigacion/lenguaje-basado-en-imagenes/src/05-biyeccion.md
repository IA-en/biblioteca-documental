# 6. Biyección canónica y reconstrucción con pérdida

La biyección debe definirse entre objetos bien delimitados. El prototipo exige que cada representación visual canónica corresponda a una única composición celular y que su inversa recupere la misma representación lógica. Se ha comprobado esa recuperación en los once *frames* del caso y en los contrastes conservados. Este resultado finito no constituye una demostración para todas las entradas que pudiera admitir el algoritmo. El dominio admitido, el orden de lectura, el repertorio y la identidad de la aparición forman parte del contrato.

El lienzo lógico contiene 1024 × 1024 muestras. La cabecera visual registra serie, ordinal y número de relaciones. La lectura de las plantillas y sus emplazamientos recupera la información desde la imagen; no consulta un vector oculto en los metadatos del archivo.

Las dos igualdades exigidas son:

- Recuperar la representación de un *frame* devuelve ese mismo *frame* constituido.
- Representar la recuperación de una imagen canónica devuelve exactamente sus muestras lógicas.

Una región alterada, un trazo desconocido o información añadida impiden tratar la entrada como canónica. El rechazo del instrumento no se convierte en un valor U de la escena.

## Qué no afirma esta biyección

No afirma que toda fotografía arbitraria posea una única descripción ni que una breve frase permita reconstruir sus píxeles originales. Tampoco exige identidad entre archivos comprimidos de distinta manera que representan la misma imagen lógica. El objeto de comparación debe quedar establecido antes de la comprobación.

Si distintas imágenes conservan el mismo núcleo y se reducen al mismo estado semántico, esa reducción no es inyectiva sobre las imágenes originales. Puede definirse una equivalencia semántica o conservarse información visual adicional suficiente, pero no atribuir a la reducción una inversa exacta que ya no posee.

## Dos compromisos de reconstrucción

La reconstrucción exacta exige conservar la información necesaria para obtener el mismo objeto visual. La reconstrucción con pérdida exige conservar todos los parámetros críticos y alcanzar el criterio de aptitud prefijado. Una huella permite verificar identidad contra un objeto disponible; no contiene por sí sola la información necesaria para reconstruirlo.

La economía debe declarar el coste del núcleo, de la base visual compartida y de los datos adicionales de reconstrucción. Trasladar información a una leyenda o un repertorio no hace desaparecer ese coste.

## Obligación formal y evidencia disponible

Sean C el conjunto de composiciones admitidas bajo una constitución fija, I el conjunto de imágenes canónicas y R: C → I la representación. Para afirmar una biyección deben definirse ambos conjuntos y una función D: I → C, y demostrar D(R(c))=c para todo c de C y R(D(i))=i para todo i de I. La comprobación de esas igualdades en once ejemplos aporta evidencia del caso; no sustituye los cuantificadores universales.

La <a href="https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ce5aad1125460263904acb91142f33324ce89dfc/docs/calidad/tuberias-ia/paridad-imagen-celula-matematica/CELULA_IMAGEN_Y_AGENTES_EN_EL_SV_P1_P3_BIS_2026_09_13_V2.md" target="_blank" rel="noopener noreferrer">especificación de paridad entre célula e imagen, apartado 6</a> exige declarar los objetos comparados y cualquier información adicional necesaria para el retorno. La [delimitación de evidencia](19-verificacion.md) distingue esas obligaciones de las comprobaciones ejecutadas.

## Retorno desde texto y equivalencia entre idiomas

Sea s la interpretación de una expresión verbal bajo la constitución declarada. Dos expresiones t y t′ son semánticamente equivalentes cuando s(t)=s(t′) para todas las distinciones exigidas: participantes, papeles, acciones, negación, orden, ámbito y finalidad. Esta relación permite admitir paráfrasis y traducciones sin exigir identidad de palabras. No demuestra que cualquier lector, traductor o procedimiento recupere correctamente s.

Definir s no equivale a disponer de un procedimiento fiable que la calcule sobre cualquier texto libre. La igualdad anterior establece el criterio que debe satisfacerse, no demuestra que un modelo lo satisfaga. La coherencia de una explicación, su coincidencia con otra explicación o un retorno obtenido mediante el mismo intérprete pueden conservar un error compartido. La fidelidad semántica requiere una comprobación independiente de las relaciones nucleares.

La recuperación desde texto requiere tanto el contenido nuclear suficiente como la referencia inequívoca al suceso. Dos acontecimientos distintos pueden admitir la misma frase; esa frase aislada no determina cuál se pretende recuperar. Una expresión asociada a su constitución, identidad y datos de retorno puede formar parte del registro canónico. La pluralidad de formulaciones pertenece a una clase de equivalencia semántica y no a una biyección literal entre todas las frases posibles y un único vector.

Por ejemplo, «el perro depositó el pescado para el gato» y «el gato recibió del perro el pescado» pueden coincidir respecto de determinados papeles, pero la segunda expresión no conserva necesariamente el plato como destino ni el acto de depositar. La admisión depende de los parámetros constituidos, no de la fluidez de la paráfrasis. La reconstrucción visual deberá satisfacer el [criterio de aptitud](14-evaluacion.md) y todos los parámetros críticos.

Estas condiciones desarrollan la distinción entre contenido e identidad de la <a href="https://doi.org/10.21428/39829d0b.8b9c0155" target="_blank" rel="noopener noreferrer">publicación académica vinculada, apartado 2.4</a>.



<!-- Autoría: © 2026 Juan Antonio Lloret Egea. CC BY-NC-ND 4.0. https://doi.org/10.21428/39829d0b.8b9c0155. -->
