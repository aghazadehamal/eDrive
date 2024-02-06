// PricingCard.js
import React from 'react';
import { Link } from 'react-router-dom';


function PricingCard({ title, price, features, discountLabel, discountRate, buttonText }) {
  const hasDiscount = discountLabel && discountRate;
  return (
    <div className={`card ${hasDiscount ? 'card--featured' : ''}`}>
      {hasDiscount && (
        <div className="card__discount">
          {discountLabel}
          <span className="card__discount-rate">{discountRate}</span>
        </div>
      )}
      <div className="card__price">{price} AZN</div>
      <div className="card__title">{title}</div>
      <ul className="card__features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link to="/Home">
      <button className="card__button">{buttonText}</button>
      </Link>
    
    </div>
  );
}

export default PricingCard;
