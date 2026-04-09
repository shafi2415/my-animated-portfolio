import { motion } from "framer-motion";
import heroImg from "@/assets/hero-new.png";
import TypewriterRoles from "./TypewriterRoles";
import ParticleField from "./ParticleField";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-end overflow-hidden"
    >
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Mohammed Shafi TP"
          className="w-full h-full object-cover object-[center_20%]"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 to-transparent" />

      {/* Particles floating over hero */}
      <ParticleField particleCount={30} speed={0.5} opacity={0.15} />

      {/* Ambient gradient glow at bottom */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] rounded-full bg-indigo-500/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] rounded-full bg-purple-500/[0.03] blur-[80px] pointer-events-none" />

      {/* Content at bottom */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-4">
            Mohammed<br />Shafi <span className="gradient-text">TP</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="mb-6"
        >
          <p className="text-lg sm:text-xl font-light tracking-tight h-8">
            <TypewriterRoles />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center gap-3"
        >
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300"
          >
            Get In Touch
          </a>
          <a
            href="#portfolio"
            className="px-6 py-2.5 rounded-full text-sm font-medium text-white/60 border border-white/15 hover:border-white/30 hover:text-white transition-all duration-300"
          >
            View Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
