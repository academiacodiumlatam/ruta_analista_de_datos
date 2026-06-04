import { useState, useEffect, useRef, useCallback } from 'react';
import { COURSES, CATS, LEVELS } from '../data/courses';
import type { CatKey, Lang } from '../data/courses';
import { I18N } from '../i18n';
import type { I18nStrings } from '../i18n';

const WA_NUMBER = '51912454308';
const WA_MSG = 'Hola, me gustaría inscribirme a la Ruta completa del Analista de Datos 12 Cursos en Vivo por 299.90 Soles (Pago Único) + Certificaciones y mi acceso a Codium Projects de regalo';
const waLink = () => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;
const POWERBI_EMBED_URL = 'https://app.fabric.microsoft.com/view?r=eyJrIjoiNGYxNjIyYTItOGM0YS00NTljLTgxYjAtNzRlMzg3ZTI0ODM0IiwidCI6IjgxNzQ3YmU0LTBhNjQtNDU2NS04Y2NlLWE5MGNkODNkZGI4MSIsImMiOjR9';
const ROUTE_IMAGE = 'https://rutadelanalista.academiacodium.com/img/RUTA%20DEL%20ANALISTA%20DE%20DATOS.png';
const LOGO = '/assets/codium-logo-light.png';

/* Tool logo with fallback */
function ToolLogo({ cat, size = 20 }: { cat: CatKey; size?: number }) {
  const c = CATS[cat];
  return (
    <img className="tool-logo" src={c.logo} alt={c.label}
      style={{ width: size, height: size }}
      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
  );
}

/* Icons */
const ArrowIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const ChevronIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
const CheckIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const WaIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M.06 24l1.69-6.16a11.87 11.87 0 01-1.59-5.95C.16 5.34 5.5 0 12.07 0a11.82 11.82 0 018.41 3.49 11.82 11.82 0 013.48 8.42c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 01-5.7-1.45L.06 24zM6.6 20.13c1.67.99 3.27 1.58 5.46 1.58 5.45 0 9.9-4.43 9.9-9.88a9.83 9.83 0 00-2.9-7 9.83 9.83 0 00-7-2.9c-5.46 0-9.9 4.44-9.9 9.9 0 2.3.67 4.02 1.8 5.82l-1 3.65 3.64-.97zm10.9-5.4c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42z" />
  </svg>
);
const ShieldIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const MenuIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const CloseIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
const ExpandIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" />
  </svg>
);

/* Payment icons */
function PayIcon({ name }: { name: string }) {
  const base: React.SVGProps<SVGSVGElement> = { width: 38, height: 24, style: { borderRadius: 4, display: 'block', flexShrink: 0 } as React.CSSProperties };
  if (name === 'Visa') return (
    <svg viewBox="0 0 38 24" {...base}><rect width="38" height="24" rx="3" fill="#1a1f71"/><text x="19" y="17" textAnchor="middle" fill="#fff" fontSize="11" fontStyle="italic" fontWeight="700" fontFamily="Arial, sans-serif">VISA</text></svg>
  );
  if (name === 'MasterCard') return (
    <svg viewBox="0 0 38 24" {...base}><rect width="38" height="24" rx="3" fill="#252525"/><circle cx="14.5" cy="12" r="7.5" fill="#EB001B"/><circle cx="23.5" cy="12" r="7.5" fill="#F79E1B" opacity="0.92"/></svg>
  );
  if (name === 'PayPal') return (
    <svg viewBox="0 0 38 24" {...base}><rect width="38" height="24" rx="3" fill="#fff" stroke="#d0d0d0" strokeWidth="0.8"/><text x="19" y="16.5" textAnchor="middle" fill="#003087" fontSize="9.5" fontWeight="700" fontFamily="Arial, sans-serif">PayPal</text></svg>
  );
  if (name === 'Yape') return (
    <svg viewBox="0 0 38 24" {...base}><rect width="38" height="24" rx="3" fill="#742284"/><text x="19" y="17" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800" fontFamily="Arial, sans-serif">Y</text></svg>
  );
  if (name === 'Plin') return (
    <svg viewBox="0 0 38 24" {...base}><rect width="38" height="24" rx="3" fill="#00B6C9"/><text x="19" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="Arial, sans-serif">plin</text></svg>
  );
  return null;
}

