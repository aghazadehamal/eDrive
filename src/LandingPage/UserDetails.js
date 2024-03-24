import React from 'react';
import './UserDetails.css'; 
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

function UserDetails() {

  const [userData, setUserData] = useState()

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
  
  
        const userId = localStorage.getItem('userId');
        const userLessonsResponse = await axios.get(`https://edurive.onrender.com/v1/user/${userId}`);
        setUserData(userLessonsResponse.data)

      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };
  
    fetchLessonData();
  }, []);

  return (
    <div className="user-details">
       <Link to="/lessonData">
          <img className="imageLogoFirstImage"
            src="/edurive.svg"
            alt="Novademy Logo"
            style={{ maxWidth: "250px" }}
          />
        </Link>
      <h1>İstifadəçi məlumatları</h1>

      <p><span className="highlight">Ad:</span> {userData?.name}</p>
      <p><span className="highlight">Soyad:</span> {userData?.surname}</p>
      <p><span className="highlight">Mail:</span> {userData?.gmail}</p>
      {/* <p><span className="highlight">ID:</span> {userId}</p> */}
     
      {/* <p><span className="highlight">Ödeme Yapıldı mı:</span> {userPaid}</p> */}
      <p><span className="highlight">Telefon nömrəsi:</span> {userData?.phoneNumber}</p>

      <Link onClick={() => localStorage.clear()} to="/" className="logoutLink">
        Çıxış
      </Link>
    </div>
  );
}

export default UserDetails;
