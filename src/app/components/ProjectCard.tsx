import Image, { StaticImageData } from "next/image";
import {
  Css,
  Express,
  Git,
  GithubStack,
  Html,
  JavaScript,
  Nextjs,
  PostgreSQL,
  ReactSVG,
  Tailwind,
  TypeScript,
} from "./Icons";
import { JSX } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  className?: string;
  href?: string;
  stack?: string[];
}

export function ProjectCard({
  title,
  description,
  image,
  className = "",
  href,
  stack,
}: ProjectCardProps) {
  const CardWrapper = href ? "a" : "div";

  const stackIcons: Record<string, JSX.Element> = {
    React: <ReactSVG size={24} />,
    TypeScript: <TypeScript size={24} />,
    CSS: <Css size={24} />,
    HTML: <Html size={24} />,
    Nextjs: <Nextjs size={24} props={{ fill: "#fff" }} />,
    TailwindCSS: <Tailwind size={24} />,
    PostgreSQL: <PostgreSQL size={24} />,
    Github: <GithubStack size={24} />,
    Git: <Git size={24} />,
    Express: <Express size={24} />,
    JavaScript: <JavaScript size={24} />,
  };

  return (
    <CardWrapper
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white/30 p-4 sm:p-6 md:p-10 relative overflow-hidden rounded-lg shadow-md roboto border border-white/20 transition-all duration-300 hover:shadow-lg will-change-transform hover:-translate-y-1 ${className} ${
        href ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex flex-col gap-2 relative z-10">
        <h2 className="text-[#0083C4] text-lg sm:text-xl md:text-2xl font-bold">
          {title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base">{description}</p>
      </div>
      <div className="flex flex-wrap gap-4 items-center mt-4">
        {stack?.map((stack) => (
          <div
            className="flex flex-col gap-2 items-center justify-center"
            key={stack}
          >
            {stackIcons[stack] || stack}
          </div>
        ))}
      </div>
      <div className="absolute bottom-[-5px] px-3 sm:px-5 left-0 w-full flex justify-center">
        <Image
          className="h-[200px] md:h-full sm:w-48 md:w-full mt-4 rounded-md"
          src={image}
          alt={title}
        />
      </div>
      <div className="absolute inset-0 backdrop-blur-sm -z-10" />
    </CardWrapper>
  );
}

export function ComingSoonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white/30 backdrop-blur-sm p-4 sm:p-6 md:p-10 relative overflow-hidden rounded-lg shadow-md roboto border border-white/20 transition-transform hover:scale-[1.02] group ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-full max-w-[240px] sm:max-w-[280px] space-y-3 sm:space-y-4">
          <div className="h-6 sm:h-8 bg-[#0083C4]/10 rounded-md animate-pulse" />

          <div className="space-y-2">
            <div
              className="h-3 sm:h-4 bg-[#0083C4]/10 rounded-md w-3/4 animate-pulse"
              style={{ animationDelay: "0.1s" }}
            />
            <div
              className="h-3 sm:h-4 bg-[#0083C4]/10 rounded-md w-1/2 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
          </div>

          <div className="flex gap-2 pt-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#0083C4]/10 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6 text-[#0083C4]/70">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#0083C4] animate-ping" />
            <span className="text-xs sm:text-sm font-medium">Coming Soon</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid grid-cols-8 gap-0.5 sm:gap-1">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-[#0083C4] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                transitionDelay: `${Math.random() * 500}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
