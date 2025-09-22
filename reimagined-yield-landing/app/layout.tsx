import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Reimagined Yield Technology - Premier Digital Agency | Web Development & Digital Marketing",
    template: "%s | Reimagined Yield Technology",
  },
  description:
    "Transform your digital presence with Reimagined Yield Technology. Expert web development, mobile apps, UI/UX design, SEO optimization, and digital marketing services. Get a free consultation today!",
  keywords: [
    "web development",
    "mobile app development",
    "digital marketing",
    "SEO optimization",
    "UI/UX design",
    "custom software development",
    "digital agency",
    "website design",
    "e-commerce development",
    "brand identity",
    "responsive web design",
    "React development",
    "Next.js development",
  ],
  authors: [{ name: "Reimagined Yield Technology" }],
  creator: "Reimagined Yield Technology",
  publisher: "Reimagined Yield Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://reimaginedyield.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Reimagined Yield Technology - Transform Your Digital Presence",
    description:
      "Expert web development, mobile apps, UI/UX design, SEO optimization, and digital marketing services. Get a free consultation today!",
    url: "https://reimaginedyield.com",
    siteName: "Reimagined Yield Technology",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reimagined Yield Technology - Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reimagined Yield Technology - Transform Your Digital Presence",
    description: "Expert web development, mobile apps, UI/UX design, SEO optimization, and digital marketing services.",
    images: ["/twitter-image.jpg"],
    creator: "@reimaginedyield",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.app'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Reimagined Yield Technology",
  alternateName: "RY Technology",
  url: "https://reimaginedyield.com",
  logo: "https://reimaginedyield.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "customer service",
    availableLanguage: "en",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Innovation Street",
    addressLocality: "Tech City",
    addressRegion: "TC",
    postalCode: "12345",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/reimaginedyield",
    "https://www.twitter.com/reimaginedyield",
    "https://www.linkedin.com/company/reimaginedyield",
    "https://www.instagram.com/reimaginedyield",
  ],
  foundingDate: "2019",
  founders: [
    {
      "@type": "Person",
      name: "Founder Name",
    },
  ],
  numberOfEmployees: "10-50",
  slogan: "Transform Your Digital Presence",
  description:
    "Reimagined Yield Technology is a premier digital agency specializing in web development, mobile app development, UI/UX design, SEO optimization, and digital marketing services.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
