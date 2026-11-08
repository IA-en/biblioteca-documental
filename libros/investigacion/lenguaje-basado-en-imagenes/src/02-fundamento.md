# 3. Fundamento celular y alcance algebraico

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

Esa selección mediante campos constituye una codificación experimental de información. Su recuperación exacta no basta para acreditar que cada posición satisface el contrato semántico de una célula del Sistema Vectorial (SV). Debe explicitarse la cuestión asociada a cada posición y su correspondencia con 0, 1 y U; el agrupamiento de símbolos en una longitud cuadrada no demuestra por sí solo esa correspondencia. Los <a href="https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ce5aad1125460263904acb91142f33324ce89dfc/docs/calidad/tuberias-ia/paridad-imagen-celula-matematica/CELULA_IMAGEN_Y_AGENTES_EN_EL_SV_P1_P3_BIS_2026_09_13_V2.md" target="_blank" rel="noopener noreferrer">fundamentos de la paridad, apartado 2</a> distinguen el objeto matemático, su interpretación y la realización gráfica.

## Célula y polígono: una correspondencia biyectiva

**Cada célula constituida y su polígono canónico forman siempre un par biyectivo.** No son dos estados independientes: expresan el mismo estado mediante su forma matemática y su forma visual. El contrato conserva la instancia, la constitución, la revisión, la dimensión y el orden de las posiciones. La [Enciclopedia, entrada «Polígono del SV»](https://documentos-sv.itvia.online/enciclopedia/lenguaje#poligono) remite a la [correspondencia visual del manual, apartados 15.5 y 15.6](https://documentos-sv.itvia.online/dominios/lenguaje-de-computacion/manual/parametros-rutas#correspondencia-visual).

Para un vector **v = (v₁,…,vₙ)**, el contrato dispone las posiciones en las direcciones fijadas y asigna los radios **ρ(0)=1, ρ(1)=2, ρ(U)=3**. La representación ordenada conserva el radio de cada posición; la inversa recupera 0, 1 o U mediante esos tres valores distintos. Una escala de presentación conocida no modifica esta correspondencia. Una captura borrosa, un contorno sin orientación o una figura sin identidad no sustituyen el polígono canónico completo.

Se escribe **Frame_C = (frmat, frvis)** para expresar esta paridad. La materialización visual puede realizarse bajo demanda según el contrato; debe corresponder al estado vigente. El área o el perímetro de la figura son observables derivados, no sustitutos de la célula. El glifo que representa una manzana y un recipiente cumple otra función: expresa relaciones visuales del dominio y no reemplaza el polígono celular.

## Lectura interactiva y convención cromática

El polígono constituye la expresión visual del estado matemático de la célula y una vía de acceso a sus relaciones y evidencias. Su función es constitutiva: permite relacionar el conocimiento expresado mediante parámetros con una forma visual inspeccionable. La persona experta puede localizar una U, seleccionar su posición y examinar qué cuestión permanece indeterminada. El agente artificial especializado puede operar sobre la representación matemática y la visual, conservando su correspondencia.

La presentación interactiva vigente utiliza **rojo para 0, verde para 1 y azul para U**, en los radios 1, 2 y 3, respectivamente. Las convenciones cromáticas de documentos anteriores no se trasladan a esta edición. El color identifica un símbolo, no añade un dictamen: un 0 rojo puede expresar conformidad según la constitución. El valor, el radio y el rótulo deben permitir la lectura sin depender exclusivamente de la percepción del color.

La selección de un vértice o de su parámetro permite examinar la cuestión constituida, el valor y la evidencia vinculada. Consultar una posición no modifica su estado. La orientación matemática y su transformación de pantalla deben estar declaradas para recuperar el orden de P1 a Pn.

La analogía con la percepción humana orienta esta organización: una representación perceptible permite actuar sin tener que inspeccionar en cada ocasión todos los procesos que la producen. En el Sistema Vectorial, la persona puede interpretar el polígono sin recalcular sus valores; cuando requiera fundamentar una conclusión, la correspondencia permite recorrer los parámetros, las operaciones y las evidencias. Se trata de una analogía funcional de diseño, no de una equivalencia demostrada entre cálculo y funcionamiento biológico. La expresión verbal y otras interfaces pueden ampliar el acceso sin sustituir esta correspondencia.

La **persona experta en el dominio** y el **agente artificial especializado** son participantes distintos. Una persona especialista en inmunología interpreta los parámetros y sus evidencias desde su competencia profesional; un agente especializado en inmunología es un sistema artificial con funciones y límites declarados. La representación común facilita su cotejo, sin atribuir al agente la identidad ni la responsabilidad profesional de la persona. La misma distinción se aplica a ciberseguridad y a otros dominios. Una célula ilustrativa no agota las morfologías del Sistema Vectorial.

## Representación local y representación global

El tratado adopta una distinción de alcance dentro de esta correspondencia:

| Denominación | Objeto representado | Condición |
|---|---|---|
| *Frame* local o celular | Una célula constituida y su polígono canónico | Conservación íntegra del par biyectivo, sus parámetros y su identidad. |
| *Frame* global o compuesto | Una composición identificada de uno o varios *frames* locales y sus relaciones | Cada miembro conserva su par; la composición conserva pertenencias, funciones, dependencias y contexto. |
| Imagen fuente | Una captura o una imagen sintética de procedencia declarada | Su contenido debe transducirse y vincularse a la representación; su mera existencia no constituye una célula. |

Global y local son denominaciones de organización del Lenguaje Basado en Imágenes, subordinadas al contrato del Sistema Vectorial. Global se refiere al conjunto de una composición determinada; no significa totalidad del mundo. Local no exige recortar la fotografía. Una composición con un solo miembro no añade una segunda célula.

Si **G = (F₁,…,Fₖ; R; K)** reúne los *frames* celulares, las relaciones **R** y el contexto constituido **K**, su representación global debe conservar exactamente esos elementos. La aplicación y la inversa de la biyección celular se realizan por miembro, manteniendo R y K. No basta superponer polígonos ni retener una lista de vectores sin sus relaciones. Dos células (9,3) siguen siendo dos células: su composición no crea una célula de dieciocho posiciones.

La definición no acredita automáticamente las realizaciones experimentales. Una codificación que todavía carezca de una cuestión constituida en cada posición o de la correspondiente representación canónica conserva ese límite. Cambiar su denominación no completa su conformidad. El [capítulo 10](10-celulas.md) distingue las composiciones históricas y el [capítulo 21](25-desarrollo.md) presenta un caso posterior de una sola manzana.

## Sucesión, ciclos y trayectoria de activación

Pertenecer a una composición no equivale a suceder después de otro miembro. Color, contención y apoyo pueden describir conjuntamente una escena. La sucesión exige un orden de activaciones declarado, sin convertir el tiempo en primitiva. Un suceso global y sus sucesos locales sólo pueden relacionarse cuando se identifican el ámbito y las activaciones que se registran; una consulta informática sobre la manzana no constituye por sí misma un nuevo acontecimiento físico de la manzana.

El [conjunto matemático del cambio factual](https://doi.org/10.21428/39829d0b.2b3c9808), parte II, apartados 12.0–12.7, distingue la identidad del suceso de la repetición de un estado bajo constituciones compatibles. Un ciclo no borra la nueva activación. La parte IV define la Trayectoria Poligonal de Activación: una curva construida con activaciones y observables declarados. **El polígono celular y la trayectoria de activación son representaciones diferentes.**

Por ejemplo, los vectores **00000000U** y **U00000000** contienen una U, pero no tienen el mismo estado posicional. Una curva que sólo conserve el número de U no permite reconstruir cuál de los dos ocurrió. Tampoco demuestra por sí sola un ciclo. Para reconstruir una sucesión global desde sus representaciones locales deben conservarse las agrupaciones, los vínculos y la correspondencia entre activaciones. Una relación de pertenencia no proporciona ese orden automáticamente.

## Transparencia del recorrido

La lectura visual debe mantener acceso a la secuencia que fundamenta sus resultados: fuente, constitución, reglas, operandos, estados intermedios, cálculos y conclusión. Cada estado celular conserva su polígono correspondiente. Las aproximaciones numéricas de presentación remiten al valor exacto o a una expresión recuperable; no reemplazan el cálculo verificable. La expresión verbal explica ese recorrido sin sustituir el registro de las operaciones efectivamente realizadas. Esta obligación permite examinar la misma conclusión desde sus formas visual y matemática, y repetir su obtención bajo las condiciones declaradas.

## Operaciones y estructuras

Llamar vector a una sucesión ordenada no demuestra que su conjunto sea un espacio vectorial. Para afirmar propiedades de grupo, anillo o cuerpo deben definirse las operaciones y comprobarse sus axiomas. En particular, U no se convierte en un número por ocupar la tercera posición de un alfabeto.

Un análisis que emplee otra codificación numérica puede servir como instrumento externo, pero debe demostrar que conserva la interpretación del Sistema Vectorial (SV). Este tratado no añade operaciones algebraicas al núcleo ni deduce conmutatividad de una representación gráfica. El orden de los acontecimientos y los papeles de los participantes pueden ser esenciales y no conmutativos.

Fuente principal: <a href="https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/correccion.html" target="_blank" rel="noopener noreferrer">corrección, célula y clasificación del Sistema Vectorial (SV)</a>.



<!-- Autoría: © 2026 Juan Antonio Lloret Egea. CC BY-NC-ND 4.0. https://doi.org/10.21428/39829d0b.8b9c0155. -->
