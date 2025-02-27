import { Github } from "../assets/svg/header/Github";
import { Linkedin } from "../assets/svg/header/Linkedin";
import { RightArrow } from "../assets/svg/navbar/RightArrow";

export function Header() {
  return (
    <header className="">
      <div className="">
        <span className="">
          Disponible
        </span>
        <div className="md:text-6xl sm:text-4xl text-[#F5E8C7]">
          Omar Hernández
        </div>
        <div className="md:text-3xl sm:text-xl text-[#F2A365]">
          Desarrollador Frontend
        </div>
        <p className="header-description md:text-xl sm:text-xl">
          Con <b>1 año de experiencia</b> creando soluciones tecnológicas para
          empresas y proyectos personales. Mi meta es crear un{" "}
          <b>impacto positivo</b> en la industria a través de mi trabajo, por
          eso me esfuerzo todos los días en mejorar mi habilidad y
          conocimientos.
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/omar-alejandro-hernandez-diaz/"
            target="_blank"
            className="header-icon"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/omar15hr"
            target="_blank"
            className="header-icon"
          >
            <Github />
          </a>
          <a
            href="https://docs.google.com/document/d/1-udIQ48xSG2Rp4eVXnlHtnHCdsZ7bhSnGluSsoT-iSE/edit?usp=sharing"
            className="cv-button bg-[#ffd166]"
            target="_blank"
          >
            Curriculum Vitae
            <RightArrow />
          </a>
        </div>
      </div>
      <div className="header-image-container sm:mb-14">
        <img
          src="https://avatars.githubusercontent.com/u/72213827?v=4"
          alt="Omar Hernández"
          className="header-image"
        />
      </div>
    </header>
  );
}
