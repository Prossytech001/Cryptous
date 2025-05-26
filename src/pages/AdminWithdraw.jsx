import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminWithdrawals = () => {
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [statusFilter, setStatusFilter] = useState('pending');
  const [page, setPage] = useState(1);
  const api = import.meta.env.VITE_API_URL ;

  const token = localStorage.getItem('adminToken');

  const fetchWithdrawals = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${api}/api/admin/withdrawals?status=${statusFilter}&page=${page}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setWithdrawals(res.data);
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id, action) => {
    try {
      await axios.put(`${api}/api/admin/withdrawals/${action}/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage(`Withdrawal ${action}d successfully`);
      fetchWithdrawals();
    } catch (err) {
      setMessage(`Failed to ${action} withdrawal`);
    }
  };

  useEffect(() => {
    fetchWithdrawals();
  }, [statusFilter, page]);

  const handleFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setPage(1);
  };

  return (
    <div className="admin-withdraw-page">
      <h2>Manage Withdrawals</h2>

      <div className="controls">
        <label>Status Filter: </label>
        <select value={statusFilter} onChange={handleFilterChange}>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="declined">Declined</option>
          <option value="all">All</option>
        </select>
      </div>

      {message && <p className="msg">{message}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        withdrawals.length === 0 ? <p>No withdrawal requests</p> : (
          <>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Amount</th>
                  <th>Wallet</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {withdrawals.map((w) => (
                  <tr key={w._id}>
                    <td>{w.user?.username}</td>
                    <td>{w.user?.email}</td>
                    <td>${w.amount}</td>
                    <td>{w.walletAddress}</td>
                    <td>{w.status}</td>
                    <td>
                      {w.status === 'pending' ? (
                        <>
                          <button onClick={() => handleAction(w._id, 'approve')}>✅</button>
                          <button onClick={() => handleAction(w._id, 'decline')}>❌</button>
                        </>
                      ) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <button onClick={() => setPage(p => Math.max(1, p - 1))}>⬅ Prev</button>
              <span>Page {page}</span>
              <button onClick={() => setPage(p => p + 1)}>Next ➡</button>
            </div>
          </>
        )
      )}

      <style>{`
        .admin-withdraw-page { padding: 2rem; max-width: 1000px; margin: auto; }
        .controls { margin-bottom: 1rem; }
        select { margin-left: 0.5rem; padding: 0.4rem; }
        table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        th, td { padding: 0.75rem; border: 1px solid #ccc; text-align: center; }
        button { margin: 0 3px; padding: 0.4rem 0.7rem; cursor: pointer; }
        .msg { color: green; margin-top: 0.5rem; }
        .pagination { margin-top: 1rem; display: flex; justify-content: center; gap: 1rem; }
      `}</style>
    </div>
  );
};

export default AdminWithdrawals;
