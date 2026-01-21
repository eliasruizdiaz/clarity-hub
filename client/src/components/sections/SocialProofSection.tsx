import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

export default function SocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Company logos - Real companies Elías has worked with
  const companyLogos = [
    { name: "HSBC", logo: "/images/hsbc-logo.jpg" },
    { name: "Itaú", logo: "/images/itau-logo.jpg" },
    { name: "Tigo", logo: "/images/tigo-logo.jpg" },
    { name: "Personal", logo: "/images/personal-logo.png" },
    { name: "Securitas Direct", logo: "/images/securitas-logo.jpg" },
    { name: "Movistar", logo: "/images/movistar-logo.png" },
  ];

  // Testimonials (fictional but realistic)
  const testimonials = [
    {
      quote: "Llevábamos 8 meses intentando implementar un chatbot con IA. En 6 semanas con Elías teníamos la arquitectura clara y en 3 meses estaba funcionando. Nos ahorró al menos $150K en errores.",
      author: "María González",
      role: "Directora de Operaciones",
      company: "Empresa de Telecomunicaciones",
      result: "+45% eficiencia",
    },
    {
      quote: "Lo que más valoro es que no te vende humo. Te dice exactamente qué va a funcionar y qué no, basado en experiencia real. Eso no tiene precio cuando estás invirtiendo $50K+.",
      author: "Carlos Mendoza",
      role: "CTO",
      company: "Fintech Regional",
      result: "3x más rápido",
    },
    {
      quote: "Nuestro equipo técnico es bueno, pero no tenían experiencia en automatización de contact centers. Elías nos dio el mapa y el acompañamiento que necesitábamos.",
      author: "Ana Rodríguez",
      role: "VP de Tecnología",
      company: "Empresa de Seguros",
      result: "-40% costos",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-forest text-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-mint rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Header with Elías photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Elías Photo */}
          <div className="mb-8">
            <img
              src="/images/elias-logo.png"
              alt="Elías Ruiz Díaz"
              className="w-48 h-auto mx-auto rounded-2xl"
            />
          </div>
          
          <span className="inline-block text-orange font-medium text-sm uppercase tracking-wider mb-4">
            Empresas que confían
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            He trabajado con empresas líderes en Europa y LATAM
          </h2>
          <p className="text-lg text-white/70">
            Más de 100 implementaciones exitosas en contact centers, 
            automatización y sistemas de IA conversacional.
          </p>
        </motion.div>

        {/* Company logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-20"
        >
          {companyLogos.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 px-6 hover:scale-105 transition-transform shadow-lg"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                  <p className="text-xs text-white/40">{testimonial.company}</p>
                </div>
                <div className="bg-orange/20 text-orange px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/5 rounded-2xl p-6 md:p-8"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-orange">13+</p>
            <p className="text-sm text-white/60">Años de experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-orange">100+</p>
            <p className="text-sm text-white/60">Implementaciones</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-orange">$2M+</p>
            <p className="text-sm text-white/60">Ahorrados a clientes</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-orange">Global</p>
            <p className="text-sm text-white/60">Europa, UK y LATAM</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
