import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Check, Zap, Cpu, Users, Link2, BarChart3, MessageSquare, MessageCircle,
} from "lucide-react";
import { trackContact } from "@/lib/metaTracking";
import { WA_TRANSFORMATION } from "@/lib/links";

const principios = [
  { n: "01", t: "Desde primeros principios.", d: "No copiamos plantillas ni aplicamos receta. Cada proceso lo desarmamos a su esencia y lo reconstruimos pensando en tu negocio." },
  { n: "02", t: "Palas en lugar de cucharitas.", d: "No reemplazamos al equipo, lo potenciamos. Su tiempo se vuelca a tareas estratégicas, no mecánicas." },
  { n: "03", t: "Codo a codo con los expertos.", d: "Tu equipo conoce el proceso de verdad: las excepciones, los detalles, los porqués. Diseñamos con ellos, no alrededor." },
  { n: "04", t: "Diseñado para que lo quieran usar.", d: "Una solución que nadie quiere usar es una inversión a la basura en dos meses. Aseguramos adopción real." },
];

const spokes = [
  { icon: Zap, t: "Automatizaciones", d: "Workflows que ejecutan solos, 24/7." },
  { icon: Cpu, t: "Agentes de IA", d: "Clasifican, analizan y deciden en contexto." },
  { icon: Users, t: "Empleados Digitales", d: "Asumen un rol completo, sin sumar nómina." },
  { icon: Link2, t: "Integraciones", d: "Tus sistemas hablando entre sí, sin silos." },
  { icon: BarChart3, t: "Dashboards en vivo", d: "Visibilidad al minuto, no al cierre del mes." },
  { icon: MessageSquare, t: "Bots conversacionales", d: "Atención por WhatsApp, web, Slack o voz." },
];

function PhaseMarker({ paso }: { paso: number }) {
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="w-16 h-16 rounded-full bg-forest text-white text-2xl font-extrabold grid place-items-center ring-4 ring-forest/15">
        {paso}
      </div>
      <span className="mt-3 font-mono text-sm font-extrabold uppercase tracking-[0.25em] text-forest">
        Paso {paso}
      </span>
      <span className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground bg-cream border border-border rounded-full px-3 py-1">
        Definido en el Scan
      </span>
    </div>
  );
}

function OutcomeStrip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-forest/5 border border-forest/15 rounded-2xl p-5 max-w-4xl mx-auto">
      <div className="w-7 h-7 rounded-full bg-forest grid place-items-center shrink-0">
        <Check className="w-4 h-4 text-white" />
      </div>
      <p className="text-foreground">{children}</p>
    </div>
  );
}

export default function TransformationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="transformation" className="py-20 md:py-28 bg-cream" ref={ref}>
      <div className="container space-y-24">

        {/* ============ OPTIMIZATION ============ */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <PhaseMarker paso={2} />
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">Optimization</h2>
            <p className="text-xl font-semibold text-forest mb-3">Procesos rediseñados desde primeros principios.</p>
            <p className="text-lg text-muted-foreground">
              La IA aplicada sobre un proceso roto multiplica el ruido. Acá desarmamos los procesos hasta su esencia y los
              rediseñamos para que funcionen en la realidad, no en el papel.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-2 lg:order-1"
            >
              <img
                src="/images/problem-illustration.png"
                alt="Sobre un proceso roto, la IA multiplica el ruido"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 grid sm:grid-cols-2 gap-5"
            >
              {principios.map((p) => (
                <div key={p.n} className="bg-white rounded-xl border border-border p-5">
                  <div className="text-orange font-extrabold text-lg mb-1">{p.n}</div>
                  <h4 className="font-semibold text-foreground mb-1">{p.t}</h4>
                  <p className="text-sm text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <OutcomeStrip>
            <strong>Te llevás:</strong> procesos validados en campo, sólidos para soportar la tecnología que viene en Transformation.
          </OutcomeStrip>
        </div>

        {/* ============ TRANSFORMATION ============ */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <PhaseMarker paso={3} />
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">Transformation</h2>
            <p className="text-xl font-semibold text-forest">La tecnología que el plan necesita, integrada a tu operación.</p>
          </motion.div>

          {/* core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-10"
          >
            <div className="bg-orange text-white rounded-2xl px-8 py-5 text-center shadow-xl">
              <div className="text-xl font-bold">Tu operación</div>
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">Potenciada</div>
            </div>
          </motion.div>

          {/* spokes */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {spokes.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                className="bg-white rounded-2xl border border-border p-6 hover:border-forest/30 hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-forest/10 grid place-items-center mb-3">
                  <s.icon className="w-5 h-5 text-forest" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{s.t}</h4>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>

          <OutcomeStrip>
            <strong>Te llevás:</strong> una operación que escala sin sumar nómina. Con tu equipo potenciado, no reemplazado.
          </OutcomeStrip>
        </div>

        {/* ============ PRICE + CTA ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl border border-border shadow-sm p-8 lg:p-10"
        >
          <img
            src="/images/automation-illustration.png"
            alt="Operación automatizada y potenciada"
            className="w-full h-auto rounded-2xl shadow-xl max-w-md mx-auto"
          />
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Optimization + Transformation
            </h3>
            <p className="text-muted-foreground mb-6">
              El alcance exacto y el costo lo define tu ROI Scan. Implementamos lo que tiene el mayor retorno, en el orden correcto.
            </p>
            <a
              href={WA_TRANSFORMATION}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContact("Optimization + Transformation", 3500)}
              className="bg-foreground text-white font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Hablemos del proyecto
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
