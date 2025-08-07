// import { useState } from "react";
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';

// const AdminEmailSender = () => {
//   const [to, setTo] = useState("");
//   const [subject, setSubject] = useState("");
//   const [html, setHtml] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [messageType, setMessageType] = useState("");

//   const API = import.meta.env.VITE_API_URL;

//   const templates = {
//     welcome: "<h2>Welcome to CryptoInvest!</h2><p>We're glad to have you.</p>",
//     success: "<h2>🎉 Successful Transaction!</h2><p>Your investment has been processed.</p>",
//     congratulation: "<h2>Congratulations!</h2><p>You’ve achieved a new milestone.</p>",
//   };

//   const handleTemplateChange = (type) => {
//     setMessageType(type);
//     setHtml(templates[type] || "");
//   };

//   const handleSend = async () => {
//     if (!to || !subject || !html) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(`${API}/api/send-email`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ to, subject, html }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert("✅ Email sent successfully!");
//         setTo("");
//         setSubject("");
//         setHtml("");
//         setMessageType("");
//       } else {
//         alert(`❌ Failed: ${data.error}`);
//       }
//     } catch (err) {
//       console.error("Error sending email:", err);
//       alert("❌ Network error while sending.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">📧 Admin Email Sender</h2>

//       <div className="mb-4">
//         <label className="block font-medium mb-1">To Email</label>
//         <input
//           type="email"
//           className="w-full p-2 border rounded"
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//           placeholder="user@example.com"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium mb-1">Subject</label>
//         <input
//           type="text"
//           className="w-full p-2 border rounded"
//           value={subject}
//           onChange={(e) => setSubject(e.target.value)}
//           placeholder="Enter email subject"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium mb-1">Template</label>
//         <select
//           className="w-full p-2 border rounded"
//           value={messageType}
//           onChange={(e) => handleTemplateChange(e.target.value)}
//         >
//           <option value="">Select message type</option>
//           <option value="welcome">Welcome</option>
//           <option value="success">Success</option>
//           <option value="congratulation">Congratulation</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium mb-1">Email Body (HTML)</label>
//         <ReactQuill theme="snow" value={html} onChange={setHtml} />
//       </div>

//       <div className="mb-6">
//         <label className="block font-medium mb-1">Live Preview</label>
//         <div className="p-4 border rounded bg-gray-50" dangerouslySetInnerHTML={{ __html: html }} />
//       </div>

//       <button
//         onClick={handleSend}
//         disabled={loading}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//       >
//         {loading ? "Sending..." : "Send Email"}
//       </button>
//     </div>
//   );
// };

// export default AdminEmailSender;
// import { useState } from "react";

// const templates = {
//   Welcome: "<h2>Welcome!</h2><p>Thank you for joining us.</p>",
//   Congrats: "<h2>Congratulations!</h2><p>You’ve achieved a new milestone.</p>",
//   Success: "<h2>Success!</h2><p>Your action was completed successfully.</p>",
// };

// const AdminEmailSender = () => {
//   const [editorHtml, setEditorHtml] = useState("");
//   const [selectedTemplate, setSelectedTemplate] = useState("");

//   const handleTemplateChange = (e) => {
//     const key = e.target.value;
//     setSelectedTemplate(key);
//     setEditorHtml(templates[key]);
//   };

//   const handleSend = async () => {
//     const res = await fetch("/api/send-email", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ html: editorHtml }),
//     });

//     if (res.ok) {
//       alert("✅ Email sent!");
//     } else {
//       alert("❌ Failed to send email.");
//     }
//   };

//   return (
//     <div className="p-4 max-w-3xl mx-auto space-y-4">
//       <div className="flex items-center space-x-2">
//         <label className="text-sm font-medium">Choose Template:</label>
//         <select
//           className="border px-2 py-1 rounded"
//           value={selectedTemplate}
//           onChange={handleTemplateChange}
//         >
//           <option value="">-- Select --</option>
//           {Object.keys(templates).map((key) => (
//             <option key={key} value={key}>
//               {key}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div
//         className="border p-3 rounded h-40 overflow-y-auto bg-white"
//         contentEditable
//         onInput={(e) => setEditorHtml(e.currentTarget.innerHTML)}
//         dangerouslySetInnerHTML={{ __html: editorHtml }}
//       />

//       <div>
//         <h3 className="text-sm font-semibold mb-1">🔍 Live Preview</h3>
//         <div
//           className="border p-3 rounded bg-gray-50"
//           dangerouslySetInnerHTML={{ __html: editorHtml }}
//         />
//       </div>

