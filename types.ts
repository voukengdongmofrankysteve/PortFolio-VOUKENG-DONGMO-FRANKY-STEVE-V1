import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
  icon?: LucideIcon;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  tech: string[];
  imageUrl: string;
  link?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}