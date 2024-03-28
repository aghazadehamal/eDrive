import { Link } from "react-router-dom";
import './PasswordModalTwo.css';

const PasswordModalTwo = ({ onClose }) => {
    return (
      <div className="custom-modal-overlay">
        <div className="custom-modal-contentttt">
          <div className="modal-close-button" onClick={onClose}>X</div>
          <div> <img src={process.env.PUBLIC_URL + '/success.svg'} alt="Success Icon"/></div>
          <span className="custom-modal-title">Şifrəniz uğurla dəyişdirildi</span>
          {/* <button className="custom-modal-button" onClick={onClose}>Davam et</button> */}
        </div>
      </div>
    );
};
export default PasswordModalTwo;
