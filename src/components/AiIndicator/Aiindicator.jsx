// import { useState, useRef, useEffect } from "react";
// import '../AiIndicator/Aiindicator.css';
// import axios from "axios";


// const AssistantIndicator = () => {
//   const [showChat, setShowChat] = useState(false);
//   const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState("");
//     const [loading, setLoading] = useState(false);
//      const messagesEndRef = useRef(null);
//     const api = import.meta.env.VITE_API_URL;




    


//    useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   const handleAsk = async () => {
//     if (!input.trim()) return;

//     const newMessages = [...messages, { role: "user", text: input }];
//     setMessages(newMessages);
//     setLoading(true);
//     setInput("");

//     try {
//       const res = await axios.post(`${api}/api/chat`, {
//         message: input,
//       });

//       setMessages([
//         ...newMessages,
//         { role: "assistant", text: res.data.reply }
//       ]);
//     } catch (error) {
//       setMessages([
//         ...newMessages,
//         { role: "assistant", text: "❌ Sorry, something went wrong." }
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderMessage = (msg, i) => {
//     const isUser = msg.role === "user";
//     const avatar = isUser
//       ? "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
//       : "https://cdn-icons-png.flaticon.com/512/4712/4712107.png";
//    return (
//       <div
//         key={i}
//         style={{
//           display: "flex",
//           justifyContent: isUser ? "flex-end" : "flex-start",
//           alignItems: "flex-start",
//           marginBottom: 10,
//         }}
//       >
//         {!isUser && (
//           <img
//             src={avatar}
//             alt="avatar"
//             style={{ width: 30, height: 30, borderRadius: "50%", marginRight: 8 }}
//           />
//         )}
//         <div
//           style={{
//             background: isUser ? "#690dfd" : "#f1f1f1",
//              color: isUser ? "#ffffff" : "#000000",
//             padding: 10,
//             borderRadius: 10,
//             maxWidth: "75%",
//           }}
//         >
//           {msg.text}
//         </div>
//         {isUser && (
//           <img
//             src={avatar}
//             alt="avatar"
//             style={{ width: 30, height: 30, borderRadius: "50%", marginLeft: 8 }}
//           />
//         )}
//       </div>
//     );
//   };

//   return (
//     <>
//       {!showChat && (
//         <div className="assistant-fixed-container" onClick={() => setShowChat(true)}>
//           <div className="tooltip-bubble">💬 Ask me anything</div>
//           <div className="ring-container w-20 h-20 animate-bounce-ring">
//             <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse shadow-lg">
//               <div className="ai-text flex items-center justify-center center-div-ani rounded-full bg-white" >
//                 AI
//                 </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showChat && (
//         <div className="chat-popup-box">
//             <div className="shat-h">
//           <div className="chat-header">
//             <span>🔮 Ask Assistant</span>
//             <button onClick={() => setShowChat(false)}>×</button>
//           </div>
//           </div>
          
          
//             <div
//         style={{
//           maxHeight: 400,
//           overflowY: "auto",
//           marginBottom: 20,
//           background: "#f9f9f9",
//           padding: 10,
//           borderRadius: 5,
//         }}
//       >
//         {messages.map(renderMessage)}
//         {loading && (
//           <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/4712/4712107.png"
//               alt="typing"
//               style={{ width: 30, height: 30, borderRadius: "50%" }}
//             />
//             <em>AI is typing...</em>
//           </div>
//         )}
//          <div ref={messagesEndRef} />
//       </div>
//        <div className="chatinput flex justify-between items-center p-4">
//       <input
//         type="text"
//         placeholder="Ask about our platform..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && handleAsk()}
//         style={{ width: "100%", padding: 10,borderRadius: 5, border: "1px solid #ccc"}}
//       />
//       <button
//         onClick={handleAsk}
//         style={{ padding: 10, background: "#2D2A4D", color: "white", borderRadius: 5, border: "none", cursor: "pointer",}}
//         disabled={loading}
//       >
//         Send
//       </button>
//       </div>
      
         
//         </div>
//       )}
//     </>
//   );
// };

// export default AssistantIndicator;










// import { useState, useRef, useEffect } from "react";
// import '../AiIndicator/Aiindicator.css';
// import axios from "axios";

// const AssistantIndicator = () => {
//   const [showChat, setShowChat] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [position, setPosition] = useState({ x: 20, y: 300 });

//   const messagesEndRef = useRef(null);
//   const dragRef = useRef(null);
//   const api = import.meta.env.VITE_API_URL;

//   // Handle drag
//   const isDragging = useRef(false);
//   const offset = useRef({ x: 0, y: 0 });

//   const onMouseDown = (e) => {
//     isDragging.current = true;
//     offset.current = {
//       x: e.clientX - position.x,
//       y: e.clientY - position.y,
//     };
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseup", onMouseUp);
//   };

//   const onMouseMove = (e) => {
//     if (!isDragging.current) return;
//     const newX = e.clientX - offset.current.x;
//     const newY = e.clientY - offset.current.y;
//     setPosition({ x: newX, y: newY });
//   };

//   const onMouseUp = () => {
//     isDragging.current = false;
//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseup", onMouseUp);
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   const handleAsk = async () => {
//     if (!input.trim()) return;
//     const newMessages = [...messages, { role: "user", text: input }];
//     setMessages(newMessages);
//     setLoading(true);
//     setInput("");

//     try {
//       const res = await axios.post(`${api}/api/chat`, {
//         message: input,
//       });

//       setMessages([
//         ...newMessages,
//         { role: "assistant", text: res.data.reply }
//       ]);
//     } catch (error) {
//       setMessages([
//         ...newMessages,
//         { role: "assistant", text: "❌ Sorry, something went wrong." }
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderMessage = (msg, i) => {
//     const isUser = msg.role === "user";
//     const avatar = isUser
//       ? "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
//       : "https://cdn-icons-png.flaticon.com/512/4712/4712107.png";

//     return (
//       <div
//         key={i}
//         style={{
//           display: "flex",
//           justifyContent: isUser ? "flex-end" : "flex-start",
//           alignItems: "flex-start",
//           marginBottom: 10,
//         }}
//       >
//         {!isUser && (
//           <img
//             src={avatar}
//             alt="avatar"
//             style={{ width: 30, height: 30, borderRadius: "50%", marginRight: 8 }}
//           />
//         )}
//         <div
//           style={{
//             background: isUser ? "#690dfd" : "#f1f1f1",
//             color: isUser ? "#ffffff" : "#000000",
//             padding: 10,
//             borderRadius: 10,
//             maxWidth: "75%",
//           }}
//         >
//           {msg.text}
//         </div>
//         {isUser && (
//           <img
//             src={avatar}
//             alt="avatar"
//             style={{ width: 30, height: 30, borderRadius: "50%", marginLeft: 8 }}
//           />
//         )}
//       </div>
//     );
//   };

//   return (
//     <>
//       {!showChat && (
//         <div
//           className="assistant-fixed-container"
//           style={{
//             position: "fixed",
//             left: position.x,
//             top: position.y,
//             cursor: "move",
//             zIndex: 9999,
//           }}
//           onMouseDown={onMouseDown}
//         >
//           <div className="tooltip-bubble">💬 Ask me anything</div>
//           <div className="ring-container w-17 h-17 animate-bounce-ring">
//             <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse shadow-lg">
//               <div className="ai-text flex items-center justify-center center-div-ani rounded-full bg-white">
//                 AI
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showChat && (
//         <div className="chat-popup-box" style={{ zIndex: 9999 }}>
//           <div className="shat-h">
//             <div className="chat-header">
//               <span>🔮 Ask Assistant</span>
//               <button onClick={() => setShowChat(false)}>×</button>
//             </div>
//           </div>

//           <div
//             style={{
//               maxHeight: 400,
//               overflowY: "auto",
//               marginBottom: 20,
//               background: "#f9f9f9",
//               padding: 10,
//               borderRadius: 5,
//             }}
//           >
//             {messages.map(renderMessage)}
//             {loading && (
//               <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/4712/4712107.png"
//                   alt="typing"
//                   style={{ width: 30, height: 30, borderRadius: "50%" }}
//                 />
//                 <em>AI is typing...</em>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           <div className="chatinput flex justify-between items-center p-4">
//             <input
//               type="text"
//               placeholder="Ask about our platform..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleAsk()}
//               style={{
//                 width: "100%",
//                 padding: 10,
//                 borderRadius: 5,
//                 border: "1px solid #ccc",
//               }}
//             />
//             <button
//               onClick={handleAsk}
//               style={{
//                 padding: 10,
//                 background: "#2D2A4D",
//                 color: "white",
//                 borderRadius: 5,
//                 border: "none",
//                 cursor: "pointer",
//               }}
//               disabled={loading}
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default AssistantIndicator;




// import React, { useState, useRef, useEffect } from "react";
// import { FaRobot, FaTimes } from "react-icons/fa";

// const AiIndicator = () => {
//   const [open, setOpen] = useState(false);
//   const [position, setPosition] = useState({ x: 20, y: 20 });
//   const [isDragging, setIsDragging] = useState(false);
//   const indicatorRef = useRef(null);
//   const offsetRef = useRef({ x: 0, y: 0 });

//   // Toggle chat visibility
//   const toggleChat = () => {
//     if (!isDragging) setOpen((prev) => !prev);
//   };

//   // Desktop drag handlers
//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     offsetRef.current = {
//       x: e.clientX - position.x,
//       y: e.clientY - position.y,
//     };
//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", handleMouseUp);
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       setPosition({
//         x: e.clientX - offsetRef.current.x,
//         y: e.clientY - offsetRef.current.y,
//       });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     document.removeEventListener("mousemove", handleMouseMove);
//     document.removeEventListener("mouseup", handleMouseUp);
//   };

//   // Mobile drag handlers
//   const handleTouchStart = (e) => {
//     setIsDragging(true);
//     const touch = e.touches[0];
//     offsetRef.current = {
//       x: touch.clientX - position.x,
//       y: touch.clientY - position.y,
//     };
//   };

//   const handleTouchMove = (e) => {
//     if (isDragging) {
//       const touch = e.touches[0];
//       setPosition({
//         x: touch.clientX - offsetRef.current.x,
//         y: touch.clientY - offsetRef.current.y,
//       });
//     }
//   };

//   const handleTouchEnd = () => {
//     setIsDragging(false);
//   };

//   useEffect(() => {
//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         ref={indicatorRef}
//         onClick={toggleChat}
//         onMouseDown={handleMouseDown}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//         style={{
//           position: "fixed",
//           left: position.x,
//           top: position.y,
//           zIndex: 9999,
//           backgroundColor: "#1d4ed8",
//           color: "white",
//           padding: "12px",
//           borderRadius: "9999px",
//           cursor: "grab",
//           boxShadow: "0 0 10px rgba(0,0,0,0.2)",
//           transition: "background-color 0.3s",
//         }}
//       >
//         <FaRobot size={20} />
//       </div>

//       {open && (
//         <div
//           style={{
//             position: "fixed",
//             bottom: "80px",
//             right: "20px",
//             zIndex: 9999,
//             width: "300px",
//             maxHeight: "400px",
//             background: "white",
//             border: "1px solid #ccc",
//             borderRadius: "10px",
//             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//             padding: "10px",
//           }}
//         >
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <strong>AI Chat</strong>
//             <FaTimes
//               onClick={() => setOpen(false)}
//               style={{ cursor: "pointer" }}
//             />
//           </div>
//           <div style={{ marginTop: "10px" }}>
//             <p>How can I help you today?</p>
//             {/* Add your chat component or message logic here */}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default AiIndicator;




import { useState, useRef, useEffect } from "react";
import "../AiIndicator/Aiindicator.css";
import axios from "axios";
import { FaRobot, FaTimes } from "react-icons/fa";

const AssistantIndicator = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const api = import.meta.env.VITE_API_URL;

  // Drag state
  const iconRef = useRef(null);
  const [position, setPosition] = useState({ x: 20, y: 80 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

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
      const res = await axios.post(`${api}/api/chat`, { message: input });
      setMessages([...newMessages, { role: "assistant", text: res.data.reply }]);
    } catch (error) {
      setMessages([...newMessages, { role: "assistant", text: "❌ Sorry, something went wrong." }]);
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
        {!isUser && <img src={avatar} alt="avatar" style={{ width: 30, height: 30, borderRadius: "50%", marginRight: 8 }} />}
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
        {isUser && <img src={avatar} alt="avatar" style={{ width: 30, height: 30, borderRadius: "50%", marginLeft: 8 }} />}
      </div>
    );
  };

  // Drag functions
  const startDrag = (e) => {
    setDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    offset.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
  };

  const onDrag = (e) => {
    if (!dragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setPosition({
      x: clientX - offset.current.x,
      y: clientY - offset.current.y,
    });
  };

  const stopDrag = () => {
    setDragging(false);
  };

  return (
    <>
      {!showChat && (
        <div
          className="assistant-fixed-container"
          ref={iconRef}
          onMouseDown={startDrag}
          onMouseMove={onDrag}
          onMouseUp={stopDrag}
          onTouchStart={startDrag}
          onTouchMove={onDrag}
          onTouchEnd={stopDrag}
          onClick={() => !dragging && setShowChat(true)}
          style={{
            position: "fixed",
            left: position.x,
            top: position.y,
            zIndex: 1000,
            cursor: "grab",
            transition: dragging ? "none" : "transform 0.1s ease",
          }}
        >
          <div className="tooltip-bubble">💬 Ask anything</div>
          <div className="ring-container w-20 h-20 animate-bounce-ring">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse shadow-lg">
              <div className="ai-text flex items-center justify-center center-div-ani rounded-full bg-white">
                <FaRobot size={20} />
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
              style={{ width: "100%", padding: 10, borderRadius: 5, border: "1px solid #ccc" }}
            />
            <button
              onClick={handleAsk}
              style={{
                padding: 10,
                background: "#2D2A4D",
                color: "white",
                borderRadius: 5,
                border: "none",
                cursor: "pointer",
              }}
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

