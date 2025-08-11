// import { useEffect, useState } from "react";
// import { FiPlus, FiEdit, FiTrash2 } from "react-icons/fi";

// const API = import.meta.env.VITE_API_URL;

// const defaultForm = {
//   name: "",
//   minInvestment: "",
//   maxInvestment: "",
//   dailyROI: "",
//   durationDays: "",
//   description: "",
// };

// const AdminPlanManager = () => {
//   const [plans, setPlans] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [form, setForm] = useState(defaultForm);
//   const [editingId, setEditingId] = useState(null);

//   const fetchPlans = async () => {
//     const res = await fetch(`${API}/api/plans`);
//     const data = await res.json();
//     setPlans(data);
//   };

//   useEffect(() => {
//     fetchPlans();
//   }, []);

//   const openModal = (plan = null) => {
//     if (plan) {
//       setForm(plan);
//       setEditingId(plan._id);
//     } else {
//       setForm(defaultForm);
//       setEditingId(null);
//     }
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setForm(defaultForm);
//     setEditingId(null);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const method = editingId ? "PUT" : "POST";
//     const url = editingId
//       ? `${API}/api/plans/${editingId}`
//       : `${API}/api/plans`;

//     await fetch(url, {
//       method,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     await fetchPlans();
//     closeModal();
//   };

//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to delete this plan?")) return;
//     await fetch(`${API}/api/plans/${id}`, { method: "DELETE" });
//     await fetchPlans();
//   };

//   return (
//     <div className="plan-mangement">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">📋 Plan Management</h2>
//         <button
//           onClick={() => openModal()}
//           className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
//         >
//           <FiPlus /> Add Plan
//         </button>
//       </div>

//       <div className="overflow-x-autoadminUser-card  bg-white shadow rounded">

//         <div className="nk-tb-list">
//           <div className="nk-tb-item ">
//             <div className='plans-man'>
//               <span className=" ">Name</span></div>
//              <div className=' plans-man'>
//               <span className=" ">Min Invest</span></div>
//              <div className='plans-man'>
//               <span className=" ">Max Invest</span></div>
//               <div className='plans-man'>
//               <span className=" ">Daily ROI (%)</span></div>
//               <div className='plans-man'>
//               <span className=" ">Duration (days)</span></div>
//               <div className='plans-man'>
//               <span className=" ">Description</span></div>
//               <div className='plans-man'>
//               <span className=" ">Actions</span></div>
            
//           </div>
//           <tbody>
//             {plans.map((plan) => (
//               <div  key={plan._id} className="nk-tb-item  ">
//                 <div className='nk-tb-col '>
//               <span className="  ">{plan.name}</span></div>
//                <div className='nk-tb-col'>
//               <span className=" ">{plan.minInvestment}</span></div>
//                 <div className='nk-tb-col'>
//               <span className=" ">{plan.maxInvestment}</span></div>
//                <div className='nk-tb-col'>
//               <span className=" ">{plan.dailyROI}</span></div>
//                <div className='nk-tb-col'>
//               <span className=" ">{plan.durationDays}</span></div>
//                 <div className='nk-tb-col description-plans'>
//               <span className=" ">{plan.description}</span></div>
//                <div className='nk-tb-col'>
//               <span className=" ">
//                   <button
//                     onClick={() => openModal(plan)}
//                     className="text-blue-600 text-[20px] hover:underline"
//                   >
//                     <FiEdit />
//                   </button>
//                   <button
//                     onClick={() => handleDelete(plan._id)}
//                     className="text-red-600 text-[20px]  hover:underline"
//                   >
//                     <FiTrash2 />
//                   </button>
//                </span></div>
//               </div >
//             ))}
//           </tbody>
//         </div>
//       </div>

//       {/* Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-5000">
//           <div className="bg-white add-plan rounded-lg p-6 w-full max-w-md shadow-lg">
//             <h3 className="text-lg font-bold mb-4">
//               {editingId ? "Edit Plan" : "Add Plan"}
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-3">
//               <input
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Plan Name"
//                 required
//                 className="w-full p-2 border add-plan-input rounded"
//               />
//               <input
//                 name="minInvestment"
//                 type="number"
//                 value={form.minInvestment}
//                 onChange={handleChange}
//                 placeholder="Minimum Investment"
//                 required
//                 className="w-full p-2 border add-plan-input  rounded"
//               />
//               <input
//                 name="maxInvestment"
//                 type="number"
//                 value={form.maxInvestment}
//                 onChange={handleChange}
//                 placeholder="Maximum Investment"
//                 required
//                 className="w-full p-2 border add-plan-input  rounded"
//               />
//               <input
//                 name="dailyROI"
//                 type="number"
//                 value={form.dailyROI}
//                 onChange={handleChange}
//                 placeholder="Daily ROI (%)"
//                 required
//                 className="w-full p-2 border add-plan-input  rounded"
//               />
//               <input
//                 name="durationDays"
//                 type="number"
//                 value={form.durationDays}
//                 onChange={handleChange}
//                 placeholder="Duration in Days"
//                 required
//                 className="w-full p-2 border add-plan-input  rounded"
//               />
//               <textarea
//                 name="description"
//                 value={form.description}
//                 onChange={handleChange}
//                 placeholder="Description"
//                 required
//                 className="w-full p-2 border add-plan-inputs rounded"
//               />
//               <div className="flex justify-end gap-3 mt-4">
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="px-4 py-2 border add-plan-btn  rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 add-plan-btn text-white rounded"
//                 >
//                   {editingId ? "Update" : "Create"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPlanManager;
import { useEffect, useState } from "react";
import { FiPlus, FiEdit, FiTrash2, FiMoreVertical } from "react-icons/fi";

