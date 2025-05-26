import { useEffect, useState } from 'react';
import axios from 'axios';

const UserHistory = () => {
  const [deposits, setDeposits] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(true);
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

  return (
    <div className="history-page">
      <h2>📜 Transaction History</h2>

      {loading ? <p>Loading...</p> : (
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
        </>
      )}

      <style>{`
        .history-page { padding: 2rem; max-width: 900px; margin: auto; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 2rem; }
        th, td { padding: 0.75rem; border: 1px solid #ccc; text-align: left; }
        h3 { margin-top: 2rem; }
      `}</style>
    </div>
  );
};

export default UserHistory;
