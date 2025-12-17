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
    // Top section - Core platform & insights
    { icon: Building2, label: "Multi-Tenant", position: { top: "5%", left: "15%" }, delay: 0 },
    { icon: TrendingUp, label: "Analytics", position: { top: "5%", left: "85%" }, delay: 0 },
    
    // Left side - Management & operations
    { icon: Users, label: "User Management", position: { top: "20%", left: "-3%" }, delay: 0.3 },
    { icon: CreditCard, label: "Transactions", position: { top: "45%", left: "-3%" }, delay: 0.6 },
    { icon: Gift, label: "Bonuses", position: { top: "70%", left: "-3%" }, delay: 0.9 },
    
    // Right side - Engagement & network
    { icon: Zap, label: "Real-Time", position: { top: "20%", left: "103%" }, delay: 0.2 },
    { icon: Network, label: "Affiliates", position: { top: "45%", left: "103%" }, delay: 0.5 },
    { icon: Gamepad2, label: "Games", position: { top: "70%", left: "103%" }, delay: 0.8 },
    
    // Bottom - Central feature
    { icon: Gift, label: "Rewards", position: { top: "95%", left: "50%" }, delay: 1.1 },
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

          {/* Visual Section */}
          <div className="relative w-full h-[600px] lg:h-[700px]">
            {/* Main Dashboard Image */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <Image
                src={dashboardImage}
                alt="Admin Dashboard Preview"
                className="w-full h-full object-contain"
                priority
              />
            </div>
            
            {/* Simple Feature Icons */}
            {slotFeatures.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <div
                  key={index}
                  className="absolute group"
                  style={{
                    top: feature.position.top,
                    left: feature.position.left,
                  }}
                >
                  <div className="flex items-center justify-center cursor-pointer transition-colors duration-200">
                    <Icon className="w-6 h-6 [&>svg]:stroke-[#e9e8ed] [&>svg]:stroke-2 [&>svg]:transition-colors [&>svg]:duration-200 group-hover:[&>svg]:stroke-[#5448f9]" />
                  </div>
                  
                  {/* Simple Label on Hover */}
                  <div 
                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"
                    style={{
                      top: parseFloat(feature.position.top) > 90 ? 'auto' : '100%',
                      bottom: parseFloat(feature.position.top) > 90 ? '100%' : 'auto',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginTop: parseFloat(feature.position.top) > 90 ? '0' : '8px',
                      marginBottom: parseFloat(feature.position.top) > 90 ? '8px' : '0',
                    }}
                  >
                    <div className="bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap shadow-sm">
                      {feature.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

