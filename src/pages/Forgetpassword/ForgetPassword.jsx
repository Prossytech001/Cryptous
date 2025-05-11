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


import React, { useState } from 'react';
import axios from 'axios';
import "../../../src/pages/Forgetpassword/Forget.css"

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const api = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${api}/api/auth/forgot-password`, { email });
      setMessage(res.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      setMessage('');
    }
  };

  return (
    <div  className='reset-con'>
      <h1 >Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='res-input'
        />
        <button type="submit" className='res-btn'>Send Reset Link</button>
      </form>

      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ForgotPassword;