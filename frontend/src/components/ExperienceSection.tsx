import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import GradientOrbs from "./GradientOrbs";
import LiquidFlow from "./LiquidFlow";
import RainEffect from "./RainEffect";

const experiences = [
  {
    title: "Founder & Lead Graphic Designer",
    place: "Sha Creatives Design Studio",
    period: "2022 \u2013 Present",
    desc: "Freelance design agency specializing in social media branding. Delivered 50+ marketing posters and 10+ custom logos.",
  },
  {
    title: "IT & AI Instructor",
    place: "Malja\u2019a Shareeath and Arts College",
    period: "2023 \u2013 Present",
    desc: "Teaching Adobe Creative Suite, PC hardware, Microsoft Office and AI automation. Boosted campus engagement by 70%.",
  },
  {
    title: "IT Curriculum Developer",
    place: "Coordination of Jami\u2019a Junior Colleges CIC",
    period: "2023 \u2013 Present",
    desc: "Modernizing IT education across 69 affiliated colleges. Authored comprehensive IT syllabus for industry alignment.",
  },
  {
    title: "Online Tutor",
    place: "Zidnee Online Islamic School",
    period: "2025 \u2013 Present",
    desc: "Online instruction in Islamic studies and related subjects.",
  },
  {
    title: "Operations Officer & Data Analyst",
    place: "Bismi E Tickets",
    period: "2019 \u2013 2021",
    desc: "Travel documentation and ticketing operations. Built Excel automation tools cutting processing time by 30%.",
  },
];

const ExperienceSection = () => (
  <section
    id="experience"
    className="relative py-20 overflow-hidden"
    style={{
      background:
        "linear-gradient(180deg, #050505 0%, #060a10 30%, #070d14 60%, #050505 100%)",
    }}
  >
    <GradientOrbs variant="cool" />
    <LiquidFlow
      color1="rgba(6, 182, 212, 0.03)"
      color2="rgba(59, 130, 246, 0.02)"
      color3="rgba(139, 92, 246, 0.02)"
    />
    <RainEffect intensity={60} speed={0.8} />

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <AnimatedSection>
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-cyan-400/60 mb-3">
          Career
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-14">
          <span className="gradient-text-cool">Experience</span>
        </h2>
      </AnimatedSection>

      <div className="space-y-3">
        {experiences.map((exp, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="group glass rounded-2xl p-6 sm:p-7 hover:bg-white/[0.05] transition-all duration-400"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4 mb-2">
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {exp.title}
                </h3>
                <span className="text-[11px] text-white/20 font-medium whitespace-nowrap shrink-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs font-medium gradient-text-cool mb-2">
                {exp.place}
              </p>
              <p className="text-white/30 text-sm leading-relaxed font-light">
                {exp.desc}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
