import React, { useState } from 'react';
import './CourseModulesSection.css'; // İlgili CSS stil dosyası
import Module from './Module';

// Tek bir modül için accordion komponenti
const Accordion = ({ moduleTitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`customAccordion ${isOpen ? 'customOpen' : ''}`}>
      <div className="customAccordionHeader" onClick={() => setIsOpen(!isOpen)}>
        <span>{moduleTitle}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="customAccordionContent">{children}</div>}
    </div>
  );
};

// Kurs modülleri bölümü için ana komponent
const CourseModulesSection = () => {
  return (
    <div className="customCourseModulesSection">
      <span className='spanFirst' >Nələr öyrənəcəksiniz?</span>
  
      <Accordion moduleTitle=" Əsas Sürücülük Anlayışları">
      
      <div className="video-counts">
            <div className="video-count">4 video</div>
            <div className="video-count">4 video</div>
            <div className="video-count">4 video</div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...</p>
      </Accordion>
     
      <Accordion moduleTitle="Sürücülük vəsiqəsi">
      
      <div className="video-counts">
            <div className="video-count">4 video</div>
            <div className="video-count">4 video</div>
            <div className="video-count">4 video</div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...</p>
      </Accordion>
      <Accordion moduleTitle="Piyadaların vəzifələri">
      
      <div className="video-counts">
            <div className="video-count">4 video</div>
            <div className="video-count">4 video</div>
            <div className="video-count">4 video</div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...</p>
      </Accordion>
      <Accordion moduleTitle="Dayanma və durma ">
      
      <div className="video-counts">
            <div className="video-count">4 video</div>
            <div className="video-count">4 video</div>
            <div className="video-count">4 video</div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...</p>
      </Accordion>
      <Accordion moduleTitle="Dəmiryolu Keçidləri, Piyada Keçidləri və Sürücülük Təlimləri">
      
      <div className="video-counts">
            <div className="video-count">4 video</div>
            <div className="video-count">4 video</div>
            <div className="video-count">4 video</div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...</p>
      </Accordion>
      <button className="customRegisterButton">Daha çoxu üçün qeydiyyatdan keçin</button>
    </div>
  );
};

export default CourseModulesSection;
