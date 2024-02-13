import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [formData, setFormData] = useState({
    gmail: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('https://edurive.onrender.com/auth/login', formData);
      console.log(response.data); 
    
    }catch (error) {
      // Eğer hata yanıtı varsa ve içerisinde data bilgisi varsa bu kısmı çalıştır
      if (error.response && error.response.data) {
        console.error('Giriş edərkən bir hata oluştu:', error.response.data);
      } else if (error.request) {
        // İstek yapıldı ancak hiçbir yanıt alınamadıysa bu kısmı çalıştır
        console.error('Yanıt alınamadı:', error.request);
      } else {
        // İstek sırasında başka bir hata oluştuysa bu kısmı çalıştır
        console.error('İstek sırasında bir hata oluştu:', error.message);
      }
    }
    
  };

  return (
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
    </form>
  );
}

export default LoginForm;
