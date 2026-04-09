import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import social1 from "@/assets/social-1.jpg";
import social2 from "@/assets/social-2.jpg";
import social3 from "@/assets/social-3.jpg";
import social4 from "@/assets/social-4.jpg";
import social5 from "@/assets/social-5.jpg";

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

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("social");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % socialImages.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + socialImages.length) % socialImages.length
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
    <section id="portfolio" className="py-20 bg-[#050505]">
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
          {activeTab === "social" && (
            <motion.div
              key="social"
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
                <div className="relative w-full max-w-lg aspect-[4/5] overflow-hidden rounded-2xl">
                  <AnimatePresence
                    initial={false}
                    custom={direction}
                    mode="wait"
                  >
                    <motion.img
                      key={currentIndex}
                      src={socialImages[currentIndex].src}
                      alt={socialImages[currentIndex].title}
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
                      {currentIndex + 1} / {socialImages.length}
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
                  key={currentIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="text-center text-white/50 text-sm font-medium mt-6"
                >
                  {socialImages[currentIndex].title}
                </motion.p>
              </AnimatePresence>

              {/* Dot indicators */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {socialImages.map((_, i) => (
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

          {activeTab === "ai" && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <ImageIcon className="w-8 h-8 text-blue-400/50" />
              </div>
              <p className="text-white/30 text-lg font-medium mb-2">
                Coming Soon
              </p>
              <p className="text-white/15 text-sm font-light">
                AI apps and website projects will be added here
              </p>
            </motion.div>
          )}

          {activeTab === "brand" && (
            <motion.div
              key="brand"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                <ImageIcon className="w-8 h-8 text-purple-400/50" />
              </div>
              <p className="text-white/30 text-lg font-medium mb-2">
                Coming Soon
              </p>
              <p className="text-white/15 text-sm font-light">
                Brand identity projects will be added here
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;
