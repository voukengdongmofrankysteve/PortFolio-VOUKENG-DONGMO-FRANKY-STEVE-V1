import { Project, Skill, Testimonial } from './types';
import { 
  Code2, 
  Palette, 
  Database, 
  Layout, 
  Smartphone, 
  Globe, 
  Server, 
  Terminal 
} from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Témoignages', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React & TypeScript', category: 'Frontend', icon: Code2 },
  { name: 'Tailwind CSS', category: 'Frontend', icon: Palette },
  { name: 'Node.js & Express', category: 'Backend', icon: Server },
  { name: 'Laravel / PHP', category: 'Backend', icon: Database },
  { name: 'UI/UX Design', category: 'Design', icon: Layout },
  { name: 'Mobile Dev (React Native)', category: 'Frontend', icon: Smartphone },
  { name: 'SEO & Performance', category: 'Tools', icon: Globe },
  { name: 'Git & DevOps', category: 'Tools', icon: Terminal },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Blog du Numérique",
    description: "Une plateforme d'actualités technologiques optimisée pour le SEO et la performance. Design épuré favorisant la lisibilité.",
    role: "Lead Developer & Designer",
    tech: ["WordPress", "Custom PHP", "Sass", "SEO"],
    imageUrl: "https://picsum.photos/id/1/800/600",
    link: "https://blogdunumerique.com"
  },
  {
    id: 2,
    title: "Izzoran E-Commerce",
    description: "Marketplace complète avec gestion de paniers complexes, paiements sécurisés et tableau de bord vendeur.",
    role: "Full Stack Developer",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "https://picsum.photos/id/2/800/600",
    link: "https://izzoran.com"
  },
  {
    id: 3,
    title: "AllCloneScript Dashboard",
    description: "Interface d'administration SaaS pour la gestion de scripts clones. Focus sur l'UX et la visualisation de données.",
    role: "Frontend Engineer",
    tech: ["Vue.js", "Tailwind CSS", "Chart.js"],
    imageUrl: "https://picsum.photos/id/3/800/600",
    link: "#"
  },
  {
    id: 4,
    title: "Bluehost Custom Theme",
    description: "Développement d'un thème sur mesure pour un hébergeur web, intégrant des animations interactives.",
    role: "Web Designer",
    tech: ["HTML5", "GSAP", "CSS3"],
    imageUrl: "https://picsum.photos/id/4/800/600",
    link: "#"
  },
  {
    id: 5,
    title: "SendPulse Integration",
    description: "Module d'automatisation marketing permettant de synchroniser les campagnes email et SMS via API.",
    role: "Backend Developer",
    tech: ["Python", "API REST", "Docker"],
    imageUrl: "https://picsum.photos/id/6/800/600",
    link: "#"
  },
  {
    id: 6,
    title: "Arc Portfolio",
    description: "Concept de portfolio minimaliste pour architectes, mettant en avant la photographie grand format.",
    role: "Creative Developer",
    tech: ["Next.js", "Framer Motion", "WebGL"],
    imageUrl: "https://picsum.photos/id/20/800/600",
    link: "#"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "CEO",
    company: "TechSolutions",
    content: "Franky a transformé notre vision en une réalité digitale époustouflante. Son attention aux détails est inégalée.",
    avatarUrl: "https://picsum.photos/id/64/100/100"
  },
  {
    id: 2,
    name: "Sarah Martin",
    role: "Marketing Director",
    company: "Creative Agency",
    content: "Une collaboration fluide et professionnelle. Le site est rapide, beau et convertit nos visiteurs.",
    avatarUrl: "https://picsum.photos/id/65/100/100"
  },
  {
    id: 3,
    name: "Thomas Dubois",
    role: "CTO",
    company: "StartUp Flow",
    content: "Une expertise technique rare combinée à un sens du design aiguisé. Le code est propre, maintenable et performant.",
    avatarUrl: "https://picsum.photos/id/68/100/100"
  }
];