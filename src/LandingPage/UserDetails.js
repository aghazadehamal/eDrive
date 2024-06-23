import React, { useState, useEffect, useRef } from 'react';
import './UserDetails.css'; 
import { Link } from 'react-router-dom';

import axios from "axios";
import { Puff } from 'react-loader-spinner';
import EditModal from './EditModal';
function UserDetails() {

  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    gmail: "",
    password: "",
    confirmPassword: "", 
    phoneNumber: ""
  });

  const userInitials = `${userData.name.charAt(0)}${userData.surname.charAt(0)}`;
  
  const [isEditSuccessful, setIsEditSuccessful] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const nameRef = useRef(null);
const surnameRef = useRef(null);
const emailRef = useRef(null);
const passwordRef = useRef(null);
const confirmPasswordRef = useRef(null);
const phoneNumberRef = useRef(null);


  const updateUserDetails = async () => {
   

    if (userData.password.length < 8 || userData.password.length > 20) {
      alert("Şifre en az 8 ve en fazla 20 simvol uzunluğunda olmalıdır.");
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      alert("Daxil edilən şifrələr fərqlidir.");
      return;
    }

    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(userData.phoneNumber)) {
      alert("Telefon nömrəsi düzgün formatda deyil. Nümunə: 997660042");
      return;
    }

    const userId = localStorage.getItem('userId');
    const url = `http://edurive.az:8087/v1/user/${userId}`;
  
    
    try {
      setModalLoading(true);
      const response = await axios.put(url, userData);
      console.log('Məlumatlar uğurla dəyişdirildi', response.data);
      setIsEditSuccessful(true); 

      setTimeout(() => {
        setIsEditSuccessful(false);
      }, 2000);
      setModalLoading(false);
    } catch (error) {
      
      console.error('İstifadəçi məlumatları yenilənərkən bir xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.', error);
      alert('İstifadəçi məlumatları yenilənərkən bir xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.');
 setModalLoading(false);
      
    }
   
  };
  
  

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        setIsLoading(true);
  
        const userId = localStorage.getItem('userId');
        const userLessonsResponse = await axios.get(`http://edurive.az:8087/v1/user/${userId}`);
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
  

     
      <h1>Hesabım</h1>
      <div className="initials-circle">
  {userInitials.toUpperCase()}
</div>

      <p className='NameSurnameP'>
        <span className="user-namee">{userData?.name}</span>
        {' '} 
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
      ref={nameRef} 
    />
   <img
    src={`${process.env.PUBLIC_URL}/editicon.svg`}
    className="input-icon"
    alt="editicon"
    onClick={() => nameRef.current && nameRef.current.focus()} 
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
      ref={surnameRef} 
    />
    <img
    src={`${process.env.PUBLIC_URL}/editicon.svg`}
    className="input-icon"
    alt="editicon"
    onClick={() => surnameRef.current && surnameRef.current.focus()} 
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
      ref={emailRef} 
    />
   <img
    src={`${process.env.PUBLIC_URL}/editicon.svg`}
    className="input-icon"
    alt="editicon"
    onClick={() => emailRef.current && emailRef.current.focus()} 
  />

  </div>
</div>

<div className="user-info-row">
  <label htmlFor="password">Şifrə:</label>
  <div className="input-icon-container">
  <input
  id="password"
  name="password"
  type="password"
  class="password-inputt" 
  value={userData?.password || ''}
  onChange={handleInputChange}
  ref={passwordRef} 
/>

<img
    src={`${process.env.PUBLIC_URL}/editicon.svg`}
    className="input-icon"
    alt="editicon"
    onClick={() => passwordRef.current && passwordRef.current.focus()} 
  />

  </div>
</div>

<div className="user-info-row">
  <label htmlFor="password">Şifrəni təkrarlayın:</label>
  <div className="input-icon-container">
  <input
  id="password"
  name="confirmPassword"
  type="password"
  class="password-inputt" 
  value={userData?.confirmPassword || ''}
  onChange={handleInputChange}
  ref={confirmPasswordRef} 
/>

<img
    src={`${process.env.PUBLIC_URL}/editicon.svg`}
    className="input-icon"
    alt="editicon"
    onClick={() => confirmPasswordRef.current && confirmPasswordRef.current.focus()} 
  />

  </div>
</div>


          
<div className="user-info-row">
  <label htmlFor="phoneNumber">Telefon nömrəsi:</label>
  <div className="input-icon-container">
    <input 
      id="phoneNumber" 
      name="phoneNumber" 
      value={userData?.phoneNumber || ''} 
      onChange={handleInputChange}
      ref={phoneNumberRef} 
    />
    <img
    src={`${process.env.PUBLIC_URL}/editicon.svg`}
    className="input-icon"
    alt="editicon"
    onClick={() => phoneNumberRef.current && phoneNumberRef.current.focus()} 
  />

  </div>
</div>

<div className="button-container">
  

  <button type="submit" disabled={isLoading} className="save-button" onClick={updateUserDetails} >
    {modalLoading ? (
      <div className="loader"></div> 
    ) : (
      'Yadda saxla' 
    )}
  </button>
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
