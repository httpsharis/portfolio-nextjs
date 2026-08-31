import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work — Live Production Platforms & Applications",
  description:
    "Explore full-stack architectural case studies, custom business invoicing systems, e-commerce platforms, and client portals built by Muhammad Haris.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Selected Work — Full-Stack Projects | HARIS.DEV",
    description:
      "A curated directory of custom web systems, client platforms, and standalone applications built with React, Next.js, Node.js, and MongoDB.",
    url: "/projects",
    type: "website",
    images: [
      {
        url: "/projects/writely-laptop.png",
        width: 1200,
        height: 630,
        alt: "HARIS.DEV Selected Projects",
      },
    ],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
