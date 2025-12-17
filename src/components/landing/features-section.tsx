"use client";

import { Building2, Users, Gamepad2, CreditCard, Gift, Network, Image as ImageIcon, MessageSquare } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
  imageDark?: string;
}

export default function FeaturesSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const allFeatures: Feature[] = [
    {
      title: "Multi-Tenant Management",
      description: "Manage multiple gaming companies from a single platform. Each company has isolated data, custom branding, and independent settings.",
      icon: Building2,
    },
    {
      title: "Comprehensive User Management",
      description: "Role-based access control with Superadmin, Company Admin, Manager, Agent, Staff, and Player roles. Manage teams with granular permissions.",
      icon: Users,
      image: "user-management",
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
      image: "transaction-processing",
    },
    {
      title: "Advanced Bonus System",
      description: "Create and manage multiple bonus types including purchase bonuses, recharge bonuses, signup rewards, and first purchase incentives.",
      icon: Gift,
      image: "bonus-management",
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
      image: "chat-management",
      imageDark: "char-management",
    },
  ];

  const featuredFeatures = allFeatures.filter(f => f.image);
  const coreFeatures = allFeatures.filter(f => !f.image);

  return (
    <section id="features" className="relative py-32 bg-background scroll-mt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,41,150,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(50,41,150,0.12),transparent_70%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#322996]/10 dark:bg-[#322996]/20 border border-[#322996]/20 dark:border-[#322996]/30 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-[#322996]">Platform Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-[#322996] bg-clip-text text-transparent">
              Powerful Features
            </span>
            <br />
            <span className="text-foreground">Built for Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage your gaming platform efficiently, from user management to real-time transactions
          </p>
        </div>

        {/* Featured Features with Images - Alternating Layout */}
        <div className="space-y-24 mb-32">
          {featuredFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const imageName = isDark && feature.imageDark ? feature.imageDark : feature.image;
            const imagePath = `/features/${isDark ? "dark" : "light"}/${imageName}.png`;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
                style={{
                  animation: mounted ? `fadeInUp 0.8s ease-out ${index * 0.2}s both` : "none",
                }}
              >
                {/* Image Section */}
                <div
                  className={`relative ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#322996]/20 via-blue-500/20 to-[#322996]/20 rounded-3xl blur-3xl scale-110 opacity-50" />
                  
                  {/* Image Container */}
                  <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-background/80 to-muted/40 backdrop-blur-xl shadow-2xl group">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={imagePath}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[#322996]/90 backdrop-blur-md border border-[#322996]/50 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-white" />
                        <span className="text-sm font-semibold text-white">Featured</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                    <div 
                      className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border transition-colors duration-300"
                      style={mounted && isDark ? {
                        background: 'rgba(255, 255, 255, 0.15)',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      } : {
                        background: 'rgba(50, 41, 150, 0.1)',
                        borderColor: 'rgba(50, 41, 150, 0.2)',
                      }}
                    >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={mounted && isDark ? {
                        background: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 4px 12px rgba(255, 255, 255, 0.15)',
                      } : {
                        background: 'rgba(50, 41, 150, 0.2)',
                      }}
                    >
                      <div
                        className="transition-all duration-300"
                        style={mounted && isDark ? {
                          color: '#111827',
                          filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))',
                        } : {
                          color: '#322996',
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <span 
                      className="text-sm font-semibold transition-colors duration-300"
                      style={mounted && isDark ? {
                        color: '#111827',
                        textShadow: '0 0 2px rgba(255, 255, 255, 0.6)',
                      } : {
                        color: '#322996',
                      }}
                    >
                      Feature {index + 1}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                    {feature.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {["Real-Time", "Secure", "Scalable"].map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50 text-sm font-medium text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Features Grid - Compact Design */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Core Platform Features</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Additional powerful features that complete your gaming platform management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-xl border border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-[#322996]/50 hover:shadow-xl hover:shadow-[#322996]/10 transition-all duration-300 overflow-hidden"
                  style={{
                    animation: mounted ? `fadeInUp 0.6s ease-out ${(featuredFeatures.length * 0.2) + (index * 0.1)}s both` : "none",
                  }}
                >
                  {/* Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#322996]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300"
                      style={mounted && isDark ? {
                        background: 'rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 4px 16px rgba(255, 255, 255, 0.2)',
                      } : {
                        background: 'linear-gradient(to bottom right, rgba(50, 41, 150, 0.1), rgba(50, 41, 150, 0.05))',
                      }}
                    >
                      <div
                        className="transition-all duration-300"
                        style={mounted && isDark ? {
                          color: '#111827',
                          filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))',
                        } : {
                          color: '#322996',
                        }}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-[#322996] dark:group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#322996]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
