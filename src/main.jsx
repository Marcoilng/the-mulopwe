import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const socialLinks = [
  { label: 'Facebook', short: 'fb', href: 'https://www.facebook.com/share/18FAFpe9va/?mibextid=wwXIfr' },
  { label: 'Instagram', short: '◎', href: 'https://www.instagram.com/marco_ilunga700?stkn=MTRxZTlrbjdwOWp5aA%3D%3D&utm_source=qr' },
  { label: 'Email', short: '@', href: 'mailto:ilungamarco1000@gmail.com' },
  { label: 'WhatsApp', short: 'wa', href: 'tel:+27655445876' },
];

const projects = [
  {
    number: '01',
    year: '2024',
    title: 'Lynx Car Wash',
    category: 'Application mobile · 2024',
    description: 'Application mobile de gestion de lavage automobile avec système de réservation, suivi en temps réel et notifications pour une expérience utilisateur fluide.',
    image: '/assets/projects/lynx-car-wash.png',
    accent: '#c7ff54',
    url: 'https://apps.apple.com/cd/app/lynx-car-wash/id6774166431?l=fr-FR',
  },
  {
    number: '02',
    year: '2024',
    title: 'Invoice / Go',
    category: 'Application mobile · 2024',
    description: 'Application de gestion unlisted pour une holding, permettant de centraliser et gérer efficacement les factures, inventaires et performances de différentes boutiques.',
    image: '/assets/projects/invoice-go-1.jpeg',
    accent: '#ff7659',
  },
  {
    number: '03',
    year: '2024',
    title: 'Scan and / Eat',
    category: 'Application mobile · 2024',
    description: 'Application de gestion unlisted pour une chaîne de restaurants privée, offrant une expérience moderne de commande et paiement via QR code pour les clients.',
    image: '/assets/projects/scan-and-eat-1.jpg',
    accent: '#bf9cff',
  },
  {
    number: '04',
    year: '2024',
    title: 'La Clinique / Entrepreneuriat',
    category: 'Site web · 2024',
    description: 'Plateforme d\'incubateur et d\'accompagnement entrepreneurial pour aider les entrepreneurs à lancer et développer leurs projets avec des ressources pédagogiques et un réseau de mentors.',
    image: '/assets/projects/capture-clinique.png',
    accent: '#c7ff54',
    url: 'https://laclinique-entrepreneuriat.com/',
  },
  {
    number: '05',
    year: '2024',
    title: 'Queen / Cosmetik',
    category: 'E-commerce · 2024',
    description: 'Site e-commerce sophistiqué pour la marque cosmétique Queen Cosmetik, offrant une expérience d\'achat immersive avec catalogue produits élégant et système de commande optimisé.',
    image: '/assets/projects/capture-queen-cosmetik.png',
    accent: '#ff7659',
    url: 'https://www.queencosmetik.com/',
  },
  {
    number: '06',
    year: '2024',
    title: 'Mirichi / Mbumba',
    category: 'Site personnel · 2024',
    description: 'Site personnel professionnel pour coach business, auteur et businessman, présentant l\'expertise, les publications et les services de coaching avec une approche moderne et engageante.',
    image: '/assets/projects/capture-mirichi.png',
    accent: '#c7ff54',
    url: 'https://mirichi-mbumba-site.vercel.app/',
  },
  {
    number: '07',
    year: '2024',
    title: 'Dr Joseph / Kudinana',
    category: 'Site personnel · 2024',
    description: 'Site web professionnel pour coach développement personnel et business, présentant les programmes de coaching, méthodologie et témoignages clients de manière inspirante.',
    image: '/assets/projects/capture-j-kudinana.png',
    accent: '#ff7659',
    url: 'https://dr-joseph-kudinana.vercel.app/',
  },
  {
    number: '08',
    year: '2024',
    title: 'Congo Design / Festival',
    category: 'Événementiel · 2024',
    description: 'Site dynamique pour le Congo Design Festival, plateforme événementielle qui réunit les créateurs et designers congolais pour célébrer et promouvoir le design local.',
    image: '/assets/projects/capture-congo-design.png',
    accent: '#bf9cff',
    url: 'https://cdf-drc.vercel.app/',
  },
  {
    number: '09',
    year: '2024',
    title: 'Noir au / Carré',
    category: 'E-commerce · 2024',
    description: 'Boutique e-commerce contemporaine pour la marque de vêtements Noir au Carré, offrant une expérience shopping moderne avec catalogue tendance et système de commande fluide.',
    image: '/assets/projects/capture-noir-au-carre.png',
    accent: '#c7ff54',
    url: 'https://noir-au-carr.vercel.app/',
  },
  {
    number: '10',
    year: '2024',
    title: 'Congo Culture / ASBL',
    category: 'Association · 2024',
    description: 'Site web pour ASBL dédiée à l\'éloquence et la culture congolaise, présentant les activités culturelles, programmes d\'éloquence et événements communautaires.',
    image: '/assets/projects/capture-congo-culture.png',
    accent: '#ff7659',
    url: 'http://congo-culture-asbl.vercel.app/',
  },
  {
    number: '11',
    year: '2024',
    title: 'Cabinet Jean Bilele',
    category: 'Site professionnel · 2024',
    description: 'Site web professionnel pour le cabinet Jean Bilele, présentant les services juridiques et la expertise en droit avec une interface moderne et accessible.',
    image: '/assets/projects/capture-JBK.png',
    accent: '#bf9cff',
    url: 'https://cabinet-jean-bilele-final.vercel.app/',
  },
  {
    number: '12',
    year: '2024',
    title: 'Dezzaina Brand',
    category: 'Branding · 2024',
    description: 'Site de marque pour Dezzaina, présentant l\'identité visuelle et les produits de la marque avec une esthétique contemporaine et impactante.',
    image: '/assets/projects/capture-dezzaina.png',
    accent: '#c7ff54',
    url: 'https://dizzainabrand.netlify.app/',
  },
  {
    number: '13',
    year: '2024',
    title: 'Salle AMK',
    category: 'Site événementiel · 2024',
    description: 'Site web pour la salle AMK, présentant les événements, la location d\'espace et les services avec une interface intuitive et dynamique.',
    image: '/assets/projects/capture-AMK.png',
    accent: '#ff7659',
    url: 'https://salle-amk.vercel.app/',
  },
];

