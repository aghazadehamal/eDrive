import React, { useState } from "react";
import ReactPlayer from "react-player";
// import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Quiz from "../FirstPage/Quiz";
import UserProfile from "../UserProfile/UserProfile";
import { Link } from "react-router-dom";
import { lessonContents } from "../lessonContents";
import { modules } from "../modules";
import Modal from "./Modal";
import { useLocation } from "react-router-dom";


const Lessonss = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeQuiz, setActiveQuiz] = useState(false);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [showModal, setShowModal] = useState(false); 

  const location = useLocation();

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
    // Sayfa yüklendiğinde URL'deki sorgu parametrelerini kontrol eder
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('showModal') === 'true') {
      setShowModal(true); // Modalı göster
    }

    // Modül ve dersin başlangıç durumunu ayarlar
    const firstModuleKey = Object.keys(modules)[0];
    setActiveModule(firstModuleKey);
    setActiveLesson(modules[firstModuleKey][0]);
    setActiveLessonIndex(0);
  }, [location]);

  const handleModuleClick = (module) => {
    if (module !== activeModule) {
      setActiveModule(module);
      // Yeni modül seçildiğinde, o modülün ilk dersini aktif ders olarak ayarlayın.
      setActiveLesson(modules[module][0]);
      setActiveQuiz(false);
      setActiveLessonIndex(0); // İlk dersin index'ini ayarlayın
    }
  };
  

  const handleLessonClick = (lesson) => {
    setActiveLesson(lesson);
    setActiveQuiz(false);
  };
  
  

  const handleQuizClick = () => {
    setActiveQuiz(true);
    setActiveLesson(null);
  };

  return (
    <div className="container">
      <div className="moduleList">
        <Link to="/">
          <img
            src="/edurive.jpg"
            alt="Novademy Logo"
            style={{ maxWidth: "250px" }}
          />
        </Link>

        {Object.keys(modules).map((module, index) => (
          <React.Fragment key={index}>
            <div
              onClick={() => handleModuleClick(module)}
              className="moduleItem"
            >
              {module === "1" && "DƏRS 1a – Əsas Sürücülük Anlayışları"}
              {module === "2" &&
                "DƏRS 1b – Sürücülük Vəsiqəsi və Xəbərdarlıq Nişanları"}
              {module === "3" &&
                "DƏRS 2 – Piyada və Sürücülərin Hərəkət Məsuliyyətləri"}
              {module === "4" && "Dayanma, Durma və Parklanma Qaydaları "}
              {module === "5" &&
                "Dəmiryolu Keçidləri, Piyada Keçidləri və Sürücülük Təlimləri "}
              {module === "6" &&
                " Ötmə Qaydaları və Xüsusi Hərəkət İstiqamətləri "}
              {module === "7" &&
                "Yaşayış Zonalarında və Nizamlanmayan Yolayrıcılarında Hərəkət "}
              {module === "8" &&
                "Nasaz NV-lərin Yedəyə Alınması və Xüsusi Siqnalların Tətbiqi "}
              {module === "9" && " Nizamlayıcı və Svetofor Siqnalları "}
              {module === "10" && "Yüklərin Daşınması və Müvəqqəti Nişanlar "}
              {module === "11" && " İstismar Qaydaları"}
              {module === "12" && "Hərəkət Təhlükəsizliyinin Əsasları "}
              {module === "13" && "Tibbi Davranış Qaydaları "}
            </div>
            {activeModule === module && (
              <div>
                {modules[module].map((lesson, lessonIndex) => (
                  <div
                    key={lessonIndex}
                    onClick={() => handleLessonClick(lesson)}
                    className="lessonList"
                  >
                    {lesson}
                  </div>
                ))}
                <div onClick={handleQuizClick} className="lessonList">
                  Quiz
                </div>
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
                <button
                  className="button previousButton"
                  onClick={handlePrevious}
                >
                  Öncəki
                </button>
                <button className="button nextButton" onClick={handleNext}>
                  Sonrakı
                </button>
              </div>
              <div>
                <UserProfile className="userProfileLink" />
                <Link onClick={()=> localStorage.clear()} to="/" className="logoutLink">
                  Çıxış
                </Link>
              </div>
            </div>

           
     
            <ReactPlayer
              style={{ marginTop: "20px" }}
              url={lessonContents[activeLesson]?.videoUrl}
              controls={true}
              width="100%"
              height="auto"
            />

<div className="lessonText">
        {lessonContents[activeLesson]?.text}
      </div>
          </div>
        )}
        {activeQuiz && <Quiz />}
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Lessonss;
