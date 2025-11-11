import { motion } from "framer-motion";
import { Rocket, Building2, Globe2 } from "lucide-react";

const GoToMarket = () => {
  const phases = [
    {
      icon: Rocket,
      title: "Private Pilots",
      description: "Gated communities & corporate campuses",
      timeline: "Phase 1",
    },
    {
      icon: Building2,
      title: "Smart City Pilots",
      description: "Municipal partnerships & government contracts",
      timeline: "Phase 2",
    },
    {
      icon: Globe2,
      title: "National Scale",
      description: "Pan-India deployment & international expansion",
      timeline: "Phase 3",
    },
  ];

  return (
    <section id="gtm" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(0,212,255,0.1),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 gradient-text leading-tight tracking-tight">
            From Pilot to National Scale
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Our phased approach ensures <span className="text-primary font-semibold">rapid adoption</span> and <span className="text-secondary font-semibold">proven results</span> at every stage.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary transform -translate-y-1/2 opacity-40" />
            
            <div className="grid md:grid-cols-3 gap-10 relative z-10">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="relative"
                  >
                    <div className="glass-card p-10 rounded-xl hover:neon-glow transition-all duration-500 group">
                      <motion.div 
                        className="bg-gradient-primary w-20 h-20 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:animate-glow-pulse"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="text-background" size={36} />
                      </motion.div>
                      <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-space-grotesk font-semibold mb-6 border border-primary/30">
                        {phase.timeline}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-space-grotesk font-bold mb-4 text-foreground">{phase.title}</h3>
                      <p className="text-base md:text-lg text-foreground/70 font-inter leading-relaxed">{phase.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoToMarket;
