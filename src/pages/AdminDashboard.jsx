// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');
//   const [editingUser, setEditingUser] = useState(null);
//   const [updatedData, setUpdatedData] = useState({ email: '', balance: 0 });

//   const navigate = useNavigate();
//   const api = import.meta.env.VITE_API_URL;
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get(`${api}/api/admin/users`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUsers(res.data);
//       } catch (err) {
//         setError(err.response?.data?.message || 'Failed to fetch users');
//       }
//     };

//     fetchUsers();
//   }, [token]);

//   const handleEdit = (user) => {
//     setEditingUser(user);
//     setUpdatedData({ email: user.email, balance: user.balance });
//   };

//   const handleSave = async () => {
//     try {
//       await axios.put(
//         `${api}/api/admin/users/${editingUser._id}`,
//         updatedData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setEditingUser(null);
//       location.reload();
//     } catch (err) {
//       setError('Failed to update user');
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard - Users</h1>
//       {error && <p className="text-red-500">{error}</p>}
//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border p-2">Username</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Balance</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id} className="border-t">
//               <td className="p-2">{user.username}</td>
//               <td className="p-2">{user.email}</td>
//               <td className="p-2">{user.balance}</td>
//               <td className="p-2">
//                 <button
//                   onClick={() => handleEdit(user)}
//                   className="bg-blue-500 text-white px-2 py-1 rounded"
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {editingUser && (
//         <div className="mt-4 bg-gray-100 p-4 rounded">
//           <h2 className="text-lg font-semibold">Edit User</h2>
//           <input
//             type="email"
//             value={updatedData.email}
//             onChange={(e) => setUpdatedData({ ...updatedData, email: e.target.value })}
//             className="border p-2 w-full mb-2"
//           />
//           <input
//             type="number"
//             value={updatedData.balance}
//             onChange={(e) => setUpdatedData({ ...updatedData, balance: parseFloat(e.target.value) })}
//             className="border p-2 w-full mb-2"
//           />
//           <button
//             onClick={handleSave}
//             className="bg-green-500 text-white px-4 py-2 rounded mr-2"
//           >
//             Save
//           </button>
//           <button
//             onClick={() => setEditingUser(null)}
//             className="bg-gray-400 text-white px-4 py-2 rounded"
//           >
//             Cancel
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;
// AdminDashboard.js (React)

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   const api = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       navigate("/admin/login");
//     }

//     axios
//       .get(`${api}/api/admin/users`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         setUsers(res.data);
//       })
//       .catch((err) => {
//         setMessage('Error loading users');
//         console.error(err);
//       });
//   }, [navigate]);

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       {message && <p>{message}</p>}
//       <table>
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Balance</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.balance}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   const api = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setMessage('You must be logged in to access the admin dashboard.');
//       navigate("/admin/login");
//       return;
//     }

//     // Optionally, you can verify the token validity before making the request
//     axios
//       .get(`${api}/api/admin/users`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         setUsers(res.data);
//       })
//       .catch((err) => {
//         setMessage('Error loading users: ' + (err.response?.data?.message || err.message));
//         console.error('Error loading users:', err);
//       });
//   }, [navigate]);

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       {message && <p>{message}</p>}
//       <table>
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Balance</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.balance}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   const api = import.meta.env.VITE_API_URL;
//   const [totalUsers, setTotalUsers] = useState(null);
//   const [error, setError] = useState('');
//   const [balance, setBalance] = useState(null);




//   const fetchTotalUsers = async () => {
//     const token = localStorage.getItem('adminToken');

//     try {
//       const res = await fetch('http://localhost:5000/api/admin/overview/total-users', {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.message || 'Something went wrong');
//       }

//       const data = await res.json();
//       setTotalUsers(data.totalUsers);
//       setError('');
//     } catch (err) {
//       setError(err.message);
//       setTotalUsers(null);
//     }
//   };

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const token = localStorage.getItem('adminToken');
//         const res = await axios.get(`${api}/api/admin/users`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUsers(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
  
//     fetchUsers();
//   }, []);


//   const handleFetchBalance = async () => {
//     try {
//       const token = localStorage.getItem('adminToken'); // make sure token key matches
//       const res = await axios.get('http://localhost:5000/api/admin/overview/total-user-balances', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setBalance(res.data.totalBalance);
//       setError('');
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || 'Failed to fetch balance');
//     }
//   };

  

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//   {/* Total Users */}
//   <div className="bg-white shadow rounded-lg p-4">
//     <h3 className="text-gray-500 text-sm">Total Users</h3>
//     <p className="text-2xl font-bold text-blue-700">700</p>
//   </div>

