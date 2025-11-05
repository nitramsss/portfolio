import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiJinja } from "react-icons/si";

const FrontendSkills = () => {
  return (
    <div className="flex gap-20 pr-20 sm:gap-15 md:pr-15">
      <div className="flex flex-col items-center justify-center">
        <IoLogoHtml5 className="w-20 h-20 text-neutral-300" />{" "}
        <p className="font-bold text-md">HTML</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <FaCss3Alt className="w-20 h-20 text-neutral-300 " />{" "}
        <p className="font-bold text-md">CSS</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SiJinja className="w-20 h-20 text-neutral-300" />{" "}
        <p className="font-bold text-md">Jinja</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <FaBootstrap className="w-20 h-20 text-neutral-300 " />{" "}
        <p className="font-bold text-md">Bootstrap</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SiJavascript className="w-20 h-20 text-neutral-300 " />
        <p className="font-bold text-md">Javascript</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SiTypescript className="w-20 h-20 text-neutral-300 " />
        <p className="font-bold text-md">Typescript</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <FaReact className="w-20 h-20 text-neutral-300 " />{" "}
        <p className="font-bold text-md">ReactJS</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SiTailwindcss className="w-20 h-20 text-neutral-300 " />{" "}
        <p className="font-bold text-md">Tailwind CSS</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <RiNextjsLine className="w-20 h-20 text-neutral-300 " />{" "}
        <p className="font-bold text-md">NextJS</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <TbBrandFramerMotion className="w-20 h-20 text-neutral-300 " />{" "}
        <p className="font-bold text-md">Motion Framer</p>
      </div>
    </div>
  );
};

export default FrontendSkills;
