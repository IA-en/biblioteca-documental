# **3.** Construcciones e instrucciones propias {#construcciones-del-lenguaje-y-componentes-propios}

**Referencia explicativa · 19 de octubre de 2026.**

El Lenguaje SV dispone de una gramática superficial y una representación intermedia. La primera determina cómo se escriben sus programas; la segunda conserva sus objetos y operaciones de forma estructurada. Las bibliotecas Rust que realizan estas funciones pertenecen a la implementación y no son, por ello, bibliotecas importables desde un archivo SVP.

## **3.1.** Estados celulares y terna {#estados-celulares-y-terna}

El estado de una célula conserva una secuencia ordenada de posiciones. Cada posición identifica un parámetro conforme a la constitución del dominio. La terna vigente expresa:

| Valor | Significado |
| --- | --- |
| **0** | **Apto**. |
| **1** | **No apto**. |
| **U** | **Indeterminado**: no determinación actual conforme al contrato aplicable. |

La interpretación de cada posición identifica la cuestión evaluada, los datos admitidos y las reglas utilizadas. U no es un número para promediar ni un sustituto automático de un fallo de ejecución. La conclusión de una evaluación depende de la operación y del codominio declarados; un recuento de valores no sustituye esa regla ni conserva su orden.

El convenio se recoge en los [Fundamentos algebraico-semánticos del Sistema Vectorial SV](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/f10aac725676997adc3840a1bd1a41e1579589ea/docs/calidad/tuberias-ia/paridad-imagen-celula-matematica/Fundamentos%20algebraico-sem%C3%A1nticos%20del%20Sistema%20Vectorial%20SV.md). La [correspondencia visual](parametros-rutas.md#correspondencia-visual) explica su representación mediante el polígono del SV.

## **3.2.** Declaraciones y operaciones {#declaraciones-y-operaciones}

Las declaraciones expresan, entre otros objetos, codominios, semánticas de salida, especificaciones y estados celulares, tablas de admisibilidad, grafos, marcos, trayectorias, dominios y agentes. El análisis del programa conserva esas definiciones en la representación intermedia. Las operaciones utilizan referencias explícitas a los objetos declarados.

| Operación en SVP-EN | Finalidad definida | Precisión necesaria |
| --- | --- | --- |
| `evaluate` | Evaluar un estado celular conforme a sus reglas. | El resultado previsto es `EvalResult`; su representación como operación y su cálculo efectivo deben distinguirse. |
| `gate` | Aplicar una tabla explícita de admisibilidad a resultados de evaluación. | No admite valores de cualquier tipo ni una tabla deducida por la interfaz. |
| `resolve` | Registrar una resolución de U mediante una especificación y un contexto identificados. | Produce un registro de resolución; no autoriza sustituir arbitrariamente U. |
| `query` | Formular una consulta con un contexto explícito y tipado. | No equivale a enviar una pregunta a un proveedor de IA. |
| `supervise` | Expresar supervisión sobre un objeto admitido. | Exige las condiciones del resultado supervisor y del objeto supervisado. |
| `compose` | Construir una arquitectura con grafo, relaciones y patrones declarados. | No es una suma de células ni una composición semántica implícita. |
| Proyección de campos | Acceder explícitamente a un campo permitido de un resultado. | No crea ese resultado ni elimina sus condiciones de validez. |

Los nombres anteriores pertenecen al perfil SVP-EN. El perfil SVP-ES ofrece sus formas documentadas, como `evaluar`, `compuerta`, `resolver`, `consultar`, `supervisar` y `componer`. La selección del perfil es explícita. La gramática define las firmas y restricciones de estas operaciones. El capítulo de desarrollo y validación del núcleo distingue su representación de las capacidades de ejecución disponibles.

## **3.3.** Componentes Rust {#componentes-rust}

La organización de `sv_core`, `sv_native` y `sv_wasm`, sus entornos y sus fronteras se explica en [Arquitectura y entornos de ejecución](arquitectura-ejecucion.md). Son componentes de la implementación; no son instrucciones que un archivo SVP pueda importar.

## **3.4.** Bibliotecas de la DSL y macros {#bibliotecas-de-la-dsl-y-macros}

SVP 0.2 no incluye macros ni importación general de bibliotecas de la DSL. Cargo organiza las dependencias de la realización en Rust; los módulos Rust distribuyen su código, y el Playground permite ensamblar unidades SVP. Cada mecanismo cumple una función distinta.

El ensamblaje permite relacionar las declaraciones de varias unidades y comprobar el conjunto. La guía del [Playground](playground-sv.md#ensamblar-unidades) explica su utilización.

## **3.5.** Fuentes y alcance {#fuentes-y-alcance}

- [Gramática superficial mínima v0.1](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ed93885589015d567905d1c880d8097869310085/GRAMATICA_SUPERFICIAL_MINIMA_SV_v0_1.md) y [precisiones de v0.2](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ed93885589015d567905d1c880d8097869310085/GRAMATICA_SUPERFICIAL_MINIMA_SV_v0_2.md). Las precisiones posteriores prevalecen sobre las formas que sustituyen.
- [Organización de los componentes Rust](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ed93885589015d567905d1c880d8097869310085/rust/Cargo.toml).
- [Desarrollo y validación del núcleo](desarrollo-validacion-nucleo.md), para interpretar capacidades recibidas y obligaciones pendientes.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
