# Árbitro - Director

**Representación y ejecución · 15 de octubre de 2026.**

El Árbitro - Director es el componente del Sistema Vectorial que gobierna una ejecución conforme a sus condiciones autorizadas. Relaciona la solicitud, el modelo identificado, los documentos admitidos, las operaciones permitidas y la evidencia obtenida. Su actuación se define mediante reglas explícitas realizadas en Rust.

Su función comprende el control del recorrido completo: qué puede comenzar, qué debe conservarse durante la ejecución y qué comprobaciones permiten recibir su resultado. La selección del dispositivo de cálculo constituye una función subordinada, desarrollada en el capítulo del [Selector del Árbitro - Director CPU/GPU/TPU/NPU](selector-arbitro-director.md).

## Responsabilidad y alcance

El dominio y los contratos aplicables determinan las obligaciones de la actuación. El Árbitro - Director comprueba y aplica esas condiciones; el modelo y los documentos consultados no pueden modificarlas durante la ejecución. La incorporación de una fuente tampoco concede por sí sola permiso para emplearla en cualquier finalidad.

| Momento | Función del Árbitro - Director |
| --- | --- |
| Preparación | Identificar la solicitud, el modelo y su versión, el perfil de ejecución, las fuentes y los límites aplicables. |
| Admisión | Comprobar disponibilidad, integridad, cobertura documental, aislamiento de información reservada y capacidad efectiva de entrada. |
| Ejecución | Permitir las operaciones previstas, comprobar sus argumentos y conservar entradas, respuestas y sucesos. |
| Recepción | Contrastar finalización, estructura, referencias, integridad y correspondencia con la actuación solicitada. |
| Conservación | Vincular los resultados y las incidencias a las versiones y condiciones que los produjeron. |

El diseño general reúne estas funciones. Las realizaciones experimentales disponibles demuestran recorridos delimitados; su existencia no acredita que todos los modelos, conectores o dispositivos puedan utilizarlos sin adaptación y comprobación.

## Documentos y herramientas

La preparación identifica las fuentes y los pasajes requeridos. Cuando interviene una herramienta documental, deben comprobarse tanto la petición como la respuesta: documento, versión, localizador, extensión y correspondencia del contenido. Una referencia correcta no compensa la omisión de una condición relevante.

Antes de generar una respuesta se verifica la entrada efectiva, incluida su representación para el modelo, su extensión y la capacidad reservada para la salida. La falta de espacio no autoriza a recortar o resumir automáticamente los documentos. Debe resolverse conforme a las condiciones de la actuación.

En un examen, las respuestas reservadas para la corrección permanecen separadas de la información entregada al modelo. El control de esa separación forma parte del recorrido, al igual que la conservación de la respuesta original.

## Relación con el Selector

Una vez admitida la operación, el Árbitro - Director solicita al Selector un destino compatible con la carga y con la política autorizada. El Selector devuelve la elección y su fundamento, o identifica la ausencia de un destino admisible. El adaptador correspondiente realiza la ejecución y devuelve los resultados y las medidas que permiten contrastar lo ocurrido.

**Solicitud admitida → selección del dispositivo → ejecución observada → recepción del resultado.**

La elección de una GPU o una TPU no demuestra por sí sola que se haya calculado en ella. Deben coincidir la decisión, el dispositivo utilizado y la evidencia de ejecución. La CPU puede seguir realizando control, preparación, transferencias y recuperación mientras el acelerador efectúa el cálculo asignado.

Este control es aplicable a los modelos y motores que el SV pueda ejecutar bajo su gestión, incluido un motor de traducción. Cuando se consulta una IA externa por una interfaz de servicio, la selección de sus dispositivos pertenece al proveedor; el SV sólo puede dirigir los recursos que controla.

## Incidencias y significado del resultado

Una falta de integridad, una fuente obligatoria ausente o una operación incompatible impide continuar el recorrido afectado. Deben conservarse la causa y los resultados parciales existentes. La incidencia no concede permiso para cambiar silenciosamente el modelo, los documentos o el dispositivo.

La finalización técnica y la corrección del contenido son cuestiones distintas. Una respuesta puede cumplir el formato y citar un documento, pero interpretar incorrectamente una excepción. Del mismo modo, un error de ejecución no constituye por sí solo una valoración U. Los valores 0, 1 y U corresponden a la cuestión evaluada y a sus reglas, no al estado incidental de una máquina.

## Referencias

- [Diseño del Árbitro - Director y condiciones del recorrido documental](https://github.com/juantoniolloretegea/SV-motor/blob/32239f974af3a6367efd75d36ba984a6c2fc747e/laboratorio/ensayo-ia-y-observabilidad/modelos-de-ia/model-context-protocol/controlador-pictograma-algoritmo/DISENO.md).
- [Selector: criterios, ejecución y límites comprobados](selector-arbitro-director.md).
- [Parámetros, recorridos y evidencia](parametros-rutas.md).

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
