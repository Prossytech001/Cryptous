// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ReferralRewards = () => {
//   const [totalReward, setTotalReward] = useState(0);
//   const [referredUsers, setReferredUsers] = useState([]);
  

//   useEffect(() => {
//     const fetchReferralData = async () => {
//       try {
//         const res = await axios.get("/api/users/reward", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//           }
//         });
//         setTotalReward(res.data.totalReward);
//         setReferredUsers(res.data.referredUsers);
//       } catch (error) {
//         console.error("Failed to fetch referral data", error);
//       }
//     };

//     fetchReferralData();
//   }, []);

//   return (
//     <div className="p-6 bg-[#0f1116] min-h-screen text-white">
//       <h1 className="text-3xl font-bold mb-6">Referral Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//         <div className="bg-[#1c1f26] p-6 rounded-xl shadow-lg border border-yellow-500">
//           <h2 className="text-xl mb-2">Total Referral Reward</h2>
//           <p className="text-2xl font-semibold text-yellow-400">${totalReward}</p>
//         </div>

//         <div className="bg-[#1c1f26] p-6 rounded-xl shadow-lg border border-yellow-500">
//           <h2 className="text-xl mb-4">Referred Users</h2>
//           {/* {referredUsers.length === 0 ? (
//             <p>No referrals yet.</p>
//           ) : (
//             <ul className="list-disc list-inside">
//               {referredUsers.map((user, index) => (
//                 <li key={index} className="text-white capitalize">{user.username}</li>
//               ))}
//             </ul>
//           )} */}
//           {Array.isArray(referredUsers) && referredUsers.length === 0 ? (
//   <p>No referrals yet.</p>
// ) : (
//   <ul className="list-disc list-inside">
//     {referredUsers?.map((user, index) => (
//       <li key={index} className="text-white capitalize">{user.username}</li>
//     ))}
//   </ul>
// )}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReferralRewards;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosCheckmarkCircle } from "react-icons/io";
import ReferralSection from "../components/ReferralSection";
const ReferralRewards = () => {
  const [totalReward, setTotalReward] = useState(null); // Changed to null for clarity
  const [referredUsers, setReferredUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for UX
   const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchReferralData = async () => {
      try {
        const res = await axios.get(`${API}/api/users/reward`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        console.log("Fetched referral data:", res.data);

        setTotalReward(res.data.totalReward);
        setReferredUsers(res.data.referredUsers || []);
      } catch (error) {
        console.error("Failed to fetch referral data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReferralData();
  }, []);

  return (
    <div className="referral-contain">
      
       <h1 className="dashboard-heading-h  mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-columns-gap plan-icon"><path fill-rule="evenodd" d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"></path></svg>Reward Dashboard </h1>
       <div className="reward-content">

      {/* <svg width="64px" height="64px" viewBox="0 0 64 64" id="Flat" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect height="48" rx="2" ry="2" style="fill:#c1272d" width="58" x="3" y="8"></rect><rect height="6" style="fill:#ffcd62" width="58" x="3" y="29"></rect><rect height="48" style="fill:#ffcd62" width="6" x="29" y="8"></rect><path d="M32,20.686h0A8,8,0,0,0,32,32h0a8,8,0,0,0,0-11.314Z" style="fill:#ef4037"></path><path d="M32,32h0a8,8,0,0,1-11.314,0h0A8,8,0,0,1,32,32Z" style="fill:#ef4037"></path><path d="M43.314,32h0A8,8,0,0,1,32,32h0a8,8,0,0,1,11.314,0Z" style="fill:#ef4037"></path><path d="M32,32h0a8,8,0,0,0,0,11.314h0A8,8,0,0,0,32,32Z" style="fill:#ef4037"></path><path d="M40,24h0a0,0,0,0,1,0,0v0a8,8,0,0,1-8,8h0a0,0,0,0,1,0,0v0A8,8,0,0,1,40,24Z" style="fill:#ffac00"></path><path d="M24,24h0a8,8,0,0,1,8,8v0a0,0,0,0,1,0,0h0a8,8,0,0,1-8-8v0A0,0,0,0,1,24,24Z" style="fill:#ffac00"></path><path d="M32,32h0a8,8,0,0,1,8,8v0a0,0,0,0,1,0,0h0a8,8,0,0,1-8-8v0A0,0,0,0,1,32,32Z" style="fill:#ffac00"></path><path d="M32,32h0a0,0,0,0,1,0,0v0a8,8,0,0,1-8,8h0a0,0,0,0,1,0,0v0A8,8,0,0,1,32,32Z" style="fill:#ffac00"></path></g></svg> */}
       <img src="./cryptoimg/reward.png" alt="" width="150" height="150"/>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className=" w-full ">
          <div className="amount-reward ">
            
            <p className="first-amount-reward">
              ${totalReward !== null ? totalReward : "0"}
            </p>
            <h2 className="Total-Referral-Reward">Total Referral Reward</h2>
          </div>

          <div className="referred-users-content">
            <h2 className="referral-user">Referred Users</h2>
            {Array.isArray(referredUsers) && referredUsers.length > 0 ? (
              <ul className="list-disc  list-inside">
                {referredUsers.map((user, index) => (
                  <li key={index} className="text-white flex items-center capitalize cap-user">
                    <IoIosCheckmarkCircle className="invest_icons"/>
                    {user.username}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-reward">No referrals yet.</p>
            )}
          </div>
        </div>
      )}
       </div>
        <ReferralSection />
    </div>
  );
};

export default ReferralRewards;
