// PrivateRoute.js
// import React, { useContext } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { AuthContext } from '../components/Authcontext'; // Import your AuthContext

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { isAuthenticated, user } = useContext(AuthContext); // Using context for authentication state

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated && user?.isVerified ? ( // Ensure the user is authenticated and verified
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" /> // Redirect to login page if not authenticated/verified
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
// import { Navigate } from 'react-router-dom'; // Correct import for React Router v6
// import { useContext } from 'react';
// import { AuthContext } from '../components/Authcontext'; // Adjust the path to your AuthContext

// const PrivateRoute = ({ children }) => {
//   const { user, loading  } = useContext(AuthContext);


  
// if (loading) {
//     return <div>Loading...</div>; // Or a spinner
//   }

//   if (!user) {
//     return <Navigate to="/login" />; // Redirect to login if user is not authenticated
//   }

//   return children; // Render the protected route (Dashboard in this case)
// };

// export default PrivateRoute;
// PrivateRoute.jsx
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Authcontext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>; // Optional

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
