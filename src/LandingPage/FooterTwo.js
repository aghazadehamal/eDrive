import React from 'react';
import './Footer.css'; // Footer stil dosyası için
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const FooterTwo = () => {
  return (
    <footer className="footer">
      <img  src="/logoimage.png" alt="Novademy Logo" style={{ maxWidth: '250px'}} />
      <nav className="footer-nav">
        <ul className="nav-list">
          <li><a href="#neden-biz">Neden biz</a></li>
          <li><a href="#hakkimizda">Mentorumuz hakkında</a></li>
          <li><a href="#kurslar">Kursumuz hakkında</a></li>
          <li><a href="#ogrenim">Neler öğreneceksiniz?</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
      
      <hr className="footer-divider"/> {/* Yatay çizgi için eklenen kısım */}

      <div className="footer-content">
        <p>Biz interaktif derslerle genç vatandaşlarımızı sürücülük imtahanına hazırlaşdıran startup'ıq.</p>
        <div className="social-media-icons">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://instagram.com"><FaInstagramSquare /></a>
          <a href="https://linkedin.com"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
