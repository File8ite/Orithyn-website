import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import { getOrganizationJsonLd, getServicesJsonLd } from "@/lib/jsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orithyn.com"),
  title: {
    default: "Orythyn Inc. — Custom Web Apps, AI Products & Automation",
    template: "%s | Orythyn Inc.",
  },
  description:
    "Orythyn Inc. is a full-stack software engineering and AI studio partnering with ambitious companies to design, build, and scale custom web applications, AI assistants, and automated workflows.",
  keywords: [
    "Custom Software Development Studio",
    "Web Application Development Company",
    "AI Knowledge Assistant RAG",
    "Business Process Automation",
    "Next.js React Software Engineers",
    "Software Maintenance SLA",
    "Orythyn Inc.",
    "Orythyn Website",
  ],
  authors: [{ name: "Orythyn Inc.", url: "https://orithyn.com" }],
  creator: "Orythyn Inc.",
  publisher: "Orythyn Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Orythyn Inc. — Custom Web Apps, AI Products & Automation",
    description:
      "We partner with ambitious companies to engineer custom web platforms, enterprise AI assistants, and automated workflows built for high performance.",
    url: "https://orithyn.com",
    siteName: "Orythyn Inc.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Orythyn Inc. Custom Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orythyn Inc. — Custom Web Apps, AI Products & Automation",
    description: "Custom software engineering, AI knowledge assistants, and business workflow automation.",
    creator: "@orythyn",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationJsonLd();
  const serviceSchema = getServicesJsonLd();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <JsonLd data={orgSchema} />
        <JsonLd data={serviceSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
