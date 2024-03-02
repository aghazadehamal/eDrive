import React from 'react';
import './CampaignSection.css'; // İlgili CSS stil dosyası

import Countdown from '../Countdown/Countdown';
import { Link } from 'react-router-dom';

// Ana kampanya bölümü komponenti
const CampaignSection = () => {
  return (
    <div className="uniqueCampaignSection">
      <p>Ayın sonuna qədər <span style={{color: "#50BB27"}}>₼59-a yox</span> , <span style={{color: "#50BB27"}}>₼39-a</span>  kursumuzu alın</p>

      <div style={{display: "flex", justifyContent: "center"}}>
        <Link to="/RegistrationForm">
        <button className="uniqueCampaignButton">İndicə qeydiyyatdan keç</button>
        </Link>
     
      <Countdown targetDate="2024-12-31T23:59:59" />
      </div>
      

     
    </div>
  );
};

export default CampaignSection;
