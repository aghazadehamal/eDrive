import React, { useState } from 'react';
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";


function Question({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`question2 ${isOpen ? 'open' : ''}`}>
      <div className="question2__title" onClick={toggle}>
        {question}
        <div className="question2__icon">
          {isOpen ? <SlArrowDown /> : <SlArrowUp />}
        </div>
      </div>
      <div className={`question2__content ${isOpen ? 'open' : ''}`}>
        {answer}
      </div>
    </div>
  );
}

export default Question;
