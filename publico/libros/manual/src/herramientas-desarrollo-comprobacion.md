# Herramientas de desarrollo y comprobación

El Lenguaje de Computación SV dispone de herramientas para construir su realización en Rust, revisar el código y contrastar sus resultados. Cada instrumento aporta una evidencia concreta: el formato de las fuentes, la admisión por el compilador, el comportamiento ante entradas conocidas o la correspondencia entre destinos de ejecución. Sus resultados deben interpretarse conforme a ese alcance.

Este capítulo presenta las herramientas de construcción y comprobación documentadas en el proyecto y las previstas por su norma de [Código limpio y auditable](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/main/docs/calidad/tuberias-ia/continuacion-15-09-2026/CODIGO-LIMPIO-Y-AUDITABLE.md). La presencia de una herramienta no acredita que todas las versiones del lenguaje hayan superado sus comprobaciones.

## Qué aporta cada herramienta

| Herramienta | Finalidad en el desarrollo del lenguaje | Límite de la comprobación |
| --- | --- | --- |
| **rustup** | Seleccionar la versión de Rust y los destinos de compilación requeridos. | Disponer del compilador no demuestra que el programa compile o funcione. |
| **rustc** | Compilar Rust y comprobar sus reglas de tipos, propiedad y préstamos. | No verifica por sí solo la corrección de las reglas del SV ni elimina todos los posibles fallos. |
| **Cargo** | Organizar los componentes, sus dependencias, la construcción y las pruebas. | Cada orden tiene un alcance distinto; comprobar, construir y ejecutar pruebas son operaciones separadas. |
| **rustfmt** | Mantener una presentación uniforme del código Rust, conforme a la norma de calidad. | El formato no demuestra corrección funcional ni seguridad. |
| **Clippy** | Detectar patrones problemáticos y proponer mejoras de claridad, complejidad y eficiencia, conforme a la norma de calidad. | Sus avisos necesitan interpretación; no sustituye las pruebas ni la revisión de seguridad. |
| **Git y GitHub Actions** | Identificar revisiones y ejecutar las comprobaciones automatizadas declaradas por el proyecto. | Un resultado sólo corresponde a la revisión, los trabajos y las condiciones que efectivamente se comprobaron. |
| **Comprobaciones de conformidad y paridad del SV** | Contrastar entradas, resultados esperados y correspondencia entre ejecución nativa y WebAssembly. | La evidencia se limita a los casos y propiedades examinados. |
| **mdBook** | Construir los libros a partir de sus capítulos y su índice. | Una construcción correcta no garantiza la exactitud del contenido ni la validez de todos sus enlaces. |

## Versión de Rust y construcción de los componentes

`rustup` permite mantener versiones identificadas de Rust y sus componentes. La versión de referencia debe obtenerse de las instrucciones y comprobaciones correspondientes a la revisión del proyecto que se vaya a construir. El canal `stable` puede cambiar con el tiempo; por eso no basta con indicar que se utilizó «Rust estable».

El espacio de trabajo de `rust/Cargo.toml` contiene tres componentes:

- **`sv_core`**: realización compartida de las reglas del lenguaje.
- **`sv_native`**: acceso al núcleo desde el ejecutable nativo.
- **`sv_wasm`**: adaptación del mismo núcleo a WebAssembly.

Esta organización permite comprobar distintos destinos sin mantener una segunda definición de las reglas del lenguaje en cada uno. La correspondencia debe comprobarse también mediante pruebas; no se deduce únicamente de la estructura de las carpetas.

Cargo utiliza `Cargo.toml` para describir el proyecto y `Cargo.lock` para identificar las versiones resueltas de sus dependencias. La opción `--locked` impide modificar esa resolución durante una comprobación. `--offline` impide el acceso a la red por parte de Cargo y requiere disponer previamente de las dependencias necesarias; no convierte la ejecución posterior de cualquier programa en una ejecución sin red.

Los siguientes ejemplos parten de la raíz del repositorio y presuponen que se ha seleccionado la versión de Rust correspondiente:

```text
rustc --version --verbose
cargo --version
cargo check --manifest-path rust/Cargo.toml --workspace --locked
cargo build --manifest-path rust/Cargo.toml -p sv_native --locked
```

