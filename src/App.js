import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage/FirstPage';
import Quiz from './FirstPage/Quiz';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AdminPanel from './components/AdminPanel';
import LoginPage from './components/LoginPage';
import LoginFormAdmin from './components/LoginFormAdmin';
import { AuthProvider } from './contexts/AuthContext';
import Lessonss from './lessons/Lessonss';
import LoginForm from './registration/LoginForm';
import RegistrationForm from './registration/RegistrationForm';
import RegisterForm from './registration/RegisterForm';
import UserProfile from './UserProfile/UserProfile';
import User from './components/AdminPanel';
import ProfileCard from './UserProfile/EditUserProfile';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/RegistrationForm" element={<RegistrationForm />} /> 
            <Route path="/LoginForm" element={<LoginForm />} /> 
            <Route path="/lessonss" element={<ProtectedRoute component={Lessonss}/>} /> 
            <Route path="/Quiz" element={<ProtectedRoute component={Quiz}/>} /> 
            <Route path="/RegisterForm" element={<ProtectedRoute component={RegisterForm} />} />
            <Route path="/profileCard" element={<ProtectedRoute component={ProfileCard} />} />
            <Route path="/user-profile" element={<ProtectedRoute component={UserProfile} />} />
            <Route path="/admin" element={<ProtectedRoute component={User} />} />
            <Route path="/loginFormAdmin" element={<ProtectedRoute component={LoginFormAdmin} />} />
            <Route path="/loginFormAdmin" element={<ProtectedRoute component={LoginPage} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
