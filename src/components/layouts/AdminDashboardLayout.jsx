
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Authcontext';
import { RiMessage3Fill } from "react-icons/ri";
import { MdLogout, MdOutlineAttachMoney, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsGraphUp } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { AiFillDashboard } from "react-icons/ai";

const DashboardLayout = ({ children }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const [openTransactions, setOpenTransactions] = useState(false);
  const [openReports, setOpenReports] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-blue-50 text-blue-900">
      {/* Sidebar */}
      <aside className={`aside_admin fixed z-40 top-0 left-0 h-full  shadow-md w-72 transform transition-transform duration-300 ease-in-out justify-between
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:flex md:flex-col`}>
          <nav className="flex flex-col gap-7 p-4">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h1 className="text-xl font-bold text-blue-700">Admin Panel</h1>
          <button className="md:hidden text-xl" onClick={() => setSidebarOpen(false)}><FaTimes /></button>
        </div>

        
          <Link to="/admin/dashboard" className={`admin-panel-link flex items-center gap-3 px-4 py-3  text-lg  transition ${location.pathname === '/admin/dashboard' ? 'bg-gray-600 text-white font-semibold' : ''}`}>
             <AiFillDashboard className="text-xl" /> Dashboard
          </Link>
          {/* Users */}
          <div>
            <button onClick={() => setOpenUsers(!openUsers)} className="admin-panel-link flex justify-between items-center w-full text-left px-3 py-2 rounded hover:bg-blue-100">
              <span className="flex items-center gap-2"><FaUsers /> Users</span>
              {openUsers ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
            {openUsers && (
              <div className="ml-6 mt-1 flex flex-col text-sm gap-1">
                <Link to="/admin/users" className="text-gray-300 hover:text-blue-600">View All Users</Link>
                <Link to="/admin/users/new" className="text-gray-300 hover:text-blue-600">Add New User</Link>
              </div>
            )}
          </div>

          {/* Transactions */}
          <div>
            <button onClick={() => setOpenTransactions(!openTransactions)} className="admin-panel-link flex justify-between items-center w-full text-left px-3 py-2 rounded hover:bg-blue-100">
              <span className="flex items-center gap-2"><MdOutlineAttachMoney /> Transactions</span>
              {openTransactions ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
            {openTransactions && (
              <div className="ml-6 mt-1 flex flex-col text-sm gap-1">
                <Link to="/admin/deposits" className="text-gray-300 hover:text-blue-600">Deposits</Link>
                <Link to="/admin/withdrawals" className="text-gray-300 hover:text-blue-600">Withdrawals</Link>
                <Link to="/admin/approvals" className="text-gray-300 hover:text-blue-600">Approvals</Link>
              </div>
            )}
          </div>

          {/* Messages */}
          <Link to="/admin/messages" className={`admin-panel-link flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100 transition ${location.pathname === '/admin/messages' ? 'bg-blue-600 text-white' : ''}`}>
            <RiMessage3Fill /> Messages
          </Link>

          {/* Reports */}
          <div>
            <button onClick={() => setOpenReports(!openReports)} className="admin-panel-link flex justify-between items-center w-full text-left px-3 py-2 rounded hover:bg-blue-100">
              <span className="flex items-center gap-2"><BsGraphUp /> Reports</span>
              {openReports ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
            {openReports && (
              <div className="ml-6 mt-1 flex flex-col text-sm gap-1">
                <Link to="/admin/reports/revenue" className="text-gray-300 hover:text-blue-600">Revenue</Link>
                <Link to="/admin/reports/growth" className="text-gray-300 hover:text-blue-600">User Growth</Link>
                <Link to="/admin/reports/stakes" className="text-gray-300 hover:text-blue-600">Stakes</Link>
              </div>
            )}
          </div>

          {/* Settings */}
          <Link to="/admin/settings" className={`admin-panel-link flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100 transition ${location.pathname === '/admin/settings' ? 'bg-blue-600 text-white' : ''}`}>
            <FiSettings /> Settings
          </Link>
        </nav>

        <div className="mt-auto p-4 border-t">
          <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 hover:bg-red-100 w-full px-3 py-2 rounded">
            <MdLogout /> Logout
          </button>
        </div>
      </aside>

      {/* Toggle Button */}
      <button className="md:hidden fixed top-4 left-4 z-1 bg-blue-600 text-white p-3 rounded-full shadow-md" onClick={() => setSidebarOpen(!isSidebarOpen)}>
        <FaBars />
      </button>

      {/* Main Content */}
      <main className="flex-1 p-12 m-0 md:ml-72 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
