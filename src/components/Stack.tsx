import { Code } from "../assets/svg/Icons";
import { Css } from "../assets/svg/stack/Css";
import { Express } from "../assets/svg/stack/Express";
import { Git } from "../assets/svg/stack/Git";
import { GithubStack } from "../assets/svg/stack/GithubStack";
import { Html } from "../assets/svg/stack/Html";
import { JavaScript } from "../assets/svg/stack/JavaScript";
import MongoDB from "../assets/svg/stack/Mongo";
import Nextjs from "../assets/svg/stack/NextJs";
import { Node } from "../assets/svg/stack/Node";
import { PostgreSQL } from "../assets/svg/stack/PostgreSQL";
import Prisma from "../assets/svg/stack/Prisma";
import { React } from "../assets/svg/stack/React";
import { Tailwind } from "../assets/svg/stack/Tailwind";
import { TypeScript } from "../assets/svg/stack/TypeScript";
import "./Stack.css";

const stackItems = [
  { Component: Html, name: "Html" },
  { Component: Css, name: "Css" },
  { Component: JavaScript, name: "JavaScript" },
  { Component: TypeScript, name: "TypeScript" },
  { Component: Tailwind, name: "Tailwind" },
  { Component: React, name: "React" },
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
    <section className="stack-container" id="stack">
      <div className="flex flex-row items-center justify-center gap-2 title-stack md:text-5xl sm:text-4xl">
        <Code size={50} />
        <span>Stack</span>
      </div>

      <div className="stack-list">
        {stackItems.map(({ Component, name, props }, index) => (
          <div className="stack-item" key={index}>
            <Component size={50} {...props} />
            <span className='item-stack-name'>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}