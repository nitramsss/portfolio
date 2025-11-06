import AboutText from "../components/AboutText";
import Particles from "../components/Particles";

const About = () => {
  return (
    <div
      className="w-full justify-center items-center relative mask-t-from-90% mask-b-from-90% bg-black/70"
      id="about"
    >
      <div
        style={{ width: "100%", height: "600px", position: "relative" }}
        className="items-center justify-center flex align-middle absolute inset-0 bg-black/70"
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <AboutText />
      </div>
    </div>
  );
};

export default About;
