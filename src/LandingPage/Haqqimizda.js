import React from "react";
import "./Haqqimizda.css";

const Haqqimizda = () => {
  return (
    
   <div style={{backgroundColor: "#1F203F"}}>
     <div id="courses" className="learn-haqqimizda-content">
     <div className="haqqimizda-instructor">
        <img className="haqqimizdaphoto" src="/haqqimizdaphoto.jpeg" alt="haqqimizdaphoto" />
      </div>
      <div className="learn-haqqimizda-two">
        <div className="learn-haqqimizda-three">
        <p style={{ color: "#50BB27", marginBottom: "20px" }}> Kursumuz haqqında</p> 
          <span style={{color: "white"}}>Biz <span style={{ color: "#50BB27" }}> sürücülük </span> imtahanlarından keçmək üçün sizə təlim keçəcək   <span style={{ color: "#50BB27" }}>  online </span>   sürücülük platformuyuq</span>
          <p style={{color: "white", marginTop: "20px"}}>
          Bizim kursumuz, sürücülüyü tədris etmək və güvənli sürücüləri yetişdirmək məqsədilə sizin ayağınıza gəlib. Həmçinin, daha təcrübəli sürücülərə, yenilənmiş qaydalar, yeni nəqliyyat texnologiyaları və sürücülük mənəviyyatı haqqında ətraflı məlumatlar verilir.
          </p>
        </div>

        <div className="learn-haqqimizda-info">
         <InfoItem
  Icon={<img src={process.env.PUBLIC_URL + "/gift.svg"} alt="Clock Icon"/>}
  text="Testlər üzərində izahlar"
  
/>


         <InfoItem
  Icon={<img src={process.env.PUBLIC_URL + "/gift.svg"} alt="Clock Icon"/>}
  text="Testlər üzərində izahlar"
/>


         <InfoItem
  Icon={<img src={process.env.PUBLIC_URL + "/gift.svg"} alt="Clock Icon"/>}
  text="Testlər üzərində izahlar"
/>

<InfoItem
  Icon={<img src={process.env.PUBLIC_URL + "/gift.svg"} alt="Clock Icon"/>}
  text="Testlər üzərində izahlar"
/>


         {/* <InfoItem
  Icon={<img src={process.env.PUBLIC_URL + "/surprize.svg"} alt="Clock Icon"/>}
  text="Ətraflı və asan şəkildə izah edilən video dərslər."
  textt="Burada ek bir açıklama veya metin olabilir." // Bu şekilde `textt` prop'unu geçirin
/> */}

        </div>
      </div>

     
    </div>
   </div>
  );
};

const InfoItem = ({ Icon, text }) => { // `textt` prop'unu da ekleyin
  return (
    <div className="haqqimizda-item">
      {Icon}
      <div className="containerİnfoİtem">
      <p style={{color: "white"}}>{text}</p>
      
      </div>
     
    </div>
  );
};



export default Haqqimizda;
