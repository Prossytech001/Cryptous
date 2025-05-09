// import { useEffect, useState } from "react";
// import axios from "axios";

// const Users = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/users")
//       .then(res => setUsers(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1>Users List</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user._id}>{user.name} - {user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Users;

import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      console.log("API Response:", response.data);
      setUsers(Array.isArray(response.data) ? response.data : response.data.users); // Handle object format
    } catch (err) {
      console.error("Axios error:", err);
      setError(err.message);
    }}
//    const data =  axios.get("http://localhost:5000/api/users")
//       .then(res => {
//         console.log("API Response:", res.data);
//         setUsers(Array.isArray(res.data) ? res.data : res.data.users); // Handle object format
//       })
//       .catch(err => {
//         console.error("Axios error:", err);
//         setError(err.message);
//       });
      useEffect(() => {
    fetchData(); // Call the fetchData function when the component mounts
  }, []);
  
  
  return (
    <div>
      <h1>Users List</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
  {(Array.isArray(users) ? users : []).map((user, index) => (
    <li key={index}>{user.name} - {user.email}</li>
  ))}
</ul>

    </div>
  );
};

export default Users;

