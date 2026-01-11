import { Home, User, Briefcase, Mail, Cpu } from 'lucide-react';

export const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Stack', href: '#stack', icon: Cpu },
    { name: 'Contact', href: '#contact', icon: Mail },
];

// @Info
export const certificateData = [
    {
        id: 1,
        title: "Pitman Certificate in English",
        issuer: "Pitman Qualifications",
        date: "", // Add date if available
        link: "#", // Add credential link if available
    },
];

export const educationData = [
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

export const expData = [
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