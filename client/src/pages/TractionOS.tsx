/**
 * Clarity Traction OS landing — v2
 *
 * Objetivo unico: que agende. La pagina NO explica el sistema.
 * Si una frase dice COMO funciona, va a la llamada, no aca.
 *
 * Regla de escritura: cada oracion tiene que entenderse leida sola, fuera de la
 * pagina. Nada de "el que", "eso", "lo que": sujeto y objeto siempre.
 * Segunda persona: el que lee es el mentor, no el alumno.
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
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Upload,
} from "lucide-react";

const logo = "/images/logo_clarity.png";
const heroBackground = "/images/hero-bg.png";
const calendarUrl = "https://calendar.app.google/ngxAfHKR5fs7SW8aA";

// Cupo real confirmado por el dueno el 2026-09-16. Si cambia, cambiarlo aca:
// se usa en el titular del cierre y en el texto del boton.
const CUPO_MENSUAL = 5;

// El dolor del MENTOR, no del alumno. Tres escenas, no tres conceptos.
// Ojo: el mentor NO escribe los guiones. Sus alumnos los arman y se los
// explican en la sesion; el corrige los que llega a corregir. El cuello de
// botella es su hora de revision, no su teclado.
const escenas = [
  "Tenés veinte alumnos y cada uno llega a la sesión con su guion. Escuchás, corregís, y se te va la hora con cuatro.",
  "Los otros dieciséis publican sin que nadie les haya mirado el guion. O no publican y esperan a la semana que viene.",
  "El que publica sin tu criterio no consigue resultados, y el que espera tampoco. Sin resultados no tenés casos para vender el próximo grupo.",
];

const beneficios = [
  {
    titulo: "Cada alumno llega con el guion ya escrito",
    texto:
      "Con las referencias y el ángulo de su propio nicho, que son suyos, y tu criterio adentro. No te lo trae para que se lo armes.",
    mock: "alumno" as const,
  },
  {
    titulo: "Llegás a los veinte, no a los cuatro de siempre",
    texto: "Tu criterio entra en todos los guiones del mes sin pasar por tu agenda.",
    mock: "mentor" as const,
  },
  {
    titulo: "Tomás más alumnos sin bajar la calidad",
    texto: "Tu criterio deja de depender de tus horas.",
    mock: null,
  },
];

const fitSignals = [
  "Tenés un programa o mentoría activa, no cursos sueltos.",
  "Trabajás con grupos de varios alumnos a la vez.",
  "Cobrás ticket alto por ese programa.",
  "Tu método ya produjo casos de éxito.",
];

// Solo las dos objeciones que frenan el agendado. Las otras dos que habia eran
// explicacion de producto y se fueron a la llamada.
const faqs = [
  {
    q: "¿Reemplaza mis sesiones?",
    a: "No. Dejan de ser una fila de veinte guiones para revisar. Llegás sabiendo qué publicó cada uno y usás la hora en lo que solo podés hacer vos.",
  },
  {
    q: "¿Qué pasa si no funciona?",
    a: "Hay garantía. Las condiciones las escribimos con tus números en la llamada.",
  },
];

function Cta({ texto, className = "" }: { texto: string; className?: string }) {
  return (
    <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className={`clarity-button ${className}`}>
      {texto}
      <ArrowDownRight aria-hidden="true" className="h-5 w-5" />
    </a>
  );
}

// El degradado de Instagram se define una sola vez y lo referencian todos los
// iconos. Con "degradado" se pintan con el color de la marca; sin el, heredan
// currentColor (blanco sobre las miniaturas, como hace Instagram de verdad).
function GradienteInstagram() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="25%" stopColor="#FA7E1E" />
          <stop offset="50%" stopColor="#D62976" />
          <stop offset="75%" stopColor="#962FBF" />
          <stop offset="100%" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

type PropsIcono = { className?: string; degradado?: boolean };
const trazo = (degradado?: boolean) => (degradado ? "url(#ig-grad)" : "currentColor");

function IconoInfinito({ className = "", degradado }: PropsIcono) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={trazo(degradado)} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
    </svg>
  );
}

function IconoReel({ className = "", degradado }: PropsIcono) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={trazo(degradado)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M3.4 8.6h17.2" />
      <path d="m8.6 3.2 3.2 5.4" />
      <path d="m14.6 3.2 3.2 5.4" />
      <path d="M10.6 12.3v4.6l4-2.3z" fill={trazo(degradado)} stroke="none" />
    </svg>
  );
}

function IconoCarrusel({ className = "", degradado }: PropsIcono) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={trazo(degradado)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7.5" y="3.5" width="13" height="13" rx="3" />
      <path d="M16.5 20.5h-9a4 4 0 0 1-4-4v-9" />
    </svg>
  );
}

function IconoStories({ className = "", degradado }: PropsIcono) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={trazo(degradado)} strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9.1" strokeDasharray="5.6 3.4" />
      <path d="M12 8.2v7.6M8.2 12h7.6" />
    </svg>
  );
}

const formatos = [IconoReel, IconoCarrusel, IconoStories];

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
        <GradienteInstagram />
        <IconoInfinito className="format-icon" degradado />
        <img src="/images/brecha/instagram.svg" alt="Instagram" />
        {formatos.map((Icono, i) => (
          <Icono key={i} className="format-icon" degradado />
        ))}
      </div>

      <div className="content-wall">
        <div className="wall-cols">
          {reparto.map((set, c) => {
            // Exactamente 2 copias: la animacion va a -50%, asi que el corte cae
            // justo en el inicio de la segunda y el loop empalma sin costura.
            const loop = set.length ? [...set, ...set] : [];
            return (
              <div className={clases[c]} key={c} aria-hidden="true">
                {loop.map((pieza, i) => (
                  <figure className={`wall-item wall-item-${pieza.formato}`} key={`${c}-${i}`}>
                    <img src={pieza.src} alt="" />
                    {pieza.formato === "reel" ? <IconoReel degradado /> : <IconoCarrusel degradado />}
                  </figure>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="wall-caption">
        <Sparkles aria-hidden="true" />
        <span>Piezas nuevas cada semana, para cada alumno, con tu método adentro.</span>
      </div>
    </div>
  );
}

function MockAlumno() {
  return (
    <div className="student-panel" aria-label="Lo que recibe tu alumno">
      <div className="student-panel-top">
        <img src={logo} alt="Clarity Hub" />
        <span>Lo que recibe tu alumno</span>
      </div>
      <div className="panel-block">
        <span className="panel-label">Martina · entrenamiento para mamás</span>
        <span className="panel-title">Reel · guion completo</span>
      </div>
      <div className="panel-give">
        <span className="panel-label">De dónde sale</span>
        <div className="panel-chips">
          <i><Check aria-hidden="true" /> Sus referencias</i>
          <i><Check aria-hidden="true" /> Su ángulo</i>
          <i><Check aria-hidden="true" /> Tu criterio</i>
        </div>
        <p className="panel-draft-label"><Sparkles aria-hidden="true" /> Así abre. El desarrollo y el cierre ya están escritos.</p>
        <p className="panel-draft">"Si llevás tres meses entrenando en casa y no te cambió el cuerpo, el problema no es la rutina. Es que estás haciendo la que le sirve a otra."</p>
        <div className="panel-drop"><Upload aria-hidden="true" /> Grabalo y publicalo</div>
      </div>
      <div className="panel-next"><RefreshCw aria-hidden="true" /> Si no le cierra, pide otra versión. No vuelve a la hoja en blanco.</div>
    </div>
  );
}

function MockMentor() {
  return (
    <div className="queue-card" aria-label="Lo que ves vos">
      <div className="queue-top">
        <img src={logo} alt="Clarity Hub" />
        <span>Lo que ves vos</span>
      </div>
      <div className="queue-head">
        <span>Guiones de este mes, con tu método</span>
        <b>80</b>
      </div>
      <div className="queue-item">
        <span>Joaquín · 4 guiones</span>
        <p>Los cuatro salieron con tu estructura de gancho. Publicó los cuatro.</p>
      </div>
      <div className="queue-item">
        <span>Lucía · 4 guiones</span>
        <p>Tiene los cuatro hace seis días y no publicó ninguno. La estás perdiendo.</p>
      </div>
      <div className="queue-foot">
        <Sparkles aria-hidden="true" />
        <span>Tu criterio llegó a los veinte. Vos elegís con cuál te sentás.</span>
      </div>
    </div>
  );
}

/**
 * Calculadora de PLATA PERDIDA.
 *
 * Historial, para no repetir errores:
 * v1 calculaba "ventas que no pasaron" y no se entendia que media: mezclaba
 * plata ya cobrada con recompra hipotetica en la misma cifra.
 * v2 calculaba horas del mentor, pero el dueño no quiere ahorro de tiempo como
 * resultado: quiere plata.
 *
 * Esta calcula UNA sola cosa y la dice con todas las letras: el ticket del
 * mentor por los alumnos que no llegan a un resultado, o sea la plata que NO
 * le vuelve a entrar el proximo ciclo. Nunca mezcla eso con lo ya cobrado.
 * El supuesto (el que no consigue resultados no renueva) va escrito abajo,
 * no escondido en la cuenta.
 */
