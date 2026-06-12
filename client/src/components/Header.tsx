import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { trackSchedule } from "@/lib/metaTracking";
import { CALENDAR_URL } from "@/lib/links";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="h-12 md:h-14 max-w-[200px] md:max-w-[260px] overflow-hidden flex items-center">
            <img
              src="/images/logo_clarity.png"
              alt="Clarity Hub"
              className="w-full h-full object-contain object-left"
            />
          </a>

          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSchedule("Header")}
            className="btn-primary-gradient text-white font-semibold py-2.5 px-4 md:px-5 rounded-xl text-sm md:text-base inline-flex items-center gap-2 shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Agendá 30 min gratis</span>
            <span className="sm:hidden">Agendá gratis</span>
          </a>
        </div>
      </div>
    </header>
  );
}
