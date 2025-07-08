import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './components/Authcontext.jsx'
import { BrowserRouter } from "react-router-dom";
import { AdminProvider } from './components/AdminContext.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";
createRoot(document.getElementById('root')).render(
 
    <React.StrictMode>
      <GoogleOAuthProvider clientId="378885177546-959den15dk1j0jglskda6rcqnadop5ed.apps.googleusercontent.com">
      <BrowserRouter>
        <AuthProvider>
          <AdminProvider>
          <App />
          </AdminProvider>
        </AuthProvider>
      </BrowserRouter>
      </GoogleOAuthProvider>
    </React.StrictMode>
)
