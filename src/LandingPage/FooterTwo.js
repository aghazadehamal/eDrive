import React from 'react';
import './Footer.css'; // Footer stil dosyası için


const FooterTwo = () => {
  return (
    <footer className="footer">
      <img  src="/logoimage.svg" alt="Novademy Logo" className='footerLogo' />
      <nav className="footer-nav">
        <ul className="nav-list">
          <li><a href="#neden-biz">Niyə biz</a></li>
          <li><a href="#hakkimizda">Mentorumuz haqqında</a></li>
          <li><a href="#kurslar">Kursumuz haqqında</a></li>
          <li><a href="#ogrenim">Nələr öyrənəcəksiz?</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
      
      <hr className="footer-divider"/> {/* Yatay çizgi için eklenen kısım */}

      <div className="footer-content">
        <p >Biz interaktif dərslərlə gənc vətəndaşlarımızı sürücülük imtahanına hazırlaşdıran startup'ıq.</p>
        <div className="social-media-icons">
  <a href="https://facebook.com">
    <img src={process.env.PUBLIC_URL + '/icons/Facebook.png'} alt="Facebook" className="socialIcon" />
  </a>
  <a href="https://instagram.com">
    <img src={process.env.PUBLIC_URL + '/icons/Instagram.png'} alt="Instagram" className="socialIcon" />
  </a>
  <a href="https://linkedin.com">
    <img src={process.env.PUBLIC_URL + '/icons/Linkedin.png'} alt="LinkedIn" className="socialIcon" />
  </a>
</div>

      </div>
    </footer>
  );
};

export default FooterTwo;
