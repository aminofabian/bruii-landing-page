export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
          Welcome to Bruii
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Build amazing experiences with our powerful platform
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <button className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

