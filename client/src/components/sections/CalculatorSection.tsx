import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Calculator from "@/components/Calculator";

const WHOP_URL = "https://whop.com/clhub/clarity-hub-premium-72/";

export default function CalculatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="calculadora" className="py-20 md:py-28 bg-cream relative" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-orange font-medium text-sm uppercase tracking-wider mb-4">
              Calculadora de ROI
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              ¿Cuánto dinero estás{" "}
              <span className="gradient-text">perdiendo cada mes?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cada mes que pasa sin automatizar los procesos correctos, estás perdiendo 
              entre <strong className="text-foreground">$4,000 y $8,000</strong> en tiempo 
              desperdiciado, errores manuales y costos operativos inflados.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Usa esta calculadora para descubrir exactamente cuánto te está costando 
              no tomar acción. En 6 meses, eso puede ser hasta <span className="text-destructive font-semibold">$48,000 tirados a la basura</span>.
            </p>

            <div className="bg-white rounded-xl p-6 border border-border mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">7 días de garantía total</h4>
                  <p className="text-sm text-muted-foreground">
                    Si en los primeros 7 días sientes que esto no es para ti, te devuelvo cada centavo. Sin preguntas, sin vueltas.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={WHOP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary-gradient text-white font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center gap-2 relative z-10"
            >
              Recupera ese dinero ahora
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>

          {/* Right column - Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Calculator />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
