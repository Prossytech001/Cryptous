// PlanPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import "../../components/Plans/PlanCard.css"
import { RiShieldStarFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import Loader from "../../components/Loader/Loader";


const PlanPage = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loader, setLoader] = useState(true);
  const [amount, setAmount] = useState("");
  const api = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get(`${api}/api/plans`);
        setPlans(res.data);
       setLoader(false);
        // ✅ FIXED: res.data is the array
      } catch (err) {
        console.error("Failed to fetch plans", err);
      }
    };
    fetchPlans();
  }, []);

  const handleInvestClick = (plan) => {
    setSelectedPlan(plan);
  };

//   const handleSubmit = async () => {
//     try {
//       // You can customize this route depending on your backend
//       const res = await axios.post(`${api}/api/stakes/create`, {
//         amount: Number(amount),
//         plan: selectedPlan._id,
//       }, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//       });

//       alert("Stake created successfully!");
//       setAmount("");
//       setSelectedPlan(null);
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to stake");
//     }
//   };

const handleSubmit = async () => {
    if (!selectedPlan || !amount) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please select a plan and enter an amount.',
      });
      return;
    }
  
    try {
      const res = await axios.post(`${api}/api/stakes/create`, {
        amount: Number(amount),
        plan: selectedPlan._id,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // ✅ Success
      Swal.fire({
        icon: 'success',
        title: 'Stake Created!',
        text: 'Your investment has been successfully created.',
      });
  
      setAmount("");
      setSelectedPlan(null);
  
    } catch (err) {
      // ❌ Error
      let message = "Something went wrong.";
      if (err.response) {
        message = err.response.data.message || message;
      } else if (err.request) {
        message = "Network error. Please try again.";
      } else {
        message = err.message;
      }
  
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
      });
    }
  };

  if (loader) return <div><Loader/></div>;

  return (
    <div className="container-PLAN ">
      
      
      <h1 className="dashboard-heading-h"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-columns-gap plan-icon"><path fill-rule="evenodd" d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"></path></svg>Investment Plans</h1>
      
      <div className="card_hlder grid grid-cols-1 md:grid-cols-3 ">
        {Array.isArray(plans) && plans.map((plan) => (
          <div
            key={plan._id}
            className="Plan_card  shadow-lg rounded-2xl  hover:shadow-xl transition"
          >
            <div className="pamcon">
            <RiShieldStarFill className="planwin"/>
            
            <h2 className="phight">{plan.name}</h2>
            
            <p className="plan-like text-gray-600 mb-1">
              <strong>{(plan.dailyROI).toFixed(2)}%</strong>
            </p>
             </div>
             <div className="plap">
            <p className=" flex items-center gap-1 text-white mb-1">
              <FaCircleCheck className="palngood"/>
              Duration: <strong>{plan.durationDays} days</strong>
            </p>

            <p className="flex items-center gap-1 text-white mb-4">
              <FaCircleCheck className="palngood"/> 
               Minimun : ${plan.minInvestment} 
            </p>
            <p className=" flex items-center gap-1 text-white mb-4">
              <FaCircleCheck className="palngood"/>
              Maximun : ${plan.maxInvestment}
            </p>
             <p className=" flex items-center gap-1 text-white mb-4">
              <FaCircleCheck className="palngood"/>
             Daily Payout
            </p>
             <p className=" flex items-center gap-1 text-white mb-4">
              <FaCircleCheck className="palngood"/>
              Topup Available
            </p>
            <button
              onClick={() => handleInvestClick(plan)}
              className="plan-btn"
            >
              Invest Now
            </button>
            </div>
           
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="pop-con fixed inset-0  flex items-center justify-center z-1000">
          <div className="pop-main bg-white rounded-2xl p-6 w-96 shadow-2xl">
            <h2 className="text-xl font-bold mb-4">Invest in {selectedPlan.name}</h2>
            <input
              type="number"
              className="select-input w-full border p-2 rounded mb-4"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <button
                className="concel-btn bg-gray-300 px-4 py-2 rounded"
                onClick={() => setSelectedPlan(null)}
              >
                Cancel
              </button>
              <button
                className="submit-btn bg-green-600 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default PlanPage;
