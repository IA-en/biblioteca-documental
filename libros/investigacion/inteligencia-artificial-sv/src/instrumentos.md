# Instrumentos y comunidades

<p class="sv-page-number">Página 13 de 14</p>

Los instrumentos permiten realizar y examinar operaciones. Su inclusión no acredita por sí misma una capacidad semántica ni demuestra la arquitectura completa.

| Instrumento | Función y condiciones | Comunidad |
|---|---|---|
| Rust | Lenguaje exclusivo de los componentes propios. | <a href="https://github.com/rust-lang/rust" target="_blank" rel="noopener noreferrer">Repositorio</a>. |
| Clippy | Análisis del código Rust; complementa las pruebas, no las sustituye. | <a href="https://github.com/rust-lang/rust-clippy" target="_blank" rel="noopener noreferrer">Repositorio</a>. |
| egui | Instrumento designado para representar e inspeccionar células conforme a su geometría constituida. Integración canónica pendiente en los ensayos aquí descritos. | <a href="https://github.com/emilk/egui" target="_blank" rel="noopener noreferrer">Repositorio</a>. |
| redb | Persistencia transaccional. La conservación por adición requiere operaciones que impidan sustituir antecedentes. | <a href="https://github.com/cberner/redb" target="_blank" rel="noopener noreferrer">Repositorio</a>. |
| Candle | Instrumento disponible para estudiar cálculo tensorial. Su disponibilidad no implica adoptar modelos ni operaciones probabilísticas. Cada uso debe satisfacer las condiciones de exactitud y determinismo de la arquitectura. | <a href="https://github.com/huggingface/candle" target="_blank" rel="noopener noreferrer">Repositorio</a>. |
| image | Lectura y transformación de representaciones digitales con formatos declarados. | <a href="https://github.com/image-rs/image" target="_blank" rel="noopener noreferrer">Repositorio</a>. |
| mdBook | Composición editorial del libro. | <a href="https://github.com/rust-lang/mdBook" target="_blank" rel="noopener noreferrer">Repositorio</a>. |

La traducción editorial de la obra pertenece a su presentación documental. No constituye el transductor semántico ni forma parte del razonamiento de la inteligencia artificial descrita.


## Realización de los ensayos de Génesis

El entorno examinado utiliza **Rust 1.98.1**, **Cargo 1.98.1** y **Clippy 0.1.98**. La representación de figuras utiliza [resvg 0.49.0](https://github.com/linebender/resvg); la conservación estructurada utiliza [Serde 1.0.229](https://github.com/serde-rs/serde) y [serde_json 1.0.154](https://github.com/serde-rs/json). El libro se compone con **mdBook 0.5.4**. Las versiones identifican el procedimiento observado; no son una afirmación sobre la distribución más reciente disponible.

Candle no participa en el procedimiento perceptivo de contornos descrito. Su disponibilidad en el ecosistema permite estudiar operaciones tensoriales futuras, pero no acredita aceleración ni una integración ejecutada. La persistencia histórica mediante redb 4.4.0 se distingue de los registros posteriores de cálculo. El diagrama de operaciones dispone de una descripción [Mermaid](https://github.com/mermaid-js/mermaid); el libro muestra una representación editorial estática y no requiere ejecutar esa biblioteca para leerla.

<!-- © 2026 Juan Antonio Lloret Egea. CC BY-NC-ND 4.0. Publicación de arquitectura: https://doi.org/10.21428/39829d0b.0481eae3. Artículo fundacional del LBI: https://doi.org/10.21428/39829d0b.8b9c0155. -->
