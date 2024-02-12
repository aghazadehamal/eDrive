import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";



function CourseCard() {
  let navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(0); 

  const videos = [
    'v1.MOV',
    'v2.MOV',
    
    'v3.MOV' 
  ];

  function handleContinue() {
    navigate("/RegisterForm");
  }

 
  function nextVideo() {
    setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
  }


  function prevVideo() {
    setCurrentVideo((prevVideo) => (prevVideo - 1 + videos.length) % videos.length);
  }

  return (
    <div className="course-card">
      <div className="course-header">
        <h2>Yol Hərəkəti və Sürücülük Qaydaları: Əsas Sürücülük Dərsləri</h2>
        <p>Yol hərəkəti qaydalarını öyrənin və təhlükəsiz sürüş texnikaları ilə yola hazır olun.</p>
        <div className="course-rating">120 video</div>
      </div>
      <div className="course-image">
        <ReactPlayer
          className='react-player'
          url={videos[currentVideo]}
          width='100%'
          height='100%'
          controls={true}
          playing={false}
          style={{ position: 'absolute', top: '0', left: '0' }}
        />
        <button onClick={prevVideo} style={{ position: 'absolute', left: 0, top: '50%', zIndex: 10 }}><HiArrowSmLeft />
</button>
        <button onClick={nextVideo} style={{ position: 'absolute', right: 0, top: '50%', zIndex: 10 }}><HiArrowSmRight /></button>
      </div>
      <div className="course-details">
      <h3>Təlimdə Nələr Var?</h3>
        <ul>
          <li>Yol işarələri və mənaları ətraflı şəkildə öyrədiləcək.</li>
          <li>Avtomobil idarə edərkən tətbiq ediləcək təhlükəsizlik tədbirləri.</li>
          <li>Real sürüş şərtlərində tətbiq ediləcək praktik bilgilər.</li>
          <li>Qəza zamanı ilk yardım əsasları və məsuliyyətlər.</li>
         
        </ul>
      </div>
      <div className="course-purchase">
        <div className="course-price">49.99 AZN</div>
        <button className="continue-button" onClick={handleContinue}>Daha Çox Video Üçün Davam Et</button>
      </div>
    </div>
  );
}

export default CourseCard;
