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
  GraduationCap,
  HeartHandshake,
  Layers,
  Lock,
  Lightbulb,
  Repeat2,
  ShieldCheck,
  Sparkles,
  Upload,
  UserMinus,
  Workflow,
} from "lucide-react";

const logo = "/images/logo_clarity.png";
const heroBackground = "/images/hero-bg.png";
const calendarUrl = "https://calendar.app.google/ngxAfHKR5fs7SW8aA";

const contrasts = [
  {
    who: "El que no arranca",
    now: "Abre el documento en blanco y se queda mirando la pantalla.",
    next: "Abre el sistema y ya tiene el paso que le toca, con referencias y el guion empezado para su caso.",
  },
  {
    who: "El que tarda una semana",
    now: "Un reel que vos resolvés en veinte minutos a él le come siete días.",
    next: "Arranca con el borrador hecho y solo tiene que terminarlo.",
  },
  {
    who: "El que publica cualquier cosa",
    now: "Produce algo que no se parece a lo que le enseñaste y ya lo subió.",
    next: "Nada se publica sin tu visto bueno, y la propuesta ya sale con tu criterio.",
  },
  {
    who: "El que desaparece",
    now: "No se queja ni avisa: deja de publicar y no vuelve más.",
    next: "Lo ves dejar de publicar mientras todavía lo podés recuperar.",
  },
];

const stages = [
  {
    number: "01",
    key: "sombra",
    title: "Sombra",
    copy: "Arrancás acá. Cada propuesta pasa por vos y cada cambio que hacés entrena a la IA con tu criterio.",
    icon: ClipboardCheck,
    approval: 100,
    meterLabel: "Propuestas que revisás vos",
    foot: "Nada le llega a un alumno sin tu visto bueno.",
    today: "La corrección llega tarde",
    tomorrow: "Llega apenas entregan",
  },
  {
    number: "02",
    key: "copiloto",
    title: "Copiloto",
    copy: "La IA ya sabe cómo armás las piezas que se repiten. Te consulta solo lo que no vio antes.",
    icon: Workflow,
    approval: 40,
    meterLabel: "Propuestas que revisás vos",
    foot: "Mirás lo nuevo, no lo que ya corregiste diez veces.",
    today: "Mandás lo mismo de siempre",
    tomorrow: "Solo mirás lo nuevo",
  },
  {
    number: "03",
    key: "autonomo",
    title: "Autónomo",
    copy: "La IA propone como lo harías vos y te avisa. Tu trabajo pasa a ser mirar el tablero.",
    icon: Gauge,
    approval: 12,
    meterLabel: "Propuestas que revisás vos",
    foot: "Tu criterio ya está adentro. Vos mirás el tablero.",
    today: "No sabés quién está mal",
    tomorrow: "Lo ves en el tablero",
  },
] as const;

const ladoAlumno = [
  "Ve **el paso exacto que le toca**, según lo que ya hizo y dónde se trabó. No el programa entero encima.",
  "Recibe las referencias, el ángulo y **el guion ya empezado**, armados para su caso y con tu criterio.",
  "Lo manda, vos lo aprobás y recién ahí se publica. Después se abre el paso siguiente.",
];

const ladoMentor = [
  "La IA produce las propuestas con tu método y **te las deja listas para aprobar**. Vos decidís, no redactás.",
  "Dejás de mandar por décima vez la misma referencia y el mismo ejemplo a cada alumno nuevo.",
  "**Podés tomar más alumnos sin bajar la calidad**, porque tu criterio ya no depende de tu tiempo.",
  "Y de paso ves quién avanza y quién se trabó, sin tener que perseguir a nadie.",
];

const setupDeliverables = [
  "Tu método cargado tal como lo enseñás",
  "Referencias y ángulos listos para cada paso de tu método",
  "Borradores de guion escritos con tu criterio",
  "Pasos de ejecución personalizados para cada alumno",
  "Tu cola de propuestas para aprobar en minutos",
  "Quién está produciendo y quién se frenó",
];

const results = [
  {
    number: "01",
    title: "Más alumnos produciendo de verdad",
    copy: "No solamente los dos o tres que ya sabían producir solos. La mayoría del grupo publica y llega a un resultado concreto.",
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
  "Radiografía del Método al día 30: en qué paso se traban más tus alumnos y qué les falta para arrancarlo.",
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
    q: "¿La IA va a escribir como yo?",
    a: "Nada le llega a tus alumnos sin tu visto bueno. La IA arranca con tus referencias y tus guiones, aprende de cada cambio que le hacés, y con el tiempo necesita consultarte menos.",
  },
  {
    q: "¿Mis alumnos lo van a usar?",
    a: "Para eso existe el Kit de Lanzamiento Interno, y por eso tu grupo actual entra desde el día uno en vez de esperar al próximo.",
  },
  {
    q: "¿Qué pasa si no funciona?",
    a: "Hay garantía, y las condiciones las escribimos con tus números en la llamada: qué contás vos como caso de éxito, en cuánto tiempo y sobre qué alumnos se mide. No es un párrafo genérico igual para todos.",
  },
];

