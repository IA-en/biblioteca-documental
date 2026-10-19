# Manual del Lenguaje de Computación SV

**Edición de consulta · 19 de octubre de 2026 · Original en español.**

El Lenguaje de Computación SV expresa estados, relaciones y operaciones del Sistema Vectorial SV mediante construcciones explícitas. Este manual introduce su escritura en archivos SVP, explica cómo comprobarlos y presenta la arquitectura que relaciona el núcleo con la ejecución y sus recursos.

## Alcance de la edición

La edición reúne construcciones del lenguaje, ejemplos, uso del Playground, arquitectura, observabilidad y requisitos de integración. La sección de programas completos y aplicaciones permanece en desarrollo. Cada capítulo diferencia las funciones disponibles de los contratos cuya realización integrada continúa pendiente.

La gramática determina las formas de escritura; la representación intermedia conserva los objetos y operaciones de forma estructurada. El pliego y los contratos del lenguaje establecen su significado. La [referencia del lenguaje](referencia-terminologia.md) reúne los enlaces para consultar estas fuentes y sus versiones.

## Lectura recomendada

| Parte | Contenido y finalidad |
| --- | --- |
| **El Lenguaje de Computación SV** | Comience por su [ámbito y organización](constructor.md) y las [construcciones e instrucciones propias](construcciones-y-componentes.md). |
| **Práctica con archivos SVP** | Utilice el [Playground](playground-sv.md) y estudie los [ejemplos por construcción](ejemplos-svp.md). El apartado de [programas completos y aplicaciones](programacion-dsl.md) tiene un alcance distinto. |
| **Arquitectura y recursos** | Sitúe los [entornos de ejecución](arquitectura-ejecucion.md), el [Árbitro - Director](arbitro-director.md), el [Selector](selector-arbitro-director.md), el [Explorador Tensorial](explorador-tensorial-sv.md) y el [hardware de aceleración tensorial](hardware-aceleracion-tensorial.md). |
| **Observabilidad y comprobación** | Interprete las [medidas y trazas](observabilidad.md), las [herramientas de desarrollo](herramientas-desarrollo-comprobacion.md) y las pruebas de [conformidad y diagnósticos](conformidad-diagnosticos.md). |
| **Desarrollo e integración** | Consulte los requisitos de [parámetros, recorridos y evidencia](parametros-rutas.md), la [compatibilidad](tramo-10.md) y el [desarrollo y validación del núcleo](desarrollo-validacion-nucleo.md). |
| **Apéndices y agradecimientos** | Consulte la [integración con el Gestor del Sistema Vectorial SV](integracion-gestor-sv.md), la [terminología y las referencias](referencia-terminologia.md) y las [aportaciones reconocidas](agradecimientos.md), ordenadas alfabéticamente. |

Para aprender, siga el orden del libro. Para resolver una consulta concreta, utilice el índice lateral y los enlaces entre capítulos. Las pruebas deliberadamente inválidas se estudian en conformidad y diagnósticos, separadas de los ejemplos de escritura.

El libro [Dominios y universos del Sistema Vectorial SV](../../universos/index.html) desarrolla las definiciones y los ejemplos conceptuales. Las operaciones de lectura, autorización y entrega de fuentes se explican en el [libro documental](../../../documentacion/reglas-usos-descripciones-documentales/index.html).

## Fuentes y versiones

Las referencias de cada capítulo identifican las especificaciones y realizaciones que sustentan su explicación. La revisión editorial del manual no sustituye las versiones de la gramática, de la representación intermedia o de los programas, ni acredita nuevas capacidades de ejecución. Los ejemplos deben utilizarse con el perfil y la distribución que indican.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
