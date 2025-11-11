import { motion } from "framer-motion";
import { Video, Mic, Thermometer } from "lucide-react";

const Solution = () => {
  const features = [
    {
      icon: Video,
      title: "Sees",
      description: "High-resolution, thermal, and Lidar cameras capture every movement and detail in real time.",
    },
    {
      icon: Mic,
      title: "Hears",
      description: "Advanced audio AI detects distress signals, crashes, gunshots, and anomalies instantly.",
    },
    {
      icon: Thermometer,
      title: "Senses",
      description: "Environmental sensors monitor air quality, temperature, seismic activity, and crowd density.",
    },
  ];

  return (
    <section id="solution" className="py-32 relative bg-muted/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(138,255,224,0.08),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight tracking-tight">
            The AURA Smart Pole <span className="gradient-text">—</span> A Guardian for Every Streetlight
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 font-inter max-w-4xl mx-auto leading-relaxed">
            Fusing sensors, AI, and real-time decision-making into one modular intelligence system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="glass-card p-10 rounded-xl hover:neon-glow transition-all duration-500 group"
              >
                <motion.div 
                  className="bg-gradient-primary w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:animate-glow-pulse"
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="text-background" size={36} />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-space-grotesk font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-base md:text-lg text-foreground/70 font-inter leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center glass-card p-12 rounded-xl max-w-4xl mx-auto border border-primary/20 hover:border-primary/40 transition-all duration-500"
        >
          <p className="text-xl md:text-2xl font-inter font-medium leading-relaxed text-foreground">
            AURA doesn't just record data — it{" "}
            <span className="text-primary font-bold neon-text">detects</span>,{" "}
            <span className="text-secondary font-bold">understands</span>, and{" "}
            <span className="text-primary font-bold neon-text">acts</span> in real time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
