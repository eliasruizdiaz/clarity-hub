import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Lightbulb, Map, Shield } from "lucide-react";

interface SolutionSectionProps {
  onOpenQuiz: (origin: string) => void;
}

export default function SolutionSection({ onOpenQuiz }: SolutionSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      icon: Map,
      title: "Arquitectura clara desde el día 1",
      description: "Un mapa detallado de qué construir, en qué orden, y por qué.",
    },
    {
      icon: Lightbulb,
      title: "Decisiones basadas en experiencia",
      description: "13+ años viendo qué funciona y qué no en empresas reales.",
    },
    {
      icon: Shield,
      title: "Evitar errores costosos",
      description: "Identifico los riesgos antes de que se conviertan en problemas.",
    },
    {
      icon: CheckCircle2,
      title: "Implementación 3-6x más rápida",
      description: "Porque no pierdes tiempo en caminos equivocados.",
    },
  ];

  return (
    <section id="solucion" className="py-20 md:py-28 bg-mint/20 relative" ref={ref}>
      {/* Wave divider top */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container pt-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-forest font-medium text-sm uppercase tracking-wider mb-4">
              La Solución
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Un arquitecto que diseña el camino{" "}
              <span className="gradient-text">antes de construir</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              No soy un implementador que cobra por hora. Soy un <strong className="text-foreground">arquitecto de soluciones</strong> que 
              te dice exactamente qué construir, cómo hacerlo, y te acompaña 
              para asegurar que funcione.
            </p>

            <div className="space-y-4 mb-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-border/50"
                >
                  <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center shrink-0">
                    <solution.icon className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{solution.title}</h4>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => onOpenQuiz("Solution Section")}
              className="btn-primary-gradient text-white font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center gap-2"
            >
              Quiero mi arquitectura personalizada
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/images/solution-illustration.png"
                alt="Solución de automatización clara y organizada"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Floating benefit card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-border"
              >
                <p className="text-3xl font-bold text-forest">3-6x</p>
                <p className="text-sm text-muted-foreground">más rápido</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
