export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
  skills: string[];
  education: EducationProps[];
  languages: LanguageProps[];
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  // Lista de imágenes del proyecto. Si solo hay 1, se muestra a tamaño completo.
  // Si hay 2, se muestran lado a lado en una galería.
  images: string[];
  technologies: string[];
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export interface EducationProps {
  degree: string;
  school: string;
  year: string;
  location: string;
  gpa?: string;
}

export interface LanguageProps {
  name: string;
  level: string;
}