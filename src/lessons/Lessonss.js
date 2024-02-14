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
    <Link to="/logout" className="logoutLink">Çıxış</Link>
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

“A” kateqoriyasına aid edilməyən, icazə verilən maksimum kütləsi 3.500 kq-dan, oturacaq yerlərinin sayı sürücü oturacağından əlavə 8-dən artıq olmayan avtomobilləri qoşqusunun icazə verilən maksimum kütləsi 750 kq-dan artıq olmayan “B” kateqoriyasından olan avtomobilləri; qoşqusunun icazə verilən maksimal kütləsi 750 kq-dan artıq, lakin avtomobilin yüksüz kütləsindən çox olmayan və bütövlükdə belə tərkibin icazə verilən maksimum kütləsi 3500 kq-dan artıq olmayan “B” kateqoriyasından olan avtomobilləri;

C1 - “D” kateqoriyasına və "D1" altkateqoriyasına aid edilməyən, icazə verilən maksimum kütləsi 3500 kq-dan artıq, lakin 7500 kq-dan çox olmayan avtomobilləri, habelə qoşqusunun icazə verilən maksimum kütləsi 750 kq-dan artıq olmayan “C1” altkateqoriyasından olan avtomobilləri idarə etmək üçün;

C - “D” kateqoriyasına aid edilməyən, icazə verilən maksimum kütləsi 3.500 kq-dan artıq, olan avtomobilləri, habelə qoşqusunun icazə verilən maksimum kütləsi 750 kq-dan artıq olmayan “C” kateqoriyasından olan avtomobilləri idarə etmək üçün;

D1- sərnişin daşınması üçün nəzərdə tutulan və oturacaq yerlərinin sayı, sürücü oturacağından əlavə, 8-dən artıq, lakin 16-dan çox olmayan avtomobilləri, habelə qoşqusunun icazə verilən maksimum kütləsi 750 kq-dan artıq olmayan “D1” altkateqoriyasından olan avtomobilləri idarə etmək üçün;

D - sərnişin daşınması üçün nəzərdə tutulan və oturacaq yerlərinin sayı, sürücü oturacağından əlavə, 8-dən artıq olan avtomobilləri, habelə qoşqusunun icazə verilən maksimum kütləsi 750 kq-dan artıq olmayan “D” kateqoriyasından olan avtomobilləri idarə etmək üçün;

BE - qoşqusunun icazə verilən maksimum kütləsi 750 kq-dan artıq və avtomobilin yüksüz kütləsindən çox olan “B” kateqoriyasından olan avtomobilləri, habelə qoşqusunun icazə verilən maksimum kütləsi 750 kq-dan artıq olan və bütövlükdə belə tərkibin icazə verilən maksimum kütləsi 3500 kq-dan artıq olan “B” kateqoriyasından olan avtomobilləri idarə etmək üçün;

C1E - qoşqusunun icazə verilən maksimum kütləsi 750 kq-dan artıq, lakin avtomobilin yüksüz kütləsindən çox olmayan və bütövlükdə belə tərkibin icazə verilən maksimum kütləsi 12.000 kq-dan artıq olmayan “C1” altkateqoriyasından olan avtomobilləri idarə etmək üçün;

CE - qoşqusunun icazə verilən maksimum kütləsi 750 kq-dan artıq olan “C” kateqoriyasından olan avtomobilləri idarə etmək üçün;

D1E - sərnişin daşınması üçün nəzərdə tutulmayan, qoşqusunun icazə verilən maksimum kütləsi 750 kq-dan artıq olan, lakin avtomobilin yüksüz kütləsindən çox olmayan və bütövlükdə belə tərkibin icazə verilən maksimum kütləsi 12.000 kq-dan artıq olmayan “D1” altkateqoriyasından olan avtomobilləri idarə etmək üçün;

DE - qoşqusunun icazə verilən maksimum kütləsi 750 kq-dan artıq olan “D” kateqoriyasından olan avtomobilləri idarə etmək üçün;

Tramvay - tramvayları idarə etmək üçün;

Trolleybus - trolleybusları idarə etmək üçün.
        </p>

     <CommentSection/>
       
      </div>
    </div>
  );
};

export default Lessonss;
