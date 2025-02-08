import { MdOutlineRocketLaunch } from "react-icons/md";
import s from "./WebNavMenu.module.css";
import { HideMobMenu } from "../MobNavMenu/MobNavMenu";

const WebNavMenu = ({ handleShowMenu }: HideMobMenu) => {
  return (
    <nav>
      <ul onClick={handleShowMenu} className={s.ul}>
        <li>
          <a className={s.a} href="#about">
            About Me
            <MdOutlineRocketLaunch />
          </a>
        </li>
        <li>
          <a className={s.a} href="#skills">
            My Skills
            <MdOutlineRocketLaunch />
          </a>
        </li>
        <li>
          <a className={s.a} href="#">
            My Projects
            <MdOutlineRocketLaunch />
          </a>
        </li>
        <li>
          <a className={s.a} href="#">
            Contacts
            <MdOutlineRocketLaunch />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default WebNavMenu;
