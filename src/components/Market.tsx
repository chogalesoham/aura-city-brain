import { motion } from "framer-motion";
import { DollarSign, BarChart3, MapPinned } from "lucide-react";

const Market = () => {
  const stats = [
    {
      icon: DollarSign,
      value: "₹3.70 L Cr",
      label: "Invested in India's Smart City Mission",
    },
    {
      icon: BarChart3,
      value: "20.8%",
      label: "Global Smart Pole Market CAGR",
    },
    {
      icon: MapPinned,
      value: "100+",
      label: "Smart Cities in Development Phase",
    },
  ];

  return (
    <section id="market" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,212,255,0.1),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 gradient-text leading-tight tracking-tight">
            The Trillion-Dollar Transformation
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 font-inter max-w-4xl mx-auto leading-relaxed">
            Government mandates + 5G maturity + urgent public safety needs = <span className="text-primary font-semibold">Perfect market timing</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card p-10 rounded-xl text-center hover:neon-glow transition-all duration-500 group"
              >
                <motion.div 
                  className="bg-gradient-primary w-20 h-20 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:animate-glow-pulse"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-background" size={36} />
                </motion.div>
                <motion.h3
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-5 gradient-text"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-base md:text-lg text-foreground/70 font-inter leading-relaxed">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Market;
