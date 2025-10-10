import ShootingStarsAndStarsBackgroundDemo from "@/components/shooting-stars-and-stars-background-demo"
import ContactStars from "@/components/ui/contact-stars"

export default function StarsDemoPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Original Demo */}
      <div className="py-8">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Original Stars Demo</h2>
        <ShootingStarsAndStarsBackgroundDemo />
      </div>
      
      {/* Contact Stars Demo */}
      <div className="py-8">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Contact Stars Demo (Cyan Theme)</h2>
        <ContactStars 
          title="Get In Touch"
          subtitle="Ready to transform your digital presence? Let's discuss your project and create something amazing together."
        />
      </div>
    </div>
  )
}
