import SparklesPreview from "@/components/sparkles-demo"
import TeamSparkles from "@/components/ui/team-sparkles"

export default function SparklesDemoPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Original Demo */}
      <div className="py-8">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Original Sparkles Demo</h2>
        <SparklesPreview />
      </div>
      
      {/* Team Sparkles Demo */}
      <div className="py-8">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Team Sparkles Demo (Cyan Theme)</h2>
        <TeamSparkles 
          title="Meet Our Team"
          subtitle="Our diverse team of experts brings together years of experience in technology, design, and strategy to deliver exceptional results for our clients."
        />
      </div>
    </div>
  )
}
