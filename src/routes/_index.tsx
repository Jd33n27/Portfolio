import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects/ProjectCard";
import Seo from "@/components/Seo"; 

export default function HomePage() {
  return (
    <div className="">
      <Seo 
        title="Musa Jamaldeen | Building Digital Assets That Scale" 
        description="I help founders and businesses turn complex requirements into high-converting, scalable React applications. No fluff. Just shipping."
        canonical="https://musa-jamaldeen.vercel.app/"
      />
      <Hero />
      <Projects />
    </div>
  );
}