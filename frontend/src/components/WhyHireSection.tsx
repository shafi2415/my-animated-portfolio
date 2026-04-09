import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ParticleField from "./ParticleField";

const stats = [
  { number: "50+", label: "Projects Delivered", color: "gradient-text" },
  { number: "70%", label: "Engagement Growth", color: "gradient-text-warm" },
  { number: "30%", label: "Time Saved", color: "gradient-text-cool" },
  { number: "69", label: "Colleges Impact", color: "gradient-text-green" },
];

const WhyHireSection = () => (
  <section className="relative py-20 bg-[#050505] overflow-hidden">
    <ParticleField particleCount={20} speed={0.3} opacity={0.1} />

    <div className="relative z-10">
      <div className="divider-gradient" />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className={`text-4xl sm:text-5xl font-bold tracking-tighter mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <p className="text-white/30 text-xs font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <div className="divider-gradient" />
    </div>
  </section>
);

export default WhyHireSection;
