import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { PricingSection } from './components/PricingSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-900 to-rose-800">
      {/* Hero Section */}
      <HeroSection />

      {/* Benefícios */}
      <BenefitsSection />

      {/* Depoimentos */}
      <TestimonialsSection />

      {/* Seção de Preço e Garantia */}
      <PricingSection />

      {/* FAQ */}
      <FAQSection />

    </main>
  );
}
