import React, { useState } from 'react';
import axios from 'axios';
import "../components/AdminDashboard/AdminCreateUser.css"; // Import your CSS file for custom styles

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const api = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('adminToken');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await axios.post(
        `${api}/api/admin/users/create`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setMessage(`✅ User "${res.data.user.username}" created successfully`);
      setFormData({ username: '', email: '', password: '', role: 'user' });
    } catch (err) {
      const errorMsg = err.response?.data?.message || '❌ Failed to create user';
      setMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#1E1E2D' }}  className="create-user-form p-4  flex flex-col justify-center items-center rounded shadow-md h-screen">
      <h2 className="text-xlfont-bold mb-4 text-gray-800 dark:text-white">Create New User</h2>
      <form onSubmit={handleSubmit} className="admin-create-form  ">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full text-gray-50 h-12 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-50 placeholder-gray-400 transition"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full text-gray-50 h-12 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full h-12 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-50 placeholder-gray-400 transition"
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full h-12 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-50 placeholder-gray-400 transition"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="create-user-button "
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create User'}
        </button>
      </form>

      {message && <p className="mt-4 text-sm text-center">{message}</p>}
    </div>
  );
};

export default CreateUserForm;
