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
  {
    icon: Palette,
    title: "Adobe Creative Suite",
    desc: "Photoshop, Illustrator, InDesign",
  },
  {
    icon: PenTool,
    title: "Canva & Figma",
    desc: "Modern design & prototyping tools",
  },
  {
    icon: FileSpreadsheet,
    title: "Advanced Microsoft Excel",
    desc: "Automation, data analysis, spreadsheets",
  },
  {
    icon: MonitorSmartphone,
    title: "Microsoft Word / PowerPoint",
    desc: "Professional documents & presentations",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Video production & post-processing",
  },
  {
    icon: Sparkles,
    title: "Social Media Branding",
    desc: "Visual identity & content strategy",
  },
  {
    icon: Cpu,
    title: "Hardware & AI Tools",
    desc: "PC maintenance & AI-powered workflows",
  },
  {
    icon: BookOpen,
    title: "Curriculum Development",
    desc: "E-learning & classroom instruction",
  },
  {
    icon: Globe,
    title: "Languages",
    desc: "Malayalam, English, Arabic, Urdu",
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-card/30">
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          My Skills
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-16">
          Versatile skills in design, technology, education, and languages.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <AnimatedSection key={skill.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-card/50 border border-border/50 rounded-2xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm">{skill.desc}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
