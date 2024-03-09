import React, { useState } from 'react';
import './QuizDetails.css';

function QuizDetails({ quiz }) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResults, setShowResults] = useState(false); // Bu satırı ekleyin
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  const [showIncorrectAnswers, setShowIncorrectAnswers] = useState(false);
  const [detailedResults, setDetailedResults] = useState({ correctAnswers: [], incorrectAnswers: [] });

  const getOptionClass = (option, correctOptionId, selectedOptionId) => {
    if (option.id === correctOptionId) {
      return "option correct"; // Doğru cevap için yeşil arka plan
    } else if (option.id === selectedOptionId) {
      return "option incorrect"; // Seçilen fakat yanlış cevap için kırmızı arka plan
    } else {
      return "option"; // Diğer seçenekler için varsayılan stil
    }
  };

  const handleOptionClick = (questionId, optionId) => {
    setSelectedOptions({ ...selectedOptions, [questionId]: optionId });
  };

  const handleSubmit = () => {
    setShowCorrectAnswers(false);
    setShowIncorrectAnswers(false);
    const results = calculateResults();
    setDetailedResults(results);
    setShowResults(true);
    setShowCorrectAnswers(true); // Doğru cevaplar otomatik gösterilsin
  
    // Sayfayı en üste kaydır
    window.scrollTo(0, 0);
  };
  
  

  const calculateResults = () => {
    let correctAnswers = [];
    let incorrectAnswers = [];
    quiz.questionResponses.forEach(question => {
      const selectedOption = question.optionResponses.find(option => option.id === selectedOptions[question.id]);
      if (selectedOption && selectedOption.correctOption) {
        correctAnswers.push(question);
      } else if (selectedOption) {
        incorrectAnswers.push(question);
      }
    });
    return { correctAnswers, incorrectAnswers };
  };

  const handleResetQuiz = () => {
    setSelectedOptions({});
    setShowResults(false);
    setShowCorrectAnswers(false);
    setShowIncorrectAnswers(false);
    setDetailedResults({ correctAnswers: [], incorrectAnswers: [] });
    // Sayfayı en üste kaydırabilirsiniz, eğer gerekli görürseniz
    window.scrollTo(0, 0);
  };

  if (showResults) {
    return (
      <div>
        <div className='containertCorrect'>
  <button 
    className={`button correct ${showCorrectAnswers ? 'active' : ''}`}
    onClick={() => {
      setShowCorrectAnswers(!showCorrectAnswers);
      if (showIncorrectAnswers) {
        setShowIncorrectAnswers(false);
      }
    }}
  >
    Doğru Cevaplar  <span className='correctSpan'> {detailedResults.correctAnswers.length}  </span> 
  </button>
  <button
    className={`button incorrect ${showIncorrectAnswers ? 'active' : ''}`} 
    onClick={() => {
      setShowIncorrectAnswers(!showIncorrectAnswers);
      if (showCorrectAnswers) {
        setShowCorrectAnswers(false);
      }
    }}
  >
    Yanlış Cevaplar <span className='falseSpan'>{detailedResults.incorrectAnswers.length}  </span> 
  </button>
</div>

       

        {showCorrectAnswers && (
        <div>
          {/* <h3>Doğru Cavblanan Suallar:</h3> */}
          <ul style={{listStyleType: "none"}}>
            {detailedResults.correctAnswers.map((question) => {
              const correctOptionId = question.optionResponses.find(option => option.correctOption).id;
              const selectedOptionId = selectedOptions[question.id];

              return (
                <li key={question.id} className="question">
                  <h4>{question.text}</h4>
                  {question.optionResponses.map((option) => (
                    <div key={option.id} className={getOptionClass(option, correctOptionId, selectedOptionId)}>
                      {option.optionText}
                    </div>
                  ))}
                </li>
              );
            })}
          </ul>
          {showResults && (
  <div > 
    {/* Mevcut sonuçlar ve düğmeler */}
    <button className='quizRestart' onClick={handleResetQuiz}>Təkrar test et</button>
  </div>
)}
        </div>
      )}

{showIncorrectAnswers && (
        <div>
          {/* <h3>Yanlış Cavablanan Suallar:</h3> */}
          <ul style={{listStyleType: "none"}}>
            {detailedResults.incorrectAnswers.map((question) => {
              const selectedOptionId = selectedOptions[question.id];
              const correctOptionId = question.optionResponses.find(option => option.correctOption).id;

              return (
                <li key={question.id} className="question">
                  <h4>{question.text}</h4>
                  {question.optionResponses.map((option) => (
                    <div key={option.id} className={getOptionClass(option, correctOptionId, selectedOptionId)}>
                      {option.optionText}
                    </div>
                  ))}
                </li>
              );
            })}
          </ul>
         
          {showResults && (
  <div > 
    {/* Mevcut sonuçlar ve düğmeler */}
    <button className='quizRestart' onClick={handleResetQuiz}>Təkrar test et</button>
  </div>
)}
        </div>

      )}
    

      </div>
    );
  }

  
 
  

 



  

  return (
    <div className="quiz-details">
     <div>
  <h2>{quiz.quizName}</h2>
  {quiz.questionResponses.map(question => (
    <div key={question.id} className="question">
      <h4>{question.text}</h4>
      <div>
        {question.optionResponses.map(option => (
          <div key={option.id} className="option">
            <label className="option-label">
              <input
                type="radio"
                name={question.id}
                value={option.id}
                checked={selectedOptions[question.id] === option.id}
                onChange={() => handleOptionClick(question.id, option.id)}
                className="option-input"
              />
              <span className="custom-radio"></span> {/* Custom radio button styling */}
              {option.optionText}
            </label>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>


<button className="submit-button" onClick={handleSubmit}>Testi tamamla</button>


     

    </div>
  );
}

export default QuizDetails;
