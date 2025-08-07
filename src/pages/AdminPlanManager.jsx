import { useEffect, useState } from "react";
import { FiPlus, FiEdit, FiTrash2 } from "react-icons/fi";

const API = import.meta.env.VITE_API_URL;

const defaultForm = {
  name: "",
  minInvestment: "",
  maxInvestment: "",
  dailyROI: "",
  durationDays: "",
  description: "",
};

const AdminPlanManager = () => {
  const [plans, setPlans] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [editingId, setEditingId] = useState(null);

  const fetchPlans = async () => {
    const res = await fetch(`${API}/api/plans`);
    const data = await res.json();
    setPlans(data);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const openModal = (plan = null) => {
    if (plan) {
      setForm(plan);
      setEditingId(plan._id);
    } else {
      setForm(defaultForm);
      setEditingId(null);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setForm(defaultForm);
    setEditingId(null);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `${API}/api/plans/${editingId}`
      : `${API}/api/plans`;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    await fetchPlans();
    closeModal();
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this plan?")) return;
    await fetch(`${API}/api/plans/${id}`, { method: "DELETE" });
    await fetchPlans();
  };

  return (
    <div className="plan-mangement">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">📋 Plan Management</h2>
        <button
          onClick={() => openModal()}
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <FiPlus /> Add Plan
        </button>
      </div>

      <div className="overflow-x-autoadminUser-card  bg-white shadow rounded">

        <div className="nk-tb-list">
          <div className="nk-tb-item ">
            <div className='plans-man'>
              <span className=" ">Name</span></div>
             <div className=' plans-man'>
              <span className=" ">Min Invest</span></div>
             <div className='plans-man'>
              <span className=" ">Max Invest</span></div>
              <div className='plans-man'>
              <span className=" ">Daily ROI (%)</span></div>
              <div className='plans-man'>
              <span className=" ">Duration (days)</span></div>
              <div className='plans-man'>
              <span className=" ">Description</span></div>
              <div className='plans-man'>
              <span className=" ">Actions</span></div>
            
          </div>
          <tbody>
            {plans.map((plan) => (
              <div  key={plan._id} className="nk-tb-item  ">
                <div className='nk-tb-col '>
              <span className="  ">{plan.name}</span></div>
               <div className='nk-tb-col'>
              <span className=" ">{plan.minInvestment}</span></div>
                <div className='nk-tb-col'>
              <span className=" ">{plan.maxInvestment}</span></div>
               <div className='nk-tb-col'>
              <span className=" ">{plan.dailyROI}</span></div>
               <div className='nk-tb-col'>
              <span className=" ">{plan.durationDays}</span></div>
                <div className='nk-tb-col description-plans'>
              <span className=" ">{plan.description}</span></div>
               <div className='nk-tb-col'>
              <span className=" ">
                  <button
                    onClick={() => openModal(plan)}
                    className="text-blue-600 text-[20px] hover:underline"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(plan._id)}
                    className="text-red-600 text-[20px]  hover:underline"
                  >
                    <FiTrash2 />
                  </button>
               </span></div>
              </div >
            ))}
          </tbody>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-5000">
          <div className="bg-white add-plan rounded-lg p-6 w-full max-w-md shadow-lg">
            <h3 className="text-lg font-bold mb-4">
              {editingId ? "Edit Plan" : "Add Plan"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Plan Name"
                required
                className="w-full p-2 border add-plan-input rounded"
              />
              <input
                name="minInvestment"
                type="number"
                value={form.minInvestment}
                onChange={handleChange}
                placeholder="Minimum Investment"
                required
                className="w-full p-2 border add-plan-input  rounded"
              />
              <input
                name="maxInvestment"
                type="number"
                value={form.maxInvestment}
                onChange={handleChange}
                placeholder="Maximum Investment"
                required
                className="w-full p-2 border add-plan-input  rounded"
              />
              <input
                name="dailyROI"
                type="number"
                value={form.dailyROI}
                onChange={handleChange}
                placeholder="Daily ROI (%)"
                required
                className="w-full p-2 border add-plan-input  rounded"
              />
              <input
                name="durationDays"
                type="number"
                value={form.durationDays}
                onChange={handleChange}
                placeholder="Duration in Days"
                required
                className="w-full p-2 border add-plan-input  rounded"
              />
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
                required
                className="w-full p-2 border add-plan-inputs rounded"
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border add-plan-btn  rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 add-plan-btn text-white rounded"
                >
                  {editingId ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPlanManager;
