import { useEffect, useState } from "react";
import axios from "axios";
import Basedcrumb from "../components/Basedcrumb";

const UserNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  const fetchNotifications = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const res = await axios.get(`${API}/api/notifications`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotifications(res.data);
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const markAsRead = async (id) => {
  const token = localStorage.getItem("authToken");
  try {
    await axios.patch(`${API}/api/notifications/${id}/read`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setNotifications((prev) =>
      prev.map((n) => (n._id === id ? { ...n, isRead: true } : n))
    );
  } catch (err) {
    console.error("Failed to mark notification as read:", err);
  }
};


  return (
    <div className="notify-con w-full" style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Basedcrumb />
      
      <h1 className="dashboard-heading-h"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-columns-gap plan-icon"><path fill-rule="evenodd" d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"></path></svg>Your Notifications</h1>
      {notifications.length === 0 && <p className="message-notify">No notifications yet.</p>}
     
      {notifications.map((note) => (
  <div key={note._id} style={{ padding: 10, marginBottom: 10, border: "1px solid #ccc", background: note.isRead ? "#f1f1f1" : "#d1e7dd" , borderRadius: 10 }}>
    <strong style={{color: "#0271e8"}}>{note.title}</strong>
    <p style={{color:"#808080"}}>{note.message}</p>
    <small>{new Date(note.createdAt).toLocaleString()}</small>
    {!note.isRead && (
      <div>
        <button onClick={() => markAsRead(note._id)} style={{ marginTop: 5 ,background: "#daba04", padding: 5,borderRadius: 10 }}>
          Mark as Read
        </button>
      </div>
    )}
  </div>
))}

    </div>
  );
};

export default UserNotifications;
