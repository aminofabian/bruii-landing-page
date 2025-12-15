"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./logo";

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              onClick={(e) => handleScroll(e, "features")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Features
            </a>
            <a
              href="#tech-stack"
              onClick={(e) => handleScroll(e, "tech-stack")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Tech Stack
            </a>
            <a
              href="#use-cases"
              onClick={(e) => handleScroll(e, "use-cases")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Use Cases
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleScroll(e, "benefits")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Benefits
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="hidden sm:inline-flex"
            >
              <Button variant="ghost">Contact</Button>
            </a>
            <Button className="hidden sm:inline-flex">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

