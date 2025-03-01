import {
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
} from "../assets/svg/Icons";

import muscari from "../assets/img/projects/muscari.webp";
import backgroundSnippets from "../assets/img/projects/background-snippets.webp";

import { Box, CodeSVG, ExternalLink } from "../assets/svg/Icons";

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
};

const projects = [
  {
    name: "Background Snippets",
    description:
      "Puedes obtener diferentes colores de fondo para tus páginas web, obteniendo el código y previsualizandolo antes.",
    image: backgroundSnippets,
    url: "https://background-snippets-two.vercel.app",
    code: "https://github.com/omar15hr/background-snippets",
    stack: ["React", "TypeScript", "TailwindCSS", "Github", "Git"],
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
    <section className="flex flex-col gap-3 mt-20 text-[#F5E8C7]" id="projects">
      <div className="flex flex-row gap-2 items-center justify-center md:text-5xl sm:text-4xl text-center">
        <Box size={50} />
        <span className="text-xl md:text-4xl sm:text-2xl">Mis Proyectos</span>
      </div>
      <p className="md:text-xl sm:text-xl text-[#bbb197] text-center p-5">
        Proyectos que muestran mis capacidades y conocimientos en el desarrollo
        de aplicaciones web.
      </p>

      <div className="flex flex-col gap-5 w-full max-w-5xl mx-auto p-2">
        {projects.map((project) => (
          <div
            style={{ boxShadow: "1px 1px 10px rgba(255, 251, 251, 0.308)" }}
            key={project.name}
            className="flex flex-col sm:flex-row flex-wrap gap-6 text-xs md:text-sm bg-[#3d3d3d] bg-opacity-30 rounded-xl backdrop-blur-lg p-4 shadow-xl"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full sm:w-[200px] md:w-[300px] lg:w-[400px] rounded-md object-cover"
            />

            <div className="flex flex-col gap-4 flex-1">
              <h1 className="text-2xl text-[#F4A261] font-bold">
                {project.name}
              </h1>

              <div className="flex flex-wrap gap-2 items-center">
                {project.stack.map((stack) => (
                  <div
                    className="flex flex-col gap-2 items-center justify-center"
                    key={stack}
                  >
                    {stackIcons[stack] || stack}
                  </div>
                ))}
              </div>

              <p className="text-sm text-[#eff6e0]">{project.description}</p>

              <div className="flex gap-4">
                <a
                  href={project.code}
                  target="_blank"
                  className="p-2 bg-[#F4A261] bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
                >
                  <CodeSVG size={20} />
                </a>
                <a
                  href={project.url}
                  target="_blank"
                  className="p-2 bg-[#F4A261] bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
