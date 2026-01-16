import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers, Zap, Braces } from "lucide-react"; // Added Braces for TS
import { Button } from "@/components/ui/button";
import { useRef } from "react";

// Floating Draggable Glass Badge Component
const FloatingBadge = ({
  icon: Icon,
  label,
  delay,
  x,
  y,
  constraintsRef,
}: {
  icon: any;
  label: string;
  delay: number;
  x: number; // Percent position X
  y: number; // Percent position Y
  constraintsRef: any;
}) => (
  <motion.div
    drag
    dragConstraints={constraintsRef} // Keeps it inside the Hero section
    dragElastic={0.2} // Adds a nice "bouncy" feel when you pull it
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 1,
      y: [0, -15, 0], // Subtle floating up and down
      x: [0, 10, 0], // Subtle drifting sideways
    }}
    transition={{
      opacity: { duration: 0.5, delay },
      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay + 1 },
    }}
    whileDrag={{ scale: 1.1, cursor: "grabbing" }} // Pop effect on drag
    whileHover={{ scale: 1.05, cursor: "grab" }}
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
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000"
    >
      {/* Background Glow - Central Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-chelsea/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 4 Floating Draggable Tech Badges  */}
      
      {/* 1. React.js (Top Left) */}
      <FloatingBadge 
        icon={Code2} 
        label="React.js" 
        delay={0.5} 
        x={10} 
        y={25} 
        constraintsRef={containerRef} 
      />
      
      {/* 2. Next.js (Top Right) */}
      <FloatingBadge 
        icon={Layers} 
        label="Next.js" 
        delay={0.8} 
        x={75} 
        y={20} 
        constraintsRef={containerRef} 
      />
      
      {/* 3. TypeScript (Bottom Left) */}
      <FloatingBadge 
        icon={Braces} 
        label="TypeScript" 
        delay={1.2} 
        x={15} 
        y={70} 
        constraintsRef={containerRef} 
      />
      
      {/* 4. Performance (Bottom Right) */}
      <FloatingBadge 
        icon={Zap} 
        label="High Performance" 
        delay={1.5} 
        x={70} 
        y={65} 
        constraintsRef={containerRef} 
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center pointer-events-none">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-chelsea/30 bg-chelsea/5 mb-8 pointer-events-auto"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-white/80 tracking-wide">
            Available for New Projects
          </span>
        </motion.div>

        {/* Main Headline - Value Driven */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight pointer-events-auto"
        >
          Building Digital <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/50">
            Products That Scale.
          </span>
        </motion.h1>

        {/* Subheadline - Authority & Empathy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light pointer-events-auto"
        >
          I help founders bridge the gap between complex engineering and intuitive design.
          <span className="text-white/90 font-medium"> No bloat. No jargon. Just results.</span>
        </motion.p>

        {/* Buttons - High Contrast CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center pointer-events-auto"
        >
          <Button
            size="lg"
            className="bg-white text-chelsea hover:bg-white/90 text-lg h-14 px-10 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
          >
            View My Work <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-white text-lg h-14 px-10 rounded-full border border-white/20 hover:bg-white/10"
          >
            Book a Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};