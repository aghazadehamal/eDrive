import { useState } from "react";
import './FAQSection.css'; 

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`uniqueFaqItem ${isOpen ? 'uniqueOpen uniqueFaqItemOpen' : ''}`}>
      <div className="uniqueFaqQuestion" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className="uniqueFaqIcon">{isOpen ? '▼' : '►'}</span>
      </div>
      {isOpen && <div className="uniqueFaqAnswer">{answer}</div>}
    </div>
  );
};



const FAQSectionTwo = () => {
  return (
    <div className="uniqueFaqSection">
      <h2>FAQ</h2>
      <p style={{marginTop: "20px", marginBottom: "20px"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. .</p>
      <FAQItem
        question="Question text goes here"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      />
       <FAQItem
        question="Question text goes here"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      />
       <FAQItem
        question="Question text goes here"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      />
       <FAQItem
        question="Question text goes here"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      />
       <FAQItem
        question="Question text goes here"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      />
    
      <div className="uniqueFaqContact">
        <h3>Sualınız qalıb?</h3>
        <p>Bizimlə əlaqə saxlayıb kurs haqqında daha ətraflı məlumat əldə edə bilərsiniz</p>
        <button>Əlaqəyə keç!</button>
      </div>
    </div>
  );
};

export default FAQSectionTwo;
