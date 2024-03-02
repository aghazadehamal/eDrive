import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  // Sayfa içi kaydırma işlemi için fonksiyon
  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); // Varsayılan davranışı engelle
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="customNavbar">
      <img src="/edurive.svg" alt="Novademy Logo" style={{ maxWidth: '250px' }} />
      <nav className="customNav">
        {/* href kullanarak ve onClick ile sayfa içi kaydırma */}
        <a href="#why-us" className="customNavLink" onClick={(e) => scrollToSection(e, 'why-us')}>Niyə biz?</a>
        <a href="#courses" className="customNavLink" onClick={(e) => scrollToSection(e, 'courses')}>Kursumuz haqqında</a>
        <a href="#mentor" className="customNavLink" onClick={(e) => scrollToSection(e, 'mentor')}>Mentor haqqında</a>
      </nav>
      <div className="customButtons">
        <Link to="/LoginForm"><button className="customBtn customLogin">Daxil ol</button></Link>
        <Link to="/RegistrationForm"><button className="customBtn customRegister">Qeydiyyatdan keç</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
