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
import ticTacToe from "../assets/img/projects/tic-tac-toe.webp";
import movieSearch from "../assets/img/projects/movie-search.webp";
import shoppingCart from "../assets/img/projects/shopping-cart.webp";
import taskManager from "../assets/img/projects/task-manager.webp";

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
    name: "Task Manager",
    description:
      "Permite a los usuarios añadir y eliminar task de un gestor de tareas. Al mismo tiempo permite cambiar el status de la tarea al moverla de columna. Desarrollé el proyecto prácticando mis habilidades con el drag and drop, redux toolkit para el estado de las tareas y como integrarlo todo con el ecosistema de React.",
    image: taskManager,
    url: "https://omar-task-manager.netlify.app/",
    code: "https://github.com/omar15hr/task-manager",
    stack: [
      "React",
      "TypeScript",
      "Github",
      "Git",
      "CSS",
      "HTML",
      "TailwindCSS",
    ],
  },
  {
    name: "Shopping Cart",
    description:
      "Permite a los usuarios añadir y eliminar productos del carrito de compras. Al mismo tiempo muestra filtro de precio y de categoría. Desarrollé el proyecto prácticando mis habilidades con el Context, useReducer, y realizando el fetch de los productos a través de la API de un sitio web.",
    image: shoppingCart,
    url: "https://omar-shopping-cart.netlify.app/",
    code: "https://github.com/omar15hr/shopping-cart",
    stack: ["React", "JavaScript", "Github", "Git", "CSS", "HTML"],
  },
  {
    name: "Movie Search",
    description:
      "Busca el título de una película y muestra los detalles de la misma en una página web. Desarrollé el proyecto en React para seguir desarrollando mis habilidades con los custom hooks, fetch, useMemo, useRef, useCallback y debounce.",
    image: movieSearch,
    url: "https://omar-movie-search.netlify.app/",
    code: "https://github.com/omar15hr/movie-app",
    stack: ["React", "JavaScript", "Github", "Git", "CSS", "HTML"],
  },
  {
    name: "Tic Tac Toe",
    description:
      "Juego de 3 en raya. Aprendí a ejecutar la lógica de programación en JavaScript y React. Fue una experiencia divertida y aprendí mucho en como separar la lógica de la vista y componentizar el código de React para mantener un código limpio.",
    image: ticTacToe,
    url: "https://omar-tic-tac-toe.netlify.app/",
    code: "https://github.com/omar15hr/tic-tac-toe",
    stack: ["React", "JavaScript", "Github", "Git", "CSS", "HTML"],
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
      <div className="title-projects md:text-5xl sm:text-4xl text-center">
        Mis Proyectos
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