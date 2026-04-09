import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-display font-medium text-lg mb-2"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            Mohammed Shafi{" "}
            <span className="text-primary">TP</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-primary/80 font-display text-base sm:text-lg mb-4"
          >
            Graphic Designer | IT & AI Instructor | Curriculum Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-foreground/70 text-lg leading-relaxed mb-8 max-w-lg"
          >
            Graphic Designer, IT/AI instructor, and curriculum developer who turns complex tools into simple, practical skills. Founder of Sha Creatives, with 50+ branding projects delivered.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg gradient-gold text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>
            <a
              href="#portfolio"
              className="px-8 py-3 rounded-lg border border-primary/40 text-primary font-display font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View Work
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-gold p-1">
              <img
                src={profileImg}
                alt="Mohammed Shafi TP"
                className="w-full h-full rounded-full object-cover"
                width={384}
                height={384}
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-primary/20 border-dashed"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
