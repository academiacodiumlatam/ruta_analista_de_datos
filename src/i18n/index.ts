export type Lang = 'es' | 'en';

export interface I18nStrings {
  nav: { inicio: string; ruta: string; cursos: string; precio: string; contacto: string };
  cta: string;
  hero: {
    kicker: string; title_a: string; title_b: string; title_c: string; sub: string;
    cta_primary: string; cta_secondary: string;
    stat_cursos: string; stat_horas: string; stat_tools: string;
    demo_label: string; demo_note: string; demo_load: string;
  };
  route: {
    kicker: string; title: string; sub: string; legend: string; step: string;
    image_label: string; image_caption: string;
  };
  courses: {
    kicker: string; title: string; sub: string;
    modules: string; lessons: string; hours: string;
    expand: string; collapse: string; filter_all: string;
  };
  price: {
    kicker: string; title: string; sub: string;
    badge: string; discount_badge: string;
    countdown_label: string; original_label: string;
    currency: string; amount: string; original: string; per: string;
    cta: string; guarantee: string;
    features_title: string; pay_title: string;
    features: string[];
  };
  contact: { kicker: string; title: string; sub: string; cta: string };
  footer: {
    tagline: string; nav_title: string; route_title: string;
    contact_title: string; rights: string;
  };
}

export const I18N: Record<Lang, I18nStrings> = {
  es: {
    nav: { inicio: 'Inicio', ruta: 'Ruta', cursos: 'Cursos', precio: 'Precio', contacto: 'Contacto' },
    cta: 'Inscribirme',
    hero: {
      kicker: 'Ruta del Analista de Datos',
      title_a: 'De cero a', title_b: 'analista de datos', title_c: 'profesional',
      sub: '12 cursos en vivo, secuenciales y prácticos. Aprende Excel, SQL, Python y Power BI en el orden correcto y construye un portafolio real.',
      cta_primary: 'Inscribirme a la ruta', cta_secondary: 'Ver el temario',
      stat_cursos: 'cursos en vivo', stat_horas: 'horas de contenido', stat_tools: 'herramientas clave',
      demo_label: 'Ejemplo · Dashboard en Power BI', demo_note: 'Reporte interactivo embebido desde Power BI Service', demo_load: 'Ver reporte en vivo',
    },
    route: {
      kicker: 'La ruta', title: 'Una secuencia diseñada para que avances sin huecos',
      sub: 'Cada curso desbloquea al siguiente. Empiezas por los fundamentos y terminas dominando las cuatro herramientas del analista moderno.',
      legend: 'Herramientas', step: 'Curso',
      image_label: 'Vista general de la ruta',
      image_caption: 'La Ruta del Analista de Datos · 12 cursos · 150 horas en vivo',
    },
    courses: {
      kicker: 'Temario completo', title: '12 cursos, módulo por módulo',
      sub: 'Despliega cada curso para ver sus módulos y lecciones. El contenido es 100% práctico y en vivo.',
      modules: 'módulos', lessons: 'lecciones', hours: 'horas',
      expand: 'Ver temario', collapse: 'Ocultar temario', filter_all: 'Todos',
    },
    price: {
      kicker: 'Inversión', title: 'Una sola ruta. Un solo pago.',
      sub: 'Acceso a los 12 cursos en vivo, certificado y acompañamiento. Sin mensualidades ni sorpresas.',
      badge: 'Pago único', discount_badge: '50% Descuento · Solo durante Live',
      countdown_label: 'La oferta termina en', original_label: 'Antes',
      currency: 'S/.', amount: '299.90', original: '599.90',
      per: 'pago único · sin mensualidades', cta: 'Inscribirme ahora',
      guarantee: 'Incluye acceso a Codium Projects de regalo',
      features_title: 'Todo lo que incluye', pay_title: 'Formas de pago',
      features: [
        '12 cursos en vivo (9 de datos + 3 de Excel)',
        'Ruta secuencial guiada de principio a fin',
        'Certificado de finalización',
        'Acompañamiento por WhatsApp',
        'Acceso a Codium Projects de regalo',
        'Proyectos prácticos para tu portafolio',
      ],
    },
    contact: {
      kicker: '¿Listo para empezar?',
      title: 'Da el primer paso hacia tu carrera en datos',
      sub: 'Escríbenos por WhatsApp y aseguramos tu cupo en la próxima cohorte.',
      cta: 'Inscribirme por WhatsApp',
    },
    footer: {
      tagline: 'Formamos analistas de datos con rutas en vivo, prácticas y secuenciales.',
      nav_title: 'Navegación', route_title: 'La ruta', contact_title: 'Contacto',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: { inicio: 'Home', ruta: 'Path', cursos: 'Courses', precio: 'Pricing', contacto: 'Contact' },
    cta: 'Enroll',
    hero: {
      kicker: 'Data Analyst Learning Path',
      title_a: 'From zero to', title_b: 'professional', title_c: 'data analyst',
      sub: '12 live, sequential, hands-on courses. Learn Excel, SQL, Python and Power BI in the right order and build a real portfolio.',
      cta_primary: 'Enroll in the path', cta_secondary: 'See the syllabus',
      stat_cursos: 'live courses', stat_horas: 'hours of content', stat_tools: 'key tools',
      demo_label: 'Example · Power BI dashboard', demo_note: 'Interactive report embedded from Power BI Service', demo_load: 'View live report',
    },
    route: {
      kicker: 'The path', title: 'A sequence built so you advance with no gaps',
      sub: 'Each course unlocks the next. Start with the fundamentals and finish mastering the four tools of the modern analyst.',
      legend: 'Tools', step: 'Course',
      image_label: 'Path overview',
      image_caption: 'The Data Analyst Path · 12 courses · 150 live hours',
    },
    courses: {
      kicker: 'Full syllabus', title: '12 courses, module by module',
      sub: 'Expand each course to see its modules and lessons. Content is 100% hands-on and live.',
      modules: 'modules', lessons: 'lessons', hours: 'hours',
      expand: 'View syllabus', collapse: 'Hide syllabus', filter_all: 'All',
    },
    price: {
      kicker: 'Investment', title: 'One path. One payment.',
      sub: 'Access to all 12 live courses, certificate and mentoring. No monthly fees, no surprises.',
      badge: 'One-time payment', discount_badge: '50% OFF · Live only',
      countdown_label: 'Offer ends in', original_label: 'Was',
      currency: 'S/.', amount: '299.90', original: '599.90',
      per: 'one-time payment · no monthly fees', cta: 'Enroll now',
      guarantee: 'Includes free access to Codium Projects',
      features_title: 'Everything included', pay_title: 'Payment methods',
      features: [
        '12 live courses (9 data + 3 Excel)',
        'Guided sequential path from start to finish',
        'Certificate of completion',
        'WhatsApp mentoring & support',
        'Free access to Codium Projects',
        'Hands-on projects for your portfolio',
      ],
    },
    contact: {
      kicker: 'Ready to start?',
      title: 'Take the first step toward your data career',
      sub: "Message us on WhatsApp and we'll secure your spot in the next cohort.",
      cta: 'Enroll via WhatsApp',
    },
    footer: {
      tagline: 'We train data analysts through live, hands-on, sequential learning paths.',
      nav_title: 'Navigation', route_title: 'The path', contact_title: 'Contact',
      rights: 'All rights reserved.',
    },
  },
};
