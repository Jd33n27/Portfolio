import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getBentoLayout } from "@/lib/bento-layout";
import Seo from "@/components/Seo";
import { useState } from "react";

const projects = [
  {
    title: "Portfolio System",
    category: "React Ecosystem",
    description:
      "A production-grade developer portfolio built with Vite, Tailwind CSS v4, and Framer Motion. Features advanced animations and 'Business Mode' theming.",
    image: "/assets/portfolio.jpg",
    gradient: "bg-linear-to-br from-slate-900 to-blue-950",
    slug: "portfolio-v2",
    repo: "https://github.com/Jd33n27/portfolio-2",
  },
  {
    title: "Digital Identity Hub",
    category: "Social Tech",
    description:
      "Social-links-profile. A mobile-responsive hub for aggregating social media touchpoints. Solves the 'one link in bio' problem with a clean, fast UI.",
    image: "/assets/socials.jpg",
    gradient: "bg-linear-to-br from-indigo-950 to-slate-900",
    slug: "social-links",
    repo: "https://github.com/Jd33n27/Social-links-profile",
  },
  {
    title: "High-CTR Content Card",
    category: "UI Component",
    description:
      "BLOG-PREVIEW-CARD. A rigorous implementation of a content preview interface. Focuses on typographic scale, spacing, and hover states to maximize user engagement.",
    image: "/assets/blog-card.jpg",
    gradient: "bg-linear-to-br from-rose-950 to-slate-900",
    slug: "blog-preview",
    repo: "https://github.com/Jd33n27/BLOG-PREVIEW-CARD",
  },
  {
    title: "QR Access Module",
    category: "Utility",
    description:
      "Getting-started / QR Component. A scannable, high-contrast QR code component designed for instant physical-to-digital user acquisition.",
    image: "/assets/qr.jpg",
    gradient: "bg-linear-to-br from-emerald-950 to-slate-900",
    slug: "qr-component",
    repo: "https://github.com/Jd33n27/Getting-started",
  },
  {
    title: "E-Commerce Layout Engine",
    category: "Academic",
    description:
      "Axia-2nd-monthly-exam-practtical. A responsive grid layout demonstrating mastery of modern CSS Grid and Flexbox for product listings.",
    image: "/assets/axia.jpg",
    gradient: "bg-linear-to-br from-amber-950 to-slate-900",
    slug: "axia-practical",
    repo: "https://github.com/Jd33n27/Axia-2nd-monthly-exam-practtical",
  },
  {
    title: "Axia Cohort 8 Foundation",
    category: "Learning",
    description:
      "COHORT8. A collection of foundational web development experiments and structure tests during the Axia Africa bootcamp.",
    image: "/assets/cohort.jpg",
    gradient: "bg-linear-to-br from-violet-950 to-slate-900",
    slug: "cohort-8",
    repo: "https://github.com/Jd33n27/COHORT8",
  },
];

function ProjectImage({
  src,
  alt,
  gradient,
}: {
  src: string;
  alt: string;
  gradient: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`absolute inset-0 ${gradient}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-28 md:px-8 lg:px-12">
      <Seo
        title="Projects | Musa Jamaldeen"
        description="Selected works and repositories by Musa Jamaldeen — scalable React and Next.js applications built for real business outcomes."
        canonical="https://musa-jamaldeen.vercel.app/projects"
      />
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 auto-rows-auto md:auto-rows-[360px]">
          {projects.map((project, index) => {
            const layout = getBentoLayout(index);

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-[32px] border border-border bg-card flex transition-all duration-500 hover:border-chelsea/30 hover:bg-accent shadow-2xl ${layout.wrapper}`}
              >
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

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full gap-2 border-border hover:bg-accent hover:text-foreground"
                        >
                          <Github className="w-4 h-4" />
                          Visit Repository
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                <div className={`${layout.imageWrapper} overflow-hidden`}>
                  <div
                    className={`${layout.mockup} border border-border flex flex-col transition-transform duration-700 group-hover:scale-[1.02] bg-black relative overflow-hidden`}
                  >
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      gradient={project.gradient}
                    />
                    <div className="relative h-10 border-b border-border flex items-center px-4 gap-2 bg-black/30 backdrop-blur-sm z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
