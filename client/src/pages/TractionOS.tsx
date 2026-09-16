/**
 * Clarity Traction OS landing — v2
 *
 * Objetivo unico: que agende. La pagina NO explica el sistema.
 * Si una frase dice COMO funciona, va a la llamada, no aca.
 *
 * Regla de escritura: cada oracion tiene que entenderse leida sola, fuera de la
 * pagina. Nada de "el que", "eso", "lo que": sujeto y objeto siempre.
 * Segunda persona: el que lee es el mentor. A los suyos les dice CLIENTES,
 * nunca alumnos: es el vocabulario que usan ellos.
 */
import { useEffect } from "react";
import { motion } from "framer-motion";
import tractionStyles from "../traction-os.css?inline";
import {
  AlignLeft,
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Brain,
  CalendarCheck,
  Check,
  Clock,
  Lightbulb,
  Medal,
  MessageSquareQuote,
  MousePointerClick,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const logo = "/images/logo_clarity.png";
const heroBackground = "/images/hero-bg.png";
const calendarUrl = "https://calendar.app.google/ngxAfHKR5fs7SW8aA";

// Cupo real confirmado por el dueno el 2026-09-16. Si cambia, cambiarlo aca:
// se usa en el titular del cierre y en el texto del boton.
const CUPO_MENSUAL = 5;

// El dolor del MENTOR, no del cliente. Tres escenas, no tres conceptos.
// Ojo: el mentor NO escribe los guiones. Sus clientes los arman y se los
// explican en la sesion; el corrige los que llega a corregir. El cuello de
// botella es su hora de revision, no su teclado.
const escenas = [
  "Tenés veinte clientes y cada uno llega a la sesión con su guion. Escuchás, corregís, y se te va la hora con cuatro.",
  "Los otros dieciséis publican sin que nadie les haya mirado el guion. O no publican y esperan a la semana que viene.",
  "El que publica sin tu criterio no consigue resultados, y el que espera tampoco. Sin casos no tenés embajadores que te refieran ni testimonios con que vender.",
];

const beneficios = [
  {
    titulo: "Cada cliente llega con el guion ya escrito",
    texto:
      "Con las referencias y el ángulo de su propio nicho, que son suyos, y tu criterio adentro. No te lo trae para que se lo armes.",
    mock: "guion" as const,
  },
  {
    titulo: "Llegás a los veinte, no a los cuatro de siempre",
    texto:
      "No todos se animan a hablarte. Hay callados, y hay quien le saca el jugo a cada sesión. Con esto estás clonado y disponible para todos, todo el tiempo.",
    mock: "mentor" as const,
  },
  {
    titulo: "Te enterás de qué video de tus clientes funcionó",
    texto:
      "El sistema te marca las piezas que rompieron. Ahí vas a buscar el testimonio y el referido que te faltan para vender.",
    mock: "testimonios" as const,
  },
];

const fitSignals = [
  "Tenés un programa o mentoría activa, no cursos sueltos.",
  "Atendés a varios clientes a la vez, no de a uno.",
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
        <span>Piezas nuevas cada semana, para cada cliente, con tu método adentro.</span>
      </div>
    </div>
  );
}

const agentes = [
  { icono: Lightbulb, nombre: "Ideas de contenido" },
  { icono: Search, nombre: "Referencias de su nicho" },
  { icono: Zap, nombre: "Hooks" },
  { icono: AlignLeft, nombre: "Cuerpo" },
  { icono: MousePointerClick, nombre: "CTA" },
];