//   {/* Total Balances */}
//   <div className="bg-white shadow rounded-lg p-4">
//     <h3 className="text-gray-500 text-sm">Total User Balances</h3>
//     <p className="text-2xl font-bold text-green-600">₦400,000</p>
//   </div>

//   {/* Withdrawable Balance */}
//   <div className="bg-white shadow rounded-lg p-4">
//     <h3 className="text-gray-500 text-sm">Total Withdrawable Balance</h3>
//     <p className="text-2xl font-bold text-yellow-500">₦500,000</p>
//   </div>

//   {/* Transactions */}
//   <div className="bg-white shadow rounded-lg p-4">
//     <h3 className="text-gray-500 text-sm">Total Transactions</h3>
//     <p className="text-2xl font-bold text-indigo-600">1000</p>
//   </div>
// </div>
// <h2 className="text-xl font-bold mb-2">📊 Total Users</h2>
//       <button
//         onClick={fetchTotalUsers}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Get Total Users
//       </button>

//       {totalUsers !== null && (
//         <p className="mt-4 text-green-700 font-semibold">
//           ✅ Total Users: {totalUsers}
//         </p>
//       )}

//       {error && (
//         <p className="mt-4 text-red-600 font-semibold">
//           ❌ {error}
//         </p>
//       )}

//       <div className="p-4 bg-white rounded shadow w-full max-w-md">
//       <button
//         onClick={handleFetchBalance}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Get Total User Balance
//       </button>

//       {balance !== null && (
//         <p className="mt-4 text-green-600 font-semibold">
//           Total User Balance: ₦{balance.toLocaleString()}
//         </p>
//       )}

//       {error && (
//         <p className="mt-4 text-red-600">{error}</p>
//       )}
//     </div>

//       {message && <p>{message}</p>}
//       <table>
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Balance</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.balance}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const api = import.meta.env.VITE_API_URL;
//   const [totalUsers, setTotalUsers] = useState(null);
//   const [balance, setBalance] = useState(null);
//   const [error, setError] = useState('');
//   const [withdrawableBalance, setWithdrawableBalance] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [activities, setActivities] = useState([]);
//   const [activityError, setActivityError] = useState('');
//   const [message, setMessage] = useState('');

//   const fetchTotalUsers = async () => {
//     const token = localStorage.getItem('adminToken');
//     try {
//       const res = await fetch(`${api}/api/admin/overview/total-users`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       setTotalUsers(data.totalUsers);
//     } catch (err) {
//       setError(err.message || 'Something went wrong');
//     }
//   };

//   useEffect(() => {fetchTotalUsers()}, []);

//   const handleFetchBalance = async () => {
//     const token = localStorage.getItem('adminToken');
//     try {
//       const res = await axios.get(`${api}/api/admin/overview/total-user-balances`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setBalance(res.data.totalBalance);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to fetch balance');
//     }
//   };
//   useEffect(() => { handleFetchBalance() }, []);  

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const token = localStorage.getItem('adminToken');
//         const res = await axios.get(`${api}/api/admin/users`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setUsers(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchUsers();
//   }, []);
//   const handleFetchWithdrawableBalance = async () => {
   
//     try {
//        const token = localStorage.getItem('adminToken');
//       const res = await axios.get(`${api}/api/admin/overview/total-user-withdrawable-balances`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setWithdrawableBalance(res.data.totalWithdrawable);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to fetch withdrawable balance');
//     }
//   };
//   useEffect(() => { handleFetchWithdrawableBalance() }, []);

//   const fetchActivities = async () => {
//   const token = localStorage.getItem('adminToken');
//   try {
//     const res = await fetch('http://localhost:5000/api/admin/overview/recent-activity', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = await res.json();
//     setActivities(data.activities);
//   } catch (err) {
//     console.error('Failed to fetch recent activities', err);
//     setActivityError(err.message);
//   }
// };
// useEffect(() => {
//   fetchActivities();}, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-blue-800 mb-6">📊 Admin Dashboard</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//         <div className="bg-white p-5 rounded-lg shadow">
//           <h3 className="text-gray-500 text-sm mb-1">Total Users</h3>
//           <p className="text-2xl font-bold text-blue-600">{totalUsers ?? '--'}</p>
//         </div>
//         <div className="bg-white p-5 rounded-lg shadow">
//           <h3 className="text-gray-500 text-sm mb-1">Total User Balance</h3>
//           <p className="text-2xl font-bold text-green-600">₦{balance?.toLocaleString() ?? '--'}</p>
//         </div>
//         <div className="bg-white p-5 rounded-lg shadow">
//           <h3 className="text-gray-500 text-sm mb-1">Withdrawable Balance</h3>
//           <p className="text-2xl font-bold text-yellow-500">₦{withdrawableBalance?.toLocaleString()}</p>
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-4 mb-8">
       
