import { Sparkles, TrendingUp, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  {
    icon: Sparkles,
    title: "Proven Expertise",
    desc: "Increased design efficiency by 50% through streamlined workflows.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Success",
    desc: "Successfully delivered over 30 projects with exceptional client satisfaction.",
  },
  {
    icon: Zap,
    title: "Versatile Skill Set",
    desc: "Expert in Adobe Creative Suite, data analysis with Excel, and effective team leadership.",
  },
];

const WhyHireSection = () => (
  <section className="py-24 bg-card/30">
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-16">
          Why Hire Me?
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.title} delay={i * 0.15}>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {r.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyHireSection;
