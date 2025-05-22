// src/components/AdminContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken') || null);

  const login = (token) => {
    localStorage.setItem('adminToken', token);
    setAdminToken(token);
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setAdminToken(null);
  };

  const isAuthenticated = !!adminToken;

  return (
    <AdminContext.Provider value={{ adminToken, login, logout, isAuthenticated }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
