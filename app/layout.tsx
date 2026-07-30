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
  title: {
    default: "Orythyn Inc. — Software Engineering & Digital Product Development",
    template: "%s | Orythyn Inc.",
  },
  description:
    "Orythyn Inc. is a software engineering company partnering with SMEs, startups, schools, and NGOs to design, build, and scale custom web applications and AI solutions.",
  keywords: [
    "Software Engineering Company",
    "Custom Software Development",
    "Web Application Development",
    "Business Automation",
    "Orythyn Inc.",
  ],
  authors: [{ name: "Orythyn Inc." }],
  openGraph: {
    title: "Orythyn Inc. — Engineering Digital Products That Drive Growth",
    description:
      "We partner with ambitious organizations to build custom software, web applications, and AI integrations.",
    url: "https://orithyn.com",
    siteName: "Orythyn Inc.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
