import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useHistory yerine useNavigate kullan
import ReactPlayer from 'react-player';

function CourseCard() {
    let navigate = useNavigate(); // useHistory yerine useNavigate kullan

    function handleContinue() {
        navigate("/LoginForm");
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
    url='Riyaziyyat intro.mp4'
    width='100%'
    height='100%'
    controls={true}
    playing={false}
    style={{ position: 'absolute', top: '0', left: '0' }} // Bu satırı ekleyin
  />
</div>

      <div className="course-details">
        <h3>Təlimdə Nələr Var?</h3>
        <ul>
          <li>Yol işarələri və mənaları ətraflı şəkildə öyrədiləcək.</li>
          <li>Avtomobil idarə edərkən tətbiq ediləcək təhlükəsizlik tədbirləri.</li>
          <li>Real sürüş şərtlərində tətbiq ediləcək praktik bilgilər.</li>
          <li>Qəza zamanı ilk yardım əsasları və məsuliyyətlər.</li>
          {/* Əlavə maddələr və dərs içərikləri buraya əlavə edilə bilər */}
        </ul>
      </div>
      <div className="course-purchase">
        <div className="course-price">350 AZN</div>
        <button className="continue-button" onClick={handleContinue}>Daha Çox Video Üçün Davam Et</button>
      </div>
    </div>
  );
}

export default CourseCard;
