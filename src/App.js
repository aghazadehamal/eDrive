import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage/FirstPage';





import Quiz from './FirstPage/Quiz';
// import PaymentPage from './FirstPage/PaymentPage';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import KullaniciYonetimPaneli from './FirstPage/KullaniciYonetimPaneli';




import AdminPanel from './components/AdminPanel';
import LoginPage from './components/LoginPage';
import LoginFormAdmin from './components/LoginFormAdmin';
import { AuthProvider } from './contexts/AuthContext';

import Lessonss from './lessons/Lessonss';
import LoginForm from './registration/LoginForm';
import RegistrationForm from './registration/RegistrationForm';
import RegisterForm from './registration/RegisterForm';
import EditUserProfile from './UserProfile/EditUserProfile';
import UserProfile from './UserProfile/UserProfile';
import User from './components/AdminPanel';




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
          <Route path="/admin" element={<User />} />
          <Route path="/loginFormAdmin" element={<LoginFormAdmin />} />
          <Route path="/loginFormAdmin" element={<LoginPage />} />

          

        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
