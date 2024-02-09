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
