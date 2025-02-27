import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
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
        hasBackground ? "navbar-move" : "bg-transparent"
      }`}
    >
      <div className="md:flex nav-container">
        <a
          href="#inicio"
          className="nav-links"
          onClick={() => scrollToSection("projects")}
        >
          Mis proyectos
        </a>
        <a
          href="#servicios"
          className="nav-links"
          onClick={() => scrollToSection("experience")}
        >
          Experiencia
        </a>
        <a
          href="#contacto"
          className="nav-links"
          onClick={() => scrollToSection("about")}
        >
          Sobre mí
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
