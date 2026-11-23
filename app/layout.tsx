import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { personalInfo, siteUrl } from "@/config/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1d100e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.name} — ${personalInfo.role} | ${personalInfo.brandName}`,
    template: `%s | ${personalInfo.brandName}`,
  },
  description:
    "Portfolio of Muhammad Haris — Full-Stack Software Engineer and former Squad Lead at DevLogix Technology. Production web, mobile, and distributed systems built with Next.js, TypeScript, NestJS, PostgreSQL, React Native, and Python.",
  keywords: [
    "Muhammad Haris",
    "httpsharis",
    "HARIS.DEV",
    "Full-Stack Software Engineer",
    "Next.js Developer",
    "TypeScript Engineer",
    "NestJS Backend",
    "React Native Developer",
    "PostgreSQL Supabase RLS",
    "Software Engineer Portfolio Pakistan",
    "Lahore Software Engineer",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  creator: personalInfo.name,
  publisher: personalInfo.brandName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: personalInfo.brandName,
    title: `${personalInfo.name} — ${personalInfo.role}`,
    description:
      "Production Next.js, NestJS, React Native, PostgreSQL, and distributed Python systems engineered by Muhammad Haris.",
    images: [
      {
        url: "/projects/saldo-app.jpg",
        width: 1200,
        height: 675,
        alt: "Muhammad Haris — Full-Stack Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — ${personalInfo.role}`,
    description:
      "Shipping reliable web, mobile, and distributed systems — Next.js, TypeScript, NestJS, PostgreSQL, React Native, and Python.",
    images: ["/projects/saldo-app.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: personalInfo.name,
      alternateName: personalInfo.brandName,
      jobTitle: personalInfo.role,
      description: personalInfo.summary,
      url: siteUrl,
      email: `mailto:${personalInfo.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Minhaj University Lahore",
      },
      sameAs: [personalInfo.github, personalInfo.linkedin],
      knowsAbout: [
        "TypeScript",
        "Next.js",
        "React",
        "React Native",
        "NestJS",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Supabase",
        "MongoDB",
        "Redis",
        "Python",
        "FastAPI",
        "Docker",
        "WebSockets",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${personalInfo.name} — ${personalInfo.brandName}`,
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="antialiased bg-[#1d100e] text-[#F5F1EA] selection:bg-[#FF6B4A] selection:text-[#1d100e] editorial-grain"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="visually-hidden focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#FF6B4A] focus:text-[#1d100e] focus:font-mono-label focus:font-bold"
        >
          Skip to main content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <SmoothScrollProvider>
          <CursorGlow />
          <Nav />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
