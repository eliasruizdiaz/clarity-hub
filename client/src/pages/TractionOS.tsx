/**
 * Clarity Traction OS landing
 * Design reminder: preserve Clarity Hub's warm editorial coral/green system.
 * Every visual shows the mentor's method running on his group, never a generic AI tool.
 */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import tractionStyles from "../traction-os.css?inline";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  ClipboardCheck,
  Gauge,
  HeartHandshake,
  Layers,
  Lightbulb,
  Radar,
  Repeat,
  Repeat2,
  ShieldCheck,
  Sparkles,
  Timer,
  Trophy,
  UserMinus,
  Workflow,
} from "lucide-react";

const logo = "/images/logo_clarity.png";
const heroBackground = "/images/hero-bg.png";
const calendarUrl = "https://calendar.app.google/ngxAfHKR5fs7SW8aA";

const painCards = [
  {
    icon: Repeat,
    label: "Ejecución",
    today: "Tus alumnos aplican la versión del método que ellos entendieron.",
    tomorrow: "Cada uno ve una sola acción por vez, la que le toca según lo que ya hizo.",
  },
  {
    icon: Timer,
    label: "Velocidad",
    today: "Son muchos pidiendo revisión al mismo tiempo y la respuesta les llega tarde.",
    tomorrow: "Cada uno recibe su corrección enseguida, con tu criterio y tu visto bueno.",
  },
  {
    icon: UserMinus,
    label: "Alumnos que perdés",
    today: "El que se desanima no te avisa: deja de entregar y no vuelve.",
    tomorrow: "Ves quién dejó de entregar mientras todavía lo podés recuperar.",
  },
  {
    icon: Trophy,
    label: "Casos",
    today: "Tus casos salen de los dos o tres que ya venían con todo.",
    tomorrow: "Medís cuántos llegan a su caso de éxito y en cuánto tiempo.",
  },
];

const stages = [
  {
    number: "01",
    key: "sombra",
    title: "Sombra",
    copy: "Cuando un alumno entrega, el sistema le marca la corrección con tu método. Vos aprobás esa corrección antes de que le llegue.",
    icon: ClipboardCheck,
    approval: 100,
    meterLabel: "Correcciones que revisás vos",
    foot: "Ninguna corrección le llega a un alumno sin tu visto bueno.",
    today: "La corrección llega tarde",
    tomorrow: "Llega apenas entregan",
  },
  {
    number: "02",
    key: "copiloto",
    title: "Copiloto",
    copy: "Las correcciones que ya aprobaste mil veces salen solas. El sistema te consulta solo lo que no sabe cómo responderías vos.",
    icon: Workflow,
    approval: 40,
    meterLabel: "Correcciones que revisás vos",
    foot: "Mirás lo nuevo, no lo que ya corregiste diez veces.",
    today: "Contestás lo mismo de siempre",
    tomorrow: "Solo mirás lo nuevo",
  },
  {
    number: "03",
    key: "autonomo",
    title: "Autónomo",
    copy: "Tu forma de corregir ya está adentro. Mirás el tablero y sabés dónde está parado cada alumno sin preguntarle a nadie.",
    icon: Gauge,
    approval: 12,
    meterLabel: "Correcciones que revisás vos",
    foot: "Tu criterio ya está adentro. Vos mirás el tablero.",
    today: "No sabés quién está mal",
    tomorrow: "Lo ves en el tablero",
  },
] as const;

const setupDeliverables = [
  "Tu método cargado tal como lo enseñás",
  "Cada paso con lo que el alumno tiene que entregar",
  "Correcciones con tu visto bueno",
  "Resumen de cada alumno antes de la sesión",
  "Quién avanza y quién se está quedando",
  "Medición de casos y tiempos",
];

const results = [
  {
    number: "01",
    title: "Más alumnos llegan a su caso",
    copy: "No solamente los dos o tres que ya entraron con todo resuelto. La mayoría del grupo llega a un resultado concreto.",
  },
  {
    number: "02",
    title: "Más testimonios para vender",
    copy: "Cada alumno que llega es una prueba fresca para vender el próximo grupo, y no tenés que salir a pedir favores para conseguir un video.",
  },
  {
    number: "03",
    title: "Alumnos que se quedan con vos",
    copy: "El que consigue resultados quiere seguir. Ahí un programa que se cobraba una sola vez se convierte en alguien que te paga todos los meses.",
    final: true,
  },
];

