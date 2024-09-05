import { useAuth } from "../../contexts/AuthContext.jsx";
import "./content.scss";

const Content = () => {
  const { loggedIn } = useAuth();

  return (
    <div className="contentWrapper">
      <p>This is a template content component.</p>
      <p>{loggedIn ? "Logged In" : "Logged Out"}</p>
    </div>
  );
};

export default Content;
