
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../Authcontext';
// import { RiMessage3Fill } from "react-icons/ri";
// import { MdLogout, MdOutlineAttachMoney, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { BsGraphUp } from 'react-icons/bs';
// import { FiSettings } from 'react-icons/fi';
// import { FaUsers } from 'react-icons/fa';
// import { AiFillDashboard } from "react-icons/ai";

// const DashboardLayout = ({ children }) => {
//   const { logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [openUsers, setOpenUsers] = useState(false);
//   const [openTransactions, setOpenTransactions] = useState(false);
//   const [openReports, setOpenReports] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   return (
//     <div className="flex h-screen bg-blue-50 text-blue-900">
//       {/* Sidebar */}
//       <aside className={`aside_admin fixed z-40 top-0 left-0 h-full  shadow-md w-72 transform transition-transform duration-300 ease-in-out justify-between
//         ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
//         md:translate-x-0 md:static md:flex md:flex-col`}>
//           <nav className="flex flex-col gap-7 p-4">
//         <div className="flex items-center justify-between px-6 py-4 border-b">
//           <h1 className="text-xl font-bold text-blue-700">Admin Panel</h1>
//           <button className="md:hidden text-xl" onClick={() => setSidebarOpen(false)}><FaTimes /></button>
//         </div>

        
//           <Link to="/admin/dashboard" className={`admin-panel-link flex items-center gap-3 px-4 py-3  text-lg  transition ${location.pathname === '/admin/dashboard' ? 'bg-gray-600 text-white font-semibold' : ''}`}>
//              <AiFillDashboard className="text-xl" /> Dashboard
//           </Link>
//           {/* Users */}
//           <div>
//             <button onClick={() => setOpenUsers(!openUsers)} className="admin-panel-link flex justify-between items-center w-full text-left px-3 py-2 rounded hover:bg-blue-100">
//               <span className="flex items-center gap-2"><FaUsers /> Users</span>
//               {openUsers ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//             </button>
//             {openUsers && (
//               <div className="ml-6 mt-1 flex flex-col text-sm gap-1">
//                 <Link to="/admin/users" className="text-gray-300 hover:text-blue-600">View All Users</Link>
//                 <Link to="/admin/users/new" className="text-gray-300 hover:text-blue-600">Add New User</Link>
//               </div>
//             )}
//           </div>

//           {/* Transactions */}
//           <div>
//             <button onClick={() => setOpenTransactions(!openTransactions)} className="admin-panel-link flex justify-between items-center w-full text-left px-3 py-2 rounded hover:bg-blue-100">
//               <span className="flex items-center gap-2"><MdOutlineAttachMoney /> Transactions</span>
//               {openTransactions ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//             </button>
//             {openTransactions && (
//               <div className="ml-6 mt-1 flex flex-col text-sm gap-1">
//                 <Link to="/admin/deposits" className="text-gray-300 hover:text-blue-600">Deposits</Link>
//                 <Link to="/admin/withdrawals" className="text-gray-300 hover:text-blue-600">Withdrawals</Link>
//                 <Link to="/admin/approvals" className="text-gray-300 hover:text-blue-600">Approvals</Link>
//               </div>
//             )}
//           </div>

//           {/* Messages */}
//           <Link to="/admin/messages" className={`admin-panel-link flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100 transition ${location.pathname === '/admin/messages' ? 'bg-blue-600 text-white' : ''}`}>
//             <RiMessage3Fill /> Messages
//           </Link>

//           {/* Reports */}
//           <div>
//             <button onClick={() => setOpenReports(!openReports)} className="admin-panel-link flex justify-between items-center w-full text-left px-3 py-2 rounded hover:bg-blue-100">
//               <span className="flex items-center gap-2"><BsGraphUp /> Reports</span>
//               {openReports ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//             </button>
//             {openReports && (
//               <div className="ml-6 mt-1 flex flex-col text-sm gap-1">
//                 <Link to="/admin/track" className="text-gray-300 hover:text-blue-600">Track visitor</Link>
//                 <Link to="/admin/plans" className="text-gray-300 hover:text-blue-600">plans</Link>
//                 <Link to="/admin/email" className="text-gray-300 hover:text-blue-600">Send Email</Link>
//               </div>
//             )}
//           </div>

