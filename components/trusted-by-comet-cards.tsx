import { CometCard } from "@/components/ui/comet-card";

export default function TrustedByCometCards() {
  const companies = [
    {
      name: "Growing Wing",
      logo: "/placeholder-logo.svg", // You can replace with actual logo
      description: "Digital Solutions Partner"
    },
    {
      name: "Heighten Infotech", 
      logo: "/placeholder-logo.svg",
      description: "Technology Innovator"
    },
    {
      name: "Patiyal Infotech",
      logo: "/placeholder-logo.svg", 
      description: "Software Development"
    },
    {
      name: "Klance",
      logo: "/placeholder-logo.svg",
      description: "Creative Agency"
    },
    {
      name: "WebTech99",
      logo: "/placeholder-logo.svg",
      description: "Web Solutions"
    },
    {
      name: "HDH Technologies",
      logo: "/placeholder-logo.svg",
      description: "Tech Solutions"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Trusted by{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Industry Leaders
          </span>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          We're proud to partner with leading companies across various industries
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {companies.map((company, index) => (
          <CometCard 
            key={company.name} 
            rotateDepth={12} 
            translateDepth={10}
            className="w-full"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-48 flex flex-col items-center justify-center">
              <div className="mb-4">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-12 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {company.name}
                </h3>
                <p className="text-white/60 text-sm">
                  {company.description}
                </p>
              </div>
            </div>
          </CometCard>
        ))}
      </div>
    </div>
  );
}
