/* Presentación humana: no modifica originales ni ejerce controles del SV. */
(() => {
  'use strict';
  const caja = document.querySelector('.sv-language-tools');
  const estado = document.getElementById('sv-language-status');
  if (!caja || !estado) return;
  // El estado de apertura pertenece al lector, no al idioma solicitado.
  const clavePanel = 'sv-biblioteca-panel-idiomas-v1';
  try { caja.open = sessionStorage.getItem(clavePanel) === 'abierto'; } catch (_) { caja.open = false; }
  caja.addEventListener('toggle', () => {
    try { sessionStorage.setItem(clavePanel, caja.open ? 'abierto' : 'cerrado'); } catch (_) {}
  });
  // Conserva también un cierre seguido inmediatamente de navegación.
  window.addEventListener('pagehide', () => {
    try { sessionStorage.setItem(clavePanel, caja.open ? 'abierto' : 'cerrado'); } catch (_) {}
  });
  const actual = new URL(location.href);
  const original = new URL(actual); original.searchParams.delete('itvia_lang');
  document.getElementById('sv-original').href = original.href;
  document.querySelectorAll('pre,code,.math,.sv-language-tools,.sv-library-nav').forEach(e => {
    e.classList.add('notranslate'); e.setAttribute('translate','no');
  });
  if (!caja.dataset.worker) {
    if (actual.searchParams.has('itvia_lang')) {
      estado.textContent = 'La traducción no está disponible en esta respuesta. Se conserva el original en español.';
    }
    return;
  }
  const idioma = caja.dataset.idioma;
  const resumen = caja.querySelector('summary');
  const elegido = caja.querySelector('select[name="itvia_lang"] option:checked');
  if (idioma && resumen && elegido) resumen.textContent = 'Idiomas / Languages · ' + elegido.textContent;
  if (!idioma) {
    estado.textContent = 'Original en español. Seleccione el idioma de lectura.';
    return;
  }
  document.querySelectorAll('a[href]').forEach(a => {
    const u = new URL(a.href, actual);
    if (u.origin === actual.origin && !u.pathname.startsWith('/libros/') &&
        (u.pathname.endsWith('.html') || !u.pathname.split('/').pop().includes('.')) && a.id !== 'sv-original') {
      u.searchParams.set('itvia_lang', idioma); a.href = u.href;
    }
  });
  // Cookie de este subdominio: no cambia preferencias de los demás portales.
  document.cookie = 'googtrans=/es/' + idioma + '; path=/; SameSite=Lax' + (actual.protocol === 'https:' ? '; Secure' : '');
  let iniciado = false;
  window.googleTranslateElementInit = () => {
    try {
      new window.google.translate.TranslateElement({pageLanguage:'es',includedLanguages:idioma,autoDisplay:false}, 'google_translate_element');
      iniciado = true;
      estado.textContent = 'Traducción automática para lectura. Puede cerrar este panel y continuar leyendo.';
    } catch (_) { estado.textContent = 'No se pudo iniciar la traducción. El original sigue disponible.'; }
  };
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  script.onerror = () => { estado.textContent = 'El traductor no ha respondido. El original sigue disponible.'; };
  document.head.append(script);
  setTimeout(() => { if (!iniciado) estado.textContent = 'No se ha confirmado la carga del traductor. El original sigue disponible.'; },15000);
})();
/* © 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0). */

/* Agrupa el último texto de licencia con su identidad visual sin modificarlo. */
(() => {
  const footer = document.querySelector('main > .sv-brand-footer');
  if (!footer) return;
  const licenses = Array.from(document.querySelectorAll('main > p')).filter(p =>
    p.textContent.trim().startsWith('© 2026 Juan Antonio Lloret Egea.') &&
    p.textContent.includes('CC BY-NC-ND 4.0'));
  const license = licenses[licenses.length - 1];
  if (license) footer.append(license);
})();