/* Scroll reveal hook */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const show = (el: HTMLElement) => el.classList.add('in');
    const inView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < (window.innerHeight || 0) * 0.92 && r.bottom > 0;
    };
    els.forEach((el) => { if (inView(el)) show(el); });
    let io: IntersectionObserver | null = null;
    try {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { show(e.target as HTMLElement); io!.unobserve(e.target); } });
      }, { threshold: 0.12 });
      els.forEach((el) => { if (!el.classList.contains('in')) io!.observe(el); });
    } catch (_) {}
    const fallback = setTimeout(() => els.forEach(show), 600);
    const onScroll = () => els.forEach((el) => { if (inView(el)) show(el); });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { if (io) io.disconnect(); clearTimeout(fallback); window.removeEventListener('scroll', onScroll); };
  }, []);
}

/* Header */
function Header({ t, lang, setLang }: { t: I18nStrings; lang: Lang; setLang: (l: Lang) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [pct, setPct] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links: [keyof I18nStrings['nav'], string][] = [
    ['inicio', '#inicio'], ['ruta', '#ruta'], ['cursos', '#cursos'], ['precio', '#precio'], ['contacto', '#contacto'],
  ];
  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav">
        <div className="progress-bar"><div className="progress-fill" style={{ width: pct + '%' }} /></div>
        <a className="nav-logo" href="#inicio"><img src={LOGO} alt="Academia Codium" /></a>
        <nav className={`nav-links${open ? ' open' : ''}`}>
          {links.map(([k, href]) => (
            <a key={k} href={href} onClick={() => setOpen(false)}>{t.nav[k]}</a>
          ))}
        </nav>
        <div className="nav-right">
          <div className="lang-toggle">
            <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <a className="btn btn-primary" href={waLink()} target="_blank" rel="noopener noreferrer" style={{ padding: '11px 20px', fontSize: 14.5 }}>
            {t.cta}<ArrowIcon />
          </a>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menú">
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

/* Mock Dashboard (Power BI fallback) */
function MockDashboard() {
  const [bars, setBars] = useState([40, 65, 52, 80, 72, 95, 88]);
  useEffect(() => {
    const id = setInterval(() => setBars(() => Array.from({ length: 7 }, () => 35 + Math.random() * 62)), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="dash">
      <div className="kpis">
        {([['Ingresos', 'S/. 248K', '+12%'], ['Clientes', '1,920', '+8%'], ['Conversión', '4.7%', '+1.3%']] as const).map((k) => (
          <div className="kpi" key={k[0]}>
            <div className="k-lbl">{k[0]}</div>
            <div className="k-val">{k[1]}<small>{k[2]}</small></div>
          </div>
        ))}
      </div>
      <div className="panel">
        <div className="p-lbl">Ventas por mes</div>
        <div className="bars">{bars.map((h, i) => <span className="bar" key={i} style={{ height: h + '%' }} />)}</div>
      </div>
      <div className="panel">
        <div className="p-lbl">Cumplimiento de meta</div>
        <div className="donut" />
        <div className="spark" style={{ marginTop: 12 }}>
          {[30, 50, 38, 62, 55, 74, 60, 82].map((h, i) => <i key={i} style={{ height: h + '%' }} />)}
        </div>
      </div>
    </div>
  );
}

function PowerBIDemo({ t }: { t: I18nStrings }) {
  return (
    <div className="pbi-frame reveal">
      <div className="pbi-bar">
        <span className="pbi-dots"><i /><i /><i /></span>
        <span className="pbi-title">{t.hero.demo_label}</span>
        <span className="pbi-live">LIVE</span>
      </div>
      <div className="pbi-body">
        {POWERBI_EMBED_URL
          ? <iframe className="pbi-iframe" src={POWERBI_EMBED_URL} title="Power BI" allowFullScreen />
          : <MockDashboard />}
      </div>
      <div className="pbi-note">{t.hero.demo_note}</div>
    </div>
  );
}

/* Hero */
function Hero({ t }: { t: I18nStrings }) {
  const totalHours = COURSES.reduce((s, c) => s + c.hours, 0);
  return (
    <section className="section hero" id="inicio">
      <div className="wrap hero-grid">
        <div className="hero-copy reveal">
          <span className="kicker">{t.hero.kicker}</span>
          <h1>{t.hero.title_a} <span className="text-yellow">{t.hero.title_b}</span> {t.hero.title_c}</h1>
          <p className="sub">{t.hero.sub}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={waLink()} target="_blank" rel="noopener noreferrer">{t.hero.cta_primary}<ArrowIcon /></a>
            <a className="btn btn-ghost" href="#cursos">{t.hero.cta_secondary}</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="num">12</div><div className="lbl">{t.hero.stat_cursos}</div></div>
            <div className="hero-stat"><div className="num">{totalHours}<span>+</span></div><div className="lbl">{t.hero.stat_horas}</div></div>
            <div className="hero-stat"><div className="num">4</div><div className="lbl">{t.hero.stat_tools}</div></div>
          </div>
        </div>
        <PowerBIDemo t={t} />
      </div>
    </section>
  );
}

/* Lightbox */
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={alt}>
      <button className="lightbox-close" onClick={onClose} aria-label="Cerrar"><CloseIcon /></button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="lightbox-img" />
      </div>
    </div>
  );
}

/* Route */
function Route({ t, lang, onJump }: { t: I18nStrings; lang: Lang; onJump: (id: string) => void }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el || !fillRef.current) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height;
      const progressed = Math.min(Math.max(vh * 0.55 - r.top, 0), total);
      fillRef.current.style.height = (progressed / total) * 100 + '%';
      el.querySelectorAll<HTMLElement>('.r-step').forEach((s) => {
        const sr = s.getBoundingClientRect();
        if (sr.top < vh * 0.7) s.classList.add('on'); else s.classList.remove('on');
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return (
    <section className="section" id="ruta">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">{t.route.kicker}</span>
          <h2 className="section-title">{t.route.title}</h2>
          <p className="section-sub">{t.route.sub}</p>
          <div className="legend">
            <span className="lg-title">{t.route.legend}:</span>
            {(Object.entries(CATS) as [CatKey, typeof CATS[CatKey]][]).map(([k, c]) => (
              <span className="lg-item" key={k}><ToolLogo cat={k} size={22} />{c.label}</span>
            ))}
          </div>
        </div>
        <figure className="route-image reveal">
          <img src={ROUTE_IMAGE} alt={t.route.image_caption}
            onClick={() => setLightboxOpen(true)}
            onError={(e) => { const fig = (e.target as HTMLImageElement).closest('.route-image') as HTMLElement; if (fig) fig.style.display = 'none'; }} />
          <button className="route-image-btn" onClick={() => setLightboxOpen(true)} aria-label="Ver imagen completa">
            <ExpandIcon />
          </button>
          <figcaption>{t.route.image_caption}</figcaption>
        </figure>
        {lightboxOpen && (
          <Lightbox src={ROUTE_IMAGE} alt={t.route.image_caption} onClose={() => setLightboxOpen(false)} />
        )}
        <div className="route-track reveal" ref={trackRef}>
          <div className="route-line"><div className="fill" ref={fillRef} /></div>
          <div className="route-steps">
            {COURSES.map((c) => {
              const cat = CATS[c.cat];
              return (
                <div className="r-step" key={c.id}>
                  <div className="r-node">{c.n}</div>
                  <div className="r-card" onClick={() => onJump(c.id)}>
                    <div className="r-left">
                      <span className="r-tool"><ToolLogo cat={c.cat} size={16} />{cat.label}</span>
                      <h3>{c.title[lang]}</h3>
                      <div className="r-tag">{c.tagline[lang]}</div>
                      <span className="r-level">{LEVELS[c.level][lang]}</span>
                    </div>
                    <div className="r-meta"><b>{c.hours}</b> {t.courses.hours}<br /><b>{c.lessons}</b> {t.courses.lessons}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Course accordion item */
function CourseItem({ c, lang, t, open, onToggle, refCb }: {
  c: typeof COURSES[0]; lang: Lang; t: I18nStrings;
  open: boolean; onToggle: () => void; refCb: (el: HTMLDivElement | null) => void;
}) {
  const cat = CATS[c.cat];
  return (
    <div className={`course${open ? ' open' : ''}`} ref={refCb} id={`course-${c.id}`}>
      <div className="course-head" onClick={onToggle}>
        <div className="course-num">/<b>{String(c.n).padStart(2, '0')}</b></div>
        <div className="course-info">
          <span className="c-tool"><ToolLogo cat={c.cat} size={18} />{cat.label} · {LEVELS[c.level][lang]}</span>
          <h3>{c.title[lang]}</h3>
          <div className="c-tag">{c.tagline[lang]}</div>
        </div>
        <div className="course-meta">
          <b>{c.modules.length}</b> {t.courses.modules}<br />
          <b>{c.lessons}</b> {t.courses.lessons}<br />
          <b>{c.hours}</b> {t.courses.hours}
        </div>
        <div className="course-chev"><ChevronIcon /></div>
      </div>
      <div className="course-body">
        <div className="course-body-pad">
          {c.modules.map((m, mi) => (
            <div className="module" key={mi}>
              <div className="module-title"><span className="m-idx">M{mi + 1}</span>{m.title[lang]}</div>
              <ul className="module-lessons">
                {m.lessons.map((les, li) => <li key={li}>{les[lang]}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Courses({ t, lang, openId, setOpenId }: {
  t: I18nStrings; lang: Lang; openId: string | null; setOpenId: (id: string | null) => void;
}) {
  const [filter, setFilter] = useState<CatKey | 'all'>('all');
  const refs = useRef<Record<string, HTMLDivElement | null>>({});
  const list = COURSES.filter((c) => filter === 'all' || c.cat === filter);
  useEffect(() => {
    if (openId && refs.current[openId]) {
      const el = refs.current[openId]!;
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [openId]);
  return (
    <section className="section" id="cursos">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">{t.courses.kicker}</span>
          <h2 className="section-title">{t.courses.title}</h2>
          <p className="section-sub">{t.courses.sub}</p>
        </div>
        <div className="filters reveal">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>{t.courses.filter_all}</button>
          {(Object.entries(CATS) as [CatKey, typeof CATS[CatKey]][]).map(([k, c]) => (
            <button key={k} className={filter === k ? 'active' : ''} onClick={() => setFilter(k)}>{c.label}</button>
          ))}
        </div>
        <div className="course-list">
          {list.map((c) => (
            <CourseItem key={c.id} c={c} lang={lang} t={t}
              open={openId === c.id}
              onToggle={() => setOpenId(openId === c.id ? null : c.id)}
              refCb={(el) => { refs.current[c.id] = el; }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Countdown hook — persists deadline in localStorage */
function useCountdown(durationMs: number) {
  const [left, setLeft] = useState(durationMs);
  useEffect(() => {
    const KEY = 'codium-offer-deadline';
    let deadline = parseInt(localStorage.getItem(KEY) || '0', 10);
    const now = Date.now();
    if (!deadline || deadline <= now) { deadline = now + durationMs; localStorage.setItem(KEY, String(deadline)); }
    const tick = () => {
      const d = parseInt(localStorage.getItem(KEY) || '0', 10);
      let rem = d - Date.now();
      if (rem <= 0) { const nd = Date.now() + durationMs; localStorage.setItem(KEY, String(nd)); rem = durationMs; }
      setLeft(rem);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [durationMs]);
  const totalSec = Math.max(0, Math.floor(left / 1000));
  const pad = (n: number) => String(n).padStart(2, '0');
  return { h: pad(Math.floor(totalSec / 3600)), m: pad(Math.floor((totalSec % 3600) / 60)), s: pad(totalSec % 60) };
}

function Countdown({ t }: { t: I18nStrings }) {
  const { h, m, s } = useCountdown(60 * 60 * 1000);
  return (
    <div className="countdown">
      <span className="cd-label">{t.price.countdown_label}</span>
      <div className="cd-clock">
        <span className="cd-unit">{h}</span><i>:</i><span className="cd-unit">{m}</span><i>:</i><span className="cd-unit">{s}</span>
      </div>
    </div>
  );
}

function Price({ t }: { t: I18nStrings }) {
  const pays = ['Yape', 'Plin', 'Visa', 'MasterCard', 'PayPal'];
  return (
    <section className="section" id="precio">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">{t.price.kicker}</span>
          <h2 className="section-title">{t.price.title}</h2>
          <p className="section-sub">{t.price.sub}</p>
        </div>
        <div className="price-grid">
          <div className="price-card reveal">
            <div className="price-badges">
              <span className="price-badge discount">{t.price.discount_badge}</span>
              <span className="price-badge">{t.price.badge}</span>
            </div>
            <div className="price-original">
              <span className="po-label">{t.price.original_label}</span>
              <s>{t.price.currency} {t.price.original}</s>
            </div>
            <div className="price-amount">
              <span className="cur">{t.price.currency}</span>
              <span className="val">{t.price.amount}</span>
            </div>
            <div className="price-per">{t.price.per}</div>
            <Countdown t={t} />
            <a className="btn btn-primary" href={waLink()} target="_blank" rel="noopener noreferrer">{t.price.cta}<ArrowIcon /></a>
            <div className="price-guarantee"><ShieldIcon />{t.price.guarantee}</div>
          </div>
          <div className="feature-card reveal">
            <h4>{t.price.features_title}</h4>
            <ul className="feature-list">
              {t.price.features.map((f, i) => <li key={i}><CheckIcon />{f}</li>)}
            </ul>
            <h4 style={{ marginTop: 28, marginBottom: 0 }}>{t.price.pay_title}</h4>
            <div className="pay-row">
              {pays.map((name) => (
                <span className="pay-chip" key={name}><PayIcon name={name} />{name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Contact CTA band */
function Contact({ t }: { t: I18nStrings }) {
  return (
    <section className="section" id="contacto">
      <div className="wrap">
        <div className="cta-band reveal">
          <span className="kicker" style={{ justifyContent: 'center' }}>{t.contact.kicker}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.sub}</p>
          <a className="btn btn-primary" href={waLink()} target="_blank" rel="noopener noreferrer">
            <WaIcon style={{ width: 18, height: 18 }} />{t.contact.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

/* Footer */
function Footer({ t, lang }: { t: I18nStrings; lang: Lang }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={LOGO} alt="Academia Codium" />
            <p>{t.footer.tagline}</p>
          </div>
          <div className="footer-col">
            <h5>{t.footer.nav_title}</h5>
            <a href="#inicio">{t.nav.inicio}</a>
            <a href="#ruta">{t.nav.ruta}</a>
            <a href="#cursos">{t.nav.cursos}</a>
            <a href="#precio">{t.nav.precio}</a>
            <a href="#contacto">{t.nav.contacto}</a>
          </div>
          <div className="footer-col">
            <h5>{t.footer.route_title}</h5>
            {COURSES.slice(0, 6).map((c) => <a key={c.id} href="#cursos">{c.title[lang]}</a>)}
          </div>
          <div className="footer-col">
            <h5>{t.footer.contact_title}</h5>
            <a href="https://academiacodium.com/" target="_blank" rel="noopener noreferrer">academiacodium.com</a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <span>@academiacodium</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Academia Codium. {t.footer.rights}</span>
          <div className="fb-right">
            <a href={waLink()} target="_blank" rel="noopener noreferrer">{t.cta}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Cursor glow */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let tx = window.innerWidth / 2, ty = window.innerHeight / 2, x = tx, y = ty;
    let raf: number;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; el.style.opacity = '1'; };
    const leave = () => { el.style.opacity = '0'; };
    const loop = () => {
      x += (tx - x) * 0.14; y += (ty - y) * 0.14;
      el.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    loop();
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseleave', leave); cancelAnimationFrame(raf); };
  }, []);
  return <div className="cursor-glow" ref={ref} />;
}

/* Root App */
export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof localStorage !== 'undefined') {
      return (localStorage.getItem('codium-lang') as Lang) || 'es';
    }
    return 'es';
  });
  const [openId, setOpenId] = useState<string | null>(null);
  const t = I18N[lang];
  useEffect(() => {
    localStorage.setItem('codium-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);
  useReveal();
  const jumpToCourse = useCallback((id: string) => {
    setOpenId(id);
    setTimeout(() => {
      const el = document.getElementById('cursos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }, []);
  return (
    <>
      <CursorGlow />
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <Route t={t} lang={lang} onJump={jumpToCourse} />
        <Courses t={t} lang={lang} openId={openId} setOpenId={setOpenId} />
        <Price t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} lang={lang} />
    </>
  );
}
