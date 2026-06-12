import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MessageCircle } from "lucide-react";
import { trackContact } from "@/lib/metaTracking";
import { WA_FORMACIONES } from "@/lib/links";

export default function FormacionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="formaciones" className="py-12 md:py-16 bg-cream" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl border border-border shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-14 h-14 rounded-xl bg-forest/10 grid place-items-center shrink-0">
            <GraduationCap className="w-7 h-7 text-forest" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">
              ¿Solo necesitás capacitar a tu equipo?
            </span>
            <h3 className="text-xl font-bold text-foreground mt-1">Formaciones privadas</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Sesiones a medida sobre automatización e IA aplicada, para equipos chicos o áreas puntuales.
            </p>
          </div>
          <a
            href={WA_FORMACIONES}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContact("Formaciones privadas", 500)}
            className="bg-foreground text-white font-semibold py-3 px-6 rounded-xl inline-flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors shrink-0"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
