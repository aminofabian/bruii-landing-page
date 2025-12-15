import HeroSection from "@/components/landing/hero-section";
import FeaturesSection from "@/components/landing/features-section";
import TechStackSection from "@/components/landing/tech-stack-section";
import UseCasesSection from "@/components/landing/use-cases-section";
import BenefitsSection from "@/components/landing/benefits-section";
import ContactSection from "@/components/landing/contact-section";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TechStackSection />
      <UseCasesSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}