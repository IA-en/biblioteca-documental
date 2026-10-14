/* Presentación pública para lectura humana; no modifica los originales. */
(() => {
  'use strict';
  const caja = document.querySelector('.sv-language-tools');
  const estado = document.getElementById('sv-language-status');
  if (!caja || !estado) return;
  const clavePanel = 'sv-biblioteca-panel-idiomas-v1';
  try { caja.open = sessionStorage.getItem(clavePanel) === 'abierto'; } catch (_) { caja.open = false; }
  const guardarPanel = () => {
    try { sessionStorage.setItem(clavePanel, caja.open ? 'abierto' : 'cerrado'); } catch (_) {}
  };
  caja.addEventListener('toggle', guardarPanel);
  window.addEventListener('pagehide', guardarPanel);

  const actual = new URL(location.href);
  const original = new URL(actual); original.searchParams.delete('itvia_lang');
  const enlaceOriginal = document.getElementById('sv-original');
  if (enlaceOriginal) enlaceOriginal.href = original.href;
  document.querySelectorAll('pre,code,.math,.sv-language-tools,.sv-library-nav').forEach(e => {
    e.classList.add('notranslate'); e.setAttribute('translate','no');
  });
  const informar = (fase, texto) => {
    caja.dataset.estado = fase;
    estado.textContent = texto;
  };
  if (!caja.dataset.worker) {
    informar('original', 'Original en español. El selector no está disponible en esta respuesta.');
    return;
  }
  const idioma = caja.dataset.idioma;
  const resumen = caja.querySelector('summary');
  const selector = caja.querySelector('select[name="itvia_lang"]');
  const formulario = caja.querySelector('.sv-language-form');
  const elegido = selector && selector.selectedOptions[0];
  if (idioma && resumen && elegido) resumen.textContent = 'Idiomas / Languages · ' + elegido.textContent;
  if (formulario) formulario.addEventListener('submit', e => {
    // El buscador de mdBook cancela envíos en document; este formulario es independiente.
    e.stopPropagation();
    if (selector.value === idioma && ['preparando','traduciendo'].includes(caja.dataset.estado)) {
      e.preventDefault();
      estado.textContent = 'La traducción está en curso. Espere a su confirmación o seleccione otro idioma.';
    }
  });
  if (!idioma) {
    informar('original', 'Original en español. Seleccione el idioma de lectura.');
    return;
  }

  const propagarIdioma = () => document.querySelectorAll('a[href]').forEach(a => {
    if (a.id === 'sv-original' || a.closest('.sv-language-tools')) return;
    const u = new URL(a.href, actual);
    if (u.origin === actual.origin && !u.pathname.startsWith('/libros/') &&
        (u.pathname.endsWith('.html') || !u.pathname.split('/').pop().includes('.'))) {
      u.searchParams.set('itvia_lang', idioma);
      if (a.href !== u.href) a.href = u.href;
    }
  });
  propagarIdioma();
  // Los resultados de búsqueda se crean después de cargar el documento.
  document.addEventListener('click', propagarIdioma, true);
  // La edición conserva siempre el original; únicamente esta vista se traduce.
  const main = document.querySelector('main');
  // Referencias estables: reorganizar la licencia no es traducir el documento.
  const bloques = Array.from(main ? main.children : []).filter(e =>
    !e.matches('.sv-language-tools,.sv-library-nav,.sv-brand-footer,script,style') &&
    !e.textContent.trim().startsWith('© 2026 Juan Antonio Lloret Egea.'));
  const textoDocumento = () => bloques.map(e => e.textContent.replace(/\s+/g,' ').trim()).join('\n');
  const textoInicial = textoDocumento();
  const contenedor = document.getElementById('google_translate_element');
  if (!contenedor) {
    informar('no-confirmada', 'No se pudo preparar la traducción. El original sigue disponible.');
    return;
  }
  informar('preparando', 'Preparando la traducción. El texto aún puede estar en español.');

  let controlSolicitado = null;
  let confirmacion = null;
  let textoObservado = textoInicial;
  let terminado = false;
  let limite;
  const observador = new MutationObserver(() => comprobar());
  function detener() {
    terminado = true;
    clearTimeout(limite);
    clearTimeout(confirmacion);
    observador.disconnect();
  }
  function fallo(texto) {
    if (terminado) return;
    detener();
    informar('no-confirmada', texto);
  }
  function comprobar() {
    if (terminado) return;
    const control = contenedor.querySelector('select.goog-te-combo');
    if (!control || !Array.from(control.options).some(o => o.value === idioma)) return;
    if (controlSolicitado !== control) {
      controlSolicitado = control;
      informar('traduciendo', 'Traduciendo el contenido. Espere a la confirmación.');
      // No se presume que cargar Google o escribir una cookie aplique un idioma.
      // Se acciona el control efectivo una vez, aunque haya preferencias previas distintas.
      control.value = idioma;
      control.dispatchEvent(new Event('change', {bubbles:true}));
    }
    const textoActual = textoDocumento();
    if (textoActual !== textoObservado) {
      textoObservado = textoActual;
      clearTimeout(confirmacion); confirmacion = null;
    }
    const traducida = control.value === idioma &&
      (document.documentElement.classList.contains('translated-ltr') ||
       document.documentElement.classList.contains('translated-rtl')) &&
      textoActual !== textoInicial;
    if (!traducida) {
      clearTimeout(confirmacion); confirmacion = null;
      if (caja.dataset.estado === 'aplicada') {
        informar('original-proveedor', 'Se muestra el original en español. Pulse Aplicar si desea traducirlo de nuevo.');
      }
      return;
    }
    if (caja.dataset.estado === 'aplicada') return;
    // Confirmación de presentación observada; no constituye revisión lingüística.
    if (confirmacion === null) confirmacion = setTimeout(() => {
      confirmacion = null;
      if (control.value !== idioma || textoDocumento() !== textoActual || textoActual === textoInicial ||
          !(document.documentElement.classList.contains('translated-ltr') ||
            document.documentElement.classList.contains('translated-rtl'))) return;
      clearTimeout(limite);
      informar('aplicada', 'Traducción visible para la lectura. Contrástela con el original.');
      propagarIdioma();
    }, 900);
  }
  observador.observe(document.documentElement, {subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class']});
  limite = setTimeout(() => fallo('No se ha confirmado la traducción. Pulse Aplicar para reintentar o consulte el original en español.'), 25000);
  window.googleTranslateElementInit = () => {
    if (terminado) return;
    try {
      new window.google.translate.TranslateElement({pageLanguage:'es',includedLanguages:idioma,autoDisplay:false}, 'google_translate_element');
      comprobar();
    } catch (_) { fallo('No se pudo iniciar la traducción. Puede reintentar con Aplicar; el original sigue disponible.'); }
  };
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  script.onerror = () => fallo('Google no ha respondido. Puede reintentar con Aplicar o consultar el original en español.');
  document.head.append(script);
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
