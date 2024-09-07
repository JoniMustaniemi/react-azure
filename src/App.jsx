import AppWrapper from "./components/appWrapper/AppWrapper.jsx";
import LoginOverlay from "./components/loginOverlay/LoginOverlay.jsx";
import Content from "./components/content/Content.jsx";
import { useAuth } from "./contexts/AuthContext.jsx";
import LogInButton from "./components/logInButton/LogInButton.jsx";
import "./app.scss";

function App() {
  const { loggedIn } = useAuth();

  return (
    <AppWrapper>
      {!loggedIn ? (
        <LoginOverlay />
      ) : (
        <>
          <LogInButton />
          <Content />
        </>
      )}
    </AppWrapper>
  );
}

export default App;
