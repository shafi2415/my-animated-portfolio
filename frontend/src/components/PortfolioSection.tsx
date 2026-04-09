import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GradientOrbs from "./GradientOrbs";
import LiquidFlow from "./LiquidFlow";
import RainEffect from "./RainEffect";
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

const imageSets: Record<string, typeof socialImages> = {
  social: socialImages,
  ai: aiImages,
  brand: brandImages,
};

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("social");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = imageSets[activeTab] || [];
  const total = images.length;

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section
      id="portfolio"
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #050505 0%, #08070f 30%, #0a0812 60%, #060509 100%)",
      }}
    >
      <GradientOrbs variant="warm" />
      <LiquidFlow
        color1="rgba(251, 146, 60, 0.03)"
        color2="rgba(244, 114, 182, 0.02)"
        color3="rgba(139, 92, 246, 0.02)"
      />
      <RainEffect intensity={40} speed={0.6} />

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
            <div className="flex flex-wrap gap-2 mb-14">
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

          {/* 3-image carousel */}
          <AnimatePresence mode="wait">
            {images.length > 0 && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative flex items-center justify-center gap-0 sm:gap-0">
                  {/* Left arrow */}
                  <button
                    onClick={goPrev}
                    className="absolute left-0 sm:left-4 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Carousel track */}
                  <div className="flex items-center justify-center w-full max-w-4xl mx-auto"
                    style={{ perspective: "1200px" }}
                  >
                    {/* Previous image (blurred, left) */}
                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={`prev-${activeTab}-${prevIndex}`}
                        initial={{ opacity: 0, x: -80, scale: 0.6 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -80, scale: 0.6 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="hidden sm:block relative shrink-0 w-[18%] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
                        onClick={goPrev}
                        style={{
                          filter: "blur(6px) brightness(0.5)",
                          transform: "scale(0.85) translateX(15%)",
                          zIndex: 1,
                        }}
                      >
                        <img
                          src={images[prevIndex].src}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                      </motion.div>
                    </AnimatePresence>

                    {/* Current image (sharp, center) */}
                    <div className="relative w-[60%] sm:w-[50%] aspect-[3/4] z-10">
                      <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                          key={`center-${activeTab}-${currentIndex}`}
                          custom={direction}
                          initial={(dir: number) => ({
                            x: dir > 0 ? 200 : -200,
                            opacity: 0,
                            scale: 0.8,
                            borderRadius: "30%",
                          })}
                          animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1,
                            borderRadius: "16px",
                          }}
                          exit={(dir: number) => ({
                            x: dir < 0 ? 200 : -200,
                            opacity: 0,
                            scale: 0.8,
                            borderRadius: "30%",
                          })}
                          transition={{
                            x: { type: "spring", stiffness: 200, damping: 25 },
                            opacity: { duration: 0.35 },
                            scale: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
                            borderRadius: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
                          }}
                          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                          style={{
                            boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 80px rgba(99,102,241,0.05)",
                          }}
                        >
                          <img
                            src={images[currentIndex].src}
                            alt={images[currentIndex].title}
                            className="w-full h-full object-cover"
                          />
                          {/* Subtle vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </motion.div>
                      </AnimatePresence>

                      {/* Image counter */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 glass rounded-full px-4 py-1.5">
                        <p className="text-xs text-white/60 font-medium">
                          {currentIndex + 1} / {total}
                        </p>
                      </div>
                    </div>

                    {/* Next image (blurred, right) */}
                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={`next-${activeTab}-${nextIndex}`}
                        initial={{ opacity: 0, x: 80, scale: 0.6 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 80, scale: 0.6 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="hidden sm:block relative shrink-0 w-[18%] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
                        onClick={goNext}
                        style={{
                          filter: "blur(6px) brightness(0.5)",
                          transform: "scale(0.85) translateX(-15%)",
                          zIndex: 1,
                        }}
                      >
                        <img
                          src={images[nextIndex].src}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right arrow */}
                  <button
                    onClick={goNext}
                    className="absolute right-0 sm:right-4 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
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
                    className="text-center text-white/50 text-sm font-medium mt-10"
                  >
                    {images[currentIndex].title}
                  </motion.p>
                </AnimatePresence>

                {/* Dot indicators */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {images.map((_, i) => (
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
