"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import muscari from '@/app/assets/img/projects/muscari.webp';

function AboutHeader() {
  const greetings = [
    { text: "Hi!", lang: "en" },
    { text: "¡Hola!", lang: "es" },
    { text: "Bonjour!", lang: "fr" },
    { text: "Ciao!", lang: "it" },
    { text: "Olá!", lang: "pt" },
    { text: "Hallo!", lang: "de" },
    { text: "こんにちは!", lang: "ja" },
    { text: "안녕하세요!", lang: "ko" },
    { text: "你好!", lang: "zh" },
    { text: "Привет!", lang: "ru" },
    { text: "Hej!", lang: "sv" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === greetings.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full">
      <div className="flex flex-col gap-5 md:gap-10 items-center bg-[#BCC6ED]/70 p-4 md:p-5 rounded-[30px] w-full md:w-2/5">
        <Image src={muscari} alt="Avatar" className="w-full max-w-[20rem] md:max-w-[35rem]" />
        <p
          className={`acorn text-[2rem] md:text-[3rem] transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          lang={greetings[currentIndex].lang}
        >
          {greetings[currentIndex].text}
        </p>
      </div>
      <div className="flex flex-col gap-10 md:gap-20 w-full md:w-4/5 h-full justify-between">
        <p className="rammeto text-[1rem] md:text-[2rem] leading-tight md:leading-[3rem] text-[#0083C4] text-center md:text-left">
          Soy desarrollador frontend trabajando desde Santiago de Chile.
        </p>
        <div className="flex flex-col gap-5 roboto text-[#007EBE] text-base md:text-lg">
          <p>
            Desde que inicio mi carrera senti fascinación por el desarrollo web, lo que me llevo a complementar la educación de mi Instituto con toda la información que puedo encontrar en internet.
            Prácticamente tengo más de 2 años estudiando JavaScript, TypeScript y React. Lo que me ha llevado a formar 
            parte de diferentes comunidades y creadores de contenido sobre programación y desarrollo web.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHeader;