import { Link } from "react-router-dom";


const VerifyModal = ({ onClose }) => {
    return (
      <div className="custom-modal-overlay">
        <div className="custom-modal-content">
          <div> <img src={process.env.PUBLIC_URL + '/success.svg'} alt="Clock Icon"/></div>
          <span className="custom-modal-title">Qeydiyyatınız uğurla başa çatdı</span>
          <p className="custom-modal-text">Hal-hazırda saytın giriş bölməsinə yönləndirilirsiniz</p>
          <Link style={{textDecoration: "none"}} to="/loginForm">
          <button className="custom-modal-button" onClick={onClose}>Davam et</button>
          </Link>
          
        </div>
      </div>
    );
};
export default VerifyModal;
