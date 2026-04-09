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

const skills = [
  { icon: Palette, title: "Adobe Creative Suite", desc: "Photoshop, Illustrator, InDesign" },
  { icon: PenTool, title: "Canva & Figma", desc: "Design & prototyping" },
  { icon: FileSpreadsheet, title: "Advanced Excel", desc: "Automation & data analysis" },
  { icon: MonitorSmartphone, title: "Word / PowerPoint", desc: "Documents & presentations" },
  { icon: Video, title: "Video Editing", desc: "Production & post-processing" },
  { icon: Sparkles, title: "Social Media", desc: "Visual identity & strategy" },
  { icon: Cpu, title: "Hardware & AI", desc: "PC maintenance & AI workflows" },
  { icon: BookOpen, title: "Curriculum Dev", desc: "E-learning & instruction" },
  { icon: Globe, title: "Languages", desc: "Malayalam, English, Arabic, Urdu" },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-[#050505]">
    <div className="max-w-6xl mx-auto px-6">
      <AnimatedSection>
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/25 mb-3">
          Capabilities
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-white mb-14">
          Skills & Tools
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
              <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-white/[0.1] transition-colors">
                <skill.icon className="w-4 h-4 text-white/50" />
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
