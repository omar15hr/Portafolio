const projects = [
  {
    name: 'Proyecto 1',
    description: 'Descripción del proyecto 1',
    image: 'https://i.ibb.co/4b2r0rX/logo-react.png',
    url: 'https://github.com'
  },
  {
    name: 'Proyecto 2',
    description: 'Descripción del proyecto 2',
    image: 'https://i.ibb.co/4b2r0rX/logo-react.png',
    url: 'https://github.com'
  },
  {
    name: 'Proyecto 3',
    description: 'Descripción del proyecto 3',
    image: 'https://i.ibb.co/4b2r0rX/logo-react.png',
    url: 'https://github.com'
  }
]

export function Projects() {
  return (
    <div className="projects-container">
      <div className="title-projects md:text-5xl sm:text-4xl">Mis Proyectos</div>
      <p className="projects-description md:text-xl sm:text-xl text-center">Proyectos que muestran mis capacidades y conocimientos en el desarrollo de aplicaciones web.</p>
    
      <div className="projects-grid">
          {
            projects.map(project => (
              <div className="project-card" key={project.name}>
                <img src={project.image} alt={project.name} className="project-img" />
                <div className="card-content">
                  <h3 className="card-title md:text-3xl sm:text-2xl">{project.name}</h3>
                  <p className="card-description">{project.description}</p>
                  <a href={project.url} className="card-link">Ver más</a>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}