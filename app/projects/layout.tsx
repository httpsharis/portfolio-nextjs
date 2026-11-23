import type { Metadata } from "next";
import { personalInfo } from "@/config/site-config";

export const metadata: Metadata = {
  title: "Selected Work — Engineering Case Studies",
  description:
    "Explore full-stack, mobile, AI, and distributed systems case studies built by Muhammad Haris — including Saldo, Alboré Accountants Client Portal, Writely, Distributed Chat System, and Haseeb Traders.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Selected Work — Case Studies | ${personalInfo.brandName}`,
    description:
      "Production platforms, PostgreSQL double-entry ledgers, multi-role B2B portals, and networked Python systems by Muhammad Haris.",
    url: "/projects",
    type: "website",
    images: [
      {
        url: "/projects/saldo-app.jpg",
        width: 1200,
        height: 675,
        alt: "Muhammad Haris — Selected Engineering Case Studies",
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
