const experience = [
  {
    date: "Ago, 2024 - Nov, 2024",
    company: "Dyatec",
    position: "Desarrollador FullStack",
    workDone: [
      "Diseñe el landing page del sitio web de la OTEC de La Florida. Enfocado a las noticias y cursos que ofrecen. Utilicé CSS y HTML.",
      "Desarrollé un bloque de Moodle, que permite a los administradores del sitio obtener información sobre el status de los alumnos y sus cursos. Utilicé PHP, MySQL, HTML y CSS.",
      "Modifiqué un plugin de Moodle que permite a los usuarios del sitio descargas masivas de certificados de cursos. Utilicé PHP, MySQL y HTML.",
      "Elaboré una documentación sobre el bloque de Moodle, donde explicaban los pasos necesarios para instalar y configurar el bloque. Utilicé Markdown y HTML.",
    ],
    stack: ["PHP", "JavaScript", "CSS", "HTML", "MySQL"],
  },
];

export function Experience() {
  return (
    <section className="experience-container" id="experience">
      <div className="title-exp md:text-5xl sm:text-4xl">Experiencia</div>
      <p className="text-xl text-center exp-description">
        Experiencia profesional colaborando con empresas reales y desarrollando
        proyectos propios.
      </p>

      <div className="exp-card">
        <div className="exp-grid">
          {experience.map((experience) => (
            <div className="experience-card" key={experience.company}>
              <div className="card-content">
                <div className="exp-date">{experience.date}</div>
                <h3 className="card-position text-2xl font-bold">
                  {experience.position}
                </h3>
                <span className="card-span font-bold">
                  {experience.company}
                </span>
                <div>
                  {experience.workDone.map((workDone) => (
                    <ul className="work-done-list" key={workDone}>
                      <li>{workDone}</li>
                    </ul>
                  ))}
                </div>
                
                <div className="card-stack">
                  {experience.stack.map((stack) => (
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
