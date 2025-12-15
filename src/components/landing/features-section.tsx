import { Building2, Users, Gamepad2, CreditCard, Gift, Network, Image as ImageIcon, MessageSquare } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Multi-Tenant Management",
      description: "Manage multiple gaming companies from a single platform. Each company has isolated data, custom branding, and independent settings.",
      icon: Building2,
    },
    {
      title: "Comprehensive User Management",
      description: "Role-based access control with Superadmin, Company Admin, Manager, Agent, Staff, and Player roles. Manage teams with granular permissions.",
      icon: Users,
    },
    {
      title: "Game Management System",
      description: "Enable/disable games per company, track game activities, manage balances, and monitor store-level statistics in real-time.",
      icon: Gamepad2,
    },
    {
      title: "Transaction Processing",
      description: "Handle all player transactions seamlessly. Process purchases, manage cashouts, and track game activities in real-time with comprehensive transaction management.",
      icon: CreditCard,
    },
    {
      title: "Advanced Bonus System",
      description: "Create and manage multiple bonus types including purchase bonuses, recharge bonuses, signup rewards, and first purchase incentives.",
      icon: Gift,
    },
    {
      title: "Affiliate Management",
      description: "Track affiliate commissions, generate affiliate links, and manage player affiliations with real-time earnings calculations.",
      icon: Network,
    },
    {
      title: "Banner Management",
      description: "Create and manage homepage and promotional banners with multi-platform support (Desktop, Mobile, App) and custom redirect URLs.",
      icon: ImageIcon,
    },
    {
      title: "Real-Time Chat System",
      description: "Communicate with players in real-time, track online players, pin important messages, and support file uploads.",
      icon: MessageSquare,
    },
  ];

  return (
    <section id="features" className="py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Key Features</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Everything You Need to Run Your Gaming Platform
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

