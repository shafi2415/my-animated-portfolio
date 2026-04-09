import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GradientOrbs from "./GradientOrbs";
import ParticleField from "./ParticleField";
import RainEffect from "./RainEffect";

const ContactSection = () => (
  <section
    id="contact"
    className="relative py-20 overflow-hidden"
    style={{
      background:
        "linear-gradient(180deg, #050505 0%, #070810 30%, #080a14 60%, #050505 100%)",
    }}
  >
    <GradientOrbs variant="blue" />
    <ParticleField particleCount={25} speed={0.4} opacity={0.12} />
    <RainEffect intensity={45} speed={0.7} />

    <div className="relative z-10">
      <div className="divider-gradient mb-16" />
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-3">
            <span className="gradient-text">Let's Work</span>{" "}
            <span className="text-white">Together</span>
          </h2>
          <p className="text-white/30 text-base font-light max-w-md mb-12">
            Ready to collaborate and create impactful solutions.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-3">
          <AnimatedSection delay={0.08}>
            <motion.a
              href="https://wa.me/917994724015"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group glass rounded-2xl p-6 block hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                <Phone className="w-4 h-4 text-green-400" />
              </div>
              <p className="text-[11px] text-white/20 mb-1">WhatsApp</p>
              <p className="font-medium text-white text-sm tracking-tight">
                +91 799 472 4015
              </p>
            </motion.a>
          </AnimatedSection>

          <AnimatedSection delay={0.16}>
            <motion.a
              href="mailto:mshafisyd@gmail.com"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group glass rounded-2xl p-6 block hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <Mail className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-[11px] text-white/20 mb-1">Email</p>
              <p className="font-medium text-white text-sm tracking-tight">
                mshafisyd@gmail.com
              </p>
            </motion.a>
          </AnimatedSection>

          <AnimatedSection delay={0.24}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <MapPin className="w-4 h-4 text-purple-400" />
              </div>
              <p className="text-[11px] text-white/20 mb-1">Location</p>
              <p className="font-medium text-white text-sm tracking-tight">
                Areekode, Malappuram, Kerala
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
