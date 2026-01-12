import { motion } from "framer-motion";

export const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blob 1: Chelsea Blue - Top Left */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-chelsea/20 rounded-full blur-[100px]"
      />
      
      {/* Blob 2: Purple/Pink - Bottom Right (Adds warmth/calm) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.2, 0.4, 0.2],
          y: [0, -50, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[10%] -right-[10%] w-[40vw] h-[40vw] bg-purple-500/20 rounded-full blur-[120px]"
      />

      {/* Grid Overlay for Texture (Ramadan style) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </div>
  );
};