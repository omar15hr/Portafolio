import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Baseline, X } from "../assets/svg/Icons";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const LINKS = [
    { name: 'Stack', section: 'stack' },
    { name: 'Mis Proyectos', section: 'projects' },
    { name: 'Experiencia', section: 'experience' },
    { name: 'Educación', section: 'education' },
    { name: 'Sobre mi', section: 'about' },
  ];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-black bg-opacity-30 rounded-xl backdrop-blur-lg">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#F5E8C7]"
          >
            <Baseline size={24} />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 justify-center w-full">
          {LINKS.map((item) => (
            <a
              key={item.name}
              href={`#${item.section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.section);
              }}
              className="text-sm/6 font-semibold text-[#F5E8C7] hover:text-[#F2A365]"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black bg-opacity-30 rounded-xl backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <X size={24} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.section);
                    }}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-[#F2A365]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Navbar;