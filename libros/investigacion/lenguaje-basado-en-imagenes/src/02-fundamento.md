# 2. Fundamento celular y alcance algebraico

La célula se expresa como **(n,b)**, con **n=b²** y b entero mayor o igual que 3 en la familia aquí utilizada. Sus n posiciones ordenadas toman valores del alfabeto **Σ={0,1,U}**. Una célula de dimensión n admite 3ⁿ configuraciones de esos símbolos.

| Célula | Posiciones | Configuraciones |
| --- | ---: | --- |
| (9,3) | 9 | 3⁹ |
| (16,4) | 16 | 3¹⁶ |
| (25,5) | 25 | 3²⁵ |
| (36,6) | 36 | 3³⁶ |
| (49,7) | 49 | 3⁴⁹ |

La cota actualmente documentada de autorización es (49,7). No agota la familia matemática ni acredita automáticamente todas las dimensiones en cada recorrido de ejecución. La edición de una prueba debe declarar tanto su célula como la capacidad efectivamente comprobada para utilizarla.

## Qué contiene un parámetro

Cada posición contiene un único valor de la terna. El nombre de un objeto, una palabra o una explicación no ocupa esa posición. El significado procede de la constitución que fija el orden, el dominio y la interpretación de los valores. Las definiciones documentales acompañan a la célula; no se confunden con sus valores.

En la codificación del caso, ciertos valores 0 y 1 seleccionan referentes y relaciones; otros campos contienen el estado semántico. Ambos usos están definidos y no se intercambian. Un valor aislado, sin su posición y su constitución, no identifica una acción.

Esa selección mediante campos constituye una codificación experimental de información. Su recuperación exacta no basta para acreditar que cada posición satisface el contrato semántico de una célula del Sistema Vectorial (SV). Debe explicitarse la cuestión asociada a cada posición y su correspondencia con 0, 1 y U; el agrupamiento de símbolos en una longitud cuadrada no demuestra por sí solo esa correspondencia. Los [fundamentos de la paridad, apartado 2](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ce5aad1125460263904acb91142f33324ce89dfc/docs/calidad/tuberias-ia/paridad-imagen-celula-matematica/CELULA_IMAGEN_Y_AGENTES_EN_EL_SV_P1_P3_BIS_2026_09_13_V2.md) distinguen el objeto matemático, su interpretación y la realización gráfica.

## Operaciones y estructuras

Llamar vector a una sucesión ordenada no demuestra que su conjunto sea un espacio vectorial. Para afirmar propiedades de grupo, anillo o cuerpo deben definirse las operaciones y comprobarse sus axiomas. En particular, U no se convierte en un número por ocupar la tercera posición de un alfabeto.

Un análisis que emplee otra codificación numérica puede servir como instrumento externo, pero debe demostrar que conserva la interpretación del Sistema Vectorial (SV). Este tratado no añade operaciones algebraicas al núcleo ni deduce conmutatividad de una representación gráfica. El orden de los acontecimientos y los papeles de los participantes pueden ser esenciales y no conmutativos.

Fuente principal: [corrección, célula y clasificación del Sistema Vectorial (SV)](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/correccion.html).