//           {/* Settings */}
//           <Link to="/admin/settings" className={`admin-panel-link flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100 transition ${location.pathname === '/admin/settings' ? 'bg-blue-600 text-white' : ''}`}>
//             <FiSettings /> Settings
//           </Link>
//         </nav>

//         <div className="mt-auto p-4 border-t">
//           <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 hover:bg-red-100 w-full px-3 py-2 rounded">
//             <MdLogout /> Logout
//           </button>
//         </div>
//       </aside>

//       {/* Toggle Button */}
//       <button className="md:hidden fixed top-4 left-4 z-1 bg-blue-600 text-white p-3 rounded-full shadow-md" onClick={() => setSidebarOpen(!isSidebarOpen)}>
//         <FaBars />
//       </button>

//       {/* Main Content */}
//       <main className="flex-1 p-12 m-0 md:ml-72 overflow-y-auto">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../Authcontext';
// import { RiMessage3Fill } from "react-icons/ri";
// import { MdLogout, MdOutlineAttachMoney, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { BsGraphUp } from 'react-icons/bs';
// import { FiSettings, FiBell } from 'react-icons/fi';
// import { FaUsers } from 'react-icons/fa';
// import { AiFillDashboard } from "react-icons/ai";

// const DashboardLayout = ({ children }) => {
//   const { logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [openUsers, setOpenUsers] = useState(false);
//   const [openTransactions, setOpenTransactions] = useState(false);
//   const [openReports, setOpenReports] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className={`z-40 top-0 left-0  bg-white admin-aside text-[#111827] border-r  shadow-sm transform transition-transform duration-300 ease-in-out w-64 md:translate-x-0 md:static ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//         <div className="h-full flex flex-col justify-between">
//           <nav className="flex flex-col gap-1 nk-menu">
//             <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E7EB]">
//               <h1 className="text-xl font-bold nk-text">Admin Panel</h1>
//               <button className="md:hidden text-xl nk-menu-link" onClick={() => setSidebarOpen(false)}><FaTimes /></button>
//             </div>

//             <Link to="/admin/dashboard" className={`flex items-center gap-3 px-4 py-2 rounded-[50px] text-base font-medium ${location.pathname === '/admin/dashboard' ? 'bg-[#ffffff] text-blue' : 'hover:bg-[#F3F4F6]'} nk-menu-link`}><AiFillDashboard className='nk-menu-icon ' /> Dashboard</Link>

//             <div>
//               <button onClick={() => setOpenUsers(!openUsers)} className="flex justify-between items-center w-full px-4 py-2 rounded-xxl hover:bg-[#F3F4F6] text-base font-medium">
//                 <span className="flex items-center gap-2 nk-menu-link "><FaUsers className='nk-menu-icon '/> Users</span>
//                 {openUsers ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//               </button>
//               {openUsers && (
//                 <div className="ml-6 flex flex-col text-sm gap-1">
//                   <Link to="/admin/users" className="text-[#6B7280] hover:text-[#2563EB] nk-menu-link ">View All Users</Link>
//                   <Link to="/admin/users/new" className="text-[#6B7280] hover:text-[#2563EB] nk-menu-link ">Add New User</Link>
//                 </div>
//               )}
//             </div>

