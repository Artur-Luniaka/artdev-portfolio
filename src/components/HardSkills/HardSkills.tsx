import HTML5 from "../HardSkillsIcons/HTML5";
import CSS3 from "../HardSkillsIcons/CSS3";
import JS from "../HardSkillsIcons/JS";
import TS from "../HardSkillsIcons/TS";
import s from "./HardSkills.module.css";
import React from "../HardSkillsIcons/React";
import Redux from "../HardSkillsIcons/Redux";
import Tailwind from "../HardSkillsIcons/Tailwind";
import Git from "../HardSkillsIcons/Git";
import Github from "../HardSkillsIcons/GitHub";
import VSC from "../HardSkillsIcons/VSC";
import { TbBrandVite } from "react-icons/tb";
import Vercel from "../HardSkillsIcons/Vercel";
import Figma from "../HardSkillsIcons/Figma";
import Sass from "../HardSkillsIcons/Sass";
import ReactRouter from "../HardSkillsIcons/ReactRouter";
import Npm from "../HardSkillsIcons/Npm";
import Postman from "../HardSkillsIcons/Postman";

const HardSkills = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Hard Skills</h2>
      <div className={s.list_wrapper}>
        <ul className={s.ul}>
          <li className={s.li}>
            <HTML5 className={s.icon} />
            <p className={s.itext}>HTML5</p>
          </li>
          <li className={s.li}>
            <CSS3 className={s.icon} />
            <p className={s.itext}>CSS3</p>
          </li>
          <li className={s.li}>
            <JS className={s.icon} />
            <p className={s.itext}>JavaScript</p>
          </li>
          <li className={s.li}>
            <TS className={s.icon} />
            <p className={s.itext}>TypeScript</p>
          </li>
          <li className={s.li}>
            <React className={s.icon} />
            <p className={s.itext}>React</p>
          </li>
          <li className={s.li}>
            <Redux className={s.icon} />
            <p className={s.itext}>Redux</p>
          </li>
          <li className={s.li}>
            <Tailwind className={s.icon} />
            <p className={s.itext}>TailwindCSS</p>
          </li>
          <li className={s.li}>
            <Git className={s.icon} />
            <p className={s.itext}>Git</p>
          </li>
          <li className={s.li}>
            <Github className={s.icon} />
            <p className={s.itext}>Github</p>
          </li>
          <li className={s.li}>
            <VSC className={s.icon} />
            <p className={s.itext}>VSCode</p>
          </li>
          <li className={s.li}>
            <TbBrandVite className={`${s.icon} ${s.acc}`} />
            <p className={s.itext}>Vite</p>
          </li>
          <li className={s.li}>
            <Vercel className={s.icon} />
            <p className={s.itext}>Vercel</p>
          </li>
          <li className={s.li}>
            <Figma className={s.icon} />
            <p className={s.itext}>Figma</p>
          </li>
          <li className={s.li}>
            <Sass className={s.icon} />
            <p className={s.itext}>Sass</p>
          </li>
          <li className={s.li}>
            <ReactRouter className={s.icon} />
            <p className={s.itext}>React Router</p>
          </li>
          <li className={s.li}>
            <Npm className={s.icon} />
            <p className={s.itext}>NPM</p>
          </li>
          <li className={s.li}>
            <Postman className={s.icon} />
            <p className={s.itext}>Postman</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HardSkills;
