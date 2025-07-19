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
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Loader from "../components/Loader/Loader.jsx"


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


  const handleGoogleSuccess = async (credentialResponse) => {
  try {
    const res = await axios.post(`${api}/api/auth/google`, {
      credential: credentialResponse.credential,
    });

    const { user, token } = res.data;
    localStorage.setItem("authToken", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    login(user, token);

    navigate("/dashboard");
  } catch (error) {
    console.error("Google login failed", error);
    setMessage({ type: "error", text: "❌ Google login failed" });
  }
};


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

      {/* <form onSubmit={handleLogin} className="signup-forms">
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
        
          <div className='input-container'>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full input-fieldss rounded-md border border-dark_border/60 bg-transparent px-5 py-3 text-base text-white placeholder:text-grey focus:border-primary dark:focus:border-primary"
          required
        />
        <label for="email" class="input-label">Email</label>
  <span class="input-highlight"></span>
        </div>

        <div className="input-container" style={{ position: "relative" }}>
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full input-fieldss rounded-md border border-dark_border/60 bg-transparent px-5 py-3 text-base text-white placeholder:text-grey focus:border-primary dark:focus:border-primary"
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
          <label for="password" class="input-label">Phone Number</label>
  <span class="input-highlight"></span>
        </div>

        <div className="forget" style={{ margin: "10px 0" }}>
          <Link to="/forget" style={{ fontSize: "0.9rem", color: "#007BFF" }}>
            Forgot password?
          </Link>
        </div>

        <button type="submit" className="signup__button" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="google-login-wrapper text-white" style={{ marginTop: "20px", textAlign: "center" }}>
  <p style={{ marginBottom: "10px" }}>or login with</p>
  <GoogleLogin
    onSuccess={handleGoogleSuccess}
    onError={() => setMessage({ type: "error", text: "❌ Google login failed" })}
  />
</div>


        <p style={{ marginTop: "15px" }} className="text-white">
          Don’t have an account? <Link to="/signup" className="text-yellow-500">Sign up</Link>
        </p>
      </form> */}
     
{/* <form class="form">
    <div class="flex-column">
      <label>Email </label></div>
      <div class="inputForm">
        <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
        <input type="text" class="input" placeholder="Enter your Email"/>
      </div>
    
    <div class="flex-column">
      <label>Password </label></div>
      <div class="inputForm">
        <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>        
        <input type="password" class="input" placeholder="Enter your Password"/>
        <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
      </div>
    
    <div class="flex-row">
      <div>
      <input type="checkbox"/>
      <label>Remember me </label>
      </div>
      <span class="span">Forgot password?</span>
    </div>
    <button class="button-submit">Sign In</button>
    <p class="p">Don't have an account? <span class="span">Sign Up</span>

    </p><p class="p line">Or With</p>

    <div class="flex-row">
      <button class="btn google">
        <svg version="1.1" width="20" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path style="fill:#FBBB00;" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z"></path>
<path style="fill:#518EF8;" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"></path>
<path style="fill:#28B446;" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"></path>
<path style="fill:#F14336;" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z"></path>

</svg>
   
        Google 
        
      </button><button class="btn apple">
<svg version="1.1" height="20" width="20" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22.773 22.773" style="enable-background:new 0 0 22.773 22.773;" xml:space="preserve"> <g> <g> <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path> <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path> </g></g></svg>

        Apple 
        
</button></div></form> */}
 <form onSubmit={handleLogin}  className="form">
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
      <div className="flex-column">
        <label>Email</label>
      </div>
      <div className="inputForm">
        <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
          <g id="Layer_3" data-name="Layer 3">
            <path d="M30.853 13.87a15 15 0 0 0-29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0-1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1-4.158-.759v-10.856a1 1 0 0 0-2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zM16 22a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6z"/>
          </g>
        </svg>
        <input type="text" className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         placeholder="Enter your Email" />
      </div>

      <div className="flex-column">
        <label>Password</label>
      </div>
      <div className="inputForm">
        <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M336 512H48c-26.453 0-48-21.523-48-48V240c0-26.476 21.547-48 48-48h288c26.453 0 48 21.523 48 48v224c0 26.477-21.547 48-48 48zm-288-288c-8.813 0-16 7.168-16 16v224c0 8.832 7.188 16 16 16h288c8.813 0 16-7.168 16-16V240c0-8.832-7.188-16-16-16z"/>
          <path d="M304 224c-8.832 0-16-7.168-16-16v-80c0-52.93-43.07-96-96-96S96 75.07 96 128v80c0 8.832-7.168 16-16 16s-16-7.168-16-16v-80C64 57.406 121.406 0 192 0s128 57.406 128 128v80c0 8.832-7.168 16-16 16z"/>
        </svg>
        <input className="input"
         type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             placeholder="Enter your Password" />
        <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
             
              fontSize:"20px",
              cursor: "pointer",
              color: "#555",
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
      </div>

      <div className="flex-rows">
        <div>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <Link to="/forget"><span className="span">Forgot password?</span></Link>
      </div>

      
       <button type="submit" className="button-submit" disabled={loading}>
          {loading ? <Loader/> : "Login"}
        </button>

      <p className="p">Don't have an account? <Link to="/signup"  className="span">Sign Up</Link></p>
      <p className="p line">Or With</p>

      <div className="flex-row">
        <GoogleLogin 
       text="continue_with"
      theme="outline"
      width="100%"
      containerProps={{
        style: {
          width: "100% !important",
          background: "#000",
          color:"#fff"

        },
      }}
        onSuccess={handleGoogleSuccess}
    onError={() => setMessage({ type: "error", text: "❌ Google login failed" })}
        
         
        
        />

        {/* <button type="button" className="btn apple">
          {/* Apple SVG 
          <svg version="1.1" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.773 22.773">
            <g>
              <path d="M15.769 0c.053 0 .106 0 .162 0 .13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0z"/>
              <path d="M20.67 16.716c0 .016 0 .03 0 .045-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926-.155 0-.31 0-.462 0-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276 0-.34 0-.679 0-1.019.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.178 2.219 1.446 3.495 3.03 4.247z"/>
            </g>
          </svg>
          Apple
        </button> */}
      </div>
    </form>
    </div>
  );
};

export default Login;
