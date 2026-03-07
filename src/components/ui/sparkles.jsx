import { useEffect, useRef, useId } from "react";
import { cn } from "../../lib/utils";

function hexToRgb(hex) {
  hex = hex.replace("#", "");
  const bigint = parseInt(hex, 6);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

export function SparklesCore({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 100,
  className,
  particleColor = "#FFFFFF",
  speed = 1,
}) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particles = useRef([]);
  const id = useId();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const rgb = hexToRgb(particleColor);

    const initParticles = () => {
      particles.current = [];
      const count = Math.floor(
        (canvas.width * canvas.height) / (10000 / particleDensity),
      );
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * speed * 0.3,
          speedY: (Math.random() - 0.5) * speed * 0.3,
          opacity: Math.random(),
          opacityDir: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles.current) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacityDir * 0.005 * speed;
        if (p.opacity <= 0 || p.opacity >= 1) p.opacityDir *= -1;
        p.opacity = Math.max(0, Math.min(1, p.opacity));

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${p.opacity})`;
        ctx.fill();
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [maxSize, minSize, particleColor, particleDensity, speed]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      style={{ background }}
      className={cn("h-full w-full", className)}
    />
  );
}
