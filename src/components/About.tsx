export function About() {
  return (
    <section className="p-8 max-w-screen-xl mx-auto" id="about">
      <h1 className="about-title mb-8 text-3xl sm:text-4xl md:text-5xl text-center">
        Sobre mi
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 text-[#b8b7b7] ">
        <div className="about-items items-center justify-center">
          <div className="about-item">
            <h1 className="about-item-title">1</h1>
            <span>Año de Experiencia</span>
          </div>
          <div className="about-item">
            <h1 className="about-item-title">Inglés</h1>
            <span>Nivel Intermedio</span>
          </div>
        </div>

        <div style={{ boxShadow: '1px 1px 10px rgba(255, 251, 251, 0.308)' }} className="about-desc bg-[#334b5370] p-8 rounded-lg shadow-lg">
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
    </section>
  );
}
