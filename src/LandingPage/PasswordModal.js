import { Link } from "react-router-dom";
import './PasswordModal.css';

const PasswordModal = ({ onClose }) => {
    return (
      <div className="custom-modal-overlay">
        <div className="custom-modal-contenttt">
          <div className="modal-close-button" onClick={onClose}>X</div>
          <div> <img src={process.env.PUBLIC_URL + '/success.svg'} alt="Success Icon"/></div>
          <span className="custom-modal-title">Mesaj göndərildi</span>
          <p className="custom-modal-text">Zəhmət olmasa e-mail daxil olub mesajı təsdiq edin</p>
        </div>
      </div>
    );
};
export default PasswordModal;
