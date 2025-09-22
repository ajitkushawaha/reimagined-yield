import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import AboutPage from "./about-page"

export const metadata: Metadata = {
  title: "About Us - Expert Digital Agency Team | Reimagined Yield Technology",
  description:
    "Meet the creative minds behind Reimagined Yield Technology. Learn about our mission, values, and the experienced team that transforms businesses through innovative digital solutions.",
  keywords: ["about us", "digital agency team", "company history", "mission", "values", "web development team"],
  openGraph: {
    title: "About Reimagined Yield Technology - Meet Our Expert Team",
    description:
      "Discover our story, mission, and the talented professionals who create exceptional digital experiences for businesses worldwide.",
    url: "/about",
  },
}

export default function About() {
  return (
    <PageLayout>
      <AboutPage />
    </PageLayout>
  )
}
