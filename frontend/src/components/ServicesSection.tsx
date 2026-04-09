import { motion } from "framer-motion";
import { Palette, PenTool, Share2, BookOpen, FileSpreadsheet, Monitor } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GradientOrbs from "./GradientOrbs";
import LiquidFlow from "./LiquidFlow";
import RainEffect from "./RainEffect";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Visual content for social media, print, and digital platforms using Adobe Creative Suite.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    desc: "Custom logos, visual guidelines, and cohesive brand presence that stands out.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Share2,
    title: "Social Media Branding",
    desc: "Visual strategies that boost engagement and strengthen digital presence.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: BookOpen,
    title: "IT & AI Training",
    desc: "Practical instruction in Adobe tools, AI automation, and IT fundamentals.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Automation",
    desc: "Custom Excel solutions and data analysis tools that cut processing time by 30%.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Monitor,
    title: "Curriculum Development",
    desc: "IT syllabus design and e-learning aligned with industry standards.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

const ServicesSection = () => (
  <section
    id="services"
    className="relative py-20 overflow-hidden"
    style={{
      background:
        "linear-gradient(180deg, #050505 0%, #070a12 30%, #060d14 60%, #050505 100%)",
    }}
  >
    <GradientOrbs variant="blue" />
    <LiquidFlow
      color1="rgba(59, 130, 246, 0.03)"
      color2="rgba(139, 92, 246, 0.02)"
      color3="rgba(99, 102, 241, 0.02)"
    />
    <RainEffect intensity={50} speed={0.7} />

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <AnimatedSection>
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-blue-400/60 mb-3">
          What I Do
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-14">
          <span className="gradient-text">Services</span>
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
              <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                {s.title}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed font-light">
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
