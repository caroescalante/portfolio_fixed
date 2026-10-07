const translations = {
  es: {
    nav: {
      home: "Home",
      about: "Conoceme",
      process: "Cómo trabajo",
      cv: "CV",
      projects: "Proyectos",
      contact: "Contacto",
    },
      home: {
      cta: "CONOCEME",
    },
    about: {
      title: "¿Quién soy?",
      intro: "Hola! Mi nombre es Caro 💖",
      p1: "Soy Ingeniera en Sistemas de Información (UTN, en curso), Técnica en Informática y Full Stack Developer. Me especializo en diseñar arquitecturas de datos y de soluciones, y en transformar procesos manuales o desordenados en sistemas automatizados, escalables y confiables.",
      p2: "Disfruto meterme en el problema real detrás de cada proyecto: entender qué necesita el negocio, diseñar la solución más adecuada y llevarla a producción. Ya sea modelando una base de datos, definiendo la arquitectura de un sistema o resolviendo un incidente crítico, mi objetivo siempre es el mismo: que la tecnología resuelva problemas reales.",
      p3: "Soy proactiva, resiliente y con una curiosidad que no se apaga — disfruto aprender tecnologías y dominios nuevos, trabajar en equipo y transformar ideas en proyectos reales que generan impacto✨",
    },
    process: {
      title: "¿Cómo trabajo?",
      subtitle: "Mi forma de encarar cada proyecto, de punta a punta.",
      steps: [
        {
          number: "01",
          title: "Diagnóstico",
          text: "Me meto en el problema real: qué proceso es lento, o no escala, y por qué. Por ejemplo, detectar que una PyME gestionaba todo su stock y sus compras en papel.",
        },
        {
          number: "02",
          title: "Diseño de arquitectura",
          text: "Diseño el modelo de datos y la arquitectura de la solución pensando en escalabilidad desde el día uno: qué se guarda, cómo se relaciona y cómo va a crecer.",
        },
        {
          number: "03",
          title: "Implementación",
          text: "Llevo el diseño a producción: desarrollo, pruebas y ajustes hasta que el sistema funciona de punta a punta, sin perder de vista al usuario final.",
        },
        {
          number: "04",
          title: "Resultado e impacto",
          text: "Mido el impacto real: tiempo ahorrado, errores eliminados, visibilidad ganada. El objetivo no es solo que funcione, sino que resuelva el problema de negocio.",
        },
      ],
    },
    resume: {
      title: "Mi CV",
      download: "Descargar CV",
      loading: "Cargando CV...",
      error: "No se pudo cargar el CV.",
      file: "/cv.pdf",
    },
    contact: {
      title: "¿Trabajamos juntos?",
      p1_pre: "Estoy buscando nuevos desafíos como ",
      p1_role1: "Data Engineer",
      p1_mid: " o ",
      p1_role2: "Solutions Architect",
      p1_post: ", y también abierta a proyectos freelance de desarrollo y automatización.",
      p2: "Si mi perfil encaja con lo que estás buscando, o simplemente querés charlar sobre datos, arquitectura o algún proyecto, escribime — te respondo a la brevedad.",
      whatsapp: "WhatsApp",
      email: "Email",
      emailCopied: "¡Email copiado!",
      linkedin: "LinkedIn",
      instagram: "Instagram",
    },
     projects: {
      heading: "Algunos de mis trabajos ...",
      items: {
        rv: {
          title: "RV Solutions Landing",
          description:
            "Landing de 3 secciones diseñada y pensada para darle al usuario una introducción a la empresa, y sentido de confianza para contratar sus servicios.",
        },
        tarot: {
          title: "Tarot Landing",
          description:
            "Landing con la información completa de todos los servicios que brinda la especialista. Formulario para sacar turnos y redireccionamiento directo a WhatsApp.",
        },
        gamezone: {
          title: "Henry Game-Zone",
          description:
            "E-commerce de videojuegos, medios de pago integrados, cards individuales con descripción y video trailer, carrito de compras, favoritos, perfil personalizable y más!",
        },
        pokemons: {
          title: "Pokémons",
          description:
            "Web donde podrás crear tu propio pokémon, asignarlo a una casa, ver el detalle, editarlos, eliminarlos, filtrarlos y navegar a través de todas las casas.",
        },
      },
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About me",
      process: "How I Work",
      cv: "Resume",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      cta: "GET TO KNOW ME",
    },
    about: {
      title: "Who am I?",
      intro: "Hi! My name is Caro 💖",
      p1: "I'm an Information Systems Engineering student (UTN), a certified IT Technician, and a Full Stack Developer. I specialize in designing data and solutions architectures, and in turning manual or messy processes into automated, scalable, reliable systems.",
      p2: "I love digging into the real problem behind every project: understanding what the business needs, designing the right solution, and shipping it to production. Whether it's modeling a database, defining a system's architecture, or resolving a critical incident, my goal is always the same: technology should solve real problems.",
      p3: "I'm proactive, resilient, and endlessly curious — I enjoy learning new technologies and domains, working with others, and turning ideas into real projects that make an impact✨",
    },
    process: {
      title: "How I Work",
      subtitle: "My approach to every project, end to end.",
      steps: [
        {
          number: "01",
          title: "Diagnosis",
          text: "I dig into the real problem: which process is slow, manual, or doesn't scale, and why. For example, spotting that an SME managed all its stock and purchasing on paper.",
        },
        {
          number: "02",
          title: "Architecture Design",
          text: "I design the data model and solution architecture with scalability in mind from day one: what gets stored, how it relates, and how it will grow.",
        },
        {
          number: "03",
          title: "Implementation",
          text: "I take the design into production: development, testing, and refinement until the system works end-to-end, without losing sight of the end user.",
        },
        {
          number: "04",
          title: "Result & Impact",
          text: "I measure the real impact: time saved, errors eliminated, visibility gained. The goal isn't just that it works — it's that it solves the business problem.",
        },
      ],
    },
    resume: {
      title: "My Resume",
      download: "Download Resume",
      loading: "Loading resume...",
      error: "Couldn't load the resume.",
      file: "/cv-en.pdf",
    },
    contact: {
      title: "Shall we work together?",
      p1_pre: "I'm looking for new opportunities as a ",
      p1_role1: "Data Engineer",
      p1_mid: " or ",
      p1_role2: "Solutions Architect",
      p1_post: ", and also open to freelance development and automation projects.",
      p2: "If my profile fits what you're looking for, or you just want to talk about data, architecture, or a project, reach out — I'll get back to you shortly.",
      whatsapp: "WhatsApp",
      email: "Email",
      emailCopied: "Email copied!",
      linkedin: "LinkedIn",
      instagram: "Instagram",
    },
     projects: {
      heading: "Some of my work ...",
      items: {
        rv: {
          title: "RV Solutions Landing",
          description:
            "A 3-section landing page designed to introduce the company to visitors and build the trust needed to hire their services.",
        },
        tarot: {
          title: "Tarot Landing",
          description:
            "A landing page with complete information about all the services offered by the specialist. Includes a booking form and a direct redirect to WhatsApp.",
        },
        gamezone: {
          title: "Henry Game-Zone",
          description:
            "A video game e-commerce site with integrated payment methods, individual cards with descriptions and trailer videos, shopping cart, favorites, a customizable profile, and more!",
        },
        pokemons: {
          title: "Pokémons",
          description:
            "A web app where you can create your own Pokémon, assign it to a house, view its details, edit or delete it, filter results, and browse through every house.",
        },
      },
    },
  },
};

export default translations;