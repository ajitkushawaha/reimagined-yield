import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import ContactPage from "./contact-page"

export const metadata: Metadata = {
  title: "Contact Us - Get Free Consultation | Codyn Digital Agency",
  description:
    "Ready to transform your digital presence? Contact Codyn for a free consultation with Saurabh Rajput (CEO) and Ajit Kushwaha (CTO). Call +91-9915174967 or email merajsaurabh0000@gmail.com",
  keywords: [
    "contact", 
    "free consultation", 
    "digital agency contact", 
    "web development quote", 
    "get in touch",
    "Saurabh Rajput contact",
    "Ajit Kushwaha contact",
    "Codyn contact",
    "digital transformation consultation",
    "business consultation",
    "project inquiry",
    "technical consultation"
  ],
  openGraph: {
    title: "Contact Codyn Digital Agency - Free Consultation",
    description:
      "Get in touch with our expert team led by Saurabh Rajput (CEO) and Ajit Kushwaha (CTO) for a free consultation on your digital project. We're here to help transform your business.",
    url: "https://codyn.in/contact",
    images: [
      {
        url: "https://codyn.in/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Codyn - Free Digital Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Codyn Digital Agency - Free Consultation",
    description: "Get in touch with our expert team for a free consultation on your digital project. We're here to help transform your business.",
    images: ["https://codyn.in/twitter-contact.jpg"],
  },
  alternates: {
    canonical: "https://codyn.in/contact",
  },
}

export default function Contact() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Codyn Digital Agency",
    description: "Get in touch with our expert team led by Saurabh Rajput (CEO) and Ajit Kushwaha (CTO) for a free consultation on your digital project.",
    url: "https://codyn.in/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Codyn",
      alternateName: "Codyn Digital Agency",
      url: "https://codyn.in",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9915174967",
          contactType: "customer service",
          availableLanguage: "en",
          email: "merajsaurabh0000@gmail.com",
          areaServed: "Worldwide"
        }
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bulandshahr",
        addressLocality: "Uttar Pradesh",
        addressRegion: "UP",
        postalCode: "203001",
        addressCountry: "IN"
      },
      founders: [
        {
          "@type": "Person",
          name: "Saurabh Rajput",
          jobTitle: "Founder & CEO",
          url: "https://www.linkedin.com/in/saurabh-rajput-9a1071245"
        },
        {
          "@type": "Person",
          name: "Ajit Kushwaha",
          jobTitle: "Co-Founder & CTO",
          url: "https://www.linkedin.com/in/ajitreact"
        }
      ]
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <PageLayout>
        <ContactPage />
      </PageLayout>
    </>
  )
}
