
import { useState, useContext } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AuthContext } from "../components/Authcontext.jsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import Loader from "../components/Loader/Loader.jsx";
import "../components/Signup.css";

const Signup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    country: "",
    phone: "",
    email: "",
    password: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const api = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!agreed)
      return setMessage({ type: "error", text: "You must agree to the terms." });

    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!strongPassword.test(form.password))
      return setMessage({
        type: "error",
        text: "Password must be at least 8 characters with uppercase, lowercase, number, and special character.",
      });

    try {
      setLoading(true);
      setMessage({ type: "", text: "" });
      const res = await axios.post(`${api}/api/auth/signup`, form);

      localStorage.setItem("authToken", res.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.token}`;
      login(res.data.user, res.data.token);

      setMessage({
        type: "success",
        message: "✅ Signup successful! Redirecting...",
      });
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      const errMsg = err.response?.data?.message || "Signup failed. Try again.";
      setMessage({ type: "error", text: `❌ ${errMsg}` });
    } finally {
      setLoading(false);
    }
  };

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
      setMessage({ type: "error", text: "Google login failed" });
    }
  };


  const passwordRules = [
  {
    label: "At least 8 characters",
    regex: /.{8,}/,
  },
  {
    label: "At least one uppercase letter",
    regex: /[A-Z]/,
  },
  {
    label: "At least one lowercase letter",
    regex: /[a-z]/,
  },
  {
    label: "At least one number",
    regex: /\d/,
  },
  {
    label: "At least one special character (!@#$%^&*)",
    regex: /[!@#$%^&*]/,
  },
];


  return (
    <section className="signup__container h-full">
      <form onSubmit={handleSignup} className="form">
        <h2 className="signup__h1">Create Account</h2>

        

        {/* Name & Username Inputs */}
        {["firstName", "lastName", "username", "email"].map((field) => (
          <div className="inputForm" key={field}>
            
            <input
              name={field}
              placeholder={field === "email" ? "Email" : field}
              type={field === "email" ? "email" : "text"}
              value={form[field]}
              onChange={handleChange}
              required
              className="input"
            />
            <label htmlFor={field} className="input-label">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <span className="input-highlight"></span>
          </div>
        ))}

        {/* Phone Input with Country */}
        <div className="input-container">
          <label htmlFor="phone" className="text-white">
            Phone Number
          </label>
          {/* <PhoneInput
            country={"ng"}
            value={form.phone}
            onChange={(phone, countryData) =>
              setForm({
                ...form,
                phone,
                country: countryData.name,
              })
            }
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: false,
            }}
            placeholder="Enter phone number"
            enableSearch
            containerClass="phone-container"
            inputClass="phone-input"
            buttonClass="phone-button"
            dropdownClass="phone-dropdown"
          /> */}
          <PhoneInput
  country={"ng"}
  value={form.phone}
  onChange={(phone, countryData) =>
    setForm({
      ...form,
      phone,
      country: countryData.name,
    })
  }
  inputProps={{
    name: "phone",
    required: true,
    autoFocus: false,
  }}
  placeholder="Enter phone number"
  enableSearch
  containerStyle={{
    width: "100%",
  }}
  inputStyle={{
    width: "100%",
    borderRadius: "0.7rem",
    border: "1.5px solid #96651e",
    backgroundColor: "transparent",
    padding: "1.55rem  3.5rem",
    fontSize: "1rem",
    color: "#fff",
  }}
  buttonStyle={{
    backgroundColor: "",
    borderRight: "1px solid #333",
   
  }}
  dropdownStyle={{
    backgroundColor: "#000",
    color: "#fff",
  }}
/>

        </div>

        {/* Password Input */}
<div className="inputForm" style={{ position: "relative" }}>
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    value={form.password}
    onChange={handleChange}
    required
    className="input"
  />
  <span
    onClick={() => setShowPassword(!showPassword)}
    style={{
      position: "absolute",
      right: "15px",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "20px",
      cursor: "pointer",
      color: "#999",
    }}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

{/* Password Strength Rules */}
{form.password && (
  <ul className="password-rules">
    {passwordRules.map((rule, index) => {
      const isValid = rule.regex.test(form.password);
      return (
        <li key={index} className={isValid ? "valid" : "invalid"}>
          {isValid ? "✔️" : "❌"} {rule.label}
        </li>
      );
    })}
  </ul>
)}


        
        
        {/* Terms Checkbox */}
        <div className="agree-checkbox">
          <label className="text-white">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            I agree to the{" "}
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              terms and conditions
            </a>
          </label>
        </div>

        <button type="submit" className="button-submit" disabled={loading}>
          {loading ? <Loader/> : "Sign Up"}
        </button>

        {/* Google Login */}
        <div className="google-login-wrapper">
          <span className="separator">
            <span>OR</span>
          </span>
           
      <div className="bg-transparent p-4 rounded shadow-lg">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.error("Google Sign-In Failed")}
          />
         
          </div>
        </div>

        <p className="signup-link-text text-white">
          Already have an account?{" "}
          <Link to="/login" className="licksign">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Signup;
// import { useState, useContext,useRef,useEffect } from "react";
// import axios from "axios";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { AuthContext } from "../components/Authcontext.jsx";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useGoogleLogin } from "@react-oauth/google";
// import Loader from "../components/Loader/Loader.jsx";
// import "../components/Signup.css";

// const Signup = () => {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     username: "",
//     country: "",
//     phone: "",
//     email: "",
//     password: "",
//   });
//   const [agreed, setAgreed] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState({ type: "", text: "" });

//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const api = import.meta.env.VITE_API_URL;

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (!agreed)
//       return setMessage({ type: "error", text: "You must agree to the terms." });

//     const strongPassword =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
//     if (!strongPassword.test(form.password))
//       return setMessage({
//         type: "error",
//         text: "Password must be at least 8 characters with uppercase, lowercase, number, and special character.",
//       });

//     try {
//       setLoading(true);
//       setMessage({ type: "", text: "" });

//       const res = await axios.post(`${api}/api/auth/signup`, form);
//       const { user, token } = res.data;

//       localStorage.setItem("authToken", token);
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//       login(user, token);

//       setMessage({
//         type: "success",
//         text: "✅ Signup successful! Redirecting...",
//       });
//       setTimeout(() => navigate("/dashboard"), 1500);
//     } catch (err) {
//       const errMsg = err.response?.data?.message || "Signup failed. Try again.";
//       setMessage({ type: "error", text: `❌ ${errMsg}` });
//     } finally {
//       setLoading(false);
//     }
//   };

//    const googleButtonRef = useRef(null);

//   useEffect(() => {
//     if (window.google && googleButtonRef.current) {
//       window.google.accounts.id.initialize({
//         client_id: "YOUR_GOOGLE_CLIENT_ID",
//         callback: handleCredentialResponse,
//       });

//       window.google.accounts.id.renderButton(googleButtonRef.current, {
//         theme: "outline",
//         size: "large",
//         shape: "pill",
//       });

//       // Optional: show one-tap prompt
//       window.google.accounts.id.prompt();
//     }
//   }, []);


//   const handleGoogleSuccess = async (tokenResponse) => {
//     try {
//       const res = await axios.post(`${api}/api/auth/google`, {
//         credential: tokenResponse.credential,
//       });

//       const { user, token } = res.data;

//       localStorage.setItem("authToken", token);
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//       login(user, token);
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Google signup failed", error);
//       setMessage({ type: "error", text: "Google signup failed" });
//     }
//   };

//   const signupWithGoogle = useGoogleLogin({
//     onSuccess: handleGoogleSuccess,
//     onError: () => console.error("Google Sign-Up Failed"),
//     flow: "implicit",
//   });

//   const passwordRules = [
//     { label: "At least 8 characters", regex: /.{8,}/ },
//     { label: "At least one uppercase letter", regex: /[A-Z]/ },
//     { label: "At least one lowercase letter", regex: /[a-z]/ },
//     { label: "At least one number", regex: /\d/ },
//     { label: "At least one special character (!@#$%^&*)", regex: /[!@#$%^&*]/ },
//   ];

//   return (
//     <section className="signup__container h-full">
//       <form onSubmit={handleSignup} className="form">
//         <h2 className="signup__h1">Create Account</h2>

//         {["firstName", "lastName", "username", "email"].map((field) => (
//           <div className="inputForm" key={field}>
//             <input
//               name={field}
//               placeholder={field === "email" ? "Email" : field}
//               type={field === "email" ? "email" : "text"}
//               value={form[field]}
//               onChange={handleChange}
//               required
//               className="input"
//             />
//             <label htmlFor={field} className="input-label">
//               {field.charAt(0).toUpperCase() + field.slice(1)}
//             </label>
//             <span className="input-highlight"></span>
//           </div>
//         ))}

//         <div className="input-container">
//           <label htmlFor="phone" className="text-white">
//             Phone Number
//           </label>
//           <PhoneInput
//             country={"ng"}
//             value={form.phone}
//             onChange={(phone, countryData) =>
//               setForm({
//                 ...form,
//                 phone,
//                 country: countryData.name,
//               })
//             }
//             inputProps={{
//               name: "phone",
//               required: true,
//               autoFocus: false,
//             }}
//             placeholder="Enter phone number"
//             enableSearch
//             containerStyle={{ width: "100%" }}
//             inputStyle={{
//               width: "100%",
//               borderRadius: "0.7rem",
//               border: "1.5px solid #96651e",
//               backgroundColor: "transparent",
//               padding: "1.55rem 3.5rem",
//               fontSize: "1rem",
//               color: "#fff",
//             }}
//             buttonStyle={{
//               borderRight: "1px solid #333",
//             }}
//             dropdownStyle={{
//               backgroundColor: "#000",
//               color: "#fff",
//             }}
//           />
//         </div>

//         <div className="inputForm" style={{ position: "relative" }}>
//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             className="input"
//           />
//           <span
//             onClick={() => setShowPassword(!showPassword)}
//             style={{
//               position: "absolute",
//               right: "15px",
//               top: "50%",
//               transform: "translateY(-50%)",
//               fontSize: "20px",
//               cursor: "pointer",
//               color: "#999",
//             }}
//           >
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </span>
//         </div>

//         {form.password && (
//           <ul className="password-rules">
//             {passwordRules.map((rule, index) => {
//               const isValid = rule.regex.test(form.password);
//               return (
//                 <li key={index} className={isValid ? "valid" : "invalid"}>
//                   {isValid ? "✔️" : "❌"} {rule.label}
//                 </li>
//               );
//             })}
//           </ul>
//         )}

//         <div className="agree-checkbox">
//           <label className="text-white">
//             <input
//               type="checkbox"
//               checked={agreed}
//               onChange={(e) => setAgreed(e.target.checked)}
//             />
//             I agree to the{" "}
//             <a
//               href="/terms"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="underline"
//             >
//               terms and conditions
//             </a>
//           </label>
//         </div>

//         <button type="submit" className="button-submit" disabled={loading}>
//           {loading ? <Loader /> : "Sign Up"}
//         </button>

//         <div className="google-login-wrapper">
//           <span className="separator">
//             <span>OR</span>
//           </span>
//           <button
//             type="button"
//             onClick={signupWithGoogle}
//             className="bg-black flex items-centertext-white py-2 px-4 w-full rounded hover:bg-gray-800 transition mt-3"
//           >
//            <svg width="40px" height="40px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"></path> <path d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z" fill="#34A853"></path> <path d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z" fill="#FBBC05"></path> <path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335"></path> </g></svg>
//             Sign up with Google
//           </button>
//         </div>
//         <div ref={googleButtonRef}></div>

//         <p className="signup-link-text text-white">
//           Already have an account?{" "}
//           <Link to="/login" className="licksign">
//             Login
//           </Link>
//         </p>
//       </form>
//     </section>
//   );
// };

// export default Signup;
