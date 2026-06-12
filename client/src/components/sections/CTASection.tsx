import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { trackSchedule, trackContact } from "@/lib/metaTracking";
import { CALENDAR_URL, EMAIL, EMAIL_URL, PHONE_DISPLAY, WA_GENERAL } from "@/lib/links";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-20 md:py-28 bg-cream relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-20 w-72 h-72 bg-forest/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-orange/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            El primer paso es <span className="text-forest">30 minutos</span>. Lo que sigue, lo decidís vos.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Sin pitch. Sin obligación. Hablamos 30 minutos, y si tiene sentido, arrancamos con el ROI Scan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Agendá */}
          <motion.a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSchedule("CTA Section")}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl border-2 border-orange p-8 text-center shadow-lg hover:-translate-y-1 transition-transform"
          >
            <div className="w-14 h-14 rounded-xl bg-orange/10 grid place-items-center mx-auto mb-4">
              <Calendar className="w-7 h-7 text-orange" />
            </div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-orange">Agendá</span>
            <p className="text-lg font-bold text-foreground mt-1">30 min de Discovery · gratis</p>
            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground mt-2">
              calendar.app.google <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </motion.a>

          {/* Email */}
          <motion.a
            href={EMAIL_URL}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-2xl border border-border p-8 text-center shadow-sm hover:-translate-y-1 hover:border-forest/30 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-forest/10 grid place-items-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-forest" />
            </div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-forest">Escribinos</span>
            <p className="text-lg font-bold text-foreground mt-1">Por email</p>
            <span className="text-sm text-muted-foreground mt-2 block">{EMAIL}</span>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContact("WhatsApp - Cierre", 0)}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-2xl border border-border p-8 text-center shadow-sm hover:-translate-y-1 hover:border-forest/30 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-forest/10 grid place-items-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-forest" />
            </div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-forest">Charlemos</span>
            <p className="text-lg font-bold text-foreground mt-1">Por WhatsApp</p>
            <span className="text-sm text-muted-foreground mt-2 block">{PHONE_DISPLAY}</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
