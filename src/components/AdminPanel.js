import React, { useState, useEffect } from 'react';
import UserList from './UserList';

function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    setUsers([
      { id: 1, name: 'User 1', hasAccess: false },
      { id: 2, name: 'User 2', hasAccess: false },
      { id: 3, name: 'User 3', hasAccess: false },
    ]);
  }, []);

  const toggleAccess = (userId) => {
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...user, hasAccess: !user.hasAccess } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="admin-panel">

    <UserList users={users} onToggleAccess={toggleAccess} />
  </div>

  );
}

export default AdminPanel;








// import React, { useState, useEffect } from 'react';

// function User() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const headers = new Headers();
//     // Token buraya eklenmelidir; "YOUR_TOKEN_HERE" kısmını gerçek token ile değiştirin.
//     headers.append("Authorization", "Bearer YOUR_TOKEN_HERE");

//     fetch('https://edurive.onrender.com/v1/user', { headers })
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error('Network response was not ok.');
//       })
//       .then(data => setData(data))
//       .catch(error => console.error('There was a problem with your fetch operation:', error));
//   }, []);

//   return (
//     <div>
//       <h1>User Data</h1>
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
//     </div>
//   );
// }

// export default User;
