import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import AboutPage from "./about-page"

export const metadata: Metadata = {
  title: "About Us - Meet Saurabh Rajput & Ajit Kushwaha | Codyn Digital Agency",
  description:
    "Meet the founders of Codyn: Saurabh Rajput (CEO) and Ajit Kushwaha (CTO). Learn about our mission, values, and the experienced team that transforms businesses through innovative digital solutions.",
  keywords: [
    "about us", 
    "Saurabh Rajput", 
    "Ajit Kushwaha", 
    "Codyn founders", 
    "digital agency team", 
    "company history", 
    "mission", 
    "values", 
    "web development team",
    "CEO",
    "CTO",
    "digital transformation"
  ],
  openGraph: {
    title: "About Codyn - Meet Our Expert Team & Founders",
    description:
      "Discover our story, mission, and the talented professionals who create exceptional digital experiences for businesses worldwide. Founded by Saurabh Rajput and Ajit Kushwaha.",
    url: "https://codyn.in/about",
    images: [
      {
        url: "https://codyn.in/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Codyn Team - Saurabh Rajput & Ajit Kushwaha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Codyn - Meet Our Expert Team & Founders",
    description: "Discover our story, mission, and the talented professionals who create exceptional digital experiences for businesses worldwide.",
    images: ["https://codyn.in/twitter-about.jpg"],
  },
  alternates: {
    canonical: "https://codyn.in/about",
  },
}

export default function About() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Codyn Digital Agency",
    description: "Learn about Codyn's mission, values, and the experienced team led by Saurabh Rajput (CEO) and Ajit Kushwaha (CTO) that transforms businesses through innovative digital solutions.",
    url: "https://codyn.in/about",
    mainEntity: {
      "@type": "Organization",
      name: "Codyn",
      alternateName: "Codyn Digital Agency",
      url: "https://codyn.in",
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
      ],
      foundingDate: "2021",
      description: "Codyn is a premier digital agency specializing in web development, mobile app development, UI/UX design, SEO optimization, and digital marketing services.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bulandshahr",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN"
      }
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <PageLayout>
        <AboutPage />
      </PageLayout>
    </>
  )
}
