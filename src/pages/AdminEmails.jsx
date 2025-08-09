// import { useEffect, useMemo, useState } from "react";
// import { FiCopy, FiCheck, FiRefreshCw, FiDownload, FiSearch } from "react-icons/fi";

// export default function AdminEmails() {
//   const API = import.meta.env.VITE_API_URL;
//   const [items, setItems] = useState([]);
//   const [q, setQ] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [copiedId, setCopiedId] = useState(null);
//   const [copiedAll, setCopiedAll] = useState(false);

//   const fetchEmails = async () => {
//     setLoading(true);
//     try {
//       const r = await fetch(`${API}/api/email-only`);
//       const data = await r.json();
//       setItems(Array.isArray(data) ? data : []);
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEmails();
//   }, []);

//   const filtered = useMemo(() => {
//     const s = q.trim().toLowerCase();
//     if (!s) return items;
//     return items.filter((x) => x.email?.toLowerCase().includes(s));
//   }, [items, q]);

//   const copyText = async (text) => {
//     try {
//       await navigator.clipboard.writeText(text);
//       return true;
//     } catch {
//       return false;
//     }
//   };

//   const handleCopyOne = async (item) => {
//     const ok = await copyText(item.email);
//     if (ok) {
//       setCopiedId(item._id);
//       setTimeout(() => setCopiedId(null), 1200);
//     }
//   };

//   const handleCopyAll = async () => {
//     const all = filtered.map((x) => x.email).join(", ");
//     const ok = await copyText(all);
//     if (ok) {
//       setCopiedAll(true);
//       setTimeout(() => setCopiedAll(false), 1200);
//     }
//   };

//   const handleExportCsv = () => {
//     const header = "email,createdAt\n";
//     const rows = filtered
//       .map((x) => `${x.email},${x.createdAt ? new Date(x.createdAt).toISOString() : ""}`)
//       .join("\n");
//     const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "email_leads.csv";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="min-h-screen email-lead bg-neutral-200 text-grey">
//       <div className="mx-auto max-w-5xl px-4 py-8">
//         {/* Header */}
//         <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-2xl font-bold">Email Leads</h1>
//             <p className="text-sm text-neutral-400">
//               {filtered.length} {filtered.length === 1 ? "lead" : "leads"} found
//             </p>
//           </div>

//           <div className="flex gap-2">
//             <button
//               onClick={fetchEmails}
//               className="inline-flex email-lead items-center gap-2 rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800"
//               disabled={loading}
//               title="Refresh"
//             >
//               <FiRefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
//               Refresh
//             </button>
//             <button
//               onClick={handleCopyAll}
//               className="inline-flex email-lead items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-fuchsia-400"
//               title="Copy all (comma-separated)"
//             >
//               {copiedAll ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
//               {copiedAll ? "Copied All" : "Copy All"}
//             </button>
//             <button
//               onClick={handleExportCsv}
//               className="inline-flex email-lead items-center gap-2 rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800"
//               title="Export CSV"
//             >
//               <FiDownload className="h-4 w-4" />
//               Export CSV
//             </button>
//           </div>
//         </div>

//         {/* Search */}
//         <div className="mb-5">
//           <div className="flex email-lead items-center rounded-xl border border-white/10 bg-neutral-900 px-3 py-2">
//             <FiSearch className="mr-2 h-4 w-4 text-neutral-400" />
//             <input
//               value={q}
//               onChange={(e) => setQ(e.target.value)}
//               placeholder="Search emails…"
//               className="w-full bg-transparent text-sm text-white placeholder-neutral-500 outline-none"
//             />
//           </div>
//         </div>

//         {/* Card */}
//         <div className="email-lead rounded-2xl border border-white/10 bg-neutral-900/60 p-0 shadow-xl">
//           {/* Table header */}
//           <div className="grid email-lead grid-cols-12 border-b border-white/10 px-4 py-3 text-xs uppercase tracking-wide text-neutral-400">
//             <div className="col-span-7 sm:col-span-6">Email</div>
//             <div className="hidden col-span-4 sm:block">Created</div>
//             <div className="col-span-5 sm:col-span-2 text-right">Copy</div>
//           </div>

