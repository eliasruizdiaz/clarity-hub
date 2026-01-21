import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQSectionProps {
  onOpenQuiz: (origin: string) => void;
}

export default function FAQSection({ onOpenQuiz }: FAQSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "¿Qué tipo de empresas pueden beneficiarse de tus servicios?",
      answer: "Trabajo principalmente con empresas medianas y grandes (50-500+ empleados) que quieren implementar automatización o IA pero no saben por dónde empezar, o que ya han tenido intentos fallidos. Si tienes procesos manuales que consumen tiempo y dinero, y buscas una solución que realmente funcione, puedo ayudarte.",
    },
    {
      question: "¿No eres un implementador? ¿Entonces qué haces exactamente?",
      answer: "Soy un arquitecto de soluciones. Mi trabajo es diseñar el 'qué' y el 'cómo' antes de que empieces a construir. Te entrego un plan detallado, especificaciones técnicas, y te acompaño durante la implementación para asegurar que tu equipo (o proveedores) construyan correctamente. Esto evita los errores costosos que veo constantemente en proyectos sin guía experta.",
    },
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer: "Depende del plan. Con la Comunidad Clarity empiezas a aplicar conocimientos desde el día 1. Con Arquitectura Personalizada, en 2-4 semanas tienes tu plan completo. Con Arquitectura + Supervisión, típicamente ves resultados tangibles en 2-3 meses, comparado con los 12+ meses que toman proyectos sin guía.",
    },
    {
      question: "¿Qué pasa si mi equipo técnico no tiene experiencia en automatización?",
      answer: "Perfecto, para eso estoy. Mi arquitectura incluye especificaciones lo suficientemente detalladas para que cualquier desarrollador competente pueda implementarla. Además, en los planes de supervisión, reviso el trabajo de tu equipo y los guío en tiempo real.",
    },
    {
      question: "¿Trabajas con herramientas específicas o eres agnóstico?",
      answer: "Soy completamente agnóstico en cuanto a herramientas. Mi experiencia incluye Genesys, SAP, múltiples plataformas de chatbots, y prácticamente cualquier stack tecnológico. Recomiendo las herramientas que mejor se adapten a tu caso, no las que me paguen comisión.",
    },
    {
      question: "¿Qué garantía tengo de que esto funcionará?",
      answer: "En el plan de Arquitectura + Supervisión ofrezco garantía de resultados. Si seguimos el plan acordado y no obtienes los resultados prometidos, trabajamos sin costo adicional hasta lograrlo. Además, el diagnóstico inicial es gratuito - no arriesgas nada al empezar.",
    },
    {
      question: "¿Puedo empezar con la Comunidad y luego subir de plan?",
      answer: "¡Absolutamente! De hecho, muchos clientes empiezan en la Comunidad para entender mejor su situación, y luego contratan Arquitectura Personalizada cuando están listos para implementar. Los miembros de la comunidad tienen descuentos especiales en los servicios premium.",
    },
    {
      question: "¿Cómo es el proceso de trabajo contigo?",
      answer: "Todo empieza con el diagnóstico gratuito (el quiz que ves en esta página). Basado en tus respuestas, te recomiendo el plan más adecuado. Si decides avanzar, agendamos una llamada de 30 minutos para entender tu caso en detalle. Luego, dependiendo del plan, empezamos con el trabajo de arquitectura y/o supervisión.",
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
            <button
              onClick={() => onOpenQuiz("FAQ Section")}
              className="btn-primary-gradient text-white font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center gap-2"
            >
              Hacer diagnóstico gratis
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
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
