import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import { BackgroundGradient } from "@/components/animations/background/BackgroundGradient";

const projects = [
  {
    title: "LilyShop",
    description:
      "A social-first e-commerce platform bridging the gap between social interaction and online shopping. Features a custom product feed, real-time cart state management, and a seamless 'scroll-to-shop' experience.",
    tags: ["React", "Redux Toolkit", "Tailwind", "Node.js"],
    links: { demo: "#", repo: "https://github.com/Jd33n27/lilyshop" },
    color: "bg-blue-900/10",
  },
  {
    title: "SwiftPay",
    description:
      "A secure fintech dashboard designed for peer-to-peer transactions. Focuses on high-trust UI patterns, real-time balance updates via web sockets, and interactive data visualization for transaction history.",
    tags: ["TypeScript", "Next.js", "Chart.js", "Auth"],
    links: { demo: "#", repo: "https://github.com/Jd33n27/swiftpay" },
    color: "bg-emerald-900/10",
  },
  {
    title: "Chromatic",
    description:
      "A developer tool for generating accessible color palettes instantly. Built to help designers ensure contrast compliance (WCAG) while exploring creative themes using advanced color manipulation algorithms.",
    tags: ["React Hooks", "Algorithms", "Clipboard API"],
    links: { demo: "#", repo: "https://github.com/Jd33n27/chromatic" },
    color: "bg-purple-900/10",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundGradient />
      <Navbar />

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center rounded-full border border-chelsea/30 bg-chelsea/10 px-3 py-1 text-sm font-medium text-chelsea-light"
            >
              <span className="flex h-2 w-2 rounded-full bg-chelsea mr-2 animate-pulse"></span>
              Available for work
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-bold font-display leading-[1.05] tracking-tight">
              <span className="block bg-linear-to-r from-chelsea via-blue-400 to-purple-400 animate-gradient text-transparent bg-clip-text">
                Building pixel-perfect
              </span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-chelsea via-blue-400 to-purple-400 animate-gradient">
                web experiences.
              </span>
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              I'm{" "}
              <span className="text-chelsea font-semibold">Musa Jamaldeen</span>
              . A Frontend Developer and CS student at LASU. I build accessible,
              responsive applications with a focus on business logic and design.
            </p>

            <div className="flex flex-col md:inline-flex bg-red-500 gap-4 pt-4">
              <Button
                size="lg"
                className="bg-chelsea hover:bg-chelsea-hover text-white rounded-full px-8 h-14 text-lg shadow-[0_0_30px_-10px_var(--chelsea)] hover:shadow-[0_0_50px_-10px_var(--chelsea)] transition-shadow duration-500"
              >
                <a href="#work" className="flex items-center">
                  Check my work <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg gap-2 border-white/10 hover:bg-white/5 backdrop-blur-sm"
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="flex items-center"
                >
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-12 md:py-24 border-t border-white/5">
          <div className="flex flex-col gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display">
              Selected Work
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              A collection of projects where I solved complex problems with
              clean code.
            </p>
          </div>

          <div className="flex flex-col">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </section>

        {/* Other Sections */}
        <TechStack />
        <About />
        <Contact />

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 text-center text-muted-foreground text-sm">
          <p>
            © {new Date().getFullYear()} Musa Jamaldeen. Built with React,
            Tailwind & Chelsea Pride.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
