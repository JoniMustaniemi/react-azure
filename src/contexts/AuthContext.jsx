import { createContext, useState, useEffect, useContext } from "react";
import { useMsal } from "@azure/msal-react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { accounts, instance } = useMsal();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there are accounts
    setLoggedIn(accounts.length > 0);
  }, [accounts]);

  const login = async () => {
    try {
      await instance.loginPopup();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    try {
      await instance.logoutPopup();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
