import { LucideIcon } from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface PersonalInfo {
  name: string;
  brandName: string;
  role: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  availableForWork: boolean;
  statusText: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  bullets?: string[];
  tags: string[];
  image?: string;
  link: string;
  github?: string;
  isFeatured?: boolean;
}

export interface ExpItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  duties: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
}

export interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  date?: string;
  link?: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
}
