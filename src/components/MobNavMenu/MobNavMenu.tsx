import Github from "../Socials/GitHub";
import Instagram from "../Socials/Instagram";
import LinkedIn from "../Socials/Linkedin";
import Telegram from "../Socials/Telegram";
import s from "./MobNavMenu.module.css";
import { MdOutlineRocketLaunch } from "react-icons/md";

type HideMobMenu = {
  handleShowMenu: () => void;
};

const MobNavMenu = ({ handleShowMenu }: HideMobMenu) => {
  return (
    <nav className={s.nav}>
      <ul onClick={handleShowMenu} className={s.ul}>
        <li className={s.li}>
          <a className={s.a} href="#about">
            About Me
            <MdOutlineRocketLaunch />
          </a>
        </li>
        <li className={s.li}>
          <a className={s.a} href="#skills">
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
            <a
              href="https://github.com/Artur-Luniaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className={s.a_social} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/artur-luniaka-developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className={s.a_social} />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/Sma11Genius"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram className={s.a_social} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/artur.luniaka/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className={s.a_social} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobNavMenu;
