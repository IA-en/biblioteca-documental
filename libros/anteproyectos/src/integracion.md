# Condiciones de integración y evolución compatible

**Objeto:** prever relaciones estables para ampliar la supervisión sin confundir datos, facultades o autoridad. Estas previsiones son requisitos de diseño; no acreditan tablas, permisos ni interfaces ya implementados.

## Identidad y responsabilidad

Toda observación debe relacionarse con una instalación y su titular. Supervisar recursos del propio SV y supervisar una institución que utiliza el SV son actuaciones distintas. En una auditoría externa se identifican además el expediente, los recursos autorizados y los límites de la intervención.

Las autorizaciones distinguen persona o servicio, función, operación, recurso, dominio de conocimiento, finalidad y vigencia. Nombrar a un responsable no concede automáticamente facultades. El derecho a observar no implica el derecho a intervenir, transmitir contenido a un modelo o cambiar la configuración.

La metodología común se consulta en [Autoridad y ámbito de la supervisión](https://github.com/juantoniolloretegea/SVperitus-dataset/blob/main/agentes/ciberseguridad-inteligente/SUPERVISION-Y-AUDITORIA-DE-SISTEMAS.md#autoridad-y-ámbito). Una dirección de red, un nombre de equipo o una división administrativa no sustituyen la constitución de un dominio del SV.

## Relaciones que deben poder conservarse

| Relación | Información necesaria para estudiarla y comprobarla |
|---|---|
| Fuente y activo | Identidad, instalación, cobertura, unidades, versión y condición de disponibilidad. |
| Observación y expediente | Procedencia, adquisición, integridad, pérdidas y autorización de conservación. |
| Parámetro y evidencia | Definición, Universo propietario, versión, pregunta del caso y evidencia utilizada. |
| Herramienta y operación | Capacidades comprobadas, entradas admitidas, salidas, finalidad y límites. |
| Asistencia y autorización | Modelo, versión, destinatario, datos permitidos, vigencia y facultades del experto. |
| Suceso y representación | Identidad del suceso, vector, célula, versión y enlace a su fundamento. |

Esta tabla describe relaciones documentales, no una ampliación de la gramática ni de la representación intermedia (IR). Una implementación deberá materializarlas mediante tipos y versiones explícitos, reutilizando registros competentes sin crear catálogos paralelos contradictorios.

## Fronteras

La adquisición externa, la temporización, las estadísticas y las valoraciones de IA permanecen fuera de la autoridad del núcleo. Una interfaz de funciones externas (FFI) u otra frontera tipada debe delimitar entradas, salidas, errores, permisos, consumo y condiciones de aislamiento. Su existencia nominal no demuestra que la separación se cumpla: deben comprobarse los recorridos realmente ejecutables.

Los mensajes de una herramienta se tratan como datos de su procedencia, nunca como autorización para ejecutar instrucciones del núcleo. Una configuración desconocida, una versión incompatible o una salida incompleta se rechazan o se conservan con el estado previsto por el contrato, sin convertirlas tácitamente en conformidad.

El [Lenguaje de Computación del SV](https://documentos-sv.itvia.online/dominios/lenguaje-de-computacion/manual/arquitectura-ejecucion.html) conserva las definiciones de arquitectura. No se introduce semántica para satisfacer un requisito de presentación o una conveniencia de un aplicativo.

## Continuidad y cambios

Las nuevas versiones deben conservar la posibilidad de interpretar las evidencias anteriores con sus propios contratos. La migración de una vista o de un índice no modifica los sucesos originales. La igualdad entre dos observaciones o vectores no autoriza a suprimir uno de los sucesos.

Los límites de archivos, capacidad, tiempo y memoria se declaran y se comprueban; no se convierten en constantes universales del dominio. Una nueva herramienta no hereda las autorizaciones de las existentes.

Estas previsiones reducen dependencias innecesarias y hacen visibles los cambios futuros. No garantizan que toda ampliación pueda incorporarse sin adaptación: tal afirmación requeriría conocer y comprobar cada requisito nuevo.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
