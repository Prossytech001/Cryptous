// import { useState } from "react";
// import axios from "axios";
// import "../components/Signup.css"; // Import your CSS file for styling
// import { useContext } from "react";
// import { AuthContext } from "../components/Authcontext.jsx"; // Adjust the import path as necessary
// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { login } = useContext(AuthContext);

//   // After successful login/signup
//   login(res.data);


//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/signup", {
//         username,
//         email,
//         password,
//       });
//       console.log("✅ Signup success:", res.data);
//     } catch (err) {
//       console.error("❌ Signup failed:", err.response?.data || err.message);
//     }
//   };

//   return (
//     <div className="signup__container">
//     <form onSubmit={handleSignup} className="signup-form"> 
//       <h2 className="signup__h1">Sign Up</h2>
//       <input
//         placeholder="Username"
//         onChange={(e) => setUsername(e.target.value)}
//         className="signup__input inputsignup"
//       />
//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="signup__email inputsignup" />
//       <input
//         placeholder="Password"
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//         className="signup__password inputsignup"
//       />
//       <button type="submit" className="signup__button">Sign Up</button>
//     </form>
//     </div>
//   );
// };

// export default Signup;

// import { useState } from "react";
// import axios from "axios";
// import "../components/Signup.css"; // Import your CSS file for styling
// import { useContext } from "react";
// import { AuthContext } from "../components/Authcontext.jsx"; // Adjust the import path as necessary
// import { FaEye, FaEyeSlash } from "react-icons/fa"; 
// import { Link , useNavigate } from "react-router-dom"; // Import Link for navigation

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const { login } = useContext(AuthContext);
//    // Get login from context

//    const handleSignup = async (e) => {
//     e.preventDefault();
  
//     // ✅ Email validation
//     if (!email.includes("@")) {
//       setEmailError("Email must include '@'");
//       return;
//     } else {
//       setEmailError("");
//     }
  
//     // ✅ Password validation
//     const passwordRegex = /^(?=.*[A-Z])(?=.*_).{8,}$/;
//     if (!passwordRegex.test(password)) {
//       setPasswordError("Password must be at least 8 characters, include 1 uppercase letter and an underscore (_)");
//       return;
//     } else {
//       setPasswordError("");
//     }
  
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/signup", {
//         username,
//         email,
//         password,
//       });
  
//       console.log("✅ Signup success:", res.data);
//       login(res.data);
//     } catch (err) {
//       console.error("❌ Signup failed:", err.response?.data || err.message);
//     }
//   };


  
  

//   return (
//     <div className="signup__container">
//       <form onSubmit={handleSignup} className="signup-form"> 
//         <h2 className="signup__h1">Sign Up</h2>
//         <input
//           placeholder="Username"
//           onChange={(e) => setUsername(e.target.value)}
//           className="signup__input inputsignup"
//           required
//         />
//         <input
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="signup__email inputsignup"
//           required
//           resource="@"
//         />
//           {emailError && (
//           <p style={{ color: "red", fontSize: "0.85rem", marginTop: "-10px" }}>
//             {emailError}
//           </p>
//         )}
      
// <div className="password__field" style={{ position: "relative" }}>
//   <input
//     placeholder="Password"
//     type={showPassword ? "text" : "password"} // toggle between password/text
//     onChange={(e) => setPassword(e.target.value)}
//     className="signup__password inputsignup"
//     required
//   />
//   <span
//     onClick={() => setShowPassword(!showPassword)}
//     style={{
//       position: "absolute",
//       top: "50%",
//       right: "10px",
//       transform: "translateY(-50%)",
//       cursor: "pointer",
//     }}
//   >
//     {showPassword ? <FaEyeSlash /> : <FaEye />}
//   </span>
// </div>
//         {passwordError && (
//           <p style={{ color: "red", fontSize: "0.85rem", marginTop: "-10px" }}>{passwordError}</p>
//         )}
//         <button type="submit" className="signup__button">Sign Up</button>
//         <h1>Already have an account <Link to="/login">Login</Link></h1>
//       </form>
//     </div>
//   );
// };

// export default Signup;


// import { useState } from "react";
// import axios from "axios";
// import "../components/Signup.css"; // Import your CSS file for styling
// import { useContext } from "react";
// import { AuthContext } from "../components/Authcontext.jsx"; // Adjust the import path as necessary
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const api = import.meta.env.VITE_API_URL;

