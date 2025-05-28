

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
import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { IoDiamond } from "react-icons/io5";
import Loader from "../components/Loader/Loader"
import { FaPlus } from "react-icons/fa6";
import { PiHandWithdraw } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";
import { LuCircleDollarSign } from "react-icons/lu";


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [stakes, setStakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("authToken");
  const [filter, setFilter] = useState("all");
   const [activities, setActivities] = useState([]);
  const [filters, setFilters] = useState(7);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  
const [visibleCount, setVisibleCount] = useState(2);

 

  const api = import.meta.env.VITE_API_URL;



  const [countdowns, setCountdowns] = useState({});

// ✅ 1. Define helper FIRST
const getCountdownParts = (lastClaimDate) => {
  const next = new Date(lastClaimDate || Date.now());
  next.setDate(next.getDate() + 1);
  const now = new Date();

  const diff = next - now;

  if (diff <= 0) return { text: "Ready to claim", ready: true };

  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    text: `${hours}h ${minutes}m ${seconds}s`,
    ready: false,
  };
};

// ✅ 2. Now you can use it inside useEffect
useEffect(() => {
  const interval = setInterval(() => {
    const updated = {};
    stakes.forEach(stake => {
      const { text } = getCountdownParts(stake.lastClaimDate || stake.startDate);
      updated[stake._id] = text;
    });
    setCountdowns(updated);
  }, 1000);

  return () => clearInterval(interval);
}, [stakes]);



  const fetchActivities = async () => {
    try {
      const res = await axios.get(`${api}/api/activity/recent`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { days: filter, page, limit: 5 }
      });
      setActivities(res.data.activities);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error("Error fetching activity:", err);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [filters, page]);

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
      
      

      const hasClaimedToday = () => {
  const today = new Date().toDateString();
  const lastClaim = new Date(stake.lastClaimDate || stake.startDate).toDateString();
  return today === lastClaim;
};

