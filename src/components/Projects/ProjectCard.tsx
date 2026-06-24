// import { motion } from "framer-motion";
// import { Github, ArrowRight, ExternalLink } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { getBentoLayout } from "@/lib/bento-layout";

// const projects = [
//   {
//     title: "Tax Clarity NG",
//     category: "Fintech Application",
//     description:
//       "Developed a specialized web application to simplify tax calculations and information for the Nigerian market. Focused on a 'clean UI' and accessibility.",
//     tags: ["Astro", "JavaScript"],
//     links: {
//       demo: "https://tax-clarity-ng.vercel.app/",
//       github: "https://github.com/Apex-Shippers/Tax-Clarity-NG",
//     },
//     slug: "tax-clarity-ng",
//   },
//   {
//     title: "MedBook Diagnostics",
//     category: "MedTech Web App",
//     description:
//       "Browse labs, compare prices, book appointments, pay, get digital results. Built for the Nigerian healthcare market.",
//     tags: ["Vite + React", "Typescript", "GO", "MySql"],
//     links: {
//       demo: "https://medical-test-booking-platform.vercel.app/",
//       github: "https://github.com/Jd33n27/Medical-test-booking-platform",
//     },
//     slug: "medbook-diagnostics",
//   },
//   {
//     title: "Lily-Shops",
//     category: "E-commerce Platform",
//     description:
//       "Developed a full-featured e-commerce frontend using React and integrated complex state management for shopping carts. Debugged and optimized core features to ensure a seamless checkout experience and responsive layout across all devices.",
//     tags: ["Vite + React", "State Management"],
//     links: {
//       demo: "https://lilyshops.com",
//       github: "https://github.com/NexusMind-Company/Lily-Shop",
//     },
//     slug: "lily-shops",
//   },
//   {
//     title: "Phantom Scraper",
//     category: "HR Tech whitespace App",
//     description:
//       "Scrapes job listings, auto-applies based on rules. Built with AI agents and zero-budget stack.",
//     tags: ["Vite + React", "Go", "PostgreSQL", "Node.Js"],
//     links: {
//       demo: "https://job-scraper-mvp.vercel.app/",
//       github: "https://github.com/Jd33n27/job-scraper-mvp",
//     },
//     slug: "Phantom Scraper",
//   },
//   {
//     title: "FlowStack",
//     category: "User Management System",
//     description:
//       "Engineered a secure user authentication flow and dashboard interface. Focused on design consistency and high-performance rendering to improve user retention.",
//     tags: ["Next.js", "PostgreSQL"],
//     links: {
//       demo: "https://flow-stack-product.vercel.app",
//       github: "https://github.com/Abdurrahman99max/FlowStack",
//     },
//     slug: "flowstack",
//   },
//   // {
//   //   title: "Phantom-clips",
//   //   category: "Next.js Website",
//   //   description:
//   //     "Architected a modern web application using Next.js, leveraging SSR for improved SEO and performance. Configured a dedicated server from scratch.",
//   //   tags: ["Next.js", "SSR", "DevOps"],
//   //   links: {
//   //     demo: "https://phantomclips.com",
//   //     github: "https://github.com/Jd33n27/Phantom-clip",
//   //   },
//   //   slug: "phantom-clips",
//   // },
// ];

// export const Projects = () => {
//   return (
//     <section
//       className="py-24 bg-transparent relative scroll-mt-24"
//       id="projects"
//     >
//       <div className="max-w-6xl px-6 mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
//         >
//           <div>
//             <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
//               Core Projects
//             </h2>
//             <div className="w-20 h-1.5 bg-chelsea rounded-full mb-4" />
//             <p className="text-muted-foreground max-w-xl text-lg">
//               Showcasing my journey in building
//               <span className="text-foreground font-medium">
//                 {" "}
//                 precise, accessible, and responsive
//               </span>{" "}
//               interfaces.
//             </p>
//           </div>

//           <Link to="/projects">
//             <Button
//               variant="ghost"
//               className="text-foreground hover:text-chelsea group"
//             >
//               View All Repos{" "}
//               <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>
//         </motion.div>

//         {/* The Checkerboard Bento Grid */}
//         {/* Adjusted auto-rows to 360px for better vertical breathing room in the wide cards */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-6 auto-rows-auto md:auto-rows-[360px]">
//           {projects.map((project, index) => {
//             const layout = getBentoLayout(index);

//             return (
//               <motion.article
//                 key={project.slug}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className={`group relative overflow-hidden rounded-[32px] border border-border bg-card flex transition-all duration-500 hover:border-chelsea/30 hover:bg-accent shadow-2xl ${layout.wrapper}`}
//               >
//                 {/* Text Content Area */}
//                 <div className={`${layout.content} flex flex-col z-10`}>
//                   <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-4 mb-4">
//                     <h3 className="text-2xl font-bold text-foreground tracking-tight">
//                       {project.title}
//                     </h3>
//                     <span className="text-[10px] uppercase tracking-wider font-bold text-chelsea bg-chelsea/10 px-3 py-1.5 rounded-full border border-chelsea/20 whitespace-nowrap">
//                       {project.category}
//                     </span>
//                   </div>

//                   <p className="text-muted-foreground leading-relaxed text-sm mb-6">
//                     {project.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="text-[11px] font-medium px-3 py-1.5 rounded-lg bg-accent border border-border text-muted-foreground"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex flex-wrap gap-3 mt-auto">
//                     {project.links.demo && (
//                       <a
//                         href={project.links.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1 sm:flex-none"
//                       >
//                         <Button
//                           variant="default"
//                           size="sm"
//                           className="w-full gap-2"
//                         >
//                           <ExternalLink className="w-4 h-4" />
//                           View Demo
//                         </Button>
//                       </a>
//                     )}
//                     {project.links.github && (
//                       <a
//                         href={project.links.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1 sm:flex-none"
//                       >
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           className="w-full gap-2 border-border hover:bg-accent hover:text-foreground"
//                         >
//                           <Github className="w-4 h-4" />
//                           Visit Repository
//                         </Button>
//                       </a>
//                     )}
//                   </div>
//                 </div>

//                 {/* UI Masking / Visual Mockup Area */}
//                 <div
//                   className={`${layout.imageWrapper} overflow-hidden pointer-events-none group-hover:pointer-events-auto`}
//                 >
//                   {/* The encapsulated "App Window" bleeding off the edge */}
//                   <div
//                     className={`${layout.mockup} ${project.image} border-t border-l border-r border-border flex flex-col transition-transform duration-700 group-hover:scale-[1.02]`}
//                   >
//                     {/* Abstract App Header Bar */}
//                     <div className="h-10 border-b border-border flex items-center px-4 gap-2 opacity-40">
//                       <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
//                       <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
//                       <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };
