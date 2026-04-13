import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { trackInitiateCheckout, trackContact } from "@/lib/metaTracking";

const WHOP_URL = "https://whop.com/clhub/clarity-hub-premium-72/";
const WA_DISCOVERY = "https://wa.me/595982120861?text=Hola!%20Me%20interesa%20el%20Discovery%20Express";
const WA_CONSULTORIA = "https://wa.me/595982120861?text=Hola!%20Me%20interesa%20la%20Consultor%C3%ADa%20%2B%20Implementaci%C3%B3n";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-20 md:py-28 bg-cream" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-orange font-medium text-sm uppercase tracking-wider mb-4">
            Elige tu camino
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            ¿Necesitas Más Que la Formación?
          </h2>
          <p className="text-lg text-muted-foreground">
            Si prefieres que lo hagamos por ti o necesitas acompañamiento personalizado, 
            tenemos opciones para cada etapa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Columna 1: Formación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative bg-white rounded-2xl border-2 border-forest shadow-xl overflow-hidden flex flex-col"
          >
            {/* Popular badge */}
            <div className="bg-forest text-white text-center py-2 text-sm font-semibold">
              MÁS POPULAR
            </div>
            <div className="p-6 lg:p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">De Caos a Claridad</h3>
              <p className="text-sm text-muted-foreground mb-6">Formación + Comunidad</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$297</span>
                <span className="text-muted-foreground ml-1">USD</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Aprende a liderar proyectos de automatización e IA desde cero. Acceso de por vida.
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "6 fases de formación completa",
                  "Curso práctico con ejercicios",
                  "7 cheatsheets y plantillas",
                  "Sesión semanal en vivo",
                  "Comunidad exclusiva",
                  "Acceso de por vida",
                  "7 días de garantía",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-forest shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHOP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackInitiateCheckout('Services Section - Formacion')}
                className="btn-primary-gradient text-white font-semibold py-3.5 px-6 rounded-xl text-center inline-flex items-center justify-center gap-2 w-full"
              >
                Acceder Ahora
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Columna 2: Discovery Express */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-2xl border border-border hover:border-forest/30 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="bg-orange/10 text-orange text-center py-2 text-sm font-semibold">
              AYUDA PERSONALIZADA
            </div>
            <div className="p-6 lg:p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">Discovery Express</h3>
              <p className="text-sm text-muted-foreground mb-6">Diagnóstico a medida</p>
              
              <div className="mb-6">
                <span className="text-lg text-muted-foreground">Desde</span>
                <span className="text-4xl font-bold text-foreground ml-2">+$1,500</span>
                <span className="text-muted-foreground ml-1">USD</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Diagnóstico profundo de tu operación con entregables accionables en 48-72 horas.
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Auditoría completa de procesos",
                  "Inventario priorizado de oportunidades",
                  "Quick wins identificados",
                  "Roadmap personalizado",
                  "Estimación de ROI por proceso",
                  "Entregable en 48-72 horas",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_DISCOVERY}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackContact('Discovery Express', 1000)}
                className="bg-foreground text-white font-semibold py-3.5 px-6 rounded-xl text-center inline-flex items-center justify-center gap-2 w-full hover:bg-foreground/90 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Solicitar Discovery
              </a>
            </div>
          </motion.div>

          {/* Columna 3: Consultoría + Implementación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-2xl border border-border hover:border-forest/30 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="bg-forest/10 text-forest text-center py-2 text-sm font-semibold">
              SERVICIO COMPLETO
            </div>
            <div className="p-6 lg:p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">Consultoría + Implementación</h3>
              <p className="text-sm text-muted-foreground mb-6">Lo hacemos por ti</p>
              
              <div className="mb-6">
                <span className="text-lg text-muted-foreground">Desde</span>
                <span className="text-4xl font-bold text-foreground ml-2">+$3,500</span>
                <span className="text-muted-foreground ml-1">USD</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Diseñamos, implementamos y escalamos la automatización completa de tu operación.
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Todo lo del Discovery Express",
                  "Diseño de arquitectura completa",
                  "Implementación técnica end-to-end",
                  "Despliegue piloto + medición",
                  "Gobernanza y políticas de datos",
                  "Soporte post-implementación",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-forest shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_CONSULTORIA}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackContact('Consultoria + Implementacion', 3500)}
                className="bg-foreground text-white font-semibold py-3.5 px-6 rounded-xl text-center inline-flex items-center justify-center gap-2 w-full hover:bg-foreground/90 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Solicitar Consultoría
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
