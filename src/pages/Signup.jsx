
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
             
              fontSize:"20px",
              cursor: "pointer",
              color: "#555",
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {message.text && (
          <div className={`signup-message ${message.type}`}>
            {message.text}
          </div>
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
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.error("Google Sign-In Failed")}
          />
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
