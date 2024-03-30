import { Link } from "react-router-dom";
import './EditModal.css';

const EditModal = ({ onClose }) => {
    return (
      <div className="custom-modal-overlay">
        <div className="custom-modal-contenttt">
          
          <div> <img src={process.env.PUBLIC_URL + '/success.svg'} alt="Success Icon"/></div>
          <span className="custom-modal-title">Məlumatlarınız uğurla dəyişdirildi</span>
          
        </div>
      </div>
    );
};
export default EditModal;
