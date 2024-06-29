import React from "react";
import "./Haqqimizda.css";

const Haqqimizda = () => {
  return (
    <div style={{ backgroundColor: "#1F203F" }}>
      <div id="courses" className="learn-haqqimizda-content">
        <div className="haqqimizda-instructor">
          <img
            className="haqqimizdaphoto"
            src="/haqqimizdaphototwo.jpeg"
            alt="haqqimizdaphototwo"
          />
        </div>
        <div className="learn-haqqimizda-two">
          <div className="learn-haqqimizda-three">
            <p
              style={{
                color: "#50BB27",
                marginBottom: "7px",
                marginTop: "5px",
              }}
            >
              {" "}
              Kursumuz haqqında
            </p>
            <span style={{ color: "white" }}>
              Biz sizi <span style={{ color: "#50BB27" }}> sürücülük </span>{" "}
              imtahanında uğurlu nəticə almağınız üçün hazırlayan{" "}
              <span style={{ color: "#50BB27" }}> online </span> təhsil
              platformuyuq
            </span>
            <p style={{ color: "white", marginTop: "20px" }}>
              Bizim kursumuz, sürücülüyü tədris etmək və güvənli sürücüləri
              yetişdirmək məqsədilə sizin ayağınıza gəlib. Həmçinin, daha
              təcrübəli sürücülərə, yenilənmiş qaydalar, yeni nəqliyyat
              texnologiyaları və sürücülük mənəviyyatı haqqında ətraflı
              məlumatlar verilir.
            </p>
          </div>

          <div className="learn-haqqimizda-info">
            <InfoItem
              Icon={
                <img
                  src={process.env.PUBLIC_URL + "/haqqtesticon.svg"}
                  alt="haqqtesticon"
                />
              }
              text="Asan izah"
            />

            <InfoItem
              Icon={
                <img
                  src={process.env.PUBLIC_URL + "/gift.svg"}
                  alt="Clock Icon"
                />
              }
              text="Peşəkar instruktor"
            />

            <InfoItem
              Icon={
                <img
                  src={process.env.PUBLIC_URL + "/haqqplayicon.svg"}
                  alt="haqqplayicon"
                />
              }
              text="Testlər üzərində izahlar"
            />

            <InfoItem
              Icon={
                <img
                  src={process.env.PUBLIC_URL + "/haqqvideoicon.svg"}
                  alt="haqqvideoicon"
                />
              }
              text="Online tədris"
            />
          </div>
        </div>
      </div>


      <div className="haqqimizda-instructorResponsiv">
          <img
            className="haqqimizdaphoto"
            src="/haqqimizdaphototwo.jpeg"
            alt="haqqimizdaphototwo"
          />
        </div>
    </div>
  );
};

const InfoItem = ({ Icon, text }) => {
  return (
    <div className="haqqimizda-item">
      {Icon}
      <div className="containerİnfoİtem">
        <p style={{ color: "white" }}>{text}</p>
      </div>
    </div>
  );
};

export default Haqqimizda;
