export default function UseCasesSection() {
  const useCases = [
    {
      title: "Gaming Operators",
      description: "Complete platform management solution for gaming operators. Manage players, games, transactions, and operations from a single unified dashboard.",
    },
    {
      title: "White-Label Providers",
      description: "Multi-tenant gaming platform solution. Provide white-label services to multiple gaming companies with isolated data and custom branding per tenant.",
    },
    {
      title: "Game Aggregators",
      description: "Manage multiple game providers efficiently. Enable or disable games per company, track activities, and monitor performance across all providers.",
    },
    {
      title: "Affiliate Networks",
      description: "Commission tracking and management system. Generate affiliate links, track player affiliations, and calculate real-time earnings for your network.",
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Use Cases</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Perfect for Various Gaming Industry Needs
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground text-sm">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

