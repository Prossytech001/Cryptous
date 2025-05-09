

// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const Dashboard = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//           console.log('User not authenticated');
//           return;
//         }

//         const response = await axios.get('http://localhost:5000/api/users/me', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });

//         setUserData(response.data); // Set the user data fetched from the API
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to your Dashboard</h1>
//       {userData ? (
//         <div>
//           <h2>{userData.username}</h2>
//           <p>{userData.email}</p>
//           {/* Display other user-specific information */}
//         </div>
//       ) : (
//         <p>Loading user data...</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem('authToken'); // Get the token from localStorage
//         const response = await axios.get('http://localhost:5000/api/users/me', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching user data:', err);
//         setError('Error fetching user data');
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Welcome to your Dashboard, {userData.username}</h1>
//       <p>Balance: {userData.balance}</p>
//       {/* Display other user data here */}
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [userStats, setUserStats] = useState({});
//   const [userData, setUserData] = useState(null);
//   const [stakes, setStakes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filter, setFilter] = useState("all");
//   const api = import.meta.env.VITE_API_URL; // Use the environment variable for the API URL

//   const token = localStorage.getItem('authToken');

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const userRes = await axios.get(`${api}/api/users/me`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
    
//         const stakeRes = await axios.get(`${api}/api/stakes/mine`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
    
//         setUserStats(userRes.data);
//         setUserData(userRes.data);
//         setStakes(stakeRes.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Dashboard fetch error:', err);
//         setError('Error loading dashboard');
//         setLoading(false);
//       }
//     };
    

//     fetchDashboardData();
//   }, []);

//   if (loading) return <div className="text-center mt-10">Loading...</div>;
//   if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
//   // const filteredStakes = stakes.filter((stake) => {
//   //   if (filter === "all") return true;
//   //   if (filter === "active") return stake.status === "active";
//   //   if (filter === "completed") return stake.status === "completed";
//   //   return true;
//   // });

//   const filteredStakes = stakes.filter((stake) => {
//     if (filter === "all") return true;
//     if (filter === "active") return !stake.isCompleted;
//     if (filter === "completed") return stake.isCompleted;
//     return true;
//   });
  
  

//   return (
//     <div className="max-w-5xl mx-auto mt-10 p-4">

// <div className="max-w-4xl mx-auto mt-10 space-y-6">
//       <h1 className="text-3xl font-bold">Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white shadow p-6 rounded-xl">
//           <h2 className="text-gray-600 text-sm">Total Balance</h2>
//           <p className="text-center text-lg mb-6">Balance: ${userData.balance?.toFixed(2)}</p>

//         </div>

//         <div className="bg-white shadow p-6 rounded-xl">
//           <h2 className="text-gray-600 text-sm">Total Earnings</h2>
//           <p className="text-2xl font-bold text-green-600">${userStats.totalEarnings?.toFixed(2)}</p>
//         </div>

//         <div className="bg-white shadow p-6 rounded-xl">
//           <h2 className="text-gray-600 text-sm">Withdrawable Balance</h2>
//           <p className="text-2xl font-bold text-blue-600">${userStats.withdrawableBalance?.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//       <h1 className="text-3xl font-bold mb-4 text-center">Welcome, {userData.username}</h1>
//       <p className="text-center text-lg mb-6">Balance: ${userData.balance}</p>

//       <h2 className="text-2xl font-semibold mb-3">My Stakes</h2>
//       <div className="mb-4">
//   <label className="mr-2 font-medium">Filter:</label>
//   <select
//     value={filter}
//     onChange={(e) => setFilter(e.target.value)}
//     className="border px-3 py-1 rounded-md"
//   >
//     <option value="all">All</option>
//     <option value="active">Active</option>
//     <option value="completed">Completed</option>
//   </select>
// </div>


//       {stakes.length === 0 ? (
//         <p className="text-gray-600">You have no stakes yet.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full table-auto border-collapse shadow">
//             {/* <thead>
//               <tr className="bg-blue-600 text-white">
//                 <th className="px-4 py-2">Plan</th>
//                 <th className="px-4 py-2">Amount</th>
//                 <th className="px-4 py-2">ROI</th>
//                 <th className="px-4 py-2">Duration</th>
//                 <th className="px-4 py-2">Start</th>
//                 <th className="px-4 py-2">Status</th>
//               </tr>
//             </thead> */}

// <thead>
//   <tr className="bg-blue-600 text-white">
//     <th className="px-4 py-2">Plan</th>
//     <th className="px-4 py-2">Amount</th>
//     <th className="px-4 py-2">ROI</th>
//     <th className="px-4 py-2">Duration</th>
//     <th className="px-4 py-2">Start</th>
//     <th className="px-4 py-2">Status</th>
//     <th className="px-4 py-2">Earned</th>
//     <th className="px-4 py-2">Progress</th>
//   </tr>
// </thead>

//             {/* <tbody>
//               {stakes.map((stake) => (
//                 <tr key={stake._id} className="border-b hover:bg-gray-50">
//                   <td className="px-4 py-2">{stake.plan?.name || 'N/A'}</td>
//                   <td className="px-4 py-2">${stake.amount}</td>
//                   <td className="px-4 py-2">{(stake.dailyROI * 100).toFixed(2)}%</td>
//                   <td className="px-4 py-2">{stake.durationDays} days</td>
//                   <td className="px-4 py-2">{new Date(stake.startDate).toLocaleDateString()}</td>
//                   <td className="px-4 py-2">
//                     {stake.isCompleted ? (
//                       <span className="text-green-600 font-medium">Completed</span>
//                     ) : (
//                       <span className="text-yellow-600 font-medium">Active</span>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody> */}
//             {/* <tbody>
//   {filteredStakes.map((stake) => {
//     const now = new Date();
//     const start = new Date(stake.startDate);
//     const end = new Date(start);
//     end.setDate(start.getDate() + stake.durationDays);

//     const totalDays = stake.durationDays;
//     // const elapsedDays = Math.min(
//     //   Math.floor((now - start) / (1000 * 60 * 60 * 24)),
//     //   totalDays
//     // );

//     const TEST_MODE = true; // toggle to false in production

// const elapsed = TEST_MODE
//   ? Math.floor((now - start) / (1000 * 60)) // minutes as days
//   : Math.floor((now - start) / (1000 * 60 * 60 * 24)); // real days

// const elapsedDays = Math.min(elapsed, totalDays);
//     const progress = (elapsedDays / totalDays) ;
//     const earned = (stake.amount * stake.dailyROI ).toFixed(2);

//     return (
//       <tr key={stake._id} className="border-b hover:bg-gray-50">
//         <td className="px-4 py-2">{stake.plan?.name || 'N/A'}</td>
//         <td className="px-4 py-2">${stake.amount}</td>
//         <td className="px-4 py-2">{(stake.dailyROI)}%</td>
//         <td className="px-4 py-2">{stake.durationDays} days</td>
//         <td className="px-4 py-2">{start.toLocaleDateString()}</td>
//         <td className="px-4 py-2">
//           {stake.isCompleted ? (
//             <span className="text-green-600 font-medium">Completed</span>
//           ) : (
//             <span className="text-yellow-600 font-medium">Active</span>
//           )}
//         </td>
//         <td className="px-4 py-2">${earned}</td>
//         <td className="px-4 py-2 w-40">
//           <div className="w-full bg-gray-200 rounded-full h-2.5">
//             <div
//               className="bg-green-500 h-2.5 rounded-full"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//           <small>{elapsedDays}/{totalDays} days</small>
//         </td>
//       </tr>
//     );
//   })}
// </tbody> */}
// <tbody>
//   {filteredStakes.map((stake) => {
//     const now = new Date();
//     const start = new Date(stake.startDate);

//     const totalDays = stake.durationDays;

//     const TEST_MODE = true; // toggle to false in production

//     const elapsed = TEST_MODE
//       ? Math.floor((now - start) / (1000 * 60)) // 1 min = 1 day
//       : Math.floor((now - start) / (1000 * 60 * 60 * 24)); // real days

//     const elapsedDays = Math.min(elapsed, totalDays);
//     const progress = (elapsedDays / totalDays) * 100;

//     const earned = (stake.amount * stake.dailyROI / 100 ).toFixed(2);

//     return (
//       <tr key={stake._id} className="border-b hover:bg-gray-50">
//         <td className="px-4 py-2">{stake.plan?.name || 'N/A'}</td>
//         <td className="px-4 py-2">${stake.amount}</td>
//         <td className="px-4 py-2">{(stake.dailyROI)}%</td>
//         <td className="px-4 py-2">{stake.durationDays} days</td>
//         <td className="px-4 py-2">{start.toLocaleDateString()}</td>
//         <td className="px-4 py-2">
//           {stake.isCompleted ? (
//             <span className="text-green-600 font-medium">Completed</span>
//           ) : (
//             <span className="text-yellow-600 font-medium">Active</span>
//           )}
//         </td>
//         <td className="px-4 py-2">${earned}</td>
//         <td className="px-4 py-2 w-40">
//           <div className="w-full bg-gray-200 rounded-full h-2.5">
//             <div
//               className="bg-green-500 h-2.5 rounded-full"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//           <small>{elapsedDays}/{totalDays} days</small>
//         </td>
//       </tr>
//     );
//   })}
// </tbody>

//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../components/layouts/Dashboardlayout.css";
import {
  LineChart, Line, CartesianGrid,  Legend, ResponsiveContainer
} from 'recharts';
import {
  BarChart, Bar, XAxis, YAxis,Tooltip, 
} from 'recharts';


import {
 
  PieChart, Pie, Cell
} from 'recharts';

import { IoDiamond } from "react-icons/io5";
import Loader from "../components/Loader/Loader"



const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [stakes, setStakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("authToken");
  const [filter, setFilter] = useState("all");
  

  const api = import.meta.env.VITE_API_URL;
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(`${api}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const stakeRes = await axios.get(`${api}/api/stakes/my-stakes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(userRes.data);
        setStakes(stakeRes.data); // ✅ This fixes the issue
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch data", err);
        setLoading(false);
      }
    };

    if (token) {
      fetchData();
    } else {
      console.warn("No token found");
      setLoading(false);
    }
  }, [token]);

  const handleDailyROIClaim = async () => {
    try {
      const res = await axios.post(
        `${api}/api/stakes/claim-daily`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      Swal.fire("Success", res.data.message, "success");
      // Re-fetch data after claim
      const updatedUser = await axios.get(`${api}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedStakes = await axios.get(`${api}/api/stakes/my-stakes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(updatedUser.data);
      setStakes(updatedStakes.data);
    } catch (err) {
      Swal.fire(err.response?.data?.message || "You’ve already claimed your ROI today.");
    }
  };


  const filteredStakes = stakes.filter((stake) => {
        if (filter === "all") return true;
        if (filter === "active") return !stake.isCompleted;
        if (filter === "completed") return stake.isCompleted;
        return true;
      });


      const combineROIHistory = () => {
        const roiMap = {};
      
        stakes.forEach(stake => {
          stake.roiHistory?.forEach(entry => {
            if (!roiMap[entry.date]) {
              roiMap[entry.date] = 0;
            }
            roiMap[entry.date] += entry.amount;
          });
        });
      
        return Object.entries(roiMap).map(([date, amount]) => ({
          date,
          amount: parseFloat(amount.toFixed(2))
        }));
      };

      const stakeStatusData = [
        { name: "Active", value: stakes.filter(s => !s.isCompleted).length },
        { name: "Completed", value: stakes.filter(s => s.isCompleted).length }
      ];
      
      const COLORS = ["#FFBB28", "#00C49F"];
      
      

  if (loading) return <div><Loader/></div>;

  return (
    <div className="p-6">
      <div className="dashs__h1boby flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold mb-6">Welcome {user ? user.username : "Loading..."}</h1>
      <button
          onClick={handleDailyROIClaim}
          className="dash-btn"
        >
          <IoDiamond/> Daily earnings
        </button>
      </div>

      <div className="funds__dash grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="dash-fund ">
        <div className="dash-fund-text">
          <h2 className="fund-b">Funded Balance</h2>
         
          <p className="text-gray-600 text-lg">USD</p>
          </div>
          <p className="balance-dash text-green-600 text-lg">${user  ? user.balance.toFixed(2) : "loading.."}</p>
          
        </div>
        <div className="earnings-dash">
        <div className="dash-fund-text">
          <h2 className="earning-b text-xl font-semibold">Total Earnings</h2>
          <p className="text-gray-600 text-lg">USD</p>
          </div>
          <p className="earn-b text-blue-600 text-lg">${user.totalEarnings.toFixed(2)}</p>
        </div>
        <div className="withdrawable-dash">
        <div className="dash-fund-text">
          <h2 className="withdraw-b">Withdrawable Balance</h2>
          <p className="text-gray-600 text-lg">USD</p>
          </div>
          <p className="with-b text-purple-600 text-lg">${user.withdrawableBalance.toFixed(2)}</p>
        </div>
      </div>

      <div className="mb-8 text-center">
       
      </div>
    

<div className="dash-cjart">

<div className="response mb-6">
 
<h2 className="textx font-bold mt-8 mb-2"> ROI Breakdown (Bar View)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={combineROIHistory()} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="blue" name="Daily Earnings" />
          </BarChart>
        </ResponsiveContainer>
     
</div>


<div className="response2">
<h2 className="textx font-bold mt-10 mb-4">Stake Status Breakdown</h2>
  <ResponsiveContainer width="100%" height={250}>
    <PieChart>
      <Pie
        data={stakeStatusData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={90}
        fill="#8884d8"
        label
      >
        {stakeStatusData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>

</div>
<div className="mb-4">
  <label className="mr-2 font-medium">Filter:</label>
   <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="border px-3 py-1 rounded-md"
  >
    <option value="all">All</option>
    <option value="active">Active</option>
    <option value="completed">Completed</option>
  </select>
</div>



      <h2 className="text-2xl font-bold mb-4">📋 Stake History</h2>
      <div className="overflow-x-auto">
        <table className="table--dash bg-white rounded-xl overflow-hidden shadow-md">
          <thead className="header-dash text-left p-4">
            <tr>
              <th className="p-3">Plan</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
              <th className="p-3">Daily ROI</th>
              <th className="p-3">Earnings So Far</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStakes.map((stake) => (
              <tr key={stake._id} className="list-dash border-b hover:bg-gray-50">
                <td className="p-3">{stake.plan?.name || "-"}</td>
                <td className="p-3">${stake.amount}</td>
                <td className="p-3">{stake.startDate}</td>
                <td className="px-4 py-2">{(stake.dailyROI)}%</td>
                
                <td className="p-3">${stake.earningsSoFar.toFixed(2)}</td>
                <td className="p-3">
                  <span
                    className={`satus py-1 rounded-full text-sm font-semibold ${
                      stake.isCompleted
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {stake.isCompleted ? "Completed" : "Active"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
