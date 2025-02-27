import { useState } from "react";
import { useScroll } from "../hooks/useScroll";
import { Dialog } from "@headlessui/react";
import { Avatar } from "../assets/svg/Icons";

const LINKS = [
  { href: "#misproyectos", section: "projects", name: "Mis Proyectos" },
  { href: "#experiencia", section: "experience", name: "Experiencia" },
  { href: "#education", section: "education", name: "Educación" },
  { href: "#contacto", section: "about", name: "Sobre mi" },
];

function Navbar() {
  const { hasBackground } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const moveStyle =
    "bg-black bg-opacity-60 rounded-xl backdrop-blur-lg border-1 opacity-80 text-[#F5E8C7]";

  return (
    <header className="sticky inset-x-0 top-0 z-40 bg-black bg-opacity-30 rounded-xl backdrop-blur-lg text-white">
      <nav
        className={`flex flex-row items-center justify-center p-6 top-0 z-50 transition-colors duration-300 ${
          hasBackground ? moveStyle : "bg-transparent"
        }`}
      >
        {/* Botón de menú para móviles */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <Avatar size={20} />
          </button>
        </div>

        {/* Links del navbar en pantallas grandes */}
        <div className="hidden lg:flex lg:gap-x-12">
          {LINKS.map((link) => (
            <a
              key={link.section}
              href={link.href}
              className="text-sm font-semibold text-white hover:text-[#F2A365] transition-all"
              onClick={() => scrollToSection(link.section)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Menú móvil (Dialog) */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <Avatar size={20} />
            </button>
          </div>

          {/* Links del menú móvil */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => {
                      scrollToSection(link.section);
                      setMobileMenuOpen(false); // Cierra el menú móvil al hacer clic
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;
