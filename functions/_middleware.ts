/**
 * Metadatos por ruta, del lado del servidor.
 *
 * Por que hace falta: esto es una SPA. El title y la description que pone React
 * al montar le sirven a Google, que ejecuta JavaScript, pero NO a los que arman
 * la vista previa de un link (WhatsApp, Instagram, LinkedIn, X). Esos leen el
 * HTML crudo y se van. Sin esto, compartir /traction-os muestra el titulo
 * generico de Clarity Hub.
 *
 * Reglas al tocar este archivo:
 * - Ante cualquier error, devolver la respuesta original sin tocar. Un
 *   middleware que tira una excepcion se lleva puesto el sitio entero.
 * - Solo transformar HTML. Los assets y /api pasan de largo.
 */

interface Meta {
  title: string;
  description: string;
  image: string;
}

const SITIO = "https://clarity.xp.com.py";

const POR_RUTA: Record<string, Meta> = {
  "/": {
    title: "Clarity Hub — Escalá automatizando tus procesos, sin caos",
    description:
      "Auditamos, rediseñamos y automatizamos los procesos con más ROI para que escales con tranquilidad, control y seguridad.",
    image: "/images/og-home.jpg",
  },
  "/traction-os": {
    title: "Clarity Traction OS · Tu sistema de contenidos con IA",
    description:
      "Tu sistema de contenidos con IA que crea guiones, carruseles y stories para tus clientes, con tu metodología adentro. Tomamos 5 mentores por mes.",
    image: "/images/og-traction-os.jpg",
  },
  "/acquisition-os": {
    title: "Clarity Acquisition OS · Tu máquina de adquisición",
    description:
      "El sistema que convierte comentarios y mensajes en conversaciones agendadas, con tu criterio adentro.",
    image: "/images/og-home.jpg",
  },
};

const escapar = (s: string): string =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function etiquetas(meta: Meta, canonical: string): string {
  const t = escapar(meta.title);
  const d = escapar(meta.description);
  const img = escapar(SITIO + meta.image);
  return [
    `<link rel="canonical" href="${escapar(canonical)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Clarity Hub">`,
    `<meta property="og:locale" content="es_PY">`,
    `<meta property="og:url" content="${escapar(canonical)}">`,
    `<meta property="og:title" content="${t}">`,
    `<meta property="og:description" content="${d}">`,
    `<meta property="og:image" content="${img}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${t}">`,
    `<meta name="twitter:description" content="${d}">`,
    `<meta name="twitter:image" content="${img}">`,
  ].join("");
}

export const onRequest: PagesFunction = async (context) => {
  const respuesta = await context.next();

  try {
    const tipo = respuesta.headers.get("content-type") ?? "";
    if (!tipo.includes("text/html")) return respuesta;

    const url = new URL(context.request.url);
    // "/traction-os/" y "/traction-os" son la misma pagina.
    const ruta = url.pathname.replace(/\/+$/, "") || "/";
    const meta = POR_RUTA[ruta];
    if (!meta) return respuesta;

    const canonical = SITIO + (ruta === "/" ? "/" : ruta);

    return new HTMLRewriter()
      .on("title", {
        element(el) {
          el.setInnerContent(meta.title);
        },
      })
      .on('meta[name="description"]', {
        element(el) {
          el.setAttribute("content", meta.description);
        },
      })
      .on("head", {
        element(el) {
          el.append(etiquetas(meta, canonical), { html: true });
        },
      })
      .transform(respuesta);
  } catch {
    // Nunca romper la pagina por un metadato.
    return respuesta;
  }
};
