// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const ResetPassword = () => {
//   const { resetToken } = useParams();
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const api = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     // Optionally validate token here by making a request to check its validity
//   }, [resetToken]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//         const res = await axios.post(
//             `${api}/api/auth/reset-password/${resetToken}`,
//             { password },
//             { headers: { 'Content-Type': 'application/json' } }
//           );
//       setMessage(res.data.message);
//       setError('');
//       setTimeout(() => {
//         navigate('/login');  // Redirect to login page after successful reset
//       }, 2000);
//     } catch (err) {
//         console.error('Error response:', err.response);  // Log full error response
//         setError(err.response?.data?.message || 'Something went wrong');
//         setMessage('');
//       }

//       if (!user) {
//         console.log('No user found for token:', resetToken); // Log if no user found
//         return res.status(400).json({ message: 'Invalid or expired reset token' });
//       }

//       console.log('Reset Token:', resetToken);
// console.log('Password:', password);

//   };

//   return (
//     <div>
//       <h1>Reset Password</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="password"
//           placeholder="Enter new password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Confirm new password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Reset Password</button>
//       </form>

//       {message && <p>{message}</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default ResetPassword;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "../../../src/pages/Forgetpassword/Forget.css"

const ResetPassword = () => {
  const { resetToken } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Optionally validate token here by making a request to check its validity
  }, [resetToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post(
        `${api}/api/auth/reset-password/${resetToken}`,
        { password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setMessage(res.data.message);
      setError('');
      setTimeout(() => {
        navigate('/login');  // Redirect to login page after successful reset
      }, 2000);
    } catch (err) {
      console.error('Error response:', err.response);  // Log full error response
      setError(err.response?.data?.message || 'Something went wrong');
      setMessage('');
    }

    console.log('Reset Token:', resetToken);
    console.log('Password:', password);
  };

  return (
    <div className='reset-con'>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit} className='reset-form'>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='res-input'
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className='res-input'
        />
        <button type="submit" className='res-btn'>Reset Password</button>
      </form>

      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ResetPassword;
