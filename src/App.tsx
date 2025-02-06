import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import BodyWrapper from "./components/BodyWrapper/BodyWrapper";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Hero from "./components/Hero/Hero";
import MainContentWrapper from "./components/MainContentWrapper/MainContentWrapper";
import MobNavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <BodyWrapper>
      <ContentWrapper>
        <MobNavBar />
        <MainContentWrapper>
          <Hero />
          <AboutMe />
        </MainContentWrapper>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default App;
