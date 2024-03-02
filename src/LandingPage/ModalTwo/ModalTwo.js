import React from 'react';
import './ModalTwo.css'; // VideoCard CSS dosyası

const ModalTwo = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modaln">
      <div className="modal-contentn">
        {children}
        <button className="close-buttonn" onClick={onClose}>Bağla</button>
      </div>
      <div className="modal-backdropn" onClick={onClose} />
    </div>
  );
};

export default ModalTwo;
