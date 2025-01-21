import { useState } from "react";
import { NavbarToggle } from "../../assets/svg/NavbarToogle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-lg font-bold">OH</div>

        <div className="hidden md:flex space-x-6">
          <a href="#inicio" className="nav-links">
            Mis proyectos
          </a>
          <a href="#servicios" className="nav-links">
            Experiencia
          </a>
          <a href="#contacto" className="nav-links">
            Sobre mi
          </a>
        </div>

        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <NavbarToggle isOpen={isOpen} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <a href="#inicio" className="block px-4 py-2 nav-links">
            Mis proyectos
          </a>
          <a href="#servicios" className="block px-4 py-2 nav-links">
            Experiencia
          </a>
          <a href="#contacto" className="block px-4 py-2 nav-links">
            Sobre mi
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
