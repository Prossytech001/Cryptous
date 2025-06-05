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

// import { useState, useContext } from "react";
// import axios from "axios";
// import "../components/Signup.css";
// import { AuthContext } from "../components/Authcontext.jsx";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(""); // 🟡 Message state (success or error)
//   const api = import.meta.env.VITE_API_URL;

//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     // Email validation
//     if (!email.includes("@")) {
//       setEmailError("Email must include '@'");
//       return;
//     } else {
//       setEmailError("");
//     }

//     // Password validation
//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//     if (!passwordRegex.test(password)) {
//       setPasswordError(
//         "Password must be at least 8 characters, with uppercase, lowercase, number, and special character."
//       );
//       return;
//     } else {
//       setPasswordError("");
//     }

//     try {
//       setLoading(true);
//       setMessage(""); // clear previous messages

//       const res = await axios.post(`${api}/api/auth/signup`, {
//         username,
//         email,
//         password,
//       });

//       if (res.data.token) {
//         localStorage.setItem("authToken", res.data.token);
//         login(res.data.user, res.data.token); // Optional: log user in immediately
//       }

//       setMessage("✅ Signup successful! Redirecting...");
//       setTimeout(() => {
//         navigate("/dashboard");
//       }, 1500); // Redirect after 1.5s
//     } catch (err) {
//       setMessage(
//         `❌ ${err.response?.data?.message || "Signup failed. Try again."}`
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="signup__container">
//       <form onSubmit={handleSignup} className="signup-form">
//         <h2 className="signup__h1">Sign Up</h2>

//         {message && (
//           <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>
//             {message}
//           </p>
//         )}

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
//             type={showPassword ? "text" : "password"}
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

//         <button type="submit" className="signup__button" disabled={loading}>
//           {loading ? "Signing up..." : "Sign Up"}
//         </button>

//         <h1>
//           Already have an account? <Link to="/login">Login</Link>
//         </h1>
//       </form>
//     </div>
//   );
// };

// export default Signup;
// import { useState, useContext } from "react";
// import axios from "axios";
// import "../components/Signup.css";
// import { AuthContext } from "../components/Authcontext.jsx";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState({ type: "", text: "" });

//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const api = import.meta.env.VITE_API_URL;

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     // Basic validations
//     if (!email.includes("@")) {
//       return setMessage({ type: "error", text: "Please enter a valid email address." });
//     }

//     const strongPassword =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
//     if (!strongPassword.test(password)) {
//       return setMessage({
//         type: "error",
//         text:
//           "Password must be at least 8 characters with uppercase, lowercase, number, and special character.",
//       });
//     }

//     try {
//       setLoading(true);
//       setMessage({ type: "", text: "" });

//       const res = await axios.post(`${api}/api/auth/signup`, {
//         username,
//         email,
//         password,
//       });

//       localStorage.setItem("authToken", res.data.token);
//       login(res.data.user, res.data.token);

//       setMessage({ type: "success", text: "✅ Signup successful! Redirecting..." });
//       setTimeout(() => navigate("/dashboard"), 1500);
//     } catch (err) {
//       const errMsg = err.response?.data?.message || "Signup failed. Try again.";
//       setMessage({ type: "error", text: `❌ ${errMsg}` });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const goBack = () => navigate(-1); // ⬅ Go to previous page

//   return (
//     <div className="signup__container">
//       <form onSubmit={handleSignup} className="signup-form">
//         <h2 className="signup__h1">Create Account</h2>

//         {message.text && (
//           <div
//             style={{
//               marginBottom: "10px",
//               padding: "10px",
//               borderRadius: "5px",
//               backgroundColor: message.type === "error" ? "#ffe5e5" : "#e5ffe5",
//               color: message.type === "error" ? "#c00" : "#0a0",
//               fontSize: "0.95rem",
//               fontWeight: "500",
//             }}
//           >
//             {message.text}
//           </div>
//         )}

//         <input
//           type="text"
//           placeholder="Username"
//           className="signup__input inputsignup"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           className="signup__input inputsignup"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <div className="password__field" style={{ position: "relative" }}>
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className="signup__input inputsignup"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <span
//             onClick={() => setShowPassword((prev) => !prev)}
//             style={{
//               position: "absolute",
//               top: "50%",
//               right: "10px",
//               transform: "translateY(-50%)",
//               cursor: "pointer",
//               color: "#555",
//             }}
//           >
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </span>
//         </div>

//         <button type="submit" className="signup__button" disabled={loading}>
//           {loading ? "Creating account..." : "Sign Up"}
//         </button>

//         <button
//           type="button"
//           onClick={goBack}
//           className="signup__button secondary"
//           style={{
//             background: "#f1f1f1",
//             color: "#333",
//             marginTop: "10px",
//             border: "1px solid #ccc",
//           }}
//         >
//           ⬅ Back
//         </button>

//         <p style={{ marginTop: "15px" }}>
//           Already have an account? <Link to="/login">Login here</Link>
//         </p>
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
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const api = import.meta.env.VITE_API_URL;

  const handleSignup = async (e) => {
    e.preventDefault();

    // Agreement check
    if (!agreed) {
      return setMessage({
        type: "error",
        text: "You must agree to the terms and conditions.",
      });
    }

    // Email validation
    if (!email.includes("@")) {
      return setMessage({ type: "error", text: "Please enter a valid email address." });
    }

    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!strongPassword.test(password)) {
      return setMessage({
        type: "error",
        text:
          "Password must be at least 8 characters with uppercase, lowercase, number, and special character.",
      });
    }

    try {
      setLoading(true);
      setMessage({ type: "", text: "" });

      const res = await axios.post(`${api}/api/auth/signup`, {
        username,
        email,
        password,
      });

      localStorage.setItem("authToken", res.data.token);
      login(res.data.user, res.data.token);

      setMessage({ type: "success", text: "✅ Signup successful! Redirecting..." });
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      const errMsg = err.response?.data?.message || "Signup failed. Try again.";
      setMessage({ type: "error", text: `❌ ${errMsg}` });
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => navigate(-1); // ⬅ Go to previous page

  return (
    <div className="signup__container">
      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
        <button
          onClick={goBack}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "1rem",
            color: "#007BFF",
            cursor: "pointer",
          }}
        >
          ⬅ Back
        </button>
      </div>

      <form onSubmit={handleSignup} className="signup-form">
        <h2 className="signup__h1">Create Account</h2>

        {message.text && (
          <div
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: message.type === "error" ? "#ffe5e5" : "#e5ffe5",
              color: message.type === "error" ? "#c00" : "#0a0",
              fontSize: "0.95rem",
              fontWeight: "500",
            }}
          >
            {message.text}
          </div>
        )}

        <input
          type="text"
          placeholder="Username"
          className="signup__input inputsignup"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="signup__input inputsignup"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="password__field" style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="signup__input inputsignup"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#555",
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="agree-checkbox" style={{ margin: "10px 0" }}>
          <label style={{ fontSize: "0.9rem" }}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              style={{ marginRight: "8px" }}
            />
            I agree to the <a href="/terms" target="_blank">terms and conditions</a>
          </label>
        </div>

        <button type="submit" className="signup__button" disabled={loading}>
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        <p style={{ marginTop: "15px" }}>
          Already have an account? <Link to="/login" className="licksign">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
