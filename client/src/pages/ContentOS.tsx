/**
 * Clarity Content OS landing
 *
 * La otra cara de Traction OS. MISMO delivery, OTRO publico: aca no hay
 * clientes en el medio. El que lee vende algo (una tienda, un asesor
 * inmobiliario, alguien armando su marca personal), sabe que tiene que
 * publicar y no es creador de contenido.
 *
 * Ojo al adaptar desde traction-os: el dolor NO es el mismo. Alla el mentor
 * sufre por ser cuello de botella de otros; aca se sufre la hoja en blanco y
 * el mes que pasa sin publicar. Buscar y reemplazar "tus clientes" por "vos"
 * deja la pagina tibia.
 *
 * Sin cupo: el dueño decidio no poner urgencia por capacidad en esta.
 *
 * Objetivo unico, igual que la otra: que agende.
 */
import { useEffect } from "react";
import { motion } from "framer-motion";
import contentStyles from "../content-os.css?inline";
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

// El dolor del que VENDE y no publica. Tres escenas, no tres conceptos.
// Salen de lo que dicen los que escriben: "quiero vender mas", "quiero
// empezar a crear contenido", "quiero tener una marca personal".
const escenas = [
  { texto: "Sabés que tenés que publicar para vender más. Hace meses que lo sabés." },
  { texto: "Te sentás a escribir, mirás la pantalla en blanco y te acordás de algo más urgente que hacer." },
  {
    texto: "Pasa el mes y subiste dos cosas. Mientras tanto, ",
    resalta: "el que publica todas las semanas en tu rubro se queda con los clientes que te preguntaban a vos.",
  },
];

const beneficios = [
  {
    titulo: "El guion ya está escrito cuando te sentás",
    texto:
      "Con tu oferta, tu forma de hablar y las referencias de tu rubro. No arrancás de la pantalla en blanco.",
    mock: "guion" as const,
  },
  {
    titulo: "Publicás todo el mes sin escribir ninguno",
    texto: "El mes entero sale de una sola carga. Vos elegís qué sale y qué no.",
    mock: "mes" as const,
  },
  {
    titulo: "Te enterás de qué pieza funcionó",
    texto: "El sistema te marca lo que rompió, para que el mes que viene salga más de eso y menos del resto.",
    mock: "top" as const,
  },
];

const fitSignals = [
  "Ya vendés algo: un producto, un servicio o tu tiempo.",
  "Querés que el contenido te traiga clientes, no seguidores.",
  "No tenés tiempo ni ganas de escribir todas las semanas.",
  "Hay alguien que puede publicar: vos o quien sea de tu equipo.",
];

// Las dos objeciones que frenan a este publico, que no son las del mentor.
const faqs = [
  {
    q: "¿Sirve para mi rubro?",
    a: "Si vendés algo y tus clientes están en Instagram, sí. El sistema carga tu negocio y busca las referencias de tu rubro, no usa una plantilla.",
  },
  {
    q: "¿Se va a notar que lo escribió una IA?",
    a: "Carga tu forma de hablar y aprende de cada corrección tuya. Las primeras semanas corregís más; después, menos.",
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
    <div className="group-board" aria-label="Contenido generado con tu negocio adentro">
      <div className="board-topline">
        <div className="flow-brand-signature"><img src={logo} alt="Clarity Hub" /><span>CONTENT OS</span></div>
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
        <span>Piezas nuevas cada semana, con tu negocio adentro.</span>
      </div>
    </div>
  );
}

