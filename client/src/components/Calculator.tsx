import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { motion, AnimatePresence } from "framer-motion";

const WHOP_URL = "https://whop.com/clhub/clarity-hub-premium-72/";

export default function Calculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [teamMembers, setTeamMembers] = useState(5);
  const [costPerHour, setCostPerHour] = useState(25);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Calculations
  const weeklyLoss = hoursPerWeek * teamMembers * costPerHour;
  const monthlyLoss = weeklyLoss * 4;
  const yearlyLoss = monthlyLoss * 12;

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-border/50">
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
          Calculadora de Pérdidas
        </h3>
        <p className="text-muted-foreground text-sm md:text-base">
          Descubre cuánto dinero estás perdiendo por no automatizar
        </p>
      </div>

      <div className="space-y-8">
        {/* Hours per week slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-foreground">
              Horas semanales en tareas manuales
            </label>
            <span className="text-lg font-semibold text-orange">{hoursPerWeek}h</span>
          </div>
          <Slider
            value={[hoursPerWeek]}
            onValueChange={(value) => setHoursPerWeek(value[0])}
            min={1}
            max={40}
            step={1}
            className="[&_[role=slider]]:bg-orange [&_[role=slider]]:border-orange [&_.bg-primary]:bg-orange"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1h</span>
            <span>40h</span>
          </div>
        </div>

        {/* Team members slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-foreground">
              Personas afectadas en tu equipo
            </label>
            <span className="text-lg font-semibold text-orange">{teamMembers}</span>
          </div>
          <Slider
            value={[teamMembers]}
            onValueChange={(value) => setTeamMembers(value[0])}
            min={1}
            max={50}
            step={1}
            className="[&_[role=slider]]:bg-orange [&_[role=slider]]:border-orange [&_.bg-primary]:bg-orange"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1</span>
            <span>50</span>
          </div>
        </div>

        {/* Cost per hour slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-foreground">
              Costo promedio por hora (USD)
            </label>
            <span className="text-lg font-semibold text-orange">${costPerHour}</span>
          </div>
          <Slider
            value={[costPerHour]}
            onValueChange={(value) => setCostPerHour(value[0])}
            min={10}
            max={100}
            step={5}
            className="[&_[role=slider]]:bg-orange [&_[role=slider]]:border-orange [&_.bg-primary]:bg-orange"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$10</span>
            <span>$100</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 pt-8 border-t border-border"
          >
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground mb-2">Estás perdiendo aproximadamente:</p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 md:p-4 bg-mint/30 rounded-xl">
                <p className="text-xs text-muted-foreground mb-1">Semanal</p>
                <motion.p
                  key={weeklyLoss}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-base md:text-lg font-bold text-forest"
                >
                  {formatCurrency(weeklyLoss)}
                </motion.p>
              </div>
              <div className="text-center p-3 md:p-4 bg-orange/10 rounded-xl">
                <p className="text-xs text-muted-foreground mb-1">Mensual</p>
                <motion.p
                  key={monthlyLoss}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-base md:text-lg font-bold text-orange"
                >
                  {formatCurrency(monthlyLoss)}
                </motion.p>
              </div>
              <div className="text-center p-3 md:p-4 bg-destructive/10 rounded-xl">
                <p className="text-xs text-muted-foreground mb-1">Anual</p>
                <motion.p
                  key={yearlyLoss}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-base md:text-xl font-bold text-destructive"
                >
                  {formatCurrency(yearlyLoss)}
                </motion.p>
              </div>
            </div>

            {yearlyLoss > 50000 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 mb-6"
              >
                <p className="text-sm text-center text-destructive font-medium">
                  ⚠️ Estás perdiendo más de {formatCurrency(yearlyLoss)} al año. 
                  Eso es el salario de {Math.round(yearlyLoss / 40000)} empleados.
                </p>
              </motion.div>
            )}

            <a
              href={WHOP_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full btn-primary-gradient text-white font-semibold py-4 px-6 rounded-xl text-lg text-center block"
            >
              Descubre cómo recuperar ese dinero →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
