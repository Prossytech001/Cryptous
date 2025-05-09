// import { Link } from "react-router-dom";


// const DashboardLayout = ({ children }) => {
  
//     return (
//       <div className="dashboard-container" style={{ display: 'flex' }}>
//         <aside style={{ width: '250px', background: '#eee', padding: '1rem' }}>
//           {/* Sidebar content (like navigation links) */}
//           <Link to={"/"}><h3>Dashboard Menu</h3></Link>
//           {/* You can add <NavLink> here for navigation */}
//         </aside>
//         <main style={{ flex: 1, padding: '1rem' }}>
          
//         </main>
//       </div>
//     );
//   };
  
//   export default DashboardLayout;


// import { Link } from "react-router-dom";

// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="dashboard-container" style={{ display: 'flex' }}>
//       <aside style={{ width: '250px', background: '#eee', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
//         {/* Sidebar content (like navigation links) */}
//         <Link to="/dashboard"><h3>Dashboard Menu</h3></Link>
//         <Link to="/profile">Profile</Link>
//         <Link to="/notifications">Notifications</Link>
//         <Link to="/support">Support</Link>
//       </aside>

//       <main style={{ flex: 1, padding: '1rem' }}>
//         {/* This is important! */}
//         {children}
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;


// import { Link, useNavigate} from 'react-router-dom';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../Authcontext';
// import { FaBars, FaTimes } from 'react-icons/fa'; // For toggle icons
// import "../layouts/Dashboardlayout.css";
// import { AiFillDashboard } from "react-icons/ai";
// import { CgProfile } from "react-icons/cg";
// import { RiMessage3Fill } from "react-icons/ri";
// import { MdSupportAgent } from "react-icons/md";

// const DashboardLayout = ({ children }) => {
//   const { logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(prev => !prev);
//   };

//   return (
//     <div style={{ display: 'flex', minHeight: 'auto' }}>
//       {/* Toggle Button (top-left corner) */}
//       <button
//         onClick={toggleSidebar}

//         style={{
//           position: 'fixed',
//           top: 20,
//           left: 15,
//           zIndex: 1000,
//           background: 'transparent',
//           border: 'none',
//           fontSize: '1.5rem',
//           cursor: 'pointer',
//         }}
//       >
//         {isSidebarOpen ? <FaTimes className='aside_toggle'/> : <FaBars className='aside_toggles'/>}
//       </button>

//       {/* Sidebar */}
//       <aside
//       className='aside__content'
//         style={{
//           width: isSidebarOpen ? '250px' : '0',
//           overflow: 'hidden',
//           transition: 'width 0.3s ease',
          
//           padding: isSidebarOpen ? '0rem 0rem 0 1rem' : '0',
//           whiteSpace: 'nowrap',
//         }}
//       >
//         {isSidebarOpen && (
//           <>
        
//           <div className="aside__Contents">
//           <h3 className='aside__h3'>Menu</h3>
//             <ul 
//             className='aside__ul'
//             style={{ listStyle: 'none', padding: 0 }}>
              
//               <li><AiFillDashboard className='aside_icon'/><Link to="/dashboard">Dashboard</Link></li>
//               <li><CgProfile className='aside_icon'/><Link to="/profile">Profile</Link></li>
//               <li><RiMessage3Fill className='aside_icon'/><Link to="/notifications">Notifications</Link></li>
//               <li><RiMessage3Fill className='aside_icon'/><Link to="/stake-form">invest</Link></li>
//               <li><MdSupportAgent className='aside_icon'/><Link to="/support">Support</Link></li>
//               <li><MdSupportAgent className='aside_icon'/><Link to="/plans">Plans</Link></li>
//               <button
//               onClick={handleLogout}
//              className="side__button"
//             >
//               Logout
//             </button>
//             </ul>
           
//             </div>
//           </>
//         )}
//       </aside>

//       {/* Main Content */}
//       <main
//         style={{
//           flex: 2,
//           background: '#ffffff',
//           padding: '2rem',
//           marginLeft: isSidebarOpen ? '0' : '0',
//           transition: 'margin 0.3s ease',
//         }}
//         className='main__content'
//       >
//          {children}
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../Authcontext';
// import { AiFillDashboard } from "react-icons/ai";
// import { CgProfile } from "react-icons/cg";
// import { RiMessage3Fill } from "react-icons/ri";
// import { MdSupportAgent, MdLogout, MdOutlineAttachMoney } from "react-icons/md";
// import { FaBars, FaTimes } from "react-icons/fa";

