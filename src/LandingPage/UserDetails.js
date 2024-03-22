import React from 'react';
import './UserDetails.css'; 
import { Link } from 'react-router-dom';

function UserDetails() {

  const userEmail = localStorage.getItem("userEmail");
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");
  const userSurname = localStorage.getItem("userSurname");
  const userPaid = localStorage.getItem("userPaid") === 'true' ? 'Evet' : 'Hayır'; 
  const userPhone = localStorage.getItem("userPhone");

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

      <p><span className="highlight">Ad:</span> {userName}</p>
      <p><span className="highlight">Soyad:</span> {userSurname}</p>
      <p><span className="highlight">Mail:</span> {userEmail}</p>
      {/* <p><span className="highlight">ID:</span> {userId}</p> */}
     
      {/* <p><span className="highlight">Ödeme Yapıldı mı:</span> {userPaid}</p> */}
      <p><span className="highlight">Telefon nömrəsi:</span> {userPhone}</p>

      <Link onClick={() => localStorage.clear()} to="/" className="logoutLink">
        Çıxış
      </Link>
    </div>
  );
}

export default UserDetails;
