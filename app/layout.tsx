import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, personSchema } from "@/components/shared/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://akashlabs.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Akash Sharma — AI Engineer",
    template: "%s | Akash Sharma",
  },
  description:
    "AI Engineer with 4+ years building production ML systems — forecasting pipelines, attribution models, statistical experimentation, and ML infrastructure at scale.",
  keywords: [
    "AI Engineer",
    "Data Scientist",
    "ML Engineer",
    "Time-Series Forecasting",
    "Marketing Mix Modeling",
    "XGBoost",
    "SHAP Explainability",
    "Machine Learning",
    "Multi-Touch Attribution",
    "PySpark",
    "BigQuery",
    "Applied ML",
  ],
  authors: [{ name: "Akash Sharma", url: baseUrl }],
  creator: "Akash Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Akash Sharma — AI Engineer",
    title: "Akash Sharma — AI Engineer",
    description:
      "AI Engineer building production ML systems — forecasting pipelines, attribution models, and decision intelligence at scale.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Akash Sharma" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Sharma — AI Engineer",
    description:
      "4+ years shipping production AI systems — forecasting, attribution, and ML infrastructure at scale.",
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
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <JsonLd data={personSchema} />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
