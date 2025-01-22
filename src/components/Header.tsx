export function Header() {
  return (
    <div className="header">

      <div className="prueba2">
        <span className="available-card">Disponible</span>
        <div className="header-name md:text-6xl sm:text-4xl">
          Omar Hernández
        </div>
        <div className="career-title md:text-3xl sm:text-xl">
          Desarrollador Frontend
        </div>
        <p className="header-description">
          Con <b>1 año de experiencia</b> creando soluciones tecnológicas para
          empresas y proyectos personales. Mi meta es crear un{" "}
          <b>impacto positivo</b> en la industria a través de mi trabajo, por
          eso me esfuerzo todos los días en mejorar mi habilidad y
          conocimientos.
        </p>
      </div>
      <div className="prueba">
        <img
          src="https://avatars.githubusercontent.com/u/72213827?v=4"
          alt="Omar Hernández"
          className="header-image"
        />
      </div>
    </div>
  );
}
