# Desarrollo y validación del núcleo

El desarrollo del Lenguaje de Computación SV debe demostrar que las reglas descritas pueden ejecutarse conservando su significado, sus límites de autoridad y la evidencia de cada actuación. Las necesidades de los dominios y de los componentes que utilizan el lenguaje permiten comprobar si esa realización es suficiente.

Este capítulo ofrece dos perspectivas complementarias: **qué capacidades requieren desarrollo o integración** y **cómo se someten a comprobación las exigencias que recaen sobre el núcleo**. La explicación corresponde a la documentación consolidada el **19 de octubre de 2026**. Las recepciones técnicas posteriores deben consultarse en los registros enlazados; la fecha de este capítulo no acredita por sí sola su ejecución.

## Cómo interpretar el estado de una capacidad

Una capacidad puede estar descrita en un contrato, representada mediante estructuras de datos, realizada en código o comprobada en una operación concreta. Esas situaciones deben distinguirse:

| Estado | Qué permite afirmar | Qué debe comprobarse a continuación |
|---|---|---|
| Requisito definido | Se conoce la obligación y el resultado exigible. | Que exista una realización que la cumpla. |
| Representación disponible | El lenguaje puede expresar o validar determinada información. | Que la operación utilice esa información y produzca el efecto previsto. |
| Realización comprobada parcialmente | Hay resultados identificados para un componente o un conjunto de casos. | Sus límites y la composición con los demás componentes. |
| Recepción integrada | El recorrido concreto ha sido ejecutado y recibido con evidencia suficiente para su alcance. | Las condiciones institucionales y de uso que correspondan. |

Compilar un componente no equivale a comprobar toda su conducta. Las pruebas de una interfaz, de un servicio documental o de un supervisor tampoco sustituyen una prueba del núcleo. Una recepción favorable conserva la versión, las entradas y los límites examinados; no se extiende automáticamente a otros dominios, soportes u operaciones.

## Capacidades en desarrollo e integración

La [entrega consolidada de exigencias](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/e4346b2971a8775608b761fa0823f76b5eb2b020/docs/evoluciones-desde-el-nucleo-no-cotejadas-generadas-por-pruebas-con-la-ia-sin-aprobacion-aun/entrega-consolidada-2026-10-19/ENTREGA.md) relaciona obligaciones, evidencias parciales, responsables funcionales y criterios de recepción. La siguiente tabla explica sus ámbitos sin sustituir ese registro.

| Ámbito | Exigencia que debe conservar la realización |
|---|---|
| Identidad y autoridad | Relacionar dominio, instancia, configuración y operación con las facultades legítimamente constituidas. Compartir un modelo o un recurso no comparte permisos. |
| Documentación y procedencia | Identificar el material realmente consumido y comprobar la cobertura necesaria. La integridad de un archivo no demuestra que se haya utilizado toda la información pertinente. |
| Causas y efectos | Distinguir rechazo, insuficiencia, fallo instrumental y efecto externo incierto. No transformar un fallo de transporte en un resultado semántico. |
| Contexto, revisión y evaluación | Conservar el fundamento de cada resultado y distinguir una revisión posterior. Identificar qué se presentó al revisor y con qué competencia y alcance. |
| Semántica y representación intermedia | Demostrar que la operación ejecuta el significado representado. Expresar una consulta, una transición o una observación no acredita que se haya realizado. |
| Recursos y aislamiento | Imponer y comprobar límites de tiempo, memoria, almacenamiento y canales de comunicación en el soporte utilizado. |
| Fidelidad documental | Preservar unidades, negaciones, excepciones, orden y magnitudes a través de las transformaciones y de su uso final. |
| Privacidad y entrega | Hacer efectivos finalidad, contenido mínimo y destinatario autorizado antes de cualquier salida que llegue a habilitarse. |
| Persistencia y continuidad | Recuperar un estado legítimo sin resucitar permisos consumidos o revocados ni borrar el fundamento de actuaciones anteriores. |

En esta edición, las necesidades están recogidas en la entrega consolidada, pero **la recepción nuclear integrada y la adenda completa de integridad y trazabilidad siguen pendientes**. Las recepciones parciales acreditan las capacidades y condiciones expresamente comprobadas en sus documentos. Entre las obligaciones materiales pendientes de la adenda figuran la autoridad de la instrucción directa, la no dependencia indebida de información protegida, la revisión efectiva y la entrega limitada al destinatario legítimo.

La [suficiencia semántica y de representación intermedia](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/main/docs/calidad/tuberias-ia/integracion-adenda-ia-frame-y-catalogo-errores/s13-suficiencia-semantica-ir/ACTA_SUFICIENCIA.md) distingue una consulta representada de su resultado ejecutado, una transición validada de su ejecución y una observación del procedimiento que determina su valor ternario. El [contrato R2 de persistencia, continuidad y recuperación](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/main/docs/arquitectura/CONTRATO_R2_0_PERSISTENCIA_CONTINUIDAD_Y_RECUPERACION_2026_08_25.md) mantiene sus propias condiciones de recepción.

El SV conserva **un único contrato del polígono y la terna vigente**. Su dimensión procede de la constitución del dominio; no se deduce del número de definiciones de un documento. La representación con Rust y egui debe reflejar fielmente el resultado correspondiente. La presentación gráfica no introduce otra semántica ni sustituye la decisión del núcleo.

