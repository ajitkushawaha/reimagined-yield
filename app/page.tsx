import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import HomePageContent from "@/app/home-page-content"

export const metadata: Metadata = {
  title: "Codyn - Premier Digital Agency | Web Development & Digital Marketing",
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
  openGraph: {
    title: "Codyn - Transform Your Digital Presence",
    description:
      "Expert web development, mobile apps, UI/UX design, SEO optimization, and digital marketing services. Get a free consultation today!",
    url: "https://codyn.in",
    images: [
      {
        url: "https://codyn.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Codyn - Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codyn - Transform Your Digital Presence",
    description: "Expert web development, mobile apps, UI/UX design, SEO optimization, and digital marketing services.",
    images: ["https://codyn.in/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://codyn.in",
  },
}

export default function HomePage() {
  return (
    <PageLayout>
      <HomePageContent />
    </PageLayout>
  )
}