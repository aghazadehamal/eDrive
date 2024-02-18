import React from 'react';
import './CampaignSection.css'; // İlgili CSS stil dosyası
import VideoCard from './VideoCard'; // VideoCard bileşenini import edin
import Countdown from './Countdown';

// Ana kampanya bölümü komponenti
const CampaignSection = () => {
  return (
    <div className="uniqueCampaignSection">
      <h1>Ayın sonuna qədər <span style={{color: "#50BB27"}}>₼59-a yox</span> , <span style={{color: "#50BB27"}}>₼39-a</span>  kursumuzu alın</h1>

      <div style={{display: "flex", justifyContent: "center"}}>
      <button className="uniqueCampaignButton">İndicə qeydiyyatdan keç</button>
      <Countdown targetDate="2024-12-31T23:59:59" />
      </div>
      

      <div className="uniqueVideoCards">
        {/* Video kartları burada kullanılacak */}
        <VideoCard url="/v1.MOV" />
        <VideoCard url="/v2.MOV" />
        <VideoCard url="v3.MOV" />
      </div>
    </div>
  );
};

export default CampaignSection;
