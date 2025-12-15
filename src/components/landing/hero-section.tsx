import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground">
              Complete Gaming Platform Management in One System
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Complete white-label gaming platform administration solution. Manage multiple companies, users, games, transactions, bonuses, and more from a single unified system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base px-8 py-6">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6">
                Request Demo
              </Button>
              <Button size="lg" variant="ghost" className="text-base px-8 py-6">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative">
            <div className="relative rounded-lg border border-border bg-card shadow-2xl overflow-hidden">
              {/* Placeholder for admin dashboard screenshot */}
              <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Admin Dashboard Preview
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Replace with your dashboard screenshot
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-lg bg-primary/5 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

