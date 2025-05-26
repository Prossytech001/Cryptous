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
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function PaymentPage() {
//   const [amount, setAmount] = useState('');
//   const [paymentData, setPaymentData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState('');
//   const api = import.meta.env.VITE_API_URL;

//   const handleCreatePayment = async () => {
//     setLoading(true);
//     setStatusMessage('');
//     try {
//       const res = await axios.post(`${api}/api/payments/create`, {
//         amount,
//         userId: localStorage.getItem('userId'), // Replace with dynamic user ID
//       });

//       setPaymentData(res.data);
//     } catch (err) {
//       console.error(err);
//       setStatusMessage('Failed to initiate payment.');
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (paymentData?.paymentId) {
//       const interval = setInterval(async () => {
//         const res = await axios.get(`${api}/api/payments/status/${paymentData.paymentId}`);
//         if (res.data.status === 'finished') {
//           setStatusMessage('✅ Payment successful! Your balance will be updated shortly.');
//           clearInterval(interval);
//         } else if (res.data.status === 'failed') {
//           setStatusMessage('❌ Payment failed.');
//           clearInterval(interval);
//         }
//       }, 5000);

//       return () => clearInterval(interval);
//     }
//   }, [paymentData]);

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4 text-center">Fund Your Account</h2>

//         <input
//           type="number"
//           placeholder="Enter amount (USDT)"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//         />

//         <button
//           onClick={handleCreatePayment}
//           disabled={loading || !amount}
//           className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
//         >
//           {loading ? 'Processing...' : 'Create Payment'}
//         </button>

//         {paymentData && (
//           <div className="mt-6">
//             <p className="text-sm text-gray-600">Send exactly:</p>
//             <p className="font-bold text-lg">{paymentData.amount} USDT</p>

//             <p className="text-sm text-gray-600 mt-2">To address:</p>
//             <p className="break-all text-sm font-mono">{paymentData.payAddress}</p>

//             {/* Optional QR Code */}
//             <div className="mt-4 flex justify-center">
//               <img
//                 src={`https://api.qrserver.com/v1/create-qr-code/?data=${paymentData.payAddress}&size=150x150`}
//                 alt="QR Code"
//               />
//             </div>
//           </div>
//         )}

//         {statusMessage && (
//           <div className="mt-4 text-center text-sm text-green-600 font-semibold">
//             {statusMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../../src/components/Payment/Payment.css"
import usdt from "../../public/usdt.png"

export default function PaymentPage() {
  const [amount, setAmount] = useState('');
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const api = import.meta.env.VITE_API_URL;

  const handleCreatePayment = async () => {
  setLoading(true);
  setStatusMessage('');

  const token = localStorage.getItem('authToken');
  console.log("🔐 Token being used:", token); // Add this line

  if (!token) {
    setStatusMessage("You are not logged in.");
    setLoading(false);
    return;
  }

  try {
    const res = await axios.post(
      `${api}/api/payments/create`,
      { amount },
      {
        headers: {
          Authorization: `Bearer ${token}`,g
          'Content-Type': 'application/json'// Ensure this is not undefined/null
        },
      }
    );
    setPaymentData(res.data);
    setShowModal(true);
  } catch (err) {
    console.error("❌ Axios Error:", err.response?.data || err.message);
    setStatusMessage('❌ Failed to create payment.');
  }
  setLoading(false);
};

  useEffect(() => {
    if (paymentData?.paymentId) {
      const interval = setInterval(async () => {
        const res = await axios.get(`${api}/api/payments/status/${paymentData.paymentId}`);
        if (res.data.status === 'finished') {
          setStatusMessage('✅ Payment successful! Your balance will be updated.');
          clearInterval(interval);
        } else if (res.data.status === 'failed') {
          setStatusMessage('❌ Payment failed.');
          clearInterval(interval);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [paymentData]);

  const handleCopy = () => {
  if (paymentData?.payAddress) {
    navigator.clipboard.writeText(paymentData.payAddress);
    setStatusMessage("📋 Wallet address copied!");
    setTimeout(() => setStatusMessage(""), 3000);
  }
};


  return (
    <div className="payment-contaier">
      <img src={usdt} alt="" className='usdt-pay'/>
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Fund Your Account</h2>
      <div className="payment-ontent">
        

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Instructions */}
          <div className="payment-content">
          <div className="max-w-xl mx-auto mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 rounded-xl shadow">
      <div className="flex items-start gap-3">
        
        <div>
          <h2 className="text-lg font-semibold">Important Funding Instruction</h2>
          <p className="mt-2 text-sm">
            Please <span className="font-semibold">fund your account using only USDT (TRC20)</span>.
            <br />
            <span className="text-red-600 font-semibold">Do not send USDT via ERC20, BEP20, or any other network.</span>
            <br />
            Using the wrong network may result in <span className="font-semibold">permanent loss of funds</span>, and such transactions <span className="font-semibold">cannot be recovered</span>.
            <br />
            Ensure you select <span className="font-semibold">TRC20 (TRON Network)</span> before making any deposit.
          </p>
        </div>
      </div>
    </div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Enter amount (USDT)</label>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pay-input w-full p-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleCreatePayment}
              disabled={loading || !amount}
              className="pay-btn w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              {loading ? 'Processing...' : 'Generate Payment'}
            </button>

            {paymentData && (
              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <h4 className="font-bold text-lg text-blue-600">💡 Payment Instructions:</h4>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Send exactly <span className="font-semibold">{paymentData.amount} USDT</span>.</li>
                  <li>Use the address shown or scan the QR code.</li>
                  <li>Wait for confirmation — your balance will be updated automatically.</li>
                </ol>
              </div>
            )}

            {statusMessage && (
              <div className="mt-4 text-center font-semibold text-green-600">
                {statusMessage}
              </div>
            )}
          </div>

          {/* Right: QR + Address */}
          {showModal && paymentData && (
  <div className="fixed inset-0 fade-in-up z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl relative">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
      >
        ×
      </button>

      <h3 className="text-xl font-semibold text-center text-blue-600 mb-4">Payment Instructions</h3>

      <div className="text-center mb-4">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?data=${paymentData.payAddress}&size=160x160`}
          alt="QR Code"
          className="mx-auto"
        />
      </div>

      <p className="text-sm text-center text-gray-600 mb-1">Send exactly:</p>
      <p className="text-lg font-bold text-center">{paymentData.amount} USDT</p>

      <p className="text-sm text-center text-gray-600 mt-4 mb-1">To address:</p>
      <p className="text-xs font-mono text-center break-all bg-gray-100 p-2 border border-gray-300 rounded">
        {paymentData.payAddress}
      </p>

      <button
        onClick={handleCopy}
        className="w-full mt-3 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
      >
        📋 Copy Wallet Address
      </button>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
}
