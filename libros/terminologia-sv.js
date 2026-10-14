/* Denominaciones propias: se conserva la grafía de la edición española. */
(() => {
  'use strict';
  if (document.documentElement.dataset.svTerminologia === '20261014') return;
  document.documentElement.dataset.svTerminologia = '20261014';
  const nombres = [
    'Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español',
    'Selector del Árbitro-Director',
    'Investigación y puesta en marcha de modelos de IA',
    'Exámenes – Ensayos – Tests IA',
    'Lenguaje de Computación SV', 'Lenguaje de Computación',
    'Sistema Vectorial SV', 'Sistema Vectorial', 'Árbitro-Director', 'Polígono SV',
    'La Biblia de la IA', 'SV-lenguaje-de-computacion', 'SVperitus-dataset',
    'SVcustos-dataset', 'SV-motor', 'SVperitus', 'SVcustos',
    'ITVIA', 'IA eñ', 'IAeñ', 'IA-en', 'EET-IA', 'EET-CYB16', 'SVP', 'SV'
  ];
  const escapar = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const literal = s => s.split(/\s*[–—-]\s*/).map(parte =>
    parte.split(/\s+/).map(escapar).join('[\\s\\u00a0]+')).join('[\\s\\u00a0]*[–—-][\\s\\u00a0]*');
  const expresiones = nombres.sort((a,b) => b.length-a.length).map(literal);
  expresiones.push('OP-[A-Z]{3}-[0-9]{3}(?:-Q[0-9]+)?', 'P[0-9]{2}', 'N[0-4]', 'Q[0-9]+');
  const patron = new RegExp('(?<![\\p{L}\\p{N}_])(?:' + expresiones.join('|') + ')(?![\\p{L}\\p{N}_])', 'giu');
  const excluir = 'script,style,noscript,textarea,input,select,option,pre,code,math,svg,.math,.notranslate,[translate="no"],#google_translate_element,.sv-language-tools';
  const bloque = /^(ADDRESS|ARTICLE|ASIDE|BLOCKQUOTE|BR|CAPTION|DD|DIV|DL|DT|FIGCAPTION|FIGURE|FOOTER|H[1-6]|HEADER|HR|LI|MAIN|NAV|OL|P|SECTION|TABLE|TBODY|TD|TH|THEAD|TR|UL)$/;
  function proteger(raiz) {
    if (!raiz || (raiz.nodeType === 1 && raiz.closest(excluir))) return;
    const grupos = [];
    let grupo = [];
    const cerrar = () => { if (grupo.length) grupos.push(grupo); grupo = []; };
    function recorrer(nodo) {
      if (nodo.nodeType === 3) { grupo.push(nodo); return; }
      if (nodo.nodeType !== 1 && nodo.nodeType !== 11) return;
      if (nodo.nodeType === 1 && nodo.matches(excluir)) { cerrar(); return; }
      const separado = nodo.nodeType === 1 && (bloque.test(nodo.tagName) || nodo.matches('.teaser'));
      if (separado) cerrar();
      Array.from(nodo.childNodes).forEach(recorrer);
      if (separado) cerrar();
    }
    recorrer(raiz); cerrar();
    for (const nodos of grupos) {
      const texto = nodos.map(n => n.data).join('');
      const intervalos = [];
      for (const m of texto.matchAll(patron)) {
        let a=m.index, b=m.index+m[0].length;
        // Google puede retirar el espacio exterior de una marca: se conserva el original.
        while (a>0 && /[ \t\u00a0]/.test(texto[a-1])) a--;
        while (b<texto.length && /[ \t\u00a0.,;:!?…]/.test(texto[b])) b++;
        const previo=intervalos[intervalos.length-1];
        if (previo && a<=previo[1]) previo[1]=b; else intervalos.push([a,b]);
      }
      if (!intervalos.length) continue;
      let inicio = 0;
      for (const nodo of nodos) {
        const fin = inicio+nodo.data.length;
        const trozos = intervalos.filter(([a,b]) => a<fin && b>inicio).map(([a,b]) => [Math.max(a,inicio)-inicio,Math.min(b,fin)-inicio]);
        if (trozos.length) {
          const fragmento = document.createDocumentFragment();
          let pos = 0;
          for (const [a,b] of trozos) {
            fragmento.append(document.createTextNode(nodo.data.slice(pos,a)));
            const marca = document.createElement('span');
            marca.className = 'sv-denominacion notranslate';
            marca.setAttribute('translate','no');
            marca.textContent = nodo.data.slice(a,b);
            fragmento.append(marca); pos=b;
          }
          fragmento.append(document.createTextNode(nodo.data.slice(pos)));
          nodo.replaceWith(fragmento);
        }
        inicio=fin;
      }
    }
  }
  // El título de la pestaña no admite marcas interiores: conserva su original completo.
  const titulo = document.querySelector('title');
  if (titulo) { titulo.setAttribute('translate','no'); titulo.classList.add('notranslate'); }
  proteger(document.body);
  // Índices y búsquedas pueden incorporarse después de la carga inicial.
  const dinamicos = '#mdbook-sidebar,#sidebar,#mdbook-searchresults,#searchresults';
  const observador = new MutationObserver(registros => {
    const pendientes = new Set();
    for (const registro of registros) {
      if (!registro.addedNodes.length) continue;
      const padre = registro.target.nodeType === 1 ? registro.target : registro.target.parentElement;
      if (!padre || padre.closest(excluir + ',font')) continue;
      if (padre.closest(dinamicos)) pendientes.add(padre);
      for (const nodo of registro.addedNodes) {
        if (nodo.nodeType !== 1 || nodo.matches('font,' + excluir)) continue;
        if (nodo.matches(dinamicos)) pendientes.add(nodo);
        nodo.querySelectorAll(dinamicos).forEach(e => pendientes.add(e));
      }
    }
    pendientes.forEach(proteger);
  });
  observador.observe(document.body, {subtree:true,childList:true});
})();
/* © 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0). */
