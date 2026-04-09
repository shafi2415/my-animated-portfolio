import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GradientOrbs from "./GradientOrbs";
import LiquidFlow from "./LiquidFlow";
import social1 from "@/assets/social-1.jpg";
import social2 from "@/assets/social-2.jpg";
import social3 from "@/assets/social-3.jpg";
import social4 from "@/assets/social-4.jpg";
import social5 from "@/assets/social-5.jpg";
import brand1 from "@/assets/brand-1.jpg";
import brand2 from "@/assets/brand-2.jpg";
import brand3 from "@/assets/brand-3.jpg";
import brand4 from "@/assets/brand-4.jpg";
import ai1 from "@/assets/ai-1.jpg";
import ai2 from "@/assets/ai-2.jpg";

const tabs = [
  { id: "social", label: "Social Media & Print Designs" },
  { id: "ai", label: "AI Apps & Websites" },
  { id: "brand", label: "Brand Identity Designs" },
];

const socialImages = [
  { src: social1, title: "Quran Class Poster" },
  { src: social2, title: "College Admission" },
  { src: social3, title: "Darora Royal Dates" },
  { src: social4, title: "Entrance Exam" },
  { src: social5, title: "Event Design" },
];

const aiImages = [
  { src: ai1, title: "Darora Royal Group Dashboard" },
  { src: ai2, title: "KinderJoy Islamic School App" },
];

const brandImages = [
  { src: brand1, title: "M.A.O College Identity" },
  { src: brand2, title: "Al Ishraq Signage" },
  { src: brand3, title: "Crown Collection Parfum" },
  { src: brand4, title: "Darora Packaging" },
];

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("social");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const activeImages = activeTab === "social" ? socialImages : activeTab === "brand" ? brandImages : activeTab === "ai" ? aiImages : [];

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % activeImages.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + activeImages.length) % activeImages.length
    );
  };

  // Morph animation variants
  const imageVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.85,
      borderRadius: "40%",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      borderRadius: "16px",
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.85,
      borderRadius: "40%",
    }),
  };

  return (
    <section id="portfolio" className="relative py-20 bg-[#050505] overflow-hidden">
      <GradientOrbs variant="warm" />
      <LiquidFlow
        color1="rgba(251, 146, 60, 0.03)"
        color2="rgba(244, 114, 182, 0.02)"
        color3="rgba(139, 92, 246, 0.02)"
      />

      <div className="relative z-10">
        <div className="divider-gradient mb-16" />
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-orange-400/60 mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-10">
            <span className="gradient-text-warm">Portfolio</span>
          </h2>
        </AnimatedSection>

        {/* Tab selector */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentIndex(0);
                  setDirection(0);
                }}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-400 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-white/30 hover:text-white/60"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Content area */}
        <AnimatePresence mode="wait">
          {(activeTab === "social" || activeTab === "brand" || activeTab === "ai") && activeImages.length > 0 && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Carousel */}
              <div className="relative flex items-center justify-center gap-4 sm:gap-8">
                {/* Left arrow */}
                <button
                  onClick={goPrev}
                  className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Image display */}
                <div className={`relative w-full max-w-lg overflow-hidden rounded-2xl ${activeTab === "brand" ? "aspect-square" : "aspect-[4/5]"}`}>
                  <AnimatePresence
                    initial={false}
                    custom={direction}
                    mode="wait"
                  >
                    <motion.img
                      key={`${activeTab}-${currentIndex}`}
                      src={activeImages[currentIndex].src}
                      alt={activeImages[currentIndex].title}
                      custom={direction}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: {
                          type: "spring",
                          stiffness: 200,
                          damping: 25,
                        },
                        opacity: { duration: 0.35 },
                        scale: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
                        borderRadius: {
                          duration: 0.45,
                          ease: [0.23, 1, 0.32, 1],
                        },
                      }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 glass rounded-full px-4 py-1.5">
                    <p className="text-xs text-white/60 font-medium">
                      {currentIndex + 1} / {activeImages.length}
                    </p>
                  </div>
                </div>

                {/* Right arrow */}
                <button
                  onClick={goNext}
                  className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Image title */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${activeTab}-title-${currentIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="text-center text-white/50 text-sm font-medium mt-6"
                >
                  {activeImages[currentIndex].title}
                </motion.p>
              </AnimatePresence>

              {/* Dot indicators */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {activeImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentIndex ? 1 : -1);
                      setCurrentIndex(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "bg-white/70 w-6"
                        : "bg-white/15 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
