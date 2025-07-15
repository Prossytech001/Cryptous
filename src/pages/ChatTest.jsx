
import { useState } from "react";
import axios from "axios";
import Based from "../../src/components/Basedcrumb"

const UserTicketForm = () => {
  const [form, setForm] = useState({
    subject: "",
    message: "",
    category: "General",
    urgency: "Medium"
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const API = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.post(`${API}/api/tickets`, form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setSuccess("Ticket submitted successfully!");
      setForm({ subject: "", message: "", category: "General", urgency: "Medium" });
    } catch (err) {
      console.error("❌ Ticket submission failed:", err.response?.data || err.message);
      setSuccess("Failed to submit ticket.");
    } finally {
      setLoading(false);
    }
  };
// the css of this page is in the App.css file
  return (
    <div className="bg-[var(--bs-body-bg)]" style={{ padding: "0.7rem", justifyContent: "center",flexDirection:"column" ,alignItems: "center",backgroundImage: "var(--bs-body-bg)"  }}>
      <Based/>
      <h1 className="dashboard-heading-h  mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-columns-gap plan-icon"><path fill-rule="evenodd" d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"></path></svg>Support</h1>
      <div className="support-container" style={{display:"flex",justifyContent: "center",flexDirection:"column",height:"100vh", maxWidth: 600, margin: "auto", padding: 20 ,  borderRadius: 8, boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <h3 className="support-h3" style={{ textAlign: "center" ,fontSize: "1.5rem"}}>Submit Support Ticket</h3>
      {success && <p>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="input-field"
          required
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="input-field"
          placeholder="Describe your issue..."
          required
          rows="4"
        />
        <select name="category" value={form.category} onChange={handleChange} className="input-field">
          <option>General</option>
          <option>Withdrawals</option>
          <option>Login</option>
          <option>Staking</option>
        </select>
        <select name="urgency" value={form.urgency} onChange={handleChange} className="input-field">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button type="submit" disabled={loading} className="input-fields ">
          {loading ? "Submitting..." : "Submit Ticket"}
        </button>
      </form>
      </div>
    </div>
  );
};

export default UserTicketForm;