function Arrow({ direction = 'right' }) {
  return <span className={`arrow arrow--${direction}`} aria-hidden="true">{direction === 'right' ? '↗' : '↙'}</span>;
}

function Mark({ inverse = false }) {
  return (
    <div className={`mark ${inverse ? 'mark--inverse' : ''}`} aria-label="Marco Ilunga">
      <span className="mark__block mark__block--one" />
      <span className="mark__block mark__block--two" />
      <span className="mark__block mark__block--three" />
      <span className="mark__dot" />
    </div>
  );
}

function Wordmark({ inverse = false }) {
  return (
    <a className={`wordmark ${inverse ? 'wordmark--inverse' : ''}`} href="#top" aria-label="Retour en haut">
      <Mark inverse={inverse} />
      <span className="wordmark__text">Marco<br /><em>Ilunga</em></span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const heroRef = useRef(null);
  const project = projects[projectIndex];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    const onPointer = (event) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointer, { passive: true });
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointer);
      revealObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const goToProject = (direction) => {
    setProjectIndex((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <div className="site-shell" id="top">
      <div className="cursor-dot" style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrolled ? 1 : 0})` }} />

      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <Wordmark />
        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="#about">À propos <span>01</span></a>
          <a href="#projects">Projets <span>02</span></a>
          <a href="#contact">Contact <span>03</span></a>
        </nav>
        <div className="header-tools">
          <div className="socials">
            {socialLinks.map((social) => <a key={social.label} href={social.href} aria-label={social.label}>{social.short}</a>)}
          </div>
          <button className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu" aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__inner">
          <p className="eyebrow eyebrow--light">Navigation</p>
          <a href="#about" onClick={closeMenu}>À propos <span>01</span></a>
          <a href="#projects" onClick={closeMenu}>Projets <span>02</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>03</span></a>
          <div className="mobile-menu__footer"><span>Kinshasa · Paris</span><span>© 2026</span></div>
        </div>
      </div>

      <main>
        <section className="hero" ref={heroRef}>
          <div className="hero__meta reveal">
            <span>Portfolio / 2026</span>
            <span className="hero__meta-line" />
            <span>Product &amp; web</span>
          </div>
          <div className="hero__portrait-wrap reveal">
            <div className="hero__portrait-glow" />
            <div className="hero__portrait" role="img" aria-label="Portrait professionnel de Marco Ilunga" />
            <div className="hero__portrait-label">Portrait<br /><span>01 — 03</span></div>
          </div>
          <div className="hero__title reveal">
            <span className="hero__title-small">Construire avec intention</span>
            <h1>Donner<br /><i>forme</i><br />aux idées<span className="blue-dot">.</span></h1>
          </div>
          <div className="hero__side-note reveal"><span className="side-note-line" />Je transforme le code<br />en expériences utiles.</div>
          <div className="hero__bottom reveal">
            <a className="circle-arrow" href="#about" aria-label="Découvrir le portfolio"><span>↓</span></a>
            <span className="hero__bottom-copy">Scroll to explore</span>
            <span className="hero__bottom-index">01 <i>/</i> 05</span>
          </div>
          <div className="hero__giant-word" aria-hidden="true">MARCO</div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-label reveal"><span>01</span><span className="section-label__line" /><span>Présentation</span></div>
          <div className="intro__grid">
            <h2 className="display display--intro reveal">Un esprit clair<br />dans le système<span className="blue-dot">.</span></h2>
            <div className="intro__copy reveal">
              <p className="lead">Je suis Marco Ilunga, développeur et créateur digital. Je conçois des expériences web rapides, lisibles et mémorables pour transformer une intention en produit.</p>
              <p>À la croisée du design, du code et de la stratégie, je construis des interfaces qui restent simples à utiliser et solides dans le temps.</p>
              <a className="text-link" href="#contact">En savoir plus <Arrow /></a>
            </div>
          </div>
          <div className="intro__stamp reveal">Code<br /><span>avec</span><br />intention</div>
        </section>

        <section className="manifesto">
          <div className="manifesto__marquee" aria-hidden="true"><span>Stratégie · Création · Impact · Stratégie · Création · Impact · </span></div>
          <div className="section-pad manifesto__inner">
            <div className="section-label section-label--light reveal"><span>02</span><span className="section-label__line" /><span>Manifeste</span></div>
            <blockquote className="manifesto__quote reveal">"La meilleure technologie est celle qui disparaît derrière une expérience évidente."</blockquote>
            <div className="manifesto__footer reveal"><span>Design · Frontend · Impact</span><span>→</span></div>
          </div>
        </section>

        <section className="trust section-pad">
          <div className="section-label reveal"><span>03</span><span className="section-label__line" /><span>Ils me font confiance</span></div>
          <div className="trust__heading reveal"><h2 className="display">Des systèmes<br /><span>en mouvement</span><span className="blue-dot">.</span></h2><p>Des projets qui commencent par une question claire et deviennent des outils utilisés au quotidien.</p></div>
          <div className="logo-wall reveal" aria-label="Clients et partenaires">
            <span className="logo-word logo-word--serif">atelier</span><span className="logo-word logo-word--caps">NOMA</span><span className="logo-word logo-word--script">mosaïque</span><span className="logo-word logo-word--mono">KORA®</span><span className="logo-word logo-word--heavy">YANGO</span><span className="logo-word logo-word--outline">common<br />ground</span>
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="section-label reveal"><span>04</span><span className="section-label__line" /><span>Projets sélectionnés</span></div>
          <div className="projects__heading reveal"><h2 className="display">Des idées<br /><i>en produits</i><span className="blue-dot">.</span></h2><p>Un aperçu des expériences web, interfaces et systèmes qui ont rythmé les dernières années.</p></div>
          <div className="project-showcase reveal">
            <div className="project-showcase__image" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="project-showcase__overlay" />
              <span className="project-showcase__number">{project.number}</span>
              <span className="project-showcase__year">{project.year}</span>
              {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-showcase__tag">Voir le projet <Arrow /></a>}
            </div>
            <div className="project-showcase__detail">
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-showcase__controls"><button onClick={() => goToProject(-1)} aria-label="Projet précédent">←</button><span>Projet {projectIndex + 1} <i>/</i> {projects.length}</span><button onClick={() => goToProject(1)} aria-label="Projet suivant">→</button></div>
            </div>
          </div>
          <div className="project-list reveal">{projects.map((item, index) => <button key={item.number} className={index === projectIndex ? 'project-list__item project-list__item--active' : 'project-list__item'} onClick={() => setProjectIndex(index)}><span>{item.number}</span><span>{item.title}</span><span>{item.category}</span></button>)}</div>
        </section>

        <section className="contact" id="contact">
          <div className="contact__giant">PARLONS<span className="blue-dot">.</span></div>
          <div className="section-pad contact__inner">
            <div className="section-label section-label--light reveal"><span>05</span><span className="section-label__line" /><span>La suite</span></div>
            <div className="contact__grid reveal"><h2 className="display display--light">Un projet<br /><i>en tête ?</i></h2><div><p>Les bons produits commencent par une conversation claire. Parlons de ce que tu veux construire, améliorer ou rendre plus simple.</p><a className="button button--light" href="mailto:ilungamarco1000@gmail.com">ilungamarco1000@gmail.com <Arrow /></a></div></div>
            <div className="contact__footer reveal"><Wordmark inverse /><div className="contact__footer-links"><span>Kinshasa · Paris</span><span>Facebook · Instagram · Email · WhatsApp</span><span>© 2026 Marco Ilunga</span></div></div>
          </div>
        </section>
      </main>

      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Retour en haut">↑</button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
