import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Navbar from "./../components/shared/Navbar";
import "./globals.css";

const sans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mono = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Haris | Full Stack Developer",
  description: "Personal Portfolio Website",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
