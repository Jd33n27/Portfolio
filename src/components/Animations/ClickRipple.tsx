import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ClickRipple = () => {
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(), // Unique ID for key
      };

      setRipples((prev) => [...prev, newRipple]);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const removeRipple = (id: number) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-9999 overflow-hidden">
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

// Sub-component for individual ripple
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
      initial={{ opacity: 1, scale: 0 }}
      animate={{ opacity: 0, scale: 2 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onAnimationComplete={onComplete}
      style={{ top: y, left: x }}
      className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white bg-chelsea/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
    />
  );
};
