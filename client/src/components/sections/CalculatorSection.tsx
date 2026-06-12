import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, TrendingDown } from "lucide-react";
import Calculator from "@/components/Calculator";
import { trackSchedule } from "@/lib/metaTracking";
import { CALENDAR_URL } from "@/lib/links";

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
            <span className="eyebrow mb-4">Calculadora de ROI</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 mt-4">
              ¿Cuánto dinero estás{" "}
              <span className="gradient-text">perdiendo cada mes?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Cada mes que pasa sin automatizar los procesos correctos se va en tiempo desperdiciado,
              errores manuales y costos operativos inflados.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Calculá cuánto te está costando no tomar acción. Ese número es justo lo que el{" "}
              <strong className="text-foreground">ROI Scan</strong> prioriza para automatizar primero.
            </p>

            <div className="bg-cream rounded-xl p-6 border border-border mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center shrink-0">
                  <TrendingDown className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">El costo de no decidir</h4>
                  <p className="text-sm text-muted-foreground">
                    Lo que ves acá es una estimación. En el ROI Scan lo medimos con tus datos reales y lo convertimos en un plan.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSchedule("Calculator Section")}
              className="btn-primary-gradient text-white font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center gap-2 relative z-10"
            >
              <Calendar className="w-5 h-5" />
              Llevá estos números a tu ROI Scan
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
