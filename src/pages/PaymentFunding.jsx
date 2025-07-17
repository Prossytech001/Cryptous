
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../../src/components/Payment/Payment.css"
import usdt from "../../public/usdt.png"
import { FaBars, FaTimes } from "react-icons/fa";
import Breadcrumb from '../components/basedcrumb';
export default function PaymentPage() {
  const [amount, setAmount] = useState('');
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [deposits, setDeposits] = useState([]);
  

  const api = import.meta.env.VITE_API_URL;


 useEffect(() => {
      const fetchHistory = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setLoading(false);
          return;
        }
        try {
          const res = await axios.get(`${api}/api/history`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setDeposits(res.data.deposits);
         
        } catch (err) {
          console.error('Failed to fetch history:', err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchHistory();
    }, []);
 
  

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
          Authorization: `Bearer ${token}`,
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

const [showInstructionPopup, setShowInstructionPopup] = useState(true); // Always show on load


useEffect(() => {
  const seen = sessionStorage.getItem("seenInstructionPopup");
  if (!seen) {
    setShowInstructionPopup(true);
    sessionStorage.setItem("seenInstructionPopup", "true");
  }
}, []);



  return (
    <div className="payment-contaier">
      <Breadcrumb/>
      <div className="payment__contents">
       
       
        <div className="paymet__box">
<div className="payment-img">
      <img src={usdt} alt="" className='usdt-pay'/>
      <h2 className="">Fund Your Account</h2>
      </div>
      <div className="payment-ontent">
  

        <div className="">
          {/* Left: Instructions */}
          <div className="payment-content">
         {showInstructionPopup && (
  <div className="popup-overlay">
    <div className="popup-content">
      <span
        className="popup-close"
        onClick={() => setShowInstructionPopup(false)}
      >
       
            <button onClick={() => setSidebarOpen(false)}>
              <FaTimes />
            </button>
          
      </span>

      <div className="p-4 bg-yel00 border-l-4 border-yellow-500 text-white rounded-xl shadow">
        <div className="flex items-start gap-3">
          <div>
            <h2 className="text-lg font-semibold">Important Funding Instruction</h2>
            <p className="mt-2 text-sm">
              Please <strong>fund your account using only USDT (TRC20)</strong>.
              <br />
              <span style={{ color: "red", fontWeight: "bold" }}>
                Do not send USDT via ERC20, BEP20, or any other network.
              </span>
              <br />
              Using the wrong network may result in <strong>permanent loss of funds</strong>, and such transactions <strong>cannot be recovered</strong>.
              <br />
              Ensure you select <strong>TRC20 (TRON Network)</strong> before making any deposit.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowInstructionPopup(false)}
        style={{
          marginTop: '16px',
          width: '100%',
          padding: '12px',
          backgroundImage: 'linear-gradient(90deg,var( --Kumera),var(--Bronzetone))',
          color: 'white',
          borderRadius: '8px',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Got it
      </button>
    </div>
  </div>
)}
            <select name="currency" id="" className="pay-input" >
              <option value="usdt" className="text-white">USDT (TRC20)</option>
            </select>
            <label className="paymentlabels">Enter amount (USDT)</label>
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
              <div className="text-white">
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
  <div className="popup-overlays">
    <div className="popup-overlay-border w-full max-w-md p-6 rounded-xl shadow-xl relative">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
      >
        ×
      </button>

      <h3 className="text-xl font-semibold text-center text-white mb-4">Payment Instructions</h3>
      <p className="payamount font-bold text-center">{paymentData.amount} USDT</p>
      <p className="payamounts text-sm text-center text-gray-600 mb-1">Send exactly</p>
        <div className="payment_gateway">
      <div className="text-center mb-4">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?data=${paymentData.payAddress}&size=160x160`}
          alt="QR Code"
          className="mx-auto"
        />
      </div>

      
      

      <p className="payamounts text-sm text-center text-gray-600 mt-4 mb-1">OR enter the code manually</p>
      <p className="payadder text-xs font-mono text-center break-all  p-2 border border-gray-300 rounded">
        {paymentData.payAddress}
      </p>

      <button
        onClick={handleCopy}
        className="paycopy w-1/2 mt-3 py-2 text-white font-medium rounded hover:bg-blue-700 transition"
      >
        📋 Copy Wallet Address
      </button>
      </div>
    </div>
  </div>
)}

        </div>
      </div>
      </div>
      </div>
       <div className="payment-history">
          <h3 className='paymentlabel'>Deposit History</h3>
          <table className='payment-table'>
            <thead className='payment-thead'>
              <tr>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {deposits.map((d) => (
                <tr key={d._id} className='tabletr'>
                  <td className='fund-usdt'>{d.amount.toFixed(2)} USDT</td>
                  <td ><p className='fund-usdts'>{d.status}</p></td>
                  <td className='fund-usdtss'>
  {d.createdAt ? new Date(d.createdAt).toLocaleString() : 'N/A'}
</td>

                </tr>
              ))}
            </tbody>
          </table>
     
        </div>
    </div>
  );
}
