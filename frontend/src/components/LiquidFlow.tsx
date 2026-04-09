import { motion } from "framer-motion";

interface Props {
  color1?: string;
  color2?: string;
  color3?: string;
}

const LiquidFlow = ({
  color1 = "rgba(99, 102, 241, 0.04)",
  color2 = "rgba(139, 92, 246, 0.03)",
  color3 = "rgba(59, 130, 246, 0.03)",
}: Props) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Liquid blob 1 */}
      <motion.div
        className="absolute"
        style={{
          width: "120%",
          height: "60%",
          top: "-10%",
          left: "-10%",
          background: `linear-gradient(135deg, ${color1}, transparent 60%)`,
          borderRadius: "40% 60% 70% 30% / 40% 50% 50% 60%",
          filter: "blur(60px)",
        }}
        animate={{
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 50% 60%",
            "60% 40% 30% 70% / 50% 60% 40% 50%",
            "30% 70% 60% 40% / 60% 40% 50% 40%",
            "40% 60% 70% 30% / 40% 50% 50% 60%",
          ],
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Liquid blob 2 */}
      <motion.div
        className="absolute"
        style={{
          width: "80%",
          height: "50%",
          bottom: "-5%",
          right: "-10%",
          background: `linear-gradient(225deg, ${color2}, transparent 60%)`,
          borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%",
          filter: "blur(60px)",
        }}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 50% 60% 40% 50%",
            "40% 60% 70% 30% / 40% 50% 50% 60%",
            "70% 30% 40% 60% / 60% 40% 50% 40%",
            "60% 40% 30% 70% / 50% 60% 40% 50%",
          ],
          x: [0, -25, 20, 0],
          y: [0, 15, -10, 0],
        }}
        transition={{ duration: 25, delay: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Liquid blob 3 - center */}
      <motion.div
        className="absolute"
        style={{
          width: "60%",
          height: "40%",
          top: "30%",
          left: "20%",
          background: `radial-gradient(ellipse, ${color3}, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.2, 0.9, 1.1, 1],
          x: [0, 40, -30, 20, 0],
          y: [0, -30, 20, -10, 0],
        }}
        transition={{ duration: 30, delay: 6, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LiquidFlow;
