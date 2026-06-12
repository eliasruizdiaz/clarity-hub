import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackSchedule } from "@/lib/metaTracking";
import { CALENDAR_URL } from "@/lib/links";

const faqs = [
  {
    question: "¿Qué es exactamente el ROI Scan?",
    answer:
      "Es un diagnóstico de 2 semanas donde auditamos tus 3 procesos con mayor potencial de retorno, los priorizamos con una matriz de Impacto vs Complejidad y te entregamos una hoja de ruta + una cotización detallada para implementar. Salís sabiendo qué automatizar primero y cuánto cuesta.",
  },
  {
    question: "¿Tengo que contratar el proyecto completo para empezar?",
    answer:
      "No. Empezás por el ROI Scan (desde $1.500). Recién después, con los números en la mano, decidís si avanzás a Optimization + Transformation (desde $3.500). Sin compromiso de continuar.",
  },
  {
    question: "¿Qué pasa en los 30 minutos de Discovery?",
    answer:
      "Es una llamada sin pitch ni obligación. Entendemos tu operación, vemos si hay encaje y, si tiene sentido, arrancamos con el ROI Scan. Si no lo tiene, te lo decimos.",
  },
  {
    question: "¿Para qué tipo de empresa es esto?",
    answer:
      "Trabajamos con empresas medianas y grandes con procesos críticos que hoy dependen de planillas, tareas manuales o sistemas que no se hablan entre sí. Si crecer hoy significa sumar gente, esto es para vos.",
  },
  {
    question: "¿Reemplazan a mi equipo?",
    answer:
      "No. Lo potenciamos. Automatizamos lo mecánico para que tu equipo se enfoque en lo estratégico, y diseñamos los procesos codo a codo con las personas que los conocen de verdad.",
  },
  {
    question: "¿Con qué herramientas trabajan?",
    answer:
      "Somos agnósticos. Recomendamos la tecnología que mejor se adapte a tu caso: automatizaciones, agentes de IA, integraciones, dashboards y bots conversacionales.",
  },
  {
    question: "¿Cuánto tardan en verse resultados?",
    answer:
      "El ROI Scan entrega en 2 semanas. Los tiempos de Optimization + Transformation dependen del alcance que salga del Scan, pero priorizamos quick wins medibles desde el arranque.",
  },
  {
    question: "¿Ofrecen formación para mi equipo?",
    answer:
      "Sí. Tenemos formaciones privadas (desde $500), personalizadas para equipos chicos o áreas puntuales, enfocadas en automatización e IA aplicada.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="eyebrow mb-4">Preguntas frecuentes</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 mt-4">
              Todo lo que querés saber antes de agendar
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Si tenés una pregunta que no está acá, escribime directo. Respondo personalmente a cada mensaje.
            </p>

            <div className="bg-forest/5 border border-forest/20 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">El primer paso son 30 minutos</h4>
                  <p className="text-sm text-muted-foreground">
                    Sin pitch ni obligación. Lo que sigue, lo decidís vos.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSchedule("FAQ Section")}
              className="btn-primary-gradient text-white font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Agendá 30 min gratis
            </a>
          </motion.div>

          {/* Right column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-cream rounded-xl border-none px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-forest py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
