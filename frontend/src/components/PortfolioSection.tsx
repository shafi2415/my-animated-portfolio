import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import work1 from "@/assets/portfolio-work-1.jpg";
import work2 from "@/assets/portfolio-work-2.jpg";
import work3 from "@/assets/portfolio-work-3.jpg";
import work4 from "@/assets/portfolio-work-4.jpg";
import work5 from "@/assets/portfolio-work-5.jpg";
import work6 from "@/assets/portfolio-work-6.jpg";

const works = [
  { src: work1, title: "Branding Design" },
  { src: work2, title: "Social Media" },
  { src: work3, title: "Visual Identity" },
  { src: work4, title: "Poster Design" },
  { src: work5, title: "Campaign" },
  { src: work6, title: "Creative Work" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-20 bg-[#050505]">
    <div className="divider-gradient mb-16" />
    <div className="max-w-6xl mx-auto px-6">
      <AnimatedSection>
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-orange-400/60 mb-3">
          Selected Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-14">
          <span className="gradient-text-warm">Portfolio</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map((work, i) => (
          <AnimatedSection key={i} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={work.src}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end">
                <div className="p-5">
                  <p className="text-white font-medium text-sm tracking-tight">
                    {work.title}
                  </p>
                  <p className="text-orange-300/60 text-xs font-light">View Project</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl border border-white/[0.04] group-hover:border-white/10 transition-colors duration-400" />
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
