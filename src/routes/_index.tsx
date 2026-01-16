import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects/ProjectCard";
import Seo from "@/components/Seo"; // Import

export default function HomePage() {
  return (
    <div className="">
      <Seo 
        title="Musa Jamaldeen | Frontend Developer in Lagos" 
        description="Portfolio of Musa Jamaldeen, a Frontend Developer in Lagos specializing in React, Next.js, and high-performance web applications."
        canonical="https://musa-jamaldeen.vercel.app/"
      />
      <Hero />
      <Projects />
    </div>
  );
}