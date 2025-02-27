import { CodeSVG } from "../assets/svg/projects/CodeSVG";
import { Css } from "../assets/svg/stack/Css";
import { Express } from "../assets/svg/stack/Express";
import { Git } from "../assets/svg/stack/Git";
import { GithubStack } from "../assets/svg/stack/GithubStack";
import { Html } from "../assets/svg/stack/Html";
import { JavaScript } from "../assets/svg/stack/JavaScript";
import Nextjs from "../assets/svg/stack/NextJs";
import { PostgreSQL } from "../assets/svg/stack/PostgreSQL";
import { React } from "../assets/svg/stack/React";
import { Tailwind } from "../assets/svg/stack/Tailwind";
import { TypeScript } from "../assets/svg/stack/TypeScript";
import { ExternalLink } from "../assets/svg/projects/ExternalLink";

import muscari from "../assets/img/projects/muscari.webp";
import backgroundSnippets from "../assets/img/projects/background-snippet.webp";

import "./Projects.css";
import { Box } from "../assets/svg/Icons";

const stackIcons: Record<string, JSX.Element> = {
  React: <React size={20} />,
  TypeScript: <TypeScript size={20} />,
  CSS: <Css size={20} />,
  HTML: <Html size={20} />,
  "Next Js": <Nextjs size={20} props={{ fill: "#fff" }} />,
  TailwindCSS: <Tailwind size={20} />,
  PostgreSQL: <PostgreSQL size={20} />,
  Github: <GithubStack size={20} />,
  Git: <Git size={20} />,
  Express: <Express size={20} />,
  JavaScript: <JavaScript size={20} />,
};

const projects = [
  {
    name: "Background Snippets",
    description:
      "Aplicación web para obtener fragmentos de backgrounds para usar en tus proyectos. Puedes obtener un fragmento de color, una imagen, un gradiente o un patrón de fondo. Este proyectos seguirá en desarrollo y se actualizará con nuevas funcionalidades.",
    image: backgroundSnippets,
    url: "https://background-snippets-two.vercel.app",
    code: "https://github.com/omar15hr/background-snippets",
    stack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Github",
      "Git",
    ],
  },
  {
    name: "Muscari Clothing",
    description:
      "E-commerce de ropa para mujeres, hombres y niños. Diseñé y desarrollé la aplicación en conjunto con mi equipo de trabajo. Contiene funcionalidades de una tienda virtual con pasarela de pago y envío de correos electrónicos. Lo que caracteriza a esta aplicación es su diseño minimalista y su guía de talla según la prenda escogida.",
    image: muscari,
    url: "https://muscari.vercel.app",
    code: "https://github.com/omar15hr/Muscari",
    stack: [
      "React",
      "TypeScript",
      "Next Js",
      "TailwindCSS",
      "PostgreSQL",
      "Github",
      "Git",
    ],
  },
];

export function Projects() {
  return (
    <section className="projects-container" id="projects">
      <div className="flex flex-row gap-2 items-center justify-center title-projects md:text-5xl sm:text-4xl text-center">
        <Box size={50} />
        <span>Mis Proyectos</span>
      </div>
      <p className="projects-description text-xl text-center">
        Proyectos que muestran mis capacidades y conocimientos en el desarrollo
        de aplicaciones web.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            className="bg-[#334b5370] rounded-lg shadow-lg overflow-hidden flex flex-col"
            key={project.name}
            style={{ minHeight: "500px" }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="card-title text-2xl font-bold">{project.name}</h3>
              <p className="card-description text-base my-2 sm:text-base flex-grow">
                {project.description}
              </p>
              <div className="card-stack mb-4">
                {project.stack.map((stack) => (
                  <div className="stack-item-project" key={stack}>
                    {stackIcons[stack] || stack} {stack}
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.url}
                  target="_blank"
                  className="flex items-center gap-1 text-[#293d44] bg-[#F4A261] p-1 rounded-full text-sm w-full text-center justify-center shadow-sm"
                >
                  Ver Proyecto <ExternalLink />
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  className="flex items-center gap-1 text-[#fff] bg-[#59839270] p-1 rounded-full text-sm w-full text-center justify-center shadow-sm"
                >
                  Ver Código <CodeSVG />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}