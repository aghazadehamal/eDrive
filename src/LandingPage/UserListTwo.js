import React, { useState, useEffect } from "react";
import "./UserListTwo.css";

function UserListTwo() {
  const [users, setUsers] = useState([]);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch("https://edurive.onrender.com/v1/lesson/")
      .then((response) => response.json())
      .then((data) => setLessons(data))
      .catch((error) =>
        console.error("Ders içeriklerini çekerken bir hata oluştu:", error)
      );
  }, []);

  useEffect(() => {
    fetch("https://edurive.onrender.com/v1/user/")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Hata:", error));
  }, []);

  const giveAccessToUser = async (userId, lessonId) => {
    try {
      const response = await fetch(
        `https://edurive.onrender.com/v1/access/${userId}/${lessonId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Erişim izni başarıyla verildi.");
      } else {
        alert("Erişim izni verilirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <div className="user-list-container">
      <h2>İstifadəçi siyahısı</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            {user.name}, {user.surname}
            <div>
              {lessons.map((lesson) => (
                <div key={lesson.id}>
                  <button
                    className="UserButton"
                    onClick={() => giveAccessToUser(user.id, lesson.id)}
                  >
                    {lesson.lessonName} İvazə Ver
                  </button>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListTwo;
