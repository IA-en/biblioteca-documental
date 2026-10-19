# **19.** Terminología y referencias del lenguaje {#terminología-y-referencias-del-lenguaje}

Este apéndice permite localizar los conceptos y las fuentes formales utilizados en el manual. Las definiciones completas y sus restricciones corresponden a las especificaciones enlazadas.

## **19.1.** Términos de consulta {#términos-de-consulta}

| Término | Uso en este manual | Desarrollo |
| --- | --- | --- |
| Archivo SVP | Texto que expresa declaraciones y operaciones del Lenguaje de Computación SV. | [Ejemplos](ejemplos-svp.md). |
| Perfil SVP-ES o SVP-EN | Forma lingüística explícita del programa, independiente del idioma de la interfaz. | [Playground](playground-sv.md). |
| Gramática superficial | Reglas de escritura de las construcciones del lenguaje. | [Construcciones e instrucciones](construcciones-y-componentes.md). |
| Representación intermedia, IR | Estructura de objetos y operaciones obtenida tras interpretar el texto y aplicar las comprobaciones correspondientes. | [Arquitectura](arquitectura-ejecucion.md). |
| Célula y estado celular | Especificación de una célula y valores de una instancia identificada, respectivamente. | [Ejemplo inicial](ejemplos-svp.md#ejemplo-inicial-una-célula). |
| Terna | 0 = Apto, 1 = No apto y U = Indeterminado, conforme a la cuestión y las reglas aplicables. Los fallos técnicos conservan su diagnóstico propio. | [Estados celulares y terna](construcciones-y-componentes.md#estados-celulares-y-terna) y [desarrollo y validación](desarrollo-validacion-nucleo.md). |
| Frame | Representación estructurada de un suceso y de las relaciones exigidas por su contrato. | [Parámetros, recorridos y evidencia](parametros-rutas.md). |
| Admisión técnica | Cumplimiento de las condiciones de entrada y comprobación aplicables. Se distingue del resultado semántico. | [Conformidad y diagnósticos](conformidad-diagnosticos.md). |
| Traza | Registro que relaciona actuaciones observadas y sus medidas. Su cobertura depende de los puntos instrumentados. | [Observabilidad](observabilidad.md). |
| DSL | Lenguaje específico de dominio; en este manual, el lenguaje propio del Sistema Vectorial SV. | [Ámbito y organización](constructor.md). |

## **19.2.** Gramática y representación intermedia {#gramática-y-representación-intermedia}

La gramática superficial v0.2 conserva v0.1 salvo las producciones y restricciones que sustituye expresamente; su representación de destino es IR v0.3. Deben consultarse conjuntamente:

- [Gramática superficial mínima v0.1](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ed93885589015d567905d1c880d8097869310085/GRAMATICA_SUPERFICIAL_MINIMA_SV_v0_1.md).
- [Precisiones y sustituciones de la gramática v0.2](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ed93885589015d567905d1c880d8097869310085/GRAMATICA_SUPERFICIAL_MINIMA_SV_v0_2.md).
- [Reglas de bienformación de IR v0.3](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ed93885589015d567905d1c880d8097869310085/IR_CANONICA_BIENFORMACION_SV_v0_3.md).

Las referencias fijan una revisión para que pueda reproducirse la consulta. La distribución utilizada declara sus propias versiones. La fecha de edición de este manual no modifica esas identidades.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
