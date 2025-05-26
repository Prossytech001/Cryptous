import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminDeposits = () => {
  const [deposits, setDeposits] = useState([]);
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const api = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("adminToken");

  const fetchDeposits = async () => {
    try {
      const params = new URLSearchParams();
      if (status) params.append("status", status);
      if (startDate) params.append("start", startDate);
      if (endDate) params.append("end", endDate);

      const res = await axios.get(`${api}/api/admin/deposits?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDeposits(res.data);
    } catch (err) {
      console.error("Error fetching deposits:", err.message);
    }
  };

  useEffect(() => {
    fetchDeposits();
  }, [status, startDate, endDate]);

  const total = deposits.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="admin-deposits">
      <h2>💰 Admin Deposit Dashboard</h2>

      <div className="filters">
        <select onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="">All Statuses</option>
          <option value="waiting">Waiting</option>
          <option value="confirming">Confirming</option>
          <option value="finished">Finished</option>
          <option value="failed">Failed</option>
        </select>
        <input type="date" onChange={(e) => setStartDate(e.target.value)} value={startDate} />
        <input type="date" onChange={(e) => setEndDate(e.target.value)} value={endDate} />
      </div>

      <p><strong>Total Amount:</strong> ${total}</p>

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Wallet</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {deposits.map((d) => (
            <tr key={d._id}>
              <td>{d.user?.username || 'N/A'}</td>
<td>{d.user?.email || 'N/A'}</td>

              <td>${d.amount}</td>
              <td>{d.status}</td>
              <td>{d.payAddress}</td>
              <td>
  <Link to={`/admin/deposit/${d._id}`}>
    {new Date(d.createdAt).toLocaleString()}
  </Link>
</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        .admin-deposits { padding: 2rem; max-width: 1100px; margin: auto; }
        .filters { margin-bottom: 1rem; display: flex; gap: 1rem; }
        select, input { padding: 0.4rem; font-size: 1rem; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 0.75rem; border: 1px solid #ccc; }
        th { background: #f1f1f1; }
      `}</style>
    </div>
  );
};

export default AdminDeposits;
