"use client";

import { useEffect, useState } from "react";
import { 
  Gamepad2, Building2, Network, Users,
  ArrowRight, TrendingUp, Zap, Shield,
  CheckCircle2, Sparkles
} from "lucide-react";

import { useTheme } from "next-themes";

export default function UseCasesSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const useCases = [
    {
      title: "Gaming Operators",
      description: "Complete platform management solution for gaming operators. Manage players, games, transactions, and operations from a single unified dashboard.",
      icon: Gamepad2,
      color: "from-[#322996] to-blue-500",
      stats: [
        { label: "Operators", value: "500+" },
        { label: "Active Users", value: "2M+" },
      ],
      features: ["Player Management", "Game Control", "Transaction Processing", "Real-Time Analytics"],
      gradient: "from-[#322996]/20 via-blue-500/10 to-transparent",
    },
    {
      title: "White-Label Providers",
      description: "Multi-tenant gaming platform solution. Provide white-label services to multiple gaming companies with isolated data and custom branding per tenant.",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      stats: [
        { label: "Tenants", value: "1000+" },
        { label: "Custom Brands", value: "Unlimited" },
      ],
      features: ["Multi-Tenancy", "Custom Branding", "Data Isolation", "Scalable Architecture"],
      gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    },
    {
      title: "Game Aggregators",
      description: "Manage multiple game providers efficiently. Enable or disable games per company, track activities, and monitor performance across all providers.",
      icon: Network,
      color: "from-cyan-500 to-blue-600",
      stats: [
        { label: "Game Providers", value: "50+" },
        { label: "Games Managed", value: "5000+" },
      ],
      features: ["Provider Management", "Game Distribution", "Performance Tracking", "Revenue Analytics"],
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    },
    {
      title: "Affiliate Networks",
      description: "Commission tracking and management system. Generate affiliate links, track player affiliations, and calculate real-time earnings for your network.",
      icon: Users,
      color: "from-[#322996] to-purple-600",
      stats: [
        { label: "Affiliates", value: "10K+" },
        { label: "Commissions", value: "$50M+" },
      ],
      features: ["Link Generation", "Commission Tracking", "Real-Time Earnings", "Network Analytics"],
      gradient: "from-[#322996]/20 via-purple-600/10 to-transparent",
    },
  ];

  return (
    <section id="use-cases" className="relative py-32 bg-background scroll-mt-16 overflow-hidden">
      {/* Subtle overlay for section separation */}
      <div className="absolute inset-0 bg-background/50 dark:bg-background/30" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 transition-all duration-300"
            style={mounted && isDark ? {
              background: 'rgba(15, 15, 20, 0.85)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 0 10px rgba(59, 130, 246, 0.15)',
            } : {
              background: 'rgba(50, 41, 150, 0.1)',
              borderColor: 'rgba(50, 41, 150, 0.2)',
            }}
          >
            <Sparkles 
              className="w-4 h-4 transition-all duration-300"
              style={mounted && isDark ? {
                color: '#93c5fd',
                filter: 'drop-shadow(0 0 4px rgba(147, 197, 253, 0.8))',
              } : {
                color: '#322996',
              }}
            />
            <span 
              className="text-sm font-medium transition-colors duration-300"
              style={mounted && isDark ? {
                color: '#e5e7eb',
                textShadow: '0 0 4px rgba(147, 197, 253, 0.3)',
              } : {
                color: '#322996',
              }}
            >
              Use Cases
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-[#322996] bg-clip-text text-transparent">
              Perfect for Every
            </span>
            <br />
            <span className="text-foreground">Gaming Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a gaming operator, white-label provider, game aggregator, or affiliate network, our platform adapts to your needs
          </p>
        </div>

        {/* Use Cases Grid - Unique Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const isHovered = hoveredIndex === index;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animation: mounted ? `fadeInUp 0.8s ease-out ${index * 0.15}s both` : "none",
                }}
              >
                {/* Main Card */}
                <div 
                  className={`relative h-full rounded-2xl border border-border/50 bg-gradient-to-br from-background/90 to-muted/40 backdrop-blur-xl overflow-hidden transition-all duration-500 ${
                    isHovered ? "border-[#322996]/50 shadow-2xl shadow-[#322996]/20 scale-[1.02]" : "hover:border-[#322996]/30"
                  }`}
                  style={mounted && isDark ? {
                    background: 'rgba(15, 15, 20, 0.9)',
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(59, 130, 246, 0.2)',
                  } : {}}
                  onMouseEnter={(e) => {
                    if (mounted && isDark) {
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                      e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.7), 0 0 40px rgba(59, 130, 246, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (mounted && isDark) {
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                      e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(59, 130, 246, 0.2)';
                    }
                  }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative z-10 p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 
                            className="text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300"
                            style={mounted && isDark ? {
                              color: '#e5e7eb',
                              textShadow: '0 0 4px rgba(147, 197, 253, 0.3)',
                            } : {}}
                          >
                            {useCase.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-2 h-2 rounded-full animate-pulse"
                              style={mounted && isDark ? {
                                backgroundColor: '#3b82f6',
                                boxShadow: '0 0 8px rgba(59, 130, 246, 0.8)',
                              } : {
                                backgroundColor: '#322996',
                              }}
                            />
                            <span 
                              className="text-sm transition-colors duration-300"
                              style={mounted && isDark ? {
                                color: '#d1d5db',
                              } : {}}
                            >
                              Use Case {index + 1}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow Indicator */}
                      <ArrowRight 
                        className={`w-6 h-6 transition-all duration-300 ${
                          isHovered ? "translate-x-2 opacity-100" : "translate-x-0 opacity-0"
                        }`}
                        style={mounted && isDark ? {
                          color: '#3b82f6',
                          filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.8))',
                        } : {
                          color: '#322996',
                        }}
                      />
                    </div>

                    {/* Description */}
                    <p 
                      className="mb-6 leading-relaxed text-lg transition-colors duration-300"
                      style={mounted && isDark ? {
                        color: '#d1d5db',
                      } : {}}
                    >
                      {useCase.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {useCase.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/30 backdrop-blur-sm group-hover:border-[#322996]/30 transition-all duration-300"
                          style={{
                            animation: mounted && isHovered 
                              ? `slideInUp 0.4s ease-out ${statIndex * 0.1}s both` 
                              : "none",
                            ...(mounted && isDark ? {
                              background: 'rgba(20, 20, 25, 0.8)',
                              borderColor: 'rgba(59, 130, 246, 0.25)',
                              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 0 10px rgba(59, 130, 246, 0.15)',
                            } : {}),
                          }}
                        >
                          <div 
                            className="text-2xl font-bold mb-1 transition-colors duration-300"
                            style={mounted && isDark ? {
                              color: '#e5e7eb',
                              textShadow: '0 0 4px rgba(147, 197, 253, 0.3)',
                            } : {}}
                          >
                            {stat.value}
                          </div>
                          <div 
                            className="text-xs font-medium transition-colors duration-300"
                            style={mounted && isDark ? {
                              color: '#d1d5db',
                            } : {}}
                          >
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="space-y-2">
                      {useCase.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 p-2 rounded-lg group/feature"
                          style={{
                            animation: mounted && isHovered 
                              ? `slideInLeft 0.4s ease-out ${(useCase.stats.length * 0.1) + (featureIndex * 0.1) + 0.2}s both` 
                              : "none",
                          }}
                        >
                          <CheckCircle2 
                            className="w-4 h-4 flex-shrink-0 transition-all duration-300"
                            style={mounted && isDark ? {
                              color: '#3b82f6',
                              filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.8))',
                            } : {
                              color: '#322996',
                            }}
                          />
                          <span 
                            className="text-sm font-medium transition-colors duration-300"
                            style={mounted && isDark ? {
                              color: '#e5e7eb',
                            } : {}}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`} />
                  <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${useCase.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Connection Line (Visual Flow) */}
                {index < useCases.length - 1 && index % 2 === 0 && (
                  <div className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 z-0">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-[#322996]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-border/50 bg-gradient-to-br from-[#322996]/10 via-blue-500/5 to-transparent backdrop-blur-xl p-8 md:p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,41,150,1),transparent_70%)]" />
            </div>

            <div className="relative z-10 text-center">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 transition-all duration-300"
                style={mounted && isDark ? {
                  background: 'rgba(15, 15, 20, 0.85)',
                  borderColor: 'rgba(59, 130, 246, 0.3)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 0 10px rgba(59, 130, 246, 0.15)',
                } : {
                  background: 'rgba(50, 41, 150, 0.2)',
                  borderColor: 'rgba(50, 41, 150, 0.3)',
                }}
              >
                <Zap 
                  className="w-4 h-4 transition-all duration-300"
                  style={mounted && isDark ? {
                    color: '#93c5fd',
                    filter: 'drop-shadow(0 0 4px rgba(147, 197, 253, 0.8))',
                  } : {
                    color: '#322996',
                  }}
                />
                <span 
                  className="text-sm font-semibold transition-colors duration-300"
                  style={mounted && isDark ? {
                    color: '#e5e7eb',
                    textShadow: '0 0 4px rgba(147, 197, 253, 0.3)',
                  } : {
                    color: '#322996',
                  }}
                >
                  Ready to Get Started?
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Find Your Perfect Use Case
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Our platform adapts to your business model. Whether you're just starting or scaling globally, we have the solution for you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: Shield, text: "Enterprise Ready" },
                  { icon: TrendingUp, text: "Scalable" },
                  { icon: Zap, text: "Fast Setup" },
                ].map((item, itemIndex) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/60 border border-border/50 backdrop-blur-sm transition-all duration-300"
                      style={{
                        animation: mounted ? `fadeInUp 0.6s ease-out ${(useCases.length * 0.15) + (itemIndex * 0.1) + 0.5}s both` : "none",
                        ...(mounted && isDark ? {
                          background: 'rgba(15, 15, 20, 0.85)',
                          borderColor: 'rgba(59, 130, 246, 0.3)',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 0 10px rgba(59, 130, 246, 0.15)',
                        } : {}),
                      }}
                    >
                      <ItemIcon 
                        className="w-4 h-4 transition-all duration-300"
                        style={mounted && isDark ? {
                          color: '#3b82f6',
                          filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.8))',
                        } : {
                          color: '#322996',
                        }}
                      />
                      <span 
                        className="text-sm font-medium transition-colors duration-300"
                        style={mounted && isDark ? {
                          color: '#e5e7eb',
                        } : {}}
                      >
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
