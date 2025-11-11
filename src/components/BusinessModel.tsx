import { motion } from "framer-motion";
import { Server, Cloud, Database, Wrench, Package } from "lucide-react";

const BusinessModel = () => {
  const revenueStreams = [
    {
      icon: Server,
      title: "HaaS",
      percentage: "20%",
      description: "Hardware as a Service",
    },
    {
      icon: Cloud,
      title: "SaaS",
      percentage: "40%",
      description: "Software & AI Analytics Platform",
    },
    {
      icon: Database,
      title: "DaaS",
      percentage: "15%",
      description: "Data as a Service",
    },
    {
      icon: Wrench,
      title: "Professional Services",
      percentage: "15%",
      description: "Consulting & Integration",
    },
    {
      icon: Package,
      title: "Installation",
      percentage: "10%",
      description: "Deployment & Setup",
    },
  ];

  return (
    <section id="business" className="py-32 relative bg-muted/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(138,255,224,0.08),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 gradient-text leading-tight tracking-tight">
            Our Scalable Revenue Model
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 font-inter max-w-4xl mx-auto leading-relaxed">
            Our hybrid <span className="text-primary font-semibold">Hardware + Software + Data</span> model ensures recurring, scalable revenue across multiple streams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {revenueStreams.map((stream, index) => {
            const Icon = stream.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -10 }}
                className="glass-card p-8 rounded-xl text-center hover:neon-glow transition-all duration-500 cursor-pointer group"
              >
                <motion.div 
                  className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-primary" size={28} />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-poppins font-bold gradient-text mb-3">{stream.percentage}</h3>
                <h4 className="text-xl font-space-grotesk font-bold mb-3 text-foreground">{stream.title}</h4>
                <p className="text-base text-foreground/70 font-inter leading-relaxed">{stream.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
