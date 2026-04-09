import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const education = [
  {
    degree: "Diploma in Graphic Design",
    school: "Diginet Online School",
    period: "January 2025 – June 2025",
  },
  {
    degree: "Master of Arts (MA)",
    school: "Darul Huda Islamic University",
    period: "April 2021 – March 2023",
  },
  {
    degree: "Bachelor of Arts (BA)",
    school: "University of Calicut",
    period: "April 2019 – March 2022",
  },
];

const EducationSection = () => (
  <section className="py-24 gradient-teal">
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-16">
          My Education
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {education.map((edu, i) => (
          <AnimatedSection key={edu.degree} delay={i * 0.15}>
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {edu.degree}
              </h3>
              <p className="text-primary text-sm font-medium mb-1">
                {edu.school}
              </p>
              <p className="text-muted-foreground text-xs">{edu.period}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
