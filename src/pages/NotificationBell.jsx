import { useEffect, useState } from "react";
import axios from "axios";
import { HiMiniBellAlert } from "react-icons/hi2";

const NotificationBell = () => {
  const [count, setCount] = useState(0);
  const API = import.meta.env.VITE_API_URL;

  const fetchCount = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.get(`${API}/api/notifications/unread/count`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCount(res.data.count);
    } catch (err) {
      console.error("Failed to fetch notification count:", err);
    }
  };

  useEffect(() => {
    fetchCount();
    const interval = setInterval(fetchCount, 15000); // poll every 15s
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", cursor: "pointer" }}>
      <HiMiniBellAlert/>
      {count > 0 && (
        <span style={{
          
          top: 0,
          right: 0,
          background: "red",
          color: "white",
          borderRadius: "50%",
          padding: "2px 6px",
          fontSize: 17
        }}>{count}</span>
      )}
    </div>
  );
};

export default NotificationBell;
