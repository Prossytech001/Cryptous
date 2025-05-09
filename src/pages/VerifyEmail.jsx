// import { useState } from "react";
// import axios from "axios";

// const VerifyOtp = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [message, setMessage] = useState("");

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
//         email,
//         otp,
//       });
//       setMessage(res.data.message);
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Verification failed");
//     }
//   };

//   return (
//     <div className="otp-container">
//       <form onSubmit={handleVerify}>
//         <h2>Verify Email</h2>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Enter OTP"
//           required
//           onChange={(e) => setOtp(e.target.value)}
//         />
//         <button type="submit">Verify</button>
//         {message && <p>{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default VerifyOtp;


// import { useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const VerifyEmail = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const email = searchParams.get("email");
//   const otp = searchParams.get("otp");

//   useEffect(() => {
//     const verify = async () => {
//       try {
//         const res = await axios.post("http://localhost:5000/api/auth/verify-otp", { email, otp });
//         console.log(res.data);
//         navigate("/dashboard"); // Redirect to your dashboard
//       } catch (err) {
//         console.error("Verification failed", err.response?.data || err.message);
//       }
//     };

//     if (email && otp) verify();
//   }, [email, otp, navigate]);

//   return (
//     <div>
//       <h2>Verifying your email...</h2>
//     </div>
//   );
// };

// export default VerifyEmail;

// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const VerifyEmail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const token = params.get("token");
//     const email = params.get("email");

//     if (token && email) {
//       axios
//         .get(`http://localhost:5000/api/auth/verify-email?token=${token}&email=${email}`)
//         .then(() => {
//           alert("✅ Email verified!");
//           navigate("/dashboard"); // Adjust this path to your app
//         })
//         .catch((err) => {
//           console.error("❌ Verification failed:", err);
//           alert("Verification failed or expired.");
//         });
//     }
//   }, [location, navigate]);

//   return <div>Verifying your email, please wait...</div>;
// };

// export default VerifyEmail;
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      axios.post("http://localhost:5000/api/auth/verify-link", { token })
        .then(() => {
          alert("Email verified successfully!");
          navigate("/dashboard"); // 👈 redirect to dashboard
        })
        .catch(() => {
          alert("Verification failed or link expired.");
        });
    }
  }, []);

  return <h2>Verifying your email...</h2>;
};

export default VerifyEmail;
