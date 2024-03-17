import React from "react";
import { Link } from "react-router-dom";


function NavbarTwo() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="customNavbar">
      <img
        src="/edurive.svg"
        alt="Novademy Logo"
        style={{ maxWidth: "250px" }}
      />
      
      <nav className="customNav">
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

        <Link to="/lessonData"  style={{textDecoration: "none"}} className="quizRestart"  >
                Kabinetim
                </Link>
      </nav>
     
    </div>
  );
}

export default NavbarTwo;
