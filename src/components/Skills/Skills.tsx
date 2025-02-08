import HardSkills from "../HardSkills/HardSkills";
import SoftSkills from "../SoftSkills/SoftSkills";
import s from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={s.wrapper}>
      <HardSkills />
      <SoftSkills />
    </div>
  );
};

export default Skills;
