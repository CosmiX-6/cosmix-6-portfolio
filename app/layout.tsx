import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, personSchema } from "@/components/shared/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://akashsharma.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Akash Sharma — Revenue AI Engineer",
    template: "%s | Akash Sharma",
  },
  description:
    "Data Scientist and AI Engineer with 4+ years building production ML systems for B2B SaaS GTM revenue teams. Expert in pipeline forecasting, marketing mix modeling, and multi-touch attribution.",
  keywords: [
    "Revenue AI Engineer",
    "Data Scientist",
    "ML Engineer",
    "Pipeline Forecasting",
    "Marketing Mix Modeling",
    "XGBoost",
    "SHAP Explainability",
    "B2B SaaS",
    "GTM Analytics",
    "Multi-Touch Attribution",
    "PySpark",
    "BigQuery",
  ],
  authors: [{ name: "Akash Sharma", url: baseUrl }],
  creator: "Akash Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Akash Sharma — Revenue AI Engineer",
    title: "Akash Sharma — Revenue AI Engineer",
    description:
      "Building production ML systems for B2B SaaS GTM teams — pipeline forecasting, marketing attribution, and revenue intelligence.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Akash Sharma" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Sharma — Revenue AI Engineer",
    description:
      "4+ years building production ML systems for B2B SaaS revenue teams.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: baseUrl },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <JsonLd data={personSchema} />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
