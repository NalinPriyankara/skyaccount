import {
  Headset,
  ArrowRight,
  Cpu,
  Code2,
  Smartphone,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageCover from "../components/PageCover";
import ProjectCount from "../components/ProjectCount";
/* -------------------- Animations -------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const services = [
  {
    title: "IoT Development",
    description: "End-to-end IoT ecosystems connecting physical assets to the digital cloud for real-time monitoring and automation.",
    icon: Cpu,
  },
  {
    title: "Software Development",
    description: "Custom software architectures designed for scalability, security, and seamless integration with existing workflows.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    description: "Intuitive, high-performance mobile applications that extend your business reach to every user's fingertips.",
    icon: Smartphone,
  },
  {
    title: "All Technology Solution",
    description: "Comprehensive IT consulting and holistic technology strategies to drive innovation across your entire organization.",
    icon: Globe,
  },
  // {
  //   title: "AI and Big Data",
  //   description: "Create intelligent solutions leveraging artificial intelligence and big data analytics to drive informed decision-making and business growth.",
  //   icon: BrainCircuit,
  // },
  {
    title: "Support & Maintenance",
    description: "Provide 24/7, global support and technical maintenace services to ensure your systems run smoothly and efficiently.",
    icon: Headset,
  },
];

export default function Service() {
  return (
    <>
      <title>Our Services | Sky Smart Intelligence - Industrial Automation & IoT</title>
      <meta name="description" content="Discover our comprehensive suite of industrial services, including AI predictive maintenance, cloud-based telemetry, and secure edge computing." />
      <link rel="canonical" href="https://skyaccount.perahara.lk/company/services" />
      {/* Page Cover */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="">
          <PageCover title="Services" />
        </div>
      </motion.div>

      <div className="bg-transparent">

        {/* ================= SMART APP SECTION ================= */}
        <section className="py-10 bg-transparent text-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center">
            {/* Text */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10%" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1">
                  {[1, 2].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />)}
                </div>
                <span className="text-cyan-400 tracking-[0.4em] text-[10px] font-black uppercase">
                  SMART ANDON SYSTEM
                </span>
              </div>

              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">
                The Future of <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 pr-2">Smart Andon Systems</span>
              </h2>

              <p className="text-gray-400 max-w-3xl leading-relaxed">
                With smart random systems, lighting, climate, entertainment,
                and security adapt intelligently—giving you effortless control
                anytime, anywhere.
              </p>

              {/* <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-transparent/5 border border-white/10 text-white rounded-full font-bold hover:bg-transparent/10 hover:border-cyan-500/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-white hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                className="mt-8 inline-flex items-center gap-2 bg-transparent/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-transparent/10 hover:border-cyan-500/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] cursor-pointer"
              >
                Read More
                <ArrowRight size={18} className="text-cyan-400" />
              </motion.a> */}
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10%" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="src/assets/ind_03.jpg"
                alt="Smart Andon System"
                className="rounded-xl shadow-lg w-full h-auto object-cover max-h-[300px] xs:max-h-[360px] sm:max-h-[420px] md:max-h-[480px] lg:max-h-[540px] xl:max-h-[600px]"
              />
            </motion.div>
          </div>
        </section>

        <div className="pt-30">
          <ProjectCount />
        </div>

        {/* ================= SERVICES HEADER ================= */}
        <section className="text-center bg-transparent overflow-hidden">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            className="text-[10px] font-black tracking-[0.4em] text-cyan-400 uppercase mb-4"
          >
            SERVICES
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mt-3"
          >
            What We Do Exactly?
          </motion.h2>

          {/* Services Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 mt-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-10%" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-black border border-white/5 shadow-2xl rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-md"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            className="mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-cyan-600 font-black text-xs tracking-widest text-white rounded-full hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all uppercase"
            >
              Free Consultation
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </section>

        {/* ================= FREE CONSULTATION CTA ================= */}
        <section className="py-24 bg-transparent text-white overflow-hidden">
          <motion.div
            className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Free Consultation
              </h3>
              <p className="text-gray-200 mt-2">
                Call us today or send an email to get a free consultation.
              </p>
            </div>

            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-black text-xs tracking-widest rounded-full hover:bg-cyan-400 transition-all uppercase"
            > */}
            <motion.a
              href="/company/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-transparent/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-transparent/10 hover:border-cyan-500/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              Contact Us
              <ArrowRight size={18} className="text-cyan-400" />
            </motion.a>
            {/* </motion.button> */}
          </motion.div>
        </section>
      </div>
    </>
  );
}
