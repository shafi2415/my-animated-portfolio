import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import work1 from "@/assets/portfolio-work-1.jpg";
import work2 from "@/assets/portfolio-work-2.jpg";
import work3 from "@/assets/portfolio-work-3.jpg";
import work4 from "@/assets/portfolio-work-4.jpg";
import work5 from "@/assets/portfolio-work-5.jpg";
import work6 from "@/assets/portfolio-work-6.jpg";

const works = [work1, work2, work3, work4, work5, work6];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24 gradient-teal">
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Latest Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-16">
          A selection of poster designs, social media graphics, and branding
          work for various clients and organizations.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((src, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-colors group"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={src}
                  alt={`Design work ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