const agentes = [
  { icono: Lightbulb, nombre: "Ideas de contenido" },
  { icono: Search, nombre: "Referencias de tu rubro" },
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
    <div className="cerebro" aria-label="Del cerebro a los agentes, y de ahi a tus piezas">
      <div className="cerebro-nucleo">
        <Brain aria-hidden="true" />
        <b>Tu cerebro</b>
        <small>Tu oferta, tu forma de hablar y tu rubro</small>
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
          <Clock aria-hidden="true" /> Listo cuando te sentás
        </span>
        <div className="cerebro-stat">
          <b>30</b>
          <small>piezas listas para este mes</small>
        </div>
        <div className="cerebro-resultado">
          <span className="confeti" aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => <i key={i} />)}
          </span>
          <span className="resultado-hito">
            <CalendarCheck aria-hidden="true" /> Publicás seguido
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
    <div className="student-panel" aria-label="El guion que recibis vos">
      <div className="student-panel-top">
        <img src={logo} alt="Clarity Hub" />
        <span>Tu guion de hoy</span>
      </div>
      <div className="guion-meta">
        <span className="panel-title">Reel · inmobiliaria</span>
        <i>Listo</i>
      </div>
      <div className="guion-cuerpo">
        <div className="guion-linea">
          <span>Hook</span>
          <p>"Si tu casa lleva cuatro meses publicada y no la vino a ver nadie, el problema no es el precio."</p>
        </div>
        <div className="guion-linea">
          <span>Cuerpo</span>
          <p>"Son las fotos. Te muestro los tres errores que hacen que la gente pase de largo."</p>
        </div>
        <div className="guion-linea">
          <span>CTA</span>
          <p>"Escribime FOTOS y te digo qué cambiar en la tuya."</p>
        </div>
      </div>
      <div className="guion-foot">
        <i><Check aria-hidden="true" /> Tu oferta</i>
        <i><Check aria-hidden="true" /> Tu forma de hablar</i>
        <i><Check aria-hidden="true" /> Tu rubro</i>
      </div>
    </div>
  );
}

/**
 * Mock 02: el punto es el ALCANCE ("llegas a todos, no a los primeros cuatro").
 * Una lista de dos clientes no muestra "todos"; una grilla de puntos si. Los
 * puntos son ilustrativos: el rotulo NO dice cuantos, porque no sabemos cuantos
 * clientes tiene el que lee.
 */
/**
 * Mock 02: el MES. Alla el punto era a cuantos clientes llega; aca no hay
 * clientes, el punto es cuanto publicas. Treinta puntos = un mes.
 */
function MockMes() {
  const dias = Array.from({ length: 30 }, (_, i) => i);
  return (
    <div className="queue-card" aria-label="Cuanto publicas en un mes">
      <div className="queue-top">
        <img src={logo} alt="Clarity Hub" />
        <span>Tu mes</span>
      </div>
      <div className="alcance-fila">
        <div className="alcance-rotulo">
          <b>3</b> <small>es lo que llegaste a subir el mes pasado</small>
        </div>
        <div className="alcance-puntos">
          {dias.map((i) => <i key={i} className={i < 3 ? "punto-antes" : ""} />)}
        </div>
      </div>
      <div className="alcance-fila">
        <div className="alcance-rotulo">
          <b>Todo el mes</b> <small>escrito, sin que te sientes a escribir</small>
        </div>
        <div className="alcance-puntos">
          {dias.map((i) => <i key={i} className="punto-ahora" />)}
        </div>
      </div>
      <div className="queue-foot">
        <Sparkles aria-hidden="true" />
        <span>Las piezas salen de una sola carga. Vos elegís cuáles van y cuáles no.</span>
      </div>
    </div>
  );
}

// Rubros distintos a proposito: el lector tiene que ver que la pagina no es
// de un solo nicho. El multiplo va contra TUS vistas habituales, nunca en
// numeros absolutos: la regla del vault prohibe prometer vistas.
const topPiezas = [
  { formato: "Reel", pieza: '"Los 3 errores al comprar tu primer depto"', mult: "3,1×" },
  { formato: "Carrusel", pieza: '"Cómo elegir el talle sin probarte nada"', mult: "2,4×" },
  { formato: "Story", pieza: '"El antes y después de ayer"', mult: "1,8×" },
];

