export const SITE_CONFIG: SiteConfig = {
  title: "David Andrés Rodríguez Rozo - Estudiante de Ingeniería Mecatrónica",
  author: "David Andrés Rodríguez Rozo",
  description:
    "Estudiante de Ingeniería Mecatrónica de séptimo semestre en la prestigiosa Universidad Militar Nueva Granada (Cajicá, Colombia). Apasionado por sistemas embebidos, FPGA, robótica y automatización de procesos industriales.",
  lang: "es",
  siteLogo: "/profile.jpeg", // TODO: reemplaza por tu foto de perfil
  navLinks: [
    { text: "Proyectos", href: "/projects" },
    { text: "Sobre mí", href: "/about" },
    { text: "Contacto", href: "/contact" },
  ],
  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/david-andres-rodr%C3%ADguez-rozo-7932ab2b0/",
    },
    { text: "Github", href: "https://github.com/DavidRozo31" }, // TODO: pon tu usuario de GitHub
    { text: "Email", href: "mailto:drozo1234@gmail.com" },
  ],
  socialImage: "/zen-og.png", // TODO: imagen para previsualizaciones al compartir el link
  canonicalURL: "https://tu-portafolio.vercel.app", // TODO: actualiza cuando despliegues en Vercel
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "David Andrés Rodríguez Rozo",
    specialty: "Estudiante de Ingeniería Mecatrónica",
    summary:
      "Estudiante de séptimo semestre de Ingeniería Mecatrónica en la prestigiosa Universidad Militar Nueva Granada, con experiencia en sistemas embebidos, FPGA, robótica y automatización de procesos industriales.",
    email: "drozo1234@gmail.com",
  },
  experience: [
    {
      company: "Lazos de Amor Mariano",
      position: "Director Local",
      startDate: "2020",
      endDate: "Presente",
      summary: [
        "Desarrollo de charlas y manejo de público",
        "Liderazgo en misiones y apostolados",
        "Compromiso con los valores y virtudes cristianas",
      ],
    },
    {
      company: "Club Campestre Guaymaral",
      position: "Mesero",
      startDate: "Jun 2025",
      endDate: "Oct 2025",
      summary: [
        "Servicio y atención al cliente",
        "Transporte de alimentos y bebidas",
        "Manejo de personal",
      ],
    },
  ],
  projects: [
    {
      name: "Robot de plantación y monitoreo agrícola",
      summary:
        "Robot autónomo diseñado para plantacion de semillas y monitorear condiciones del suelo en tiempo real, utilizando sensores de humedad y temperatura, controlado por un microcontrolador ESP32.",
      linkPreview:
        "https://drive.google.com/file/d/1PcrWAWU-eXpfgAioCo8Ng0YORh4KCnQl/view",
      linkSource: "#", // TODO: agrega el link al repositorio si lo tienes
      images: ["/Robot_Semillas.jpeg"], // TODO: agrega una 2da imagen si tienes
    },
    {
      name: "Embarcación de Paletas con Control Remoto por Radiofrecuencia",
      summary:
        "Embarcación de paletas diseñada para propulsión en agua, controlada remotamente mediante radiofrecuencia.",
      linkPreview: "#", // TODO: link a video/demo si tienes
      linkSource: "#", // TODO: link al repositorio si tienes
      images: ["/Barco_Palas_Amigos.jpeg", "/Barco_Palas.jpeg"], // TODO: agrega tus 2 imágenes
    },
    {
      name: "Diseño y Construcción de un Viscosímetro",
      summary:
        "Diseño y construcción de un viscosímetro para medir la viscosidad de fluidos utilizando una stm32.",
      linkPreview: "#", // TODO: link a video/demo si tienes
      linkSource: "#", // TODO: link al repositorio si tienes
      images: ["/Poster_Amigos_Viscocimetro.jpeg", "/Viscosimetro.jpeg"], // TODO: agrega tus 2 imágenes
    },
  ],
  about: {
    description: `
      Soy David Andrés Rodríguez Rozo, estudiante de séptimo semestre de Ingeniería Mecatrónica en la Universidad Militar Nueva Granada, con sólida formación en diseño y automatización de procesos industriales.

      Me orienta el desarrollo de soluciones técnicas eficientes mediante la integración de sistemas mecánicos, electrónicos y de control. Tengo especial interés en la conectividad industrial y las tecnologías de automatización, y estoy comprometido con la excelencia operativa y el aprendizaje continuo.
    `,
    image: "/about_me.jpeg", // TODO: reemplaza por tu foto
  },
  skills: [
    "Python",
    "VHDL",
    "LaTeX",
    "C++",
  ],
  education: [
    {
      degree: "Bachiller",
      school: "Colegio Bilingüe Divino Niño",
      year: "2016 - 2020",
      location: "Bucaramanga, Santander",
    },
    {
      degree: "Ingeniería Mecatrónica",
      school: "Universidad EIA",
      year: "2021 - 2023",
      location: "Medellín, Antioquia",
      gpa: "4.0 / 5.0",
    },
    {
      degree: "Ingeniería en Mecatrónica",
      school: "Universidad Militar Nueva Granada",
      year: "2023 - Presente",
      location: "Cajicá, Cundinamarca",
      gpa: "4.3 / 5.0",
    },
    {
      degree: "Máster en IA & Data Science",
      school: "Dev Senior",
      year: "2025 - Presente",
      location: "Cajicá",
    },
  ],
  languages: [
    {
      name: "Español",
      level: "Nativo",
    },
    {
      name: "Inglés",
      level: "B2",
    },
  ],
};