const API = import.meta.env.VITE_API_URL;

const defaultForm = {
  name: "",
  minInvestment: "",
  maxInvestment: "",
  dailyROI: "",
  durationDays: "",
  description: "",
};

const fmtNum = (v) => {
  const n = Number(v);
  return Number.isFinite(n) ? n.toLocaleString() : "--";
};

export default function AdminPlanManager() {
  const [plans, setPlans] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [editingId, setEditingId] = useState(null);
  const [sheetPlan, setSheetPlan] = useState(null); // for tablet/mobile bottom sheet
  const [loading, setLoading] = useState(false);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/plans`);
      const data = await res.json();
      setPlans(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const openModal = (plan = null) => {
    if (plan) {
      const {
        _id,
        name = "",
        minInvestment = "",
        maxInvestment = "",
        dailyROI = "",
        durationDays = "",
        description = "",
      } = plan;
      setForm({
        name,
        minInvestment: String(minInvestment),
        maxInvestment: String(maxInvestment),
        dailyROI: String(dailyROI),
        durationDays: String(durationDays),
        description,
      });
      setEditingId(_id);
    } else {
      setForm(defaultForm);
      setEditingId(null);
    }
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setForm(defaultForm);
    setEditingId(null);
    document.body.style.overflow = "";
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.name.trim(),
      minInvestment: Number(form.minInvestment),
      maxInvestment: Number(form.maxInvestment),
      dailyROI: Number(form.dailyROI),
      durationDays: Number(form.durationDays),
      description: form.description.trim(),
    };

    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `${API}/api/plans/${editingId}` : `${API}/api/plans`;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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
    <div className="plan-management">
      {/* Header */}
      <div className="plan-manage-head flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">📋 Plan Management</h2>
        <button
          onClick={() => openModal()}
          className="add-plans bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <FiPlus /> Add Plan
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white w-full shadow rounded border border-gray-100">
        <div className="table-responsive overflow-x-auto">
          <div className="min-w-full w-full text-left">
            <div className="text-xs uppercase text-gray-500">
              <div className="headspan border-b border-gray-100">
                <span className="py-2 px-3">Name</span>
                {/* <th className="py-2 px-3">Min Invest</th> */}
                {/* <th className="py-2 px-3 hidden md:table-cell">Max Invest</th> */}
                {/* <th className="py-2 px-3">Daily ROI (%)</th>
                <th className="py-2 px-3">Duration (days)</th> */}
                <span className="py-2 px-3 hidden md:table-cell">Description</span>
                <span className="py-2 px-3 text-right">Actions</span>
              </div>
            </div>

            <div className="text-sm text-gray-800">
              {loading &&
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-gray-50">
                    <td className="py-3 px-3">
                      <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                    </td>
                    <td className="py-3 px-3">
                      <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                    </td>
                    <td className="py-3 px-3 hidden md:table-cell">
                      <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                    </td>
                    <td className="py-3 px-3">
                      <div className="h-3 w-12 bg-gray-200 rounded animate-pulse" />
                    </td>
                    <td className="py-3 px-3">
                      <div className="h-3 w-12 bg-gray-200 rounded animate-pulse" />
                    </td>
                    <td className="py-3 px-3 hidden md:table-cell">
                      <div className="h-3 w-40 bg-gray-200 rounded animate-pulse" />
                    </td>
                    <td className="py-3 px-3 text-right">
                      <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse inline-block" />
                    </td>
                  </tr>
                ))}

              {!loading &&
                plans.map((plan) => (
                  <div key={plan._id} className="flex justify-between w-full border-b border-gray-50 align-top">
                    <div className="py-3 px-3">{plan.name}</div>
                    {/* <td className="py-3 px-3">{fmtNum(plan.minInvestment)}</td> */}
                    {/* <td className="py-3 px-3 hidden md:table-cell">
                      {fmtNum(plan.maxInvestment)}
                    </td> */}
                    {/* <td className="py-3 px-3">{Number(plan.dailyROI)}</td>
                    <td className="py-3 px-3">{Number(plan.durationDays)}</td> */}
                    <div className="py-3 px-3 hidden md:table-cell">
                      <span className="inline-block max-w-[340px] align-bottom truncate">
                        {plan.description}
                      </span>
                    </div>
                    <div className="py-3 px-3">
                      <div className="flex items-center justify-end gap-3">
                        {/* Desktop actions */}
                        <div className="hidden md:flex items-center gap-3">
                          <button
                            onClick={() => openModal(plan)}
                            className="text-blue-600 text-[18px] hover:opacity-80"
                            title="Edit"
                          >
                            <FiEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(plan._id)}
                            className="text-red-600 text-[18px] hover:opacity-80"
                            title="Delete"
                          >
                            <FiTrash2 />
                          </button>
                        </div>

                        {/* Tablet/Mobile kebab */}
                        <button
                          className="md:hidden inline-flex items-center justify-center h-8 w-8 rounded-full border border-gray-200"
                          aria-label="More"
                          onClick={() => setSheetPlan(plan)}
                        >
                          <FiMoreVertical />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

              {!loading && !plans.length && (
                <tr>
                  <td colSpan={7} className="py-6 px-3 text-center text-gray-400">
                    No plans yet. Click <b>Add Plan</b> to create one.
                  </td>
                </tr>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[5000] bg-black/40 overflow-y-auto">
          <div className="min-h-full flex items-center justify-center p-4">
            <div className="  bg-white rounded-lg w-full max-w-md shadow-lg max-h-[80vh] overflow-y-auto">
              <div className="add-plan-inputss p-6">
                <h3 className="text-lg font-bold mb-4">
                  {editingId ? "Edit Plan" : "Add Plan"}
                </h3>

                <form onSubmit={handleSubmit} className="plan-form space-y-3">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Plan Name"
                    required
                    className=" w-full p-2 border rounded"
                  />
                  <input
                    name="minInvestment"
                    type="number"
                    min="0"
                    value={form.minInvestment}
                    onChange={handleChange}
                    placeholder="Minimum Investment"
                    required
                    className="w-full p-2 border rounded"
                  />
                  <input
                    name="maxInvestment"
                    type="number"
                    min={form.minInvestment || 0}
                    value={form.maxInvestment}
                    onChange={handleChange}
                    placeholder="Maximum Investment"
                    required
                    className="w-full p-2 border rounded"
                  />
                  <input
                    name="dailyROI"
                    type="number"
                    step="0.01"
                    value={form.dailyROI}
                    onChange={handleChange}
                    placeholder="Daily ROI (%)"
                    required
                    className="w-full p-2 border rounded"
                  />
                  <input
                    name="durationDays"
                    type="number"
                    min="1"
                    value={form.durationDays}
                    onChange={handleChange}
                    placeholder="Duration in Days"
                    required
                    className="w-full p-2 border rounded"
                  />
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                    className="w-full p-2 border rounded"
                    rows={4}
                  />

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 border rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="add-plans  px-4 py-2 bg-blue-600 text-white rounded"
                    >
                      {editingId ? "Update" : "Create"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Sheet for tablet/mobile (kebab) */}
      {sheetPlan && (
        <div className="fixed inset-0 z-[6000]">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Close"
            onClick={() => setSheetPlan(null)}
          />

          {/* Sheet Panel */}
          <div className="absolute sheet-plans inset-x-0 bottom-0 rounded-t-2xl bg-white shadow-xl">
            <div className="mx-auto max-w-lg p-5">
              <div className="mx-auto h-1.5 w-12 rounded-full bg-gray-300 mb-4" />
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-base font-semibold">{sheetPlan.name}</h4>
                <button
                  className=" add-plans text-sm text-gray-500"
                  onClick={() => setSheetPlan(null)}
                >
                  Close
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-gray-50">
                  <p className="text-gray-500">Min Invest</p>
                  <p className="font-medium">{fmtNum(sheetPlan.minInvestment)}</p>
                </div>
                <div className="p-3 rounded-lg bg-gray-50">
                  <p className="text-gray-500">Max Invest</p>
                  <p className="font-medium">{fmtNum(sheetPlan.maxInvestment)}</p>
                </div>
                <div className="p-3 rounded-lg bg-gray-50">
                  <p className="text-gray-500">Daily ROI (%)</p>
                  <p className="font-medium">{Number(sheetPlan.dailyROI)}</p>
                </div>
                <div className="p-3 rounded-lg bg-gray-50">
                  <p className="text-gray-500">Duration (days)</p>
                  <p className="font-medium">{Number(sheetPlan.durationDays)}</p>
                </div>
                <div className="col-span-2 p-3 rounded-lg bg-gray-50">
                  <p className="text-gray-500 mb-1">Description</p>
                  <p className="font-medium leading-relaxed break-words">
                    {sheetPlan.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 mt-4">
                <button
                  onClick={() => {
                    setSheetPlan(null);
                    openModal(sheetPlan);
                  }}
                  className="add-plans  px-4 py-2 rounded border"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    const id = sheetPlan._id;
                    setSheetPlan(null);
                    handleDelete(id);
                  }}
                  className="add-plans  px-4 py-2 rounded bg-red-600 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
