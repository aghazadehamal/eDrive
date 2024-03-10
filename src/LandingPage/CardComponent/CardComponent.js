function CardComponent({ title, iconPath, description }) {
  return (
    <div className="info-card">
      <div className="info-icon">
        <img src={iconPath} alt={title} />
      </div>
      <div className="info-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardComponent;
