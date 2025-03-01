import {
  Code,
  Css,
  Express,
  Git,
  GithubStack,
  Html,
  JavaScript,
  MongoDB,
  Nextjs,
  Node,
  PostgreSQL,
  Prisma,
  ReactSVG,
  Tailwind,
  TypeScript,
} from "../assets/svg/Icons";

const stackItems = [
  { Component: Html, name: "Html" },
  { Component: Css, name: "Css" },
  { Component: JavaScript, name: "JavaScript" },
  { Component: TypeScript, name: "TypeScript" },
  { Component: Tailwind, name: "Tailwind" },
  { Component: ReactSVG, name: "React" },
  { Component: Nextjs, name: "Next Js", props: { fill: "#fff" } },
  { Component: Node, name: "Node" },
  { Component: Express, name: "Express" },
  { Component: PostgreSQL, name: "PostgreSQL" },
  { Component: Git, name: "Git" },
  { Component: GithubStack, name: "Github" },
  { Component: MongoDB, name: "MongoDB" },
  { Component: Prisma, name: "Prisma" },
];

export function Stack() {
  return (
    <section className="flex flex-col mt-20 text-[#F5E8C7]" id="stack">
      <div className="flex flex-row items-center justify-center gap-2 mb-5 md:text-5xl sm:text-4xl">
        <Code size={50} />
        <span className="text-xl md:text-4xl sm:text-2xl">Stack</span>
      </div>

      <div className="flex flex-wrap gap-6 items-center justify-center p-5">
        {stackItems.map(({ Component, name, props }, index) => (
          <div
            className="flex flex-col gap-2 items-center justify-center"
            key={index}
          >
            <Component size={50} {...props} />
            <span
              style={{ boxShadow: "1px 1px 10px rgba(255, 251, 251, 0.308)" }}
              className="text-xs md:text-sm sm:text-sm shadow-xl bg-[#3d3d3d] bg-opacity-30 rounded-xl backdrop-blur-lg p-2"
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