//       </div>
//        <h2 className="text-lg font-semibold mb-3">📌 Recent Activity</h2>
//       {activities.map((activity, index) => (
//   <li key={activity.timestamp || index}>
//     {activity.message} - {activity.email}
//   </li>
// ))}


//       {error && (
//         <div className="text-red-600 font-semibold mb-4">{error}</div>
//       )}

//       <div className="bg-white p-5 rounded-lg shadow mt-6 overflow-x-auto">
//         <h2 className="text-xl font-bold mb-4 text-gray-700">👥 Users</h2>
//         <table className="w-full table-auto text-left">
//           <thead>
//             <tr className="border-b text-sm text-gray-500">
//               <th className="py-2 px-4">Username</th>
//               <th className="py-2 px-4">Email</th>
//               <th className="py-2 px-4">Balance</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id} className="border-b hover:bg-gray-50">
//                 <td className="py-2 px-4">{user.username}</td>
//                 <td className="py-2 px-4">{user.email}</td>
//                 <td className="py-2 px-4">₦{user.balance.toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaWallet } from "react-icons/fa6";
// import { BiDownload } from "react-icons/bi";
// import { PiUsersThreeFill } from "react-icons/pi";
// import "../components/AdminDashboard/AdminDashboard.css";

// const AdminDashboard = () => {
//   const api = import.meta.env.VITE_API_URL;
//   const [totalUsers, setTotalUsers] = useState(null);
//   const [balance, setBalance] = useState(null);
//   const [withdrawableBalance, setWithdrawableBalance] = useState(null);
//   const [activities, setActivities] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');
//   const [visibleCount, setVisibleCount] = useState(10);
//    const [stats, setStats] = useState({ totalVisitors: 0, visitorsToday: 0 });

//   const token = localStorage.getItem('adminToken');

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const headers = { Authorization: `Bearer ${token}` };
//         const [usersRes, balanceRes, withdrawableRes] = await Promise.all([
//           axios.get(`${api}/api/admin/overview/total-users`, { headers }),
//           axios.get(`${api}/api/admin/overview/total-user-balances`, { headers }),
//           axios.get(`${api}/api/admin/overview/total-user-withdrawable-balances`, { headers })
//         ]);

//         setTotalUsers(usersRes.data.totalUsers);
//         setBalance(balanceRes.data.totalBalance);
//         setWithdrawableBalance(withdrawableRes.data.totalWithdrawable);
//       } catch (err) {
//         setError('Failed to fetch admin stats');
//       }
//     };

//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get(`${api}/api/admin/users`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setUsers(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     const fetchActivities = async () => {
//       try {
//         const res = await axios.get(`${api}/api/admin/overview/recent-activity`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setActivities(res.data.activities);
//       } catch (err) {
//         console.error('Failed to fetch recent activities', err);
//       }
//     };

//     fetchStats();
//     fetchUsers();
//     fetchActivities();
//   }, []);

//   const handleToggleUsers = () => {
//   if (visibleCount >= users.length) {
//     setVisibleCount(10); // Collapse
//   } else {
//     setVisibleCount(prev => Math.min(prev + 10, users.length)); // Show more
//   }


// };


// const today = new Date().toISOString().split('T')[0];

// useEffect(() => {
//   axios.get(`${api}/track-visitors/stats?date=${today}`)
//     .then(res => {
//       setStats(res.data); // { totalVisitors, visitorsToday }
//     })
//     .catch(err => console.error(err));
// }, []);



//   return (
//     <div className="admin-dashboard_container h-screen">
//       <h1 className="text-2xl sm:text-3xl font-bold text-[var(--bs-secondary-bg)] mb-6">Admin Dashboard</h1>

//       <div className="w-full grid grid-cols align-center md:grid-cols-3 gap-4 mb-6">
//         <div className="admin-card acard1">
//           <p className="text-sm text-gray-500 mb-1">Total Users</p>
//           <h2 className="admin_dash_h4">{totalUsers ?? '--'}</h2>
//         </div>

//         <div className="admin-card acard2">
//           <p className="text-sm text-gray-500 mb-1">All User Balance</p>
//           <h2 className="admin_dash_h4">₦{balance?.toLocaleString() ?? '--'}</h2>
//         </div>

