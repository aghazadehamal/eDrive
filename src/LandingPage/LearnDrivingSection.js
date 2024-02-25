import React from 'react';
import './LearnDrivingSection.css';



const LearnDrivingSection = () => {
  return (
 
    
       
        
    
      <div className="learn-driving-content">
        <div className='learn-driving-two'>
          <div className='learn-driving-three'>
          <span>Sürücülüyü peşəkarlardan öyrən</span>
        <p>Abbaszadə Ümid 7 il ərzində sürücülük təlimində geniş təcrübə qazanıb. O, sürücülük bacarıqlarını inkişaf etdirmək istəyən hər kəs üçün mükəmməl bir seçimdir. Ümid müəllim, hər bir mövzunu vizualizasiya və ətraflı izahatla özündə birləşdirən video dərslər çəkir.</p>
          </div>
       
        <div className="learn-driving-info">
          {/* React Icons ile ikonlar */}
        <InfoItem Icon={<img src={process.env.PUBLIC_URL + '/icons/clockTwo.svg'} alt="Clock Icon" style={{ marginRight: '8px' }} />} text="Ətraflı və asan şəkildə izah edilən video dərslər." />



        <InfoItem Icon={<img src={process.env.PUBLIC_URL + '/icons/clockTwo.svg'} alt="Clock Icon" style={{ marginRight: '8px' }} />} text="Ətraflı və asan şəkildə izah edilən video dərslər." />



       <InfoItem Icon={<img src={process.env.PUBLIC_URL + '/icons/clockTwo.svg'} alt="Clock Icon" style={{ marginRight: '8px' }} />} text="Ətraflı və asan şəkildə izah edilən video dərslər." />



       <InfoItem Icon={<img src={process.env.PUBLIC_URL + '/icons/clockTwo.svg'} alt="Clock Icon" style={{ marginRight: '8px' }} />} text="Ətraflı və asan şəkildə izah edilən video dərslər." />



        </div>

        </div>
       
        <div className="learn-driving-instructor">
          {/* Eğitmenin resmi */}
          <img src="/mentor.svg" alt="Eğitmen" />
        </div>
      </div>
  
  );
}

const InfoItem = ({ Icon, text }) => {
  return (
    <div className="info-item">
      {Icon} {/* Icon, burada bir React bileşeni olarak render edilir */}
      <p>{text}</p>
    </div>
  );
}



export default LearnDrivingSection;
