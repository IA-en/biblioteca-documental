# Corrección ciega, indeterminación y representación

El corrector utiliza la edición, los identificadores, la plantilla, las criticidades y la respuesta recibida. No recibe el nombre comercial, proveedor ni coste del candidato. La comparación es determinista dentro de ese contrato; no necesita una interpretación posterior distinta para cada modelo.

## Regla agregada 16/12-v1

La primera edición adopta doce aciertos sobre dieciséis, con control de posiciones críticas. Sean **a** los aciertos observados y **u** las respuestas U. Se aplica la siguiente tabla, en este orden:

| Condición | Dictamen |
| --- | --- |
| Hay un error crítico, o a + u es menor que 12. | 1: No apto. |
| Todas las posiciones críticas son correctas y a es al menos 12. | 0: Apto dentro de la edición. |
| Cualquier otra combinación. | U: Indeterminado. |

El cálculo a + u sólo determina si la indeterminación puede afectar al resultado. No convierte U en acierto ni concede puntos. Doce aciertos y cuatro U no críticas pueden demostrar aptitud; una U crítica la impide. Once aciertos, cuatro errores no críticos y una U dejan el resultado indeterminado. Un error crítico mantiene el dictamen adverso aunque exista otra posición U.

La regla es propia de esta edición. No modifica la terna primitiva, no redefine la clasificación general del SV ni recalifica resultados históricos. La tabla comparativa reserva la columna de dictamen a 0, 1 o U cuando existe un dictamen emitido. Los estados preparado, interrumpido y pendiente pertenecen a otra columna. Una casilla sin dictamen no equivale a U.

## Fallos formales y fallos del instrumento

Una respuesta íntegra y correctamente asociada que incumpla el formato exigido recibe 1 por incumplimiento formal. No se inventa un vector de dieciséis errores ni un polígono científico para ella. Una recepción truncada, un paquete defectuoso o una asociación incorrecta producen una incidencia sin dictamen del candidato. El original se conserva antes de interpretar su contenido.

## Polígono SV

Se representa el vector completo de **calificaciones**, en orden canónico. Se mantiene la convención recibida: 0, rojo y radio 1; 1, verde y radio 2; U, azul y radio 3. El primer vértice se sitúa arriba y el recorrido visual es horario. Los radios identifican símbolos; no expresan cantidades, porcentajes ni gravedad clínica. El área no constituye una puntuación adicional.

Una respuesta correcta 1 frente a un enunciado falso produce calificación 0 y se representa como tal. Antes de recibir un vector completo no se dibuja un resultado aparente. La ausencia de ejecución nunca se rellena con U.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