//         <div className="admin-card acard3">
//           <p className="text-sm text-gray-500 mb-1">All User Withdrawable Balance</p>
//           <h2 className="admin_dash_h4">₦{withdrawableBalance?.toLocaleString() ?? '--'}</h2>
//         </div>
//          <div className="admin-card acard3">
//     <h3 className="text-sm text-gray-500 mb-1">Visitors Today</h3>
//     <p className="admin_dash_h4">{stats.visitorsToday}</p>
//   </div>
//   <div className="admin-card acard3">
//     <h3 className="text-sm text-gray-500 mb-1">Total Visitors</h3>
//     <p className="admin_dash_h4">{stats.totalVisitors}</p>
//   </div>
//       </div>

//       {/* Recent Activities */}
//       {/* <div className="divide-y divide-gray-200 bg-white rounded-xl shadow-md p-5 mb-6">
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">📌 Recent Activity</h3>
//         <ul className="hover:bg-gray-50 transition divide-y divide-gray-200 bg-white">
//           {activities.length > 0 ? (
//             activities.map((act, i) => (
//               <li key={i} className=" flex align-center justify-between px-6 py-4 font-medium text-gray-800">
//                 <h1 className='flex align-center '><PiUsersThreeFill/> {act.message} </h1> <span className="text-blue-600">{act.email}</span>
//               </li>
//             ))
//           ) : (
//             <p className="text-sm text-gray-400">No recent activity yet.</p>
//           )}
//         </ul>
//       </div> */}
//       <div className="flex flex-col sm:flex-row gap-4 mb-6">
//       <div className="card-bordered  flex-1 bg-white rounded-xl shadow-md p-5">
//   <h3 className="text-lg card-inner font-semibold text-white-800 mb-4">Recent Activities</h3>

//   {activities.length > 0 ? (
//     <ul className="admin_recent_activity divide-y divide-gray-200 ">
//       {activities.map((act, i) => (
//         <li
//           key={i}
//           className="admin_recent_activity-list"
//         >
//           <div className="flex flex-col  space-x-2  font-medium">
//            <span className='flex items-center user-activities'> <div className="admin-icon"><PiUsersThreeFill className="" /></div> 
//             {act.message}</span>
//             <span className="user-activities-email">{act.email}</span>
//           </div>
          
//         </li>
//       ))}
//     </ul>
//   ) : (
//     <p className="text-sm text-gray-400 px-4 py-4">No recent activity yet.</p>
//   )}
// </div>


//       {/* Users Table */}
//       <div className="flex-1 bg-white rounded-xl shadow-md p-5">
//         <h3 className="text-lg font-semibold  card-inner text-white-700 mb-4">👥 All Users</h3>
//         <div className="nk-tb-list ">
//           <div className="nk-tb-item ">
//             <div className='nk-tb-col nk-head1'>
//               <span className=" ">username</span></div>
//               <div className='nk-tb-col nk-head2'>
//               <span className=" ">Email</span></div>
//                <div className='nk-tb-col nk-head3'>
//               <span className=" ">Balance</span></div>
            
//           </div>
//           <tbody>
//            {users.slice(0, visibleCount).map((user) => (

//               <div key={user._id} className="nk-tb-item  ">
//                <div className='nk-tb-col'>
//               <span className=" ">{user.username}</span></div>
//                <div className='nk-tb-col'>
//               <span className=" ">{user.email}</span></div>
//                 <div className='nk-tb-col'>
//               <span className=" ">${user.balance.toLocaleString()}</span></div>
//               </div>
//             ))}
//           </tbody>
//         </div>
//         {users.length > 10 && (
//   <div className="text-center mt-4">
//     <button
//       onClick={handleToggleUsers}
//       className="admin-see-more-btn "
//     >
//       {visibleCount >= users.length ? 'See Less' : 'See More'}
//     </button>
//   </div>
// )}

//       </div>
// </div>
//       {error && <div className="mt-4 text-red-600 font-semibold">{error}</div>}
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PiUsersThreeFill } from "react-icons/pi";
import { FiBell } from "react-icons/fi";
import "../components/AdminDashboard/AdminDashboard.css";

