"use client";

import { Check } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function BenefitsSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const benefits = [
    {
      title: "Scalable",
      description: "Handle multiple companies and thousands of users with ease. Built to grow with your business.",
    },
    {
      title: "Secure",
      description: "Enterprise-grade security with role-based access control and JWT authentication. Your data is protected.",
    },
    {
      title: "Real-time",
      description: "Live updates and WebSocket integration. Monitor transactions, chat, and activities in real-time.",
    },
    {
      title: "Customizable",
      description: "White-label solution with full branding control. Customize the platform to match your brand identity.",
    },
    {
      title: "Comprehensive",
      description: "All-in-one solution for gaming operations. Everything you need in a single unified platform.",
    },
    {
      title: "Modern",
      description: "Built with latest technologies (Next.js 15, React 19) for optimal performance and developer experience.",
    },
  ];

  return (
    <section id="benefits" className="relative py-20 bg-muted/50 scroll-mt-16 overflow-hidden">
      {/* Subtle overlay for section separation */}
      <div className="absolute inset-0 bg-muted/30 dark:bg-muted/20" />

      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Our Platform</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Key Advantages for Your Gaming Operations
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-background hover:shadow-md transition-all duration-300"
              style={mounted && isDark ? {
                background: 'rgba(15, 15, 20, 0.85)',
                borderColor: 'rgba(59, 130, 246, 0.3)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.2)',
              } : {}}
              onMouseEnter={(e) => {
                if (mounted && isDark) {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(59, 130, 246, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (mounted && isDark) {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.2)';
                }
              }}
            >
              <div className="flex items-start gap-3">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300"
                  style={mounted && isDark ? {
                    background: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 2px 8px rgba(255, 255, 255, 0.15)',
                  } : {
                    background: 'rgba(50, 41, 150, 0.1)',
                  }}
                >
                  <Check 
                    className="w-4 h-4 transition-all duration-300"
                    style={mounted && isDark ? {
                      color: '#3b82f6',
                      filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.8))',
                    } : {
                      color: '#322996',
                    }}
                  />
                </div>
                <div>
                  <h3 
                    className="text-lg font-semibold mb-2 transition-colors duration-300"
                    style={mounted && isDark ? {
                      color: '#e5e7eb',
                      textShadow: '0 0 4px rgba(147, 197, 253, 0.3)',
                    } : {}}
                  >
                    {benefit.title}
                  </h3>
                  <p 
                    className="text-sm transition-colors duration-300"
                    style={mounted && isDark ? {
                      color: '#d1d5db',
                    } : {}}
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

