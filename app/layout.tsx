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
    default: "Orithyn Inc. — Custom Software, Web & Mobile Applications",
    template: "%s | Orithyn Inc.",
  },
  description:
    "Orithyn Inc. is a professional software development company building custom digital solutions for businesses — including web and mobile applications, backend systems, business management platforms, and ongoing technical support.",
  keywords: [
    "Custom Software Development Company",
    "Web Application Development",
    "Mobile Application Development React Native",
    "Backend & REST API Development",
    "Business Management Systems",
    "School Management Software",
    "Hospital Management Software",
    "Hotel Booking Software",
    "Workflow Automation",
    "Software Maintenance and Support",
    "Orithyn Inc.",
  ],
  authors: [{ name: "Orithyn Inc.", url: "https://orithyn.com" }],
  creator: "Orithyn Inc.",
  publisher: "Orithyn Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Orithyn Inc. — Custom Software & Digital Solutions for Business",
    description:
      "Orithyn builds custom software, web applications, mobile apps, and business management systems tailored to organizational needs.",
    url: "https://orithyn.com",
    siteName: "Orithyn Inc.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Orithyn Inc. Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orithyn Inc. — Custom Software & Digital Solutions for Business",
    description: "Custom software development, web & mobile applications, backend systems, and technical support.",
    creator: "@orithyn",
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
      <body className="min-h-full flex flex-col bg-zinc-950 text-white selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
