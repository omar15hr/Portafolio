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
    name: 'Shopping Cart',
    description: 'Aplicación de React que permite a los usuarios añadir y eliminar productos del carrito de compras. Al mismo tiempo muestra filtro de precio y de categoría. Desarrollé el proyecto prácticando mis habilidades con el Context, useReducer, y realizando el fetch de los productos a través de la API de un sitio web',
    image: shoppingCart,
    url: 'https://omar-shopping-cart.netlify.app/',
    code: 'https://github.com/omar15hr/shopping-cart',
    workFrom: 'Proyecto Propio',
    stack: ['React', 'JavaScript', 'Github', 'Git', 'CSS', 'HTML']
  },
  {
    name: 'Movie Search',
    description: 'Busca el título de una película y muestra los detalles de la misma en una página web. Desarrollé el proyecto en React para seguir desarrollando mis habilidades con los custom hooks, fetch, useMemo, useRef, useCallback y debounce',
    image: movieSearch,
    url: 'https://omar-movie-search.netlify.app/',
    code: 'https://github.com/omar15hr/movie-app',
    workFrom: 'Proyecto Propio',
    stack: ['React', 'JavaScript', 'Github', 'Git', 'CSS', 'HTML']
  },
  {
    name: 'Tic Tac Toe',
    description: 'Juego de 3 en raya. Aprendí a ejecutar la lógica de programación en JavaScript y React. Fue una experiencia divertida y aprendí mucho.',
    image: ticTacToe,
    url: 'https://omar-tic-tac-toe.netlify.app/',
    code: 'https://github.com/omar15hr/tic-tac-toe',
    workFrom: 'Proyecto Propio',
    stack: ['React', 'JavaScript', 'Github', 'Git', 'CSS', 'HTML']
  },
  {
    name: 'Muscari Clothing',
    description: 'E-commerce de ropa para mujeres, hombres y niños. Diseñé y desarrollé la aplicación en conjunto con mi equipo de trabajo. Contiene funcionalidades de una tienda virtual con pasarela de pago y envío de correos electrónicos. Lo que caracteriza a esta aplicación es su diseño minimalista y su guía de talla según la prenda escogida.',
    image: muscari,
    url: 'https://muscari.vercel.app',
    code: 'https://github.com/omar15hr/Muscari',
    workFrom: 'Proyecto de Titulo Duoc UC',
    stack: ['React', 'TypeScript', 'Next Js', 'TailwindCSS', 'PostgreSQL', 'Github', 'Git']
  }
]

export function Projects() {
  return (
    <div className="projects-container" id="projects">
      <div className="title-projects md:text-5xl sm:text-4xl text-center">Mis Proyectos</div>
      <p className="projects-description text-xl text-center">
        Proyectos que muestran mis capacidades y conocimientos en el desarrollo de aplicaciones web.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            <img src={project.image} alt={project.name} className="project-img" />
            <div className="card-content">
              <h3 className="card-title text-2xl font-bold">
                {project.name}
                <span className="card-span font-normal"> - {project.workFrom}</span>
              </h3>
              <p className="card-description text-base my-2">{project.description}</p>
              <div className="card-stack">
                {project.stack.map((stack) => (
                  <div className="stack-item-project" key={stack}>
                     {stackIcons[stack] || stack} {stack}
                  </div>
                ))}
              </div>
              <div className="card-links">
              <a href={project.url} target="_blank" className="card-link">
              Ver Proyecto <ExternalLink /> 
              </a>
              <a href={project.code} target="_blank" className="card-link">
              Ver Código <CodeSVG />
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
