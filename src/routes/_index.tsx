import { ClickRipple } from "@/components/Animations/ClickRipple";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects/ProjectCard";

export default function HomePage() {
  return (
    <>
      <ClickRipple />
      <Navbar />
      <Hero />
      <Projects />
    </>
  );
}
