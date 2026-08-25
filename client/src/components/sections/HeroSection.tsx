import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import BrechaChart from "@/components/BrechaChart";
import { trackSchedule } from "@/lib/metaTracking";
import { CALENDAR_URL } from "@/lib/links";

export default function HeroSection() {
  return (
    <section className="relative pt-40 md:pt-44 pb-16 overflow-hidden">
      {/* Background with organic shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cream" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-forest/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-mint/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="container">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-[1.1] tracking-tight">
            Escalá <span className="text-orange">automatizando</span> los procesos que hoy te obligan a{" "}
            <span className="text-forest">contratar más</span>. Y operá <span className="text-forest">sin caos.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Auditamos, rediseñamos y automatizamos los procesos con más ROI para que escales con{" "}
            <span className="text-foreground font-medium">tranquilidad, control y seguridad</span>.
          </p>

          {/* CTAs */}
          <div className="flex justify-center mb-4">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSchedule("Hero")}
              className="btn-primary-gradient text-white font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Agendá 30 min gratis
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Escuchamos tus puntos de dolor y, si tiene sentido para tu operación, arrancamos con un ROI Scan.
          </p>
        </motion.div>

        {/* La Brecha */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-14 md:mt-16"
        >
          <BrechaChart />
        </motion.div>
      </div>
    </section>
  );
}
