import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LessonData.css"; // CSS dosyasını import edin
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import ProgressBar from "./ProgressBar";

const LessonData = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [openLessonId, setOpenLessonId] = useState(null); // Açık olan dersin ID'sini tutacak
  const [playVideo, setPlayVideo] = useState(false);
  // Mevcut useState çağrılarınızın altına ekleyin
const [currentLessonIndex, setCurrentLessonIndex] = useState(null);
const [totalLessons, setTotalLessons] = useState(0);
const [showLessons, setShowLessons] = useState(false);
const [animateOut, setAnimateOut] = useState(false);

const handleCloseClick = () => {
  document.querySelector('.lessonList').classList.add('hide'); // Önce gizlenme animasyonunu başlat
  setTimeout(() => {
    setShowLessons(false); // Animasyon tamamlandıktan sonra div'i gizle
  }, 500); // 500ms animasyon süresi
};


const toggleLessons = () => {
  setShowLessons(!showLessons);
};




  const handlePlayVideo = () => {
    setPlayVideo(true); // Videoyu oynat
  };

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        const response = await axios.get("https://edurive.onrender.com/v1/lesson/");
        const lessonsData = response.data;
        setLessons(lessonsData);
        setTotalLessons(lessonsData.length); // Toplam ders sayısını ayarlayın
  
        // İlk ders ve ilk konuyu otomatik olarak seç
        if (lessonsData.length > 0) {
          const firstLesson = lessonsData[0];
          setOpenLessonId(firstLesson.id); // İlk dersin ID'sini ayarla
          setCurrentLessonIndex(0); // İlk dersin index'ini ayarla
  
          if (firstLesson.subjectResponse && firstLesson.subjectResponse.length > 0) {
            setSelectedSubject(firstLesson.subjectResponse[0]); // İlk konuyu ayarla
          }
        }
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };
  
    fetchLessonData();
  }, []);

  useEffect(() => {
    let timer;
    if (!showLessons && animateOut) {
      // Animasyon süresi kadar bekleyin ve ardından animateOut'i sıfırlayın
      timer = setTimeout(() => {
        setAnimateOut(false);
      }, 500); // Animasyon sürenize uygun olarak ayarlayın
    }
  
    return () => clearTimeout(timer);
  }, [showLessons, animateOut]);
  
  useEffect(() => {
    if (showLessons) {
      document.querySelector('.lessonList').style.display = 'block';
      document.querySelector('.lessonList').classList.remove('hide');
    }
  }, [showLessons]);
  
  

  const toggleLesson = (lessonId) => {
    const index = lessons.findIndex(lesson => lesson.id === lessonId);
    if (currentLessonIndex === index) {
      setOpenLessonId(null);
      setCurrentLessonIndex(null); // Eğer zaten açıksa kapat
    } else {
      setOpenLessonId(lessonId);
      setCurrentLessonIndex(index); // Açık olan dersin index'ini ayarla
    }
  };

  const handlePageChange = (newPage) => {
    // Yeni seçilen sayfaya göre subjectName'i güncelle
    const currentLesson = lessons.find(lesson => lesson.id === openLessonId);
    if (currentLesson && currentLesson.subjectResponse.length > 0) {
      const newSelectedSubjectIndex = (newPage - 1); // Sayfalar 1'den başladığı için -1
      setSelectedSubject(currentLesson.subjectResponse[newSelectedSubjectIndex]);
    }
  };
  

  return (
    <div style={{width: "75%", margin: "auto"}}>
      <div className="imageLogo">
        <Link to="/">
          <img
            src="/edurive.svg"
            alt="Novademy Logo"
            style={{ maxWidth: "250px" }}
          />
        </Link>
      

<Link to="/profileCard">
<img
          src={`${process.env.PUBLIC_URL}/icons/Avatar.svg`}
          alt="Clock Icon"
          style={{ width: "48px", height: "48px"}}
        />
</Link>
       
        
      </div>

      {/* <hr style={{ marginTop: "15px" }}></hr> */}

      <div className="lessonsContainer">
     

      <div className={`lessonList ${showLessons ? "show" : ""}`} style={{display: showLessons ? 'block' : 'none'}}>
  
 


          {/* Ders listesinin üst kısmına veya uygun bir yere ekleyin */}
          <div className="currentLessonDisplay">
  {currentLessonIndex !== null ? `${currentLessonIndex + 1}/${totalLessons}` : ""}
  {openLessonId !== null && ( // Eğer bir lessonName açıksa, ikonu göster
    <div className="lessonIcons">
      {Array.from({ length: currentLessonIndex + 1 }).map((_, index) => (
        <img src={`${process.env.PUBLIC_URL}/icons/tamam.svg`} alt="tamam" />
      ))}
    </div>
  )}
</div>


          {/* <ProgressBar/> */}
          {/* <img style={{width: "279px"}} src="/screen.png" alt="Yukarı" /> */}

<div style={{display: "flex", justifyContent: "space-between"}}>
<span style={{display: "block", textAlign: "left", fontSize: "20px", lineHeight: "30px", color: "#1F203F", fontWeight: "700", marginLeft: "8px", marginTop: "5px"}}>Sürücülük dərslərimiz</span>
        <img className="lessonListCloseButton"  onClick={handleCloseClick} src={`${process.env.PUBLIC_URL}/icons/CabinetX.svg`} alt="CabinetX" />

</div>
       

          {lessons.map((lesson) => (
            <div key={lesson.id}>
              <div
                className={`lessonItem ${
                  openLessonId === lesson.id ? "active" : ""
                }`}
                onClick={() => toggleLesson(lesson.id)}
              >
                <span className="lessonItemText">
                  {lesson.lessonName || "Unnamed Lesson"}
                </span>
                {openLessonId === lesson.id ? (
                  <img
                    src={process.env.PUBLIC_URL + "/icons/asagi.svg"}
                    alt="Aşağı"
                  />
                ) : (
                  <img
                    src={process.env.PUBLIC_URL + "/icons/yuxari.svg"}
                    alt="Yukarı"
                  />
                )}
              </div>

              {openLessonId === lesson.id && (
                <div>
                  {lesson.subjectResponse.map((subject) => (
                    <div className="subjectContainer" key={subject.id}>
                      {" "}
                      <img src={`${process.env.PUBLIC_URL}/icons/play.svg`} alt="play" />
                      <p
                        className="subjectItem"
                        onClick={() => setSelectedSubject(subject)}
                      >
                        {subject.subjectName}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="detailsContainer">
          {selectedSubject && (
            <>
            <div className="ContainerHomeKabinet">
              <div className="lessonNameTextHome">
              <span style={{color: "#6E6E81"}}> Home/</span>
              <span style={{color: "#1F203F"}} >Kabinet</span>
             
              </div>
             
             <div style={{display: "flex", width: "100%", margin: "auto"}}>
             <span className="lessonNameText">
                {selectedSubject.subjectName}
              </span>

             <img style={{marginTop: "10px", cursor: "pointer"}} onClick={toggleLessons} src={`${process.env.PUBLIC_URL}/icons/Cabinet.svg`} alt="Cabinet" />
              <Pagination
              
  total={5}
  itemsPerPage={1}
  onPageChange={handlePageChange} // Bu fonksiyonu LessonData bileşeninde tanımlayıp buraya geçirmelisiniz
/>



             </div>

           
            </div>
             
              <div className="videoDetails" onClick={handlePlayVideo}>
                {!playVideo && (
                  <>
                    <img
                      src={"videoimage.jpeg"}
                      alt="Thumbnail"
                      className="video-thumbnailTwo"
                    />
                    <div className="video-overlayn">
                      <img style={{width: "111px", height: "111px"}}
                        src={process.env.PUBLIC_URL + "/icons/iconVideo.svg"}
                        alt="Play"
                        className="play-icon"
                      />
                    </div>
                  </>
                )}
                {playVideo && (
                  <video key={selectedSubject.id} controls>
                    <source
                      src={selectedSubject.videoResponse.url.replace(
                        / /g,
                        "%20"
                      )}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <span style={{fontSize: "28px", lineHeight: "42px", fontWeight: "600", color: "#1F203F", display: "block", textAlign: "left", width: "100%", margin: "auto", marginTop: "20px"}}>Burada sizin reklamınız ola bilərdi</span>
              <p className="lessonText">
                {selectedSubject.videoResponse.title}
              </p>
            
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonData;
