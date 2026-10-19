/* ES: Destaca la numeración ya escrita en el índice; no modifica títulos ni destinos.
   EN: Emphasise existing outline numbers without changing titles or destinations. */
(() => {
  'use strict';
  const indice = document.getElementById('mdbook-sidebar');
  if (!indice || indice.dataset.svNumeracion === '1') return;
  indice.dataset.svNumeracion = '1';
  function destacar() {
    for (const enlace of indice.querySelectorAll('a')) {
      const texto = enlace.firstChild;
      if (!texto || texto.nodeType !== Node.TEXT_NODE) continue;
      const numero = texto.data.match(/^\d+(?:\.\d+)*\.(?=\s|$)/);
      if (!numero) continue;
      const marca = document.createElement('strong');
      marca.textContent = numero[0];
      texto.data = texto.data.slice(numero[0].length);
      enlace.insertBefore(marca, texto);
    }
  }
  destacar();
  // ES/EN: mdBook incorpora apartados al navegar / mdBook adds section links on navigation.
  new MutationObserver(destacar).observe(indice, {subtree:true,childList:true});
})();
/* © 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0). */
