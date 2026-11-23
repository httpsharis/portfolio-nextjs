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

export type ProjectCategory = "Full-Stack" | "Mobile & AI" | "Systems";

export interface ProjectItem {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  tagline: string;
  subtitle: string;
  desc: string;
  highlights: string[];
  bullets: string[];
  tags: string[];
  image: string;
  gallery: string[];
  link?: string;
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

export interface StackItem {
  name: string;
  category: string;
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://haris-dev-orcin.vercel.app";

export const personalInfo = {
  name: "Muhammad Haris",
  brandName: "HARIS.DEV",
  role: "Full-Stack Software Engineer",
  headlineTop: "Full-Stack Software Engineer.",
  headlineAccent: "Shipping reliable web, mobile & distributed systems.",
  location: "Lahore, Pakistan",
  phone: "+92 345 7371958",
  email: "itsharis.dev@gmail.com",
  github: "https://github.com/httpsharis",
  linkedin: "https://www.linkedin.com/in/devharis",
  resumeUrl: "/resume/Muhammad-Haris-Resume.pdf",
  eyebrow: "LAHORE, PK — AVAILABLE FOR SWE ROLES & INTERNSHIPS",
  summary:
    "CS undergraduate and former Squad Lead at DevLogix Technology. I engineer production software across Next.js, TypeScript, NestJS, PostgreSQL, React Native, and Python — focusing on data integrity, clean API boundaries, and fast interfaces.",
  aboutTitle: "Engineering rigor from database triggers to pixels.",
  aboutLong:
    "I care about software that holds up under real users and strict security boundaries. Whether enforcing append-only double-entry ledgers in PostgreSQL, leading a 4-developer squad on a 3-role accounting portal, or bridging raw Python TCP sockets to browser WebSockets, I build systems that stay predictable in production.",
};

export const timelineData: TimelineEntry[] = [
  {
    type: "experience",
    role: "Software Engineering Intern (Squad Lead)",
    organization: "DevLogix Technology",
    location: "Remote",
    period: "Aug 2026 – Oct 2026",
    desc: "Led a squad of 4 developers across a 12-week software engineering engagement, owning frontend architecture, API integrations, and sprint delivery.",
    highlights: [
      "Built the Next.js frontend and API integrations for Alboré Accountants (alboreaccountants.com), including a 3-role portal (/portal/admin, /portal/client, /portal/firm).",
      "Integrated role-restricted workflows against a NestJS, MongoDB, and custom authentication backend covering encrypted document exchange, structured requests, and scoped messaging.",
      "Temporarily supervised backend coordination and authored portal information architecture and wireframe specifications for the team.",
    ],
  },
  {
    type: "experience",
    role: "Frontend Developer Intern",
    organization: "DevelopersHub Corporation",
    location: "Lahore, Pakistan",
    period: "Mar 2025 – May 2025",
    desc: "Built responsive React 19 storefront interfaces with reusable component architecture and synchronized client state.",
    highlights: [
      "Implemented catalog search, grid/list view toggles, multi-filter tags, pagination, product details, and a saved-items cart in React 19 and Tailwind CSS.",
      "Wired product views to REST endpoints and reduced redundant re-renders across filter and cart updates using React Context API.",
    ],
  },
  {
    type: "education",
    role: "B.S. in Computer Science",
    organization: "Minhaj University",
    location: "Lahore, Pakistan",
    period: "Oct 2023 – Nov 2027 (Expected)",
    isOngoing: true,
    desc: "Focused on software architecture, database internals, and systems programming.",
    highlights: [
      "Relevant Coursework: Data Structures & Algorithms, Parallel & Distributed Computing, Database Systems, Operating Systems.",
      "Built production full-stack, mobile, and networked systems alongside academic coursework.",
    ],
  },
];

export const coreStack: StackItem[] = [
  { name: "TypeScript", category: "Language" },
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "NestJS", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Caching" },
  { name: "Docker", category: "DevOps" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "GitHub Actions", category: "CI/CD" },
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    slug: "saldo",
    title: "Saldo",
    category: "Mobile & AI",
    year: "2026",
    tagline: "Immutable double-entry personal finance & AI ledger mobile app.",
    subtitle: "React Native + PostgreSQL RLS + Gemini Agent",
    desc: "Personal finance and shared debt-splitting app that separates what you spent from what you actually owe. Account balances are mathematically derived from an append-only PostgreSQL ledger with strict per-tenant RLS and a safeguarded Gemini tool-calling assistant.",
    highlights: [
      "Append-only Postgres double-entry ledger with BEFORE UPDATE/DELETE immutability triggers",
      "Per-tenant RLS bound to Clerk JWT sub claims + 9 unit & SQL security test suites",
      "Bounded multi-step Gemini tool-calling agent with receipt OCR & confirmation gates",
    ],
    bullets: [
      "Built an append-only double-entry ledger in PostgreSQL where balances derive from immutable entries enforced by BEFORE UPDATE/DELETE triggers and revoked write grants.",
      "Enforced strict per-tenant Row-Level Security policies tied to Clerk JWT sub claims alongside atomic PL/pgSQL functions for transactions, group splits, and reversals.",
      "Implemented a bounded multi-step Gemini function-calling agent with receipt OCR, natural-language expense logging, offline local NLP fallback, and explicit confirmation prompts before destructive writes.",
      "Added 9 unit and SQL security test suites running in GitHub Actions CI (tsc --noEmit and bun test) with Expo EAS over-the-air updates.",
    ],
    tags: ["React Native", "TypeScript", "Supabase", "PostgreSQL", "Clerk", "Gemini API", "Bun"],
    image: "/projects/saldo-app.jpg",
    gallery: ["/projects/saldo-app.jpg"],
    github: "https://github.com/httpsharis/saldo",
    isFeatured: true,
    story: {
      problem:
        "Most expense trackers store balances as mutable integer columns that drift on edits, while split apps force every roommate or friend to register an account just to track shared bills.",
      techChoices:
        "Expo (React Native) with strict TypeScript, TanStack Query, Zustand, and Supabase PostgreSQL so financial invariants live in the database itself via PL/pgSQL triggers and Row-Level Security.",
      hardestDecision:
        "Enforcing strict append-only immutability on balance_entries — revoking UPDATE/DELETE grants and handling corrections solely through atomic reversal entries (reverse_transaction_atomic) rather than in-place row edits.",
      hindsight:
        "Adding automated end-to-end Maestro flows alongside the Bun unit and SQL security test suites would catch mobile navigation regressions even earlier.",
    },
    challenges: [
      {
        title: "01 — Ledger Integrity & Multi-Tenant Isolation",
        problem:
          "Permissive fallback policies or client-side balance arithmetic risk cross-tenant leaks and balance drift under concurrent edits.",
        solution:
          "Authored 8 SQL migrations enforcing strict Clerk JWT sub RLS policies, CHECK constraints for settlement modes, BEFORE UPDATE/DELETE immutability triggers, and dedicated SQL security tests.",
      },
      {
        title: "02 — Safe Autonomous AI Tool Calling",
        problem:
          "Letting an LLM mutate financial records directly without guardrails risks unintended deletions or runaway tool loops.",
        solution:
          "Built a bounded 4-step Gemini agent loop (agentLoop.ts) with modular tools, offline local NLP fallback when disconnected, and a pending_confirmation state requiring explicit user approval before destructive mutations.",
      },
    ],
  },
  {
    id: 2,
    slug: "albore-client-portal",
    title: "Alboré Accountants",
    category: "Full-Stack",
    year: "2026",
    tagline: "Multi-role accounting client portal & advisory web platform.",
    subtitle: "Squad Lead • Next.js + NestJS + MongoDB (Live)",
    desc: "Production web platform and 3-role client collaboration portal built while leading a 4-developer squad at DevLogix Technology. Isolates Admin, Relationship Manager (Firm), and Client workspaces with strict server-enforced RBAC.",
    highlights: [
      "Led 4 developers across Next.js frontend, API integrations & portal architecture",
      "3 isolated role portals: /portal/admin, /portal/firm (RM), and /portal/client",
      "NestJS + MongoDB + custom auth with immediate access revocation on reassignment",
    ],
    bullets: [
      "Led a squad of 4 developers at DevLogix Technology, running sprint task distribution, pull request reviews, and architecture alignment.",
      "Built the Next.js frontend and API integrations for the public platform (alboreaccountants.com) and 3-role portal separating Admin (/portal/admin), Client (/portal/client), and Employee/RM (/portal/firm) dashboards.",
      "Wired role-restricted workflows against a NestJS, MongoDB, and custom authentication backend supporting confidential document vaults, structured document requests, scoped internal messaging, and instant access revocation on client reassignment.",
      "Authored the portal information architecture and low-fidelity wireframe specifications and temporarily supervised backend coordination.",
    ],
    tags: ["Next.js", "TypeScript", "NestJS", "MongoDB", "Tailwind CSS", "REST APIs"],
    image: "/projects/albore-portal.svg",
    gallery: ["/projects/albore-portal.svg"],
    link: "https://www.alboreaccountants.com/",
    isFeatured: true,
    story: {
      problem:
        "Accounting and tax advisory practices exchange sensitive financial statements, audit workpapers, and VAT filings with international clients — email attachments create version chaos and compliance exposure.",
      techChoices:
        "Next.js for SEO-indexed public advisory pages and responsive role portals, backed by NestJS, MongoDB, and an in-house authentication system supporting Admin-only account provisioning and company-domain checks.",
      hardestDecision:
        "Designing the UI and API contracts around strict one-to-many Client-to-Relationship Manager boundaries so reassigning a client immediately revokes the previous employee's access while preserving soft-deleted audit records.",
      hindsight:
        "Introducing shared OpenAPI-generated TypeScript clients from NestJS Swagger definitions earlier would have cut frontend/backend contract churn in half.",
    },
    challenges: [
      {
        title: "01 — Strict Three-Role Portal Isolation",
        problem:
          "Admin, Relationship Manager, and Client personas share document and messaging concepts but must never cross-read unauthorized records via URL or ID tampering.",
        solution:
          "Mapped distinct portal route trees (/portal/admin, /portal/firm, /portal/client) with role-aware guards paired with server-enforced NestJS authorization checks.",
      },
      {
        title: "02 — Coordinating a 4-Developer Squad Under Tight Deadlines",
        problem:
          "Parallel frontend and backend tracks risked integration bottlenecks and inconsistent component patterns.",
        solution:
          "Authored clear IA and wireframe specs up front, broke milestones into atomic PRs, reviewed team code continuously, and stepped in to coordinate backend alignment directly.",
      },
    ],
  },
  {
    id: 3,
    slug: "writely",
    title: "Writely",
    category: "Full-Stack",
    year: "2026",
    tagline: "Decoupled novel-writing studio & world-building platform.",
    subtitle: "Next.js 16 + Tiptap + Express API + Docker (Live)",
    desc: "Modular writing workspace and world-building engine for fiction authors across two dedicated TypeScript repositories (125+ commits). Combines a ProseMirror/Tiptap rich-text editor with a hardened Express REST API and MongoDB analytics.",
    highlights: [
      "ProseMirror/Tiptap 3 editor with @character hover cards, slash commands & auto-save",
      "Express/TypeScript API with Zod, JIT Clerk sync, Cloudinary streaming & Sentry",
      "Recursive ProseMirror JSON-to-text exporter + 5-min cooldown MongoDB heatmaps",
    ],
    bullets: [
      "Built a decoupled ProseMirror/Tiptap 3 manuscript editor featuring @character mention hover cards, slash command menus, debounced auto-save, RTK Query caching, and Sentry telemetry.",
      "Engineered a feature-modular Express/TypeScript API with Zod payload validation, Clerk JWT verification with just-in-time MongoDB user sync, Cloudinary streaming uploads, and Helmet/rate-limit middleware.",
      "Wrote a recursive ProseMirror JSON-to-text manuscript exporter and MongoDB aggregation pipelines throttled by a 5-minute snapshot cooldown for writing heatmaps.",
      "Containerized web and API services with Docker Compose and configured GitHub Actions build and lint pipelines across both repos.",
    ],
    tags: ["Next.js", "TypeScript", "Redux Toolkit", "Tiptap", "Express", "MongoDB", "Docker", "Sentry"],
    image: "/projects/writely-laptop.png",
    gallery: ["/projects/writely-laptop.png", "/projects/writely.png"],
    link: "https://writely-rho.vercel.app/",
    github: "https://github.com/httpsharis/writely",
    isFeatured: true,
    story: {
      problem:
        "Fiction authors juggle manuscripts in one app, character sheets in another, and progress spreadsheets separately — breaking writing flow and fragmenting story references.",
      techChoices:
        "Decoupled Next.js 16 + Redux Toolkit (RTK Query) + Tiptap 3 frontend paired with a feature-encapsulated Express + TypeScript + MongoDB backend so future mobile clients share one typed API contract.",
      hardestDecision:
        "Preventing high-frequency auto-saves from flooding MongoDB writing-stat collections while keeping word-count streaks accurate — solved with a 5-minute cooldown check inside analyticsService.ts.",
      hindsight:
        "Moving both repositories into a Turborepo monorepo with shared Zod schemas would eliminate duplicated DTO types between frontend and backend.",
    },
    challenges: [
      {
        title: "01 — Structured Manuscript Export from ProseMirror Trees",
        problem:
          "Manuscripts are stored as nested Tiptap/ProseMirror JSON AST nodes rather than flat strings.",
        solution:
          "Implemented a recursive node traversal parser (exportService.ts) that extracts headings, paragraphs, and formatting cleanly across chapters, characters, and notes.",
      },
      {
        title: "02 — Defense-in-Depth API & Observability",
        problem:
          "Public author profiles and authenticated writing endpoints needed strong isolation, input validation, and production error visibility.",
        solution:
          "Layered Clerk Bearer JWT verification with JIT MongoDB sync, Zod schema middleware, Helmet, express-mongo-sanitize, rate limiting, and Sentry instrumentation.",
      },
    ],
  },
  {
    id: 4,
    slug: "pdc-chat-system",
    title: "Distributed Chat System",
    category: "Systems",
    year: "2026",
    tagline: "Multi-threaded raw TCP/UDP chat engine with FastAPI WebSocket bridge.",
    subtitle: "Python Sockets + Threading + AsyncIO + React",
    desc: "Hybrid multi-protocol real-time messaging architecture built from low-level Python networking primitives. Pairs a multi-threaded raw TCP server and UDP subnet broadcaster with an async FastAPI WebSocket bridge for browser clients.",
    highlights: [
      "Multi-threaded raw TCP server (SOCK_STREAM) with custom line protocol & room locks",
      "UDP subnet join/leave broadcasts (SOCK_DGRAM) + thread-safe SQLite 50-msg replay",
      "FastAPI asyncio WebSocket-to-TCP bridge serving React TypeScript UI + Rich CLI",
    ],
    bullets: [
      "Built a multi-threaded raw TCP server handling concurrent clients with a custom line protocol (CONNECT, JOIN, MSG, DM, /kick) and mutex-protected room routing.",
      "Added a dedicated UDP socket broadcaster (SOCK_DGRAM) for instant subnet-wide presence announcements.",
      "Persisted room chat history in thread-safe SQLite so newly joined users automatically replay the last 50 messages.",
      "Wired a FastAPI WebSocket-to-TCP bridge (asyncio.open_connection) enabling a React TypeScript web UI to interoperate seamlessly with the raw TCP engine alongside a dual-threaded CLI client.",
    ],
    tags: ["Python", "FastAPI", "WebSockets", "SQLite", "React", "TypeScript"],
    image: "/projects/pdc-chat.jpg",
    gallery: ["/projects/pdc-chat.jpg"],
    github: "https://github.com/httpsharis/pdc-chat-app",
    isFeatured: true,
    story: {
      problem:
        "High-level chat SDKs hide how concurrency, socket lifecycles, room locking, and protocol framing actually work under the hood.",
      techChoices:
        "Python standard-library socket, threading, and sqlite3 for the core engine (zero framework magic), bridged to modern browsers via FastAPI WebSockets and asyncio.open_connection.",
      hardestDecision:
        "Bridging blocking thread-per-client TCP sockets to an asynchronous FastAPI WebSocket event loop without deadlocks or dropped frames when clients disconnect abruptly.",
      hindsight:
        "Migrating the core TCP server from thread-per-client to an asyncio selector loop and implementing server-to-server pub/sub federation would raise concurrent socket limits dramatically.",
    },
    challenges: [
      {
        title: "01 — Thread-Safe Room State Under Concurrent Disconnects",
        problem:
          "Simultaneous JOIN, MSG, and abrupt socket drops could corrupt shared room membership maps.",
        solution:
          "Encapsulated all room mutations and fan-out broadcasts inside lock-protected RoomManager primitives with cleanup hooks on socket EOF.",
      },
      {
        title: "02 — Browser Interoperability Over Raw TCP",
        problem:
          "Browsers cannot open raw TCP sockets directly to port 5000.",
        solution:
          "Created a FastAPI WebSocket bridge (/ws/{username}) that opens an async TCP connection per browser session, performs the CONNECT handshake, and multiplexes frames bidirectionally.",
      },
    ],
  },
  {
    id: 5,
    slug: "haseeb-traders",
    title: "Haseeb Traders",
    category: "Full-Stack",
    year: "2026",
    tagline: "Production billing & multi-tax invoicing platform for a contracting firm.",
    subtitle: "Next.js 16 + MongoDB + decimal.js + React-PDF (Live)",
    desc: "Live billing and invoicing platform delivered and maintained for a contracting business. Features master-detail client summaries, arbitrary-precision decimal arithmetic, configurable tax rules, and dynamic PDF invoice rendering.",
    highlights: [
      "Arbitrary-precision decimal.js math engine preventing floating-point rounding drift",
      "Dynamic print-ready PDF invoices (@react-pdf/renderer) + Google OAuth",
      "IP token-bucket API rate limiting + GitHub Actions pre-flight build check",
    ],
    bullets: [
      "Delivered and maintain a live billing platform featuring master-detail client summaries, auto-numbered bills, cascading deletes, and client-side draft recovery.",
      "Used decimal.js across all line-item subtotal and configurable tax-rule calculations to eliminate floating-point rounding drift across multi-item invoices.",
      "Built dynamic print-ready PDF invoice rendering (@react-pdf/renderer), Google OAuth route protection (NextAuth), IP token-bucket rate limiting, and GitHub Actions CI checks.",
    ],
    tags: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Tailwind CSS"],
    image: "/projects/haseeb-traders.jpg",
    gallery: ["/projects/haseeb-traders.jpg"],
    link: "https://haseeb-traders.vercel.app/",
    github: "https://github.com/httpsharis/haseeb-traders",
    isFeatured: false,
    story: {
      problem:
        "Manual paper logs and spreadsheets caused calculation errors across varying tax categories and delayed printable invoice generation for business clients.",
      techChoices:
        "Next.js 16 App Router with TypeScript service modules, MongoDB/Mongoose for master-detail summaries and bills, NextAuth Google OAuth, decimal.js for exact financial math, and @react-pdf/renderer for consistent print output.",
      hardestDecision:
        "Modeling cascading summary-to-bill relationships and replacing JavaScript IEEE-754 numbers with decimal.js across the full pricing pipeline so multi-tax totals never drift by a cent.",
      hindsight:
        "Replacing the in-memory IP token-bucket rate limiter with a Redis-backed Upstash limiter would support multi-instance horizontal scaling out of the box.",
    },
    challenges: [
      {
        title: "01 — Exact Multi-Tax Financial Arithmetic",
        problem:
          "Standard JavaScript floating-point math produces penny rounding discrepancies on multi-item invoices with compound tax categories.",
        solution:
          "Centralized all subtotal, tax, and summary calculations inside billService.ts using decimal.js arbitrary-precision decimals.",
      },
      {
        title: "02 — Multi-Step Invoice Wizard with Draft Recovery",
        problem:
          "Non-technical staff frequently paused mid-invoice while verifying line items with suppliers.",
        solution:
          "Designed a 3-step guided bill wizard (Client -> Line Items -> Review & PDF) backed by draft recovery hooks and clean validation.",
      },
    ],
  },
];
