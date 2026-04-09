import { motion } from "framer-motion";
import { Palette, PenTool, Share2, BookOpen, FileSpreadsheet, Monitor } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Visual content for social media, print, and digital platforms using Adobe Creative Suite.",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    desc: "Custom logos, visual guidelines, and cohesive brand presence that stands out.",
  },
  {
    icon: Share2,
    title: "Social Media Branding",
    desc: "Visual strategies that boost engagement and strengthen digital presence.",
  },
  {
    icon: BookOpen,
    title: "IT & AI Training",
    desc: "Practical instruction in Adobe tools, AI automation, and IT fundamentals.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Automation",
    desc: "Custom Excel solutions and data analysis tools that cut processing time by 30%.",
  },
  {
    icon: Monitor,
    title: "Curriculum Development",
    desc: "IT syllabus design and e-learning aligned with industry standards.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-[#050505]">
    <div className="max-w-6xl mx-auto px-6">
      <AnimatedSection>
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/25 mb-3">
          What I Do
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-white mb-14">
          Services
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.07}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="group glass rounded-2xl p-7 hover:bg-white/[0.05] transition-all duration-400"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 group-hover:bg-white/[0.1] transition-colors">
                <s.icon className="w-5 h-5 text-white/60" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                {s.title}
              </h3>
              <p className="text-white/30 text-sm leading-relaxed font-light">
                {s.desc}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
