import s from "./SoftSkills.module.css";

const SoftSkills = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Soft Skills</h2>
      <div className={s.list_wrapper}>
        <ul className={s.ul}>
          <div className={s.tab_wrapper}>
            <li className={s.li}>Teamwork</li>
            <li className={s.li}>Leadership skills</li>
            <li className={s.li}>Responsibility</li>
            <li className={s.li}>Adaptability</li>
            <li className={s.li}>Time management</li>
          </div>
          <div className={s.tab_wrapper}>
            <li className={s.li}>Communication skills</li>
            <li className={s.li}>Stress resistance</li>
            <li className={s.li}>Critical thinking</li>
            <li className={s.li}>Problem-solving</li>
            <li className={s.li}>Fast learning</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SoftSkills;
