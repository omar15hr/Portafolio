import Link from "next/link";
import Image from "next/image";

import editor from '@/app/assets/img/editor.png';
import office from '@/app/assets/img/office.webp';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-5 md:gap-10 w-full">
       
        <div className="group flex flex-col lg:flex-row gap-5 lg:gap-10 bg-[#FFFFFF99] p-5 md:p-10 rounded-[20px] md:rounded-[40px] justify-between relative overflow-hidden min-h-[20rem] md:h-[30rem] transition-all duration-300 hover:bg-[#FFFFFFCC] transform-gpu hover:scale-[1.02] lg:hover:scale-105 will-change-transform cursor-pointer">
          <div className="flex flex-col justify-between gap-8 lg:gap-16 w-full lg:w-1/2">
            <div className="flex flex-col gap-5 lg:gap-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl rammeto">
                Mi meta es crear un impacto positivo en el mundo de la tecnología.
              </h2>
              <div className="flex flex-col gap-3 md:gap-5 roboto text-base md:text-lg">
                <p>
                  Como desarrollador frontend, mi objetivo es crear
                  interfaces mantenibles, escalables y de alto rendimiento.
                </p>
                <p>
                  Mi foco es escribir código limpio, eficiente y modular para
                  garantizar la sostenibilidad y adaptabilidad a largo plazo.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                href="https://www.linkedin.com/in/omar-alejandro-hernandez-diaz/"
                target="_blank"
                className="bg-gradient-to-l text-white from-[#0A66C2] to-[#1b8dff] roboto px-4 md:px-5 py-3 rounded-full font-bold text-md md:text-md cursor-pointer"
              >
                in
              </Link>
              <Link
                href="https://github.com/omar15hr"
                target="_blank"
                className="bg-gradient-to-l text-white from-[#010409] to-[#808386] roboto px-4 md:px-5 py-3 rounded-full font-bold text-md md:text-md cursor-pointer"
              >
                Github
              </Link>
            </div>
          </div>
          <Image
          src={editor}
          alt="Editor"
          className="w-full lg:w-1/2 lg:absolute lg:right-[-20px] lg:top-[150px] transition-transform duration-300 group-hover:-translate-y-2 lg:group-hover:-translate-x-2"
        />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-10 w-full">
          <div className="group flex flex-col gap-5 md:gap-10 bg-[#D6ABFF] p-5 md:p-10 rounded-[20px] md:rounded-[40px] justify-between relative overflow-hidden min-h-[20rem] md:h-[30rem] w-full lg:w-7/12 transition-all duration-300 hover:bg-[#C090FF] transform-gpu hover:scale-[1.02] lg:hover:scale-105 will-change-transform cursor-pointer">
            <div className="flex items-start gap-5 md:gap-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl rammeto">
                Aqui puedes ver mi experiencia como desarrollador.
              </h2>
            </div>
            <Image
            src={office}
            alt="Editor"
            className="absolute right-[-20px] bottom-[-30px] transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 w-[30rem] h-[20rem] rounded-md opacity-90"
          />
          </div>
          <Link
            href="/about"
            className="group flex flex-col gap-5 md:gap-10 bg-[#FFC6C7] p-5 md:p-10 rounded-[20px] md:rounded-[40px] justify-between relative overflow-hidden min-h-[20rem] md:h-[30rem] w-full lg:w-5/12 transition-all duration-300 hover:bg-[#FFB0B1] transform-gpu hover:scale-[1.02] lg:hover:scale-105 will-change-transform cursor-pointer"
          ><h2 className="text-lg md:text-xl lg:text-xl rammeto">
         Conoce más sobre mi.
        </h2></Link>
        </div>
      </section>
    );
    }