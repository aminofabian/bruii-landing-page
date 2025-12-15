"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="contact" className="py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Ready to transform your gaming operations? Contact us to learn more about our platform.
            </p>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:contact@bruii.com" className="text-primary hover:underline">
                  contact@bruii.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Contact Form
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                onClick={(e) => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="w-full sm:w-auto"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

