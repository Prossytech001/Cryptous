// import { useState } from "react";
// import axios from "axios";

// const Chatbot = () => {
//   const [input, setInput] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleAsk = async () => {
//     setLoading(true);
//     const res = await axios.post("http://localhost:5000/api/chat", {
//       message: input,
//     });
//     setResponse(res.data.reply);
//     setLoading(false);
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
//       <h2>Ask Our AI Assistant</h2>
//       <input
//         type="text"
//         placeholder="Ask about our platform..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         style={{ width: "100%", padding: 10, marginBottom: 10 }}
//       />
//       <button
//         onClick={handleAsk}
//         style={{ padding: 10, width: "100%" }}
//         disabled={loading}
//       >
//         {loading ? "Thinking..." : "Ask"}
//       </button>
//       {response && (
//         <div style={{ marginTop: 20, background: "#f4f4f4", padding: 15, borderRadius: 5 }}>
//           <strong>AI:</strong> {response}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;
// import { useState } from "react";
// import axios from "axios";

// const Chatbot = () => {
//   const [input, setInput] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleAsk = async () => {
//     if (!input.trim()) return;

//     setLoading(true);
//     setError("");
//     setResponse("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/chat", {
//         message: input,
//       });
//       setResponse(res.data.reply);
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       <h2 className="text-xl font-bold mb-4 text-center">🤖 Ask Our Website Assistant</h2>

//       <input
//         type="text"
//         placeholder="Ask about our platform..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && handleAsk()}
//         className="w-full p-3 rounded border border-gray-300 focus:outline-none mb-2"
//       />

//       <button
//         onClick={handleAsk}
//         disabled={loading}
//         className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//       >
//         {loading ? "Thinking..." : "Ask"}
//       </button>

//       {error && (
//         <p className="mt-4 text-red-600 font-medium text-center">{error}</p>
//       )}

//       {response && (
//         <div className="mt-6 bg-gray-100 p-4 rounded-lg text-gray-800">
//           <strong>AI:</strong> {response}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;

// import { useState } from "react";
// import axios from "axios";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleAsk = async () => {
//     if (!input.trim()) return;

//     const newMessages = [...messages, { role: "user", text: input }];
//     setMessages(newMessages);
//     setLoading(true);
//     setInput("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/chat", {
//         message: input,
//       });
//       setMessages([
//         ...newMessages,
//         { role: "assistant", text: res.data.reply }
//       ]);
//     } catch (error) {
//       setMessages([
//         ...newMessages,
//         { role: "assistant", text: "Sorry, something went wrong." }
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
//       <h2>Ask Our AI Assistant</h2>
//       <div style={{ maxHeight: 400, overflowY: "auto", marginBottom: 20, background: "#f9f9f9", padding: 10, borderRadius: 5 }}>
//         {messages.map((msg, i) => (
//           <div key={i} style={{ textAlign: msg.role === "user" ? "right" : "left", marginBottom: 10 }}>
//             <div style={{
//               display: "inline-block",
//               background: msg.role === "user" ? "#d1e7dd" : "#e2e3e5",
//               padding: 10,
//               borderRadius: 10,
//               maxWidth: "80%"
//             }}>
//               {msg.text}
//             </div>
//           </div>
//         ))}
//         {loading && <p><em>Thinking...</em></p>}
//       </div>
//       <input
//         type="text"
//         placeholder="Ask about our platform..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && handleAsk()}
//         style={{ width: "100%", padding: 10, marginBottom: 10 }}
//       />
//       <button
//         onClick={handleAsk}
//         style={{ padding: 10, width: "100%" }}
//         disabled={loading}
//       >
//         Send
//       </button>
//     </div>
//   );
// };

// export default Chatbot;
import { useState, useRef, useEffect } from "react";

import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
   const messagesEndRef = useRef(null);
    const api = import.meta.env.VITE_API_URL;


   useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleAsk = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setLoading(true);
    setInput("");

    try {
      const res = await axios.post(`${api}/api/chat`, {
        message: input,
      });

      setMessages([
        ...newMessages,
        { role: "assistant", text: res.data.reply }
      ]);
    } catch (error) {
  console.error("AI ERROR:", error.response?.data || error.message);
  const errorMsg = error.response?.data?.error || error.message || "Unknown error";
  setMessages([
    ...newMessages,
    { role: "assistant", text: `❌ Error: ${errorMsg}` }
  ]);
} finally {
      setLoading(false);
    }
  };

  const renderMessage = (msg, i) => {
    const isUser = msg.role === "user";
    const avatar = isUser
      ? "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
      : "https://cdn-icons-png.flaticon.com/512/4712/4712107.png";

    return (
      <div
        key={i}
        style={{
          display: "flex",
          justifyContent: isUser ? "flex-end" : "flex-start",
          alignItems: "flex-start",
          marginBottom: 10,
        }}
      >
        {!isUser && (
          <img
            src={avatar}
            alt="avatar"
            style={{ width: 30, height: 30, borderRadius: "50%", marginRight: 8 }}
          />
        )}
        <div
          style={{
            background: isUser ? "#d1e7dd" : "#f1f1f1",
            padding: 10,
            borderRadius: 10,
            maxWidth: "75%",
          }}
        >
          {msg.text}
        </div>
        {isUser && (
          <img
            src={avatar}
            alt="avatar"
            style={{ width: 30, height: 30, borderRadius: "50%", marginLeft: 8 }}
          />
        )}
      </div>
    );
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2>Ask Our AI Assistant</h2>

      <div
        style={{
          maxHeight: 400,
          overflowY: "auto",
          marginBottom: 20,
          background: "#f9f9f9",
          padding: 10,
          borderRadius: 5,
        }}
      >
        {messages.map(renderMessage)}
        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712107.png"
              alt="typing"
              style={{ width: 30, height: 30, borderRadius: "50%" }}
            />
            <em>AI is typing...</em>
          </div>
        )}
         <div ref={messagesEndRef} />
      </div>

      <input
        type="text"
        placeholder="Ask about our platform..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAsk()}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />
      <button
        onClick={handleAsk}
        style={{ padding: 10, width: "100%" }}
        disabled={loading}
      >
        Send
      </button>
      

    </div>
  );
};

export default Chatbot;
