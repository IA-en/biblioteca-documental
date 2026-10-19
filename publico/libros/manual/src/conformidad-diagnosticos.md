# Conformidad y diagnósticos

La conformidad comprueba que una realización del lenguaje cumple las reglas y los resultados esperados para una versión determinada. Incluye programas que deben admitirse y programas que deben rechazarse por una causa precisa.

## Admisión, rechazo e incidencia

| Situación | Interpretación |
| --- | --- |
| Archivo admitido | Cumple las comprobaciones aplicadas a esa entrada por la distribución indicada. No acredita por sí solo una aplicación profesional ni todas las operaciones posteriores. |
| Rechazo esperado | El comprobador detecta la infracción prevista y comunica el diagnóstico correspondiente. |
| Rechazo por otra causa | No demuestra que se haya comprobado la regla que motivó el caso. |
| Interrupción o fallo técnico | Impide completar la comprobación afectada; se conserva como incidencia, sin convertirlo en un resultado semántico. |

El [catálogo de errores v0.3](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ed93885589015d567905d1c880d8097869310085/docs/referencia/ERRORES_CANONICOS_SV_v0_3.md) identifica los diagnósticos. La [gramática v0.2](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ed93885589015d567905d1c880d8097869310085/GRAMATICA_SUPERFICIAL_MINIMA_SV_v0_2.md) y las reglas de [bienformación de IR v0.3](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ed93885589015d567905d1c880d8097869310085/IR_CANONICA_BIENFORMACION_SV_v0_3.md) vinculan sus restricciones con los diagnósticos correspondientes.

Los códigos declarados en el catálogo y los mensajes emitidos por una realización tienen alcances distintos. La [concordancia diagnóstica](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ed93885589015d567905d1c880d8097869310085/docs/calidad/MATRIZ_DE_CONCORDANCIA_DIAGNOSTICA_IR_IMPLEMENTACION_SV.md) distingue obligaciones, fases y resultados observados. Cuando la implementación emite un código estructurado, se conserva junto con el mensaje y su causa. Si sólo emite un resultado textual, éste se conserva sin asignarle un código por interpretación.

## Rechazos deliberados

El archivo `cellstate_vector_length_mismatch.svp` comprueba la discordancia entre la longitud del vector y la dimensión de la célula. Se espera un rechazo. Se conserva sin corregirlo dentro de la colección negativa: su finalidad consiste precisamente en comprobar esa restricción.

Una prueba reproducible identifica el archivo íntegro, su perfil, la versión del comprobador y la causa esperada. Se conserva también el resultado obtenido, incluso cuando difiere de lo previsto.

El repositorio separa los archivos [válidos de conformidad](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/tree/ed93885589015d567905d1c880d8097869310085/tests/conformance/valid) y los [casos de rechazo](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/tree/ed93885589015d567905d1c880d8097869310085/tests/conformance/invalid). Los [ejemplos por construcción](ejemplos-svp.md) ofrecen una entrada didáctica a los programas admitidos; las aplicaciones completas tienen su [sección propia](programacion-dsl.md).

## Paridad entre destinos

La paridad contrasta los resultados de los destinos nativo y WebAssembly sobre los casos establecidos. La coincidencia entre destinos no basta: ambos resultados deben corresponder a la especificación y a las expectativas de cada prueba. Las [herramientas de comprobación](herramientas-desarrollo-comprobacion.md) describen la ejecución de estas verificaciones.

Un ejemplo histórico conserva su identidad y su versión. Si una distribución posterior añade comprobaciones, la comparación registra ambos resultados y explica la diferencia; no modifica el original para aparentar compatibilidad.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
