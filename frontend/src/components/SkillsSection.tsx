import { motion } from "framer-motion";
import {
  Palette,
  FileSpreadsheet,
  Globe,
  Video,
  Cpu,
  BookOpen,
  PenTool,
  Sparkles,
  MonitorSmartphone,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import LiquidFlow from "./LiquidFlow";
import ParticleField from "./ParticleField";

const skills = [
  { icon: Palette, title: "Adobe Creative Suite", desc: "Photoshop, Illustrator, InDesign", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: PenTool, title: "Canva & Figma", desc: "Design & prototyping", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: FileSpreadsheet, title: "Advanced Excel", desc: "Automation & data analysis", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: MonitorSmartphone, title: "Word / PowerPoint", desc: "Documents & presentations", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Video, title: "Video Editing", desc: "Production & post-processing", color: "text-red-400", bg: "bg-red-500/10" },
  { icon: Sparkles, title: "Social Media", desc: "Visual identity & strategy", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: Cpu, title: "Hardware & AI", desc: "PC maintenance & AI workflows", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: BookOpen, title: "Curriculum Dev", desc: "E-learning & instruction", color: "text-teal-400", bg: "bg-teal-500/10" },
  { icon: Globe, title: "Languages", desc: "Malayalam, English, Arabic, Urdu", color: "text-indigo-400", bg: "bg-indigo-500/10" },
];

const SkillsSection = () => (
  <section id="skills" className="relative py-20 bg-[#050505] overflow-hidden">
    <LiquidFlow
      color1="rgba(52, 211, 153, 0.03)"
      color2="rgba(6, 182, 212, 0.02)"
      color3="rgba(99, 102, 241, 0.02)"
    />
    <ParticleField particleCount={15} speed={0.25} opacity={0.08} />

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <AnimatedSection>
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-emerald-400/60 mb-3">
          Capabilities
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-14">
          <span className="gradient-text-green">Skills & Tools</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {skills.map((skill, i) => (
          <AnimatedSection key={skill.title} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="group glass rounded-xl p-5 flex items-center gap-4 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className={`w-9 h-9 rounded-lg ${skill.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                <skill.icon className={`w-4 h-4 ${skill.color}`} />
              </div>
              <div>
                <h3 className="font-medium text-white text-sm tracking-tight">
                  {skill.title}
                </h3>
                <p className="text-white/25 text-xs font-light">{skill.desc}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
