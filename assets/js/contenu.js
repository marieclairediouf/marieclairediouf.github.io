/* =====================================================================
   CONTENU DU SITE : le seul fichier à modifier pour changer un texte,
   un chiffre, une image ou un lien. Ne touche qu'au texte entre " ".
   ===================================================================== */
const MP = "img/mp/";       // dossier des photos du portfolio
const CAR = MP + "reseau-mom-art--";

window.MC = {

  liens: {
    cv: "docs/cv-marie-claire-diouf.pdf",
    linkedin: "https://www.linkedin.com/in/marie-claire-diouf-33b923194",
    miyosport: "https://www.instagram.com/miyo_sport/",
    email: "mi.claire2000@gmail.com",
    telephone: "07 45 31 42 90"
  },

  manifeste: [
    { verbe: "J'écris.", notif: "La Croix Web", detail: "+ de 200 articles édités et optimisés" },
    { verbe: "Je filme.", notif: "Réseau Môm'artre", detail: "Reels, stop motion, tournages d'ateliers" },
    { verbe: "Je publie.", notif: "Instagram Môm'artre", detail: "243,1 k vues en un an" }
  ],

  apropos: "Journaliste de formation, j'ai toujours été passionnée par le storytelling. Après mon BUT Journalisme et plusieurs CDD à La Croix, j'ai voulu créer des formats plus vivants, plus visuels, plus incarnés. Mon alternance au Réseau Môm'artre m'a donné le terrain pour le faire. Aujourd'hui, avec un Master en communication digitale, je cherche un CDI pour raconter des histoires qui comptent, de l'article au reel.",

  chiffres: [
    { valeur: 243.1, decimales: 1, suffixe: " k", label: "vues Instagram", source: "Réseau Môm'artre · 2025 → 2026" },
    { valeur: 129.6, decimales: 1, suffixe: " k", label: "impressions LinkedIn", source: "Réseau Môm'artre · sur un an" },
    { valeur: 200, prefixe: "+", label: "articles édités", source: "La Croix Web · 2024 → 2025" },
    { valeur: 180, prefixe: "+", label: "newsletters envoyées", source: "La Croix Web · 2024 → 2025" }
  ],

  /* -------------------------------------------------------------------
     EXPÉRIENCES PROFESSIONNELLES (du plus récent au plus ancien)
     contexte / missions / apport / competences = le détail affiché
     quand on clique sur « voir le détail ».
     ⚠ Les textes « apport » sont des propositions à relire et ajuster.
     ------------------------------------------------------------------- */
  experiences: [
    { date: "sept. 2025 → sept. 2026", poste: "Chargée de contenus et de communication digitale", structure: "Réseau Môm'artre", initiales: "Mô", type: "Alternance", lieu: "Paris",
      resume: "Un an à raconter ce que l'art provoque chez les enfants : réseaux sociaux, tournages, montage, newsletters et articles.",
      chiffres: ["243,1 k vues Instagram", "+932 abonnés LinkedIn"], image: MP + "reseau-mom-art--dsc02833-33.jpg", avis: 1, univers: "reseaux",
      contexte: "Le Réseau Môm'artre est une association d'éducation artistique et citoyenne. Son objectif : favoriser l'égalité des chances et démocratiser l'accès à la culture, grâce à un mode de garde innovant axé sur la pratique artistique, adapté aux contraintes budgétaires des familles.",
      missions: [
        "Création de contenus éditoriaux et visuels pour les réseaux sociaux",
        "Captation photo et vidéo d'événements artistiques et culturels",
        "Montage vidéo et déclinaisons multiformats (reels, stop motion)",
        "Rédaction et diffusion de newsletters et d'articles pour le site web",
        "Structuration de la ligne éditoriale et du calendrier de publication (15 à 20 posts par mois)",
        "Gestion des réseaux sociaux et suivi des performances",
        "Veille des tendances social media et recommandations d'optimisation"
      ],
      apport: "Cette alternance m'a appris à piloter une communication de bout en bout : de l'idée au tournage, du montage à l'analyse des résultats. J'ai vu ce qu'une ligne éditoriale claire change concrètement sur une communauté.",
      competences: ["Gestion de réseaux sociaux", "Captation et montage vidéo", "Rédaction web", "Design", "Gestion de site web", "Analyse des performances"] },

    { date: "avril 2024 → sept. 2025", poste: "Journaliste éditrice web", structure: "La Croix", initiales: "LC", type: "Stage puis 2 CDD", lieu: "Paris",
      resume: "L'actualité chaude d'un quotidien national : édition, SEO, newsletters, notifications push et page d'accueil.",
      chiffres: ["+ de 200 articles édités", "+ de 180 newsletters"], image: MP + "la-croix--poste-editeur-web-la-croix-ix.jpg", avis: 1, univers: "redaction",
      contexte: "La Croix est un quotidien national d'information générale, attentif aux questions religieuses, politiques, économiques et culturelles. Le journal a su traverser les décennies en s'adaptant aux évolutions technologiques et sociétales.",
      missions: [
        "Rédaction et envoi quotidien des newsletters (éditions numériques)",
        "Suivi de l'actualité en temps réel et mise à jour du site",
        "Correction et optimisation SEO des articles",
        "Gestion de la page d'accueil : hiérarchisation et rafraîchissement avec l'actualité chaude",
        "Rédaction et programmation des notifications push",
        "Coordination avec les autres pôles et conférences de rédaction",
        "Permanences certains dimanches"
      ],
      apport: "La rigueur d'une rédaction nationale : vérifier, hiérarchiser, publier vite et bien. J'y ai appris à écrire pour être lue sur le web, et à garder mon sang-froid quand l'actualité s'emballe.",
      competences: ["Veille et actualité chaude", "Édition web", "Référencement SEO", "Rédaction", "Réactivité", "Travail en rédaction nationale"] },

    { date: "mai → juillet 2024", poste: "Journaliste spécialisée football", structure: "Foot sur 7", initiales: "F7", type: "Stage", lieu: "Cannes",
      resume: "Actualité du football européen et analyses d'après-match, optimisées pour le référencement.",
      chiffres: ["+ de 150 articles", "+ de 20 analyses"], image: "img/footsur7-euro.jpg", haut: true, avis: 1, univers: "redaction",
      contexte: "Foot sur 7 est un média numérique français spécialisé dans l'actualité du football : championnats européens, mercato, analyses de matchs.",
      missions: [
        "Rédaction d'articles d'actualité sur le football européen (Ligue 1, Premier League, Liga…)",
        "Création de contenus optimisés pour le référencement naturel (SEO)",
        "Mise en ligne des articles via le CMS WordPress",
        "Suivi de matchs et analyses d'après-match",
        "Propositions de sujets tendance et de sujets froids"
      ],
      apport: "Allier ma passion du football et le métier : écrire vite sur l'actualité, tout en trouvant des angles d'analyse qui se démarquent.",
      competences: ["Rédaction", "Optimisation SEO", "Analyse de matchs", "Veille active", "Réactivité", "WordPress"] },

    { date: "avril → juin 2023", poste: "Journaliste web", structure: "E-média", initiales: "Em", type: "Stage · 8 semaines", lieu: "Dakar, Sénégal",
      resume: "Articles, interviews et conférences de rédaction au sein d'un groupe de médias sénégalais.",
      chiffres: ["Rédaction web", "Politique, tech, société"], image: "img/hero-objectif.jpg", avis: 1, univers: "redaction",
      contexte: "E-média est un groupe de médias sénégalais présent sur le web, avec une rédaction en ligne qui couvre l'actualité nationale et internationale.",
      missions: [
        "Rédaction d'articles pour le site",
        "Couverture d'événements et conduite d'entretiens",
        "Collecte et analyse d'informations pour l'actualité",
        "Participation aux conférences de rédaction",
        "Propositions de sujets d'actualité chaude et froide"
      ],
      apport: "Travailler dans un autre pays et une autre rédaction m'a appris à m'adapter vite, à de nouveaux codes, de nouveaux publics et de nouveaux sujets.",
      competences: ["Rédaction", "Interviews", "Veille et actualité chaude", "Adaptation"] },

    { date: "mai → juin 2022", poste: "Journaliste presse locale", structure: "Nice-Matin", initiales: "NM", type: "Stage", lieu: "Cannes",
      resume: "Le terrain : reportages, portraits et couverture d'événements, tous publiés dans le journal.",
      chiffres: ["Reportages", "Portraits", "Interviews"], image: MP + "journalisme--img-2699-99.jpg", avis: 0, univers: "redaction",
      contexte: "Nice-Matin est le quotidien régional de référence de la Côte d'Azur. J'ai rejoint l'agence de Cannes pendant quatre semaines.",
      missions: [
        "Reportages de terrain et couverture d'événements locaux",
        "Portrait d'un coiffeur de stars pendant le Festival de Cannes",
        "Reportage avec des écoliers en sortie pédagogique sur l'île Sainte-Marguerite",
        "Interview d'un collectionneur d'affiches",
        "Rencontre avec le service de réanimation de l'hôpital Simone-Veil de Cannes",
        "Propositions de sujets en conférence de rédaction"
      ],
      apport: "Mon premier vrai terrain : aller vers les gens, écouter, et raconter leur histoire en quelques centaines de mots.",
      competences: ["Reportages terrain", "Interviews", "Rédaction", "Réactivité"] },

    { date: "2021 → 2022", poste: "Journaliste freelance, rubrique Rétro / Insolite", structure: "Ballon Rond Magazine", initiales: "BR", type: "Freelance", lieu: "À distance",
      resume: "Raconter l'histoire du foot, un trophée ou un personnage, au rythme du bouclage d'un mensuel.",
      chiffres: ["1 an de rubrique"], image: MP + "projets-perso--ballon-rond-2--2.jpg", haut: true, avis: 0, univers: "redaction",
      contexte: "Ballon Rond est un magazine digital mensuel et payant consacré au football. Chaque numéro mêle l'actualité aux articles de fond, sur les grands championnats comme sur des championnats moins médiatisés.",
      missions: [
        "Rédaction d'articles pour la rubrique Rétro / Insolite",
        "Recherche documentaire et vérification des faits historiques",
        "Veille informationnelle et propositions de sujets",
        "Couverture de matchs",
        "Respect du calendrier de bouclage d'un mensuel"
      ],
      apport: "Ma première signature régulière : apprendre à raconter une histoire vraie avec du rythme, et à respecter des délais de bouclage.",
      competences: ["Rédaction", "Recherche documentaire", "Storytelling", "Analyse de matchs"] }
  ],

  formations: [
    { date: "2025 → 2026", diplome: "Master 2", intitule: "Management de projet en communication digitale", ecole: "EJCAM · Aix-Marseille Université", detail: "En alternance au Réseau Môm'artre" },
    { date: "2024 → 2025", diplome: "Master 1", intitule: "Digital Information and Communication of Organisations and Media", ecole: "EJCAM · Aix-Marseille Université", detail: "Option internationale, formation en anglais" },
    { date: "2021 → 2024", diplome: "BUT", intitule: "Information-Communication, parcours Journalisme", ecole: "École de journalisme de Cannes · IUT Nice Côte d'Azur", detail: "Documentaire handisport en projet de fin d'études" }
  ],

  competences: [
    { titre: "Écrire & communiquer", items: ["Reportages", "Articles", "Rédaction web & SEO", "Scripts vidéo", "Voix off", "Conduite d'interviews", "Newsletters"] },
    { titre: "Filmer & monter", items: ["Tournage", "Montage vidéo", "Reels & stop motion", "Photo", "Podcast", "Reportage radio", "Plateau TV"] },
    { titre: "Designer", items: ["Carrousels", "Affiches", "Magazines", "Conception de site web", "Identité visuelle"] },
    { titre: "Organiser & piloter", items: ["Stratégie éditoriale", "Calendrier éditorial", "Gestion de réseaux sociaux", "Analyse des performances", "Gestion de projet"] }
  ],

  /* -------------------------------------------------------------------
     LES 4 UNIVERS DE RÉALISATIONS (une page chacun)
     Dans un projet :
       images   : [chemin, légende]
       galeries : carrousels { titre, images: [...] }
       videos   : { src, poster, titre }
       liens    : [texte, adresse]   (publications, articles en ligne)
       docs     : [texte, fichier PDF]
     ------------------------------------------------------------------- */
  univers: [
    {
      id: "reseaux", titre: "Réseaux sociaux", accroche: "Faire vivre une communauté", couverture: CAR + "post-insta-lucie-flety-ty.jpg",
      intro: "Stratégie éditoriale, calendrier, création et analyse : faire grandir des comptes, et les gens qui les suivent.",
      projets: [
        { titre: "Instagram Môm'artre", contexte: "Alternance · sept. 2025 → sept. 2026", role: "Création des carrousels et gestion du compte",
          texte: "Des carrousels pensés pour les familles et les partenaires : portraits d'artistes intervenants, activités à faire à la maison, histoire de l'art, sorties culturelles et campagne de dons. Chaque série suit la charte de l'association.",
          chiffres: ["243,1 k vues (+1 200 %)", "22,5 k comptes touchés (+123 %)", "+971 abonnés"],
          galeries: [
            { titre: "Portrait · Mom'artiste Lucie Fléty", images: [1, 2, 3, 4, 5, 6, 7, 8].map(n => CAR + "post-insta-lucie-flety" + (n > 1 ? n + "-y" + n : "-ty") + ".jpg") },
            { titre: "Activité · Crée ton univers coloré à la manière d'Ay-O", images: [1, 2, 3, 4, 5, 6, 7, 8].map(n => CAR + "post-activite-cree-ton-unive-" + (n > 1 ? "o" + n : "-o") + ".jpg") },
            { titre: "Histoire de l'art · Henri Matisse à Môm'Pelleport", images: [CAR + "post-histoire-de-l-art-henri-rt.jpg", ...[2, 3, 4, 5].map(n => CAR + "post-histoire-de-l-art-henri-t" + n + ".jpg")] },
            { titre: "Sorties · Expositions à voir en famille", images: [CAR + "novembre-25-expositions-a-vo-le.jpg", ...[2, 3, 4, 5, 6, 7].map(n => CAR + "novembre-25-expositions-a-vo-e" + n + ".jpg")] },
            { titre: "Campagne de dons · Défi « Choc artistique »", images: [CAR + "post-defi-insta-choc-artisti-25.jpg", CAR + "post-defi-insta-choc-artisti-52.jpg", CAR + "post-defi-insta-choc-artisti-53.jpg"] }
          ],
          images: [[CAR + "interface-instagram-am.jpg", "Le compte Instagram du Réseau Môm'artre"]],
          liens: [["Publication Instagram 1", "https://www.instagram.com/p/DdJyuWDiY9H/"], ["Publication Instagram 2", "https://www.instagram.com/p/Dc3xKlQoM6u/"], ["Publication Instagram 3", "https://www.instagram.com/p/DZsftd6ilkI/"], ["Publication Instagram 4", "https://www.instagram.com/p/DYxVysUDZvh/"], ["Publication Instagram 5", "https://www.instagram.com/p/DXum_DOEZoH/"], ["Publication Instagram 6", "https://www.instagram.com/p/DVoY5isExM-/"]],
          avis: { texte: "Merci beaucoup Marie-Claire pour tout le boulot que tu as fait pour nous ! Outre le travail, ça a aussi été un plaisir de te côtoyer. […] Je te souhaite le meilleur pour la suite.", auteur: "Romain Goutagneux", poste: "Responsable communication, Réseau Môm'artre" } },
        { titre: "LinkedIn Môm'artre", contexte: "Alternance · 2025 → 2026", role: "Animation de la page de l'association",
          texte: "Valoriser les projets, les partenaires et les équipes auprès des professionnels : un ton plus institutionnel, les mêmes histoires.",
          chiffres: ["129,6 k impressions", "+932 abonnés (+25 %)", "+ de 50 posts"],
          images: [[CAR + "dsc02829-29.jpg", "Shooting photo pour le cahier d'activités « Môm' à la Maison », réalisé par l'équipe communication dont je faisais partie"]],
          liens: [["Publication LinkedIn 1", "https://www.linkedin.com/feed/update/urn:li:activity:7503468560669782016"], ["Publication LinkedIn 2", "https://www.linkedin.com/feed/update/urn:li:activity:7476171162486648832"], ["Publication LinkedIn 3", "https://www.linkedin.com/feed/update/urn:li:activity:7475545430446030848"], ["Publication LinkedIn 4", "https://www.linkedin.com/feed/update/urn:li:activity:7472625151776477185"], ["Publication LinkedIn 5", "https://www.linkedin.com/feed/update/urn:li:activity:7462109760759390208"], ["Publication LinkedIn 6", "https://www.linkedin.com/feed/update/urn:li:activity:7450204297142841345"]] },
        { titre: "Planning éditorial", contexte: "Alternance · 2025 → 2026", role: "Organisation de la ligne éditoriale",
          texte: "Un calendrier de 15 à 20 publications par mois, organisé dans Asana : sujets, formats, réseaux, dates et responsables.",
          chiffres: ["15 à 20 posts par mois", "Asana"],
          images: [[CAR + "asana-planning-editorial-al.jpg", "Le planning éditorial dans Asana"]] },
        { titre: "MiyoSport", contexte: "Projet personnel · 2024 → 2025", role: "Mon média football sur Instagram et TikTok",
          texte: "Mon terrain d'expérimentation : j'écris, je tourne et je monte des vidéos et des carrousels qui racontent des histoires peu connues du football, avec des formats récurrents comme « L'écho du ballon » et « La citation de la semaine ».",
          chiffres: ["500 000 vues sur ma meilleure vidéo TikTok", "Écriture, tournage, montage", "Planning calé sur le calendrier sportif"],
          lien: ["Voir @miyo_sport sur Instagram", "https://www.instagram.com/miyo_sport/"],
          galeries: [{ titre: "Quelques publications MiyoSport", images: [2, 3, 4].map(n => MP + "projets-perso--miyo-sport-" + n + "--" + n + ".jpg") }],
          images: [[MP + "projets-perso--miyo-sport-5--5.jpg", "Le profil MiyoSport"], [MP + "projets-perso--miyo-sport-1--1.jpg", "La grille du compte"]] }
      ]
    },
    {
      id: "redaction", titre: "Rédaction", accroche: "Écrire pour être lue", couverture: MP + "journalisme--img-3617-17.jpg",
      intro: "Actualité chaude, SEO, newsletters, enquêtes : la rigueur du journalisme au service du web.",
      projets: [
        { titre: "La Croix Web", contexte: "1 stage + 2 CDD · 2024 → 2025", role: "Journaliste éditrice web",
          texte: "Au cœur du web d'un quotidien national : édition et optimisation SEO des articles, newsletters quotidiennes et thématiques, notifications push, hiérarchisation de la page d'accueil.",
          chiffres: ["+ de 200 articles édités", "+ de 180 newsletters quotidiennes", "+ de 30 newsletters thématiques"],
          images: [[MP + "la-croix--gestion-homa-page-lacroix-ix.jpg", "La gestion de la page d'accueil"], [MP + "la-croix--newsletter-lacroix-ix.jpg", "Une newsletter quotidienne"], [MP + "la-croix--newsletter-lacroix-thematiqu-ue.jpg", "Une newsletter thématique"], [MP + "la-croix--lacroix-ix.jpg", "Dans les locaux de La Croix"]],
          avis: { texte: "Points forts : sérieuse, appliquée, bonnes capacités d'adaptation.", auteur: "Cécile Casciano", poste: "Responsable du service web, La Croix" },
          lien: ["la-croix.com", "https://www.la-croix.com"] },
        { titre: "Articles Môm'artre", contexte: "Alternance · 2025 → 2026", role: "Rédaction pour le site momartre.net",
          texte: "Des articles qui racontent les ateliers, les stages et les projets de l'association, souvent accompagnés d'une vidéo que j'ai tournée et montée.",
          chiffres: ["Quelques exemples d'articles", "Texte + vidéo"],
          images: [[CAR + "article-site-web-eb.jpg", "Un article publié sur momartre.net"]],
          liens: [["Atelier cinéma à Môm'Bondy", "https://momartre.net/atelier-cinema-quand-les-enfants-de-mombondy-rendent-hommage-aux-femmes-de-leur-ville/"], ["Égalité des genres à Môm'Pelleport", "https://momartre.net/vacances-creatives-arts-plastiques-egalite-des-genres-a-mompelleport/"], ["Prévenir les violences éducatives", "https://momartre.net/prevention-des-violences-educatives-ordinaires-former-les-equipes-danimation-pour-mieux-proteger-les-enfants/"], ["Des machines à dessiner", "https://momartre.net/vacances-creatives-quand-les-enfants-fabriquent-des-machines-a-dessiner-a-mompelleport/"], ["CORPS, éveil culturel au long cours", "https://momartre.net/corps-projet-deveil-culturel-et-artistique-au-long-cours/"], ["La médiation dès le plus jeune âge", "https://momartre.net/former-les-acteurs-culturels-a-laccueil-de-la-petite-enfance-repenser-la-mediation-des-le-plus-jeune-age/"], ["Quand l'art crée du lien entre les générations", "https://momartre.net/quand-lart-cree-du-lien-entre-les-generations/"]] },
        { titre: "Dossier centres de formation", contexte: "Projet éditorial · enquête", role: "« Quand les recalés plongent dans la dépression »",
          texte: "Près de 90 % des jeunes en centre de formation ne deviennent pas footballeurs professionnels. Une enquête sur ce « mal silencieux », complétée par le témoignage d'Armel Ipupa, ancien espoir du FC Sochaux.",
          chiffres: ["Enquête", "Témoignage", "Sujet sensible"],
          images: [["img/dossier-site.jpg", "Le dossier « La face cachée des centres de formation »"]],
          docs: [["Lire l'enquête (PDF)", "docs/enquete-centres-de-formation.pdf"], ["Lire le témoignage d'Armel Ipupa (PDF)", "docs/temoignage-armel-ipupa.pdf"]] },
        { titre: "Foot sur 7", contexte: "Stage · mai → juillet 2024", role: "Journaliste spécialisée football",
          texte: "Actualité du football européen, analyses d'après-match et sujets tendance, rédigés et optimisés pour le référencement, mis en ligne sous WordPress. Des formats variés : articles longs, brèves et analyses.",
          chiffres: ["+ de 150 articles", "+ de 20 papiers d'analyse"],
          images: [["img/footsur7-euro.jpg", "Les chiffres clés de l'Euro 2024"], ["img/proof-footsur7.jpg", "L'arrêt Bosman et le marché des transferts"]],
          liens: [["Euro 2024 : quand le prestige prime sur le niveau de jeu", "https://www.foot-sur7.fr/594043-euro-2024-quand-le-prestige-prime-sur-le-niveau-de-jeu"], ["Les chiffres clés de l'Euro 2024", "https://www.foot-sur7.fr/595145-les-chiffres-cles-de-leuro-2024"], ["Ligue 1 : pourquoi la LFP peine à trouver un diffuseur", "https://www.foot-sur7.fr/591299-ligue-1-pourquoi-la-lfp-peine-a-trouver-un-diffuseur"], ["Copa América : le football brésilien est-il en déclin ?", "https://www.foot-sur7.fr/590813-copa-america-le-football-bresilien-est-il-en-declin"]],
          avis: { texte: "Mlle Diouf est une bonne stagiaire qui se distingue par son enthousiasme et sa volonté d'apprendre. Elle montre une forte capacité d'adaptation et s'efforce toujours d'approfondir ses connaissances. La rigueur et l'éthique professionnelle sont au cœur de son travail. Elle est réactive et fiable.", auteur: "Jean-Luc", poste: "Responsable de la rédaction, Foot sur 7" } },
        { titre: "Nice-Matin", contexte: "Stage · agence de Cannes · mai → juin 2022", role: "Reportages, portraits et interviews",
          texte: "Quatre semaines de terrain : le portrait d'un coiffeur de stars pendant le Festival de Cannes, des écoliers en sortie sur l'île Sainte-Marguerite, un collectionneur d'affiches, le service de réanimation de l'hôpital Simone-Veil. Tous mes articles ont été publiés dans le journal.",
          chiffres: ["4 semaines", "Articles publiés dans le journal"],
          images: [[MP + "journalisme--img-2699-99.jpg", "En interview avec un collectionneur d'affiches"], ["img/presse-giuliani.jpg", "Portrait d'Eros Giuliani, coiffeur de stars"], ["img/presse-iles.jpg", "Aux îles, les écoliers parlent d'environnement"], ["img/presse-pharmacies.jpg", "Pratique-t-on encore des tests dans les pharmacies ?"]],
          liens: [["Cannes est-elle vraiment une ville pour les étudiants ? (co-écrit)", "https://www.nicematin.com/societe/education/logements-soins-transports-cannes-est-elle-vraiment-une-ville-pour-les-etudiants-les-questions-des-jeunes-les-reponses-de-la-mairie-776267"]] },
        { titre: "E-média", contexte: "Stage · Dakar, Sénégal · avril → juin 2023", role: "Journaliste web",
          texte: "Huit semaines dans la rédaction web d'un groupe de médias sénégalais : politique, économie, tech, faits divers. Le site a depuis supprimé ces articles, mais voici quelques-uns des sujets que j'ai traités.",
          chiffres: ["8 semaines", "Actualité chaude"],
          une: "E-média · Dakar",
          sujets: ["Ce qui montre que le port est au centre des enjeux sécuritaires", "Tech : une belle vitrine pour 18 entreprises sénégalaises", "Rennes : A. Guissé tué à la machette à l'entrée d'une station de métro", "« La coalition Yewwi Askan Wi dou tass » (Khalifa Sall)"],
          avis: { texte: "Marie Claire Diouf est une étudiante rigoureuse et d'un bon niveau de langue et d'écriture. Durant sa période de stage, elle s'est toujours montrée très disponible. […] Elle s'est très bien intégrée aux différentes équipes du groupe.", auteur: "Babacar Ndaw Faye", poste: "Responsable de la rédaction web, E-média" } },
        { titre: "Le Journal du Festival", contexte: "BUT Journalisme · octobre 2022", role: "Festival du livre de Mouans-Sartoux",
          texte: "Trois jours pour produire, avec mon école, le journal lu par les visiteurs de l'un des plus grands festivals littéraires de France : interviews d'exposants et comptes rendus des rencontres.",
          chiffres: ["3 jours", "Journal quotidien", "Interviews"],
          une: "Le Journal du Festival",
          sujets: ["À l'espace jeunesse, la littérature orale se réinvente", "Emma Moreira Dias, 13 ans, vainqueure même face à des lycéens", "« Aujourd'hui, les paysans ont plus que jamais besoin de communiquer »"] },
        { titre: "Articles pour Buzzles", contexte: "BUT Journalisme · 2022", role: "Le site d'information de l'école",
          texte: "Mes premiers articles publiés, sur des sujets de société, d'histoire et de culture : du naufrage du Joola aux témoignages de femmes qui vivent avec le syndrome des ovaires polykystiques.",
          chiffres: ["Quelques exemples", "Société", "Santé", "Culture"],
          une: "Buzzles",
          sujets: [
            ["Il était une fois le Joola, le Titanic sénégalais", "https://buzzles.fr/2022/11/04/il-etait-une-fois-le-joola-le-titanic-senegalais/"],
            ["Syndrome des ovaires polykystiques : la maladie de l'ombre qui touche 1 femme sur 10", "https://buzzles.fr/2022/03/11/syndrome-des-ovaires-polykystiques-la-maladie-de-lombre-qui-touche-1-femme-sur-10/"],
            ["Réseaux sociaux : l'évangélisation 2.0", "https://buzzles.fr/2022/04/05/reseaux-sociaux-levangelisation-2-0/"],
            ["La Petite Sirène : la bande-annonce du remake fait polémique", "https://buzzles.fr/2022/09/28/la-petite-sirene-la-bande-annonce-du-remake-fait-polemique/"],
            ["Harry Potter : 20 ans après, la magie de Poudlard continue d'opérer", "https://buzzles.fr/2022/02/02/harry-potter-20-ans-apres-la-magie-de-poudlard-continue-doperer/"]
          ] },
        { titre: "Journaliste sport", contexte: "Projets personnels", role: "Accréditée presse, au bord du terrain",
          texte: "En parallèle de mes études, j'ai obtenu des accréditations de journaliste sportive pour couvrir des matchs au bord du terrain, et je tiens Also Foot, mon blog consacré au football.",
          chiffres: ["Accréditations presse", "1 blog"],
          images: [[MP + "journalisme--cad62e89-3a00-4aa5-b895-cd67-46.jpg", "Au bord du terrain"], [MP + "journalisme--img-3617-17.jpg", "Mon accréditation presse"], [MP + "journalisme--fc9ed236-7df2-4504-9673-ceba-4f.jpg", "Avant le coup d'envoi"], [MP + "journalisme--img-4002-02.jpg", "Couverture de l'entraînement des joueurs de l'OGC Nice avant leur rencontre en Conference League"]],
          liens: [["Also Foot, mon blog", "https://miclaire2000.wixsite.com/also-football"]] },
        { titre: "Ballon Rond Magazine", contexte: "Freelance · 2021 → 2022", role: "Rubrique Rétro / Insolite",
          texte: "Replonger dans l'histoire du foot pour raconter un trophée, un match ou un personnage qui a marqué son époque, au rythme du bouclage d'un mensuel.",
          chiffres: ["1 an de rubrique"],
          images: [[MP + "projets-perso--ballon-rond-2--2.jpg", "Une couverture du magazine"], [MP + "projets-perso--ballon-rond-1--1.jpg", "Un de mes articles"]] }
      ]
    },
    {
      id: "video", titre: "Vidéo & audio", accroche: "Raconter par l'image et le son", couverture: MP + "journalisme--img-3153-53.jpg",
      intro: "Écrire, tourner, monter, présenter : des histoires humaines en reels, en reportages télé et radio, en documentaire et en podcast.",
      projets: [
        { titre: "Reels Môm'artre", contexte: "Alternance · 2025 → 2026", role: "Tournage et montage",
          texte: "Des formats courts pour Instagram : stop motion, stages, visites, ateliers. Je tourne sur place, je monte et je décline pour chaque réseau.",
          chiffres: ["Quelques exemples de reels", "Tournage + montage"],
          videos: [
            { src: "video/momartre-stop-motion.mp4", poster: "video/momartre-stop-motion.jpg", titre: "Stop motion à Môm'Didot" },
            { src: "video/momartre-modelage.mp4", poster: "video/momartre-modelage.jpg", titre: "Stage modelage à Villiers-le-Bel" },
            { src: "video/momartre-visite-bayard.mp4", poster: "video/momartre-visite-bayard.jpg", titre: "Visite chez Bayard avec Môm'Frenay" },
            { src: "video/momartre-piste-electro.mp4", poster: "video/momartre-piste-electro.jpg", titre: "Piste électro" },
            { src: "video/momartre-vacances-creatives.mp4", poster: "video/momartre-vacances-creatives.jpg", titre: "Vacances créatives" }
          ],
          images: [[CAR + "dsc02832-32.jpg", "Shooting photo pour le cahier d'activités « Môm' à la Maison », réalisé par l'équipe communication dont je faisais partie"]] },
        { titre: "Journal et reportages TV", contexte: "BUT Journalisme · semaines professionnelles télé", role: "Présentation, commentaire sur image, JRI",
          texte: "En conditions réelles : présenter le journal télévisé, faire un duplex, écrire et poser le commentaire sur image d'un reportage d'actualité, comme l'effondrement d'un immeuble à Sanary-sur-Mer, ou tourner en tant que journaliste reporter d'images.",
          chiffres: ["Quelques exemples", "Présentation du JT", "Commentaire sur image", "Duplex", "JRI"],
          videos: [
            { src: "video/journal.mp4", poster: "video/journal.jpg", titre: "Présentation du JT", horizontal: true },
            { src: "video/tv-ramadan.mp4", poster: "video/tv-ramadan.jpg", titre: "Reportage : l'inflation pendant le ramadan", horizontal: true },
            { src: "video/tv-maraichage.mp4", poster: "video/tv-maraichage.jpg", titre: "Sécheresse : une école de maraîchage (JRI, en groupe)", horizontal: true },
            { src: "video/tv-resto.mp4", poster: "video/tv-resto.jpg", titre: "Duplex depuis un restaurant", horizontal: true },
            { src: "video/reportage-sanary.mp4", poster: "video/reportage-sanary.jpg", titre: "Commentaire sur image : effondrement d'un immeuble à Sanary", horizontal: true }
          ],
          images: [[MP + "journalisme--img-3141-41.jpg", "Sur le plateau TV"], [MP + "journalisme--img-3154-54.jpg", "En tournage en studio"]] },
        { titre: "Reportages radio", contexte: "BUT Journalisme · semaines professionnelles radio", role: "Reportage, interview et montage son",
          texte: "Aller chercher le son sur le terrain, interviewer, écrire, puis monter un reportage prêt à diffuser, de l'actualité culturelle au témoignage d'une étudiante russe pendant la guerre en Ukraine.",
          chiffres: ["Prise de son", "Interview", "Montage"],
          audios: [
            { src: "audio/radio-les-vagues.mp3", titre: "L'exposition « Les Vagues » à Nice", duree: "2 min 12" },
            { src: "audio/radio-maraichage.mp3", titre: "La nouvelle école de maraîchage de Cannes", duree: "1 min 59" },
            { src: "audio/radio-natella.mp3", titre: "Natella, étudiante russe face à la guerre en Ukraine", duree: "50 s" },
            { src: "audio/radio-billetterie.mp3", titre: "Billetterie", duree: "45 s" }
          ],
          images: [[MP + "journalisme--efd53484-0664-4c64-aa0e-57a1-1e.jpg", "En reportage radio, micro à la main"]] },
        { titre: "Documentaire handisport", contexte: "BUT Journalisme · projet de fin d'études", role: "Cheffe de projet, script et montage",
          texte: "J'ai dirigé un projet multimédia sur les succès et les défis des athlètes handisport. Au cœur du projet, le reportage « Handisport, un défi permanent », construit autour des portraits de trois athlètes. Autour de lui : des podcasts, des articles, des infographies et des capsules vidéo pour sensibiliser à l'inclusion dans le sport.",
          chiffres: ["13 min de reportage", "3 portraits d'athlètes", "Podcasts + articles + infographies"],
          images: [["img/proof-docu.jpg", "Tournage dans une salle de sport"], ["img/proof-podcast.jpg", "Enregistrement des podcasts en studio"], ["img/docu-site.jpg", "Le site du projet"]],
          liens: [["Regarder le reportage « Handisport, un défi permanent »", "https://sites.google.com/view/projet360handisport/13-minutes"], ["Écouter les podcasts", "https://sites.google.com/view/projet360handisport/podcast"], ["Visiter le site du projet", "https://sites.google.com/view/projet360handisport/accueil"]] }
      ]
    },
    {
      id: "design", titre: "Design & print", accroche: "Donner une forme aux idées", couverture: MP + "projets-academ--gameday-magazine-1--1.jpg",
      intro: "Identité visuelle, sites, affiches, magazines et newsletters : la mise en forme fait partie du message.",
      projets: [
        { titre: "Game-day Magazine", contexte: "Master 1 · magazine en anglais", role: "Rédaction et design éditorial",
          texte: "Un magazine sur les ligues sportives nord-américaines (NFL, NHL, MLS) : j'ai écrit sur les stratégies d'expansion de la NFL et largement contribué à la mise en page.",
          chiffres: ["Rédaction en anglais", "Design éditorial", "Impression"],
          galeries: [{ titre: "Le magazine imprimé", images: [1, 2, 3, 5].map(n => MP + "projets-academ--gameday-magazine-" + n + "--" + n + ".jpg") }] },
        { titre: "NHL x Laneige", contexte: "Master 1 · campagne fictive", role: "Site web, campagne social media, stories Instagram",
          texte: "Une collaboration sport x beauté imaginée de A à Z autour d'une identité visuelle forte et d'un storytelling immersif. J'ai conçu le site web du produit, la campagne réseaux et ses stories Instagram.",
          chiffres: ["1 site web", "1 campagne social media", "Stories Instagram"],
          images: [["img/proof-nhl.jpg", "Le site du produit"], ["img/proof-nhl-poster.jpg", "Story Instagram « Unleash your inner fan »"], ["img/nhl-poster-2.jpg", "Story Instagram « Support with style »"]] },
        { titre: "Newsletters Môm'artre", contexte: "Alternance · 2025 → 2026", role: "Conception et rédaction",
          texte: "Des newsletters pensées pour les familles et les partenaires de l'association, de la maquette dans Brevo jusqu'à l'envoi.",
          chiffres: ["Maquette, rédaction, envoi", "Brevo"],
          images: [[CAR + "mailing-ng.jpg", "Une newsletter Môm'artre"], [CAR + "mailing-mom-om.jpg", "Une newsletter « Les Amis de Môm'artre »"]] }
      ]
    }
  ],

  outils: [
    { groupe: "Création & montage", liste: [
      { nom: "InDesign", adobe: "Id" }, { nom: "Photoshop", adobe: "Ps" }, { nom: "Premiere Pro", adobe: "Pr" },
      { nom: "Audition", adobe: "Au" }, { nom: "DaVinci Resolve", logo: "img/logos/davinci.svg" },
      { nom: "CapCut", logo: "img/logos/capcut.png" }, { nom: "Canva", logo: "img/logos/canva.svg" }, { nom: "Figma", logo: "img/logos/figma.png" } ] },
    { groupe: "Web, réseaux & emailing", liste: [
      { nom: "WordPress", logo: "img/logos/wordpress.svg" }, { nom: "Meta Business Suite", logo: "img/logos/meta.svg" }, { nom: "Brevo", logo: "img/logos/brevo.svg" } ] },
    { groupe: "Organisation", liste: [
      { nom: "Airtable", logo: "img/logos/airtable.svg" }, { nom: "Asana", logo: "img/logos/asana.svg" }, { nom: "Trello", logo: "img/logos/trello.svg" } ] }
  ],

  langues: [
    { nom: "Wolof", niveau: "Langue maternelle", score: 5 },
    { nom: "Sérère", niveau: "Langue maternelle", score: 5 },
    { nom: "Français", niveau: "Courant · langue de scolarité", score: 5 },
    { nom: "Anglais", niveau: "C1 · TOEIC 915", score: 4 },
    { nom: "Espagnol", niveau: "B1", score: 3 }
  ],

  messages: [
    "Bonjour ! Je cherche un CDI en communication digitale : réseaux sociaux, édition web, création de contenus.",
    "Disponible dès maintenant, en France comme à l'étranger. Et vous, qui cherchez-vous ?"
  ]
};
