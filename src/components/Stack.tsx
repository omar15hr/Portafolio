
import { Css } from "../assets/svg/stack/Css";
import { Express } from "../assets/svg/stack/Express";
import { Git } from "../assets/svg/stack/Git";
import { GithubStack } from "../assets/svg/stack/GithubStack";
import { Html } from "../assets/svg/stack/Html";
import { JavaScript } from "../assets/svg/stack/JavaScript";
import Nextjs from "../assets/svg/stack/NextJs";
import { Node } from "../assets/svg/stack/Node";
import { PostgreSQL } from "../assets/svg/stack/PostgreSQL";
import { React } from "../assets/svg/stack/React";
import { Tailwind } from "../assets/svg/stack/Tailwind";
import { TypeScript } from "../assets/svg/stack/TypeScript";

export function Stack() {
  return (
    <section className="stack-container" id="stack">
      <div className="title-stack md:text-5xl sm:text-4xl">Stack</div>

      <div className="stack-list">
        
        <div className="stack-item">
          <Html size={50} />
          <span className="item-stack-name">Html</span>
        </div>
        <div className="stack-item">
          <Css size={50} />
          <span className="item-stack-name">Css</span>
        </div>
        <div className="stack-item">
          <JavaScript size={50} />
          <span className="item-stack-name">JavaScript</span>
        </div>
        <div className="stack-item">
          <TypeScript size={50} />
          <span className="item-stack-name">TypeScript</span>
        </div>
        <div className="stack-item">
          <Tailwind size={50} />
          <span className="item-stack-name">Tailwind</span>
        </div>
        <div className="stack-item">
          <React size={50} />
          <span className="item-stack-name">React</span>
        </div>
        <div className="stack-item">
          <Nextjs size={50} props={{fill: "#fff"}} />
          <span className="item-stack-name">Next Js</span>
        </div>
        <div className="stack-item">
          <Node size={50} />
          <span className="item-stack-name">Node</span>
        </div>
        <div className="stack-item">
          <Express size={50} />
          <span className="item-stack-name">Express</span>
        </div>
        <div className="stack-item">
          <PostgreSQL size={50} />
          <span className="item-stack-name">PostgreSQL</span>
        </div>
        <div className="stack-item">
          <Git size={50} />
          <span className="item-stack-name">Git</span>
        </div>
        <div className="stack-item">
          <GithubStack size={50} />
          <span className="item-stack-name">Github</span>
        </div>
      </div>

    </section>
  );
}
