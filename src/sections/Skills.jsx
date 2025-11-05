import MarqueeFeature from "../components/Marquee";

const Skills = () => {
  return (
    <section className="container mx-auto pt-15 bg-black/40 mask-t-from-90% max-w-full" id="skills">
      <div className="flex justify-center sm:mb-5">
        <h1 className="text-5xl mb-4 text-neutral-300 font-black hidden sm:flex">
          SKILLS
        </h1>
      </div>
      <p className="text-center mt-5 mb-10">
        These are the technologies I have experienced with.
      </p>
      <MarqueeFeature />
    </section>
  );
};

export default Skills;
