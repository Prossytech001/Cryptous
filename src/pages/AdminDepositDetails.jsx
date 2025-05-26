import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AdminDepositDetails = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState(null);
  const api = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const res = await axios.get(`${api}/api/admin/deposit/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPayment(res.data);
      } catch (err) {
        console.error("Failed to fetch payment:", err.message);
      }
    };

    fetchPayment();
  }, [id]);

  if (!payment) return <p>Loading payment details...</p>;

  return (
    <>
    <button onClick={() => window.history.back()}>⬅ Go Back</button>

    <div className="payment-details">
      <h2>💳 Deposit Details</h2>
      <ul>
        <li><strong>User:</strong> {payment.user?.username}</li>
        <li><strong>Email:</strong> {payment.user?.email}</li>
        <li><strong>Amount:</strong> ${payment.amount}</li>
        <li><strong>Status:</strong> {payment.status}</li>
        <li><strong>Wallet Address:</strong> {payment.payAddress}</li>
        <li><strong>Payment ID:</strong> {payment.paymentId}</li>
        <li><strong>Date:</strong> {new Date(payment.createdAt).toLocaleString()}</li>
        <li><strong>Invoice URL:</strong> 
          {payment.invoiceUrl ? (
            <a href={payment.invoiceUrl} target="_blank" rel="noopener noreferrer">
              View Invoice
            </a>
          ) : ' N/A'}
        </li>
      </ul>

      <style>{`
        .payment-details { max-width: 600px; margin: auto; padding: 2rem; background: #f9f9f9; border-radius: 10px; }
        ul { list-style: none; padding: 0; }
        li { margin-bottom: 1rem; }
        strong { width: 150px; display: inline-block; }
      `}</style>
    </div>
    </>
  );
};

export default AdminDepositDetails;
