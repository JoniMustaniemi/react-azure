export const msalConfig = {
  auth: {
    clientId: "<YOUR_CLIENT_ID>", // Client ID.
    authority: `https://login.microsoftonline.com/<YOUR_TENANT_ID>`, // Tenant ID.
    redirectUri: "http://localhost:3000", // Redirect URI in Azure.
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};
