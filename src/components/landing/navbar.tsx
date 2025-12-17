"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: "features", label: "Features" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "use-cases", label: "Use Cases" },
    { id: "benefits", label: "Benefits" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (scrollPosition / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));

      // Detect active section
      const sections = navItems.map((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            top: rect.top + scrollPosition,
            bottom: rect.bottom + scrollPosition,
          };
        }
        return null;
      }).filter(Boolean);

      const currentSection = sections.find((section) => {
        if (!section) return false;
        return scrollPosition >= section.top - 100 && scrollPosition < section.bottom - 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (scrollPosition < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 70; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById("contact");
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-background/40 backdrop-blur-md border-b border-border/30"
      }`}
    >
      {/* Subtle gradient overlay matching hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(50,41,150,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(50,41,150,0.12),transparent_70%)]" />
        {!isScrolled && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.1),transparent_60%)]" />
        )}
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center relative z-10">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 relative z-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active indicator with custom accent */}
                  {isActive && (
                    <span className="absolute inset-0 bg-[#322996]/10 dark:bg-[#322996]/20 rounded-lg -z-0 animate-fade-in" />
                  )}
                  
                  {/* Hover effect with custom accent */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-300 group-hover:w-3/4 ${
                    isActive 
                      ? "w-3/4 bg-[#322996] dark:bg-blue-400" 
                      : "w-0 bg-[#322996]/60 dark:bg-blue-400/60"
                  }`} />
                  
                  {/* Subtle glow on active */}
                  {isActive && (
                    <span className="absolute inset-0 bg-[#322996]/5 dark:bg-[#322996]/10 rounded-lg blur-sm -z-10" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 relative z-10">
            <ThemeToggle />
            
            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                onClick={handleContactClick}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-muted/40"
              >
                Contact
              </a>
              <Button 
                size="sm" 
                className="relative overflow-hidden group bg-gradient-to-r from-[#322996] to-blue-600 hover:from-[#2a2380] hover:to-blue-700 text-white border-0 shadow-lg shadow-[#322996]/25 hover:shadow-[#322996]/40"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    const offset = 70;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden hover:bg-muted/40">
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl">
                <div className="flex flex-col gap-8 mt-8">
                  {/* Mobile Logo */}
                  <Logo />

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => handleScroll(e, item.id)}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 relative ${
                            isActive
                              ? "bg-[#322996]/10 dark:bg-[#322996]/20 text-foreground"
                              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                          }`}
                        >
                          <span>{item.label}</span>
                          {isActive && (
                            <div className="w-2 h-2 rounded-full bg-[#322996] dark:bg-blue-400 animate-fade-in transition-colors duration-300" />
                          )}
                        </a>
                      );
                    })}
                  </nav>

                  {/* Mobile CTAs */}
                  <div className="flex flex-col gap-3 pt-4 border-t border-border">
                    <a
                      href="#contact"
                      onClick={handleContactClick}
                      className="px-4 py-3 rounded-lg text-base font-medium text-center text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
                    >
                      Contact
                    </a>
                    <Button
                      className="w-full bg-gradient-to-r from-[#322996] to-blue-600 hover:from-[#2a2380] hover:to-blue-700 text-white border-0 shadow-lg shadow-[#322996]/25"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        const element = document.getElementById("contact");
                        if (element) {
                          const offset = 70;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Progress Indicator with custom accent */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border/50">
          <div
            className="h-full bg-gradient-to-r from-[#322996]/40 via-blue-500/40 to-[#322996]/40 dark:from-blue-400/40 dark:via-blue-500/40 dark:to-blue-400/40 transition-all duration-300"
            style={{
              width: `${scrollProgress}%`,
            }}
          />
        </div>
      )}
    </nav>
  );
}
