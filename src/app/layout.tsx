import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fikret Kaan Karazeytin — Software Developer & Builder",
  description:
    "A young developer focused on learning fast, building real projects, and shipping modern web experiences. Portfolio showcasing BulkTrack, Habit Tracker, Pomodoro Timer, and more.",
  keywords: [
    "software developer",
    "portfolio",
    "React",
    "Next.js",
    "frontend developer",
    "web developer",
  ],
  authors: [{ name: "Fikret Kaan Karazeytin" }],
  openGraph: {
    title: "Fikret Kaan Karazeytin — Software Developer & Builder",
    description:
      "Building real projects, shipping modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="grid-bg" />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