const bonuses = [
  "Kit de Lanzamiento Interno: cómo presentárselo a tus alumnos para que lo usen desde la primera semana.",
  "Radiografía del Método al día 30: qué paso de tu curso se entiende mal más seguido y por qué.",
  "Tu Grupo Actual Entra: los alumnos que ya tenés hoy, no solamente el próximo grupo.",
];

const fitSignals = [
  "Tenés un programa o mentoría activa, no cursos sueltos.",
  "Trabajás con grupos de varios alumnos a la vez.",
  "Cobrás ticket alto por ese programa.",
  "Tu método ya produjo casos de éxito.",
  "Tus alumnos entran con algo para vender.",
];

const faqs = [
  {
    q: "¿Reemplaza mis sesiones?",
    a: "No. Llegás a cada sesión con el resumen de cada alumno: qué hizo, qué le costó y qué le toca. Las sesiones rinden más, no desaparecen.",
  },
  {
    q: "¿La IA va a hablar como yo?",
    a: "Ninguna corrección le llega a tus alumnos sin tu visto bueno. El sistema aprende de cada una que aprobás y con el tiempo necesita consultarte menos.",
  },
  {
    q: "¿Mis alumnos lo van a usar?",
    a: "Para eso existe el Kit de Lanzamiento Interno, y por eso tu grupo actual entra desde el día uno en vez de esperar al próximo.",
  },
  {
    q: "¿Qué pasa si no funciona?",
    a: "Garantía Hasta Que Lleguen: si a los 90 días los alumnos que siguieron el método no llegaron a su caso, seguimos trabajando sin cobrar el mantenimiento hasta que lleguen.",
  },
];

function ScrollButton({ className = "" }: { className?: string }) {
  return (
    <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className={`clarity-button ${className}`}>
      Agendá una llamada
      <ArrowDownRight aria-hidden="true" className="h-5 w-5" />
    </a>
  );
}

const boardStudents = [
  { initials: "MA", name: "Martina", step: "Paso 3 · Corrección aprobada por vos", state: "go" as const, chip: "Avanza" },
  { initials: "JO", name: "Joaquín", step: "Paso 2 · Corrección esperando tu OK", state: "wait" as const, chip: "Tu turno" },
  { initials: "CA", name: "Camila", step: "Paso 1 · Hace 6 días que no entrega", state: "risk" as const, chip: "La estás perdiendo" },
  { initials: "DI", name: "Diego", step: "Paso 4 · Primer caso en curso", state: "go" as const, chip: "Avanza" },
  { initials: "LU", name: "Lucía", step: "Paso 2 · Repitió el mismo error", state: "wait" as const, chip: "Revisar" },
];

const chipIcon = { go: Check, wait: ClipboardCheck, risk: UserMinus };

function GroupBoard() {
  return (
    <div className="group-board" aria-label="Tablero del grupo con el estado de cada alumno">
      <div className="board-topline">
        <div className="flow-brand-signature"><img src={logo} alt="Clarity Hub" /><span>TRACTION OS</span></div>
        <span className="status-pill"><span /> MÉTODO EN EJECUCIÓN</span>
      </div>
      <div className="board-subline">
        <span>Tu grupo</span>
        <span>3 avanzan · 1 espera tu OK · 1 a punto de abandonar</span>
      </div>
      <div className="board-rows">
        {boardStudents.map((student, index) => {
          const ChipIcon = chipIcon[student.state];
          return (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.09, duration: 0.4 }}
              className={`student-row ${student.state === "risk" ? "student-row-risk" : ""}`}
            >
              <span className="student-avatar">{student.initials}</span>
              <span>
                <span className="student-name">{student.name}</span>
                <span className="student-step">{student.step}</span>
              </span>
              <span className={`student-chip chip-${student.state}`}>
                <ChipIcon aria-hidden="true" />
                {student.chip}
              </span>
            </motion.div>
          );
        })}
      </div>
      <div className="board-footer">
        <span><UserMinus aria-hidden="true" /> Antes te enterabas cuando el alumno ya no volvía.</span>
        <strong><Radar aria-hidden="true" /> Ahora lo ves a tiempo, cuando todavía lo podés recuperar.</strong>
      </div>
    </div>
  );
}

