import { Link } from "react-router-dom";
import './PasswordModalTwo.css';

const PasswordModal = ({ onClose }) => {
    return (
      <div className="custom-modal-overlay">
        <div className="custom-modal-contenttt">
          
          <div> <img src={process.env.PUBLIC_URL + '/success.svg'} alt="Success Icon"/></div>
          <span className="custom-modal-title">Şifrəniz uğurla dəyişdirildi</span>
          
        </div>
      </div>
    );
};
export default PasswordModal;
