// FAQSection.js
import React from 'react';
import Question from './Question';

function FAQSection() {
  const faqData = [
    {
      question: "novademy sürücülük kursu nədir ve sürücülük təlimi almaq istəyənlərə necə kömək edir?",
      answer: "Burada bu sualın cevabını verə bilərsiniz."
    },
    {
      question:"novademy sürücülük kursu hansı sürücülük imtahanlarına hazırlıq təmin edir və hansı mövzuları əhatə edir?",
      answer:"novademy'də sürücülük vəsiqəsi almaq üçün lazım olan bütün sürücülük teorisi, yol hərəkəti qaydaları, ilkin tibbi yardım  və sürüş pratiki daxil olmaqla, sürücülük imtahanlarının bütün mövzularını əhatə edən kurslar mövcuddur."
    },
    {
      question: "novademy sürücülük kursu üçün ödənişləri necə edə bilərəm və ödəniş prosesi təhlükəsizdir mi?",
      answer: "Hal hazırda ödəniş M10 vasitəsilə həyata keçirilir.  "
    },
  ];

  return (
    <div className="faq-section">
      <h1 style={{marginLeft:"35%", fontSize: "40px"}}>Suallar və Cavablar</h1>
      {faqData.map((faq, index) => (
        <Question key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQSection;
