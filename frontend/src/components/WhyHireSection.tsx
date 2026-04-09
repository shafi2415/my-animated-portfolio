import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "70%", label: "Engagement Growth" },
  { number: "30%", label: "Time Saved" },
  { number: "69", label: "Colleges Impact" },
];

const WhyHireSection = () => (
  <section className="py-20 bg-[#050505]">
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
              <div className="text-4xl sm:text-5xl font-bold text-white tracking-tighter mb-2">
                {stat.number}
              </div>
              <p className="text-white/25 text-xs font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
    <div className="divider-gradient" />
  </section>
);

export default WhyHireSection;
