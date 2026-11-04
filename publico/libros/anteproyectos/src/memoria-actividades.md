# Memoria de actividades

**Situación documental a 4 de noviembre de 2026.** Esta memoria relaciona actuaciones concretas con los anteproyectos y las memorias descriptivas del libro. Permite conocer qué se ha formulado, qué desarrollo queda por realizar y qué evidencia permitiría recibirlo. El estado de una actividad se refiere exclusivamente a su objeto.

## Función y alcance {#funcion}

Un anteproyecto estudia una solución; una memoria descriptiva explica sus elementos y condiciones; una memoria de actividades sigue actuaciones delimitadas y sus resultados. Una tarea de revisión, una prueba o una corrección puntual puede formar parte de este seguimiento sin convertirse en un anteproyecto independiente.

Este seguimiento es documental. No decide la admisión de componentes, no otorga permisos de ejecución y no califica respuestas de modelos. Los estados «Por hacer», «Haciendo» y «Hecho» no son valores de la terna (0, 1, U), ni existe una conversión entre ambos conjuntos.

## Estados y evidencia {#estados}

| Estado | Significado y condición |
|---|---|
| Por hacer | La actuación está identificada y aún no consta un inicio comprobado. Las condiciones de inicio pueden mantenerla pendiente de una decisión posterior. |
| Haciendo | Existe un inicio documentado y permanece abierta una actuación concreta. Deben identificarse su alcance y la evidencia de avance. |
| Hecho | Se ha cumplido el criterio de cierre declarado y se identifica la evidencia correspondiente. El cierre se limita a esa actuación. |

La formulación documental de una célula puede estar hecha mientras su constitución y comprobación experimental siguen por hacer. Del mismo modo, disponer de una descripción del firmware no acredita una instalación. No se asignan avances por el mero transcurso del tiempo.

Cada edición identifica la fecha de revisión, el objeto, el estado, la condición de inicio, el criterio de cierre y las referencias disponibles. Una corrección o reapertura se explica en una nueva revisión, con su motivo y su evidencia; las ediciones anteriores permanecen accesibles. Una actividad que se descarte conserva su decisión documentada: no se cambia a «Hecho» para aparentar una realización.

## Registro de Sucesos y Tiques Técnicos {#vinculos-nativos}

La memoria puede enlazar elementos del **Registro de Sucesos** y **Tiques Técnicos** cuando sean pertinentes para seguir una actividad. Esos enlaces permiten recorrer la relación entre necesidad, actuación, evidencia y resultado, conservando la función de cada registro.

La vinculación utiliza identificadores reales y estables, el tipo de registro y su referencia autorizada. Puede haber varios sucesos o tiques asociados a una actividad, y un mismo registro puede ser pertinente para varias actividades. La relación debe expresar su motivo: antecedente, incidencia, comprobación, decisión o cierre, según corresponda. No se inventan identificadores para completar un formulario.

El acceso se comprueba en el registro de destino. Publicar una referencia no amplía permisos ni debe revelar datos reservados, identidades de casos o configuraciones protegidas. Cuando no proceda publicar el vínculo, la memoria pública conserva únicamente una descripción admisible de la evidencia; la asociación completa permanece en el ámbito autorizado.

Los sucesos del SV conservan su régimen de adición: un cambio editorial de la memoria no reescribe un suceso, ni siquiera cuando coincidan los parámetros de una célula o de su representación. Tampoco modifica o cierra automáticamente un Tique Técnico. La memoria resume el avance y remite a las fuentes competentes; no crea un registro nativo paralelo.

## Seguimiento de las líneas de estudio {#seguimiento}

[Descargar el seguimiento en valores separados por comas (CSV)](datos/actividades-20261104.csv).

El archivo contiene seis actuaciones documentales realizadas y seis actuaciones técnicas propuestas. Ninguna de estas últimas se presenta como iniciada o recibida. La fecha identifica una revisión documental; el archivo no se actualiza automáticamente.

| Línea | Formulación documental | Desarrollo propuesto |
|---|---|---|
| Célula de intrusión | [Delimitación de alternativas y condiciones](celula-intrusion.md): Hecho. | Constituir y comprobar la célula elegida: Por hacer, previa definición competente. |
| Muestreo variable | [Cobertura, recursos y límites](observacion-recursos.md): Hecho. | Comparar una configuración delimitada con sus referencias: Por hacer, previa autorización del estudio. |
| IA auxiliares | [Condiciones de herramientas de imágenes](imagenes-dominios.md): Hecho. | Evaluar una herramienta concreta y su función: Por hacer, previa selección y alcance. |
| Informes antivirus | [Diferencia entre identificación e informe externo](ampliaciones.md#antivirus): Hecho. | Evaluar una fuente y su actualización: Por hacer. No comprende desarrollar un antivirus propio. |
| Firmware | [Remisión a la arquitectura pre-núcleo](ampliaciones.md#firmware): Hecho. | Comprobar un procedimiento en un entorno virtual delimitado: Por hacer. |
| Procesadores y aceleradores | [Alcance y suficiencia de recursos](ampliaciones.md#hardware): Hecho. | Comprobar cobertura en otra configuración expresamente seleccionada: Por hacer. |

Estas actuaciones técnicas no se incorporan como requisitos de una convocatoria vigente. Su eventual realización depende de sus propias condiciones de inicio, sin presumir una compra, una ampliación de permisos o una intervención sobre una instalación.

## Estructura y actualización del archivo {#archivo}

El archivo utiliza codificación UTF-8, coma como separador y comillas dobles para delimitar los campos. Contiene texto y referencias, sin fórmulas ni instrucciones ejecutables.

| Campo | Contenido |
|---|---|
| actividad_id | Identificador editorial estable de la actuación; no es un identificador de suceso o de tique. |
| linea | Materia a la que pertenece la actuación. |
| naturaleza | Documental o técnica, según el resultado que se espera. |
| descripcion | Objeto concreto de la actuación. |
| estado | Por hacer, Haciendo o Hecho. |
| condicion_inicio | Requisito que delimita la eventual continuación. |
| criterio_cierre | Resultado y evidencia necesarios para recibir esa actuación. |
| evidencia_url | Referencia a la evidencia de cierre disponible. Vacía cuando no consta un cierre. |
| referencia_url | Documento que fundamenta o delimita la actuación. |
| revision | Fecha de revisión documental, en formato año-mes-día. |
| vinculos_sucesos | Lista de asociaciones publicables con sucesos existentes. |
| vinculos_tiques | Lista de asociaciones publicables con tiques existentes. |

Los dos campos de vínculos contienen listas en notación de objetos de JavaScript (JSON). Cada asociación, cuando exista, identifica `id`, `url` y `relacion`. Una lista vacía significa que esta edición no publica asociaciones de ese tipo; no afirma que no existan registros. En esta primera relación no se consignan asociaciones sin evidencia verificada.

La persona o función responsable de la revisión debe contrastar los estados y las referencias antes de publicar otra edición. Los campos técnicos pendientes conservan sus condiciones; una referencia metodológica no se convierte en evidencia de ejecución. El CSV es un medio de consulta y seguimiento, sin escritura automática sobre las bases del SV.

## Comprobación de la memoria

La revisión comprobará que cada cierre tenga evidencia suficiente para su objeto; que no haya capacidades atribuidas por una mera descripción; que las relaciones nativas sean auténticas y respeten sus permisos; y que las actividades conserven el alcance de la propuesta de origen. Las definiciones comunes se mantienen en [Objeto y método](metodo.md), y las condiciones de admisión en [Comprobación y evolución](comprobacion.md).


---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
