export const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_APP_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${
      import.meta.env.VITE_APP_TENANT_ID
    }`,
    redirectUri: import.meta.env.VITE_APP_REDIRECT_URI,
  },
  cache: {
    cacheLocation: "sessionStorage",
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};