const AdminDashboard = () => {
  const api = import.meta.env.VITE_API_URL;
  const [totalUsers, setTotalUsers] = useState(null);
  const [balance, setBalance] = useState(null);
  const [withdrawableBalance, setWithdrawableBalance] = useState(null);
  const [activities, setActivities] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [visibleCount, setVisibleCount] = useState(10);
  const [stats, setStats] = useState({ totalVisitors: 0, visitorsToday: 0 });

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };

        const [
          usersRes,
          balanceRes,
          withdrawableRes,
          visitorsRes,
          allUsersRes,
          activitiesRes
        ] = await Promise.all([
          axios.get(`${api}/api/admin/overview/total-users`, { headers }),
          axios.get(`${api}/api/admin/overview/total-user-balances`, { headers }),
          axios.get(`${api}/api/admin/overview/total-user-withdrawable-balances`, { headers }),
          axios.get(`${api}/api/track-visitors/stats`), // make sure backend route exists
          axios.get(`${api}/api/admin/users`, { headers }),
          axios.get(`${api}/api/admin/overview/recent-activity`, { headers })
        ]);

        setTotalUsers(usersRes.data.totalUsers);
        setBalance(balanceRes.data.totalBalance);
        setWithdrawableBalance(withdrawableRes.data.totalWithdrawable);
        setStats(visitorsRes.data); // { totalVisitors, visitorsToday }
        setUsers(allUsersRes.data);
        setActivities(activitiesRes.data.activities);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch admin stats');
      }
    };

    fetchAllData();
  }, [api, token]);

  const handleToggleUsers = () => {
    setVisibleCount(prev =>
      prev >= users.length ? 10 : Math.min(prev + 10, users.length)
    );
  };

  return (
    <div className="admin-dashboard_container h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-[var(--bs-secondary-bg)] mb-6">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="admin-card acard1">
          <p className="text-sm text-gray-500 mb-1">Total Users</p>
          <h2 className="admin_dash_h4">{totalUsers ?? '--'}</h2>
        </div>

        <div className="admin-card acard2">
          <p className="text-sm text-gray-500 mb-1">All User Balance</p>
          <h2 className="admin_dash_h4">
            ₦{balance?.toLocaleString() ?? '--'}
          </h2>
        </div>

        <div className="admin-card acard3">
          <p className="text-sm text-gray-500 mb-1">All Withdrawable Balance</p>
          <h2 className="admin_dash_h4">
            ₦{withdrawableBalance?.toLocaleString() ?? '--'}
          </h2>
        </div>

        <div className="admin-card acard3">
          <h3 className="text-sm text-gray-500 mb-1">Visitors Today</h3>
          <p className="admin_dash_h4">{stats.visitorsToday}</p>
        </div>

        <div className="admin-card acard3">
          <h3 className="text-sm text-gray-500 mb-1">Total Visitors</h3>
          <p className="admin_dash_h4">{stats.totalVisitors}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Recent Activities */}
        <div className="card-bordered flex-1 bg-white rounded-xl shadow-md p-5">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          {activities.length > 0 ? (
            <ul className="admin_recent_activity divide-y divide-gray-200">
              {activities.map((act, i) => (
                <li key={i} className="admin_recent_activity-list">
                  <div className="flex flex-col font-medium">
                    <span className="flex items-center user-activities">
                      <div className="admin-icon">
                        <PiUsersThreeFill />
                      </div>
                      {act.message}
                    </span>
                    <span className="user-activities-email">{act.email}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400">No recent activity yet.</p>
          )}
        </div>

        {/* All Users Table */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-5">
        <h3 className="text-lg font-semibold  card-inner text-white-700 mb-4">👥 All Users</h3>
        <div className="nk-tb-list ">
          <div className="nk-tb-item ">
            <div className='nk-tb-col nk-head1'>
              <span className=" ">username</span></div>
              <div className='nk-tb-col nk-head2'>
              <span className=" ">Email</span></div>
               <div className='nk-tb-col nk-head3'>
              <span className=" ">Balance</span></div>
            
          </div>
          
           {users.slice(0, visibleCount).map((user) => (

              <div key={user._id} className="nk-tb-item  ">
               <div className='nk-tb-col'>
              <span className=" ">{user.username}</span></div>
               <div className='nk-tb-col'>
              <span className=" ">{user.email}</span></div>
                <div className='nk-tb-col'>
              <span className=" ">${user.balance.toLocaleString()}</span></div>
              </div>
            ))}
        
        </div>
        {users.length > 10 && (
  <div className="text-center mt-4">
    <button
      onClick={handleToggleUsers}
      className="admin-see-more-btn "
    >
      {visibleCount >= users.length ? 'See Less' : 'See More'}
    </button>
  </div>
)}

      </div>
</div>
      {error && <div className="mt-4 text-red-600 font-semibold">{error}</div>}
    </div>
  );
};

export default AdminDashboard;
