import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Rocket, Zap, Timer, TrendingUp, AlertCircle, BarChart3, CheckCircle2 } from "lucide-react";

export default function ImageTextSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-transparent overflow-hidden relative z-10 px-4 md:px-0">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* CONTENT (Left Side) */}
        <div className="relative order-2 lg:order-1 px-2 md:px-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            className="flex items-center gap-3 mb-6 lg:justify-start justify-center"
          >
             <div className="h-px w-10 bg-cyan-400"></div>
             <span className="text-cyan-400 font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">
                System Architecture Protocol
             </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1] tracking-tighter text-center lg:text-left uppercase"
          >
            INTELLIGENT <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 italic">RESPONSE</span> <br className="hidden md:block" /> NETWORK
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ delay: 0.3 }}
            className="text-zinc-500 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-medium text-center lg:text-left"
          >
            Transform static signal towers into a <span className="text-white">dynamic digital nexus</span>. 
            Eliminate communication bottlenecks by instantly routing critical downtime alerts to the right teams.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
             <div className="group p-4 bg-black/40 border border-white/10 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                 <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                     <Zap size={20} />
                 </div>
                 <h4 className="text-white font-bold mb-1">Smart Routing</h4>
                 <p className="text-sm text-gray-500">Alerts bypass the hierarchy, reaching engineers directly.</p>
             </div>

             <div className="group p-4 bg-black/40 border border-white/10 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                 <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                     <BarChart3 size={20} />
                 </div>
                 <h4 className="text-white font-bold mb-1">Downtime Analytics</h4>
                 <p className="text-sm text-gray-500">Visualize pareto charts of top failure modes instantly.</p>
             </div>
             
             <div className="group p-4 bg-black/40 border border-white/10 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                 <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                     <Timer size={20} />
                 </div>
                 <h4 className="text-white font-bold mb-1">Slash MTTR</h4>
                 <p className="text-sm text-gray-500">Reduce Mean Time To Repair by up to 40%.</p>
             </div>

             <div className="group p-4 bg-black/40 border border-white/10 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                 <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                     <CheckCircle2 size={20} />
                 </div>
                 <h4 className="text-white font-bold mb-1">Digital Audit</h4>
                 <p className="text-sm text-gray-500">Full timestamps for every issue resolution step.</p>
             </div>
          </div>
        </div>


        {/* VISUAL (Right Side) */}
        <div style={{ perspective: 1000 }} className="relative group order-1 lg:order-2">
          
          <motion.div
            style={{ rotateX, scale }}
            className="relative rounded-[2.5rem] overflow-hidden bg-[#050505] border border-white/10 shadow-2xl p-8"
          >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-transparent/5 pointer-events-none"></div>

            {/* Simulated Performance Dashboard */}
            <div className="relative z-10 space-y-6">
                
                {/* Header Strip */}
                <div className="flex justify-between items-center border-b border-white/5 pb-6">
                    <div className="flex items-center gap-3">
                         <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></div>
                         <h3 className="text-lg font-bold text-white tracking-wide">
                            FLOOR_STATUS <span className="text-gray-600">|</span> LINE_04
                         </h3>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 flex gap-2 items-center">
                        <Rocket size={12} /> SYSTEM_ACTIVE
                    </div>
                </div>

                {/* KPI Cards Row */}
                <div className="grid grid-cols-3 gap-3">
                     <div className="p-3 rounded-lg bg-transparent/5 border border-white/10 text-center">
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">OEE Score</div>
                        <div className="text-2xl font-black text-white">94%</div>
                     </div>
                     <div className="p-3 rounded-lg bg-transparent/5 border border-white/10 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-cyan-500/10"></div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Active Issues</div>
                        <div className="text-2xl font-black text-cyan-400">0</div>
                     </div>
                     <div className="p-3 rounded-lg bg-transparent/5 border border-white/10 text-center">
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Avg Resp</div>
                        <div className="text-2xl font-black text-white">1.2m</div>
                     </div>
                </div>

                {/* Main Visualization Area */}
                <div className="bg-black/40 rounded-xl p-6 border border-white/5">
                    <div className="flex justify-between items-end mb-6">
                        <div>
                             <div className="text-sm text-gray-400 mb-1">Incident Workflow Velocity</div>
                             <div className="text-3xl font-bold text-white">10<span className="text-cyan-400">x</span> Acceleration</div>
                        </div>
                        <BarChart3 className="text-cyan-400 opacity-50" size={32} />
                    </div>

                    {/* Bars */}
                    <div className="space-y-5">
                        <div className="relative">
                            <div className="flex justify-between text-xs text-gray-500 mb-2 font-mono">
                                <span>LEGACY_PROCESS</span>
                                <span>1200ms LATENCY</span>
                            </div>
                            <div className="h-2 w-full bg-transparent/5 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "20%" }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className="h-full bg-gray-700 rounded-full"
                                ></motion.div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex justify-between text-xs text-cyan-400 mb-2 font-bold font-mono">
                                <span>SKY_ANDON_CORE</span>
                                <span>120ms LATENCY</span>
                            </div>
                            <div className="h-3 w-full bg-transparent/5 rounded-full overflow-hidden relative">
                                <div className="absolute inset-0 bg-cyan-900/20 animate-pulse"></div>
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="h-full bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                                ></motion.div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
          </motion.div>
          
          {/* Decorative Back Glow */}
          <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-[3rem] -z-10 opacity-40"></div>
        </div>

      </div>
    </section>
  );
}
