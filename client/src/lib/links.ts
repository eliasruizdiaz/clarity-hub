// Central contact + CTA links for the ROI Scan landing.
// Keeping these in one place so every section/CTA stays consistent.

export const CALENDAR_URL = "https://calendar.app.google/2LhqL441uzrciiw8A";
export const EMAIL = "elias@xp.com.py";
export const EMAIL_URL = `mailto:${EMAIL}`;
export const PHONE_DISPLAY = "+595 982 120 861";

const WA_NUMBER = "595982120861";
export const wa = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

// Pre-filled WhatsApp links per offer
export const WA_FORMACIONES = wa(
  "Hola! Me interesan las formaciones privadas de Clarity Hub."
);
export const WA_ROI_SCAN = wa("Hola! Me interesa el ROI Scan.");
export const WA_TRANSFORMATION = wa(
  "Hola! Me interesa Optimization + Transformation."
);
export const WA_GENERAL = wa("Hola! Quiero hablar sobre automatizar mis procesos.");
