import { User, Briefcase, Mail, Cpu, LucideIcon } from 'lucide-react';
import {
    Database,
    Layout,
    BrainCircuit,
    Settings
} from "lucide-react";

export const navigation = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Stack', href: '#stack', icon: Cpu },
    { name: 'Contact', href: '#contact', icon: Mail },
];

// @Info

export interface certificateData {
    id: number;
    title: string;
    issuer: string;
    date: string;
    link: string;
}

export const certificateData: certificateData[] = [
    {
        id: 1,
        title: "Pitman Certificate in English",
        issuer: "Pitman Qualifications",
        date: "", // Add date if available
        link: "#", // Add credential link if available
    },
];

export interface educationData {
    id: number;
    degree: string;
    institution: string;
    duration: string;
}

export const educationData: educationData[] = [
    {
        id: 1,
        degree: "Bachelor's in Computer Science",
        institution: "Minhaj University, Lahore",
        duration: "2023 - 2027 (Expected)",
    },
    {
        id: 2,
        degree: "FSC Pre-Medical",
        institution: "Superior Group of Colleges, Khanewal",
        duration: "2020 - 2022",
    },
];

export interface expData {
    id: number;
    title: string;
    company: string;
    location: string
    duration: string;
    duties: string[];
}

export const expData: expData[] = [
    {
        id: 1,
        title: "Freelance Web Developer",
        company: "MZ Cooling Tower",
        location: "Remote",
        duration: "Nov 2025 – Dec 2025",
        duties: [
            "Modernized brand identity via a responsive UI/UX website redesign.",
            "Built a pixel-perfect web app using React.js and Tailwind CSS.",
            "Enhanced SEO and performance to maximize site speed.",
            "Led end-to-end development, from concept to launch."
        ],
    },
    {
        id: 2,
        title: "Frontend Developer Intern",
        company: "Developershub.co",
        location: "Lahore, Pakistan",
        duration: "March 2025 - May 2025",
        duties: [
            "Developed responsive web applications using React.js and Tailwind CSS.",
            "Built reusable components and implemented modern UI/UX designs.",
            "Collaborated with cross-functional teams to deliver pixel-perfect frontend solutions.",
            "Optimized application performance and ensured cross-browser compatibility.",
        ],
    },
]

export interface projects {
    id: number;
    title: string;
    desc: string;
    tags: string[];
    link: string;
}

export const projects: projects[] = [
    {
        id: 1,
        title: "MZ Cooling Towers Website",
        desc: "A modern, responsive corporate website for MZ Cooling Tower showcasing products, services, and company information.",
        tags: ["React.js", "Tailwind CSS", "Node.js", "React-Router", "Frontend"],
        link: "https://mz-cooling-web.vercel.app/"
    },
    {
        id: 2,
        title: "MERN Stack E-commerce",
        desc: "MERN-stack e-commerce application (MongoDB, Express, React, Node) with product browsing, user authentication, shopping cart and checkout. Includes an admin dashboard for managing products and orders.",
        tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express", "React-Router", "Backend", "Frontend"],
        link: "https://ecom-mernstack-frontend.vercel.app/"
    },
    {
        id: 3,
        title: "E-commerce Website Frontend",
        desc: "Responsive interface with product filtering, shopping cart, and user auth UI. Optimized for mobile.",
        tags: ["React.js", "Tailwind CSS", "React-Router"],
        link: "https://ecommerce-fontend-design.vercel.app/"
    },
    {
        id: 4,
        title: "Portfolio Website",
        desc: "Responsive portfolio with smooth animations and EmailJS integration for contact forms.",
        tags: ["React.js", "Email.JS"],
        link: "#"
    },
    {
        id: 5,
        title: "Gym Business Website",
        desc: "Service showcase with membership plans and interactive features.",
        tags: ["React.js", "Framer Motion"],
        link: "https://ecommerce-fontend-design.vercel.app/"
    },
    {
        id: 6,
        title: "Calculator Application",
        desc: "Functional calculator with mathematical operations and error handling.",
        tags: ["JavaScript", "HTML5", "CSS3"],
        link: "https://httpsharis.github.io/My-Calculator/"
    }
];

export interface Skill {
    name: string;
    icon: string; // This can be a path to an SVG or a classname
    level?: string; // Optional: "Advanced", "Intermediate", "Learning"
}

export interface SkillCategory {
    title: string;
    icon: LucideIcon; // Lucide icon component
    skills: Skill[];
}

export const skillsData: SkillCategory[] = [
    {
        title: "Frontend Development",
        icon: Layout,
        skills: [
            { name: "React.js", icon: "react", level: "Advanced" },
            { name: "Next.js 14", icon: "nextjs", level: "Intermediate" },
            { name: "TypeScript", icon: "typescript", level: "Intermediate" },
            { name: "Redux Toolkit", icon: "redux", level: "Advanced" },
            { name: "Tailwind CSS", icon: "tailwind", level: "Advanced" },
            { name: "Framer Motion", icon: "framer", level: "Intermediate" },
        ],
    },
    {
        title: "Backend & Database",
        icon: Database,
        skills: [
            { name: "Node.js", icon: "nodejs", level: "Advanced" },
            { name: "Express.js", icon: "express", level: "Advanced" },
            { name: "MongoDB", icon: "mongodb", level: "Advanced" },
            { name: "Mongoose ODM", icon: "mongoose", level: "Advanced" },
            { name: "REST APIs", icon: "api", level: "Advanced" },
        ],
    },
    {
        title: "AI & Machine Learning",
        icon: BrainCircuit,
        skills: [
            { name: "Python", icon: "python", level: "Intermediate" },
            { name: "Scikit-Learn", icon: "scikit", level: "Beginner" },
            { name: "Pandas/NumPy", icon: "pandas", level: "Beginner" },
            { name: "KNN & Algorithms", icon: "algo", level: "Theoretical" },
        ],
    },
    {
        title: "Tools & DevOps",
        icon: Settings,
        skills: [
            { name: "Git & GitHub", icon: "git", level: "Advanced" },
            { name: "Postman", icon: "postman", level: "Advanced" },
            { name: "Vercel", icon: "vercel", level: "Intermediate" },
            { name: "VS Code", icon: "vscode", level: "Advanced" },
        ],
    },
];