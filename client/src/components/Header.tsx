import { useState, useEffect } from "react";

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
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center h-16 md:h-20">
          <div className="h-30 w-[480px] overflow-hidden flex items-center">
            <img
              src="/images/logo_clarity.png"
              alt="Clarity Hub"
              className="w-full h-full object-contain object-left"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
