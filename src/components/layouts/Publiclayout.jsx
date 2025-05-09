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

import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Nav';

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;

