/* Marie Claire Diouf · portfolio : rendu du contenu et animations */
(() => {
  const D = window.MC, L = D.liens;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const G = window.gsap, ST = window.ScrollTrigger;
  const anim = !!(G && ST) && !reduce;
  const page = document.body.dataset.page;
  const pad = n => String(n).padStart(2, '0');
  const initials = n => n.split(/[\s-]+/).filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const heart = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-8-4.6-8-10.6A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 8 2.9c0 6-8 10.6-8 10.6Z"/></svg>';
  if (anim) { document.documentElement.classList.add('anim'); G.registerPlugin(ST); }

  /* ---------- Petite notification ---------- */
  const toast = msg => {
    let t = $('.toast');
    if (!t) { t = document.createElement('p'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('on');
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('on'), 3800);
  };

  /* ---------- Liens à compléter ---------- */
  const wireLinks = () => $$('[data-lien]').forEach(a => {
    const url = L[a.dataset.lien];
    if (url && url !== '#') { a.href = url; if (!url.startsWith('mailto:')) { a.target = '_blank'; a.rel = 'noopener'; } }
    else a.onclick = e => { e.preventDefault(); toast(`Bientôt disponible. En attendant : ${L.email}`); };
  });

  /* ---------- Menu : onglets de profil, façon réseau social ---------- */
  const ico = d => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
  const T = {
    apropos: ['À propos', ico('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>')],
    formation: ['Parcours', ico('<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>')],
    experiences: ['Expériences', ico('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>')],
    realisations: ['Projets', ico('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>')],
    competences: ['Compétences', ico('<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"/>')],
    contact: ['Contact', ico('<path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5Z"/>')]
  };
  const tab = (id, cls = '') => `<a href="index.html#${id}" data-tab="${id}"${cls ? ` class="${cls}"` : ''}>${T[id][1]}<span>${T[id][0]}</span></a>`;
  const SECTIONS = ['formation', 'experiences', 'realisations', 'competences', 'contact'];
  const ptab = $('#tabs');
  ptab.innerHTML = `<a class="pt-logo" href="index.html" aria-label="Marie Claire Diouf, accueil">MC<i class="dot" aria-hidden="true"></i></a>
    <div class="pt-list">${tab('apropos', 'pt-desk')}${SECTIONS.map(id => tab(id)).join('')}<a class="pt-mob" data-lien="cv" href="#">${ico('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>')}<span>CV</span></a></div>
    <a class="pt-alt" href="profil.html">Version profil</a><a class="pt-cv" data-lien="cv" href="#">Mon CV <span aria-hidden="true">↓</span></a>`;
  if ($('#intro-tabs')) $('#intro-tabs').innerHTML = SECTIONS.map(id => tab(id)).join('');
  const setTab = id => $$('[data-tab]').forEach(a => a.toggleAttribute('aria-current', a.dataset.tab === id));
  if (page === 'univers') { setTab('realisations'); ptab.classList.add('on'); }
  else {
    // La barre apparaît en haut une fois le profil d'accueil dépassé
    const intro = $('.intro');
    const showBar = () => ptab.classList.toggle('on', scrollY > intro.offsetHeight - innerHeight * .6);
    addEventListener('scroll', showBar, { passive: true }); showBar();
    const vis = new Map(), ids = ['apropos', ...SECTIONS, 'avis'];
    const io = new IntersectionObserver(en => {
      en.forEach(e => vis.set(e.target.id, e.isIntersecting));
      const cur = ids.filter(id => vis.get(id)).pop();
      setTab(cur === 'avis' ? 'competences' : cur || '');
    }, { rootMargin: '-45% 0px -50% 0px' });
    ids.forEach(id => { const s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- Défilement fluide, progression, curseur ---------- */
  if (anim && window.Lenis) {
    const lenis = new Lenis({ lerp: .09 });
    window.__lenis = lenis;
    lenis.on('scroll', ST.update);
    G.ticker.add(t => lenis.raf(t * 1000));
    G.ticker.lagSmoothing(0);
  }
  const bar = $('.progress i');
  const onScroll = () => { const h = document.documentElement.scrollHeight - innerHeight; bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`; };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href*="#"]'); if (!a) return;
    const url = new URL(a.href, location.href);
    if (url.pathname !== location.pathname || !url.hash) return;
    const target = document.getElementById(url.hash.slice(1)); if (!target) return;
    e.preventDefault();
    if (window.__lenis) window.__lenis.scrollTo(target, { offset: -20, duration: 1.4 });
    else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    history.replaceState(null, '', url.hash);
  });
  const cur = $('.cursor');
  if (cur && matchMedia('(pointer: fine)').matches && !reduce) {
    addEventListener('pointermove', e => { cur.classList.add('on'); cur.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; });
    document.addEventListener('pointerover', e => cur.classList.toggle('big', !!e.target.closest('a, button, .ucard, textarea')));
    document.addEventListener('pointerleave', () => cur.classList.remove('on'));
  }

  const reveal = (sel, from = { y: 60 }) => {
    if (!anim) return;
    G.set(sel, { opacity: 0, ...from });
    ST.batch(sel, { start: 'top 88%', once: true, onEnter: b => G.to(b, { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, duration: 1.1, ease: 'expo.out', stagger: .1 }) });
  };
  const splitWords = el => { el.innerHTML = el.textContent.split(/(\s+)/).map(w => w.trim() ? `<span class="w">${esc(w)}</span>` : w).join(''); return $$('.w', el); };

  /* =========================================================
     ACCUEIL
     ========================================================= */
  if (page === 'accueil') {
    // Manifeste
    $('#manifeste').innerHTML = D.manifeste.map(m =>
      `<li><span class="verbe">${esc(m.verbe)}</span><span class="notif-card"><span class="nc-ico" aria-hidden="true">MC</span><span><b>${esc(m.notif)}</b>${esc(m.detail)}<small> · à l'instant</small></span></span></li>`).join('');

    // À propos
    const words = splitWords(Object.assign($('#apropos-texte'), { textContent: D.apropos }));

    // Chiffres
    $('#chiffres').innerHTML = D.chiffres.map(c => {
      const f = (c.prefixe || '') + c.valeur.toLocaleString('fr-FR', { minimumFractionDigits: c.decimales || 0 }) + (c.suffixe || '');
      return `<div><dt>${esc(c.label)}<small>${esc(c.source)}</small></dt><dd data-v="${c.valeur}" data-d="${c.decimales || 0}" data-p="${esc(c.prefixe || '')}" data-s="${esc(c.suffixe || '')}">${esc(f)}</dd></div>`;
    }).join('');

    // Profil d'entrée : bouton Suivre + cœurs qui s'envolent
    const hearts = $('#hearts');
    const burst = (n = 1) => {
      if (reduce) return;
      for (let k = 0; k < n; k++) {
        const h = document.createElement('i'); h.textContent = '♥';
        h.style.left = (46 + Math.random() * 8) + '%';
        h.style.setProperty('--dx', (Math.random() * 160 - 80) + 'px');
        h.style.fontSize = (18 + Math.random() * 22) + 'px';
        h.style.animationDelay = (k * .12) + 's';
        hearts.appendChild(h); setTimeout(() => h.remove(), 3200 + k * 120);
      }
    };
    const heartsLoop = setInterval(() => { if (scrollY < innerHeight * .6) burst(1); }, 1400);
    const follow = $('#follow');
    follow.addEventListener('click', () => {
      const on = follow.getAttribute('aria-pressed') !== 'true';
      follow.setAttribute('aria-pressed', on);
      $('span', follow).textContent = on ? 'Abonné·e ✓' : 'Suivre';
      if (on) { burst(10); toast('Merci de suivre le feed de MC ! Pour me suivre pour de vrai : LinkedIn.'); }
    });

    // Expériences professionnelles
    $('#fil').innerHTML = D.experiences.map((p, k) => `
      <article class="xp${p.image ? '' : ' xp-text'}">
        <header class="xp-head"><span class="xp-av" aria-hidden="true">${esc(p.initiales)}</span><span class="xp-who"><b>${esc(p.structure)}</b><small>${esc(p.lieu)} · ${esc(p.date)}</small></span><span class="xp-type">${esc(p.type)}</span></header>
        ${p.image ? `<div class="xp-img${p.haut ? ' top' : ''}"><img src="${p.image}" alt="" loading="lazy"></div>` : `<p class="xp-quote">« ${esc(p.resume)} »</p>`}
        <div class="xp-body">
          <h3 class="xp-poste">${esc(p.poste)}</h3>
          ${p.image ? `<p class="xp-resume">${esc(p.resume)}</p>` : ''}
          <ul class="xp-chiffres">${p.chiffres.map(c => `<li>${esc(c)}</li>`).join('')}</ul>
          ${p.missions ? `<details class="xp-detail"><summary><span>Voir le détail</span><i aria-hidden="true"></i></summary><div class="xp-detail-in">
            ${p.contexte ? `<h4>Le contexte</h4><p>${esc(p.contexte)}</p>` : ''}
            <h4>Mes missions</h4><ul class="xp-missions">${p.missions.map(m => `<li>${esc(m)}</li>`).join('')}</ul>
            ${p.apport ? `<h4>Ce que ça m'a apporté</h4><p class="xp-apport">${esc(p.apport)}</p>` : ''}
            ${p.competences ? `<h4>Compétences mobilisées</h4><ul class="xp-skills">${p.competences.map(c => `<li>${esc(c)}</li>`).join('')}</ul>` : ''}
          </div></details>` : ''}
        </div>
        <footer class="xp-actions">
          <button class="xp-like" aria-pressed="false" aria-label="J'aime cette expérience">${heart}<span>J'aime</span></button>
          ${p.avis ? `<a href="#avis" class="xp-com"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5Z"/></svg><span>1 avis</span></a>` : ''}
          <a class="xp-go" href="realisation.html?u=${p.univers}">Voir les réalisations <span aria-hidden="true">→</span></a>
        </footer>
      </article>`).join('');
    $$('.xp-like').forEach(x => x.addEventListener('click', () => {
      const on = x.getAttribute('aria-pressed') !== 'true'; x.setAttribute('aria-pressed', on);
      if (on && anim) G.fromTo($('svg', x), { scale: .4 }, { scale: 1, duration: .5, ease: 'back.out(3)' });
    }));
    $$('.xp-detail').forEach(d => d.addEventListener('toggle', () => {
      $('summary span', d).textContent = d.open ? 'Masquer le détail' : 'Voir le détail';
      if (d.open && anim) G.from($$('.xp-detail-in > *', d), { y: 14, opacity: 0, duration: .5, stagger: .04, ease: 'power2.out' });
      ST?.refresh();
    }));

    // Formation
    $('#diplomes').innerHTML = D.formations.map(f =>
      `<li class="diplome"><p class="diplome-date">${esc(f.date)}</p><p class="diplome-niveau">${esc(f.diplome)}</p><h3 class="diplome-titre">${esc(f.intitule)}</h3><p class="diplome-ecole">${esc(f.ecole)}</p><p class="diplome-detail">${esc(f.detail)}</p></li>`).join('');

    // Compétences
    $('#skills').innerHTML = D.competences.map((g, k) =>
      `<article class="skill-card"><p class="skill-num">${pad(k + 1)}</p><h4>${esc(g.titre)}</h4><ul>${g.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul></article>`).join('');

    // Logiciels
    $('#logiciels').innerHTML = D.outils.map(g =>
      `<div class="soft-group"><p class="soft-label">${esc(g.groupe)}</p><ul class="soft-grid">${g.liste.map(o =>
        `<li class="soft">${o.adobe ? `<span class="soft-ico adobe adobe-${o.adobe.toLowerCase()}" aria-hidden="true">${esc(o.adobe)}</span>` : `<img class="soft-ico" src="${o.logo}" alt="" loading="lazy">`}<span>${esc(o.nom)}</span></li>`).join('')}</ul></div>`).join('');

    // Langues
    $('#langues').innerHTML = D.langues.map(l =>
      `<li class="lang"><p class="lang-nom">${esc(l.nom)}</p><p class="lang-niveau">${esc(l.niveau)}</p><span class="lang-jauge" role="img" aria-label="Niveau ${l.score} sur 5">${[1, 2, 3, 4, 5].map(n => `<i class="${n <= l.score ? 'on' : ''}"></i>`).join('')}</span></li>`).join('');

    // Réalisations
    $('#hscroll').insertAdjacentHTML('beforeend', D.univers.map((u, i) =>
      `<a class="ucard" href="realisation.html?u=${u.id}"><img src="${u.couverture}" alt="" loading="lazy"><span class="ucard-top"><span class="ucard-num"><span>${pad(i + 1)}</span></span><span class="ucard-count">Quelques exemples</span></span><span class="ucard-body"><span class="ucard-hand">${esc(u.accroche)}</span><span class="ucard-title">${esc(u.titre)}</span><span class="ucard-go">Ouvrir <i aria-hidden="true">→</i></span></span></a>`).join('') + '<div class="hpanel-end"></div>');

    // Avis
    const avis = D.univers.flatMap(u => u.projets.filter(p => p.avis).map(p => ({ ...p.avis, projet: p.titre })));
    $('#avis-grid').innerHTML = avis.map(v =>
      `<figure class="comment"><figcaption class="comment-head"><span class="comment-av" aria-hidden="true">${initials(v.auteur)}</span><span><b>${esc(v.auteur)}</b><small>a commenté « ${esc(v.projet)} » · ${esc(v.poste)}</small></span></figcaption><blockquote>${esc(v.texte)}</blockquote><div class="comment-foot"><button class="like-btn" aria-pressed="false" aria-label="J'aime ce commentaire">${heart}J'aime</button><span>Répondre</span></div></figure>`).join('');
    $$('.like-btn').forEach(x => x.addEventListener('click', () => x.setAttribute('aria-pressed', x.getAttribute('aria-pressed') !== 'true')));

    // Contact
    $('#contact-links').innerHTML = `
      <a class="btn btn-light" href="mailto:${esc(L.email)}">${esc(L.email)}</a>
      <a class="btn btn-ghost-light" href="tel:${esc(L.telephone.replace(/\s/g, ''))}">${esc(L.telephone)}</a>
      <a class="btn btn-ghost-light" data-lien="linkedin" href="#">LinkedIn ↗</a>
      <a class="btn btn-ghost-light" data-lien="cv" href="#">Mon CV ↓</a>
      <a class="btn btn-ghost-light" href="profil.html">Mon portfolio en version profil</a>`;
    const log = $('#dm-log');
    const wait = ms => new Promise(r => setTimeout(r, reduce ? 0 : ms));
    const say = (txt, who) => { const p = document.createElement('p'); p.className = 'bubble ' + who; p.textContent = txt; log.appendChild(p); if (anim) G.from(p, { y: 16, opacity: 0, scale: .95, duration: .5, ease: 'back.out(2)' }); };
    const typing = () => { const t = document.createElement('div'); t.className = 'typing'; t.innerHTML = '<i></i><i></i><i></i>'; t.setAttribute('aria-label', "MC est en train d'écrire"); log.appendChild(t); return t; };
    new IntersectionObserver(async (en, obs) => {
      if (!en[0].isIntersecting) return; obs.disconnect();
      for (const m of D.messages) { const t = typing(); await wait(1400); t.remove(); say(m, 'mc'); await wait(600); }
    }, { threshold: .4 }).observe($('.dm'));
    const form = $('#dm-form'), input = $('#dm-input');
    input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); } });
    form.addEventListener('submit', async e => {
      e.preventDefault(); const msg = input.value.trim(); if (!msg) return;
      say(msg, 'me'); input.value = '';
      const t = typing(); await wait(900); t.remove();
      say("Merci ! Votre messagerie s'ouvre pour m'envoyer ce message. À très vite.", 'mc');
      await wait(1000);
      location.href = `mailto:${L.email}?subject=${encodeURIComponent('Contact depuis ton portfolio')}&body=${encodeURIComponent(msg)}`;
    });

    // Compteurs
    const count = el => {
      const v = +el.dataset.v, d = +el.dataset.d, f = x => el.dataset.p + x.toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d }) + el.dataset.s;
      if (!anim) return; const o = { x: 0 };
      G.to(o, { x: v, duration: 2, ease: 'power3.out', onUpdate: () => { el.textContent = f(o.x); } });
    };
    $$('#chiffres dd').forEach(el => {
      el.setAttribute('aria-label', el.textContent);
      new IntersectionObserver((en, obs) => { if (en[0].isIntersecting) { count(el); obs.disconnect(); } }, { threshold: .6 }).observe(el);
    });

    if (anim) {
      // Intro : arrivée du nom, puis la pastille s'agrandit et ouvre le site
      $$('.intro-name .line').forEach(l => { l.innerHTML = `<span>${l.innerHTML}</span>`; });
      G.timeline()
        .from('.intro-avatar', { scale: .3, opacity: 0, duration: 1, ease: 'back.out(1.8)', delay: .1 })
        .from('.intro-kicker', { y: 20, opacity: 0, duration: .7 }, '-=.5')
        .from('.intro-name .line > span', { yPercent: 105, duration: 1.2, ease: 'expo.out', stagger: .12 }, '-=.5')
        .from('.verif', { scale: 0, rotate: -90, duration: .6, ease: 'back.out(3)' }, '-=.6')
        .from('.intro-handle, .intro-stats li, .intro-actions > *, .intro-scroll, .intro-tabs a',{ y: 20, opacity: 0, duration: .6, stagger: .07 }, '-=.6')
        .from('.float-notif', { scale: .6, opacity: 0, y: 30, duration: .7, ease: 'back.out(2)', stagger: .35 }, '-=.2');
      $$('.float-notif').forEach((n, k) => G.to(n, { y: k % 2 ? 12 : -12, duration: 2.6 + k * .4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 + k * .3 }));
      G.timeline({ scrollTrigger: { trigger: '.intro', start: 'top top', end: 'bottom bottom', scrub: .6 } })
        .to('.intro-profile', { scale: .86, opacity: 0, ease: 'power1.in' }, 0)
        .to('.f1, .f3', { x: -160, opacity: 0 }, 0).to('.f2, .f4', { x: 160, opacity: 0 }, 0)
        .to('.intro-scroll, .intro-tabs', { opacity: 0, duration: .3 }, 0)
        .to('.intro-reveal', { scale: () => Math.hypot(innerWidth, innerHeight) / 10, ease: 'power2.in', duration: .85 }, .15);

      // Manifeste : chaque verbe s'allume, sa notification apparaît
      const tl = G.timeline({ scrollTrigger: { trigger: '.manifeste', start: 'top top', end: 'bottom bottom', scrub: .8 } });
      G.set('.verbe', { opacity: .12 }); G.set('.notif-card', { opacity: 0, y: 24, scale: .9 });
      tl.from('.manifeste-photo', { scale: .7, rotate: 12, opacity: 0, duration: 1 }, 0);
      $$('.manifeste-list li').forEach((li, i) => {
        tl.to($('.verbe', li), { opacity: 1, duration: i ? 1 : .4 }, i ? i * 1.2 + .3 : 0)
          .to($('.notif-card', li), { opacity: 1, y: 0, scale: 1, duration: .7, ease: 'back.out(2)' }, i * 1.2 + .8);
      });
      tl.from('.manifeste-note', { opacity: 0, duration: .5 }, 3.4).to({}, { duration: .6 });

      // À propos : les mots s'allument au fil de la lecture
      G.set(words, { opacity: .16 });
      G.to(words, { opacity: 1, stagger: .05, ease: 'none', scrollTrigger: { trigger: '#apropos-texte', start: 'top 80%', end: 'bottom 50%', scrub: true } });
      G.from('.disc', { scale: .4, scrollTrigger: { trigger: '.apropos', start: 'top 85%', end: 'center center', scrub: 1 } });
      G.from('.story-ring.big', { rotate: -20, scale: .85, scrollTrigger: { trigger: '.apropos', start: 'top 85%', end: 'center center', scrub: 1 } });

      reveal('.titre, .eyebrow');
      reveal('.xp', { y: 80, rotate: 1.5 });
      reveal('.diplome', { y: 70, rotate: 2 });
      reveal('.skill-card', { y: 60 });
      reveal('.soft', { y: 24, scale: .9 });
      reveal('.lang', { y: 30 });
      $$('.lang-jauge').forEach(j => G.from($$('i.on', j), { scaleX: 0, transformOrigin: 'left', duration: .5, stagger: .08, ease: 'power2.out', scrollTrigger: { trigger: j, start: 'top 90%', once: true } }));
      reveal('.comment', { y: 80, rotate: 2 });
      reveal('.chiffres-grid > div', { y: 50 });
      reveal('.dm', { y: 80, rotate: -6 });

      // Réalisations : défilement horizontal épinglé (ordinateur)
      const mm = G.matchMedia();
      mm.add('(min-width: 961px)', () => {
        const track = $('#hscroll');
        const dist = () => track.scrollWidth - innerWidth;
        G.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: '.realisations', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true } });
      });
      G.from('.contact-title', { yPercent: 30, opacity: 0, scrollTrigger: { trigger: '.contact', start: 'top 80%', end: 'top 30%', scrub: 1 } });
      addEventListener('load', () => ST.refresh());
    }
  }

  /* =========================================================
     PAGE D'UN UNIVERS
     ========================================================= */
  if (page === 'univers') {
    const id = new URLSearchParams(location.search).get('u');
    const i = Math.max(0, D.univers.findIndex(u => u.id === id));
    const u = D.univers[i], next = D.univers[(i + 1) % D.univers.length];
    document.title = `${u.titre} · Marie Claire Diouf`;
    $('#u-num').textContent = `Réalisations · univers ${pad(i + 1)} / ${pad(D.univers.length)}`;
    $('#u-title').innerHTML = esc(u.titre).replace('&amp;', '<em>&amp;</em>');
    $('#u-intro').textContent = u.intro;
    $('#u-index').insertAdjacentHTML('beforebegin', '<p class="u-sel">Quelques exemples, parmi beaucoup d\'autres</p>');
    const carrousel = g => `
      <figure class="car">
        <figcaption class="car-head"><span class="car-av" aria-hidden="true">MC</span><b>${esc(g.titre)}</b><span class="car-count"></span></figcaption>
        <div class="car-track" tabindex="0" role="region" aria-label="Carrousel : ${esc(g.titre)}, utilisez les flèches">${g.images.map((src, j) => `<img src="${src}" alt="${esc(g.titre)}, visuel ${j + 1} sur ${g.images.length}" loading="lazy" draggable="false">`).join('')}</div>
        <div class="car-nav"><button class="car-prev" aria-label="Visuel précédent">←</button><span class="car-dots" aria-hidden="true">${g.images.map(() => '<i></i>').join('')}</span><button class="car-next" aria-label="Visuel suivant">→</button></div>
      </figure>`;
    $('#u-index').innerHTML = u.projets.map((p, k) => `<li><a href="#p${k + 1}"><span>${k + 1}</span>${esc(p.titre)}</a></li>`).join('');
    $('#u-projets').innerHTML = u.projets.map((p, k) => `
      <article class="projet" id="p${k + 1}" aria-labelledby="p${k + 1}-t">
        <div class="projet-txt">
          <p class="projet-num">${pad(k + 1)}</p>
          <p class="projet-ctx">${esc(p.contexte)}</p>
          <h2 id="p${k + 1}-t">${esc(p.titre)}</h2>
          <p class="projet-role">${esc(p.role)}</p>
          <p class="projet-texte">${esc(p.texte)}</p>
          <ul class="chips">${p.chiffres.map(c => `<li>${esc(c)}</li>`).join('')}</ul>
          ${p.avis ? `<figure class="comment"><figcaption class="comment-head"><span class="comment-av" aria-hidden="true">${initials(p.avis.auteur)}</span><span><b>${esc(p.avis.auteur)}</b><small>${esc(p.avis.poste)}</small></span></figcaption><blockquote>${esc(p.avis.texte)}</blockquote></figure>` : ''}
          ${p.docs ? `<div class="projet-docs">${p.docs.map(([t, f]) => `<a class="btn" href="${esc(f)}" target="_blank" rel="noopener">${esc(t)} <span aria-hidden="true">↗</span></a>`).join('')}</div>` : ''}
          ${p.liens ? `<p class="projet-liens-t">Voir en ligne</p><ul class="projet-liens">${p.liens.map(([t, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener">${esc(t)} <span aria-hidden="true">↗</span></a></li>`).join('')}</ul>` : ''}
          ${p.lien ? `<a class="projet-link" href="${esc(p.lien[1])}" target="_blank" rel="noopener">${esc(p.lien[0])} ↗</a>` : ''}
        </div>
        <div class="projet-media">
          ${p.sujets ? `<div class="unes">${p.sujets.map(s => { const [t, url] = Array.isArray(s) ? s : [s];
            return url ? `<a class="une" href="${esc(url)}" target="_blank" rel="noopener"><p class="une-kicker">${esc(p.une || p.titre)} · lire <span aria-hidden="true">↗</span></p><h3>${esc(t)}</h3></a>`
                       : `<article class="une"><p class="une-kicker">${esc(p.une || p.titre)}</p><h3>${esc(t)}</h3></article>`; }).join('')}</div>` : ''}
          ${p.audios ? `<div class="sons">${p.audios.map(a => `<figure class="son"><span class="son-ico" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span><figcaption><small>Reportage radio · ${esc(a.duree)}</small><b>${esc(a.titre)}</b></figcaption><audio src="${esc(a.src)}" controls preload="none"></audio></figure>`).join('')}</div>` : ''}
          ${p.galeries ? `<div class="galeries${p.galeries.length > 1 ? ' multi' : ''}">${p.galeries.map(carrousel).join('')}</div>` : ''}
          ${p.videos ? `<div class="reels">${p.videos.map(v => `<figure class="reel${v.horizontal ? ' wide' : ''}"><video src="${esc(v.src)}" poster="${esc(v.poster)}" controls playsinline preload="none"></video><figcaption>▶ ${esc(v.titre)}</figcaption></figure>`).join('')}</div>` : ''}
          ${(p.images || []).map(([src, alt]) => `<figure class="media-img"><img src="${src}" alt="${esc(alt)}" loading="lazy"><figcaption>${esc(alt)}</figcaption></figure>`).join('')}
        </div>
      </article>`).join('');

    // Carrousels façon Instagram : glisser, flèches, points
    $$('.car').forEach(c => {
      const track = $('.car-track', c), dots = $$('.car-dots i', c), n = dots.length, count = $('.car-count', c);
      const at = () => Math.round(track.scrollLeft / track.clientWidth);
      const go = k => track.scrollTo({ left: Math.max(0, Math.min(n - 1, k)) * track.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
      const sync = () => { const k = at(); dots.forEach((d, j) => d.classList.toggle('on', j === k)); count.textContent = `${k + 1}/${n}`; $('.car-prev', c).disabled = k === 0; $('.car-next', c).disabled = k === n - 1; };
      $('.car-prev', c).addEventListener('click', () => go(at() - 1));
      $('.car-next', c).addEventListener('click', () => go(at() + 1));
      track.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); go(at() + 1); } if (e.key === 'ArrowLeft') { e.preventDefault(); go(at() - 1); } });
      track.addEventListener('scroll', sync, { passive: true }); sync();
    });
    // Une seule vidéo joue à la fois
    $$('.reel video, .son audio').forEach(v => {
      v.addEventListener('play', () => { v.parentNode.classList.add('playing'); $$('.reel video, .son audio').forEach(o => o !== v && o.pause()); });
      v.addEventListener('pause', () => v.parentNode.classList.remove('playing'));
    });
    $('#u-next').href = `realisation.html?u=${next.id}`;
    $('#u-next-title').textContent = next.titre;
    $$('.media-img img').forEach(img => { const c = () => { if (img.naturalHeight / img.naturalWidth > 1.5) img.classList.add('tall'); ST?.refresh(); }; img.complete ? c() : img.addEventListener('load', c); });

    if (anim) {
      $('#u-title').innerHTML = `<span style="display:block;overflow:hidden;padding-top:.14em;margin-top:-.14em"><span style="display:inline-block">${$('#u-title').innerHTML}</span></span>`;
      G.from('#u-title span span', { yPercent: 105, duration: 1.3, ease: 'expo.out', delay: .1 });
      G.from('.u-intro, .u-index li, #u-num', { y: 30, opacity: 0, duration: .9, ease: 'expo.out', stagger: .06, delay: .4 });
      reveal('.projet-txt > *', { y: 40 });
      $$('.media-img').forEach(f => {
        G.from(f, { clipPath: 'inset(18% 8% 18% 8% round 26px)', opacity: .3, scrollTrigger: { trigger: f, start: 'top 92%', end: 'top 45%', scrub: 1 } });
        G.from($('img', f), { scale: 1.18, scrollTrigger: { trigger: f, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
      reveal('.car, .reel', { y: 70, rotate: 1.5 });
      reveal('.une, .son', { y: 50, rotate: -1.5 });
      G.from('.u-next-title', { yPercent: 40, opacity: 0, scrollTrigger: { trigger: '.u-next', start: 'top 90%', end: 'top 50%', scrub: 1 } });
    }
  }

  wireLinks();
})();
