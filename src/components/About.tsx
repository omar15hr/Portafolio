import { Avatar } from "../assets/svg/Icons";

export function About() {
  return (
    <section className="flex flex-col gap-3 mt-20 mb-10" id="about">
      <div className="flex flex-row gap-2 items-center justify-center text-[#F5E8C7] mb-8">
        <Avatar size={50} />
        <h1 className="text-xl md:text-4xl sm:text-2xl">
          Sobre mi
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 text-[#bbb197]">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div style={{ boxShadow: "1px 1px 10px rgba(255, 251, 251, 0.308)" }} className="flex flex-col items-center justify-center bg-[#3d3d3d] shadow-xl bg-opacity-30 rounded-xl backdrop-blur-lg p-5">
            <h1 className="text-xl md:text-4xl sm:text-2xl font-bold text-[#F2A365]">1</h1>
            <span>Año de Experiencia</span>
          </div>
          <div style={{ boxShadow: "1px 1px 10px rgba(255, 251, 251, 0.308)" }} className="flex flex-col items-center justify-center bg-[#3d3d3d] shadow-xl bg-opacity-30 rounded-xl backdrop-blur-lg p-5">
            <h1 className="text-xl md:text-4xl sm:text-2xl font-bold text-[#F2A365]">Inglés</h1>
            <span>Nivel Intermedio</span>
          </div>
        </div>

        <div
          style={{ boxShadow: "1px 1px 10px rgba(255, 251, 251, 0.308)" }}
          className="flex flex-col gap-5 bg-[#3d3d3d] shadow-xl bg-opacity-30 rounded-xl backdrop-blur-lg p-5 text-[#bbb197]"
        >
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
