import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ResultadoSection from "@/components/sections/ResultadoSection";
import MetodoSection from "@/components/sections/MetodoSection";
import RoiScanSection from "@/components/sections/RoiScanSection";
import TransformationSection from "@/components/sections/TransformationSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* 1. Hero: headline + La Brecha + Agendá (Schedule) */}
        <HeroSection />
        {/* 2. El Resultado: 6 caras */}
        <ResultadoSection />
        {/* 3. El Método: 3 pasos (ROI Scan, Optimization, Transformation) */}
        <MetodoSection />
        {/* 4. Calculadora ROI (Lead) */}
        <CalculatorSection />
        {/* 5. ROI Scan en detalle (Paso 1) */}
        <RoiScanSection />
        {/* 6. Optimization + Transformation (Pasos 2 y 3) */}
        <TransformationSection />
        {/* 7. Planes y precios */}
        <ServicesSection />
        {/* 8. Confianza: stats + logos */}
        <SocialProofSection />
        {/* 9. FAQ */}
        <FAQSection />
        {/* 10. CTA final: Agenda / Email / WhatsApp */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
