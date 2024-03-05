import React from 'react';
import './ModalTwo.css'; // VideoCard CSS dosyası

const ModalTwo = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modaln">
      <div className="modal-header">
        <button className="close-buttonn" onClick={onClose}>X</button>
      </div>
      <div className="modal-contentn">
        {children}
      </div>
      <div className="modal-backdropn" onClick={onClose} />
    </div>
  );
};


export default ModalTwo;
