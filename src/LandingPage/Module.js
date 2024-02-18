import React, { useState } from 'react';
import './Module.css'; 

const Module = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`module ${isOpen ? 'open' : ''}`}>
      <div className={`module-header ${isOpen ? 'module-header-open' : ''}`} onClick={toggleOpen}>
        <h3>Module 1a • Əsas Sürücülük Anlayışları</h3>
        <span className="module-toggle">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="module-content">
          <div className="video-counts">
            <div className="video-count">4 video</div>
            <div className="video-count">4 video</div>
            <div className="video-count">4 video</div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...</p>
        </div>
      )}
    </div>
  );
};

export default Module;
