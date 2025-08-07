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
      <h2> Admin Deposit Dashboard</h2>

      <div className="filters">
        <select onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="">All Statuses</option>
          <option value="waiting">Waiting</option>
          <option value="confirming">Confirming</option>
          <option value="finished">Finished</option>
          <option value="failed">Failed</option>
        </select>
        
        <input type="date" onChange={(e) => setEndDate(e.target.value)} value={endDate} />
      </div>

      <p><strong>Total Amount:</strong> ${total}</p>
 <div className="adminUser-card rounded-xl shadow ">
      <div className="nk-tb-list">
        <div className="nk-tb-item ">
          <div className='nk-tb-col nk-head1'>
              <span className=" ">User</span></div>
           <div className='nk-tb-col nk-head1'>
              <span className=" ">Email</span></div>
           <div className='nk-tb-col nk-head1'>
              <span className=" ">Amount</span></div>
            <div className='nk-tb-col nk-head1'>
              <span className=" ">Status</span></div>
           <div className='nk-tb-col nk-head1'>
              <span className=" ">Wallet</span></div>
           <div className='nk-tb-col nk-head1'>
              <span className=" ">Date</span></div>
          
        </div>
        <tbody>
          {deposits.map((d) => (
            <div key={d._id} className="nk-tb-item  ">
              <div className='nk-tb-col'>
              <span className=" ">{d.user?.username || 'N/A'}</span></div>
<div className='nk-tb-col'>
              <span className=" ">{d.user?.email || 'N/A'}</span></div>

              <div className='nk-tb-col'>
              <span className=" ">${d.amount}</span></div>
              <div className='nk-tb-col'>
              <span className=" ">{d.status}</span></div>
              <div className='nk-tb-col'>
              <span className=" ">{d.payAddress}</span></div>
              <div className='nk-tb-col'>
              <span className=" ">
  <Link to={`/admin/deposit/${d._id}`}>
    {new Date(d.createdAt).toLocaleString()}
  </Link>
</span></div>
            </div>
          ))}
        </tbody>
      </div>
      </div>

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
