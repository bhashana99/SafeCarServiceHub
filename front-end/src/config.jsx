export const config = {
  signInRedirectURL: "http://localhost:5173/",
  signOutRedirectURL: "http://localhost:5173/login",
  clientID: import.meta.env.VITE_CLIENT_ID,
  baseUrl: import.meta.env.VITE_BASE_URL,
  scope: ["openid", "profile","phone",  "address", "email"],
};
