import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./LessonData.css";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import QuizDetails from "./QuizDetails";
import CustomModal from "../lessons/Modal";
import { Puff } from 'react-loader-spinner';
import ShowModalTwo from "./ShowModalTwo";


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
  const [isLoading, setIsLoading] = useState(false); 

  const [showModal, setShowModal] = useState(false); 
  const [showModalTwo, setShowModalTwo] = useState(false); 
  const lessonListRef = useRef(null); 
  const [isPaid, setIsPaid] = useState(false)

  useEffect(() => {
    const fetchLessonData = async () => {
      setIsLoading(true);
      try {
        const lessonsResponse = await axios.get("https://edurive.onrender.com/v1/lesson/");
        const lessonsData = lessonsResponse.data;
  
        const userId = localStorage.getItem('userId');
        const userLessonsResponse = await axios.get(`https://edurive.onrender.com/v1/user/${userId}`);
        const userPaidStatus = userLessonsResponse.data.paid;
  
        setLessons(lessonsData)
        setIsPaid(userPaidStatus);
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
  
        const anyVideoRequiresPaid = lessonsData.some(lesson =>
          lesson.subjectResponse.some(subject => subject.videoResponse.requiresPaid)
        );
  
       
        const showModalOnceKey = 'showModalOnce';
        const hasModalBeenShown = localStorage.getItem(showModalOnceKey);
  
        if (!hasModalBeenShown && !userPaidStatus && anyVideoRequiresPaid) {
          setShowModal(true);
         
          localStorage.setItem(showModalOnceKey, 'true');
        }
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
      finally {
        setIsLoading(false); 
      }
    };
  
    fetchLessonData();
  }, []);
  
  
  
  
  
  
  
  

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseModalTwo = () => {
    setShowModalTwo(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (lessonListRef.current && !lessonListRef.current.contains(event.target)) {
       
        if (!showModalTwo) {
          setShowLessons(false);
        }
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLessons, showModalTwo]); 
  

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
    const currentLesson = lessons.find((lesson) => lesson.id === openLessonId);
    if (currentLesson && currentLesson.subjectResponse.length > 0) {
      const newSelectedSubjectIndex = newPage - 1;
      setSelectedSubject(
        currentLesson.subjectResponse[newSelectedSubjectIndex]
      );
    }
  };

 

const subjectClickHandler = (subject, key) => {
  if (isPaid || key===0) {
    setSelectedSubject(subject);
    setSelectedQuiz(null);
    setPlayVideo(false);
    setShowLessons(false);
  } else {
    setShowModalTwo(true)
  }
};





  return (

    <div>
     {isLoading ? (
        <div className="loader-container">
          <Puff color="#50bb27" height={100} width={100} />
        </div>
      ) : (
   
    
    <div style={{ width: "75%", margin: "auto" }}>
      
      <div className="imageLogo">
        <Link to="/firstPageTwo">
          <img className="imageLogoFirstImage"
            src="/edurive.svg"
            alt="Novademy Logo"
            style={{ maxWidth: "250px" }}
          />
        </Link>

        <Link to="/userDetails">
          <img className="imageLogoSecondImage"
            src={`${process.env.PUBLIC_URL}/Avatar.svg`}
            alt="Clock Icon"
           
          />
        </Link>
      </div>

      <div className="lessonsContainer">
      {showLessons && <div className="overlay" onClick={() => setShowLessons(false)}></div>}
      <div
    className={`lessonList ${showLessons ? "show" : ""}`}
    style={{ display: showLessons ? "block" : "none", zIndex: "101" }}
    ref={lessonListRef} 
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
            {lessons.map((lesson, key) => (
              <div key={lesson.id}>
               <div
  className={`lessonItem ${openLessonId === lesson.id ? "active" : ""}`}
  onClick={() => toggleLesson(lesson.id)}
>
  <span className="lessonItemText">
    {lesson.lessonName || "Unnamed Lesson"}
  </span>
  <div style={{display: 'flex', alignItems: 'center'}}> 
    {isPaid || key === 0 ? (
      <img
        src={`${process.env.PUBLIC_URL}/truedone.svg`}
        alt="Correct"
        style={{
          width: "20px",
          height: "20px",
        }}
      />
    ) : (
      <img
        src={`${process.env.PUBLIC_URL}/lock.svg`}
        alt="lock"
        style={{
          width: "20px",
          height: "20px",
        }}
      />
    )}
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
    onClick={() => subjectClickHandler(subject, key)} 
  >
    <img
      src="videoimage.jpeg"
      alt="Thumbnail"
      className="smallThumbnail"
    />
    {isPaid || key === 0 ?  (
      <img
        src={`${process.env.PUBLIC_URL}/truedone.svg`}
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
        src={`${process.env.PUBLIC_URL}/lock.svg`}
        alt="lock"
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
 {openLessonId === lesson.id && (
                  <>
                    {lesson.quizResponse && (
                    <div
                    className="quizNameContainer"
                    onClick={() => {
                      
                      if (!isPaid && key !== 0) {
                        setShowModalTwo(true);
                        
                      } else {
                       
                        setSelectedQuiz(lesson.quizResponse);
                        setShowLessons(false);
                      }
                    }}
                  >

                    <div className="containerScreenQuiz">
                    <img
      src="screenquiz.png"
      alt="Thumbnail"
      className="screenQuiz"
    />

{isPaid || key === 0 ?  (
      <img
        src={`${process.env.PUBLIC_URL}/truedone.svg`}
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
        src={`${process.env.PUBLIC_URL}/lock.svg`}
        alt="lock"
        style={{
          width: "20px",
          height: "20px",
          position: "absolute",
          top: "5px",
          left: "10px",
        }}
      />
    )}
                    <h5 className="quizName">
                   

                      {lesson.quizResponse.quizName}
                    </h5>

                    </div>
                   
                  </div>
                  
                   
                    )}
                  </>
                )}

                  </div>
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
                  <Link to="/firstPageTwo"
                    style={{ color: "#1F203F", cursor: "pointer", textDecoration: "none" }}
                   
                  >
                    Əsas səhifə
                  </Link>

                  <img src={`${process.env.PUBLIC_URL}/left.svg`} alt="left" />
                  <span
                    onClick={() => resetToInitialState()}
                    style={{ color: "#1F203F", cursor: "pointer" }}
                  >
                    Kabinetim
                  </span>
                  <img className="displayOne" src={`${process.env.PUBLIC_URL}/left.svg`} alt="left" />
                  <span className="displayTwo"
                    onClick={() => resetToInitialState()}
                    style={{ color: "#1F203F", cursor: "pointer" }}
                  >
                    {selectedLessonName}
                  </span>
                  <img className="displayThree" src={`${process.env.PUBLIC_URL}/left.svg`} alt="left" />
                  <span className="displayFour"
                    // onClick={() => resetToInitialState()}
                    style={{ color: "#6E6E81", cursor: "pointer" }}
                  >
                    {selectedQuiz ? selectedQuiz.quizName : selectedSubjectName}
                  </span>
                </div>

                <img className="cabinetIcon"
                  
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
                    <video
                    key={selectedSubject.id}
                    controls
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                  >
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
      {showModal && <CustomModal onClose={handleCloseModal} />}
      {showModalTwo && <ShowModalTwo onClose={handleCloseModalTwo} />}
    </div>
    )}
    </div>
  );
};

export default LessonData;
