import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers, Zap, Braces, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

const FloatingBadge = ({
  icon: Icon,
  label,
  delay,
  x,
  y,
  constraintsRef,
  reducedMotion,
}: {
  icon: LucideIcon;
  label: string;
  delay: number;
  x: number;
  y: number;
  constraintsRef: React.RefObject<HTMLDivElement | null>;
  reducedMotion: boolean;
}) => (
  <motion.div
    drag={!reducedMotion}
    dragConstraints={constraintsRef}
    dragElastic={0.2}
    initial={{ opacity: 0, y: 20 }}
    animate={
      reducedMotion
        ? { opacity: 1, y: 0, x: 0 }
        : {
            opacity: 1,
            y: [0, -12, 0],
            x: [0, 8, 0],
          }
    }
    transition={
      reducedMotion
        ? { duration: 0.4, delay }
        : {
            opacity: { duration: 0.5, delay },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
            x: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + 1,
            },
          }
    }
    whileDrag={{ scale: 1.08, cursor: "grabbing" }}
    whileHover={{ scale: 1.04, cursor: "grab" }}
    className="absolute hidden md:flex items-center gap-3 px-5 py-3 rounded-2xl glass border border-white/10 shadow-2xl z-20 backdrop-blur-md"
    style={{ top: `${y}%`, left: `${x}%` }}
  >
    <div className="p-2 rounded-full bg-chelsea/20">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <span className="text-sm font-bold text-white tracking-wide">{label}</span>
  </motion.div>
);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100dvh-4rem)] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-chelsea/10 rounded-full blur-[120px] pointer-events-none" />

      <FloatingBadge
        icon={Code2}
        label="React.js"
        delay={0.5}
        x={10}
        y={25}
        constraintsRef={containerRef}
        reducedMotion={reducedMotion}
      />
      <FloatingBadge
        icon={Layers}
        label="Next.js"
        delay={0.8}
        x={75}
        y={20}
        constraintsRef={containerRef}
        reducedMotion={reducedMotion}
      />
      <FloatingBadge
        icon={Braces}
        label="TypeScript"
        delay={1.2}
        x={15}
        y={70}
        constraintsRef={containerRef}
        reducedMotion={reducedMotion}
      />
      <FloatingBadge
        icon={Zap}
        label="High Performance"
        delay={1.5}
        x={70}
        y={65}
        constraintsRef={containerRef}
        reducedMotion={reducedMotion}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-chelsea/30 bg-chelsea/5 mb-8 pointer-events-auto"
        >
          <span className="relative flex h-2.5 w-2.5">
            {!reducedMotion && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            )}
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm font-medium text-white/80 tracking-wide">
            Available for New Projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight leading-[1.05] pointer-events-auto"
        >
          Building Digital <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/50">
            Products That Scale.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light pointer-events-auto"
        >
          I help founders bridge the gap between complex engineering and intuitive design.
          <span className="text-white/90 font-medium"> No bloat. No jargon. Just results.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto mb-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-chelsea hover:bg-white/90 text-lg h-14 px-10 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <a href="mailto:musajamaldeen627@gmail.com?subject=Free%20Code%20Audit%20Request">
              Get Free Code Audit <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="text-white text-lg h-14 px-10 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/30"
          >
            <Link to="/about">View My Approach</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 text-white/45 pointer-events-auto"
        >
          {[
            "100% On-Time Delivery",
            "Next.js Specialists",
            "Scalable Architecture",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
