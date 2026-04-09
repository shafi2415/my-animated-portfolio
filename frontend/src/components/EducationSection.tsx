import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GradientOrbs from "./GradientOrbs";

const education = [
  {
    degree: "Diploma in Graphic Design",
    school: "Diginet Online School",
    period: "2025",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    degree: "Master of Arts (MA)",
    school: "Darul Huda Islamic University",
    period: "2021 \u2013 2023",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    degree: "Bachelor of Arts (BA)",
    school: "University of Calicut",
    period: "2019 \u2013 2022",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

const EducationSection = () => (
  <section className="relative py-20 bg-[#050505] overflow-hidden">
    <GradientOrbs variant="purple" />

    <div className="relative z-10">
      <div className="divider-gradient mb-16" />
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-violet-400/60 mb-3">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-14">
            <span className="gradient-text-rose">Education</span>
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
                <div className={`w-10 h-10 rounded-xl ${edu.bg} flex items-center justify-center mb-5`}>
                  <GraduationCap className={`w-5 h-5 ${edu.color}`} />
                </div>
                <p className="text-[11px] text-white/20 font-medium mb-3">{edu.period}</p>
                <h3 className="text-base font-semibold text-white mb-1 tracking-tight">
                  {edu.degree}
                </h3>
                <p className={`text-xs font-medium ${edu.color} opacity-70`}>
                  {edu.school}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
