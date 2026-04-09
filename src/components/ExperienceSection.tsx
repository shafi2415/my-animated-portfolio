import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    num: "01",
    title: "Founder & Lead Graphic Designer",
    place: "Sha Creatives Design Studio",
    period: "January 2022 – Present",
    desc: "Established a freelance design agency specializing in social media branding and visual identity. Delivered over 50 marketing posters and 10+ custom logos for diverse clients.",
  },
  {
    num: "02",
    title: "IT & AI Instructor and Digital Media Coordinator",
    place: "Malja'a Shareeath and Arts College",
    period: "April 2023 – Present",
    desc: "Teach Adobe Creative Suite and PC hardware basics. Run Microsoft Office and AI automation sessions. Designed campus marketing materials; engagement grew by about 70%.",
  },
  {
    num: "03",
    title: "Board Member & IT Curriculum Developer",
    place: "Coordination of Jami'a Junior Colleges CIC",
    period: "March 2023 – Present",
    desc: "Spearheading IT education modernization across 69 affiliated colleges. Authored a comprehensive IT syllabus aligning with current industry standards.",
  },
  {
    num: "04",
    title: "Online Tutor",
    place: "Zidnee Online Islamic School",
    period: "December 2025 – Present",
    desc: "Providing online instruction in Islamic studies and related subjects.",
  },
  {
    num: "05",
    title: "Operations Officer & Data Analyst",
    place: "Bismi E Tickets",
    period: "October 2019 – March 2021",
    desc: "Oversaw travel documentation and ticketing operations during COVID-19. Developed Excel automation tools to minimize errors and cut processing time by 30%.",
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
