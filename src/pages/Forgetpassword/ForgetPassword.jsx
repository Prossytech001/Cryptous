// import { useState } from "react";
// import axios from "axios";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const api = import.meta.env.VITE_API_URL;
//   const token = localStorage.getItem("authToken");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post(`${api}/api/auth/forgot-password`, { email });
//       setMessage(res.data.message);
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Error sending email");
//     }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Forgot Password</h2>
//       <input placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       <button type="submit">{loading ? "Sending..." : "Send Reset Link"}</button>
//       {message && <p>{message}</p>}
//     </form>
//   );
// };

// export default ForgotPassword;

// import React, { useState } from 'react';
// import axios from 'axios';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const api = import.meta.env.VITE_API_URL;

//   const handleForgotPassword = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);
//       const response = await axios.post(`${api}/api/auth/forgot-password`, { email });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage('Failed to send reset email. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleForgotPassword}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Sending...' : 'Send Reset Link'}
//         </button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ForgotPassword;


// import React, { useState } from 'react';
// import axios from 'axios';
// import "../../../src/pages/Forgetpassword/Forget.css"

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const api = import.meta.env.VITE_API_URL;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${api}/api/auth/forgot-password`, { email });
//       setMessage(res.data.message);
//       setError('');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Something went wrong');
//       setMessage('');
//     }
//   };

//   return (
//     <div  className='reset-con'>
//       <h1 >Forgot Password</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className='res-input'
//         />
//         <button type="submit" className='res-btn'>Send Reset Link</button>
//       </form>

//       {message && <p>{message}</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default ForgotPassword;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "../../../src/pages/Forgetpassword/Forget.css";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const [isCooldown, setIsCooldown] = useState(false);
//   const [timer, setTimer] = useState(60); // 1 minute = 60 seconds

//   const api = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     let interval;
//     if (isCooldown && timer > 0) {
//       interval = setInterval(() => {
//         setTimer(prev => prev - 1);
//       }, 1000);
//     } else if (timer === 0) {
//       setIsCooldown(false);
//       setTimer(60);
//     }
//     return () => clearInterval(interval);
//   }, [isCooldown, timer]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(`${api}/api/auth/forgot-password`, { email });
//       setMessage(res.data.message);
//       setError('');
//       setIsCooldown(true); // Start cooldown
//     } catch (err) {
//       setError(err.response?.data?.message || 'Something went wrong');
//       setMessage('');
//     }
//   };

//   return (
//     <div className='reset-con'>
//       <h1>Forgot Password</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className='res-input'
//         />

//         <button 
//           type="submit" 
//           className='res-btn' 
//           disabled={isCooldown}
//         >
//           {isCooldown ? `Wait ${timer}s` : "Send Reset Link"}
//         </button>
//       </form>

//       {message && <p style={{ color: 'green', marginTop: "10px" }}>{message}</p>}
//       {error && <p style={{ color: 'red', marginTop: "10px" }}>{error}</p>}
//     </div>
//   );
// };

// export default ForgotPassword;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../../src/pages/Forgetpassword/Forget.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isCooldown, setIsCooldown] = useState(false);
  const [timer, setTimer] = useState(60); // 1 minute = 60s
  const navigate = useNavigate();
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    let interval;
    if (isCooldown && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsCooldown(false);
      setTimer(60);
    }
    return () => clearInterval(interval);
  }, [isCooldown, timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${api}/api/auth/forgot-password`, { email });
      setMessage(res.data.message);
      setError('');
      setIsCooldown(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      setMessage('');
    }
  };

  return (
    <div className="reset-con">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "transparent",
          border: "none",
          fontSize: "1.2rem",
          color: "#007BFF",
          cursor: "pointer"
        }}
      >
        ← Back
      </button>

      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="res-input"
        />

        <button
          type="submit"
          className="res-btn"
          disabled={isCooldown}
        >
          {isCooldown ? `Wait ${timer}s` : 'Send Reset Link'}
        </button>
      </form>

      {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
};

export default ForgotPassword;
