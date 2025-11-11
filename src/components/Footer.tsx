import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 relative border-t border-primary/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-poppins font-extrabold mb-3 gradient-text">AURA</h3>
            <p className="text-foreground/70 font-inter text-lg leading-relaxed">
              Building the Neural Network for Our Cities
            </p>
            <p className="text-sm text-foreground/50 font-inter mt-4">
              AI-Powered Smart Pole Solution
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold text-primary mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="text-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all" />
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold text-primary mb-4">Connect With Us</h4>
            <div className="flex gap-4 justify-center md:justify-start">
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
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-primary/20 text-center"
        >
          <p className="text-sm text-foreground/60 font-inter">
            © 2025 TruVibe Technology Pvt Ltd. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
