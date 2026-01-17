import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Portfolio System",
    category: "React / Vite",
    description:
      "The high-performance application you are looking at right now. Built for speed, SEO, and business conversion using modern React architecture.",
    tags: ["React", "TypeScript", "Tailwind v4", "Framer Motion"],
    links: { demo: "/", github: "https://github.com/Jd33n27" },
    slug: "portfolio-v2",
    image: "bg-linear-to-br from-slate-900 to-slate-800", // Placeholder until screenshot
  },
  {
    title: "Digital Identity Hub",
    category: "UI Component",
    description:
      "A centralized bio-link aggregator designed for mobile-first social conversion. Aggregates cross-platform presence into a single entry point.",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    links: { demo: "#", github: "https://github.com/Jd33n27/Social-links-profile" },
    slug: "social-links",
    image: "bg-linear-to-br from-green-900 to-emerald-900", 
  },
  {
    title: "High-CTR Content Card",
    category: "Frontend UI",
    description:
      "Optimized blog preview component focusing on visual hierarchy and click-through rates. Semantic structure ensures maximum accessibility.",
    tags: ["Semantic HTML", "CSS Flexbox", "Typographic Scale"],
    links: { demo: "#", github: "https://github.com/Jd33n27/BLOG-PREVIEW-CARD" },
    slug: "blog-preview",
    image: "bg-linear-to-br from-yellow-900 to-amber-900",
  },
];

export const Projects = () => {
  return (
    <section className="py-24 bg-transparent relative" id="projects">
      <div className="max-w-6xl px-6 mx-auto">
        {/* Section Header - Honest & Direct */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Core Projects
            </h2>
            <div className="w-20 h-1.5 bg-chelsea rounded-full mb-4" />
            <p className="text-white/60 max-w-xl text-lg">
              Showcasing my journey in building 
              <span className="text-white font-medium"> precise, accessible, and responsive</span> interfaces.
            </p>
          </div>
          
          <Link to="/projects">
            <Button variant="ghost" className="text-white hover:text-chelsea group">
              View All Repos <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02, 
                transition: { duration: 0.2 },
              }}
              className="h-full"
            >
              <Card className="glass glass-hover w-full overflow-hidden group transition-colors duration-300 h-full flex flex-col border-white/5">
                {/* Project Image Area */}
                <div className={`h-48 w-full ${project.image} relative overflow-hidden group`}>
                   {/* Gradient Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                   
                   {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full bg-white text-black hover:bg-white/90"
                        >
                        <Github className="w-5 h-5" />
                        </Button>
                    </a>
                  </div>
                </div>

                <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-white text-xl font-bold">
                            {project.title}
                        </CardTitle>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-chelsea bg-chelsea/10 px-2 py-1 rounded-sm border border-chelsea/20">
                            {project.category}
                        </span>
                    </div>
                </CardHeader>

                <CardContent className="grow flex flex-col gap-4">
                  <CardDescription className="text-gray-400 leading-relaxed text-sm">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tags.map((tag) => (
                        <span
                        key={tag}
                        className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 border border-white/5 text-white/50"
                        >
                        {tag}
                        </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};