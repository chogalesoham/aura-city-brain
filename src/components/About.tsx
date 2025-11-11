import { motion } from "framer-motion";
import { Building, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(138,255,224,0.08),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-poppins font-extrabold mb-6 gradient-text">
            About TruVibe Technology
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Pioneering urban intelligence at the intersection of AI and infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-card p-14 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-500"
        >
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                <Building className="text-primary" size={36} />
              </div>
              <h3 className="font-space-grotesk font-bold mb-3 text-xl text-foreground">Innovation Hub</h3>
              <p className="text-foreground/70 font-inter">Mumbai, India</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                <Users className="text-primary" size={36} />
              </div>
              <h3 className="font-space-grotesk font-bold mb-3 text-xl text-foreground">Expert Leadership</h3>
              <p className="text-foreground/70 font-inter">Dr. Shweta Shah, CSO</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                <Lightbulb className="text-primary" size={36} />
              </div>
              <h3 className="font-space-grotesk font-bold mb-3 text-xl text-foreground">R&D Focus</h3>
              <p className="text-foreground/70 font-inter">AI & Smart Infrastructure</p>
            </motion.div>
          </div>

          <div className="space-y-8 text-center">
            <p className="text-xl text-foreground/80 font-inter leading-relaxed">
              TruVibe Technology stands at the forefront of urban intelligence, pioneering the integration of artificial intelligence with critical infrastructure to create safer, smarter cities.
            </p>
            <p className="text-xl text-foreground/80 font-inter leading-relaxed">
              Our mission is to transform urban environments into responsive, intelligent ecosystems that proactively protect and serve citizens through advanced sensor fusion and real-time AI analytics.
            </p>
            <div className="pt-8">
              <motion.span 
                className="inline-block px-8 py-3 bg-gradient-primary text-background rounded-full font-space-grotesk font-semibold text-lg hover:neon-glow-strong transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Building Tomorrow's Cities Today
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
