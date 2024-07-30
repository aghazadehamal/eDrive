import React, { useEffect, useState } from "react";
import "./CampaignSection.css";
import Countdown from "../Countdown/Countdown";
import { Link } from "react-router-dom";

const CampaignSection = () => {
  const [targetDate, setTargetDate] = useState(null);

  useEffect(() => {
    const savedTargetDate = localStorage.getItem("targetDate");

    if (!savedTargetDate) {
      const newTargetDate = new Date("2024-08-06T00:00:00");
      localStorage.setItem("targetDate", newTargetDate);
      setTargetDate(newTargetDate);
    } else {
      setTargetDate(new Date(savedTargetDate));
    }
  }, []);

  if (!targetDate) {
    return <div>Loading...</div>;
  }

  return (
    <div className="uniqueCampaignSection">
      <p className="uniqueCampaignSectionp">
        <Link to="/loginFormAdmin" style={{ color: "#50BB27", cursor: "auto" }}>DYP</Link> imtahanlarına{" "}
        <span style={{ color: "#50BB27" }}>online</span> olaraq hazırlaş
      </p>

      <p className="uniqueCampaignSectionpTwo">
        Bir dəfə ödə, istədiyin vaxt hazırlaş. Yalnız 1 həftə üçün keçərli endirimlə <span style={{ color: "#50BB27" }}>₼59</span> əvəzinə{" "}
        <span style={{ color: "#50BB27" }}>₼39</span> ödəmək şansını qaçırma!
      </p>

      <div>
        <Link to="/RegistrationForm">
          <button className="uniqueCampaignButton">
            İndicə qeydiyyatdan keç
          </button>
        </Link>
        <div className="containerSpanCountDown">
          <img
            src={`${process.env.PUBLIC_URL}/clock.svg`}
            alt="Clock Icon"
            style={{ marginRight: "8px" }}
          />
          <span>endirim bitir:</span>
          <Countdown targetDate={targetDate} />
        </div>
      </div>
    </div>
  );
};

export default CampaignSection;
