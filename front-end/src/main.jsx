import React from "react";
import { AuthProvider } from "@asgardeo/auth-react";
import App from './App.jsx'
import ReactDom from 'react-dom/client'
import { config } from "./config.js";


ReactDom.createRoot(document.getElementById('root')).render(
  <AuthProvider config={ config }>
    <App />
  </AuthProvider>,
)
