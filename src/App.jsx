import AppWrapper from "./components/appWrapper/AppWrapper.jsx";
import Header from "./components/header/Header.jsx";
import Content from "./components/content/Content.jsx";

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
