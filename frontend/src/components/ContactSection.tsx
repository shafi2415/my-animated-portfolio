import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-[#050505]">
    <div className="divider-gradient mb-16" />
    <div className="max-w-6xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white mb-3">
          Let's Work Together
        </h2>
        <p className="text-white/25 text-base font-light max-w-md mb-12">
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
            <Phone className="w-5 h-5 text-white/30 mb-4 group-hover:text-white/60 transition-colors" />
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
            <Mail className="w-5 h-5 text-white/30 mb-4 group-hover:text-white/60 transition-colors" />
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
            <MapPin className="w-5 h-5 text-white/30 mb-4" />
            <p className="text-[11px] text-white/20 mb-1">Location</p>
            <p className="font-medium text-white text-sm tracking-tight">
              Areekode, Malappuram, Kerala
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ContactSection;
