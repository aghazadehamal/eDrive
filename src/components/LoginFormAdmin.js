import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom'; 

const LoginFormAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      login({ username }); 
      navigate('/UserListTwo'); 
    } else {
      alert('Hatalı kullanıcı adı veya şifre!');
    }
  };

  return (

    <div className="login">

      <Link to= "/">
      <img  src="/edurive.svg" alt="Novademy Logo" style={{ maxWidth: '250px', marginTop: "20px"}} />
      </Link>

    <form style={{height: "400px"}}  onSubmit={handleSubmit} >
    <div>
      <label>İstifadəçi Adı:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="username-input"
      />
    </div>
    <div>
      <label>Şifrə:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="password-input"
      />
    </div>
    <button type="submit" className="submit-button">Giriş et </button>
  </form>

    </div>

   
);
};


export default LoginFormAdmin;
