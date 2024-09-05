import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./auth/authConfig.js";
import { AuthProvider } from "./contexts/AuthContext";

const msalInstance = new PublicClientApplication(msalConfig);

createRoot(document.getElementById("root")).render(
  <MsalProvider instance={msalInstance}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </MsalProvider>
);
