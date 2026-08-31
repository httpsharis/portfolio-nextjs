export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectStory {
  problem: string;
  techChoices: string;
  hardestDecision: string;
  hindsight: string;
}

export interface ProjectItem {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  subtitle: string;
  desc: string;
  bullets: string[];
  tags: string[];
  image: string;
  gallery: string[];
  link: string;
  github?: string;
  isFeatured?: boolean;
  story: ProjectStory;
  challenges: ProjectChallenge[];
}

export interface TimelineEntry {
  type: "education" | "experience";
  role: string;
  organization: string;
  location: string;
  period: string;
  isOngoing?: boolean;
  desc: string;
  highlights: string[];
}

export const personalInfo = {
  name: "Muhammad Haris",
  brandName: "HARIS.DEV",
  role: "Senior Full-Stack Architect",
  location: "Lahore, Pakistan",
  phone: "+92 345 7371958",
  email: "itsharis.dev@gmail.com",
  github: "https://github.com/httpsharis",
  linkedin: "https://www.linkedin.com/in/devharis",
  statusText: "AVAILABLE FOR PROJECTS",
  summary:
    "I build, optimize, and maintain custom web applications for businesses that need things to just work. From database architecture to clean, fast UI.",
  aboutTitle: "Bridging logic and aesthetics.",
  aboutLong:
    "I believe great architecture is invisible. It powers intuitive experiences without getting in the way. Specializing in custom website development, speed optimization, and ongoing client maintenance.\n\nFrom designing clean relational and NoSQL data structures to crafting responsive, high-framerate interfaces in Next.js and React, I bridge business requirements with scalable code.",
};

export const timelineData: TimelineEntry[] = [
  {
    type: "experience",
    role: "Full-Stack Developer & Technical Consultant",
    organization: "Freelance / Self-Employed",
    location: "Lahore, Pakistan",
    period: "2024 – Present",
    isOngoing: true,
    desc: "Architecting custom production web platforms, automated invoicing engines, and high-performance business storefronts for clients.",
    highlights: [
      "Built custom business systems covering invoice generation, inventory tracking, and client billing.",
      "Engineered containerized Docker microservices and automated CI/CD deployment pipelines.",
      "Provided ongoing post-launch maintenance, security hardening, and performance speed optimizations.",
    ],
  },
  {
    type: "experience",
    role: "Frontend Developer Intern",
    organization: "DevelopersHub Corporation",
    location: "Lahore, Pakistan",
    period: "Mar 2025 – May 2025",
    desc: "Engineered responsive e-commerce web interfaces and established modular UI component libraries with React and Tailwind CSS.",
    highlights: [
      "Built interactive product catalogs and responsive checkout flows with React.js & Context API.",
      "Collaborated with backend teams to integrate RESTful endpoints and ensure sub-second UI interactions.",
    ],
  },
  {
    type: "education",
    role: "Bachelor of Science in Computer Science (BS CS)",
    organization: "Minhaj University Lahore",
    location: "Lahore, Pakistan",
    period: "Oct 2023 – Nov 2027 (Expected)",
    desc: "Core coursework covering Data Structures & Algorithms, Distributed Systems, Database Management Systems, and Software Engineering Principles.",
    highlights: [
      "Focused on systems programming, scalable web architecture, and full-stack software development.",
    ],
  },
];

