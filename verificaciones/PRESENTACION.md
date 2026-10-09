# Presentación, traducción y continuidad de lectura

**09/10/2026.** Adaptación limitada al nuevo servicio documental del mecanismo observado en `itvia-traductor-cosmologia`, versión activa d56069d6. Los servicios anteriores de ITVIA no se modifican.

Recorrido: persona lectora → selector de editorialia.com → idioma solicitado mediante `itvia_lang` → Worker de presentación → traducción automática de Google en la página. El selector no modifica las fuentes; el Worker no ejerce funciones del Árbitro ni llama a modelos de IA. Código, fórmulas y avisos conservan marcas de exclusión de traducción.

El servicio estático contiene siempre la edición española. Sin ejecución del Worker, mantiene el texto y los enlaces; si la petición solicita otro idioma, avisa de que la traducción no está disponible. El dominio exacto está admitido en el fragmento editorial. Se activaron exclusivamente las dos líneas preparadas para su inclusión y para permitir su incrustación; el código recuperado coincide con esa modificación. Ningún dominio arbitrario puede introducirse en ese selector desde este Worker.

La modalidad desplegada es Pages con `_worker.js` y continuidad de contenido estático al agotarse la cuota (`fail open`). Esta opción no desactiva un control de autenticación: todo el contenido de este despliegue es deliberadamente público y el Worker sólo añade presentación. No se incorporan claves, expedientes reservados o cuentas.

Fuentes técnicas: [modo avanzado](https://developers.cloudflare.com/pages/functions/advanced-mode/), [carga directa y compatibilidad de `_worker.js`](https://developers.cloudflare.com/pages/get-started/direct-upload/) y [continuidad al agotarse la cuota](https://developers.cloudflare.com/pages/functions/routing/#fail-open--closed). El panel confirma «Fallo abierto», el dominio activo y SSL habilitado. Se recibieron las catorce páginas de contenido, el selector servido desde Editorialia y una traducción inglesa efectiva, seguida del regreso al español sin cargar el traductor. Las siete pruebas locales no simulan el contador global del proveedor ni lo agotan deliberadamente.

Las pruebas cubren selección editorial, idiomas permitidos, rechazo de contenido inyectado en parámetros, marcadores ausentes o duplicados, preservación de originales Markdown, fallo de composición y conservación de errores/HEAD. La traducción no se declara correcta por el mero hecho de cargar el servicio.

## Conservación de los servicios existentes

La portada www.itvia.online y su selector editorial siguen respondiendo. No se modificaron los Workers existentes. Durante la revisión, el lector independiente lectura-sv.itvia.online informó de un HTTP 403 de GitHub al recuperar profile/README.md. Se conserva como incidencia de lectura externa, sin atribuirle una causa no comprobada. La biblioteca nueva sirve una edición estática y no depende de esa consulta a GitHub para cada lectura.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
