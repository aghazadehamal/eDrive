

const ShowModalTwo = ({ onClose }) => {
    return (
      <div className="custom-modal-overlay">
        <div className="custom-modal-content">
          <div> <img style={{width:"160px", height: "160px"}} src={process.env.PUBLIC_URL + '/lock.svg'} alt="Clock Icon"/></div>
          <span className="custom-modal-title">Siz hal hazırda saytın free versiyasını görürsüz.</span>
          <p className="custom-modal-text">Ödənişiniz təsdiqləndikdən sonra limitlər aradan qaldırılacaq</p>
          <button className="custom-modal-button" onClick={onClose}>Davam et</button>
        </div>
      </div>
    );
};
export default ShowModalTwo;
