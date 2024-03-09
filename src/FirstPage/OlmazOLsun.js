import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OlmazOlsun.css'; // VideoCard CSS dosyası
function OlmazOlsun() {
  const [courseData, setCourseData] = useState({ lessons: [], quizResponse: null });

  useEffect(() => {
    axios.get('https://edurive.onrender.com/v1/lesson/')
      .then(response => {
        // API'den gelen yanıtı kontrol et
        console.log(response.data);
        // API'den gelen veriyi doğru yapıda ayarla
        setCourseData(prevState => ({
          ...prevState,
          lessons: response.data.map(d => d.subjectResponse).flat(), // subjectResponse'ları düzleştir
          quizResponse: response.data.map(d => d.quizResponse).filter(q => q !== null) // null olmayan quizResponse'ları filtrele
        }));
      })
      .catch(error => {
        // Hata oluşursa konsola yaz
        console.error('There was an error fetching the data:', error);
      });
  }, []);

  return (
    <div>
        <h2 className="header">Ders ve Quiz Bilgileri</h2>
  {courseData.lessons.map((subject, index) => (
    <div key={index} className="lesson">
      <h3>{subject.subjectName}</h3>
      {subject.videoResponse && (
        <>
          <p>Video Başlığı: {subject.videoResponse.title}</p>
          <p>Video URL: <a href={subject.videoResponse.url} target="_blank" rel="noopener noreferrer" className="videoLink">Videoyu İzle</a></p>
          <p>Ücretli Mi?: {subject.videoResponse.requiresPaid ? 'Evet' : 'Hayır'}</p>
        </>
      )}
    </div>
  ))}
      {courseData.quizResponse && courseData.quizResponse.map((quiz, index) => (
  <div key={index}>
    <h3>Quiz Adı: {quiz.quizName}</h3>
    {quiz.questionResponses && quiz.questionResponses.map((question, qIndex) => (   
      <div key={qIndex}>
        <p>Soru: {question.text}</p>
        {question.optionResponses && question.optionResponses.map((option, oIndex) => (
          <div key={oIndex}>
            <input type="radio" name={`question-${question.id}`} value={option.optionText} id={`option-${option.id}`} />
            <label htmlFor={`option-${option.id}`}>{option.optionText}</label>
          </div>
        ))}
      </div>
    ))}
  </div>
))}
    </div>
  );
}

export default OlmazOlsun;
