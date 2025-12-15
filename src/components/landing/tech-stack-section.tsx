export default function TechStackSection() {
  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
  ];

  return (
    <section id="tech-stack" className="py-20 bg-muted/50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Tech Stack</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Built with modern, reliable technologies
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full bg-background border border-border hover:border-primary transition-colors"
            >
              <span className="font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

