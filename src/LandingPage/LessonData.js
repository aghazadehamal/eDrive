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
  const [selectedLessonName, setSelectedLessonName] = useState("");
  const [selectedSubjectName, setSelectedSubjectName] = useState("");

  const resetToInitialState = () => {
    setSelectedQuiz(null);
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
      setSelectedLessonName("");
      setSelectedSubjectName("");
    } else {
      setOpenLessonId(lessonId);
      setCurrentLessonIndex(index);
      setSelectedLessonName(lessons[index].lessonName);

      const firstSubjectName =
        lessons[index].subjectResponse.length > 0
          ? lessons[index].subjectResponse[0].subjectName
          : "";
      setSelectedSubjectName(firstSubjectName);
    }
  };

  useEffect(() => {
    if (selectedSubject) {
      setSelectedSubjectName(selectedSubject.subjectName);
    } else {
      setSelectedSubjectName("");
    }
  }, [selectedSubject]);

  useEffect(() => {
    const selectedLesson = lessons.find((lesson) => lesson.id === openLessonId);
    if (selectedLesson) {
      setSelectedLessonName(selectedLesson.lessonName);
    } else {
      setSelectedLessonName("Əsas sürücülük anlayışları");
    }
  }, [openLessonId, lessons]);

  const handlePageChange = (newPage) => {
    // Yeni seçilen sayfaya karşılık gelen konu (subject) bulunur
    const currentLesson = lessons[currentLessonIndex]; // Şu anki dersin indexi kullanılarak ders bulunur
    if (currentLesson && currentLesson.subjectResponse.length >= newPage) {
      const newSelectedSubject = currentLesson.subjectResponse[newPage - 1];
      if (newSelectedSubject.videoResponse.locked) {
        alert('Bu dərs kilidlidir ve erişilemez.'); // Erişim engellenir ve kullanıcı bilgilendirilir
        // İsteğe bağlı olarak ek aksiyonlar alınabilir (örneğin, sayfa değişikliğini iptal etmek)
      } else {
        // Kilidli değilse, yeni seçili konuyu ayarla
        setSelectedSubject(newSelectedSubject);
      }
    }
  };
  
  

 

const subjectClickHandler = (subject) => {
  if (!subject.videoResponse.locked) {
    setSelectedSubject(subject);
    setSelectedQuiz(null);
    setPlayVideo(false);
  } else {
  
    alert('Bu dərs kilidlidir.');
  }
};





  return (
    <div style={{ width: "75%", margin: "auto" }}>
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
            src={`${process.env.PUBLIC_URL}/Avatar.svg`}
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
              src={`${process.env.PUBLIC_URL}/CabinetX.svg`}
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
                      src={`${process.env.PUBLIC_URL}/tamam.svg`}
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
                  <img
                    src={`${process.env.PUBLIC_URL}/truedone.svg`}
                    alt="truedone"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  {openLessonId === lesson.id ? (
                    <img
                      src={process.env.PUBLIC_URL + "/asagi.svg"}
                      alt="Aşağı"
                    />
                  ) : (
                    <img
                      src={process.env.PUBLIC_URL + "/yuxari.svg"}
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
  <div
    className="subjectContainer"
    key={subject.id}
    style={{ position: "relative", cursor: "pointer" }} 
    onClick={() => subjectClickHandler(subject)} 
  >
    <img
      src="videoimage.jpeg"
      alt="Thumbnail"
      className="smallThumbnail"
    />
    {subject.videoResponse.locked ? (
      <img
        src={`${process.env.PUBLIC_URL}/false.svg`}
        alt="Correct"
        style={{
          width: "20px",
          height: "20px",
          position: "absolute",
          top: "5px",
          left: "10px",
        }}
      />
    ) : (
      <img
        src={`${process.env.PUBLIC_URL}/truedone.svg`}
        alt="Incorrect"
        style={{
          width: "20px",
          height: "20px",
          position: "absolute",
          top: "5px",
          left: "10px",
        }}
      />
    )}
    <div>
      <span className="subjectItem">
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
                      <div
                        className="quizNameContainer"
                        onClick={() => setSelectedQuiz(lesson.quizResponse)}
                      >
                        <span className="quizName">
                          {lesson.quizResponse.quizName}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="detailsContainerBig">
          {selectedSubject && (
            <>
              <div className="ContainerHomeKabinet">
                <div className="lessonNameTextHome">
                  <span
                    style={{ color: "#1F203F", cursor: "pointer" }}
                    onClick={() => resetToInitialState()}
                  >
                    Əsas səhifə
                  </span>

                  <img src={`${process.env.PUBLIC_URL}/left.svg`} alt="left" />
                  <span
                    onClick={() => resetToInitialState()}
                    style={{ color: "#1F203F", cursor: "pointer" }}
                  >
                    Kabinetim
                  </span>
                  <img src={`${process.env.PUBLIC_URL}/left.svg`} alt="left" />
                  <span
                    onClick={() => resetToInitialState()}
                    style={{ color: "#1F203F", cursor: "pointer" }}
                  >
                    {selectedLessonName}
                  </span>
                  <img src={`${process.env.PUBLIC_URL}/left.svg`} alt="left" />
                  <span
                    // onClick={() => resetToInitialState()}
                    style={{ color: "#6E6E81", cursor: "pointer" }}
                  >
                    {selectedQuiz ? selectedQuiz.quizName : selectedSubjectName}
                  </span>
                </div>

                <img
                  style={{ marginTop: "10px", cursor: "pointer" }}
                  onClick={toggleLessons}
                  src={`${process.env.PUBLIC_URL}/Cabinet.svg`}
                  alt="Cabinet"
                />
              </div>

              <div className="detailsContainerSmall">
                {selectedQuiz ? (
                  <QuizDetails quiz={selectedQuiz} />
                ) : (
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
                      <div className="video-container">
                        <img
                          src={"videoimage.jpeg"}
                          alt="Thumbnail"
                          className="video-thumbnailTwo"
                        />
                        <div className="video-overlayn">
                          <img
                            src={process.env.PUBLIC_URL + "/iconVideo.svg"}
                            alt="Play"
                            className="playIconImage"
                          />
                        </div>
                      </div>
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
                      Dərsin mövzusu
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