// const DashboardLayout = ({ children }) => {
//   const { logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const navLinks = [
//     { path: '/dashboard', label: 'Dashboard', icon: <AiFillDashboard /> },
//     { path: '/profile', label: 'Profile', icon: <CgProfile /> },
//     { path: '/notifications', label: 'Notifications', icon: <RiMessage3Fill /> },
//     { path: '/stake-form', label: 'Invest', icon: <MdOutlineAttachMoney /> },
//     { path: '/support', label: 'Support', icon: <MdSupportAgent /> },
//     { path: '/plans', label: 'Plans', icon: <MdSupportAgent /> },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-50 relative">

//       {/* --- Top Nav with open toggle on mobile --- */}
      

//       {/* --- Sidebar (fixed on desktop, overlay on mobile) --- */}
//       <aside
//         className={`bg-white shadow-md w-64 h-full fixed top-0 left-0 z-40 transform transition-transform duration-300 ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full translate-x-0 static block'
//         } translate-x-0 static block`}
//       >
//         <div className="flex flex-col h-full pt-16 md:pt-6">
//           {/* Close button inside sidebar on mobile */}
//           <div className=" flex justify-end pr-4">
//             <button onClick={() => setSidebarOpen(false)} className="text-2xl text-gray-600">
//               <FaTimes />
//             </button>
//           </div>

//           <nav className="flex-1 overflow-auto px-4 py-6 space-y-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setSidebarOpen(false)} // close sidebar on click (mobile)
//                 className={`flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition ${
//                   location.pathname === link.path ? 'bg-gray-200 font-semibold' : ''
//                 }`}
//               >
//                 <span className="text-lg">{link.icon}</span>
//                 <span className="text-sm">{link.label}</span>
//               </Link>
//             ))}
//           </nav>

//           <div className="border-t px-4 py-4">
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-3 text-red-600 hover:text-red-700 text-sm w-full"
//             >
//               <MdLogout className="text-lg" />
//               Logout
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* --- Main content (below nav on mobile) --- */}
//       <main className="flex-1 mt-16 md:mt-0 md:ml-64 p-4 transition-all duration-300">
//       <div className="w-full  top-0 left-0 bg-white shadow z-30 flex items-center justify-between px-4 py-3 ">
//         <div className="text-xl font-bold text-gray-700">Alex Touch</div>
//         <button onClick={() => setSidebarOpen(true)} className="text-2xl text-gray-700">
//           <FaBars />
//         </button>
//       </div>
//         {children}
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../Authcontext';
// import { AiFillDashboard } from "react-icons/ai";
// import { CgProfile } from "react-icons/cg";
// import { RiMessage3Fill } from "react-icons/ri";
// import { MdSupportAgent, MdLogout, MdOutlineAttachMoney } from "react-icons/md";
// import { FaBars, FaTimes } from "react-icons/fa";

// const DashboardLayout = ({ children }) => {
//   const { logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const navLinks = [
//     { path: '/dashboard', label: 'Dashboard', icon: <AiFillDashboard /> },
//     { path: '/profile', label: 'Profile', icon: <CgProfile /> },
//     { path: '/notifications', label: 'Notifications', icon: <RiMessage3Fill /> },
//     { path: '/stake-form', label: 'Invest', icon: <MdOutlineAttachMoney /> },
//     { path: '/support', label: 'Support', icon: <MdSupportAgent /> },
//     { path: '/plans', label: 'Plans', icon: <MdSupportAgent /> },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-50 relative">

//       {/* --- Top Nav with open toggle on mobile --- */}
      

//       {/* --- Sidebar (fixed on desktop, overlay on mobile) --- */}
//       <aside
//         className={`bg-white shadow-md w-64 h-full fixed top-0 left-0 z-40 transform transition-transform duration-300 ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full translate-x-0 static block'
//         } translate-x-0 static block`}
//       >
//         <div className="flex flex-col h-full pt-16 md:pt-6">
//           {/* Close button inside sidebar on mobile */}
//           <div className=" flex justify-end pr-4">
//             <button onClick={() => setSidebarOpen(false)} className="text-2xl text-gray-600">
//               <FaTimes />
//             </button>
//           </div>

