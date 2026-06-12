import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Eye, ShieldCheck, Target, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";

const caras = [
  {
    icon: Zap,
    name: "Velocidad",
    hoy: "Procesos críticos toman días.",
    despues: "Toman minutos u horas.",
    aplica: "cierre contable, compras, despachos, onboarding",
  },
  {
    icon: Eye,
    name: "Visibilidad",
    hoy: "Reportes mensuales armados a mano.",
    despues: "Dashboards vivos, siempre actualizados.",
    aplica: "ventas, flujo de caja, stock, marketing",
  },
  {
    icon: ShieldCheck,
    name: "Confiabilidad",
    hoy: "Planillas críticas expuestas al error humano.",
    despues: "Datos validados. Humanos solo en las excepciones.",
    aplica: "pricing, conciliación, controles, stock",
  },
  {
    icon: Target,
    name: "Efectividad",
    hoy: "Equipo enredado en tareas mecánicas.",
    despues: "Equipo multiplicado con las herramientas correctas.",
    aplica: "ventas, WhatsApp, atención al cliente, marketing",
  },
  {
    icon: Lightbulb,
    name: "Decisión",
    hoy: "Decidir esperando el cierre del mes.",
    despues: "Decidir con datos del minuto.",
    aplica: "comercial, financiero, supply, investigación de mercado",
  },
  {
    icon: TrendingUp,
    name: "Escala",
    hoy: "Crecer significa sumar personas.",
    despues: "Crecer activando lo que ya tenés.",
    aplica: "operaciones, logística, delivery, almacenes",
  },
];

export default function ResultadoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resultado" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow eyebrow-center mb-4">El resultado</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Pasar del caos al control tiene <span className="text-forest">6 caras concretas</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada proceso tiene una cara manual y otra automatizada. Te muestro las dos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caras.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              className="group bg-cream rounded-2xl p-6 border border-border hover:border-forest/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-orange/10 grid place-items-center group-hover:bg-orange group-hover:scale-110 transition-all duration-300">
                  <c.icon className="w-5 h-5 text-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold uppercase tracking-wide text-foreground">{c.name}</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-3 line-through decoration-destructive/40">
                {c.hoy}
              </p>
              <div className="flex items-start gap-2 mb-5">
                <ArrowRight className="w-4 h-4 text-forest shrink-0 mt-1" />
                <p className="text-base font-semibold text-foreground">{c.despues}</p>
              </div>

              <div className="pt-4 border-t border-border">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
                  Aplica a
                </span>
                <p className="text-sm text-muted-foreground mt-1 italic">{c.aplica}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto"
        >
          Estos 6 tipos de cambio aplican a cualquier proceso crítico. Lo que automatizamos primero lo define el{" "}
          <strong className="text-foreground">ROI Scan</strong>.
        </motion.p>
      </div>
    </section>
  );
}
