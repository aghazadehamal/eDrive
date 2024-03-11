import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ completed, total }) => {
  const fillerWidth = (completed / total) * 100;

  return (
    <div className="progress-bar-container">
      <span className="progress-text">{completed}/{total} bitib</span>
      <img src={`${process.env.PUBLIC_URL}/tamam.svg`} alt="tamam" className="progress-icon"/>
      <div className="progress-bar">
        <div className="progress-bar-filler" style={{ width: `${fillerWidth}%` }}></div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/priz.svg`} alt="priz" className="progress-icon"/>
    </div>
  );
};

export default ProgressBar;
