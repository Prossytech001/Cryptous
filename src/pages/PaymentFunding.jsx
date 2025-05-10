// import { useState } from 'react';
// import axios from 'axios';


// export default function PaymentPage() {
//   const [amount, setAmount] = useState('');
//   const [paymentInfo, setPaymentInfo] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const api = import.meta.env.VITE_API_URL;
//   const token = localStorage.getItem('authToken');

//   const handlePayment = async () => {
//     if (!amount || isNaN(amount) || Number(amount) <= 0) {
//       setError('Enter a valid amount.');
//       return;
//     }
//     setLoading(true);
//     setError('');
//     try {
//       const userId = localStorage.getItem('userId');
//       const res = await axios.post(`${api}/api/payments/create`, { amount, userId });
//       setPaymentInfo(res.data);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to create payment.');
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="w-full max-w-md shadow-2xl">
//         <div className="space-y-6 p-6">
//           <h2 className="text-2xl font-bold text-center">Fund Your Account</h2>
//           <input
//             type="number"
//             placeholder="Enter amount in USDT"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//           <button className="w-full" onClick={handlePayment} disabled={loading}>
//             {loading ? 'Processing...' : 'Generate Payment Address'}
//           </button>
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {paymentInfo && (
//             <div className="bg-green-50 border border-green-200 rounded p-4">
//               <p><strong>Amount:</strong> {paymentInfo.amount} USDT</p>
//               <p><strong>Send to:</strong> <span className="break-words">{paymentInfo.payAddress}</span></p>
//               <p className="text-sm text-gray-500 mt-2">Once payment is confirmed, your account will be credited.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// pages/payment.jsx (or wherever appropriate)
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PaymentPage() {
  const [amount, setAmount] = useState('');
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const api = import.meta.env.VITE_API_URL;

  const handleCreatePayment = async () => {
    setLoading(true);
    setStatusMessage('');
    try {
      const res = await axios.post(`${api}/api/payment/create`, {
        amount,
        userId: JSON.parse(localStorage.getItem("user"))?.id, // Replace with dynamic user ID
      });

      setPaymentData(res.data);
    } catch (err) {
      console.error(err);
      setStatusMessage('Failed to initiate payment.');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (paymentData?.paymentId) {
      const interval = setInterval(async () => {
        const res = await axios.get(`/api/payment/status/${paymentData.paymentId}`);
        if (res.data.status === 'finished') {
          setStatusMessage('✅ Payment successful! Your balance will be updated shortly.');
          clearInterval(interval);
        } else if (res.data.status === 'failed') {
          setStatusMessage('❌ Payment failed.');
          clearInterval(interval);
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [paymentData]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Fund Your Account</h2>

        <input
          type="number"
          placeholder="Enter amount (USDT)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <button
          onClick={handleCreatePayment}
          disabled={loading || !amount}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          {loading ? 'Processing...' : 'Create Payment'}
        </button>

        {paymentData && (
          <div className="mt-6">
            <p className="text-sm text-gray-600">Send exactly:</p>
            <p className="font-bold text-lg">{paymentData.amount} USDT</p>

            <p className="text-sm text-gray-600 mt-2">To address:</p>
            <p className="break-all text-sm font-mono">{paymentData.payAddress}</p>

            {/* Optional QR Code */}
            <div className="mt-4 flex justify-center">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?data=${paymentData.payAddress}&size=150x150`}
                alt="QR Code"
              />
            </div>
          </div>
        )}

        {statusMessage && (
          <div className="mt-4 text-center text-sm text-green-600 font-semibold">
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
}
