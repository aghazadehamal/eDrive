import React from "react";
import "./ModalTwo.css";

const ModalTwo = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <React.Fragment>
      <div className="modal-backdrop"></div>
      <div className="modaln">
        <div className="modal-header">
          <button className="close-buttonn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-contentn">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default ModalTwo;
