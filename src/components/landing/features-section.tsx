export default function FeaturesSection() {
  const features = [
    {
      title: "Feature One",
      description: "Powerful and intuitive feature that helps you achieve your goals.",
      icon: "🚀",
    },
    {
      title: "Feature Two",
      description: "Seamless integration with your existing workflow and tools.",
      icon: "⚡",
    },
    {
      title: "Feature Three",
      description: "Built with performance and scalability in mind.",
      icon: "🎯",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Features</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Everything you need to succeed, all in one place
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

