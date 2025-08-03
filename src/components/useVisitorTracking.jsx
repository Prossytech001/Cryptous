// import { useEffect } from 'react';

// const useVisitorTracking = () => {
// useEffect(() => {
//   const alreadyTracked = sessionStorage.getItem('visitorTracked');
//   if (alreadyTracked) return;

//   console.log("👀 Running visitor tracking...");

//   fetch('https://ipapi.co/json/')
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("🌐 IP Data:", data);
//       return fetch('/api/track-visit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           ip: data.ip,
//           country: data.country_name,
//           region: data.region,
//           city: data.city,
//           isp: data.org,
//         }),
//       });
//     })
//     .then(() => {
//       console.log("✅ Visitor tracked successfully");
//       sessionStorage.setItem('visitorTracked', 'true');
//     })
//     .catch((err) => {
//       console.error("❌ Visitor tracking failed", err);
//     });
// }, []);
// }
// export default useVisitorTracking;
// import { useEffect } from 'react';

// const useVisitorTracking = () => {

//     const API = import.meta.env.VITE_API_URL
//   useEffect(() => {
//     const alreadyTracked = sessionStorage.getItem('visitorTracked');
//     if (alreadyTracked) return;

//     console.log("👀 Visitor tracking triggered");

//     fetch('https://ipapi.co/json/')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("🌍 IP data:", data);
//         return fetch(`${API}/api/track-visit`, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             ip: data.ip,
//             country: data.country_name,
//             region: data.region,
//             city: data.city,
//             isp: data.org,
//           }),
//         });
//       })
//       .then(() => {
//         console.log("✅ Visitor tracked successfully");
//         sessionStorage.setItem('visitorTracked', 'true');
//       })
//       .catch((err) => {
//         console.error("❌ Visitor tracking failed", err);
//       });
//   }, []);
// };
// export default useVisitorTracking;
import { useEffect } from 'react';

let hasTracked = false; // 👈 Prevent duplicate tracking in dev mode

const useVisitorTracking = () => {
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (typeof window === 'undefined') return; // 🛡️ SSR protection
    if (hasTracked) return;                    // 🛡️ React Strict Mode dev protection
    if (sessionStorage.getItem('visitorTracked')) return;

    hasTracked = true; // ✅ mark as tracked

    console.log("👀 Visitor tracking triggered");

    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        console.log("🌍 IP data:", data);
        return fetch(`${API}/api/track-visit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ip: data.ip,
            country: data.country_name,
            region: data.region,
            city: data.city,
            isp: data.org,
          }),
        });
      })
      .then(() => {
        console.log("✅ Visitor tracked successfully");
        sessionStorage.setItem('visitorTracked', 'true');
      })
      .catch((err) => {
        console.error("❌ Visitor tracking failed", err);
      });
  }, []);
};

export default useVisitorTracking;
