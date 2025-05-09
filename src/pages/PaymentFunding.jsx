import { useState } from 'react';
import axios from 'axios';


export default function PaymentPage() {
  const [amount, setAmount] = useState('');
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const api = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('authToken');

  const handlePayment = async () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setError('Enter a valid amount.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const userId = localStorage.getItem('userId');
      const res = await axios.post(`${api}/api/payments/create`, { amount, userId });
      setPaymentInfo(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to create payment.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md shadow-2xl">
        <div className="space-y-6 p-6">
          <h2 className="text-2xl font-bold text-center">Fund Your Account</h2>
          <input
            type="number"
            placeholder="Enter amount in USDT"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="w-full" onClick={handlePayment} disabled={loading}>
            {loading ? 'Processing...' : 'Generate Payment Address'}
          </button>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {paymentInfo && (
            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p><strong>Amount:</strong> {paymentInfo.amount} USDT</p>
              <p><strong>Send to:</strong> <span className="break-words">{paymentInfo.payAddress}</span></p>
              <p className="text-sm text-gray-500 mt-2">Once payment is confirmed, your account will be credited.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
