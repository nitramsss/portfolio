import MarqueeFeature from "../components/Marquee";

const Skills = () => {
  return (
    <section className="container mx-auto md:pt-15 bg-black/50 mask-t-from-90% mask-b-from-90% md:pb-5 max-w-full" id="skills">
      <div className="flex justify-center sm:mb-5">
        <h1 className="text-5xl mb-4 text-neutral-300 font-black hidden sm:flex sm:pt-10 md:pt-0">
          SKILLS
        </h1>
      </div>
      <p className="text-center mt-5 mb-10 hidden md:block">
        These are the technologies I have experienced with.
      </p>
      <MarqueeFeature />
    </section>
  );
};

export default Skills;
