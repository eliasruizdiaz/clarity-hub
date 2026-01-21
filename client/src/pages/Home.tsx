import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Quiz from "@/components/Quiz";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import TiersSection from "@/components/sections/TiersSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [buttonOrigin, setButtonOrigin] = useState("Unknown");

  const openQuiz = (origin: string = "Unknown") => {
    setButtonOrigin(origin);
    setIsQuizOpen(true);
  };
  const closeQuiz = () => setIsQuizOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenQuiz={openQuiz} />
      
      <main className="flex-1">
        <HeroSection onOpenQuiz={openQuiz} />
        <ProblemSection onOpenQuiz={openQuiz} />
        <SolutionSection onOpenQuiz={openQuiz} />
        <BenefitsSection />
        <SocialProofSection />
        <TiersSection onOpenQuiz={openQuiz} />
        <FAQSection onOpenQuiz={openQuiz} />
        <CTASection onOpenQuiz={openQuiz} />
      </main>

      <Footer />

      {/* Quiz Modal */}
      <Quiz isOpen={isQuizOpen} onClose={closeQuiz} buttonOrigin={buttonOrigin} />
    </div>
  );
}
