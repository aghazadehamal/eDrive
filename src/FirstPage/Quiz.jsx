import React, { useState } from 'react';
import QuestionCard from './QuestionsCard';
import { Link } from 'react-router-dom';

const questions = [

  {
    questionText: '  Yol qəzasında ilk yardımın əsas addımları nələrdir?',
    answerOptions: [
      { answerText: 'Zədəliləri hərəkət etdirərək daha rahat bir yere götür.', isCorrect: false },
      { answerText: 'Yaralıya su və ya qida verərək onun daha yaxşı hiss etməsini təmin et.', isCorrect: false },
      { answerText: '		 Təhlükəsizliyi təmin et, vəziyyəti qiymətləndir, yardım çağır, həyat əlamətlərini yoxla, qanamanı dayandır.', isCorrect: true  },
      { answerText: 'İlk yardım çantasını açmadan əvvəl zədəli ilə müzakirə et ki, nə istədiyini öyrən.', isCorrect: false },
    ],
  },
  {
    questionText: 'Aşağıdakılardan hansı avtomobildə olması mütləq olan təhlükəsizlik avadanlıqlarından biri deyil?',
    answerOptions: [
      { answerText: 'Yanğına qarşı söndürücü', isCorrect: false },
      { answerText: 'reflektiv jilet', isCorrect: true },
      { answerText: ' ilk yardım çantası', isCorrect: false },
      { answerText: 'ehtiyat təkər', isCorrect: false },
    ],
  },

  {
    questionText: ' Aşağıdakılardan hansı səhv sollamanın nəticələrindən biri ola bilər?',
    answerOptions: [
      { answerText: 'Cərimə alınması', isCorrect: false },
      { answerText: 'Sürücülük vəsiqəsinin lisenziyanın geri çıxarılması', isCorrect: false },
     
      { answerText: 'Daha sürətli bir səyahət əldə etmək', isCorrect: false },
      { answerText: '	Qəza riskinin artması', isCorrect: true  },
    ],
  },


  {
    questionText: 'İçkinin sürücü üzərindəki təsirləri nələrdir?',
    answerOptions: [
      { answerText: 'Reaksiya müddətinin uzanması', isCorrect: true  },
      { answerText: 'Koordinasiyanın artması', isCorrect: false },
      { answerText: 'Diqqətin artması', isCorrect: false },
    
      { answerText: 'Yol qaydalarına daha səmimi yaxınlaşmaq', isCorrect: false },
    ],
  },
  {
    questionText: ' Sfetaforun yaşıl işığı yanarkən piyada keçidində piyadalara nə etməlisiniz?',
    answerOptions: [
      { answerText: 'Sfetaforun qabağında drift etmək', isCorrect: false },
      { answerText: '		Piyadalara yol vermək və təhlükəsiz keçməsini təmin etmək', isCorrect: true  },
      { answerText: ' Maşını	piyadalara  çırpmaq və yoldan kənara sürmək', isCorrect: false },
     
      { answerText: 'Durmadan siqnala basmaq', isCorrect: false },
    ],
  },

  {
    questionText: '  Aşağıdakılardan hansı mator yağının vəzifələrindən biri deyil?',
    answerOptions: [
      { answerText: 'Matoru soyutma', isCorrect: false },
      { answerText: 'aşınmanın qarşısını almaq', isCorrect: false },
      { answerText: '		yanacaq sərfiyyatını artırma', isCorrect: true  },
      { answerText: 'təmizləmə', isCorrect: false },
    ],
  },
  {
    questionText: ' Qarlı və buzlu yollarda avtomobil idarə edərkən hansı tədbirlər alınmalıdır?',
    answerOptions: [
      { answerText: 'Ani hərəkətlərdən çəkinmək', isCorrect: false },
      { answerText: 'İzləmə məsafəsini qısaltmaq', isCorrect: false },
      { answerText: '		Daha aşağı sürətlə sürmək', isCorrect: true  },
      { answerText: 'Sürəti artırmaq', isCorrect: false },
    ],
  },

  {
    questionText: ' Aşağıdakılardan hansı diqqəti dağıdıcı bir hərəkət kimi qəbul edilmir?',
    answerOptions: [
      { answerText: '	Naviqasiya istifadə etmək', isCorrect: false },
      { answerText: '		düzgün bir şəkildə izləmə məsafəsini ayarlamaq ', isCorrect: true  },
      { answerText: 'telefonda danışmaq', isCorrect: false },
    
      { answerText: ' yemək yemək', isCorrect: false },
    ],
  },
  {
    questionText: '  Yol işarə lövhələrinin rəngləri nəyi ifadə edir?',
    answerOptions: [
      { answerText: '	Lövhələrin rəngləri, xəbərdarlıq, qadağan, məlumatlandırma və yönləndirmə kimi fərqli məqsədləri göstərir.	', isCorrect: true  },
      { answerText: 'Yol işarələrinin rəngləri hava şəraiti barədə məlumat verir.', isCorrect: false },
      { answerText: 'Rəngsiz trafik işarələri hər hansı bir məqsədi yoxdur.', isCorrect: false },
     
      { answerText: 'Qara rəngli lövhələr yolun təmiz olduğunu göstərir.', isCorrect: false },
    ],
  },
  {
    questionText: ' Mator yağının vəzifələrindən biri nədir?',
    answerOptions: [
      { answerText: '	Yanacaq sərfiyyatını artırmaq', isCorrect: false },
      { answerText: 'Radiatoru təmizləmək', isCorrect: false },
      
      { answerText: 'Təkərləri döndərmək', isCorrect: false },
      { answerText: '			Matoru soyutmaq', isCorrect: true  }
    ],
  },
 
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
       {/* <Link to="/">
                <img style={{maxWidth: "150px"}} src="/LOGO WHITE.png" alt="Novademy Logo" className="home-logo" />
            </Link> */}
      {showScore ? (
       <div className="score-board">
       <span className="score">Skor: {score} / {questions.length}</span>
     </div>
     
      ) : (
        <>
         <QuestionCard
  question={questions[currentQuestion].questionText}
  options={questions[currentQuestion].answerOptions}
  onAnswer={handleAnswer}
  questionNumber={currentQuestion + 1}
  totalQuestions={questions.length}
/>

       <button className="next-button" onClick={handleNextQuestion}>Sonraki</button>

        </>
      )}
    </div>
  );
}

export default Quiz;
