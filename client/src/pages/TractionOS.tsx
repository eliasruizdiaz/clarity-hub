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
  Lock,
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
const escenas = [
  "Tenés veinte alumnos. Cada uno necesita que le armes el guion. Y hay una sola cabeza para eso: la tuya.",
  "Les explicaste el método en la sesión y te dijeron que sí. El martes no había ningún reel publicado.",
  "El alumno que no produce no llega a su caso de éxito. Sin casos no tenés testimonios para vender el próximo grupo.",
];

const beneficios = [
  {
    titulo: "Tus alumnos reciben el guion empezado",
    texto: "Con tus referencias, tu ángulo y tu criterio. Nunca abren una hoja en blanco.",
    mock: "alumno" as const,
  },
  {
    titulo: "Vos aprobás en minutos, no redactás",
    texto: "Las propuestas te llegan escritas. Aprobás, editás o las rehacés.",
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
    a: "No. Llegás a cada sesión sabiendo qué hizo cada alumno y qué le costó. Las sesiones rinden más.",
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
    <div className="student-panel" aria-label="Lo que ve tu alumno">
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
  );
}

function MockMentor() {
  return (
    <div className="queue-card" aria-label="Lo que ves vos">
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
  );
}

/**
 * Calculadora de HORAS, no de plata.
 *
 * La version anterior calculaba "ventas que no pasaron" (alumnos sin caso por
 * ticket) y no se entendia que media: mezclaba plata ya cobrada con recompra
 * hipotetica. Esta calcula el tiempo del mentor con sus propios numeros, que es
 * aritmetica verificable, y ademas es el dolor nuevo de la pagina: el cuello de
 * botella es el.
 */
function CalculadoraHoras() {
  const [alumnos, setAlumnos] = useState(20);
  const [piezas, setPiezas] = useState(4);
  const [minutos, setMinutos] = useState(20);

  const piezasMes = alumnos * piezas;
  const horas = (piezasMes * minutos) / 60;
  const dias = horas / 8;
  const num = (n: number, dec = 0) =>
    new Intl.NumberFormat("es-PY", { maximumFractionDigits: dec }).format(n);

  return (
    <div className="loss-calculator">
      <div className="calculator-controls">
        <div className="calculator-label">
          <span className="eyebrow">CALCULADORA</span>
          <h3>¿Cuántas horas al mes te lleva el contenido de tus alumnos?</h3>
          <p>Con los números de tu programa.</p>
        </div>
        <label className="range-field">
          <span>Alumnos en tu programa <b>{alumnos}</b></span>
          <input type="range" min="3" max="60" value={alumnos} onChange={(e) => setAlumnos(Number(e.target.value))} />
        </label>
        <label className="range-field">
          <span>Piezas que produce cada uno por mes <b>{piezas}</b></span>
          <input type="range" min="1" max="12" value={piezas} onChange={(e) => setPiezas(Number(e.target.value))} />
        </label>
        <label className="range-field">
          <span>Minutos que te lleva cada pieza <b>{minutos} min</b></span>
          <input type="range" min="5" max="60" step="5" value={minutos} onChange={(e) => setMinutos(Number(e.target.value))} />
        </label>
      </div>
      <div className="calculator-result" aria-live="polite">
        <span className="eyebrow">TU TIEMPO, CADA MES</span>
        <p>Entre armar, revisar y corregir esas piezas:</p>
        <motion.strong key={horas} initial={{ opacity: 0.5, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}>
          {num(horas, 1)} horas <small>por mes</small>
        </motion.strong>
        <div className="calculator-breakdown">
          <span>{num(piezasMes)}<small>piezas por mes</small></span>
          <span>{num(dias, 1)}<small>días de trabajo</small></span>
        </div>
        <p className="calculator-note">
          Esas piezas se van a hacer igual. La pregunta es si las hacés vos.
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
            <span><Sparkles aria-hidden="true" /> Sombra: aprobás cada propuesta.</span>
            <ArrowRight aria-hidden="true" />
            <span>Copiloto: te consulta solo lo dudoso.</span>
            <ArrowRight aria-hidden="true" />
            <span>Autónomo: mirás el tablero.</span>
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
            <div className="calculadora-wrap"><CalculadoraHoras /></div>
          </div>
        </section>

        {/* 3 · ANTES / DESPUES. Un solo contraste, grande. */}
        <section id="cambio" className="section section-white">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="eyebrow">EL CAMBIO</span>
              <h2>Hoy los guiones salen de tu cabeza. <em>Después salen del sistema.</em></h2>
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
                <p>Ochenta piezas por mes. Todas escritas por vos, una por una.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="swap-card swap-despues"
              >
                <span className="swap-tag">Con el sistema</span>
                <p>Las mismas ochenta, con tu método adentro. Vos aprobás.</p>
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
                Lo hace con el <strong>Método Sombra</strong>: al principio aprobás todo, y cada semana menos.
                Cómo funciona por dentro te lo muestro en la llamada.
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
                <p><ShieldCheck aria-hidden="true" /> Sos de los primeros. El motor corre en nuestro propio negocio hace meses.</p>
                <p><BadgeCheck aria-hidden="true" /> Todavía no hay casos de éxito de clientes publicados. Cuando alguien te muestre veinte logos en esta etapa, desconfiá.</p>
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
