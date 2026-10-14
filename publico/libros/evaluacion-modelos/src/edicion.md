# Edición del examen y plantilla previa

Cada edición fija sus documentos, instrucciones, enunciados, respuestas de referencia, criticidades, formato de salida, regla agregada y límites. Se identifica antes de examinar candidatos. Un cambio sustantivo requiere otra edición; no sustituye silenciosamente la plantilla con la que se produjo un resultado.

La primera edición tiene dieciséis enunciados, ocho afirmativos y ocho negativos, asociados a una representación de examen (16,4). Esta elección no asigna una célula al Universo científico del que proceden los documentos. Tampoco obliga a utilizar el antiguo banco de veinticinco preguntas ni sus etapas históricas.

Los mismos enunciados se presentan a los candidatos mediante permutaciones registradas. La permutación debe contener una vez cada identificador. La corrección recupera el orden canónico antes de comparar o dibujar. La forma afirmativa o negativa no determina si un enunciado es conforme a la fuente.

## Respuesta y calificación

| Símbolo en la respuesta | Significado para el candidato |
| --- | --- |
| 0 | El enunciado es conforme a la fuente recibida. |
| 1 | El enunciado no es conforme a la fuente recibida. |
| U | El candidato declara que no puede determinarlo. |

El candidato no declara su propio acierto. La plantilla reservada permite calcular la calificación: coincidencia con una clave determinada → 0; contradicción → 1; respuesta U → U. La primera edición no admite claves U, faltantes o duplicadas.

La respuesta exigida es un objeto JSON con un único campo `respuestas`, que contiene dieciséis objetos con `id` y `valor`, en el orden presentado. `valor` es una cadena del alfabeto 0, 1, U. Se admite el espacio en blanco propio de JSON. No se admiten campos adicionales, explicaciones, cercos de código ni posiciones omitidas. El formato queda explicado antes de responder; no se reconstruye por interpretación posterior.

La entrega comprende el examen completo y una única respuesta con las dieciséis posiciones. No se exige pensamiento interno ni se incorporan nuevas etapas de razonamiento. El límite de 300 segundos se aplica a esa entrega completa, incluidas petición y recepción, sin renovación entre fragmentos de respuesta.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
