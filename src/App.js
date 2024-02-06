import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage/FirstPage';

import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Home from './Lessonss';
import Quiz from './FirstPage/Quiz';
import PaymentPage from './FirstPage/PaymentPage';
// App.js veya index.js içinde
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import KullaniciYonetimPaneli from './FirstPage/KullaniciYonetimPaneli';
import Lessonss from './Lessonss';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} /> 
          <Route path="/LoginForm" element={<LoginForm />} /> 
          <Route path="/lessonss" element={<Lessonss />} /> {/* Başka bir sayfa için rota */}
          {/* Buraya ihtiyacınıza göre daha fazla Route ekleyebilirsiniz. */}
          <Route path="/Quiz" element={<Quiz />} /> 
          <Route path="/PaymentPage" element={<PaymentPage />} /> 
          <Route path="/kullaniciYönetim" element={<KullaniciYonetimPaneli />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
