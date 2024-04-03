import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginFormAdmin from "../../components/LoginFormAdmin";
import { SiScrollreveal } from "react-icons/si";
import { useState } from "react";
import NavNavBar from '../NavNavBar';

function Navbar() {
  const [showAssideLeft, setShowAssideLeft] = useState(false);
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const toggleAssideLeftVisibility = () => {
    setShowAssideLeft((prev) => !prev);
  };

  return (
    <div className="customNavbar">
    
      <img className="logoNavBar"
        src="/edurive.svg"
        alt="Novademy Logo"
       
      />

<img className="favlogologo"
        src="/favlogologo.png"
        alt="Novademy Logo"
       
      />
     
     
      
      <nav className="customNav">
      <a
         href="#courses"
          className="customNavLink"
          onClick={(e) => scrollToSection(e, "courses")}
        >
          Biz kimik?
        </a>
        <a
          href="#why-us"
          className="customNavLink"
          onClick={(e) => scrollToSection(e, "why-us")}
        >
          Niyə biz?
        </a>
        <a
          href="#courses"
          className="customNavLink"
          onClick={(e) => scrollToSection(e, "courses")}
        >
          Kursumuz haqqında
        </a>
        <a
          href="#mentor"
          className="customNavLink"
          onClick={(e) => scrollToSection(e, "mentor")}
        >
          Mentor haqqında
        </a>
      </nav>
      <div className="customButtons">
        <Link to="/LoginForm">
          <button className="customBtn customLogin">Daxil ol</button>
        </Link>
        <Link to="/RegistrationForm">
          <button className="customBtn customRegister">Qeydiyyatdan keç</button>
        </Link>
        <Link style={{display: "none"}} to="/loginFormAdmin">
          <img className="avatarAdmin"
            src={`${process.env.PUBLIC_URL}/Avatar.svg`}
            alt="Clock Icon"
            style={{ width: "43px", height: "38px", marginLeft: "5px" }}
          />
        </Link>
        <button
          className="ToggleButton"
          
          onClick={toggleAssideLeftVisibility}
        >
          <SiScrollreveal />
        </button>
      </div>
      {showAssideLeft && <NavNavBar  className="w-1/4" />}
    </div>
  );
}

export default Navbar;
