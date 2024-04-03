import React from "react";
import { Link } from "react-router-dom";
import "./NavbarTwo.css";
import { SiScrollreveal } from "react-icons/si";
import { useState } from "react";
import NavNavBar from "../LandingPage/NavNavBar";

function NavbarTwo() {
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
  <>
    <div className="customNavbar">
      <img
        src="/edurive.svg"
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
      <Link to="/lessonData"   style={{textDecoration: "none"}} className="kabinetim"  >
                Kabinet
                </Link>
                <button
          className="ToggleButton"
          onClick={toggleAssideLeftVisibility}
        >
         <img src={`${process.env.PUBLIC_URL}/menu.svg`} alt="menu" />
        </button>
      </div>
     
    </div>
    {showAssideLeft && <NavNavBar className="w-1/4" />}
    </>
  );
}

export default NavbarTwo;
