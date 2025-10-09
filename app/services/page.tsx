import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import ServicesPage from "./services-page"

export const metadata: Metadata = {
  title: "Digital Services - Web Development, SEO & Marketing | Codyn",
  description:
    "Comprehensive digital services including web development, mobile apps, UI/UX design, SEO optimization, and digital marketing. Transform your business with our expert solutions by Saurabh Rajput & Ajit Kushwaha.",
  keywords: [
    "digital services",
    "web development",
    "mobile app development",
    "SEO services",
    "digital marketing",
    "UI/UX design",
    "custom software development",
    "e-commerce development",
    "React development",
    "Next.js development",
    "full-stack development",
    "cloud solutions",
    "DevOps",
    "Codyn services",
    "digital transformation",
    "business growth"
  ],
  openGraph: {
    title: "Professional Digital Services | Codyn Digital Agency",
    description:
      "Expert web development, mobile apps, SEO optimization, and digital marketing services to grow your business online. Led by Saurabh Rajput (CEO) and Ajit Kushwaha (CTO).",
    url: "https://codyn.in/services",
    images: [
      {
        url: "https://codyn.in/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Codyn Digital Services - Web Development, SEO, Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Digital Services | Codyn Digital Agency",
    description: "Expert web development, mobile apps, SEO optimization, and digital marketing services to grow your business online.",
    images: ["https://codyn.in/twitter-services.jpg"],
  },
  alternates: {
    canonical: "https://codyn.in/services",
  },
}

export default function Services() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Services by Codyn",
    description: "Comprehensive digital services including web development, mobile apps, UI/UX design, SEO optimization, and digital marketing. Transform your business with our expert solutions.",
    url: "https://codyn.in/services",
    provider: {
      "@type": "Organization",
      name: "Codyn",
      url: "https://codyn.in",
      founders: [
        {
          "@type": "Person",
          name: "Saurabh Rajput",
          jobTitle: "Founder & CEO"
        },
        {
          "@type": "Person",
          name: "Ajit Kushwaha",
          jobTitle: "Co-Founder & CTO"
        }
      ]
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom websites built with modern technologies for optimal performance and user experience"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "Native and cross-platform mobile applications that engage users and drive business growth"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description: "User-centered design solutions that create intuitive and engaging digital experiences"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing",
            description: "Data-driven marketing strategies to reach your target audience and maximize ROI"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization",
            description: "Strategic SEO services to improve your search rankings and increase organic traffic"
          }
        }
      ]
    },
    areaServed: "Worldwide",
    serviceType: "Digital Agency Services"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <PageLayout>
        <ServicesPage />
      </PageLayout>
    </>
  )
}
