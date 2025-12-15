export default function TechStackSection() {
  const technologies = [
    { name: "Next.js 15", category: "Frontend" },
    { name: "React 19", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Zustand", category: "State Management" },
    { name: "WebSocket", category: "Real-time" },
    { name: "RESTful API", category: "Backend" },
    { name: "JWT Authentication", category: "Security" },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-muted/50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Technology Stack</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Built with Modern, Scalable Technology
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-lg bg-background border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <div className="font-medium">{tech.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{tech.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

