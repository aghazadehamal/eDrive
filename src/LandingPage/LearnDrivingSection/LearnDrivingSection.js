import React from "react";
import "./LearnDrivingSection.css";

const LearnDrivingSection = () => {
  return (
    
   <div className="containerData" >
     <div id="mentor" className="learn-driving-content">
      <div className="learn-driving-two">
        <div className="learn-driving-three">
        <p style={{ color: "#50BB27", marginBottom: "7px" }}> Mentor haqqında </p> 
          <span style={{color: "white"}}>Sürücülük təlimini  <span style={{ color: "#50BB27" }}> peşəkar </span>  <span style={{ color: "#50BB27" }}>  instruktorlar </span>   tərəfindən öyrən</span>
          <p style={{color: "white", marginTop: "20px"}}>
            Abbaszadə Ümid 7 il ərzində sürücülük təlimində geniş təcrübə
            qazanıb. O, sürücülük bacarıqlarını inkişaf etdirmək istəyən hər kəs
            üçün mükəmməl bir seçimdir. Ümid müəllim, hər bir mövzunu
            vizualizasiya və ətraflı izahatla özündə birləşdirən video dərslər
            çəkir.
          </p>
        </div>

        <div className="learn-driving-info">
         <InfoItem
  Icon={<img src={process.env.PUBLIC_URL + "/mentoroneicon.svg"} alt="Clock Icon"/>}
  text="Testlər"
  textt="Hər bölüm sonu instruktor tərəfindən hazırlanmış testlər sizi qarşılayır" 
/>


         <InfoItem
  Icon={<img src={process.env.PUBLIC_URL + "/mentortwoicon.svg"} alt="Clock Icon"/>}
  text="Testlər üzərində izahlar"
  textt="Testi tamamladıqdan sonra instruktor tərəfində testlər izah olunur" 
/>


         <InfoItem
  Icon={<img src={process.env.PUBLIC_URL + "/mentorthreeicon.svg"} alt="Clock Icon"/>}
  text="Yeni qaydalar"
  textt="Hər il yeni sürücülük qaydaları çıxır, və biz də sürücülük kurslarımızı bu yeniliklərə uyğun şəkildə tərtib edirik. " 
/>


       

        </div>
      </div>

     
    </div>
    <div className="learn-driving-instructor">
        <img className="teacherPhoto" src="/Mentor.svg" alt="Eğitmen" />
      </div>
   </div>
  );
};

const InfoItem = ({ Icon, text, textt }) => { 
  return (
    <div className="info-item">
      {Icon}
      <div className="containerİnfoİtem">
      <p style={{color: "white"}}>{text}</p>
      <p style={{color: "white"}}>{textt}</p> 
      </div>
     
    </div>
  );
};



export default LearnDrivingSection;
