// InvestModal.jsx
export default function InvestModal({ plan, amount, setAmount, onClose, onSubmit }) {
    if (!plan) return null;
  
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-96 space-y-4">
          <h3 className="text-xl font-bold">Invest in {plan.name}</h3>
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={`Enter amount ($${plan.minInvestment} - $${plan.maxInvestment})`}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
              min={plan.minInvestment}
              max={plan.maxInvestment}
              required
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  