function Curvas({ variante }: { variante: "ancho" | "angosto" }) {
  // Los puntos de llegada son los centros de las columnas: cinco columnas
  // iguales caen en 10/30/50/70/90, dos columnas en 25/75.
  const destinos = variante === "ancho" ? [100, 300, 500, 700, 900] : [250, 750];
  // Control points apenas distintos entre si, a proposito: si son simetricos
  // el dibujo vuelve a verse de maquina.
  const curvatura = [26, 32, 30, 24, 28];
  return (
    <svg
      className={`curvas curvas-${variante}`}
      viewBox="0 0 1000 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {destinos.map((x, i) => (
        <path
          key={x}
          d={
            x === 500
              ? "M500 0 C506 18 494 42 500 60"
              : `M500 0 C500 ${curvatura[i % curvatura.length]} ${x} ${60 - curvatura[i % curvatura.length]} ${x} 60`
          }
          fill="none"
          stroke="rgba(46,106,52,.5)"
          strokeWidth="1"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

function CurvaBajada() {
  return (
    <svg className="curva-bajada" viewBox="0 0 40 60" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M20 0 C28 16 12 34 20 46 C23 51 21 56 20 60"
        fill="none"
        stroke="rgba(46,106,52,.5)"
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function CerebroDiagrama() {
  return (
    <div className="cerebro" aria-label="Del cerebro a los agentes, y de ahi a cada cliente">
      <div className="cerebro-nucleo">
        <Brain aria-hidden="true" />
        <b>Tu cerebro</b>
        <small>Tu método, tu criterio y tu forma de escribir</small>
      </div>
      <div className="cerebro-agentes">
        <Curvas variante="ancho" />
        <Curvas variante="angosto" />
        {agentes.map(({ icono: Icono, nombre }) => (
          <i key={nombre}>
            <Icono aria-hidden="true" />
            {nombre}
          </i>
        ))}
      </div>
      <div className="cerebro-entrega">
        <CurvaBajada />
        <span className="cerebro-247">
          <Clock aria-hidden="true" /> Disponible 24/7 para tus clientes
        </span>
        <div className="cerebro-stat">
          <b>230</b>
          <small>piezas generadas esta semana</small>
        </div>
        <div className="cerebro-resultado">
          <span className="confeti" aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => <i key={i} />)}
          </span>
          <span className="resultado-hito">
            <Medal aria-hidden="true" /> Caso de éxito
          </span>
          <ArrowRight aria-hidden="true" className="resultado-flecha" />
          <span className="resultado-ventas">
            <TrendingUp aria-hidden="true" /> Más ventas
          </span>
        </div>
      </div>
    </div>
  );
}

function MockGuion() {
  return (
    <div className="student-panel" aria-label="El guion que recibe tu cliente">
      <div className="student-panel-top">
        <img src={logo} alt="Clarity Hub" />
        <span>El guion de Martina</span>
      </div>
      <div className="guion-meta">
        <span className="panel-title">Reel · entrenamiento para mamás</span>
        <i>Listo</i>
      </div>
      <div className="guion-cuerpo">
        <div className="guion-linea">
          <span>Hook</span>
          <p>"Si llevás tres meses entrenando en casa y no te cambió el cuerpo, el problema no es la rutina."</p>
        </div>
        <div className="guion-linea">
          <span>Cuerpo</span>
          <p>"Es que estás haciendo la que le sirve a otra. Te doy las tres señales para darte cuenta."</p>
        </div>
        <div className="guion-linea">
          <span>CTA</span>
          <p>"Escribime RUTINA y te paso la que va con tu caso."</p>
        </div>
      </div>
      <div className="guion-foot">
        <i><Check aria-hidden="true" /> Sus referencias</i>
        <i><Check aria-hidden="true" /> Su ángulo</i>
        <i><Check aria-hidden="true" /> Tu criterio</i>
      </div>
    </div>
  );
}

/**
 * Mock 02: el punto es el ALCANCE ("llegas a los veinte, no a los cuatro").
 * Una lista de dos clientes no muestra veinte. Veinte puntos, si.
 */
function MockAlcance() {
  const puntos = Array.from({ length: 20 }, (_, i) => i);
  return (
    <div className="queue-card" aria-label="A cuantos clientes llega tu criterio">
      <div className="queue-top">
        <img src={logo} alt="Clarity Hub" />
        <span>Tu criterio, este mes</span>
      </div>
      <div className="alcance-fila">
        <div className="alcance-rotulo">
          <b>4</b> de 20 <small>es lo que entra en tus horas de sesión</small>
        </div>
        <div className="alcance-puntos">
          {puntos.map((i) => <i key={i} className={i < 4 ? "punto-antes" : ""} />)}
        </div>
      </div>
      <div className="alcance-fila">
        <div className="alcance-rotulo">
          <b>20</b> de 20 <small>con tu método adentro del sistema</small>
        </div>
        <div className="alcance-puntos">
          {puntos.map((i) => <i key={i} className="punto-ahora" />)}
        </div>
      </div>
      <div className="queue-foot">
        <Sparkles aria-hidden="true" />
        <span>Los ochenta guiones del mes se escribieron con tu método. Vos elegís con cuál cliente te sentás.</span>
      </div>
    </div>
  );
}

/**
 * Mock 03: lo que mas funciono, para ir a buscar el testimonio.
 * El multiplo va contra las vistas HABITUALES de cada cliente, no en numeros
 * absolutos: la regla del vault prohibe prometer vistas.
 */
const topPiezas = [
  { nombre: "Martina", pieza: 'Reel · "3 señales de que no es tu rutina"', mult: "3,1×" },
  { nombre: "Diego", pieza: 'Carrusel · "Mi primer mes entrenando"', mult: "2,4×" },
  { nombre: "Lucía", pieza: 'Reel · "Antes y después de 90 días"', mult: "1,8×" },
];

function MockTestimonios() {
  return (
    <div className="queue-card" aria-label="Lo que mas funciono este mes">
      <div className="queue-top">
        <img src={logo} alt="Clarity Hub" />
        <span>Lo que más funcionó</span>
      </div>
      <div className="queue-head">
        <span>Lo mejor de este mes</span>
        <b>TOP 3</b>
      </div>
      {topPiezas.map((t, i) => (
        <div key={t.nombre} className="top-item">
          <em>{i + 1}</em>
          <span>
            <b>{t.nombre}</b>
            <small>{t.pieza}</small>
          </span>
          <i>
            {t.mult}
            {i === 0 && <small>sus vistas de siempre</small>}
          </i>
        </div>
      ))}
      <div className="top-accion">
        <MessageSquareQuote aria-hidden="true" /> Pedirle el testimonio a Martina
      </div>
      <div className="queue-foot">
        <Sparkles aria-hidden="true" />
        <span>Antes te enterabas en la sesión, y solo si el cliente lo contaba.</span>
      </div>
    </div>
  );
}

export default function TractionOS() {
  useEffect(() => {
    const previousTitle = document.title;
    const routeStyle = document.createElement("style");

    routeStyle.dataset.routeStyles = "traction-os";
    routeStyle.dataset.build = "v2-1";
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
                <span className="brand-highlight">Tu propio sistema de contenido</span> con IA, para que tus clientes creen <em>guiones, carruseles y stories</em>.
              </h1>
              <h2 className="hero-sub">
                Convierte tu metodología en piezas personalizadas para cada cliente, para que sepan exactamente qué hacer y consigan resultados en 90 días.
              </h2>
              <p className="hero-description">
                Cada pieza sale con tu criterio adentro. Ellos la terminan y la publican.
              </p>
              <div className="hero-actions">
                <Cta texto="Agendá una llamada" />
                <span className="hero-microcopy">
                  <BadgeCheck aria-hidden="true" /> Primero vemos cómo es tu método y cuánto producen hoy tus clientes. Después revisamos si hay encaje.
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

        {/* 1b · EL DIAGRAMA, pegado al hero. Es lo primero que ve despues del
            titular: de donde sale todo y a quien le llega. Muestra, no explica. */}
        <section className="section cerebro-band">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="container cerebro-wrap"
          >
            <CerebroDiagrama />
          </motion.div>
        </section>

        {/* 2 · EL DOLOR, TUYO. Escenas en segunda persona, no conceptos. */}
        <section id="dolor" className="section section-cream">
          <div className="container">
            <div className="section-heading centered-heading">
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
          </div>
        </section>

        {/* 3 · ANTES / DESPUES. Un solo contraste, grande. */}
        <section id="cambio" className="section section-white">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="eyebrow">EL CAMBIO</span>
              <h2>Hoy los guiones los escribe cada cliente. <em>Después los escribe tu sistema.</em></h2>
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
                <p>Cada cliente escribe su guion como puede. En la sesión llegás a corregir cuatro. Los otros dieciséis se publican igual.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="swap-card swap-despues"
              >
                <span className="swap-tag">Con el sistema</span>
                <p>Los ochenta guiones del mes ya vienen escritos con tu método. Vos no escribís ninguno.</p>
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
                  className="beneficio"
                >
                  <div className="beneficio-texto">
                    <span>0{i + 1}</span>
                    <h3>{b.titulo}</h3>
                    <p>{b.texto}</p>
                  </div>
                  {b.mock === "guion" && <MockGuion />}
                  {b.mock === "mentor" && <MockAlcance />}
                  {b.mock === "testimonios" && <MockTestimonios />}
                </motion.div>
              ))}
            </div>

            <div className="gancho">
              <p>
                Cada agente trabaja con <strong>tu cerebro</strong>, cargado una sola vez. Cómo se carga y cómo
                escribe cada uno te lo muestro en la llamada.
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
              <h2>Para mentorías de contenido con varios clientes, <em>no para cursos sueltos.</em></h2>
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
              <p>Revisamos tu método y cuánto producen hoy tus clientes. Sin pitch.</p>
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
          <p>Clarity Traction OS · Guiones, carruseles y stories para los clientes del mentor.</p>
          <span>Clarity Hub</span>
        </div>
      </footer>
    </div>
  );
}
