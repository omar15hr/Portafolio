import { Ballpen } from "../assets/svg/Icons";

export const Education = () => {
  return (
    <section className="p-8 max-w-screen-xl mx-auto" id="education">
      <div className="flex flex-row gap-2 items-center justify-center text-[#598392] mb-8">
        <Ballpen size={50} />
        <h1 className=" font-bold text-3xl sm:text-4xl md:text-5xl text-center">
          Educación
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 text-[#b8b7b7] max-w-7xl mx-auto">

        <div
          style={{ boxShadow: "1px 1px 10px rgba(255, 251, 251, 0.308)" }}
          className="bg-[#124559] text-[#eff6e0] p-8 rounded-lg shadow-lg flex flex-col gap-3 items-center"
        >
         <h1 className="font-bold text-xl">Analista Programador Computacional</h1>
         <h3>Instituto Profesional Duoc UC</h3>
         <h6 className="text-sm">2021 - 2024</h6>
        </div>

      </div>
    </section>
  );
};
