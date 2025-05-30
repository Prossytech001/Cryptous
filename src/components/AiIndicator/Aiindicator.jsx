import { useState, useRef, useEffect } from "react";
import '../AiIndicator/Aiindicator.css';
import axios from "axios";


const AssistantIndicator = () => {
  const [showChat, setShowChat] = useState(false);
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
      setMessages([
        ...newMessages,
        { role: "assistant", text: "❌ Sorry, something went wrong." }
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
            background: isUser ? "#690dfd" : "#f1f1f1",
             color: isUser ? "#ffffff" : "#000000",
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
    <>
      {!showChat && (
        <div className="assistant-fixed-container" onClick={() => setShowChat(true)}>
          <div className="tooltip-bubble">💬 Ask me anything</div>
          <div className="ring-container w-20 h-20 animate-bounce-ring">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse shadow-lg">
              <div className="ai-text flex items-center justify-center center-div-ani rounded-full bg-white" >
                AI
                </div>
            </div>
          </div>
        </div>
      )}

      {showChat && (
        <div className="chat-popup-box">
            <div className="shat-h">
          <div className="chat-header">
            <span>🔮 Ask Assistant</span>
            <button onClick={() => setShowChat(false)}>×</button>
          </div>
          </div>
          
          
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
       <div className="chatinput flex justify-between items-center p-4">
      <input
        type="text"
        placeholder="Ask about our platform..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAsk()}
        style={{ width: "100%", padding: 10,borderRadius: 5, border: "1px solid #ccc"}}
      />
      <button
        onClick={handleAsk}
        style={{ padding: 10, background: "#2D2A4D", color: "white", borderRadius: 5, border: "none", cursor: "pointer",}}
        disabled={loading}
      >
        Send
      </button>
      </div>
      
         
        </div>
      )}
    </>
  );
};

export default AssistantIndicator;
