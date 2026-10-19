# **2.** Ámbito y organización del lenguaje {#ámbito-y-organización-del-lenguaje}

El Lenguaje de Computación SV expresa definiciones, estados, evaluaciones y relaciones del Sistema Vectorial. Su estudio requiere distinguir el significado de una operación, su representación formal y la realización que la ejecuta. La extensión `.svp` identifica sus documentos de programa.

## **2.1.** Materias del lenguaje {#materias-del-manual}

| Materia | Contenido |
| --- | --- |
| Estatuto del lenguaje | Finalidad, alcance y relación con los fundamentos del SV. |
| Léxico y convenciones | Nombres, identificadores y formas de declaración. |
| Niveles N0–N4 | Distinción entre definición, estado, resultado, evolución y uso. |
| Célula y evaluación | Constitución, estado, clasificación, umbrales y criticidad. |
| Composición y supervisión | Relaciones y condiciones para combinar resultados. |
| Resolución de U | Contexto, mecanismos admitidos y condiciones de reapertura. |
| Frame y trayectoria | Representación del estado, transiciones y conservación de antecedentes. |
| Consulta | Pregunta, contexto, respuesta, justificación y datos asociados. |
| Diagnósticos | Errores estructurales y construcciones no admitidas. |
| Representación y ejecución | Uso del intérprete, intercambio de datos y realización en Rust. [Árbitro - Director](arbitro-director.md), [Selector subordinado](selector-arbitro-director.md) y [hardware de aceleración tensorial](hardware-aceleracion-tensorial.md). |
| Compatibilidad | Comunicación con otros lenguajes conservando el significado del SV. |

El índice lateral reúne los capítulos disponibles. La programación aplicada figura en desarrollo; las capacidades del núcleo y sus pendientes se explican en su capítulo específico.

## **2.2.** Cómo interpretar una descripción del lenguaje {#cómo-interpretar-una-descripción-del-lenguaje}

Para utilizar una operación hay que conocer sus entradas, el resultado que produce y las condiciones de aplicación. Los ejemplos de conformidad permiten reconocer tanto las construcciones admitidas como las entradas que deben rechazarse.

La gramática establece cómo escribir el programa; la representación intermedia conserva sus objetos y operaciones; la realización ejecutiva aplica las capacidades disponibles. Esta distinción permite interpretar el resultado del Playground y reconocer qué actuaciones posteriores requieren una ejecución y una autorización propias.

## **2.3.** Referencia {#referencia}

Las definiciones formales se reúnen en [Terminología y referencias del lenguaje](referencia-terminologia.md). El [Manual de programación en SV para desarrolladores](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/tree/main/docs/manual_svp) desarrolla su aplicación práctica mediante lecciones y ejercicios. La organización del libro sigue las relaciones entre fundamentos, construcciones, arquitectura y comprobación.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
