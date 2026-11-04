# Dispositivos conectados y análisis formal de rutas

**Memoria descriptiva de dos líneas de estudio · 4 de noviembre de 2026.** Se definen objetos, entregables y condiciones de comprobación. La publicación no acredita una realización operativa ni modifica una convocatoria.

## Dispositivos del Internet de las cosas y control físico

El primer objeto es estudiar la supervisión y las posibles actuaciones sobre dispositivos del **Internet de las cosas (IoT)** que relacionan comunicaciones, software, sensores y procesos físicos. La heterogeneidad y el acoplamiento de estos componentes requieren analizar sus distintas superficies de exposición y consecuencias; constituyen un campo de estudio específico de la seguridad ciberfísica. [Humayed y colaboradores, 2017](https://doi.org/10.1109/JIOT.2017.2703172).

Los requisitos del SV se conservan en [Ciberseguridad: dispositivos y efectos físicos](../dominios/universos/ciberseguridad.html#dispositivos-efectos-fisicos). La memoria estudia cómo realizarlos: inventario verificable, fuentes admitidas, separación entre observación y órdenes, permisos por operación, límites independientes del modelo y evidencia de la respuesta del equipo. No se presupone un controlador universal ni la compatibilidad de todos los protocolos.

| Entregable previsto | Condición de recepción |
| --- | --- |
| Ficha del dispositivo y de su integración | Identidad, versión, función física, interfaces, unidades, responsable, permisos y alcance comprobados. |
| Contrato de lectura y actuación | Operaciones diferenciadas; entradas admitidas, límites, errores, revocación y respuesta ante pérdida de comunicación definidos. |
| Pruebas del intermediario | Casos normales y negativos reproducibles; rechazo de operaciones sin permiso y conservación de evidencias. |
| Informe de transferencia | Separación explícita entre emulación, virtualización y dispositivo físico; ninguna conclusión excede la cobertura recibida. |

Una integración externa se somete a las [fronteras del Lenguaje de Computación](../dominios/lenguaje-de-computacion/manual/arquitectura-ejecucion.html#frontera-dispositivos). Su capacidad de descubrir funciones o describir un equipo no le confiere autoridad para actuar. El protocolo concreto, la licencia, el mantenimiento y el alcance de sus permisos deben examinarse antes de admitirlo.

## Selección, verificación y complejidad de rutas

El segundo objeto es estudiar procedimientos computables para seleccionar y comprobar recorridos, conforme a [Parámetros, rutas y evidencia](../dominios/universos/parametros-rutas.html). La definición del dominio precede a la elección del algoritmo.

La teoría de complejidad distingue **tiempo polinómico (P)** y **tiempo polinómico no determinista (NP)**. En problemas de decisión, P reúne los resolubles mediante cálculo determinista polinómico; NP admite certificados de respuesta afirmativa de longitud polinómica, verificables en tiempo polinómico. P está contenido en NP; no se identifica NP con «no polinómico». El problema de su igualdad permanece abierto según la [referencia del Clay Mathematics Institute](https://www.claymath.org/millennium/p-vs-np/). Véase [Fortnow, 2009](https://doi.org/10.1145/1562164.1562186).

Encontrar un recorrido admisible, verificar uno propuesto y demostrar que es óptimo son tareas diferentes. Antes de asignar una clase de complejidad se necesitan una pregunta formal, una representación de entrada y una medida de su tamaño. Ni el número de combinaciones ni un ejemplo lento justifican por sí solos una clasificación de dificultad.

El estudio deberá producir:

1. Una formulación explícita de cobertura, precedencias, condiciones y permisos, sin convertir la prioridad documental en criticidad.
2. Un verificador independiente de la producción de propuestas, con casos conformes, omisiones obligatorias, precedencias incumplidas y evidencia insuficiente.
3. Una comparación reproducible de métodos bajo el mismo contrato; se distinguirán corrección, completitud, coste y, cuando proceda, prueba de optimalidad.
4. Un informe sobre la transferencia entre selección documental y análisis de relaciones entre procesos o sucesos. No se presume que tengan la misma formulación ni complejidad.

La terna (0,1,U) conserva el significado de cada cuestión evaluada. No resuelve por sí misma una búsqueda ni demuestra una relación entre P y NP. Las Matemáticas del Potencial SV conservan las condiciones del capítulo principal: una comparación por potencial requiere definición y evidencia propias y no permite omitir conocimiento obligatorio. La clase de complejidad P y el potencial P_D representan objetos diferentes.

## Relación con el análisis de seguridad

Los árboles y grafos de ataque permiten representar escenarios y dependencias de seguridad bajo modelos explícitos. Su generación y sus límites se estudian en [Konsta y colaboradores, 2024](https://doi.org/10.1016/j.cose.2023.103602). Un escenario representado no acredita un incidente observado.

En el SV deberán distinguirse las relaciones documentales exigidas, las relaciones de actividad efectivamente observadas y las hipótesis por comprobar. La coincidencia de nombres, direcciones o tiempos no basta para atribuir causalidad o intención. Cada afirmación debe conservar sus fuentes y la cobertura que la sostiene.

Los [criterios de observación y ensayo](https://github.com/juantoniolloretegea/SV-motor/blob/main/laboratorio/ensayo-ia-y-observabilidad/dispositivos-y-rutas.md) precisan cómo separar medición, interpretación y limitaciones. Estas líneas requieren una recepción específica; no constituyen nuevos Universos, células ni parámetros de una evaluación vigente.

## Referencias

- Humayed, A.; Lin, J.; Li, F.; Luo, B. (2017). *Cyber-Physical Systems Security—A Survey*. IEEE Internet of Things Journal, 4(6), 1802–1831. DOI: [10.1109/JIOT.2017.2703172](https://doi.org/10.1109/JIOT.2017.2703172).
- Fortnow, L. (2009). *The status of the P versus NP problem*. Communications of the ACM, 52(9), 78–86. DOI: [10.1145/1562164.1562186](https://doi.org/10.1145/1562164.1562186).
- Konsta, A.-M.; Lluch Lafuente, A.; Spiga, B.; Dragoni, N. (2024). *Survey: Automatic generation of attack trees and attack graphs*. Computers & Security, 137, 103602. DOI: [10.1016/j.cose.2023.103602](https://doi.org/10.1016/j.cose.2023.103602).

Las referencias proporcionan antecedentes científicos. No certifican la seguridad, la complejidad ni el rendimiento de una realización del SV.

---
© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
