import { FaGitAlt } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { VscVscode } from "react-icons/vsc";
import { AiOutlineOpenAI } from "react-icons/ai";
import { ImStackoverflow } from "react-icons/im";

const OtherTools = () => {
  return (
    <div className="flex gap-20 pr-20 sm:gap-15 md:pr-15 align-middle items-center">
      <div className="flex flex-col items-center justify-center">
        <FaGitAlt className="w-20 h-20 text-neutral-300" />{" "}
        <p className="font-bold text-md">Git</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <VscGithubInverted className="w-20 h-20 text-neutral-300" />{" "}
        <p className="font-bold text-md">Github</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <VscVscode className="w-20 h-20 text-neutral-300" />{" "}
        <p className="font-bold text-md">Github</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <ImStackoverflow className="w-20 h-20 text-neutral-300" />{" "}
        <p className="font-bold text-md">Stackoverflow</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <AiOutlineOpenAI className="w-20 h-20 text-neutral-300" />{" "}
        <p className="font-bold text-md">Open AI</p>
      </div>
    </div>
  );
};

export default OtherTools;
