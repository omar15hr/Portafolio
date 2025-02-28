import { Ballpen } from "../assets/svg/Icons";
import { ImageComponent } from "./Images";
import duoc from "../assets/img/duoc.png";
import udemy from "../assets/img/udemy.png";

const education = [
  {
    date: "2021 - 2024",
    company: "Instituto Profesional Duoc UC",
    position: "Analista Programador Computacional",
    logo: duoc,
    maxWidth: "150px",
    maxHeight: "80px",
  },
  {
    date: "2021 - 2024",
    company: "Udemy",
    position: "React, React Pro, Next Js, Node",
    logo: udemy,
    maxWidth: "110px",
    maxHeight: "50px",
  },
];

export const Education = () => {
  return (
    <section className="flex flex-col gap-3 mt-20" id="education">
      <div className="flex flex-row gap-2 items-center justify-center text-[#F5E8C7] mb-8">
        <Ballpen size={50} />
        <h1 className="text-xl md:text-4xl sm:text-2xl">Educación</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 text-[#bbb197] max-w-7xl mx-auto">
        <div className="flex flex-col gap-5">
          {education.map(
            ({ date, company, position, logo, maxWidth, maxHeight }) => (
              <div
                style={{ boxShadow: "1px 1px 10px rgba(255, 251, 251, 0.308)" }}
                className="flex flex-col gap-3 bg-[#3d3d3d] shadow-xl bg-opacity-30 rounded-xl backdrop-blur-lg p-5"
                key={date}
              >
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold text-xl">{position}</h1>
                  <h3>{company}</h3>
                  <h6 className="text-sm">{date}</h6>
                </div>
                <ImageComponent
                  src={logo}
                  alt={`${company} Logo`}
                  maxWidth={maxWidth}
                  maxHeight={maxHeight}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
