// import { useState } from "react";
// import axios from "axios";
// import { useContext } from "react";
// import { AuthContext } from "../components/Authcontext.jsx"; // Adjust the import path as necessary
// import { FaEye, FaEyeSlash } from "react-icons/fa"; 
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'; 
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const { login } = useContext(AuthContext);

// // After successful login/signup




// const handleLogin = async (email, password) => {
//     const navigate = useNavigate(); // Initialize the navigate function
  
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', {
//         email,
//         password,
//       });
  
//       if (response.status === 200) {
//         const { token, user } = response.data;
  
//         // Store the token and user in localStorage (or sessionStorage)
//         localStorage.setItem('authToken', token);
//         localStorage.setItem('user', JSON.stringify(user));
  
//         console.log('Login successful');
  
//         // Redirect to the dashboard page after successful login
//         navigate('/dashboard'); // Redirect to dashboard route
//       }
//     } catch (error) {
//       console.error('Login failed:', error.response?.data?.message);
//       // Handle error (e.g., show error message to the user)
//     }
//   };

//   return (
//     <div className="signup__container">
//     <form onSubmit={handleLogin} className="signup-form">
//       <h2 className="signup__h1">Login</h2>
//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} 
//       className="signup__input inputsignup"/>
           
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
//       </span>
//     </div>
//     <div className="forget"><h1>Forget password</h1></div>
//       <button type="submit" className="signup__button">Login</button>
//       <h1>Don't have an account <Link to="/signup">Sign up</Link></h1>
//     </form>
//     </div>
//   );
// };

// export default Login;
// import { useState, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../components/Authcontext.jsx"; // Adjust the import path as necessary
// import { FaEye, FaEyeSlash } from "react-icons/fa"; 
// import { Link, useNavigate } from "react-router-dom"; 

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const { login } = useContext(AuthContext);// Assuming this is used for authentication context
//   const api = import.meta.env.VITE_API_URL; 
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate(); // Initialize the navigate function

  

//   const handleLogin = async (e) => {
//     e.preventDefault();
  
//     try {
//       const res = await axios.post(`${api}/api/auth/login`, {
//         email,
//         password,
//       });
//       setLoading(true);
//       // ✅ Save token and user info to localStorage
//       localStorage.setItem("authToken", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));
  
//       // ✅ Set context (user + isAuthenticated)
//       login(res.data.user, res.data.token); //
  
//       // ✅ Navigate to dashboard
//       navigate("/dashboard");
  
//       console.log("✅ Login successful!");
//     } catch (err) {
//       console.error("❌ Login failed:", err.response?.data?.message || err.message);
//       // Optionally show error to user
//     }
//     setLoading(false);
//   };
  



//   return (
//     <div className="signup__container">
//       <form onSubmit={handleLogin} className="signup-form">
//         <h2 className="signup__h1">Login</h2>
//         <input 
//           placeholder="Email" 
//           onChange={(e) => setEmail(e.target.value)} 
//           className="signup__input inputsignup" 
//           value={email}
//         />
//         <div className="password__field" style={{ position: "relative" }}>
//           <input
//             placeholder="Password"
//             type={showPassword ? "text" : "password"} // toggle between password/text
//             onChange={(e) => setPassword(e.target.value)}
//             className="signup__password inputsignup"
//             required
//             value={password}
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
//         <div className="forget"><h1>Forget password</h1></div>
//         <button type="submit" className="signup__button">{loading ? 'Loading.....' : 'Login'}</button>
//         <h1>Don't have an account? <Link to="/signup">Sign up</Link></h1>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import { useState, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../components/Authcontext.jsx";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; 
// import { Link, useNavigate } from "react-router-dom"; 

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const { login } = useContext(AuthContext);
//   const api = import.meta.env.VITE_API_URL;
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage("");
//     setSuccessMessage("");

//     try {
//       const res = await axios.post(`${api}/api/auth/login`, {
//         email,
//         password,
//       });

//       localStorage.setItem("authToken", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));
//       login(res.data.user, res.data.token);

//       setSuccessMessage("✅ Login successful! Redirecting...");
//       navigate("/dashboard");
//     } catch (err) {
//       console.error("❌ Login failed:", err.response?.data?.message || err.message);
//       setErrorMessage(err.response?.data?.message || "Login failed. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="signup__container">
//       <form onSubmit={handleLogin} className="signup-form">
//         <h2 className="signup__h1">Login</h2>

//         <input 
//           placeholder="Email" 
//           value={email}
//           onChange={(e) => setEmail(e.target.value)} 
//           className="signup__input inputsignup" 
//         />

//         <div className="password__field" style={{ position: "relative" }}>
//           <input
//             placeholder="Password"
//             type={showPassword ? "text" : "password"}
//             value={password}
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

//         <Link to="/forget"><div className="forget"><h1>Forget password</h1></div></Link>

//         <button 
//           type="submit" 
//           className="signup__button" 
//           disabled={loading}
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>

//         {/* Feedback Messages */}
//         {errorMessage && (
//           <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
//         )}
//         {successMessage && (
//           <p className="text-green-600 text-sm text-center mt-2">{successMessage}</p>
//         )}

//         <h1>Don't have an account? <Link to="/signup">Sign up</Link></h1>
//       </form>
//     </div>
//   );
// };

// export default Login;
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../components/Authcontext.jsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const { login } = useContext(AuthContext);
  const api = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    try {
      setLoading(true);
      const res = await axios.post(`${api}/api/auth/login`, {
        email,
        password,
      });

      localStorage.setItem("authToken", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      login(res.data.user, res.data.token);

      setMessage({ type: "success", text: "✅ Login successful! Redirecting..." });
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      const errMsg = err.response?.data?.message || "Login failed. Please try again.";
      setMessage({ type: "error", text: `❌ ${errMsg}` });
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => navigate(-1);

  return (
    <div className="signup__container">
      {/* ⬅ Back Button */}
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

      <form onSubmit={handleLogin} className="signup-form">
        <h2 className="signup__h1">Login</h2>

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
              textAlign: "center",
            }}
          >
            {message.text}
          </div>
        )}

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup__input inputsignup"
          required
        />

        <div className="password__field" style={{ position: "relative" }}>
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
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
              color: "#555",
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="forget" style={{ margin: "10px 0" }}>
          <Link to="/forget" style={{ fontSize: "0.9rem", color: "#007BFF" }}>
            Forgot password?
          </Link>
        </div>

        <button type="submit" className="signup__button" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={{ marginTop: "15px" }}>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
