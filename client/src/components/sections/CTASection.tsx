import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface CTASectionProps {
  onOpenQuiz: (origin: string) => void;
}

export default function CTASection({ onOpenQuiz }: CTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-gradient-forest-orange relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            ¿Listo para implementar automatización sin perder tiempo ni dinero?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10">
            El diagnóstico es 100% gratuito y te toma menos de 3 minutos. 
            Descubre exactamente qué necesitas para tu situación específica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenQuiz("CTA Final")}
              className="bg-white text-forest font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center justify-center gap-2 hover:bg-white/90 transition-colors shadow-xl"
            >
              Hacer diagnóstico gratis
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          <p className="text-white/60 text-sm mt-6">
            Sin compromiso. Sin tarjeta de crédito. Solo claridad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
