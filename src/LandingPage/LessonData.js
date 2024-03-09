import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LessonData.css";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import QuizDetails from "./QuizDetails";

const LessonData = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [openLessonId, setOpenLessonId] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(null);
  const [totalLessons, setTotalLessons] = useState(0);
  const [showLessons, setShowLessons] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const resetToInitialState = () => {
  // Örnek olarak, lessons'ı boş bir diziye sıfırlayabilirsiniz.
  // Gerçek uygulamanızda, sayfanın ilk yüklendiğinde hangi state'lerin
  // kullanıldığını ve bu state'lerin başlangıç değerlerini bilmeniz gerekecek.
  // setLessons([]);
  // setSelectedSubject(null);
  // setOpenLessonId(null);
  // setPlayVideo(false);
  // setCurrentLessonIndex(null);
  // setTotalLessons(0);
  // setShowLessons(false);
  // setAnimateOut(false);
  setSelectedQuiz(null);
  
  // Eğer sayfanın ilk yüklendiğinde veri çekme işlemi yapıyorsanız,
  // bu işlemi tekrar tetiklemek için ilgili fonksiyonu da burada çağırabilirsiniz.
  // Örneğin:
  // fetchLessonData(); // Sayfanın veri çekme fonksiyonunu çağır
};

  


  const handleCloseClick = () => {
    document.querySelector(".lessonList").classList.add("hide");
    setTimeout(() => {
      setShowLessons(false);
    }, 500);
  };

  const toggleLessons = () => {
    setShowLessons(!showLessons);
  };

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        const response = await axios.get(
          "https://edurive.onrender.com/v1/lesson/"
        );
        const lessonsData = response.data;
        setLessons(lessonsData);
        setTotalLessons(lessonsData.length);

        if (lessonsData.length > 0) {
          const firstLesson = lessonsData[0];
          setOpenLessonId(firstLesson.id);
          setCurrentLessonIndex(0);

          if (
            firstLesson.subjectResponse &&
            firstLesson.subjectResponse.length > 0
          ) {
            setSelectedSubject(firstLesson.subjectResponse[0]);
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
      timer = setTimeout(() => {
        setAnimateOut(false);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [showLessons, animateOut]);

  useEffect(() => {
    if (showLessons) {
      document.querySelector(".lessonList").style.display = "block";
      document.querySelector(".lessonList").classList.remove("hide");
    }
  }, [showLessons]);

  const toggleLesson = (lessonId) => {
    const index = lessons.findIndex((lesson) => lesson.id === lessonId);
    if (currentLessonIndex === index) {
      setOpenLessonId(null);
      setCurrentLessonIndex(null);
    } else {
      setOpenLessonId(lessonId);
      setCurrentLessonIndex(index);
    }
  };

  const handlePageChange = (newPage) => {
    const currentLesson = lessons.find((lesson) => lesson.id === openLessonId);
    if (currentLesson && currentLesson.subjectResponse.length > 0) {
      const newSelectedSubjectIndex = newPage - 1;
      setSelectedSubject(
        currentLesson.subjectResponse[newSelectedSubjectIndex]
      );
    }
  };

  return (
    <div style={{ width: "75%", margin: "auto", height: "140vh" }}>
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
            style={{ width: "48px", height: "48px" }}
          />
        </Link>
      </div>

      <div className="lessonsContainer">
        <div
          className={`lessonList ${showLessons ? "show" : ""}`}
          style={{ display: showLessons ? "block" : "none" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span
              style={{
                display: "block",
                textAlign: "left",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#1F203F",
                fontWeight: "700",
                marginLeft: "8px",
                marginTop: "5px",
              }}
            >
              Sürücülük dərslərimiz
            </span>
            <img
              className="lessonListCloseButton"
              onClick={handleCloseClick}
              src={`${process.env.PUBLIC_URL}/icons/CabinetX.svg`}
              alt="CabinetX"
            />
          </div>

          <div className="currentLessonDisplay">
            <span
              style={{
                marginRight: "10px",
                color: "#6E6E81",
                fontSize: "14px",
                lineHeight: "21px",
              }}
            >
              {currentLessonIndex !== null
                ? `${currentLessonIndex + 1}/${totalLessons}`
                : ""}
            </span>

            {openLessonId !== null && (
              <div className="lessonIcons">
                {Array.from({ length: currentLessonIndex + 1 }).map(
                  (_, index) => (
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/tamam.svg`}
                      alt="tamam"
                    />
                  )
                )}
              </div>
            )}
          </div>

          <div style={{ marginTop: "15px" }}>
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
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                   {lesson.subjectResponse.map((subject) => (
  <div className="subjectContainer" key={subject.id}>
    <img
      onClick={() => {
        setSelectedSubject(subject); // Seçili konuyu güncelle
        setSelectedQuiz(null);  // Aktif quiz'i sıfırla
        setPlayVideo(false); // Opsiyonel: Eğer video oynatılıyorsa, oynatmayı durdur
      }}
      src="videoimage.jpeg"
      alt="Thumbnail"
      className="smallThumbnail"
    />
    <div>
      <span
        className="subjectItem"
        onClick={() => {
          setSelectedSubject(subject); // Seçili konuyu güncelle
          setSelectedQuiz(null);  // Aktif quiz'i sıfırla
          setPlayVideo(false); // Opsiyonel: Eğer video oynatılıyorsa, oynatmayı durdur
        }}
      >
        {subject.subjectName}
      </span>
    </div>
  </div>
))}

                  </div>
                  
                )}
                 {openLessonId === lesson.id && (
    <>
       {lesson.quizResponse && (
          <div className="quizNameContainer" onClick={() => setSelectedQuiz(lesson.quizResponse)}>
            <span className="quizName">{lesson.quizResponse.quizName}</span>
          </div>
        )}
    </>
  )}
              </div>
            ))}
          </div>
        </div>
        <div className="detailsContainer">
          {selectedSubject && (
            <>
              <div className="ContainerHomeKabinet">
                <div className="lessonNameTextHome">
                <span
  style={{ color: "#1F203F", cursor: "pointer"  }}
  onClick={() => resetToInitialState()}
>
  Əsas səhifə
</span>

                  <img
                    src={`${process.env.PUBLIC_URL}/icons/left.svg`}
                    alt="left"
                  />
                  <span onClick={() => resetToInitialState()} style={{ color: "#1F203F", cursor: "pointer" }}>Kabinetim</span>
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/left.svg`}
                    alt="left"
                  />
                  <span onClick={() => resetToInitialState()} style={{ color: "#6E6E81", cursor: "pointer"  }}>
                    Əsas sürücülük anlayışları
                  </span>
                 
                </div>

                <img
                      style={{ marginTop: "10px", cursor: "pointer" }}
                      onClick={toggleLessons}
                      src={`${process.env.PUBLIC_URL}/icons/Cabinet.svg`}
                      alt="Cabinet"
                    />
               
              </div>

              <div className="detailsContainer">
  {/* Quiz seçiliyse sadece QuizDetails'i göster, değilse videoDetails içeriğini göster */}
  {selectedQuiz ? (
    // Quiz seçili ise, sadece QuizDetails bileşenini göster
    <QuizDetails quiz={selectedQuiz} />
  ) : (
    // Quiz seçili değilse, video ve ilgili detayları göster
    <div className="videoDetails" onClick={handlePlayVideo}>
       <div className="containerPaginationLessonNameText">
        <span className="lessonNameText">
            {selectedSubject.subjectName}
          </span>

                <div className="containerPaginationLogo">
                  <Pagination
                    total={5}
                    itemsPerPage={1}
                    onPageChange={handlePageChange}
                  />
                 
                </div>
              </div>
      {!playVideo && (
        <>
       
          
          <img
            src={"videoimage.jpeg"}
            alt="Thumbnail"
            className="video-thumbnailTwo"
          />
          <div className="video-overlayn">
            <img
              style={{ width: "111px", height: "111px" }}
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
            src={selectedSubject.videoResponse.url.replace(/ /g, "%20")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}
      <span
        style={{
          fontSize: "28px",
          lineHeight: "42px",
          fontWeight: "600",
          color: "#1F203F",
          display: "block",
          textAlign: "left",
          width: "100%",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        Burada sizin reklamınız ola bilərdi
      </span>
      <p className="lessonText">
        {selectedSubject.videoResponse.title}
      </p>
    </div>
  )}
</div>

             
            </>
          )}


        </div>
      </div>
    </div>
  );
};

export default LessonData;
