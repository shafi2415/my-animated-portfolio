import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const education = [
  {
    degree: "Diploma in Graphic Design",
    school: "Diginet Online School",
    period: "2025",
  },
  {
    degree: "Master of Arts (MA)",
    school: "Darul Huda Islamic University",
    period: "2021 \u2013 2023",
  },
  {
    degree: "Bachelor of Arts (BA)",
    school: "University of Calicut",
    period: "2019 \u2013 2022",
  },
];

const EducationSection = () => (
  <section className="py-20 bg-[#050505]">
    <div className="divider-gradient mb-16" />
    <div className="max-w-6xl mx-auto px-6">
      <AnimatedSection>
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/25 mb-3">
          Background
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-white mb-14">
          Education
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-4">
        {education.map((edu, i) => (
          <AnimatedSection key={edu.degree} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="glass rounded-2xl p-7 hover:bg-white/[0.05] transition-all duration-400"
            >
              <p className="text-[11px] text-white/20 font-medium mb-4">{edu.period}</p>
              <h3 className="text-base font-semibold text-white mb-1 tracking-tight">
                {edu.degree}
              </h3>
              <p className="text-xs text-white/30 font-light">
                {edu.school}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
