import React, { useState, useEffect } from "react";
import "./UserListTwo.css";
import { Link } from "react-router-dom";

function UserListTwo() {
  const [users, setUsers] = useState([]);
  const [lessons, setLessons] = useState([]); // Dersler için state
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://edurive.onrender.com/v1/lesson/")
      .then((response) => response.json())
      .then((data) => setLessons(data)) // Derslerin ayarlanması
      .catch((error) => console.error("Hata:", error));

    fetch("https://edurive.onrender.com/v1/user/")
      .then((response) => response.json())
      .then((data) => {
        const filteredUsers = data.filter(user => user.id > 28); 
        setUsers(filteredUsers);
      })
      .catch((error) => console.error("Hata:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const giveAccessToUser = async (userId) => { // Erişim verme fonksiyonu
    try {
      const response = await fetch(`https://edurive.onrender.com/v1/access/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("İcazə verildi");
        setUsers(users.map(user => 
          user.id === userId ? { ...user, paid: true } : user
        ));
      } else {
        alert("İcazə verilərkən xəta yarandı");
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  const filteredUsers = users.filter(user =>
    `${user.name} ${user.surname}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-list-container">
    <Link to="/">
        <img src="/edurive.svg" alt="Edurive Logo" className="login-logo" />
      </Link>
      <h2 style={{ marginTop: "30px" }}>İstifadəçi siyahısı</h2>
      <input
        type="text"
        placeholder="İstifadəçi axtar..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ margin: "20px 0", padding: "10px", width: "100%", boxSizing: "border-box" }}
      />
      <ul className="user-list">
        {filteredUsers.map(user => (
          <li key={user.id}>
            <span className="user-name">{user.name} {user.surname}</span>
            {user.paid ? (
              <button style={{ backgroundColor: "red" }} className="UserButton granted" disabled>
                İcazə Verildi
              </button>
            ) : (
              <button
                className="UserButton"
                onClick={() => giveAccessToUser(user.id)}
              >
                İcazə Ver
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListTwo;
