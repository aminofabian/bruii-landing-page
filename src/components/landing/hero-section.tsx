"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import dashboardImage from "@/app/dashboard.png";
import { 
  Building2, Users, Gamepad2, CreditCard, Gift, Network, TrendingUp, Zap,
  ArrowRight, CheckCircle2, BarChart3, Shield, Clock
} from "lucide-react";

interface Metric {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);
  const [metrics, setMetrics] = useState([
    { value: "0", label: "Active Users", icon: Users },
    { value: "0", label: "Transactions", icon: CreditCard },
    { value: "0", label: "Games Managed", icon: Gamepad2 },
  ]);

  useEffect(() => {
    setMounted(true);
    // Animate metrics on mount
    const animateMetrics = () => {
      setMetrics([
        { value: "50K+", label: "Active Users", icon: Users },
        { value: "2.5M+", label: "Transactions", icon: CreditCard },
        { value: "500+", label: "Games Managed", icon: Gamepad2 },
      ]);
    };
    setTimeout(animateMetrics, 500);
  }, []);

  const features = [
    { icon: Zap, text: "Real-Time Processing", color: "from-yellow-400 to-orange-500" },
    { icon: Shield, text: "Enterprise Security", color: "from-blue-400 to-cyan-500" },
    { icon: BarChart3, text: "Advanced Analytics", color: "from-[#322996] to-pink-500" },
    { icon: Clock, text: "24/7 Support", color: "from-green-400 to-emerald-500" },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50">
        <div 
          className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500 animate-gradient-shift"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(50,41,150,0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(59,130,246,0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(50,41,150,0.15) 0%, transparent 70%)
            `,
            backgroundSize: '200% 200%',
          }}
        />
        <div 
          className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500 animate-wave"
          style={{
            background: `
              radial-gradient(circle at 10% 60%, rgba(59,130,246,0.2) 0%, transparent 40%),
              radial-gradient(circle at 90% 40%, rgba(50,41,150,0.2) 0%, transparent 40%)
            `,
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = Math.random() * 10 + 10;
          const delay = Math.random() * 5;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#322996]/20 to-blue-400/20 dark:from-[#322996]/30 dark:to-blue-500/30 blur-sm animate-float"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      <div className="container relative z-10 mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* Content Section */}
          <div className="text-center lg:text-left space-y-4 lg:space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#322996]/10 dark:bg-[#322996]/20 border border-[#322996]/20 dark:border-[#322996]/30 backdrop-blur-sm">
              <span className="text-sm font-medium text-[#322996] dark:text-[#322996]">
                All-in-One Gaming Platform
              </span>
            </div>

            {/* Headline with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block text-foreground">
                Manage Your Gaming
              </span>
              <span className="block bg-gradient-to-r from-[#322996] via-blue-600 to-cyan-600 dark:from-[#322996] dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Platform Like a Pro
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Complete white-label solution for managing multiple companies, users, games, transactions, and bonuses—all from one powerful dashboard.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                "Multi-Tenant Architecture",
                "Real-Time Analytics",
                "Enterprise Security",
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 backdrop-blur-sm border border-border/50 animate-fade-in-up"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0 transition-colors duration-300" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-sm md:text-base px-6 py-5 md:px-8 md:py-6 bg-gradient-to-r from-[#322996] to-blue-600 hover:from-[#2a2380] hover:to-blue-700 text-white shadow-lg shadow-[#322996]/25 hover:shadow-[#322996]/40 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-sm md:text-base px-6 py-5 md:px-8 md:py-6 border-2 hover:bg-muted/50 backdrop-blur-sm"
              >
                Request Demo
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-sm md:text-base px-6 py-5 md:px-8 md:py-6"
              >
                Contact Us
              </Button>
            </div>

            {/* Live Metrics */}
            {mounted && (
              <div className="grid grid-cols-3 gap-3 lg:gap-4 pt-4 lg:pt-6">
                {metrics.map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={i}
                      className="text-center lg:text-left p-3 lg:p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm border border-border/50 hover:border-[#322996]/50 transition-all duration-300 group animate-fade-in-up"
                      style={{
                        animationDelay: `${0.8 + i * 0.1}s`,
                      }}
                    >
                      <div className="flex items-center justify-center lg:justify-start gap-2 mb-1 lg:mb-2">
                        <Icon className="w-3 h-3 lg:w-4 lg:h-4 text-[#322996] dark:text-blue-400 transition-colors duration-300" />
                        <span className="text-lg lg:text-2xl font-bold text-foreground group-hover:text-[#322996] dark:group-hover:text-blue-400 transition-colors duration-300">
                          {metric.value}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Visual Section */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px]">
            {/* Glow Effect Behind Dashboard - Enhanced for Dark Theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#322996]/20 via-blue-500/20 to-cyan-500/20 dark:from-blue-400/40 dark:via-cyan-400/30 dark:to-blue-500/40 rounded-3xl blur-3xl scale-110 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent dark:via-blue-400/20 rounded-3xl blur-2xl scale-110 opacity-0 dark:opacity-100 transition-opacity duration-500" />

            {/* Dashboard Container with Glassmorphism - Enhanced for Dark Theme */}
            <div className="relative z-10 h-full rounded-2xl bg-gradient-to-br from-background/80 to-muted/40 dark:from-background/90 dark:to-muted/50 backdrop-blur-xl border border-border/50 dark:border-blue-400/20 shadow-2xl dark:shadow-blue-500/20 overflow-hidden p-4 lg:p-6 transition-all duration-500">
              {/* Inner Glow for Dark Theme */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/5 via-transparent to-cyan-400/5 opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Dashboard Image */}
              <div className="relative h-full rounded-xl overflow-hidden bg-muted/30">
                <Image
                  src={isDark ? dashboardImage : "/Screenshot.png"}
                  alt="Admin Dashboard Preview"
                  fill
                  className="object-contain"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Feature Cards */}
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const positions = [
                { top: "-5%", left: "10%", delay: 0 },
                { top: "10%", right: "-5%", delay: 0.2 },
                { bottom: "10%", left: "-5%", delay: 0.4 },
                { bottom: "-5%", right: "10%", delay: 0.6 },
              ];
              const pos = positions[i];

              return (
                <div
                  key={i}
                  className="absolute z-20 hidden lg:block animate-float-card"
                  style={{
                    ...pos,
                    animationDelay: `${pos.delay}s`,
                  }}
                >
                  <div className="group relative">
                    {/* Enhanced Glow Effect for Dark Theme */}
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 bg-gradient-to-r from-[#322996]/50 to-blue-500/50 dark:from-white/40 dark:to-white/30" />
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 dark:opacity-50 blur-2xl transition-opacity duration-300 bg-gradient-to-r from-white/30 to-white/20" />
                    
                    {/* Main Card - Very Light in Dark Theme */}
                    <div 
                      className="relative px-4 py-3 rounded-xl bg-gradient-to-br from-background/90 to-muted/50 backdrop-blur-md border border-border/50 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
                      style={mounted && isDark ? {
                        background: 'rgba(255, 255, 255, 0.35)',
                        borderColor: 'rgba(255, 255, 255, 0.6)',
                        boxShadow: '0 10px 40px rgba(255, 255, 255, 0.25)',
                      } : {}}
                      onMouseEnter={(e) => {
                        if (mounted && isDark) {
                          e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 255, 255, 0.35)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (mounted && isDark) {
                          e.currentTarget.style.boxShadow = '0 10px 40px rgba(255, 255, 255, 0.25)';
                        }
                      }}
                    >
                      {/* Inner Glow for Dark Theme */}
                      <div 
                        className="absolute inset-0 rounded-xl transition-opacity duration-300"
                        style={mounted && isDark ? {
                          background: 'rgba(255, 255, 255, 0.2)',
                          opacity: 1,
                        } : { opacity: 0 }}
                      />
                      
                      <div className="relative flex items-center gap-3 z-10">
                        {/* Icon Container - Pure White Background in Dark Theme */}
                        <div 
                          className="relative p-2.5 rounded-lg transition-all duration-300"
                          style={mounted && isDark ? {
                            background: 'rgba(255, 255, 255, 0.4)',
                            boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)',
                          } : {
                            background: `linear-gradient(to bottom right, rgba(50, 41, 150, 0.2), rgba(59, 130, 246, 0.2))`,
                          }}
                        >
                          {/* Icon Glow in Dark Theme */}
                          <div 
                            className="absolute inset-0 rounded-lg blur-lg transition-opacity duration-300"
                            style={mounted && isDark ? {
                              background: 'rgba(255, 255, 255, 0.4)',
                              opacity: 1,
                            } : { opacity: 0 }}
                          />
                          <Icon 
                            className="relative w-4 h-4 transition-all duration-300 group-hover:scale-110"
                            style={mounted && isDark ? {
                              color: '#111827',
                              filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))',
                            } : {
                              color: '#322996',
                            }}
                          />
                        </div>
                        <span 
                          className="text-sm font-semibold whitespace-nowrap transition-colors duration-300"
                          style={mounted && isDark ? {
                            color: '#111827',
                            textShadow: '0 0 2px rgba(255, 255, 255, 0.8)',
                          } : {}}
                        >
                          {feature.text}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Animated Border - Enhanced for Dark Theme */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#322996]/20 via-blue-500/20 to-cyan-500/20 dark:from-blue-400/30 dark:via-cyan-400/25 dark:to-blue-500/30 bg-clip-padding -z-10 transition-all duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#322996] via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm" />
              {/* Pulsing Glow in Dark Theme */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 opacity-0 dark:opacity-50 animate-pulse-slow transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
            <div className="w-1 h-3 rounded-full bg-[#322996] animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
}