## Exigencias y pruebas de presión sobre el núcleo

La presión funcional consiste en enfrentar una operación a obligaciones que debe conservar: una autorización revocada, una fuente incompleta, dos causas distintas o una recuperación que pudiera alterar el pasado. El estrés de recursos examina su comportamiento ante límites y concurrencia. Son perspectivas relacionadas, con criterios y recintos de prueba distintos.

| Familia de comprobación | Ejemplo de contraste | Propiedad que se observa |
|---|---|---|
| Autoridad e identidad | Cambiar sólo el dominio, la instancia o la revisión de un permiso. | La operación autorizada funciona y la sustitución indebida se rechaza antes de producir efectos. |
| Integridad y cobertura | Omitir una revocación pertinente conservando citas verdaderas. | El procedimiento detecta la insuficiencia del conjunto utilizado. |
| Significado y causa | Alterar una negación o provocar un fallo de comunicación. | La negación se conserva y el fallo mantiene su causa instrumental. |
| Recursos y concurrencia | Alcanzar una cota o intentar consumir simultáneamente un comprobante de uso único. | El límite se impone materialmente y no se duplica la autorización. |
| Confidencialidad y entrega | Variar un dato protegido ajeno a la finalidad o cambiar el receptor. | No se produce dependencia indebida ni salida por una vía no autorizada, dentro de los canales examinados. |
| Continuidad y recuperación | Recuperar una copia anterior al consumo o revocación de una facultad. | La recuperación no restablece una autoridad que ya dejó de existir. |

Cada comprobación debe incluir un **caso admisible**, un **caso adverso** y una **alteración controlada que pruebe la sensibilidad del observador**. Rechazar todas las entradas no demuestra corrección. Comparar dos realizaciones entre sí tampoco basta si ambas pueden cometer el mismo error: el resultado esperado debe apoyarse en el contrato y en una referencia independiente de la propuesta evaluada.

Antes de ejecutar se fijan la operación, las versiones, el estado inicial, las entradas, el permiso, el soporte, el resultado esperado y el método de observación. Después se conservan el resultado observado, los efectos materiales, las causas, las exclusiones y la recepción competente. La evidencia debe permitir seguir la información desde su fuente hasta su interpretación y uso por la operación, incluyendo su recuperación cuando se empleen referencias.

Las pruebas de disponibilidad se efectúan en un recinto de ensayo autorizado. No se deduce una garantía sobre canales no observados ni sobre soportes distintos. Las [herramientas de desarrollo y comprobación](herramientas-desarrollo-comprobacion.md) ayudan a producir estas evidencias, pero no sustituyen la revisión de su alcance.

## De la necesidad a la capacidad recibida

1. **Definir la obligación.** Precisar qué información o propiedad debe conservarse y qué operación la necesita.
2. **Asignar y recibir el trabajo.** Identificar la función responsable, las aportaciones y la función que comprobará el resultado. Una asignación funcional no acredita por sí sola que un ejecutor haya aceptado el encargo.
3. **Realizar y contrastar.** Comprobar cada componente y después el recorrido integrado requerido. Una limitación de la representación intermedia sólo se modifica tras demostrar la pérdida o insuficiencia concreta.
4. **Registrar la recepción.** Declarar aceptación, aceptación parcial o rechazo, con evidencia y límites. La decisión de uso corresponde a la autoridad competente y conserva sus condiciones propias.

Una necesidad del dominio no convierte toda su solución en una obligación interna del núcleo: la institución constituye facultades y finalidades, el dominio determina el significado profesional, los contratos del lenguaje expresan sus obligaciones y los componentes de ejecución demuestran su cumplimiento material. La composición debe respetar esas responsabilidades.

La conexión con un proveedor no concede permiso para entregarle contenido. La política de la instalación y la autorización específica de cada actuación determinan los datos y destinos admisibles. El [Árbitro - Director](arbitro-director.md#documentos-y-herramientas) debe aplicar esa frontera también a los contadores remotos; describir una capacidad del núcleo no autoriza su uso.

## Fuentes vigentes y mantenimiento del capítulo

Las actualizaciones posteriores a esta edición se recogen en el [registro de obligaciones pendientes y recepciones del Lenguaje](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/main/docs/calidad/REGISTRO_DEUDA_VIVA_DEL_FRENTE_FINAL_DEL_LENGUAJE_SV.md) y en los documentos de recepción que éste enlaza. La [matriz de cobertura de la adenda](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/main/docs/calidad/tuberias-ia/integracion-adenda-ia-frame-y-catalogo-errores/s19-recepcion-integracion-y-causas/MATRIZ_COBERTURA_A_L.md) conserva el alcance de sus contrastes. La entrega consolidada ofrece la correspondencia completa y sus fuentes identificadas.

Este capítulo se revisará cuando una recepción cambie las capacidades aquí descritas o se modifique un contrato que afecte a su explicación. Se actualizarán la fecha, el alcance y las referencias, conservando las versiones anteriores. Los registros técnicos mantienen el detalle de cada obligación; el manual explica su significado y sus condiciones de comprobación. Una recepción nueva puede cerrar un pendiente concreto, y un contraejemplo nuevo puede revelar otra necesidad.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
