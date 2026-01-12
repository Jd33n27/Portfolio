import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  links: { demo: string; repo: string };
  color: string;
  index: number;
}

const ProjectCard = ({ title, description, tags, links, color, index }: ProjectProps) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  
  // Parallax Effect setup
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className={cn(
        "flex flex-col gap-8 md:gap-12 items-center py-20 md:py-32",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      
      {/* 1. Visual Side with Hover Animation */}
      <motion.div 
        whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={cn(
          "w-full md:w-1/2 aspect-video rounded-2xl border border-white/10 relative overflow-hidden group shadow-2xl cursor-pointer perspective-1000",
          color // bg-blue-900/20 etc
        )}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Mock UI content inside */}
        <div className="absolute top-8 left-8 right-8 bottom-0 bg-dark/90 rounded-t-lg border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:translate-y-2">
            <div className="flex items-center gap-2 p-3 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            <div className="p-4 space-y-3">
                <div className="h-2 w-1/3 bg-white/10 rounded animate-pulse" />
                <div className="h-2 w-2/3 bg-white/5 rounded" />
                <div className="h-32 w-full bg-white/5 rounded mt-4" />
            </div>
        </div>
      </motion.div>

      {/* 2. Content Side with Staggered Entrance */}
      <div className="w-full md:w-1/2 space-y-6">
        <motion.div 
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-chelsea-light font-mono text-xs tracking-widest uppercase">0{index + 1} — Featured</span>
          <h3 className="text-4xl font-bold font-display mt-2 mb-4">{title}</h3>
        
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-500/10 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Button asChild className="bg-white text-black hover:bg-gray-200 rounded-full font-bold transition-transform hover:scale-105 active:scale-95">
              <a href={links.demo} target="_blank" rel="noreferrer">
                View Live <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            
            <Button variant="ghost" asChild className="rounded-full gap-2 hover:bg-white/5 hover:text-white transition-colors">
              <a href={links.repo} target="_blank" rel="noreferrer">
                <Github className="w-4 h-4" /> Source Code
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;