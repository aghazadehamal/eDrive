import React, { useState } from 'react';
import ReactPlayer from 'react-player'; 
// import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Quiz from '../FirstPage/Quiz';
import UserProfile from '../UserProfile/UserProfile';
import { Link } from 'react-router-dom';
import { lessonContents } from '../lessonContents';
import { modules } from '../modules';

import CommentSection from '../CommentSection';




const Lessonss = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeQuiz, setActiveQuiz] = useState(false); 
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);

 

  const handleNext = () => {
    const lessonCount = modules[activeModule]?.length || 0;
    if (activeLessonIndex < lessonCount - 1) {
      setActiveLessonIndex(activeLessonIndex + 1);
      setActiveLesson(modules[activeModule][activeLessonIndex + 1]);
    }
  };
  
  const handlePrevious = () => {
    if (activeLessonIndex > 0) {
      setActiveLessonIndex(activeLessonIndex - 1);
      setActiveLesson(modules[activeModule][activeLessonIndex - 1]);
    }
  };
  


  


  useEffect(() => {
    const firstModuleKey = Object.keys(modules)[0];
    setActiveModule(firstModuleKey);
    setActiveLesson(modules[firstModuleKey][0]);
    setActiveLessonIndex(0); // İlk dersin indexi
  }, []);
  

  const handleModuleClick = (module) => {
    setActiveModule(module === activeModule ? null : module);
    setActiveLesson(null);
    setActiveQuiz(false);
  };

  const handleLessonClick = (lesson) => {
    setActiveLesson(lesson === activeLesson ? null : lesson);
    setActiveQuiz(false);
  };

  const handleQuizClick = () => {
    setActiveQuiz(true);
    setActiveLesson(null);
  };
  

  return (
    <div className="container">
       
      <div className="moduleList">
      
 <Link to= "/">
      <img  src="/edurive.jpg" alt="Novademy Logo" style={{ maxWidth: '250px'}} />
      </Link>
        
{Object.keys(modules).map((module, index) => (
          <React.Fragment key={index}>
            <div onClick={() => handleModuleClick(module)} className="moduleItem">
            {module === '1' && 'DƏRS 1a – Əsas Sürücülük Anlayışları'}
            {module === '2' && 'DƏRS 1b – Sürücülük Vəsiqəsi və Xəbərdarlıq Nişanları'}
            {module === '3' && 'DƏRS 2 – Piyada və Sürücülərin Hərəkət Məsuliyyətləri'}
            {module === '4' && 'Dayanma, Durma və Parklanma Qaydaları '}
            {module === '5' && 'Dəmiryolu Keçidləri, Piyada Keçidləri və Sürücülük Təlimləri '}
            {module === '6' && ' Ötmə Qaydaları və Xüsusi Hərəkət İstiqamətləri '}
            {module === '7' && 'Yaşayış Zonalarında və Nizamlanmayan Yolayrıcılarında Hərəkət '}
            {module === '8' && 'Nasaz NV-lərin Yedəyə Alınması və Xüsusi Siqnalların Tətbiqi '}
            {module === '9' && ' Nizamlayıcı və Svetofor Siqnalları '}
            {module === '10' && 'Yüklərin Daşınması və Müvəqqəti Nişanlar '}
            {module === '11' && ' İstismar Qaydaları'}
            {module === '12' && 'Hərəkət Təhlükəsizliyinin Əsasları '}
            {module === '13' && 'Tibbi Davranış Qaydaları '}
          
            </div>
            {activeModule === module && (
              <div>
                {modules[module].map((lesson, lessonIndex) => (
                  <div key={lessonIndex} onClick={() => handleLessonClick(lesson)} className="lessonList">
                    {lesson}
                  </div>
                ))}
                <div onClick={handleQuizClick} className="lessonList">Quiz</div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="content">
        {activeLesson && (
          <div>
        <div className="navigationButtons">
  <div>
    <button className="button previousButton" onClick={handlePrevious}>Öncəki</button>
    <button className="button nextButton" onClick={handleNext}>Sonrakı</button>
  </div>
  <div>
    <UserProfile className="userProfileLink" />
    <Link to="/" className="logoutLink">Çıxış</Link>
  </div>
</div>




            <div>{lessonContents[activeLesson]?.text}</div>
            <ReactPlayer style={{marginTop:"20px"}}
              url={lessonContents[activeLesson]?.videoUrl}
              controls={true}
              width="100%"
              height="auto"
            />
          </div>
        )}
        {activeQuiz && <Quiz />}

        <p class="paragraphStyle">
        Sürücülük vəsiqəsi hər hansı şəxsin nəqliyyat vasitələrini idarə etmək hüququnu təsdiq edən sənəd. Bir qayda olaraq, sürücünün nəqliyyat vasitələrini idarə etmək bacarıqları kateqoriyalara bölünməklə göstərilir:

A1 - mühərrikinin işçi həcmi 125 kub/sm-dən və mühərrikinin gücü 11 kVt-dan çox olmayan motosikletləri idarə etmək üçün;

A - bütün növ motosikletləri idarə etmək üçün

B1 - kvadrisiklləri idarə etmək üçün

B - aşağıdakı nəqliyyat vasitələrini idarə etmək üçün

n
        </p>

     {/* <CommentSection/> */}
       
      </div>
    </div>
  );
};

export default Lessonss;
