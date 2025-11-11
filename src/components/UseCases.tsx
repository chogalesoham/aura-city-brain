import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Ambulance, Satellite, Activity, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("safety");

  const cases = [
    {
      id: "safety",
      icon: Shield,
      title: "Public Safety",
      subtitle: "Assault Detection",
      accent: "#06b6d4",
      incident: "Woman screams in alley",
      detection: "Audio spike + thermal anomaly + rapid movement",
      response: "Police alert within 3 seconds, live feed shared",
      stats: { time: "3s", accuracy: "99%" },
    },
    {
      id: "emergency",
      icon: Ambulance,
      title: "Emergency Response",
      subtitle: "Accident Detection",
      accent: "#f97316",
      incident: "Vehicle collision at intersection",
      detection: "Loud crash + broken glass + airbag deployment heat signature",
      response: "Ambulance + fire dept dispatched, traffic rerouted automatically",
      stats: { time: "2.5s", accuracy: "98%" },
    },
    {
      id: "defense",
      icon: Satellite,
      title: "Defense & Infrastructure",
      subtitle: "Intrusion Detection",
      accent: "#a855f7",
      incident: "Unauthorized access to restricted zone",
      detection: "Perimeter breach + facial recognition mismatch + seismic vibration",
      response: "Security team alerted, zone locked down, authorities notified",
      stats: { time: "1.8s", accuracy: "99%" },
    },
  ];

  return (
    <section id="applications" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,255,224,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary font-inter font-medium text-xs tracking-wide uppercase">
              Real-World Applications
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-4 text-foreground tracking-tight">
            How AURA Works in the Real World
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 font-inter max-w-2xl mx-auto">
            Real scenarios. Real detection. Real-time response.
          </p>
        </motion.div>

        {/* Minimal Tab Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TabsList className="inline-flex gap-2 bg-muted/50 backdrop-blur-sm p-1.5 rounded-2xl mb-12 mx-auto border border-border/50">
              {cases.map((useCase) => {
                const Icon = useCase.icon;
                const isActive = activeTab === useCase.id;
                return (
                  <TabsTrigger
                    key={useCase.id}
                    value={useCase.id}
                    className="relative data-[state=inactive]:text-foreground/60 data-[state=active]:text-foreground font-inter font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:text-foreground data-[state=inactive]:hover:bg-background/50"
                    style={{
                      backgroundColor: isActive ? useCase.accent + '15' : 'transparent',
                    }}
                  >
                    <div className="flex items-center gap-2.5 relative z-10">
                      <Icon size={18} style={{ color: isActive ? useCase.accent : 'currentColor' }} />
                      <span className="text-sm hidden sm:inline">{useCase.title}</span>
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </motion.div>

          {/* Minimal Tab Content */}
          <AnimatePresence mode="wait">
            {cases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <TabsContent key={useCase.id} value={useCase.id} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {/* Clean Card Container */}
                    <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm shadow-lg">
                      {/* Subtle Accent Glow */}
                      <div 
                        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5 blur-3xl pointer-events-none"
                        style={{ background: `radial-gradient(circle, ${useCase.accent} 0%, transparent 70%)` }}
                      />
                      
                      <div className="p-8 md:p-12 lg:p-16 relative">
                        {/* Header */}
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 pb-8 border-b border-border/50"
                        >
                          <div className="flex items-center gap-5">
                            <div 
                              className="p-4 rounded-2xl shadow-lg"
                              style={{ backgroundColor: useCase.accent + '20' }}
                            >
                              <Icon size={28} style={{ color: useCase.accent }} />
                            </div>
                            <div>
                              <h3 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-1">
                                {useCase.subtitle}
                              </h3>
                              <p className="text-sm text-foreground/50 font-inter">{useCase.title}</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div 
                              className="px-4 py-2 rounded-xl text-sm font-inter font-semibold backdrop-blur-sm border"
                              style={{ 
                                backgroundColor: useCase.accent + '15',
                                borderColor: useCase.accent + '30',
                                color: useCase.accent
                              }}
                            >
                              {useCase.stats.time}
                            </div>
                            <div 
                              className="px-4 py-2 rounded-xl text-sm font-inter font-semibold backdrop-blur-sm border"
                              style={{ 
                                backgroundColor: useCase.accent + '15',
                                borderColor: useCase.accent + '30',
                                color: useCase.accent
                              }}
                            >
                              {useCase.stats.accuracy}
                            </div>
                          </div>
                        </motion.div>

                        {/* Process Steps - Minimal Grid */}
                        <div className="grid gap-6 md:gap-8">
                          {/* Step 1 */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="group"
                          >
                            <div className="flex gap-4 items-start">
                              <div className="shrink-0 mt-1">
                                <div 
                                  className="w-10 h-10 rounded-xl flex items-center justify-center font-space-grotesk font-bold text-white shadow-sm"
                                  style={{ backgroundColor: useCase.accent }}
                                >
                                  01
                                </div>
                              </div>
                              <div className="flex-1 space-y-2">
                                <h4 className="text-xl font-space-grotesk font-semibold text-foreground flex items-center gap-2">
                                  Incident Detected
                                  <Activity size={16} className="text-foreground/40" />
                                </h4>
                                <p className="text-base text-foreground/70 font-inter leading-relaxed">
                                  {useCase.incident}
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          {/* Connector */}
                          <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex justify-start ml-5"
                          >
                            <div 
                              className="w-0.5 h-8 rounded-full"
                              style={{ backgroundColor: useCase.accent + '30' }}
                            />
                          </motion.div>

                          {/* Step 2 */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="group"
                          >
                            <div className="flex gap-4 items-start">
                              <div className="shrink-0 mt-1">
                                <div 
                                  className="w-10 h-10 rounded-xl flex items-center justify-center font-space-grotesk font-bold text-white shadow-sm"
                                  style={{ backgroundColor: useCase.accent }}
                                >
                                  02
                                </div>
                              </div>
                              <div className="flex-1 space-y-2">
                                <h4 className="text-xl font-space-grotesk font-semibold text-foreground flex items-center gap-2">
                                  AI Analysis
                                  <Activity size={16} className="text-foreground/40" />
                                </h4>
                                <p className="text-base text-foreground/70 font-inter leading-relaxed">
                                  {useCase.detection}
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          {/* Connector */}
                          <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex justify-start ml-5"
                          >
                            <div 
                              className="w-0.5 h-8 rounded-full"
                              style={{ backgroundColor: useCase.accent + '30' }}
                            />
                          </motion.div>

                          {/* Step 3 */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="group"
                          >
                            <div className="flex gap-4 items-start">
                              <div className="shrink-0 mt-1">
                                <div 
                                  className="w-10 h-10 rounded-xl flex items-center justify-center font-space-grotesk font-bold text-white shadow-sm"
                                  style={{ backgroundColor: useCase.accent }}
                                >
                                  03
                                </div>
                              </div>
                              <div className="flex-1 space-y-2">
                                <h4 className="text-xl font-space-grotesk font-semibold text-foreground flex items-center gap-2">
                                  Automated Response
                                  <Activity size={16} className="text-foreground/40" />
                                </h4>
                                <p className="text-base text-foreground/70 font-inter leading-relaxed">
                                  {useCase.response}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              );
            })}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
