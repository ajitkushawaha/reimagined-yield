import { CometCard } from "@/components/ui/comet-card";

export default function CollaborationCometCard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Built Through{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Collaboration
          </span>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          We believe the best results come from working closely with our clients as partners, not just service providers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Happy Clients Card */}
        <CometCard rotateDepth={15} translateDepth={15}>
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-blue-400 font-semibold mb-2">Happy Clients</div>
              <div className="text-white/60 text-sm">
                Satisfied customers who trust our expertise
              </div>
            </div>
          </div>
        </CometCard>

        {/* Countries Card */}
        <CometCard rotateDepth={15} translateDepth={15}>
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-cyan-400 font-semibold mb-2">Countries</div>
              <div className="text-white/60 text-sm">
                Global reach with local expertise
              </div>
            </div>
          </div>
        </CometCard>

        {/* Client Rating Card */}
        <CometCard rotateDepth={15} translateDepth={15}>
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-purple-400 font-semibold mb-2">Client Rating</div>
              <div className="text-white/60 text-sm">
                Average rating from our clients
              </div>
            </div>
          </div>
        </CometCard>
      </div>
    </div>
  );
}
