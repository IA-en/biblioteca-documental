/* Adaptación de presentación del circuito itvia-traductor-cosmologia (d56069d6).
 * Selector compacto en la biblioteca; conserva Google para la traducción pública.
 * No ejerce funciones del Árbitro/MCP.
 * No contiene credenciales ni realiza consultas a modelos.
 */
export const IDIOMAS = new Set('en fr de it pt ca gl eu nl pl ro cs el uk ru tr ar he fa hi bn zh-CN zh-TW ja ko id vi th sv da no fi'.split(' '));
const NOMBRES = {"en":"English · Inglés","fr":"Français · Francés","de":"Deutsch · Alemán","it":"Italiano","pt":"Português · Portugués","ca":"Català · Catalán","gl":"Galego · Gallego","eu":"Euskara · Euskera","nl":"Nederlands · Neerlandés","pl":"Polski · Polaco","ro":"Română · Rumano","cs":"Čeština · Checo","el":"Ελληνικά · Griego","uk":"Українська · Ucraniano","ru":"Русский · Ruso","tr":"Türkçe · Turco","ar":"العربية · Árabe","he":"עברית · Hebreo","fa":"فارسی · Persa","hi":"हिन्दी · Hindi","bn":"বাংলা · Bengalí","zh-CN":"简体中文 · Chino simplificado","zh-TW":"繁體中文 · Chino tradicional","ja":"日本語 · Japonés","ko":"한국어 · Coreano","id":"Bahasa Indonesia · Indonesio","vi":"Tiếng Việt · Vietnamita","th":"ไทย · Tailandés","sv":"Svenska · Sueco","da":"Dansk · Danés","no":"Norsk · Noruego","fi":"Suomi · Finés"};
const MARCA = '<!-- SV_SELECTOR_EDITORIAL -->';
const escapar = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function presentar(html, url) {
  if (url.hostname !== 'documentos-sv.itvia.online' || url.protocol !== 'https:') return html;
  if (!html.includes(MARCA) || html.indexOf(MARCA) !== html.lastIndexOf(MARCA)) return html;
  const original = new URL(url); original.search = ''; original.hash = '';
  const pedido = url.searchParams.get('itvia_lang');
  const idioma = IDIOMAS.has(pedido) ? pedido : '';
  const opciones = '<option value=""' + (!idioma ? ' selected' : '') + '>Español · Original</option>' + [...IDIOMAS].map(c =>
    '<option value="' + c + '"' + (c === idioma ? ' selected' : '') + '>' + escapar(NOMBRES[c]) + '</option>').join('');
  const extras = [...url.searchParams].filter(([k]) => k !== 'itvia_lang').map(([k,v]) =>
    '<input type="hidden" name="' + escapar(k) + '" value="' + escapar(v) + '">').join('');
  const selector = '<form class="sv-language-form" method="get" action="' + escapar(original.pathname) + '">' + extras +
    '<label for="sv-reading-language">Idioma de lectura / Reading language</label><select id="sv-reading-language" name="itvia_lang">' + opciones +
    '</select><button type="submit">Aplicar / Apply</button></form>';
  return html.replace(MARCA, selector)
    .replace('class="sv-language-tools notranslate"', 'data-worker="biblioteca-v5" data-idioma="' + idioma + '" class="sv-language-tools notranslate"')
    .replace(/(<script\b[^>]*\bsrc=")[^"]*presentacion(?:-[a-f0-9]+)?\.js(?:\?[^"]*)?("[^>]*>)/g, '$1/recursos/idiomas-20261014-r4.js$2')
    .replace('</head>', '<link rel="stylesheet" href="/recursos/idiomas-20261014-r2.css"></head>');
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const capitulo = url.pathname.match(/^\/evaluacion\/validacion-autorizacion-modelos\/en\/(finalidad|documentos|edicion|correccion|transporte|autoridad|comparacion)(?:\.html)?\/?$/);
    if ((request.method === 'GET' || request.method === 'HEAD') && capitulo) {
      const destino = new URL(url);
      destino.pathname = '/evaluacion/validacion-autorizacion-modelos/' + capitulo[1];
      return Response.redirect(destino.href, 301);
    }
    const respuesta = await env.ASSETS.fetch(request);
    const tipo = respuesta.headers.get('content-type') || '';
    if (request.method !== 'GET' || respuesta.status !== 200 || !tipo.toLowerCase().includes('text/html') || url.pathname.startsWith('/libros/')) return respuesta;
    try {
      const fuente = await respuesta.clone().text();
      const contenido = presentar(fuente, url);
      if (contenido === fuente) return respuesta;
      const cabeceras = new Headers(respuesta.headers);
      for (const h of ['content-length','etag','content-md5','content-encoding']) cabeceras.delete(h);
      cabeceras.set('content-language','es');
      cabeceras.set('cache-control','private, no-store');
      if (IDIOMAS.has(url.searchParams.get('itvia_lang'))) cabeceras.set('x-robots-tag','noindex, follow');
      return new Response(contenido, {status:200, headers:cabeceras});
    } catch (_) { return respuesta; }
  }
};

/* © 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0). */
