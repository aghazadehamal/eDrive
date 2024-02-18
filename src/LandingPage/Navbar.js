import React from 'react';
import './Navbar.css'; // İlgili CSS stil dosyası
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="customNavbar">
      <img  src="/edurive.jpg" alt="Novademy Logo" style={{ maxWidth: '250px'}} />
      <nav className="customNav">
        <a href="#about" className="customNavLink">Niyə biz?</a> {/* Linkler */}
        <a href="#mentor" className="customNavLink">Mentorumuz haqqında</a>
        <a href="#courses" className="customNavLink">Kursumuz haqqında</a>
      </nav>
      <div className="customButtons">
       
        <Link  to="/LoginForm"><button className="customBtn customLogin">Daxil ol</button> </Link>
       
       <Link to="/RegistrationForm">     <button className="customBtn customRegister">Qeydiyyatdan keç</button> </Link>
      </div>
    </div>
  );
}

export default Navbar;
