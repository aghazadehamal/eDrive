import React from "react";
import cardData from "./CardData";

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

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <CardList cards={cardData} />
    </div>
  );
};

export default App;
