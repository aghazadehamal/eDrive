import React, { useState, useEffect } from "react";
import "./UserListTwo.css";
import { Link } from "react-router-dom";

function UserListTwo() {
  const [users, setUsers] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState({}); 

  useEffect(() => {
    fetch("https://edurive.onrender.com/v1/lesson/")
      .then((response) => response.json())
      .then((data) => setLessons(data))
      .catch((error) =>
        console.error("Xəta yarandı", error)
      );
  }, []);

  useEffect(() => {
    fetch("https://edurive.onrender.com/v1/user/")
      .then((response) => response.json())
      .then((data) => {
        const filteredUsers = data.filter(user => user.id > 28); 
        setUsers(filteredUsers); 
      })
      .catch((error) => console.error("Xəta:", error));
  }, []);
  

  const toggleUserVisibility = (userId) => {
    setVisibleUsers((prevVisibleUsers) => ({
      ...prevVisibleUsers,
      [userId]: !prevVisibleUsers[userId],
    }));
  };

  const giveAccessToUser = async (userId, videoId) => { 
    try {
      const response = await fetch(
        `https://edurive.onrender.com/v1/access/${userId}`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.ok) {
        alert("İcazə verildi");
      } else {
        alert("İcazə verilərkən xəta yarandı");
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };
  

  return (
    <div className="user-list-container">
      <Link to="/">
        <img src="/edurive.svg" alt="Edurive Logo" className="login-logo" />
      </Link>
      <h2 style={{ marginTop: "30px" }}>İstifadəçi siyahısı</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <span className="user-name">{user.name} {user.surname}</span>
            {/* Tüm kullanıcılara tek bir "İcazə Ver" butonu ile erişim veriyoruz */}
            <button
              className="UserButton"
              onClick={() => giveAccessToUser(user.id)}
            >
              İcazə Ver
            </button>
          </li>
        ))}
      </ul>
    </div>
  
  );
}

export default UserListTwo;
