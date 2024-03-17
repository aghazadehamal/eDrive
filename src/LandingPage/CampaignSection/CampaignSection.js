import React from "react";
import "./CampaignSection.css";

import Countdown from "../Countdown/Countdown";
import { Link } from "react-router-dom";

const CampaignSection = () => {
  return (
    <div className="uniqueCampaignSection">
      <p className="uniqueCampaignSectionp">
        <span style={{ color: "#50BB27" }}>DYP</span> imtahanlarına{" "}
        <span style={{ color: "#50BB27" }}>online</span> olaraq hazırlaş
      </p>

      <p className="uniqueCampaignSectionpTwo">

      DYP sürücülük imtahanlarına Edurive ilə hazırlaş. Ayın sonuna qədər kursumuzu <span style={{ color: "#50BB27" }}>₼59-a yox</span> ,{" "}
        <span style={{ color: "#50BB27" }}>₼39-a</span> alın. Öz potensialınızı maksimuma çıxarmaq üçün bu fürsəti qaçırmayın.
      </p>

      <div >
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
        <span >
  endirim bitir:
</span>
        <Countdown targetDate="2024-12-31T23:59:59" />

        </div>
        
      </div>
    </div>
  );
};

export default CampaignSection;
