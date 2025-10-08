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
    default: "Codyn - Premier Digital Agency | Web Development & Digital Marketing",
    template: "%s | Codyn",
  },
  description:
    "Transform your digital presence with Codyn. Expert web development, mobile apps, UI/UX design, SEO optimization, and digital marketing services. Get a free consultation today!",
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
  authors: [{ name: "Codyn" }],
  creator: "Codyn",
  publisher: "Codyn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://codyn.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Codyn - Transform Your Digital Presence",
    description:
      "Expert web development, mobile apps, UI/UX design, SEO optimization, and digital marketing services. Get a free consultation today!",
    url: "https://codyn.com",
    siteName: "Codyn",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Codyn - Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codyn - Transform Your Digital Presence",
    description: "Expert web development, mobile apps, UI/UX design, SEO optimization, and digital marketing services.",
    images: ["/twitter-image.jpg"],
    creator: "@codyn",
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
  name: "Codyn",
  alternateName: "Codyn Digital Agency",
  url: "https://codyn.com",
  logo: "https://codyn.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9915174967",
    contactType: "customer service",
    availableLanguage: "en",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bulandshahr",
    addressLocality: "Uttar Pradesh",
    addressRegion: "UP",
    postalCode: "203001",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/saurabh-rajput-9a1071245",
    "https://www.linkedin.com/in/ajitreact",
  ],
  foundingDate: "2019",
  founders: [
    {
      "@type": "Person",
      name: "Saurabh Rajput",
    },
    {
      "@type": "Person", 
      name: "Ajit Kushwaha",
    },
  ],
  numberOfEmployees: "10-50",
  slogan: "Transform Your Digital Presence",
  description:
    "Codyn is a premier digital agency specializing in web development, mobile app development, UI/UX design, SEO optimization, and digital marketing services.",
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
