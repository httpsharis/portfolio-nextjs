import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Navbar from "./../components/shared/Navbar";
import "./globals.css";
import Footer from "./../components/shared/Footer";
import { ThemeProvider } from "@/providers/theme-provider";

const sans = Inter({
  variable: "--font-inter",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-white dark:bg-black text-neutral-900 dark:text-white ${sans.variable} ${mono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
