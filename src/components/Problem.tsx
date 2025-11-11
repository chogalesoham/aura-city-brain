import { motion } from "framer-motion";
import { AlertTriangle, Lock, Settings } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Reactive Security",
      description: "Cities respond only after incidents occur — when it's already too late to prevent harm.",
    },
    {
      icon: Lock,
      title: "Siloed Systems",
      description: "Critical infrastructure operates in isolation, unable to share data or coordinate responses.",
    },
    {
      icon: Settings,
      title: "Infrastructure Decay",
      description: "Outdated technology wastes resources, delays emergency services, and fails citizens.",
    },
  ];

  return (
    <section id="problem" className="py-32 relative" role="region" aria-labelledby="problem-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,212,255,0.08),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 id="problem-heading" className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 gradient-text leading-tight tracking-tight">
            Cities Are Flying Blind
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Reactive, disconnected, and dangerously inefficient.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileFocus={{ scale: 1.03, y: -5 }}
                tabIndex={0}
                className="glass-card p-8 rounded-xl hover:neon-glow transition-all duration-500 cursor-pointer group outline-none focus:outline-none"
              >
                <motion.div
                  className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-primary" size={32} aria-hidden />
                </motion.div>
                <h3 id={`problem-title-${index}`} className="text-2xl md:text-3xl font-space-grotesk font-bold mb-4 text-foreground">{problem.title}</h3>
                <p className="text-base md:text-lg text-foreground/70 font-inter leading-relaxed">{problem.description}</p>
                <p className="mt-4">
                  <a href="#solution" className="inline-flex items-center text-primary hover:underline text-sm font-medium" aria-label={`Learn how we solve ${problem.title}`}>
                    Learn how we solve it
                    <svg className="ml-2" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
