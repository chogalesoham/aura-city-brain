import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Ambulance, Satellite } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UseCases = () => {
  const cases = [
    {
      id: "safety",
      icon: Shield,
      title: "Public Safety",
      subtitle: "Assault Detection",
      incident: "Woman screams in alley",
      detection: "Audio spike + thermal anomaly + rapid movement",
      response: "Police alert within 3 seconds, live feed shared",
    },
    {
      id: "emergency",
      icon: Ambulance,
      title: "Emergency Response",
      subtitle: "Accident Detection",
      incident: "Vehicle collision at intersection",
      detection: "Loud crash + broken glass + airbag deployment heat signature",
      response: "Ambulance + fire dept dispatched, traffic rerouted automatically",
    },
    {
      id: "defense",
      icon: Satellite,
      title: "Defense & Infrastructure",
      subtitle: "Intrusion Detection",
      incident: "Unauthorized access to restricted zone",
      detection: "Perimeter breach + facial recognition mismatch + seismic vibration",
      response: "Security team alerted, zone locked down, authorities notified",
    },
  ];

  return (
    <section id="applications" className="py-32 relative bg-muted/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(138,255,224,0.08),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-poppins font-extrabold mb-6 gradient-text">
            How AURA Works in the Real World
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Real scenarios, real detection, real-time response.
          </p>
        </motion.div>

        <Tabs defaultValue="safety" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 glass-card mb-10 p-1">
            {cases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary font-inter font-medium py-3 transition-all duration-300 data-[state=active]:neon-glow"
                >
                  <Icon className="mr-2" size={20} />
                  {useCase.title}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {cases.map((useCase, index) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-12 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-500"
              >
                <h3 className="text-4xl font-space-grotesk font-bold mb-8 text-foreground">{useCase.subtitle}</h3>
                
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-primary font-space-grotesk font-semibold mb-3 text-xl flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Incident Detected
                    </h4>
                    <p className="text-foreground/80 font-inter text-lg leading-relaxed pl-4">{useCase.incident}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-secondary font-space-grotesk font-semibold mb-3 text-xl flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      AI Detection
                    </h4>
                    <p className="text-foreground/80 font-inter text-lg leading-relaxed pl-4">{useCase.detection}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-primary font-space-grotesk font-semibold mb-3 text-xl flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Response
                    </h4>
                    <p className="text-foreground/80 font-inter text-lg leading-relaxed pl-4">{useCase.response}</p>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
