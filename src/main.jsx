import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./auth/authConfig.js";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme.jsx";

const msalInstance = new PublicClientApplication(msalConfig);

createRoot(document.getElementById("root")).render(
  <MsalProvider instance={msalInstance}>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </MsalProvider>
);
