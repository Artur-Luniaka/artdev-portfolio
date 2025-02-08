import s from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div id="about" className={s.wrapper}>
      <h2 className={s.title}>About Me</h2>
      <span className={s.span}>
        <p className={s.text}>
          My name is <b>Artur Luniaka</b>, and I am a <b>Frontend Developer</b>{" "}
          specializing in creating modern, adaptive, and high-performance web
          applications and websites. I focus on clean code, user experience, and
          efficient interfaces. I have experience with state management,
          asynchronous requests, and component architecture. I am also familiar
          with performance optimization, project bundling, and deployment
          processes. In team projects, I have taken on roles as a{" "}
          <b>Team Lead</b> and <b>Scrum Master</b>, successfully organizing
          workflows, ensuring deadlines are met, and maintaining effective team
          communication. I continuously learn new technologies and strive to
          grow as a professional, aiming to build user-friendly and innovative
          digital products. <b>Excited</b> for new challenges and interesting
          projects! <b>Below</b>, you can explore the tools and technologies I
          work with, as well as some of my projects.
        </p>
      </span>
      <img className={s.img} src="/AboutMobTab.webp" alt="My Photo" />
    </div>
  );
};

export default AboutMe;
