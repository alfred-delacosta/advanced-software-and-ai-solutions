import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { business } from "@/data/business";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} | Custom Software, AI & Automation`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.url,
    siteName: business.name,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: business.name,
  url: business.url,
  email: business.email,
  description: business.description,
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: business.email,
    contactType: "sales",
    areaServed: "US",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