//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate(); // For redirection

 


// const handleSignup = async (e) => {
//   e.preventDefault();

//   // ✅ Email validation
//   if (!email.includes("@")) {
//     setEmailError("Email must include '@'");
//     return;
//   } else {
//     setEmailError("");
//   }

//   // ✅ Password validation
//   const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//   if (!passwordRegex.test(password)) {
//     setPasswordError("Password must be at least 8 characters long, include uppercase, lowercase, number, and special character. ");
//     return;
//   } else {
//     setPasswordError("");
//   }

//   try {
//     const res = await axios.post(`${api}/api/auth/signup`, {
//       username,
//       email,
//       password,
//     });

//     console.log("✅ Signup success:", res.data);

//     // Optional: store token if your backend returns one
//     if (res.data.token) {
//       localStorage.setItem("authToken", res.data.token);
//     }

//     // Redirect to dashboard directly
//     navigate("/dashboard");
//   } catch (err) {
//     console.error("❌ Signup failed:", err.response?.data || err.message);
//   }
// };

//   return (
//     <div className="signup__container">
//       <form onSubmit={handleSignup} className="signup-form">
//         <h2 className="signup__h1">Sign Up</h2>
//         <input
//           placeholder="Username"
//           onChange={(e) => setUsername(e.target.value)}
//           className="signup__input inputsignup"
//           required
//         />
//         <input
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="signup__email inputsignup"
//           required
//         />
//         {emailError && (
//           <p style={{ color: "red", fontSize: "0.85rem", marginTop: "-10px" }}>
//             {emailError}
//           </p>
//         )}

//         <div className="password__field" style={{ position: "relative" }}>
//           <input
//             placeholder="Password"
//             type={showPassword ? "text" : "password"} // toggle between password/text
//             onChange={(e) => setPassword(e.target.value)}
//             className="signup__password inputsignup"
//             required
//           />
//           <span
//             onClick={() => setShowPassword(!showPassword)}
//             style={{
//               position: "absolute",
//               top: "50%",
//               right: "10px",
//               transform: "translateY(-50%)",
//               cursor: "pointer",
//             }}
//           >
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </span>
//         </div>
//         {passwordError && (
//           <p style={{ color: "red", fontSize: "0.85rem", marginTop: "-10px" }}>
//             {passwordError}
//           </p>
//         )}
//         <button type="submit" className="signup__button">Sign Up</button>
//         <h1>Already have an account <Link to="/login">Login</Link></h1>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import { useState, useContext } from "react";
import axios from "axios";
import "../components/Signup.css";
import { AuthContext } from "../components/Authcontext.jsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // 🟡 Message state (success or error)
  const api = import.meta.env.VITE_API_URL;

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Email validation
    if (!email.includes("@")) {
      setEmailError("Email must include '@'");
      return;
    } else {
      setEmailError("");
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters, with uppercase, lowercase, number, and special character."
      );
      return;
    } else {
      setPasswordError("");
    }

    try {
      setLoading(true);
      setMessage(""); // clear previous messages

      const res = await axios.post(`${api}/api/auth/signup`, {
        username,
        email,
        password,
      });

      if (res.data.token) {
        localStorage.setItem("authToken", res.data.token);
        login(res.data.user, res.data.token); // Optional: log user in immediately
      }

      setMessage("✅ Signup successful! Redirecting...");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500); // Redirect after 1.5s
    } catch (err) {
      setMessage(
        `❌ ${err.response?.data?.message || "Signup failed. Try again."}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup__container">
      <form onSubmit={handleSignup} className="signup-form">
        <h2 className="signup__h1">Sign Up</h2>

        {message && (
          <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>
            {message}
          </p>
        )}

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="signup__input inputsignup"
          required
        />
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="signup__email inputsignup"
          required
        />
        {emailError && (
          <p style={{ color: "red", fontSize: "0.85rem", marginTop: "-10px" }}>
            {emailError}
          </p>
        )}

        <div className="password__field" style={{ position: "relative" }}>
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            className="signup__password inputsignup"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {passwordError && (
          <p style={{ color: "red", fontSize: "0.85rem", marginTop: "-10px" }}>
            {passwordError}
          </p>
        )}

        <button type="submit" className="signup__button" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <h1>
          Already have an account? <Link to="/login">Login</Link>
        </h1>
      </form>
    </div>
  );
};

export default Signup;
