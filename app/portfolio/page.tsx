import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import PortfolioPage from "./portfolio-page"

export const metadata: Metadata = {
  title: "Portfolio - Our Best Digital Projects & Case Studies | Codyn",
  description:
    "Explore our portfolio of successful web development, mobile app, and digital marketing projects. See real results and case studies from our satisfied clients by Saurabh Rajput & Ajit Kushwaha.",
  keywords: [
    "portfolio",
    "case studies",
    "web development projects",
    "mobile apps",
    "digital marketing results",
    "client work",
    "Codyn portfolio",
    "successful projects",
    "client testimonials",
    "project showcase",
    "digital solutions",
    "business results",
    "website examples",
    "app development examples"
  ],
  openGraph: {
    title: "Portfolio - Successful Digital Projects | Codyn Digital Agency",
    description:
      "Browse our portfolio of award-winning websites, mobile apps, and digital marketing campaigns that delivered exceptional results. Created by our expert team.",
    url: "https://codyn.in/portfolio",
    images: [
      {
        url: "https://codyn.in/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Codyn Portfolio - Successful Digital Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Successful Digital Projects | Codyn Digital Agency",
    description: "Browse our portfolio of award-winning websites, mobile apps, and digital marketing campaigns that delivered exceptional results.",
    images: ["https://codyn.in/twitter-portfolio.jpg"],
  },
  alternates: {
    canonical: "https://codyn.in/portfolio",
  },
}

export default function Portfolio() {
  return (
    <PageLayout>
      <PortfolioPage />
    </PageLayout>
  )
}
