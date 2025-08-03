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
import { useContext, useState,useEffect } from 'react';
import { CiMenuKebab } from "react-icons/ci";
import { AuthContext } from '../Authcontext';
import { AiFillDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiMessage3Fill } from "react-icons/ri";
import { MdSupportAgent, MdLogout, MdOutlineAttachMoney } from "react-icons/md";
import { IoGiftSharp } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import '../../../src/components/layouts/Dashboardlayout.css';
import { RiFundsBoxFill } from "react-icons/ri";
import NotificationBell from '../../pages/NotificationBell';
import axios from "axios";
import Theme from "../../components/TopNav"
import { getStoredTheme, setTheme } from '../theme'; // adjust path as needed
import { FaTachometerAlt, FaWallet, FaBoxOpen, FaGift } from 'react-icons/fa';




const DashboardLayout = ({ children }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
 const API = import.meta.env.VITE_API_URL;

  const [user, setUser] = useState(null);

  const [theme, setThemeState] = useState(getStoredTheme());

  useEffect(() => {
    setTheme(theme); // Set data-theme and localStorage
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setThemeState(newTheme); // triggers both TopNav + Chart update
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user", err);
      }
    };

    fetchUser();
  }, []);

  const getInitial = (name) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase();
  };


  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: <AiFillDashboard /> },
     { path: '/funding', label: 'Fund Account', icon: <RiFundsBoxFill /> },
    { path: '/withdraw', label: 'Withdrawal', icon: <MdOutlineAttachMoney /> },
     { path: '/notifications', label: 'Notifications', icon: <RiMessage3Fill /> },
    { path: '/plans', label: 'Plans', icon: <MdOutlineAttachMoney /> },
    { path: '/support', label: 'Support', icon: <MdSupportAgent /> },
    { path: '/reward', label: 'reward', icon: <IoGiftSharp /> },
     { path: '/profile', label: 'Profile', icon: <CgProfile /> },
  ];

  return (
    <div className={`layout-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Top Nav */}
      <div className="top-nav">
        <button className="toggle-button" onClick={() => setSidebarOpen(!isSidebarOpen)}>
         <CiMenuKebab />
        </button>
        <div className="nav-title flex items-center gap-2">
          <Theme user={user} theme={theme} toggleTheme={toggleTheme} />
          <Link to="/notifications" className='notification-icon text-[var(--White)]'>
          <svg
  height="20px"
  width="20px"
  viewBox="0 0 512 512"
  fill="#000000"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <path
      style={{ fill: '#FFAA00' }}
      d="M256,100.174c-27.619,0-50.087-22.468-50.087-50.087S228.381,0,256,0s50.087,22.468,50.087,50.087 S283.619,100.174,256,100.174z M256,33.391c-9.196,0-16.696,7.5-16.696,16.696s7.5,16.696,16.696,16.696 c9.196,0,16.696-7.5,16.696-16.696S265.196,33.391,256,33.391z"
    />
    <path
      style={{ fill: '#F28D00' }}
      d="M256.006,0v33.394c9.194,0.003,16.69,7.5,16.69,16.693s-7.496,16.69-16.69,16.693v33.394 c27.618-0.004,50.081-22.469,50.081-50.087S283.624,0.004,256.006,0z"
    />
    <path
      style={{ fill: '#FFAA00' }}
      d="M256,512c-46.043,0-83.478-37.435-83.478-83.478c0-9.228,7.467-16.696,16.696-16.696h133.565 c9.228,0,16.696,7.467,16.696,16.696C339.478,474.565,302.043,512,256,512z"
    />
    <path
      style={{ fill: '#F28D00' }}
      d="M322.783,411.826h-66.777V512c46.042-0.004,83.473-37.437,83.473-83.478 C339.478,419.293,332.011,411.826,322.783,411.826z"
    />
    <path
      style={{ fill: '#FFDA44' }}
      d="M439.652,348.113v-97.678C439.642,149,357.435,66.793,256,66.783 C154.565,66.793,72.358,149,72.348,250.435v97.678c-19.41,6.901-33.384,25.233-33.391,47.017 c0.01,27.668,22.419,50.075,50.087,50.085h333.913c27.668-0.01,50.077-22.417,50.087-50.085 C473.036,373.346,459.063,355.014,439.652,348.113z"
    />
    <path
      style={{ fill: '#FFAA00' }}
      d="M439.652,348.113v-97.678C439.642,149,357.435,66.793,256,66.783v378.432h166.957 c27.668-0.01,50.077-22.417,50.087-50.085C473.036,373.346,459.063,355.014,439.652,348.113z"
    />
    <path
      style={{ fill: '#FFF3DB' }}
      d="M155.826,267.13c-9.228,0-16.696-7.467-16.696-16.696c0-47.022,28.011-89.283,71.381-107.641 c8.446-3.587,18.294,0.326,21.88,8.836c3.62,8.51-0.358,18.294-8.836,21.88c-31.012,13.142-51.033,43.337-51.033,76.925 C172.522,259.663,165.054,267.13,155.826,267.13z"
    />
  </g>
</svg>

          </Link>
          <Link to="/profile" className='flex items-center profile-top-nav'>
         {user && (
        <>
          
          <span className="text-white user-header-h1 font-medium capitalize">{user.username}</span>
          <div className="user-header w-10 h-10 rounded-full  flex items-center justify-center text-black font-bold text-lg">
            {getInitial(user.username)}
          </div>
        </>
      )}
      </Link>
          </div>
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
                <span className='nav-elements'>{link.label}</span>
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
      <main  className="main-content mb-[60px]">
        {children}
        
      </main>
      <nav className="md:hidden rounded-[40px] fixed bottom-0 left-0 right-0 bg-[var(--bs-body-bg)] border-t border-gray-200 dark:border-gray-700 shadow-md flex justify-around items-center h-16 z-100">
      <Link to="/dashboard" className="flex flex-col items-center text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white">
        <FaTachometerAlt className="text-lg text-[var(--Kumera)]" />
        <span className="text-[var(--White)]">Dashboard</span>
      </Link>
      <Link to="/funding" className="flex flex-col items-center text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white">
        <FaWallet className="text-lg text-[var(--Kumera)]" />
        <span className="text-[var(--White)]">Fund</span>
      </Link>
      <Link to="/plans" className="flex flex-col items-center text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white">
        <FaBoxOpen className="text-lg text-[var(--Kumera)]" />
        <span className="text-[var(--White)]">Plans</span>
      </Link>
      <Link to="/reward" className="flex flex-col items-center text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white">
        <FaGift className="text-lg text-[var(--Kumera)]" />
        <span className="text-[var(--White)]">Rewards</span>
      </Link>
    </nav>
    </div>
  );
};

export default DashboardLayout;
