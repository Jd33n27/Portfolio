import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-chelsea/99 opacity-80 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold text-white mb-6"
        >
          Hello, I'm Jamal
        </motion.h1>

        {/* Role & Location Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-2 md:gap-4 text-white/80 text-lg md:text-xl mb-8 font-medium"
        >
          <span className="text-white">Frontend Developer</span>

          <div className="flex items-center gap-1.5">
            <MapPin className="w-6 h-6 text-white/70" />
            <span>Lagos, Nigeria.</span>
          </div>
        </motion.div>

        {/* Subheadline - The Empathetic Part */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A Developer bridging the gap between complex engineering and intuitive
          design. I don't just write code; I build products that solve real
          problems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-chelsea hover:bg-chelsea-hover text-white text-base h-12 px-8"
          >
            View Projects <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-chelsea text-[18px] font-bold h-12 px-8 border border-border"
          >
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
