/* Marie Claire Diouf · portfolio v2 : un vrai profil, sans effets */
(() => {
  const D = window.MC, L = D.liens;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ico = {
    car: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="3" width="14" height="14" rx="2"/><path d="M3 7v12a2 2 0 0 0 2 2h12"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l-1 6 4 3v2H6v-2l4-3zM12 14v7"/></svg>',
    sound: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2"/></svg>'
  };

  /* ---------- Liens ---------- */
  $$('[data-lien]').forEach(a => {
    const url = L[a.dataset.lien];
    if (url && url !== '#') { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
  });

  /* ---------- Profil ---------- */
  $('#stats').innerHTML = [['+200', 'articles édités'], ['243,1 k', 'vues Instagram'], ['5', 'langues']]
    .map(([n, l]) => `<li><b>${n}</b> ${l}</li>`).join('');
  $('#bio').innerHTML = `
    <p>Journaliste de formation, je conçois des contenus qui donnent envie de lire, de regarder et de partager, de l’article au reel.</p>
    <p>Entre les réseaux sociaux, la rédaction web et la vidéo, je m’attache aux histoires qui méritent d’être mieux racontées.</p>
    <p>Disponible pour un CDI en communication digitale.</p>`;

  /* ---------- Publications : tous les projets, mis à plat ---------- */
  const pinned = { pinned: true, univers: 'tous', titre: 'Bonjour, moi c’est Marie Claire', contexte: 'Publication épinglée', role: 'Journaliste – spécialiste communication digitale', texte: '', lettre: [
    'J’ai grandi entre plusieurs cultures, avec la conscience que certaines histoires, pourtant importantes, sont toujours racontées en dernier. C’est un peu pour ça que je suis devenue journaliste.',
    'À l’école puis en stage, j’ai écrit sur les stéréotypes dans le football, sur les jeunes recalés des centres de formation qui plongent dans la dépression, ou sur le SOPK, une maladie qui touche une femme sur dix et dont on parle si peu. J’ai aussi dirigé un documentaire sur le handisport, pour mettre en lumière des athlètes souvent mal représentés dans les médias.',
    'Puis il y a eu le web. À La Croix, j’ai appris à éditer, à optimiser les articles pour le référencement, à publier vite et juste. Au Réseau Môm’artre, pendant un an, j’ai vu des enfants aborder des thèmes citoyens à travers l’art, et j’ai appris à le raconter en carrousels, en reels et en newsletters.',
    'J’affiche fièrement sur ma bio Twitter : « everything is that deep ». C’est ce qui me pousse à me dépasser et à creuser toujours plus loin, pour de meilleurs résultats, que ce soit pour designer un carrousel ou filmer un reel. Je cherche toujours l’angle juste, le détail qui fait qu’une histoire marque.',
    'Aujourd’hui, je cherche un CDI pour mettre tout ça au service d’une marque ou d’une cause qui a quelque chose à dire.'
  ], images: [['img/portrait.jpg', 'Marie Claire Diouf']] };
  const posts = [pinned, ...D.univers.flatMap(u => u.projets.map(p => ({ ...p, univers: u.id, theme: u.titre })))];
  const mediaOf = p => [
    ...(p.galeries || []).flatMap(g => g.images.map(src => ({ t: 'img', src, alt: g.titre }))),
    ...(p.videos || []).map(v => ({ t: 'video', src: v.src, poster: v.poster, alt: v.titre })),
    ...(p.images || []).map(([src, alt]) => ({ t: 'img', src, alt }))
  ];
  const cover = p => { const m = mediaOf(p)[0]; return m ? (m.poster || m.src) : null; };
  const badge = p => p.videos ? ico.play : p.audios ? ico.sound : mediaOf(p).length > 1 ? ico.car : '';

  /* Stories à la une = filtres par thème */
  const themes = [{ id: 'tous', titre: 'Tout', couverture: 'img/avatar.jpg' }, ...D.univers];
  const short = { reseaux: 'Réseaux', redaction: 'Rédaction', video: 'Vidéo & audio', design: 'Design', tous: 'Tout' };
  $('#highlights').innerHTML = themes.map(t =>
    `<li><button class="hl" data-theme="${t.id}" aria-pressed="${t.id === 'tous'}"><span class="hl-ring"><img src="${t.couverture}" alt=""></span><span>${short[t.id] || t.titre}</span></button></li>`).join('');

  const notes = {
    tous: 'Quelques exemples de ce que j’ai fait, parmi beaucoup d’autres.',
    reseaux: 'Faire vivre une communauté : stratégie, calendrier, création, analyse.',
    redaction: 'Actualité chaude, SEO, newsletters, enquêtes : écrire pour être lue.',
    video: 'Reels, reportages télé et radio, documentaire, podcast.',
    design: 'Sites, magazines, newsletters : la mise en forme fait partie du message.'
  };
  /* La grille est planifiée comme un feed : photos de terrain, visuels posés sur la couleur
     de leur univers, et vignettes typographiques (un chiffre, un titre) qui rythment l'ensemble. */
  const MP = 'img/mp/', CAR = MP + 'reseau-mom-art--';
  const VIG = {
    'Bonjour, moi c’est Marie Claire': { t: 'typo', txt: 'Bonjour, moi c’est Marie Claire.' },
    "Instagram Môm'artre": { t: 'ecran', src: CAR + 'post-insta-lucie-flety-ty.jpg' },
    'Journaliste sport': { t: 'photo', src: MP + 'journalisme--cad62e89-3a00-4aa5-b895-cd67-46.jpg' },
    'La Croix Web': { t: 'chiffre', n: '+200', txt: 'articles édités et optimisés pour le web' },
    "Reels Môm'artre": { t: 'ecran', src: 'video/momartre-stop-motion.jpg' },
    'Nice-Matin': { t: 'photo', src: MP + 'journalisme--img-2699-99.jpg' },
    'Planning éditorial': { t: 'ecran', src: CAR + 'asana-planning-editorial-al.jpg' },
    'Documentaire handisport': { t: 'photo', src: 'img/proof-docu.jpg' },
    'Articles pour Buzzles': { t: 'typo', txt: 'Le SOPK, la maladie de l’ombre qui touche une femme sur dix' },
    'Reportages radio': { t: 'photo', src: MP + 'journalisme--efd53484-0664-4c64-aa0e-57a1-1e.jpg' },
    'NHL x Laneige': { t: 'ecran', src: 'img/proof-nhl-poster.jpg' },
    "LinkedIn Môm'artre": { t: 'chiffre', n: '129,6 k', txt: 'impressions LinkedIn en un an' },
    'Foot sur 7': { t: 'ecran', src: 'img/footsur7-euro.jpg' },
    'Game-day Magazine': { t: 'photo', src: MP + 'projets-academ--gameday-magazine-1--1.jpg' },
    'Journal et reportages TV': { t: 'photo', src: MP + 'journalisme--img-3141-41.jpg' },
    "Articles Môm'artre": { t: 'ecran', src: CAR + 'article-site-web-eb.jpg' },
    'E-média': { t: 'typo', txt: 'Ce qui montre que le port est au centre des enjeux sécuritaires' },
    "Newsletters Môm'artre": { t: 'ecran', src: CAR + 'mailing-ng.jpg' },
    'Dossier centres de formation': { t: 'ecran', src: 'img/dossier-site.jpg' },
    'MiyoSport': { t: 'ecran', src: MP + 'projets-perso--miyo-sport-2--2.jpg' },
    'Le Journal du Festival': { t: 'typo', txt: 'À l’espace jeunesse, la littérature orale se réinvente' },
    'Ballon Rond Magazine': { t: 'ecran', src: MP + 'projets-perso--ballon-rond-2--2.jpg' }
  };
  const ORDER = Object.keys(VIG);
  posts.sort((a, b) => ORDER.indexOf(a.titre) - ORDER.indexOf(b.titre));
  const vignette = p => {
    const v = VIG[p.titre] || { t: 'photo', src: cover(p) };
    if (v.t === 'chiffre') return `<span class="v-num${v.n.length > 4 ? ' v-num-long' : ''}">${esc(v.n)}</span><span class="v-txt">${esc(v.txt)}</span>`;
    if (v.t === 'typo') return `<span class="v-quote">${esc(v.txt)}</span>`;
    return `<img src="${v.src}" alt="" loading="lazy">`;
  };
  let shown = posts;
  const renderGrid = theme => {
    shown = theme === 'tous' ? posts : posts.filter(p => p.univers === theme);
    $('#grid-note').textContent = notes[theme];
    $('#grid').innerHTML = shown.map((p, i) => {
      const v = VIG[p.titre] || { t: 'photo' };
      return `<li class="cell">
        <button class="tile t-${v.t} u-${p.univers}" data-i="${i}" aria-label="Ouvrir : ${esc(p.titre)}">
          ${vignette(p)}
          <span class="tile-badge">${p.pinned ? ico.pin : badge(p)}</span>
        </button>
        <p class="cap"><b>${esc(p.titre)}</b><span>${esc(p.contexte)}</span></p>
      </li>`;
    }).join('');
  };
  renderGrid('tous');
  $('#highlights').addEventListener('click', e => {
    const b = e.target.closest('.hl'); if (!b) return;
    $$('.hl').forEach(x => x.setAttribute('aria-pressed', x === b));
    renderGrid(b.dataset.theme);
    showView('posts');
  });

  /* ---------- Une publication ouverte ---------- */
  const dlg = $('#post');
  let cur = 0;
  const comment = (who, role, text) =>
    `<div class="cmt"><span class="av">${esc(who.split(/\s+/).map(w => w[0]).join('').slice(0, 2))}</span><p><b>${esc(who)}</b> <span class="cmt-role">${esc(role)}</span><br>${esc(text)}</p></div>`;
  const openPost = i => {
    cur = (i + shown.length) % shown.length;
    const p = shown[cur], media = mediaOf(p);
    const slides = media.length ? media.map(m => m.t === 'video'
      ? `<figure class="slide"><video src="${m.src}" poster="${m.poster}" controls playsinline preload="none"></video><figcaption>${esc(m.alt)}</figcaption></figure>`
      : `<figure class="slide"><img src="${m.src}" alt="${esc(m.alt)}" loading="lazy"><figcaption>${esc(m.alt)}</figcaption></figure>`).join('')
      : `<div class="slide slide-une">${(p.sujets || []).map(s => `<p>${esc(Array.isArray(s) ? s[0] : s)}</p>`).join('')}</div>`;
    const sujets = p.sujets && media.length === 0 ? '' : (p.sujets ? `<ul class="post-list">${p.sujets.map(s => Array.isArray(s) ? `<li><a href="${esc(s[1])}" target="_blank" rel="noopener">${esc(s[0])}</a></li>` : `<li>${esc(s)}</li>`).join('')}</ul>` : '');
    const liensSujets = p.sujets && media.length === 0 && p.sujets.some(Array.isArray)
      ? `<ul class="post-list">${p.sujets.filter(Array.isArray).map(s => `<li><a href="${esc(s[1])}" target="_blank" rel="noopener">Lire « ${esc(s[0])} »</a></li>`).join('')}</ul>` : '';
    $('#post-inner').innerHTML = `
      <div class="post-media">
        <div class="track" tabindex="0" aria-label="Médias de la publication">${slides}</div>
        ${media.length > 1 ? `<span class="count">1/${media.length}</span>` : ''}
      </div>
      <article class="post-side">
        <header class="post-head"><span class="av av-me"><img src="img/avatar.jpg" alt=""></span><p><b>marieclaire_diouf</b><br><small>${esc(p.contexte)}</small></p></header>
        <div class="post-body">
          <h2>${esc(p.titre)}</h2>
          <p class="post-role">${esc(p.role)}</p>
          ${p.lettre ? p.lettre.map(l => `<p>${esc(l)}</p>`).join('') : `<p>${esc(p.texte)}</p>`}
          ${p.chiffres?.length ? `<p class="post-facts">${p.chiffres.map(esc).join(' · ')}</p>` : ''}
          ${p.audios ? p.audios.map(a => `<div class="sound"><p><b>${esc(a.titre)}</b> <small>${esc(a.duree)}</small></p><audio src="${a.src}" controls preload="none"></audio></div>`).join('') : ''}
          ${sujets}${liensSujets}
          ${p.docs ? `<ul class="post-list">${p.docs.map(([t, f]) => `<li><a href="${f}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join('')}</ul>` : ''}
          ${p.liens ? `<ul class="post-list">${p.liens.map(([t, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join('')}</ul>` : ''}
          ${p.lien ? `<ul class="post-list"><li><a href="${esc(p.lien[1])}" target="_blank" rel="noopener">${esc(p.lien[0])}</a></li></ul>` : ''}
          ${p.avis ? `<div class="post-comments">${comment(p.avis.auteur, p.avis.poste, p.avis.texte)}</div>` : ''}
        </div>
      </article>`;
    const track = $('.track', dlg), count = $('.count', dlg);
    track.addEventListener('scroll', () => { if (count) count.textContent = (Math.round(track.scrollLeft / track.clientWidth) + 1) + '/' + media.length; }, { passive: true });
    if (!dlg.open) dlg.showModal();
    $('.post-side', dlg).scrollTop = 0;
  };
  $('#grid').addEventListener('click', e => { const t = e.target.closest('.cell')?.querySelector('.tile'); if (t) openPost(+t.dataset.i); });
  $('#post-close').addEventListener('click', () => dlg.close());
  $('#post-prev').addEventListener('click', () => openPost(cur - 1));
  $('#post-next').addEventListener('click', () => openPost(cur + 1));
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', () => $$('video, audio', dlg).forEach(m => m.pause()));
  addEventListener('keydown', e => { if (!dlg.open) return; if (e.key === 'ArrowRight') openPost(cur + 1); if (e.key === 'ArrowLeft') openPost(cur - 1); });

  /* ---------- Expériences : un fil, comme des posts ---------- */
  $('#feed').innerHTML = D.experiences.map(x => `
    <article class="xp">
      <header class="post-head"><span class="av">${esc(x.initiales)}</span><p><b>${esc(x.structure)}</b><br><small>${esc(x.lieu)} · ${esc(x.date)} · ${esc(x.type)}</small></p></header>
      ${x.image ? `<img class="xp-img" src="${x.image}" alt="" loading="lazy">` : ''}
      <div class="xp-body">
        <h3>${esc(x.poste)}</h3>
        <p>${esc(x.resume)}</p>
        ${x.chiffres?.length ? `<p class="post-facts">${x.chiffres.map(esc).join(' · ')}</p>` : ''}
        ${x.missions ? `<details><summary>plus</summary>
          ${x.contexte ? `<p>${esc(x.contexte)}</p>` : ''}
          <p><b>Ce que j'y faisais</b></p><ul>${x.missions.map(m => `<li>${esc(m)}</li>`).join('')}</ul>
          ${x.apport ? `<p><b>Ce que ça m'a apporté</b><br>${esc(x.apport)}</p>` : ''}
          ${x.competences ? `<p class="post-facts">${x.competences.map(esc).join(' · ')}</p>` : ''}
        </details>` : ''}
      </div>
    </article>`).join('');

  /* ---------- Parcours ---------- */
  $('#school').innerHTML = D.formations.map(f => `
    <li><p class="school-date">${esc(f.date)}</p><h3>${esc(f.diplome)} – ${esc(f.intitule)}</h3><p>${esc(f.ecole)}</p><p class="school-note">${esc(f.detail)}</p></li>`).join('');

  /* ---------- Compétences ---------- */
  $('#skills').innerHTML = `
    <div class="skills-col">${D.competences.map(g => `<h3>${esc(g.titre)}</h3><p>${g.items.map(esc).join(', ')}.</p>`).join('')}</div>
    <div class="skills-col">
      <h3>Logiciels</h3>
      <ul class="tools">${D.outils.flatMap(g => g.liste).map(o => `<li>${o.adobe ? `<span class="adobe adobe-${o.adobe.toLowerCase()}">${o.adobe}</span>` : `<img src="${o.logo}" alt="">`}${esc(o.nom)}</li>`).join('')}</ul>
      <h3>Langues</h3>
      <ul class="langs">${D.langues.map(l => `<li><b>${esc(l.nom)}</b> ${esc(l.niveau)}</li>`).join('')}</ul>
    </div>`;

  /* ---------- Onglets ---------- */
  const showView = v => {
    $$('.tab').forEach(t => t.setAttribute('aria-selected', t.dataset.view === v));
    $$('.view').forEach(s => { s.hidden = s.id !== 'view-' + v; });
  };
  $$('.tab').forEach(t => t.addEventListener('click', () => showView(t.dataset.view)));
})();
