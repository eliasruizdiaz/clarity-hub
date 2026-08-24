/**
 * Clarity Acquisition OS Preview
 * Design reminder: preserve Clarity Hub's warm editorial coral/green system.
 * Every visual reinforces the system transformation, never a generic AI tool.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  CircleDot,
  FileText,
  HeartHandshake,
  Lightbulb,
  MessagesSquare,
  Network,
  Route,
  Sparkles,
  Target,
  UsersRound,
  Waypoints,
} from "lucide-react";

const logo = "/images/logo_clarity.png";
const heroBackground = "/images/hero-bg.png";
const calendarUrl = "https://calendar.app.google/2LhqL441uzrciiw8A";

const painCards = [
  {
    icon: MessagesSquare,
    label: "Contexto",
    today: "Cada lead vuelve a explicar lo que ya dijo.",
    tomorrow: "Cada conversación llega con información útil para seguirla.",
  },
  {
    icon: CircleDot,
    label: "Criterio",
    today: "El equipo espera tu respuesta para saber qué hacer.",
    tomorrow: "Los criterios importantes quedan claros y supervisables.",
  },
  {
    icon: Route,
    label: "Continuidad",
    today: "Los comentarios, DMs y llamadas viven separados.",
    tomorrow: "El contexto avanza con el lead de un paso al siguiente.",
  },
  {
    icon: UsersRound,
    label: "Capacidad",
    today: "Más demanda te pide estar en más conversaciones.",
    tomorrow: "El equipo opera sobre una base que puede sostener.",
  },
];

const stages = [
  {
    number: "01",
    key: "audit",
    title: "Acquisition Audit",
    copy: "Vemos dónde se pierde contexto y qué sigue dependiendo de vos.",
    icon: Target,
    today: "Puntos de fuga invisibles",
    tomorrow: "Mapa claro del sistema",
  },
  {
    number: "02",
    key: "architecture",
    title: "Architecture",
    copy: "Diseñamos reglas, roles y traspasos para que el sistema sea transferible.",
    icon: Network,
    today: "Criterio en la memoria",
    tomorrow: "Criterio documentado",
  },
  {
    number: "03",
    key: "implementation",
    title: "Implementation",
    copy: "Implementamos lo que el sistema necesita y el equipo puede usar de verdad.",
    icon: Waypoints,
    today: "Herramientas aisladas",
    tomorrow: "Sistema operable",
  },
] as const;

const auditDeliverables = [
  "Mapa del sistema actual",
  "Puntos únicos de fallo",
  "Criterios de calificación",
  "Arquitectura propuesta",
  "Roadmap priorizado",
  "Alcance por fases",
];

const capabilities = [
  "Conversaciones supervisadas que siguen el criterio correcto.",
  "Perfiles contextuales para que cada lead llegue preparado al siguiente paso.",
  "Lead magnets por palabra clave conectados a conversaciones útiles.",
  "Entrenamiento progresivo con la voz y los criterios del fundador.",
  "Integraciones y documentación operativa que el equipo puede sostener.",
  "Campañas híbridas de Meta Ads, reels y carruseles cuando la arquitectura lo necesita.",
];

function ScrollButton({ className = "" }: { className?: string }) {
  return (
    <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className={`clarity-button ${className}`}>
      Agendá una llamada
      <ArrowDownRight aria-hidden="true" className="h-5 w-5" />
    </a>
  );
}

function FlowGraphic() {
  const tools = [
    { label: "Gmail", src: "/images/brecha/gmail.svg", className: "flow-tool-gmail" },
    { label: "Notion", src: "/images/brecha/notion.svg", className: "flow-tool-notion" },
    { label: "Drive", src: "/images/brecha/drive.svg", className: "flow-tool-drive" },
    { label: "CRM", src: "/images/brecha/salesforce.svg", className: "flow-tool-crm" },
    { label: "Facebook", src: "/images/brecha/facebook.svg", className: "flow-tool-sheets" },
    { label: "Excel", src: "/images/brecha/excel.svg", className: "flow-tool-excel" },
    { label: "WhatsApp", src: "/images/brecha/whatsapp.svg", className: "flow-tool-whatsapp" },
    { label: "Instagram", src: "/images/brecha/instagram.svg", className: "flow-tool-hubspot" },
  ];

  return (
    <div className="flow-card" aria-label="Mapa de fuentes operativas centralizadas">
      <div className="flow-card-topline">
        <div className="flow-brand-signature"><img src={logo} alt="Clarity Hub" /><span>ACQUISITION OS</span></div>
        <span className="status-pill"><span /> CONTEXTO UNIFICADO</span>
      </div>
      <div className="flow-orbit" aria-hidden="true">
        <div className="flow-dotted-ring flow-ring-one" />
        <div className="flow-dotted-ring flow-ring-two" />
        <div className="flow-center">
          <img src={logo} alt="" />
        </div>
        {tools.map(({ label, src, className }) => (
          <div className={`flow-tool ${className}`} key={label}>
            <img src={src} alt="" />
            <span>{label}</span>
          </div>
        ))}
        <svg className="flow-lines" viewBox="0 0 400 400" fill="none" aria-hidden="true">
          <path d="M200 200 C201 126 202 92 202 52" />
          <path className="flow-line-notion" d="M200 200 C152 157 111 103 72 54" />
          <path d="M200 200 C260 140 292 110 332 86" />
          <path d="M200 200 C278 196 326 197 370 198" />
          <path d="M200 200 C259 257 294 288 330 316" />
          <path d="M200 200 C198 264 198 314 198 355" />
          <path d="M200 200 C137 258 101 292 69 315" />
          <path d="M200 200 C121 195 68 195 28 194" />
        </svg>
      </div>
      <div className="flow-caption">
        <span>Fuentes que hoy viven separadas</span>
        <ArrowRight aria-hidden="true" />
        <strong>Un contexto que el equipo puede usar</strong>
      </div>
    </div>
  );
}

function SystemMiniMap({ type }: { type: "audit" | "architecture" | "implementation" }) {
  const map = type === "audit"
    ? { input: ["comentario", "DM"], core: "MAPA", output: ["criterio", "llamada"] }
    : type === "architecture"
      ? { input: ["voz", "contexto"], core: "REGLAS", output: ["equipo", "traspaso"] }
      : { input: ["lead", "prioridad"], core: "SISTEMA", output: ["acción", "seguimiento"] };

  return (
    <div className={`system-mini-map system-mini-map-${type}`} aria-label={`Diagrama de ${map.core.toLowerCase()}`}>
      <div className="mini-map-column">
        {map.input.map((label) => <span className="mini-map-node" key={label}>{label}</span>)}
      </div>
      <div className="mini-map-route"><span className="mini-map-route-dot" /><span className="mini-map-route-dot mini-map-route-dot-late" /></div>
      <span className="mini-map-core">{map.core}</span>
      <div className="mini-map-route mini-map-route-right"><span className="mini-map-route-dot" /><span className="mini-map-route-dot mini-map-route-dot-late" /></div>
      <div className="mini-map-column mini-map-column-output">
        {map.output.map((label) => <span className="mini-map-node" key={label}>{label}</span>)}
      </div>
    </div>
  );
}

function LossCalculator() {
  const [hours, setHours] = useState(10);
  const [people, setPeople] = useState(5);
  const [rate, setRate] = useState(25);
  const weekly = hours * people * rate;
  const monthly = weekly * 4;
  const yearly = monthly * 12;
  const money = (value: number) => new Intl.NumberFormat("es-PY", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

  return (
    <div className="loss-calculator">
      <div className="calculator-controls">
        <div className="calculator-label"><span className="eyebrow">CALCULADORA</span><h3>¿Cuánto cuesta seguir igual?</h3><p>Mové los controles y mirá cuánto tiempo operativo se pierde cada mes.</p></div>
        <label className="range-field"><span>Horas semanales en tareas manuales <b>{hours}h</b></span><input type="range" min="1" max="40" value={hours} onChange={(event) => setHours(Number(event.target.value))} /></label>
        <label className="range-field"><span>Personas afectadas <b>{people}</b></span><input type="range" min="1" max="50" value={people} onChange={(event) => setPeople(Number(event.target.value))} /></label>
        <label className="range-field"><span>Costo promedio por hora <b>US$ {rate}</b></span><input type="range" min="10" max="100" step="5" value={rate} onChange={(event) => setRate(Number(event.target.value))} /></label>
      </div>
      <div className="calculator-result" aria-live="polite">
        <span className="eyebrow">TIEMPO CONVERTIDO EN COSTO</span>
        <p>Con este escenario, perdés aproximadamente:</p>
        <motion.strong key={monthly} initial={{ opacity: 0.5, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}>{money(monthly)} <small>por mes</small></motion.strong>
        <div className="calculator-breakdown"><span>{money(weekly)}<small>semanal</small></span><span>{money(yearly)}<small>anual</small></span></div>
        <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className="calculator-link">Quiero revisar mi sistema <ArrowRight aria-hidden="true" /></a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfaf4] text-[#1b2118]">
      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-background" style={{ backgroundImage: `url(${heroBackground})` }} />
          <div className="hero-grid container">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, ease: [0.23, 1, 0.32, 1] }}
              className="hero-copy"
            >
              <span className="eyebrow eyebrow-hero">PARA COACHES E INFOPRODUCTORES HIGH TICKET</span>
              <h1>
                Convertí tu <span className="brand-highlight">Marca Personal</span> en un <em>sistema</em> de adquisición y conversión.
              </h1>
              <h2>Que tu equipo pueda operar sin depender de vos.</h2>
              <p className="hero-description">
                Desde Excel y tu CRM hasta Drive, Sheets, Gmail y WhatsApp. Un sistema para que el contexto no se corte cuando cambia de persona.
              </p>
              <div className="hero-actions">
                <ScrollButton />
                <span className="hero-microcopy"><BadgeCheck aria-hidden="true" /> Primero vemos dónde se traba tu operación. Después revisamos si hay encaje.</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.12, duration: 0.72, ease: [0.23, 1, 0.32, 1] }}
              className="hero-visual"
            >
              <FlowGraphic />
            </motion.div>
          </div>
          <div className="hero-footnote container">
            <span><Sparkles aria-hidden="true" /> Primero entendemos el sistema.</span>
            <ArrowRight aria-hidden="true" />
            <span>Después diseñamos la arquitectura.</span>
            <ArrowRight aria-hidden="true" />
            <span>Recién entonces implementamos.</span>
          </div>
        </section>

        <section id="sistema" className="section section-cream">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">EL PROBLEMA</span>
                <h2>Cuando todo pasa por vos, <em>crecer se vuelve más lento.</em></h2>
              </div>
              <p>La dificultad no es solamente responder mensajes. Es que el contexto, la voz y las decisiones viven en tu cabeza o en la de una persona clave.</p>
            </div>
            <div className="pain-grid">
              {painCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="pain-card"
                  >
                    <div className="pain-icon"><Icon className="h-5 w-5" /></div>
                    <span className="card-label">{card.label}</span>
                    <p className="pain-today">{card.today}</p>
                    <div className="pain-arrow"><ArrowDownRight className="h-4 w-4" /></div>
                    <p className="pain-tomorrow">{card.tomorrow}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container system-statement">
            <div className="system-mark" aria-hidden="true"><Lightbulb /></div>
            <div>
              <span className="eyebrow">CLARITY ACQUISITION OS</span>
              <h2>Un sistema interno para que cada lead, conversación y decisión avance con <em>más contexto y consistencia.</em></h2>
            </div>
            <p>Los DMs, lead magnets, perfiles contextuales, integraciones y conversaciones supervisadas son componentes. El sistema es lo que hace que funcionen juntos.</p>
          </div>
        </section>

        <section id="calculadora" className="section calculator-section">
          <div className="container"><LossCalculator /></div>
        </section>

        <section id="metodo" className="section section-mint">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="eyebrow">EL MÉTODO</span>
              <h2>Tres pasos para que tu adquisición deje de depender de la memoria del equipo.</h2>
            </div>
            <div className="method-grid">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <motion.article
                    key={stage.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="method-card"
                  >
                    <div className="method-top"><span>{stage.number}</span><Icon className="h-5 w-5" /></div>
                    <SystemMiniMap type={stage.key} />
                    <h3>{stage.title}</h3>
                    <p>{stage.copy}</p>
                    <div className="method-contrast"><span><small>HOY</small>{stage.today}</span><ArrowRight aria-hidden="true" /><strong><small>DESPUÉS</small>{stage.tomorrow}</strong></div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="audit" className="section section-dark">
          <div className="container audit-layout">
            <div className="audit-copy">
              <span className="eyebrow eyebrow-light">EMPEZÁS ACÁ</span>
              <h2>Acquisition Audit</h2>
              <p className="audit-lead">El mapa para saber qué sistema necesitás antes de implementar.</p>
              <p>Revisamos cómo se mueve hoy un lead desde el primer contacto hasta la llamada. Identificamos dependencias del fundador, pérdida de contexto y procesos que el equipo todavía no puede operar con consistencia.</p>
              <ScrollButton className="clarity-button-light" />
            </div>
            <div className="audit-deliverables">
              <div className="audit-deliverables-head"><FileText aria-hidden="true" /><span>DEL CAOS AL MAPA</span><b>HOY / DESPUÉS</b></div>
              <div className="deliverables-grid">
                {auditDeliverables.map((item) => <div key={item}><Check aria-hidden="true" />{item}</div>)}
              </div>
              <p>Si existe encaje, el Audit termina con un camino claro para Architecture e Implementation.</p>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container capability-layout">
            <div className="capability-intro">
              <span className="eyebrow">CUANDO EL SISTEMA ESTÁ CLARO</span>
              <h2>La implementación se adapta a lo que tu operación <em>realmente necesita.</em></h2>
              <p>No empezamos por una herramienta. Primero definimos qué necesita seguir siendo humano, qué conviene supervisar y qué vale la pena automatizar.</p>
            </div>
            <div className="capability-list">
              {capabilities.map((capability, index) => (
                <div className="capability-item" key={capability}>
                  <span>0{index + 1}</span>
                  <p>{capability}</p>
                  <ArrowRight aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-cream fit-section">
          <div className="container fit-layout">
            <div>
              <span className="eyebrow">¿HAY ENCAJE?</span>
              <h2>Esto es para vos si ya existe demanda, pero tu sistema todavía depende demasiado de vos.</h2>
            </div>
            <div className="fit-checklist">
              {[
                "Tenés una oferta high ticket validada.",
                "Ya contás con audiencia, tráfico o ambas cosas.",
                "Trabajás con un equipo pequeño.",
                "Querés ordenar adquisición y conversión antes de sumar más herramientas o personas.",
              ].map((item) => <p key={item}><BadgeCheck aria-hidden="true" />{item}</p>)}
            </div>
          </div>
        </section>

        <section id="agenda" className="section request-section">
          <div className="container request-grid">
            <div className="request-copy">
              <span className="eyebrow eyebrow-light">SIGUIENTE PASO</span>
              <h2>Elegí un horario y conversemos de tu sistema.</h2>
              <p>Traé el proceso como hoy funciona. Vemos qué depende de vos y dónde se está perdiendo contexto.</p>
              <div className="request-note"><HeartHandshake aria-hidden="true" /> Abrí la agenda y elegí el horario que te quede mejor.</div>
            </div>
            <div className="agenda-card">
              <CalendarCheck aria-hidden="true" />
              <span className="eyebrow">GOOGLE CALENDAR</span>
              <h3>Agenda abierta</h3>
              <p>La reserva se realiza directamente en tu calendario.</p>
              <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className="clarity-button clarity-button-full">Abrir mi agenda <ArrowRight className="h-5 w-5" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <img src={logo} alt="Clarity Hub" />
          <p>Clarity Acquisition OS · Sistemas internos de adquisición y conversión.</p>
          <span>Previsualización de desarrollo</span>
        </div>
      </footer>
    </div>
  );
}