function Resaltado({ texto }: { texto: string }) {
  return (
    <span>
      {texto.split("**").map((parte, i) => (i % 2 ? <b key={i}>{parte}</b> : parte))}
    </span>
  );
}

function ScrollButton({ className = "" }: { className?: string }) {
  return (
    <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className={`clarity-button ${className}`}>
      Agendá una llamada
      <ArrowDownRight aria-hidden="true" className="h-5 w-5" />
    </a>
  );
}

function IconoReel({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M3.4 8.6h17.2" />
      <path d="m8.6 3.2 3.2 5.4" />
      <path d="m14.6 3.2 3.2 5.4" />
      <path d="M10.6 12.3v4.6l4-2.3z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconoCarrusel({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7.5" y="3.5" width="13" height="13" rx="3" />
      <path d="M16.5 20.5h-9a4 4 0 0 1-4-4v-9" />
    </svg>
  );
}

const formatos = [
  { Icono: IconoReel, label: "Reel" },
  { Icono: IconoCarrusel, label: "Carrusel" },
];

// ?v=2 rompe la cache del borde. Cloudflare habia guardado el HTML del fallback
// bajo estas URLs (se consultaron antes de que existieran, y _headers le pone
// max-age=86400 a /images/*), asi que servia text/html y el navegador mostraba
// imagen rota. Subir el numero si vuelve a pasar.
const V = "?v=2";

const contentPieces = [
  { src: "/images/traction/reel-1.jpg" + V, formato: "reel" as const },
  { src: "/images/traction/carrusel-1.jpg" + V, formato: "carrusel" as const },
  { src: "/images/traction/reel-2.jpg" + V, formato: "reel" as const },
  { src: "/images/traction/carrusel-2.jpg" + V, formato: "carrusel" as const },
  { src: "/images/traction/reel-3.jpg" + V, formato: "reel" as const },
  { src: "/images/traction/carrusel-3.jpg" + V, formato: "carrusel" as const },
  { src: "/images/traction/reel-4.jpg" + V, formato: "reel" as const },
  { src: "/images/traction/carrusel-4.jpg" + V, formato: "carrusel" as const },
  { src: "/images/traction/reel-5.jpg" + V, formato: "reel" as const },
  { src: "/images/traction/carrusel-5.jpg" + V, formato: "carrusel" as const },
  { src: "/images/traction/reel-6.jpg" + V, formato: "reel" as const },
  { src: "/images/traction/carrusel-6.jpg" + V, formato: "carrusel" as const },
];


const chipIcon = { go: Check, wait: ClipboardCheck, risk: UserMinus };

