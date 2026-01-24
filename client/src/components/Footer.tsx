import { Instagram, Youtube, Linkedin } from "lucide-react";

// TikTok icon component (not available in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/eliasruizdiaz_oficial/",
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      url: "https://www.tiktok.com/@eliasruizdiaz_oficial",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@eliasruizdiazm",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/eliasruizdiaz/",
    },
  ];

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
                <img 
                  src="/images/elias-footer.jpg" 
                  alt="Elías Ruiz Díaz" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-semibold text-xl block">
                  Clarity<span style={{ color: '#D94E25' }}>Hub</span>
                </span>
                <span className="text-white/60 text-sm">por Elías Ruiz Díaz</span>
              </div>
            </div>
            <p className="text-white/60 max-w-md mb-4">
              Ayudo a empresas medianas y grandes a implementar IA y automatización 
              3-6x más rápido, evitando arquitecturas fallidas.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange hover:scale-110 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#problema" className="text-white/60 hover:text-white transition-colors">
                  El Problema
                </a>
              </li>
              <li>
                <a href="#solucion" className="text-white/60 hover:text-white transition-colors">
                  Solución
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-white/60 hover:text-white transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#planes" className="text-white/60 hover:text-white transition-colors">
                  Planes
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/60 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <a href="mailto:elias@xp.com.py" className="hover:text-white transition-colors">
                  elias@xp.com.py
                </a>
              </li>
              <li>Paraguay / España / UK</li>
              <li>Consultoría remota global</li>
            </ul>
            
            {/* Social proof mini */}
            {/* <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-white/40 mb-2">Sígueme en redes:</p>
              <p className="text-sm text-white/60">
                +50K seguidores en redes sociales
              </p>
            </div> */}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Clarity Hub by Elías Ruiz Díaz. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
