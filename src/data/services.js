import {
  FaLeaf,
  FaShieldAlt,
  FaPaintRoller,
  FaBroom,
  FaHandHoldingUsd,
  FaFileInvoiceDollar,
  FaAirFreshener,
  FaTools,
} from 'react-icons/fa';

const services = [
  {
    id: 'maintenance',
    title: {
      he: 'אחזקת מערכות ומבנים',
      en: 'Building Systems',
      fr: 'Systèmes Techniques',
      ru: 'Инженерные системы',
    },
    description: {
      he: 'תחזוקה מונעת וטיפול בתקלות במעליות, משאבות מים, מערכות חשמל וכיבוי אש 24/7.',
      en: 'Preventive care and 24/7 emergency response for elevators, water pumps, electrical, and fire safety systems.',
      fr: 'Maintenance préventive et intervention 24/7 pour ascenseurs, pompes à eau, électricité et sécurité incendie.',
      ru: 'Профилактика и круглосуточное обслуживание лифтов, насосных станций, электрики и систем пожарной безопасности.',
    },
    icon: FaTools,
  },
  {
    id: 'cleaning',
    title: {
      he: 'שירותי ניקיון',
      en: 'Premium Cleaning',
      fr: 'Nettoyage Premium',
      ru: 'Профессиональный клининг',
    },
    description: {
      he: 'ניקיון יסודי של לובי, חניונים, חדרי מדרגות ושטחים משותפים בסטנדרט מלונאי.',
      en: 'Hotel-standard cleaning of lobbies, parking garages, stairwells, glass facades, and shared spaces.',
      fr: 'Entretien de qualité hôtelière des halls, parkings, cages d’escalier et espaces communs.',
      ru: 'Уборка лобби, паркингов, лестничных маршей и общественных пространств по стандартам премиум-отелей.',
    },
    icon: FaBroom,
  },
  {
    id: 'gardening',
    title: {
      he: 'שירותי גינון ונוף',
      en: 'Landscaping & Gardening',
      fr: 'Jardinage & Paysage',
      ru: 'Ландшафт и садоводство',
    },
    description: {
      he: 'עיצוב, טיפוח ותחזוקת גינות נוי, מערכות השקיה חכמות וצמחייה עונתית ירוקה.',
      en: 'Design and care of ornamental gardens, smart irrigation systems, and vibrant seasonal greenery.',
      fr: 'Conception et entretien d’espaces verts, systèmes d’irrigation intelligents et plantes saisonnières.',
      ru: 'Дизайн и уход за садами, настройка умного автополива, стрижка газонов и сезонное озеленение.',
    },
    icon: FaLeaf,
  },
  {
    id: 'security',
    title: {
      he: 'אבטחה ובקרת כניסה',
      en: 'Security & Monitoring',
      fr: 'Sécurité & Contrôle',
      ru: 'Охрана и безопасность',
    },
    description: {
      he: 'מצלמות אבטחה במעגל סגור, אינטרקום חכם, בקרת כניסה ושירותי שמירה לבנייני מגורים ומסחר.',
      en: 'CCTV surveillance, smart intercoms, access control, and security patrol management for full peace of mind.',
      fr: 'Vidéosurveillance CCTV, interphones intelligents, contrôle d’accès et services de gardiennage.',
      ru: 'Видеонаблюдение, умные домофоны, контроль доступа и охрана жилых и коммерческих комплексов.',
    },
    icon: FaShieldAlt,
  },
  {
    id: 'renovation',
    title: {
      he: 'שיפוצים והשבחה',
      en: 'Renovation & Upgrades',
      fr: 'Rénovation & Travaux',
      ru: 'Ремонт и реновация',
    },
    description: {
      he: 'שדרוג לובאים, איטום גגות, צביעת חזיתות ועבודות גמר מקצועיות להשבחת ערך הנכס.',
      en: 'Lobby modernization, roof waterproofing, facade painting, and turnkey structural improvements.',
      fr: 'Modernisation des halls, étanchéité des toitures, ravalement de façades et travaux de finition.',
      ru: 'Модернизация входных групп, гидроизоляция крыш, покраска фасадов и повышение стоимости объекта.',
    },
    icon: FaPaintRoller,
  },
  {
    id: 'billing',
    title: {
      he: 'גבייה וניהול חשבונות',
      en: 'Billing & Accounting',
      fr: 'Facturation & Gestion',
      ru: 'Биллинг и отчётность',
    },
    description: {
      he: 'גביית דמי ועד דיגיטלית, ניהול תקציב שקוף, דוחות כספיים תקופתיים ותשלום לספקים.',
      en: 'Digital HOA fee collection, 100% transparent budgeting, periodic financial reports, and vendor management.',
      fr: 'Collecte numérique des charges, gestion budgétaire transparente, bilans financiers et suivi fournisseurs.',
      ru: 'Цифровой сбор платежей, прозрачный бюджет, регулярные финансовые отчёты и расчёты с подрядчиками.',
    },
    icon: FaFileInvoiceDollar,
  },
  {
    id: 'investment',
    title: {
      he: 'ניהול נכסים והשקעות',
      en: 'Property & Investments',
      fr: 'Gestion Locative & Investissements',
      ru: 'Управление и инвестиции',
    },
    description: {
      he: 'ליווי משקיעים, איתור שוכרים איכותיים, ניהול חוזים ושמירה על תשואה מקסימלית בדרום ישראל.',
      en: 'End-to-end portfolio management for investors, tenant screening, lease administration, and yield optimization.',
      fr: 'Accompagnement des investisseurs, sélection des locataires, gestion des baux et optimisation du rendement.',
      ru: 'Комплексное управление недвижимостью для инвесторов, подбор арендаторов и максимизация доходности.',
    },
    icon: FaHandHoldingUsd,
  },
  {
    id: 'scent',
    title: {
      he: 'מפיצי ריח ואווירה',
      en: 'Ambient Scenting',
      fr: 'Diffusion Olfactive',
      ru: 'Ароматизация пространств',
    },
    description: {
      he: 'מערכות בישום חשמליות מתקדמות ללובי הבניין היוצרות חוויית כניסה יוקרתית ונעימה.',
      en: 'Signature automated fragrance diffusers for building lobbies creating a welcoming, luxury atmosphere.',
      fr: 'Diffuseurs de parfum automatisés pour les halls d’entrée offrant une ambiance raffinée et accueillante.',
      ru: 'Профессиональные арома-системы для лобби, создающие атмосферу престижа и уюта с порога.',
    },
    icon: FaAirFreshener,
  },
];

export default services;
