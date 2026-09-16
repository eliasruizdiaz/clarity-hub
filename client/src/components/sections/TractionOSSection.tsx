/**
 * Clarity Traction OS section
 * Design reminder: it must feel like a focused specialist offer inside the Organic Tech Clarity Hub landing,
 * showing the mentor's real group board and a scanning-first hierarchy rather than a separate product microsite.
 */
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";

const students = [
  { initials: "MA", name: "Martina", step: "4 guiones este mes · publicó los 4", chip: "Avanza", tone: "go" },
  { initials: "JO", name: "Joaquín", step: "4 guiones este mes · publicó 3", chip: "Avanza", tone: "go" },
  { initials: "CA", name: "Camila", step: "Tiene sus guiones hace 6 días · no publicó", chip: "La estás perdiendo", tone: "risk" },
  { initials: "DI", name: "Diego", step: "4 guiones este mes · primer caso en curso", chip: "Avanza", tone: "go" },
] as const;

const channels = [
  { label: "Instagram", src: "/images/brecha/instagram.svg" },
  { label: "TikTok", src: "/images/brecha/tiktok.svg" },
  { label: "Facebook", src: "/images/brecha/facebook.svg" },
  { label: "Meta", src: "/images/brecha/meta.svg" },
] as const;

const toneClasses = {
  go: "bg-[#e4f4d9] text-[#3c7040]",
  wait: "bg-[#fdeadf] text-[#b04923]",
  risk: "bg-[#fbdfd9] text-[#a3372a]",
} as const;

export default function TractionOSSection() {
  return (
    <section id="traction-os" className="relative overflow-hidden bg-[#1e4428] py-20 text-[#f7fbf1] md:py-28">
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
              <GraduationCap className="h-3.5 w-3.5" />
              Para mentorías de contenido y marca personal
            </div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#f6a48a]">Oferta especializada</p>
            <h2 className="max-w-2xl font-serif text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-5xl lg:text-6xl">
              Clarity <span className="text-[#c9f29e]">Traction OS.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#e0ecdb] md:text-xl">
              Tenés veinte alumnos y cada uno llega a la sesión con su guion. Escuchás, corregís, y se te va la hora con cuatro.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#e0ecdb] md:text-xl">
              <strong className="text-[#c9f29e]">Tu propio sistema de contenido con IA</strong>, para que tus alumnos creen guiones, carruseles y stories con tu metodología.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                "Tus alumnos llegan con el guion escrito y tu criterio adentro.",
                "Ves quién publica y quién se está quedando, sin preguntar.",
              ].map((item) => (
                <p key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#e7f1df] md:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#9bd875]" />
                  {item}
                </p>
              ))}
            </div>
            <a
              href="/traction-os"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#ef5f33] px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#d94e25]"
            >
              Ver cómo funciona
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-sm text-[#bcd3b6]">Tomamos 5 mentores por mes.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[1.5rem] border border-[#c9f29e]/20 bg-[#fbfcf6] p-4 text-[#223a29] shadow-2xl md:p-6"
          >
            <div className="flex items-center justify-between border-b border-[#dce7d6] pb-4">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#628267]">Tu mentoría hoy</span>
              <span className="rounded-full bg-[#e7f5df] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[#3f7147]">Tu método, corriendo</span>
            </div>
            <div className="mt-4 flex items-center justify-center gap-5 rounded-xl border border-[#dce7d6] bg-gradient-to-r from-[#ef5f33]/[0.07] to-[#60ba46]/[0.1] px-3 py-3 sm:gap-8">
              {channels.map((channel) => (
                <img
                  key={channel.label}
                  src={channel.src}
                  alt={channel.label}
                  className="h-9 w-9 object-contain drop-shadow-sm sm:h-11 sm:w-11"
                />
              ))}
            </div>
            <div className="mt-5 grid gap-2.5">
              {students.map((student, index) => (
                <motion.div
                  key={student.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.07 }}
                  className={`flex items-center gap-3 rounded-xl border bg-white px-3 py-2.5 shadow-sm ${
                    student.tone === "risk" ? "border-[#ef5f33]/35" : "border-[#e2e9dd]"
                  }`}
                >
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-[#e6f1de] text-[0.62rem] font-bold text-[#2e6a34]">
                    {student.initials}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold leading-tight">{student.name}</span>
                    <span className="block text-[0.7rem] leading-tight text-[#78826f]">{student.step}</span>
                  </span>
                  <span className={`flex-none rounded-md px-2 py-1 text-[0.55rem] font-bold uppercase tracking-[0.08em] ${toneClasses[student.tone]}`}>
                    {student.chip}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
