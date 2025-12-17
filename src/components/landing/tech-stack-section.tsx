"use client";

import { useEffect, useState } from "react";
import { 
  Code2, Database, Cloud, 
  Sparkles, Zap, Layers,
  ArrowRight, CheckCircle2
} from "lucide-react";

export default function TechStackSection() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const techCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "from-[#322996] to-blue-500",
      technologies: [
        { name: "Next.js 15", description: "React Framework", level: 95 },
        { name: "React 19", description: "UI Library", level: 98 },
        { name: "TypeScript", description: "Type Safety", level: 92 },
        { name: "Tailwind CSS", description: "Styling", level: 90 },
        { name: "Zustand", description: "State Management", level: 88 },
        { name: "Shadcn UI", description: "Component Library", level: 85 },
        { name: "zod", description: "Validation", level: 85 },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "Django", description: "Python Framework", level: 96 },
        { name: "Django REST Framework", description: "API Development", level: 94 },
        { name: "Redis", description: "Caching & Sessions", level: 90 },
        { name: "Celery", description: "Task Queue", level: 88 },
        { name: "PostgreSQL", description: "Database", level: 93 },
        { name: "WebSocket", description: "Real-time Communication", level: 91 },
        { name: "JWT", description: "Authentication", level: 89 },
      ],
    },
    {
      title: "Infrastructure",
      icon: Cloud,
      color: "from-cyan-500 to-blue-600",
      technologies: [
        { name: "Docker", description: "Containerization", level: 92 },
        { name: "AWS", description: "Cloud Services", level: 90 },
        { name: "Nginx", description: "Reverse Proxy", level: 88 },
        { name: "GitHub Actions", description: "CI/CD", level: 87 },
        { name: "Monitoring", description: "System Health", level: 85 },
        { name: "Load Balancing", description: "High Availability", level: 86 },
        {name: "Cloudflare", description: "CDN and DNS", level: 85 },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="relative py-32 bg-muted/30 scroll-mt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(50,41,150,0.1),transparent_60%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(50,41,150,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_60%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.15),transparent_60%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#322996]/10 to-blue-500/10 blur-sm animate-float"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#322996]/10 dark:bg-[#322996]/20 border border-[#322996]/20 dark:border-[#322996]/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#322996]" />
            <span className="text-sm font-medium text-[#322996]">Technology Stack</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-[#322996] bg-clip-text text-transparent">
              Built with Modern
            </span>
            <br />
            <span className="text-foreground">Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A carefully curated stack of cutting-edge technologies powering our platform
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {techCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const isHovered = hoveredCategory === categoryIndex;

            return (
              <div
                key={categoryIndex}
                className="relative group"
                onMouseEnter={() => setHoveredCategory(categoryIndex)}
                onMouseLeave={() => setHoveredCategory(null)}
                style={{
                  animation: mounted ? `fadeInUp 0.8s ease-out ${categoryIndex * 0.2}s both` : "none",
                }}
              >
                {/* Category Card */}
                <div className="relative h-full rounded-2xl border border-border/50 bg-gradient-to-br from-background/80 to-muted/40 backdrop-blur-xl p-6 transition-all duration-500 hover:border-[#322996]/50 hover:shadow-2xl hover:shadow-[#322996]/20">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`} />

                  {/* Category Header */}
                  <div className="relative z-10 mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {category.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#322996] animate-pulse" />
                          <span className="text-sm text-muted-foreground">
                            {category.technologies.length} Technologies
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technologies List */}
                  <div className="relative z-10 space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="group/tech relative p-4 rounded-xl bg-gradient-to-br from-card/50 to-card/30 border border-border/30 hover:border-[#322996]/50 hover:bg-gradient-to-br hover:from-[#322996]/5 hover:to-transparent transition-all duration-300 overflow-hidden"
                        style={{
                          animation: mounted && isHovered 
                            ? `slideInLeft 0.4s ease-out ${techIndex * 0.1}s both` 
                            : "none",
                        }}
                      >
                        {/* Progress Bar Background */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/50" />
                        <div
                          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{
                            width: mounted ? `${tech.level}%` : "0%",
                            transitionDelay: `${(categoryIndex * 0.2) + (techIndex * 0.1) + 0.5}s`,
                          }}
                        />

                        {/* Tech Content */}
                        <div className="relative z-10 flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle2 className="w-4 h-4 text-[#322996] dark:text-blue-400 flex-shrink-0 transition-colors duration-300" />
                              <h4 className="font-bold text-foreground group-hover/tech:text-[#322996] dark:group-hover/tech:text-blue-400 transition-colors duration-300">
                                {tech.name}
                              </h4>
                            </div>
                            <p className="text-sm text-muted-foreground ml-6">
                              {tech.description}
                            </p>
                          </div>
                          
                          {/* Level Badge */}
                          <div className="flex-shrink-0 px-3 py-1 rounded-full bg-[#322996]/10 dark:bg-[#322996]/20 border border-[#322996]/20 dark:border-blue-400/30 transition-colors duration-300">
                            <span className="text-xs font-bold text-[#322996] dark:text-blue-400 transition-colors duration-300">
                              {tech.level}%
                            </span>
                          </div>
                        </div>

                        {/* Hover Arrow */}
                        <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#322996] dark:text-blue-400 opacity-0 group-hover/tech:opacity-100 group-hover/tech:translate-x-0 translate-x-2 transition-all duration-300" />
                      </div>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#322996]/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Connection Lines (Visual Flow) */}
                {categoryIndex < techCategories.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-0">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#322996]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#322996] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Stats/Info */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Zap, label: "Performance", value: "99.9%", description: "Uptime" },
            { icon: Layers, label: "Scalability", value: "Unlimited", description: "Growth Ready" },
            { icon: Sparkles, label: "Innovation", value: "Latest", description: "Tech Stack" },
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-background/60 to-muted/30 backdrop-blur-sm border border-border/50 hover:border-[#322996]/50 transition-all duration-300 group"
                style={{
                  animation: mounted ? `fadeInUp 0.6s ease-out ${(techCategories.length * 0.2) + (index * 0.1) + 0.5}s both` : "none",
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#322996]/10 to-[#322996]/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <StatIcon className="w-6 h-6 text-[#322996] dark:text-blue-400 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1 transition-colors duration-300">{stat.value}</div>
                <div className="text-sm font-semibold text-[#322996] dark:text-blue-400 mb-1 transition-colors duration-300">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
