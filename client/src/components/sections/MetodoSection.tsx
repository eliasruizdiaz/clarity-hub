import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const pasos = [
  {
    paso: 1,
    accent: "orange" as const,
    badge: "Empezás acá",
    name: "ROI Scan",
    dur: "2 semanas",
    desc: "Auditamos los 3 procesos con mayor potencial de ROI. Análisis fino, priorización y estimación de costos.",
    entrega: "Hoja de ruta priorizada y costo estimado de cada implementación.",
  },
  {
    paso: 2,
    accent: "forest" as const,
    badge: null,
    name: "Optimization",
    dur: "Definido en el Scan",
    desc: "Rediseñamos los procesos antes de tocar tecnología. La empresa queda preparada para automatizar bien.",
    entrega: "Procesos optimizados, listos para automatizar sin replicar errores anteriores.",
  },
  {
    paso: 3,
    accent: "forest" as const,
    badge: null,
    name: "Transformation",
    dur: "Definido en el Scan",
    desc: "Implementamos software, IA, integraciones y automatizaciones según el plan que salió del Scan.",
    entrega: "Operación transformada con resultados medibles y validados.",
  },
];

export default function MetodoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metodo" className="py-20 md:py-28 bg-mint/20" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow eyebrow-center mb-4">El método</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Lograrlo tiene método. <span className="text-forest">3 pasos, en este orden.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Primero entendemos. Después optimizamos. Recién entonces implementamos.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* connecting line (desktop) - aligned to circle centers */}
          <div className="hidden md:block absolute top-14 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-border" />

          {pasos.map((p, i) => (
            <motion.div
              key={p.paso}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 * i, duration: 0.5 }}
              className={`relative bg-white rounded-2xl border-2 shadow-sm p-6 lg:p-7 flex flex-col ${
                p.accent === "orange" ? "border-orange/40" : "border-border"
              }`}
            >
              {/* Paso marker */}
              <div className="flex flex-col items-center mb-4">
                <div
                  className={`relative z-10 w-16 h-16 rounded-full grid place-items-center text-white text-2xl font-extrabold ring-4 ring-white ${
                    p.accent === "orange" ? "bg-orange" : "bg-forest"
                  }`}
                >
                  {p.paso}
                </div>
                <span
                  className={`mt-3 font-mono text-sm font-extrabold uppercase tracking-[0.25em] ${
                    p.accent === "orange" ? "text-orange" : "text-forest"
                  }`}
                >
                  Paso {p.paso}
                </span>
              </div>

              <div className="text-center mb-3">
                {p.badge && (
                  <span className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-orange bg-orange/10 rounded-full px-2.5 py-1 mb-2">
                    {p.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                <span className="inline-block mt-1 text-xs font-medium text-muted-foreground bg-cream border border-border rounded-full px-2.5 py-0.5">
                  {p.dur}
                </span>
              </div>

              <p className="text-sm text-muted-foreground text-center mb-5 flex-1">{p.desc}</p>

              <div className="bg-forest/5 border border-forest/15 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Check className="w-4 h-4 text-forest" />
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-forest">Te llevás</span>
                </div>
                <p className="text-sm text-foreground">{p.entrega}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
