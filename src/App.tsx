import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import BodyWrapper from "./components/BodyWrapper/BodyWrapper";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Hero from "./components/Hero/Hero";
import MainContentWrapper from "./components/MainContentWrapper/MainContentWrapper";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <BodyWrapper>
      <ContentWrapper>
        <NavBar />
        <MainContentWrapper>
          <Hero />
          <AboutMe />
          <Skills />
        </MainContentWrapper>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default App;
