import AppWrapper from "./components/appWrapper/AppWrapper.jsx";
import Header from "./components/header/Header.jsx";
import Content from "./components/content/Content.jsx";
import { useEffect } from "react";

import "./app.scss";

function App() {
  useEffect(() => {
    console.log("Arrived to the front page");
  }, []);

  return (
    <AppWrapper>
      <Header />
      <Content />
    </AppWrapper>
  );
}

export default App;