export const coreStack = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Full-Stack" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Docker", category: "DevOps" },
  { name: "REST APIs", category: "Architecture" },
  { name: "Git", category: "Tooling" },
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    slug: "writely",
    title: "Writely",
    tagline: "Distraction-free manuscript editor & character studio.",
    subtitle: "Author's Writing Studio & Manuscript Engine (Live)",
    desc: "A distraction-free writing studio designed for long-form authors. Features hierarchical chapter management, character cast notes, real-time word counting, and auto-saving.",
    bullets: [
      "Designed and built a custom, responsive manuscript platform from scratch with intuitive chapter management and notes.",
      "Implemented authentication, private-first data models, and access-control safeguards for sensitive user drafts.",
      "Containerized the backend with Docker and established automated CI/CD deployment pipelines.",
      "Actively self-maintained on production with live performance monitoring and regular updates.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker", "Tailwind CSS"],
    image: "/projects/writely-laptop.png",
    gallery: ["/projects/writely-laptop.png", "/projects/writely.png"],
    link: "https://writely-rho.vercel.app/",
    github: "https://github.com/httpsharis",
    isFeatured: true,
    story: {
      problem:
        "Long-form authors and novel writers frequently deal with bloated word processors that lack chapter hierarchy, character context tracking, and responsive auto-save mechanics. Writing workflows require extreme focus without cluttered toolbars.",
      techChoices:
        "Selected React with Tailwind CSS for a dark, tactile, distraction-free editing interface, paired with Node.js/Express and MongoDB for fast JSON-document draft storage and Docker for reproducible containerized deployments.",
      hardestDecision:
        "Designing the real-time auto-saving mechanism. Decided on a debounced differential save algorithm that continuously syncs changes to localStorage while asynchronously persisting revisions to MongoDB without blocking user typing keystrokes.",
      hindsight:
        "With hindsight, I would adopt WebSockets for multi-device live sync and implement CRDTs (Conflict-Free Replicated Data Types) to allow seamless collaborative editing out of the box.",
    },
    challenges: [
      {
        title: "01 — Real-Time Word & Character Counting Engine",
        problem: "Recalculating word and page metrics on large manuscripts (50,000+ words) caused typing latency.",
        solution: "Engineered a lightweight tokenizer that runs in an isolated Web Worker, calculating live counts asynchronously with zero UI jank.",
      },
      {
        title: "02 — Auto-Save Without Data Loss",
        problem: "Network drops or abrupt browser closes risked losing unsaved author revisions.",
        solution: "Implemented dual-tier caching: instant indexedDB client persistence combined with an asynchronous debounced REST sync queue.",
      },
      {
        title: "03 — Private-First Draft Isolation",
        problem: "Ensuring sensitive unpublished fiction remains securely sandboxed per user account.",
        solution: "Configured JWT-signed sessions with granular MongoDB row-level query middleware ensuring strict multi-tenant isolation.",
      },
    ],
  },
  {
    id: 2,
    slug: "haseeb-traders",
    title: "Haseeb Traders",
    tagline: "Automated business invoicing & transaction ledger system.",
    subtitle: "Invoice & Billing Business Web Platform (Live)",
    desc: "Custom business web application featuring an automated billing system for fast invoice generation and transaction ledger tracking.",
    bullets: [
      "Designed and developed a custom business website with an automated billing system for invoice generation and product/transaction tracking.",
      "Designed a wizard-style, multi-step UI/UX flow to simplify invoice creation for a non-technical user base.",
      "Delivered and continue to maintain the site as an ongoing freelance engagement.",
    ],
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Cloudflare Workers", "REST APIs"],
    image: "/projects/haseeb-traders.jpg",
    gallery: ["/projects/haseeb-traders.jpg"],
    link: "https://haseebtraders.imharis021.workers.dev/",
    github: "https://github.com/httpsharis",
    isFeatured: true,
    story: {
      problem:
        "Traditional small business invoicing involved error-prone manual paper logs and slow spreadsheet billing, resulting in lost transaction records and delayed customer receipts.",
      techChoices:
        "Next.js App Router for server-rendered speed, MongoDB for dynamic product catalog schemas, and Cloudflare Workers for ultra-low latency edge hosting across regional networks.",
      hardestDecision:
        "Simplifying the checkout and invoice generation flow into an intuitive 3-step wizard that non-technical retail staff could master within minutes.",
      hindsight:
        "Would implement automated WhatsApp/SMS receipt dispatch via webhooks to eliminate paper receipt printing entirely.",
    },
    challenges: [
      {
        title: "01 — Dynamic Multi-Tier Tax & Discount Calculations",
        problem: "Varied product categories required customizable tax brackets and dynamic discount percentages.",
        solution: "Built a declarative pricing engine in TypeScript that computes line-item sub-totals and tax snapshots deterministically.",
      },
      {
        title: "02 — Instant PDF Receipt Generation",
        problem: "Generating printable customer invoices on low-spec client machines was slow and inconsistent.",
        solution: "Offloaded PDF rendering to a serverless worker generating optimized vector receipts in under 300ms.",
      },
    ],
  },
  {
    id: 3,
    slug: "mern-ecommerce",
    title: "MERN Stack E-commerce",
    tagline: "Scalable storefront architecture with analytics dashboard.",
    subtitle: "Full-Stack Storefront & Admin Dashboard",
    desc: "Comprehensive e-commerce application with product catalog, cart/checkout flow, user authentication, and real-time sales metrics dashboard.",
    bullets: [
      "Built a full-featured e-commerce platform with product filtering, dynamic cart management, and user profiles.",
      "Implemented secure JWT authentication with role-based access control (Admin/Customer).",
      "Created an admin dashboard with inventory controls and real-time sales analytics.",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    image: "/projects/mern-ecommerce.jpg",
    gallery: ["/projects/mern-ecommerce.jpg"],
    link: "https://ecom-mernstack-frontend.vercel.app/",
    github: "https://github.com/httpsharis",
    isFeatured: false,
    story: {
      problem:
        "Modern online merchants need high-speed storefront browsing combined with real-time backoffice inventory and sales metric controls.",
      techChoices:
        "Full MERN stack with Express REST endpoints, MongoDB aggregation pipelines for metrics, and React with Tailwind for responsive storefront interactions.",
      hardestDecision:
        "Architecting atomic stock deduction during simultaneous checkout attempts to avoid overselling limited inventory.",
      hindsight:
        "Would implement Redis caching layer for hot product lookups to support peak promotional traffic spikes.",
    },
    challenges: [
      {
        title: "01 — Inventory Race Condition Mitigation",
        problem: "Multiple users checking out the last remaining stock concurrently caused negative inventory counts.",
        solution: "Implemented MongoDB atomic `$inc` operators with conditional queries to guarantee zero overselling.",
      },
      {
        title: "02 — Role-Based Access Control (RBAC)",
        problem: "Protecting admin metrics and inventory endpoints from customer-level tokens.",
        solution: "Designed Express middleware verifying cryptographically signed JWT role claims with token revocation support.",
      },
    ],
  },
  {
    id: 4,
    slug: "mz-cooling-tower",
    title: "MZ Cooling Tower",
    tagline: "Industrial enterprise transformation & technical specification catalog.",
    subtitle: "Client Industrial Corporate Website",
    desc: "Custom corporate website for an industrial engineering company featuring structured product technical specifications and interactive inquiry forms.",
    bullets: [
      "Designed and developed a responsive corporate web portal showcasing industrial cooling towers and engineering specifications.",
      "Engineered structured technical spec tables and interactive quotation inquiry forms.",
      "Delivered performance speed optimizations achieving high PageSpeed scores.",
    ],
    tags: ["React.js", "Tailwind CSS", "UI/UX Design", "Performance"],
    image: "/projects/mz-cooling.jpg",
    gallery: ["/projects/mz-cooling.jpg"],
    link: "https://mz-cooling-web.vercel.app/",
    github: "https://github.com/httpsharis",
    isFeatured: false,
    story: {
      problem:
        "Industrial buyers were unable to easily find complex cooling tower engineering specs or request technical quotes on mobile devices.",
      techChoices:
        "React.js and Tailwind CSS with a clean, high-contrast industrial aesthetic and responsive technical data tables.",
      hardestDecision:
        "Transforming legacy PDF technical spec sheets into responsive, mobile-accessible comparison tables.",
      hindsight:
        "Would add an interactive 3D product visualizer for HVAC engineers to inspect cooling tower components in 360 degrees.",
    },
    challenges: [
      {
        title: "01 — Mobile-Responsive Complex Data Tables",
        problem: "Dense industrial engineering specifications broke on standard mobile screens.",
        solution: "Created collapsible spec accordions with freeze-column horizontal scroll for seamless mobile readability.",
      },
      {
        title: "02 — High-Performance Asset Optimization",
        problem: "Heavy industrial machinery photos slowed page load times on field mobile connections.",
        solution: "Optimized all media using WebP compression and responsive srcset loading, reducing page payload by 70%.",
      },
    ],
  },
];
