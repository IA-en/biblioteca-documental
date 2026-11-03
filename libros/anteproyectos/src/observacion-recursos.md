# Observación, capacidad y conservación

**Objeto:** encontrar un equilibrio comprobable entre cobertura, oportunidad del aviso y consumo de recursos. **Estado:** criterios de estudio; sin frecuencia universal aprobada.

## Qué se observa y cuándo

La adquisición, la evaluación, el aviso y el refresco de pantalla son operaciones distintas. Refrescar una medida antigua no produce una observación nueva. La vista debe mostrar la actualidad y procedencia del dato, así como la falta de cobertura o la pérdida de comunicación.

Las fuentes de sucesos y el muestreo periódico se complementan. [Vector](https://vector.dev/docs/reference/configuration/sources/host_metrics/) documenta métricas periódicas del equipo. El [seguimiento de sucesos de Windows](https://learn.microsoft.com/en-us/windows/win32/etw/about-event-tracing) permite consumo en tiempo real o desde archivos y contempla pérdidas de registros. La disponibilidad de esas funciones no acredita su cobertura efectiva en una instalación concreta.

Los intervalos de uno, tres o cinco segundos son ejemplos para comparar, no compromisos generales. La temperatura, el detalle de procesos y la actividad de una caché tienen fuentes, ritmos y condiciones de observación distintos. Una medida general de utilización no demuestra actividad atribuible de cada nivel de caché. Tampoco las conclusiones sobre una configuración se extienden automáticamente a otros procesadores, aceleradores, controladores o entornos virtualizados.

## Muestreo no periódico como alternativa

Puede estudiarse una selección no periódica de instantes de adquisición, gobernada fuera del núcleo. La imprevisibilidad no deriva de ocultar el algoritmo: requiere una fuente de aleatoriedad adecuada y una configuración comprobada.

Esta alternativa no elimina los intervalos sin observación. Deben delimitarse intervalo máximo, distribución utilizada, coste y condiciones de intensificación, conservando los instantes realmente observados. Su evaluación se compara con una referencia periódica y con fuentes de sucesos, sin presentar la aleatoriedad como cobertura continua.

La variación de la adquisición no aleatoriza el dictamen del núcleo: la misma evidencia admitida, bajo el mismo contrato, conserva sus reglas deterministas. Los tiempos, estadísticas y controles de recursos pertenecen a la instrumentación y a las interfaces de frontera.

## Dimensionamiento y continuidad

Antes de adoptar una configuración se medirá, con y sin adquisición, ocupación del procesador y de la memoria, volumen de escritura, duración de las lecturas, demora de los avisos y pérdidas. Los resultados identificarán soporte, duración, carga legítima y método. Una extrapolación no se presentará como un periodo realmente observado.

El diseño debe prever límites por volumen y número de archivos, espacio disponible, acumulación pendiente, avisos previos y comportamiento ante fallo de escritura. Reducir el detalle o detener un canal requiere una regla explícita y una indicación visible de la cobertura perdida.

Los sucesos admitidos se conservan mediante adición, sin sobrescribir los anteriores. Un resumen o una compresión no sustituyen los originales exigidos por la política de custodia. La retirada de una copia local requiere la autorización y la comprobación de recuperación correspondientes. Una reserva lógica para el cierre del registro no equivale a espacio físico garantizado.

El cierre del navegador no debería detener la adquisición recibida como permanente. Esa continuidad, la recuperación y la parada independiente necesitan pruebas propias; no se deducen de una pantalla activa. Los requisitos comunes de evidencia se mantienen en [Supervisión y auditoría de sistemas](https://github.com/juantoniolloretegea/SVperitus-dataset/blob/main/agentes/ciberseguridad-inteligente/SUPERVISION-Y-AUDITORIA-DE-SISTEMAS.md#adquisición-común-y-contrato-de-evidencia).

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