//           {/* Rows */}
//           {loading ? (
//             <div className="p-6 text-center text-neutral-400">Loading…</div>
//           ) : filtered.length === 0 ? (
//             <div className="p-6 text-center text-neutral-400">No results.</div>
//           ) : (
//             <ul className="email-lead divide-y divide-white/10">
//               {filtered.map((item) => (
//                 <li
//                   key={item._id}
//                   className="grid grid-cols-12 items-center px-4 py-3 hover:bg-white/5"
//                 >
//                   <div className="col-span-7 truncate text-sm sm:col-span-6">{item.email}</div>
//                   <div className="hidden col-span-4 text-xs text-neutral-400 sm:block">
//                     {item.createdAt ? new Date(item.createdAt).toLocaleString() : "—"}
//                   </div>
//                   <div className="col-span-5 flex justify-end sm:col-span-2">
//                     <button
//                       onClick={() => handleCopyOne(item)}
//                       className="inline-flex email-lead items-center gap-2 rounded-lg border border-white/10 bg-neutral-800 px-3 py-1.5 text-sm hover:bg-neutral-700"
//                       title="Copy email"
//                     >
//                       {copiedId === item._id ? (
//                         <>
//                           <FiCheck className="h-4 w-4" />
//                           Copied
//                         </>
//                       ) : (
//                         <>
//                           <FiCopy className="h-4 w-4" />
//                           Copy
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Hint */}
//         <p className="mt-4 text-xs text-neutral-500">
//           Tip: “Copy All” copies the filtered list, comma‑separated. Use search to narrow first.
//         </p>
//       </div>
//     </div>
//   );
// }
import { useEffect, useMemo, useState } from "react";
import { FiCopy, FiCheck, FiRefreshCw, FiDownload, FiSearch } from "react-icons/fi";

export default function AdminEmails() {
  const API = import.meta.env.VITE_API_URL;
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const fetchEmails = async () => {
    setLoading(true);
    try {
      const r = await fetch(`${API}/api/email-only`);
      const data = await r.json();
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter((x) => x.email?.toLowerCase().includes(s));
  }, [items, q]);

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  };

  const handleCopyOne = async (item) => {
    const ok = await copyText(item.email);
    if (ok) {
      setCopiedId(item._id);
      setTimeout(() => setCopiedId(null), 1200);
    }
  };

  const handleCopyAll = async () => {
    const all = filtered.map((x) => x.email).join(", ");
    const ok = await copyText(all);
    if (ok) {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 1200);
    }
  };

  const handleExportCsv = () => {
    const header = "email,createdAt\n";
    const rows = filtered
      .map((x) => `${x.email},${x.createdAt ? new Date(x.createdAt).toISOString() : ""}`)
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "email_leads.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="email-lead min-h-screen bg-gray-50 text-gray-800">
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Email Leads</h1>
            <p className="text-sm text-gray-500">
              {filtered.length} {filtered.length === 1 ? "lead" : "leads"} found
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={fetchEmails}
              className="inline-flex email-lead items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm hover:bg-gray-100"
              disabled={loading}
              title="Refresh"
            >
              <FiRefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={handleCopyAll}
              className="inline-flex email-lead items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              title="Copy all (comma-separated)"
            >
              {copiedAll ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
              {copiedAll ? "Copied All" : "Copy All"}
            </button>
            <button
              onClick={handleExportCsv}
              className="inline-flex email-lead items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm hover:bg-gray-100"
              title="Export CSV"
            >
              <FiDownload className="h-4 w-4" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-5">
          <div className="flex email-lead items-center rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm">
            <FiSearch className="mr-2 h-4 w-4 text-gray-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search emails…"
              className="w-full bg-transparent text-sm placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Card */}
        <div className="rounded-lg border border-gray-300 bg-white shadow-sm">
          {/* Table header */}
          <div className="grid email-lead grid-cols-12 border-b border-gray-200 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <div className="col-span-7 sm:col-span-6">Email</div>
            <div className="hidden col-span-4 sm:block">Created</div>
            <div className="col-span-5 sm:col-span-2 text-right">Copy</div>
          </div>

          {/* Rows */}
          {loading ? (
            <div className="p-6 text-center text-gray-500">Loading…</div>
          ) : filtered.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No results.</div>
          ) : (
            <ul>
              {filtered.map((item) => (
                <li
                  key={item._id}
                  className="grid email-lead grid-cols-12 items-center px-4 py-3 hover:bg-gray-50"
                >
                  <div className="col-span-7 truncate text-sm sm:col-span-6">{item.email}</div>
                  <div className="hidden col-span-4 text-xs text-gray-500 sm:block">
                    {item.createdAt ? new Date(item.createdAt).toLocaleString() : "—"}
                  </div>
                  <div className="col-span-5 flex justify-end sm:col-span-2">
                    <button
                      onClick={() => handleCopyOne(item)}
                      className="inline-flex email-lead items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-gray-100"
                      title="Copy email"
                    >
                      {copiedId === item._id ? (
                        <>
                          <FiCheck className="h-4 w-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <FiCopy className="h-4 w-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Hint */}
        <p className="mt-4 text-xs text-gray-500">
          Tip: “Copy All” copies the filtered list, comma-separated. Use search to narrow first.
        </p>
      </div>
    </div>
  );
}
