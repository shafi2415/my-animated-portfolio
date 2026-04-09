import { Phone, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => (
  <section id="contact" className="py-24 gradient-teal">
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-6">
          Let's Work Together
        </h2>
        <p className="text-foreground/70 max-w-xl text-lg leading-relaxed mb-12">
          Bringing creativity and efficiency to every project! Expertise in
          design, automation, and content development. Ready to collaborate and
          create impactful solutions.
        </p>
      </AnimatedSection>

      <div className="flex flex-col sm:flex-row gap-8">
        <AnimatedSection delay={0.15}>
          <a
            href="https://wa.me/917994724015"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card/50 border border-border/50 rounded-2xl px-8 py-6 hover:border-primary/40 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs mb-1">WhatsApp</p>
              <p className="font-display font-semibold text-foreground">
                (+91) 799 472 4015
              </p>
            </div>
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <a
            href="mailto:shafisayd2415@gmail.com"
            className="flex items-center gap-4 bg-card/50 border border-border/50 rounded-2xl px-8 py-6 hover:border-primary/40 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs mb-1">Email</p>
              <p className="font-display font-semibold text-foreground">
                shafisayd2415@gmail.com
              </p>
            </div>
          </a>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ContactSection;
