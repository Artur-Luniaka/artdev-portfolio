import s from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={s.logoBack}>
      <a className={s.logo} href="/">
        ArtDevExpert
      </a>
    </div>
  );
};

export default Logo;
