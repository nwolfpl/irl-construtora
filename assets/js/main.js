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
    marcarSecao(y);
  }
  window.addEventListener('scroll', aoRolar, { passive: true });

  /* ---- menu do celular ---- */
  var hamb = $('#nav-hamb');
  function fecharMenu() {
    nav.classList.remove('is-menu');
    hamb.setAttribute('aria-expanded', 'false');
    hamb.setAttribute('aria-label', 'Abrir menu de seções');
  }
  if (hamb) {
    hamb.addEventListener('click', function () {
      var aberto = nav.classList.toggle('is-menu');
      hamb.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      hamb.setAttribute('aria-label', aberto ? 'Fechar menu de seções' : 'Abrir menu de seções');
    });
    $$('#nav-links a').forEach(function (a) { a.addEventListener('click', fecharMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fecharMenu(); });
  }

  /* ---- seção atual em destaque na nav ---- */
  var itens = $$('#nav-links a').map(function (a) {
    return { a: a, alvo: $(a.getAttribute('href')) };
  }).filter(function (i) { return i.alvo; });
  function marcarSecao(y) {
    var linha = y + 140, atual = null;
    itens.forEach(function (i) { if (i.alvo.offsetTop <= linha) atual = i; });
    itens.forEach(function (i) { i.a.classList.toggle('is-atual', i === atual); });
  }

  /* ---- revelação em scroll ---- */
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

  /* ---- animação do logotipo no hero ----
     O vídeo tem quase 3 MB: só baixa e toca sozinho em tela grande, com boa
     conexão e sem "reduzir movimento". Nos outros casos fica o quadro final
     (poster) e um botão para quem quiser ver.                                */
  var video = $('#logo-video'), botao = $('#logo-replay'), botaoTxt = $('#logo-replay-txt');
  if (video && botao) {
    var conexao = navigator.connection || {};
    var pesada = conexao.saveData === true || /(^|-)2g$/.test(conexao.effectiveType || '');
    var reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function tocar() {
      if (!video.getAttribute('src')) { video.setAttribute('src', video.dataset.src); }
      botao.hidden = true;
      var p = video.play();
      if (p && p.catch) {
        p.catch(function () {          /* autoplay barrado: volta para o poster */
          video.removeAttribute('src');
          video.load();
          botao.hidden = false;
        });
      }
    }
    botao.addEventListener('click', tocar);
    video.addEventListener('ended', function () {
      botaoTxt.textContent = 'Repetir a animação';
      botao.hidden = false;
    });

    function telaGrande() {
      return (window.innerWidth || document.documentElement.clientWidth || 0) >= 760;
    }
    if (reduzir || pesada) {
      botao.hidden = false;
    } else if ('IntersectionObserver' in window) {
      var obsV = new IntersectionObserver(function (es) {
        if (!es[0].isIntersecting) return;
        obsV.disconnect();
        if (telaGrande()) { tocar(); } else { botao.hidden = false; }
      }, { threshold: 0.4 });
      obsV.observe(video);
    } else if (telaGrande()) {
      tocar();
    } else {
      botao.hidden = false;
    }
  }

  aoRolar();
})();
