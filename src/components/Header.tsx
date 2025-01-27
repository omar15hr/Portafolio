import { Github } from "../assets/svg/header/Github";
import { Gmail } from "../assets/svg/header/Gmail";
import { Linkedin } from "../assets/svg/header/Linkedin";
import { RightArrow } from "../assets/svg/navbar/RightArrow";

export function Header() {
  return (
    <div className="header">

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
          <a href=""><Linkedin /></a>
          <a href=""><Github /></a>
          <a href=""><Gmail /></a>
          <a href="" className="cv-button">Curriculum Vitae<RightArrow /></a>
        </div>
      </div>
      <div className="header-image-container sm:mb-14">
        <img
          src="https://avatars.githubusercontent.com/u/72213827?v=4"
          alt="Omar Hernández"
          className="header-image"
        />
      </div>
    </div>
  );
}
