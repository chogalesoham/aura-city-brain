import { motion } from "framer-motion";
import { Brain, Clock, Zap, Target } from "lucide-react";

const AICore = () => {
  const coreFeatures = [
    {
      icon: Brain,
      title: "Multimodal Fusion",
      description: "Combines video, audio, thermal, and environmental data streams into a unified intelligence layer for complete situational awareness.",
    },
    {
      icon: Clock,
      title: "Temporal Correlation",
      description: "Analyzes patterns over time, correlating historical and real-time data to predict and prevent incidents before they escalate.",
    },
    {
      icon: Zap,
      title: "Dynamic Adaptation",
      description: "Continuously learns from every interaction, refining detection models and response protocols to improve accuracy and efficiency.",
    },
    {
      icon: Target,
      title: "Actionable Insights",
      description: "Delivers instant, context-aware alerts with prioritization logic, ensuring the right authorities receive the right information at the right time.",
    },
  ];

  return (
    <section id="ai-core" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 gradient-text leading-tight tracking-tight">
            The Brain Behind AURA
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Our AI Fusion Core processes multiple data streams simultaneously for unparalleled situational awareness and predictive intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, x: index % 2 === 0 ? 5 : -5 }}
                className="glass-card p-10 rounded-xl hover:neon-glow transition-all duration-500 group"
              >
                <div className="flex items-start gap-6">
                  <motion.div 
                    className="bg-primary/10 p-5 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-primary" size={36} />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-space-grotesk font-bold mb-4 text-foreground">{feature.title}</h3>
                    <p className="text-base md:text-lg text-foreground/70 font-inter leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AICore;
