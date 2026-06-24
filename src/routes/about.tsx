import Seo from "@/components/Seo";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
// import { Github, ExternalLink } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { getBentoLayout } from "@/lib/bento-layout";

// Reusable Components

const SectionHeader = ({ title }: { title: string }) => (
  <motion.h2
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="text-3xl font-bold mb-8 text-foreground border-l-4 border-chelsea pl-4"
  >
    {title}
  </motion.h2>
);

const TechCard = ({
  name,
  iconPath,
  iconText,
  iconType,
  color,
}: {
  name: string;
  iconPath?: string;
  iconText?: string;
  iconType?: "react-atom";
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-card border border-border rounded-xl p-4 transition-all duration-300 group cursor-pointer hover:bg-accent"
  >
    <div className="flex items-center gap-3">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent group-hover:scale-110 transition-transform duration-300"
        style={{ color: color }}
      >
        {iconText ? (
          <span className="text-sm font-extrabold tracking-normal">{iconText}</span>
        ) : iconType === "react-atom" ? (
          <svg
            viewBox="-11.5 -10.23174 23 20.46348"
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <circle cx="0" cy="0" r="2.05" fill="currentColor" />
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        ) : (
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={iconPath} />
          </svg>
        )}
      </div>
      <span className="font-medium text-lg text-muted-foreground group-hover:text-foreground">
        {name}
      </span>
    </div>
  </motion.div>
);

// const featuredProjects = [
//     {
//       title: "Programming Quiz",
//       category: "Ed-Tech UI",
//       description: "A digital compilation of programming excercises",
//       repo: "https://github.com/Jd33n27/CSC-218-pq",
//       demolink: "https://github.com/Jd33n27/CSC-218-pq",
//       slug: "programming-quiz",
//       image: "bg-gradient-to-br from-slate-900 to-slate-800",
//     },
//     {
//       title: "Data Visualization Tool",
//       category: "Data Analysis UI",
//       description: "A tool for building interactive data visualization interfaces",
//       repo: "https://github.com/Jd33n27/python-data-visualizer-for-research-project",
//       demolink: "https://github.com/Jd33n27/python-data-visualizer-for-research-project",
//       slug: "data-visualization",
//       image: "bg-gradient-to-br from-green-950 to-emerald-950",
//     },
//     {
//       title: "React Learn",
//       category: "Ed-Tech UI",
//       description: "An edtech dashboard layout",
//       repo: "https://github.com/Jd33n27/Axia-2nd-Project",
//       demolink: "https://github.com/Jd33n27/Axia-2nd-Project",
//       slug: "react-learn",
//       image: "bg-gradient-to-br from-yellow-950 to-amber-950",
//     },
//     {
//       title: "Color Flipper V2",
//       category: "Interactive UI",
//       description: "An interactive JavaScript tool that dynamically changes the background color of the viewport. As a 'v2,' it includes A Modernized UI and advanced features like Hex code generation alongside standard color switching.",
//       repo: "https://github.com/Jd33n27/color-flipper-v2",
//       demolink: "https://github.com/Jd33n27/color-flipper-v2",
//       slug: "color-flipper-v2",
//       image: "bg-gradient-to-br from-purple-950 to-fuchsia-950",
//     },
//     {
//       title: "CGPA Calculator",
//       category: "Ed-Tech UI",
//       description: "An academic Java application designed to demonstrate Object-Oriented Programming (OOP) concepts. This is a console-based or simple GUI tool created for a coursework assessment.",
//       repo: "https://github.com/Jd33n27/java_school_project",
//       demolink: "https://github.com/Jd33n27/java_school_project",
//       slug: "cgpa-calculator",
//       image: "bg-gradient-to-br from-slate-900 to-slate-800",
//     },
//   ];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-28 md:px-32 lg:px-48">
      <Seo
        title="About Musa Jamaldeen"
        description="I don't just write code. I build revenue-generating assets for businesses using React and Next.js."
        canonical="https://musa-jamaldeen.vercel.app/about"
        image="https://musa-jamaldeen.vercel.app/api/og?title=Frontend%20Systems%20That%20Feel%20Fast"
      />
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <div className="p-2 rounded-full bg-accent group-hover:bg-chelsea/20">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to Home
          </Link>
        </motion.div>

        {/* Hero Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground tracking-tight">
                Musa Jamaldeen
              </h1>
              <div className="text-2xl text-chelsea-light mb-8 font-medium">
                Frontend Engineer
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  Most developers focus on only writing code.{" "}
                  <span className="text-foreground font-bold">
                    I focus on building frontend systems that drive real
                    business outcomes while writing code.
                  </span>
                </p>
                <p>
                  Focusing on only writing code matters, only when it improves
                  speed, retention, or conversion. My role is to identify
                  frontend bottlenecks and engineer solutions that help products
                  scale faster and convert better.
                </p>
                <p>
                  If you want a frontend partner who understands that{" "}
                  <span className="text-foreground font-bold">
                    Latency = Lost Revenue
                  </span>
                  , let’s talk.
                </p>

                <p>
                  If you want a frontend partner who understands that{" "}
                  <span className="text-foreground font-bold">
                    Performance = Profits
                  </span>
                  , let’s talk.
                </p>
              </div>
            </motion.div>

            {/* Profile Image Area - SECURED */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div
                className="w-64 h-64 relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-card select-none"
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
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="mb-24">
          <SectionHeader title="High-Leverage Stack" />
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
            My leverage is strongest where frontend engineering, product speed,
            and clean UI meet: TypeScript, React, Next.js, Tailwind CSS, and
            performance-focused implementation. I am adding Astro for fast
            content-driven sites and Go as a backend learning track.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {/*JavaScript 
            <TechCard
              name="JavaScript"
              color="#F7DF1E"
              iconPath="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
            />*/}
            {/* TypeScript */}
            <TechCard
              name="TypeScript"
              color="#3178C6"
              iconPath="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
            />
             {/*React 
            <TechCard
              name="React"
              color="#38BDF8"
              iconType="react-atom"
            />*/}
            {/* Next.js */}
            <TechCard
              name="Next.js"
              color="#ffffff"
              iconPath="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"
            />
            {/* Tailwind */}
            <TechCard
              name="Tailwind"
              color="#06B6D4"
              iconPath="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565-0.89-2.288-1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
            />
             {/*Astro 
            <TechCard
              name="Astro (Learning)"
              color="#FF5D01"
              iconPath="M12 2 4.2 20.5c-.2.5.2 1 0.7 1h3.7c.3 0 .6-.2.7-.5L12 14.4l2.7 6.6c.1.3.4.5.7.5h3.7c.5 0 .9-.5.7-1L12 2Zm0 5.2 2.1 5.1H9.9L12 7.2Z"
            />*/}
            {/* Go */}
            <TechCard
              name="Go (Learning)"
              color="#00ADD8"
              iconText="Go"
            />
          </div>
        </section>

        {/* Proof of Work Section intentionally paused while the portfolio is repositioned.
        <section className="mb-24">
          <SectionHeader title="Featured Projects" />
          ...
        </section>
        */}
      </div>
    </div>
  );
}
