/* IRL Construtora Sustentável — Montes Claros/MG */
(function () {
  'use strict';
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  var nav = $('#nav'), barra = $('#barra-movel');
  function aoRolar() {
    var y = window.scrollY;
    nav.classList.toggle('is-fixa', y > 40);
    barra.classList.toggle('is-visivel', y > Math.min(window.innerHeight * 0.7, 620));
  }
  window.addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();

  var alvos = $$('.rev');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-vis'); obs.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    alvos.forEach(function (el) { obs.observe(el); });
  } else {
    alvos.forEach(function (el) { el.classList.add('is-vis'); });
  }
})();