//             <div>
//               <button onClick={() => setOpenTransactions(!openTransactions)} className="flex justify-between items-center w-full px-4 py-2 rounded-md hover:bg-[#F3F4F6] text-base font-medium">
//                 <span className="flex items-center gap-2 nk-menu-link "><MdOutlineAttachMoney  className='nk-menu-icon '/> Transactions</span>
//                 {openTransactions ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//               </button>
//               {openTransactions && (
//                 <div className="ml-6 flex flex-col text-sm gap-1">
//                   <Link to="/admin/deposits" className="text-[#6B7280] hover:text-[#2563EB] nk-menu-link ">Deposits</Link>
//                   <Link to="/admin/withdrawals" className="text-[#6B7280] hover:text-[#2563EB] nk-menu-link ">Withdrawals</Link>
//                   <Link to="/admin/approvals" className="text-[#6B7280] hover:text-[#2563EB] nk-menu-link ">Approvals</Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/admin/messages" className={`flex items-center gap-3 px-4 py-2 rounded-[50px] text-base font-medium ${location.pathname === '/admin/messages' ? 'bg-[#ffffff] text-white' : 'hover:bg-[#F3F4F6]'} nk-menu-link`}><RiMessage3Fill className='nk-menu-icon '/> Messages</Link>

//             <div>
//               <button onClick={() => setOpenReports(!openReports)} className="flex justify-between items-center w-full px-4 py-2 rounded-md hover:bg-[#F3F4F6] text-base font-medium">
//                 <span className="flex items-center gap-2 nk-menu-link"><BsGraphUp className='nk-menu-icon '/> Reports</span>
//                 {openReports ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//               </button>
//               {openReports && (
//                 <div className="ml-6 flex flex-col text-sm gap-1">
//                   <Link to="/admin/track" className="text-[#6B7280] hover:text-[#2563EB] nk-menu-link">Track Visitor</Link>
//                   <Link to="/admin/plans" className="text-[#6B7280] hover:text-[#2563EB] nk-menu-link">Plans</Link>
//                   <Link to="/admin/email" className="text-[#6B7280] hover:text-[#2563EB] nk-menu-link">Send Email</Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/admin/settings" className={`flex items-center gap-3 px-4 py-2 rounded-md text-base font-medium ${location.pathname === '/admin/settings' ? 'bg-[#2563EB] text-white' : 'hover:bg-[#F3F4F6]'} nk-menu-link`}><FiSettings  className='nk-menu-icon '/> Settings</Link>
//           </nav>

//           <div className="border-t border-[#E5E7EB] p-4">
//             <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 hover:bg-red-50 w-full px-3 py-2 rounded-md">
//               <MdLogout /> Logout
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* Topbar and Main Content */}
//       <div className="flex-1 flex flex-col">
//         <header className="sticky top-0 z-20 border-b nk-header  px-4 py-3 flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <button className="md:hidden text-[#111827] text-xl" onClick={() => setSidebarOpen(true)}><FaBars /></button>
//             <h2 className="text-lg font-medium text-[#111827]">Dashboard</h2>
//           </div>
//           <div className="flex items-center gap-4">
//             <FiBell className="text-xl text-[#111827] cursor-pointer" />
//             <div className="w-8 h-8 rounded-full bg-gray-300" />
//           </div>
//         </header>

//         <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#ffffff]">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../Authcontext';
import { RiMessage3Fill } from "react-icons/ri";
import { MdLogout, MdOutlineAttachMoney, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsGraphUp } from 'react-icons/bs';
import { FiSettings, FiBell } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { AiFillDashboard } from "react-icons/ai";

