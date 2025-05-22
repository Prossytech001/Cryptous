// import React, { useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';

// const AdminPrivateRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const user = JSON.parse(localStorage.getItem('user'));

//     // Check if token and user exist and are an admin
//     if (token && user && (user.isAdmin || user.role === 'admin')) {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//     }

//     setIsLoading(false);
//   }, []); // Empty dependency array means it runs only once when the component mounts

//   // Show loading spinner or placeholder until authentication state is resolved
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   // If authenticated, render the children (admin content)
//   if (isAuthenticated) {
//     return children;
//   }

//   // Redirect to login page if not authenticated
//   return <Navigate to="/admin/login" replace />;
// };

// export default AdminPrivateRoute;
// components/AdminPrivateRoute.jsx
// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const AdminPrivateRoute = ({ children }) => {
//   const adminToken = localStorage.getItem('adminToken');
//   const adminUser = JSON.parse(localStorage.getItem('adminUser'));

//   if (!adminToken || !adminUser?.isAdmin) {
//     return <Navigate to="/admin/login" replace />;
//   }

//   return children;
// };

// export default AdminPrivateRoute;
// components/AdminPrivateRoute.jsx
// import React, { useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import axios from 'axios';

// const AdminPrivateRoute = ({ children }) => {
//   const [isValid, setIsValid] = useState(null);
//   const api = import.meta.env.VITE_API_URL

//   useEffect(() => {
//     const token = localStorage.getItem('adminToken');
//     console.log('[AdminPrivateRoute] Checking token:', token);
  
//     if (!token) {
//       console.warn('[AdminPrivateRoute] No token found');
//       setIsValid(false);
//       return;
//     }
  
//     axios.get(`${api}/api/admin/verify`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then(() => {
//         console.log('[AdminPrivateRoute] Token verified ✅');
//         setIsValid(true);
//       })
//       .catch((err) => {
//         console.error('[AdminPrivateRoute] Token invalid ❌:', err.response?.data?.message || err.message);
//         localStorage.removeItem('adminToken');
//         setIsValid(false);
//       });
//   }, []);
  

//   if (isValid === null) return <p>Loading...</p>;
  

//   return children;
// };

// export default AdminPrivateRoute;
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const AdminPrivateRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    console.log('[AdminPrivateRoute] Checking token:', token);

    if (!token) {
      setIsValid(false);
      return;
    }

    axios.get(`${api}/api/admin/verify`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        console.log('[AdminPrivateRoute] Token verified ✅');
        setIsValid(true);
      })
      .catch((err) => {
        console.warn('[AdminPrivateRoute] Token invalid ❌:', err.response?.data?.message || err.message);

        // Only remove token if it's truly invalid — delay to debug
        setTimeout(() => {
          localStorage.removeItem('adminToken');
          setIsValid(false);
        }, 500); // slight delay to help trace it
      });
  }, []);

  if (isValid === null) return <p>Loading Admin...</p>;
  if (!isValid) return <Navigate to="/admin/login" />;

  return children;
};

export default AdminPrivateRoute;
