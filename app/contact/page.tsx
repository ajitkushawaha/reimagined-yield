import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import ContactPage from "./contact-page"

export const metadata: Metadata = {
  title: "Contact Us - Get Free Consultation | Reimagined Yield Technology",
  description:
    "Ready to transform your digital presence? Contact Reimagined Yield Technology for a free consultation. Call +1 (555) 123-4567 or email info@reimaginedyield.com",
  keywords: ["contact", "free consultation", "digital agency contact", "web development quote", "get in touch"],
  openGraph: {
    title: "Contact Reimagined Yield Technology - Free Consultation",
    description:
      "Get in touch with our expert team for a free consultation on your digital project. We're here to help transform your business.",
    url: "/contact",
  },
}

export default function Contact() {
  return (
    <PageLayout>
      <ContactPage />
    </PageLayout>
  )
}
