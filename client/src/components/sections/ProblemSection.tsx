import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Clock, DollarSign, Users } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/metaTracking";

const WHOP_URL = "https://whop.com/clhub/clarity-hub-premium-72/";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: Clock,
      title: "Meses de desarrollo",
      description: "Proyectos que debían durar 3 meses terminan en 12+ meses de iteraciones sin fin.",
    },
    {
      icon: DollarSign,
      title: "Presupuestos desbordados",
      description: "El costo real termina siendo 3-5x mayor que el estimado inicial.",
    },
    {
      icon: Users,
      title: "Equipos frustrados",
      description: "Desarrolladores desmotivados, stakeholders impacientes, y nadie sabe qué salió mal.",
    },
    {
      icon: AlertTriangle,
      title: "Arquitecturas fallidas",
      description: "Soluciones que no escalan, no se integran, o simplemente no resuelven el problema real.",
    },
  ];

  return (
    <section id="problema" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src="/images/problem-illustration.png"
                alt="El problema de implementar automatización sin guía"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-border"
              >
                <p className="text-3xl font-bold text-destructive">70%</p>
                <p className="text-sm text-muted-foreground">de proyectos de IA fallan</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-orange font-medium text-sm uppercase tracking-wider mb-4">
              El Problema
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              ¿Por qué fracasan la mayoría de proyectos de automatización?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              He visto el mismo patrón cientos de veces: empresas que invierten 
              tiempo y dinero en soluciones que nunca funcionan como esperaban. 
              El problema no es la tecnología, es la <strong className="text-foreground">falta de arquitectura correcta</strong> desde el inicio.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="bg-destructive/5 border border-destructive/10 rounded-xl p-4"
                >
                  <problem.icon className="w-6 h-6 text-destructive mb-2" />
                  <h4 className="font-medium text-foreground mb-1">{problem.title}</h4>
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
                </motion.div>
              ))}
            </div>

            <a
              href={WHOP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackInitiateCheckout('Problem Section')}
              className="btn-primary-gradient text-white font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center gap-2 relative z-10"
            >
              ¿Te suena familiar? Aprende a evitarlo
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
