import Marquee from "react-fast-marquee";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import OtherTools from "./OtherTools";

const MarqueeFeature = () => {
  return (
    <section className="mt-10">
      <div className="sm:hidden mask-b-from-70% mask-b-to-100% pb-10">
        <div className="items-center align-middle justify-center flex flex-col mask-r-from-60% mask-l-from-60% md:mask-r-from-50% md:mask-l-from-50% pb-10">
          <h1 className="text-3xl font-black text-center mb-10">Frontend</h1>
          <Marquee>
            <FrontendSkills />
          </Marquee>
        </div>
        <div className="items-center align-middle justify-center flex flex-col mask-r-from-60% mask-l-from-60% md:mask-r-from-50% md:mask-l-from-50% pb-10">
          <h1 className="text-3xl font-black text-center mb-10">Backend</h1>
          <Marquee direction="right" speed="90">
            <BackendSkills />
          </Marquee>
        </div>
        <div className="items-center align-middle justify-center flex flex-col mask-r-from-60% mask-l-from-60% md:mask-r-from-50% md:mask-l-from-50% pb-10">
          <h1 className="text-3xl font-black text-center mb-10">Other Tools</h1>
          <Marquee speed="80">
            <OtherTools />
          </Marquee>
        </div>
      </div>
        <div className="items-center align-middle justify-center mask-r-from-50% mask-l-from-50% mask-b-from-20% mask-b-to-80%v hidden sm:flex pb-20">
          <Marquee speed="100"> {/* pauseOnClick={true} pauseOnHover={true} */}
            <FrontendSkills />
            <BackendSkills />
            <OtherTools />
          </Marquee>
        </div>
    </section>
  );
};

export default MarqueeFeature;
