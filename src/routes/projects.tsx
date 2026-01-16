import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Project Data
const projects = [
  {
    title: "BizPulse",
    category: "Fullstack & Cloud",
    description:
      "AI-powered business intelligence co-pilot delivering narrative insights and actionable recommendations for SMBs.",
    image: "/assets/biz-pulse.png", // Ensure you have these images or use placeholders
    slug: "bizpulse",
  },
  {
    title: "SoroSurance",
    category: "Backend",
    description:
      "AI-powered voice-first insurance claim platform for elderly, visually impaired, and low-literate users.",
    image: "/assets/sorosurance.jpg",
    slug: "sorosurance",
  },
  {
    title: "MediPal",
    category: "Fullstack",
    description:
      "AI-driven health savings platform helping Nigerians prepare financially for medical emergencies.",
    image: "/assets/medipal.jpg",
    slug: "medipal",
  },
  {
    title: "Newsly.AI",
    category: "Backend",
    description:
      "AI-powered personalized news digest platform with email & voice summaries.",
    image: "/assets/newsly.jpg",
    slug: "newsly-ai",
  },
  {
    title: "AURA",
    category: "Backend",
    description:
      "Digital twin platform for real-time health visualization and predictive insights.",
    image: "/assets/aura.jpg",
    slug: "aura",
  },
  {
    title: "Gradify",
    category: "Backend",
    description:
      "Web app for streamlined assignment distribution, submission, and AI-assisted grading.",
    image: "/assets/gradify.png",
    slug: "gradify",
  },
  {
    title: "MediDoc",
    category: "Fullstack",
    description:
      "Medical appointment scheduling and management system for patients and healthcare professionals.",
    image: "/assets/medidoc.jpg",
    slug: "medidoc",
  },
  {
    title: "Django CRUD Kit",
    category: "Open Source",
    description:
      "Library toolkit that simplifies CRUD interface generation in Django apps.",
    image: "/assets/django-crud.jpg",
    slug: "django-crud-kit",
  },
  {
    title: "Skill Drop",
    category: "Backend",
    description:
      "Platform connecting students to real-world mini-projects (gigs).",
    image: "/assets/skilldrop.jpg",
    slug: "skill-drop",
  },
  {
    title: "SmartMail AI",
    category: "Fullstack",
    description:
      "Gmail-integrated AI assistant that filters emails, generates smart replies, and syncs calendar events.",
    image: "/assets/smartmail.jpg",
    slug: "smartmail-ai",
  },
  {
    title: "Isele",
    category: "Fullstack",
    description:
      "Smart event management assistant that lives in WhatsApp, enabling natural chat-based scheduling.",
    image: "/assets/isele.jpg",
    slug: "isele",
  },
  {
    title: "ReadFlow",
    category: "Backend",
    description:
      "Transforms PDFs into flowing, web-readable formats inspired by Webtoon and LightReader.",
    image: "/assets/readflow.jpg",
    slug: "readflow",
  },
  {
    title: "TrustGrid",
    category: "Toolkit",
    description:
      "AI-powered privacy compliance platform ensuring NDPR compliance for organizations in Nigeria.",
    image: "/assets/trustgrid.png",
    slug: "trustgrid",
  },
  {
    title: "EnderAI",
    category: "Fullstack",
    description:
      "Conquers complex forms and drafts personalized essays using Chrome AI APIs.",
    image: "/assets/enderai.jpg",
    slug: "enderai",
  },
  {
    title: "OpenTrace",
    category: "Fullstack",
    description: "Universal dual-layer anti-theft protocol for mobile devices.",
    image: "/assets/opentrace.jpg",
    slug: "opentrace",
  },
  {
    title: "Multi-Trend API",
    category: "Backend",
    description:
      "Aggregates trending topics from multiple platforms into a single unified dashboard.",
    image: "/assets/mta.png",
    slug: "multi-trend-api",
  },
  {
    title: "Inventory",
    category: "Fullstack",
    description:
      "Stock management system for small businesses and individuals.",
    image: "/assets/inventory.jpg",
    slug: "inventory",
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
    transition={{ delay: index * 0.05 }} // Stagger effect
    className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-chelsea/50 transition-all duration-300 flex flex-col h-full"
  >
    {/* Image Area */}
    <div className="h-48 bg-white/5 relative overflow-hidden">
      {/* If image missing, show fallback gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-chelsea/20 to-purple-900/20" />
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        onError={(e) => {
          // Fallback if image fails to load
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>

    {/* Content Area */}
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-xl text-white group-hover:text-chelsea transition-colors">
          {project.title}
        </h3>
        <span className="inline-block px-3 py-1 text-xs font-medium bg-chelsea/20 text-chelsea-foreground rounded-full border border-chelsea/20">
          {project.category}
        </span>
      </div>

      <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* Action Button */}
      <Link to={`/projects/${project.slug}`}>
        <Button
          variant="ghost"
          className="w-full justify-between hover:bg-white/10 text-white group/btn"
        >
          More Details
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-chelsea" />
        </Button>
      </Link>
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
              Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Explore modern web experiences that turn bold ideas into fast,
              functional, and responsive products.
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
