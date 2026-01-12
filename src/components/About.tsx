import { BookOpen, Music, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 flex flex-col md:flex-row gap-12 items-start">
      {/* Text Side */}
      <div className="w-full md:w-2/3 space-y-6">
        <h2 className="text-3xl font-bold font-display">Beyond the Code</h2>
        <div className="prose prose-invert text-muted-foreground leading-loose">
          <p>
            I’m currently a Computer Science student at <span className="text-foreground font-semibold">Lagos State University (LASU)</span>. 
            My journey started with a curiosity for how things work on the web, which quickly turned into a passion for building pixel-perfect interfaces.
          </p>
          <p>
            When I'm not debugging React components or building <span className="text-chelsea font-medium">Fintech dashboards</span>, 
            you can find me researching business principles (currently deep-diving into Alex Hormozi's work) or listening to Beethoven to stay focused.
          </p>
        </div>
      </div>

      {/* Cards Side */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <div className="p-6 bg-secondary/10 border border-white/5 rounded-xl">
          <Code2 className="text-chelsea mb-4 h-8 w-8" />
          <h3 className="font-bold text-white mb-2">Frontend Specialist</h3>
          <p className="text-sm text-gray-400">Focusing on accessible, performant React applications.</p>
        </div>

        <div className="p-6 bg-secondary/10 border border-white/5 rounded-xl">
          <BookOpen className="text-purple-400 mb-4 h-8 w-8" />
          <h3 className="font-bold text-white mb-2">Always Learning</h3>
          <p className="text-sm text-gray-400">Currently exploring Next.js Server Actions and Advanced TypeScript.</p>
        </div>

        <div className="p-6 bg-secondary/10 border border-white/5 rounded-xl">
          <Music className="text-green-400 mb-4 h-8 w-8" />
          <h3 className="font-bold text-white mb-2">Classical & Afrobeat</h3>
          <p className="text-sm text-gray-400">Fueled by Beethoven and Asake.</p>
        </div>
      </div>
    </section>
  );
};

export default About;