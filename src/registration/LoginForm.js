import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LoginForm.css'; // İlgili CSS stil dosyası

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
      if (response.data.accessToken) {
        localStorage.setItem('userToken', response.data.accessToken);
        navigate('/lessonss?showModal=true'); // Burada URL parametresini ekleyin
      } else {
        console.error('Giriş başarısız, token alınamadı.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Giriş yapılırken bir hata oluştu:', error.response.data);
      } else if (error.request) {
        console.error('Yanıt alınamadı:', error.request);
      } else {
        console.error('İstek sırasında bir hata oluştu:', error.message);
      }
    }
  };

  return (
    <div style={{textAlign: "center"}} className="login">
      <Link to="/">
        <img src="/edurive.jpg" alt="Edurive Logo" style={{ maxWidth: '250px' }} />
      </Link>
      <form onSubmit={handleSubmit}>
        <h1 style={{color: "black"}}>Daxil ol</h1>
        <p>
          E-mail
        </p>
        <input
        
          type="email"
          name="gmail"
          value={formData.gmail}
          onChange={handleChange}
          placeholder="E-mailinizi əlavə edin"
          required
        />
         <p>
          Şifrə
        </p>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Şifrənizi əlavə edin"
          required
        />
        <span style={{color: "#50BB27", marginLeft: "250px"}}>Şifrəmi unutdum</span>
        <button type="submit">Davam et</button>



        <div style={{  marginLeft: "50px", marginTop: "42px", height: "40px", width: "384px" }}>
          <span>Hesabınız yoxdur?</span>
          {/* Burada 'Daxil ol' metni için Link bileşenini kullanıyoruz */}
          <Link to="/RegistrationForm" style={{ marginLeft: '10px', color: "green", textDecoration: "none" }}>Qeydiyyatdan keçin</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
