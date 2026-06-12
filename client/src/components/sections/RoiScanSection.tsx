import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Target, BarChart3, DollarSign, CheckSquare, FileText, Calendar } from "lucide-react";
import { trackSchedule } from "@/lib/metaTracking";
import { CALENDAR_URL } from "@/lib/links";

const comoLoHacemos = [
  {
    t: "Diagnóstico inicial",
    d: "3-4 sesiones con tu equipo y referentes clave. Mapeamos los flujos de los 3 procesos candidatos y capturamos datos críticos.",
  },
  {
    t: "Análisis y priorización",
    d: "Matriz Impacto vs Complejidad. Cruzamos ahorro mensual, horas liberadas y costo para identificar el proceso N°1 a automatizar.",
  },
  {
    t: "Entrega de resultados",
    d: "Informe estratégico (10-15 páginas) con plan de acción claro y cotización detallada para implementar.",
  },
];

const queTeLlevas = [
  { icon: Target, t: "Recomendación priorizada", d: "El proceso N°1 a automatizar, justificado con datos sobre su impacto potencial." },
  { icon: BarChart3, t: "Matriz de decisión visual", d: "Gráfico que compara los 3 procesos y muestra por qué el recomendado es la mejor opción." },
  { icon: DollarSign, t: "Análisis de ROI preliminar", d: "Ahorro mensual, horas liberadas del equipo y capacidad adicional para escalar." },
  { icon: CheckSquare, t: "Plan de acción", d: "Los pasos concretos para automatizar el proceso prioritario." },
  { icon: FileText, t: "Cotización detallada", d: "Propuesta formal con costos separados por proceso analizado." },
];

export default function RoiScanSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="roi-scan" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="flex flex-col items-center mb-5">
            <div className="w-16 h-16 rounded-full bg-orange text-white text-2xl font-extrabold grid place-items-center ring-4 ring-orange/15">
              1
            </div>
            <span className="mt-3 font-mono text-sm font-extrabold uppercase tracking-[0.25em] text-orange">
              Paso 1
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-2">ROI Scan</h2>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground bg-cream border border-border rounded-full px-3 py-1 mb-3">
            <Clock className="w-3.5 h-3.5" /> 2 semanas
          </span>
          <p className="text-xl font-semibold text-forest mb-3">El diagnóstico que define dónde invertir.</p>
          <p className="text-lg text-muted-foreground">
            Antes de tocar tecnología, mapeamos los procesos críticos, medimos el ROI real y elegimos por dónde empezar.
            Cada peso invertido tiene el mayor retorno posible.
          </p>
        </motion.div>

        {/* Cómo lo hacemos | Qué te llevás */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-cream rounded-2xl border border-border p-6 lg:p-8"
          >
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">
              Cómo lo hacemos
            </span>
            <div className="mt-5 space-y-5">
              {comoLoHacemos.map((s, i) => (
                <div key={s.t} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-orange/10 text-orange font-bold text-sm grid place-items-center shrink-0">
                    {`0${i + 1}`}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-0.5">{s.t}</h4>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-cream rounded-2xl border border-border p-6 lg:p-8"
          >
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">
              Qué te llevás
            </span>
            <div className="mt-5 space-y-4">
              {queTeLlevas.map((d) => (
                <div key={d.t} className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-forest/10 grid place-items-center shrink-0">
                    <d.icon className="w-4 h-4 text-forest" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{d.t}</h4>
                    <p className="text-sm text-muted-foreground">{d.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Price + CTA strip with illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-cream to-mint/30 rounded-3xl border border-border p-8 lg:p-10"
        >
          <img
            src="/images/solution-illustration.png"
            alt="Diagnóstico ROI Scan"
            className="w-full h-auto rounded-2xl shadow-xl max-w-md mx-auto"
          />
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Dos semanas, un plan accionable.
            </h3>
            <p className="text-muted-foreground mb-6">
              Auditamos tus procesos, priorizamos por retorno y te entregamos la hoja de ruta con su cotización para implementar.
            </p>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSchedule("ROI Scan Section")}
              className="btn-primary-gradient text-white font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Agendá 30 min gratis
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
