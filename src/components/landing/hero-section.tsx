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
    { icon: BarChart3, text: "Advanced Analytics", color: "from-purple-400 to-pink-500" },
    { icon: Clock, text: "24/7 Support", color: "from-green-400 to-emerald-500" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.25),transparent_50%)]" />
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
              className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 dark:from-purple-500/30 dark:to-blue-500/30 blur-sm animate-float"
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

      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/20 dark:border-purple-400/30 backdrop-blur-sm">
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                All-in-One Gaming Platform
              </span>
            </div>

            {/* Headline with Gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="block text-foreground">
                Manage Your Gaming
              </span>
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Platform Like a Pro
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
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
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="text-base px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 py-6 border-2 hover:bg-muted/50 backdrop-blur-sm"
              >
                Request Demo
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-base px-8 py-6"
              >
                Contact Us
              </Button>
            </div>

            {/* Live Metrics */}
            {mounted && (
              <div className="grid grid-cols-3 gap-4 pt-8">
                {metrics.map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={i}
                      className="text-center lg:text-left p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm border border-border/50 hover:border-purple-500/50 transition-all duration-300 group animate-fade-in-up"
                      style={{
                        animationDelay: `${0.8 + i * 0.1}s`,
                      }}
                    >
                      <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                        <Icon className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                        <span className="text-2xl font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
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
          <div className="relative w-full h-[500px] lg:h-[700px]">
            {/* Glow Effect Behind Dashboard */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 dark:from-purple-400/30 dark:via-blue-400/30 dark:to-cyan-400/30 rounded-3xl blur-3xl scale-110" />

            {/* Dashboard Container with Glassmorphism */}
            <div className="relative z-10 h-full rounded-2xl bg-gradient-to-br from-background/80 to-muted/40 backdrop-blur-xl border border-border/50 shadow-2xl overflow-hidden p-4 lg:p-6">
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
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 bg-gradient-to-r from-purple-500/50 to-blue-500/50" />
                    <div className="relative px-4 py-3 rounded-xl bg-gradient-to-br from-background/90 to-muted/50 backdrop-blur-md border border-border/50 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} opacity-20`}>
                          <Icon className={`w-4 h-4 text-purple-500 dark:text-purple-400`} />
                        </div>
                        <span className="text-sm font-medium whitespace-nowrap">{feature.text}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 bg-clip-padding -z-10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
            <div className="w-1 h-3 rounded-full bg-purple-500 animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
}
