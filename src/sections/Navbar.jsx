import React from "react";
import { motion } from "motion/react";

const Links = () => {
  return (
    <ul className="nav-ul">
      <li className="nav-li cursor-pointer hover:text-white transition-all ease-in-out duration-300">
        <a href="#about">About</a>
      </li>
      <li className="nav-li cursor-pointer hover:text-white transition-all ease-in-out duration-300">
        <a href="#projects">Projects</a>
      </li>
      <li className="nav-li cursor-pointer hover:text-white transition-all ease-in-out duration-300">
        <a href="/assets/resume/resume.pdf" download="Martin, Fitz - Resume Latest">Resume</a>
      </li>
      <li className="nav-li cursor-pointer hover:text-white transition-all ease-in-out duration-300">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};
const Navbar = () => {
  const [isClick, setIsClick] = React.useState(false);
  return (
    <div className="px-5 py-2 fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 sm:px-10" id="navbar">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <div><a href="#home">nitramsss</a></div>
        <div
          onClick={() => setIsClick(!isClick)}
          className="cursor-pointer sm:hidden hover:text-white focus:outline-none"
        >
          <img
            src={isClick ? "./assets/close.svg" : "./assets/menu.svg"}
            className="w-6 h-6"
          />
        </div>
        <nav className="hidden sm:flex">
          <Links />
        </nav>
      </div>
      <div>
        {isClick && (
          <motion.div
            className="block overflow-hidden text-center sm:hidden"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ maxHeight: "100vh" }}
            transition={{ duration: 1 }}
          >
            <nav className="pb-5">
              <Links />
            </nav>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
