// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminUsers = () => {
//   const api = import.meta.env.VITE_API_URL;
//   const token = localStorage.getItem('adminToken');
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get(`${api}/api/admin/users`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setUsers(res.data);
//       } catch (err) {
//         setError('Failed to fetch users');
//         console.error(err);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleToggleStatus = (id) => {
//     // Call backend toggle endpoint here
//     alert(`Toggle status for user: ${id}`);
//   };

//   const handleEdit = (id) => {
//     // Navigate or open modal
//     alert(`Edit user: ${id}`);
//   };

//   const handleDelete = (id) => {
//     if (confirm('Are you sure you want to delete this user?')) {
//       // Call backend delete endpoint here
//       alert(`Delete user: ${id}`);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold text-blue-800 mb-4">All Users</h1>

//       {error && <div className="text-red-600 mb-4">{error}</div>}

//       <div className="bg-white rounded-xl shadow overflow-x-auto">
//         <table className="min-w-full text-sm divide-y divide-gray-200">
//           <thead className="bg-gray-100 text-xs font-semibold uppercase text-gray-600">
//             <tr>
//               <th className="px-6 py-3 text-left">Username</th>
//               <th className="px-6 py-3 text-left">Email</th>
//               <th className="px-6 py-3 text-left">Status</th>
//               <th className="px-6 py-3 text-left">Role</th>
//               <th className="px-6 py-3 text-left">Created</th>
//               <th className="px-6 py-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {users.map((user) => (
//               <tr key={user._id} className="hover:bg-gray-50">
//                 <td className="px-6 py-3">{user.username}</td>
//                 <td className="px-6 py-3">{user.email}</td>
//                 <td className="px-6 py-3">
//                   <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.isVerified ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//                     {user.isVerified ? 'Active' : 'Inactive'}
//                   </span>
//                 </td>
//                 <td className="px-6 py-3 capitalize">{user.role || 'user'}</td>
//                 <td className="px-6 py-3">{new Date(user.createdAt).toLocaleDateString()}</td>
//                 <td className="px-6 py-3 space-x-2">
//                   <button onClick={() => handleEdit(user._id)} className="text-blue-600 hover:underline">✏️</button>
//                   <button onClick={() => handleToggleStatus(user._id)} className="text-yellow-600 hover:underline">🔄</button>
//                   <button onClick={() => handleDelete(user._id)} className="text-red-600 hover:underline">❌</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminUsers;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../components/AdminDashboard/AdminUser.css"

const AdminUsers = () => {
  const api = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('adminToken');
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [formData, setFormData] = useState({ username: '', email: '', role: '' , balance: ''});
  const [error, setError] = useState('');
  const [viewUserId, setViewUserId] = useState(20);
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${api}/api/admin/users`, { headers });
      setUsers(res.data);
    } catch (err) {
      setError('Failed to fetch users');
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      await axios.patch(`${api}/api/admin/users/${id}/status`, {}, { headers });
      fetchUsers();
    } catch (err) {
      setError('Failed to toggle status');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`${api}/api/admin/users/${id}`, { headers });
        fetchUsers();
      } catch (err) {
        setError('Failed to delete user');
      }
    }
  };

  const startEdit = (user) => {
    setEditUserId(user._id);
    setFormData({
      username: user.username,
      email: user.email,
      role: user.role || 'user',
      balance: user.balance
    });
  };

  const cancelEdit = () => {
    setEditUserId(null);
    setFormData({ username: '', email: '', role: '' });
  };

  const handleEditSubmit = async (id) => {
    try {
      await axios.put(`${api}/api/admin/users/${id}`, formData, { headers });
      fetchUsers();
      cancelEdit();
    } catch (err) {
      setError('Failed to update user');
    }
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleViewMore = () => {
    if (viewUserId >= users.length) {
      setViewUserId(20); // Collapse
    } else {
      setViewUserId(prev => Math.min(prev + 10, users.length)); // Show more
    }
  }

  return (
    <div className="admin-users-content" >
      <h1 className="text-2xl font-bold text-blue-800 mb-4">All Users</h1>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      <div className="adminUser-card rounded-xl shadow overflow-x-auto">
        <table className="adminUser-head ">
          <thead className="adminUser-head1 text-xs font-semibold uppercase ">
            <tr className='adminUser-head1'>
              <th className="px-6 py-3 text-left">Username</th>
              <th className="px-6 py-3 text-left">Email</th>
              
              <th className="px-6 py-3 text-left">Balance</th>
<th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Created</th>
              <th className="adminUser-head1 px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {users.slice(0, viewUserId).map((user) => (
              <tr key={user._id} className="hover:bg-gray-800">
                <td className="px-6 py-3">
                  {editUserId === user._id ? (
                    <input
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    user.username
                  )}
                </td>
                <td className="px-6 py-3">
                  {editUserId === user._id ? (
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="px-6 py-3">
  {editUserId === user._id ? (
    <input
      name="balance"
      type="number"
      value={formData.balance}
      onChange={handleInputChange}
      className="border px-2 py-1 rounded w-full"
    />
  ) : (
    `₦${Number(user.balance).toLocaleString()}`
  )}
</td>

                <td className="px-6 py-3">
                  <span className={`active_adminUser rounded-full text-xs font-medium ${user.isVerified ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {user.isVerified ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-3 capitalize">
                  {editUserId === user._id ? (
                    <input
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    user.role || 'user'
                  )}
                </td>
                <td className="px-6 py-3">{new Date(user.createdAt).toLocaleDateString()}</td>
                <td className="button-container px-6 py-3 space-x-2">
                  {editUserId === user._id ? (
                    <>
                      <button onClick={() => handleEditSubmit(user._id)} className="text-green-600 hover:underline">💾 Save</button>
                      <button onClick={cancelEdit} className="text-gray-600 hover:underline">Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => startEdit(user)} className="admin-edit text-blue-600 hover:underline">Edit</button>
                      <button onClick={() => handleToggleStatus(user._id)} className="admin-act text-yellow-600 hover:underline">
                        {user.isVerified ? ' Deactivate' : ' Activate'}
                      </button>
                      <button onClick={() => handleDelete(user._id)} className="admin-del text-red-600 hover:underline">Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length > 10 && (
  <div className="text-center mt-4">
    <button
      onClick={handleViewMore}
      className="admin-see-more-btn "
    >
      {viewUserId >= users.length ? 'See Less' : 'See More'}
    </button>
  </div>
)}
      </div>
    </div>
  );
};

export default AdminUsers;
