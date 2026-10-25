/* Ayudas de navegación documental. Sin almacenamiento ni comunicación externa. */
(() => {
    'use strict';
    const consulta = document.getElementById('enc-busqueda');
    if (consulta) consulta.value = new URLSearchParams(location.search).get('search') || '';
    function mostrarDestino() {
        let id;
        try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
        if (!id) return;
        const destino = document.getElementById(id);
        if (!destino || !destino.closest('main')) return;
        let grupo = destino.closest('details');
        if (!grupo) return;
        while (grupo) {
            grupo.open = true;
            grupo = grupo.parentElement?.closest('details');
        }
        requestAnimationFrame(() => destino.scrollIntoView({block: 'start'}));
    }
    window.addEventListener('hashchange', mostrarDestino);
    mostrarDestino();
})();
/* © 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0). */