//       <button
//         onClick={handleSend}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         📬 Send Email
//       </button>
//     </div>
//   );
// };

// export default AdminEmailSender;
// import { useState, useRef, useEffect } from "react";

// const templates = {
//   welcome: "<h2>Welcome to CryptoInvest!</h2><p>We're glad to have you.</p>",
//   success: "<h2>🎉 Successful Transaction!</h2><p>Your investment has been processed.</p>",
//   congratulation: "<h2>Congratulations!</h2><p>You’ve achieved a new milestone.</p>",
// };

// const AdminEmailSender = () => {
//   const [to, setTo] = useState("");
//   const [subject, setSubject] = useState("");
//   const [messageType, setMessageType] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [html, setHtml] = useState("");
//   const editorRef = useRef(null);
//   const API = import.meta.env.VITE_API_URL;

//   const handleTemplateChange = (type) => {
//     setMessageType(type);
//     const template = templates[type] || "";
//     setHtml(template);
//     if (editorRef.current) {
//       editorRef.current.innerHTML = template;
//     }
//   };


// const handleSend = async () => {
//   const editorHtml = editorRef.current?.innerHTML;
//   if (!to || !subject || !editorHtml) {
//     alert("Please fill in all fields.");
//     return;
//   }

//   const wrapHtml = (raw) => `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <meta charset="UTF-8">
//         <title>${subject}</title>
//       </head>
//       <body>
//         ${raw}
//       </body>
//     </html>
//   `;

//   setLoading(true);
//   try {
//     const res = await fetch(`${API}/api/send-email`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ to, subject, html: wrapHtml(editorHtml) }),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       alert("✅ Email sent successfully!");
//       setTo("");
//       setSubject("");
//       setHtml("");
//       setMessageType("");
//       if (editorRef.current) editorRef.current.innerHTML = "";
//     } else {
//       alert(`❌ Failed: ${data.error}`);
//     }
//   } catch (err) {
//     console.error("Error sending email:", err);
//     alert("❌ Network error while sending.");
//   }
//   setLoading(false);
// };


//   useEffect(() => {
//     if (editorRef.current) {
//       editorRef.current.innerHTML = html;
//     }
//   }, [html]);

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">📧 Admin Email Sender</h2>

//       <div className="mb-4">
//         <label className="block font-medium mb-1">To Email</label>
//         <input
//           type="email"
//           className="w-full p-2 border rounded"
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//           placeholder="user@example.com"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium mb-1">Subject</label>
//         <input
//           type="text"
//           className="w-full p-2 border rounded"
//           value={subject}
//           onChange={(e) => setSubject(e.target.value)}
//           placeholder="Enter email subject"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium mb-1">Template</label>
//         <select
//           className="w-full p-2 border rounded"
//           value={messageType}
//           onChange={(e) => handleTemplateChange(e.target.value)}
//         >
//           <option value="">Select message type</option>
//           <option value="welcome">Welcome</option>
//           <option value="success">Success</option>
//           <option value="congratulation">Congratulation</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium mb-1">Email Body (Rich Text)</label>
//         <div
//           ref={editorRef}
//           contentEditable
//           className="w-full min-h-[150px] border rounded p-3 bg-white"
//           style={{ outline: "none" }}
//           onInput={() => setHtml(editorRef.current?.innerHTML || "")}
//         />
//       </div>

//       <div className="mb-6">
//         <label className="block font-medium mb-1">Live Preview</label>
//         <div
//           className="p-4 border rounded bg-gray-50"
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//       </div>

//       <button
//         onClick={handleSend}
//         disabled={loading}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//       >
//         {loading ? "Sending..." : "Send Email"}
//       </button>
//     </div>
//   );
// };

// export default AdminEmailSender;
import { useState, useRef, useEffect } from "react";

// const templates = {
//   welcome: "<h2>Welcome to CryptoInvest!</h2><p>We're glad to have you.</p>",
//   success: "<h2>🎉 Successful Transaction!</h2><p>Your investment has been processed.</p>",
//   congratulation: "<h2>Congratulations!</h2><p>You’ve achieved a new milestone.</p>",
// };
const templates = {
  welcome: `
    <h2>Welcome to CryptoInvest!</h2>
    <p>We’re thrilled to have you on board. You can now access exclusive investment tools and updates.</p>
  `,
  success: `
    <h2>🎉 Transaction Successful</h2>
    <p>Your investment has been processed. Thank you for trusting CryptoInvest with your financial growth.</p>
  `,
  congratulation: `
    <h2>Congratulations!</h2>
    <p>You’ve reached a new milestone with your investments. Keep up the great work!</p>
  `,
};


