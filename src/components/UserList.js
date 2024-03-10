import React from "react";

function UserList({ users, onToggleAccess }) {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - İcazə: {user.hasAccess ? "Var" : "Yox"}
          <button onClick={() => onToggleAccess(user.id)}>
            {user.hasAccess ? "İcazəni Al" : "İcazə Ver"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
