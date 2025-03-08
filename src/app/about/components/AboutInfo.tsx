import Image from "next/image";
import Link from "next/link";

import duoc from "@/app/assets/img/education/duoc.png";
import onePiece from '@/app/assets/onepiece.gif';

function AboutInfo() {
  return (
    <section className="flex flex-col lg:flex-row gap-5 w-full min-h-[620px]">
      <div className="flex flex-col gap-5 w-full lg:w-3/5">
        <div className="flex items-center justify-center bg-white/30 h-[300px] backdrop-blur-sm w-full rounded-lg p-4 relative">
          <div className="w-full h-full flex flex-col gap-4 items-center justify-center relative">
            <p className="rammeto text-2xl md:text-3xl text-[#0083C4]">
              Educación
            </p>
            <p className="roboto text-sm md:text-base">
              Estudié en el Instituto Profesional Duoc UC. Me titulé como
              Analista Programdor Computacional en 2024.
            </p>
            <Image
              src={duoc}
              alt="Jinwoo"
              className="absolute bottom-0 right-0 w-24 md:w-84"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="bg-white/30 backdrop-blur-sm w-full md:w-2/5 h-[250px] md:h-[300px] rounded-lg relative">
            <div className="flex flex-col p-4">
              <p className="rammeto text-2xl md:text-3xl text-[#0083C4]">
                Idiomas
              </p>
              <div className="mt-2">
                <p className="roboto text-sm md:text-base">Español (Nativo).</p>
                <p className="roboto text-sm md:text-base">
                  Inglés Intermedio.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white/30 backdrop-blur-sm w-full md:w-3/5 h-[250px] md:h-[300px] rounded-lg relative">
            <div className="flex flex-col p-4">
              <p className="rammeto text-2xl md:text-3xl text-[#0083C4]">
                Mi meta
              </p>
              <p className="roboto text-sm md:text-base mt-3">
                He visto a tantos creadores de contenido hacer cosas y
                desarrollar proyectos impresionantes. Por lo que mi meta es
                forma parte de la comunidad de desarrolladores y marcar la
                diferencia en el mundo de la tecnología con mi propio estilo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        href="https://www.instagram.com/elrincondeldev/"
        target="_blank"
        className="flex flex-col justify-between w-full lg:w-2/5 bg-white/30 backdrop-blur-sm lg:h-[620px] rounded-lg p-4"
      >
        <div className="flex flex-col gap-5 mb-5 md:mb-0">
          <p className="rammeto text-2xl md:text-3xl text-[#0083C4]">
            Mis Hobbies
          </p>
          <p className="roboto text-sm md:text-base">
            En mi tiempo libre, me gusta hacer ejercicio en el gimnasio. También
            en lo que pueda juego baloncesto, he jugado toda mi vidad y cuando
            puedo jugar aprovecho.
          </p>
          <p className="roboto text-sm md:text-base">
            Me gusta leer manga, mi favorito es One Piece. Aunque no lo hago muy
            frecuentemente, me gusta ver peliculas y series.
          </p>
        </div>
        <Image
          src={onePiece}
          alt="Social"
          className="w-full md:max-w-[300px] mx-auto lg:max-w-none rounded-2xl opacity-10"
        />
      </Link>
    </section>
  );
}

export default AboutInfo;
