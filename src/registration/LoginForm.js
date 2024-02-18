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
      // Token kontrolü
      if (response.data.accessToken) {
        // Tokeni localStorage'a kaydet
        localStorage.setItem('userToken', response.data.accessToken);
        // Kullanıcıyı dersler sayfasına yönlendir
        navigate('/lessonss');
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
    <div style={{textAlign: "center"}}>
      <Link to="/">
        <img src="/edurive.jpg" alt="Edurive Logo" style={{ maxWidth: '250px' }} />
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

<hr></hr>

        <div style={{ marginTop: "10px" }}>
          <span>Hesabınız yoxdur?</span>
          {/* Burada 'Daxil ol' metni için Link bileşenini kullanıyoruz */}
          <Link to="/RegistrationForm" style={{ marginLeft: '5px' }}>Qeydiyyatdan keç</Link>.
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