function CalculadoraPerdida() {
  const [alumnos, setAlumnos] = useState(20);
  const [ticket, setTicket] = useState(1000);
  const [llegan, setLlegan] = useState(3);

  const sinResultado = Math.round(alumnos * ((10 - llegan) / 10));
  const perdida = sinResultado * ticket;
  const num = (n: number) => new Intl.NumberFormat("es-PY", { maximumFractionDigits: 0 }).format(n);

  return (
    <div className="loss-calculator">
      <div className="calculator-controls">
        <div className="calculator-label">
          <span className="eyebrow">CALCULADORA</span>
          <h3>¿Cuánto te cuesta el alumno que no llega a un resultado?</h3>
          <p>Con los números de tu programa.</p>
        </div>
        <label className="range-field">
          <span>Alumnos en tu programa <b>{alumnos}</b></span>
          <input type="range" min="3" max="60" value={alumnos} onChange={(e) => setAlumnos(Number(e.target.value))} />
        </label>
        <label className="range-field">
          <span>Lo que te paga cada uno <b>USD {num(ticket)}</b></span>
          <input type="range" min="200" max="5000" step="100" value={ticket} onChange={(e) => setTicket(Number(e.target.value))} />
        </label>
        <label className="range-field">
          <span>De cada 10, cuántos consiguen resultados hoy <b>{llegan}</b></span>
          <input type="range" min="0" max="10" value={llegan} onChange={(e) => setLlegan(Number(e.target.value))} />
        </label>
      </div>
      <div className="calculator-result" aria-live="polite">
        <span className="eyebrow">LO QUE NO TE VUELVE A ENTRAR</span>
        <p>Los alumnos que no consiguen resultados no renuevan ni te recomiendan:</p>
        <motion.strong key={perdida} initial={{ opacity: 0.5, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}>
          USD {num(perdida)} <small>por grupo</small>
        </motion.strong>
        <div className="calculator-breakdown">
          <span>{num(sinResultado)}<small>alumnos sin resultado</small></span>
          <span>{10 - llegan} de 10<small>de tu grupo actual</small></span>
        </div>
        <p className="calculator-note">
          Es tu ticket por los alumnos que no llegan. No cuenta lo que ya cobraste: cuenta lo que no vas a volver a cobrar.
        </p>
        <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className="calculator-link">
          Quiero bajar ese número <ArrowRight aria-hidden="true" />
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
    document.title = "Clarity Traction OS · Tu propio sistema de contenido con IA";

    return () => {
      routeStyle.remove();
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfaf4] text-[#1b2118]">
      <main>
        {/* 1 · HERO — no se toca */}
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
                <span className="brand-highlight">Tu propio sistema de contenido</span> con IA, para que tus alumnos creen <em>guiones, carruseles y stories</em>.
              </h1>
              <h2 className="hero-sub">
                Convierte tu metodología en piezas personalizadas para cada alumno, para que sepan exactamente qué hacer y consigan resultados en 90 días.
              </h2>
              <p className="hero-description">
                Cada pieza sale con tu criterio y pasa por tu aprobación antes de llegarles. Ellos la terminan y la publican.
              </p>
              <div className="hero-actions">
                <Cta texto="Agendá una llamada" />
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
            <span><Sparkles aria-hidden="true" /> Guiones de reel.</span>
            <ArrowRight aria-hidden="true" />
            <span>Carruseles.</span>
            <ArrowRight aria-hidden="true" />
            <span>Stories.</span>
          </div>
        </section>

        {/* 2 · EL DOLOR, TUYO. Escenas en segunda persona, no conceptos. */}
        <section id="dolor" className="section section-cream">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">LO QUE PASA HOY</span>
              <h2>Sos el cuello de botella de <em>tu propio programa.</em></h2>
            </div>
            <div className="escenas">
              {escenas.map((e, i) => (
                <motion.p
                  key={e}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="escena"
                >
                  {e}
                </motion.p>
              ))}
            </div>
            <div className="calculadora-wrap"><CalculadoraPerdida /></div>
          </div>
        </section>

        {/* 3 · ANTES / DESPUES. Un solo contraste, grande. */}
        <section id="cambio" className="section section-white">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="eyebrow">EL CAMBIO</span>
              <h2>Hoy revisás los que llegás a revisar. <em>Después salen todos con tu criterio puesto.</em></h2>
            </div>
            <div className="swap-grid">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className="swap-card swap-antes"
              >
                <span className="swap-tag">Hoy</span>
                <p>Ochenta guiones al mes. Mirás los que entran en la sesión. El resto se publica sin vos.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="swap-card swap-despues"
              >
                <span className="swap-tag">Con el sistema</span>
                <p>Los mismos ochenta, escritos con tu método adentro antes de que te los muestren.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4 · QUE CAMBIA PARA VOS. Beneficios con los mocks. El mecanismo se
            NOMBRA y no se explica: ese hueco es el que lleva a la llamada. */}
        <section id="sistema" className="section section-mint">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">QUÉ CAMBIA PARA VOS</span>
              <h2>Tu método hace el trabajo. <em>Vos decidís.</em></h2>
            </div>

            <div className="beneficios">
              {beneficios.map((b, i) => (
                <motion.div
                  key={b.titulo}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className={`beneficio ${b.mock ? "" : "beneficio-solo"}`}
                >
                  <div className="beneficio-texto">
                    <span>0{i + 1}</span>
                    <h3>{b.titulo}</h3>
                    <p>{b.texto}</p>
                  </div>
                  {b.mock === "alumno" && <MockAlumno />}
                  {b.mock === "mentor" && <MockMentor />}
                </motion.div>
              ))}
            </div>

            <div className="gancho">
              <p>
                Todo eso sale de <strong>tu método</strong>, cargado una sola vez. Cómo se carga y cómo escribe
                con él te lo muestro en la llamada.
              </p>
              <Cta texto="Mostrame cómo lo hace" />
            </div>
          </div>
        </section>

        {/* 5 · PARA QUIEN ES. Filtro honesto, corto. */}
        <section id="encaje" className="section section-cream fit-section">
          <div className="container fit-layout">
            <div>
              <span className="eyebrow">¿HAY ENCAJE?</span>
              <h2>Para mentorías de contenido con grupos, <em>no para cursos sueltos.</em></h2>
              <p className="fit-note">
                No es para vos si tu método todavía no produjo un caso de éxito. <strong>El sistema no arregla un método: lo expone.</strong>
              </p>
            </div>
            <div className="fit-checklist">
              {fitSignals.map((item) => <p key={item}><BadgeCheck aria-hidden="true" />{item}</p>)}
            </div>
          </div>
        </section>

        {/* 6 · CIERRE: estado real + cupo + la unica puerta. */}
        <section id="cierre" className="section section-dark">
          <div className="container cierre-layout">
            <div className="cierre-copy">
              <span className="eyebrow eyebrow-light">SIGUIENTE PASO</span>
              <h2>Tomamos {CUPO_MENSUAL} mentores <em>por mes.</em></h2>
              <p>Es la cantidad que podemos cargar bien, con el método de cada uno adentro.</p>
              <div className="cierre-honesto">
                <p><ShieldCheck aria-hidden="true" /> El motor ya corre en nuestro propio negocio hace meses. No es un prototipo.</p>
                <p><BadgeCheck aria-hidden="true" /> Trabajamos con tu método, no con una plantilla que le sirve a cualquiera.</p>
              </div>
            </div>
            <div className="agenda-card">
              <CalendarCheck aria-hidden="true" />
              <span className="eyebrow">30 MINUTOS</span>
              <h3>Reservá tu lugar</h3>
              <p>Revisamos tu método y cuánto produce hoy tu grupo. Sin pitch.</p>
              <Cta texto={`Reservar uno de los ${CUPO_MENSUAL}`} className="clarity-button-full" />
              <div className="faq-corto">
                {faqs.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <img src={logo} alt="Clarity Hub" />
          <p>Clarity Traction OS · Guiones, carruseles y stories para los alumnos del mentor.</p>
          <span>Clarity Hub</span>
        </div>
      </footer>
    </div>
  );
}
