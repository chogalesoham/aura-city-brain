import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section id="vision" className="py-32 relative overflow-hidden bg-muted/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.15),transparent_70%)] animate-glow-pulse" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-16 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500"
          >
            <motion.div
              animate={{
                scale: [1, 1.01, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-10 leading-relaxed text-foreground tracking-tight">
                "Every cry for help should be answered —{" "}
                <span className="gradient-text neon-text">instantly</span>."
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 font-inter leading-relaxed">
                AURA's mission is to empower cities with intelligent, proactive safety networks that never sleep.
              </p>
            </motion.div>
            
            <div className="flex items-center justify-center gap-3 mt-10">
              <motion.div 
                className="h-1 w-20 bg-gradient-primary rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="h-1 w-20 bg-gradient-primary rounded-full"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div 
                className="h-1 w-20 bg-gradient-primary rounded-full"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