function ContentWall() {
  const COLUMNAS = 3;
  // Con 9 piezas o mas, cada columna recibe su propio set sin compartir ninguna:
  // asi nunca se ve la misma dos veces al mismo tiempo. Con menos no alcanza para
  // repartir, y se rota la lista para que ninguna columna quede vacia.
  const alcanzaParaRepartir = contentPieces.length >= COLUMNAS * 3;
  const reparto = Array.from({ length: COLUMNAS }, (_, c) =>
    alcanzaParaRepartir
      ? contentPieces.filter((_, i) => i % COLUMNAS === c)
      : [...contentPieces.slice(c), ...contentPieces.slice(0, c)]
  );
  const clases = ["wall-col", "wall-col wall-col-b", "wall-col wall-col-c"];

  return (
    <div className="group-board" aria-label="Contenido generado con el método del mentor">
      <div className="board-topline">
        <div className="flow-brand-signature"><img src={logo} alt="Clarity Hub" /><span>TRACTION OS</span></div>
        <span className="status-pill"><span /> GENERANDO CONTENIDO</span>
      </div>

      <div className="board-channels">
        <img src="/images/brecha/instagram.svg" alt="Instagram" />
        {formatos.map(({ Icono, label }) => (
          <span className="format-item" key={label}>
            <Icono />
            <span>{label}</span>
          </span>
        ))}
      </div>

      <div className="content-wall">
        <div className="wall-cols">
          {reparto.map((set, c) => {
            const loop = set.length ? [...set, ...set] : [];
            return (
              <div className={clases[c]} key={c} aria-hidden="true">
                {loop.map((pieza, i) => (
                  <figure className={`wall-item wall-item-${pieza.formato}`} key={`${c}-${i}`}>
                    <img src={pieza.src} alt="" />
                    {pieza.formato === "reel" ? <IconoReel /> : <IconoCarrusel />}
                  </figure>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="wall-caption">
        <Sparkles aria-hidden="true" />
        <span>Piezas nuevas todas las semanas, para cada alumno, con tu método adentro.</span>
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
  const [students, setStudents] = useState(5);
  const [ticket, setTicket] = useState(3000);
  const [reach, setReach] = useState(25);

  const perYear = students * 12;
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
          <h3>¿Cuánto dejaste de vender el año pasado?</h3>
          <p>Con los números reales de tu programa.</p>
        </div>
        <label className="range-field">
          <span>Alumnos nuevos por mes <b>{students}</b></span>
          <input type="range" min="1" max="100" value={students} onChange={(event) => setStudents(Number(event.target.value))} />
        </label>
        <label className="range-field">
          <span>Ticket del programa <b>US$ {ticket.toLocaleString("es-PY")}</b></span>
          <input type="range" min="200" max="6000" step="100" value={ticket} onChange={(event) => setTicket(Number(event.target.value))} />
        </label>
        <label className="range-field">
          <span>Alumnos que hoy llegan a un caso de éxito <b>{reach}%</b></span>
          <input type="range" min="5" max="80" step="5" value={reach} onChange={(event) => setReach(Number(event.target.value))} />
        </label>
      </div>
      <div className="calculator-result" aria-live="polite">
        <span className="eyebrow">VENTAS QUE NO PASARON</span>
        <p>Los alumnos que no llegaron a su caso de éxito no te compran lo próximo. A tu ticket:</p>
        <motion.strong key={value} initial={{ opacity: 0.5, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}>
          {money(value)} <small>por año</small>
        </motion.strong>
        <div className="calculator-breakdown">
          <span>{withoutCase}<small>no te vuelven a comprar</small></span>
          <span>{withCase}<small>llegan a su caso de éxito</small></span>
        </div>
        <p className="calculator-note">
          No todos te habrían comprado de nuevo, eso es honesto decirlo. Pero el que llega a su caso de éxito vuelve, te refiere y te deja un testimonio. El que no llega no hace ninguna de las tres.
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
              <h1>
                <span className="brand-highlight">Tu propio sistema de contenido</span> con IA, para que tus alumnos consigan <em>resultados en 90&nbsp;días</em>.
              </h1>
              <h2 className="hero-sub">
                Convierte tu metodología en guiones, carruseles y pasos de ejecución personalizados, para que tus alumnos sepan exactamente qué hacer y cómo aplicarlo.
              </h2>
              <p className="hero-description">
                Cada pieza sale con tu criterio y pasa por tu aprobación antes de llegarles. Ellos la terminan y la publican.
              </p>
              <div className="hero-actions">
                <ScrollButton />
                <span className="hero-microcopy">
                  <BadgeCheck aria-hidden="true" /> Primero vemos cómo es tu método y cuánto produce hoy tu grupo. Después revisamos si hay encaje.
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.12, duration: 0.72, ease: [0.23, 1, 0.32, 1] }}
              className="hero-visual"
            >
              <ContentWall />
            </motion.div>
          </div>
          <div className="hero-footnote container">
            <span><Sparkles aria-hidden="true" /> Sombra: aprobás cada propuesta.</span>
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
                <span className="eyebrow">LO QUE PASA HOY</span>
                <h2>Tus alumnos entienden tu método pero <em>no saben hacer el contenido.</em></h2>
              </div>
              <p>
                Se los explicaste bien y te dijeron que sí. Pero cuando se sientan solos no saben qué ángulo usar, con qué gancho arrancar ni si lo que hicieron sirve. Ahí se frena todo.
              </p>
            </div>
            <div className="contrast-table">
              <div className="contrast-head">
                <span />
                <span className="head-now">Hoy</span>
                <span />
                <span className="head-next">Con el sistema</span>
              </div>
              {contrasts.map((row, index) => (
                <motion.div
                  key={row.who}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="contrast-row"
                >
                  <span className="contrast-who">{row.who}</span>
                  <p className="contrast-now">{row.now}</p>
                  <ArrowRight className="contrast-arrow" aria-hidden="true" />
                  <p className="contrast-next">{row.next}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container system-statement">
            <div className="system-mark" aria-hidden="true"><Lightbulb /></div>
            <div>
              <span className="eyebrow">CLARITY TRACTION OS</span>
              <h2>Una IA entrenada con tu método que <em>le escribe el contenido</em> a cada alumno.</h2>
            </div>
            <p>
              Guiones, carruseles y el paso que le toca a cada uno, armados con tu criterio. Nada le llega sin tu visto bueno.
            </p>
          </div>
        </section>

        <section id="calculadora" className="section calculator-section">
          <div className="container"><GroupCostCalculator /></div>
        </section>

        <section id="metodo" className="section section-mint">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">CÓMO FUNCIONA</span>
                <h2>La IA escribe, <em>vos aprobás</em>, tu alumno publica.</h2>
              </div>
              <p>
                Un lado le dice a cada alumno exactamente qué hacer y le da con qué hacerlo. El otro te deja a vos solo la decisión de aprobar. En el medio hay una IA entrenada con tu método, no una IA genérica que leyó cualquier cosa en internet.
              </p>
            </div>

            <div className="sides-grid">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className="side-block"
              >
                <span className="side-tag side-tag-student"><GraduationCap aria-hidden="true" /> Del lado de tus alumnos</span>
                <h3>Tus alumnos reciben el guion hecho</h3>
                <ul className="side-points">
                  {ladoAlumno.map((punto) => (
                    <li key={punto}>
                      <Check aria-hidden="true" />
                      <Resaltado texto={punto} />
                    </li>
                  ))}
                </ul>

                <div className="student-panel" aria-label="El sistema del lado del alumno">
                  <div className="student-panel-top">
                    <img src={logo} alt="Clarity Hub" />
                    <span>El sistema, del lado del alumno</span>
                  </div>
                  <div className="panel-block">
                    <span className="panel-label">Tu paso de hoy en el programa</span>
                    <span className="panel-title">Paso 3 · Reel de autoridad</span>
                  </div>
                  <div className="panel-give">
                    <span className="panel-label">Lo que ya tenés listo</span>
                    <div className="panel-chips">
                      <i><Check aria-hidden="true" /> 3 referencias</i>
                      <i><Check aria-hidden="true" /> Ángulo sugerido</i>
                    </div>
                    <p className="panel-draft-label"><Sparkles aria-hidden="true" /> Borrador del guion, con el criterio de tu mentor</p>
                    <p className="panel-draft">"Si llevás tres meses publicando y no te escribió nadie, el problema no es el algoritmo. Es que estás contando lo que sabés y no lo que a esa persona le duele."</p>
                    <div className="panel-drop"><Upload aria-hidden="true" /> Terminalo y mandalo</div>
                  </div>
                  <div className="panel-next"><Lock aria-hidden="true" /> Paso 4 · Edición. Se abre cuando este quede aprobado.</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="side-block"
              >
                <span className="side-tag side-tag-mentor"><Sparkles aria-hidden="true" /> De tu lado</span>
                <h3>Vos aprobás, no escribís</h3>
                <ul className="side-points">
                  {ladoMentor.map((punto) => (
                    <li key={punto}>
                      <Check aria-hidden="true" />
                      <Resaltado texto={punto} />
                    </li>
                  ))}
                </ul>

                <div className="queue-card" aria-label="El sistema del lado del mentor">
                  <div className="queue-top">
                    <img src={logo} alt="Clarity Hub" />
                    <span>El sistema, de tu lado</span>
                  </div>
                  <div className="queue-head">
                    <span>Propuestas para aprobar</span>
                    <b>2</b>
                  </div>
                  <div className="queue-item">
                    <span>Joaquín · Carrusel del Paso 2</span>
                    <p>La IA propone el ángulo "los tres errores que cometí el primer año" y un guion armado con tus referencias.</p>
                    <div className="queue-actions"><i className="queue-ok">Aprobar</i><i className="queue-edit">Editar</i></div>
                  </div>
                  <div className="queue-item">
                    <span>Lucía · Reel del Paso 3</span>
                    <p>La IA propone el gancho, la estructura y el cierre. Marca que Lucía suele poner el contexto antes de tiempo.</p>
                    <div className="queue-actions"><i className="queue-ok">Aprobar</i><i className="queue-edit">Editar</i></div>
                  </div>
                  <div className="queue-foot">
                    <Sparkles aria-hidden="true" />
                    <span>Esta semana: <b>18 propuestas</b>, y 11 salieron solas porque la IA ya sabía cómo las escribirías vos.</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="stage-strip">
              <span className="eyebrow">EL MÉTODO SOMBRA</span>
              <p>
                Al principio revisás todas las propuestas. Después la IA resuelve sola las que ya le corregiste mil veces y te consulta únicamente lo que no sabe cómo lo harías vos.
              </p>
              <div className="stage-grid">
                {stages.map((stage, index) => (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="stage-item"
                  >
                    <h3>{stage.title}</h3>
                    <StageMeter stage={stage} />
                    <p>{stage.copy}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="resultado" className="section section-white">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="eyebrow">EL RESULTADO</span>
              <h2>Más alumnos publicando es <em>más testimonios</em> para vender el próximo grupo.</h2>
            </div>
            <div className="result-rows">
              {results.map((result, index) => (
                <motion.div
                  key={result.number}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="result-row"
                >
                  <span>{result.number}</span>
                  <h3>{result.title}</h3>
                  <p>{result.copy}</p>
                </motion.div>
              ))}
            </div>
            <p className="result-close">
              <Repeat2 aria-hidden="true" />
              Hasta 8 de cada 10 de los que siguen el método llegan a su primer caso de éxito en 90 días. Y cada grupo que sale con casos hace más fácil vender el siguiente.
            </p>
          </div>
        </section>

        <section id="setup" className="section section-dark">
          <div className="container audit-layout">
            <div className="audit-copy">
              <span className="eyebrow eyebrow-light">QUÉ SE CARGA</span>
              <h2>Tu método, convertido en guiones y carruseles</h2>
              <p className="audit-lead">Tus referencias, tus ángulos y tus guiones, listos para que tu próximo grupo produzca.</p>
              <p>
                Tomamos tu método tal como lo enseñás, tus mejores referencias y tus guiones que ya funcionaron, y los cargamos adentro. Desde ahí la IA arma lo de cada alumno con tu criterio, y vos solo aprobás.
              </p>
              <ScrollButton className="clarity-button-light" />
            </div>
            <div className="audit-deliverables">
              <div className="audit-deliverables-head"><Layers aria-hidden="true" /><span>QUÉ QUEDA CARGADO</span><b>DESDE EL DÍA UNO</b></div>
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
              <span className="eyebrow">BONOS</span>
              <h2>Tres cosas para que tu grupo <em>actual</em> empiece a producir desde la primera semana.</h2>
              <p>
                El riesgo real de cualquier herramienta nueva es que los alumnos no la abran nunca.
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

        <section id="estado" className="section section-mint">
          <div className="container">
            <div className="founder-card">
              <span className="eyebrow">ESTADO REAL</span>
              <h3>Sos de los primeros y te lo digo de frente.</h3>
              <p>
                Como producto esto es nuevo. Por eso entrás con condiciones de fundador, y por eso te digo lo que sigue antes de que lo tengas que preguntar.
              </p>
              <div className="founder-points">
                <p><ShieldCheck aria-hidden="true" /> El motor de IA de este sistema corre en nuestro propio negocio hace meses: nuestros mensajes, nuestros recursos y el aprendizaje de cada corrección funcionan con él.</p>
                <p><BadgeCheck aria-hidden="true" /> Todavía no hay casos de éxito de clientes publicados. Cuando alguien te muestre veinte logos en esta etapa, desconfiá.</p>
                <p><Workflow aria-hidden="true" /> El sistema corre en tu infraestructura y en tus cuentas. La documentación y los procesos quedan tuyos.</p>
                <p><HeartHandshake aria-hidden="true" /> Hay garantía. Las condiciones las escribimos con tus números en la llamada, no en una landing.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="encaje" className="section section-cream fit-section">
          <div className="container fit-layout">
            <div>
              <span className="eyebrow">¿HAY ENCAJE?</span>
              <h2>Para mentorías de contenido con grupos, <em>no para cursos sueltos.</em></h2>
              <p className="fit-note">
                Y no es para vos si tu método todavía no produjo ningún caso de éxito. <strong>El sistema no arregla un método: lo expone más rápido.</strong>
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
                Si arrancamos ahora, ese grupo empieza con esto andando. Si no, ese grupo entero son casos de éxito y testimonios que no van a existir.
              </p>
              <p>
                En la llamada revisamos tu método, tus referencias y cuánto produce hoy tu grupo. Traelo como está.
              </p>
            </div>
            <div className="agenda-card">
              <CalendarCheck aria-hidden="true" />
              <span className="eyebrow">GOOGLE CALENDAR</span>
              <h3>Agenda abierta</h3>
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
          <p>Clarity Traction OS · Para que los alumnos del mentor sepan exactamente qué hacer, y lo hagan.</p>
          <span>Clarity Hub</span>
        </div>
      </footer>
    </div>
  );
}
