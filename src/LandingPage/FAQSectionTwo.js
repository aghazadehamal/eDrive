import { useState } from "react";
import './FAQSection.css'; 



const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`uniqueFaqItem ${isOpen ? 'uniqueOpen uniqueFaqItemOpen' : ''}`}>
      <div className="uniqueFaqQuestion" onClick={() => setIsOpen(!isOpen)}>
        {question}
        {/* isOpen durumuna bağlı olarak yukarı veya aşağı ikonunu göster */}
        {isOpen ? (
          <img src={process.env.PUBLIC_URL + '/icons/yuxari.svg'} alt="Yukarı" className="uniqueFaqIcon" />
        ) : (
          <img src={process.env.PUBLIC_URL + '/icons/asagi.svg'} alt="Aşağı" className="uniqueFaqIcon" />
        )}
      </div>
      {isOpen && <div className="uniqueFaqAnswer">{answer}</div>}
    </div>
  );
};




const FAQSectionTwo = () => {
  return (
    <div className="uniqueFaqSection">
      <span className='spanFirst'  >FAQ</span>
     
      <FAQItem
        question=" Edurive nədir?"
        answer="Edurive hərtərəfli sürücülük dərsləri təklif edən onlayn sürücülük məktəbidir. Platformamızda 12 modul tapa bilərsiniz, bunların hər biri sürücülüyün bütün aspektlərini əhatə edən dərslərdən və testlərsən ibarətdir."
      />
       <FAQItem
        question="Kursun qiyməti nədir?"
        answer="Bütün dərslərə access 39 manatdır. Bu, 12 modulun hamısına giriş imkanı verən birdəfəlik ödənişdir."
      />
       <FAQItem
        question="Necə qeydiyyatdan keçib təlimə başlaya bilərəm?"
        answer="Təlimə başlamaq üçün saytımızda qeydiyyatdan keçməli, sonra da ödəniş etməlisiniz. Bundan sonra bütün dərslərə və testlərinə access əldə edəcəksiniz."
      />
       <FAQItem
        question="Təlimə başlamaq üçün əvvəlcədən sürücülük təcrübəsinə ehtiyacım var?"
        answer="Xeyr, kursumuz həm təzə başlayanlar, həm də sürücülük təcrübəsi olanlar üçün uyğundur."
      />
       <FAQItem
        question=" Kursda hansı mövzular əhatə olunur?"
        answer="Kursumuz yol hərəkəti qaydaları, sürücülük texnikası, təhlükəsizlik tədbirləri, fövqəladə halların idarə edilməsi və daha çox daxil olmaqla geniş mövzuları əhatə edir."
      />
       <FAQItem
        question="Kurs hansı dillərdə mövcuddur?"
        answer="Hazırda kursumuz Azərbaycan dilində təklif olunur. Gələcəkdə başqa dillərdə də kurslar təklif etmək üçün çalışırıq."
      />
    
      <div className="uniqueFaqContact">
        <p>Sualınız qalıb?</p>
        
        <button style={{marginTop: "10px"}}> Bizimlə əlaqə saxlayın</button>
      </div>
    </div>
  );
};

export default FAQSectionTwo;
