import { MdOutlineRocketLaunch } from "react-icons/md";
import s from "./WebNavMenu.module.css";

const WebNavMenu = () => {
  return (
    <nav>
      <ul className={s.ul}>
        <li>
          <a className={s.a} href="#">
            About Me
            <MdOutlineRocketLaunch />
          </a>
        </li>
        <li>
          <a className={s.a} href="#">
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
