import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'; 
const LoginFormAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      login({ username }); 
      navigate('/admin'); 
    } else {
      alert('Hatalı kullanıcı adı veya şifre!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
    <div>
      <label>Kullanıcı Adı:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="username-input"
      />
    </div>
    <div>
      <label>Şifre:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="password-input"
      />
    </div>
    <button type="submit" className="submit-button">Giriş Yap</button>
  </form>
);
};


export default LoginFormAdmin;
