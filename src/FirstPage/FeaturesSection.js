import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <img src={icon} alt={title} className="feature-icon" />
      <div>
        <h3 className="feature-title">{title}</h3>
        <p style={{ marginTop: "10px" }} className="feature-description">
          {description}
        </p>
      </div>
    </div>
  );
};

const FeaturesSection = ({ features }) => {
  return (
    <section className="features-section">
      {features.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </section>
  );
};

export default FeaturesSection;
