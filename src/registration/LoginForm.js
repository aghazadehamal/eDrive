import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

function LoginForm() {
  const [formData, setFormData] = useState({
    gmail: '',
    password: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('https://edurive.onrender.com/auth/login', formData);
      console.log(response.data); 
      navigate('/lessonss'); 
    }catch (error) {
      if (error.response && error.response.data) {
        console.error('Giriş edərkən bir hata oluştu:', error.response.data);
      } else if (error.request) {
        console.error('Yanıt alınamadı:', error.request);
      } else {
        console.error('İstek sırasında bir hata oluştu:', error.message);
      }
    }
  };

  return (
    <div>
  <Link to= "/">
      <img  src="/edurive.jpg" alt="Novademy Logo" style={{ maxWidth: '250px'}} />
      </Link>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="gmail"
        value={formData.gmail}
        onChange={handleChange}
        placeholder="E-posta"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Şifrə"
        required
      />
      <button type="submit">Giriş et</button>

      
<div style={{ 
  marginTop: '20px', 
  textAlign: 'center',
  display: "flex", 
  justifyContent: "space-around"
}}>
  <p style={{
    margin: '0', 
    color: '#333', 
    fontWeight: 'normal', 
  }}>
    Hesabınız yoxdur?
  </p>
   
  <Link to="/RegistrationForm" style={{ 
    color: 'red', 
    textDecoration: 'none', 
    fontWeight: 'bold', 
    fontSize: "20px",
   
  }}>
    Hesab yaradın
  </Link>
</div>


     
    </form>
  

    </div>

   
  );
}

export default LoginForm;
