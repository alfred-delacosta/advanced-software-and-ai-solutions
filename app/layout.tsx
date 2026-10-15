import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/data/company";
import { contact } from "@/data/contact";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
});

const themeBootScript = `(function(){try{var k='asais-theme';var m=localStorage.getItem(k);var d=document.documentElement;if(m==='light'||m==='dark'){d.setAttribute('data-theme',m);d.style.colorScheme=m;}else{d.removeAttribute('data-theme');}}catch(e){}})();`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | 100% U.S. Based Custom Software & AI`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: company.url,
    siteName: company.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: company.name,
      },
      {
        url: "/og-light.png",
        width: 1200,
        height: 630,
        alt: company.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "US",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${company.url}/#organization`,
      name: company.name,
      alternateName: company.shortName,
      legalName: company.legalName,
      url: company.url,
      email: contact.email,
      description: company.description,
      slogan: company.trustLine,
      logo: `${company.url}/brand/tile-dark-512.png`,
      image: `${company.url}/brand/tile-dark-512.png`,
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      knowsAbout: [
        "Custom software development",
        "Artificial intelligence implementation",
        "Small business workflow optimization",
        "System integration",
        "API design and development",
        "ETL and data integration",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: contact.email,
        contactType: "sales",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${company.url}/#business`,
      name: company.legalName,
      url: company.url,
      image: `${company.url}/brand/tile-dark-512.png`,
      email: contact.email,
      description: company.description,
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      serviceType: [
        "Custom Software Development",
        "AI Implementation and Guidance",
        "Small Business Workflow Optimization",
        "Integration Services",
      ],
      parentOrganization: { "@id": `${company.url}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${company.url}/#website`,
      url: company.url,
      name: company.name,
      description: company.description,
      inLanguage: "en-US",
      publisher: { "@id": `${company.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <a href="#main-content" className="skipLink">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <main id="main-content" className="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