`cargo check` detecta errores sin completar la generación final del programa. `cargo build` realiza la construcción. Ninguna de estas dos órdenes ejecuta por sí sola la batería de pruebas. Véanse el [manual de Cargo](https://doc.rust-lang.org/cargo/) y la [descripción de cargo check](https://doc.rust-lang.org/cargo/commands/cargo-check.html).

## Formato uniforme con rustfmt

La norma de calidad del SV utiliza `rustfmt` para normalizar la presentación de las fuentes Rust. La comprobación del formato permite detectar diferencias sin reescribir los archivos:

```text
cargo fmt --manifest-path rust/Cargo.toml --all -- --check
```

Al aplicar el formato se revisan las diferencias resultantes junto con el resto del cambio. Una presentación uniforme facilita la lectura y reduce diferencias irrelevantes entre revisiones; no corrige una regla semántica errónea. La referencia de la herramienta es [Rustfmt](https://rust-lang.github.io/rustfmt/).

## Análisis estático con Clippy

[Clippy](https://doc.rust-lang.org/clippy/) analiza código Rust mediante reglas de diagnóstico. Puede señalar operaciones incorrectas, construcciones sospechosas, complejidad innecesaria, problemas de estilo o posibilidades de mejora del rendimiento. Se integra con Cargo y necesita un componente compatible con la versión de Rust seleccionada.

```text
cargo clippy --manifest-path rust/Cargo.toml --workspace --all-targets --locked
```

En esta orden, `--all-targets` incluye los tipos de objetivos del proyecto, como bibliotecas, ejecutables, ejemplos y pruebas; no significa «todas las arquitecturas» ni «todas las combinaciones de características». Clippy analiza las pruebas seleccionadas, pero no las ejecuta.

Cada aviso debe resolverse mediante una corrección o una excepción acotada y justificada. La norma del SV exige conservar el motivo de las excepciones y evita silenciamientos generales. Las reglas adicionales se seleccionan según las necesidades del componente. En particular, la documentación oficial desaconseja activar indiscriminadamente toda la categoría `restriction`, pues contiene restricciones que pueden resultar incompatibles entre sí.

Un análisis terminado sin errores puede conservar advertencias. El informe debe distinguir ambos resultados e indicar el alcance examinado. Tampoco la ausencia de advertencias constituye una certificación de seguridad o de conformidad del lenguaje.

## Pruebas, conformidad y paridad

Las pruebas de Rust comprueban comportamientos concretos y relaciones entre componentes:

```text
cargo test --manifest-path rust/Cargo.toml --workspace --locked
```

Debe conservarse la distinción entre pruebas favorables, fallidas y excluidas. Una prueba excluida no cuenta como favorable. Las pruebas de documentación, cuando existan y estén habilitadas, comprueban los ejemplos ejecutables que les correspondan. El comportamiento de la orden se describe en [cargo test](https://doc.rust-lang.org/cargo/commands/cargo-test.html).

El proyecto dispone además de comprobaciones propias con fuentes válidas e inválidas y resultados esperados conservados. La **conformidad** contrasta la respuesta del lenguaje con esos resultados. Las pruebas de **sensibilidad del observador** comprueban que el procedimiento de comparación detecte alteraciones relevantes: no basta con que siempre devuelva un resultado favorable.

La **paridad** contrasta los destinos nativo y WebAssembly. Se distinguen `wasm32-wasip1`, utilizado con un entorno de ejecución WASI, y `wasm32-unknown-unknown`, utilizado por el adaptador de navegador. Compilar para ambos destinos sólo acredita su construcción; la paridad requiere ejecutar y comparar los casos previstos. Que dos destinos produzcan el mismo resultado tampoco demuestra, por sí solo, que dicho resultado sea correcto: ambos deben contrastarse con la especificación y los resultados esperados.

Los programas auxiliares de las baterías preparan entradas, invocan realizaciones y comparan resultados. Su función debe mantenerse separada de la autoridad semántica del núcleo Rust. El contraste técnico tampoco autoriza operaciones del Árbitro - Director ni determina la aptitud de un modelo de IA.

## Revisiones identificadas y comprobaciones automatizadas

Git conserva la relación entre una modificación y su revisión. GitHub Actions ejecuta los procedimientos definidos en el repositorio para los acontecimientos y rutas que cada procedimiento declara. Debe comprobarse que el trabajo pertinente se haya ejecutado, que corresponda a la revisión examinada y que haya concluido; la mera existencia de su archivo de configuración no acredita un resultado.

Las definiciones de [comprobación Rust](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/main/.github/workflows/r0-rust.yml), [conformidad](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/main/.github/workflows/conformance.yml) y [paridad nativa y WebAssembly](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/main/.github/workflows/r0-wasm-parity.yml) permiten consultar el alcance automatizado. La norma de formato y análisis estático debe distinguirse de los trabajos efectivamente configurados: no se presupone que un resultado favorable de estos procedimientos incluya rustfmt o Clippy.

Una huella SHA-256 permite comprobar que un archivo coincide con otro identificado. Por sí sola no prueba la identidad del autor, la autorización de una actuación ni la corrección de su contenido. Para interpretar una comprobación deben relacionarse la revisión, las fuentes, las herramientas utilizadas, las opciones, los resultados y las exclusiones.

## Documentación con mdBook

Este manual se construye con [mdBook](https://rust-lang.github.io/mdBook/). Los capítulos se redactan en Markdown y `SUMMARY.md` determina su organización y navegación. La configuración de `book.toml` establece la presentación y la salida del libro.

La revisión documental comprueba la jerarquía, los enlaces, los ejemplos, la legibilidad y la correspondencia con la versión explicada. La documentación oficial de cada herramienta complementa este capítulo; las reglas y límites propios del lenguaje se mantienen en sus fuentes normativas.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
