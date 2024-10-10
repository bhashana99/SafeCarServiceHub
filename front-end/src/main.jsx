import React from "react";
import { AuthProvider } from "@asgardeo/auth-react";
import App from './App.jsx'
import ReactDom from 'react-dom/client'

const config = {
  signInRedirectURL: "https://localhost:3000/sign-in",
  signOutRedirectURL: "https://localhost:3000/sign-out",
  clientID: import.meta.env.VITE_CLIENT_ID,
  baseUrl: import.meta.env.VITE_BASE_URL,
  
  scope: [ "openid","profile","email" ]
};


ReactDom.createRoot(document.getElementById('root')).render(
  <AuthProvider config={ config }>
    <App />
  </AuthProvider>,
)