//           <nav className="flex-1 overflow-auto px-4 py-6 space-y-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setSidebarOpen(false)} // close sidebar on click (mobile)
//                 className={`flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition ${
//                   location.pathname === link.path ? 'bg-gray-200 font-semibold' : ''
//                 }`}
//               >
//                 <span className="text-lg">{link.icon}</span>
//                 <span className="text-sm">{link.label}</span>
//               </Link>
//             ))}
//           </nav>

//           <div className="border-t px-4 py-4">
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-3 text-red-600 hover:text-red-700 text-sm w-full"
//             >
//               <MdLogout className="text-lg" />
//               Logout
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* --- Main content (below nav on mobile) --- */}
//       <main className="flex-1 mt-16 md:mt-0 md:ml-64 p-4 transition-all duration-300">
//       <div className="w-full  top-0 left-0 bg-white shadow z-30 flex items-center justify-between px-4 py-3 ">
//         <div className="text-xl font-bold text-gray-700">Alex Touch</div>
//         <button onClick={() => setSidebarOpen(true)} className="text-2xl text-gray-700">
//           <FaBars />
//         </button>
//       </div>
//         {children}
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;


// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../Authcontext';
// import { AiFillDashboard } from "react-icons/ai";
// import { CgProfile } from "react-icons/cg";
// import { RiMessage3Fill } from "react-icons/ri";
// import { MdSupportAgent, MdLogout, MdOutlineAttachMoney } from "react-icons/md";
// import { FaBars, FaTimes } from "react-icons/fa";
// import './DashboardLayout.css';

// const DashboardLayout = ({ children }) => {
//   const { logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const navLinks = [
//     { path: '/dashboard', label: 'Dashboard', icon: <AiFillDashboard /> },
//     { path: '/profile', label: 'Profile', icon: <CgProfile /> },
//     { path: '/notifications', label: 'Notifications', icon: <RiMessage3Fill /> },
//     { path: '/stake-form', label: 'Invest', icon: <MdOutlineAttachMoney /> },
//     { path: '/support', label: 'Support', icon: <MdSupportAgent /> },
//     { path: '/plans', label: 'Plans', icon: <MdSupportAgent /> },
//   ];

//   return (
//     <div className="layout-container">
//       {/* Top Navbar (mobile only) */}
//       <div className="mobile-nav">
//       <button className={`toggle-button `} onClick={() => setSidebarOpen(true)}>
//           <FaBars />
//         </button>
//         <div className="nav-title">Alex Touch</div>
        
//       </div>

//       {/* Sidebar */}
//       <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}> 
//         <div className="sidebar-inner">
//           {/* Close button (mobile) */}
//           <div className="sidebar-close">
//             <button onClick={() => setSidebarOpen(false)}>
//               <FaTimes />
//             </button>
//           </div>

//           {/* Navigation */}
//           <nav className="nav-links">
//             {navLinks.map(link => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setSidebarOpen(false)}
//                 className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
//               >
//                 <span className="nav-icon">{link.icon}</span>
//                 <span>{link.label}</span>
//               </Link>
//             ))}
//           </nav>

//           <div className="logout-container">
//             <button onClick={handleLogout} className="logout-btn">
//               <MdLogout className="nav-icon" />
//               Logout
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;


import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Authcontext';
import { AiFillDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiMessage3Fill } from "react-icons/ri";
import { MdSupportAgent, MdLogout, MdOutlineAttachMoney } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: <AiFillDashboard /> },
    { path: '/profile', label: 'Profile', icon: <CgProfile /> },
    { path: '/notifications', label: 'Notifications', icon: <RiMessage3Fill /> },
    { path: '/plans', label: 'Plans', icon: <MdOutlineAttachMoney /> },
    { path: '/support', label: 'Support', icon: <MdSupportAgent /> },
   
  ];

  return (
    <div className="layout-container">
      {/* Top Nav */}
      <div className="top-nav">
        <button className="toggle-button" onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <FaBars />
        </button>
        <div className="nav-title">Cryptous</div>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-inner">
          <div className="sidebar-close">
            <button onClick={() => setSidebarOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Navigation */}
          <nav className="nav-links">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setSidebarOpen(false)}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="logout-container">
            <button onClick={handleLogout} className="logout-btn">
              <MdLogout className="nav-icon" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