const handleStakeClaim = async (stakeId) => {
  try {
    const res = await axios.post(`${api}/api/stakes/${stakeId}/claim`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    Swal.fire("Success", res.data.message, "success");
    fetchUpdatedStakes(); // Refresh your stakes
  } catch (err) {
    Swal.fire("Oops", err.response?.data?.message || "Something went wrong", "error");
  }
};


  if (loading) return <div><Loader/></div>;

  const fetchUpdatedStakes = async () => {
  const updatedStakes = await axios.get(`${api}/api/stakes/my-stakes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  setStakes(updatedStakes.data);
};

  const handleToggleUsers = () => {
  if (visibleCount >= stakes.length) {
    setVisibleCount(2); // Collapse
  } else {
    setVisibleCount(prev => Math.min(prev + 2, stakes.length)); // Show more
  }
};





  return (
    <div className="p-6">
      <div className="dashs__h1boby flex justify-between items-center mb-6">
      <h1 className=" dbwel text-3xl text-white font-bold mb-6">Welcome {user ? user.username : "Loading..."}</h1>
      
        {user?.hasUnclaimedToday && (
  <div className="bg-red-600 text-white p-3 rounded mb-4 shadow">
    🚨 You haven’t claimed your daily ROI today!
  </div>
)}






      </div>
     

{/* 👇 Show More Button */}




      <div className="funds__dash flex  gap-4 mb-6">
        <div className="dash-fund ">
        <div className="dash-fund-text">
          <h2 className="fund-b">Funded Balance</h2>
         
          <p className="text-gray-400 text-lg">USDT</p>
          </div>
          <div className="dashadd">
          <p className="balance-dash text-white-100">${user  ? user.balance.toFixed(2) : "loading.."}</p>
          <Link to="/funding" className="bg-blue-600s text-white px-4 py-2 rounded hover:bg-blue-700">
           <FaPlus className="inline-block mr-1" /> Add Funds
          </Link>
          </div>

        </div>
        <div className="dash-funds flex ">
        <div className="earnings-dash">
        <div className="dash-fund-text">
          <h2 className="earning-b text-xl font-semibold">Total Earnings</h2>
          <p className="text-gray-600 text-lg">USDT</p>
          </div>
          <p className="earn-b text-lg">${user.totalEarnings.toFixed(2)}</p>
        </div>
        <div className="withdrawable-dash">
        <div className="dash-fund-text">
          <h2 className="withdraw-b">Withdrawable Amount</h2>
          <p className="text-gray-600 text-lg">USDT</p>
          </div>
          <div className="withadd">
            <p className="with-b text-purple-600 text-lg">${user.withdrawableBalance.toFixed(2)}</p>
            <Link to="/withdraw" className="bg-blue-600w text-white rounded hover:bg-blue-700">
              <FaPlus className="inline-block mr-1" /> Add Funds
            </Link>
          </div>
          
        </div>
        </div>
      </div>
      <h2 className="text-gray-400 quick-actions text-start font-bold text-xl mb-4">Quick Actions</h2>

      <div className="foutricondisplay">
        <Link to="/funding" className="dashicons">
          <div className="conicon">
            <FaPlus className="text-2xl " />
          </div>
          <p className="text-white-100 text-sm">Add Funds</p>
        </Link>
        <Link to="/withdraw" className="dashicons">
          <div className="conicon">
            <PiHandWithdraw className="text-2xl " />
          </div>
          <p className="text-white-100 text-sm">Withdraw</p>

        </Link>
        <Link to="/support" className="dashicons">
          <div className="conicon">
            <MdSupportAgent className="text-2xl " />
          </div>
          <p className="text-white-100 text-sm">Support</p>

        </Link>
        <Link to="/plans" className="dashicons">
          <div className="conicon">
            <LuCircleDollarSign className="text-2xl " />
          </div>
          <p className="text-white-100 text-sm">Plans</p>

        </Link>
      </div>

      <div className="stake-dashe mb-8 text-center">
       </div>
{/* 📋 My Stakes */}
      <h2 className="text-gray-400  quick-acti text-start font-bold text-xl mb-4"> Daily Investment ROI</h2>

<div className="overflows">
  <table className="stake-dash  rounded-xl overflow-x-auto shadow-md w-full">
    <thead className=" text-left p-4">
      <tr>
        <th className=" ">Plan</th>
        <th className="stakenon">Amount</th>
        <th className="stakenon">Date</th>
        <th className="stakenon">Daily ROI</th>
        <th className="">Next Earning</th>
        <th className="">Earnings So Far</th>
        <th className="">Status</th>
        <th className="">Action</th>
      </tr>
    </thead>
    <tbody>
      {filteredStakes.slice(0, visibleCount).map((stake) => {
        const today = new Date().toDateString();
        const lastClaim = new Date(stake.lastClaimDate || stake.startDate).toDateString();
        const hasClaimedToday = today === lastClaim;
        const { text, ready } = getCountdownParts(stake.lastClaimDate || stake.startDate);

        return (
          <tr key={stake._id} className=" ">
            <td className=" text-whites">{stake.plan?.name || "-"}</td>
            <td className=" text-whites stakenon">${stake.amount}</td>
            <td className=" text-whites stakenon text-center">{new Date(stake.startDate).toDateString()}</td>
            <td className=" text-whites stakenon">{stake.dailyROI}%</td>
            <td className={`text-sm ${ready ? "text-green-500" : "text-yellow-500"}`}>{text}</td>
            <td className="text-whites">${stake.earningsSoFar.toFixed(2)}</td>
            <td className="">
              <span className={`satus py-1 px-2 rounded-full text-sm font-semibold ${
                stake.isCompleted ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}>
                {stake.isCompleted ? "Completed" : "Active"}
              </span>
            </td>
            <td className=" p-3">
              <button
                onClick={() => handleStakeClaim(stake._id)}
                disabled={hasClaimedToday || stake.isCompleted}
                className={`stak-pad px-3 py-1 rounded text-white text-sm ${
                  hasClaimedToday || stake.isCompleted
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {hasClaimedToday ? "Claimed" : "Claim ROI"}
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>



</div>
<div className="oversflow">
   {filteredStakes.slice(0, visibleCount).map((stake) => {
        const today = new Date().toDateString();
        const lastClaim = new Date(stake.lastClaimDate || stake.startDate).toDateString();
        const hasClaimedToday = today === lastClaim;
        const { text, ready } = getCountdownParts(stake.lastClaimDate || stake.startDate);

        return (
          <div key={stake._id} className=" headRead">
          <div className="reward">
            <p className="rewardname ">{stake.plan?.name || "-"}</p>
            <p className="  stakenon">${stake.amount}</p>
            <p className="  ">{new Date(stake.startDate).toDateString()}</p>
            <p className=" stakenon">{stake.dailyROI}%</p>
            <p className={`text-sm ${ready ? "text-green-500" : "text-yellow-500"}`}>{text}</p>
            </div>
            <div className="reward2">
            <p className="text-white">${stake.earningsSoFar.toFixed(2)}</p>
            <p className="">
              <span className={`satus py-1 px-2 rounded-full text-sm font-semibold ${
                stake.isCompleted ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}>
                {stake.isCompleted ? "Completed" : "Active"}
              </span>
            </p>
            <td className=" p-3">
              <button
                onClick={() => handleStakeClaim(stake._id)}
                disabled={hasClaimedToday }
                className={`stak-pad px-3 py-1 rounded text-white text-sm ${
                  hasClaimedToday || stake.isCompleted
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {hasClaimedToday ? "Claimed" : "Claim ROI"}
              </button>
              
            </td>
            </div>
          </div>
        );
      })}
</div>

  {filteredStakes.length > 2 && (
  <div className="text-center mt-4">
    <button
      onClick={handleToggleUsers}
      className="user-see-more-btn bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
    >
      {visibleCount >= filteredStakes.length ? 'See Less' : 'See More'}
      <FaArrowDown className="ml-2" />
    </button>
  </div>
)}

      <div className="content-act flex flex-col md:flex-row gap-4 justify-between">
    {/* Recent Activity Section */}
<div className="dashboard-activity1 text-white ">
  <div className="flex justify-between items-center mb-4">
    <select
      value={filters}
      onChange={(e) => setFilters(e.target.value)}
      className="bg-dashboard-card p-2 rounded text-white"
    >
      <option className="last7" value="7">Last 7 Days</option>
      <option className="last7" value="30">Last 30 Days</option>
      <option className="last7" value="90">Last 90 Days</option>
    </select>
    <button
      onClick={() => setDrawerOpen(!drawerOpen)}
      className="btnact lg:hidden px-4 py-1 rounded"
    >
      {drawerOpen ? 'Close' : 'Show'} Recent
    </button>
  </div>

  {/* Drawer for Mobile */}
  {drawerOpen && (
    <div className="  h-full bg-gray p-4 shadow-lg overflow-y-auto lg:hidden">
      <h2 className="text-white-800 quick-actis  font-bold mb-3">Recent Activity</h2>
      <ActivityList data={activities} />
    </div>
  )}

  {/* Desktop List */}
  <div className="hidden lg:block">
    <h2 className="text-whites quick-actis font-bold mb-3">Recent Activity</h2>
    <ActivityList data={activities} />
  </div>

  {/* Pagination */}
  <div className="flex justify-end gap-2 mt-4">
    <button
      onClick={() => setPage((p) => Math.max(p - 1, 1))}
      className="btn"
    >
      Prev
    </button>
    <button
      onClick={() => setPage((p) => (p < totalPages ? p + 1 : p))}
      className="btn"
    >
      Next
    </button>
  </div>
</div>


 
      </div>
    </div>
  );
};



const ActivityList = ({ data }) => (
  <ul className="flex ul-activity flex-col border-b border-gray-700 pb-2">
    {data.map((item, i) => {
      const isPositive = [ 'Daily ROI Claimed', 'Bonus'].includes(item.type);
      const isNegative = ['Create Stake', 'Stake Created','Withdrawal'].includes(item.type);

      const amountDisplay = isPositive
        ? `+${item.amount}`
        : isNegative
        ? `-${item.amount}`
        : item.amount;

      const colorClass = isPositive
        ? 'text-green-500'
        : isNegative
        ? 'text-red-300'
        : 'text-white-500';

      return (
        <li key={i} className="dashactul  flex justify-between border-b border-gray-700 ">
          <div>
            <p className="font-medium">{item.type}</p>
            <p className="text-sm ">
              {new Date(item.date).toDateString()}
            </p>
          </div>
          <div className={`font-semibold ${colorClass}`}>
            {amountDisplay}
          </div>
        </li>
      );
    })}
  </ul>
);



export default Dashboard;
