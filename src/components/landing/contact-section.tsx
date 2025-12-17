"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, Phone, MapPin, Send, 
  Sparkles, ArrowRight, CheckCircle2,
  MessageSquare, Calendar, Zap
} from "lucide-react";

import { useTheme } from "next-themes";

export default function ContactSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", company: "", message: "" });
      }, 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@bruii.com",
      href: "mailto:contact@bruii.com",
      color: "from-[#322996] to-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Global Support",
      href: "#",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section id="contact" className="relative py-32 bg-background scroll-mt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background">
        <div 
          className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500 animate-gradient-shift"
          style={{
            background: `
              radial-gradient(circle at 30% 40%, rgba(50,41,150,0.22) 0%, transparent 60%),
              radial-gradient(circle at 70% 60%, rgba(59,130,246,0.22) 0%, transparent 60%),
              radial-gradient(circle at 50% 50%, rgba(50,41,150,0.12) 0%, transparent 70%)
            `,
            backgroundSize: '200% 200%',
          }}
        />
        <div 
          className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500 animate-wave"
          style={{
            background: `
              radial-gradient(circle at 20% 70%, rgba(59,130,246,0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 30%, rgba(50,41,150,0.15) 0%, transparent 50%)
            `,
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#322996]/10 to-blue-500/10 blur-lg animate-float"
            style={{
              width: `${Math.random() * 150 + 80}px`,
              height: `${Math.random() * 150 + 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 15}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#322996]/10 dark:bg-[#322996]/20 border border-[#322996]/20 dark:border-[#322996]/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#322996]" />
            <span className="text-sm font-medium text-[#322996]">Get in Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-[#322996] bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br />
            <span className="text-foreground">Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your gaming operations? Get in touch and let's discuss how we can help you scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6">
            <div
              className="space-y-6"
              style={{
                animation: mounted ? `fadeInUp 0.8s ease-out 0.2s both` : "none",
              }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Choose your preferred method to reach out. We're here to help!
                </p>
              </div>

              {contactMethods.map((method, index) => {
                const MethodIcon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    className="group relative block p-6 rounded-xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover:border-[#322996]/50 hover:shadow-xl hover:shadow-[#322996]/10 transition-all duration-300 overflow-hidden"
                    style={{
                      animation: mounted ? `fadeInUp 0.6s ease-out ${0.4 + (index * 0.1)}s both` : "none",
                    }}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <MethodIcon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-muted-foreground mb-1">
                          {method.label}
                        </div>
                        <div className="text-lg font-semibold text-foreground group-hover:text-[#322996] transition-colors">
                          {method.value}
                        </div>
                      </div>
                      <ArrowRight 
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                        style={mounted && isDark ? {
                          color: '#3b82f6',
                          filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.8))',
                        } : {
                          color: '#322996',
                        }}
                      />
                    </div>
                  </a>
                );
              })}

              {/* Quick Actions */}
              <div className="pt-6 border-t border-border/50">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="flex-1">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-[#322996] to-blue-600 hover:from-[#2a2380] hover:to-blue-700 text-white border-0 shadow-lg shadow-[#322996]/25"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Contact Form
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="flex-1 border-2 hover:bg-muted/50"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="relative"
            style={{
              animation: mounted ? `fadeInUp 0.8s ease-out 0.4s both` : "none",
            }}
          >
            <div className="relative rounded-2xl border border-border/50 bg-gradient-to-br from-background/90 to-muted/40 backdrop-blur-xl p-8 shadow-2xl">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#322996]/10 via-blue-500/5 to-transparent rounded-2xl blur-xl opacity-50" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#322996] to-blue-600 flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Send us a Message</h3>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 animate-fade-in">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">
                      We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-background/50 border-border/50 focus:border-[#322996] focus:ring-[#322996]"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-background/50 border-border/50 focus:border-[#322996] focus:ring-[#322996]"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-foreground">
                        Company
                      </label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-background/50 border-border/50 focus:border-[#322996] focus:ring-[#322996]"
                        placeholder="Your company"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="min-h-[120px] bg-background/50 border-border/50 focus:border-[#322996] focus:ring-[#322996] resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#322996] to-blue-600 hover:from-[#2a2380] hover:to-blue-700 text-white border-0 shadow-lg shadow-[#322996]/25 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Zap className="w-5 h-5 mr-2 animate-pulse" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Zap, label: "Fast Response", value: "< 24 hours" },
            { icon: CheckCircle2, label: "Expert Support", value: "24/7 Available" },
            { icon: MessageSquare, label: "Multiple Channels", value: "Always Connected" },
          ].map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-background/60 to-muted/30 backdrop-blur-sm border border-border/50 hover:border-[#322996]/50 transition-all duration-300"
                style={{
                  animation: mounted ? `fadeInUp 0.6s ease-out ${0.8 + (index * 0.1)}s both` : "none",
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300"
                  style={mounted && isDark ? {
                    background: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.15)',
                  } : {
                    background: 'linear-gradient(to bottom right, rgba(50, 41, 150, 0.1), rgba(50, 41, 150, 0.05))',
                  }}
                >
                  <ItemIcon 
                    className="w-6 h-6 transition-all duration-300"
                    style={mounted && isDark ? {
                      color: '#3b82f6',
                      filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.9))',
                    } : {
                      color: '#322996',
                    }}
                  />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
