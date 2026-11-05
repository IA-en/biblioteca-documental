# 7. Economía de la célula del Lenguaje Basado en Imágenes (LBI)

La economía consiste en conservar lo necesario con la menor representación admitida por un contrato definido. No consiste en contar palabras ni en reducir arbitrariamente una narración a nueve nombres. La repetición del plato en distintas escenas permite reutilizar su referente; sus relaciones y apariciones mantienen, sin embargo, su identidad.

La elección de la composición del caso sigue cuatro criterios ordenados: menor capacidad total suficiente, menor dimensión máxima, menor número de células y orden canónico de dimensiones para resolver empates. Ese orden de prioridades define un problema concreto de optimización.

| Magnitud del caso | Resultado |
| --- | ---: |
| Apariciones | 11 |
| Relaciones constituidas | 28 |
| Posiciones informativas de la historia | 832 |
| Capacidad de las composiciones | 834 |
| Células (9,3) | 50 |
| Células (16,4) | 24 |
| Plantillas compartidas, incluida la blanca | 37 |
| Posiciones de la base gráfica comprimida | 59 521 |
| Historia y base gráfica | 60 355 |

El prototipo incorpora dos posiciones de reserva para ajustar las composiciones. Esta decisión se conserva como antecedente experimental, pero no acredita conformidad con la exigencia de constituir cada posición celular. La <a href="https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ce5aad1125460263904acb91142f33324ce89dfc/docs/calidad/tuberias-ia/paridad-imagen-celula-matematica/CELULA_IMAGEN_Y_AGENTES_EN_EL_SV_P1_P3_BIS_2026_09_13_V2.md" target="_blank" rel="noopener noreferrer">especificación de dimensión y representación, apartados 2 y 2.3</a> no permite redondear, truncar ni rellenar una célula para adaptarla al soporte. Las reservas se localizan en las composiciones de los *frames* 3 y 5; no son indeterminaciones semánticas. Una revisión deberá eliminar la necesidad de reserva o aportar una constitución legítima, sin atribuir significado a posteriori sólo para completar una dimensión. La gramática, las reglas y su documentación tienen un coste adicional que la última fila no incluye.

Una frontera entre células puede dividir un campo de una relación. El contrato de composición conserva el conjunto y su orden; no atribuye a cada fragmento aislado el significado de la relación completa. La tabla de [composiciones](10-celulas.md) permite inspeccionar ese reparto.

La comprobación conservada del criterio de elección está limitada a esta codificación y a un intervalo finito de longitudes. No demuestra minimalidad sobre toda narración posible ni resuelve la conformidad de las reservas. No se ha demostrado un vocabulario visual universal mínimo. La economía tampoco autoriza a fusionar acontecimientos distintos, perder un participante crítico o eliminar el vínculo entre la imagen, su representación y su célula.

## Criterio de adecuación y tamaño mínimo

La <a href="https://doi.org/10.21428/39829d0b.bebc607c" target="_blank" rel="noopener noreferrer">formulación de aprendizaje trazable, apartado 6.2</a>, define la economía respecto de un contenido finito y de un predicado de adecuación declarado: se selecciona la menor base admisible cuya célula permita la reconstrucción, comparación y buena formación exigidas. La existencia de un mínimo presupone que alguna base satisface el predicado. Esta regla no demuestra que cualquier representación concreta sea mínima ni elimina el coste del repertorio compartido.



<!-- Autoría: © 2026 Juan Antonio Lloret Egea. Licencia: CC-BY-NC-ND-4.0 para contenidos propios. Publicación académica vinculada: https://doi.org/10.21428/39829d0b.8b9c0155. -->
