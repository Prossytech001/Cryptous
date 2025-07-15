

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
import CandlestickChart from "../components/CandlestickChart";
import ReactApexChart from 'react-apexcharts';


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

// apexchart

const series = [{ data: [10, 30, 18, 55,20, 50 ] }];

  const options = {
    chart: {
      type: 'line',
      sparkline: { enabled: true },
     dropShadow: {
      colors: "#96651e",
      enabled: true,
      top: 3,
      left: 3,
      blur: 4,
      opacity: 1.2,
    },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      heigth: 100,
    },
    fill: {
      type: 'gradient',
      opacity: 0.5, // ✅ 50% transparent
    // colors: "#96651e",
      gradient: {
        shadeIntensity: 18.5,
        opacityFrom: 1.4,
        opacityTo: 0,
        stops: [0, 100, 100],
      },
    },
    colors: ['gold'],
    tooltip: { enabled: false },
  };




  return (
    <section className="dahboaders p-6">
      <div className="row">
      <h1 className="dashboard-heading-h  mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-columns-gap plan-icon"><path fill-rule="evenodd" d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"></path></svg>Welcome {user ? user.username : "Loading..."}</h1>
      
        {/* {user?.hasUnclaimedToday && (
  <div className="bg-red-600 text-white p-3 rounded mb-4 shadow">
    🚨 You haven’t claimed your daily ROI today!
  </div>
)} */}

<div className="buttondah">
  <Link to="/plans">
  <button className="btn1s">Make investment</button>
  </Link>
  <Link to="/funding">
  <button className="btn3s">Fund Wallet</button>
  </Link>
</div>






      </div>


      <div className="dashlayout">
     

{/* 👇 Show More Button */}
<div className="dashaside">




      <div className="wg-card-dash">
        <div className="wg-card  ">
        <div className="flex items-center justify-between">
          <h2 className="card1-span">Funded Balance</h2>
         
         
          <p className=""><svg width="20px" height="45px" viewBox="-3.2 -3.2 38.40 38.40" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <circle cx="16" cy="16" r="16" fill="#96651e"></circle> <path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"></path> </g> </g></svg></p>
          </div>
          <div className="flex items-center justify-between">
          <p className="text-content">${user  ? user.balance.toFixed(2) : "loading.."}</p>
          {/* <Link to="/funding" className="bg-blue-600s flex items-center gap-2 text-white rounded hover:bg-blue-700">
           <FaPlus className=" mr-1" /> Add Funds
          </Link> */}
           <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={30}
        width={40}
      />
          </div>

        </div>
       
        <div className="wg-card">
        <div className="flex items-center justify-between">
          <h2 className="card1-span">Total Earnings</h2>
          <p className="text-gray-600 text-lg"><svg width="20px" height="45px" viewBox="-3.2 -3.2 38.40 38.40" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <circle cx="16" cy="16" r="16" fill="#96651e"></circle> <path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"></path> </g> </g></svg></p>
          </div>
         <div className="flex items-center justify-between">
          <p className="text-content">${user.totalEarnings.toFixed(2)}</p>
         <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={30}
        width={40}
        
      />
      </div>
        </div>
        <div className="wg-card ">
        <div className="flex items-center justify-between">
          <h2 className="card1-span">Withdrawable </h2>
          <p className="text-gray-600 text-lg"><svg width="20px" height="45px" viewBox="-3.2 -3.2 38.40 38.40" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <circle cx="16" cy="16" r="16" fill="#96651e"></circle> <path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"></path> </g> </g></svg></p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-content">${user.withdrawableBalance.toFixed(2)}</p>
            {/* <Link to="/withdraw" className="bg-blue-600w text-white flex item-center gap-2 rounded hover:bg-blue-700">
              <FaPlus className=" mr-1" />Withdraw
            </Link> */}
             <ReactApexChart
        options={options}
        series={series}
        type="line"
         height={30}
        width={40}
        
      />
          </div>
          
        </div>
       
      </div>




      <div className="shadow-nones ">
        {/* <div className="tradcon flex items-center">
      <img
    src="https://w7.pngwing.com/pngs/113/18/png-transparent-tether-hd-logo-thumbnail.png"
    alt="USDT"
    className="w-10 h-10 mr-2"
  />
  <h2 className="text-xl font-semibold text-gray-800">
    USDT/BTC
  </h2>
  </div> */}
      <CandlestickChart />
    </div>


      </div>
      <div className="dashaside2">
    {/* Recent Activity Section */}
<div className=" card-bg text-white ">
  <div className="flex justify-between items-center mb-4">
    <select
      value={filters}
      onChange={(e) => setFilters(e.target.value)}
      className="bg-dashboard-cards p-2 rounded text-white"
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
      <h2 className="text-white-800   font-bold mb-3">Transaction History</h2>
      <ActivityList data={activities} />
    </div>
  )}

  {/* Desktop List */}
  <div className=" trx-history-div hidden lg:block">
    <h2 className="transac font-bold mb-3">Transaction History</h2>
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
      
    </section>
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
        <li key={i} className="card-body flex justify-between border-b border-gray-800 ">
          <div>
            <p className="text-truncate font-medium">{item.type}</p>
            <p className="date-span ">
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
