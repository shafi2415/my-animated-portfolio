import { motion } from "framer-motion";

interface Orb {
  color: string;
  size: string;
  x: string;
  y: string;
  duration: number;
  delay: number;
}

interface Props {
  variant?: "hero" | "blue" | "purple" | "warm" | "cool" | "subtle";
}

const orbSets: Record<string, Orb[]> = {
  hero: [
    { color: "rgba(99, 102, 241, 0.08)", size: "700px", x: "20%", y: "30%", duration: 25, delay: 0 },
    { color: "rgba(139, 92, 246, 0.06)", size: "500px", x: "70%", y: "60%", duration: 30, delay: 2 },
    { color: "rgba(59, 130, 246, 0.05)", size: "600px", x: "50%", y: "20%", duration: 35, delay: 5 },
  ],
  blue: [
    { color: "rgba(59, 130, 246, 0.06)", size: "500px", x: "15%", y: "40%", duration: 28, delay: 0 },
    { color: "rgba(99, 102, 241, 0.05)", size: "400px", x: "75%", y: "25%", duration: 32, delay: 3 },
  ],
  purple: [
    { color: "rgba(139, 92, 246, 0.06)", size: "450px", x: "80%", y: "50%", duration: 26, delay: 0 },
    { color: "rgba(168, 85, 247, 0.04)", size: "350px", x: "20%", y: "30%", duration: 30, delay: 4 },
  ],
  warm: [
    { color: "rgba(251, 146, 60, 0.05)", size: "450px", x: "70%", y: "40%", duration: 28, delay: 0 },
    { color: "rgba(244, 114, 182, 0.04)", size: "400px", x: "25%", y: "60%", duration: 34, delay: 2 },
  ],
  cool: [
    { color: "rgba(6, 182, 212, 0.05)", size: "400px", x: "60%", y: "35%", duration: 30, delay: 0 },
    { color: "rgba(59, 130, 246, 0.04)", size: "350px", x: "30%", y: "55%", duration: 26, delay: 3 },
  ],
  subtle: [
    { color: "rgba(255, 255, 255, 0.02)", size: "500px", x: "50%", y: "50%", duration: 35, delay: 0 },
    { color: "rgba(99, 102, 241, 0.02)", size: "400px", x: "20%", y: "40%", duration: 40, delay: 5 },
  ],
};

const GradientOrbs = ({ variant = "subtle" }: Props) => {
  const orbs = orbSets[variant] || orbSets.subtle;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            left: orb.x,
            top: orb.y,
            transform: "translate(-50%, -50%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 80, -60, 40, 0],
            y: [0, -60, 40, -80, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default GradientOrbs;
