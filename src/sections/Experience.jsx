import { myExperience } from "../constants";
import { Timeline } from "../components/Timeline";

const Experience = () => {
  return (
    <div className="mx-auto max-w-full" id="experience">
  
      <div>
        <Timeline data={myExperience} /> 
      </div>
    </div>
  );
};

export default Experience;
