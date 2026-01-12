

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", 
  "Redux Toolkit", "Node.js", "Git", "Figma", 
  "PostgreSQL", "Vite", "Shadcn/UI", "Framer Motion"
];

const TechStack = () => {
  return (
    <section id="stack" className="py-20 border-t border-border/40">
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl font-bold font-display">Technical Arsenal</h2>
        <p className="text-muted-foreground">The tools I use to bring ideas to life.</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div 
            key={skill}
            className="px-6 py-4 bg-secondary/20 border border-white/5 rounded-lg text-lg font-medium text-gray-300 hover:text-chelsea-light hover:border-chelsea/50 transition-all cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;