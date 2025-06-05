// import React, { useContext } from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../Navbar/Nav';
// import { AuthContext } from '../Authcontext';

// const PublicLayout = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <div>
//       {/* Only show navbar when user is not logged in */}
//       {!user && <Navbar />}
//       <Outlet />
//     </div>
//   );
// };

// export default PublicLayout;

// import { Outlet } from 'react-router-dom';
// import Navbar from '../Navbar/Nav';

// const PublicLayout = () => {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <Outlet />
//       </main>
//     </>
//   );
// };

// export default PublicLayout;
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Nav';

const PublicLayout = () => {
  const location = useLocation();

  // List of routes where you want to hide the navbar
  const hideNavbarOnRoutes = ['/login', '/signup', '/forget'];

  const shouldShowNavbar = !hideNavbarOnRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;

