import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '', 
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Şifreler uyuşmuyor.');
      return;
    }

   
    try {
      const response = await fetch('API_ENDPOINT', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password, 
          phone: formData.phone,
        }),
      });

      if (!response.ok) {
        throw new Error('Kayıt sırasında bir hata oluştu');
      }

     
      console.log('Kayıt başarılı');
      navigate('/home');
    } catch (error) {
      console.error('Kayıt işlemi başarısız', error);
    }
  };

  return (
    <div className="registration-form">
      <h2>Qeydiyyat</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ad ve Soyad *
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          E-posta *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Şifre *
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Şifre Doğrulama *
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Telefon Numarası *
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Davam et</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
