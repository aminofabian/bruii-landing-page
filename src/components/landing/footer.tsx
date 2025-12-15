"use client";

import Link from "next/link";

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-xl font-bold">Bruii</div>
            <p className="text-sm text-muted-foreground">
              Complete Gaming Platform Management System
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleScroll(e, "features")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#tech-stack"
                  onClick={(e) => handleScroll(e, "tech-stack")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#use-cases"
                  onClick={(e) => handleScroll(e, "use-cases")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Use Cases
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  onClick={(e) => handleScroll(e, "benefits")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Benefits
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@bruii.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@bruii.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bruii. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

