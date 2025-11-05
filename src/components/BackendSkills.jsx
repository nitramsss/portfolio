import { SiPython } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { SiSqlite } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { SiC } from "react-icons/si";

const BackendSkills = () => {
  return (
    <div className="flex gap-30 pr-30 sm:gap-15 md:pr-15">
      <div className="flex flex-col items-center justify-center">
        <SiC className="w-20 h-20 text-neutral-300 " />{" "}
        <p className="font-bold text-md">C Language</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SiPython className="w-20 h-20 text-neutral-300" />{" "}
        <p className="font-bold text-md">Python</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <TbBrandCSharp className="w-20 h-20 text-neutral-300 " />{" "}
        <p className="font-bold text-md">C#</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SiFlask className="w-20 h-20 text-neutral-300 " />{" "}
        <p className="font-bold text-md">Flask</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SiDjango className="w-20 h-20 text-neutral-300 " />{" "}
        <p className="font-bold text-md">Django</p>
      </div>{" "}
      <div className="flex flex-col items-center justify-center">
        <SiSqlite className="w-20 h-20 text-neutral-300 " />{" "}
        <p className="font-bold text-md">SQlite</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <FaDatabase className="w-20 h-20 text-neutral-300 " />{" "}
        <p className="font-bold text-md">Database</p>
      </div>
    </div>
  );
};

export default BackendSkills;
