import React from 'react';
import './LearnDrivingSection.css';
import { FaCarAlt, FaVideo, FaChalkboardTeacher, FaTasks } from "react-icons/fa";

const LearnDrivingSection = () => {
  return (
    <div className="learn-driving-container">
      <div className="learn-driving-header">
        <h1>Sürücülüyü peşəkarlardan öyrən</h1>
        <p>Abbaszadə Ümid 7 il ərzində sürücülük təlimində geniş təcrübə qazanıb. O, sürücülük bacarıqlarını inkişaf etdirmək istəyən hər kəs üçün mükəmməl bir seçimdir. Ümid müəllim, hər bir mövzunu vizualizasiya və ətraflı izahatla özündə birləşdirən video dərslər çəkir.</p>
      </div>
      <div className="learn-driving-content">
        <div className="learn-driving-info">
          {/* React Icons ile ikonlar */}
          <InfoItem Icon={FaVideo} text="Ətraflı və asan şəkildə izah edilən video dərslər." />
          <InfoItem Icon={FaTasks} text="Hər biz mövzu üçün test formatında praktika." />
          <InfoItem Icon={FaChalkboardTeacher} text="Morbi sed imperdiet in ipsum, adipiscing elit dui lectus." />
          <InfoItem Icon={FaCarAlt} text="Morbi sed imperdiet in ipsum, adipiscing elit dui lectus." />
        </div>
        <div className="learn-driving-instructor">
          {/* Eğitmenin resmi */}
          <img src="/mentor.svg" alt="Eğitmen" />
        </div>
      </div>
    </div>
  );
}

const InfoItem = ({ Icon, text }) => {
  return (
    <div className="info-item">
      
      <Icon className="info-icon" /> {/* React component olarak Icon */}
      <p>{text}</p>
    </div>
  );
}

export default LearnDrivingSection;
