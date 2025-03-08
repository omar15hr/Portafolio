import {
  Briefcase,
  MySQL,
  Php,
  Css,
  Express,
  Git,
  GithubStack,
  Html,
  JavaScript,
  Nextjs,
  PostgreSQL,
  ReactSVG,
  Tailwind,
  TypeScript,
} from '@/app/components/Icons';
import { JSX } from 'react';

const experience = [
  {
    date: "Nov, 2024 - Feb, 2025",
    company: "Fortius",
    position: "Desarrollador Frontend",
    workDone: [
      "Diseñe landing page del sitio web utilizando HTML, CSS y JavaScript.",
      "Añadí funcionalidades para mejorar la interfaz de usuario con carruseles, modales y botones.",
      "Desarrollé la lógica del carrito de compras y la utilización de cupones.",
    ],
    stack: ["React", "JavaScript", "CSS", "HTML"],
  },
  {
    date: "Ago, 2024 - Nov, 2024",
    company: "Dyatec",
    position: "Desarrollador Frontend",
    workDone: [
      "Diseñe el landing page del sitio web de la OTEC en la municipalidad de La Florida. Enfocado a las noticias y cursos que ofrecen. Utilicé CSS y HTML. ",
      "Desarrollé un bloque de Moodle, que permite a los administradores del sitio obtener información sobre el status de los alumnos y sus cursos, filtrando en la base de datos los usuarios ingresando su nombre de usuario. Utilicé PHP, MySQL, JavaScript, HTML y CSS.",
      "Realicé migraciones de sitios web entre servidores, realizando backups y actualizando versiones de la base de datos.",
      "Modifiqué plantillas de temas para la apariencia del sitio web utilizando CSS para mejorar la interfaz de usuario.",
    ],
    stack: ["PHP", "JavaScript", "CSS", "HTML", "MySQL"],
  },
];

const stackIcons: Record<string, JSX.Element> = {
  React: <ReactSVG size={24} />,
  TypeScript: <TypeScript size={24} />,
  CSS: <Css size={24} />,
  HTML: <Html size={24} />,
  "Next Js": <Nextjs size={24} props={{ fill: "#fff" }} />,
  TailwindCSS: <Tailwind size={24} />,
  PostgreSQL: <PostgreSQL size={24} />,
  Github: <GithubStack size={24} />,
  Git: <Git size={24} />,
  Express: <Express size={24} />,
  JavaScript: <JavaScript size={24} />,
  MySQL: <MySQL size={24} />,
  Php: <Php size={24} />,
};

function Experience() {
  return (
    <section
      className="flex flex-col gap-3 mt-20 text-[#F5E8C7]"
      id="experience"
    >
      <div className="flex flex-row gap-2 items-center justify-center title-exp text-3xl sm:text-4xl md:text-5xl">
        <Briefcase size={50} />
        <span className="text-xl md:text-4xl sm:text-2xl">Experiencia</span>
      </div>
      <p className="md:text-xl sm:text-xl text-[#bbb197] text-center p-5">
        Experiencia profesional colaborando con empresas reales y desarrollando
        proyectos propios.
      </p>

      <div className="flex flex-col gap-5 w-full max-w-5xl mx-auto p-5">
        {experience.map(({ date, company, position, workDone, stack }) => (
          <div
            style={{ boxShadow: "1px 1px 10px rgba(255, 251, 251, 0.308)" }}
            className="bg-[#3d3d3d] shadow-xl bg-opacity-30 rounded-xl backdrop-blur-lg p-5"
            key={company}
          >
            <div className="flex flex-col gap-2">
              <span className="text-[#F2A365]">{date}</span>
              <h3 className="card-position text-2xl font-bold">{position}</h3>
              <span className="text-[#E76F51] font-bold">{company}</span>
              <div className="p-5">
                <ul className="list-disc">
                  {workDone.map((exp1, index) => (
                    <li key={index}>{exp1}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-row gap-3">
                {stack.map((stack) => (
                  <div
                    className="flex flex-row gap-2 items-center justify-center"
                    key={stack}
                  >
                    {stackIcons[stack] || stack}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;