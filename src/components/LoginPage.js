import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginFormAdmin';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/admin'); 
  };

  return (
    <div>
      <h1>Giriş Yap</h1>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
