// import { useState } from 'react'
// import Users from "../src/pages/Users"
// import Login from "../src/pages/Login";
// import Signup from "../src/pages/Signup";
// import Navbar from "../src/components/Navbar/Nav"
// import VerifyOtp from './pages/VerifyEmail';
// import CheckEmail from './pages/CheckEmail';
// import VerifyEmail from './pages/VerifyEmail';
// import Dashboard from './pages/Dashboard';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//    <Router>
//       <Navbar />
//       <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
 
//       <Route path="/verify-email" element={<VerifyEmail />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//     </>
//   )
// }

// export default App
// import { useState } from 'react'
// import Users from "../src/pages/Users"
// import Login from "../src/pages/Login";
// import Signup from "../src/pages/Signup";
// import Navbar from "../src/components/Navbar/Nav"
// import VerifyEmail from './pages/VerifyEmail';
// import Dashboard from './pages/Dashboard';
// import PrivateRoute from './components/PrivateRoute';
// import { Routes, Route,Switch  } from "react-router-dom"; 
// import Homepage from "./pages/Homepage" // ❌ Don't import BrowserRouter here

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Navbar />
//       <Switch>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/verify-email" element={<VerifyEmail />} />
//         <PrivateRoute path="/dashboard" component={Dashboard} />
//         </Switch>
//     </>
//   )
// }

// export default App;
// import React, { useEffect, useState ,useContext} from 'react';
// import Loader from '../src/components/Layout'; // adjust path
// import { Routes, Route } from 'react-router-dom'; // Use Routes and Route from react-router-dom
// import Users from "../src/pages/Users";
// import { AuthContext } from '../src/components/Authcontext';
// import Login from "../src/pages/Login";
// import Signup from "../src/pages/Signup";
// import Navbar from "../src/components/Navbar/Nav";
// import VerifyEmail from './pages/VerifyEmail';
// import Dashboard from './pages/Dashboard';
// import PrivateRoute from './components/PrivateRoute'; // Make sure you import PrivateRoute correctly
// import Homepage from "./pages/Homepage";
// import PublicLayout from './components/layouts/Publiclayout';
// import DashboardLayout from './components/layouts/Dashboardlayout';

// import './App.css';

// function App() {

//   const { isAuthenticated } = useContext(AuthContext);
 

//   return (
//     <>
//       <Navbar />
//       <Loader > {/* Show loader on route change */}
//       <Routes> {/* Use Routes instead of Switch */}
//         <Route path="/" element={<Homepage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/verify-email" element={<VerifyEmail />} />
//         {/* Use PrivateRoute as a wrapper to protect the Dashboard route */}
//         <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//       </Routes>
//       </Loader > 
//     </>
//   );
// }

// export default App;

// import React, { useContext } from 'react';
// import Loader from './components/Layout'; // adjust path
// import { Routes, Route } from 'react-router-dom';
// import { AuthContext } from './components/Authcontext'; // make sure the context is correct
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Navbar from './components/Navbar/Nav';
// import VerifyEmail from './pages/VerifyEmail';
// import Dashboard from './pages/Dashboard';
// import PrivateRoute from './components/PrivateRoute';
// import Homepage from './pages/Homepage';
// import PublicLayout from './components/layouts/PublicLayout'; // Adjust path
// import DashboardLayout from "../src/components/layouts/Dashboardlayout"; // Adjust path

// import './App.css';

// function App() {
//   const { isAuthenticated } = useContext(AuthContext);

//   return (
//     <>
//       <Navbar />
//       <Loader>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/verify-email" element={<VerifyEmail />} />
          
//           {/* Use PublicLayout for unauthenticated users */}
//           {!isAuthenticated ? (
//             <Route path="/" element={<PublicLayout><Homepage /></PublicLayout>} />
//           ) : (
//             // Use DashboardLayout for authenticated users
//             <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
//           )}

//           {/* Protected Route for dashboard */}
//           <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//         </Routes>
//       </Loader>
//     </>
//   );
// }

// export default App;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import AdminDashboard from './pages/AdminDashboard';

// import { AuthContext } from '../src/components/Authcontext';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

// import Dashboard from './pages/Dashboard';
// import Homepage from './pages/Homepage';
// import PrivateRoute from '../src/components/PrivateRoute';
// import PublicLayout from '../src/components/layouts/Publiclayout';
// import DashboardLayout from '../src/components/layouts/Dashboardlayout';
// import Profile from './pages/Profile';
// import AdminLogin from './pages/AdminLogin';
// import PlanPage from '../src/components/Plans/PlanPage';
// import Showplan from '../src/components/Showplan/Showplan';
// import About from "../src/components/About/About";
// import Contact from "./pages/Contact"
// import PrivacyPolicy from "./pages/Privacy";
// import PaymentPage from './pages/PaymentFunding';
// import Forgetpassword from './pages/Forgetpassword/ForgetPassword';
// import ResetPassword from './pages/Forgetpassword/ResetPassword';
// function App() {
//   const { isAuthenticated } = React.useContext(AuthContext);

