// PlanCard.jsx
export default function PlanCard({ plan, onOpenModal }) {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl transition duration-300">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{plan.name}</h2>
        <div className="text-gray-600 space-y-1">
          <p><strong>Daily ROI:</strong> {plan.dailyROI * 100}%</p>
          <p><strong>Duration:</strong> {plan.durationDays} days</p>
          <p><strong>Min:</strong> ${plan.minInvestment}</p>
          <p><strong>Max:</strong> ${plan.maxInvestment}</p>
        </div>
        <button
          onClick={() => onOpenModal(plan)}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
        >
          Invest Now
        </button>
      </div>
    );
  }
  