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
  const api = import.meta.env.VITE_API_URL;

  const handleCreatePayment = async () => {
    setLoading(true);
    setStatusMessage('');
    try {
      const res = await axios.post(`${api}/api/payments/create`, {
        amount,
        userId: localStorage.getItem('userId'),
      });
      setPaymentData(res.data);
    } catch (err) {
      console.error(err);
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
          {paymentData && (
            <div className="or-pay flex-1 bg-gray-50 border border-dashed border-gray-300 rounded-xl p-4">
              <div className="text-center mb-4">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?data=${paymentData.payAddress}&size=160x160`}
                  alt="QR Code"
                  className="mx-auto"
                />
              </div>
              <p className="text-sm text-gray-500 mb-1 text-center">Send exactly:</p>
              <p className="text-lg font-bold text-center text-gray-800">{paymentData.amount} USDT</p>

              <p className="text-sm text-gray-500 mt-4 mb-1 text-center">To address:</p>
              <p className="address text-xs font-mono text-center break-all bg-white p-2 border border-gray-200 rounded">
                {paymentData.payAddress}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
