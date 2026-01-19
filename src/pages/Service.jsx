import {
  PiggyBank,
  Layers,
  Target,
  ShieldCheck,
  Cloud,
  Smile,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import PageCover from "../components/PageCover";

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
    title: "Investment",
    description: "Smart investment solutions for modern homes.",
    icon: PiggyBank,
  },
  {
    title: "All in One",
    description: "Everything you need in one smart system.",
    icon: Layers,
  },
  {
    title: "Best Target",
    description: "Optimized solutions for your needs.",
    icon: Target,
  },
  {
    title: "Safe & Secure",
    description: "Advanced security and protection.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Based",
    description: "Access your system anywhere, anytime.",
    icon: Cloud,
  },
  {
    title: "User Friendly",
    description: "Simple, fast, and intuitive UI.",
    icon: Smile,
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
        <div className="py-20">
          <PageCover title="Services" />
        </div>
      </motion.div>

      <div className="bg-transparent">
        {/* ================= SERVICES HEADER ================= */}
        <section className="py-10 text-center bg-transparent overflow-hidden">
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

        {/* ================= SMART APP SECTION ================= */}
        <section className="py-24 bg-transparent text-white overflow-hidden">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center">
            {/* Text */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10%" }}
            >
              <p className="text-sm tracking-widest text-[#60a5fa]">
                SMART HOME APP
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                The Smart App Industry is Growing Fast
              </h2>
              <p className="text-gray-300 mt-6 leading-relaxed">
                Home automation systems control lighting, climate,
                entertainment, and security — giving you full control anytime,
                anywhere.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                Read More
                <ArrowRight size={16} />
              </motion.button>
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
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
                alt="Smart Home"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* ================= FREE CONSULTATION CTA ================= */}
        <section className="py-24 bg-black/50 text-white backdrop-blur-md border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-black text-xs tracking-widest rounded-full hover:bg-cyan-400 transition-all uppercase"
            >
              Contact Us
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </section>
      </div>
    </>
  );
}
