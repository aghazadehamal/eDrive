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
      <span className='spanFirst'  >FAQ</span>
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
        <p>Sualınız qalıb?</p>
        
        <button style={{marginTop: "10px"}}> Bizimlə əlaqə saxlayın</button>
      </div>
    </div>
  );
};

export default FAQSectionTwo;
