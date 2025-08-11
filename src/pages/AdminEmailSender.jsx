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
// import { useState, useRef, useEffect } from "react";

// const templates = {
//   welcome: `
//     <h2>Welcome to CryptoInvest!</h2>
//     <p>We’re thrilled to have you on board. You can now access exclusive investment tools and updates.</p>
//   `,
//   success: `
//     <h2>🎉 Transaction Successful</h2>
//     <p>Your investment has been processed. Thank you for trusting CryptoInvest with your financial growth.</p>
//   `,
//   congratulation: `
//     <h2>Congratulations!</h2>
//     <p>You’ve reached a new milestone with your investments. Keep up the great work!</p>
//   `,
// };


// const AdminEmailSender = () => {
//   const [to, setTo] = useState("");
//   const [subject, setSubject] = useState("");
//   const [messageType, setMessageType] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [html, setHtml] = useState("");
//   const editorRef = useRef(null);
//   const API = import.meta.env.VITE_API_URL;


// const wrapHtml = (raw) => `
//   <!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>${subject}</title>
//       <style>
//         body {
//           margin: 0;
//           padding: 0;
//           background-color: #f2f4f6;
//           font-family: Arial, sans-serif;
//         }
//         .email-wrapper {
//           width: 100%;
//           background-color: #f2f4f6;
//           padding: 20px 0;
//         }
//         .email-content {
//           max-width: 600px;
//           margin: auto;
//           background-color: #ffffff;
//           border-radius: 8px;
//           overflow: hidden;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.05);
//           text-align: center;
//         }
//         .email-header {
//           background-color: #1a73e8;
//           color: #ffffff;
//           padding: 24px;
//           text-align: center;
//         }
//         .email-body {
//           padding: 24px;
//           color: #333333;
//           font-size: 16px;
//           line-height: 1.6;
//         }
//         .email-footer {
//           padding: 20px;
//           text-align: center;
//           font-size: 12px;
//           color: #888888;
//         }
//         .btn {
//           display: inline-block;
//           background-color: #1a73e8;
//           color: #ffffff !important;
//           padding: 12px 24px;
//           border-radius: 4px;
//           text-decoration: none;
//           margin-top: 16px;
//         }
//       </style>
//     </head>
//     <body>
//       <div class="email-wrapper">
//         <div class="email-content">
//           <div class="email-header">
//             <h1>${raw.match(/<h2>(.*?)<\/h2>/)?.[1] || subject}</h1>
//           </div>
//           <div class="email-body">
//             ${raw}
//             <br/>
           
//           </div>
//         </div>
//         <div class="email-footer">
//           &copy; ${new Date().getFullYear()} CryptoInvest. All rights reserved.
//         </div>
//       </div>
//     </body>
//   </html>
// `;

//   const handleTemplateChange = (type) => {
//     const template = templates[type] || "";
//     setMessageType(type);
//     setHtml(template);
//     if (editorRef.current) editorRef.current.innerHTML = template;
//   };

//   const handleSend = async () => {
//     const editorHtml = html?.trim();

