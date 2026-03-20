import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Lily-Shops",
    category: "E-commerce Platform",
    description:
      "Developed a full-featured e-commerce frontend using React and integrated complex state management for shopping carts. Debugged and optimized core features to ensure a seamless checkout experience and responsive layout across all devices.",
    tags: ["React", "State Management", "Responsive Design"],
    links: { demo: "#", github: "#" },
    slug: "lily-shops",
    image: "bg-linear-to-br from-slate-900 to-slate-800",
  },
  {
    title: "FlowStack",
    category: "User Management System",
    description:
      "Engineered a secure user authentication flow and dashboard interface. Focused on design consistency and high-performance rendering to improve user retention.",
    tags: ["Authentication", "Dashboard", "Performance"],
    links: { demo: "#", github: "#" },
    slug: "flowstack",
    image: "bg-linear-to-br from-green-950 to-emerald-950", 
  },
  {
    title: "Tax Clarity NG",
    category: "Fintech Application",
    description:
      "Developed a specialized web application to simplify tax calculations and information for the Nigerian market. Focused on a 'clean UI' and accessibility.",
    tags: ["UI/UX", "Accessibility", "Web App"],
    links: { demo: "#", github: "#" },
    slug: "tax-clarity-ng",
    image: "bg-linear-to-br from-yellow-950 to-amber-950",
  },
  {
    title: "Phantom-clips",
    category: "Next.js Website",
    description:
      "Architected a modern web application using Next.js, leveraging SSR for improved SEO and performance. Configured a dedicated server from scratch.",
    tags: ["Next.js", "SSR", "DevOps"],
    links: { demo: "#", github: "#" },
    slug: "phantom-clips",
    image: "bg-linear-to-br from-purple-950 to-fuchsia-950",
  },
];

// Updated Spatial Logic for Checkerboard Bento
const getBentoLayout = (index: number) => {
  switch (index) {
    case 0: // Top Left: Square
      return {
        wrapper: "md:col-span-2 md:row-span-1 flex-col",
        content: "p-8 pb-4",
        imageWrapper: "relative w-full grow min-h-[200px]",
        mockup: "absolute top-4 left-6 right-[-20px] bottom-[-20px] rounded-tl-[24px]", // Bleeds bottom-right
      };
    case 1: // Top Right: Wide Rectangle
      return {
        wrapper: "md:col-span-3 md:row-span-1 flex-col md:flex-row",
        content: "p-8 md:w-[55%] flex flex-col justify-center",
        imageWrapper: "relative w-full md:w-[45%] grow min-h-[220px] md:min-h-full",
        mockup: "absolute inset-y-6 left-6 right-[-20px] rounded-l-[24px]", // Bleeds right
      };
    case 2: // Bottom Left: Wide Rectangle
      return {
        wrapper: "md:col-span-3 md:row-span-1 flex-col md:flex-row",
        content: "p-8 md:w-[55%] flex flex-col justify-center",
        imageWrapper: "relative w-full md:w-[45%] grow min-h-[220px] md:min-h-full",
        mockup: "absolute inset-y-6 left-6 right-[-20px] rounded-l-[24px]", // Bleeds right
      };
    case 3: // Bottom Right: Square
      return {
        wrapper: "md:col-span-2 md:row-span-1 flex-col",
        content: "p-8 pb-4",
        imageWrapper: "relative w-full grow min-h-[200px]",
        mockup: "absolute top-4 left-6 right-[-20px] bottom-[-20px] rounded-tl-[24px]", // Bleeds bottom-right
      };
    default:
      return { wrapper: "", content: "", imageWrapper: "", mockup: "" };
  }
};

export const Projects = () => {
  return (
    <section className="py-24 bg-transparent relative" id="projects">
      <div className="max-w-6xl px-6 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Core Projects
            </h2>
            <div className="w-20 h-1.5 bg-chelsea rounded-full mb-4" />
            <p className="text-muted-foreground max-w-xl text-lg">
              Showcasing my journey in building
              <span className="text-foreground font-medium"> precise, accessible, and responsive</span> interfaces.
            </p>
          </div>
          
          <Link to="/projects">
            <Button variant="ghost" className="text-foreground hover:text-chelsea group">
              View All Repos <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* The Checkerboard Bento Grid */}
        {/* Adjusted auto-rows to 360px for better vertical breathing room in the wide cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 auto-rows-auto md:auto-rows-[360px]">
          {projects.map((project, index) => {
            const layout = getBentoLayout(index);

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-[32px] border border-border bg-card flex transition-all duration-500 hover:border-chelsea/30 hover:bg-accent shadow-2xl ${layout.wrapper}`}
              >
                {/* Text Content Area */}
                <div className={`${layout.content} flex flex-col z-10`}>
                  <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-foreground tracking-tight">
                      {project.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-chelsea bg-chelsea/10 px-3 py-1.5 rounded-full border border-chelsea/20 whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-3 py-1.5 rounded-lg bg-accent border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* UI Masking / Visual Mockup Area */}
                <div className={`${layout.imageWrapper} overflow-hidden pointer-events-none group-hover:pointer-events-auto`}>
                  {/* The encapsulated "App Window" bleeding off the edge */}
                  <div className={`${layout.mockup} ${project.image} border-t border-l border-r border-border flex flex-col transition-transform duration-700 group-hover:scale-[1.02]`}>
                    {/* Abstract App Header Bar */}
                    <div className="h-10 border-b border-border flex items-center px-4 gap-2 opacity-40">
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                    </div>
                  </div>

                  {/* Glass Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[4px] z-20">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 w-12"
                      >
                        <Github className="w-6 h-6" />
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};