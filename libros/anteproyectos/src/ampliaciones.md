# Ampliaciones y límites de realización

**Memoria descriptiva · 4 de noviembre de 2026.** Estas líneas de estudio amplían las necesidades recogidas en el libro. Su desarrollo requiere un alcance propio, evidencia y autorización; su inclusión no añade condiciones a evaluaciones vigentes.

## Identificación de programas e informes antivirus {#antivirus}

La identificación documentada de un programa y su examen por un antivirus responden a preguntas diferentes. El nombre de un proceso orienta una consulta, pero no acredita la identidad del ejecutable ni su inocuidad. La descripción de un editor, una firma comprobada, la huella de un archivo y una detección comunicada por un tercero deben conservar su procedencia y su significado específico.

La posible integración de informes antivirus se estudia como una fuente externa de evidencia. Para utilizar un informe deberán conocerse el producto y su versión, la versión o fecha de su base de detección cuando se comunique, el momento de la comprobación, el objeto analizado y las limitaciones del resultado. La ausencia de detecciones no equivale a una garantía de seguridad. Cuando una fuente no declare su actualización, el dato permanecerá expresamente no disponible; no se sustituirá por la fecha de consulta.

Un catálogo de referencias requiere identificación de la fuente, enlace verificable, versiones y fechas diferenciadas de publicación, actualización declarada y última comprobación satisfactoria. La observación del proceso conserva su propia fecha. Las referencias deben poder revisarse y relacionarse con la evidencia obtenida, sin atribuir una identidad por mera coincidencia de nombre.

**Límite de la propuesta:** el SV no sustituye un antivirus por presentar esa información. El desarrollo de un antivirus propio constituiría un anteproyecto distinto, con objeto, mantenimiento, cobertura y validación específicos; no forma parte de la realización aquí descrita. La incorporación de resultados externos se sometería a las [condiciones de integración](integracion.md) y a la [supervisión y auditoría de sistemas](https://github.com/juantoniolloretegea/SVperitus-dataset/blob/main/agentes/ciberseguridad-inteligente/SUPERVISION-Y-AUDITORIA-DE-SISTEMAS.md).

## Protección desde el arranque y firmware {#firmware}

La protección durante la preparación del sistema se desarrolla en las [instrucciones preliminares pre-núcleo del Lenguaje de Computación](https://documentos-sv.itvia.online/dominios/lenguaje-de-computacion/manual/arquitectura-ejecucion.html#instrucciones-pre-nucleo) y en su [aplicación al dominio de Ciberseguridad](https://documentos-sv.itvia.online/dominios/universos/ciberseguridad.html#instrucciones-pre-nucleo). Este libro conserva su relación con las demás propuestas, sin reproducir una arquitectura alternativa.

La denominación «pre-núcleo» se refiere al núcleo del SV y no identifica por sí sola una etapa concreta del arranque del sistema operativo. El estudio debe precisar el componente, la raíz de confianza, la verificación de integridad y autenticidad, los permisos, la recuperación y la frontera con la inteligencia artificial. Ningún componente de IA adquiere por esa vía autoridad sobre el núcleo.

Un ensayo con firmware de una máquina virtual puede servir para comprobar un procedimiento delimitado, utilizando imágenes propias del laboratorio y una recuperación verificada. Sus resultados no acreditan modificaciones del firmware físico ni la seguridad de todas las plataformas. La [propuesta arquitectónica de referencia](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/afc618dcd14558b6a37187dc9d0a4b639e87b7b6/docs/arquitectura/INSTRUCCIONES-PRELIMINARES-PRE-NUCLEO.md) contiene las alternativas y condiciones de estudio. No se presupone una instalación recibida.

## Diversidad de procesadores y aceleradores {#hardware}

El alcance de una observación depende del dispositivo, de su configuración y de los instrumentos disponibles. La unidad central de procesamiento (CPU), la unidad de procesamiento gráfico (GPU), la unidad de procesamiento tensorial (TPU) y la unidad de procesamiento neuronal (NPU) pueden requerir fuentes y comprobaciones diferentes. Una conclusión obtenida en un modelo de procesador no se extiende a una familia completa, a otra arquitectura ni a un acelerador.

Una ampliación experimental identificará, al menos, dispositivo y revisión, arquitectura, firmware, sistema operativo, controladores, virtualización, herramienta de medida, sucesos observables, unidades, pérdidas y límites de atribución. El detalle se conservará en la ficha técnica correspondiente. La comparación sólo será admisible cuando la magnitud y las condiciones permitan sostenerla.

La sede principal de estas condiciones es el [alcance del hardware de ensayo](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/main/docs/hardware-de-ensayo/ALCANCE.md). La [documentación de aceleración tensorial](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/tree/main/docs/hardware-de-aceleracion-tensorial) conserva su objeto propio. Ampliar la cobertura de observación y seleccionar un dispositivo de ejecución son actuaciones relacionadas, pero distintas.

### Suficiencia de recursos {#recursos}

La necesidad de hardware adicional debe justificarse mediante una capacidad requerida y una carencia comprobada dentro del alcance adoptado. Una posibilidad de ampliación no demuestra por sí misma que deba adquirirse otro equipo. Tampoco una máquina virtual sustituye una propiedad física que no permita observar.

Las ampliaciones de este capítulo no incorporan una obligación de compra ni exigen cobertura universal como condición de continuación. Si se acredita una carencia, se delimitarán su consecuencia, las alternativas y la decisión competente. Los resultados conservarán el alcance de los recursos realmente utilizados.

## Relación con las líneas ya descritas

Las [células de intrusión](celula-intrusion.md), el [muestreo variable](observacion-recursos.md#muestreo-no-periódico-como-alternativa) y las [herramientas auxiliares de imágenes](imagenes-dominios.md) mantienen su explicación principal en sus capítulos respectivos. La admisión de cualquier IA auxiliar requiere función, dominio, evidencia, permisos y límites propios; no se deduce de que otra herramienta haya sido admitida.

Las actuaciones concretas se relacionan en la [memoria de actividades](memoria-actividades.md). Cada resultado se incorpora con el alcance efectivamente comprobado; el seguimiento documental no modifica la terna ni constituye una capacidad del dominio.


---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
