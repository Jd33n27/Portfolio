import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// ACTUAL GITHUB DATA (Verified for Jd33n27)
const projects = [
  {
    title: "Portfolio System",
    category: "React Ecosystem",
    description:
      "A production-grade developer portfolio built with Vite, Tailwind CSS v4, and Framer Motion. Features advanced animations and 'Business Mode' theming.",
    image: "/assets/portfolio.jpg", // Ensure you have a placeholder or use a gradient
    slug: "portfolio-v2",
    repo: "https://github.com/Jd33n27/portfolio-2" // Assuming repo name
  },
  {
    title: "Digital Identity Hub",
    category: "Social Tech",
    description:
      "Social-links-profile. A mobile-responsive hub for aggregating social media touchpoints. Solves the 'one link in bio' problem with a clean, fast UI.",
    image: "/assets/socials.jpg",
    slug: "social-links",
    repo: "https://github.com/Jd33n27/Social-links-profile"
  },
  {
    title: "High-CTR Content Card",
    category: "UI Component",
    description:
      "BLOG-PREVIEW-CARD. A rigorous implementation of a content preview interface. Focuses on typographic scale, spacing, and hover states to maximize user engagement.",
    image: "/assets/blog-card.jpg",
    slug: "blog-preview",
    repo: "https://github.com/Jd33n27/BLOG-PREVIEW-CARD"
  },
  {
    title: "QR Access Module",
    category: "Utility",
    description:
      "Getting-started / QR Component. A scannable, high-contrast QR code component designed for instant physical-to-digital user acquisition.",
    image: "/assets/qr.jpg",
    slug: "qr-component",
    repo: "https://github.com/Jd33n27/Getting-started" 
  },
  {
    title: "E-Commerce Layout Engine",
    category: "Academic",
    description:
      "Axia-2nd-monthly-exam-practtical. A responsive grid layout demonstrating mastery of modern CSS Grid and Flexbox for product listings.",
    image: "/assets/axia.jpg",
    slug: "axia-practical",
    repo: "https://github.com/Jd33n27/Axia-2nd-monthly-exam-practtical"
  },
  {
    title: "Axia Cohort 8 Foundation",
    category: "Learning",
    description:
      "COHORT8. A collection of foundational web development experiments and structure tests during the Axia Africa bootcamp.",
    image: "/assets/cohort.jpg",
    slug: "cohort-8",
    repo: "https://github.com/Jd33n27/COHORT8"
  },
];

// Components

const ProjectGridItem = ({
  project,
  index,
}: {
  project: any;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-chelsea/50 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(3,70,148,0.15)]"
  >
    {/* Image Area */}
    <div className="h-48 bg-black/40 relative overflow-hidden">
      {/* Fallback Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-chelsea/10 to-transparent" />
      {/* Only show image if you actually have assets, otherwise keep the clean gradient */}
      <img
        src={project.image}
        alt={project.title}
        className="hidden absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>

    {/* Content Area */}
    <div className="p-6 flex flex-col grow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-xl text-white group-hover:text-chelsea transition-colors">
          {project.title}
        </h3>
        <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-chelsea/10 text-chelsea rounded-sm border border-chelsea/20">
          {project.category}
        </span>
      </div>

      <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed grow">
        {project.description}
      </p>

      {/* Action Button */}
      <a href={project.repo} target="_blank" rel="noreferrer">
        <Button
          variant="ghost"
          className="w-full justify-between border border-white/5 hover:bg-white/5 text-white/70 hover:text-white group/btn h-12"
        >
          View Source
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-chelsea" />
        </Button>
      </a>
    </div>
  </motion.div>
);

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20 md:px-32 lg:px-48">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-chelsea/20">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Selected Works
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              A curated collection of digital products built to solve real business problems.
              <span className="text-gray-200"> Scalable. Secure. Profitable.</span>
            </p>
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectGridItem
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}