const AdminEmailSender = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);
  const [html, setHtml] = useState("");
  const editorRef = useRef(null);
  const API = import.meta.env.VITE_API_URL;

//   const wrapHtml = (raw) => `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <meta charset="UTF-8">
//         <title>${subject}</title>
//         <style>
//           body { font-family: Arial, sans-serif; color: #333; }
//           h2 { color: #1a73e8; }
//         </style>
//       </head>
//       <body>
//         ${raw}
//       </body>
//     </html>
//   `;
const wrapHtml = (raw) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${subject}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #f2f4f6;
          font-family: Arial, sans-serif;
        }
        .email-wrapper {
          width: 100%;
          background-color: #f2f4f6;
          padding: 20px 0;
        }
        .email-content {
          max-width: 600px;
          margin: auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          text-align: center;
        }
        .email-header {
          background-color: #1a73e8;
          color: #ffffff;
          padding: 24px;
          text-align: center;
        }
        .email-body {
          padding: 24px;
          color: #333333;
          font-size: 16px;
          line-height: 1.6;
        }
        .email-footer {
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #888888;
        }
        .btn {
          display: inline-block;
          background-color: #1a73e8;
          color: #ffffff !important;
          padding: 12px 24px;
          border-radius: 4px;
          text-decoration: none;
          margin-top: 16px;
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="email-content">
          <div class="email-header">
            <h1>${raw.match(/<h2>(.*?)<\/h2>/)?.[1] || subject}</h1>
          </div>
          <div class="email-body">
            ${raw}
            <br/>
           
          </div>
        </div>
        <div class="email-footer">
          &copy; ${new Date().getFullYear()} CryptoInvest. All rights reserved.
        </div>
      </div>
    </body>
  </html>
`;

  const handleTemplateChange = (type) => {
    const template = templates[type] || "";
    setMessageType(type);
    setHtml(template);
    if (editorRef.current) editorRef.current.innerHTML = template;
  };

  const handleSend = async () => {
    const editorHtml = html?.trim();

    if (
      !to ||
      !subject ||
      !editorHtml ||
      editorHtml === "<br>" ||
      editorHtml === "<div><br></div>"
    ) {
      alert("Please fill in a valid message body.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to,
          subject,
          html: wrapHtml(editorHtml),
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Email sent successfully!");
        setTo("");
        setSubject("");
        setHtml("");
        setMessageType("");
        // if (editorRef.current) editorRef.current.innerHTML = "";
      } else {
        alert(`❌ Failed: ${data.error}`);
      }
    } catch (err) {
      console.error("Error sending email:", err);
      alert("❌ Network error while sending.");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = html;
    }
  }, [html]);

  return (
    <div className="compose-mail">


      <div className="modal-content">
        <div className="modal-header">
      <h2 className="text-2xl font-bold mb-4">compose mail to a User</h2>
       </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">To Email</label>
        <input
          type="email"
          className="w-full p-2 compose-mail-input border rounded"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="user@example.com"
          
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Subject</label>
        <input
          type="text"
          className="w-full p-2 compose-mail-input  border rounded"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter email subject"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Template</label>
        <select
          className="w-full p-2 compose-mail-input  border rounded"
          value={messageType}
          onChange={(e) => handleTemplateChange(e.target.value)}
        >
          <option value="">Select message type</option>
          <option value="welcome">Welcome</option>
          <option value="success">Success</option>
          <option value="congratulation">Congratulation</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Email Body (Rich Text)</label>
        {/* <div
          ref={editorRef}
          contentEditable
          className="w-full min-h-[150px] border rounded p-3 bg-white"
         style={{
  direction: "ltr",
  unicodeBidi: "normal",
  transform: "none"
}}

          onInput={() => setHtml(editorRef.current?.innerHTML || "")}
        /> */}
        <textarea
  value={html}
  onChange={(e) => setHtml(e.target.value)}
  placeholder="Write your message..."
  className="w-full min-h-[150px] border rounded p-3 bg-white"
  style={{
    direction: "ltr",
    textAlign: "left",
    outline: "none",
    resize: "vertical",
  }}
/>


      </div>
      </div>

      <div className="mb-6">
        <label className="block font-medium mb-1">Live Preview</label>
       <div
  className="p-4 border rounded bg-white"
  dangerouslySetInnerHTML={{ __html: wrapHtml(html) }}
  style={{ overflow: 'auto', maxHeight: '400px' }}
/>

      </div>

      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Email"}
      </button>
    </div>
  );
};

export default AdminEmailSender;
