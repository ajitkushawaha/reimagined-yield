import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import PortfolioPage from "./portfolio-page"

export const metadata: Metadata = {
  title: "Portfolio - Our Best Digital Projects & Case Studies | Reimagined Yield",
  description:
    "Explore our portfolio of successful web development, mobile app, and digital marketing projects. See real results and case studies from our satisfied clients.",
  keywords: [
    "portfolio",
    "case studies",
    "web development projects",
    "mobile apps",
    "digital marketing results",
    "client work",
  ],
  openGraph: {
    title: "Portfolio - Successful Digital Projects | Reimagined Yield Technology",
    description:
      "Browse our portfolio of award-winning websites, mobile apps, and digital marketing campaigns that delivered exceptional results.",
    url: "/portfolio",
  },
}

export default function Portfolio() {
  return (
    <PageLayout>
      <PortfolioPage />
    </PageLayout>
  )
}
