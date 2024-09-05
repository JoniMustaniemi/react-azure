import "./header.scss";
import LoginButton from "../loginButton/LogInButton.jsx";

const Header = () => {
  return (
    <div className="header">
      <div className="loginButtonContainer">
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
