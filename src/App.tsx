import "./App.css";
import BodyWrapper from "./components/BodyWrapper/BodyWrapper";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";

const App = () => {
  return (
    <BodyWrapper>
      <ContentWrapper>
        <h1>Hello, World!</h1>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default App;
