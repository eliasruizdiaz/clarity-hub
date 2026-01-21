import { motion } from "framer-motion";
import Calculator from "@/components/Calculator";

interface HeroSectionProps {
  onOpenQuiz: (origin: string) => void;
}

export default function HeroSection({ onOpenQuiz }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 pb-16 overflow-hidden">
      {/* Background with organic shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cream" />
        
        {/* Animated blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-forest/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-mint/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
        
        {/* Hero image overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-mint/50 text-forest px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-forest rounded-full animate-pulse" />
              +13 años de experiencia en automatización
            </motion.div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Implementa IA y Automatización{" "}
              <span className="gradient-text">3-6x Más Rápido</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Ayudo a empresas medianas y grandes a evitar arquitecturas fallidas 
              que cuestan <span className="text-destructive font-medium">meses y mucho dinero</span> a la basura.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">100+ implementaciones</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">Mercados globales</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onOpenQuiz("Hero CTA")}
                className="btn-primary-gradient text-white font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center justify-center gap-2"
              >
                Hacer diagnóstico gratis
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <a
                href="#planes"
                className="bg-white border-2 border-border text-foreground font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center justify-center gap-2 hover:border-forest/30 transition-colors"
              >
                Ver planes
              </a>
            </div>
          </motion.div>

          {/* Right column - Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Calculator onOpenQuiz={onOpenQuiz} />
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
