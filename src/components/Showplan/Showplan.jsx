import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Authcontext";
import "./Showplan.css"
import Loader from "../Loader/Loader";
import img from "../../../public/pig.jpg"
import Footer from "../Footer/Footer";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const apiUrl = import.meta.env.VITE_API_URL; // Adjust this if needed

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/plans`); // Adjust if needed
        const data = await res.json();
  
        // If data is in a nested field, extract it
        setPlans(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch plans:', error);
        setPlans([]);
      }
    };
  
    fetchPlans();
  }, []);
  
  const handleInvest = (planId) => {
    if (!user) {
      navigate("/signup");
    } else {
      // Redirect to invest with planId (or open modal, if preferred)
      navigate(`/dashboard/invest/${planId}`);
    }
  };

  return (
    <>
    <div className="container__show">
       
      <h1 className="text-3xl font-bold text-center mb-8">Investment Plans</h1>

      <div className="shows__container">
        {Array.isArray(plans) && plans.length > 0 ? (
          plans.map((plan) => (
            <div
              key={plan._id}
              className="contents__show"
            >
              <div className="show-content flex">
                <div>
                  <h2 className="show-name">{plan.name}</h2>
                  <p className="show-p">{plan.description}</p>
                  <div className="min-max">
                    <p>Min Amount{plan.minInvestment}</p>
                    <p>Max Amount{plan.maxInvestment}</p>
                  </div>
                  <button
                  onClick={() => handleInvest(plan._id)}
                  className="show--btn"
                >
                  Invest Now
                </button>
                </div>
                 <div className="plan-valeu">
                 <p className="show-val">
                    <span className="valeu-stal">{plan.dailyROI}%</span>
                     Daily ROI:
                    </p>
                    <p className="show-val">
                    <span className="valeu-stal">{plan.durationDays}days</span>
                     Duration:
                    </p>
                 
                 </div>
                 
                
                
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500"><Loader/></p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};


export default Plans;
