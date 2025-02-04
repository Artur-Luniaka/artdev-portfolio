import "./App.css";
import BodyWrapper from "./components/BodyWrapper/BodyWrapper";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import MainContentWrapper from "./components/MainContentWrapper/MainContentWrapper";
import MobNavBar from "./components/MobNavBar/MobNavBar";

const App = () => {
  return (
    <BodyWrapper>
      <ContentWrapper>
        <MobNavBar />
        <MainContentWrapper>
          <h1>Hello World!</h1>
        </MainContentWrapper>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default App;
