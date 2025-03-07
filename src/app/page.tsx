import { HeroSection } from "./components/HeroSection";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10 max-w-[1200px] mx-auto mt-10 md:mt-20 relative mb-[50px] md:mb-[100px] px-4 sm:px-6 md:px-8">
      <section id="home" className="flex flex-col items-center gap-3 md:gap-5 md:mb-10">
        <div className="flex flex-col text-[#0083C4]">
          <h1 className="acorn text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] font-bold text-center leading-tight md:leading-22">
            Hola, soy Omar.
          </h1>
          <h1 className="acorn text-[#f56835] text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold text-center leading-tight md:leading-22">
            Desarrollador Frontend.
          </h1>
        </div>
      </section>
      <HeroSection />
      <section id="proyectos" className="w-full">
        <Projects />
      </section>
    </main>
  );
}