function StageMeter({ stage }: { stage: (typeof stages)[number] }) {
  return (
    <div className="stage-meter" aria-label={`Etapa ${stage.title}: revisás el ${stage.approval} por ciento de las correcciones`}>
      <div className="stage-meter-head">
        <span>{stage.meterLabel}</span>
        <b>{stage.approval}%</b>
      </div>
      <div className="stage-bar"><i style={{ width: `${stage.approval}%` }} /></div>
      <div className="stage-track">
        {stages.map((item) => (
          <span key={item.key} className={item.key === stage.key ? "is-on" : ""}>{item.title}</span>
        ))}
      </div>
      <p className="stage-meter-foot">{stage.foot}</p>
    </div>
  );
}

function GroupCostCalculator() {
  const [students, setStudents] = useState(20);
  const [groups, setGroups] = useState(3);
  const [ticket, setTicket] = useState(1500);
  const [reach, setReach] = useState(25);

  const perYear = students * groups;
  const withCase = Math.round((perYear * reach) / 100);
  const withoutCase = perYear - withCase;
  const value = withoutCase * ticket;
  const money = (amount: number) =>
    new Intl.NumberFormat("es-PY", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);

  return (
    <div className="loss-calculator">
      <div className="calculator-controls">
        <div className="calculator-label">
          <span className="eyebrow">CALCULADORA</span>
          <h3>¿Cuánto vale el grupo que no llega?</h3>
          <p>Mové los controles con los números de tu programa y mirá cuánto pesa cada grupo que termina sin casos.</p>
        </div>
        <label className="range-field">
          <span>Alumnos por grupo <b>{students}</b></span>
          <input type="range" min="3" max="80" value={students} onChange={(event) => setStudents(Number(event.target.value))} />
        </label>
        <label className="range-field">
          <span>Grupos por año <b>{groups}</b></span>
          <input type="range" min="1" max="8" value={groups} onChange={(event) => setGroups(Number(event.target.value))} />
        </label>
        <label className="range-field">
          <span>Ticket del programa <b>US$ {ticket.toLocaleString("es-PY")}</b></span>
          <input type="range" min="200" max="6000" step="100" value={ticket} onChange={(event) => setTicket(Number(event.target.value))} />
        </label>
        <label className="range-field">
          <span>Alumnos que hoy llegan a un caso <b>{reach}%</b></span>
          <input type="range" min="5" max="80" step="5" value={reach} onChange={(event) => setReach(Number(event.target.value))} />
        </label>
      </div>
      <div className="calculator-result" aria-live="polite">
        <span className="eyebrow">LO QUE SE PAGÓ SIN LLEGAR A UN CASO</span>
        <p>Cada año, esto es lo que pagaron los alumnos que no llegaron a su caso:</p>
        <motion.strong key={value} initial={{ opacity: 0.5, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}>
          {money(value)} <small>por año</small>
        </motion.strong>
        <div className="calculator-breakdown">
          <span>{withoutCase}<small>alumnos sin caso</small></span>
          <span>{withCase}<small>llegan a su caso</small></span>
        </div>
        <p className="calculator-note">
          Ese alumno no te compra lo próximo, no te refiere a nadie y no te deja un testimonio para vender el grupo que viene.
        </p>
        <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className="calculator-link">
          Quiero mover ese número <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default function TractionOS() {
  useEffect(() => {
    const previousTitle = document.title;
    const routeStyle = document.createElement("style");

    routeStyle.dataset.routeStyles = "traction-os";
    routeStyle.textContent = tractionStyles;
    document.head.appendChild(routeStyle);
    document.title = "Clarity Traction OS · Que tus alumnos apliquen tu método";

    return () => {
      routeStyle.remove();
      document.title = previousTitle;
    };
  }, []);

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
              <span className="eyebrow eyebrow-hero">PARA MENTORES CON PROGRAMA DE CONTENIDO ACTIVO</span>
              <h1>
                Que tus alumnos ejecuten <span className="brand-highlight">tu método</span>, no la <em>versión que entendieron</em>.
              </h1>
              <h2>Hasta 8 de cada 10 llegando a su primer caso de éxito en 90 días.</h2>
              <p className="hero-description">
                Cada alumno recibe la corrección que le toca apenas entrega, con tu criterio y con tu visto bueno. Sin hacer cola detrás del resto del grupo y sin que vos tengas que revisar uno por uno.
              </p>
              <div className="hero-actions">
                <ScrollButton />
                <span className="hero-microcopy">
                  <BadgeCheck aria-hidden="true" /> Primero vemos cómo es tu método y cuántos de tus alumnos llegan hoy a un caso. Después revisamos si hay encaje.
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.12, duration: 0.72, ease: [0.23, 1, 0.32, 1] }}
              className="hero-visual"
            >
              <GroupBoard />
            </motion.div>
          </div>
          <div className="hero-footnote container">
            <span><Sparkles aria-hidden="true" /> Sombra: aprobás cada corrección.</span>
            <ArrowRight aria-hidden="true" />
            <span>Copiloto: te consulta solo lo dudoso.</span>
            <ArrowRight aria-hidden="true" />
            <span>Autónomo: mirás el tablero.</span>
          </div>
        </section>

        <section id="problema" className="section section-cream">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">EL PROBLEMA</span>
                <h2>Tu método funciona. <em>El problema es cómo llega.</em></h2>
              </div>
              <p>
                No es que no sepas qué decirle a cada uno. Es que son muchos pidiendo revisión al mismo tiempo, y la respuesta que necesitan hoy les llega tarde o no les llega.
              </p>
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
              <span className="eyebrow">CLARITY TRACTION OS</span>
              <h2>Un sistema entrenado con tu método para que cada alumno reciba la corrección que necesita, <em>con tu visto bueno antes de que le llegue.</em></h2>
            </div>
            <p>
              Las correcciones, los entregables de cada paso y el resumen de cada alumno son componentes. El sistema es lo que hace que todos sigan tu criterio y no otro.
            </p>
          </div>
        </section>

        <section id="calculadora" className="section calculator-section">
          <div className="container"><GroupCostCalculator /></div>
        </section>

        <section id="metodo" className="section section-mint">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="eyebrow">EL MÉTODO SOMBRA</span>
              <h2>Tres etapas hasta que tu método corra sin que tengas que repetirlo.</h2>
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
                    <StageMeter stage={stage} />
                    <h3>{stage.title}</h3>
                    <p>{stage.copy}</p>
                    <div className="method-contrast">
                      <span><small>HOY</small>{stage.today}</span>
                      <ArrowRight aria-hidden="true" />
                      <strong><small>DESPUÉS</small>{stage.tomorrow}</strong>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="resultado" className="section section-white">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="eyebrow">PARA QUÉ SIRVE</span>
              <h2>Más alumnos que llegan es <em>más gente comprando</em> lo próximo que vendas.</h2>
            </div>
            <div className="result-grid">
              {results.map((result, index) => (
                <motion.article
                  key={result.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`result-card ${result.final ? "result-card-final" : ""}`}
                >
                  <span>{result.number}</span>
                  <h3>{result.title}</h3>
                  <p>{result.copy}</p>
                </motion.article>
              ))}
            </div>
            <p className="result-close">
              <Repeat2 aria-hidden="true" />
              Cada grupo que sale con casos hace más fácil vender el siguiente. Es el mismo programa que ya tenés, pero con la mayoría del grupo llegando en vez de unos pocos.
            </p>
          </div>
        </section>

        <section id="setup" className="section section-dark">
          <div className="container audit-layout">
            <div className="audit-copy">
              <span className="eyebrow eyebrow-light">EMPEZÁS ACÁ</span>
              <h2>Setup con tu método</h2>
              <p className="audit-lead">Tu método, paso por paso, funcionando con tu próximo grupo.</p>
              <p>
                Tomamos tu método tal como lo enseñás y lo dejamos corriendo sobre tus alumnos: cada paso con lo que tienen que entregar, tu visto bueno en cada corrección y un tablero que te dice quién avanza y quién se está quedando.
              </p>
              <ScrollButton className="clarity-button-light" />
            </div>
            <div className="audit-deliverables">
              <div className="audit-deliverables-head"><Layers aria-hidden="true" /><span>QUÉ QUEDA ANDANDO</span><b>DESDE EL DÍA UNO</b></div>
              <div className="deliverables-grid">
                {setupDeliverables.map((item) => <div key={item}><Check aria-hidden="true" />{item}</div>)}
              </div>
              <p>
                La fase siguiente se cotiza aparte: módulo de escala para alumnos que ya monetizan, pasos de venta, métricas de Instagram por alumno, tablero completo del programa e integraciones con tus herramientas.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container capability-layout">
            <div className="capability-intro">
              <span className="eyebrow">LO QUE SUMA ADEMÁS</span>
              <h2>Tres cosas para que tu grupo <em>actual</em> lo use desde la primera semana.</h2>
              <p>
                El riesgo real de cualquier herramienta nueva es que los alumnos no la adopten. Estos tres bonos existen justamente para cerrar ese hueco.
              </p>
            </div>
            <div className="capability-list">
              {bonuses.map((bonus, index) => (
                <div className="capability-item" key={bonus}>
                  <span>0{index + 1}</span>
                  <p>{bonus}</p>
                  <ArrowRight aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="garantia" className="section section-mint">
          <div className="container">
            <div className="founder-card">
              <span className="eyebrow">GARANTÍA Y ESTADO REAL</span>
              <h3>Garantía Hasta Que Lleguen</h3>
              <p>
                Si a los 90 días los alumnos que siguieron el método no llegaron a su caso, seguimos trabajando sin cobrar el mantenimiento hasta que lleguen.
              </p>
              <div className="founder-points">
                <p><ShieldCheck aria-hidden="true" /> El motor de este sistema corre en nuestro propio negocio hace meses: nuestros mensajes, nuestros recursos y el aprendizaje de cada corrección funcionan con él.</p>
                <p><BadgeCheck aria-hidden="true" /> Todavía no hay casos de clientes publicados. Sos de los primeros, y por eso las condiciones de fundador y una garantía así de fuerte.</p>
                <p><Workflow aria-hidden="true" /> El sistema corre en tu infraestructura y en tus cuentas. La documentación y los procesos quedan tuyos.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="encaje" className="section section-cream fit-section">
          <div className="container fit-layout">
            <div>
              <span className="eyebrow">¿HAY ENCAJE?</span>
              <h2>Esto es para vos si tu método ya produjo casos y el problema es que pocos alumnos lo ejecutan bien.</h2>
              <p className="fit-note">
                Y no es para vos si tu método todavía no produjo ningún caso. <strong>El sistema no arregla un método: lo expone más rápido.</strong>
              </p>
            </div>
            <div className="fit-checklist">
              {fitSignals.map((item) => <p key={item}><BadgeCheck aria-hidden="true" />{item}</p>)}
            </div>
          </div>
        </section>

        <section id="preguntas" className="section section-white">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="eyebrow">PREGUNTAS</span>
              <h2>Lo que preguntan antes de la llamada.</h2>
            </div>
            <div className="faq-grid">
              {faqs.map((faq) => (
                <article className="faq-item" key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="agenda" className="section request-section">
          <div className="container request-grid">
            <div className="request-copy">
              <span className="eyebrow eyebrow-light">SIGUIENTE PASO</span>
              <h2>¿Cuándo arranca tu próximo grupo?</h2>
              <p>
                Si arrancamos ahora, ese grupo empieza con esto andando. Si no, ese grupo entero son casos y testimonios que no van a existir.
              </p>
              <p>
                En la llamada revisamos cómo es tu método y cuántos de tus alumnos llegan hoy a un caso. Traelo como está.
              </p>
              <div className="request-note"><HeartHandshake aria-hidden="true" /> Abrí la agenda y elegí el horario que te quede mejor.</div>
            </div>
            <div className="agenda-card">
              <CalendarCheck aria-hidden="true" />
              <span className="eyebrow">GOOGLE CALENDAR</span>
              <h3>Agenda abierta</h3>
              <p>La reserva se realiza directamente en tu calendario.</p>
              <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className="clarity-button clarity-button-full">
                Abrir mi agenda <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <img src={logo} alt="Clarity Hub" />
          <p>Clarity Traction OS · Para que el método del mentor llegue entero a cada alumno.</p>
          <span>Clarity Hub</span>
        </div>
      </footer>
    </div>
  );
}
