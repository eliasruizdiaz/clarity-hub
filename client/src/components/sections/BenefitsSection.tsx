import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, TrendingUp, Clock, Shield, Users } from "lucide-react";

export default function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Zap,
      title: "Implementación acelerada",
      description: "Reduce el tiempo de implementación de 12 meses a 2-4 meses con la arquitectura correcta.",
      stat: "3-6x",
      statLabel: "más rápido",
    },
    {
      icon: Target,
      title: "ROI garantizado",
      description: "Cada decisión está orientada a maximizar el retorno de tu inversión en automatización.",
      stat: "300%",
      statLabel: "ROI promedio",
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad real",
      description: "Arquitecturas diseñadas para crecer con tu empresa, no para ser reemplazadas en 2 años.",
      stat: "10x",
      statLabel: "capacidad de escala",
    },
    {
      icon: Clock,
      title: "Tiempo recuperado",
      description: "Tu equipo deja de hacer tareas repetitivas y se enfoca en lo que realmente importa.",
      stat: "40h",
      statLabel: "semanales ahorradas",
    },
    {
      icon: Shield,
      title: "Riesgo minimizado",
      description: "Identifico problemas potenciales antes de que se conviertan en costosos errores.",
      stat: "90%",
      statLabel: "menos errores",
    },
    {
      icon: Users,
      title: "Equipo empoderado",
      description: "Transferencia de conocimiento para que tu equipo pueda mantener y evolucionar la solución.",
      stat: "100%",
      statLabel: "autonomía",
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-orange font-medium text-sm uppercase tracking-wider mb-4">
            Beneficios
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Lo que obtienes al trabajar conmigo
          </h2>
          <p className="text-lg text-muted-foreground">
            No solo diseño arquitecturas. Te acompaño para asegurar que cada 
            inversión en automatización genere resultados medibles.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group bg-white rounded-2xl p-6 border border-border hover:border-forest/30 hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center group-hover:bg-forest group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-forest group-hover:text-white transition-colors" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange">{benefit.stat}</p>
                  <p className="text-xs text-muted-foreground">{benefit.statLabel}</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
