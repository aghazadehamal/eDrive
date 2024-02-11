import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage/FirstPage';


import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

import Quiz from './FirstPage/Quiz';
// import PaymentPage from './FirstPage/PaymentPage';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import KullaniciYonetimPaneli from './FirstPage/KullaniciYonetimPaneli';
import Lessonss from './Lessonss';
import RegisterForm from './RegisterForm';
import EditUserProfile from './EditUserProfile';
import UserProfile from './UserProfile';
import AdminPanel from './components/AdminPanel';
import LoginPage from './components/LoginPage';
import LoginFormAdmin from './components/LoginFormAdmin';
import { AuthProvider } from './contexts/AuthContext';




function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} /> 
          <Route path="/LoginForm" element={<LoginForm />} /> 
          <Route path="/lessonss" element={<Lessonss />} /> 
         
          <Route path="/Quiz" element={<Quiz />} /> 
          {/* <Route path="/PaymentPage" element={<PaymentPage />} />  */}
          {/* <Route path="/kullaniciYönetim" element={<KullaniciYonetimPaneli />} /> */}
          <Route path="/RegisterForm" element={<RegisterForm />} />
          <Route path="/edit-user-profile" element={<EditUserProfile />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/loginFormAdmin" element={<LoginFormAdmin />} />
          <Route path="/loginFormAdmin" element={<LoginPage />} />

          

        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
