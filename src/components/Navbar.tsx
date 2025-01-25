import { useState, useEffect } from "react";
import { NavbarToggle } from "../assets/svg/navbar/NavbarToogle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasBackground(true);
      } else {
        setHasBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar sticky top-0 z-50 transition-colors duration-300 ${
        hasBackground ? "bg-[#d6ccc2] shadow-lg" : "bg-transparent"
      }`}
    >
        <div className="text-lg font-bold title-logo">OH</div>

        <div className="hidden md:flex space-x-6 nav-container">
          <a href="#inicio" className="nav-links" onClick={() => scrollToSection("projects")}>
            Mis proyectos
          </a>
          <a href="#servicios" className="nav-links" onClick={() => scrollToSection("experience")}>
            Experiencia
          </a>
          <a href="#contacto" className="nav-links" onClick={() => scrollToSection("about")}>
            Sobre mí
          </a>
        </div>

        <button className="toogle-button-nav md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <NavbarToggle isOpen={isOpen} />
        </button>

      {isOpen && (
        <div className="md:hidden">
          <a href="#inicio" className="block px-4 py-2 nav-links">
            Mis proyectos
          </a>
          <a href="#servicios" className="block px-4 py-2 nav-links">
            Experiencia
          </a>
          <a href="#contacto" className="block px-4 py-2 nav-links">
            Sobre mí
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
