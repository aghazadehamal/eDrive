import React from 'react';
import './WhyUsSection.css'; // İlgili CSS stil dosyası
import {  MdComputer, MdLibraryBooks } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";


// Tek bir kart için komponent
const FeatureCard = ({ Icon, title, description }) => {
    return (
      <div className="uniqueFeatureCard">
        <div className="uniqueIcon"><Icon /></div> {/* React Icons bileşenini JSX olarak kullan */}
        <h3 className="uniqueTitle">{title}</h3>
        <p className="uniqueDescription">{description}</p>
      </div>
    );
};

// "Neden Biz?" bölümü için ana komponent
const WhyUsSection = () => {
  return (
    <div className="uniqueWhyUsSection">
      <h2>Niyə biz?</h2>
      <div className="uniqueCardsContainer">
        <FeatureCard
          Icon={MdAttachMoney} // React Icons bileşenini prop olarak geçir
          title="Münasib qiymət"
          description="Kurslarımızın qiyməti hər bir yaşayış qrupu üçün münasibdir."
        />
        <FeatureCard
          Icon={MdComputer} // React Icons bileşenini prop olarak geçir
          title="Online tədris"
          description="EduDrive ilə makanda ayrı formada iştiraka ehtiyacınız olmayacaq."
        />
        <FeatureCard
          Icon={MdLibraryBooks} // React Icons bileşenini prop olarak geçir
          title="Geniş izah"
          description="Öncədən yazılan video materiallarla geniş formada izah və hər bir mövzü üçün testlərlə praktika."
        />
      </div>
    </div>
  );
};

export default WhyUsSection;
