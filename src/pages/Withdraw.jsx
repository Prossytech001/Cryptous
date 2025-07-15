// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const WithdrawForm = ({ userBalance }) => {
//   const [amount, setAmount] = useState('');
//   const [walletAddress, setWalletAddress] = useState('');
//   const [error, setError] = useState('');
//   const [showPopup, setShowPopup] = useState(false);

//   const handleWithdraw = async (e) => {
//     e.preventDefault();
//     setError('');
//     setShowPopup(false);

//     const numAmount = Number(amount);

//     if (numAmount < 100 || numAmount > 1000) {
//       return setError('Amount must be between 100 and 1000');
//     }

//     if (numAmount > userBalance) {
//       return setError('You do not have enough withdrawable balance');
//     }

//     try {
//       const token = localStorage.getItem('authToken');
//       if (!token) return setError('You must be logged in');

//       await axios.post(
//         'http://localhost:5000/api/withdraw',
//         {
//           amount: numAmount,
//           walletAddress
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       // Reset form
//       setAmount('');
//       setWalletAddress('');
//       setShowPopup(true);
//     } catch (err) {
//       const errMsg = err.response?.data?.message || 'Something went wrong';
//       setError(errMsg);
//     }
//   };

//   return (
//     <div className="withdraw-container">
//       <h2>Withdraw Funds</h2>
//       <form onSubmit={handleWithdraw} className="withdraw-form">
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           placeholder="Enter amount (min 100, max 1000)"
//           required
//         />
//         <input
//           type="text"
//           value={walletAddress}
//           onChange={(e) => setWalletAddress(e.target.value)}
//           placeholder="Enter wallet address"
//           required
//         />
//         <button type="submit">Submit Withdrawal</button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </form>

//       {showPopup && (
//         <div className="popup success">
//           <div className="popup-content">
//             <p>✅ Your withdrawal request is being processed.</p>
//             <p>You’ll receive a response within 3 working days.</p>
//           </div>
//         </div>
//       )}

//       <style>{`
//         .withdraw-container {
//           max-width: 400px;
//           margin: auto;
//         }
//         .withdraw-form input, .withdraw-form button {
//           width: 100%;
//           padding: 10px;
//           margin-bottom: 10px;
//         }
//         .popup {
//           position: fixed;
//           top: 20%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           background: white;
//           border: 1px solid #4caf50;
//           padding: 20px;
//           border-radius: 8px;
//           box-shadow: 0 10px 25px rgba(0,0,0,0.2);
//           animation: fadeInScale 0.4s ease-in-out;
//         }
//         @keyframes fadeInScale {
//           0% {
//             transform: translate(-50%, -50%) scale(0.8);
//             opacity: 0;
//           }
//           100% {
//             transform: translate(-50%, -50%) scale(1);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WithdrawForm;
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../components/Withdraw/Withdraw.css"
import withimg from "../../public/usdt.png"
import {Link} from "react-router-dom";
import Basedcrumb from '../components/Basedcrumb';

const WithdrawForm = ({ userBalance }) => {
  const [amount, setAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [error, setError] = useState('');
   const [withdrawals, setWithdrawals] = useState([]);
  const [withdrawableBalance, setWithdrawableBalance] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
   const [loading, setLoading] = useState(true);
  const api = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const res = await axios.get(`${api}/api/withdraw/balance`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setWithdrawableBalance(res.data.withdrawableBalance);
      } catch (err) {
        console.error("Error fetching balance:", err.message);
      }
    };

    fetchBalance();
  }, []);


  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const res = await axios.get(`${api}/api/history`, {
          headers: { Authorization: `Bearer ${token}` }
        });
       
        setWithdrawals(res.data.withdrawals);
      } catch (err) {
        console.error('Failed to fetch history:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);


const handleWithdraw = async (e) => {
  e.preventDefault();
  setError('');
  setShowPopup(false);

  const numAmount = Number(amount);

  if (numAmount < 100 || numAmount > 1000) {
    return setError('Amount must be between 100 and 1000');
  }

  if (numAmount > userBalance) {
    return setError('You do not have enough withdrawable balance');
  }

  try {
    const token = localStorage.getItem('authToken');
    if (!token) return setError('You must be logged in');

    await axios.post(
      `${api}/api/withdraw`,
      {
        amount: numAmount,
        walletAddress
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // ✅ Play success sound
    const successSound = new Audio('/success.mp3');
    successSound.play();

    // Reset and show popup
    setAmount('');
    setWalletAddress('');
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  } catch (err) {
    const errMsg = err.response?.data?.message || 'Something went wrong';
    setError(errMsg);
  }
};


  return (
    <div className="withdraw-container">

    <Basedcrumb/>
    <div >
   
    <h1 className="dashboard-heading-h"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-columns-gap plan-icon"><path fill-rule="evenodd" d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"></path></svg>Withdraw</h1>

    <div className="withdraw-containers">
      <div className="withhead">
       <div className="withimg">
        <img src={withimg} alt="" className='usdt-pay'/>
        <p>USDT (TRC20).</p>
       </div>
       
        <p className=" p-amoutwith  flex flex-col text-lg mb-2">
       <strong className='withamout'>${withdrawableBalance.toFixed(2)}</strong>
       
      </p>
      </div>
     
      <form onSubmit={handleWithdraw} className="withdraw-form">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount (min 100, max 1000)"
          required
        />
        <input
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          placeholder="Enter wallet address"
          required
        />
        <button type="submit">Submit Withdrawal</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>




      <div className="withdrawhistory">
      <h3>Withdrawals History</h3>
          <table className='withtable'>
            <thead className='withtable-thead'>
              <tr>
                <th>Details</th>
                <th>Status</th>
                <th>Wallet</th>
                
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((w) => (
                <tr key={w._id}>
                  <td className='detail-with'><strong className='with0-amout-storng'>{w.amount} USDT </strong> <span>{new Date(w.createdAt).toLocaleString()}</span></td>
                  <td>{w.status}</td>
                  <td>{w.walletAddress}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          </div>

      {showPopup && (
        <div className="popup success">
          <div className="popup-content">
            <p>✅ Your withdrawal request is being processed.</p>
            <p>You’ll receive a response within 3 working days.</p>
          </div>
        </div>
      )}

      <style>{`
       
       
        .popup {
          position: fixed;
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          border: 1px solid #4caf50;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          animation: fadeInScale 0.4s ease-in-out;
          z-index: 999;
        }
        @keyframes fadeInScale {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
    </div>
    </div>
  );
};

export default WithdrawForm;
