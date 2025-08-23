

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
import ReferralRewards from './pages/ReferralRewards';
import { getStoredTheme, setTheme } from "./components/theme";
import AdminVisitorTrack from './pages/AdminVisitorTrack';
import useVisitorTracking from './components/useVisitorTracking';
import AdminPlanManager from './pages/AdminPlanManager';
import AdminEmailSender from './pages/AdminEmailSender';
import VisitorEmailGate from './components/VisitorEmailGate';
import useEmailGate from './components/useEmailGate';
import AdminEmails from './pages/AdminEmails';
import AssistantIndicator from './components/AiIndicator/Aiindicator';
import ScrollToTop from './components/ScrollToTop';


function App() {
  const { isAuthenticated, user } = React.useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const { open, setOpen, submitEmail } = useEmailGate();

 useVisitorTracking();


useEffect(() => {
    const savedTheme = getStoredTheme();
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // simulate preloader
    return () => clearTimeout(timeout);
  }, []);

  return loading ? (
    <Preloader />
  ) : (
    <>
    <ScrollToTop /> 
    <VisitorEmailGate
    open={open}
        onClose={() => {
          setOpen(false);
          sessionStorage.setItem("visitorTracked", "true");
        }}
        onSubmit={submitEmail}/>
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
        <Route
          path="/reward"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ReferralRewards/>
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
        <Route
          path="/admin/track"
          element={
            <AdminPrivateRoute>
              <AdminDashboardLayout>
                <AdminVisitorTrack />
              </AdminDashboardLayout>
            </AdminPrivateRoute>
          }
        />
         <Route
          path="/admin/plans"
          element={
            <AdminPrivateRoute>
              <AdminDashboardLayout>
                <AdminPlanManager/>
              </AdminDashboardLayout>
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/email"
          element={
            <AdminPrivateRoute>
              <AdminDashboardLayout>
                <AdminEmailSender/>
              </AdminDashboardLayout>
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/adminemail"
          element={
            <AdminPrivateRoute>
              <AdminDashboardLayout>
                <AdminEmails/>
              </AdminDashboardLayout>
            </AdminPrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
