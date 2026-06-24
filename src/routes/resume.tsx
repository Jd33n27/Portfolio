import Seo from "@/components/Seo";
import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  links: {
    demo: string;
    github: string;
  };
  slug: string;
}

const PROJECTS: Project[] = [
  {
    title: "Tax Clarity NG",
    category: "Fintech Application",
    description:
      "Developed a specialized web application to simplify tax calculations and information for the Nigerian market. Focused on a 'clean UI' and accessibility.",
    tags: ["Astro", "JavaScript"],
    links: {
      demo: "https://tax-clarity-ng.vercel.app/",
      github: "https://github.com/Apex-Shippers/Tax-Clarity-NG",
    },
    slug: "tax-clarity-ng",
  },
  {
    title: "MedBook Diagnostics",
    category: "MedTech Web App",
    description:
      "Browse labs, compare prices, book appointments, pay, get digital results. Built for the Nigerian healthcare market.",
    tags: ["Vite + React", "Typescript", "GO", "MySql"],
    links: {
      demo: "https://medical-test-booking-platform.vercel.app/",
      github:
        "https://github.com/Jd33n27/Medical-test-booking-platform",
    },
    slug: "medbook-diagnostics",
  },
  {
    title: "Lily-Shops",
    category: "E-commerce Platform",
    description:
      "Developed a full-featured e-commerce frontend using React and integrated complex state management for shopping carts. Debugged and optimized core features to ensure a seamless checkout experience and responsive layout across all devices.",
    tags: ["Vite + React", "State Management"],
    links: {
      demo: "https://lilyshops.com",
      github: "https://github.com/NexusMind-Company/Lily-Shop",
    },
    slug: "lily-shops",
  },
  {
    title: "Phantom Scraper",
    category: "HR Tech whitespace App",
    description:
      "Scrapes job listings, auto-applies based on rules. Built with AI agents and zero-budget stack.",
    tags: ["Vite + React", "Go", "PostgreSQL", "Node.Js"],
    links: {
      demo: "https://job-scraper-mvp.vercel.app/",
      github: "https://github.com/Jd33n27/job-scraper-mvp",
    },
    slug: "Phantom Scraper",
  },
  {
    title: "FlowStack",
    category: "User Management System",
    description:
      "Engineered a secure user authentication flow and dashboard interface. Focused on design consistency and high-performance rendering to improve user retention.",
    tags: ["Next.js", "PostgreSQL"],
    links: {
      demo: "https://flow-stack-product.vercel.app",
      github: "https://github.com/Abdurrahman99max/FlowStack",
    },
    slug: "flowstack",
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-28 md:px-32 lg:px-48">
      <Seo
        title="Resume | Musa Jamaldeen"
        description="Operational track record of Musa Jamaldeen. Engineering velocity and frontend architecture."
        canonical="https://musa-jamaldeen.vercel.app/resume"
        image="https://musa-jamaldeen.vercel.app/api/og?title=Resume%20%7C%20Musa%20Jamaldeen"
      />

      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-chelsea/20">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to Home
          </Link>
        </motion.div>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col lg:flex-row items-center gap-8 mb-12"
        >
          {/* Profile Picture Area - SECURED */}
          <div
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-lg shrink-0 bg-white/5 flex items-center justify-center relative select-none"
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="absolute inset-0 z-50 bg-transparent" />
            <img
              src="/img/IMG-20251104-WA0090.jpg"
              alt="Musa Jamaldeen"
              draggable="false"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover pointer-events-none select-none"
            />
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Musa Jamaldeen
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              Frontend Developer. Product Builder.
            </p>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto lg:mx-0">
              Computer Science student specializing in React, Next.js, and
              TypeScript. I build clean, scalable interfaces and optimize every
              small interaction so products feel minimal, fast, and easy to use.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <Button
                asChild
                className="h-12 px-6 rounded-xl font-bold bg-white text-black hover:bg-white/90"
              >
                <a href="mailto:musajamaldeen627@gmail.com?subject=Resume%20Request">
                  <Download className="w-5 h-5" />
                  Request Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 px-6 rounded-xl font-medium border-white/20 text-white hover:bg-white/10"
              >
                <a
                  href="https://github.com/Jd33n27"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-chelsea pl-4">
            Execution Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              // "JavaScript",
              "TypeScript",
              "React",
              // "Next.js",
              "Tailwind CSS",
              // "Bootstrap",
              // "Astro (Learning)",
              "Go (Learning)",
              // "Figma",
              // "Responsive Web Design",
              // "Git/GitHub",
              // "Linux",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-200 hover:bg-white/10 hover:border-chelsea/50 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Highlighted Projects - REAL DATA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-chelsea pl-4">
            Key Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <a
                key={index}
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group block"
              >
                <h3 className="font-bold text-white mb-2 text-lg group-hover:text-chelsea transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-chelsea-light bg-chelsea/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ROI / Highlights - AUTHENTIC */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-chelsea pl-4">
            Performance Signature
          </h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
            <ul className="space-y-4">
              {[
                "I optimize every little detail: spacing, loading states, component weight, interaction timing, and responsive behavior.",
                "My goal is for every project to feel minimal and fast to the user, even when the product logic is complex.",
                "I focus on clean UI/UX, efficient state management, accessibility, and design consistency across devices.",
                "Currently expanding into Astro for fast content-driven sites and Go for stronger end-to-end product foundations.",
              ].map((item, index) => (
                <li
                  key={index}
                  className="text-gray-300 flex items-start gap-3"
                >
                  <span className="w-2 h-2 mt-2 bg-chelsea rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-12 border-t border-white/10"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            Hire for Speed. Keep for Product Taste.
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            I am ready to ship interfaces that feel clean, minimal, and fast.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 rounded-xl font-bold bg-white text-black hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              <a href="mailto:musajamaldeen627@gmail.com">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
