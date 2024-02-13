import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';


function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    gmail: '',
    password: '',
    roleType: 'Admin', 
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
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ad" required />
      <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Soyad" required />
      <input type="email" name="gmail" value={formData.gmail} onChange={handleChange} placeholder="E-posta" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Şifrə" required />
      <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Telefon Nömrəsi" required />
      <button type="submit">Qeydiyyatdan keç</button>
    </form>
  );
}

export default RegistrationForm;
