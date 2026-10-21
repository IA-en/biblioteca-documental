# Corrección ciega, indeterminación y representación

El corrector utiliza la edición, los identificadores, la plantilla, las criticidades y la respuesta recibida. No recibe el nombre comercial, proveedor ni coste del candidato. La comparación es determinista dentro de ese contrato; no necesita una interpretación posterior distinta para cada modelo.

## Clasificación matemática y dictamen del contrato

Los [Fundamentos del SV, apartados 2–5](https://github.com/juantoniolloretegea/SV-matematica-semantica/blob/b8fd32978292d25adf9b87cf71e409005dce642c/documentos/fundamentos/README.md) fijan **T(n)=⌊7n/9⌋**. Para la célula (16,4), T(16)=12. El vector completo de calificaciones tiene N₀ aciertos, N₁ errores y Nᵤ indeterminaciones; sus recuentos suman 16. La clasificación matemática **κ** se obtiene en este orden:

| Condición | Clasificación κ |
| --- | --- |
| N₁ es al menos 12. | 1: No apto. |
| N₀ es al menos 12. | 0: Apto. |
| Cualquier otra combinación. | U: Indeterminado. |

El contrato del examen añade el control de criticidad prefijado: un solo error crítico determina **No apto**; una U crítica impide **Apto**. Se conserva κ por separado: quince aciertos y un error crítico dan κ=Apto y dictamen contractual=No apto. Doce aciertos y cuatro U no críticas permiten Apto. Once aciertos y cinco errores no críticos dan κ=Indeterminado y dictamen=Indeterminado; no alcanzar el umbral de aptitud no basta para declarar No apto.

La regla se identifica como **SV-FUNDAMENTOS-T7N9-CRITICIDAD-1**. Debe quedar asociada a la edición y sus condiciones antes del lanzamiento. La tabla conserva κ y dictamen separados de preparado, interrumpido o pendiente; una casilla sin dictamen no equivale a U. Los resultados de otras ediciones conservan la regla con la que se obtuvieron.

## Fallos formales y fallos del instrumento

Una respuesta íntegra y correctamente asociada que incumpla el formato exigido recibe 1 por incumplimiento formal. No se inventa un vector de dieciséis errores ni un polígono científico para ella. Una recepción truncada, un paquete defectuoso, una asociación incorrecta o un fallo de la observación local obligatoria producen una incidencia sin dictamen del candidato. El original se conserva antes de interpretar su contenido.

## Polígono SV

El polígono y el vector forman la pareja **Frame_C=(frmat, frvis)**: misma instancia, edición, respuesta, contrato y posiciones. La representación permite inspeccionar los estados que determinan κ y el dictamen. La vista egui coteja esos resultados con la misma regla Rust utilizada por el corrector y rechaza discrepancias de recuentos, umbral, dictamen u orden. Se muestran los valores, las criticidades y sus efectos, con el enunciado de cada posición y la procedencia de la evidencia. Esta convocatoria tiene sus soluciones y fundamentos publicados. En las siguientes se reservan hasta que todos los candidatos hayan finalizado, conforme a las [reglas de la edición](edicion.md). Los permisos siguen regulando el acceso a los expedientes administrativos.

Se mantiene la convención recibida: 0, rojo y radio 1; 1, verde y radio 2; U, azul y radio 3. En coordenadas matemáticas, θᵢ=2π(i−1)/16 y Vᵢ=(ρ cos θᵢ, ρ sen θᵢ). La transformación de pantalla (cₓ+s·y, cᵧ−s·x), s>0, coloca el primer vértice arriba, con recorrido horario y cierre 16→1. Los radios codifican símbolos; no son porcentajes ni gravedad clínica. Área y perímetro son magnitudes geométricas auxiliares y no sustituyen la regla de aptitud ni los criterios aceptados de clasificación entre candidatos.

Una respuesta correcta 1 frente a un enunciado falso produce calificación 0 y se representa como tal. Antes de recibir un vector completo no se dibuja un resultado aparente. La ausencia de ejecución nunca se rellena con U.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
