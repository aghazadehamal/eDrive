import React from 'react';

const Card = ({ image, title, videosCount, author }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{videosCount} video</p>
      <p>{author}</p>
    </div>
  );
};

export default Card;
