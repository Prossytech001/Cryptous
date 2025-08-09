// components/VisitorEmailGate.jsx
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const VisitorEmailGate = () => {
//   const api = import.meta.env.VITE_API_URL; // e.g. http://localhost:5000/api
//   const [showGate, setShowGate] = useState(false);
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     // If we already prompted on this device, skip
//     const alreadyPrompted = localStorage.getItem('visitorPrompted');
//     if (alreadyPrompted) return;

//     const checkVisitor = async () => {
//       try {
//         const { data } = await axios.get(`${api}/api/track-visitors/exists`);
//         if (!data.exists) {
//           setShowGate(true);
//         }
//       } catch (err) {
//         console.error('exists check failed', err);
//         // optional: decide to show gate anyway or not
//       }
//     };
//     checkVisitor();
//   }, [api]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${api}/api/track-visit`, { email });
//       localStorage.setItem('visitorPrompted', '1'); // prevent showing again on this browser
//       setShowGate(false);
//     } catch (err) {
//       console.error('track-visit failed', err);
//       // show a toast/error if you want
//     }
//   };

//   if (!showGate) return null;

//   return (
//     <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur flex items-center justify-center p-4">
//       <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white shadow-lg p-5">
//         <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome 👋</h2>
//         <p className="text-sm text-gray-600 mb-4">
//           Enter your email to continue browsing.
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             type="email"
//             required
//             placeholder="you@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full rounded-md bg-[#2563EB] text-white px-4 py-2 font-medium hover:opacity-95"
//           >
//             Continue
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VisitorEmailGate;
// components/VisitorEmailGate.jsx
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const VisitorEmailGate = () => {
//   const api = import.meta.env.VITE_API_URL; // e.g. http://localhost:5000/api
//   const [showGate, setShowGate] = useState(false);
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     // avoid re-prompting on same device/browser
//     const alreadyPrompted = localStorage.getItem('visitorPrompted');
//     if (alreadyPrompted) return;

//     const checkExists = async () => {
//       try {
//         const { data } = await axios.get(`${api}/track-visitors/exists`);
//         if (!data.exists) setShowGate(true);
//       } catch (err) {
//         console.error('exists check failed', err);
//         // You can decide to show gate anyway or not; here we keep it hidden on errors.
//       }
//     };
//     checkExists();
//   }, [api]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${api}/track-visit`, { email }); // will also enrich IP+UA+geo
//       localStorage.setItem('visitorPrompted', '1');
//       setShowGate(false);
//     } catch (err) {
//       console.error('track-visit failed', err);
//       // You can show a toast here
//     }
//   };

//   if (!showGate) return null;

//   return (
//     <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur flex items-center justify-center p-4">
//       <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white shadow-lg p-5">
//         <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome 👋</h2>
//         <p className="text-sm text-gray-600 mb-4">
//           Enter your email to continue browsing.
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             type="email"
//             required
//             placeholder="you@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full rounded-md bg-[#2563EB] text-white px-4 py-2 font-medium hover:opacity-95"
//           >
//             Continue
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VisitorEmailGate;
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const VisitorEmailGate = () => {
//   const api = import.meta.env.VITE_API_URL; // e.g. http://localhost:5000/api
//   const [showGate, setShowGate] = useState(false);
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     const alreadyPrompted = localStorage.getItem('visitorPrompted');
//     if (alreadyPrompted) return;

//     axios.get(`${api}/api/track-visitors/exists`)
//       .then(({ data }) => {
//         if (!data.exists) setShowGate(true);
//       })
//       .catch(() => {});
//   }, [api]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post(`${api}/api/track-visit`, { email });
//     localStorage.setItem('visitorPrompted', '1');
//     setShowGate(false);
//   };

//   if (!showGate) return null;

//   return (
//     <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur flex items-center justify-center p-4">
//       <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white shadow-lg p-5">
//         <h2 className="text-xl font-semibold mb-2">Welcome 👋</h2>
//         <p className="text-sm text-gray-600 mb-4">Enter your email to continue.</p>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             type="email"
//             required
//             placeholder="you@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button type="submit" className="w-full rounded-md bg-[#2563EB] text-white px-4 py-2">
//             Continue
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VisitorEmailGate;
// import { useState } from "react";

// export default function EmailGateModal({ open, onClose, onSubmit }) {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState("");

//   if (!open) return null;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErr("");
//     const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     if (!ok) {
//       setErr("Enter a valid email");
//       return;
//     }
//     try {
//       setLoading(true);
//       await onSubmit(email);
//       onClose();
//     } catch (e) {
//       setErr("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
//       <div className="w-[92%] max-w-md rounded-xl bg-white p-6 shadow-xl">
//         <h2 className="text-xl font-semibold mb-2">Join our updates</h2>
//         <p className="text-sm text-gray-600 mb-4">
//           Enter your email to continue. We only ask once.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             type="email"
//             className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="you@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             disabled={loading}
//           />
//           {err ? <p className="text-red-600 text-sm">{err}</p> : null}

//           <div className="flex gap-2 justify-end">
//             <button
//               type="button"
//               className="rounded-lg border px-4 py-2"
//               onClick={onClose}
//               disabled={loading}
//             >
//               Not now
//             </button>
//             <button
//               type="submit"
//               className="rounded-lg bg-blue-600 px-4 py-2 text-white"
//               disabled={loading}
//             >
//               {loading ? "Saving..." : "Continue"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function EmailGateModal({ open, onClose }) {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState("");
//   const API = import.meta.env.VITE_API_URL; // e.g. http://localhost:5100

//   if (!open) return null;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErr("");

//     const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     if (!ok) {
//       setErr("Enter a valid email");
//       return;
//     }

//     try {
//       setLoading(true);

//       // 🔐 Store ONLY the email in the separate EmailOnly collection
//       const res = await fetch(`${API}/api/email-only`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       if (!res.ok) throw new Error("Failed to save email");

//       // ✅ Don't prompt again this session
//       sessionStorage.setItem("visitorTracked", "true");

//       onClose(); // close the popup
//     } catch (e) {
//       console.error(e);
//       setErr("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
//       <div className="w-[92%] max-w-md rounded-xl bg-white p-6 shadow-xl">
//         <h2 className="text-xl font-semibold mb-2">Join our updates</h2>
//         <p className="text-sm text-gray-600 mb-4">
//           Enter your email to continue. We only ask once.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             type="email"
//             className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="you@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             disabled={loading}
//           />

//           {err ? <p className="text-red-600 text-sm">{err}</p> : null}

//           <div className="flex gap-2 justify-end">
//             <button
//               type="button"
//               className="rounded-lg border px-4 py-2"
//               onClick={onClose}
//               disabled={loading}
//             >
//               Not now
//             </button>
//             <button
//               type="submit"
//               className="rounded-lg bg-blue-600 px-4 py-2 text-white"
//               disabled={loading}
//             >
//               {loading ? "Saving..." : "Continue"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";

export default function EmailGateModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const API = import.meta.env.VITE_API_URL;

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) return setErr("Enter a valid email");

    try {
      setLoading(true);
      const res = await fetch(`${API}/api/email-only`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      sessionStorage.setItem("visitorTracked", "true");
      onClose?.();
    } catch (e) {
      setErr("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed email-mate-gate inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
    >
      {/* background grid accent */}
      <div className=" pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_30%_20%,rgba(80,0,255,.25),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(0,255,200,.2),transparent_30%)]" />

      {/* modal card with neon border */}
      <div className=" relative mx-4  max-w-md">
        <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 opacity-80 blur-sm"></div>

        <div className=" email-gate-con relative rounded-2xl bg-neutral-900/95 p-6 shadow-2xl ring-1 ring-white/10">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-md p-1 text-neutral-400 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Header */}
          <h2 className="email-gate-text mb-2 text-center text-2xl font-bold tracking-tight text-white">
            GET <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">10% OFF FEES</span>
          </h2>
          <p className="email-gate-text mb-5 text-center text-sm text-neutral-300">
            Join our crypto updates—new listings, airdrops, and pro tips straight to your inbox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="block">
              <span className="sr-only">Email</span>
              <div className="email-gate-text flex items-center rounded-xl border border-white/10 bg-neutral-800/80 px-3 py-2 focus-within:border-cyan-400">
                <svg
                  className="mr-2 h-5 w-5 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 7.5v9a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 16.5v-9M21.75 7.5l-9.75 6-9.75-6M21.75 7.5l-9.75 6-9.75-6" />
                </svg>
                <input
                  type="email"
                  className=" w-full bg-transparent text-white placeholder-neutral-400 outline-none"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
            </label>

            {err ? <p className="text-sm text-rose-400">{err}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="email-gate-text group relative mt-1 w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2.5 font-semibold text-white shadow-lg transition hover:from-cyan-400 hover:to-fuchsia-400 disabled:opacity-60"
            >
              <span className="relative z-10">{loading ? "Signing up..." : "Submit"}</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 blur-[6px] transition group-hover:translate-x-0" />
            </button>
          </form>

          {/* Fine print */}
          <p className="mt-3 text-center text-[11px] leading-4 text-neutral-400">
            We respect your privacy and never share your info. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
