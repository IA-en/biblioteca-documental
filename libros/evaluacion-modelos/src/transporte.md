# Transporte, conservación y mediciones

> **Estado de esta versión:** autenticación y catálogo no envían contenido documental. El contador oficial dispone de un recorrido independiente, sujeto a autorización expresa para los originales y destinatario concretos. Contar no genera respuestas ni autoriza el examen. La generación sigue bloqueada hasta recibir las condiciones y la autorización específica de ejecución; producción permanece deshabilitada.


La igualdad exigible se refiere al contenido documental, al contrato de examen y a sus condiciones registradas. Los servicios pueden requerir envolturas técnicas diferentes. Cada adaptación debe acreditar que mantiene el contenido íntegro, no incorpora la plantilla y no transforma el significado de las instrucciones. Usar el mismo nombre de modelo no prueba identidad de configuración ni de contexto.

La preparación conserva la edición, el orden presentado, las huellas de documentos y paquete, la identidad del adaptador y la configuración exacta del destinatario cuando se haya seleccionado. La capacidad de contexto debe medirse con el procedimiento apropiado para esa configuración; no se infiere sólo del tamaño en bytes o de una denominación comercial.

El límite total consume tiempo efectivo de entrega y recepción: 32 minutos por defecto, con referencia de 2 minutos por pregunta sin corte individual. Ambos valores se configuran antes del intento y deben concordar con la edición. Cada incidencia acreditada admite 5 minutos para resolverse y pausa el límite efectivo. Se conservan tiempo activo, pausas y duración del transporte por separado. Una comunicación cortada después del envío deja incierto el procesamiento remoto hasta obtener evidencia. No se repite automáticamente la solicitud. Cada nuevo intento requiere identidad y fundamento propios; no reemplaza el anterior ni convierte el coste desconocido en cero.

Un corte irreversible después de entregar la petición detiene el intento, conserva lo recibido y no produce reenvío ni dictamen. Los cinco minutos corresponden a incidencias recuperables dentro de la misma solicitud; no autorizan a repetirla.

## Atribución de incidencias

| Hecho observado | Registro correspondiente |
| --- | --- |
| El original no cabe o faltan recursos. | Preparación detenida, sin envío ni dictamen. |
| La adaptación altera el paquete. | Defecto del instrumento, sin calificación del candidato. |
| El servicio no confirma la recepción completa. | Incidencia de transporte y efectos pendientes de conciliación. |
| Hay respuesta íntegra con formato incorrecto. | Consecuencia formal fijada en la edición. |
| Hay respuesta íntegra válida con errores de contenido. | Corrección por plantilla y criticidad. |

La investigación de una incidencia conserva lo observado y su referencia. Un error HTTP o una interrupción no bastan por sí solos para atribuir responsabilidad a GitHub, al alojamiento o al proveedor del modelo.

## Telemetría

La duración observada por el SV, los tokens comunicados por el proveedor, los consumos auxiliares y el coste se registran con unidad, procedencia y estado de disponibilidad. Un contador ausente permanece ausente. El consumo agregado de una cuenta compartida no se imputa automáticamente al examen.

Las explicaciones y revisiones adversariales se solicitan por pregunta en la misma entrega y se conservan sin puntuación. Se distingue lo declarado por el modelo de las mediciones del SV y los contadores del proveedor. Un relato no prueba el proceso interno que describe.

La observación local utiliza OpenTelemetry Rust y conserva inicio, muestras y cierre en el almacenamiento del Gestor, sin exportación a un proveedor de IA. CPU, memoria y E/S corresponden al proceso compartido del Gestor; no describen el hardware remoto ni pueden atribuirse íntegramente a un candidato. El primer fragmento HTTP tampoco acredita el primer token generado. Las pausas del examen no suspenden esta observación.

El cierre comprueba la integridad y el estado de la observación obligatoria. Si falta capacidad para conservarla, el intento no se inicia; si falla durante la ejecución, se detiene, conserva lo recuperado y queda sin dictamen ni clasificación. Un contador opcional que el proveedor no comunique permanece como no disponible y no se convierte en fallo local.

Las evidencias publicadas deben mantener unidad, procedencia, ámbito y disponibilidad. Los campos nativos de razonamiento, caché o uso no se suman de nuevo cuando son subconjuntos de otros totales. Coste comunicado, cálculo comparable e importe facturado y conciliado conservan significados distintos.

---

## Aislamiento y frontera: referencias comunes

El Gestor distingue dos obligaciones complementarias: [Aislamiento y entrega de datos](https://administracion.itvia.online/aislamiento-ia) distingue la conexión sin contenido, el recuento documental autorizado y el examen con habilitación expresa; [IA, frontera y núcleo](https://administracion.itvia.online/ia-frontera-nucleo) explica el transporte por la tubería del SV y la instrucción de frontera, sin acceso directo de la IA al núcleo. Ambas secciones reúnen las fuentes y los límites de la versión. La norma [Código limpio y auditable](https://administracion.itvia.online/normas/codigo-limpio) es de aplicación obligatoria al desarrollo. Estas referencias no conceden autorización de ejecución.

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).

