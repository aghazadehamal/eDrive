
import './Modal.css'; 
const CustomModal = ({ onClose }) => {
    return (
      <div className="custom-modal-overlay">
        <div className="custom-modal-content">
          <div className="custom-modal-success-icon">✓</div>
          <h2 className="custom-modal-title">Siz hal hazıra saytın free versiyasını görürsüz.</h2>
          <p className="custom-modal-text">Ödənişiniz təsdiqləndikdən sonra limitlər aradan qaldırılacaq</p>
          <button className="custom-modal-button" onClick={onClose}>Davam et</button>
        </div>
      </div>
    );
};
export default CustomModal;
