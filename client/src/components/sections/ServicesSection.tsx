import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Calendar, MessageCircle } from "lucide-react";
import { trackSchedule, trackContact } from "@/lib/metaTracking";
import { CALENDAR_URL, WA_TRANSFORMATION } from "@/lib/links";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="planes" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow eyebrow-center mb-4">Planes</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Empezás por el <span className="text-orange">ROI Scan</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            Y si avanzás, Optimization + Transformation toman la posta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto items-stretch">
          {/* ROI Scan (featured) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative bg-white rounded-2xl border-2 border-orange shadow-xl overflow-hidden flex flex-col"
          >
            <div className="bg-orange text-white text-center py-2 text-sm font-semibold">EMPEZÁS ACÁ</div>
            <div className="p-6 lg:p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-foreground mb-1">ROI Scan</h3>
              <p className="text-sm text-muted-foreground mb-6">El diagnóstico que define dónde invertir</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Auditoría de los 3 procesos de mayor ROI",
                  "Matriz Impacto vs Complejidad",
                  "Análisis de ROI preliminar",
                  "Hoja de ruta priorizada",
                  "Cotización detallada",
                  "Entrega en 2 semanas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSchedule("Planes - ROI Scan")}
                className="btn-primary-gradient text-white font-semibold py-3.5 px-6 rounded-xl text-center inline-flex items-center justify-center gap-2 w-full"
              >
                <Calendar className="w-5 h-5" />
                Agendá 30 min · GRATIS
              </a>
            </div>
          </motion.div>

          {/* Optimization + Transformation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-cream rounded-2xl border border-border hover:border-forest/30 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="bg-forest/10 text-forest text-center py-2 text-sm font-semibold">SERVICIO COMPLETO</div>
            <div className="p-6 lg:p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-foreground mb-1">Optimization + Transformation</h3>
              <p className="text-sm text-muted-foreground mb-6">Lo rediseñamos y lo implementamos</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Todo lo que define el ROI Scan",
                  "Rediseño de procesos (Optimization)",
                  "Implementación end-to-end (Transformation)",
                  "Automatizaciones, IA, integraciones y dashboards",
                  "Soporte post-implementación",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WA_TRANSFORMATION}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContact("Optimization + Transformation", 3500)}
                className="bg-foreground text-white font-semibold py-3.5 px-6 rounded-xl text-center inline-flex items-center justify-center gap-2 w-full hover:bg-foreground/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Hablemos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
