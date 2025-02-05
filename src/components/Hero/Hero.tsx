import s from "./Hero.module.css";
import { BsPhoneVibrate } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={s.img}>
      <button className={s.btn} type="button">
        Contact <BsPhoneVibrate /> me
      </button>
    </div>
  );
};

export default Hero;
