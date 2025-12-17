"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "./logo";
import { 
  Mail, ArrowRight, Github, Twitter, Linkedin,
  Sparkles, CheckCircle2, Send
} from "lucide-react";

import { useTheme } from "next-themes";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks: Record<string, Array<{ label: string; href: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }>> = {
    product: [
      { label: "Features", href: "#features", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, "features") },
      { label: "Tech Stack", href: "#tech-stack", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, "tech-stack") },
      { label: "Use Cases", href: "#use-cases", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, "use-cases") },
      { label: "Benefits", href: "#benefits", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, "benefits") },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#contact", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, "contact") },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      {/* Subtle overlay for section separation */}
      <div className="absolute inset-0 bg-background/50 dark:bg-background/30" />

      <div className="container relative z-10 mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div
              style={{
                animation: mounted ? `fadeInUp 0.8s ease-out 0.1s both` : "none",
              }}
            >
              <Logo />
              <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
                Complete gaming platform management system. Built for scale, designed for success.
              </p>
            </div>

            {/* Newsletter */}
            <div
              className="space-y-4"
              style={{
                animation: mounted ? `fadeInUp 0.8s ease-out 0.2s both` : "none",
              }}
            >
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#322996]" />
                  Stay Updated
                </h4>
                <p className="text-sm text-muted-foreground">
                  Get the latest updates and news delivered to your inbox.
                </p>
              </div>
              
              {isSubscribed ? (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <CheckCircle2 
                    className="w-5 h-5 transition-all duration-300"
                    style={mounted && isDark ? {
                      color: '#34d399',
                      filter: 'drop-shadow(0 0 4px rgba(52, 211, 153, 0.8))',
                    } : {
                      color: '#10b981',
                    }}
                  />
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    Successfully subscribed!
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-[#322996] focus:ring-[#322996]"
                    required
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="bg-gradient-to-r from-[#322996] to-blue-600 hover:from-[#2a2380] hover:to-blue-700 text-white border-0 shadow-lg shadow-[#322996]/25"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-8 lg:col-span-3">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div
                key={category}
                className="space-y-4"
                style={{
                  animation: mounted ? `fadeInUp 0.8s ease-out ${0.3 + (categoryIndex * 0.1)}s both` : "none",
                }}
              >
                <h4 className="font-semibold text-foreground capitalize">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        onClick={link.onClick}
                        className="text-sm text-muted-foreground hover:text-[#322996] transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div
            className="text-sm text-muted-foreground"
            style={{
              animation: mounted ? `fadeInUp 0.8s ease-out 0.6s both` : "none",
            }}
          >
            <p>&copy; {new Date().getFullYear()} Bruii. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center gap-4"
            style={{
              animation: mounted ? `fadeInUp 0.8s ease-out 0.7s both` : "none",
            }}
          >
            {socialLinks.map((social, index) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 flex items-center justify-center hover:border-[#322996]/50 hover:bg-[#322996]/10 transition-all duration-300 group"
                >
                  <div className="relative">
                    <SocialIcon 
                      className="w-5 h-5 text-muted-foreground group-hover:text-[#322996] dark:text-gray-400 dark:group-hover:text-blue-400 transition-all duration-300"
                      style={mounted && isDark ? {
                        filter: 'drop-shadow(0 0 2px rgba(59, 130, 246, 0.4))',
                      } : {}}
                    />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 hover:border-[#322996]/50 hover:bg-[#322996]/10 transition-all duration-300 group"
            style={{
              animation: mounted ? `fadeInUp 0.8s ease-out 0.8s both` : "none",
            }}
          >
            <span className="text-sm font-medium text-muted-foreground group-hover:text-[#322996] transition-colors">
              Back to Top
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[#322996] group-hover:-rotate-90 transition-all duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
