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

const WithdrawForm = ({ userBalance }) => {
  const [amount, setAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const api = import.meta.env.VITE_API_URL;

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

//       setAmount('');
//       setWalletAddress('');
//       setShowPopup(true);

//       // 🕒 Auto-hide popup after 5 seconds
//       setTimeout(() => {
//         setShowPopup(false);
//       }, 5000);
//     } catch (err) {
//       const errMsg = err.response?.data?.message || 'Something went wrong';
//       setError(errMsg);
//     }
//   };
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
    <div>
    <h2 className='withdraw-containerh2'>Withdraw Funds</h2>
    <div className="withdraw-container">
      
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
  );
};

export default WithdrawForm;
