

const ShowModalTwo = ({ onClose }) => {
    return (
      <div className="custom-modal-overlay">
        <div className="custom-modal-content">
          <div> <img src={process.env.PUBLIC_URL + '/success.svg'} alt="Clock Icon"/></div>
          <span className="custom-modal-title">Qeydiyyatınız uğurla başa çatdı</span>
          {/* <p className="custom-modal-text">Ödənişiniz təsdiqləndikdən sonra limitlər aradan qaldırılacaq</p> */}
          <button className="custom-modal-button" onClick={onClose}>Davam et</button>
        </div>
      </div>
    );
};
export default ShowModalTwo;
