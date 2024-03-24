import React, { useState, useEffect } from "react";
import "./UserListTwo.css";
import { Link } from "react-router-dom";
import { Puff } from "react-loader-spinner";

function UserListTwo() {
  const [users, setUsers] = useState([]);
  const [lessons, setLessons] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    setIsLoading(true); 
    Promise.all([
      fetch("https://edurive.onrender.com/v1/lesson/").then((response) => response.json()),
      fetch("https://edurive.onrender.com/v1/user/").then((response) => response.json())
    ])
    .then(([lessonData, userData]) => {
      setLessons(lessonData);
      const filteredUsers = userData.filter(user => user.id > 28);
      setUsers(filteredUsers);
    })
    .catch((error) => {
      console.error("Hata:", error);
    })
    .finally(() => {
      setIsLoading(false); 
    });
  }, []);
  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const giveAccessToUser = async (userId) => { 
    
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
    <div>
 {isLoading ? (
        <div className="loader-container">
          <Puff color="#50bb27" height={100} width={100} />
        </div>
      ) : (
  
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
     )}
    </div>
  );
}

export default UserListTwo;
