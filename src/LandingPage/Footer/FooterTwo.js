import React from "react";
import "./Footer.css";

const FooterTwo = () => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer">
      <img src="/logoimage.svg" alt="Novademy Logo" className="footerLogo" />
      <nav className="footer-nav">
        <ul className="nav-list">
          <li>
            <a
              href="#why-us"
              className="customNavLink"
              onClick={(e) => scrollToSection(e, "why-us")}
            >
              Niyə biz
            </a>
          </li>
          <li>
            <a
              href="#mentor"
              className="customNavLink"
              onClick={(e) => scrollToSection(e, "mentor")}
            >
              Mentorumuz haqqında
            </a>
          </li>
          <li>
            <a
              href="#courses"
              className="customNavLink"
              onClick={(e) => scrollToSection(e, "courses")}
            >
              Kursumuz haqqında
            </a>
          </li>
          <li>
            <a
              href="#what"
              className="customNavLink"
              onClick={(e) => scrollToSection(e, "what")}
            >
              Nələr öyrənəcəksiz?
            </a>
          </li>
          <li>
            <a
              href="#courses"
              className="customNavLink"
              onClick={(e) => scrollToSection(e, "courses")}
            >
              FAQ
            </a>
          </li>
        </ul>
      </nav>

      <hr className="footer-divider" />

      <div className="footer-content">
        <p>
          Biz interaktif dərslərlə gənc vətəndaşlarımızı sürücülük imtahanına
          hazırlaşdıran startup'ıq.
        </p>
        <div className="social-media-icons">
          <a href="https://facebook.com">
            <img
              src={process.env.PUBLIC_URL + "/icons/Facebook.png"}
              alt="Facebook"
              className="socialIcon"
            />
          </a>
          <a href="https://instagram.com">
            <img
              src={process.env.PUBLIC_URL + "/icons/Instagram.png"}
              alt="Instagram"
              className="socialIcon"
            />
          </a>
          <a href="https://linkedin.com">
            <img
              src={process.env.PUBLIC_URL + "/icons/Linkedin.png"}
              alt="LinkedIn"
              className="socialIcon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
