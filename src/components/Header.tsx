import { Github } from "../assets/svg/header/Github";
import { Gmail } from "../assets/svg/header/Gmail";
import { Linkedin } from "../assets/svg/header/Linkedin";
import { RightArrow } from "../assets/svg/navbar/RightArrow";

export function Header() {
  return (
    <header className="header">

      <div className="header-description-container">
        <span className="available-card">
          <span className="circle animate__animated animate__heartBeat animate__repeat-2"></span>
          Disponible
        </span>
        <div className="header-name md:text-6xl sm:text-4xl">
          Omar Hernández
        </div>
        <div className="career-title md:text-3xl sm:text-xl">
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
            href="mailto:omarhrn@gmail.com"
            target="_blank"
            className="header-icon"
          >
              <Gmail />
          </a>
          <a 
            href="https://docs.google.com/document/d/1-udIQ48xSG2Rp4eVXnlHtnHCdsZ7bhSnGluSsoT-iSE/edit?usp=sharing" className="cv-button" target="_blank">Curriculum Vitae<RightArrow /></a>
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
