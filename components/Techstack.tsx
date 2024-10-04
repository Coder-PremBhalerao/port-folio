"use client";

import { technologies } from "@/Data";
import { SectionWrapper } from "./hoc";
import BallCanvas from "./canvas/Ball";

const Techstack = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Techstack, "");