function MockTop() {
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
        <div key={t.pieza} className="top-item">
          <em>{i + 1}</em>
          <span>
            <b>{t.formato}</b>
            <small>{t.pieza}</small>
          </span>
          <i>
            {t.mult}
            {i === 0 && <small>tus vistas de siempre</small>}
          </i>
        </div>
      ))}
      <div className="top-accion">
        <MessageSquareQuote aria-hidden="true" /> El mes que viene, más de esto
      </div>
      <div className="queue-foot">
        <Sparkles aria-hidden="true" />
        <span>Sin esto mirás el número y seguís publicando a ojo.</span>
      </div>
    </div>
  );
}

export default function ContentOS() {
  useEffect(() => {
    const previousTitle = document.title;
    const routeStyle = document.createElement("style");

    routeStyle.dataset.routeStyles = "content-os";
    routeStyle.dataset.build = "v1";
    routeStyle.textContent = contentStyles;
    document.head.appendChild(routeStyle);
    document.title = "Clarity Content OS · Tu sistema de contenidos con IA";

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
                <span className="brand-highlight">Tu sistema de contenidos con IA</span> que escribe tus <em>guiones, carruseles y stories</em>.
              </h1>
              <h2 className="hero-sub">
                Aunque no seas creador de contenido: cargás tu negocio una vez y el sistema escribe con tu oferta, tu forma de hablar y las referencias de tu rubro.
              </h2>
              <div className="hero-actions">
                <Cta texto="Agendá una llamada" />
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
            <div className="section-heading centered-heading">
              <span className="eyebrow">CÓMO FUNCIONA</span>
              <h2>Un cerebro con tu negocio adentro. <em>Agentes que escriben por vos.</em></h2>
            </div>
            <CerebroDiagrama />
          </motion.div>
        </section>

        {/* 2 · EL DOLOR, TUYO. Escenas en segunda persona, no conceptos. */}
        <section id="dolor" className="section section-cream">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="eyebrow">LO QUE PASA HOY</span>
              <h2>Sabés que tenés que publicar. <em>Y no publicás.</em></h2>
            </div>
            <div className="escenas">
              {escenas.map((e, i) => (
                <motion.p
                  key={e.texto}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="escena"
                >
                  {e.texto}
                  {e.resalta && <mark>{e.resalta}</mark>}
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
              <h2>Hoy el contenido depende de que te sientes a escribir. <em>Después deja de depender de eso.</em></h2>
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
                <p>Si la semana se complica, no se publica. Y la semana siempre se complica.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="swap-card swap-despues"
              >
                <span className="swap-tag">Con el sistema</span>
                <p>El mes entero ya está escrito con tu negocio adentro. Vos elegís qué sale y lo publicás.</p>
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
              <h2>Vos corregís <em>y tu IA aprende.</em></h2>
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
                  {b.mock === "mes" && <MockMes />}
                  {b.mock === "top" && <MockTop />}
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
              <h2>Para el que ya vende algo, <em>no para el que todavía no sabe qué vende.</em></h2>
              <p className="fit-note">
                No es para vos si buscás que alguien te maneje la cuenta. <strong>El sistema te da las piezas escritas; publicarlas sigue siendo tuyo.</strong>
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
              <h2>Tu sistema, <em>con tu negocio adentro.</em></h2>
              <p>No es una plantilla que te pasamos. Se carga con lo que vendés y con tu forma de hablar.</p>
              <div className="cierre-honesto">
                <p><ShieldCheck aria-hidden="true" /> El motor ya corre en nuestro propio negocio hace meses. No es un prototipo.</p>
                <p><BadgeCheck aria-hidden="true" /> Funciona igual si tenés una tienda, una inmobiliaria o tu propia marca.</p>
              </div>
            </div>
            <div className="agenda-card">
              <CalendarCheck aria-hidden="true" />
              <span className="eyebrow">30 MINUTOS</span>
              <h3>Agendá tu llamada</h3>
              <p>Vemos qué vendés y qué contenido te falta. Sin pitch.</p>
              <Cta texto="Quiero mi sistema de contenidos" className="clarity-button-full" />
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
          <p>Clarity Content OS · Guiones, carruseles y stories para tu negocio.</p>
          <span>Clarity Hub</span>
        </div>
      </footer>
    </div>
  );
}
