import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    gmail: '',
    password: '',
    roleType: 'Admin', // Bu örnekte sabit bir değer kullanıldı, ihtiyaca göre değiştirilebilir
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Formun varsayılan gönderimini engelleyin
    try {
      const response = await axios.post('https://edurive.onrender.com/auth/registration', formData);
      console.log(response.data); // Başarılı kayıt sonrası yanıtı konsola yazdır
      // Burada başarılı kayıt sonrası işlemleri yapabilirsiniz, örneğin kullanıcıyı giriş sayfasına yönlendirme
    } catch (error) {
      if (error.response) {
        // Sunucu tarafından bir hata yanıtı alındı
        console.error('Kayıt sırasında bir hata oluştu:', error.response.data);
      } else if (error.request) {
        // İstek yapıldı ancak hiçbir yanıt alınamadı
        console.error('Yanıt alınamadı:', error.request);
      } else {
        // İstek yapılırken bir hata oluştu
        console.error('İstek sırasında bir hata oluştu:', error.message);
      }
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Adınız" required />
      <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Soyadınız" required />
      <input type="email" name="gmail" value={formData.gmail} onChange={handleChange} placeholder="E-posta" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Şifre" required />
      <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Telefon Numarası" required />
      <button type="submit">Kayıt Ol</button>
    </form>
  );
}

export default RegistrationForm;
