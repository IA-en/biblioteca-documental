# Corrección ciega, indeterminación y representación

El corrector utiliza la edición, los identificadores, la plantilla, las criticidades y la respuesta recibida. No recibe el nombre comercial, proveedor ni coste del candidato. La comparación es determinista dentro de ese contrato; no necesita una interpretación posterior distinta para cada modelo.

## Célula de cada prueba y cota autorizada

La célula se expresa como **(n,b), con n=b² y b entero**. En la familia descrita por los [Fundamentos del SV, apartado 3](https://github.com/juantoniolloretegea/SV-matematica-semantica/blob/b8fd32978292d25adf9b87cf71e409005dce642c/documentos/fundamentos/README.md), b≥3. La relación no establece una dimensión máxima del SV: cada célula tiene un número finito de posiciones, pero la familia no queda agotada por la mayor dimensión utilizada.

**La célula máxima actualmente autorizada es (49,7), a 22 de octubre de 2026.** Esta cota de autorización no es un límite matemático. Tampoco acredita que todos los recorridos del Gestor ejecuten ya todas las dimensiones autorizadas. La edición de la prueba identifica su célula, el orden y significado de sus posiciones, la regla de corrección y las capacidades comprobadas para ejecutarla. Véase [Identificación de la célula en la edición](edicion.md#identificación-de-la-célula-en-la-edición).

**EET-CYB16 utiliza (16,4)** tanto en su edición general como en la adaptada a Markdown. Sus dieciséis posiciones y su umbral de doce pertenecen a esta convocatoria. No definen la dimensión de otros exámenes ni la de los Universos científicos de sus fuentes. Una composición conserva la identidad de cada célula y su contrato de relación; por ejemplo, el par (36,6) y (9,3) no se convierte en una célula (45,b).

## Clasificación matemática y dictamen del contrato

Los [Fundamentos del SV, apartados 2–5](https://github.com/juantoniolloretegea/SV-matematica-semantica/blob/b8fd32978292d25adf9b87cf71e409005dce642c/documentos/fundamentos/README.md) fijan **T(n)=⌊7n/9⌋**. El vector completo de calificaciones tiene N₀ aciertos, N₁ errores y Nᵤ indeterminaciones; **N₀+N₁+Nᵤ=n**. La clasificación matemática **κ** se obtiene en este orden:

| Condición | Clasificación κ |
| --- | --- |
| N₁ es al menos T(n). | 1: No apto. |
| N₀ es al menos T(n). | 0: Apto. |
| Cualquier otra combinación. | U: Indeterminado. |

| Célula | Posiciones n | Umbral T(n) |
| --- | ---: | ---: |
| (9,3) | 9 | 7 |
| (16,4), utilizada en EET-CYB16 | 16 | 12 |
| (25,5) | 25 | 19 |
| (36,6) | 36 | 28 |
| (49,7), cota actualmente autorizada | 49 | 38 |

La tabla aplica la fórmula; no acredita por sí misma exámenes realizados ni capacidades instaladas.

El contrato del examen añade el control de criticidad prefijado: un solo error crítico determina **No apto**; una U crítica impide **Apto**. Se conserva κ por separado del dictamen contractual.

**Ejemplos exclusivos de EET-CYB16, célula (16,4):** quince aciertos y un error crítico dan κ=Apto y dictamen contractual=No apto. Doce aciertos y cuatro U no críticas permiten Apto. Once aciertos y cinco errores no críticos dan κ=Indeterminado y dictamen=Indeterminado; no alcanzar el umbral de aptitud no basta para declarar No apto.

La regla se identifica como **SV-FUNDAMENTOS-T7N9-CRITICIDAD-1**. Debe quedar asociada a la edición y sus condiciones antes del lanzamiento. La tabla conserva κ y dictamen separados de preparado, interrumpido o pendiente; una casilla sin dictamen no equivale a U. Los resultados de otras ediciones conservan la regla con la que se obtuvieron.

## Fallos formales y fallos del instrumento

Una respuesta íntegra y correctamente asociada cuyo campo de respuestas incumpla el formato exigido recibe 1 por incumplimiento formal. No se inventa un vector de errores ni un polígono científico para ella. Una recepción truncada, un paquete defectuoso, una asociación incorrecta o un fallo de la observación local obligatoria producen una incidencia sin dictamen del candidato. El original se conserva antes de interpretar su contenido.

Las explicaciones no puntúan. Un defecto de su formato no invalida respuestas válidas cuando pueden separarse sin ambigüedad: identificadores únicos, orden exigido, valores de la terna y delimitación inequívoca. El fragmento defectuoso se conserva literalmente y su limitación queda visible. No se reparan respuestas ni se infiere su contenido desde la prosa. La falta de una llave al final de un objeto auxiliar puede conservarse como defecto cuando un corchete presente delimita inequívocamente ese bloque, las cadenas están completas y no contiene otro campo de respuestas. No se inserta la llave ni se reconstruye la explicación. Las respuestas siguen exigiendo su formato estricto; sus duplicados, los cierres que no permiten delimitar los bloques, las cadenas inconclusas o el contenido exterior impiden la separación.

Si se corrige el instrumento de lectura, se comprueban todos los originales afectados con el mismo criterio. La rectificación conserva la corrección anterior, el motivo y las huellas; no requiere repetir el examen ni cambia sus reglas, fuentes, tiempos o consumos. La representación se publica sólo después de comprobar su concordancia con la corrección revisada.

## Polígono SV

El polígono y el vector forman la pareja **Frame_C=(frmat, frvis)**: misma instancia, edición, respuesta, contrato y posiciones. La representación permite inspeccionar los estados que determinan κ y el dictamen. La vista egui coteja esos resultados con la misma regla Rust utilizada por el corrector y rechaza discrepancias de recuentos, umbral, dictamen u orden. Se muestran los valores, las criticidades y sus efectos, con el enunciado de cada posición y la procedencia de la evidencia. Esta convocatoria tiene sus soluciones y fundamentos publicados. En las siguientes se reservan hasta que todos los candidatos hayan finalizado, conforme a las [reglas de la edición](edicion.md). Los permisos siguen regulando el acceso a los expedientes administrativos.

Se mantiene la convención recibida: 0, rojo y radio 1; 1, verde y radio 2; U, azul y radio 3. Para una célula de n posiciones, en coordenadas matemáticas, θᵢ=2π(i−1)/n, con i de 1 a n, y Vᵢ=(ρ cos θᵢ, ρ sen θᵢ). La transformación de pantalla (cₓ+s·y, cᵧ−s·x), s>0, coloca el primer vértice arriba, con recorrido horario y cierre n→1. En EET-CYB16, n=16 y el cierre es 16→1. Los radios codifican símbolos; no son porcentajes ni gravedad clínica. Área y perímetro son magnitudes geométricas auxiliares y no sustituyen la regla de aptitud ni los criterios aceptados de clasificación entre candidatos.

Una respuesta correcta 1 frente a un enunciado falso produce calificación 0 y se representa como tal. Antes de recibir un vector completo no se dibuja un resultado aparente. La ausencia de ejecución nunca se rellena con U.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
