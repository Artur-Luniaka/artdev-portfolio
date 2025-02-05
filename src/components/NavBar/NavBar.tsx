import Logo from "../Logo/Logo";
import { FaHamburger } from "react-icons/fa";
import s from "./NavBar.module.css";
import MobNavMenu from "../MobNavMenu/MobNavMenu";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WebNavMenu from "../WebNavMenu/WebNavMenu";

const MobNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowBurger, setIsShowBurger] = useState(true);

  const handleShowMenu = () => {
    if (!isOpen) return setIsOpen(true);
    if (isOpen) return setIsOpen(false);
  };

  const checkScreenSize = () => {
    if (window.innerWidth >= 1280) return setIsShowBurger(false);
    if (window.innerWidth <= 1280) return setIsShowBurger(true);
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      <header className={s.header}>
        <Logo />
        {isShowBurger && (
          <button className={s.btn} onClick={handleShowMenu} type="button">
            <FaHamburger className={`${s.icon} ${isOpen && s.icon_open}`} />
          </button>
        )}
        {!isShowBurger && <WebNavMenu />}
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <MobNavMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobNavBar;
