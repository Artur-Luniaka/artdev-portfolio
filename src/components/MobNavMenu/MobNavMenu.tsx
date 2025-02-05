import Github from "../Socials/GitHub";
import Instagram from "../Socials/Instagram";
import LinkedIn from "../Socials/Linkedin";
import Telegram from "../Socials/Telegram";
import s from "./MobNavMenu.module.css";
import { MdOutlineRocketLaunch } from "react-icons/md";

const MobNavMenu = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.ul}>
        <li className={s.li}>
          <a className={s.a} href="#">
            About Me
            <MdOutlineRocketLaunch />
          </a>
        </li>
        <li className={s.li}>
          <a className={s.a} href="#">
            My Skills
            <MdOutlineRocketLaunch />
          </a>
        </li>
        <li className={s.li}>
          <a className={s.a} href="#">
            My Projects
            <MdOutlineRocketLaunch />
          </a>
        </li>
        <li className={s.li}>
          <a className={s.a} href="#">
            Contacts
            <MdOutlineRocketLaunch />
          </a>
        </li>
      </ul>
      <div>
        <ul className={s.socials}>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className={s.a_social} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <LinkedIn className={s.a_social} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Telegram className={s.a_social} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Instagram className={s.a_social} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobNavMenu;
