/* Adaptación de presentación del circuito itvia-traductor-cosmologia (d56069d6).
 * El selector pertenece a editorialia.com. No ejerce funciones del Árbitro/MCP.
 * No contiene credenciales ni realiza consultas a modelos.
 */
export const IDIOMAS = new Set('en fr de it pt ca gl eu nl pl ro cs el uk ru tr ar he fa hi bn zh-CN zh-TW ja ko id vi th sv da no fi'.split(' '));
const MARCA = '<!-- SV_SELECTOR_EDITORIAL -->';
const escapar = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function presentar(html, url) {
  if (url.hostname !== 'documentos-sv.itvia.online' || url.protocol !== 'https:') return html;
  if (!html.includes(MARCA) || html.indexOf(MARCA) !== html.lastIndexOf(MARCA)) return html;
  const original = new URL(url); original.search = ''; original.hash = '';
  const selector = new URL('https://editorialia.com/selector-de-idiomas-itvia/');
  selector.searchParams.set('url', original.href);
  const pedido = url.searchParams.get('itvia_lang');
  const idioma = IDIOMAS.has(pedido) ? pedido : '';
  const iframe = '<iframe title="Idioma de lectura / Reading language" src="' + escapar(selector.href) + '" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>';
  return html.replace(MARCA, iframe)
    .replace('class="sv-language-tools notranslate"', 'data-worker="biblioteca-v1" data-idioma="' + idioma + '" class="sv-language-tools notranslate"');
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
