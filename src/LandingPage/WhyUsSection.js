import React from 'react';
import './WhyUsSection.css'; // İlgili CSS stil dosyası



// Tek bir kart için komponent
// Tek bir kart için komponent
const FeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="uniqueFeatureCard">
      <div className="uniqueIcon">{Icon}</div> {/* React elementini doğrudan kullan */}
      <span className="uniqueTitle">{title}</span>
      <p className="uniqueDescription">{description}</p>
    </div>
  );
};

// "Neden Biz?" bölümü için ana komponent
const WhyUsSection = () => {
return (
  <div id="why-us"  className="uniqueWhyUsSection">
    <span style={{fontSize: "40px", lineHeight: "60px", fontWeight: "700"}}>Niyə biz?</span>
    <div className="uniqueCardsContainer">
      <FeatureCard
        Icon={<img src={process.env.PUBLIC_URL + '/icons/niyeThree.svg'} alt="Clock Icon" />}
        title="Münasib qiymət"
        description="Kurslarımızın qiyməti hər bir yaşayış qrupu üçün münasibdir."
      />
     <FeatureCard
        Icon={<img src={process.env.PUBLIC_URL + '/icons/niyeTwo.svg'} alt="Clock Icon" />}
        title="Münasib qiymət"
        description="Kurslarımızın qiyməti hər bir yaşayış qrupu üçün münasibdir."
      />
       <FeatureCard
        Icon={<img src={process.env.PUBLIC_URL + '/icons/niyeOne.svg'} alt="Clock Icon" />}
        title="Münasib qiymət"
        description="Kurslarımızın qiyməti hər bir yaşayış qrupu üçün münasibdir."
      />
    </div>
  </div>
);
};

export default WhyUsSection;

