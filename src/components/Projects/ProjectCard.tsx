import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for managing products, orders, and analytics with real-time data visualization.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    links: { demo: "#", github: "#" },
    image: "bg-gradient-to-br from-purple-500 to-indigo-600",
  },
  {
    title: "Fintech Mobile App",
    description:
      "A seamless payment integration platform allowing users to transfer funds and manage savings goals.",
    tags: ["React Native", "Redux", "Node.js"],
    links: { demo: "#", github: "#" },
    image: "bg-gradient-to-br from-blue-500 to-cyan-400",
  },
  {
    title: "SaaS Landing Page",
    description:
      "High-performance landing page with scroll animations, pricing tables, and newsletter integration.",
    tags: ["React", "Framer Motion", "Shadcn UI"],
    links: { demo: "#", github: "#" },
    image: "bg-gradient-to-br from-orange-400 to-rose-500",
  },
];

export const Projects = () => {
  return (
    <section className="py-24 bg-transparent relative" id="projects">
      <div className="max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-center font-bold text-white">
            Projects
          </h2>
          <div className="w-20 h-1.5 bg-chelsea rounded-full" />
        </motion.div>

        {/* The Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05, // Scales the card up by 5%
                transition: { duration: 0.2 }, // Makes the hover snap quickly
              }}
            >
              <Card className="glass glass-hover w-[90%] overflow-hidden group transition-colors duration-300 h-full flex flex-col mx-auto">
                {/* Project Image Area */}
                <div
                  className={`h-48 w-full ${project.image} relative overflow-hidden`}
                >
                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button
                      size="icon"
                      className="rounded-full bg-chelsea hover:bg-chelsea-hover"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center gap-2">
                    <Folder className="w-4 h-4 text-gray-200" />
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-medium px-2.5 py-1 rounded-md glass glass-hover text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </CardContent>

                <CardContent className="grow">
                  <CardDescription className="text-gray-400 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
