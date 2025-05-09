// import { createContext, useContext, useState } from "react";

// // Create context
// const AuthContext = createContext();

// // Custom hook for easy use
// export const useAuth = () => useContext(AuthContext);

// // Provider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // null = not logged in

//   const login = (userData) => setUser(userData);
//   const logout = () => setUser(null);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// import { createContext, useState } from "react";

// // ✅ Create the context
// export const AuthContext = createContext();

// // ✅ Create the provider
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const saved = localStorage.getItem("user");
//     return saved ? JSON.parse(saved) : null;
//   });

//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
    // import { createContext, useState, useEffect } from "react";
    // import { useNavigate } from "react-router-dom";

    // // Create a context to share the user data
    // export const AuthContext = createContext();

    // export const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null); // Store user info
    // const navigate = useNavigate();

    // useEffect(() => {
    //     // Check if there's a saved user session (e.g., from localStorage, cookies, etc.)
    //     const savedUser = JSON.parse(localStorage.getItem("user"));
    //     if (savedUser) {
    //     setUser(savedUser);
    //     navigate("/dashboard"); // Redirect to dashboard if user is logged in
    //     }
    // }, []);

    // const login = (userData) => {
    //     setUser(userData);
    //     localStorage.setItem("user", JSON.stringify(userData)); // Save to localStorage
    //     navigate("/dashboard"); // Redirect to dashboard after login
    // };

    // const logout = () => {
    //     setUser(null);
    //     localStorage.removeItem("user"); // Remove user data from localStorage
    //     navigate("/"); // Redirect to homepage after logout
    // };

    // return (
    //     <AuthContext.Provider value={{ user, login, logout }}>
    //     {children}
    //     </AuthContext.Provider>
    // );
    // };
    // import React, { createContext, useState, useEffect } from 'react';

    // export const AuthContext = createContext();
    
    // export const AuthProvider = ({ children }) => {
    //   const [user, setUser] = useState(null);
    //   const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    //   useEffect(() => {
    //     const token = localStorage.getItem('authToken');
    //     const storedUser = JSON.parse(localStorage.getItem("user"));
      
    //     if (token && storedUser) {
    //       setUser(storedUser);
    //       setIsAuthenticated(true);
    //     }
    //   }, []);
      
    //   const login = (userData) => {
    //     setUser(userData);
    //     setIsAuthenticated(true);
    //   };
    
    //   const logout = () => {
    //     setUser(null);
    //     setIsAuthenticated(false);
    //     localStorage.removeItem('authToken');
    //   };
    
    //   return (
    //     <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
    //       {children}
    //     </AuthContext.Provider>
    //   );
    // };


//     import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     const storedUser = localStorage.getItem('user');
//     if (token && storedUser) {
//       setUser(JSON.parse(storedUser));
//       setIsAuthenticated(true);
//     }
//     setLoading(false);
//   }, []);

//   const login = (userData) => {
//     setUser(userData);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     setUser(null);
//     setIsAuthenticated(false);
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('user');
//   };

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, login, logout , loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

    // Authcontext.jsx
// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true); // 👈 to wait before rendering

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     const storedUser = localStorage.getItem('user');

//     if (token && storedUser) {
//       setUser(JSON.parse(storedUser));
//       setIsAuthenticated(true);
//     }

//     setLoading(false); // Done checking
//   }, []);

//   const login = (userData) => {
//     setUser(userData);
//     setIsAuthenticated(true);
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     setIsAuthenticated(false);
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('user');
//   };

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); // 👈 Add this
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken); // 👈 Add this
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken); // 👈 Save token in state
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('authToken', authToken); // 👈 Save token in localStorage
  };

  const logout = () => {
    setUser(null);
    setToken(null); // 👈 Clear token
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

