import { User, Zap, ArrowRight, Calculator, Receipt } from "lucide-react";

/*
 * La Brecha: antes -> después, contado con personas (headcount).
 *  - HOY: un ejército de personas atendiendo a mano cada proceso/sistema (te obliga a contratar más).
 *    Las herramientas flotan POR ENCIMA de la gente, más grandes, distribuidas por todo el card.
 *  - DESPUÉS: un equipo chico en el centro, rodeado por una capa de automatización (Clarity) que
 *    orquesta todos los procesos de la empresa alrededor.
 */

const FOREST = "#60Ba46";

const processes = [
  { src: "/images/brecha/excel.svg", label: "Excel" },
  { src: "/images/brecha/sap.svg", label: "SAP" },
  { src: "/images/brecha/whatsapp.svg", label: "WhatsApp" },
  { src: "/images/brecha/salesforce.svg", label: "CRM" },
  { src: "/images/brecha/powerbi.svg", label: "Reportes" },
  { src: "/images/brecha/gmail.svg", label: "Emails" },
  { src: "/images/brecha/drive.svg", label: "Drive" },
  { src: "/images/brecha/oracle.svg", label: "Oracle" },
  { Icon: Calculator, label: "Contabilidad" },
  { Icon: Receipt, label: "Facturas" },
] as const;

type Proc = (typeof processes)[number];
type Item = { kind: "person"; stressed: boolean } | { kind: "proc"; proc: Proc };

function ProcGlyph({ proc }: { proc: Proc }) {
  if ("src" in proc) {
    return <img src={proc.src} alt={proc.label} className="max-w-full max-h-full object-contain" />;
  }
  const Icon = proc.Icon;
  return <Icon className="w-3/4 h-3/4 text-slate-500" strokeWidth={1.8} />;
}

// scatter pseudo-aleatorio pero determinístico (estable entre renders)
const rand = (n: number) => {
  const x = Math.sin(n) * 43758.5453;
  return x - Math.floor(x);
};

const SIZES_PERSON = ["w-7 h-7", "w-9 h-9", "w-8 h-8", "w-11 h-11", "w-6 h-6", "w-10 h-10"];
const SIZES_TOOL = ["w-11 h-11", "w-14 h-14", "w-12 h-12", "w-16 h-16", "w-10 h-10", "w-14 h-14"];

