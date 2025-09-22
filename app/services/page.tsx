import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import ServicesPage from "./services-page"

export const metadata: Metadata = {
  title: "Digital Services - Web Development, SEO & Marketing | Reimagined Yield",
  description:
    "Comprehensive digital services including web development, mobile apps, UI/UX design, SEO optimization, and digital marketing. Transform your business with our expert solutions.",
  keywords: [
    "digital services",
    "web development",
    "mobile app development",
    "SEO services",
    "digital marketing",
    "UI/UX design",
  ],
  openGraph: {
    title: "Professional Digital Services | Reimagined Yield Technology",
    description:
      "Expert web development, mobile apps, SEO optimization, and digital marketing services to grow your business online.",
    url: "/services",
  },
}

export default function Services() {
  return (
    <PageLayout>
      <ServicesPage />
    </PageLayout>
  )
}
