import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { personalInfo } from "@/config/site-config";

export const viewport: Viewport = {
  themeColor: "#1d100e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://itsharis.dev"),
  title: {
    default: "Muhammad Haris — Senior Full-Stack Architect | HARIS.DEV",
    template: "%s | HARIS.DEV",
  },
  description:
    "Portfolio of Muhammad Haris (HARIS.DEV) — Senior Full-Stack Developer specializing in custom Next.js, React, Node.js, Express, and MongoDB web platforms, speed optimization, and production maintenance.",
  keywords: [
    "Muhammad Haris",
    "HARIS.DEV",
    "Full-Stack Developer",
    "Next.js Architect",
    "React Developer",
    "Node.js Backend",
    "MongoDB Database",
    "Custom Web Applications",
    "Lahore Pakistan Web Developer",
    "Software Engineer Portfolio",
    "Performance Speed Optimization",
  ],
  authors: [{ name: "Muhammad Haris", url: "https://github.com/httpsharis" }],
  creator: "Muhammad Haris",
  publisher: "HARIS.DEV",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itsharis.dev",
    siteName: "HARIS.DEV",
    title: "Muhammad Haris — Senior Full-Stack Architect",
    description:
      "Custom production web platforms, automated invoicing engines, and high-performance digital systems.",
    images: [
      {
        url: "/projects/writely-laptop.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Haris — Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Haris — Senior Full-Stack Architect",
    description:
      "Building scalable digital foundations and custom production web applications.",
    images: ["/projects/writely-laptop.png"],
    creator: "@devharis",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Haris",
  alternateName: "HARIS.DEV",
  jobTitle: "Senior Full-Stack Architect",
  description:
    "Full-stack developer specializing in custom website development, performance optimization, and production maintenance.",
  url: "https://itsharis.dev",
  email: personalInfo.email,
  telephone: personalInfo.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    personalInfo.github,
    personalInfo.linkedin,
  ],
  knowsAbout: [
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "TypeScript",
    "Tailwind CSS",
    "REST APIs",
    "Web Performance Optimization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased bg-[#1d100e] text-[#F5F1EA] selection:bg-[#FF6B4A] selection:text-[#1d100e]"
        suppressHydrationWarning
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}



