import "./App.css";
import BodyWrapper from "./components/BodyWrapper/BodyWrapper";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import MainContentWrapper from "./components/MainContentWrapper/MainContentWrapper";
import MobNavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <BodyWrapper>
      <ContentWrapper>
        <MobNavBar />
        <MainContentWrapper>
          <h1>Hello, world!</h1>
        </MainContentWrapper>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default App;
