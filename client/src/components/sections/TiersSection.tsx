import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Users, FileText, Video, MessageSquare, Zap, Shield, Star } from "lucide-react";

interface TiersSectionProps {
  onOpenQuiz: (origin: string) => void;
}

export default function TiersSection({ onOpenQuiz }: TiersSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tiers = [
    {
      id: 1,
      name: "Comunidad Clarity",
      description: "Para quienes quieren aprender y ejecutar por cuenta propia con la guía correcta.",
      price: "$100",
      period: "/mes",
      trial: "7 días gratis",
      showPrice: true,
      popular: false,
      features: [
        { icon: Users, text: "Acceso a comunidad privada de profesionales" },
        { icon: FileText, text: "Biblioteca de plantillas y frameworks" },
        { icon: Video, text: "Masterclasses mensuales en vivo" },
        { icon: MessageSquare, text: "Q&A semanal con Elías" },
        { icon: Zap, text: "Descuentos en servicios premium" },
      ],
      cta: "Unirme a la comunidad",
      ctaStyle: "bg-forest hover:bg-forest/90 text-white",
    },
    {
      id: 2,
      name: "Arquitectura Personalizada",
      description: "Para empresas que necesitan un plan de acción claro diseñado para su caso específico.",
      price: "Personalizado",
      period: "",
      showPrice: false,
      popular: true,
      features: [
        { icon: Check, text: "Todo lo de Comunidad Clarity" },
        { icon: FileText, text: "Diagnóstico profundo de tu situación" },
        { icon: Zap, text: "Arquitectura técnica detallada" },
        { icon: Video, text: "2 sesiones de trabajo (4h total)" },
        { icon: MessageSquare, text: "Documento de especificaciones" },
        { icon: Shield, text: "30 días de soporte por email" },
      ],
      cta: "Solicitar propuesta",
      ctaStyle: "btn-primary-gradient text-white",
    },
    {
      id: 3,
      name: "Arquitectura + Supervisión",
      description: "Para empresas que necesitan acompañamiento completo para garantizar el éxito.",
      price: "Personalizado",
      period: "",
      showPrice: false,
      popular: false,
      features: [
        { icon: Check, text: "Todo lo de Arquitectura Personalizada" },
        { icon: Shield, text: "Supervisión durante implementación" },
        { icon: Video, text: "Reuniones semanales de seguimiento" },
        { icon: Zap, text: "Revisión de código y decisiones técnicas" },
        { icon: MessageSquare, text: "Acceso directo por WhatsApp" },
        { icon: Star, text: "Garantía de resultados" },
      ],
      cta: "Agendar llamada",
      ctaStyle: "bg-forest hover:bg-forest/90 text-white",
    },
  ];

  return (
    <section id="planes" className="py-20 md:py-28 bg-cream relative" ref={ref}>
      {/* Wave divider top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z"
            fill="#60Ba46"
          />
        </svg>
      </div>

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-orange font-medium text-sm uppercase tracking-wider mb-4">
            Planes
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Elige el nivel de acompañamiento que necesitas
          </h2>
          <p className="text-lg text-muted-foreground">
            Desde recursos para aprender por tu cuenta hasta supervisión completa 
            de tu proyecto. Hay una opción para cada etapa.
          </p>
        </motion.div>

        {/* Tiers grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className={`relative bg-white rounded-2xl p-6 lg:p-8 border-2 transition-all duration-300 ${
                tier.popular
                  ? "border-orange shadow-xl scale-105 z-10"
                  : "border-border hover:border-forest/30 hover:shadow-lg"
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-orange text-white text-sm font-medium px-4 py-1 rounded-full">
                    Más popular
                  </span>
                </div>
              )}

              {/* Tier header */}
              <div className="text-center mb-6 pb-6 border-b border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {tier.description}
                </p>
                {tier.showPrice ? (
                  <>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-forest">{tier.price}</span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                    {tier.trial && (
                      <div className="mt-2">
                        <span className="inline-block bg-forest/10 text-forest text-sm font-medium px-3 py-1 rounded-full">
                          {tier.trial}
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-semibold text-foreground">{tier.price}</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-mint flex items-center justify-center shrink-0 mt-0.5">
                      <feature.icon className="w-3 h-3 text-forest" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => onOpenQuiz(`Plan ${tier.name}`)}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all ${tier.ctaStyle}`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-muted-foreground mt-12"
        >
          ¿No estás seguro cuál es para ti?{" "}
          <button onClick={() => onOpenQuiz("Tiers Bottom Note")} className="text-orange font-medium hover:underline">
            Haz el diagnóstico gratuito
          </button>{" "}
          y te recomend aré la mejor opción.
        </motion.p>
      </div>
    </section>
  );
}
