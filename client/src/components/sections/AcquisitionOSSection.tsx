/**
 * Clarity Acquisition OS section
 * Design reminder: it must feel like a focused specialist offer inside the Organic Tech Clarity Hub landing,
 * using real operational sources and a scanning-first hierarchy rather than a separate product microsite.
 */
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2, Network } from "lucide-react";
import { trackSchedule } from "@/lib/metaTracking";
import { CALENDAR_URL } from "@/lib/links";

const sources = [
  { label: "Notion", icon: "/images/brecha/notion.svg", position: "top-5 left-5 sm:left-8" },
  { label: "Gmail", icon: "/images/brecha/gmail.svg", position: "top-5 right-5 sm:right-8" },
  { label: "Instagram", icon: "/images/brecha/instagram.svg", position: "top-[46%] left-1 sm:left-5" },
  { label: "CRM", icon: "/images/brecha/salesforce.svg", position: "top-[46%] right-1 sm:right-5" },
  { label: "WhatsApp", icon: "/images/brecha/whatsapp.svg", position: "bottom-5 left-3 sm:left-8" },
  { label: "Facebook", icon: "/images/brecha/facebook.svg", position: "bottom-5 right-3 sm:right-8" },
];

const stages = [
  ["01", "Acquisition Audit", "Detectamos dónde se corta el contexto y qué todavía depende de vos."],
  ["02", "Architecture", "Diseñamos criterios, roles y traspasos que el equipo puede ejecutar."],
  ["03", "Implementation", "Conectamos herramientas, conversaciones y seguimiento en una operación usable."],
] as const;

export default function AcquisitionOSSection() {
  return (
    <section id="acquisition-os" className="relative overflow-hidden bg-[#1e4428] py-20 text-[#f7fbf1] md:py-28">
      <div className="pointer-events-none absolute -right-36 top-0 h-96 w-96 rounded-full bg-[#60ba46]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-44 -left-20 h-96 w-96 rounded-full bg-[#ef5f33]/15 blur-3xl" />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#bfe5a1]/25 bg-[#f7fbf1]/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#c9f29e]">
              <Network className="h-3.5 w-3.5" />
              Para coaches e infoproductores high ticket
            </div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#f6a48a]">Oferta especializada</p>
            <h2 className="max-w-2xl font-serif text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-5xl lg:text-6xl">
              Clarity <span className="text-[#c9f29e]">Acquisition OS.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#e0ecdb] md:text-xl">
              Convertí tu <strong className="text-[#c9f29e]">Marca Personal</strong> en un sistema de adquisición y conversión que tu equipo pueda operar sin depender de vos.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                "Menos contexto perdido entre comentarios, DMs y llamadas.",
                "Más criterio documentado para que el equipo avance sin esperar tu respuesta.",
                "Una operación que une conversaciones, herramientas y seguimiento.",
              ].map((item) => (
                <p key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#e7f1df] md:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#9bd875]" />
                  {item}
                </p>
              ))}
            </div>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSchedule("Acquisition OS section")}
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#ef5f33] px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#d94e25]"
            >
              <Calendar className="h-4 w-4" />
              Quiero revisar mi sistema
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[1.5rem] border border-[#c9f29e]/20 bg-[#fbfcf6] p-4 text-[#223a29] shadow-2xl md:p-6"
          >
            <div className="flex items-center justify-between border-b border-[#dce7d6] pb-4">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#628267]">Fuentes que hoy viven separadas</span>
              <span className="rounded-full bg-[#e7f5df] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[#3f7147]">Contexto unificado</span>
            </div>
            <div className="relative mx-auto mt-5 aspect-[1.2/1] max-w-md overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_center,_#e3f0dc_0,_#f8fbf4_42%,_#edf4e6_100%)]">
              <svg viewBox="0 0 400 320" className="absolute inset-0 h-full w-full" aria-hidden="true">
                {[
                  "M82 60 L200 160", "M320 60 L200 160", "M36 160 L200 160",
                  "M364 160 L200 160", "M72 270 L200 160", "M328 270 L200 160",
                ].map((d) => <path key={d} d={d} fill="none" stroke="#67a06f" strokeDasharray="5 7" strokeWidth="1.5" />)}
              </svg>
              <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[6px] border-[#d1ebc6] bg-white p-4 text-center shadow-xl sm:h-32 sm:w-32">
                <img src="/images/logo_clarity.png" alt="Clarity Hub" className="h-auto w-20 object-contain" />
              </div>
              {sources.map((source, index) => (
                <motion.div
                  key={source.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, delay: index * 0.06 }}
                  className={`absolute flex items-center gap-1.5 rounded-lg border border-[#d9e6d4] bg-white px-2 py-1.5 text-[0.62rem] font-bold shadow-sm ${source.position}`}
                >
                  <img src={source.icon} alt="" className="h-3.5 w-3.5 object-contain" />
                  {source.label}
                </motion.div>
              ))}
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-semibold text-[#47784e]">
              Un contexto que el equipo puede usar <ArrowRight className="h-4 w-4 text-[#d94e25]" />
            </p>
          </motion.div>
        </div>

        <div className="mt-14 border-t border-[#c9f29e]/20 pt-10 md:mt-20 md:pt-12">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#c9f29e]">Cómo lo llevamos a la práctica</p>
          <div className="grid gap-4 md:grid-cols-3">
            {stages.map(([number, title, detail]) => (
              <div key={number} className="rounded-2xl border border-[#c9f29e]/15 bg-[#ffffff]/[0.06] p-5">
                <span className="text-sm font-bold text-[#f6a48a]">{number}</span>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#d7e6d2]">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
