import { useEffect, useState } from 'react';
import axios from 'axios';
import "../components/UserHistory/UserHistorty.css"
import Loader from '../components/Loader/Loader';

const UserHistory = () => {
  const [deposits, setDeposits] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
    const [stakes, setStakes] = useState([]);
    
   
   
    const [filter, setFilter] = useState("all");
     const [activities, setActivities] = useState([]);
    const [filters, setFilters] = useState(7);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [drawerOpen, setDrawerOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  const token = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get(`${api}/api/history`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setDeposits(res.data.deposits);
        setWithdrawals(res.data.withdrawals);
      } catch (err) {
        console.error('Failed to fetch history:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);


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

  const filteredStakes = stakes.filter((stake) => {
        if (filter === "all") return true;
        if (filter === "active") return !stake.isCompleted;
        if (filter === "completed") return stake.isCompleted;
        return true;
      });

  return (
    <div className="history-page">
      <h2 className='history-h2'>📜 Transaction History</h2>

      {loading ? <p><Loader/></p> : (
        <>
          <h3>Deposits</h3>
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {deposits.map((d) => (
                <tr key={d._id}>
                  <td>${d.amount}</td>
                  <td>{d.status}</td>
                  <td>
  {d.createdAt ? new Date(d.createdAt).toLocaleString() : 'N/A'}
</td>

                </tr>
              ))}
            </tbody>
          </table>
      <div className="with-transaction">
          <h3>Withdrawals</h3>
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Status</th>
                <th>Wallet</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((w) => (
                <tr key={w._id}>
                  <td>${w.amount}</td>
                  <td>{w.status}</td>
                  <td>{w.walletAddress}</td>
                  <td>{new Date(w.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </>
      )}

  <div className="activitydisplay">
<div className="mb-4">
  <label className="mr-2 text-white font-medium">Filter:</label>
   <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="bg-dashboard-card border text-white  px-3 py-1 rounded-md"
  >
    <option className="last7" value="all text-white-100">All</option>
    <option className="last7"  value="active">Active</option>
    <option className="last7"  value="completed">Completed</option>
  </select>
</div>



      <h2 className="text-white font-bold mb-4">📋 Stake History</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table--dash  bg-white rounded-xl overflow-hidden shadow-md">
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
              <tr key={stake._id} className="list-dash  border-b hover:bg-gray-50">
                <td className=" p-3">{stake.plan?.name || "-"}</td>
                <td className="p-3">${stake.amount}</td>
                <td className="p-3">{new Date(stake.startDate).toDateString()}</td>
                <td className="px-4 py-2">{(stake.dailyROI)}%</td>
                
                <td className="p-3">${stake.earningsSoFar.toFixed(2)}</td>
                <td className="p-3">
                  <span
                    className={`satus py-1 rounded-full text-sm font-semibold ${
                      stake.isCompleted
                        ? "bg-green-100 text-green-800"
                        : "bg-red-300 text-red-800"
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

export default UserHistory;
