// import React, { useEffect, useState } from "react";

// const StakeForm = () => {
//   const [amount, setAmount] = useState("");
//   const [selectedPlan, setSelectedPlan] = useState("");
//   const [plans, setPlans] = useState([]);
//   const [message, setMessage] = useState("");
//   const api = import.meta.env.VITE_API_URL;
//   const token = localStorage.getItem("authToken");

//   // Fetch plans from backend
//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const res = await fetch(`${api}/api/plans`); // Update URL if needed
//         const data = await res.json();
//         if (!res.ok) throw new Error(data.message || "Failed to fetch plans");
//         setPlans(data);
//       } catch (err) {
//         console.error("Error fetching plans:", err.message);
//         setMessage("Failed to load plans");
//       }
//     };

//     fetchPlans();
//   }, []);

//   const handleStake = async (e) => {
//     e.preventDefault();
//     const plan = plans.find((p) => p._id === selectedPlan);

//     if (!plan) {
//       return setMessage("Invalid plan selected.");
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/stakes/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           amount,
//           plan: selectedPlan,
//           dailyROI: plan.dailyROI,
//         }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Failed to create stake");

//       setMessage("Stake created successfully!");
//     } catch (err) {
//       setMessage("Error: " + err.message);
//     }
//     if (amount < selectedPlan.minAmount || amount > selectedPlan.maxAmount) {
//         alert(`Amount must be between ${selectedPlan.minAmount} and ${selectedPlan.maxAmount}`);
//         return;
//       }
      
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
//       <h2 className="text-2xl font-bold text-center">Create Stake</h2>

//       <form onSubmit={handleStake} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">Amount</label>
//           <input
//             type="number"
//             className="mt-1 w-full border px-3 py-2 rounded-md"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Select Plan</label>
//           <select
//             value={selectedPlan}
//             onChange={(e) => setSelectedPlan(e.target.value)}
//             className="mt-1 w-full border px-3 py-2 rounded-md"
//             required
//           >
//             <option value="">-- Choose a Plan --</option>
//             {plans.map((plan) => (
//               <option key={plan._id} value={plan._id}>
//                 {plan.name} - ROI: {plan.dailyROI * 100}% for {plan.durationDays} days
//               </option>
//             ))}
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
//         >
//           Stake Now
//         </button>
//       </form>

//       {message && <p className="text-center text-red-500">{message}</p>}
//     </div>
//   );
// };

// export default StakeForm;

import React, { useEffect, useState } from "react";

const StakeForm = () => {
  const [amount, setAmount] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [plans, setPlans] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("authToken");

  // Fetch plans from backend
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(`${api}/api/plans`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch plans");
        setPlans(data);
      } catch (err) {
        console.error("Error fetching plans:", err.message);
        setMessage("Failed to load plans");
      }
    };

    fetchPlans();
  }, []);

  const plan = plans.find((p) => p._id === selectedPlan);

  const handleAmountChange = (e) => {
    const value = Number(e.target.value);
    setAmount(value);

    if (plan) {
      if (value < plan.minInvestment) {
        setError(`Minimum amount is $${plan.minInvestment} Maximum amount is $${plan.maxInvestment}`);
      } else if (value > plan.maxInvestment) {
        setError(`Maximum amount is $${plan.maxInvestment}`);
      } else {
        setError("");
      }
    }
  };

  const handleStake = async (e) => {
    e.preventDefault();

    if (!plan) {
      return setMessage("Invalid plan selected.");
    }

    if (amount < plan.minAmount || amount > plan.maxAmount) {
      return setError(`Amount must be between $${plan.minAmount} and $${plan.maxAmount}`);
    }

    try {
      const res = await fetch(`${api}/api/stakes/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount,
          plan: selectedPlan,
          dailyROI: plan.dailyROI,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to create stake");

      setMessage("Stake created successfully!");
      setAmount("");
      setSelectedPlan("");
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-center">Create Stake</h2>

      <form onSubmit={handleStake} className="space-y-4">

      <div>
          <label className="block text-sm font-medium">Select Plan</label>
          <select
            value={selectedPlan}
            onChange={(e) => {
              setSelectedPlan(e.target.value);
              setError(""); // reset error when changing plan
              setAmount(""); // reset amount when changing plan
            }}
            className="mt-1 w-full border px-3 py-2 rounded-md"
            required
          >
            <option value="">-- Choose a Plan --</option>
            {plans.map((plan) => (
              <option key={plan._id} value={plan._id}>
                {plan.name} - ROI: {plan.dailyROI}% for {plan.durationDays} days
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Amount</label>
          <input
            type="number"
            className="mt-1 w-full border px-3 py-2 rounded-md"
            value={amount}
            onChange={handleAmountChange}
            placeholder={ "Enter amount"}
            required
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

       

        <button
          type="submit"
          disabled={!!error || !amount || !selectedPlan}
          className={`w-full py-2 rounded-lg font-semibold ${
            !!error || !amount || !selectedPlan
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Stake Now
        </button>
      </form>

      {message && <p className="text-center text-green-600">{message}</p>}
    </div>
  );
};

export default StakeForm;