//     if (
//       !to ||
//       !subject ||
//       !editorHtml ||
//       editorHtml === "<br>" ||
//       editorHtml === "<div><br></div>"
//     ) {
//       alert("Please fill in a valid message body.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(`${API}/api/send-email`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           to,
//           subject,
//           html: wrapHtml(editorHtml),
//         }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert("✅ Email sent successfully!");
//         setTo("");
//         setSubject("");
//         setHtml("");
//         setMessageType("");
//         // if (editorRef.current) editorRef.current.innerHTML = "";
//       } else {
//         alert(`❌ Failed: ${data.error}`);
//       }
//     } catch (err) {
//       console.error("Error sending email:", err);
//       alert("❌ Network error while sending.");
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (editorRef.current) {
//       editorRef.current.innerHTML = html;
//     }
//   }, [html]);

//   return (
//     <div className="compose-mail">


//       <div className="modal-content">
//         <div className="modal-header">
//       <h2 className="text-2xl font-bold mb-4">compose mail to a User</h2>
//        </div>
//       <div className="mb-4">
//         <label className="block font-medium mb-1">To Email</label>
//         <input
//           type="email"
//           className="w-full p-2 compose-mail-input border rounded"
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//           placeholder="user@example.com"
          
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium mb-1">Subject</label>
//         <input
//           type="text"
//           className="w-full p-2 compose-mail-input  border rounded"
//           value={subject}
//           onChange={(e) => setSubject(e.target.value)}
//           placeholder="Enter email subject"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium mb-1">Template</label>
//         <select
//           className="w-full p-2 compose-mail-input  border rounded"
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
//         {/* <div
//           ref={editorRef}
//           contentEditable
//           className="w-full min-h-[150px] border rounded p-3 bg-white"
//          style={{
//   direction: "ltr",
//   unicodeBidi: "normal",
//   transform: "none"
// }}

//           onInput={() => setHtml(editorRef.current?.innerHTML || "")}
//         /> */}
//         <textarea
//   value={html}
//   onChange={(e) => setHtml(e.target.value)}
//   placeholder="Write your message..."
//   className="w-full min-h-[150px] border rounded p-3 bg-white"
//   style={{
//     direction: "ltr",
//     textAlign: "left",
//     outline: "none",
//     resize: "vertical",
//   }}
// />


//       </div>
//       </div>

//       <div className="mb-6">
//         <label className="block font-medium mb-1">Live Preview</label>
//        <div
//   className="p-4 border rounded bg-white"
//   dangerouslySetInnerHTML={{ __html: wrapHtml(html) }}
//   style={{ overflow: 'auto', maxHeight: '400px' }}
// />

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
// import { useState, useRef, useEffect } from "react";

// const API = import.meta.env.VITE_API_URL;

// // ---- Template themes (colors + SVG with Outlook PNG fallback) ----
// const TEMPLATE_THEMES = {
//   welcome: {
//     title: "Welcome to CryptoInvest!",
//     headerBg: "#4F46E5", // indigo
//     accent: "#8B5CF6",
//     buttonBg: "#4F46E5",
//     iconPng: "https://yourcdn.com/email-icons/rocket.png",
//     iconSvg: `
//       <svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Welcome" style="display:block">
//         <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8B5CF6"/><stop offset="1" stop-color="#2563EB"/></linearGradient></defs>
//         <path fill="url(#g)" d="M48 10c12 8 22 24 22 36 0 4-1 8-2 12l10 10-12 6-8-8c-4 1-8 2-12 2s-8-1-12-2l-8 8-12-6 10-10c-1-4-2-8-2-12 0-12 10-28 22-36z"/>
//         <circle cx="48" cy="36" r="8" fill="#fff"/>
//       </svg>
//     `,
//     defaultBody:
//       "We’re thrilled to have you on board. You can now access exclusive investment tools and updates.",
//   },
//   success: {
//     title: "🎉 Transaction Successful",
//     headerBg: "#10B981", // emerald
//     accent: "#34D399",
//     buttonBg: "#059669",
//     iconPng: "https://yourcdn.com/email-icons/tick.png",
//     iconSvg: `
//       <svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Success" style="display:block">
//         <circle cx="48" cy="48" r="38" fill="#10B981"/>
//         <path d="M33 49l10 10 20-22" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
//       </svg>
//     `,
//     defaultBody:
//       "Your investment has been processed. Thank you for trusting CryptoInvest with your financial growth.",
//   },
//   congratulation: {
//     title: "Congratulations!",
//     headerBg: "#F59E0B", // amber
//     accent: "#FBBF24",
//     buttonBg: "#D97706",
//     iconPng: "https://yourcdn.com/email-icons/trophy.png",
//     iconSvg: `
//       <svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Congratulations" style="display:block">
//         <path fill="#F59E0B" d="M24 20h48v10a16 16 0 1 0 0 0V20h8a4 4 0 0 1 4 4v6a20 20 0 0 1-20 20 20 20 0 0 1-12 11v9h10v8H34v-8h10v-9A20 20 0 0 1 32 50 20 20 0 0 1 12 30v-6a4 4 0 0 1 4-4h8z"/>
//       </svg>
//     `,
//     defaultBody:
//       "You’ve reached a new milestone with your investments. Keep up the great work!",
//   },
// };

// // simple HTML-escape for plaintext body
// const escapeHtml = (s) =>
//   s
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;");

// // if user types plain text, convert newlines to <br>
// const toRenderable = (value) => {
//   if (!value) return "";
//   const looksLikeHtml = /<[^>]+>/.test(value);
//   return looksLikeHtml ? value : escapeHtml(value).replace(/\n/g, "<br>");
// };

// // master wrapper uses theme + SVG (with Outlook fallback)
// const wrapHtml = ({ subject, themeKey, bodyHtml }) => {
//   const t = TEMPLATE_THEMES[themeKey] || TEMPLATE_THEMES.welcome;
//   const title = subject?.trim() || t.title;

//   return `<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charSet="UTF-8" />
//     <meta name="viewport" content="width=device-width,initial-scale=1" />
//     <title>${title}</title>
//     <style>
//       body {  margin:0; padding:0; background:#f2f4f6; font-family: Arial, Helvetica, sans-serif; }
//       .email-wrap { width:100%; padding:24px 0; }
//       .card { max-width:600px; margin:auto; background:#fff; border-radius:10px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.06); }
//       .head { background:${t.headerBg}; color:#fff; text-align:center; padding:24px; }
//       .icon {display:flex; flex-direction:column; align-items: center;  padding:16px 0 0; }
//       .title { margin:12px 0 0; font-size:24px; line-height:1.2; }
//       .body { padding:24px; color:#111827; font-size:16px; line-height:1.6; text-align:left; }
//       .btn { display:inline-block; background:${t.buttonBg}; color:#fff !important; padding:12px 20px; border-radius:6px; text-decoration:none; margin-top:16px; }
//       .foot { text-align:center; color:#6B7280; font-size:12px; padding:18px; }
//       a { color:${t.headerBg}; }
//     </style>
//   </head>
//   <body>
//     <div class="email-wrap">
//       <div class="card">
//         <div class="head">
//           <div class="icon">
//             <!--[if mso]>
//               <img src="${t.iconPng}" width="96" height="96" alt="" style="display:block;">
//             <![endif]-->
//             <!--[if !mso]><!-- -->
//               ${t.iconSvg}
//             <!--<![endif]-->
//           </div>
//           <h1 class="title">${title}</h1>
//         </div>
//         <div class="body">
//           ${bodyHtml}
//         </div>
//       </div>
//       <div class="foot">&copy; ${new Date().getFullYear()} CryptoInvest. All rights reserved.</div>
//     </div>
//   </body>
// </html>`;
// };

// const AdminEmailSender = () => {
//   const [to, setTo] = useState("");
//   const [subject, setSubject] = useState("");
//   const [messageType, setMessageType] = useState("welcome");
//   const [loading, setLoading] = useState(false);
//   const [body, setBody] = useState(TEMPLATE_THEMES.welcome.defaultBody);

//   // when template changes, load its default body
//   const handleTemplateChange = (type) => {
//     const t = TEMPLATE_THEMES[type] || TEMPLATE_THEMES.welcome;
//     setMessageType(type);
//     setBody(t.defaultBody);
//   };

//   const htmlForPreview = wrapHtml({
//     subject,
//     themeKey: messageType,
//     bodyHtml: toRenderable(body),
//   });

//   const handleSend = async () => {
//     const cleanBody = (body || "").trim();
//     if (!to || !subject || !cleanBody) {
//       alert("Please fill To, Subject, and Message.");
//       return;
//     }
//     setLoading(true);
//     try {
//       const res = await fetch(`${API}/api/send-email`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           to,
//           subject,
//           html: htmlForPreview, // already wrapped + themed
//         }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         alert("✅ Email sent successfully!");
//         setTo("");
//         setSubject("");
//         handleTemplateChange("welcome");
//       } else {
//         alert(`❌ Failed: ${data?.error || "Unknown error"}`);
//       }
//     } catch (e) {
//       console.error(e);
//       alert("❌ Network error while sending.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="compose-mail">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h2 className="text-2xl font-bold mb-4">Compose Email</h2>
//         </div>

//         <div className="mb-4">
//           <label className="block font-medium mb-1">To Email</label>
//           <input
//             type="email"
//             className="w-full p-2 compose-mail-input border rounded"
//             value={to}
//             onChange={(e) => setTo(e.target.value)}
//             placeholder="user@example.com"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block font-medium mb-1">Subject</label>
//           <input
//             type="text"
//             className="w-full p-2 compose-mail-input border rounded"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             placeholder="Enter email subject"
//           />
//         </div>

//         <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
//           <div>
//             <label className="block font-medium mb-1">Template</label>
//             <select
//               className="w-full p-2 compose-mail-input border rounded"
//               value={messageType}
//               onChange={(e) => handleTemplateChange(e.target.value)}
//             >
//               <option value="welcome">Welcome</option>
//               <option value="success">Success</option>
//               <option value="congratulation">Congratulation</option>
//             </select>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block font-medium mb-1">Message (Enter = new line)</label>
//           <textarea
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             placeholder="Write your message..."
//             className="w-full min-h-[150px] border rounded p-3 bg-white"
//             style={{ direction: "ltr", textAlign: "left", outline: "none", resize: "vertical" }}
//           />
//           <p className="text-xs text-gray-500 mt-1">
//             Tip: You can also paste simple HTML. Plain text will keep your line breaks in preview.
//           </p>
//         </div>
//       </div>

//       <div className="mb-6">
//         <label className="block font-medium mb-1">Live Preview</label>
//         <div
//           className="p-4 border rounded bg-white"
//           dangerouslySetInnerHTML={{ __html: htmlForPreview }}
//           style={{ overflow: "auto", maxHeight: "420px" }}
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
import { useState } from "react";

const API = import.meta.env.VITE_API_URL;

// -------- Template themes (colors + SVG + PNG fallback) --------
const TEMPLATE_THEMES = {
  welcome: {
    title: "Welcome to CryptoInvest!",
    headerBg: "#4F46E5",
    buttonBg: "#4F46E5",
    iconPng: "https://yourcdn.com/email-icons/rocket.png",
    iconSvg: `
      <svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Welcome" style="display:block">
        <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8B5CF6"/><stop offset="1" stop-color="#2563EB"/></linearGradient></defs>
        <path fill="url(#g)" d="M48 10c12 8 22 24 22 36 0 4-1 8-2 12l10 10-12 6-8-8c-4 1-8 2-12 2s-8-1-12-2l-8 8-12-6 10-10c-1-4-2-8-2-12 0-12 10-28 22-36z"/>
        <circle cx="48" cy="36" r="8" fill="#fff"/>
      </svg>
    `,
    defaultBody:
      "We’re thrilled to have you on board. You can now access exclusive investment tools and updates.",
  },
  success: {
    title: "🎉 Transaction Successful",
    headerBg: "#10B981",
    buttonBg: "#059669",
    iconPng: "https://yourcdn.com/email-icons/tick.png",
    iconSvg: `
      <svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Success" style="display:block">
        <circle cx="48" cy="48" r="38" fill="#10B981"/>
        <path d="M33 49l10 10 20-22" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    defaultBody:
      "Your investment has been processed. Thank you for trusting CryptoInvest with your financial growth.",
  },
  congratulation: {
    title: "Congratulations!",
    headerBg: "#F59E0B",
    buttonBg: "#D97706",
    iconPng: "https://yourcdn.com/email-icons/trophy.png",
    iconSvg: `
      <svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Congratulations" style="display:block">
        <path fill="#F59E0B" d="M24 20h48v10a16 16 0 1 0 0 0V20h8a4 4 0 0 1 4 4v6a20 20 0 0 1-20 20 20 20 0 0 1-12 11v9h10v8H34v-8h10v-9A20 20 0 0 1 32 50 20 20 0 0 1 12 30v-6a4 4 0 0 1 4-4h8z"/>
      </svg>
    `,
    defaultBody:
      "You’ve reached a new milestone with your investments. Keep up the great work!",
  },
};

// -------- Utils --------
const emailRegex = /([^\s<>"',;]+@[^\s<>"',;]+\.[^\s<>"',;]+)/g;

function parseRecipientsFront(raw) {
  if (!raw) return [];
  const chunks = String(raw)
    .split(/[\n,;]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const out = [];
  for (const c of chunks) {
    const found = c.match(emailRegex);
    if (found) out.push(...found);
  }
  return [...new Set(out)];
}

// escape HTML in plaintext
const escapeHtml = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

// convert newline to <br> for plaintext; leave simple HTML intact
const toRenderable = (value) => {
  if (!value) return "";
  const looksLikeHtml = /<[^>]+>/.test(value);
  return looksLikeHtml ? value : escapeHtml(value).replace(/\n/g, "<br>");
};

// Build full HTML with theme + icon (includes Outlook PNG fallback)
const wrapHtml = ({ subject, themeKey, bodyHtml }) => {
  const t = TEMPLATE_THEMES[themeKey] || TEMPLATE_THEMES.welcome;
  const title = subject?.trim() || t.title;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${title}</title>
    <style>
      body { margin:0; padding:0; background:#f2f4f6; font-family: Arial, Helvetica, sans-serif; }
      .email-wrap { width:100%; padding:24px 0; }
      .card { max-width:600px; margin:auto; background:#fff; border-radius:10px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.06); }
      .head { background:${t.headerBg}; color:#fff; text-align:center; padding:24px; }
      .icon { display:flex; flex-direction:column; align-items:center; padding:16px 0 0; }
      .title { margin:12px 0 0; font-size:24px; line-height:1.2; }
      .body { padding:24px; color:#111827; font-size:16px; line-height:1.6; text-align:left; }
      .btn { display:inline-block; background:${t.buttonBg}; color:#fff !important; padding:12px 20px; border-radius:6px; text-decoration:none; margin-top:16px; }
      .foot { text-align:center; color:#6B7280; font-size:12px; padding:18px; }
      a { color:${t.headerBg}; }
    </style>
  </head>
  <body>
    <div class="email-wrap">
      <div class="card">
        <div class="head">
          <div class="icon">
            <!--[if mso]>
              <img src="${t.iconPng}" width="96" height="96" alt="" style="display:block;">
            <![endif]-->
            <!--[if !mso]><!-- -->
              ${t.iconSvg}
            <!--<![endif]-->
          </div>
          <h1 class="title">${title}</h1>
        </div>
        <div class="body">
          ${bodyHtml}
        </div>
      </div>
      <div class="foot">&copy; ${new Date().getFullYear()} CryptoInvest. All rights reserved.</div>
    </div>
  </body>
</html>`;
};

// -------- Component --------
export default function AdminEmailSender() {
  const [to, setTo] = useState("");
  const [toError, setToError] = useState("");
  const [subject, setSubject] = useState("");
  const [messageType, setMessageType] = useState("welcome");
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState(TEMPLATE_THEMES.welcome.defaultBody);

  const onToChange = (val) => {
    setTo(val);
    const list = parseRecipientsFront(val);
    if (!val.trim()) setToError("");
    else if (!list.length)
      setToError("Enter a valid email (use commas for multiple).");
    else setToError("");
  };

  const handleTemplateChange = (type) => {
    const t = TEMPLATE_THEMES[type] || TEMPLATE_THEMES.welcome;
    setMessageType(type);
    setBody(t.defaultBody);
  };

  const htmlForPreview = wrapHtml({
    subject,
    themeKey: messageType,
    bodyHtml: toRenderable(body),
  });

  const handleSend = async () => {
    const cleanBody = (body || "").trim();
    const toList = parseRecipientsFront(to);

    if (!toList.length) {
      alert("Please enter a valid recipient email.");
      return;
    }
    if (!subject.trim() || !cleanBody) {
      alert("Please fill Subject and Message.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: toList.join(", "), // always send a clean list
          subject,
          html: htmlForPreview,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("✅ Email sent successfully!");
        setTo("");
        setSubject("");
        handleTemplateChange("welcome");
      } else {
        alert(`❌ Failed: ${data?.error || "Unknown error"}`);
      }
    } catch (e) {
      console.error(e);
      alert("❌ Network error while sending.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="compose-mail">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="text-2xl font-bold mb-4">Compose Email</h2>
        </div>

        {/* Recipients */}
        <div className="mb-4">
          <label className="block font-medium mb-1">To (comma/semicolon separated)</label>
          <input
            type="text"
            inputMode="email"
            autoComplete="email"
            className="w-full p-2 compose-mail-input border rounded"
            value={to}
            onChange={(e) => onToChange(e.target.value)}
            placeholder="user1@example.com, user2@example.com"
          />
          {toError ? <p className="text-xs text-red-600 mt-1">{toError}</p> : null}
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Subject</label>
          <input
            type="text"
            className="w-full p-2 compose-mail-input border rounded"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter email subject"
          />
        </div>

        {/* Template */}
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-medium mb-1">Template</label>
            <select
              className="w-full p-2 compose-mail-input border rounded"
              value={messageType}
              onChange={(e) => handleTemplateChange(e.target.value)}
            >
              <option value="welcome">Welcome</option>
              <option value="success">Success</option>
              <option value="congratulation">Congratulation</option>
            </select>
          </div>
        </div>

        {/* Body */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Message (Enter = new line)</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your message..."
            className="w-full min-h-[150px] border rounded p-3 bg-white"
            style={{ direction: "ltr", textAlign: "left", outline: "none", resize: "vertical" }}
          />
          <p className="text-xs text-gray-500 mt-1">
            You can paste simple HTML. Plain text will keep your line breaks in preview.
          </p>
        </div>
      </div>

      {/* Live Preview */}
      <div className="mb-6">
        <label className="block font-medium mb-1">Live Preview</label>
        <div
          className="p-4 border rounded bg-white"
          dangerouslySetInnerHTML={{ __html: htmlForPreview }}
          style={{ overflow: "auto", maxHeight: "420px" }}
        />
      </div>

      {/* Send */}
      <button
        onClick={handleSend}
        disabled={
          loading ||
          !!toError ||
          !to.trim() ||
          !subject.trim() ||
          !body.trim()
        }
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Email"}
      </button>
    </div>
  );
}
