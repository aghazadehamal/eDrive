import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate hook'unu import edin

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '', // 'gmail' yerine genel kullanım olan 'email' tercih edilmiştir.
    password: '',
  });

  const navigate = useNavigate(); // useNavigate hook'unu kullan

  const handleChange = (e) => {
    const { name, value } = e.target; // e.target.name ve e.target.value'yi doğrudan çıkar
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://edurive.onrender.com/auth/login', formData);
      console.log(response.data);
      // Token'ları yerel depolamada sakla
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      navigate('/lessons'); // React Router 6 için güncellenmiş yönlendirme
    } catch (error) {
      console.error('Giriş yapılırken bir hata oluştu:', error);
      // Burada kullanıcıya gösterilecek bir hata mesajı ayarlayabilirsiniz
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email" // 'gmail' yerine 'email' kullanımı
        value={formData.email}
        onChange={handleChange}
        placeholder="E-posta"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Şifre"
        required
      />
      <button type="submit">Giriş Yap</button>
    </form>
  );
}

export default LoginForm;