const DashboardLayout = ({ children }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = useRef(null);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const [openTransactions, setOpenTransactions] = useState(false);
  const [openReports, setOpenReports] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed z-40 admin-aside top-0 left-0 h-full bg-white text-[#111827] border-r shadow-sm w-64 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-full flex flex-col justify-between">
          <nav className="flex flex-col gap-1">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E7EB]">
              <h1 className="text-xl font-bold">Admin Panel</h1>
              <button className="md:hidden text-xl" onClick={() => setSidebarOpen(false)}><FaTimes /></button>
            </div>

            <Link to="/admin/dashboard" className={`flex items-center gap-3 px-4 py-2 rounded-full text-base font-medium ${location.pathname === '/admin/dashboard' ? 'bg-[#2563EB] text-white' : 'hover:bg-[#F3F4F6]'} nk-menu-link `}><AiFillDashboard /> Dashboard</Link>

            <div>
              <button onClick={() => setOpenUsers(!openUsers)} className="flex justify-between items-center w-full px-4 py-2 rounded-md hover:bg-[#F3F4F6] text-base font-medium nk-menu-link ">
                <span className="flex items-center gap-2"><FaUsers /> Users</span>
                {openUsers ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </button>
              {openUsers && (
                <div className="ml-6 flex flex-col text-sm gap-1">
                  <Link to="/admin/users" className="text-[#6B7280] hover:text-[#2563EB]">View All Users</Link>
                  <Link to="/admin/users/new" className="text-[#6B7280] hover:text-[#2563EB]">Add New User</Link>
                </div>
              )}
            </div>

            <div>
              <button onClick={() => setOpenTransactions(!openTransactions)} className="flex justify-between items-center w-full px-4 py-2 rounded-md hover:bg-[#F3F4F6] text-base font-medium nk-menu-link ">
                <span className="flex items-center gap-2"><MdOutlineAttachMoney /> Transactions</span>
                {openTransactions ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </button>
              {openTransactions && (
                <div className="ml-6 flex flex-col text-sm gap-1">
                  <Link to="/admin/deposits" className="text-[#6B7280] hover:text-[#2563EB]">Deposits</Link>
                  <Link to="/admin/withdrawals" className="text-[#6B7280] hover:text-[#2563EB]">Withdrawals</Link>
                  
                </div>
              )}
            </div>

            <Link to="/admin/messages" className={`flex items-center gap-3 px-4 py-2 rounded-full text-base font-medium ${location.pathname === '/admin/messages' ? 'bg-[#2563EB] text-white' : 'hover:bg-[#F3F4F6]'} nk-menu-link `}><RiMessage3Fill /> Messages</Link>

            <div>
              <button onClick={() => setOpenReports(!openReports)} className="flex justify-between items-center w-full px-4 py-2 rounded-md hover:bg-[#F3F4F6] text-base font-medium nk-menu-link ">
                <span className="flex items-center gap-2"><BsGraphUp /> Reports</span>
                {openReports ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </button>
              {openReports && (
                <div className="ml-6 flex flex-col text-sm gap-1">
                  <Link to="/admin/track" className="text-[#6B7280] hover:text-[#2563EB]">Track Visitor</Link>
                  <Link to="/admin/plans" className="text-[#6B7280] hover:text-[#2563EB]">Plans</Link>
                  <Link to="/admin/email" className="text-[#6B7280] hover:text-[#2563EB]">Send Email</Link>
                  <Link to="/admin/adminemail" className="text-[#6B7280] hover:text-[#2563EB]">visitor Email</Link>
                </div>
              )}
            </div>

            {/* <Link to="/admin/settings" className={`flex items-center gap-3 px-4 py-2 rounded-md text-base font-medium ${location.pathname === '/admin/settings' ? 'bg-[#2563EB] text-white' : 'hover:bg-[#F3F4F6]'} nk-menu-link `}><FiSettings /> Settings</Link> */}
          </nav>

          <div className="border-t border-[#E5E7EB] p-4">
            <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 hover:bg-red-50 w-full px-3 py-2 rounded-md">
              <MdLogout /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Topbar and Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-20 nk-header  border-b bg-white px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button className="md:hidden text-[#111827] text-xl" onClick={() => setSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <h2 className="text-lg font-medium text-[#111827]">Dashboard</h2>
          </div>
          <div className="flex items-center gap-4">
            <FiBell className="text-xl text-[#111827] cursor-pointer" />
            <div className="w-8 h-8 rounded-full bg-gray-300" />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#ffffff]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;