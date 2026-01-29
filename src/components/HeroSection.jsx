import React, { useRef, useLayoutEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Code, Smartphone, Target, Cpu, CircuitBoard, ArrowRight, PlayCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero_slide_1 from "../assets/Hero/ind_01.jpg";

const services = [
  {
    title: "Web & Software Development",
    icon: <Code className="w-5 h-5" />,
    text: "Scalable, secure, and user-focused digital solutions.",
    color: "text-cyan-400",
  },
  {
    title: "Mobile Application Development",
    icon: <Smartphone className="w-5 h-5" />,
    text: "High-performance Android and cross-platform apps.",
    color: "text-cyan-400",
  },
  {
    title: "IoT & Embedded Systems",
    icon: <Cpu className="w-5 h-5" />,
    text: "Smart device integration using microcontroller-based systems.",
    color: "text-cyan-400",
  },
  {
    title: "Electronic & PCB Design",
    icon: <CircuitBoard className="w-5 h-5" />,
    text: "Custom circuit design, PCB layout, and fabrication solutions.",
    color: "text-cyan-400",
  },
];

export default function HeroWithServices() {
  const containerRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);
  const bgRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for the main content
      gsap.to(leftSideRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(rightSideRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // Background parallax
      gsap.to(bgRef.current, {
        scale: 1.2,
        y: 150,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // Staggered parallax for service cards
      gsap.to(".service-card", {
        y: (i) => -50 - (i * 30),
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div ref={containerRef} className="relative w-full bg-transparent overflow-hidden text-white" onMouseMove={handleMouseMove}>
      <section className="relative min-h-[90vh] flex flex-col pt-32 pb-20 px-6 justify-center">
        <div className="max-w-[1400px] mx-auto w-full grid xl:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Typography & Call to Action */}
          <div 
            ref={leftSideRef}
            className="relative z-10 text-center xl:text-left mx-auto xl:mx-0 max-w-2xl xl:max-w-none"
          >
            {/* Cyber Indicator */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 mb-8"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <span className="text-cyan-400 font-black tracking-[0.3em] text-[10px] md:text-[11px] uppercase">Nexus Protocol Active</span>
            </motion.div>

            {/* Main Headline - Professional & Corporate */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1] mb-8 uppercase">
              EMPOWERING <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 italic">
                INNOVATION
              </span>
            </h1>

            <p className="text-base md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-12 mx-auto lg:mx-0 font-medium">
              We bridge physical operations and digital intelligence through <span className="text-white">innovative</span> software and electronics-driven IoT technologies. 
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center xl:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-cyan-500 text-black rounded-xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-transparent/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                Start Evolution <ArrowRight size={18} />
              </motion.button>
              <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-8 py-4 bg-transparent/5 text-white border border-white/10 rounded-xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 backdrop-blur-md hover:border-cyan-500/50 transition-all"
              >
                <PlayCircle size={20} /> Watch Demo
              </motion.button>
            </div>

            {/* Simple Stats / Features Grid - Uniform Look */}
            <div className="grid grid-cols-2 gap-4">
               {services.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="service-card flex items-center gap-4 p-4 rounded-lg bg-black/40 border border-white/10 backdrop-blur-sm hover:bg-black/60 transition-colors"
                  >
                     <div className={`p-2 rounded-md bg-[#000000] border border-white/5 ${item.color}`}>
                       {item.icon}
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider mb-0.5">{item.title}</span>
                        <span className="font-semibold text-white text-sm">{item.text}</span>
                     </div>
                  </motion.div>
               ))}
            </div>
          </div>

          {/* RIGHT: Professional Image Presentation */}
          <div 
            ref={rightSideRef}
            className="relative w-full aspect-square md:aspect-auto h-[600px] hidden xl:block perspective-safe"
          >
             <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }} 
                className="relative w-full h-full flex items-center justify-center p-4"
             >
                {/* Main Image Container */}
                <div className="relative w-full h-[90%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#000000]">
                   <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay z-10"></div>
                   <img src={Hero_slide_1} alt="Dashboard Interface" className="w-full h-full object-cover opacity-80" fetchpriority="high" />
                   
                   {/* Professional Overlay UI */}
                   <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent z-20">
                      <div className="flex items-end justify-between">
                         <div>
                            <div className="text-cyan-400 text-xs font-mono mb-2 flex items-center gap-2">
                               <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"/> SMART SYSTEM READY
                            </div>
                            <h3 className="text-2xl font-bold text-white">Smart Software & Electronics Solutions</h3>
                         </div>
                         <div className="text-right">
                            <div className="text-3xl font-mono font-bold text-white">99.9%</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">Uptime</div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Floating "Glass" Card (Subtle) */}
                <div className="absolute top-[15%] -left-8 bg-[#000000]/90 backdrop-blur-xl p-5 rounded-xl border border-white/10 shadow-xl z-30 flex items-center gap-4 animate-bounce-slow">
                   <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                      <Target size={20} />
                   </div>
                   <div>
                      <div className="text-xs text-gray-500 uppercase font-bold">Optimization</div>
                      <div className="text-white font-bold text-lg">+142%</div>
                   </div>
                </div>

             </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}

