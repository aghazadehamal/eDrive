import React from 'react';
import './UserDetails.css'; 
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Puff } from 'react-loader-spinner';
import EditModal from './EditModal';
function UserDetails() {

  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    gmail: "",
    password: "",
    phoneNumber: ""
  });
  
  const [isEditSuccessful, setIsEditSuccessful] = useState(false);

  const [isLoading, setIsLoading] = useState(false);


  const updateUserDetails = async () => {
    const userId = localStorage.getItem('userId');
    const url = `https://edurive.onrender.com/v1/user/${userId}`;
  
    try {
      const response = await axios.put(url, userData);
      console.log('Məlumatlar uğurla dəyişdirildi', response.data);
      setIsEditSuccessful(true); // Düzenleme başarılı olduğunda modalı göster

      setTimeout(() => {
        setIsEditSuccessful(false);
      }, 1000);
    } catch (error) {
      console.error('İstifadəçi məlumatları yenilənərkən bir xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.', error);
      alert('İstifadəçi məlumatları yenilənərkən bir xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.'); // Xəta durumunda istifadəçiyə xəbərdarlıq mesajı göstər
    }
  };
  
  

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        setIsLoading(true);
  
        const userId = localStorage.getItem('userId');
        const userLessonsResponse = await axios.get(`https://edurive.onrender.com/v1/user/${userId}`);
        setUserData(userLessonsResponse.data)

      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
      finally {
        setIsLoading(false); 
      }
    };
  
    fetchLessonData();
  }, []);

    const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className='userDetailBackgroundBlackDiv' >
       {isLoading ? (
        <div className="loaderUser-container">
          <Puff color="#50bb27" height={100} width={100} />
        </div>
      ) : (

<div className='userDetailBackgrounWhitedDiv'>
 <div className="icon-container">
  <Link to="/lessonData">
  <img
    src={`${process.env.PUBLIC_URL}/iconx.svg`}
    alt="iconx"
  />
  </Link>
 
</div>

<div className="user-details">
  

      {/* <Link to="/lessonData">
        <img className="imageLogoFirstImage"
          src="/edurive.svg"
          alt="Novademy Logo"
          style={{ maxWidth: "250px" }}
        />
      </Link> */}
      <h1>Hesabım</h1>

      <p>
        <span className="user-namee">{userData?.name}</span>
        {' '} {/* Boşluk bırak */}
        <span className="user-surnamee">{userData?.surname}</span>
      </p>
      <p className='EmailP'>
      <span className="user-email">{userData?.gmail}</span>
      </p>
      
     
        <div className="user-info">
        <div className="user-info-row">
  <label htmlFor="name">Ad:</label>
  <div className="input-icon-container">
    <input 
      id="name" 
      name="name" 
      value={userData?.name || ''} 
      onChange={handleInputChange}
    />
    <img
      src={`${process.env.PUBLIC_URL}/editicon.svg`}
      className="input-icon"
      alt="editicon"
    />
  </div>
</div>

          
<div className="user-info-row">
  <label htmlFor="surname">Soyad:</label>
  <div className="input-icon-container">
    <input 
      id="surname" 
      name="surname" 
      value={userData?.surname || ''} 
      onChange={handleInputChange}
    />
    <img
      src={`${process.env.PUBLIC_URL}/editicon.svg`}
      className="input-icon"
      alt="editicon"
    />
  </div>
</div>


<div className="user-info-row">
  <label htmlFor="gmail">E-mail:</label>
  <div className="input-icon-container">
    <input 
      id="gmail" 
      name="gmail" 
      type="gmail"
      value={userData?.gmail || ''} 
      onChange={handleInputChange}
    />
    <img
      src={`${process.env.PUBLIC_URL}/editicon.svg`}
      className="input-icon"
      alt="editicon"
    />
  </div>
</div>

<div className="user-info-row">
  <label htmlFor="password">Şifre:</label>
  <div className="input-icon-container">
    <input 
      id="password" 
      name="password" 
      type="password" // Şifreyi gizler
      value={userData?.password || ''} 
      onChange={handleInputChange}
    />
    <img
      src={`${process.env.PUBLIC_URL}/editicon.svg`}
      className="input-icon"
      alt="editicon"
    />
  </div>
</div>


          
<div className="user-info-row">
  <label htmlFor="phoneNumber">Telefon:</label>
  <div className="input-icon-container">
    <input 
      id="phoneNumber" 
      name="phoneNumber" 
      value={userData?.phoneNumber || ''} 
      onChange={handleInputChange}
    />
    <img
      src={`${process.env.PUBLIC_URL}/editicon.svg`}
      className="input-icon"
      alt="editicon"
    />
  </div>
</div>

<div className="button-container">
  <button className="save-button" onClick={updateUserDetails}>Yadda saxla</button>
</div>



        </div>
      


<p className='LogOutContainer'>
<Link onClick={() => localStorage.clear()} to="/" className="logoutLink">

<img
        src={`${process.env.PUBLIC_URL}/signout.svg`}
        alt="signout"
       
      />
<span>Çıxış et</span>


</Link>

</p>


     
      
    </div>

    {isEditSuccessful && <EditModal />}
    </div>
)}
    </div>
   
  );
}

export default UserDetails;
