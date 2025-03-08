import { HeroSection } from "./components/HeroSection";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10 max-w-[1200px] mx-auto mt-10 md:mt-20 relative mb-[50px] md:mb-[100px] px-4 sm:px-6 md:px-8">
      <section id="home" className="flex flex-col items-center gap-3 md:gap-5 md:mb-10">
        <div className="flex flex-col text-[#0083C4]">
          <h1 className="luckiest text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] text-center leading-tight md:leading-22">
            Hola, soy <span className="text-[3rem] sm:text-[4rem] md:text-[6rem]">O</span>mar.
          </h1>
          <h1 className="luckiest text-[#f56835] text-[2rem] sm:text-[3rem] md:text-[4rem] text-center leading-tight md:leading-22">
            Desarrollador Frontend.
          </h1>
        </div>
      </section>
      <HeroSection />
      <section id="projects" className="w-full">
        <Projects />
      </section>
    </main>
  );
}
