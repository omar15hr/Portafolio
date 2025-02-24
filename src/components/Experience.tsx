const experience = [
  {
    date: "Nov, 2024 - Feb, 2025",
    company: "Fortius",
    position: "Desarrollador Frontend",
    workDone: [
      "Diseñe landing page del sitio web utilizando HTML, CSS y JavaScript.",
      "Añadí funcionalidades para mejorar la interfaz de usuario con carruseles, filtros y carrito de compras.",
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

export function Experience() {
  return (
    <section className="experience-container" id="experience">
      <div className="title-exp text-3xl sm:text-4xl md:text-5xl">Experiencia</div>
      <p className="text-xl text-center exp-description">
        Experiencia profesional colaborando con empresas reales y desarrollando
        proyectos propios.
      </p>

      <div className="exp-card">
        <div className="exp-grid">
          {experience.map(({ date, company, position, workDone, stack }) => (
            <div className="experience-card" key={company}>
              <div className="card-content">
                <span className="exp-date">{date}</span>
                <h3 className="card-position text-2xl font-bold">{position}</h3>
                <span className="card-span font-bold">{company}</span>
                <div>
                  <ul className="work-done-list">
                    {workDone.map((exp1, index) => (
                      <li key={index}>{exp1}</li>
                    ))}
                  </ul>
                </div>

                <div className="card-stack">
                  {stack.map((stack) => (
                    <div className="stack-item-project" key={stack}>
                      {stack}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