function HoyCrowd() {
  const items: Item[] = [];
  let p = 0;
  for (let i = 0; i < 33; i++) {
    if (i % 3 === 1) {
      items.push({ kind: "proc", proc: processes[p % processes.length] });
      p++;
    } else {
      items.push({ kind: "person", stressed: i % 7 === 0 });
    }
  }

  // grilla jitterada (7x5) -> cubre todo el card de forma pareja pero desordenada
  const COLS = 7;
  const ROWS = 5;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-lg p-5 md:p-6 h-full">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg font-extrabold tracking-wide text-foreground">HOY</span>
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-orange bg-orange/10 rounded-full px-2.5 py-1">
          Punto de partida
        </span>
      </div>
      <p className="text-xs md:text-sm text-muted-foreground italic mb-3">
        Para sostener la operación, contratás más y más gente.
      </p>

      {/* todo tirado por todos lados, encimado y torcido (caos) */}
      <div className="relative h-64 md:h-80">
        {items.map((it, i) => {
          const col = i % COLS;
          const row = Math.floor(i / COLS);
          const cx = ((col + 0.5) / COLS) * 100 + (rand(i * 12.99 + 1.3) - 0.5) * (100 / COLS) * 0.95;
          const cy = ((row + 0.5) / ROWS) * 100 + (rand(i * 78.23 + 7.7) - 0.5) * (100 / ROWS) * 0.95;
          const left = Math.min(96, Math.max(4, cx));
          const top = Math.min(95, Math.max(5, cy));
          const rot = (rand(i * 39.42 + 3.1) - 0.5) * 55;
          const isTool = it.kind === "proc";
          const pool = isTool ? SIZES_TOOL : SIZES_PERSON;
          const size = pool[Math.floor(rand(i * 4.7 + 2.2) * pool.length)];
          const z = isTool ? 30 + Math.floor(rand(i * 9.1 + 5) * 10) : Math.floor(rand(i * 9.1 + 5) * 10);
          return (
            <div
              key={i}
              className="absolute"
              style={{ left: `${left}%`, top: `${top}%`, transform: `translate(-50%, -50%) rotate(${rot}deg)`, zIndex: z }}
            >
              {it.kind === "person" ? (
                <div className={`${size} rounded-full grid place-items-center ${it.stressed ? "bg-orange/15" : "bg-muted"}`}>
                  <User className={`w-1/2 h-1/2 ${it.stressed ? "text-orange" : "text-muted-foreground"}`} strokeWidth={1.8} />
                </div>
              ) : (
                <div className={`${size} rounded-xl bg-white border border-border shadow-lg grid place-items-center p-1.5`}>
                  <ProcGlyph proc={it.proc} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DespuesTeam() {
  const N = processes.length;
  const R = 42;
  const pos = processes.map((_, i) => {
    const a = ((-90 + (360 / N) * i) * Math.PI) / 180;
    return [50 + R * Math.cos(a), 50 + R * Math.sin(a)] as [number, number];
  });

  return (
    <div className="relative overflow-hidden rounded-2xl border border-forest/40 bg-white shadow-lg p-5 md:p-6 h-full">
      <div className="absolute inset-0 bg-forest/[0.04]" />
      <div className="relative z-10 flex flex-col items-center h-full">
        <div className="flex items-center gap-2 mb-1 self-start">
          <span className="text-lg font-extrabold tracking-wide text-foreground">DESPUÉS</span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-forest bg-forest/10 rounded-full px-2.5 py-1">
            Tu visión
          </span>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground italic mb-4 self-start">
          Un equipo chico orquesta toda la operación. La IA hace lo repetitivo.
        </p>

        {/* equipo al centro + capa de automatización + procesos alrededor */}
        <div className="relative w-full max-w-[300px] aspect-square my-auto">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            {pos.map(([x, y], i) => (
              <line key={i} x1="50" y1="50" x2={x} y2={y} stroke={FOREST} strokeWidth={0.7} opacity={0.4} strokeDasharray="2 2" />
            ))}
          </svg>

          {/* procesos de la empresa, alrededor */}
          {processes.map((proc, i) => (
            <div
              key={proc.label}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[15%] aspect-square rounded-lg bg-white border border-forest/30 shadow-sm grid place-items-center p-1"
              style={{ left: `${pos[i][0]}%`, top: `${pos[i][1]}%` }}
            >
              <ProcGlyph proc={proc} />
            </div>
          ))}

          {/* centro: capa de automatización (anillos que orbitan) + equipo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44%] aspect-square">
            <div className="absolute inset-[-8%] rounded-full bg-forest/20 blur-xl" />
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-forest/50 spin-slow" />
            <div className="absolute inset-[16%] rounded-full border border-dashed border-forest/35 spin-slow-rev" />
            <div className="absolute inset-[30%] rounded-full bg-white border border-forest/50 shadow-md grid place-items-center">
              <div className="flex gap-px">
                {[0, 1, 2].map((i) => (
                  <User key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 text-forest" strokeWidth={2.2} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* motor: Clarity */}
        <div className="flex flex-col items-center mt-3">
          <img src="/images/logo_clarity.png" alt="Clarity Hub" className="h-8 w-auto object-contain" />
          <span className="text-xs font-semibold text-forest inline-flex items-center gap-1 mt-0.5">
            <Zap className="w-3.5 h-3.5" fill="currentColor" /> Automatización + IA · 24/7
          </span>
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex flex-col items-center justify-center gap-1 py-1 md:py-0 md:px-2">
      <ArrowRight className="w-10 h-10 md:w-12 md:h-12 text-forest rotate-90 md:rotate-0" strokeWidth={2.2} />
      <span className="text-xs md:text-sm font-bold text-forest text-center leading-tight">
        Con los<br />3 pasos
      </span>
    </div>
  );
}

export default function BrechaChart() {
  return (
    <div className="w-full max-w-5xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-3 items-stretch">
      <HoyCrowd />
      <Connector />
      <DespuesTeam />
    </div>
  );
}
