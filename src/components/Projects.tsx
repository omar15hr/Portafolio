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
  React: <React size={18} />,
  TypeScript: <TypeScript size={18} />,
  CSS: <Css size={18} />,
  HTML: <Html size={18} />,
  "Next Js": <Nextjs size={18} props={{ fill: "#fff" }} />,
  TailwindCSS: <Tailwind size={18} />,
  PostgreSQL: <PostgreSQL size={18} />,
  Github: <GithubStack size={18} />,
  Git: <Git size={18} />,
  Express: <Express size={18} />,
  JavaScript: <JavaScript size={18} />,
};

const projects = [
  {
    name: "Background Snippets",
    description:
      "Puedes obtener diferentes colores de fondo para tus páginas web, obteniendo el código y previsualizandolo antes.",
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
      "E-commerce de ropa para mujeres, hombres y niños. Contiene funcionalidades de una tienda virtual con pasarela de pago y envío de correos electrónicos.",
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

      <div className="flex flex-col gap-5 w-full max-w-5xl mx-auto p-2">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-row gap-6">
            <img src={project.image} alt={project.name} className="w-[400px] rounded-md" />
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl text-[#F4A261]">{project.name}</h1>
              <div className="flex flex-row gap-2 items-center">
              {project.stack.map((stack) => (
                  <div className="stack-item-project" key={stack}>
                    {stackIcons[stack] || stack} {stack}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#eff6e0]">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}