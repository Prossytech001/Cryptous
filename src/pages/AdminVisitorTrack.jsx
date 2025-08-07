// import { useEffect, useState } from 'react';

// const ITEMS_PER_PAGE = 10;

// const AdminVisitorTrack = () => {
//   const [visitors, setVisitors] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//  const API = import.meta.env.VITE_API_URL


//   const totalPages = Math.ceil(visitors.length / ITEMS_PER_PAGE);
//   const currentVisitors = visitors.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   useEffect(() => {
//     fetch(`${API}/api/track-visitors`)
//       .then((res) => res.json())
//       .then((data) => {
//         setVisitors(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Failed to fetch visitor data', err);
//         setLoading(false);
//       });
//   }, []);

//   const changePage = (direction) => {
//     setCurrentPage((prev) =>
//       direction === 'next'
//         ? Math.min(prev + 1, totalPages)
//         : Math.max(prev - 1, 1)
//     );
//   };

//   return (
//     <div className="p-4 overflow-x-auto">
//       <h2 className="text-2xl font-bold mb-4">🌍 Visitor Activity Logs</h2>

//       {loading ? (
//         <p className="text-gray-500">Loading visitor data...</p>
//       ) : visitors.length === 0 ? (
//         <p className="text-gray-500">No visitors recorded yet.</p>
//       ) : (
//         <>
//           <table className="min-w-full table-auto border border-gray-200 text-sm rounded-md overflow-hidden">
//             <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
//               <tr>
//                 <th className="p-2 border">IP</th>
//                 <th className="p-2 border">Country</th>
//                 <th className="p-2 border">City</th>
//                 <th className="p-2 border">Region</th>
//                 <th className="p-2 border">Device</th>
//                 <th className="p-2 border">Browser</th>
//                 <th className="p-2 border">OS</th>
//                 <th className="p-2 border">Visited</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentVisitors.map((v, i) => (
//                 <tr
//                   key={i}
//                   className="even:bg-gray-50 dark:even:bg-gray-900 text-gray-800 dark:text-gray-300"
//                 >
//                   <td className="p-2 border">{v.ip}</td>
//                   <td className="p-2 border">{v.country}</td>
//                   <td className="p-2 border">{v.city}</td>
//                   <td className="p-2 border">{v.region}</td>
//                   <td className="p-2 border">{v.deviceType || 'N/A'}</td>
//                   <td className="p-2 border">
//                     {v.browser} {v.browserVersion}
//                   </td>
//                   <td className="p-2 border">
//                     {v.os} {v.osVersion}
//                   </td>
//                   <td className="p-2 border whitespace-nowrap">
//                     {new Date(v.timestamp).toLocaleString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination */}
//           <div className="flex justify-between items-center mt-4">
//             <button
//               onClick={() => changePage('prev')}
//               disabled={currentPage === 1}
//               className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded disabled:opacity-50"
//             >
//               ⬅ Prev
//             </button>
//             <span className="text-sm">
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={() => changePage('next')}
//               disabled={currentPage === totalPages}
//               className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded disabled:opacity-50"
//             >
//               Next ➡
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default AdminVisitorTrack;
import { useEffect, useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';

const ITEMS_PER_PAGE = 10;

const AdminVisitorTrack = () => {
  const [visitors, setVisitors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const API = import.meta.env.VITE_API_URL;

  const totalPages = Math.ceil(visitors.length / ITEMS_PER_PAGE);
  const currentVisitors = visitors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    fetch(`${API}/api/track-visitors`)
      .then((res) => res.json())
      .then((data) => {
        setVisitors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch visitor data', err);
        setLoading(false);
      });
  }, []);

  const changePage = (direction) => {
    setCurrentPage((prev) =>
      direction === 'next'
        ? Math.min(prev + 1, totalPages)
        : Math.max(prev - 1, 1)
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen  visitor-log">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visitor Logs</h2>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : visitors.length === 0 ? (
        <p className="text-gray-600">No visitor records yet.</p>
      ) : (
        <div className="bg-white rounded shadow overflow-hidden">
           <div className="adminUser-card rounded-xl shadow ">
          <div className="nk-tb-list">
            <div className="nk-tb-item ">
              <div className='plans-man'>
              <span className=" ">IP</span></div>
                <div className='plans-man'>
              <span className=" ">Country</span></div>
                <div className='plans-man'>
              <span className=" ">City</span></div>
                <div className='plans-man'>
              <span className=" ">Region</span></div>
                <div className='plans-man'>
              <span className=" ">Device</span></div>
                <div className='plans-man'>
              <span className=" ">Browser</span></div>
                <div className='plans-man'>
              <span className=" ">OS</span></div>
                <div className='plans-man'>
              <span className=" ">Visited</span></div>
                
              
            </div>
            <tbody>
              {currentVisitors.map((v, i) => (
                <div key={i} className="nk-tb-item  ">
                  <div className='nk-tb-col '>
              <span className="  ">{v.ip}</span></div>
                  <div className='nk-tb-col '>
              <span className="  ">{v.country}</span></div>
                  <div className='nk-tb-col '>
              <span className="  ">{v.city}</span></div>
                 <div className='nk-tb-col '>
              <span className="  ">{v.region}</span></div>
                 <div className='nk-tb-col '>
              <span className="  ">{v.deviceType || 'N/A'}</span></div>
                  <div className='nk-tb-col '>
              <span className="  ">{v.browser} {v.browserVersion}</span></div>
                 <div className='nk-tb-col '>
              <span className="  ">{v.os} {v.osVersion}</span></div>
                  <div className='nk-tb-col '>
              <span className="  ">
                    {new Date(v.timestamp).toLocaleString()}
                  </span></div>
                  
                </div>
              ))}
            </tbody>
          </div>
          </div>

          <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
            <span className="text-sm text-gray-600">
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, visitors.length)} of {visitors.length}
            </span>
            <div className="space-x-2">
              <button
                onClick={() => changePage('prev')}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <button
                onClick={() => changePage('next')}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVisitorTrack;
