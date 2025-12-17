export default function TechStackSection() {
  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        { name: "Next.js 15", description: "React Framework" },
        { name: "React 19", description: "UI Library" },
        { name: "TypeScript", description: "Type Safety" },
        { name: "Tailwind CSS", description: "Styling" },
        { name: "Zustand", description: "State Management" },
        { name: "Shadcn UI", description: "Component Library" },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { name: "Django", description: "Python Framework" },
        { name: "Django REST Framework", description: "API Development" },
        { name: "Redis", description: "Caching & Sessions" },
        { name: "Celery", description: "Task Queue" },
        { name: "PostgreSQL", description: "Database" },
        { name: "WebSocket", description: "Real-time Communication" },
        { name: "JWT", description: "Authentication" },
      ],
    },
    {
      title: "Infrastructure",
      technologies: [
        { name: "Docker", description: "Containerization" },
        { name: "AWS", description: "Cloud Services" },
        { name: "Nginx", description: "Reverse Proxy" },
        { name: "GitHub Actions", description: "CI/CD" },
        { name: "Monitoring", description: "System Health" },
        { name: "Load Balancing", description: "High Availability" },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-muted/50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Technology Stack</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Built with Modern, Scalable Technology
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="px-5 py-4 rounded-lg bg-background border border-border hover:border-primary hover:shadow-lg transition-all cursor-default group"
                  >
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {tech.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

