import React from "react";
import PageCover from "../components/PageCover";
import TeamSection from "../components/TeamSection";
import StatisticsSection from "../components/StatisticsSection";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, Linkedin, Twitter } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VisionMission from "../components/VisionMission";
import OurValuesSection from "../components/OurValuesSection";

/* -------------------- Animations -------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

/* -------------------- Data -------------------- */
// const statistics = [
//   { label: "App Developing", value: 90 },
//   { label: "Satisfied Clients", value: 97 },
//   { label: "Research & Development", value: 86 },
//   { label: "Your Skill Title", value: 92 },
// ];

const teamMembers = [
  {
    name: "Jo Lee Wu",
    role: "CEO",
    img: "https://xtratheme.com/elementor/smart-home/wp-content/uploads/sites/23/2018/06/m3.jpg",
  },
  {
    name: "Amanda Doe",
    role: "Developer",
    img: "https://xtratheme.com/elementor/smart-home/wp-content/uploads/sites/23/2018/06/m4.jpg",
  },
  {
    name: "Mark Smith",
    role: "Manager",
    img: "https://xtratheme.com/elementor/smart-home/wp-content/uploads/sites/23/2018/06/m1.jpg",
  },
  {
    name: "Jane Carter",
    role: "Developer",
    img: "https://xtratheme.com/elementor/smart-home/wp-content/uploads/sites/23/2018/06/m2.jpg",
  },
];

/* -------------------- Component -------------------- */
const About = () => {
  return (
    <div className="bg-transparent text-white min-h-screen">
      <title>About Us | Sky Smart Intelligence - Leading IoT & AI Solutions</title>
      <meta name="description" content="Learn about Sky Smart Intelligence, our mission to bridge physical and digital worlds, and our expert team driving industrial IoT innovation." />
      <link rel="canonical" href="https://skyaccount.perahara.lk/company/about" />
      {/* Page Cover */}
      <PageCover title="About" />

      {/* Hero Content Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10%" }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1">
                    {[1,2].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />)}
                </div>
                <span className="text-cyan-400 tracking-[0.4em] text-[10px] font-black uppercase">
                  Legacy Node [EST-2018]
                </span>
              </div>

              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">
                Bridging the <br/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 italic">Physical & Digital</span>
              </h2>

              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-xl">
                Founded in 2018, Sky Smart Technology has emerged as a powerhouse in industrial automation and IoT research. 
                We don't just build sensors; we build the nervous system of modern industry. Our mission is to transform 
                raw factory floor data into actionable intelligence, scaling across South Asia and beyond.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-10">
                 <div>
                    <h4 className="text-3xl font-black text-white mb-1">2018</h4>
                    <p className="text-[10px] font-black tracking-widest text-cyan-400 uppercase">Core Initialization</p>
                 </div>
                 <div>
                    <h4 className="text-3xl font-black text-white mb-1">5K+</h4>
                    <p className="text-[10px] font-black tracking-widest text-cyan-400 uppercase">Active Nodes</p>
                 </div>
              </div>
            </motion.div>

            {/* Right Visual Asset */}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: false, margin: "-10%" }}
               transition={{ duration: 1 }}
               className="relative group"
            >
               <div className="absolute -inset-4 bg-linear-to-r from-cyan-500/20 to-blue-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                    alt="Industrial Research"
                    className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                  
                  {/* Floating Telemetry Box */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 left-8 right-8 p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl"
                  >
                    <div className="flex justify-between items-center mb-3">
                       <span className="text-[10px] font-black text-cyan-400 tracking-widest uppercase">System.Status</span>
                       <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    </div>
                    <div className="h-px w-full bg-white/5 mb-3" />
                    <p className="text-xs text-center font-bold tracking-tight text-zinc-400 uppercase italic">
                      "Innovating the fabric of industrial connectivity"
                    </p>
                  </motion.div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrated Components */}
      <div className="bg-black/30">
        <VisionMission />
      </div>

      <OurValuesSection />
      
      <div className="mb-24">
        <StatisticsSection />
      </div>

      <TeamSection />
    </div>
  );
};

export default About;
