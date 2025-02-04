import Logo from "../Logo/Logo";
import { FaHamburger } from "react-icons/fa";
import s from "./MobNavBar.module.css";
import MobNavMenu from "../MobNavMenu/MobNavMenu";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MobNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowMenu = () => {
    if (!isOpen) return setIsOpen(true);
    if (isOpen) return setIsOpen(false);
  };

  return (
    <>
      <header className={s.header}>
        <Logo />
        <button className={s.btn} onClick={handleShowMenu} type="button">
          <FaHamburger className={`${s.icon} ${isOpen && s.icon_open}`} />
        </button>
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
