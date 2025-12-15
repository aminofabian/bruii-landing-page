"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import dashboardImage from "@/app/dashboard.png";
import { Building2, Users, Gamepad2, CreditCard, Gift, Network, TrendingUp, Zap } from "lucide-react";

interface SlotFeature {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  position: { top: string; left: string };
  delay: number;
}

export default function HeroSection() {
  const slotFeatures: SlotFeature[] = [
    { icon: Building2, label: "Multi-Tenant", position: { top: "8%", left: "-4%" }, delay: 0 },
    { icon: Users, label: "Users", position: { top: "25%", left: "-5%" }, delay: 0.3 },
    { icon: Gamepad2, label: "Games", position: { top: "42%", left: "-4%" }, delay: 0.6 },
    { icon: CreditCard, label: "Transactions", position: { top: "59%", left: "-5%" }, delay: 0.9 },
    { icon: Gift, label: "Bonuses", position: { top: "76%", left: "-4%" }, delay: 1.2 },
    { icon: TrendingUp, label: "Analytics", position: { top: "12%", left: "104%" }, delay: 0.2 },
    { icon: Zap, label: "Real-Time", position: { top: "30%", left: "105%" }, delay: 0.5 },
    { icon: Network, label: "Affiliates", position: { top: "48%", left: "104%" }, delay: 0.8 },
    { icon: Gift, label: "Rewards", position: { top: "66%", left: "105%" }, delay: 1.1 },
  ];

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

          {/* Visual Section with Slot Game Animations */}
          <div className="relative w-full h-[600px] lg:h-[700px]">
            {/* Main Dashboard Image with Silver Border */}
            <div className="relative rounded-xl border-2 border-slate-400/50 bg-gradient-to-r from-slate-400/30 via-slate-500/40 to-slate-400/30 p-0.5 shadow-2xl overflow-hidden z-10 h-full">
              <div className="relative rounded-xl bg-card h-full overflow-hidden">
                <Image
                  src={dashboardImage}
                  alt="Admin Dashboard Preview"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Subtle Background Glow */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full rounded-xl bg-slate-500/10 blur-3xl animate-pulse-slow"></div>
            <div className="absolute -z-10 top-12 left-12 w-full h-full rounded-xl bg-slate-400/8 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
            
            {/* Slot Machine Style Feature Reels */}
            {slotFeatures.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <div
                  key={index}
                  className="absolute group"
                  style={{
                    top: feature.position.top,
                    left: feature.position.left,
                    animationDelay: `${feature.delay}s`,
                  }}
                >
                  {/* Slot Reel Badge */}
                  <div className="
                    w-16 h-16 rounded-xl
                    bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600
                    text-slate-100 border-2 border-slate-400/60
                    shadow-lg
                    flex items-center justify-center
                    animate-slot-spin
                    hover:scale-125 hover:from-slate-300 hover:via-slate-400 hover:to-slate-500
                    transition-all duration-300
                    cursor-pointer
                    relative z-10
                  ">
                    <div style={{ color: '#e9e8ed' }}>
                      <Icon className="w-7 h-7" />
                    </div>
                    {/* Slot Symbols */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 border border-slate-300 rounded-sm bg-slate-500/30 animate-sparkle">
                      <div className="w-full h-0.5 bg-slate-300 mt-0.5"></div>
                      <div className="w-full h-0.5 bg-slate-300 mt-0.5"></div>
                    </div>
                    <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border border-slate-300 rounded-full bg-slate-500/30 animate-sparkle" style={{ animationDelay: "0.5s" }}></div>
                  </div>
                  
                  {/* Win Label */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <div className="
                      bg-gradient-to-r from-slate-600 to-slate-700
                      text-slate-100 text-xs font-bold px-3 py-1.5 rounded-lg
                      shadow-lg border border-slate-500/50
                      whitespace-nowrap
                      animate-win-pop
                    ">
                      {feature.label}
                    </div>
                  </div>
                  
                  {/* Connecting Light Beam */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity"
                    style={{
                      width: "100px",
                      height: "2px",
                      background: `linear-gradient(to right, transparent, #94a3b8, transparent)`,
                      transform: `translate(-50%, -50%) rotate(${parseFloat(feature.position.left) < 50 ? "-45deg" : "45deg"})`,
                      transformOrigin: "0 0",
                    }}
                  />
                </div>
              );
            })}

            {/* Slot Symbols Particles */}
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-xl pointer-events-none">
              {[...Array(12)].map((_, i) => {
                const symbolType = i % 3;
                const isBar = symbolType === 0;
                const isDiamond = symbolType === 1;
                const isCircle = symbolType === 2;
                
                return (
                  <div
                    key={i}
                    className="absolute animate-sparkle-particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                  >
                    {isBar && (
                      <div className="w-2 h-3 border border-slate-400 rounded-sm bg-slate-500/40">
                        <div className="w-full h-0.5 bg-slate-400 mt-0.5"></div>
                        <div className="w-full h-0.5 bg-slate-400 mt-0.5"></div>
                      </div>
                    )}
                    {isDiamond && (
                      <div className="w-2 h-2 border border-slate-400 bg-slate-500/40 rotate-45"></div>
                    )}
                    {isCircle && (
                      <div className="w-2 h-2 border border-slate-400 rounded-full bg-slate-500/40"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Slot Machine Corner Decorations */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-2 border-slate-400 rounded-lg animate-slot-corner shadow-lg"></div>
            <div className="absolute -top-3 -right-3 w-12 h-12 border-2 border-slate-400 rounded-lg animate-slot-corner shadow-lg" style={{ animationDelay: "0.3s" }}></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-2 border-slate-400 rounded-lg animate-slot-corner shadow-lg" style={{ animationDelay: "0.6s" }}></div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-2 border-slate-400 rounded-lg animate-slot-corner shadow-lg" style={{ animationDelay: "0.9s" }}></div>

            {/* Win Lines Animation */}
            <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-20 animate-win-line"></div>
            <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-20 animate-win-line" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

