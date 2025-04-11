import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sipu kumar - Developer, Freelancer & Problem Solver",
  description: "Full-Stack Developer, Freelancer, Content Creator, and Lifelong Learner. Passionate about building products and web apps that deliver exceptional user experiences.",
  keywords: ["developer", "full-stack", "freelancer", "react", "next.js", "portfolio"],
  authors: [
    {
      name: "Aayush Bharti Clone",
    },
  ],
  creator: "Aayush Bharti Clone",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aayushbharti.in/",
    title: "Aayush Bharti - Developer, Freelancer & Problem Solver",
    description: "Full-Stack Developer, Freelancer, Content Creator, and Lifelong Learner. Passionate about building products and web apps that deliver exceptional user experiences.",
    siteName: "Aayush Bharti",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Bharti - Developer, Freelancer & Problem Solver",
    description: "Full-Stack Developer, Freelancer, Content Creator, and Lifelong Learner. Passionate about building products and web apps that deliver exceptional user experiences.",
    creator: "@iaayushbharti",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
