import { useEffect, useRef } from "react";

interface Props {
  intensity?: number;
  speed?: number;
}

const RainEffect = ({ intensity = 80, speed = 1 }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const drops: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < intensity; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 18 + 8,
        speed: (Math.random() * 3 + 2) * speed,
        opacity: Math.random() * 0.08 + 0.02,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach((d) => {
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x + 0.3, d.y + d.length);
        ctx.strokeStyle = `rgba(180, 200, 220, ${d.opacity})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        d.y += d.speed;
        if (d.y > canvas.height + 10) {
          d.y = -d.length;
          d.x = Math.random() * canvas.width;
        }
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [intensity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default RainEffect;
