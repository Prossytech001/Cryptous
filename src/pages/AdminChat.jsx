// import { useState, useEffect } from "react";
// import axios from "axios";

// const AdminChat = () => {
//   const [users, setUsers] = useState([]); // list of users with messages
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [reply, setReply] = useState("");

//   const API = import.meta.env.VITE_API_URL;

//   const token = localStorage.getItem("authToken"); // admin token

//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get(`${API}/api/chatlog/users`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setUsers(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching users", err);
//     }
//   };

//   const fetchMessages = async (userId) => {
//     try {
//       const res = await axios.get(`${API}/api/chatlog/admin/${userId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setMessages(res.data);
//       setSelectedUserId(userId);
//     } catch (err) {
//       console.error("❌ Error fetching messages", err);
//     }
//   };

//   const sendReply = async () => {
//     try {
//       await axios.post(
//         `${API}/api/chatlog`,
//         {
//           message: reply,
//           receiverId: selectedUserId,
//           fromAdmin: true,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//       setReply("");
//       fetchMessages(selectedUserId); // refresh chat
//     } catch (err) {
//       console.error("❌ Failed to send reply", err);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div style={{ display: "flex", height: "80vh" }}>
//       {/* Sidebar - User List */}
//       <div style={{ width: 200, borderRight: "1px solid #ccc", padding: 10 }}>
//         <h4>Users</h4>
//         {users.map((user) => (
//           <div key={user._id} onClick={() => fetchMessages(user._id)} style={{ cursor: "pointer", marginBottom: 8 }}>
//             👤 {user.email}
//           </div>
//         ))}
//       </div>

//       {/* Main Chat Area */}
//       <div style={{ flex: 1, padding: 10 }}>
//         <h4>Conversation</h4>
//         <div style={{ maxHeight: "60vh", overflowY: "auto", marginBottom: 10 }}>
//           {messages.map((msg, i) => (
//             <div key={i} style={{ marginBottom: 6 }}>
//               <strong>{msg.fromAdmin ? "Admin" : "User"}:</strong> {msg.message}
//             </div>
//           ))}
//         </div>

//         {selectedUserId && (
//           <div>
//             <input
//               type="text"
//               value={reply}
//               onChange={(e) => setReply(e.target.value)}
//               placeholder="Type reply..."
//               style={{ width: "80%", marginRight: 10 }}
//             />
//             <button onClick={sendReply}>Send</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminChat;
import { useEffect, useState } from "react";
import axios from "axios";

const AdminTicketDashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [activeTicket, setActiveTicket] = useState(null);
  const [reply, setReply] = useState("");
  const API = import.meta.env.VITE_API_URL;

  const fetchTickets = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await axios.get(`${API}/api/tickets`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTickets(res.data);
    } catch (err) {
      console.error("Failed to fetch tickets:", err);
    }
  };

  const sendReply = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");
      await axios.patch(`${API}/api/tickets/${id}/reply`, { message: reply }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setReply("");
      fetchTickets(); // Refresh list
    } catch (err) {
      console.error("Failed to send reply:", err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("adminToken");
      await axios.patch(`${API}/api/tickets/${id}/status`, { status }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTickets();
    } catch (err) {
      console.error("Failed to update ticket status:", err);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>🛠️ Admin Support Dashboard</h2>

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1 }}>
          <h3>Tickets</h3>
          {tickets.map((ticket) => (
            <div key={ticket._id} 
            className="nk-msg-item"
              onClick={() => setActiveTicket(ticket)}
            >
              <strong className="admin-subject">{ticket.subject}</strong> <br />
               <h1 className="admin-chat-email"> {ticket.userId?.email || "Unknown"}</h1>  <br />
               <b className="admin-chat-status">{ticket.status}</b> | Urgency: {ticket.urgency}
            </div>
          ))}
        </div>

        {activeTicket && (
          <div style={{ flex: 1 }}>
            <h3> Details</h3>
            <p className="admin-subject"><strong></strong> {activeTicket.subject}</p>
            <p className="nk-msg-item"><strong></strong> {activeTicket.message}</p>
            <div className="flex">
            <p className="admin-chat-status"> {activeTicket.category}</p>
            <p className="admin-chat-status"> {activeTicket.urgency}</p>
            </div>
            

            <h4>Replies:</h4>
            {activeTicket.replies.map((r, i) => (
              <div key={i} style={{ padding: 5, marginBottom: 5, background: r.from === "admin" ? "#d1e7dd" : "#f8d7da" }} className="nk-msg-item">
               {r.from}:  <strong className=" admin-chat-status">{r.message}</strong>
              </div>
            ))}

            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type your reply..."
              style={{ width: "100%", padding: 10, marginTop: 10 }}
              rows={4}
              className="textare-admin-chat"
            />

            <button onClick={() => sendReply(activeTicket._id)} style={{ marginTop: 10 }}>Send Reply</button>

            <div style={{ marginTop: 20 }}>
              <strong>Update Status:</strong>
              <select
                value={activeTicket.status}
                onChange={(e) => updateStatus(activeTicket._id, e.target.value)}
                style={{ marginLeft: 10 }}
              >
                <option value="open">Open</option>
                <option value="pending">Pending</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminTicketDashboard;
