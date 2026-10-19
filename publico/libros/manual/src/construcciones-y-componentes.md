# Construcciones del lenguaje y componentes propios

**Referencia explicativa · 19 de octubre de 2026.**

El Lenguaje SV dispone de una gramática superficial y una representación intermedia. La primera determina cómo se escriben sus programas; la segunda conserva sus objetos y operaciones de forma estructurada. Las bibliotecas Rust que realizan estas funciones pertenecen a la implementación y no son, por ello, bibliotecas importables desde un archivo SVP.

## Declaraciones y operaciones

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

## Componentes Rust

| Componente | Función en la distribución del lenguaje |
| --- | --- |
| `sv_core` | Biblioteca del lenguaje: análisis, comprobaciones y representación estructurada, con los contratos implementados en esa revisión. |
| `sv_native` | Interfaz de ejecución nativa para presentar archivos al comprobador y consultar su resultado. |
| `sv_wasm` | Interfaz de las funciones del lenguaje expuestas al entorno WebAssembly. |

Estos componentes comparten la realización del lenguaje en lugar de definir semánticas independientes para cada interfaz. Una interfaz concreta sólo puede utilizar las funciones que su distribución expone. JavaScript no adquiere autoridad para modificar las reglas del núcleo por transportar un texto o presentar una respuesta.

## Bibliotecas de la DSL y macros

SVP 0.2 no incluye macros ni importación general de bibliotecas de la DSL. Cargo organiza las dependencias de la realización en Rust; los módulos Rust distribuyen su código, y el Playground permite ensamblar unidades SVP. Cada mecanismo cumple una función distinta.

El ensamblaje disponible permite relacionar las declaraciones de varias unidades y comprobar el conjunto. La incorporación futura de bibliotecas de la DSL deberá conservar la identidad y versión de cada biblioteca, sus contratos, compatibilidad y permisos. SVP 0.2 mantiene, por ahora, el ensamblaje explícito de unidades.

## Fuentes y alcance

- [Gramática superficial mínima v0.1](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ed93885589015d567905d1c880d8097869310085/GRAMATICA_SUPERFICIAL_MINIMA_SV_v0_1.md) y [precisiones de v0.2](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ed93885589015d567905d1c880d8097869310085/GRAMATICA_SUPERFICIAL_MINIMA_SV_v0_2.md). Las precisiones posteriores prevalecen sobre las formas que sustituyen.
- [Organización de los componentes Rust](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/ed93885589015d567905d1c880d8097869310085/rust/Cargo.toml).
- [Desarrollo y validación del núcleo](desarrollo-validacion-nucleo.md), para interpretar capacidades recibidas y obligaciones pendientes.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
