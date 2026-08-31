import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "HARIS.DEV — Muhammad Haris | Senior Full-Stack Architect",
  description: "Muhammad Haris — Senior Full-Stack Architect building scalable digital foundations and robust web applications.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#1d100e] text-[#F5F1EA] selection:bg-[#FF6B4A] selection:text-[#1d100e]">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}



