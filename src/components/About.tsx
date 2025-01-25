export function About() {
  return (
    <div className="about-container" id="about">
      <h1 className="about-title md:text-5xl sm:text-4xl text-center">
        Sobre mi
      </h1>

      <div className="about-content">
        <div className="about-items">
          <div className="about-item">
            <h1 className="about-item-title">1</h1>
            <span>Año de Experiencia</span>
          </div>
          <div className="about-item">
            <h1 className="about-item-title">Inglés</h1>
            <span>Nivel Intermedio</span>
          </div>
        </div>

        <div className="about-desc">
          <p>
            Comprometido con la creación de interfaces y experiencias digitales
            que conecten con los usuarios y resuelvan problemas de forma
            efectiva. Mi enfoque se basa en la experiencia de usuario, la
            simplicidad y la eficiencia en la diseño.
          </p>
          <p>
            Me formé como Analista Programador, especializado en el Frontend en
            Santiago de Chile. Estudié en Duoc UC, donde aprendi las distintas
            herramientas y tecnologías necesarias para desarrollar aplicaciones
            web.{" "}
          </p>
          <p>
            Actualmente, complemento mi formación perfeccionando mis habilidades
            en diseño, desarrollo y gestión de proyectos. Sigo formandome en el
            desarrollo a través de Midudev, Devtalles, Cursos en Udemy y otros
            creadores de contenido en línea.
          </p>
          <p>
            Me apasiona el deporte, práctique baloncesto de joven y actualmente
            trato de mantener una vida saludable haciendo deporte. Me gusta el
            anime, especialmente One Piece. Y mi pasión por la tecnología
            siempre estuvo pero no fue hasta que tome el paso para ser
            programador que me di cuenta el cambio que puede ofrecer al mundo y
            quiero formar parte de ello.
          </p>
        </div>
      </div>
    </div>
  );
}
