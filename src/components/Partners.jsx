import React from "react";
import { motion } from "framer-motion";

const logos = [
  "https://xtratheme.com/elementor/smart-home/wp-content/uploads/sites/23/2018/06/l5.png",
  "https://xtratheme.com/elementor/smart-home/wp-content/uploads/sites/23/2018/06/l4.png",
  "https://xtratheme.com/elementor/smart-home/wp-content/uploads/sites/23/2018/06/l3.png",
  "https://xtratheme.com/elementor/smart-home/wp-content/uploads/sites/23/2018/06/l2.png",
  "https://xtratheme.com/elementor/smart-home/wp-content/uploads/sites/23/2018/06/l5.png",
  "https://xtratheme.com/elementor/smart-home/wp-content/uploads/sites/23/2018/06/l4.png",
];

export default function Partners() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden z-10">
      <div className="max-w-350 mx-auto px-6 mb-16 relative">
        <div className="flex flex-col items-center text-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-12 h-1 bg-cyan-400 mb-6"
            />
            <span className="text-cyan-400 font-bold tracking-[0.4em] text-[10px] uppercase block mb-4">
              Trusted Network
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Powering the world's <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">smartest ecosystems</span>
            </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Advanced Glass Masking */}
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-linear-to-r from-black to-transparent z-10 invisible md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-linear-to-l from-black to-transparent z-10 invisible md:block" />

        {/* Marquee Container with 3D feel */}
        <div className="flex w-full overflow-hidden group py-10">
          <div className="flex space-x-24 animate-marquee whitespace-nowrap items-center">
            {logos.concat(logos).map((logo, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.1, filter: "brightness(1.5) grayscale(0%)" }}
                className="h-16 w-40 flex items-center justify-center filter grayscale brightness-0 invert opacity-20 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <img src={logo} alt={`Partner ${i}`} className="max-h-10 w-auto object-contain" loading="lazy" />
              </motion.div>
            ))}
          </div>
          
           <div className="flex space-x-24 animate-marquee whitespace-nowrap items-center" aria-hidden="true">
            {logos.concat(logos).map((logo, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.1, filter: "brightness(1.5) grayscale(0%)" }}
                className="h-16 w-40 flex items-center justify-center filter grayscale brightness-0 invert opacity-20 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <img src={logo} alt={`Partner ${i}`} className="max-h-10 w-auto object-contain" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Visual connection line */}
      <div className="max-w-300 mx-auto h-px bg-linear-to-r from-transparent via-white/10 to-transparent mt-12" />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
