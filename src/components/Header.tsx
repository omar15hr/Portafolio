import { Github, Linkedin } from "../assets/svg/Icons";
import { RightArrow } from "../assets/svg/navbar/RightArrow";

const socials = [
  { name: 'Github', href: 'https://github.com/omar15hr', Component: Github, size: 30 },
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/omar-alejandro-hernandez-diaz/', Component: Linkedin, size: 30 },
];

export function Header() {
  return (
    <div className="flex flex-col gap-4 mt-20 p-5">
        <img
          src="https://avatars.githubusercontent.com/u/72213827?v=4"
          alt="Omar Hernández"
          className="w-24 h-24 rounded-full"
        />
      <div className="flex flex-col gap-2">
        <div className="md:text-6xl sm:text-4xl text-xl text-[#F5E8C7]">
          Omar Hernández
        </div>
        <div className="md:text-3xl sm:text-xl text-[#F2A365]">
          Desarrollador Frontend
        </div>
        <p className="md:text-xl sm:text-xl text-[#bbb197]">
          Con <b>1 año de experiencia</b> creando soluciones tecnológicas para
          empresas y proyectos personales. Mi meta es crear un{" "}
          <b>impacto positivo</b> en la industria a través de mi trabajo, por
          eso me esfuerzo todos los días en mejorar mi habilidad y
          conocimientos.
        </p>
        <div className="flex flex-row gap-2 items-center">
          {socials.map(({ href, Component }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              className="header-icon"
            >
              <Component size={socials[index].size} />
            </a>
          ))}
          <a
            href="https://docs.google.com/document/d/1-udIQ48xSG2Rp4eVXnlHtnHCdsZ7bhSnGluSsoT-iSE/edit?usp=sharing"
            className="bg-[#E76F51] hover:bg-[#ffd166] flex flex-row gap-2 p-1 rounded-full items-center w-56 justify-center"
            target="_blank"
          >
            Curriculum Vitae
            <RightArrow />
          </a>
        </div>
      </div>
    </div>
  );
}
