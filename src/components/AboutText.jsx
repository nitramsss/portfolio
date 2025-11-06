import React from "react";
import Profile from "./Profile";

const AboutText = () => {
  return (
    <div className="px-5 sm:px-15 md:px-20 gap-10 mx-auto max-w-7xl flex items-center">
      <div className="w-full hidden lg:flex">
        <Profile />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4 text-neutral-300 flex max-sm:justify-center items-center">
          About Me
        </h1>
        <p className="hidden md:block xl:text-xl leading-relaxed text-neutral-400 text-justify">
          I am currently pursuing my bachelor's degree at the{" "}
          <b className="text-white">
            Polytechnic University of the Philippines, Quezon City
          </b>
          . I have a passion for sharing my own stories and listening to
          others’, as well as for teaching and learning — both inside and beyond
          the four corners of the classroom. When it comes to work, I believe in
          working both hard and smart, as it helps us reach our full potential
          faster. <br />
          <br /> I am deeply committed to continuous learning and believe that
          no information is ever unnecessary as every piece of knowledge has
          value and can be applied in our daily lives. As for free time, I see
          it as something we create for ourselves, a chance to make memories,
          whether by playing, watching, exercising, or exploring something new.
        </p>
        <p className="md:hidden xl:text-xl leading-relaxed text-neutral-400 text-justify">
          I am currently pursuing my bachelor's degree at the{" "}
          <b className="text-white">
            Polytechnic University of the Philippines, Quezon City
          </b>
          . I have a passion for sharing my own stories and listening to others.
          <br />
          <br /> When it comes to work, I believe in working both hard and
          smart, as it helps us reach our full potential faster. I am deeply
          committed to continuous learning and believe that no information is
          ever unnecessary as every piece of knowledge has value and can be
          applied in our daily lives.
        </p>
      </div>
    </div>
  );
};

export default AboutText;
