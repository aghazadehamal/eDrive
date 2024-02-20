import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';


function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    gmail: '',
    password: '',
 
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('https://edurive.onrender.com/auth/registration', formData);
      console.log(response.data); 
   
    } catch (error) {
      if (error.response) {
     
        console.error('Qeydiyyat zamanl bir xəta oluştu:', error.response.data);
      } else if (error.request) {
     
        console.error('Cavab alınmadı:', error.request);
      } else {
     
        console.error('İstək sırasında bir xəta oluştu:', error.message);
      }
    }
    
  };

  return (
    <div style={{textAlign: "center"}}>
  <Link to= "/">
      <img  src="/edurive.jpg" alt="Novademy Logo" style={{ maxWidth: '250px'}} />
      </Link>
    <form onSubmit={handleSubmit}>
      <h1 style={{color: "black"}}>Qeydiyyat</h1>
      <p>Ad</p>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Adınızı əlavə edin" required />
      <p>Soyad</p>
      <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Soyadınızı əlavə edin" required />
      <p>E-mail</p>
      <input type="email" name="gmail" value={formData.gmail} onChange={handleChange} placeholder="E-mailinizi əlavə edin" required />
      <p>Şifrə</p>
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Şifrənizi əlavə edin" required />
      <p>Telefon nömrəniz</p>
      <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Telefon nömrənizi əlavə edin" required />
      <button type="submit">Qeydiyyatdan keç</button>
      
      <div style={{ marginTop: "42px", marginLeft: "90px", height: "40px", width: "384px" }}>
          <span>Hesabınız var?</span>
          {/* Burada 'Daxil ol' metni için Link bileşenini kullanıyoruz */}
          <Link to="/loginForm" style={{ marginLeft: '10px', color: "green", textDecoration: "none" }}>Daxil olun</Link>.
        </div>
     
    </form>


    </div>
   
  );
}

export default RegistrationForm;
