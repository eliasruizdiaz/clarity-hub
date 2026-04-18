import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";

// Google Apps Script URL for storing quiz data
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwOe8CoGIJadRtti3OdShua4ljVSyjCrB8dXu7KXxyeb6hm-Yd71nchpk3qd0uLfqMg/exec";

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
  buttonOrigin?: string; // Track which button opened the quiz
}

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuántos empleados tiene tu empresa?",
    options: [
      { text: "Menos de 50", score: 1 },
      { text: "50-100", score: 2 },
      { text: "100-300", score: 3 },
      { text: "Más de 300", score: 4 },
    ],
  },
  {
    id: 2,
    question: "¿Cuántas horas semanales dedica tu equipo a tareas repetitivas?",
    options: [
      { text: "Menos de 5 horas", score: 1 },
      { text: "5-15 horas", score: 2 },
      { text: "15-30 horas", score: 3 },
      { text: "Más de 30 horas", score: 4 },
    ],
  },
  {
    id: 3,
    question: "¿Han intentado implementar automatización antes?",
    options: [
      { text: "Nunca", score: 1 },
      { text: "Sí, con resultados mixtos", score: 2 },
      { text: "Sí, pero falló", score: 3 },
      { text: "Sí, múltiples intentos fallidos", score: 4 },
    ],
  },
  {
    id: 4,
    question: "¿Cuál es tu presupuesto aproximado para automatización?",
    options: [
      { text: "Menos de $1,000/mes", score: 1 },
      { text: "$1,000-$5,000/mes", score: 2 },
      { text: "$5,000-$15,000/mes", score: 3 },
      { text: "Más de $15,000/mes", score: 4 },
    ],
  },
  {
    id: 5,
    question: "¿Qué tan urgente es resolver este problema?",
    options: [
      { text: "Explorando opciones", score: 1 },
      { text: "Planeando para este año", score: 2 },
      { text: "Necesito solución en 3 meses", score: 3 },
      { text: "Es crítico, necesito ayuda ya", score: 4 },
    ],
  },
  {
    id: 6,
    question: "¿Tienen equipo técnico interno?",
    options: [
      { text: "No tenemos", score: 1 },
      { text: "Equipo pequeño (1-3 personas)", score: 2 },
      { text: "Equipo mediano (4-10 personas)", score: 3 },
      { text: "Equipo grande (+10 personas)", score: 4 },
    ],
  },
  {
    id: 7,
    question: "¿Cuál es el principal dolor que quieres resolver?",
    options: [
      { text: "Reducir costos operativos", score: 2 },
      { text: "Mejorar experiencia del cliente", score: 3 },
      { text: "Escalar sin aumentar personal", score: 3 },
      { text: "Todos los anteriores", score: 4 },
    ],
  },
  {
    id: 8,
    question: "¿Qué sistemas usan actualmente?",
    options: [
      { text: "Excel/hojas de cálculo", score: 1 },
      { text: "CRM básico (HubSpot, Pipedrive)", score: 2 },
      { text: "ERP/sistemas enterprise", score: 3 },
      { text: "Múltiples sistemas sin integrar", score: 4 },
    ],
  },
  {
    id: 9,
    question: "¿Quién tomará la decisión final?",
    options: [
      { text: "Yo solo/a", score: 2 },
      { text: "Yo con mi equipo", score: 3 },
      { text: "Necesito aprobación de dirección", score: 3 },
      { text: "Soy el/la CEO o Director/a", score: 4 },
    ],
  },
  {
    id: 10,
    question: "¿Qué esperas de un consultor de automatización?",
    options: [
      { text: "Solo orientación y recursos", score: 1 },
      { text: "Un plan de acción claro", score: 2 },
      { text: "Arquitectura + acompañamiento", score: 3 },
      { text: "Solución completa supervisada", score: 4 },
    ],
  },
];

interface UserData {
  name: string;
  email: string;
  whatsapp: string;
}

type QuizStage = "questions" | "contact" | "result";

