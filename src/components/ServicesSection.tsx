import { Code, Palette, PenTool } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Responsive, user-friendly websites and applications using modern technologies.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Eye-catching visual content creation for social media, print, and web.",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    desc: "Unique and memorable brand marks representing your brand identity.",
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
          Specializing in web development, graphic design, and logo design, I
          offer a comprehensive suite of services to enhance your brand and
          online presence.
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
