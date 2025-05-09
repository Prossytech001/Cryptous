// src/components/Layout.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const Layout = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust as needed
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <Loader /> : <>{children}</>;
};

export default Layout;