export default function Quiz({ isOpen, onClose, buttonOrigin = "Unknown" }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [stage, setStage] = useState<QuizStage>("questions");
  const [userData, setUserData] = useState<UserData>({ name: "", email: "", whatsapp: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate total score
      const total = newAnswers.reduce((sum, s) => sum + s, 0);
      setTotalScore(total);
      setStage("contact");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const getTierRecommendation = (score: number): { tier: number; name: string; description: string } => {
    if (score <= 18) {
      return {
        tier: 1,
        name: "Comunidad Clarity",
        description: "Perfecto para ti. Acceso a recursos, plantillas y comunidad de profesionales.",
      };
    } else if (score <= 28) {
      return {
        tier: 2,
        name: "Arquitectura Personalizada",
        description: "Necesitas un plan de acción claro y arquitectura diseñada para tu caso específico.",
      };
    } else {
      return {
        tier: 3,
        name: "Arquitectura + Supervisión",
        description: "Tu situación requiere acompañamiento completo para garantizar el éxito.",
      };
    }
  };

  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const tierInfo = getTierRecommendation(totalScore);
    
    const quizData = {
      name: userData.name,
      email: userData.email,
      whatsapp: userData.whatsapp || "",
      totalScore: totalScore,
      tier: `Tier ${tierInfo.tier}: ${tierInfo.name}`,
      answers: answers,
      buttonOrigin: buttonOrigin, // Track which button was clicked
    };

    try {
      // Send data to Google Sheets via Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quizData),
      });

      toast.success("¡Datos guardados correctamente!");
      setStage("result");
    } catch (error) {
      console.error("Error saving to Google Sheets:", error);
      toast.error("Error al guardar. Mostrando resultados de todas formas.");
      setStage("result");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPersonalityAnalysis = (score: number): string => {
    if (score <= 18) {
      return "Eres alguien que prefiere aprender y ejecutar por cuenta propia. Valoras la autonomía y tienes la capacidad de implementar soluciones con la guía correcta. No necesitas que te tomen de la mano, solo necesitas el mapa correcto.";
    } else if (score <= 28) {
      return "Tienes claro que necesitas ayuda experta, pero también quieres entender el 'por qué' detrás de cada decisión. Buscas un socio estratégico que diseñe la solución, no solo alguien que ejecute órdenes. Tu empresa está en un punto de inflexión donde las decisiones de hoy definirán los próximos años.";
    } else {
      return "Lideras una operación compleja donde los errores cuestan caro. Has visto proyectos fallar antes y sabes que la diferencia entre éxito y fracaso está en la supervisión experta. No tienes tiempo para experimentos - necesitas certeza y un experto que se responsabilice del resultado.";
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setStage("questions");
    setUserData({ name: "", email: "", whatsapp: "" });
    setTotalScore(0);
    onClose();
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={resetQuiz}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center">
            {stage === "questions" && "Diagnóstico de Automatización"}
            {stage === "contact" && "¡Casi listo!"}
            {stage === "result" && "Tu Diagnóstico Personalizado"}
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {stage === "questions" && (
            <motion.div
              key="questions"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="py-4"
            >
              <div className="mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Pregunta {currentQuestion + 1} de {questions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-6">
                  {questions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleAnswer(option.score)}
                      className="w-full text-left p-4 rounded-xl border-2 border-border hover:border-orange hover:bg-orange/5 transition-all duration-200 group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium group-hover:bg-orange group-hover:text-white transition-colors">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span>{option.text}</span>
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {currentQuestion > 0 && (
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Anterior
                </Button>
              )}
            </motion.div>
          )}

          {stage === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="py-4"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-forest" />
                </div>
                <p className="text-muted-foreground">
                  Hemos analizado tus respuestas. Ingresa tus datos para ver tu diagnóstico personalizado.
                </p>
              </div>

              <form onSubmit={handleSubmitContact} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    required
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email corporativo *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp (opcional)</Label>
                  <Input
                    id="whatsapp"
                    value={userData.whatsapp}
                    onChange={(e) => setUserData({ ...userData, whatsapp: e.target.value })}
                    placeholder="+1 234 567 8900"
                  />
                  <p className="text-xs text-muted-foreground">
                    Solo para enviarte el checklist de automatización
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary-gradient text-white py-6 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Analizando...
                    </>
                  ) : (
                    <>
                      Ver mi diagnóstico
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          )}

          {stage === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-4"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-mint/50 text-forest px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Puntuación: {totalScore}/40
                </div>
              </div>

              {/* Personality Analysis */}
              <div className="bg-gradient-to-br from-forest/5 to-orange/5 rounded-2xl p-6 mb-6">
                <h4 className="font-semibold text-lg mb-3 text-forest">
                  {userData.name.split(" ")[0]}, esto es lo que veo en ti:
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  {getPersonalityAnalysis(totalScore)}
                </p>
              </div>

              {/* Tier Recommendation */}
              <div className="border-2 border-orange rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xl">
                      {getTierRecommendation(totalScore).tier}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      Recomendación: {getTierRecommendation(totalScore).name}
                    </h4>
                    <p className="text-muted-foreground">
                      {getTierRecommendation(totalScore).description}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA based on tier */}
              {getTierRecommendation(totalScore).tier === 1 ? (
                <div className="space-y-3">
                  <Button
                    onClick={() => { const el = document.getElementById('servicios'); if (el) { el.scrollIntoView({ behavior: 'smooth' }); } }}
                    className="w-full bg-forest hover:bg-forest/90 text-white py-6 text-lg"
                  >Unirme a la Comunidad - $100/mes</Button>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    Acceso inmediato a recursos, plantillas y comunidad
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <Button 
                    onClick={() => window.open('https://wa.me/595982120861?text=Hola%20Elías,%20completé%20el%20quiz%20en%20tu%20web%20y%20quiero%20agendar%20una%20llamada', '_blank' )}
                    className="w-full btn-primary-gradient text-white py-6 text-lg"
                  >
                    Agendar llamada de diagnóstico gratuita
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    30 minutos para analizar tu caso específico
                  </p>
                </div>
              )}

              {/* Lead Magnet */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-4 bg-mint/30 rounded-xl p-4">
                  <div className="w-12 h-12 bg-forest rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">
                      📥 Checklist enviado a {userData.email}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      "Cómo priorizar qué automatizar primero"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
