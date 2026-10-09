# Presentación, traducción y continuidad de lectura

**09/10/2026.** Adaptación limitada al nuevo servicio documental del mecanismo observado en `itvia-traductor-cosmologia`, versión activa d56069d6. Los servicios anteriores de ITVIA no se modifican.

Recorrido: persona lectora → selector de editorialia.com → idioma solicitado mediante `itvia_lang` → Worker de presentación → traducción automática de Google en la página. El selector no modifica las fuentes; el Worker no ejerce funciones del Árbitro ni llama a modelos de IA. Código, fórmulas y avisos conservan marcas de exclusión de traducción.

El servicio estático contiene siempre la edición española. Sin ejecución del Worker, mantiene el texto y los enlaces; si la petición solicita otro idioma, avisa de que la traducción no está disponible. El dominio exacto debe estar admitido en el fragmento editorial. Ningún dominio arbitrario puede introducirse en ese selector desde este Worker.

La modalidad prevista es Pages con `_worker.js` y continuidad de contenido estático al agotarse la cuota (`fail open`). Esta opción no desactiva un control de autenticación: todo el contenido de este despliegue es deliberadamente público y el Worker sólo añade presentación. No se incorporan claves, expedientes reservados o cuentas.

Fuentes técnicas: [modo avanzado](https://developers.cloudflare.com/pages/functions/advanced-mode/), [carga directa y compatibilidad de `_worker.js`](https://developers.cloudflare.com/pages/get-started/direct-upload/) y [continuidad al agotarse la cuota](https://developers.cloudflare.com/pages/functions/routing/#fail-open--closed). La configuración efectiva y el recorrido público requieren recepción posterior al despliegue. Las siete pruebas locales no simulan el contador global del proveedor ni lo agotan deliberadamente.

Las pruebas cubren selección editorial, idiomas permitidos, rechazo de contenido inyectado en parámetros, marcadores ausentes o duplicados, preservación de originales Markdown, fallo de composición y conservación de errores/HEAD. La traducción no se declara correcta por el mero hecho de cargar el servicio.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
