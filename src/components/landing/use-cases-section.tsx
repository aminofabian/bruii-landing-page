export default function UseCasesSection() {
  const useCases = [
    {
      title: "Use Case One",
      description: "Perfect for teams looking to streamline their workflow and increase productivity.",
    },
    {
      title: "Use Case Two",
      description: "Ideal for businesses that need scalable solutions for growing demands.",
    },
    {
      title: "Use Case Three",
      description: "Great for developers who want to build fast and maintainable applications.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Use Cases</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          See how others are using our platform
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card"
            >
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

