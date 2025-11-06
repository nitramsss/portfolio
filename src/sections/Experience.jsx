import { myExperience } from "../constants";
import { Timeline } from "../components/Timeline";

const Experience = () => {
  return (
    <div className="mx-auto max-w-full bg-black/40 mask-t-from-90% mask-b-from-90%" id="experience">
  
      <div className="mx-auto max-w-7xl">
        <Timeline data={myExperience} /> 
      </div>
    </div>
  );
};

export default Experience;
