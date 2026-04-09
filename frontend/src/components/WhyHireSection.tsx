import { Sparkles, TrendingUp, Zap, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  {
    icon: Sparkles,
    title: "50+ Projects Delivered",
    desc: "Successfully delivered over 50 branding projects including logos, posters, and social campaigns with exceptional client satisfaction.",
  },
  {
    icon: TrendingUp,
    title: "70% Engagement Growth",
    desc: "Designed campus marketing materials that boosted digital engagement by approximately 70%.",
  },
  {
    icon: Zap,
    title: "Automation Expert",
    desc: "Built Excel automation tools that cut processing time by 30% and minimize errors in data workflows.",
  },
  {
    icon: Users,
    title: "69 Colleges Impact",
    desc: "Spearheading IT education modernization across 69 affiliated colleges as curriculum developer.",
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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.title} delay={i * 0.15}>
            <div className="flex flex-col gap-4 items-start">
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
