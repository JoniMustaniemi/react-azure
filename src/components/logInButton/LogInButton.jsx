import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../auth/authConfig";
import { useAuth } from "../../contexts/AuthContext";

const LoginButton = () => {
  const { instance } = useMsal();
  const { loggedIn, setLoggedIn } = useAuth();

  const handleLogin = async () => {
    try {
      if (loggedIn) {
        // Log the user out if currently logged in.
        await instance.logoutPopup();
        setLoggedIn(false);
      } else {
        // Log the user in if not logged in.
        await instance.loginPopup(loginRequest);

        // Fetch access token.
        // await instance.acquireTokenPopup(loginRequest);

        // Set logged status to true
        setLoggedIn(true);
      }
    } catch (error) {
      console.error("Error during authentication", error);
    }
  };

  return (
    <button onClick={handleLogin}>
      {loggedIn ? "Log Out" : "Login with Azure AD"}
    </button>
  );
};

export default LoginButton;
