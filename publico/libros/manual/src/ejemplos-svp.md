# Ejemplos por construcción {#ejemplos-svp-y-comprobaciones}

**Guía de lectura y reproducción · 19 de octubre de 2026.**

Un archivo `.svp` contiene texto del Lenguaje de Computación SV. Su utilidad depende de su finalidad y de la versión con la que se comprueba. Un ejemplo de admisión, una prueba de rechazo y una aplicación profesional no son intercambiables.

## Recorrido por construcciones

La colección publicada del Playground permite seleccionar los siguientes ejemplos en SVP-ES y SVP-EN:

| Construcción | Archivo | Qué estudiar |
| --- | --- | --- |
| Célula y evaluación | `cell_basic.svp` | Codominio, semántica de salida, especificación, estado y operación de evaluación. |
| Compuerta | `gate_table.svp` | Tabla explícita de admisibilidad y relación entre sus entradas y su salida. |
| Resolución | `resolve_projection.svp` | Identificación de una ocurrencia de U, contexto, mecanismo y proyección del resultado. |
| Composición | `compose_basic.svp` | Células acopladas, conector, relación, patrón y grafo. |
| Consulta | `query_context_all_variants.svp` | Referencias y variantes del contexto de consulta. |
| Sucesos y trayectoria | `transition_data_events.svp` | Datos y relaciones que describen transiciones. |

La guía del [Playground](playground-sv.md) explica cómo cargar y comprobar los archivos. Las [construcciones e instrucciones](construcciones-y-componentes.md) permiten consultar el significado de sus operaciones. La admisión de estos ejemplos no equivale a disponer de aplicaciones profesionales completas.

## Ejemplo inicial: una célula

El ejemplo `cell_basic.svp` declara un codominio, una semántica de salida, una especificación celular, un estado y una operación de evaluación. Con `b: 3`, la instancia tiene nueve posiciones. El vector conserva el orden de sus nueve estados; no puede reemplazarse por un recuento si después se necesita identificar cada posición.

La colección del Playground ofrece perfiles SVP-ES y SVP-EN. Los nombres definidos por el programa y los textos explicativos no deben traducirse automáticamente al cambiar el idioma de la interfaz. Debe utilizarse la versión del ejemplo que corresponde al perfil seleccionado.


```svp
-- cell_basic.svp — Célula simple b=3, n=9
-- Test de conformidad: declaración mínima + evaluación

codominio K3 = { APTO, NO_APTO, INDETERMINADO };

semántica_de_salida Klin {
  APTO -> "Clasificación fuerte favorable";
  NO_APTO -> "Clasificación fuerte desfavorable";
  INDETERMINADO -> "Sin clasificación fuerte";
}

especificación_de_celda C1 {
  b: 3;
  codominio: K3;
  semántica: Klin;
  rol: Base;
}

estado_de_celda S1 {
  especificación: C1;
  vector: [Cero, Uno, U, Cero, Cero, Uno, U, Cero, Uno];
}

sea E1 = evaluar(S1);
```

La comprobación inicial consiste en admitir el archivo y examinar su representación estructurada. La terna mantiene su convenio vigente: cambiar la palabra con que se explica un valor no autoriza a cambiar su significado formal.

## Rechazos deliberados

Los archivos deliberadamente inválidos y la interpretación de sus resultados se estudian en [Conformidad y diagnósticos](conformidad-diagnosticos.md#rechazos-deliberados). Su finalidad es comprobar una restricción; no sirven como modelos de escritura válida.

## Organización de las colecciones

El repositorio distingue los archivos [válidos de conformidad](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/tree/ed93885589015d567905d1c880d8097869310085/tests/conformance/valid) y los [casos de rechazo](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/tree/ed93885589015d567905d1c880d8097869310085/tests/conformance/invalid). Las revisiones están fijadas para poder reproducir la consulta. El Playground mantiene su propia [colección publicada](https://lenguaje-sv.itvia.online/examples.json), vinculada a la distribución que declara su cabecera.

No debe suponerse que un ejemplo histórico admitido por una distribución conserva ese resultado en una versión posterior con comprobaciones adicionales. Para comparar versiones se conserva el resultado de ambas; no se altera el original para aparentar continuidad.

La colección pública incluye células, compuertas, resolución, composición, contextos de consulta y datos de transición. Es una selección de construcciones y comprobaciones; no constituye un catálogo de aplicaciones clínicas o de ciberseguridad listas para producción.

## Programación aplicada

La sección de [programas completos y aplicaciones](programacion-dsl.md) permanece en desarrollo en esta edición. Se mantiene separada de los casos de conformidad y del [uso de la interfaz del Playground](playground-sv.md).

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
