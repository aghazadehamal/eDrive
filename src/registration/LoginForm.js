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
    e.preventDefault(); // Formun varsayılan gönderimini engelleyin
    try {
      const response = await axios.post('http://edurive.onrender.com/auth/login', formData);
      console.log(response.data); // Başarılı giriş sonrası yanıtı konsola yazdır
      // Burada başarılı giriş sonrası işlemleri yapabilirsiniz, örneğin kullanıcıyı anasayfaya yönlendirme
    } catch (error) {
      console.error('Giriş yapılırken bir hata oluştu:', error.response.data);
      // Burada hata yönetimi yapabilirsiniz
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
        placeholder="Şifre"
        required
      />
      <button type="submit">Giriş Yap</button>
    </form>
  );
}

export default LoginForm;
