import { Palette, PenTool, Share2, BookOpen, FileSpreadsheet, Monitor } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Eye-catching visual content for social media, print, and digital platforms using Adobe Creative Suite.",
  },
  {
    icon: PenTool,
    title: "Logo & Branding",
    desc: "Unique brand identities with custom logos, visual guidelines, and cohesive brand presence.",
  },
  {
    icon: Share2,
    title: "Social Media Branding",
    desc: "Complete social media visual strategies that boost engagement and strengthen digital presence.",
  },
  {
    icon: BookOpen,
    title: "IT & AI Training",
    desc: "Practical instruction in Adobe tools, AI automation, and IT fundamentals for students and professionals.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Automation",
    desc: "Custom Excel solutions and data analysis tools that save time and reduce errors by up to 30%.",
  },
  {
    icon: Monitor,
    title: "Curriculum Development",
    desc: "Comprehensive IT syllabus design and e-learning implementation aligned with industry standards.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 gradient-teal">
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          My Services
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-16">
          From creative design to IT education and automation, I offer a
          comprehensive suite of services to help you grow.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.15}>
            <div className="group bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-primary/40 hover:bg-card/80 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