//   return (
    
//       <Routes>
//         {/* PUBLIC ROUTES WRAPPED IN PUBLIC LAYOUT */}
//         <Route element={<PublicLayout />}>
        
//           <Route path="/" element={<Homepage />} />
         
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/investmentPlan" element={<Showplan />} />

          
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/privacypolicy" element={<PrivacyPolicy />} />
//           <Route path="/forget"  element={<Forgetpassword/>}/>
//           <Route path="/reset-password/:resetToken" element={<ResetPassword />} />


//         </Route>


//         <Routes>
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin/dashboard" element={<AdminDashboard />} />
//         {/* Other routes */}
//       </Routes>

//         {/* PRIVATE ROUTES WRAPPED IN DASHBOARD LAYOUT */}
//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               <DashboardLayout>
//                 <Dashboard />
//               </DashboardLayout>
//             </PrivateRoute>
//           }
//         />
//          {/* ✅ PROFILE ROUTE */}
//          <Route
//           path="/profile"
//           element={
//             <PrivateRoute>
//               <DashboardLayout>
//                 <Profile />
//               </DashboardLayout>
//             </PrivateRoute>
//           }
//         />
//         {/* STAKE FORM ROUTE */}
       

//          <Route
//           path="/plans"
//           element={
//             <PrivateRoute>
//               <DashboardLayout>
//                 <PlanPage />
//               </DashboardLayout>
//             </PrivateRoute>
//           }
//         />

// <Route
//           path="/funding"
//           element={
//             <PrivateRoute>
//               <DashboardLayout>
//                 <PaymentPage />
//               </DashboardLayout>
//             </PrivateRoute>
//           }
//         />

// <Route
//           path="/admin"
//           element={
//             <PrivateRoute>
//               <DashboardLayout>
//                 <AdminDashboard />
//               </DashboardLayout>
//             </PrivateRoute>
//           }
//         />
//       </Routes>
      
    
//   );
// }

// export default App;

import { Routes, Route } from 'react-router-dom';
import React ,{useEffect, useState}from 'react';
import { AuthContext } from '../src/components/Authcontext';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import PublicLayout from './components/layouts/Publiclayout';
import DashboardLayout from './components/layouts/Dashboardlayout';
import Profile from './pages/Profile';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminPrivateRoute from './components/AdminPrivateRoute';
import AdminDashboardLayout from './components/layouts/AdminDashboardLayout';
import PlanPage from './components/Plans/PlanPage';
import Showplan from './components/Showplan/Showplan';
import About from "./components/About/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/Privacy";
import PaymentPage from './pages/PaymentFunding';
import Forgetpassword from './pages/Forgetpassword/ForgetPassword';
import ResetPassword from './pages/Forgetpassword/ResetPassword';
import AdminUsers from './pages/AdminUsers';
import CreateUserForm from './pages/CreateUserForm';
import Withdraw from './pages/Withdraw';
import AdminWithdrawals from './pages/AdminWithdraw';
import UserHistory from './pages/UserHistory';
import AdminDepositDetails from './pages/AdminDepositDetails';
import AdminDeposits from './pages/AdminDeposits';
import ChatTest from './pages/ChatTest';
import AdminChat from './pages/AdminChat';
import UserNotifications from './pages/UserNotifications';
import "../src/App.css"; // Import your CSS file for global styles
import CookieConsentModal from './components/CookieConsentModal/CookieConsentModal';
import Preloader from './components/Preloader/Preloader';

import AssistantIndicator from './components/AiIndicator/Aiindicator';
// function App() {
//   const { isAuthenticated, user } = React.useContext(AuthContext);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => setLoading(false), 2000); // match preloader
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
    
//  {loading ? (
//   <Preloader />
// ) : (
//     <>
  
//     <CookieConsentModal/>
//     <AssistantIndicator />
//     <Routes>
      
//       {/* PUBLIC ROUTES */}
//       <Route element={<PublicLayout />}>
      
       
//         <Route path="/" element={<Homepage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/investmentPlan" element={<Showplan />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/privacypolicy" element={<PrivacyPolicy />} />
//         <Route path="/forget" element={<Forgetpassword />} />
//         <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
//       </Route>

