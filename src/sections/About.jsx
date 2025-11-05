const About = () => {
  return (
    <section className="container mx-auto mt-5" id="about">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-3 xl:px-40">
        <div className="hidden rounded-3xl bg-slate-950 grid-col-2 md:flex justify-center items-center max-sm:h-100">
          <img
            src="/assets/pro.jpg"
            alt="Fitz Martin"
            className="m-0 rounded-lg mask-r-from-30% object-cover w-full h-full"
          />
        </div>
        <div className="grid-default-color grid-col-1 md:col-span-2 text-justify bg-gradient-to-r from-emerald-500 from-10% via-indigo-950 via-20% to-slate-500 to-90%">
          <h1 className="text-4xl font-bold mb-4 text-neutral-300 flex max-sm:justify-center items-center">
            About Me
          </h1>
          <p className="hidden md:block xl:text-xl leading-relaxed text-neutral-400">
            I am currently pursuing my bachelor's degree at the{" "}
            <b className="text-white">
              Polytechnic University of the Philippines, Quezon City
            </b>
            . I have a passion for sharing my own stories and listening to
            others’, as well as for teaching and learning — both inside and
            beyond the four corners of the classroom. When it comes to work, I
            believe in working both hard and smart, as it helps us reach our
            full potential faster. <br />
            <br /> I am deeply committed to continuous learning and believe that
            no information is ever unnecessary as every piece of knowledge has
            value and can be applied in our daily lives. As for free time, I see
            it as something we create for ourselves, a chance to make memories,
            whether by playing, watching, exercising, or exploring something
            new.
          </p>
          <p className="md:hidden xl:text-xl leading-relaxed text-neutral-400">
            I am currently pursuing my bachelor's degree at the{" "}
            <b className="text-white">
              Polytechnic University of the Philippines, Quezon City
            </b>
            . I have a passion for sharing my own stories and listening to
            others.
            <br />
            <br /> When it comes to work, I believe in working both hard and
            smart, as it helps us reach our full potential faster. I am deeply
            committed to continuous learning and believe that no information is
            ever unnecessary as every piece of knowledge has value and can be
            applied in our daily lives.
          </p>
        </div>
        <div className=" rounded-3xl bg-slate-950 grid-col-2 md:hidden justify-center items-center h-100">
          <img
            src="/assets/pro.png"
            alt="Fitz Martin"
            className="m-0 rounded-lg mask-r-from-30% mask-b-from-40% mask-b-to-99%  object-cover
             w-full h-full align-middle items-center flex justify-center"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
