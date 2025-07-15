// import { useContext, useState, useEffect } from 'react';
// import { AuthContext } from '../components/Authcontext';
// import axios from 'axios';

// const Profile = () => {
//   const { user, token } = useContext(AuthContext);
//   const [formData, setFormData] = useState({ username: '', email: '' });
//   const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '' });
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     if (user) {
//       setFormData({ username: user.username, email: user.email });
//     }
//   }, [user]);

//   const handleProfileUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.put('/api/users/update-profile', formData, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setMessage(res.data.message || 'Profile updated successfully!');
//     } catch (err) {
//       setMessage('Error updating profile');
//     }
//   };

//   const handlePasswordChange = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.put('/api/users/change-password', passwordData, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setMessage(res.data.message || 'Password changed successfully!');
//       setPasswordData({ currentPassword: '', newPassword: '' });
//     } catch (err) {
//       setMessage('Error changing password');
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Profile</h2>
//       {message && <p className="mb-4 text-green-600">{message}</p>}
      
//       <form onSubmit={handleProfileUpdate} className="space-y-4">
//         <div>
//           <label className="block text-sm font-semibold">Username</label>
//           <input
//             type="text"
//             value={formData.username}
//             onChange={e => setFormData({ ...formData, username: e.target.value })}
//             className="w-full border px-3 py-2 rounded"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold">Email</label>
//           <input
//             type="email"
//             value={formData.email}
//             onChange={e => setFormData({ ...formData, email: e.target.value })}
//             className="w-full border px-3 py-2 rounded"
//           />
//         </div>
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Update Profile
//         </button>
//       </form>

//       <hr className="my-6" />

//       <h3 className="text-xl font-semibold mb-2">Change Password</h3>
//       <form onSubmit={handlePasswordChange} className="space-y-4">
//         <div>
//           <label className="block text-sm font-semibold">Current Password</label>
//           <input
//             type="password"
//             value={passwordData.currentPassword}
//             onChange={e => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
//             className="w-full border px-3 py-2 rounded"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold">New Password</label>
//           <input
//             type="password"
//             value={passwordData.newPassword}
//             onChange={e => setPasswordData({ ...passwordData, newPassword: e.target.value })}
//             className="w-full border px-3 py-2 rounded"
//           />
//         </div>
//         <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//           Change Password
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Profile;
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../components/Authcontext';
import "../components/Profile/Profile.css";
import profileimg from "../../public/profileimg.svg";
import Basedcrumb from "../components/Basedcrumb";

const Profile = () => {
  const { user, token } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
   const [usersData, setUsersData] = useState(null);


  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (user) {
      setFormData({ username: user.username, email: user.email });
    }
  }, [user]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const res = await axios.put(`${api}/api/users/update`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage(res.data.message || 'Profile updated successfully!');
    } catch (err) {
      setError(err.response?.data?.message || 'Error updating profile');
    }
    console.log("Sending token:", token);

  };

  // const handlePasswordChange = async (e) => {
  //   e.preventDefault();
  //   setMessage('');
  //   setError('');

  //   try {
  //     const res = await axios.put(`${api}/api/users/change-password`, passwordData, {
  //       headers: { Authorization: `Bearer ${token}` }
  //     });
  //     setMessage(res.data.message || 'Password changed successfully!');
  //     setPasswordData({ currentPassword: '', newPassword: '' });
  //   } catch (err) {
  //     setError(err.response?.data?.message || 'Error changing password');
  //   }
  // };
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
  
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  
    if (!passwordRegex.test(passwordData.newPassword)) {
      setError('Password must be at least 8 characters long, include uppercase, lowercase, number, and special character.');
      return;
    }
  
    try {
      const res = await axios.put(`${api}/api/users/change-password`, passwordData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage(res.data.message || 'Password changed successfully!');
      setPasswordData({ currentPassword: '', newPassword: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Error changing password');
    }
  };
  
  useEffect(() => {
    const fetchUsersData = async () => {
      if (!token) return; // Wait until token is available
  
      try {
        const response = await axios.get(`${api}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsersData(response.data);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Error fetching user data');
      }
    };
  
    fetchUsersData();
  }, [token]); // ✅ always include token
  
  

  return (
    <div className="profile__page ">
      <Basedcrumb/>
      <h1 className="dashboard-heading-h"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-columns-gap plan-icon"><path fill-rule="evenodd" d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"></path></svg>Profile & Setting</h1>
      <div className='profile__pagess'> 
      <div className="profile_ii">
       
        <div className="profile_list">
          <h2 className="profile__h2">Welcome to your profile</h2>
          <p className="profile__p"><span className='profile_span'>Username:</span> {formData.username}</p>
          <p className="profile__p"><span className='profile_span'>Email:</span> {formData.email}</p>
          <p className="profile__p"><span className='profile_span'>Balance:</span> {usersData ? usersData.balance : 'Loading...'}</p>

        </div>
     
      </div>
      <div className="profile_pages">
      <h2 className="text-3xl text-white font-bold mb-6">Profile</h2>

      {message && <div className="profile__green mb-4 p-3 bg-green-100 text-green-800 rounded">{message}</div>}
      {error && <div className="profile__red mb-4 p-3 bg-red-100 text-red-800 rounded">{error}</div>}

      <form onSubmit={handleProfileUpdate} className="spaces">
        <div>
          <label className="profile_label block text-sm font-medium">Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={e => setFormData({ ...formData, username: e.target.value })}
            className="profile_input w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="profile_label  block text-sm font-medium">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="profile_input w-full border px-4 py-2 rounded  "
            required
          />
        </div>
        <button
          type="submit"
          className="profile_btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Update Profile
        </button>
      </form>

      <hr className="my-8" />

      <h3 className="profile__h3">Change Password</h3>
      <form onSubmit={handlePasswordChange} className="spaces">
        <div>
          <label className="profile_label  block text-sm font-medium">Current Password</label>
          <input
            type="password"
            value={passwordData.currentPassword}
            onChange={e => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
            className="profile_input w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="profile_label  block text-sm font-medium">New Password</label>
          <input
            type="password"
            value={passwordData.newPassword}
            onChange={e => setPasswordData({ ...passwordData, newPassword: e.target.value })}
            className="profile_input w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="profile_btn bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded p-3"
        >
          Change Password
        </button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Profile;
