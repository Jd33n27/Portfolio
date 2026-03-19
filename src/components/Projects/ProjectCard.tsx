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
    image: "bg-linear-to-br from-green-900 to-emerald-900", 
  },
  {
    title: "Tax Clarity NG",
    category: "Fintech Application",
    description:
      "Developed a specialized web application to simplify tax calculations and information for the Nigerian market. Focused on a 'clean UI' and accessibility, ensuring complex financial data is digestible for users.",
    tags: ["UI/UX", "Accessibility", "Web App"],
    links: { demo: "#", github: "#" },
    slug: "tax-clarity-ng",
    image: "bg-linear-to-br from-yellow-900 to-amber-900",
  },
  {
    title: "Phantom-clips",
    category: "Next.js Website",
    description:
      "Architected a modern web application using Next.js, leveraging server-side rendering (SSR) for improved SEO and performance. Purchased, configured, and maintained a dedicated server from scratch, handling the full deployment pipeline.",
    tags: ["Next.js", "SSR", "DevOps"],
    links: { demo: "#", github: "#" },
    slug: "phantom-clips",
    image: "bg-linear-to-br from-purple-900 to-fuchsia-900",
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