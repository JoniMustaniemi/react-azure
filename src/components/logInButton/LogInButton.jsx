import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../auth/authConfig.js";
import { useAuth } from "../../contexts/AuthContext.jsx";
import Button from "@mui/material/Button";

const LoginButton = () => {
  const { instance } = useMsal();
  const { loggedIn, setLoggedIn } = useAuth();

  const handleLogin = async () => {
    try {
      if (loggedIn) {
        // Log the user out.
        await instance.logoutPopup();

        setLoggedIn(false);
      } else {
        // Log the user in if not logged in.
        await instance.loginPopup(loginRequest);

        setLoggedIn(true);
      }
    } catch (error) {
      console.error("Error during authentication", error);
    }
  };
  return (
    <Button
      onClick={handleLogin}
      variant="contained"
      color="secondary"
      size="large"
      sx={{
        position: "absolute",
        top: "2%",
        right: "3%",
        zIndex: 2,
      }}
    >
      {loggedIn ? "Log Out" : "Login"}
    </Button>
  );
};

export default LoginButton;
