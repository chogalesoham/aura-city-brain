import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 relative border-t border-primary/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-poppins font-extrabold mb-3 gradient-text">AURA</h3>
            <p className="text-foreground/70 font-inter max-w-md text-lg leading-relaxed">
              Building the Neural Network for Our Cities
            </p>
            <p className="text-sm text-foreground/60 font-inter mt-6">
              © 2025 TruVibe Technology Pvt Ltd. All Rights Reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-5"
          >
            <motion.a
              href="#"
              className="bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-all duration-300 hover:neon-glow group"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="text-primary group-hover:text-secondary transition-colors" size={22} />
            </motion.a>
            <motion.a
              href="#"
              className="bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-all duration-300 hover:neon-glow group"
              aria-label="Twitter"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="text-primary group-hover:text-secondary transition-colors" size={22} />
            </motion.a>
            <motion.a
              href="#"
              className="bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-all duration-300 hover:neon-glow group"
              aria-label="YouTube"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Youtube className="text-primary group-hover:text-secondary transition-colors" size={22} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
