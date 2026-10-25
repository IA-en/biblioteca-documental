/* Navegación de documentos públicos. No utiliza almacenamiento ni servicios externos. */
(() => {
  'use strict';
  const rutas = new Set(["/","/consulta","/desarrolladores/","/desarrolladores/parte-i-escritura/01-primer-programa","/desarrolladores/parte-i-escritura/02-declaraciones-y-estados","/desarrolladores/parte-ii-relaciones/03-compuertas","/desarrolladores/parte-ii-relaciones/04-resolucion-u","/desarrolladores/parte-ii-relaciones/05-composicion","/desarrolladores/parte-ii-relaciones/06-sucesos-y-consultas","/desarrolladores/parte-iii-ejercicios/07-ejercicios-y-diagnosticos","/desarrolladores/parte-iii-ejercicios/08-programas-completos","/desarrolladores/parte-iii-ejercicios/09-programacion-asistida","/desarrolladores/README","/desarrolladores/toc","/documentacion/reglas-usos-descripciones-documentales/","/documentacion/reglas-usos-descripciones-documentales/entrega","/documentacion/reglas-usos-descripciones-documentales/finalidad","/documentacion/reglas-usos-descripciones-documentales/formatos","/documentacion/reglas-usos-descripciones-documentales/prioridades","/documentacion/reglas-usos-descripciones-documentales/revision","/documentacion/reglas-usos-descripciones-documentales/toc","/documentacion/reglas-usos-descripciones-documentales/verificacion","/dominios/ciberseguridad/biblioteca/conocimiento-modelos-ia/","/dominios/ciberseguridad/biblioteca/conocimiento-modelos-ia/01-evidencia-y-limites","/dominios/ciberseguridad/biblioteca/conocimiento-modelos-ia/02-incibe-ia-frontera","/dominios/ciberseguridad/biblioteca/conocimiento-modelos-ia/03-nis2-texto-original","/dominios/ciberseguridad/biblioteca/conocimiento-modelos-ia/04-autoria-derechos-y-fuentes","/dominios/ciberseguridad/biblioteca/conocimiento-modelos-ia/aviso","/dominios/ciberseguridad/biblioteca/conocimiento-modelos-ia/toc","/dominios/lenguaje-de-computacion/manual/","/dominios/lenguaje-de-computacion/manual/agradecimientos","/dominios/lenguaje-de-computacion/manual/arbitro-director","/dominios/lenguaje-de-computacion/manual/arquitectura-ejecucion","/dominios/lenguaje-de-computacion/manual/conformidad-diagnosticos","/dominios/lenguaje-de-computacion/manual/construcciones-y-componentes","/dominios/lenguaje-de-computacion/manual/constructor","/dominios/lenguaje-de-computacion/manual/desarrollo-validacion-nucleo","/dominios/lenguaje-de-computacion/manual/ejemplos-svp","/dominios/lenguaje-de-computacion/manual/explorador-tensorial-sv","/dominios/lenguaje-de-computacion/manual/hardware-aceleracion-tensorial","/dominios/lenguaje-de-computacion/manual/herramientas-desarrollo-comprobacion","/dominios/lenguaje-de-computacion/manual/integracion-gestor-sv","/dominios/lenguaje-de-computacion/manual/observabilidad","/dominios/lenguaje-de-computacion/manual/parametros-rutas","/dominios/lenguaje-de-computacion/manual/playground-sv","/dominios/lenguaje-de-computacion/manual/presentacion","/dominios/lenguaje-de-computacion/manual/programacion-dsl","/dominios/lenguaje-de-computacion/manual/referencia-terminologia","/dominios/lenguaje-de-computacion/manual/selector-arbitro-director","/dominios/lenguaje-de-computacion/manual/toc","/dominios/lenguaje-de-computacion/manual/tramo-10","/dominios/universos/","/dominios/universos/ciberseguridad","/dominios/universos/conceptos","/dominios/universos/fuentes","/dominios/universos/inmunologia","/dominios/universos/metodologia","/dominios/universos/parametros-rutas","/dominios/universos/presentacion","/dominios/universos/toc","/enciclopedia/","/enciclopedia/fisica-quimica-matematica","/enciclopedia/ia","/enciclopedia/lenguaje","/enciclopedia/presentacion","/enciclopedia/recorridos","/enciclopedia/toc","/evaluacion/validacion-autorizacion-modelos/","/evaluacion/validacion-autorizacion-modelos/autoridad","/evaluacion/validacion-autorizacion-modelos/comparacion","/evaluacion/validacion-autorizacion-modelos/correccion","/evaluacion/validacion-autorizacion-modelos/documentos","/evaluacion/validacion-autorizacion-modelos/edicion","/evaluacion/validacion-autorizacion-modelos/finalidad","/evaluacion/validacion-autorizacion-modelos/toc","/evaluacion/validacion-autorizacion-modelos/transporte","/indice","/licencias","/normativa/trazabilidad-y-seguimiento-ia/","/normativa/trazabilidad-y-seguimiento-ia/ciberseguridad","/normativa/trazabilidad-y-seguimiento-ia/derechos","/normativa/trazabilidad-y-seguimiento-ia/evaluacion","/normativa/trazabilidad-y-seguimiento-ia/garantias","/normativa/trazabilidad-y-seguimiento-ia/marco-normativo","/normativa/trazabilidad-y-seguimiento-ia/presentacion","/normativa/trazabilidad-y-seguimiento-ia/referencias","/normativa/trazabilidad-y-seguimiento-ia/toc","/normativa/trazabilidad-y-seguimiento-ia/trazabilidad","/normativa/trazabilidad-y-seguimiento-ia/uso-sanitario","/organizacion","/toc"]);
  const normalizar = p => p.replace(/\/index(?:\.html)?$/, '/').replace(/\.html$/, '');
  const actual = new URL(location.href);
  const validar = v => v && typeof v.p === 'string' && rutas.has(normalizar(v.p)) &&
    v.p.startsWith('/') && !v.p.startsWith('//') && !/[\\\u0000-\u001f]/.test(v.p) &&
    typeof v.h === 'string' && v.h.length <= 180 && !/[\u0000-\u001f]/.test(v.h) &&
    typeof v.t === 'string' && v.t.length <= 140;
  let pasos = [];
  try {
    const texto = actual.searchParams.get('lectura');
    const recibidos = texto && texto.length < 2400 ? JSON.parse(texto) : [];
    if (Array.isArray(recibidos) && recibidos.length <= 6 && recibidos.every(validar)) pasos = recibidos;
  } catch (_) { /* Un contexto inválido no altera los destinos disponibles. */ }
  const main = document.querySelector('main');
  if (!main || !rutas.has(normalizar(actual.pathname))) return;
  const barra = document.createElement('nav');
  barra.className = 'sv-lectura';
  barra.setAttribute('aria-label', 'Orientación y regreso de lectura');
  function enlace(texto, href) {
    const a = document.createElement('a'); a.textContent = texto; a.href = href; return a;
  }
  function conIdioma(u) {
    const idioma = actual.searchParams.get('itvia_lang');
    if (idioma && /^[a-z-]{2,12}$/i.test(idioma)) u.searchParams.set('itvia_lang', idioma);
    return u;
  }
  function destino(paso, anteriores) {
    const u = conIdioma(new URL(paso.p, actual.origin)); u.hash = paso.h;
    if (anteriores.length) u.searchParams.set('lectura', JSON.stringify(anteriores));
    return u.href;
  }
  if (pasos.length) {
    const volver = enlace('← Volver a «' + pasos.at(-1).t + '»', destino(pasos.at(-1), pasos.slice(0,-1)));
    volver.className = 'sv-regreso'; barra.append(volver);
  }
  const opciones = document.createElement('div'); opciones.className = 'sv-lectura-opciones';
  const contextoGeneral = [...pasos, {p:actual.pathname,h:actual.hash,
    t:(main.querySelector('h1')?.textContent || document.title).trim().slice(0,140)}];
  while(contextoGeneral.length>6 || JSON.stringify(contextoGeneral).length>2100) contextoGeneral.shift();
  for (const [nombre, ruta] of [['Biblioteca', '/'], ['Enciclopedia', '/enciclopedia/'], ['Manual para desarrolladores', '/desarrolladores/'], ['Fuentes y versiones','/consulta.html'], ['Licencias','/licencias.html']]) {
    const u=conIdioma(new URL(ruta, actual.origin));
    if(normalizar(u.pathname)!==normalizar(actual.pathname)) u.searchParams.set('lectura',JSON.stringify(contextoGeneral));
    opciones.append(enlace(nombre, u.href));
  }
  barra.append(opciones);
  const ayuda = document.createElement('small');
  ayuda.textContent = 'Las fuentes externas se abren en otra pestaña; esta lectura permanece disponible.';
  barra.append(ayuda);
  const antigua = main.querySelector('.sv-library-nav');
  if (antigua) {
    const edicion=antigua.querySelector('small');
    if(edicion){const nota=document.createElement('small');nota.textContent=edicion.textContent;barra.append(nota);}
    antigua.replaceWith(barra);
  } else main.prepend(barra);
  function origen(a) {
    const grupo = a.closest('details');
    let h = grupo?.querySelector('summary [id]');
    if (!h) {
      const encabezados = [...main.querySelectorAll('h1[id],h2[id],h3[id]')];
      h = encabezados.filter(e => e.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_FOLLOWING).at(-1);
    }
    return {p:actual.pathname,h:h ? '#' + h.id : actual.hash,
      t:(h?.textContent || main.querySelector('h1')?.textContent || document.title).trim().replace(/\s+/g,' ').slice(0,140)};
  }
  function preparar(a) {
    if (!a?.href || a.closest('.sv-language-tools,.sv-lectura') || a.classList.contains('header') || a.hasAttribute('download')) return;
    let u; try { u = new URL(a.href,actual); } catch (_) { return; }
    if (!['https:','http:'].includes(u.protocol)) return;
    if (u.origin !== actual.origin) {
      a.target = '_blank'; a.rel = 'noopener noreferrer';
      if (!a.querySelector('.sv-enlace-externo')) {
        const marca=document.createElement('span'); marca.className='sv-enlace-externo';
        marca.textContent=' ↗'; marca.setAttribute('aria-hidden','true'); a.append(marca);
        a.title = (a.title ? a.title + ' · ' : '') + 'Se abre en otra pestaña';
      }
      return;
    }
    if (!rutas.has(normalizar(u.pathname))) return;
    const paso = origen(a);
    if (normalizar(u.pathname) === normalizar(actual.pathname) && (!u.hash || u.hash === paso.h)) return;
    const siguientes=[...pasos];
    if (!siguientes.length || siguientes.at(-1).p !== paso.p || siguientes.at(-1).h !== paso.h) siguientes.push(paso);
    while(siguientes.length>6 || JSON.stringify(siguientes).length>2100) siguientes.shift();
    if (!a.closest('.sv-library-nav') && !a.closest('#mdbook-sidebar') && !a.closest('.nav-wrapper,.nav-wide-wrapper')) {
      u.searchParams.set('lectura', JSON.stringify(siguientes));
    } else if (pasos.length) u.searchParams.set('lectura',JSON.stringify(pasos));
    a.href=conIdioma(u).href;
  }
  document.querySelectorAll('a[href]').forEach(preparar);
  document.addEventListener('click', e => preparar(e.target.closest?.('a[href]')), true);
  document.addEventListener('auxclick', e => preparar(e.target.closest?.('a[href]')), true);
  function mostrar() {
    let id; try { id=decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    const objeto=id && document.getElementById(id);
    if (!objeto) return;
    let padre=objeto.closest('details');
    while(padre){padre.open=true;padre=padre.parentElement?.closest('details');}
    requestAnimationFrame(()=>objeto.scrollIntoView({block:'start'}));
  }
  mostrar(); window.addEventListener('hashchange',mostrar);
})();

/* © 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0). */
