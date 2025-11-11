import { motion } from "framer-motion";
import { MapPin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleScheduleDemo = () => {
    // Pre-fill the form with demo request
    setFormData({
      ...formData,
      message: "I'm interested in scheduling a demo of AURA Smart Pole. Please contact me to arrange a suitable time.",
    });
    
    // Scroll to the form
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    
    // Focus on the name input
    setTimeout(() => {
      const nameInput = document.querySelector('input[placeholder="Your Name"]') as HTMLInputElement;
      if (nameInput) {
        nameInput.focus();
      }
    }, 500);
  };

  return (
    <section id="contact" className="py-32 relative">
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
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Ready to transform your city? Let's start the conversation.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-500"
          >
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary font-inter py-6 text-lg transition-all duration-300"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary font-inter py-6 text-lg transition-all duration-300"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background/50 border-primary/20 focus:border-primary font-inter text-lg transition-all duration-300"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:neon-glow-strong font-medium py-6 text-lg transition-all duration-300">
                  <Send className="mr-2" size={22} />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div 
              className="glass-card p-8 rounded-xl hover:neon-glow transition-all duration-500 border border-primary/10 hover:border-primary/30"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-5">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <MapPin className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-space-grotesk font-bold mb-3 text-xl md:text-2xl text-foreground">Location</h3>
                  <p className="text-foreground/70 font-inter text-lg">Mumbai, India</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass-card p-8 rounded-xl hover:neon-glow transition-all duration-500 border border-primary/10 hover:border-primary/30"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-5">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Mail className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-space-grotesk font-bold mb-3 text-xl md:text-2xl text-foreground">Email</h3>
                  <a href="mailto:contact@truvibe.ai" className="text-primary hover:text-secondary transition-colors font-inter text-lg">
                    contact@truvibe.ai
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass-card p-8 rounded-xl bg-gradient-primary hover:neon-glow-strong transition-all duration-500"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-white font-space-grotesk font-bold mb-3 text-xl md:text-2xl">Ready to Deploy?</h3>
              <p className="text-white/90 mb-6 font-inter text-lg leading-relaxed">
                Join the cities already benefiting from AURA's proactive protection
              </p>
              <Button 
                variant="secondary" 
                onClick={handleScheduleDemo}
                className="w-full py-6 text-lg font-medium hover:scale-105 transition-transform cursor-pointer"
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
