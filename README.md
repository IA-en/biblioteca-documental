# Biblioteca documental del Sistema Vectorial SV

Primera edición documental, **V.1 · 09/10/2026**. Reúne una guía de consulta, la edición disponible del manual del Lenguaje de Computación y el libro de conocimiento experimental de ciberseguridad. El español es la lengua original. La traducción automática de lectura conserva la referencia al texto español y no sustituye el contenido autorizado del MCP.

| Libro | Fuentes identificadas | Presentación |
| --- | --- | --- |
| Guía de la biblioteca | [Índice y organización](libros/guia/src/SUMMARY.md) | `publico/index.html` |
| Manual del Lenguaje de Computación | [Índice de la edición](libros/manual/src/SUMMARY.md) | `publico/dominios/lenguaje-de-computacion/manual/` |
| Conocimiento experimental de ciberseguridad | [Índice del libro](libros/ciberseguridad/src/SUMMARY.md) | `publico/dominios/ciberseguridad/biblioteca/conocimiento-modelos-ia/` |

Los tramos del manual no recibidos se identifican como pendientes; no se presenta un manual completo. Los nueve originales históricos se conservan literalmente y sus menciones temporales pertenecen a aquellas ediciones. La guía distingue esa procedencia de la publicación actual.

## Recepción y alcance

[Recepción documental](verificaciones/RECEPCION.md): diecinueve comprobaciones Rust conformes; catorce originales y setenta y siete secciones íntegramente cotejados. El recorrido con el controlador y el MCP recibió además el índice de biblioteca: quince documentos y ochenta y una secciones. [Correspondencia de originales, líneas y huellas](correspondencia.json).

El Árbitro-Director, sus permisos y el suministro documental permanecen en Rust. La web, su Worker de presentación y los recursos de mdBook no gobiernan la IA. Esta recepción documental no acredita por sí sola navegación autónoma de un modelo ni recepción integral de producción. El estado preparatorio del manifiesto conserva el estado de admisión del ensayo; publicarlo no cambia esa autoridad.

## Lectura pública e idiomas

Destino aprobado: **https://documentos-sv.itvia.online/**. La recepción del despliegue y del recorrido de idiomas se documentará después de comprobar el servicio. La matriz editorial es [editorialia.com](https://editorialia.com/), ISSN 2695-6411.

El Worker de la biblioteca incorpora el selector de idiomas de Editorialia, siguiendo el mecanismo existente de ITVIA. El traductor se solicita explícitamente por la persona lectora. El original se conserva como contenido estático; el despliegue debe mantenerlo disponible al agotarse la cuota gratuita del Worker. Consulte [configuración y comprobaciones](verificaciones/PRESENTACION.md).

## Fuentes y conservación

`libros/` contiene las fuentes Markdown, sus planes de suministro, plantillas y configuración de mdBook. `publico/` contiene la edición web y copias idénticas de los originales. `biblioteca.json` fija procedencias y permisos documentales; `correspondencia.json` permite el cotejo sin depender de la traducción.

La presentación se compila con mdBook 0.5.4. El código nuevo de cotejo se conserva en [cotejar-edicion.rs](verificaciones/cotejar-edicion.rs), como ampliación de `sv-biblioteca-documental` 0.1.0 y `sv-mcp-documental` 0.1.5-mdbook.1; no es un ejecutable autónomo. No se incluyen credenciales, registros privados de procesos ni cuentas.

[Autoría y licencias](AUTORIA-Y-LICENCIAS.md). Las licencias originales de terceros y de mdBook permanecen diferenciadas.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
