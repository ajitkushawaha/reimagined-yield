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
    "Codyn",
    "digital transformation",
    "business growth",
    "web design agency",
    "app development company",
    "digital solutions",
    "technology consulting",
    "startup development",
    "enterprise solutions",
    "full-stack development",
    "frontend development",
    "backend development",
    "cloud solutions",
    "DevOps",
    "API development",
    "database design",
    "performance optimization",
  ],
  authors: [{ name: "Codyn" }],
  creator: "Codyn",
  publisher: "Codyn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://codyn.in"),
  openGraph: {
    title: "Codyn - Transform Your Digital Presence",
    description:
      "Expert web development, mobile apps, UI/UX design, SEO optimization, and digital marketing services. Get a free consultation today!",
    url: "https://codyn.in",
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
  url: "https://codyn.in",
  logo: "https://codyn.in/logo.png",
  image: "https://codyn.in/og-image.jpg",
  description: "Transform your digital presence with Codyn. Expert web development, mobile apps, UI/UX design, SEO optimization, and digital marketing services.",
  slogan: "Transform Your Digital Presence",
  foundingDate: "2021",
  numberOfEmployees: "10-50",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9915174967",
    contactType: "customer service",
    availableLanguage: "en",
    email: "merajsaurabh0000@gmail.com",
    areaServed: "Worldwide"
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
  founders: [
    {
      "@type": "Person",
      name: "Saurabh Rajput",
      givenName: "Saurabh",
      familyName: "Rajput",
      jobTitle: "Founder & CEO",
      url: "https://www.linkedin.com/in/saurabh-rajput-9a1071245",
      description: "Visionary leader with 7+ years in digital transformation and business strategy. Saurabh founded Codyn with a mission to help businesses thrive in the digital age.",
      worksFor: {
        "@type": "Organization",
        name: "Codyn",
        url: "https://codyn.in"
      },
      knowsAbout: ["Strategic Planning", "Business Development", "Team Leadership", "Digital Transformation"],
      hasOccupation: {
        "@type": "Occupation",
        name: "CEO",
        description: "Chief Executive Officer of Codyn Digital Agency"
      }
    },
    {
      "@type": "Person", 
      name: "Ajit Kushwaha",
      givenName: "Ajit",
      familyName: "Kushwaha",
      jobTitle: "Co-Founder & CTO",
      url: "https://www.linkedin.com/in/ajitreact",
      description: "Full-stack architect specializing in scalable solutions and modern web technologies. Ajit leads our technical vision and ensures we deliver cutting-edge solutions.",
      worksFor: {
        "@type": "Organization",
        name: "Codyn",
        url: "https://codyn.in"
      },
      knowsAbout: ["Full-Stack Development", "Cloud Architecture", "DevOps", "React", "Next.js", "Node.js"],
      hasOccupation: {
        "@type": "Occupation",
        name: "CTO",
        description: "Chief Technology Officer of Codyn Digital Agency"
      }
    },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 28.4039,
      longitude: 77.8481,
    },
    geoRadius: "1000000",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Web Development",
    "Mobile App Development", 
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
    "Custom Software Development",
    "E-commerce Development",
    "Brand Identity Design",
    "React Development",
    "Next.js Development",
    "Full-Stack Development",
    "Cloud Solutions",
    "DevOps",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description: "Custom websites built with modern technologies for optimal performance and user experience",
        },
      },
      {
        "@type": "Offer", 
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description: "Native and cross-platform mobile applications that engage users and drive business growth",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", 
          name: "UI/UX Design",
          description: "User-centered design solutions that create intuitive and engaging digital experiences",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing", 
          description: "Data-driven marketing strategies to reach your target audience and maximize ROI",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Optimization",
          description: "Strategic SEO services to improve your search rankings and increase organic traffic",
        },
      },
    ],
  },
  potentialAction: [
    {
      "@type": "SearchAction",
      target: "https://codyn.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    {
      "@type": "ViewAction",
      target: "https://codyn.in/portfolio"
    },
    {
      "@type": "ContactAction",
      target: "https://codyn.in/contact"
    }
  ],
  mainEntityOfPage: "https://codyn.in",
  additionalType: "Digital Agency",
  keywords: "web development, mobile app development, digital marketing, SEO optimization, UI/UX design, custom software development, digital agency, website design, e-commerce development, brand identity, responsive web design, React development, Next.js development, digital transformation, business growth, web design agency, app development company, digital solutions, technology consulting, startup development, enterprise solutions, full-stack development, frontend development, backend development, cloud solutions, DevOps, API development, database design, performance optimization"
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Codyn",
          url: "https://codyn.in",
          description: "Transform your digital presence with Codyn. Expert web development, mobile apps, UI/UX design, SEO optimization, and digital marketing services.",
          publisher: {
            "@type": "Organization",
            name: "Codyn",
            url: "https://codyn.in"
          },
          potentialAction: {
            "@type": "SearchAction",
            target: "https://codyn.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          mainEntity: {
            "@type": "Organization",
            name: "Codyn",
            url: "https://codyn.in"
          }
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Saurabh Rajput",
          givenName: "Saurabh",
          familyName: "Rajput",
          jobTitle: "Founder & CEO",
          url: "https://www.linkedin.com/in/saurabh-rajput-9a1071245",
          description: "Visionary leader with 7+ years in digital transformation and business strategy. Saurabh founded Codyn with a mission to help businesses thrive in the digital age.",
          worksFor: {
            "@type": "Organization",
            name: "Codyn",
            url: "https://codyn.in"
          },
          knowsAbout: ["Strategic Planning", "Business Development", "Team Leadership", "Digital Transformation"],
          hasOccupation: {
            "@type": "Occupation",
            name: "CEO",
            description: "Chief Executive Officer of Codyn Digital Agency"
          },
          sameAs: ["https://www.linkedin.com/in/saurabh-rajput-9a1071245"]
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ajit Kushwaha",
          givenName: "Ajit",
          familyName: "Kushwaha",
          jobTitle: "Co-Founder & CTO",
          url: "https://www.linkedin.com/in/ajitreact",
          description: "Full-stack architect specializing in scalable solutions and modern web technologies. Ajit leads our technical vision and ensures we deliver cutting-edge solutions.",
          worksFor: {
            "@type": "Organization",
            name: "Codyn",
            url: "https://codyn.in"
          },
          knowsAbout: ["Full-Stack Development", "Cloud Architecture", "DevOps", "React", "Next.js", "Node.js"],
          hasOccupation: {
            "@type": "Occupation",
            name: "CTO",
            description: "Chief Technology Officer of Codyn Digital Agency"
          },
          sameAs: ["https://www.linkedin.com/in/ajitreact"]
        }) }} />
        <meta name="google-site-verification" content="vlMywJNLjoSxyvrk4OW3Sr3LRpl18Zsv-OuTfadq2LY" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
