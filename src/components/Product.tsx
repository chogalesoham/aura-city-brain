import { motion } from "framer-motion";
import { Thermometer, Cpu, Mic, Crosshair } from "lucide-react";
import { useState } from "react";

const Product = () => {
  const [isHeatHovered, setIsHeatHovered] = useState(false);
  const [isAIHovered, setIsAIHovered] = useState(false);
  const [isVoiceHovered, setIsVoiceHovered] = useState(false);
  const [isRadiusHovered, setIsRadiusHovered] = useState(false);
  const features = [
    {
      icon: Thermometer,
      title: "Heat Detection",
      description: "Advanced thermal imaging detects hotspots and abnormal temperature patterns in real-time, enabling rapid response to fires, equipment failures, and environmental hazards before they escalate.",
    },
    {
      icon: Cpu,
      title: "Onboard AI",
      description: "Powerful edge AI processes video, audio, and sensor data locally for instant pattern recognition, anomaly detection, and predictive alerts without cloud dependency.",
    },
    {
      icon: Mic,
      title: "Voice Interface",
      description: "Intelligent voice control and audio analytics provide hands-free operation, gunshot detection, crowd monitoring, and real-time situational awareness through natural language commands.",
    },
    {
      icon: Crosshair,
      title: "Radius Meter",
      description: "Precise proximity and radius measurements map coverage areas, track objects in 3D space, and model event zones for accurate incident response and resource allocation.",
    },
  ];

  return (
    <section id="product" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,212,255,0.08),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 gradient-text leading-tight tracking-tight">
            Future Camera
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Next-generation smart camera with AI, thermal imaging, and advanced sensing capabilities for complete situational awareness.
          </p>
        </motion.div>

        {/* Product Demo Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="glass-card p-3 rounded-2xl hover:neon-glow transition-all duration-500">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-xl"
            >
              <source src="/v2.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHeatDetection = feature.title === "Heat Detection";
            const isAI = feature.title === "Onboard AI";
            const isVoice = feature.title === "Voice Interface";
            const isRadius = feature.title === "Radius Meter";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                onMouseEnter={() => {
                  if (isHeatDetection) setIsHeatHovered(true);
                  if (isAI) setIsAIHovered(true);
                  if (isVoice) setIsVoiceHovered(true);
                  if (isRadius) setIsRadiusHovered(true);
                }}
                onMouseLeave={() => {
                  if (isHeatDetection) setIsHeatHovered(false);
                  if (isAI) setIsAIHovered(false);
                  if (isVoice) setIsVoiceHovered(false);
                  if (isRadius) setIsRadiusHovered(false);
                }}
                className={`glass-card p-8 rounded-xl hover:neon-glow transition-all duration-500 cursor-pointer group relative overflow-hidden ${
                  isHeatDetection ? 'heat-card' : ''
                } ${isAI ? 'ai-card' : ''} ${isVoice ? 'voice-card' : ''} ${isRadius ? 'radius-card' : ''}`}
              >
                {/* Fire/Heat particles background - only for Heat Detection card */}
                {isHeatDetection && (
                  <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                    isHeatHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {/* Generate fire particles */}
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div
                        key={i}
                        className="fire-particle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                      />
                    ))}
                    {/* Glow effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 via-transparent to-transparent" />
                  </div>
                )}

                {/* AI Sparkles/Digital particles - for Onboard AI card */}
                {isAI && (
                  <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                    isAIHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {/* Circuit board pattern radiating from center */}
                    <div className="circuit-board">
                      {/* Center AI chip */}
                      <div className="ai-chip">
                        <div className="chip-glow" />
                        <div className="chip-corner chip-tl" />
                        <div className="chip-corner chip-tr" />
                        <div className="chip-corner chip-bl" />
                        <div className="chip-corner chip-br" />
                      </div>

                      {/* Radiating circuit traces from center */}
                      <svg className="circuit-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                        {/* Top traces */}
                        <path d="M 200 200 L 200 150 L 180 120 L 180 0" className="circuit-path" style={{animationDelay: '0s'}} />
                        <path d="M 200 200 L 200 140 L 220 110 L 220 0" className="circuit-path" style={{animationDelay: '0.1s'}} />
                        <path d="M 200 200 L 200 160 L 160 100 L 160 0" className="circuit-path" style={{animationDelay: '0.2s'}} />
                        <path d="M 200 200 L 200 160 L 240 100 L 240 0" className="circuit-path" style={{animationDelay: '0.3s'}} />
                        
                        {/* Right traces */}
                        <path d="M 200 200 L 250 200 L 280 180 L 400 180" className="circuit-path" style={{animationDelay: '0.4s'}} />
                        <path d="M 200 200 L 260 200 L 290 220 L 400 220" className="circuit-path" style={{animationDelay: '0.5s'}} />
                        <path d="M 200 200 L 240 200 L 300 160 L 400 160" className="circuit-path" style={{animationDelay: '0.6s'}} />
                        <path d="M 200 200 L 240 200 L 300 240 L 400 240" className="circuit-path" style={{animationDelay: '0.7s'}} />
                        
                        {/* Bottom traces */}
                        <path d="M 200 200 L 200 250 L 180 280 L 180 400" className="circuit-path" style={{animationDelay: '0.8s'}} />
                        <path d="M 200 200 L 200 260 L 220 290 L 220 400" className="circuit-path" style={{animationDelay: '0.9s'}} />
                        <path d="M 200 200 L 200 240 L 160 300 L 160 400" className="circuit-path" style={{animationDelay: '1s'}} />
                        <path d="M 200 200 L 200 240 L 240 300 L 240 400" className="circuit-path" style={{animationDelay: '1.1s'}} />
                        
                        {/* Left traces */}
                        <path d="M 200 200 L 150 200 L 120 180 L 0 180" className="circuit-path" style={{animationDelay: '1.2s'}} />
                        <path d="M 200 200 L 140 200 L 110 220 L 0 220" className="circuit-path" style={{animationDelay: '1.3s'}} />
                        <path d="M 200 200 L 160 200 L 100 160 L 0 160" className="circuit-path" style={{animationDelay: '1.4s'}} />
                        <path d="M 200 200 L 160 200 L 100 240 L 0 240" className="circuit-path" style={{animationDelay: '1.5s'}} />

                        {/* Circuit nodes */}
                        {[
                          [180, 120], [220, 110], [160, 100], [240, 100],
                          [280, 180], [290, 220], [300, 160], [300, 240],
                          [180, 280], [220, 290], [160, 300], [240, 300],
                          [120, 180], [110, 220], [100, 160], [100, 240]
                        ].map(([cx, cy], i) => (
                          <circle key={i} cx={cx} cy={cy} r="3" className="circuit-node-svg" style={{animationDelay: `${i * 0.1}s`}} />
                        ))}
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
                  </div>
                )}

                {/* Voice Wave ripples - for Voice Interface card */}
                {isVoice && (
                  <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                    isVoiceHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {/* Audio waveform bars */}
                    <div className="audio-waveform">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="audio-bar"
                          style={{
                            animationDelay: `${i * 0.05}s`,
                            left: `${(i / 50) * 100}%`,
                          }}
                        />
                      ))}
                      {/* Center line */}
                      <div className="audio-center-line" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10" />
                  </div>
                )}

                {/* Radius ripples - for Radius Meter card */}
                {isRadius && (
                  <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                    isRadiusHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {/* Radar circles */}
                    <div className="radar-container">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="radar-circle"
                          style={{
                            width: `${(i + 1) * 60}px`,
                            height: `${(i + 1) * 60}px`,
                          }}
                        />
                      ))}
                      {/* Radar sweep beam */}
                      <div className="radar-sweep" />
                      {/* Center dot */}
                      <div className="radar-center" />
                      {/* Grid lines */}
                      <div className="radar-line radar-line-h" />
                      <div className="radar-line radar-line-v" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-teal-500/10 to-transparent" />
                  </div>
                )}
                <motion.div 
                  className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-primary" size={32} aria-hidden />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-space-grotesk font-bold mb-4 text-foreground relative z-10">{feature.title}</h3>
                <p className="text-base md:text-lg text-foreground/70 font-inter leading-relaxed relative z-10">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CSS for fire particles animation */}
      <style dangerouslySetInnerHTML={{__html: `
        .fire-particle {
          position: absolute;
          bottom: -10px;
          width: 4px;
          height: 8px;
          background: linear-gradient(to top, #ff4500, #ffa500, transparent);
          border-radius: 50%;
          animation: rise linear infinite;
          filter: blur(1px);
        }

        @keyframes rise {
          0% {
            bottom: -10px;
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateX(calc(var(--random-x, 0px) * 20)) scale(1.2);
          }
          100% {
            bottom: 100%;
            opacity: 0;
            transform: translateX(calc(var(--random-x, 0px) * 40)) scale(0.5);
          }
        }

        .heat-card:hover {
          box-shadow: 0 0 40px rgba(255, 69, 0, 0.3);
        }

        /* AI Circuit Board */
        .circuit-board {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .circuit-svg {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .circuit-path {
          fill: none;
          stroke: #00d4ff;
          stroke-width: 1.5;
          stroke-linecap: round;
          opacity: 0.6;
          filter: drop-shadow(0 0 4px rgba(0, 212, 255, 0.8));
          animation: pathPulse 3s ease-in-out infinite;
        }

        @keyframes pathPulse {
          0%, 100% {
            opacity: 0.4;
            stroke-width: 1.5;
          }
          50% {
            opacity: 1;
            stroke-width: 2;
          }
        }

        .circuit-node-svg {
          fill: #00d4ff;
          filter: drop-shadow(0 0 4px rgba(0, 212, 255, 1));
          animation: nodePulse 2s ease-in-out infinite;
        }

        @keyframes nodePulse {
          0%, 100% {
            opacity: 0.6;
            r: 3;
          }
          50% {
            opacity: 1;
            r: 4;
          }
        }

        .ai-chip {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border: 2px solid rgba(138, 43, 226, 0.8);
          background: linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(75, 0, 130, 0.3));
          box-shadow: 0 0 30px rgba(138, 43, 226, 0.6), inset 0 0 30px rgba(138, 43, 226, 0.3);
          z-index: 10;
        }

        .chip-glow {
          position: absolute;
          inset: -10px;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.4), transparent 70%);
          animation: chipGlow 2s ease-in-out infinite;
        }

        @keyframes chipGlow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .chip-corner {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #00d4ff;
          box-shadow: 0 0 8px #00d4ff;
        }

        .chip-tl { top: -3px; left: -3px; }
        .chip-tr { top: -3px; right: -3px; }
        .chip-bl { bottom: -3px; left: -3px; }
        .chip-br { bottom: -3px; right: -3px; }

        .ai-card:hover {
          box-shadow: 0 0 40px rgba(0, 212, 255, 0.3);
        }

        /* Voice Audio Waveform */
        .audio-waveform {
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 120px;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .audio-bar {
          position: absolute;
          width: 3px;
          background: linear-gradient(to top, rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 1), rgba(168, 85, 247, 0.8));
          border-radius: 2px;
          animation: audioWave 1.2s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.6);
        }

        @keyframes audioWave {
          0%, 100% {
            height: 10px;
            opacity: 0.4;
          }
          50% {
            height: 80px;
            opacity: 1;
          }
        }

        .audio-center-line {
          position: absolute;
          width: 100%;
          height: 1px;
          background: rgba(168, 85, 247, 0.3);
          top: 50%;
          left: 0;
        }

        .voice-card:hover {
          box-shadow: 0 0 40px rgba(168, 85, 247, 0.3);
        }

        /* Radius Meter - Radar Style */
        .radar-container {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .radar-circle {
          position: absolute;
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .radar-sweep {
          position: absolute;
          width: 50%;
          height: 2px;
          background: linear-gradient(to right, rgba(0, 212, 255, 0), rgba(0, 212, 255, 0.8), rgba(0, 255, 255, 1));
          transform-origin: right center;
          right: 50%;
          top: 50%;
          animation: radarSweep 3s linear infinite;
          filter: blur(1px);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
        }

        .radar-sweep::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(0, -50%);
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 100px 0 100px 150px;
          border-color: transparent transparent transparent rgba(0, 212, 255, 0.1);
          filter: blur(2px);
        }

        @keyframes radarSweep {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .radar-center {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #00d4ff;
          border-radius: 50%;
          box-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1.3);
          }
        }

        .radar-line {
          position: absolute;
          background: rgba(0, 212, 255, 0.2);
        }

        .radar-line-h {
          width: 100%;
          height: 1px;
          left: 0;
          top: 50%;
        }

        .radar-line-v {
          width: 1px;
          height: 100%;
          left: 50%;
          top: 0;
        }

        .radius-card:hover {
          box-shadow: 0 0 40px rgba(0, 212, 255, 0.4);
        }
      `}} />
    </section>
  );
};

export default Product;
