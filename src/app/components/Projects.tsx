import { ComingSoonCard, ProjectCard } from "./ProjectCard";
import muscari from '@/app/assets/img/projects/muscari.webp';
import backgroundSnippet from '@/app/assets/img/projects/background-snippets.webp';

function Projects() {
  return (
    <section className="container mx-auto px-4 py-10 md:py-20">
      <h1 className="luckiest text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] text-center mb-8 md:mb-16 text-[#0083C4]">
        Proyectos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <ProjectCard
          title="Backgrounds Snippets"
          description="Collection of modern, high quality backgrounds"
          image={backgroundSnippet}
          className="h-[350px] sm:h-[400px]"
          stack={["React", "TypeScript", "CSS", "HTML", "TailwindCSS", "Github", "Git"]}
          href="https://background-snippets-two.vercel.app"
        />
        <ProjectCard
          title="Muscari Clothing"
          description="E-commerce con sistema de autenticación, envío de correos electrónicos y pasarela de pagos."
          image={muscari}
          className="h-[350px] sm:h-[400px]"
          stack={["React", "TypeScript", "CSS", "HTML", "TailwindCSS", "Nextjs", "PostgreSQL", "Github", "Git"]}
          href="https://muscari.vercel.app"
        />
        <ComingSoonCard className="h-[300px] sm:h-[350px] hidden md:flex" />
        <ComingSoonCard className="h-[300px] sm:h-[350px] hidden md:flex" />       
      </div>
    </section>
  );
}

export default Projects;