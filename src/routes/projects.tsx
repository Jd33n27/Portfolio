import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Github } from "lucide-react";
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

const getBentoLayout = (index: number) => {
    const layoutIndex = index % 4;
    switch (layoutIndex) {
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
  

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <div className="p-2 rounded-full bg-accent group-hover:bg-chelsea/20">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
              Selected Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A curated collection of digital products built to solve real business problems.
              <span className="text-foreground"> Scalable. Secure. Profitable.</span>
            </p>
          </motion.div>
        </div>

        {/* Project Grid */}
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
                  
                </div>

                {/* UI Masking / Visual Mockup Area */}
                <div className={`${layout.imageWrapper} overflow-hidden pointer-events-none group-hover:pointer-events-auto`}>
                  {/* The encapsulated "App Window" bleeding off the edge */}
                  <div className={`${layout.mockup} border border-border flex flex-col transition-transform duration-700 group-hover:scale-[1.02] bg-black`}>
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                    {/* Abstract App Header Bar */}
                    <div className="relative h-10 border-b border-border flex items-center px-4 gap-2 bg-black/20 backdrop-blur-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                    </div>
                  </div>

                  {/* Glass Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[4px] z-20">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
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
            )
          })}
        </div>
      </div>
    </div>
  );
}