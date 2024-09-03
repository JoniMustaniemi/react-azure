import AppWrapper from "./components/appWrapper/AppWrapper";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import "./app.scss";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Content />
    </AppWrapper>
  );
}

export default App;
