import { CodeSVG } from "../assets/svg/projects/CodeSVG";
import { ExternalLink } from "../assets/svg/projects/ExternalLink";

const projects = [
  {
    name: 'Proyecto 1',
    description: 'Descripción del proyecto 1',
    image: 'https://i.ibb.co/4b2r0rX/logo-react.png',
    url: 'https://github.com',
    code: 'https://github.com',
    workFrom: 'Casa',
    stack: ['React', 'TypeScript', 'TailwindCSS']
  },
  {
    name: 'Proyecto 2',
    description: 'Descripción del proyecto 2',
    image: 'https://i.ibb.co/4b2r0rX/logo-react.png',
    url: 'https://github.com',
    code: 'https://github.com',
    workFrom: 'Casa',
    stack: ['React', 'TypeScript', 'TailwindCSS']
  },
  {
    name: 'Muscari Clothing',
    description: 'E-commerce de ropa para mujeres, hombres y niños. Diseñé y desarrollé la aplicación en conjunto con mi equipo de trabajo. Contiene funcionalidades de una tienda virtual con pasarela de pago y envío de correos electrónicos. Lo que caracteriza a esta aplicación es su diseño minimalista y su guía de talla según la prenda escogida.',
    image: 'https://i.ibb.co/4b2r0rX/logo-react.png',
    url: 'https://muscari.vercel.app',
    code: 'https://github.com/omar15hr/Muscari',
    workFrom: 'Proyecto de Titulo Duoc UC',
    stack: ['React', 'TypeScript', 'Next Js', 'TailwindCSS', 'PostgreSQL', 'Github', 'Git']
  }
]

export function Projects() {
  return (
    <div className="projects-container">
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
                    {stack}
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
