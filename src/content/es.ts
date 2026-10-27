// Spanish dictionary. Same shape as src/content/en.ts.
import type { Dictionary } from './en';

export const es: Dictionary = {
  common: {
    skip: 'Ir al contenido',
    menu: 'Menú',
    menuName: 'Juan David Ríos',
    menuExplore: 'Explorar',
    menuClose: 'Cerrar',
    menuCta: 'Construyamos algo.',
    menuLocation: 'Desde Colombia',
    language: 'Idioma',
    mainNav: 'Navegación principal',
    footerNav: 'Navegación del pie de página',
    footerLine: 'Software pensado. Hecho para funcionar.',
    location: 'Desde Colombia · Disponible para remoto y freelance',
    independent: 'Proyecto independiente',
    professional: 'Experiencia profesional',
    venture: 'Emprendimiento SaaS',
    inDev: 'En desarrollo',
    concept: 'Concepto de producto',
    explore: 'Explorar el proyecto',
    caseStudy: 'Leer el caso',
    discover: 'Conocer el concepto',
    repo: 'Ver repositorio',
    back: 'Todo el trabajo',
    next: 'Siguiente proyecto',
    metaDescription: 'Juan David Ríos Rodríguez — Ingeniero Full-Stack (Angular, .NET). Portafolio.',
  },
  notFound: {
    title: 'Página no encontrada',
    text: 'La página que buscas no existe o se movió.',
    back: 'Volver al inicio',
  },
  nav: ['Trabajo', 'Sobre mí', 'Habilidades', 'Servicios', 'Enfoque', 'Contacto'],
  titles: {
    home: '',
    work: 'Trabajo',
    fieldops: 'FieldOps',
    bosvia: 'Bosvia',
    logit: 'Logit',
    about: 'Sobre mí',
    skills: 'Habilidades',
    services: 'Servicios',
    approach: 'Enfoque',
    contact: 'Contacto',
  },
  home: {
    hero: {
      eyebrow: 'Ingeniería · Diseño · Pensamiento de producto',
      lines: ['De una idea', 'a algo que'],
      em: 'la gente puede usar.',
      lead: 'Desarrollador full-stack que construye plataformas útiles con cuidado, claridad y responsabilidad.',
    },
    cta1: 'Explora mi trabajo',
    cta2: 'Hablemos',
    tech: 'Angular · .NET · React · Desarrollo asistido por IA',
    band: {
      pre: 'Ingeniería, diseño y el cuidado para que ',
      em: 'funcionen juntos',
      post: '.',
    },
  },
  skills: {
    exploreProjects: 'Explora mis proyectos',
    eyebrow: 'Habilidades',
    h: {
      l1: 'Un conjunto de herramientas.',
      pre: 'Hecho para ',
      em: 'conectar',
      post: '.',
    },
    sub: 'Dos stacks complementarios. Una misma forma de construir software cuidado.',
    main: 'Foco principal',
    mainDesc: 'Interfaces empresariales y sistemas de negocio.',
    add: 'Experiencia adicional',
    addDesc: 'Interfaces web y servicios backend.',
    rows: [
      {
        t: 'Frontend',
        tools: 'Angular · React · TypeScript · RxJS',
        d: 'Componentes, rutas, formularios y estado.',
      },
      {
        t: 'Backend',
        tools: '.NET · C# · Node.js',
        d: 'Reglas de negocio, APIs REST e integraciones.',
      },
      {
        t: 'Arquitectura',
        tools: 'Clean Architecture · DDD · CQRS',
        d: 'Límites definidos y sistemas mantenibles.',
      },
      {
        t: 'Datos',
        tools: 'PostgreSQL · SQL Server · EF Core',
        d: 'Modelos relacionales y aislamiento por cliente.',
      },
      {
        t: 'Bases de UI',
        tools: 'SCSS · Tailwind · PrimeNG · Design tokens',
        d: 'Componentes reutilizables e interfaces accesibles.',
      },
      {
        t: 'Entrega',
        tools: 'Git · Docker · GitHub Actions · Azure DevOps',
        d: 'Revisiones de código, CI/CD y entregas repetibles.',
      },
    ],
    ai: 'IA en el flujo de trabajo',
    aiLine: 'Asistencia con contexto. Decisiones humanas.',
    applied: 'Aplicado en proyectos',
    appliedList: [
      {
        n: 'FieldOps',
        d: 'Angular + .NET',
      },
      {
        n: 'Logit',
        d: 'Angular + .NET · Liderazgo frontend',
      },
      {
        n: 'Teatro Pablo Tobón Uribe',
        d: 'React · Node.js · Python',
      },
    ],
  },
  work: {
    eyebrow: 'Trabajo seleccionado',
    h: {
      l1: 'Software útil.',
      pre: 'Pensado de ',
      em: 'principio a fin',
      post: '.',
    },
    sub: 'Productos independientes, experiencia profesional y productos en desarrollo.',
    logitLead: 'Plataforma de comercio exterior.',
    earlier: 'Trabajo anterior',
    earlierList: [
      {
        t: 'Encuestas accesibles',
        org: 'Universidad de Antioquia',
        ic: 'file',
      },
      {
        t: 'Gestión de eventos',
        org: 'Teatro Pablo Tobón Uribe',
        ic: 'calendar',
      },
    ],
  },
  fieldops: {
    eyebrow: 'Proyecto independiente',
    h: {
      l1: 'FieldOps.',
      pre: 'Servicios de campo, ',
      em: 'conectados',
      post: '.',
    },
    lead: 'Una plataforma de servicios de campo para negocios de mantenimiento, jardinería, instalaciones y servicios similares. Reúne solicitudes, cotizaciones, órdenes de trabajo, visitas y seguimiento en un solo lugar.',
    facts: [
      {
        k: 'Rol',
        v: 'Diseño de producto y desarrollo full-stack',
      },
      {
        k: 'Stack',
        v: 'Angular · .NET · PostgreSQL · Docker',
      },
      {
        k: 'Estado',
        v: 'Listo para demo.',
      },
    ],
    demo: 'Demo en vivo',
    manual: 'Manual de usuario',
    unavailable:
      'La demo y el manual de usuario aún no están publicados. El repositorio es la referencia actual del estado del proyecto.',
    problemEyebrow: 'El problema',
    problemH: {
      pre: 'De la primera llamada a la ',
      em: 'factura final',
      post: '.',
    },
    problem:
      'Muchas empresas de servicios pequeñas y medianas coordinan solicitudes, cotizaciones, agendas y técnicos con mensajes, hojas de cálculo y memoria. La información se pierde entre pasos y nadie tiene una vista clara del día.',
    users: [
      {
        ic: 'users',
        t: 'Coordinadores de oficina',
        d: 'Reciben solicitudes, preparan cotizaciones y agendan visitas.',
      },
      {
        ic: 'wrench',
        t: 'Técnicos de campo',
        d: 'Ven sus visitas asignadas y registran el trabajo realizado.',
      },
      {
        ic: 'chart',
        t: 'Dueños y gerentes',
        d: 'Siguen la operación de sucursales y equipos.',
      },
    ],
    flowEyebrow: 'Flujo de trabajo',
    flowH: {
      pre: 'Un flujo, ',
      em: 'cinco pasos',
      post: '.',
    },
    flow: [
      {
        ic: 'message',
        t: 'Solicitud',
        d: 'Se registra la necesidad del cliente con su propiedad y contexto.',
      },
      {
        ic: 'file',
        t: 'Evaluación / cotización',
        d: 'El trabajo se evalúa y cotiza antes de comprometerlo.',
      },
      {
        ic: 'list',
        t: 'Orden de trabajo',
        d: 'El trabajo aprobado se convierte en una orden con alcance y responsables.',
      },
      {
        ic: 'pin',
        t: 'Visita',
        d: 'Se agenda a los técnicos y se registra la visita.',
      },
      {
        ic: 'check',
        t: 'Seguimiento y facturación',
        d: 'Se revisan los resultados y se prepara la facturación.',
      },
    ],
    modulesEyebrow: 'Módulos',
    modulesH: {
      pre: 'Las piezas de la ',
      em: 'operación diaria',
      post: '.',
    },
    modules: [
      {
        ic: 'users',
        t: 'Clientes',
        d: 'Contactos e historial de cada cliente.',
      },
      {
        ic: 'home',
        t: 'Propiedades',
        d: 'Los lugares donde ocurre el trabajo.',
      },
      {
        ic: 'wrench',
        t: 'Técnicos',
        d: 'Integrantes del equipo, habilidades y asignaciones.',
      },
      {
        ic: 'calendar',
        t: 'Agenda',
        d: 'Vista de despacho por técnico y día.',
      },
      {
        ic: 'pin',
        t: 'Visitas',
        d: 'Qué pasó en sitio, y cuándo.',
      },
      {
        ic: 'list',
        t: 'Órdenes de trabajo',
        d: 'Alcance, estado y responsables.',
      },
    ],
    accessEyebrow: 'Acceso y estructura',
    accessH: {
      pre: 'Organizaciones, sucursales ',
      em: 'y roles',
      post: '.',
    },
    access:
      'FieldOps está diseñado para múltiples organizaciones. Cada una opera sus propias sucursales, y los roles y permisos definen qué puede ver y hacer cada persona.',
    accessList: [
      'Organizaciones con datos aislados',
      'Sucursales dentro de cada organización',
      'Roles y permisos por usuario',
    ],
    techEyebrow: 'Detalles técnicos',
    techH: {
      pre: 'Bajo la ',
      em: 'superficie',
      post: '.',
    },
    techNote: 'Despliega cada área para ver detalles. El estado de implementación se registra en el repositorio.',
    tech: [
      {
        t: 'Arquitectura',
        d: 'Frontend en Angular y API en .NET organizada con límites de Clean Architecture, PostgreSQL para datos relacionales y Docker para entornos consistentes.',
      },
      {
        t: 'Traducciones',
        d: 'La interfaz se estructura para varios idiomas desde el inicio, con los textos fuera de los componentes.',
      },
      {
        t: 'Componentes reutilizables',
        d: 'Componentes y convenciones compartidas mantienen las pantallas consistentes y agilizan nuevos módulos.',
      },
      {
        t: 'Auditoría',
        d: 'Los registros clave del negocio están pensados para conservar quién cambió qué, y cuándo.',
      },
      {
        t: 'Pruebas y CI/CD',
        d: 'Pruebas automatizadas y pipelines respaldan cambios pequeños, revisables y builds repetibles.',
      },
    ],
    contribEyebrow: 'Mi contribución',
    contrib:
      'Diseño y construyo FieldOps de principio a fin: definición del producto, diseño de interfaz, desarrollo frontend y backend, modelo de datos y configuración de entrega.',
  },
  bosvia: {
    eyebrow: 'Emprendimiento SaaS · Concepto de producto',
    h: {
      l1: 'Bosvia.',
      pre: 'Hospitalidad, ',
      em: 'más cerca de la naturaleza',
      post: '.',
    },
    lead: 'Un producto en desarrollo para glampings, ecohoteles y alojamientos pequeños. La visión es conectar la presencia web, las reservas y la operación diaria del alojamiento.',
    status:
      'Bosvia está en etapa de concepto. El alcance de abajo es una propuesta y se actualizará a medida que cada parte se diseñe y construya.',
    visionEyebrow: 'Visión',
    visionH: {
      pre: 'De la primera visita a la ',
      em: 'última noche',
      post: '.',
    },
    vision: [
      {
        ic: 'globe',
        t: 'Presencia',
        d: 'Un sitio web que muestra el lugar, sus espacios y experiencias.',
      },
      {
        ic: 'calendar',
        t: 'Reservas',
        d: 'Disponibilidad y reservas sin mensajes de ida y vuelta.',
      },
      {
        ic: 'grid',
        t: 'Operación',
        d: 'Una vista clara de huéspedes, estadías y tareas diarias.',
      },
    ],
    scopeEyebrow: 'Alcance propuesto',
    scopeH: {
      pre: 'Lo que Bosvia ',
      em: 'podría incluir',
      post: '.',
    },
    proposed: 'Propuesto',
    scope: [
      {
        ic: 'globe',
        t: 'Sitio web y motor de reservas',
        d: 'Sitio público conectado a las reservas.',
      },
      {
        ic: 'calendar',
        t: 'Disponibilidad y calendario',
        d: 'Unidades, fechas y ocupación en una vista.',
      },
      {
        ic: 'tag',
        t: 'Tarifas y temporadas',
        d: 'Precios que se adaptan a fechas y demanda.',
      },
      {
        ic: 'sprout',
        t: 'Experiencias y paquetes',
        d: 'Actividades y combinaciones más allá de la estadía.',
      },
      {
        ic: 'message',
        t: 'Comunicación con huéspedes',
        d: 'Confirmaciones, recordatorios e información práctica.',
      },
      {
        ic: 'key',
        t: 'Check-in y check-out',
        d: 'Llegadas y salidas, organizadas.',
      },
      {
        ic: 'chart',
        t: 'Dashboard operativo',
        d: 'Un resumen diario para el equipo.',
      },
    ],
    photo: 'Foto del alojamiento',
  },
  logit: {
    breadcrumb: 'Trabajo',
    backAll: 'Todos los proyectos',
    eyebrow: 'Caso de estudio · Experiencia profesional',
    tagline: 'Foreign trade',
    h: {
      l1: 'Comercio exterior,',
      pre: '',
      em: 'conectado y claro',
      post: '.',
    },
    lead: 'Desarrollo full-stack y liderazgo frontend en una plataforma para gestionar importaciones, exportaciones y operaciones de comercio exterior.',
    cta1: 'Explorar mi aporte',
    cta2: 'Conversar sobre el proyecto',
    caption: 'Interfaz ilustrativa · Datos ficticios',
    tracker: {
      client: 'Andina Industrial',
      steps: [
        {
          t: 'Orden confirmada',
          d: '12 oct 2026',
          state: 'done',
        },
        {
          t: 'Embarcado',
          d: '18 oct 2026',
          state: 'done',
        },
        {
          t: 'En tránsito',
          d: '22 oct 2026',
          state: 'done',
        },
        {
          t: 'Aduana',
          d: 'En proceso',
          state: 'active',
        },
        {
          t: 'Entrega',
          d: 'Pendiente',
          state: 'todo',
        },
      ],
    },
    facts: [
      {
        ic: 'user',
        k: 'Mi rol',
        v: 'Full-stack · Liderazgo frontend',
      },
      {
        ic: 'code',
        k: 'Tecnologías',
        v: 'Angular · .NET · TypeScript · C#',
      },
      {
        ic: 'database',
        k: 'Contexto',
        v: 'Comercio exterior B2B',
      },
      {
        ic: 'chart',
        k: 'Alcance',
        v: 'Interfaz, servicios y calidad',
      },
    ],
    factsNote: 'Producto de la empresa. Este caso describe mi participación y aportes.',
    tabs: ['Contexto', 'Mi aporte', 'Decisiones técnicas', 'Aprendizajes'],
    context: {
      eyebrow: '01 / El contexto',
      h: {
        l1: 'Muchas operaciones.',
        pre: '',
        em: 'Una experiencia coherente.',
        post: '',
      },
      text: 'La plataforma reúne procesos de comercio exterior y catálogos relacionados. El reto era traducir esa complejidad en interfaces claras y una base de desarrollo mantenible.',
      items: [
        {
          ic: 'box',
          t: 'Importaciones y exportaciones',
          d: 'Gestión de operaciones, seguimiento de embarques y procesos aduaneros.',
        },
        {
          ic: 'file',
          t: 'Órdenes de compra',
          d: 'Creación, seguimiento y control de órdenes relacionadas con cada operación.',
        },
        {
          ic: 'grid',
          t: 'Productos y catálogos',
          d: 'Gestión de productos, categorías y catálogos asociados al comercio exterior.',
        },
        {
          ic: 'users',
          t: 'Clientes y proveedores',
          d: 'Registro y administración de clientes, proveedores y sus datos clave.',
        },
        {
          ic: 'building2',
          t: 'Contactos y sucursales',
          d: 'Gestión de contactos y sucursales en diferentes ubicaciones.',
        },
        {
          ic: 'settings',
          t: 'Ajustes y permisos',
          d: 'Configuración del sistema, parámetros y gestión de roles y permisos.',
        },
      ],
    },
    contribution: {
      eyebrow: '02 / Mi participación',
      h: {
        l1: 'Del desarrollo a',
        pre: 'las ',
        em: 'decisiones de equipo',
        post: '.',
      },
      featured: {
        n: '01',
        ic: 'laptop',
        t: 'Liderazgo frontend',
        d: 'Arquitectura de interfaz, convenciones, revisiones de código y acompañamiento al equipo.',
      },
      list: [
        {
          n: '02',
          ic: 'code',
          t: 'Desarrollo full-stack',
          d: 'Interfaces Angular y contribuciones a servicios .NET.',
        },
        {
          n: '03',
          ic: 'layers',
          t: 'Sistema de diseño compartido',
          d: 'Co-creación de componentes, variables y patrones reutilizables.',
        },
        {
          n: '04',
          ic: 'network',
          t: 'Flujos de negocio',
          d: 'Formularios, catálogos y operaciones conectadas.',
        },
      ],
    },
    decisions: {
      eyebrow: '03 / Decisiones técnicas',
      h: {
        l1: 'Una base pensada para',
        pre: 'crecer ',
        em: 'con el producto',
        post: '.',
      },
      sub: 'La complejidad también se resuelve en la arquitectura, la consistencia y el trabajo del equipo.',
      figCaption: 'Vista conceptual de un flujo operativo en la creación de una nueva importación. Datos ficticios.',
      figAlt:
        'Pantalla ilustrativa de Logit para crear una nueva importación: datos generales, proveedor, incoterm, puertos y lista de productos',
      items: [
        {
          n: '01',
          t: 'Formularios y flujos reactivos.',
          sub: 'Validaciones, carga de catálogos, filtros, paginación y patrones CRUD compartidos.',
          body: 'Diseñé y lideré la implementación de formularios reactivos en Angular, con validaciones en tiempo real, carga dinámica de catálogos, filtros y paginación. Establecimos patrones reutilizables para los flujos principales de la plataforma, manteniendo una experiencia consistente y alineada con el sistema de diseño.',
        },
        {
          n: '02',
          t: 'Arquitectura modular.',
          sub: 'Componentes, servicios y convenciones para mantener una base consistente.',
          body: 'Co-creé la arquitectura de frontend con Angular, definiendo módulos, componentes, servicios y convenciones de código. Esta estructura facilitó el trabajo en equipo, la reutilización de funcionalidades y la evolución del producto en múltiples frentes.',
        },
      ],
      cards: [
        {
          ic: 'lock',
          t: 'Acceso y permisos',
          d: 'Autenticación y verificación granular de roles y permisos, alineada con los distintos perfiles de la plataforma.',
        },
        {
          ic: 'globe',
          t: 'Internacionalización',
          d: 'Traducciones y criterios compartidos para una interfaz multilingüe, considerando múltiples locales, formatos de fecha, moneda y unidades.',
        },
        {
          ic: 'file',
          t: 'Auditoría y trazabilidad',
          d: 'Registro de acciones y apoyo al diagnóstico de errores, con información estructurada y observable en los módulos clave.',
        },
        {
          ic: 'code',
          t: 'Contribuciones backend',
          d: 'Servicios .NET, Entity Framework y patrones de Clean Architecture, DDD y CQRS, colaborando en la implementación de lógica de negocio y validaciones.',
        },
      ],
      system: {
        t: 'Sistema de diseño',
        chips: ['Tokens', 'SCSS', 'Componentes', 'Layouts', 'Consistencia'],
        d: 'Co-creé un sistema de diseño con variables centralizadas, componentes reutilizables y guías de uso para mantener una experiencia consistente en toda la plataforma.',
      },
    },
    how: {
      eyebrow: 'Cómo trabajé',
      lines: ['Criterio técnico, colaboración', 'y mejora continua.'],
      steps: [
        {
          n: '01',
          t: 'Entender el flujo',
          d: 'Traducir necesidades de negocio en interacciones claras.',
        },
        {
          n: '02',
          t: 'Construir en equipo',
          d: 'Implementar, revisar y compartir decisiones.',
        },
        {
          n: '03',
          t: 'Cuidar la calidad',
          d: 'Validar comportamientos y mantener trazabilidad.',
        },
      ],
      ai: 'Herramientas de IA como apoyo al desarrollo, junto con revisión técnica y criterio propio.',
    },
    learnings: {
      eyebrow: '04 / Aprendizajes',
      lines: ['Lo que esta experiencia', 'aportó a mi forma de construir.'],
      items: [
        {
          t: 'Pensar en sistemas, además de pantallas.',
          d: 'Entender el contexto completo de la plataforma, sus usuarios y sus dependencias.',
        },
        {
          t: 'Hacer explícitas las decisiones del equipo.',
          d: 'Documentar criterios, acordar convenciones y facilitar la colaboración.',
        },
        {
          t: 'Conectar diseño, negocio y mantenibilidad.',
          d: 'Buscar soluciones que equilibren experiencia de usuario, objetivos del negocio y una base técnica sostenible.',
        },
      ],
      closing:
        'Esta experiencia fortaleció mi capacidad para asumir responsabilidad sobre la interfaz y colaborar en una plataforma de negocio compleja.',
      cta: {
        t: '¿Buscas este enfoque para tu equipo o producto?',
        primary: 'Hablemos',
        secondary: 'Volver al portafolio',
      },
    },
  },
  about: {
    eyebrow: 'Sobre mí',
    h: {
      l1: 'Buen diseño.',
      pre: 'Ingeniería ',
      em: 'cuidadosa',
      post: '.',
    },
    paras: [
      'Soy Juan David, ingeniero de sistemas y desarrollador Full-Stack, con ojo para el diseño y compromiso con el software útil y bien construido.',
      'Convierto requisitos complejos en experiencias claras y personalizadas, respaldadas por una arquitectura pensada, revisiones de código y pruebas.',
      'Desde la interfaz hasta los sistemas que la sostienen, cuido los detalles que hacen que un producto sea coherente, confiable y adecuado para quienes lo usan.',
    ],
    pillars: ['Diseño con propósito', 'Hecho a tu medida', 'Calidad verificable'],
    caption: 'Curiosidad más allá de la pantalla. Cuidado en cada detalle.',
    expEyebrow: 'Experiencia seleccionada',
    expH: {
      pre: 'La experiencia detrás del ',
      em: 'trabajo',
      post: '.',
    },
    cv: 'Descargar CV',
    cvMissing: 'CV disponible a solicitud',
    exp: [
      {
        ic: 'box',
        t: 'Logit',
        r: 'Ingeniero Full-Stack',
        d: 'Lideré el desarrollo frontend y co-creé un sistema de diseño reutilizable para una plataforma de comercio exterior.',
      },
      {
        ic: 'building',
        t: 'Universidad de Antioquia',
        r: 'Desarrollador Front-End',
        d: 'Construí interfaces accesibles y flujos de encuestas configurables.',
      },
      {
        ic: 'users',
        t: 'Adage LATAM',
        r: 'Desarrollador Web',
        d: 'Trabajé en un equipo ágil de producción en interfaces, pruebas y entregas.',
      },
    ],
    bEyebrow: 'Más allá del código',
    bH: {
      l1: '',
      pre: 'En esencia, un ',
      em: 'constructor',
      post: '.',
    },
    bSub: 'La mentalidad detrás de mi trabajo y la vida que quiero construir.',
    bParas: [
      'Me considero un constructor. En el fondo tengo un deseo profundo de convertir ideas en algo útil y significativo: algo con lo que la gente pueda interactuar, en lo que pueda confiar y que pueda hacer parte de su vida.',
      'Me siento más involucrado cuando estoy creando: entender un problema, imaginar una solución, dar forma a la experiencia y resolver los detalles que la hacen funcionar.',
      'El software reúne diseño, ingeniería, creatividad y la oportunidad de mejorar cómo trabajan las personas. Me importa cómo se siente usar un producto, cómo encajan sus sistemas y si resuelve el problema para el que fue creado.',
    ],
    bLast: 'FieldOps y Bosvia son parte de ese camino.',
    bCaption: 'Curiosidad. Independencia. Espacio para explorar.',
    quote: {
      pre: 'Quiero construir una vida en la que aprender, crear y hacer un trabajo significativo ',
      em: 'vayan de la mano',
      post: '.',
    },
    oH: {
      l1: 'Fuera de',
      pre: 'la ',
      em: 'pantalla',
      post: '.',
    },
    outside:
      'Esa curiosidad continúa al aire libre: naturaleza, senderismo, ciclismo, lectura y conocer lugares nuevos. Valoro la independencia y el espacio para pensar con calma en qué pongo mi tiempo y mi energía.',
    interests: ['Naturaleza', 'Senderismo', 'Ciclismo', 'Lectura', 'Lugares nuevos'],
    closing: 'Construir es mi forma de darles una forma concreta a esas intenciones.',
    closingLink: 'Mira lo que estoy construyendo',
    outsideLine: 'Fuera de la pantalla: senderismo, ciclismo y tiempo en la naturaleza.',
    quality: {
      eyebrow: 'Qué significa calidad para mí',
      l1: 'Cuidado que se ve.',
      q1: 'Calidad',
      mid: ' que se puede ',
      q2: 'rastrear',
      end: '.',
      items: [
        { t: 'Diseño', d: 'Flujos claros e interfaces consistentes.' },
        { t: 'Personalización', d: 'Soluciones pensadas para flujos de trabajo reales.' },
        { t: 'Revisión', d: 'Código, arquitectura y permisos revisados.' },
        { t: 'Validación', d: 'Pruebas, trazabilidad y decisiones documentadas.' },
      ],
    },
  },
  services: {
    eyebrow: 'Servicios',
    h: {
      l1: 'Construyamos algo',
      pre: 'que funcione ',
      em: 'para ti',
      post: '.',
    },
    side1: 'De una idea clara /',
    side2: 'a un producto que funciona',
    sub: 'Diseño cuidado e ingeniería full-stack para la forma en que funciona tu negocio.',
    get: 'Lo que obtienes',
    cards: [
      {
        ic: 'code',
        k: 'Desarrollo full-stack',
        t: 'Aplicaciones web a medida',
        d: 'Convierte los flujos de tu negocio en una plataforma web útil, hecha a tu medida.',
        g: [
          {
            ic: 'chart',
            t: 'Flujos automatizados y dashboards',
          },
          {
            ic: 'users',
            t: 'Roles y permisos',
          },
          {
            ic: 'database',
            t: 'APIs y datos conectados',
          },
        ],
      },
      {
        ic: 'window',
        k: 'Frontend e implementación de UI',
        t: 'Interfaces que se sienten bien',
        d: 'Experiencias claras y responsive que hacen más fácil entender y completar tareas complejas.',
        g: [
          {
            ic: 'smartphone',
            t: 'Pantallas y formularios responsive',
          },
          {
            ic: 'accessibility',
            t: 'Interacciones accesibles',
          },
          {
            ic: 'layers',
            t: 'Componentes de UI consistentes',
          },
        ],
      },
      {
        ic: 'bulb',
        k: 'Desarrollo de producto / MVP',
        t: 'Una base para tu producto',
        d: 'Define la primera versión y construye una base técnica coherente y mantenible para tu próxima idea.',
        g: [
          {
            ic: 'file',
            t: 'Alcance y prioridades del MVP',
          },
          {
            ic: 'network',
            t: 'Flujos de interfaz y arquitectura',
          },
          {
            ic: 'growth',
            t: 'Implementación incremental',
          },
        ],
      },
      {
        ic: 'layers',
        k: 'Ingeniería de sistemas de diseño',
        t: 'Sistemas de diseño que crecen contigo',
        d: 'Componentes reutilizables y reglas visuales compartidas para que tu producto se mantenga consistente.',
        g: [
          {
            ic: 'palette',
            t: 'Design tokens y estilos',
          },
          {
            ic: 'box',
            t: 'Librerías de componentes',
          },
          {
            ic: 'file',
            t: 'Guías de uso',
          },
        ],
      },
    ],
    pEyebrow: 'Trabajar juntos',
    pH: {
      pre: 'Un proceso claro, ',
      em: 'desde el inicio',
      post: '.',
    },
    process: [
      {
        t: 'Descubrir',
        d: 'Entender el problema.',
      },
      {
        t: 'Definir',
        d: 'Acordar alcance y prioridades.',
      },
      {
        t: 'Construir',
        d: 'Revisar el avance juntos.',
      },
      {
        t: 'Entregar',
        d: 'Validar y documentar el resultado.',
      },
    ],
  },
  approach: {
    eyebrow: 'Cómo trabajo',
    h: {
      l1: 'Un proceso conectado.',
      pre: 'Un resultado ',
      em: 'cuidado',
      post: '.',
    },
    side1: 'Ciclos de feedback cortos /',
    side2: 'Decisiones claras',
    sub: 'Diseño, ingeniería y feedback avanzan juntos, desde la primera pregunta hasta la siguiente mejora.',
    ring: [
      {
        ic: 'search',
        t: 'Entender',
        d: 'Escuchar, definir el problema y fijar prioridades.',
      },
      {
        ic: 'filepen',
        t: 'Diseñar',
        d: 'Explorar flujos, prototipar y alinear la experiencia.',
      },
      {
        ic: 'code',
        t: 'Construir',
        d: 'Conectar interfaces, reglas de negocio y datos.',
      },
      {
        ic: 'settings',
        t: 'Validar',
        d: 'Revisar, probar y ajustar con feedback.',
      },
      {
        ic: 'send',
        t: 'Entregar',
        d: 'Desplegar, documentar y hacer clara la entrega.',
      },
      {
        ic: 'chart',
        t: 'Aprender',
        d: 'Observar, mejorar e informar la siguiente iteración.',
      },
    ],
    center: {
      pre: 'Claridad ',
      em: 'en el centro',
      post: '.',
    },
    centerLines: ['Contexto compartido', 'Criterio de ingeniería', 'Feedback continuo'],
    aiChip: 'IA integrada al flujo',
    aiSteps: 'Explorar · Implementar · Revisar',
    aiNote:
      'La IA me ayuda a explorar opciones e implementar más rápido. Reviso cada cambio, tomo las decisiones y respondo por lo que se entrega.',
    principles: [
      {
        ic: 'layers',
        t: 'Bases reutilizables',
        d: 'Componentes, convenciones y contexto compartido.',
      },
      {
        ic: 'users',
        t: 'Cambios pequeños y revisables',
        d: 'Puntos de control frecuentes y avance visible.',
      },
      {
        ic: 'shield',
        t: 'Responsabilidad de principio a fin',
        d: 'Respondo por las decisiones y la entrega.',
      },
    ],
    closing: {
      pre: 'Hecho con cuidado. ',
      em: 'Mejorado con propósito',
      post: '.',
    },
    closingLink: 'Ver el proceso en mis proyectos',
  },
  contact: {
    eyebrow: 'Contacto / Conectemos',
    h: {
      l1: 'Construyamos algo',
      pre: '',
      em: 'útil',
      post: '.',
    },
    lead: 'Un producto nuevo, un rol en tu equipo o una idea que vale la pena explorar. Me encantaría escucharla.',
    status: 'Disponible para roles remotos y freelance',
    tz: 'Colombia · UTC−5',
    channelsH: 'Una buena conversación es un gran comienzo.',
    channelsSub: 'Elige el canal que prefieras o déjame un mensaje.',
    whatsapp: { t: 'Hablemos por WhatsApp', d: 'Para una conversación rápida y directa.', cta: 'Iniciar conversación' },
    email: { t: 'Correo', d: 'Envíame un mensaje directo.' },
    linkedin: { t: 'LinkedIn', d: 'Conectemos profesionalmente.' },
    github: { t: 'GitHub' },
    basedLabel: 'Ubicación',
    basedValue: 'Colombia · Remoto',
    langLabel: 'Idiomas',
    langValue: 'Español e inglés',
    open: 'Abierto a trabajo con sentido y colaboraciones cuidadas.',
    noEmail: 'Pronto publicaré aquí mi correo. Mientras tanto, puedes encontrarme en GitHub.',
    form: {
      h: 'Cuéntame un poco',
      sub: 'Con unos pocos detalles es suficiente para empezar.',
      topicLabel: '¿Qué te trae por aquí?',
      topics: [
        { k: 'project', t: 'Un proyecto' },
        { k: 'role', t: 'Un rol' },
        { k: 'connect', t: 'Conectemos' },
      ],
      subjects: { project: 'Consulta sobre un proyecto', role: 'Consulta sobre un rol', connect: 'Conectemos' },
      name: 'Tu nombre',
      namePh: 'Tu nombre',
      email: 'Correo electrónico',
      emailPh: 'tu@empresa.com',
      company: 'Empresa o sitio web (opcional)',
      companyPh: '¿Dónde puedo saber más?',
      message: '¿Qué tienes en mente?',
      messagePh: 'Cuéntame sobre tu proyecto u oportunidad…',
      hint: 'Puedes escribir en español o en inglés.',
      send: 'Enviar mensaje',
      note: 'Tus datos solo se usarán para responder a tu mensaje.',
      mailNote: 'Se abrirá tu aplicación de correo con el mensaje listo para enviar.',
      opened: 'Si tu aplicación de correo no se abrió, escríbeme directamente a',
    },
  },
  projects: {
    fieldops: {
      cat: 'Gestión de servicios de campo',
      desc: 'Una plataforma de servicios de campo que conecta solicitudes, agenda y operación diaria.',
      stack: 'Angular · .NET · PostgreSQL · Docker',
      role: 'Proyecto full-stack independiente',
    },
    logit: {
      cat: 'Plataforma de comercio exterior',
      desc: 'Liderazgo frontend, interfaces reutilizables y aportes al backend.',
      stack: 'Angular · .NET · Sistemas de diseño',
    },
    bosvia: {
      cat: 'Gestión hotelera para glampings y alojamientos pequeños.',
      desc: 'Conecta presencia web, reservas y operación diaria.',
      stack: 'Concepto de producto · Hospitalidad',
    },
  },
  alt: {
    hero: 'Paisaje de montañas en Colombia con un caminante mirando los valles',
    camp: 'Una persona descansando junto a una carpa sobre un valle de nubes',
    fieldops:
      'Panel operativo de FieldOps: trabajos del día, puntos que requieren atención, disponibilidad de técnicos y desempeño del servicio',
    bosvia:
      'Panel operativo de Bosvia para un alojamiento: llegadas y salidas de hoy, calendario de disponibilidad, reservas recientes y ventas directas',
    logit:
      'Centro de operaciones de comercio exterior ilustrativo: operaciones activas, embarques en tránsito, control documental y seguimiento de embarques',
    aboutCamp: 'Un caminante con mochila naranja sentado en un risco, mirando montañas con bosque',
    builder: 'Un caminante con chaqueta roja y mochila de pie en el borde de un precipicio al atardecer',
  },
  mock: {
    placeholder: 'provisional',
  },
};
