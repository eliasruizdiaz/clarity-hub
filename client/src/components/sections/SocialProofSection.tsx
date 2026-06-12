import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { num: "+14", label: "Años de experiencia", accent: "orange" as const },
  { num: "+150", label: "Implementaciones", accent: "forest" as const },
  { num: "+50", label: "Empresas", accent: "orange" as const },
];

const logos = [
  { name: "HSBC", logo: "/images/hsbc-logo.jpg" },
  { name: "Itaú", logo: "/images/itau-logo.jpg" },
  { name: "Movistar", logo: "/images/movistar-logo.png" },
  { name: "Tigo", logo: "/images/tigo-logo.jpg" },
  { name: "Personal", logo: "/images/personal-logo.png" },
  { name: "Securitas Direct", logo: "/images/securitas-logo.jpg" },
  { name: "Fortis Mayorista", logo: "/images/fortis-logo.png" },
  { name: "Comfar", logo: "/images/comfar-logo.png" },
];

export default function SocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="confianza" className="py-20 md:py-28 bg-mint/20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-forest rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="eyebrow eyebrow-center mb-4">Confianza</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Lo que te proponemos <span className="text-forest">ya lo hicimos 150 veces</span>.
          </h2>
          <p className="text-lg text-muted-foreground">El track record no se inventa. Se acumula.</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-16"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className={`text-4xl md:text-6xl font-extrabold ${s.accent === "orange" ? "text-orange" : "text-forest"}`}>
                {s.num}
              </p>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Logos */}
        <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70 mb-6">
          Empresas con las que trabajamos
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16"
        >
          {logos.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-xl p-4 h-20 flex items-center justify-center hover:scale-105 transition-transform shadow-sm"
            >
              <img src={c.logo} alt={c.name} className="max-h-10 w-auto object-contain" />
            </div>
          ))}
        </motion.div>

        {/* Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto text-center bg-white/70 backdrop-blur-sm rounded-2xl border border-white/60 p-8"
        >
          <p className="text-lg md:text-xl text-foreground italic leading-relaxed">
            "Cada implementación empieza por un ROI Scan medido en números, no en promesas. Es nuestra firma, no nuestra estrategia."
          </p>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-forest mt-4">Clarity Hub</p>
        </motion.div>
      </div>
    </section>
  );
}
