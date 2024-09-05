import AppWrapper from "./components/appWrapper/AppWrapper";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
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
