import React, { useEffect, useState } from "react";

function QuestionCard({
  question,
  options,
  onAnswer,
  questionNumber,
  totalQuestions,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [question]);

  const handleClick = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);
    onAnswer(option.isCorrect);
  };

  const getButtonStyle = (option) => {
    if (!isAnswered) {
      return "btn";
    }
    if (option.isCorrect) {
      return "btn correct";
    } else if (selectedOption === option && !option.isCorrect) {
      return "btn incorrect";
    } else {
      return "btn";
    }
  };

  return (
    <div className="card2">
      <h3 className="question-header">
        <span className="question-number">
          Sual {questionNumber}/{totalQuestions}:{" "}
        </span>
        {question}
      </h3>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(option)}
            disabled={isAnswered}
            className={getButtonStyle(option)}
          >
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}
export default QuestionCard;
