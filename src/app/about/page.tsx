import AboutHeader from "./components/AboutHeader";
import AboutInfo from "./components/AboutInfo";

function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-10 md:gap-20 max-w-[1200px] mx-auto mt-10 md:mt-20 px-4 sm:px-6 md:px-8 relative mb-[50px] md:mb-[100px]">
      <h1 className="luckiest text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] text-center leading-tight md:leading-22 text-[#0083C4]">
        Hola soy Omar.
      </h1>
      <AboutHeader />
      <AboutInfo />
    </main>
  )
}

export default AboutPage;