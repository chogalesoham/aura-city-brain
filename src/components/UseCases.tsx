import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Ambulance, Satellite, Activity, Sparkles, Zap, AlertCircle, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("safety");
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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

                        {/* Process Steps - Enhanced Interactive Grid */}
                        <div className="grid gap-6 md:gap-8">
                          {/* Step 1 - Incident Detection */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            onMouseEnter={() => setHoveredStep(1)}
                            onMouseLeave={() => setHoveredStep(null)}
                            className="group relative"
                          >
                            {/* Animated background glow on hover */}
                            <motion.div
                              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                              style={{ background: `radial-gradient(circle, ${useCase.accent}40, transparent)` }}
                            />
                            
                            <div className="relative p-6 rounded-2xl border border-border/30 bg-background/40 backdrop-blur-sm group-hover:border-opacity-60 group-hover:bg-background/60 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                              {/* Animated particles on hover */}
                              {hoveredStep === 1 && (
                                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                                  {Array.from({ length: 8 }).map((_, i) => (
                                    <motion.div
                                      key={i}
                                      className="absolute w-1 h-1 rounded-full"
                                      style={{ 
                                        backgroundColor: useCase.accent,
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                      }}
                                      animate={{
                                        scale: [0, 1.5, 0],
                                        opacity: [0, 1, 0],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                      }}
                                    />
                                  ))}
                                </div>
                              )}
                              
                              <div className="flex gap-5 items-start">
                                <div className="shrink-0 mt-1">
                                  <motion.div 
                                    className="w-12 h-12 rounded-xl flex items-center justify-center font-space-grotesk font-bold text-white shadow-lg relative overflow-hidden"
                                    style={{ backgroundColor: useCase.accent }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                  >
                                    {/* Shimmer effect */}
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                      animate={{ x: ['-100%', '200%'] }}
                                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                    />
                                    <span className="relative z-10">01</span>
                                  </motion.div>
                                </div>
                                <div className="flex-1 space-y-3">
                                  <div className="flex items-center gap-3">
                                    <h4 className="text-xl md:text-2xl font-space-grotesk font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                      Incident Detected
                                    </h4>
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: hoveredStep === 1 ? 1 : 0 }}
                                      transition={{ type: "spring", stiffness: 300 }}
                                    >
                                      <AlertCircle size={20} style={{ color: useCase.accent }} />
                                    </motion.div>
                                  </div>
                                  <p className="text-base md:text-lg text-foreground/70 font-inter leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                                    {useCase.incident}
                                  </p>
                                  {/* Progress bar animation on hover */}
                                  <motion.div
                                    className="h-1 rounded-full overflow-hidden bg-muted"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredStep === 1 ? 1 : 0 }}
                                  >
                                    <motion.div
                                      className="h-full rounded-full"
                                      style={{ backgroundColor: useCase.accent }}
                                      initial={{ width: 0 }}
                                      animate={{ width: hoveredStep === 1 ? '100%' : 0 }}
                                      transition={{ duration: 1.5 }}
                                    />
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          </motion.div>

                          {/* Enhanced Connector with animation */}
                          <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex justify-start ml-6 relative"
                          >
                            <div className="relative">
                              <div 
                                className="w-0.5 h-12 rounded-full"
                                style={{ backgroundColor: useCase.accent + '30' }}
                              />
                              {/* Flowing dot animation */}
                              <motion.div
                                className="absolute w-2 h-2 rounded-full -left-0.5"
                                style={{ backgroundColor: useCase.accent }}
                                animate={{ y: [0, 48, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              />
                            </div>
                          </motion.div>

                          {/* Step 2 - AI Analysis */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            onMouseEnter={() => setHoveredStep(2)}
                            onMouseLeave={() => setHoveredStep(null)}
                            className="group relative"
                          >
                            <motion.div
                              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                              style={{ background: `radial-gradient(circle, ${useCase.accent}40, transparent)` }}
                            />
                            
                            <div className="relative p-6 rounded-2xl border border-border/30 bg-background/40 backdrop-blur-sm group-hover:border-opacity-60 group-hover:bg-background/60 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                              {/* Circuit pattern on hover */}
                              {hoveredStep === 2 && (
                                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl opacity-20">
                                  <svg className="w-full h-full" viewBox="0 0 200 100">
                                    <motion.path
                                      d="M 20 50 L 50 50 L 60 40 L 80 40 L 90 50 L 120 50"
                                      stroke={useCase.accent}
                                      strokeWidth="1"
                                      fill="none"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <motion.path
                                      d="M 20 60 L 40 60 L 50 70 L 70 70 L 80 60 L 120 60"
                                      stroke={useCase.accent}
                                      strokeWidth="1"
                                      fill="none"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                                    />
                                  </svg>
                                </div>
                              )}
                              
                              <div className="flex gap-5 items-start">
                                <div className="shrink-0 mt-1">
                                  <motion.div 
                                    className="w-12 h-12 rounded-xl flex items-center justify-center font-space-grotesk font-bold text-white shadow-lg relative overflow-hidden"
                                    style={{ backgroundColor: useCase.accent }}
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                  >
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                      animate={{ x: ['-100%', '200%'] }}
                                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                    />
                                    <span className="relative z-10">02</span>
                                  </motion.div>
                                </div>
                                <div className="flex-1 space-y-3">
                                  <div className="flex items-center gap-3">
                                    <h4 className="text-xl md:text-2xl font-space-grotesk font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                      AI Analysis
                                    </h4>
                                    <motion.div
                                      initial={{ scale: 0, rotate: 0 }}
                                      animate={{ 
                                        scale: hoveredStep === 2 ? 1 : 0,
                                        rotate: hoveredStep === 2 ? 360 : 0
                                      }}
                                      transition={{ type: "spring", stiffness: 300 }}
                                    >
                                      <Zap size={20} style={{ color: useCase.accent }} />
                                    </motion.div>
                                  </div>
                                  <p className="text-base md:text-lg text-foreground/70 font-inter leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                                    {useCase.detection}
                                  </p>
                                  <motion.div
                                    className="h-1 rounded-full overflow-hidden bg-muted"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredStep === 2 ? 1 : 0 }}
                                  >
                                    <motion.div
                                      className="h-full rounded-full"
                                      style={{ backgroundColor: useCase.accent }}
                                      initial={{ width: 0 }}
                                      animate={{ width: hoveredStep === 2 ? '100%' : 0 }}
                                      transition={{ duration: 1.5 }}
                                    />
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          </motion.div>

                          {/* Connector 2 */}
                          <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex justify-start ml-6 relative"
                          >
                            <div className="relative">
                              <div 
                                className="w-0.5 h-12 rounded-full"
                                style={{ backgroundColor: useCase.accent + '30' }}
                              />
                              <motion.div
                                className="absolute w-2 h-2 rounded-full -left-0.5"
                                style={{ backgroundColor: useCase.accent }}
                                animate={{ y: [0, 48, 0] }}
                                transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: "linear" }}
                              />
                            </div>
                          </motion.div>

                          {/* Step 3 - Automated Response */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            onMouseEnter={() => setHoveredStep(3)}
                            onMouseLeave={() => setHoveredStep(null)}
                            className="group relative"
                          >
                            <motion.div
                              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                              style={{ background: `radial-gradient(circle, ${useCase.accent}40, transparent)` }}
                            />
                            
                            <div className="relative p-6 rounded-2xl border border-border/30 bg-background/40 backdrop-blur-sm group-hover:border-opacity-60 group-hover:bg-background/60 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                              {/* Success ripples on hover */}
                              {hoveredStep === 3 && (
                                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                                  {Array.from({ length: 3 }).map((_, i) => (
                                    <motion.div
                                      key={i}
                                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 rounded-full"
                                      style={{ borderColor: useCase.accent + '40' }}
                                      initial={{ width: 0, height: 0, opacity: 1 }}
                                      animate={{ 
                                        width: 200, 
                                        height: 200, 
                                        opacity: 0 
                                      }}
                                      transition={{
                                        duration: 2,
                                        delay: i * 0.4,
                                        repeat: Infinity,
                                      }}
                                    />
                                  ))}
                                </div>
                              )}
                              
                              <div className="flex gap-5 items-start">
                                <div className="shrink-0 mt-1">
                                  <motion.div 
                                    className="w-12 h-12 rounded-xl flex items-center justify-center font-space-grotesk font-bold text-white shadow-lg relative overflow-hidden"
                                    style={{ backgroundColor: useCase.accent }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                  >
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                      animate={{ x: ['-100%', '200%'] }}
                                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                    />
                                    <span className="relative z-10">03</span>
                                  </motion.div>
                                </div>
                                <div className="flex-1 space-y-3">
                                  <div className="flex items-center gap-3">
                                    <h4 className="text-xl md:text-2xl font-space-grotesk font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                      Automated Response
                                    </h4>
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: hoveredStep === 3 ? 1 : 0 }}
                                      transition={{ type: "spring", stiffness: 300 }}
                                    >
                                      <CheckCircle size={20} style={{ color: useCase.accent }} />
                                    </motion.div>
                                  </div>
                                  <p className="text-base md:text-lg text-foreground/70 font-inter leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                                    {useCase.response}
                                  </p>
                                  <motion.div
                                    className="h-1 rounded-full overflow-hidden bg-muted"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredStep === 3 ? 1 : 0 }}
                                  >
                                    <motion.div
                                      className="h-full rounded-full"
                                      style={{ backgroundColor: useCase.accent }}
                                      initial={{ width: 0 }}
                                      animate={{ width: hoveredStep === 3 ? '100%' : 0 }}
                                      transition={{ duration: 1.5 }}
                                    />
                                  </motion.div>
                                </div>
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
