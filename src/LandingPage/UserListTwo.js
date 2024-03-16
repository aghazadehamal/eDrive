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
        `https://edurive.onrender.com/v1/access/${userId}/${videoId}`, 
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="user-name">{user.name} {user.surname}</span>
              <button onClick={() => toggleUserVisibility(user.id)}>
                {visibleUsers[user.id] ? (
                  <img style={{cursor: "pointer"}} src={process.env.PUBLIC_URL + "/asagi.svg"} alt="Aşağı" />
                ) : (
                  <img style={{cursor: "pointer"}}  src={process.env.PUBLIC_URL + "/yuxari.svg"} alt="Yukarı" />
                )}
              </button>
            </div>
            {visibleUsers[user.id] && (
              <div>
                {lessons.map((lesson) =>
                  lesson.subjectResponse.map((subject) => (
                    <div key={subject.id}>
                      <button
                        className="UserButton"
                        onClick={() => giveAccessToUser(user.id, subject.videoResponse.id)}
                      >
                        {subject.videoResponse.title} İcazə Ver
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  
  );
}

export default UserListTwo;
