import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecentActivity = () => {
  const api = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('userToken');

  const [activities, setActivities] = useState([]);
  const [filter, setFilter] = useState(7);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
  }, [filter, page]);

  return (
    <div className="text-white">
      {/* Filter and Toggle Drawer */}
      <div className="flex justify-between items-center mb-4">
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="bg-dashboard-card p-2 rounded text-white">
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="90">Last 90 Days</option>
        </select>
        <button onClick={() => setDrawerOpen(!drawerOpen)} className="lg:hidden bg-blue-600 px-4 py-1 rounded">
          {drawerOpen ? 'Close' : 'Show'} Recent
        </button>
      </div>

      {/* Drawer for Mobile */}
      {drawerOpen && (
        <div className="fixed top-0 right-0 z-50 w-4/5 h-full bg-dashboard-card p-4 shadow-lg overflow-y-auto lg:hidden">
          <h2 className="text-xl font-bold mb-3">Recent Activity</h2>
          <ActivityList data={activities} />
        </div>
      )}

      {/* Desktop List */}
      <div className="hidden lg:block">
        <h2 className="text-xl font-bold mb-3">Recent Activity</h2>
        <ActivityList data={activities} />
      </div>

      {/* Pagination */}
      <div className="flex justify-end gap-2 mt-4">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} className="btn">Prev</button>
        <button onClick={() => setPage((p) => (p < totalPages ? p + 1 : p))} className="btn">Next</button>
      </div>
    </div>
  );
};

const ActivityList = ({ data }) => (
  <ul className="space-y-3">
    {data.map((item, i) => (
      <li key={i} className="flex justify-between border-b border-gray-700 pb-2">
        <div>
          <p className="font-medium">{item.type}</p>
          <p className="text-sm text-dashboard-muted">{new Date(item.date).toDateString()}</p>
        </div>
        <div className={`font-semibold ${item.amount >= 0 ? 'text-dashboard-success' : 'text-dashboard-danger'}`}>
          {item.amount >= 0 ? `+${item.amount}` : item.amount}
        </div>
      </li>
    ))}
  </ul>
);

export default RecentActivity;
