export default function BenefitsSection() {
  const benefits = [
    {
      title: "Fast Performance",
      description: "Lightning-fast load times and smooth user experiences.",
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee.",
    },
    {
      title: "Easy to Use",
      description: "Intuitive interface that requires no technical expertise.",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support from our dedicated team.",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-muted/50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Benefits</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Why choose our platform
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-background hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

