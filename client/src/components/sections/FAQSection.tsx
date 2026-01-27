import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHOP_URL = "https://whop.com/clhub";

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "¿Qué incluye exactamente el Programa De Caos a Claridad?",
      answer: "El programa incluye: Diagnóstico express en 48 horas, plantillas y frameworks listos para usar, roadmaps de implementación, casos de uso reales, masterclasses, y acompañamiento durante la implementación. Es un sistema modular paso a paso que te lleva desde el diagnóstico hasta tener tu primer POC en producción en 30-60 días.",
    },
    {
      question: "¿Qué tipo de empresas pueden beneficiarse de este programa?",
      answer: "El programa está diseñado para empresas medianas y grandes (50-500+ empleados) que quieren implementar automatización o IA pero no saben por dónde empezar, o que ya han tenido intentos fallidos. Si tienes procesos manuales que consumen tiempo y dinero, y buscas una solución que realmente funcione, este programa es para ti.",
    },
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer: "El diagnóstico express toma solo 48 horas y el primer POC está diseñado para ejecutarse en 30-60 días sin paralizar operaciones. Empiezas a aplicar conocimientos desde el día 1 con las plantillas y frameworks incluidos.",
    },
    {
      question: "¿Qué pasa si mi equipo técnico no tiene experiencia en automatización?",
      answer: "Perfecto, para eso está el programa. Incluye especificaciones lo suficientemente detalladas para que cualquier desarrollador competente pueda implementarlas. Además, incluye acompañamiento en la implementación, no solo recomendaciones en un PDF.",
    },
    {
      question: "¿Cómo funciona la garantía de 7 días?",
      answer: "Tienes 7 días de garantía total de reembolso. Cero preguntas, cero vueltas. Accede al programa, revisa el diagnóstico express, las plantillas, los roadmaps, todo. Si en 7 días no estás 100% convencido de que esto va a transformar tus operaciones, me escribes y te devuelvo cada centavo.",
    },
    {
      question: "¿Por qué el precio es tan bajo comparado con una consultoría tradicional?",
      answer: "Normalmente, una consultoría como esta costaría entre $15,000 y $25,000. Pero lo hice modular y digital para que más empresas puedan acceder. El precio de $297 es dinámico y sube por cada 10 nuevos integrantes. El precio que ves ahora es para el bloque actual.",
    },
    {
      question: "¿Trabajas con herramientas específicas o eres agnóstico?",
      answer: "Soy completamente agnóstico en cuanto a herramientas. Mi experiencia incluye Genesys, SAP, múltiples plataformas de chatbots, y prácticamente cualquier stack tecnológico. Recomiendo las herramientas que mejor se adapten a tu caso, no las que me paguen comisión.",
    },
    {
      question: "¿Qué diferencia hay entre esto y contratar un consultor tradicional?",
      answer: "La mayoría de consultores te entregan un PDF con recomendaciones que nadie lee. Este programa incluye acompañamiento en la implementación, plantillas listas para usar, prompts probados, scripts ETL, y guías de preparación de datos que eliminan el 70% del trabajo técnico. Es acción, no teoría.",
    },
  ];

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
            <span className="inline-block text-orange font-medium text-sm uppercase tracking-wider mb-4">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Todo lo que necesitas saber antes de empezar
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Si tienes una pregunta que no está aquí, no dudes en contactarme 
              directamente. Respondo personalmente a cada mensaje.
            </p>

            {/* Guarantee box */}
            <div className="bg-forest/5 border border-forest/20 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">7 días de garantía total</h4>
                  <p className="text-sm text-muted-foreground">
                    Si no estás satisfecho, te devuelvo cada centavo. Sin preguntas, sin vueltas.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={WHOP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary-gradient text-white font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center gap-2"
            >
              Acceder al Programa
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
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
