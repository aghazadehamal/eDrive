import React from 'react';

function UserList({ users, onToggleAccess }) {
  return (
    <ul className="user-list">
    {users.map(user => (
      <li key={user.id}>
        {user.name} - Erişim: {user.hasAccess ? 'Var' : 'Yok'}
        <button onClick={() => onToggleAccess(user.id)}>
          {user.hasAccess ? 'Erişimi Al' : 'Erişim Ver'}
        </button>
      </li>
    ))}
  </ul>

  );
}

export default UserList;
