import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './components/Authcontext.jsx'
import { BrowserRouter } from "react-router-dom";
import { AdminProvider } from './components/AdminContext.jsx'
createRoot(document.getElementById('root')).render(
 
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <AdminProvider>
          <App />
          </AdminProvider>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
)
