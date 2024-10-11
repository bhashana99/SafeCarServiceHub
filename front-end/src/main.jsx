import React from "react";
import { AuthProvider } from "@asgardeo/auth-react";
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { config } from "./config.jsx";
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider config={ config }>
    <App />
  </AuthProvider>
  </React.StrictMode>
)
