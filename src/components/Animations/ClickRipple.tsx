import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const ClickRipple = () => {
  const prefersReducedMotion = useReducedMotion();
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, textarea, select, [role='button']")) {
        return;
      }

      setRipples((prev) => [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }]);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  const removeRipple = (id: number) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <Ripple
            key={ripple.id}
            x={ripple.x}
            y={ripple.y}
            onComplete={() => removeRipple(ripple.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const Ripple = ({
  x,
  y,
  onComplete,
}: {
  x: number;
  y: number;
  onComplete: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.8, scale: 0 }}
      animate={{ opacity: 0, scale: 2.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      onAnimationComplete={onComplete}
      style={{ top: y, left: x }}
      className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-chelsea-light/60 bg-chelsea/15 shadow-[0_0_20px_rgba(59,130,246,0.35)]"
    />
  );
};
