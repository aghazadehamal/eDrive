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
      

      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={`${process.env.PUBLIC_URL}/icons/clock.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>1 saat 20 dəq</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: "15px" }}>
      <img src={`${process.env.PUBLIC_URL}/icons/video.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>4 video</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: "15px"  }}>
      <img src={`${process.env.PUBLIC_URL}/icons/test.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>24 test</span>
    </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...</p>
      </Accordion>
     
      <Accordion moduleTitle="Sürücülük vəsiqəsi">
      
      <div className="video-counts">
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={`${process.env.PUBLIC_URL}/icons/clock.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>1 saat 20 dəq</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: "15px" }}>
      <img src={`${process.env.PUBLIC_URL}/icons/video.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>4 video</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: "15px"  }}>
      <img src={`${process.env.PUBLIC_URL}/icons/test.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>24 test</span>
    </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...</p>
      </Accordion>
      <Accordion moduleTitle="Piyadaların vəzifələri">
      
      <div className="video-counts">
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={`${process.env.PUBLIC_URL}/icons/clock.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>1 saat 20 dəq</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: "15px" }}>
      <img src={`${process.env.PUBLIC_URL}/icons/video.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>4 video</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: "15px"  }}>
      <img src={`${process.env.PUBLIC_URL}/icons/test.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>24 test</span>
    </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...</p>
      </Accordion>
      <Accordion moduleTitle="Dayanma və durma ">
      
      <div className="video-counts">
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={`${process.env.PUBLIC_URL}/icons/clock.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>1 saat 20 dəq</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: "15px" }}>
      <img src={`${process.env.PUBLIC_URL}/icons/video.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>4 video</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: "15px"  }}>
      <img src={`${process.env.PUBLIC_URL}/icons/test.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>24 test</span>
    </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...</p>
      </Accordion>
      <Accordion moduleTitle="Dəmiryolu Keçidləri, Piyada Keçidləri və Sürücülük Təlimləri">
      
      <div className="video-counts">
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={`${process.env.PUBLIC_URL}/icons/clock.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>1 saat 20 dəq</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: "15px" }}>
      <img src={`${process.env.PUBLIC_URL}/icons/video.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>4 video</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: "15px"  }}>
      <img src={`${process.env.PUBLIC_URL}/icons/test.svg`} alt="Clock Icon" style={{ marginRight: '8px' }} />
      <span>24 test</span>
    </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...</p>
      </Accordion>
      <button className="customRegisterButton">Daha çoxu üçün qeydiyyatdan keçin</button>
    </div>
  );
};

export default CourseModulesSection;
