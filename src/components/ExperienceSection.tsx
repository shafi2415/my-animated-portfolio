import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    num: "01",
    title: "Digital Media Designer",
    place: "Malja'a Shareeath And Arts College",
    period: "August 2023 – Present",
    desc: "Create digital content, manage social media, design marketing materials.",
  },
  {
    num: "02",
    title: "Freelance Graphic Designer",
    place: "ShafiGraphy",
    period: "January 2021 – July 2023",
    desc: "Provide graphic design solutions, specializing in logo design and branding.",
  },
  {
    num: "03",
    title: "Executive, Board of Studies",
    place: "IT Coordination",
    period: "September 2023 – January 2024",
    desc: "Manage IT projects and provide technical support.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 bg-card/30">
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-16">
          My Experience
        </h2>
      </AnimatedSection>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.num} delay={i * 0.15}>
              <div className="flex gap-8 items-start">
                <div className="hidden md:flex w-16 h-16 rounded-full border-2 border-primary/40 items-center justify-center shrink-0 bg-background z-10">
                  <span className="font-display text-primary font-bold text-sm">
                    {exp.num}
                  </span>
                </div>
                <div className="bg-card/50 border border-border/50 rounded-2xl p-8 flex-1 hover:border-primary/30 transition-colors">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-1">
                    {exp.place}
                  </p>
                  <p className="text-muted-foreground text-xs mb-4">
                    {exp.period}
                  </p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