//       {/* USER DASHBOARD ROUTES */}
//       <Route
//         path="/dashboard"
//         element={
//           <PrivateRoute>
//             <DashboardLayout>
//               <Dashboard />
//             </DashboardLayout>
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/profile"
//         element={
//           <PrivateRoute>
//             <DashboardLayout>
//               <Profile />
//             </DashboardLayout>
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/plans"
//         element={
//           <PrivateRoute>
//             <DashboardLayout>
//               <PlanPage />
//             </DashboardLayout>
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/funding"
//         element={
//           <PrivateRoute>
//             <DashboardLayout>
//               <PaymentPage />
//             </DashboardLayout>
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/support"
//         element={
//           <PrivateRoute>
//             <DashboardLayout>
//               <ChatTest />
//             </DashboardLayout>
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/withdraw"
//         element={
//           <PrivateRoute>
//             <DashboardLayout>
//               <Withdraw />
//             </DashboardLayout>
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/notifications"
//         element={
//           <PrivateRoute>
//             <DashboardLayout>
//               <UserNotifications/>
//             </DashboardLayout>
//           </PrivateRoute>
//         }
//       />
     

//       {/* ADMIN ROUTES */}
//       <Route path="/admin/login" element={<AdminLogin />} />
//       <Route
//         path="/admin/dashboard"
//         element={
//           <AdminPrivateRoute>
//             <AdminDashboardLayout>
//               <AdminDashboard />
//                 </AdminDashboardLayout>
//               </AdminPrivateRoute>
//         }
//       />
//       <Route
//         path="/admin/withdrawals"
//         element={
//           <AdminPrivateRoute>
//             <AdminDashboardLayout>
//               <AdminWithdrawals />
//             </AdminDashboardLayout>
//           </AdminPrivateRoute>
//         }
//       />
//       <Route path="/admin/users" element={
//         <AdminPrivateRoute>
//             <AdminDashboardLayout>
//         <AdminUsers />    </AdminDashboardLayout>
//         </AdminPrivateRoute>} />
//                <Route path="/admin/users/new" element={
//         <AdminPrivateRoute>
//             <AdminDashboardLayout>
//                 <CreateUserForm />
//             </AdminDashboardLayout>
//         </AdminPrivateRoute>} />  
//         <Route
//   path="/admin/deposits"
//   element={
//     <AdminPrivateRoute>
//       <AdminDashboardLayout>
//         <AdminDeposits />
//       </AdminDashboardLayout>
//     </AdminPrivateRoute>
//   }
// />

// <Route
//   path="/admin/deposit/:id"
//   element={
//     <AdminPrivateRoute>
//       <AdminDashboardLayout>
//         <AdminDepositDetails />
//       </AdminDashboardLayout>
//     </AdminPrivateRoute>
//   }
// />
// <Route
//   path="/admin/messages"
//   element={
//     <AdminPrivateRoute>
//       <AdminDashboardLayout>
//         <AdminChat />
//       </AdminDashboardLayout>
//     </AdminPrivateRoute>
//   }
// />


//     </Routes>
   
//     </>
//      )}
//   );
// }

// export default App;

function App() {
  const { isAuthenticated, user } = React.useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // simulate preloader
    return () => clearTimeout(timeout);
  }, []);

  return loading ? (
    <Preloader />
  ) : (
    <>
      <CookieConsentModal />
      <AssistantIndicator />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/investmentPlan" element={<Showplan />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/forget" element={<Forgetpassword />} />
          <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
        </Route>

        {/* USER DASHBOARD ROUTES */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <Profile />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/plans"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <PlanPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />


        
        <Route
          path="/funding"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <PaymentPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/support"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ChatTest />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/withdraw"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <Withdraw />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <UserNotifications />
              </DashboardLayout>
            </PrivateRoute>
          }
        />

        {/* ADMIN ROUTES */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminPrivateRoute>
              <AdminDashboardLayout>
                <AdminDashboard />
              </AdminDashboardLayout>
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/withdrawals"
          element={
            <AdminPrivateRoute>
              <AdminDashboardLayout>
                <AdminWithdrawals />
              </AdminDashboardLayout>
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminPrivateRoute>
              <AdminDashboardLayout>
                <AdminUsers />
              </AdminDashboardLayout>
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/users/new"
          element={
            <AdminPrivateRoute>
              <AdminDashboardLayout>
                <CreateUserForm />
              </AdminDashboardLayout>
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/deposits"
          element={
            <AdminPrivateRoute>
              <AdminDashboardLayout>
                <AdminDeposits />
              </AdminDashboardLayout>
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/deposit/:id"
          element={
            <AdminPrivateRoute>
              <AdminDashboardLayout>
                <AdminDepositDetails />
              </AdminDashboardLayout>
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/messages"
          element={
            <AdminPrivateRoute>
              <AdminDashboardLayout>
                <AdminChat />
              </AdminDashboardLayout>
            </AdminPrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
