import s from "./Hero.module.css";
import { BsPhoneVibrate } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={s.wrapper}>
      <picture>
        <source
          className={s.img}
          srcSet="/../../public/hero.web.webp"
          media="(min-width: 1280px)"
        />
        <source
          className={s.img}
          srcSet="/../../public/hero.tab.webp"
          media="(min-width: 768px)"
        />
        <img
          className={s.img}
          src="/../../public/hero.mob.webp"
          alt="ArtDevExpert Image"
        />
      </picture>
      <a className={s.btn} href="#">
        Contact <BsPhoneVibrate /> me
      </a>
    </div>
  );
};

export default Hero;
